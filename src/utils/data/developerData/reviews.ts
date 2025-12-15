export interface Review {
  id: string;
  devId: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  service: string;
}

export const reviews: Review[] = [
  {
    id: "r1",
    devId: 1,
    userName: "Alice Doe",
    rating: 5,
    comment: "Amazing work overall! The project was delivered quickly and with excellent quality. Truly professional and easy to work with.",
    date: "2025-10-18",
    service: "E-Commerce Website"
  },
  {
    id: "r2",
    devId: 1,
    userName: "Samir Hamidi",
    rating: 4,
    comment: "Good communication and very clean, structured code. A few adjustments were needed, but everything was handled smoothly.",
    date: "2025-02-19",
    service: "API Development"
  },
  {
    id: "r3",
    devId: 2,
    userName: "Fatima El Alaoui",
    rating: 5,
    comment: "Excellent backend logic and great performance optimization. The final result was exactly what I needed.",
    date: "2025-01-21",
    service: "Dashboard Development"
  }
  ,
  {
    id: "r4",
    devId: 3,
    userName: "Karim Mohammadi",
    rating: 4,
    comment: "The mobile app is smooth and fast! Karim is very cool in explanations, i hope other to join his portfolios, it's owsome...",
    date: "2025-01-16",
    service: "Game App"
  }, {
    id: "r5",
    devId: 3,
    userName: "Karim Mohammadi",
    rating: 3,
    comment: "التطبيق جيد من حيث الفكرة والتصميم العام، وهناك مجهود واضح في تطويره. لكن ما زال يحتاج بعض التحسينات في السرعة وتجربة المستخدم، خصوصًا في التنبيهات وتحميل الصفحات. إذا تم تطوير هذه الجوانب، سيكون التطبيق أفضل بكثير",
    date: "2025-11-03",
    service: "Social Media App"
  }, {
    id: "r6",
    devId: 2,
    userName: "Claire Dupont",
    rating: 5,
    comment: "Travail impeccable ! Rapide, organisé et très professionnel. Je recommande vivement.",
    date: "2025-03-02",
    service: "Portfolio Website"
  }, {
    id: "r7",
    devId: 1,
    userName: "Carlos Mendoza",
    rating: 4,
    comment: "Buen desarrollo y una comunicación constante. El proyecto quedó muy bien terminado.",
    date: "2025-04-11",
    service: "Mobile App"
  }, {
    id: "r8",
    devId: 3,
    userName: "John Walker",
    rating: 5,
    comment: "Fantastic experience! Everything was delivered on time and the quality exceeded expectations.",
    date: "2025-02-07",
    service: "Full-Stack Web App"
  }, {
    id: "r9",
    devId: 1,
    userName: "Mohammed Idrissi",
    rating: 5,
    comment: "Exceptional delivery and a great eye for detail. The design felt modern and the performance was excellent across devices.",
    date: "2025-03-12",
    service: "Landing Page"
  },
  {
    id: "r10",
    devId: 1,
    userName: "Elena Novak",
    rating: 4,
    comment: "Very solid work overall. A few small revisions were needed, but the final result was polished and professional.",
    date: "2025-05-04",
    service: "Admin Dashboard"
  },
  {
    id: "r11",
    devId: 2,
    userName: "Youssef Chami",
    rating: 3,
    comment: "The project was delivered with acceptable quality. Some parts needed extra optimization, but communication was good.",
    date: "2025-06-18",
    service: "REST API"
  },
  {
    id: "r12",
    devId: 2,
    userName: "Anna Schmidt",
    rating: 5,
    comment: "Wirklich großartige Arbeit! Klare Struktur, schnelle Umsetzung und hervorragende Codequalität.",
    date: "2025-04-29",
    service: "Custom CMS"
  },
  {
    id: "r13",
    devId: 3,
    userName: "Sofia Martins",
    rating: 4,
    comment: "Great experience working together. The app feels smooth and user-friendly, with only minor improvements needed.",
    date: "2025-07-09",
    service: "Mobile App UX Update"
  },
  {
    id: "r14",
    devId: 3,
    userName: "Akira Tanaka",
    rating: 5,
    comment: "素晴らしい仕事でした！コードはとても綺麗で、機能の実装も完璧でした。また依頼したいです。",
    date: "2025-08-21",
    service: "Booking System"
  },
  {
    id: "r15",
    devId: 4,
    userName: "Layla Bensalem",
    rating: 5,
    comment: "عمل ممتاز للغاية! السرعة في الإنجاز والجودة العالية جعلت التجربة رائعة من البداية حتى النهاية.",
    date: "2025-09-15",
    service: "Marketing Website"
  }, {
    id: "r16",
    devId: 5,
    userName: "Omar Belhaj",
    rating: 5,
    comment: "Great DevOps support! CI/CD pipelines were implemented smoothly and deployment times improved significantly.",
    date: "2025-06-12",
    service: "CI/CD Integration"
  },
  {
    id: "r17",
    devId: 5,
    userName: "Julia Herrera",
    rating: 2,
    comment: "The setup worked but required several fixes afterwards. Communication was fine, but the delivery felt rushed.",
    date: "2025-07-03",
    service: "Server Optimization"
  },
  {
    id: "r18",
    devId: 5,
    userName: "Ahmed Saadi",
    rating: 1,
    comment: "للأسف التجربة لم تكن جيدة، حصلت مشاكل متكررة في الخادم واضطررت لإعادة التهيئة بنفسي.",
    date: "2025-03-19",
    service: "Cloud Deployment"
  }, {
    id: "r19",
    devId: 6,
    userName: "Lisa Moreau",
    rating: 5,
    comment: "Beautiful transitions and clean storytelling. The final video looked modern, smooth, and very professional.",
    date: "2025-09-01",
    service: "Promo Video Editing"
  },
  {
    id: "r20",
    devId: 6,
    userName: "Rafael Torres",
    rating: 3,
    comment: "Good work overall, but some scenes needed color correction. Still, the motion design quality was impressive.",
    date: "2025-09-22",
    service: "Motion Graphics"
  },
  {
    id: "r21",
    devId: 6,
    userName: "Nadia El Madi",
    rating: 0,
    comment: "للأسف لم يعجبني العمل. الفيديو كان غير متناسق والمؤثرات لم تكن مناسبة للموضوع النهائي.",
    date: "2025-08-10",
    service: "Visual Intro"
  },
  {
    id: "r22",
    devId: 6,
    userName: "Hiroshi Kenta",
    rating: 4,
    comment: "アニメーションはとても綺麗で、編集の流れも良かったです。少しだけテンポを改善できると思います。",
    date: "2025-07-28",
    service: "Motion Intro Animation"
  },
  {
    id: "r23",
    devId: 7,
    userName: "John Miller",
    rating: 5,
    comment: "Very professional and discreet. Identified critical security issues and provided clear recommendations.",
    date: "2025-09-12",
    service: "Security Audit"
  },
  {
    id: "r24",
    devId: 7,
    userName: "Claire Dupont",
    rating: 4,
    comment: "Analyse de sécurité très sérieuse. Communication claire et résultats précis.",
    date: "2025-09-15",
    service: "Audit de Sécurité"
  },
  {
    id: "r25",
    devId: 7,
    userName: "Youssef El Amrani",
    rating: 5,
    comment: "خدمة احترافية، تم اكتشاف ثغرات مهمة مع تقرير واضح وسهل الفهم.",
    date: "2025-09-18",
    service: "اختبار الاختراق"
  },
  {
    id: "r26",
    devId: 7,
    userName: "Carlos Ramirez",
    rating: 4,
    comment: "Buen trabajo en el análisis de vulnerabilidades. Resultados rápidos y bien documentados.",
    date: "2025-09-20",
    service: "Análisis de Seguridad"
  },
  {
    id: "r27",
    devId: 7,
    userName: "Luca Bianchi",
    rating: 5,
    comment: "Ottimo servizio di sicurezza. Approccio professionale e grande attenzione ai dettagli.",
    date: "2025-09-23",
    service: "Penetration Testing"
  },
  {
    id: "r28",
    devId: 7,
    userName: "Fatima Zahra",
    rating: 5,
    comment: "تعامل احترافي وسري للغاية، مع نتائج دقيقة وتوصيات فعالة.",
    date: "2025-09-25",
    service: "تدقيق أمني"
  },
  {
    id: "r29",
    devId: 7,
    userName: "Markus Schneider",
    rating: 4,
    comment: "Sehr zuverlässige Sicherheitsanalyse. Schwachstellen wurden klar identifiziert.",
    date: "2025-09-28",
    service: "Sicherheitsaudit"
  },
  {
    id: "r30",
    devId: 7,
    userName: "Aiko Tanaka",
    rating: 5,
    comment: "高い専門性を感じました。セキュリティ上の問題点を的確に指摘してくれました。",
    date: "2025-10-01",
    service: "セキュリティ評価"
  },
  {
    id: "r31",
    devId: 7,
    userName: "Ahmed Benali",
    rating: 4,
    comment: "Rapide, efficace et très discret. Les failles critiques ont été clairement expliquées.",
    date: "2025-10-05",
    service: "Vulnerability Assessment"
  },
  {
    id: "r32",
    devId: 7,
    userName: "Emily Carter",
    rating: 5,
    comment: "Excellent security expertise. The assessment was thorough and extremely helpful for improving our defenses.",
    date: "2025-10-08",
    service: "Penetration Test"
  }

];