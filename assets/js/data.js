/* ==========================================================================
   MEN SALON — Centralized Data Store
   ========================================================================== */

window.MEN_SALON_DATA = {
  brand: {
    name: "Men Salon",
    founder: "Samuel Sterling",
    founderRole: "Founder & Master Barber",
    tagline: "We craft precision haircuts, signature beard grooming, and refined styling that elevate your confidence through expert craftsmanship and timeless barbering tradition.",
    addressLine1: "123 Barber Street",
    addressLine2: "New York, NY 10001",
    phone: "+1 (555) 123-4567",
    phoneHref: "tel:15551234567",
    email: "concierge@mensalon-studio.com",
    copyright: "Copyright © 2026 Men Salon Studio. All Rights Reserved."
  },

  hours: [
    { day: "Monday", time: "09:00 AM – 08:00 PM", closed: false },
    { day: "Tuesday", time: "09:00 AM – 08:00 PM", closed: false },
    { day: "Wednesday", time: "09:00 AM – 08:00 PM", closed: false },
    { day: "Thursday", time: "09:00 AM – 08:00 PM", closed: false },
    { day: "Friday", time: "09:00 AM – 08:00 PM", closed: false },
    { day: "Saturday", time: "09:00 AM – 08:00 PM", closed: false },
    { day: "Sunday", time: "Closed", closed: true }
  ],

  timeSlots: [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:30 PM", "03:00 PM", "04:30 PM", "06:30 PM"
  ],

  services: [
    {
      num: "01",
      id: "classic-haircut",
      title: "Classic Haircut",
      price: "$25",
      duration: "40 Mins",
      category: "haircuts",
      image: "assets/images/service-1.webp",
      description: "Precision haircut tailored to your face shape and style, finished with clean detailing for a polished look."
    },
    {
      num: "02",
      id: "beard-trim",
      title: "Beard Trim",
      price: "$20",
      duration: "30 Mins",
      category: "beard",
      image: "assets/images/service-2.webp",
      description: "Expert beard shaping and trimming to enhance your facial features with a sharp, refined finish."
    },
    {
      num: "03",
      id: "skin-fade",
      title: "Skin Fade",
      price: "$35",
      duration: "45 Mins",
      category: "haircuts",
      image: "assets/images/service-3.webp",
      description: "Clean skin fade blended with precision techniques for a modern, sharp, and long-lasting appearance."
    },
    {
      num: "04",
      id: "hot-towel-shave",
      title: "Hot Towel Shave",
      price: "$30",
      duration: "40 Mins",
      category: "beard",
      image: "assets/images/service-4.webp",
      description: "Traditional hot towel shave with premium products for an incredibly smooth, refreshing, and relaxing finish."
    },
    {
      num: "05",
      id: "hair-beard-combo",
      title: "Hair & Beard Combo",
      price: "$45",
      duration: "75 Mins",
      category: "combos",
      image: "assets/images/service-5.webp",
      description: "Complete grooming package combining a precision haircut and expert beard styling for a flawless look."
    },
    {
      num: "06",
      id: "kids-haircut",
      title: "Kids Haircut",
      price: "$25",
      duration: "30 Mins",
      category: "haircuts",
      image: "assets/images/service-6.webp",
      description: "Friendly haircut experience designed to keep young gentlemen comfortable while looking their very best."
    }
  ],

  team: [
    {
      id: "sam",
      name: "Sam",
      role: "Master Barber",
      experience: "18 Years Experience",
      specialty: "Classic Scissor Cuts & Executive Styling",
      image: "assets/images/team-1.webp",
      hoverImage: "assets/images/team-1-hover.webp",
      bio: "Founder and master craftsman trained in classic European and New York tailoring techniques."
    },
    {
      id: "leo",
      name: "Leo",
      role: "Fade Specialist",
      experience: "9 Years Experience",
      specialty: "Zero Skin Fades & Modern Texture",
      image: "assets/images/team-2.webp",
      hoverImage: "assets/images/team-2-hover.webp",
      bio: "Precision fade architect known for seamless transitions, sharp hairlines, and contemporary crops."
    },
    {
      id: "max",
      name: "Max",
      role: "Beard Grooming Expert",
      experience: "11 Years Experience",
      specialty: "Hot Towel Straight-Razor Shaves & Beard Sculpting",
      image: "assets/images/team-3.webp",
      hoverImage: "assets/images/team-3-hover.webp",
      bio: "Dedicated specialist in facial symmetry, straight-razor detailing, and botanical beard conditioning."
    }
  ],

  reviews: [
    {
      id: 1,
      quote: "Men Salon never disappoints. The atmosphere is relaxed, the service is excellent, and the haircut always comes out looking fresh. Definitely my new favorite barbershop in town.",
      author: "Oliver Bennett",
      service: "Classic Haircut",
      rating: 5,
      avatar: "assets/images/author-1.webp"
    },
    {
      id: 2,
      quote: "Great service from start to finish. The barber understood the style I wanted and delivered an incredibly clean cut. You can really tell they care about quality and customer satisfaction.",
      author: "Daniel Cooper",
      service: "Modern Fade",
      rating: 5,
      avatar: "assets/images/author-2.webp"
    },
    {
      id: 3,
      quote: "I had an amazing experience at Men Salon. The staff was welcoming, the shop looked great, and my haircut turned out better than expected. I’ll definitely be coming back again soon.",
      author: "James Wilson",
      service: "Premium Styling",
      rating: 5,
      avatar: "assets/images/author-3.webp"
    }
  ],

  gallery: [
    { id: 1, src: "assets/images/gal-1.webp", title: "Classic Pompadour Detail", category: "classic" },
    { id: 2, src: "assets/images/gal-4.webp", title: "Sculpted Beard & Lineup", category: "beard" },
    { id: 3, src: "assets/images/gal-2.webp", title: "Razor Sharp Skin Fade", category: "fade" },
    { id: 4, src: "assets/images/gal-3.webp", title: "Signature Hot Towel Ritual", category: "beard" },
    { id: 5, src: "assets/images/gal-5.webp", title: "Heritage Chair Craftsmanship", category: "shop" },
    { id: 6, src: "assets/images/homepage-2.webp", title: "Executive Scissor Trim", category: "classic" }
  ],

  blogPosts: [
    {
      id: "why-regular-haircuts-matter",
      title: "Why Regular Haircuts Make a Bigger Difference Than You Might Think",
      day: "31",
      month: "Aug",
      category: "Barber Tips",
      author: "Samuel Sterling",
      readTime: "4 Min Read",
      image: "assets/images/blog-1.webp",
      excerpt: "Consistent maintenance every three to four weeks preserves silhouette proportions, removes split ends, and makes daily styling effortless.",
      body: [
        "Most gentlemen wait until their haircut loses all structure before booking a chair. By that stage, the neckline has grown uneven and the crown weight pulls styling products flat.",
        "Scheduling regular trims every three to four weeks keeps fade gradients crisp and allows your barber to refine texture as your hair grows naturally.",
        "Regular scalp and trim care also stimulates healthier follicle turnover, reduces breakage around the temples, and ensures you always step into meetings or evenings out looking effortlessly put together."
      ],
      quote: "A great haircut isn’t just how it looks on day one—it’s how gracefully it grows out through week three."
    },
    {
      id: "maintain-fresh-haircut-daily",
      title: "How to Maintain a Fresh Haircut and Sharp Look Every Day",
      day: "31",
      month: "Aug",
      category: "Barber Tips",
      author: "Leo Vance",
      readTime: "5 Min Read",
      image: "assets/images/blog-2.webp",
      excerpt: "From choosing matte clay versus water-soluble pomade to blow-drying direction, small morning habits extend salon-day sharpness.",
      body: [
        "Walking out of the barbershop with sharp contours is only half the story. The right morning routine takes less than four minutes when you match product weight to hair density.",
        "Start by towel-blotting damp hair rather than rubbing vigorously, then apply a pea-sized amount of pre-styling tonic before directing airflow along the natural crown swirl.",
        "Finish with a warm-to-cool blow-dry switch to lock volume in place, and touch up sideburns with a quality precision trimmer only along the outer edge."
      ],
      quote: "Less product, better preparation—heat direction and clean tools do eighty percent of the work."
    },
    {
      id: "essential-grooming-tips-modern-man",
      title: "Essential Grooming Tips Every Modern Man Should Know",
      day: "30",
      month: "Aug",
      category: "Grooming",
      author: "Max Sterling",
      readTime: "6 Min Read",
      image: "assets/images/blog-4.webp",
      excerpt: "Build an intentional ritual covering facial exfoliation, cold-pressed beard oils, and hot towel hydration between barbershop visits.",
      body: [
        "Modern grooming goes beyond a quick trim. Healthy skin beneath a beard prevents dryness, itchiness, and uneven growth patches.",
        "Incorporate a gentle charcoal or oat exfoliant twice weekly before shaving or applying beard oil. Warm water opens pores prior to lathering, while a cool splash afterward seals skin comfort.",
        "Pair a natural boar-bristle brush with two drops of cedarwood oil to distribute natural sebum evenly from root to tip."
      ],
      quote: "Refined grooming is quiet confidence—discipline practiced in small daily details."
    },
    {
      id: "choose-right-haircut-face-shape",
      title: "How to Choose the Right Haircut for Your Face Shape and Personal Style",
      day: "30",
      month: "Aug",
      category: "Hair Care",
      author: "Samuel Sterling",
      readTime: "5 Min Read",
      image: "assets/images/s1.webp",
      excerpt: "Balance angular jawlines, round contours, or oval proportions with tailored taper heights and crown lengths.",
      body: [
        "Every face shape responds differently to volume and side tapering. Round faces benefit from tighter skin fades and height on top to elongate proportions.",
        "Square jawlines shine with classic side parts, textured crops, or mid tapers that echo strong bone structure without looking boxy.",
        "During your consultation at Men Salon, we assess crown cowlicks, hairline recession patterns, and your wardrobe aesthetic before making a single snip."
      ],
      quote: "True bespoke barbering adapts the trend to your bone structure—never the other way around."
    },
    {
      id: "simple-grooming-habits-daily-routine",
      title: "Simple Grooming Habits Every Man Should Add to His Daily Routine",
      day: "30",
      month: "Aug",
      category: "Grooming",
      author: "Max Sterling",
      readTime: "4 Min Read",
      image: "assets/images/blog-3.webp",
      excerpt: "Five low-effort upgrades—from silk pillowcases to sulfate-free cleansers—that elevate hair strength and skin clarity.",
      body: [
        "Harsh supermarket shampoos strip essential scalp oils, triggering rebound oiliness by afternoon. Switching to a sulfate-free cleanser twice or thrice weekly keeps texture supple.",
        "Keep a pocket comb handy, hydrate consistently, and protect your hairline from excessive heat styling by using lightweight leave-in conditioners.",
        "Over just two weeks, these habits noticeably improve hair shine, beard softness, and overall skin tone."
      ],
      quote: "Consistency always outperforms complicated ten-step routines."
    },
    {
      id: "keep-hair-healthy-strong",
      title: "Hair Care: How to Keep Your Hair Healthy, Strong, and Looking Its Best",
      day: "28",
      month: "Aug",
      category: "Hair Care",
      author: "Leo Vance",
      readTime: "5 Min Read",
      image: "assets/images/s2.webp",
      excerpt: "Discover scalp massage techniques, nutrient balance, and clean product rinsing habits that protect long-term hair vitality.",
      body: [
        "Strong hair begins beneath the surface. Spending sixty seconds massaging your scalp in the shower boosts micro-circulation and helps clear styling buildup.",
        "Always rinse styling clays thoroughly before bed so follicles breathe overnight, and opt for water-soluble formulas whenever possible.",
        "Combined with balanced nutrition and periodic conditioning treatments at the barbershop, your hair stays resilient year-round."
      ],
      quote: "Healthy hair holds any style better—invest in scalp wellness first."
    }
  ]
};
