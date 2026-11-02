# -*- coding: utf-8 -*-
"""Patches build_test.py: adds study/payK fields + filterable Roadmaps library."""
s = open('/home/hatch/workspace/careerglitch-site/build_test.py', encoding='utf-8').read()

ADD = '''
STUDY_OVERRIDES = {"Pharmacist":5,"Psychologist / Therapist":5,"Optometrist":5,"Physical Therapist":5,
"Occupational Therapist":4,"Speech Therapist":4,"Commercial Pilot":4,"Electrician":4,"Plumber":4,
"Elevator Mechanic":4,"General Contractor":4,"Accountant (CPA track)":4,"Financial Analyst":4,
"Data Scientist / ML Engineer":4,"School Teacher":4,"Special Education Teacher":4,"School Counselor":4,
"Social Worker":4,"Nutrition Coach / Dietitian":4,"Registered Nurse":3,"Dental Hygienist":3,
"Sonographer (Ultrasound)":3,"Respiratory Therapist":3,"Radiology Tech":3,"MRI Technologist":3,
"Vet Technician":3,"HVAC Technician":3,"Aircraft Mechanic (A&P)":3,"Tattoo Artist":3,"Interior Designer":3,
"Art Director":3,"Chef":3,"Product Manager":3,"Software Developer":3,"HR Manager":4,"Lab Technician":3,
"LPN / LVN":2,"Medical Assistant":2,"Dental Assistant":2,"Surgical Technologist":2,"EMT / Paramedic":2,
"Massage Therapist":2,"Esthetician":2,"Cosmetologist / Hair Stylist":2,"Barber":2,"Welder":2,
"Auto Mechanic":2,"Diesel Mechanic":2,"Yacht Broker":2,"Boat Captain":2,"Data Analyst":2,"UX/UI Designer":2,
"Pharmacy Technician":2,"Dialysis Technician":2,"EKG Technician":2,"Sterile Processing Tech":1,
"Phlebotomist":1,"Nail Technician":1,"Lash / Brow Artist":1,"Permanent Makeup Artist":1,"Solar Installer":1,
"Home Inspector":1,"Real Estate Agent":1,"Mortgage Broker":1,"Insurance Agent":1,"Flight Attendant":1,
"CDL Truck Driver":1,"Medical Coder":2,"Paralegal":3}
PAYK_OVERRIDES = {"Software Developer":125,"Data Scientist / ML Engineer":135,"Product Manager":135,
"DevOps Engineer":130,"Cybersecurity Analyst":125,"Pharmacist":135,"Commercial Pilot":160,
"Elevator Mechanic":105,"Yacht Broker":150,"Real Estate Investor (flips)":150,"Real Estate Investor (rentals)":130,
"General Contractor":105,"Luxury Real Estate Agent":140,"B2B Sales Rep":110,"Business Consultant":120,
"Physical Therapist":100,"Optometrist":130,"Data Analyst":90,"UX/UI Designer":105,"Registered Nurse":86,
"Dental Hygienist":81,"Sonographer (Ultrasound)":89,"Mobile App Developer":125,"AI Automation Specialist":120,
"Financial Analyst":105,"Psychologist / Therapist":105,"Senior Home Care Agency Owner":110,"Self-Storage Owner":130}
STUDY_LABELS = {1:"1–6 mo",2:"6–12 mo",3:"1–2 yrs",4:"2–4 yrs",5:"4+ yrs"}
def study_default(cat, lic):
    if lic == 0: return 1
    if lic == 1: return 2
    if cat == "trades": return 4
    if cat == "health": return 3
    return 4
def enrich(n):
    name, cat, pay, lic = n[0], n[1], n[2], n[5]
    st = STUDY_OVERRIDES.get(name, study_default(cat, lic))
    pk = PAYK_OVERRIDES.get(name, {1:45, 2:75, 3:120}[pay])
    return list(n) + [st, pk]

LIB_VIEW = """<!-- ROADMAPS -->
<section class="view" id="v-roadmaps"><div class="narrow" style="max-width:920px">
<div class="kicker">The library</div>
<h1>Roadmaps</h1>
<p class="oneline">Every path in the database. Filter by what fits your life — the list updates as you tap.</p>
<div class="fgroup"><div class="flabel">Category</div><div class="frow" id="f-cat"></div></div>
<div class="fgroup"><div class="flabel">Format & pay</div><div class="frow">
  <button class="fchip" data-k="online" onclick="cgFTog('online')">💻 Online</button>
  <button class="fchip" data-k="pay" data-v="55" onclick="cgFSet('pay',55)">$50K+</button>
  <button class="fchip" data-k="pay" data-v="105" onclick="cgFSet('pay',105)">$100K+</button>
  <button class="fchip" data-k="pay" data-v="145" onclick="cgFSet('pay',145)">$150K+</button>
</div></div>
<div class="fgroup"><div class="flabel">Training time</div><div class="frow" id="f-study"></div></div>
<div class="fcount" id="libcount"></div>
<div class="libgrid" id="libgrid"></div>
</div></section>

"""

LIB_JS = r"""
<script>
const CG_STUDY = __STUDY__;
const cgF = {cat:'all', online:false, pay:0, study:0};
function cgPayTxt(k){ if (k < 55) return '$35–55K'; if (k < 100) return '$55–95K'; if (k < 140) return '$95–140K'; return '$140K+'; }
function cgBuildChips(){
  const cats = [['all','All']].concat(Object.keys(CG_CATS).map(function(k){ return [k, CG_CATS[k]]; }));
  document.getElementById('f-cat').innerHTML = cats.map(function(c){
    return '<button class="fchip' + (cgF.cat===c[0] ? ' on' : '') + '" onclick="cgFSet(\\'cat\\',\\'' + c[0] + '\\')">' + c[1] + '</button>';
  }).join('');
  document.getElementById('f-study').innerHTML = Object.keys(CG_STUDY).map(function(k){
    return '<button class="fchip' + (cgF.study===+k ? ' on' : '') + '" onclick="cgFSet(\\'study\\',' + k + ')">' + CG_STUDY[k] + '</button>';
  }).join('');
  document.querySelectorAll('#v-roadmaps .fchip[data-k]').forEach(function(b){
    const k = b.getAttribute('data-k');
    const on = (k === 'online') ? cgF.online : (cgF.pay === +b.getAttribute('data-v'));
    b.classList.toggle('on', on);
  });
}
function cgFSet(k, v){ if (k !== 'cat' && cgF[k] === v) v = (k === 'study' ? 0 : 0); cgF[k] = v; cgLib(); }
function cgFTog(k){ cgF[k] = !cgF[k]; cgLib(); }
function cgLib(){
  cgBuildChips();
  const list = CG_DATA.n.filter(function(n){
    if (cgF.cat !== 'all' && n[1] !== cgF.cat) return false;
    if (cgF.online && n[4] < 1) return false;
    if (cgF.pay && n[14] < cgF.pay) return false;
    if (cgF.study && n[13] !== cgF.study) return false;
    return true;
  });
  document.getElementById('libcount').textContent = list.length + ' of ' + CG_DATA.n.length + ' paths';
  document.getElementById('libgrid').innerHTML = list.map(function(n){
    const live = n[0].indexOf('Accountant') === 0, dental = n[0] === 'Dental Hygienist';
    const tag = live ? '<span class="tag">● Live</span>' : (dental ? '<span class="tag soon">Video coming</span>' : '<span class="tag soon">Roadmap soon</span>');
    const inner = '<div class="cap">' + tag + '<div class="t">' + n[0] + '</div><p>' + CG_CATS[n[1]] + ' · ' + cgPayTxt(n[14]) + ' · training ' + CG_STUDY[n[13]] + (n[4] === 2 ? ' · 💻 online' : (n[4] === 1 ? ' · partly online' : '')) + '</p></div>';
    return live ? '<a class="scard" href="#roadmap-accountant">' + inner + '</a>' : '<div class="scard">' + inner + '</div>';
  }).join('');
}
document.addEventListener('DOMContentLoaded', function(){ if (document.getElementById('libgrid')) cgLib(); });
</script>
"""

LIB_CSS = """.fgroup{margin-top:14px}
.flabel{font-family:'DM Mono',monospace;font-size:11.5px;letter-spacing:.13em;text-transform:uppercase;color:var(--grey);margin-bottom:7px}
.frow{display:flex;gap:7px;flex-wrap:wrap}
.fchip{font-family:'Outfit';font-weight:700;font-size:13.5px;padding:8px 14px;border-radius:999px;border:2px solid var(--ink);background:#fff;cursor:pointer;color:var(--ink)}
.fchip.on{background:var(--ink);color:#fff}
.fcount{font-family:'DM Mono',monospace;font-size:12.5px;color:var(--grey);margin:16px 0 8px}
.libgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(168px,1fr));gap:12px}
.libgrid .scard .cap{padding:12px}
"""
'''

s = s.replace('def main():', ADD + '\ndef main():', 1)

# enrich niches in data
s = s.replace('data = {"n": N, "q": Q}', 'data = {"n": [enrich(n) for n in N], "q": Q}', 1)

# replace roadmaps view in main() flow: do it right after TEST replacement block
anchor = '''    s = s[:start] + TEST_VIEW + "\\n" + s[end:]'''
assert anchor in s
s = s.replace(anchor, anchor + '''

    rstart = s.index('<!-- ROADMAPS -->')
    rend = s.index('<!-- ACCOUNTANT -->')
    s = s[:rstart] + LIB_VIEW + s[rend:]
    s = s.replace("</style>", LIB_CSS + "</style>", 1)
    libjs = LIB_JS.replace("__STUDY__", json.dumps(STUDY_LABELS))
    s = s.replace("</body>", libjs + "</body>", 1)''', 1)

open('/home/hatch/workspace/careerglitch-site/build_test.py', 'w', encoding='utf-8').write(s)
print('build_test.py patched')
