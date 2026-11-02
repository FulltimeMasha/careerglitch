# -*- coding: utf-8 -*-
"""Builds index.html. The Big Career Test was retired 2026-10-27; the Mentor lives at /mentor."""
import json

PAY_URL = "https://buy.stripe.com/dRm5kCdOR8aR5eU5sveEo0l"
PROMPT_URL = "https://buy.stripe.com/fZu8wO9yB9eVbDi9ILeEo0m"  # Stripe payment link for the Master Prompt ($27) — paywall activates when set

# niche: name, cat, pay(1-3), ai(0 low,1 med,2 high), remote(0-2), lic(0 none,1 cert,2 degree/license),
#        hands(0-2), people(0-2), biz(0/1), tech(0-2), out(0-2), care(0-2), creat(0-2)
N = [
 # ---- online: money & screens ----
 ("Software Developer","online",3,1,2,1,0,0,1,2,0,0,1),
 ("Data Analyst","online",2,1,2,1,0,0,0,2,0,0,0),
 ("Data Scientist / ML Engineer","online",3,1,2,2,0,0,0,2,0,0,0),
 ("UX/UI Designer","online",2,1,2,1,0,1,1,2,0,0,2),
 ("Web Designer","online",2,1,2,0,0,1,1,2,0,0,2),
 ("Product Manager","online",3,1,2,1,0,2,0,2,0,0,1),
 ("QA Engineer","online",2,1,2,1,0,0,0,2,0,0,0),
 ("DevOps Engineer","online",3,1,2,0,0,0,0,2,0,0,0),
 ("Cybersecurity Analyst","online",3,1,2,0,0,0,0,2,0,0,0),
 ("AI Automation Specialist","online",3,1,2,0,0,1,1,2,0,0,1),
 ("No-Code Developer","online",2,1,2,0,0,1,1,2,0,0,1),
 ("Mobile App Developer","online",3,1,2,0,0,0,1,2,0,0,1),
 ("IT Support Specialist","online",1,1,2,1,0,2,0,2,0,0,0),
 ("Technical Writer","online",2,2,2,1,0,0,0,1,0,0,1),
 ("Video Editor","online",2,1,2,0,0,0,1,1,0,0,2),
 ("Motion Designer / 3D Artist","online",2,1,2,0,0,0,1,1,0,0,2),
 ("Game Designer","online",2,1,2,1,0,1,0,2,0,0,2),
 ("SEO Specialist","online",2,2,2,0,0,0,1,2,0,0,1),
 ("PPC / Paid Ads Specialist","online",2,1,2,0,0,1,1,2,0,0,0),
 ("SMM Manager","online",1,1,2,0,0,1,1,2,0,0,2),
 ("Content Strategist","online",2,2,2,0,0,1,1,1,0,0,2),
 ("Copywriter","online",2,2,2,0,0,0,1,1,0,0,2),
 ("Podcast Producer","online",1,1,2,0,0,1,1,1,0,0,2),
 ("Online Tutor","online",1,1,2,0,0,2,0,1,0,2,1),
 ("Virtual Assistant","online",1,2,2,0,0,1,0,1,0,0,0),
 ("E-commerce Manager","online",2,1,2,0,0,1,1,2,0,0,1),
 ("CRM / Email Marketer","online",2,1,2,1,0,1,0,2,0,0,1),
 ("Accountant (CPA track)","online",3,1,1,2,0,1,0,1,0,0,0),
 ("Enrolled Agent (tax pro)","online",2,1,1,1,0,1,1,1,0,0,0),
 ("Bookkeeper + Advisory","online",2,2,2,1,0,1,1,1,0,0,0),
 ("Financial Analyst","online",3,1,2,0,0,1,0,2,0,0,0),
 ("Insurance Agent","online",2,1,1,1,0,2,1,0,0,0,0),
 ("Mortgage Broker","online",3,1,1,1,0,2,1,1,0,0,0),
 ("B2B Sales Rep","online",2,0,1,0,0,2,1,1,0,0,0),
 ("Recruiter","online",2,1,2,0,0,2,0,1,0,1,0),
 ("HR Specialist","online",2,1,1,0,0,2,0,1,0,1,0),
 ("Project Manager","online",3,1,2,1,0,2,0,2,0,0,0),
 ("Operations Manager","online",2,1,1,2,0,2,0,1,0,0,0),
 ("Grant Writer","online",2,1,2,0,0,1,0,1,0,1,1),
 ("Translator / Interpreter","online",1,2,2,1,0,1,0,0,0,0,1),
 ("Brand Strategist","online",2,1,2,0,0,1,1,1,0,0,2),
 ("PR Specialist","online",2,1,1,1,0,2,0,1,0,0,2),
 ("Market Researcher","online",2,1,2,1,0,0,0,2,0,0,0),
 ("Customer Success Manager","online",2,1,2,0,0,2,0,2,0,1,0),
 ("Business Consultant","online",3,0,2,2,0,2,1,1,0,0,1),
 ("Real Estate Agent","online",2,0,1,1,0,2,1,0,1,0,0),
 ("Online Course Creator","online",2,1,2,0,0,1,1,1,0,1,2),
 ("Streamer / Content Creator","online",2,0,2,0,0,2,1,2,0,0,2),
 ("UGC Creator","online",1,0,2,0,0,1,1,1,0,0,2),
 # ---- health & care (licensed) ----
 ("Dental Hygienist","health",2,0,0,2,2,2,0,1,0,2,0),
 ("Registered Nurse","health",2,0,0,2,1,2,0,1,0,2,0),
 ("LPN / LVN","health",1,0,0,2,1,2,0,0,0,2,0),
 ("Certified Nursing Assistant","health",1,0,0,1,2,2,0,0,1,2,0),
 ("Aesthetic Nurse / Nurse Injector","health",2,1,0,2,1,2,0,1,0,2,1),
 ("Med Spa Owner","business",3,1,1,1,1,2,1,1,0,1,1),
 ("Medical Assistant","health",1,0,0,1,1,2,0,1,0,2,0),
 ("Phlebotomist","health",1,0,0,1,2,2,0,0,0,1,0),
 ("Radiology Tech","health",2,0,0,1,1,2,0,2,0,1,0),
 ("Sonographer (Ultrasound)","health",2,0,0,1,2,2,0,2,0,1,0),
 ("MRI Technologist","health",2,0,0,1,1,1,0,2,0,1,0),
 ("Respiratory Therapist","health",2,0,0,2,1,2,0,1,0,2,0),
 ("Physical Therapist","health",3,0,0,2,2,2,1,0,0,2,0),
 ("PT Assistant","health",1,0,0,1,2,2,0,0,0,2,0),
 ("Occupational Therapist","health",2,0,0,2,2,2,0,0,0,2,1),
 ("Speech Therapist","health",2,0,0,2,1,2,0,0,0,2,1),
 ("Massage Therapist","health",1,0,0,1,2,1,1,0,0,2,0),
 ("Esthetician","beauty",1,0,0,1,2,2,1,0,0,1,1),
 ("Dental Assistant","health",1,0,0,1,2,2,0,1,0,1,0),
 ("Vet Technician","health",1,0,0,1,2,2,0,0,0,1,0),
 ("Pharmacist","health",3,0,0,2,0,1,0,1,0,1,0),
 ("Pharmacy Technician","health",1,0,0,1,1,2,0,1,0,1,0),
 ("Surgical Technologist","health",2,0,0,1,2,1,0,1,0,1,0),
 ("EMT / Paramedic","health",1,0,0,2,2,2,0,0,1,2,0),
 ("Lab Technician","health",1,0,0,1,1,0,0,2,0,0,0),
 ("Dialysis Technician","health",1,0,0,1,1,2,0,1,0,2,0),
 ("Home Health Aide","health",1,0,0,0,1,2,0,0,0,2,0),
 ("Doula","health",1,0,0,0,1,2,1,0,0,2,1),
 ("Optometrist","health",3,0,0,2,1,1,1,1,0,1,0),
 ("Nutrition Coach / Dietitian","health",2,1,2,2,0,2,1,1,0,2,1),
 ("Medical Coder","online",1,2,2,1,0,0,0,2,0,0,0),
 ("Sterile Processing Tech","health",1,0,0,1,2,0,0,1,0,0,0),
 ("EKG Technician","health",1,0,0,1,1,2,0,1,0,1,0),
 # ---- trades & hands ----
 ("Electrician","trades",2,0,0,2,2,1,1,1,1,0,0),
 ("Plumber","trades",2,0,0,2,2,1,1,0,1,0,0),
 ("HVAC Technician","trades",2,0,0,1,2,1,1,1,1,0,0),
 ("Carpenter","trades",2,0,0,0,2,1,1,0,1,0,1),
 ("House Painter","trades",1,0,0,0,2,1,1,0,1,0,1),
 ("Drywall Finisher","trades",1,0,0,0,2,0,0,0,1,0,0),
 ("Tile Setter","trades",2,0,0,0,2,1,1,0,0,0,1),
 ("Roofer","trades",1,0,0,0,2,1,0,0,2,0,0),
 ("Welder","trades",2,0,0,1,2,0,0,1,1,0,0),
 ("Auto Mechanic","trades",2,0,0,1,2,1,1,1,0,0,0),
 ("Diesel Mechanic","trades",2,0,0,1,2,0,0,1,1,0,0),
 ("Locksmith","trades",1,0,0,1,2,1,1,0,1,0,0),
 ("Appliance Repair Tech","trades",2,0,0,0,2,1,1,1,1,0,0),
 ("Elevator Mechanic","trades",3,0,0,2,2,0,0,1,1,0,0),
 ("Solar Installer","trades",2,0,0,1,2,1,0,0,2,0,0),
 ("Landscaper / Lawn Pro","trades",1,0,0,0,2,1,1,0,2,0,1),
 ("Pool Technician","trades",1,0,0,0,2,1,1,0,2,0,0),
 ("Pest Control Tech","trades",1,0,0,1,2,1,0,0,2,0,0),
 ("Home Inspector","trades",2,0,0,1,1,1,1,1,1,0,0),
 ("General Contractor","trades",3,0,0,1,2,2,1,1,1,0,0),
 ("Flooring Installer","trades",2,0,0,0,2,1,1,0,0,0,1),
 ("Garage Door Tech","trades",2,0,0,0,2,1,1,0,1,0,0),
 ("Arborist / Tree Pro","trades",2,0,1,0,2,0,0,0,2,0,0),
 ("Concrete Finisher","trades",1,0,0,0,2,0,0,0,2,0,0),
 ("Glazier (glass)","trades",2,0,0,1,2,0,0,0,1,0,0),
 ("Handyman (solo pro)","trades",2,0,0,0,2,2,1,0,1,0,0),
 ("Cabinet Maker","trades",2,0,0,0,2,1,1,0,0,0,2),
 ("Furniture Restorer","trades",1,0,0,0,2,1,1,0,0,0,2),
 ("Boat Mechanic / Marine Tech","trades",2,0,0,1,2,1,1,0,1,0,0),
 ("Aircraft Mechanic (A&P)","trades",2,0,0,2,2,0,0,1,1,0,0),
 # ---- creative & media ----
 ("Photographer","creative",1,0,1,0,1,2,1,0,1,0,2),
 ("Wedding Photographer","creative",2,0,1,0,1,2,1,0,1,1,2),
 ("Videographer","creative",2,0,1,0,1,2,1,1,1,0,2),
 ("Graphic Designer","creative",1,1,2,0,0,1,1,2,0,0,2),
 ("Illustrator","creative",1,1,2,0,0,0,1,1,0,0,2),
 ("Tattoo Artist","creative",2,0,0,1,2,2,1,0,0,1,2),
 ("Florist","creative",1,0,0,0,2,2,1,0,0,1,2),
 ("Interior Designer","creative",2,0,1,1,1,2,1,1,0,0,2),
 ("Home Stager","creative",2,0,1,0,1,2,1,0,0,0,2),
 ("Event Planner","creative",2,0,1,0,0,2,1,0,1,1,2),
 ("Wedding Planner","creative",2,0,1,0,0,2,1,0,1,1,2),
 ("DJ / Event Host","creative",1,0,1,0,1,2,1,0,0,1,2),
 ("Voice Actor","creative",2,0,2,0,0,1,1,1,0,0,2),
 ("Animator","creative",2,1,2,0,0,0,1,2,0,0,2),
 ("Makeup Artist","beauty",1,0,0,0,2,2,1,0,0,1,2),
 ("Personal / Fashion Stylist","beauty",2,0,1,0,1,2,1,0,0,1,2),
 ("Art Director","creative",3,1,1,2,0,2,0,1,0,0,2),
 ("Set / Production Designer","creative",2,0,0,1,2,1,0,0,1,0,2),
 ("Music Instructor","people",1,0,1,1,1,2,1,0,0,1,2),
 ("Jewelry Maker","creative",1,0,1,0,2,1,1,0,0,0,2),
 # ---- beauty & wellness ----
 ("Cosmetologist / Hair Stylist","beauty",1,0,0,1,2,2,1,0,0,1,2),
 ("Barber","beauty",1,0,0,1,2,2,1,0,0,1,1),
 ("Nail Technician","beauty",1,0,0,1,2,2,1,0,0,1,2),
 ("Lash / Brow Artist","beauty",1,0,0,1,2,2,1,0,0,1,2),
 ("Permanent Makeup Artist","beauty",2,0,0,1,2,1,1,0,0,1,2),
 ("Beauty Salon Owner","beauty",2,0,0,1,1,2,1,0,0,1,2),
 ("Fitness Trainer","people",1,0,0,0,2,2,1,0,1,2,0),
 ("Yoga / Pilates Instructor","people",1,0,0,0,1,2,1,0,0,2,1),
 ("Wellness Coach","people",1,1,2,0,0,2,1,0,0,2,1),
 ("Spa Owner","beauty",2,0,0,1,1,2,1,0,0,2,1),
 # ---- food ----
 ("Chef","food",2,0,0,1,2,1,0,0,0,1,1),
 ("Baker","food",1,0,0,1,2,1,1,0,0,1,2),
 ("Private Chef","food",2,0,0,0,1,2,1,0,0,1,1),
 ("Caterer","food",2,0,0,1,2,2,1,0,1,1,1),
 ("Food Truck Owner","food",2,0,0,1,2,2,1,0,1,1,1),
 ("Bakery / Café Owner","food",2,0,0,1,2,2,1,0,0,1,1),
 ("Barista (craft coffee)","food",1,0,0,0,1,2,0,0,0,1,1),
 ("Butcher","food",1,0,0,1,2,0,0,0,0,0,0),
 ("Restaurant Manager","food",2,0,0,1,1,2,0,0,0,1,0),
 ("Meal-Prep Business Owner","food",2,0,0,0,2,2,1,0,0,1,1),
 ("Chocolatier / Candy Maker","food",1,0,0,0,2,1,1,0,0,0,2),
 ("Farmers Market Producer","food",1,0,1,0,2,2,1,0,2,0,1),
 ("Sommelier","food",2,0,0,1,1,2,0,0,0,1,1),
 # ---- people: education & care ----
 ("School Teacher","people",1,0,0,2,1,2,0,0,0,2,1),
 ("Preschool Teacher","people",1,0,0,1,1,2,0,0,0,2,1),
 ("Special Education Teacher","people",2,0,0,2,1,2,0,0,0,2,1),
 ("School Counselor","people",2,0,0,2,0,2,0,0,0,2,0),
 ("Private Tutor (in person)","people",1,0,1,0,1,2,1,0,0,2,1),
 ("Childcare Center Owner","people",2,0,0,1,1,2,1,0,0,2,1),
 ("ABA Therapist (kids)","people",1,0,0,1,1,2,0,0,0,2,0),
 ("Social Worker","people",1,0,0,2,0,2,0,0,0,2,0),
 ("Psychologist / Therapist","people",3,0,1,2,1,2,0,0,0,2,0),
 ("Life Coach","people",2,0,2,0,0,2,1,0,0,2,1),
 ("Dance Instructor","people",1,0,0,0,2,2,1,0,0,1,2),
 ("Swim Instructor","people",1,0,0,1,2,2,1,0,1,2,0),
 ("Driving Instructor","people",1,0,0,1,1,2,0,0,1,1,0),
 ("Corporate Trainer","people",2,1,1,1,0,2,0,1,0,1,0),
 ("Sports Coach","people",1,0,0,0,2,2,1,0,2,1,1),
 ("Speech / Public Speaking Coach","people",2,0,2,0,0,2,1,0,0,1,2),
 ("Nanny / Family Assistant (pro)","people",1,0,0,0,1,2,0,0,0,2,0),
 ("Elder Care Companion (pro)","people",1,0,0,0,1,2,0,0,0,2,0),
 # ---- transport & logistics ----
 ("CDL Truck Driver","transport",2,0,0,1,0,0,0,0,2,0,0),
 ("Owner-Operator Trucking","transport",3,0,0,0,0,1,1,0,2,0,0),
 ("Commercial Pilot","transport",3,0,0,2,0,0,0,1,2,0,0),
 ("Flight Attendant","transport",1,0,0,1,0,2,0,0,2,1,0),
 ("Boat Captain","transport",2,0,1,1,2,2,1,0,2,1,0),
 ("Yacht Broker","transport",3,0,1,1,0,2,1,0,1,0,1),
 ("Dispatcher (trucking)","transport",1,1,2,0,0,2,0,2,1,0,0),
 ("Logistics Coordinator","transport",2,1,1,0,0,1,0,2,1,0,0),
 ("Moving Company Owner","transport",2,0,0,0,2,2,1,0,1,0,0),
 ("Tow Truck Operator","transport",1,0,0,0,2,1,1,0,2,0,0),
 ("Medical Courier (owner route)","transport",1,0,1,0,1,1,1,0,2,0,0),
 ("Auto Detailing (mobile/owner)","transport",2,0,0,0,2,2,1,0,1,0,1),
 # ---- service businesses (owner) ----
 ("Cleaning Company Owner","business",2,0,0,0,2,2,1,0,0,1,0),
 ("Handyman Company Owner","business",2,0,0,0,2,2,1,0,1,0,0),
 ("Painting Company Owner","business",2,0,0,0,2,2,1,0,1,0,1),
 ("Lawn Care Company Owner","business",2,0,0,0,2,1,1,0,2,0,0),
 ("Pressure Washing Owner","business",2,0,0,0,2,2,1,0,2,0,0),
 ("Window Cleaning Owner","business",1,0,0,0,2,2,1,0,2,0,0),
 ("Junk Removal Owner","business",2,0,0,0,2,2,1,0,1,0,0),
 ("Home Organizer (pro)","business",1,0,1,0,1,2,1,0,0,1,1),
 ("Property Manager","business",2,1,1,1,0,2,0,1,0,0,0),
 ("Insurance Claims Adjuster","business",2,2,1,1,0,1,1,1,0,0,0),
 ("Administrative Assistant","business",1,2,1,0,0,1,0,1,0,0,0),
 ("Executive Assistant","business",2,1,1,0,0,2,1,1,0,0,0),
 ("Loan Officer","business",2,1,1,1,0,2,1,1,0,0,0),
 ("Airbnb Co-host / STR Manager","business",2,1,2,0,0,2,1,1,0,0,1),
 ("Laundromat Owner","business",2,0,1,0,0,0,1,0,0,0,0),
 ("Pet Grooming Salon Owner","business",2,0,0,1,2,2,1,0,0,1,1),
 ("Dog Trainer","business",2,0,1,0,2,2,1,0,1,1,1),
 ("Pet Boarding / Daycare Owner","business",2,0,0,0,1,2,1,0,1,1,0),
 ("Mobile Pet Groomer","business",2,0,1,0,2,2,1,0,1,1,1),
 ("Mobile Mechanic (owner)","business",2,0,0,0,2,2,1,1,1,0,0),
 ("Vending / ATM Route Owner","business",1,0,1,0,1,0,1,0,1,0,0),
 ("Self-Storage Owner","business",3,0,1,0,0,0,1,0,1,0,0),
 ("Senior Home Care Agency Owner","business",3,0,0,1,0,2,1,0,0,2,0),
 ("Tutoring Center Owner","business",2,0,0,1,0,2,1,0,0,2,0),
 ("Photo Booth / Event Rentals Owner","business",2,0,1,0,1,2,1,0,1,1,1),
 ("Resale / Flipping Business","business",2,0,2,0,1,1,1,1,0,0,1),
 ("Etsy / Digital Products Seller","business",1,1,2,0,0,1,1,2,0,0,2),
 ("Print-on-Demand Seller","business",1,1,2,0,0,0,1,2,0,0,2),
 ("Amazon FBA Seller","business",2,1,2,0,0,1,1,2,0,0,0),
 ("Real Estate Investor (flips)","business",3,0,1,0,1,1,1,1,1,0,0),
 ("Real Estate Investor (rentals)","business",3,0,1,0,0,0,1,1,1,0,0),
 ("Boat Restoration / Flipping","business",2,0,0,0,2,2,1,0,1,0,1),
 ("Car Flipping","business",2,0,0,0,2,1,1,1,1,0,0),
 ("Franchise Owner (home services)","business",2,0,0,1,1,2,1,0,1,0,0),
 ("Wind Turbine Technician","trades",2,0,0,1,2,0,1,1,2,0,0),
 ("Robotics Technician","trades",2,0,0,1,2,0,1,1,1,0,0),
 ("EV Charging Technician","trades",2,0,0,1,2,1,1,1,1,0,0),
 ("Fiber Optic Technician","trades",2,0,0,1,2,0,1,1,1,0,0),
 ("Semiconductor Technician","trades",2,0,0,0,2,0,1,1,0,0,0),
 ("Tower Climber (telecom)","trades",2,0,0,1,2,0,0,0,2,0,0),
 ("Land Surveyor","trades",2,0,0,2,1,1,1,1,2,0,0),
 ("Heavy Equipment Operator","trades",2,0,0,1,2,0,0,0,2,0,0),
 ("Crane Operator","trades",2,0,0,2,2,0,0,0,1,0,0),
 ("Pipefitter","trades",2,0,0,2,2,0,0,0,1,0,0),
 ("Drone Pilot (commercial)","transport",2,0,1,1,1,2,1,0,2,0,1),
 ("Air Traffic Controller","transport",3,0,0,2,0,2,0,1,0,0,0),
 ("Bus Driver","transport",1,0,0,1,1,2,0,0,1,0,0),
 ("Train Conductor","transport",2,0,0,1,1,2,0,0,2,0,0),
 ("Nurse Practitioner","health",3,0,0,2,1,2,0,1,0,2,0),
 ("Physician Assistant","health",3,0,0,2,1,2,0,1,0,2,0),
 ("Cardiovascular Technologist","health",2,0,0,1,2,2,0,2,0,1,0),
 ("Nuclear Medicine Technologist","health",2,0,0,1,1,1,0,2,0,1,0),
 ("Radiation Therapist","health",2,0,0,2,2,2,0,1,0,2,0),
 ("Audiologist","health",3,0,0,2,1,2,1,1,0,2,0),
 ("Genetic Counselor","health",2,0,1,2,0,2,0,1,0,2,0),
 ("Clinical Research Coordinator","health",2,1,1,0,0,1,0,1,0,1,0),
 ("Veterinary Assistant","health",1,0,0,0,2,2,0,0,0,1,0),
 ("Data Engineer","online",3,1,2,0,0,0,0,2,0,0,0),
 ("Cloud Architect","online",3,1,2,0,0,1,0,2,0,0,0),
 ("Penetration Tester","online",3,1,2,0,0,0,0,2,0,0,1),
 ("Salesforce Administrator","online",2,1,2,1,0,1,0,2,0,0,0),
 ("UX Researcher","online",2,1,2,1,0,2,0,1,0,1,1),
 ("Paralegal","online",2,1,1,1,0,1,0,1,0,0,0),
 ("Actuary","online",3,1,2,2,0,0,0,2,0,0,0),
 ("Nuclear Reactor Operator","trades",3,0,0,2,1,0,0,2,0,0,0),
 ("Commercial Insurance Producer","business",2,1,1,1,0,2,1,1,0,0,0),
 # ---- day 2 expansion (24.10.2026) ----
 ("Computer Network Architect","online",3,1,2,1,0,0,0,2,0,0,0),
 ("Database Administrator / Architect","online",3,1,2,1,0,0,0,2,0,0,0),
 ("Computer Systems Analyst","online",3,1,2,2,0,1,0,2,0,0,0),
 ("GIS Specialist / Cartographer","online",2,1,2,1,0,0,0,2,1,0,1),
 ("Certified Anesthesiologist Assistant","health",3,0,0,2,1,2,0,1,0,2,0),
 ("Cardiovascular Perfusionist","health",3,0,0,2,2,1,0,2,0,2,0),
 ("Medical Dosimetrist","health",3,0,1,1,1,1,0,2,0,1,0),
 ("Orthotist / Prosthetist","health",2,0,0,2,2,2,0,1,0,2,1),
 ("Athletic Trainer","health",2,0,0,2,2,2,0,0,0,2,0),
 ("Biomedical Equipment Technician (BMET)","health",2,0,0,1,2,1,0,2,0,1,0),
 ("Millwright","trades",2,0,0,1,2,0,0,1,1,0,0),
 ("Structural Ironworker","trades",2,0,0,1,2,1,0,0,2,0,0),
 ("Brick Mason","trades",2,0,0,0,2,1,1,0,2,0,1),
 ("Sheet Metal Worker","trades",2,0,0,1,2,0,0,1,1,0,1),
 ("Water / Wastewater Treatment Operator","trades",2,0,0,1,1,0,0,1,1,0,0),
 ("Lineworker (power lines)","trades",2,0,0,1,2,0,0,1,2,0,0),
 ("Sound Engineering Technician","creative",2,1,1,0,1,1,1,2,0,0,2),
 ("Fashion Designer","creative",2,1,1,2,1,1,1,1,0,0,2),
 ("Electrologist","beauty",1,0,0,2,2,2,1,1,0,1,0),
 ("Food Scientist / Technologist","food",2,1,1,2,1,0,0,2,0,0,1),
 ("Brewer / Brewmaster","food",1,0,0,0,2,1,1,1,0,0,1),
 ("Substance Abuse Counselor","people",2,0,1,2,0,2,0,0,0,2,0),
 ("Firefighter","people",2,0,0,1,2,2,0,0,2,2,0),
 ("Funeral Director","people",2,0,0,2,1,2,1,0,0,2,0),
 ("Emergency Management Director","people",2,1,1,2,0,2,0,1,1,1,0),
 ("Aircraft Dispatcher (FAA)","transport",2,1,0,1,0,1,0,2,0,0,0),
 ("Ship Engineer (Merchant Marine)","transport",3,0,0,2,2,1,0,2,2,0,0),
 ("Insurance Underwriter","business",2,1,2,1,0,1,0,1,0,0,0),
 ("Real Estate Appraiser","business",2,0,1,2,0,1,1,1,1,0,0),
 ("Construction Estimator","business",2,1,1,1,0,1,1,2,1,0,0),
 # ---- day 3 expansion (25.10.2026) ----
 ("Network and Computer Systems Administrator","online",3,1,1,1,0,0,0,2,0,0,0),
 ("Robotics Engineer","online",3,1,1,2,1,0,0,2,0,0,1),
 ("Computer Hardware Engineer","online",3,1,1,2,1,0,0,2,0,0,1),
 ("Instructional Designer","online",2,1,2,2,0,1,0,2,0,0,1),
 ("Veterinarian","health",3,0,0,2,2,2,1,1,0,1,0),
 ("Dentist","health",3,0,0,2,2,2,1,1,0,1,1),
 ("Chiropractor","health",2,0,0,2,2,2,1,0,0,2,0),
 ("Epidemiologist","health",2,1,1,2,0,0,0,2,0,1,0),
 ("Psychiatrist","health",3,0,1,2,1,2,0,1,0,2,0),
 ("Sleep Technologist","health",2,0,0,1,2,2,0,2,0,1,0),
 ("Boilermaker","trades",2,0,0,1,2,1,0,1,1,0,0),
 ("Commercial Diver","trades",2,0,0,1,2,1,0,1,2,0,0),
 ("Water Well Driller","trades",2,0,0,1,2,1,1,1,2,0,0),
 ("Septic System Installer","trades",1,0,0,1,2,1,1,0,2,0,0),
 ("Civil Engineer","trades",3,1,1,2,1,1,0,2,1,0,1),
 ("Landscape Architect","creative",2,1,1,2,0,1,1,1,1,0,2),
 ("Commercial / Industrial Designer","creative",2,1,1,2,1,1,1,2,0,0,2),
 ("Choreographer","creative",2,0,0,0,2,2,1,0,0,0,2),
 ("Body Piercing Artist","beauty",1,0,0,1,2,2,1,0,0,1,2),
 ("Laser Hair Removal Technician","beauty",1,0,0,1,2,2,0,1,0,1,0),
 ("Coffee Roaster","food",1,0,0,0,2,1,1,1,0,0,1),
 ("Winemaker / Enologist","food",2,0,0,2,2,1,1,1,2,0,1),
 ("Police Officer","people",2,0,0,1,2,2,0,0,2,1,0),
 ("Private Investigator","people",1,1,1,1,0,1,1,2,2,0,0),
 ("Librarian","people",2,1,0,2,0,2,0,2,0,1,1),
 ("Community Health Worker","people",1,1,1,1,0,2,0,0,1,2,0),
 ("Locomotive Engineer","transport",2,0,0,2,1,1,0,1,2,0,0),
 ("Delivery Driver (light truck)","transport",1,1,0,0,1,1,1,0,2,0,0),
 ("Personal Financial Advisor","business",3,1,1,2,0,2,1,1,0,0,0),
 ("Compliance Officer","business",2,1,1,2,0,1,0,1,0,0,0),
 # ---- day 4 expansion (26.10.2026) ----
 ("Computer and Information Research Scientist","online",3,1,2,2,0,0,0,2,0,0,1),
 ("Site Reliability Engineer","online",3,1,2,1,0,0,0,2,0,0,0),
 ("Health Informatics Specialist","online",2,1,2,1,0,1,0,2,0,1,0),
 ("Digital Forensics Analyst","online",3,1,1,1,0,0,0,2,0,0,0),
 ("Certified Registered Nurse Anesthetist (CRNA)","health",3,0,0,2,2,2,0,1,0,2,0),
 ("Family Physician","health",3,1,0,2,1,2,0,1,0,2,0),
 ("Podiatrist","health",3,0,0,2,2,2,1,1,0,2,0),
 ("Recreational Therapist","health",2,0,0,1,1,2,0,0,1,2,1),
 ("Histotechnologist","health",2,0,0,1,2,0,0,2,0,1,0),
 ("Hazardous Materials Removal Worker","trades",1,0,0,1,2,0,0,1,2,0,0),
 ("Security and Fire Alarm Systems Installer","trades",2,0,0,1,2,1,1,2,1,0,0),
 ("Plasterer and Stucco Mason","trades",2,0,0,0,2,1,1,0,1,0,1),
 ("Reinforcing Iron and Rebar Worker","trades",2,0,0,1,2,0,0,0,2,0,0),
 ("Farm Equipment Mechanic","trades",1,0,0,1,2,1,1,2,1,0,0),
 ("Urban and Regional Planner","creative",2,1,1,2,0,2,0,1,1,0,1),
 ("Museum Curator","creative",2,1,0,2,1,1,0,1,0,0,2),
 ("Film / Stage Lighting Technician","creative",2,0,0,0,2,1,1,2,1,0,2),
 ("Hair Replacement / Wig Specialist","beauty",2,0,0,1,2,2,1,0,0,1,2),
 ("Reflexologist","beauty",1,0,0,1,2,2,1,0,0,2,0),
 ("Farm / Ranch Manager","food",2,1,0,0,2,1,1,1,2,0,0),
 ("Food Safety Inspector","food",2,0,0,1,1,1,0,1,1,1,0),
 ("Marriage and Family Therapist","people",2,0,1,2,0,2,1,0,0,2,0),
 ("Rehabilitation Counselor","people",1,0,1,2,0,2,0,0,0,2,0),
 ("Probation Officer","people",2,1,0,2,0,2,0,1,1,2,0),
 ("Mediator / Arbitrator","people",2,1,1,1,0,2,1,0,0,1,0),
 ("Helicopter Pilot","transport",3,0,0,2,1,1,0,1,2,0,0),
 ("Harbor Pilot","transport",3,0,0,2,2,1,0,1,2,0,0),
 ("Transportation Inspector","transport",2,1,0,1,1,1,0,2,2,0,0),
 ("Car Wash Owner","business",2,0,1,0,1,1,1,0,1,0,0),
 ("Gym / Fitness Studio Owner","business",2,0,0,1,1,2,1,0,0,2,0),
 # ---- day 5 expansion (27.10.2026) ----
 ('Mechanical Engineer', 'online', 3, 1, 1, 2, 1, 0, 0, 2, 0, 0, 1),
 ('Electrical Engineer', 'online', 3, 1, 1, 2, 1, 0, 0, 2, 0, 0, 1),
 ('Platform Engineer', 'online', 3, 1, 2, 1, 0, 0, 0, 2, 0, 0, 0),
 ('Embedded Systems Engineer', 'online', 3, 1, 1, 2, 1, 0, 0, 2, 0, 0, 1),
 ('General Surgeon', 'health', 3, 0, 0, 2, 2, 2, 0, 1, 0, 2, 0),
 ('Certified Nurse-Midwife', 'health', 3, 0, 0, 2, 1, 2, 0, 1, 0, 2, 0),
 ('Medical Laboratory Scientist', 'health', 2, 1, 0, 2, 2, 0, 0, 2, 0, 1, 0),
 ('Board Certified Behavior Analyst (BCBA)', 'health', 2, 0, 0, 2, 0, 2, 0, 1, 0, 2, 0),
 ('Data Center Technician', 'trades', 2, 1, 0, 1, 2, 0, 0, 2, 0, 0, 0),
 ('CNC Machinist / Programmer', 'trades', 2, 1, 0, 1, 2, 0, 0, 2, 0, 0, 1),
 ('Avionics Technician', 'trades', 2, 0, 0, 1, 2, 0, 0, 2, 0, 0, 0),
 ('Power Plant Operator', 'trades', 3, 1, 0, 1, 1, 0, 0, 2, 1, 0, 0),
 ('Telecommunications Equipment Installer', 'trades', 2, 0, 0, 1, 2, 1, 1, 2, 2, 0, 0),
 ('Costume Designer', 'creative', 2, 1, 1, 2, 1, 1, 1, 0, 0, 0, 2),
 ('Lighting Designer', 'creative', 2, 1, 1, 1, 1, 1, 1, 2, 0, 0, 2),
 ('Audio-Video Equipment Technician', 'creative', 2, 1, 0, 0, 2, 1, 1, 2, 1, 0, 1),
 ('Paramedical Tattoo Artist', 'beauty', 2, 0, 0, 1, 2, 2, 1, 0, 0, 2, 2),
 ('Scalp Micropigmentation Artist', 'beauty', 2, 0, 0, 1, 2, 2, 1, 0, 0, 0, 2),
 ('Food Stylist', 'food', 2, 1, 1, 0, 2, 1, 1, 1, 0, 0, 2),
 ('Distiller', 'food', 2, 0, 0, 1, 2, 1, 1, 1, 1, 0, 1),
 ('Vertical Farm Technician', 'food', 1, 1, 0, 1, 2, 0, 0, 2, 0, 1, 0),
 ('School Psychologist', 'people', 2, 1, 0, 2, 0, 2, 0, 1, 0, 2, 0),
 ('ESL / Adult Literacy Teacher', 'people', 2, 1, 1, 2, 0, 2, 0, 0, 0, 1, 0),
 ('Career and Technical Education Teacher', 'people', 2, 0, 0, 2, 1, 2, 0, 1, 0, 1, 1),
 ('Child Life Specialist', 'people', 2, 0, 0, 1, 1, 2, 0, 0, 0, 2, 0),
 ('Customs Broker', 'transport', 2, 1, 1, 2, 0, 1, 0, 2, 0, 0, 0),
 ('Freight Broker / Agent', 'transport', 2, 1, 2, 1, 0, 2, 1, 2, 0, 0, 0),
 ('Subway / Streetcar Operator', 'transport', 2, 0, 0, 1, 1, 2, 0, 1, 2, 0, 0),
 ('Business Broker', 'business', 3, 1, 1, 1, 0, 2, 1, 1, 1, 0, 0),
 ('Medical & Health Services Manager', 'business', 3, 1, 1, 0, 0, 2, 0, 2, 0, 1, 0),
 # ---- sync with live professions.json (28.10 datapass additions, were missing in N) ----
 ('Building Inspector', 'trades', 2, 0, 0, 1, 1, 2, 0, 1, 2, 0, 0),
 ('CAD Drafter', 'trades', 2, 1, 1, 0, 1, 1, 0, 2, 1, 0, 1),
 ('Civil Engineering Technician', 'trades', 2, 1, 0, 1, 2, 1, 0, 2, 2, 0, 0),
 ('Customer Service Representative', 'people', 1, 2, 2, 0, 0, 2, 0, 1, 0, 1, 0),
 ('Medical Secretary', 'health', 1, 1, 0, 1, 0, 2, 0, 1, 0, 1, 0),
 # ---- day 6 expansion (29.10.2026, prepared only — branch daily-professions) ----
 ('ERP Consultant (SAP)', 'online', 3, 1, 2, 1, 0, 1, 0, 2, 0, 0, 0),
 ('ServiceNow Developer', 'online', 3, 1, 2, 1, 0, 0, 0, 2, 0, 0, 1),
 ('Bioinformatics Scientist', 'online', 3, 1, 2, 2, 0, 0, 0, 2, 0, 1, 0),
 ('AI Implementation Consultant', 'online', 3, 1, 2, 0, 0, 1, 1, 2, 0, 0, 1),
 ('Cytotechnologist', 'health', 2, 0, 0, 2, 1, 1, 0, 1, 0, 1, 0),
 ('Dental Laboratory Technician', 'health', 1, 0, 0, 1, 2, 1, 0, 1, 0, 0, 1),
 ('Surgical First Assistant', 'health', 2, 0, 0, 2, 2, 2, 0, 1, 0, 2, 0),
 ('Neurodiagnostic Technologist', 'health', 2, 0, 0, 1, 1, 2, 0, 2, 0, 1, 0),
 ('Ophthalmic Technician', 'health', 1, 0, 0, 1, 1, 2, 0, 1, 0, 2, 0),
 ('Substation Technician', 'trades', 2, 0, 0, 1, 2, 1, 0, 2, 2, 0, 0),
 ('Battery Energy Storage Technician', 'trades', 2, 1, 0, 1, 2, 1, 0, 2, 2, 0, 0),
 ('Fire Sprinkler Installer', 'trades', 2, 0, 0, 1, 2, 2, 0, 1, 2, 0, 0),
 ('Insulation Installer', 'trades', 1, 0, 0, 0, 2, 1, 0, 0, 2, 0, 0),
 ('Horizontal Directional Drill Operator', 'trades', 2, 0, 0, 1, 2, 1, 0, 1, 2, 0, 0),
 ('Additive Manufacturing Technician', 'trades', 2, 1, 1, 1, 2, 0, 0, 2, 1, 0, 1),
 ('Art Conservator', 'creative', 2, 0, 1, 2, 1, 0, 0, 1, 0, 1, 2),
 ('Sign Fabricator', 'creative', 1, 0, 0, 0, 2, 1, 0, 1, 1, 0, 2),
 ('Trichologist', 'beauty', 2, 0, 1, 1, 1, 2, 0, 1, 0, 2, 1),
 ('Permanent Jewelry Artist', 'beauty', 1, 0, 0, 1, 2, 2, 1, 0, 0, 0, 2),
 ('Beekeeper / Apiary Operator', 'food', 1, 0, 0, 0, 2, 1, 1, 0, 2, 0, 1),
 ('Food Quality Assurance Technician', 'food', 1, 1, 0, 1, 1, 1, 0, 2, 0, 1, 0),
 ('Victim Advocate', 'people', 1, 0, 1, 1, 0, 2, 0, 0, 0, 2, 1),
 ('Orientation and Mobility Specialist', 'people', 2, 0, 0, 2, 0, 2, 0, 1, 1, 2, 0),
 ('Sign Language Interpreter (ASL)', 'people', 2, 1, 1, 2, 0, 2, 0, 1, 0, 1, 1),
 ('Court Reporter', 'people', 2, 1, 1, 2, 0, 1, 0, 2, 0, 0, 0),
 ('Marine Surveyor', 'transport', 2, 0, 1, 1, 1, 2, 1, 1, 2, 0, 0),
 ('Railroad Signal Maintainer', 'transport', 2, 0, 0, 1, 2, 1, 0, 2, 2, 0, 0),
 ('Railcar Mechanic', 'transport', 2, 0, 0, 1, 2, 1, 0, 1, 2, 0, 0),
 ('Payroll Specialist', 'business', 2, 1, 2, 1, 0, 1, 0, 2, 0, 0, 0),
 ('Home Energy Auditor', 'business', 2, 1, 1, 1, 2, 1, 1, 1, 2, 0, 0),
 # ---- day 7 expansion (30.10.2026, prepared only — branch daily-professions) ----
 ('Operations Research Analyst', 'online', 3, 1, 2, 2, 0, 1, 0, 2, 0, 0, 0),
 ('MLOps Engineer', 'online', 3, 1, 2, 1, 0, 1, 0, 2, 0, 0, 1),
 ('Blockchain Developer', 'online', 3, 1, 2, 0, 0, 0, 1, 2, 0, 0, 1),
 ('Salesforce Developer', 'online', 3, 1, 2, 1, 0, 1, 0, 2, 0, 0, 1),
 ('Anesthesiologist', 'health', 3, 0, 0, 2, 2, 2, 0, 1, 0, 2, 0),
 ('Radiologist', 'health', 3, 1, 1, 2, 1, 1, 0, 2, 0, 2, 0),
 ('Dermatologist', 'health', 3, 1, 0, 2, 2, 2, 1, 1, 0, 2, 0),
 ('Exercise Physiologist', 'health', 2, 0, 0, 1, 2, 2, 0, 1, 0, 2, 0),
 ('Medical Physicist', 'health', 3, 1, 1, 2, 1, 1, 0, 2, 0, 1, 0),
 ('Tool and Die Maker', 'trades', 2, 1, 0, 1, 2, 0, 0, 2, 0, 0, 1),
 ('Rigger', 'trades', 2, 0, 0, 1, 2, 1, 0, 1, 2, 0, 0),
 ('Geothermal Installer', 'trades', 2, 0, 0, 1, 2, 1, 1, 1, 2, 0, 0),
 ('Irrigation Technician', 'trades', 1, 0, 0, 1, 2, 1, 1, 1, 2, 0, 0),
 ('Stonemason', 'trades', 2, 0, 0, 0, 2, 1, 1, 0, 2, 0, 1),
 ('Archivist', 'creative', 2, 1, 1, 2, 1, 1, 0, 1, 0, 0, 1),
 ('Exhibit Designer', 'creative', 2, 1, 1, 2, 1, 1, 0, 2, 0, 0, 2),
 ('Medical Illustrator', 'creative', 2, 1, 2, 2, 1, 1, 1, 2, 0, 1, 2),
 ('Perfumer', 'beauty', 2, 0, 0, 1, 2, 1, 1, 1, 0, 0, 2),
 ('Mortuary Cosmetologist', 'beauty', 1, 0, 0, 1, 2, 1, 0, 0, 0, 2, 2),
 ('Fishmonger', 'food', 1, 0, 0, 1, 2, 2, 1, 0, 1, 0, 1),
 ('Fermentation Specialist', 'food', 2, 1, 0, 1, 2, 0, 1, 2, 0, 0, 1),
 ('Academic Advisor', 'people', 2, 1, 1, 2, 0, 2, 0, 1, 0, 1, 0),
 ('School Principal', 'people', 3, 1, 0, 2, 0, 2, 0, 1, 0, 2, 0),
 ('Patient Navigator', 'people', 1, 1, 1, 1, 0, 2, 0, 1, 0, 2, 0),
 ('Health Education Specialist', 'people', 2, 1, 1, 1, 0, 2, 0, 1, 1, 2, 1),
 ('Tugboat Captain', 'transport', 3, 0, 0, 2, 2, 1, 0, 1, 2, 0, 0),
 ('Marina Manager', 'transport', 2, 0, 0, 1, 1, 2, 1, 1, 2, 0, 0),
 ('Able Seaman / Deckhand', 'transport', 1, 0, 0, 1, 2, 1, 0, 0, 2, 0, 0),
 ('Franchise Broker', 'business', 3, 1, 2, 1, 0, 2, 1, 1, 0, 0, 0),
 ('Liquor Store Owner', 'business', 2, 0, 0, 2, 1, 2, 1, 0, 0, 0, 0),
]

# Questions: (text, [(option, {dim:delta}) x4]) dims: R remote, H hands, P people, C creative,
# M money priority, S study willingness, B business/risk, T tech, O outdoors, CARE care
Q = [
 ("Where do you want to work from?", [("From home, laptop, my own hours",{"R":2}),("A mix — home and out with people",{"R":1,"P":1}),("A workplace with a team",{"P":1,"R":-1}),("Out in the world — sites, homes, streets",{"R":-1,"O":1,"H":1})]),
 ("Your hands during the workday?", [("On a keyboard, mostly",{"H":-1,"T":1}),("Half screen, half real things",{"H":1}),("Building, fixing, touching real things",{"H":2}),("On people — care, beauty, treatment",{"H":2,"CARE":1})]),
 ("How much people-contact can you handle daily?", [("Almost none, please",{"P":-2}),("Some — calls and messages",{"P":0}),("A lot — clients all day",{"P":2}),("People are the whole point for me",{"P":2,"CARE":1})]),
 ("Pick a free Saturday:", [("Making something beautiful",{"C":2}),("Fixing something broken",{"H":1,"C":1}),("Helping a friend through a hard week",{"CARE":2}),("Planning how to make more money",{"M":1,"B":1})]),
 ("What matters more?", [("Top income, whatever it takes",{"M":2}),("Stability and predictability",{"M":0,"B":-1}),("Freedom of schedule",{"B":1,"R":1}),("Work that feels meaningful",{"CARE":1})]),
 ("How long are you honestly willing to study for a new career?", [("Weeks. I need income fast",{"S":-2}),("A few months of courses",{"S":0}),("1–2 years if the payoff is real",{"S":1}),("Even a degree / license path is fine",{"S":2})]),
 ("Exams and licenses?", [("No way",{"S":-1}),("A short certificate — ok",{"S":0}),("A real license exam — ok if it pays",{"S":1}),("Licenses protect income. I like that",{"S":1,"M":1})]),
 ("Your reaction to AI taking over routine work?", [("Scares me — I want hands-on, human work",{"H":1,"CARE":1}),("I want to be the one USING the AI tools",{"T":2}),("I want work AI can't reach — licensed, physical",{"S":1,"H":1}),("Don't care, as long as it pays",{"M":1})]),
 ("Technology in your life:", [("I live in apps and gadgets",{"T":2}),("I learn tools when I need them",{"T":1}),("Basic user level",{"T":0}),("Tech honestly annoys me",{"T":-2,"H":1})]),
 ("Numbers and money-math?", [("Love spreadsheets and figures",{"M":1,"T":1}),("Fine with numbers",{"M":0}),("Only if someone shows me how",{}),("Numbers make me sleepy",{"M":-1,"C":1})]),
 ("Being on your feet all day?", [("Yes — sitting kills me",{"H":1,"O":1}),("Half and half",{"H":0}),("Prefer to sit",{"H":-1}),("Desk only, thanks",{"H":-2,"R":1})]),
 ("Outdoors at work?", [("Yes! Sun and air",{"O":2}),("Sometimes is nice",{"O":1}),("Only if the money is great",{"O":0,"M":1}),("Indoors, climate-controlled",{"O":-2})]),
 ("Blood, bodies, medical stuff?", [("Fine — even interesting",{"CARE":1,"S":1}),("Beauty/body care yes, medical no",{"CARE":1,"C":1}),("Mild stuff only",{"CARE":0}),("Absolutely not",{"CARE":-2})]),
 ("Helping people feel better — as the job itself?", [("That's my calling",{"CARE":2}),("Nice bonus, not the core",{"CARE":1}),("Neutral",{}),("I'd rather make things than fix people",{"CARE":-1,"C":1})]),
 ("Kids around at work?", [("Love it",{"CARE":1,"P":1}),("Ok in small doses",{"CARE":0}),("Prefer adults",{"P":0}),("No kids, please",{"CARE":-1})]),
 ("Animals?", [("Dream job includes animals",{"CARE":1,"O":1}),("Like them, not a must",{"CARE":0}),("Neutral",{}),("Not my thing",{"CARE":-1})]),
 ("Selling — pitching, closing deals?", [("I enjoy it, it's a game",{"B":1,"P":1,"M":1}),("Ok if I believe in the product",{"P":1}),("Only soft — recommendations",{"P":0}),("Never. No sales",{"B":-1,"P":-1})]),
 ("Your own business someday?", [("Yes — that's the whole point",{"B":2}),("Maybe, if it's simple and proven",{"B":1}),("Only freelancing myself, no team",{"B":0,"R":1}),("No — give me a salary and peace",{"B":-2})]),
 ("Risk with money?", [("I'd invest in my own thing",{"B":2,"M":1}),("Small calculated risks",{"B":1}),("Very careful",{"B":-1}),("Zero risk. Ever",{"B":-2})]),
 ("Routine or variety?", [("Routine. Same tasks, mastered",{"C":-1}),("Mostly routine, some surprises",{}),("Variety every day",{"C":1,"H":1}),("Chaos is my fuel",{"C":1,"B":1})]),
 ("Details or big picture?", [("Details — precision is my thing",{"T":1}),("Depends on the task",{}),("Big picture, strategy",{"B":1,"P":1}),("I see patterns and people",{"CARE":1,"C":1})]),
 ("Paperwork and documents?", [("Fine, I'm organized",{"T":0,"S":1}),("Tolerable in small doses",{}),("Hate it",{"S":-1}),("Only if a system does it for me",{"T":1})]),
 ("Learning new software?", [("Fast and fun",{"T":2}),("I get there",{"T":1}),("Slow, need hand-holding",{"T":-1}),("Avoid if possible",{"T":-2})]),
 ("Managing other people?", [("Yes — I naturally lead",{"B":1,"P":1}),("A small team, ok",{"P":1}),("Prefer to work solo",{"P":-1}),("Never manage anyone",{"P":-2,"B":-1})]),
 ("Being on camera / public?", [("Love it — sign me up",{"C":1,"P":1}),("Ok if it grows income",{"M":1,"C":1}),("Rather stay behind the scenes",{"P":-1}),("Hard no",{"C":-1,"P":-1})]),
 ("What did you enjoy most at past jobs or school?", [("Making things look good",{"C":2}),("Solving technical puzzles",{"T":2}),("When people thanked me",{"CARE":2}),("When the numbers added up",{"M":1,"T":1})]),
 ("Physical strength and getting dirty?", [("Bring it on",{"H":2,"O":1}),("Moderate is fine",{"H":1}),("Light physical only",{"H":0}),("Clean and light, please",{"H":-2})]),
 ("Standing in one spot doing fine precise work?", [("Yes — nails, lashes, watches, teeth",{"H":1}),("Sometimes",{"H":0}),("I need to move",{"O":1,"H":1}),("No patience for tiny work",{"C":-1})]),
 ("Driving as part of work?", [("Love the road",{"O":2}),("Fine",{"O":1}),("Short trips only",{"O":0}),("Rather stay in one place",{"O":-1})]),
 ("Schedule you want:", [("Classic 9–5 weekdays",{"B":-1}),("Flexible, I choose",{"R":1,"B":1}),("Evenings/weekends pay better? In",{"M":1}),("Project-based bursts",{"B":1,"C":1})]),
 ("Income floor you actually need:", [("$40K+ is enough to start",{"M":-1}),("$60–80K realistic target",{"M":0}),("$100K+ or it's not worth switching",{"M":2}),("Sky is the limit — equity, business, scale",{"M":2,"B":1})]),
 ("How fast must the money come?", [("Within weeks",{"S":-2,"M":1}),("3–6 months",{"S":0}),("A year of building is ok",{"S":1}),("Long game — years, big payoff",{"S":2,"B":1})]),
 ("Starting budget for a new path?", [("$0 — only free paths",{"B":-1,"S":-1}),("Up to ~$2K for courses/tools",{"S":0}),("$5–20K if it clearly pays back",{"B":1,"S":1}),("$20K+ for the right business",{"B":2,"M":1})]),
 ("Teaching or explaining to others?", [("Natural teacher",{"CARE":1,"P":2}),("Sometimes",{"P":1}),("Only 1-on-1",{"P":0}),("Not my gift",{"P":-1})]),
 ("Stress tolerance?", [("I shine under pressure",{"B":1,"M":1}),("Normal stress ok",{}),("Prefer calm work",{"CARE":0,"C":0}),("Low stress is a must",{"H":-1})]),
 ("Responsibility for someone's health or safety?", [("Ready — with proper training",{"CARE":2,"S":1}),("Light responsibility ok",{"CARE":1}),("Rather not",{"CARE":-1}),("No way",{"CARE":-2})]),
 ("Homes, interiors, real spaces?", [("Obsessed — I notice every room",{"C":1,"H":1}),("Like nice spaces",{"C":1}),("Neutral",{}),("Don't care about spaces",{"C":-1})]),
 ("Food as a career?", [("Cooking/baking is my happy place",{"C":1,"H":1}),("Food business, not the kitchen",{"B":1}),("I just like eating it",{}),("Kitchen work? No",{"H":-1})]),
 ("Beauty and style?", [("My world — hair, skin, nails, fashion",{"C":2,"CARE":1}),("I enjoy it personally",{"C":1}),("Not really",{"C":-1}),("Zero interest",{"C":-2})]),
 ("Machines, cars, engines?", [("I love how things work",{"T":1,"H":1}),("Curious",{"H":1}),("Only as a user",{"T":0}),("Boring to me",{"T":-1,"H":-1})]),
 ("Working with your hands AND your head (diagnose → fix)?", [("Perfect combo for me",{"H":2,"T":1}),("Mostly hands",{"H":2}),("Mostly head",{"T":1,"H":-1}),("Neither — people and words",{"P":1})]),
 ("Clients' homes / job sites vs one fixed workplace?", [("New place every day — love it",{"O":1,"H":1}),("A few regular places",{"O":0}),("One workplace, my setup",{"R":-1}),("My home is my workplace",{"R":2})]),
 ("Languages and words — writing, talking, translating?", [("Words are my strength",{"C":1,"P":1}),("Talking yes, writing meh",{"P":1}),("Rather show than tell",{"H":1}),("Minimal words, please",{"P":-1})]),
 ("Social media as a job tool?", [("I'd build my brand on it",{"C":1,"B":1}),("Use it, don't love it",{"C":0}),("Only consume, not create",{"C":-1}),("Avoid",{"C":-1,"P":-1})]),
 ("Night shifts / early mornings?", [("Fine if it pays",{"M":1}),("Early bird",{"O":1}),("Standard days only",{}),("My sleep is sacred",{"M":-1})]),
 ("Solo deep-focus work for hours?", [("Bliss",{"P":-2,"T":1}),("Good in doses",{"P":-1}),("I get lonely — need people",{"P":2}),("Impossible for me",{"P":1,"H":1})]),
 ("If money were equal, you'd pick:", [("The licensed profession",{"S":2,"M":1}),("The online skill",{"R":2,"T":1}),("The hands-on trade",{"H":2}),("My own small business",{"B":2})]),
 ("Your friends say you're the one who…", [("Fixes everything",{"H":1,"T":1}),("Makes everything prettier",{"C":2}),("Listens and helps",{"CARE":2}),("Has a plan and gets things done",{"B":1,"P":1})]),
 ("Diagnosing problems — 'why is this broken / stuck?'", [("My favorite game — people or machines",{"T":1,"H":1}),("Machines yes, people no",{"H":1,"T":1,"P":-1}),("People yes — I read them fast",{"CARE":1,"P":1}),("I'd rather build new than fix old",{"C":1,"B":1})]),
 ("Final one — your 2027 headline:", [("“Licensed, booked out, raising prices”",{"S":1,"M":1}),("“Works from anywhere, laptop income”",{"R":2,"T":1}),("“Owns a small business that runs without panic”",{"B":2}),("“Does work she actually loves”",{"C":1,"CARE":1})]),
]

CATS = {"online":"💻 Money & screens","health":"🩺 Health & care","trades":"🔧 Trades & hands",
        "creative":"🎨 Creative & media","beauty":"💄 Beauty & wellness","food":"🍳 Food",
        "people":"👩‍🏫 People & teaching","transport":"🚚 Transport & water","business":"🚀 Own business"}
STEPS = {"online":"First step: pick ONE portfolio skill project this week — the roadmap for your match shows the exact sequence.",
 "health":"First step: check your state's license board + 2 accredited programs near you — the roadmap lists them in order.",
 "trades":"First step: find the local apprenticeship / pre-apprenticeship intake dates — they open a few times a year.",
 "creative":"First step: one portfolio piece this week, published — the roadmap shows what clients actually hire from.",
 "beauty":"First step: compare 2 licensed schools by hours + cost in your state — license first, clients second.",
 "food":"First step: price your signature product for 10 test customers — the roadmap covers permits and margins.",
 "people":"First step: list the exact credential your state requires — most people over-study the wrong thing.",
 "transport":"First step: check the license class you need and one local school/employer who trains — don't pay before you check.",
 "business":"First step: validate with 5 paying strangers before logos, LLCs or equipment — the roadmap has the script."}
PAY = {1:"$35–55K typical", 2:"$55–95K typical", 3:"$95K+ typical"}
AIR = {0:"AI risk: low — hands, license or trust protect you", 1:"AI risk: medium — AI helps, humans decide", 2:"AI risk: higher — win by niching + personal brand"}
LIC = {0:"No license needed", 1:"Certificate path", 2:"Degree / state license"}

ENGINE = r"""
<script>
let CG_DATA = {q: [], n: []};
window.__cgDataReady = fetch("/professions.json").then(function(r){ return r.json(); }).then(function(d){ CG_DATA = d; if (window.cgLib) cgLib(); try { if (!window.__cgRestored && new URLSearchParams(location.search).get("paid") === "1" && localStorage.getItem("cg_paid") === "1") { var saved = JSON.parse(localStorage.getItem("cg_ans") || "[]"); if (saved.length === CG_DATA.q.length) { window.__cgRestored = 1; cgAns = saved; cgIdx = saved.length; setTimeout(cgResults, 350); } } } catch(e) {} });
const CG_PAY_URL = "__PAYURL__";
const CG_CATS = __CATS__, CG_STEPS = __STEPS__, CG_PAY = __PAY__, CG_AIR = __AIR__, CG_LIC = __LIC__;
let cgIdx = 0, cgAns = [];
function cgStart(){ if (!CG_DATA.q.length) { window.__cgDataReady.then(function(){ cgStart(); }); return; } cgIdx = 0; cgAns = []; try { localStorage.removeItem('cg_ans'); } catch(e) {} cgRender(); document.getElementById('testbox').scrollIntoView({behavior:'smooth'}); }
function cgRender(){
  const box = document.getElementById('testbox');
  if (cgIdx >= CG_DATA.q.length) return cgResults();
  const q = CG_DATA.q[cgIdx];
  let h = '<div class="qbar"><div style="width:' + Math.round(cgIdx/CG_DATA.q.length*100) + '%"></div></div>';
  h += '<div class="qcount">Question ' + (cgIdx+1) + ' of ' + CG_DATA.q.length + '</div>';
  h += '<div class="qtext">' + q[0] + '</div>';
  q[1].forEach(function(o, i){ h += '<button class="optbtn" onclick="cgPick(' + i + ')">' + o[0] + '</button>'; });
  if (cgIdx > 0) h += '<button class="backlink" onclick="cgBack()">← Back</button>';
  box.innerHTML = h;
}
function cgPick(i){ cgAns[cgIdx] = CG_DATA.q[cgIdx][1][i][1]; cgIdx++; cgRender(); }
function cgBack(){ cgIdx--; cgRender(); }
function cgPref(dim){ let s = 0; cgAns.forEach(function(a){ if (a && a[dim]) s += a[dim]; }); return Math.max(0, Math.min(2, 1 + s/4)); }
function cgScore(n){
  const dims = ['R','H','P','C','T','O','CARE'];
  const w = {R:1.2, H:1.2, P:0.9, C:0.9, T:0.8, O:0.7, CARE:0.9};
  const tgt = {R:n[4], H:n[6], P:n[7], C:n[12], T:n[9], O:n[10], CARE:n[11]};
  const prefs = {}; dims.forEach(function(d){ prefs[d] = cgPref(d); });
  const um = dims.reduce(function(a,d){ return a + prefs[d]; }, 0) / dims.length;
  const nm = dims.reduce(function(a,d){ return a + tgt[d]; }, 0) / dims.length;
  let dist = 0;
  dims.forEach(function(d){ dist += w[d] * Math.abs((prefs[d] - um) - (tgt[d] - nm)); });
  let sc = 100 - dist * 11;
  dims.forEach(function(d){ const p = prefs[d]; if ((p <= 0.4 || p >= 1.6) && Math.abs(p - tgt[d]) <= 0.5) sc += 3; });
  const study = cgPref('S');
  if (n[5] > study + 0.4) sc -= (n[5] - study) * 9;
  const need = cgPref('M');
  if (need > 1.4 && n[2] === 1) sc -= 14;
  if (need > 1.7 && n[2] === 2) sc -= 12;
  const biz = cgPref('B');
  if (biz >= 1.5 && n[8] === 0) sc -= 8;
  if (biz <= 0.4 && n[8] === 1) sc -= 8;
  return sc;
}
function cgWhy(n){
  const dims = [['R', n[4], 'Work-from-anywhere friendly'], ['H', n[6], 'Hands-on, real-world work'],
    ['P', n[7], 'People and clients at the center'], ['C', n[12], 'Room to create, not just repeat'],
    ['CARE', n[11], 'Helping people is built into the job'], ['T', n[9], 'Tech and tools are part of the craft']];
  const good = dims.filter(function(d){ return Math.abs(cgPref(d[0]) - d[1]) <= 0.6 && d[1] >= 1; })
                   .sort(function(a,b){ return Math.abs(cgPref(a[0])-a[1]) - Math.abs(cgPref(b[0])-b[1]); }).slice(0,2);
  return good.map(function(d){ return d[2]; });
}
function cgResults(){
  const box = document.getElementById('testbox');
  try { localStorage.setItem('cg_ans', JSON.stringify(cgAns)); } catch(e) {}
  const paid = (function(){ try { return localStorage.getItem('cg_paid') === '1'; } catch(e) { return false; } })();
  if (CG_PAY_URL && !paid) {
    box.innerHTML = '<div class="qtext">Your matches are ready 🔒</div>'
      + '<p class="oneline">50 answers in. Your top 3 professions are calculated and waiting.</p>'
      + '<div class="rescard"><div class="resname">Unlock your results — $5</div>'
      + '<div class="rescat">Top 3 professions · fit scores · pay bands · AI-risk notes · your honest first steps · plus the one path to avoid.</div></div>'
      + '<a class="btn ink" href="' + CG_PAY_URL + '">Unlock my results — $5</a>'
      + '<p class="note">Secure checkout by Stripe. You will be sent straight back here — your results open automatically.</p>';
    box.scrollIntoView({behavior:'smooth'});
    return;
  }
  const scored = CG_DATA.n.map(function(n){ return [cgScore(n), n]; }).sort(function(a,b){ return b[0]-a[0]; });
  const top = scored.slice(0,3), worst = scored[scored.length-1];
  let h = '<div class="qtext">Your top 3 matches</div><p class="oneline">Matched against ' + CG_DATA.n.length + ' career paths. Bands are rough US medians — your personal roadmap has exact numbers by state.</p>';
  top.forEach(function(pair, i){
    const n = pair[1], fit = Math.max(51, Math.min(98, Math.round(pair[0])));
    const why = cgWhy(n);
    h += '<div class="rescard"><div class="resfit">' + fit + '% fit</div><div class="resname">#' + (i+1) + ' · ' + n[0] + '</div>'
      + '<div class="rescat">' + CG_CATS[n[1]] + ' · ' + CG_PAY[n[2]] + ' · ' + CG_LIC[n[5]] + '</div>'
      + '<div class="resai">' + CG_AIR[n[3]] + '</div>'
      + (why.length ? '<div class="reswhy"><b>Why you:</b> ' + why.join(' · ') + '</div>' : '')
      + '<div class="resstep">' + CG_STEPS[n[1]] + '</div></div>';
  });
  h += '<div class="rescard" style="border-color:var(--line)"><div class="resname" style="color:var(--grey)">Probably NOT you: ' + worst[1][0] + '</div><div class="rescat">Your answers point the opposite way — useful to know.</div></div>';
  h += '<a class="btn pink" href="#prompt" style="margin-top:6px">Turn my result into a step-by-step plan →</a> '
     + '<button class="btn ghost" onclick="cgStart()">Retake</button>';
  box.innerHTML = h;
  box.scrollIntoView({behavior:'smooth'});
}
document.addEventListener('DOMContentLoaded', function(){
  try {
    if (new URLSearchParams(location.search).get('paid') === '1') {
      localStorage.setItem('cg_paid', '1');
      const saved = JSON.parse(localStorage.getItem('cg_ans') || '[]');
      if (saved.length === CG_DATA.q.length) { window.__cgRestored = 1; cgAns = saved; cgIdx = saved.length; setTimeout(cgResults, 350); }
    }
  } catch(e) {}
});
</script>
"""

TEST_VIEW = '''<!-- TEST -->
<section class="view" id="v-test"><div class="narrow">
<div class="kicker">Find your profession</div>
<h1>The Big Career Test</h1>
<p class="oneline"><b>50 questions. ''' + str(len(N)) + ''' real career paths.</b> Not a horoscope — a matching engine built on how you actually want to live: place, people, hands, money, study time, risk.</p>
<div class="panel" id="testbox">
  <div class="resname">What you get</div>
  <p style="margin-top:6px">Your <b>top 3 professions</b> with a fit score, typical pay band, AI-risk note, license reality — and the honest first step for each. Plus one path to avoid. About 10 minutes. No email needed.</p>
  <button class="btn ink" onclick="cgStart()">Start the test — 50 questions</button>
  <p class="note">Take the test free — unlock your top 3 results for $5.</p>
</div>
</div></section>
'''


STUDY_OVERRIDES = {"Certified Nursing Assistant":1,"Aesthetic Nurse / Nurse Injector":2,"Med Spa Owner":2,"Computer and Information Research Scientist":5,"Site Reliability Engineer":4,"Health Informatics Specialist":4,"Digital Forensics Analyst":4,"Certified Registered Nurse Anesthetist (CRNA)":5,"Family Physician":5,"Podiatrist":5,"Recreational Therapist":4,"Histotechnologist":4,"Hazardous Materials Removal Worker":1,"Security and Fire Alarm Systems Installer":3,"Plasterer and Stucco Mason":3,"Reinforcing Iron and Rebar Worker":4,"Farm Equipment Mechanic":3,"Urban and Regional Planner":5,"Museum Curator":5,"Film / Stage Lighting Technician":2,"Hair Replacement / Wig Specialist":2,"Reflexologist":1,"Farm / Ranch Manager":4,"Food Safety Inspector":4,"Marriage and Family Therapist":5,"Rehabilitation Counselor":5,"Mediator / Arbitrator":4,"Helicopter Pilot":3,"Harbor Pilot":5,"Transportation Inspector":4,"Gym / Fitness Studio Owner":1,"Network and Computer Systems Administrator":4,"Veterinarian":5,"Dentist":5,"Chiropractor":5,"Epidemiologist":5,"Psychiatrist":5,"Boilermaker":4,"Commercial Diver":1,"Water Well Driller":3,"Landscape Architect":5,"Librarian":5,"Community Health Worker":1,"Locomotive Engineer":3,"Computer Network Architect":4,"Database Administrator / Architect":4,"Computer Systems Analyst":4,"GIS Specialist / Cartographer":4,"Certified Anesthesiologist Assistant":5,"Cardiovascular Perfusionist":5,"Medical Dosimetrist":4,"Orthotist / Prosthetist":5,"Athletic Trainer":5,"Biomedical Equipment Technician (BMET)":3,"Millwright":4,"Structural Ironworker":4,"Brick Mason":3,"Sheet Metal Worker":4,"Water / Wastewater Treatment Operator":2,"Lineworker (power lines)":4,"Sound Engineering Technician":2,"Fashion Designer":4,"Electrologist":2,"Food Scientist / Technologist":4,"Brewer / Brewmaster":2,"Substance Abuse Counselor":4,"Firefighter":2,"Funeral Director":3,"Emergency Management Director":4,"Aircraft Dispatcher (FAA)":2,"Ship Engineer (Merchant Marine)":4,"Insurance Underwriter":4,"Real Estate Appraiser":3,"Construction Estimator":4,"Pharmacist":5,"Psychologist / Therapist":5,"Optometrist":5,"Physical Therapist":5,
"Occupational Therapist":4,"Speech Therapist":4,"Commercial Pilot":4,"Electrician":4,"Plumber":4,
"Elevator Mechanic":4,"General Contractor":4,"Accountant (CPA track)":4,"Financial Analyst":4,
"Data Scientist / ML Engineer":4,"School Teacher":4,"Special Education Teacher":4,"School Counselor":4,
"Social Worker":4,"Nutrition Coach / Dietitian":4,"Registered Nurse":3,"Dental Hygienist":4,"Nuclear Reactor Operator":4,"Commercial Insurance Producer":1,
"Sonographer (Ultrasound)":3,"Respiratory Therapist":3,"Radiology Tech":3,"MRI Technologist":3,
"Vet Technician":3,"HVAC Technician":3,"Aircraft Mechanic (A&P)":3,"Tattoo Artist":3,"Interior Designer":3,
"Art Director":3,"Chef":3,"Product Manager":3,"Software Developer":3,"HR Specialist":4,"Lab Technician":3,
"LPN / LVN":2,"Medical Assistant":2,"Dental Assistant":2,"Surgical Technologist":2,"EMT / Paramedic":2,
"Massage Therapist":2,"Esthetician":2,"Cosmetologist / Hair Stylist":2,"Barber":2,"Welder":2,
"Auto Mechanic":2,"Diesel Mechanic":2,"Yacht Broker":2,"Boat Captain":2,"Data Analyst":2,"UX/UI Designer":2,
"Pharmacy Technician":2,"Dialysis Technician":2,"EKG Technician":2,"Sterile Processing Tech":1,
"Phlebotomist":1,"Nail Technician":1,"Lash / Brow Artist":1,"Permanent Makeup Artist":1,"Solar Installer":1,
"Home Inspector":1,"Real Estate Agent":1,"Mortgage Broker":1,"Insurance Agent":1,"Flight Attendant":1,
"CDL Truck Driver":1,"Medical Coder":2,"Paralegal":3,"Wind Turbine Technician":2,"Robotics Technician":3,"EV Charging Technician":2,"Fiber Optic Technician":1,"Semiconductor Technician":1,"Tower Climber (telecom)":1,"Land Surveyor":4,"Heavy Equipment Operator":4,"Crane Operator":4,"Pipefitter":4,"Drone Pilot (commercial)":1,"Air Traffic Controller":3,"Bus Driver":1,"Train Conductor":2,"Nurse Practitioner":5,"Physician Assistant":4,"Cardiovascular Technologist":3,"Nuclear Medicine Technologist":3,"Radiation Therapist":3,"Audiologist":5,"Genetic Counselor":4,"Clinical Research Coordinator":2,"Veterinary Assistant":1,"Data Engineer":4,"Cloud Architect":5,"Penetration Tester":5,"DevOps Engineer":5,"Cybersecurity Analyst":5,"Mobile App Developer":5,"Salesforce Administrator":1,"UX Researcher":3,"Actuary":4,"Translator / Interpreter":4,"Carpenter":4,"Elevator Mechanic":5,"School Counselor":5,"Childcare Center Owner":4,"Preschool Teacher":3,"ABA Therapist (kids)":1,"Chef":1,"Baker":1,"Private Chef":1,"Restaurant Manager":1,"Butcher":1,"Sommelier":4,"Makeup Artist":1,"Tattoo Artist":4,"Fitness Trainer":1,"Logistics Coordinator":4,"Property Manager":1,"Insurance Claims Adjuster":1,"Administrative Assistant":1,"Executive Assistant":1,"Loan Officer":4,"Physician Assistant":5,"Genetic Counselor":5,"Occupational Therapist":5,"Speech Therapist":5,"Clinical Research Coordinator":4,"Registered Nurse":4,"Mechanical Engineer":4,"Electrical Engineer":4,"Platform Engineer":4,"Embedded Systems Engineer":4,"General Surgeon":5,"Certified Nurse-Midwife":5,"Medical Laboratory Scientist":4,"Board Certified Behavior Analyst (BCBA)":5,"Data Center Technician":2,"CNC Machinist / Programmer":3,"Avionics Technician":3,"Power Plant Operator":3,"Telecommunications Equipment Installer":2,"Costume Designer":4,"Lighting Designer":4,"Audio-Video Equipment Technician":2,"Paramedical Tattoo Artist":2,"Scalp Micropigmentation Artist":1,"Food Stylist":1,"Distiller":2,"Vertical Farm Technician":1,"School Psychologist":5,"ESL / Adult Literacy Teacher":4,"Career and Technical Education Teacher":4,"Child Life Specialist":4,"Customs Broker":3,"Freight Broker / Agent":1,"Subway / Streetcar Operator":1,"Business Broker":2,"Medical & Health Services Manager":4,"CAD Drafter":3,"Civil Engineering Technician":3,"ERP Consultant (SAP)":4,"ServiceNow Developer":3,"Bioinformatics Scientist":5,"AI Implementation Consultant":3,"Cytotechnologist":4,"Dental Laboratory Technician":2,"Surgical First Assistant":3,"Neurodiagnostic Technologist":3,"Ophthalmic Technician":2,"Substation Technician":3,"Battery Energy Storage Technician":2,"Fire Sprinkler Installer":4,"Insulation Installer":1,"Horizontal Directional Drill Operator":2,"Additive Manufacturing Technician":2,"Art Conservator":5,"Sign Fabricator":2,"Trichologist":2,"Permanent Jewelry Artist":1,"Beekeeper / Apiary Operator":2,"Food Quality Assurance Technician":2,"Victim Advocate":4,"Orientation and Mobility Specialist":5,"Sign Language Interpreter (ASL)":4,"Court Reporter":3,"Marine Surveyor":3,"Railroad Signal Maintainer":3,"Railcar Mechanic":3,"Payroll Specialist":2,"Home Energy Auditor":2,"Operations Research Analyst":5,"MLOps Engineer":4,"Blockchain Developer":3,"Salesforce Developer":3,"Anesthesiologist":5,"Radiologist":5,"Dermatologist":5,"Exercise Physiologist":4,"Medical Physicist":5,"Tool and Die Maker":4,"Rigger":3,"Geothermal Installer":3,"Irrigation Technician":2,"Stonemason":3,"Archivist":5,"Exhibit Designer":4,"Medical Illustrator":5,"Perfumer":4,"Mortuary Cosmetologist":2,"Fishmonger":1,"Fermentation Specialist":3,"Academic Advisor":4,"School Principal":5,"Patient Navigator":4,"Health Education Specialist":4,"Tugboat Captain":4,"Marina Manager":3,"Able Seaman / Deckhand":1,"Franchise Broker":2,"Liquor Store Owner":1}
PAYK_OVERRIDES = {"Certified Nursing Assistant":42,"Aesthetic Nurse / Nurse Injector":80,"Med Spa Owner":150,"Computer and Information Research Scientist":140,"Site Reliability Engineer":135,"Health Informatics Specialist":85,"Digital Forensics Analyst":120,"Certified Registered Nurse Anesthetist (CRNA)":214,"Family Physician":238,"Podiatrist":141,"Recreational Therapist":60,"Histotechnologist":64,"Hazardous Materials Removal Worker":50,"Security and Fire Alarm Systems Installer":62,"Plasterer and Stucco Mason":55,"Reinforcing Iron and Rebar Worker":62,"Farm Equipment Mechanic":52,"Urban and Regional Planner":83,"Museum Curator":61,"Film / Stage Lighting Technician":68,"Hair Replacement / Wig Specialist":62,"Reflexologist":45,"Farm / Ranch Manager":83,"Food Safety Inspector":60,"Marriage and Family Therapist":63,"Rehabilitation Counselor":47,"Probation Officer":64,"Mediator / Arbitrator":67,"Helicopter Pilot":110,"Harbor Pilot":175,"Transportation Inspector":80,"Car Wash Owner":75,"Gym / Fitness Studio Owner":75,"Network and Computer Systems Administrator":97,"Computer Hardware Engineer":140,"Veterinarian":125,"Dentist":179,"Epidemiologist":83,"Psychiatrist":239,"Sleep Technologist":58,"Commercial Diver":61,"Water Well Driller":62,"Civil Engineer":100,"Commercial / Industrial Designer":80,"Choreographer":62,"Laser Hair Removal Technician":52,"Private Investigator":52,"Librarian":64,"Community Health Worker":51,"Compliance Officer":80,"Computer Network Architect":130,"Database Administrator / Architect":123,"Computer Systems Analyst":103,"GIS Specialist / Cartographer":78,"Certified Anesthesiologist Assistant":132,"Cardiovascular Perfusionist":135,"Medical Dosimetrist":124,"Orthotist / Prosthetist":81,"Athletic Trainer":62,"Biomedical Equipment Technician (BMET)":60,"Millwright":72,"Structural Ironworker":69,"Brick Mason":61,"Sheet Metal Worker":65,"Water / Wastewater Treatment Operator":57,"Lineworker (power lines)":93,"Sound Engineering Technician":60,"Fashion Designer":81,"Electrologist":48,"Food Scientist / Technologist":79,"Brewer / Brewmaster":52,"Substance Abuse Counselor":59,"Firefighter":57,"Funeral Director":62,"Emergency Management Director":92,"Aircraft Dispatcher (FAA)":65,"Ship Engineer (Merchant Marine)":100,"Insurance Underwriter":79,"Real Estate Appraiser":68,"Construction Estimator":77,"Software Developer":125,"Data Scientist / ML Engineer":135,"Product Manager":118,
"DevOps Engineer":130,"Cybersecurity Analyst":125,"Pharmacist":135,"Commercial Pilot":160,
"Elevator Mechanic":105,"Yacht Broker":150,"Real Estate Investor (flips)":150,"Real Estate Investor (rentals)":130,
"General Contractor":105,"B2B Sales Rep":76,"Business Consultant":120,
"Physical Therapist":100,"Optometrist":130,"Data Analyst":90,"UX/UI Designer":105,"Registered Nurse":86,
"Dental Hygienist":98,"Nuclear Reactor Operator":123,"Commercial Insurance Producer":62,"Sonographer (Ultrasound)":97,"Mobile App Developer":125,"AI Automation Specialist":120,
"Financial Analyst":105,"Psychologist / Therapist":105,"Senior Home Care Agency Owner":110,"Self-Storage Owner":130,"Nurse Practitioner":125,"Physician Assistant":120,"Air Traffic Controller":130,"Data Engineer":130,"Cloud Architect":145,"Penetration Tester":125,"Actuary":125,"Genetic Counselor":100,"Audiologist":95,"School Teacher":67,"Social Worker":62,"Preschool Teacher":38,"School Counselor":64,"Special Education Teacher":67,"Childcare Center Owner":59,"Nanny / Family Assistant (pro)":35,"Chef":62,"Baker":37,"Private Chef":48,"Barista (craft coffee)":31,"Restaurant Manager":69,"Food Truck Owner":69,"Caterer":69,"Butcher":40,"Sommelier":35,"Bakery / Café Owner":69,"Cosmetologist / Hair Stylist":36,"Barber":38,"Nail Technician":36,"Massage Therapist":58,"Permanent Makeup Artist":55,"Makeup Artist":97,"Tattoo Artist":59,"Mortgage Broker":77,"Logistics Coordinator":82,"Property Manager":70,"Real Estate Agent":53,"Insurance Claims Adjuster":78,"Administrative Assistant":48,"Executive Assistant":77,"Loan Officer":77,"Nurse Practitioner":132,"Physician Assistant":136,"Registered Nurse":98,"Occupational Therapist":100,"Speech Therapist":98,"Clinical Research Coordinator":60,"Semiconductor Technician":51,"Data Scientist / ML Engineer":120,"CDL Truck Driver":59,"Heavy Equipment Operator":60,"Tower Climber (telecom)":64,"Crane Operator":68,"Welder":54,"Auto Mechanic":51,"Diesel Mechanic":62,"HVAC Technician":61,"Carpenter":61,"Plumber":64,"Roofer":55,"Concrete Finisher":57,"Flooring Installer":54,"Drywall Finisher":68,"LPN / LVN":64,"Radiation Therapist":105,"Nuclear Medicine Technologist":101,"Surgical Technologist":65,"Respiratory Therapist":82,"UX Researcher":110,"Web Designer":63,"Animator":102,"Illustrator":55,"Grant Writer":58,"SMM Manager":62,"QA Engineer":104,"Project Manager":102,"Operations Manager":106,"Enrolled Agent (tax pro)":55,"Paralegal":63,"Salesforce Administrator":99,"Corporate Trainer":69,"Radiology Tech":80,"CRM / Email Marketer":79,"Market Researcher":79,"Technical Writer":90,"Bookkeeper + Advisory":51,"Translator / Interpreter":60,"Medical Coder":51,"Mechanical Engineer":102,"Electrical Engineer":118,"Platform Engineer":135,"Embedded Systems Engineer":130,"General Surgeon":239,"Certified Nurse-Midwife":132,"Medical Laboratory Scientist":63,"Board Certified Behavior Analyst (BCBA)":85,"Data Center Technician":72,"CNC Machinist / Programmer":62,"Avionics Technician":79,"Power Plant Operator":100,"Telecommunications Equipment Installer":64,"Costume Designer":65,"Lighting Designer":75,"Audio-Video Equipment Technician":60,"Paramedical Tattoo Artist":70,"Scalp Micropigmentation Artist":75,"Food Stylist":65,"Distiller":58,"Vertical Farm Technician":48,"School Psychologist":87,"ESL / Adult Literacy Teacher":60,"Career and Technical Education Teacher":63,"Child Life Specialist":58,"Customs Broker":80,"Freight Broker / Agent":70,"Subway / Streetcar Operator":65,"Business Broker":110,"Medical & Health Services Manager":118,"Building Inspector":72,"CAD Drafter":65,"Civil Engineering Technician":65,"Flight Attendant":64,"ERP Consultant (SAP)":120,"ServiceNow Developer":115,"Bioinformatics Scientist":105,"AI Implementation Consultant":125,"Cytotechnologist":68,"Dental Laboratory Technician":47,"Surgical First Assistant":62,"Neurodiagnostic Technologist":58,"Ophthalmic Technician":45,"Substation Technician":85,"Battery Energy Storage Technician":70,"Fire Sprinkler Installer":60,"Insulation Installer":47,"Horizontal Directional Drill Operator":62,"Additive Manufacturing Technician":58,"Art Conservator":57,"Sign Fabricator":45,"Trichologist":58,"Permanent Jewelry Artist":45,"Beekeeper / Apiary Operator":48,"Food Quality Assurance Technician":48,"Victim Advocate":44,"Orientation and Mobility Specialist":62,"Sign Language Interpreter (ASL)":62,"Court Reporter":67,"Marine Surveyor":75,"Railroad Signal Maintainer":72,"Railcar Mechanic":63,"Payroll Specialist":58,"Home Energy Auditor":62,"Operations Research Analyst":91,"MLOps Engineer":140,"Blockchain Developer":120,"Salesforce Developer":120,"Anesthesiologist":239,"Radiologist":239,"Dermatologist":239,"Exercise Physiologist":58,"Medical Physicist":175,"Tool and Die Maker":62,"Rigger":60,"Geothermal Installer":60,"Irrigation Technician":48,"Stonemason":54,"Archivist":61,"Exhibit Designer":60,"Medical Illustrator":76,"Perfumer":78,"Mortuary Cosmetologist":48,"Fishmonger":44,"Fermentation Specialist":58,"Academic Advisor":61,"School Principal":104,"Patient Navigator":52,"Health Education Specialist":63,"Tugboat Captain":115,"Marina Manager":68,"Able Seaman / Deckhand":52,"Franchise Broker":110,"Liquor Store Owner":75}
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
<div class="fgroup"><div class="flabel">Search by name</div><input id="libsearch" type="text" placeholder="Type a profession — e.g. Robotics Technician" oninput="cgFQ(this.value)" style="width:100%;box-sizing:border-box;padding:12px 14px;border:1.5px solid var(--line);border-radius:12px;font:inherit;background:#fff;color:inherit"></div>
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
const cgF = {cat:'all', online:false, pay:0, study:0, q:''};
function cgPayTxt(k){ if (k < 55) return '$35–55K'; if (k < 100) return '$55–95K'; if (k < 140) return '$95–140K'; return '$140K+'; }
function cgBuildChips(){
  const cats = [['all','All']].concat(Object.keys(CG_CATS).map(function(k){ return [k, CG_CATS[k]]; }));
  document.getElementById('f-cat').innerHTML = cats.map(function(c){
    return '<button class="fchip' + (cgF.cat===c[0] ? ' on' : '') + '" onclick="cgFSet(\'cat\',\'' + c[0] + '\')">' + c[1] + '</button>';
  }).join('');
  document.getElementById('f-study').innerHTML = Object.keys(CG_STUDY).map(function(k){
    return '<button class="fchip' + (cgF.study===+k ? ' on' : '') + '" onclick="cgFSet(\'study\',' + k + ')">' + CG_STUDY[k] + '</button>';
  }).join('');
  document.querySelectorAll('#v-roadmaps .fchip[data-k]').forEach(function(b){
    const k = b.getAttribute('data-k');
    const on = (k === 'online') ? cgF.online : (cgF.pay === +b.getAttribute('data-v'));
    b.classList.toggle('on', on);
  });
}
function cgFSet(k, v){ if (k !== 'cat' && cgF[k] === v) v = (k === 'study' ? 0 : 0); cgF[k] = v; cgLib(); }
function cgFTog(k){ cgF[k] = !cgF[k]; cgLib(); }
function cgFQ(v){ cgF.q = v.trim().toLowerCase(); cgLib(); }
function cgLib(){
  cgBuildChips();
  const list = CG_DATA.n.filter(function(n){
    if (cgF.cat !== 'all' && n[1] !== cgF.cat) return false;
    if (cgF.online && n[4] < 1) return false;
    if (cgF.pay && n[14] < cgF.pay) return false;
    if (cgF.study && n[13] !== cgF.study) return false;
    if (cgF.q && n[0].toLowerCase().indexOf(cgF.q) < 0) return false;
    return true;
  });
  document.getElementById('libcount').textContent = list.length + ' of ' + CG_DATA.n.length + ' paths';
  document.getElementById('libgrid').innerHTML = list.map(function(n){
    const live = n[0].indexOf('Accountant') === 0, dental = n[0] === 'Dental Hygienist';
    const tag = live ? '<span class="tag">● Live</span>' : (dental ? '<span class="tag soon">Video coming</span>' : '<span class="tag soon">Roadmap soon</span>');
    const inner = '<div class="art cgstrip"><div class="cgframe">' + n[0] + '</div></div>' + '<div class="cap">' + tag + '<p>' + CG_CATS[n[1]] + ' · ' + cgPayTxt(n[14]) + ' · training ' + CG_STUDY[n[13]] + (n[4] === 2 ? ' · 💻 online' : (n[4] === 1 ? ' · partly online' : '')) + '</p></div>';
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

PROMPT_VIEW = '<!-- PROMPT -->\n<section class="view" id="v-prompt"><div class="narrow">\n<div class="kicker">The Master Prompt</div>\n<h1>Your AI, turned into a career mentor.</h1>\n<p class="oneline">One paste into Claude or ChatGPT. It interviews you first — then builds the whole road into your profession, lays it out in Notion, and stays to drive you through it.</p>\n<div class="steps">\n<div class="step"><div class="n">1</div><div class="t">Give it a name</div><p>Your mentor asks you to name it. A mentor with a name is harder to ghost.</p></div>\n<div class="step"><div class="n">2</div><div class="t">The interview</div><p>About 30 minutes, one question at a time: your state, real hours, budget, deadline, red lines. If the maths doesn\'t add up, it tells you before planning.</p></div>\n<div class="step"><div class="n">3</div><div class="t">Your personal plan</div><p>License &amp; certificate map for YOUR state. Every phase with a free route and a paid route. Honest money plan. First-income plan.</p></div>\n<div class="step"><div class="n">4</div><div class="t">Notion + the drive</div><p>A ready Notion template: weekly plan with progress circles, study plan, skills, certificates, resume builder, job tracker. Then weekly driving — one tiny next step at a time, shrunk whenever life gets in the way.</p></div>\n</div>\n<div id="promptbox"></div>\n<p class="note">Works with Claude, ChatGPT and any AI chat. Built to pair with your <a href="/mentor">Mentor</a> result — bring the profession, the mentor builds the road.</p>\n</div></section>\n\n'
PROMPT_JS = '\n<script>\nconst CG_PREVIEW = __PREVIEW__;\nconst CG_PROMPT_URL = "__PURL__";\nwindow.__cgFull = null;\nfunction cgPromptPaid(){ try { return localStorage.getItem(\'cg_prompt_paid\') === \'1\'; } catch(e) { return false; } }\nfunction cgEsc(t){ return t.replace(/</g,\'&lt;\'); }\nfunction cgPromptRender(){\n  const box = document.getElementById(\'promptbox\');\n  if (!box) return;\n  if (CG_PROMPT_URL && !cgPromptPaid()) {\n    box.innerHTML = \'<div class="panel"><div class="resname">The prompt — preview</div>\'\n      + \'<pre class="promptprev">\' + cgEsc(CG_PREVIEW) + \'…</pre>\'\n      + \'<a class="btn ink" href="\' + CG_PROMPT_URL + \'">Get the full Master Prompt — $27</a>\'\n      + \'<p class="note">Secure checkout by Stripe. You come straight back here and the full prompt unlocks — copy it in one click.</p></div>\';\n  } else if (CG_PROMPT_URL || cgPromptPaid()) {\n    box.innerHTML = \'<div class="panel"><div class="resname">Your Master Prompt</div>\'\n      + \'<pre class="promptprev tall" id="cgfullprompt">Loading your prompt…</pre>\'\n      + \'<button class="btn ink" onclick="cgCopyPrompt()">Copy the whole prompt</button>\'\n      + \'<p class="note" id="copiednote">Paste it into a fresh Claude or ChatGPT chat — and keep that chat. Your mentor lives there.</p></div>\';\n    fetch(\'/master_prompt.txt\').then(function(r){ return r.text(); }).then(function(t){\n      window.__cgFull = t;\n      var pre = document.getElementById(\'cgfullprompt\');\n      if (pre) pre.textContent = t;\n    }).catch(function(){\n      var pre = document.getElementById(\'cgfullprompt\');\n      if (pre) pre.textContent = \'Could not load the prompt text — the PDF backup below is the same prompt.\';\n    });\n  } else {\n    box.innerHTML = \'<div class="panel"><div class="resname">The prompt — preview</div>\'\n      + \'<pre class="promptprev">\' + cgEsc(CG_PREVIEW) + \'…</pre>\'\n      + \'<p class="note">Checkout opens in a few days.</p></div>\';\n  }\n}\nfunction cgCopyPrompt(){\n  const done = function(){ const n = document.getElementById(\'copiednote\'); if (n) n.textContent = \'Copied ✓ Now paste it into Claude or ChatGPT.\'; };\n  const txt = window.__cgFull || CG_PREVIEW;\n  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done).catch(done);\n  else { const ta = document.createElement(\'textarea\'); ta.value = txt; document.body.appendChild(ta); ta.select(); try { document.execCommand(\'copy\'); } catch(e) {} ta.remove(); done(); }\n}\ndocument.addEventListener(\'DOMContentLoaded\', function(){\n  try { if (new URLSearchParams(location.search).get(\'prompt\') === \'1\') localStorage.setItem(\'cg_prompt_paid\', \'1\'); } catch(e) {}\n  cgPromptRender();\n});\n</script>\n'

DATA_STUB = """
<script>
/* Career data loader — feeds the roadmaps library + Swipe Verdict (CG_DATA.n).
   The 50-question test engine was retired 2026-10-27; the Mentor lives at /mentor. */
let CG_DATA = {q: [], n: []};
window.__cgDataReady = fetch("/professions.json").then(function(r){ return r.json(); }).then(function(d){ CG_DATA = d; if (window.cgLib) cgLib(); }).catch(function(){});
</script>
"""


def main():
    p = '/home/hatch/workspace/careerglitch-site/index.html'
    s = open(p, encoding='utf-8').read()

    css = """.qbar{height:10px;background:var(--soft);border-radius:99px;overflow:hidden;margin-bottom:12px}
.qbar div{height:100%;background:var(--pop);border-radius:99px;transition:width .3s}
.qcount{font-family:'DM Mono',monospace;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--grey)}
.qtext{font-family:'Outfit';font-weight:900;font-size:24px;line-height:1.2;margin:8px 0 14px}
.optbtn{display:block;width:100%;text-align:left;background:#fff;border:2px solid var(--line);border-radius:14px;padding:14px 16px;font-size:16px;font-weight:600;cursor:pointer;margin-bottom:9px;color:var(--ink)}
.optbtn:hover{border-color:var(--ink)}
.backlink{background:none;border:none;color:var(--grey);font-size:14px;cursor:pointer;margin-top:4px}
.rescard{background:#fff;border:2px solid var(--ink);border-radius:18px;padding:18px;margin-bottom:12px}
.resfit{display:inline-block;background:var(--pop);border-radius:999px;font-family:'DM Mono',monospace;font-size:12px;padding:4px 11px}
.resname{font-family:'Outfit';font-weight:900;font-size:22px;margin-top:8px}
.rescat{color:#3d3942;font-size:14.5px;margin-top:3px}
.resai{font-size:14px;margin-top:6px;color:#3d3942}
.reswhy{font-size:14.5px;margin-top:6px}
.resstep{font-size:14.5px;margin-top:8px;background:var(--soft);border-radius:10px;padding:10px 12px}
"""
    s = s.replace("</style>", css + "</style>", 1)

    start = s.index('<!-- TEST -->')
    end = s.index('<!-- PROMPT -->')
    s = s[:start] + "<!-- TEST -->" + "\n" + s[end:]

    pstart = s.index('<!-- PROMPT -->')
    pend = s.index('<!-- BUSINESSES -->')
    s = s[:pstart] + PROMPT_VIEW + s[pend:]

    rstart = s.index('<!-- ROADMAPS -->')
    rend = s.index('<!-- ACCOUNTANT -->')
    s = s[:rstart] + LIB_VIEW + s[rend:]
    s = s.replace("</style>", LIB_CSS + ".promptprev{white-space:pre-wrap;word-break:break-word;background:#fff;border:2px solid var(--line);border-radius:14px;padding:16px;font-family:'DM Mono',monospace;font-size:12.5px;line-height:1.55;max-height:300px;overflow:hidden;margin:10px 0 14px;text-align:left}\n.promptprev.tall{max-height:520px;overflow:auto}\n" + "</style>", 1)
    ptext = open('/home/hatch/workspace/careerglitch-site/master_prompt.txt', encoding='utf-8').read()
    pjs = PROMPT_JS.replace("__PREVIEW__", json.dumps(ptext[:1150], ensure_ascii=False)).replace("__PURL__", PROMPT_URL)
    btn_html = '<a class="btn" href="https://the-success-brain.notion.site/Career-Dashboard-Career-Glitch-Template-402c7f35440f81ed85d6ed727be6df5c" target="_blank" rel="noopener">Open your Notion template</a><p class="note">Free Notion template, ready to duplicate \u2014 your mentor fills it with you.</p>'
    old_tail = "Your mentor lives there.</p></div>';"
    new_tail = "Your mentor lives there.</p>' + " + repr(btn_html) + " + '</div>';"
    assert old_tail in pjs, 'tail missing'
    pjs = pjs.replace(old_tail, new_tail, 1)
    s = s.replace("</body>", pjs + "</body>", 1)
    s = s.replace("<h1>Your AI, turned into a career mentor.</h1>", "<h1>Turn AI into your personal career mentor.</h1>", 1)
    s = s.replace("One paste into Claude or ChatGPT. It interviews you first \u2014 then builds the whole road into your profession, lays it out in Notion, and stays to drive you through it.",
                  "Anyone can ask AI for a plan and get a generic list. This is built the opposite way: your mentor interviews you first, checks the maths honestly, then builds your real plan \u2014 and stays to drive you through it.", 1)
    s = s.replace('<div id="promptbox"></div>', '<div class="panel"><div class="resname">Why not just ask ChatGPT?</div><p class="note" style="text-align:left">A random request gets you a generic list in 30 seconds \\u2014 the kind people quit by week two. This mentor is built the opposite way: a 30-minute interview before any plan, an honest check of your hours, budget and timeline, the exact license for YOUR state, free and paid routes priced for every step \\u2014 and weekly check-ins that shrink the step when you stall, instead of letting you quit.</p></div>' + '<div id="promptbox"></div>', 1)
    s = s.replace("A random request gets you a generic list in 30 seconds \u2014 the kind people quit by week two. This mentor is built the opposite way: a 30-minute interview before any plan, an honest check of your hours, budget and timeline, the exact license for YOUR state, free and paid routes priced for every step \u2014 and weekly check-ins that shrink the step when you stall, instead of letting you quit.", "A plain request to AI gets you 10 generic bullets. This is a 2,300-word system that turns AI into a real mentor: a 30-minute interview before any plan, an honest maths check of your hours, budget and deadline, your state's exact license and exam costs, free and paid routes for every step \u2014 all filled into a ready Notion dashboard, with weekly check-ins that keep you from quitting.", 1)
    libjs = LIB_JS.replace("__STUDY__", json.dumps(STUDY_LABELS, separators=(",", ":")))
    s = s.replace("</body>", libjs + "</body>", 1)

    ESCAPE = ("Not sure", {})
    data = {"n": [enrich(n) for n in N], "q": [(t, opts + [ESCAPE]) for (t, opts) in Q]}
    open('professions.json', 'w', encoding='utf-8').write(json.dumps(data, ensure_ascii=False, separators=(",", ":")))
    engine = (ENGINE
                    .replace("__CATS__", json.dumps(CATS, ensure_ascii=False, separators=(",", ":")))
                    .replace("__STEPS__", json.dumps(STEPS, ensure_ascii=False, separators=(",", ":")))
                    .replace("__PAY__", json.dumps(PAY, separators=(",", ":")))
                    .replace("__AIR__", json.dumps(AIR, separators=(",", ":")))
                    .replace("__LIC__", json.dumps(LIC, separators=(",", ":"))).replace("__PAYURL__", PAY_URL))
    s = s.replace("</body>", DATA_STUB + "</body>", 1)

    # home CTA copy update
    s = s.replace("One honest test. Your top 3 professions — with the roads in.",
                  "The Mentor reads you first, then points to your top 3 — with the roads in.", 1)
    s = s.replace("Not sure accounting is your road? One honest test:",
                  "Not sure accounting is your road?", 1)
    s = s.replace('A random request gets you a generic list in 30 seconds \\u2014 the kind people quit by week two. This mentor is built the opposite way: a 30-minute interview before any plan, an honest check of your hours, budget and timeline, the exact license for YOUR state, free and paid routes priced for every step \\u2014 and weekly check-ins that shrink the step when you stall, instead of letting you quit.', "A plain request to AI gets you 10 generic bullets. This is a 2,300-word system that turns AI into a real mentor: a 30-minute interview before any plan, an honest maths check of your hours, budget and deadline, your state's exact license and exam costs, free and paid routes for every step \u2014 all filled into a ready Notion dashboard, with weekly check-ins that keep you from quitting.", 1)
    s = s.replace("fills it with you.</p>' + '</div>'", 'fills it with you.</p>\' + \'<a class="btn ink" href="/Career_Mentor_Master_Prompt.pdf">Download the PDF backup</a><p class="note">The full prompt + the template link in one file \\u2014 keep it, in case you close this page.</p>\' + \'</div>\'', 1)

    # === profession pages + lead gate (added 23.10.2026) ===
    CG_SUPA_URL = "https://stwzrcahhieqbabvljue.supabase.co"
    CG_SUPA_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0d3pyY2FoaGllcWJhYnZsanVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE1Njk4NzMsImV4cCI6MjEwNzE0NTg3M30.T8RWclXoxK8z5dqUPtSYYjAO5a6BsdLsDwaB4t7NIJM"

    def gatebox(prof, pdf):
        return ('<div class="gatebox" data-prof="' + prof + '" data-pdf="' + pdf + '">'
                '<div class="resname">Get the free roadmap (PDF)</div>'
                '<p class="note" style="text-align:left">Name + email \u2014 and the download opens right here. That\u2019s the whole deal.</p>'
                '<form class="gateform"><input name="nm" placeholder="Your name" autocomplete="name" required>'
                '<input name="em" type="email" placeholder="Your email" autocomplete="email" required>'
                '<button class="btn" type="submit">Unlock the download</button></form>'
                '<div class="dlwrap" hidden><a class="btn" href="' + pdf + '" download>Download the roadmap (PDF)</a>'
                '<p class="note">Saved \u2713 Next steps: <a href="/mentor">the Mentor</a> \u00b7 <a href="#prompt">your personal career mentor</a>.</p></div></div>')

    MENTOR_BLOCK = ('<div class="panel" style="margin-top:14px"><div class="kicker">The Master Prompt \u00b7 $27</div>'
                    '<div class="resname">Turn AI into your personal career mentor</div>'
                    '<p class="note" style="text-align:left">This roadmap is one map for everyone. The mentor builds <b>yours</b>: a 30-minute interview first, an honest check of your hours, budget and deadline, your state\u2019s exact license and exam costs \u2014 then your plan in a Notion dashboard, with weekly check-ins that keep you from quitting.</p>'
                    '<a class="btn coral" href="#prompt">Get your personal mentor \u2014 $27</a></div>')

    def profpage(num, slug, name, sticker, vid, money, inside):
        lis = ''.join('<li>' + m + '</li>' for m in money)
        ins = ''.join('<li>' + m + '</li>' for m in inside)
        return ('\n<!-- ' + slug.upper() + ' -->\n<section class="view" id="v-' + slug + '"><div class="narrow">'
                '<div class="kicker">Roadmap \u2116' + num + ' \u00b7 ' + name + '</div>'
                '<h1>' + name + ' in the AI era</h1>'
                '<div class="sticker">' + sticker + '</div>'
                '<div class="videowrap"><iframe src="https://www.youtube.com/embed/' + vid + '" title="' + name + ' \u2014 Career Glitch video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
                '<p class="hint">Watch it right here \u2014 60 seconds.</p>'
                + gatebox(slug.replace('roadmap-', ''), '/' + PDFS[slug])
                + '<h2>The money</h2><ul class="tight">' + lis + '</ul>'
                '<h2>Inside the free roadmap</h2><ul class="tight">' + ins + '</ul>'
                '<a class="btn ink" href="/mentor">Check if it fits you \u2192</a>' + MENTOR_BLOCK
                + '</div></section>\n')

    PDFS = {'roadmap-electrician': 'CareerGlitch_Electrician_Roadmap_2027_v1.pdf',
            'roadmap-ai-agent-manager': 'CareerGlitch_AIAgentManager_Roadmap_2027_v1.pdf',
            'roadmap-graphic-designer': 'CareerGlitch_GraphicDesigner_Roadmap_2027_v1.pdf',
            'roadmap-junior-developer': 'CareerGlitch_JuniorDeveloper_Roadmap_2027_v1.pdf',
            'roadmap-nuclear-reactor-operator': 'CareerGlitch_NuclearReactorOperator_Roadmap_2027_v1.pdf',
            'roadmap-commercial-insurance-producer': 'CareerGlitch_InsuranceProducer_Roadmap_2027_v1.pdf',
            'roadmap-dental-hygienist': 'CareerGlitch_DentalHygienist_Roadmap_2027_v1.pdf'}

    profs_html = ''
    profs_html += profpage('2', 'roadmap-electrician', 'Electrician',
        '\u2605 Verdict: YES. No college, paid from day one \u2014 a license AI can\u2019t hold. The catch is time: 4\u20135 years of apprenticeship.',
        '8s9Q3rD7WCs',
        ['Licensed electricians: median <b>$63,190</b> \u00b7 top 10% over <b>$108,510</b> (BLS, 2025).',
         'Apprentices are paid employees from day one \u2014 year one typically <b>$16\u2013$25/hour</b>.',
         'Outlook <b>+9%</b>, ~<b>72,700 openings a year</b> \u2014 BLS itself names AI data centers as a demand driver.'],
        ['Her verdict from the video \u2014 and the honest check on her $280K Texas claim',
         'The license map: 8,000 paid hours + the journeyman exam, state by state',
         'Union door ($0 tuition) vs non-union door \u2014 with real prices',
         'The 90-day plan to land the apprenticeship'])
    profs_html += profpage('3', 'roadmap-ai-agent-manager', 'AI Agent Manager',
        '\u2605 Verdict: YES \u2014 as a superpower on top of a real field. NOT as a job by itself. The \u201cprompt guy\u201d dies first.',
        'wYbqQg8nY_o',
        ['No official salary statistic exists yet \u2014 the job is too new. Live postings (Oct 2026): AI Operations Manager <b>$100\u2013155K</b> (CrowdStrike), senior roles to $190K.',
         'Realistic first door in: <b>~$55\u201395K</b> (estimate, marked as one in the roadmap).',
         'Agentic-AI job postings grew <b>~280% in a year</b> (Stanford AI Index 2026, Lightcast).'],
        ['What the job actually is \u2014 and the 5 titles it hides under',
         'Why 40%+ of agent projects get cancelled (Gartner) \u2014 and why that\u2019s this job\u2019s fuel',
         'Free route ($0) vs paid route ($100\u2013350) \u2014 and the ONE certificate worth paying for',
         'The 90-day plan: 3 portfolio agents with before/after quality scores'])
    profs_html += profpage('4', 'roadmap-graphic-designer', 'Graphic Designer',
        '\u2605 Verdict: NO \u2014 to basic design from zero. The easy layer is automated. YES \u2014 to branding, direction and judgment.',
        'ATLQkNt4Pww',
        ['Graphic designers: median <b>$62,960</b> (BLS, 2025) \u2014 but the outlook is <b>\u22122%</b> and every opening is a replacement.',
         'The ceiling lane pays: art directors median <b>$114,850</b>, animators <b>$102,030</b>.',
         'Designers who direct AI earn ~40% more than those who don\u2019t (Upwork data).'],
        ['What AI already took vs what it can\u2019t \u2014 with the platform evidence',
         'The free route: Figma + fundamentals + 4 portfolio pieces that aim above the commodity layer',
         'The only certificate that counts (Adobe, $150) \u2014 and when to skip it',
         'The 90-day plan, with the honest week-6 fit checkpoint'])
    profs_html += profpage('5', 'roadmap-junior-developer', 'Junior Software Developer',
        '\u2605 Verdict: YES to software engineering. NO to a $20K bootcamp and a prayer. The first rung moved \u2014 it didn\u2019t disappear.',
        'K0dP-Z-enbw',
        ['Software developers: median <b>$135,980</b> \u2014 that\u2019s ALL levels. A realistic first offer: <b>$65\u201390K</b>.',
         'The occupation still grows <b>+10%</b> (~106,100 openings a year, BLS) \u2014 while hiring of developers aged 22\u201325 fell ~20% from its 2022 peak (Stanford).',
         'New grads are now ~7% of Big Tech hires (SignalFire). Plan a 3\u20136 month first search.'],
        ['The junior crunch in numbers \u2014 what AI actually took from the junior task list',
         'Degree vs bootcamp vs self-taught \u2014 honestly priced, with real placement data',
         'Five doors to first income (not just \u201cjunior developer\u201d postings)',
         'The 90-day plan: two shipped projects and an AI-native workflow'])
    profs_html += profpage('6', 'roadmap-nuclear-reactor-operator', 'Nuclear Reactor Operator',
        '★ Verdict: YES. Six figures, no degree, no student debt — and AI literally needs you. The catch: ~5,200 jobs in the whole country, and a ~4-year road to the license.',
        '792NZu4OWtw',
        ['Nuclear operators: median <b>$122,890</b> — the highest-paid production job in America (BLS, 2025). Even the bottom 10% clear <b>$92,270</b>.',
         'Senior operators at the top fleet post from <b>$191K</b> total comp (Constellation) — top of the market, not a median.',
         'The field is tiny: <b>5,200 jobs</b>, outlook <b>−6%</b> — openings are replacements at specific plants, not growth.'],
        ['Her $123K claim, checked — exact. Her “2 years of training” is the license class only',
         'The real pipeline: plant floor → ~3 years of experience → paid license class → the NRC exam',
         'Two doors in: Navy nuclear vs the civilian plant floor — and the POSS test that gates both',
         'The 90-day plan: map your plants, qualify on paper, start test prep'])
    profs_html += profpage('7', 'roadmap-commercial-insurance-producer', 'Commercial Insurance Producer',
        '★ Verdict: YES — boring as hell, but boring can pay really well. The catch: the book of clients takes ~3 years to build.',
        'NDbyuUGIRoo',
        ['Insurance sales agents: median <b>$62,280</b>, top 10% over <b>$138,140</b> (BLS, 2025). Commissions push real producer income past the wage table.',
         '<b>572,600</b> jobs, ~<b>43,100 openings a year</b> — mostly replacements. Seats are always open; survival is the filter.',
         'The mechanics: carriers pay the agency ~10–15% of premium; a producer keeps ~50–60% of that on new business (industry sources).'],
        ['Her $62K and $138K claims — exact. Her “license in a few weeks” — true in Texas, 200 hours in Florida',
         'The producer agreement: validation pay, splits, book ownership, non-compete — read it before you sign',
         'Niche math: why 1–2 industries beat “I sell everything”',
         'The 90-day plan: license, niche, the right seat, a live pipeline'])
    profs_html += profpage('8', 'roadmap-dental-hygienist', 'Dental Hygienist',
        '★ Verdict: YES. $98,100 median, hands-on, a license AI can’t hold — in a profession short thousands of people. The catch: getting INTO a program is the real exam.',
        'lFLr4QZOpQk',
        ['Dental hygienists: median <b>$98,100</b> — $47.16 an hour (BLS, 2025). Top 10% over <b>$126,050</b>.',
         'Outlook <b>+8%</b>, ~<b>15,000 openings a year</b> — against only ~9,815 program seats a year (ADA).',
         'Geography swings pay ~2×: California mean ~$128K vs Alabama ~$61K.'],
        ['Every number from her video, checked — plus the seat math she didn’t show',
         'CODA or nothing: the accreditation rule, and the ~$10K instruments line nobody budgets',
         'Community college (~$20–40K all-in) vs private/accelerated — the same license at the end',
         'The 90-day plan: programs mapped, prereqs started, applications wide'])
    s = s.replace('<a class="btn ink" href="#test">Check if it fits you \u2192</a>',
                  '<a class="btn ink" href="/mentor">Check if it fits you \u2192</a>' + MENTOR_BLOCK, 1)
    s = s.replace('<!-- TEST -->', profs_html + '\n<!-- TEST -->', 1)

    s = s.replace('<a class="btn" href="/CareerGlitch_Accountant_Roadmap_2027_v7.pdf" download>Download the free roadmap (PDF)</a>',
                  gatebox('accountant', '/CareerGlitch_Accountant_Roadmap_2027_v7.pdf'), 1)

    s = s.replace("  if(!routes.includes(h)) h = 'home';",
                  "  if(!routes.includes(h)){ if(h.indexOf('roadmap-') === 0){ window.__cgPendingRM = h; h = 'roadmap-x'; } else h = 'home'; }")
    s = s.replace("  document.getElementById('v-' + h).classList.add('on');",
                  "  document.getElementById('v-' + h).classList.add('on');\n  if(h === 'roadmap-x' && window.cgRenderRM) cgRenderRM(window.__cgPendingRM || (location.hash || '').slice(1));")
    s = s.replace('</main>', '<section class="view" id="v-roadmap-x"><div class="narrow" id="cgx"></div></section>\n</main>')
    s = s.replace("const routes = ['home','roadmaps','roadmap-accountant','test','prompt','businesses'];",
                  "const routes = ['home','roadmaps','roadmap-accountant','roadmap-electrician','roadmap-ai-agent-manager','roadmap-graphic-designer','roadmap-junior-developer','roadmap-nuclear-reactor-operator','roadmap-commercial-insurance-producer','roadmap-dental-hygienist','prompt','businesses'];", 1)

    cg_cards = ('  <a class="gcard" href="#roadmap-electrician">\n'
                '    <div class="art cgstrip"><div class="cgframe">Electrician</div></div>\n'
                '    <div class="cap"><span class="tag">\u25cf Roadmap live</span><p>No college. Paid from day one. A license AI can\u2019t hold.</p></div>\n  </a>\n'
                '  <a class="gcard" href="#roadmap-ai-agent-manager">\n'
                '    <div class="art cgstrip"><div class="cgframe">AI Agent Manager</div></div>\n'
                '    <div class="cap"><span class="tag">\u25cf Roadmap live</span><p>A superpower on top of a real field \u2014 not a job by itself.</p></div>\n  </a>\n'
                '  <a class="gcard" href="#roadmap-graphic-designer">\n'
                '    <div class="art cgstrip"><div class="cgframe">Graphic Designer</div></div>\n'
                '    <div class="cap"><span class="tag">\u25cf Roadmap live</span><p>The easy layer is automated. Aim at branding and judgment.</p></div>\n  </a>\n'
                '  <a class="gcard" href="#roadmap-junior-developer">\n'
                '    <div class="art cgstrip"><div class="cgframe">Junior Software Developer</div></div>\n'
                '    <div class="cap"><span class="tag">\u25cf Roadmap live</span><p>The first rung moved. Proof beats paper.</p></div>\n  </a>\n')
    s = s.replace('  <div class="gcard" style="border-color:var(--line)">', cg_cards + '  <div class="gcard" style="border-color:var(--line)">', 1)

    s = s.replace("const live = n[0].indexOf('Accountant') === 0, dental = n[0] === 'Dental Hygienist';",
                  "const CG_LIVE = {'Accountant':'roadmap-accountant','Electrician':'roadmap-electrician','Graphic Designer':'roadmap-graphic-designer','Software Developer':'roadmap-junior-developer','AI Automation Specialist':'roadmap-ai-agent-manager','Nuclear Reactor Operator':'roadmap-nuclear-reactor-operator','Commercial Insurance Producer':'roadmap-commercial-insurance-producer','Dental Hygienist':'roadmap-dental-hygienist'}; const slug = CG_LIVE[n[0]] || (window.CG_RM && CG_RM.byName[n[0]] ? 'roadmap-' + CG_RM.byName[n[0]] : null); const live = !!slug, dental = n[0] === 'Dental Hygienist';", 1)
    s = s.replace("return live ? '<a class=\"scard\" href=\"#roadmap-accountant\">' + inner + '</a>' : '<div class=\"scard\">' + inner + '</div>';",
                  "return live ? '<a class=\"scard\" href=\"#' + slug + '\">' + inner + '</a>' : '<div class=\"scard\">' + inner + '</div>';", 1)

    s = s.replace('</head>', '<link rel="icon" href="/favicon.ico" sizes="any">'
                  '<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">'
                  '<link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png"></head>', 1)
    GATE_CSS = (".gatebox{background:#fff;border:2px solid var(--ink);border-radius:18px;padding:18px;margin:16px 0}\n"
                ".gateform{display:flex;flex-direction:column;gap:9px;margin-top:10px}\n"
                ".gateform input{font:inherit;font-size:16px;padding:13px 14px;border:2px solid var(--line);border-radius:12px;background:#fff;color:var(--ink)}\n"
                ".gateform input:focus{border-color:var(--ink);outline:none}\n")
    s = s.replace("</style>", GATE_CSS + "</style>", 1)

    RM_JS = r'''
<script>
window.CG_RM = null; window.__cgPendingRM = null;
function cgLoadRM(cb){ if (window.CG_RM) return cb(window.CG_RM); Promise.all([fetch("/roadmaps-data-1.json").then(function(r){ return r.json(); }), fetch("/roadmaps-data-2.json").then(function(r){ return r.json(); })]).then(function(ps){ var d = {byName: {}}; ps.forEach(function(p){ Object.keys(p).forEach(function(k){ if (k === "byName") Object.assign(d.byName, p.byName); else d[k] = p[k]; }); }); window.CG_RM = d; cb(d); }).catch(function(){ cb({byName: {}}); }); }
function cgEsc(t){ return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
var CG_MENTOR_HTML = "<div class=\"panel\" style=\"margin-top:22px\"><div class=\"kick2\">Career Glitch \u00b7 the $27 system</div><h3 style=\"margin:4px 0 6px\">This roadmap is free. Your personal plan isn\u2019t.</h3><p class=\"oneline\" style=\"margin:0 0 12px\">The <b>Career Mentor Master Prompt</b> interviews you first \u2014 your hours, your budget, your real deadline \u2014 then builds the plan around YOUR life and tracks it in Notion.</p><a class=\"btn\" href=\"#prompt\">See the Master Prompt \u2014 $27</a></div>";
function cgGateHTML(prof, pdf){ return '<div class="gatebox" data-prof="' + prof + '" data-pdf="' + pdf + '"><div class="resname">Get the free roadmap (PDF)</div><p class="note" style="text-align:left">Name + email \u2014 and the download opens right here. That\u2019s the whole deal.</p><form class="gateform"><input name="nm" placeholder="Your name" autocomplete="name" required><input name="em" type="email" placeholder="Your email" autocomplete="email" required><button class="btn" type="submit">Unlock the download</button></form><div class="dlwrap" hidden><a class="btn" href="' + pdf + '" download>Download the roadmap (PDF)</a><p class="note">Saved \u2713 Next steps: <a href="/mentor">the Mentor</a> \u00b7 <a href="#prompt">your personal career mentor</a>.</p></div></div>'; }
function cgRenderRM(h){ var slug = h.replace("roadmap-", ""); cgLoadRM(function(d){ var e = d[slug]; var el = document.getElementById("cgx"); if (!el) return; if (!e){ el.innerHTML = "<div class=\"kicker\">Roadmap</div><h1>Not in the library yet</h1><p class=\"oneline\">This roadmap is still being written. <a href=\"#roadmaps\">Browse the library</a></p>"; return; } el.innerHTML = "<div class=\"kicker\">Roadmap \u00b7 " + cgEsc(e.name) + "</div><h1>" + cgEsc(e.name) + " in the AI era</h1>" + "<div class=\"pstrip\"><div class=\"cgframe\">" + cgEsc(e.name) + "</div></div>" + "<div class=\"sticker\">" + cgEsc(e.sticker) + "</div>" + cgGateHTML(slug, e.pdf) + "<h2>The money</h2><ul class=\"tight\">" + e.money.map(function(m){ return "<li>" + m + "</li>"; }).join("") + "</ul>" + "<h2>Inside the free roadmap</h2><ul class=\"tight\">" + e.inside.map(function(m){ return "<li>" + m + "</li>"; }).join("") + "</ul>" + "<a class=\"btn ink\" href=\"/mentor\">Meet the Mentor \u2014 free to start</a>" + CG_MENTOR_HTML; var box = el.querySelector(".gatebox"); if (box && window.cgBindGate) cgBindGate(box); }); return true; }
document.addEventListener("DOMContentLoaded", function(){ cgLoadRM(function(){ if (window.cgLib) cgLib(); var h = (location.hash || "").slice(1); if (h.indexOf("roadmap-") === 0 && !document.getElementById("v-" + h)) cgRenderRM(h); }); });
</script>
'''

    GATE_JS = ('\n<script>\n'
               'const CG_SUPA = "' + CG_SUPA_URL + '", CG_ANON = "' + CG_SUPA_ANON + '";\n'
               'function cgGateShow(box){ var f = box.querySelector(".gateform"); if (f) f.hidden = true; var d = box.querySelector(".dlwrap"); if (d) d.hidden = false; }\n'
               'window.cgBindGate = function(box){\n'
               '  var prof = box.getAttribute("data-prof");\n'
               '  try { if (localStorage.getItem("cg_lead_" + prof) === "1") cgGateShow(box); } catch(e) {}\n'
               '  var form = box.querySelector(".gateform");\n'
               '  if (!form) return;\n'
               '  form.addEventListener("submit", function(ev){\n'
               '    ev.preventDefault();\n'
               '    var nm = form.nm.value.trim(), em = form.em.value.trim();\n'
               '    if (!nm || !em) return;\n'
               '    var btn = form.querySelector("button"); btn.disabled = true; btn.textContent = "One sec\u2026";\n'
               '    var H = {"apikey": CG_ANON, "Authorization": "Bearer " + CG_ANON, "Content-Type": "application/json"};\n'
               '    fetch(CG_SUPA + "/rest/v1/creator_state?id=eq.999&select=data", {headers: H})\n'
               '      .then(function(r){ return r.json(); })\n'
               '      .then(function(rows){\n'
               '        var data = (rows && rows[0] && rows[0].data) || {"app": "careerglitch-leads", "leads": []};\n'
               '        if (!Array.isArray(data.leads)) data.leads = [];\n'
               '        data.leads.push({"name": nm, "email": em, "prof": prof, "at": new Date().toISOString()});\n'
               '        return fetch(CG_SUPA + "/rest/v1/creator_state?id=eq.999", {method: "PATCH", headers: H, body: JSON.stringify({"data": data})});\n'
               '      })\n'
               '      .catch(function(){})\n'
               '      .then(function(){ try { localStorage.setItem("cg_lead_" + prof, "1"); } catch(e) {} cgGateShow(box); });\n'
               '  });\n'
               '};\n'
               'document.querySelectorAll(".gatebox").forEach(window.cgBindGate);\n'
               '</script>\n')
    s = s.replace("</body>", RM_JS + GATE_JS + "</body>", 1)
    s = s.replace("const routes = ['home','roadmaps','roadmap-accountant','roadmap-electrician','roadmap-ai-agent-manager','roadmap-graphic-designer','roadmap-junior-developer','test','prompt','businesses'];",
                  "const routes = ['home','roadmaps','roadmap-accountant','roadmap-electrician','roadmap-ai-agent-manager','roadmap-graphic-designer','roadmap-junior-developer','roadmap-nuclear-reactor-operator','roadmap-commercial-insurance-producer','roadmap-dental-hygienist','test','prompt','businesses'];", 1)
    s = s.replace('<p>The first rung moved. Proof beats paper.</p></div>\n  </a>\n',
                  '<p>The first rung moved. Proof beats paper.</p></div>\n  </a>\n'
                  '  <a class="gcard" href="#roadmap-nuclear-reactor-operator">\n'
                  '    <div class="art cgstrip"><div class="cgframe">Nuclear Reactor Operator</div></div>\n'
                  '    <div class="cap"><span class="tag">● Roadmap live</span><p>Six figures, no degree. A license AI can’t hold.</p></div>\n  </a>\n'
                  '  <a class="gcard" href="#roadmap-commercial-insurance-producer">\n'
                  '    <div class="art cgstrip"><div class="cgframe">Commercial Insurance Producer</div></div>\n'
                  '    <div class="cap"><span class="tag">● Roadmap live</span><p>A license in weeks. A book that pays for years.</p></div>\n  </a>\n', 1)
    s = s.replace('</style>', '#v-test .panel{padding:30px 28px 32px;margin-top:24px}\n'
                  '#v-test .rescard{padding:24px}\n</style>', 1)
    s = s.replace('</style>', '#v-prompt .steps{display:grid;gap:18px;margin:22px 0 2px}\n'
                  '#v-prompt .panel{margin-top:22px}\n'
                  '#v-prompt .narrow>p.note{margin-top:16px}\n'
                  '.libgrid .scard .art.cgstrip{position:relative;height:118px;background:#2a1030;background-image:linear-gradient(rgba(249,42,130,.14) 1px,transparent 1px),linear-gradient(90deg,rgba(249,42,130,.14) 1px,transparent 1px);background-size:26px 26px;display:flex;align-items:center;justify-content:center;padding:10px 14px;width:100%;object-fit:unset;object-position:unset}\n.cgframe{background:#FFFCF6;border:2px solid #1C1A1F;border-radius:12px;padding:8px 12px;box-shadow:4px 4px 0 #F92A82;font-family:Outfit,sans-serif;font-weight:800;font-size:15px;line-height:1.18;color:#1C1A1F;text-transform:uppercase;text-align:center}\n.pstrip{position:relative;margin:14px 0 16px;min-height:110px;border-radius:18px;background:#2a1030;background-image:linear-gradient(rgba(249,42,130,.14) 1px,transparent 1px),linear-gradient(90deg,rgba(249,42,130,.14) 1px,transparent 1px);background-size:26px 26px;display:flex;align-items:center;justify-content:center;padding:16px 14px}\n.pstrip .cgframe{font-size:19px;padding:10px 18px}\n.libgrid .scard img.cgsticker{position:absolute;top:10px;right:10px;width:54px;height:54px;object-fit:cover;border-radius:50%;border:2px solid #1C1A1F;transform:rotate(-8deg);background:#FFF6EC}\n</style>', 1)
    s = s.replace('</style>', '.galrow .gcard .art.cgstrip{position:relative;height:118px;background:#2a1030;background-image:linear-gradient(rgba(249,42,130,.14) 1px,transparent 1px),linear-gradient(90deg,rgba(249,42,130,.14) 1px,transparent 1px);background-size:26px 26px;display:flex;align-items:center;justify-content:center;padding:10px 14px;width:100%}\n</style>', 1)
    open(p, 'w', encoding='utf-8').write(s)
    print("niches:", len(N), "| questions:", len(Q), "| html bytes:", len(s.encode()))

if __name__ == "__main__":
    main()
