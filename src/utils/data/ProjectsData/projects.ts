import type { Project } from "./project";
import { v4 as uuid } from "uuid";
import cartShop from "../../../../public/images/shopping-cart-with-shopping-cart-top-it_993259-8050.avif";
import taskM from "../../../../public/images/Task-Management-Apps-Graphics-57578451-1.jpg"
import socialM from "../../../../public/images/social-media-app.webp"
import analy from "../../../../public/images/analyst-working-on-business-analytics-dashboard-generated-ai-photo.jpeg"
import fitness from "../../../../public/images/fitness-tracker.png"
import travel from "../../../../public/images/travel.jpg"
import learn from "../../../../public/images/Core-by-LearnAMP-LXP-Software-1024x683.webp"

export const projects: Project[] = [{
  id: uuid(),
  devId: 1,
  title: "E-Commerce Platform",
  description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
  imageUrl: cartShop,
  technologies: ["React", "Node.js", "PostgreSQL"],
  views: 1543,
  likes: 389,
  reviews: { rate: 4.9, review: 45 },
  price: "$2,999",
  business: {
    timeEstimate: "2-3 weeks",
    supportDuration: "Lifetime support included"
  },
  about: `A fully-featured e-commerce platform built with modern technologies. Includes real-time inventory management, secure payment processing, and comprehensive analytics dashboard.

  This project is a complete e-commerce solution designed for scaling. It features:

  • Real-time inventory management with automated alerts
  • Secure payment processing with multiple payment gateways
  • User authentication and profile management
  • Advanced search and filtering capabilities
  • Mobile-responsive design
  • Admin dashboard with analytics
  • Order tracking and fulfillment system
  • Customer review and rating system

  Perfect for businesses looking to launch their online store quickly with enterprise-grade features.`,
  comments: [
    {
      id: uuid(),
      userId: 10,
      username: "Mohammed Issam",
      text: "Amazing project! The dashboard is super intuitive.",
      likes: 12,
      createdAt: "2025-02-01",
      userLiked: false
    },
    {
      id: uuid(),
      userId: 14,
      username: "Aya Hamidi",
      text: "Great performance and clean UI, impressive work!",
      likes: 8,
      createdAt: "2025-11-03",
      userLiked: false
    }
  ]
}, {
  id: uuid(),
  devId: 3,
  title: "Travel Booking Website",
  description: "A website for booking travel accommodations, flights, and rental cars.",
  imageUrl: travel,
  technologies: ["Angular", "Node.js", "MongoDB"],
  views: 1285,
  likes: 102,
  reviews: { rate: 3.3, review: 33 },
  price: "$999",
  business: {
    timeEstimate: "2-3 weeks",
    supportDuration: "Lifetime support included"
  },
  about: `A complete travel booking platform allowing users to reserve flights, hotels, and rental cars in one place. Built with a clean interface and a fast, secure backend.

This project offers:

• Search and compare flights, hotels, and cars
• Interactive maps and destination details
• Secure booking and payment integration
• User accounts with saved trips and favorites
• Filtering by date, price, ratings, and more
• Responsive multi-page layout with Angular
• Real-time availability and confirmation emails
• Admin panel for managing listings and reservations

Perfect for travel agencies or entrepreneurs wanting to launch a professional and large-scale booking service.`,
comments: [
    {
      id: uuid(),
      userId: 10,
      username: "Mohammed Issam",
      text: "Amazing project! The dashboard is super intuitive.",
      likes: 12,
      createdAt: "2025-02-01",
      userLiked: false
    },
    {
      id: uuid(),
      userId: 14,
      username: "Aya Hamidi",
      text: "Great performance and clean UI, impressive work!",
      likes: 8,
      createdAt: "2025-11-03",
      userLiked: false
    }
  ]

}, {
  id: uuid(),
  devId: 2,
  title: "Social Media App",
  description: "A social media application with features like posting, commenting, and liking.",
  imageUrl: socialM,
  technologies: ["React Native", "GraphQL", "AWS"],
  views: 2345,
  likes: 512,
  reviews: {
    rate: 4.8, review: 78
  },
  price: "$999",
  business: {
    timeEstimate: "2-3 weeks",
    supportDuration: "Lifetime support included"
  },
  about: `A fully featured social media application developed with scalable cloud architecture. Designed to deliver a smooth and engaging social experience across devices.

This platform includes:

• Ability to post text, photos, and videos
• Real-time likes, comments, and notifications
• User profiles with customizable settings
• News feed with smart content ranking
• Private messaging and chat system
• GraphQL API for efficient data fetching
• Secure authentication and cloud media storage
• Mobile-first UI built with React Native

Ideal for startups or communities wanting to launch a modern, scalable, and interactive social media experience.`,
comments: [
    {
      id: uuid(),
      userId: 10,
      username: "Mohammed Issam",
      text: "Amazing project! The dashboard is super intuitive.",
      likes: 12,
      createdAt: "2025-02-01",
      userLiked: false
    },
    {
      id: uuid(),
      userId: 14,
      username: "Aya Hamidi",
      text: "Great performance and clean UI, impressive work!",
      likes: 8,
      createdAt: "2025-11-03",
      userLiked: false
    }
  ]

}, {
  id: uuid(),
  devId: 4,
  title: "Analytics Dashboard",
  description: "Real-time analytics dashboard for monitoring key performance indicators.",
  imageUrl: analy,
  technologies: ["React", "D3.js", "PostgreSQL"],
  views: 2104,
  likes: 156,
  reviews: { rate: 4.2, review: 25 },
  price: "$1,499",
  business: {
    timeEstimate: "2-3 weeks",
    supportDuration: "Lifetime support included"
  },
  about: `A high-performance analytics dashboard for visualizing and monitoring KPIs in real time. Built with advanced data visualization tools and optimized database queries.

Key features include:

• Interactive charts and graphs powered by D3.js
• Real-time data updates with minimal latency
• Customizable dashboard widgets
• User-based access control and roles
• Historical data comparison and trend analysis
• Exportable reports and data tables
• Integrations with external APIs and databases
• Responsive design for all device sizes

Perfect for organizations needing actionable insights and powerful visualization tools to track performance.`,
comments: [
    {
      id: uuid(),
      userId: 10,
      username: "Mohammed Issam",
      text: "Amazing project! The dashboard is super intuitive.",
      likes: 12,
      createdAt: "2025-02-01",
      userLiked: false
    },
    {
      id: uuid(),
      userId: 14,
      username: "Aya Hamidi",
      text: "Great performance and clean UI, impressive work!",
      likes: 8,
      createdAt: "2025-11-03",
      userLiked: false
    }
  ]

}, {
  id: uuid(),
  devId: 5,
  title: "Fitness Tracker",
  description: "A mobile app to track workouts, nutrition, and progress over time.",
  imageUrl: fitness,
  technologies: ["Flutter", "Firebase", "TensorFlow"],
  views: 1987,
  likes: 423,
  reviews: { rate: 4.7, review: 40 },
  price: "$1,299",
  business: {
    timeEstimate: "2-3 weeks",
    supportDuration: "Lifetime support included"
  },
  about: `A smart fitness tracking mobile application designed to help users monitor workouts, track nutrition, and improve health performance over time.

This project includes:

• Workout tracking with history and analytics
• Nutrition and calorie intake monitoring
• AI-powered recommendations using TensorFlow
• Personalized fitness goals and progress charts
• In-app reminders for workouts and hydration
• Social sharing and achievement badges
• Cloud sync across devices using Firebase
• Intuitive and modern mobile UI built with Flutter

Perfect for fitness coaches, athletes, or individuals who want an intelligent all-in-one fitness companion.`,
comments: [
    {
      id: uuid(),
      userId: 10,
      username: "Mohammed Issam",
      text: "Amazing project! The dashboard is super intuitive.",
      likes: 12,
      createdAt: "2025-02-01",
      userLiked: false
    },
    {
      id: uuid(),
      userId: 14,
      username: "Aya Hamidi",
      text: "Great performance and clean UI, impressive work!",
      likes: 8,
      createdAt: "2025-11-03",
      userLiked: false
    }
  ]

}, {
  id: uuid(),
  devId: 1,
  title: "Task Management App",
  description: "Collaborative task management app with real-time updates and notifications.",
  imageUrl: taskM,
  technologies: ["Vue", "Firebase", "Tailwind"],
  views: 856,
  likes: 62,
  reviews: { rate: 4.5, review: 30 },
  price: "$1,789",
  business: {
    timeEstimate: "2-3 weeks",
    supportDuration: "Lifetime support included"
  },
  about: `A powerful collaborative task management application designed to boost productivity and team coordination. Built with real-time synchronization and an intuitive interface.

This project provides a complete task management experience with:

• Real-time task updates using Firebase
• Team collaboration with shared boards and role-based permissions
• Smart notifications for deadlines and updates
• Drag-and-drop task organization
• Progress tracking and status labels
• Mobile-responsive modern design
• Activity logs for transparency
• File attachments and comments on tasks

Perfect for teams and individuals who need a fast, reliable, and collaborative task management solution.`,
comments: [
    {
      id: uuid(),
      userId: 10,
      username: "Mohammed Issam",
      text: "Amazing project! The dashboard is super intuitive.",
      likes: 12,
      createdAt: "2025-02-01",
      userLiked: false
    },
    {
      id: uuid(),
      userId: 14,
      username: "Aya Hamidi",
      text: "Great performance and clean UI, impressive work!",
      likes: 8,
      createdAt: "2025-11-03",
      userLiked: false
    }
  ]
}, {
  id: uuid(),
  devId: 6,
  title: "Online Learning Platform",
  description: "A platform for online courses, quizzes, and certifications.",
  imageUrl: learn,
  technologies: ["React", "Node.js", "MongoDB"],
  views: 54321,
  likes: 4321,
  reviews: { rate: 4.9, review: 321 },
  price: "$1,999",
  business: {
    timeEstimate: "2-3 weeks",
    supportDuration: "Lifetime support included"
  },
  about: `A feature-rich online learning platform supporting courses, quizzes, progress tracking, and digital certifications. Designed for scalability and smooth user experience.

The platform includes:

• Course creation and management tools
• Video lessons, downloadable material, and quizzes
• Progress tracking with detailed analytics
• Certification system with auto-generated certificates
• Discussion forums and student-teacher messaging
• Secure authentication and role-based access
• Payment integration for premium courses
• Fully responsive UI for web and mobile users

Ideal for educators, academies, and companies looking to provide structured and interactive online learning experiences.`,
comments: [
    {
      id: uuid(),
      userId: 10,
      username: "Mohammed Issam",
      text: "Amazing project! The dashboard is super intuitive.",
      likes: 12,
      createdAt: "2025-02-01",
      userLiked: false
    },
    {
      id: uuid(),
      userId: 14,
      username: "Aya Hamidi",
      text: "Great performance and clean UI, impressive work!",
      likes: 8,
      createdAt: "2025-11-03",
      userLiked: false
    }
  ]

}];