export const site = {
  name: "Vital Chiropractic",
  tagline: "Move Better. Live Better.",
  description:
    "Vital Chiropractic provides expert chiropractic care for back pain, neck pain, headaches, sports injuries and wellness. Same-week appointments. Book your visit today.",
  url: "https://www.vitalchiropractic.example.com",
  phone: "(555) 123-4567",
  phoneHref: "tel:+15551234567",
  email: "hello@vitalchiropractic.com",
  address: {
    street: "123 Wellness Avenue, Suite 200",
    city: "Austin",
    state: "TX",
    zip: "78701",
  },
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 7:00 PM" },
    { days: "Saturday", time: "9:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  social: {
    facebook: "https://facebook.com/vitalchiropractic",
    instagram: "https://instagram.com/vitalchiropractic",
    google: "https://g.page/vitalchiropractic",
  },
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "spinal-adjustments",
    title: "Spinal Adjustments",
    short:
      "Precise, gentle adjustments that restore alignment and relieve pressure on your nervous system.",
    description:
      "Our flagship treatment uses proven, evidence-based techniques to correct spinal misalignments, reduce nerve interference and unlock your body's natural healing ability — so you can move freely again without painkillers.",
    points: ["Drug-free pain relief", "Improved mobility & posture", "Personalized treatment plans"],
  },
  {
    slug: "sports-injury-rehab",
    title: "Sports Injury Rehab",
    short:
      "Get back in the game faster with targeted rehab for strains, sprains and overuse injuries.",
    description:
      "From weekend warriors to competitive athletes, we combine chiropractic adjustments, soft-tissue therapy and corrective exercises to accelerate recovery, prevent re-injury and boost performance.",
    points: ["Faster recovery times", "Injury prevention programs", "Performance optimization"],
  },
  {
    slug: "headache-migraine-relief",
    title: "Headache & Migraine Relief",
    short:
      "Lasting relief from tension headaches and migraines by treating the root cause — not the symptoms.",
    description:
      "Many chronic headaches originate in the neck and upper spine. Through careful assessment and targeted cervical care, we reduce frequency and intensity of headaches so you can reclaim your focus and energy.",
    points: ["Reduced headache frequency", "No medication dependency", "Neck & shoulder tension release"],
  },
];

export const servicesExtra: Service[] = [
  {
    slug: "prenatal-pediatric-care",
    title: "Prenatal & Pediatric Care",
    short:
      "Safe, gentle care for expecting mothers and growing children at every stage of development.",
    description:
      "Pregnancy places unique demands on the spine. Our certified practitioners use specialized techniques to ease back pain, improve comfort during pregnancy and support healthy development in children.",
    points: ["Webster-certified technique", "Gentle, safe for all ages", "Improved pregnancy comfort"],
  },
  {
    slug: "posture-corrective-care",
    title: "Posture Corrective Care",
    short:
      "Correct 'tech neck' and desk-job posture problems that cause chronic pain and fatigue.",
    description:
      "Long hours at a desk take a toll. We combine spinal correction, ergonomic coaching and strengthening exercises to rebuild healthy posture and eliminate the daily aches holding you back.",
    points: ["Tech-neck correction", "Ergonomic coaching", "Long-term spinal health"],
  },
  {
    slug: "wellness-maintenance",
    title: "Wellness & Maintenance Care",
    short:
      "Ongoing proactive care that keeps your spine healthy and your energy high for life.",
    description:
      "Chiropractic isn't just for pain. Regular wellness adjustments support better sleep, stronger immunity, improved energy and a nervous system performing at its peak — so you stay well, not just get well.",
    points: ["Better sleep & energy", "Whole-family plans", "Affordable membership options"],
  },
];

export const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "12,000+", label: "Adjustments Delivered" },
  { value: "4.9★", label: "Google Rating" },
  { value: "98%", label: "Patient Satisfaction" },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Marathon Runner",
    quote:
      "After 6 months of knee and hip pain, I was told surgery might be my only option. Three months with Dr. Carter and I finished my first marathon pain-free. I can't recommend Vital Chiropractic enough.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Software Engineer",
    quote:
      "Years of desk work destroyed my neck and shoulders. The posture program here changed everything — the daily headaches are gone and I finally sleep through the night.",
    rating: 5,
  },
  {
    name: "Emily Thompson",
    role: "New Mom",
    quote:
      "I started prenatal care in my second trimester and the difference was night and day. Dr. Carter is so gentle and knowledgeable. Now my whole family — including the baby — gets adjusted here.",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "Does chiropractic treatment hurt?",
    answer:
      "Most patients find adjustments comfortable and feel immediate relief. Some may experience mild soreness for 24–48 hours after the first visit, similar to how you feel after a workout. Our techniques are always tailored to your comfort level.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "It depends on your condition, how long you've had it and your health goals. After your first visit and full assessment, we'll give you an honest, transparent treatment plan with expected timelines — no surprise packages, no pressure.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes! We accept most major insurance plans and are in-network with many providers. We also offer affordable self-pay options and family plans for those without coverage. Our front desk will verify your benefits before your first visit.",
  },
  {
    question: "Is chiropractic care safe during pregnancy?",
    answer:
      "Absolutely. Our practitioners are certified in prenatal techniques and adjust treatment specifically for each stage of pregnancy. Chiropractic care during pregnancy can reduce back pain, improve comfort and may even support smoother delivery.",
  },
  {
    question: "What should I expect at my first appointment?",
    answer:
      "Your first visit includes a thorough consultation, postural and spinal assessment, and — if appropriate — your first gentle adjustment. You'll leave with a clear diagnosis, a personalized plan and answers to every question you have.",
  },
  {
    question: "Do I need a referral from a doctor?",
    answer:
      "No referral is needed — you can book directly with us. If your condition requires medical co-management, we'll coordinate with your physician to make sure you get the best possible care.",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

