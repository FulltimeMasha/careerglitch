// api/_lib/engine/image.mjs — Muse Image (Meta Model API) client.
// ---------------------------------------------------------------------------
// Same transport discipline as llm.mjs: on hosts that hold the real key
// (META_MODEL_API_KEY in the Vercel env) we call api.meta.ai directly.
// There is no connector-helper fallback for images — without the env key
// the caller answers honestly that image generation is unavailable.
//
// Verified against the live API 04.11.2026:
//   POST https://api.meta.ai/v1/images/generations
//   { model: 'muse-image-1.0', prompt, size: '1024x1024' }
//   -> { data: [{ b64_json }], output_format: 'webp' }
// ---------------------------------------------------------------------------

export const IMAGE_MODEL = 'muse-image-1.0';

export async function metaImage({ prompt, size = '1024x1024' } = {}) {
  if (typeof prompt !== 'string' || !prompt.trim()) {
    throw new Error('metaImage: `prompt` must be a non-empty string');
  }
  const directKey = process.env.META_MODEL_API_KEY;
  if (!directKey) {
    throw new Error('metaImage: META_MODEL_API_KEY is not set on this host');
  }
  let resp;
  try {
    resp = await fetch('https://api.meta.ai/v1/images/generations', {
      method: 'POST',
      headers: { Authorization: `Bearer ${directKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: IMAGE_MODEL, prompt: prompt.slice(0, 2000), size }),
    });
  } catch (e) {
    throw new Error(`metaImage: Meta API call failed: ${e.message}`);
  }
  const rawText = await resp.text();
  let parsed = null;
  try { parsed = JSON.parse(rawText); } catch { /* handled below */ }
  if (!resp.ok || !parsed) {
    throw new Error(`metaImage: Meta API HTTP ${resp.status}: ${rawText.slice(0, 300)}`);
  }
  const item = Array.isArray(parsed.data) ? parsed.data[0] : null;
  const b64 = item && typeof item.b64_json === 'string' ? item.b64_json : '';
  if (!b64) {
    throw new Error(`metaImage: no image in API response: ${rawText.slice(0, 300)}`);
  }
  return { b64, format: typeof parsed.output_format === 'string' ? parsed.output_format : 'webp' };
}
