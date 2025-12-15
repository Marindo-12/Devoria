import type { Developer } from "./developer";

import secondImage from "../../../../public/images/second-image.webp";
import firstImage from "../../../../public/images/first-image.webp";
import thirdImage from "../../../../public/images/third-image.webp";
import fourthImage from "../../../../public/images/fourth-image.webp";
import fifthImage from "../../../../public/images/fifth-image.webp";
import sixthImage from "../../../../public/images/sixth-image.webp";
import seventhImage from "../../../../public/images/hacker1.jpg"

export const developers: Developer[] = [
  {
    devId: 1,
    id: "826c4f02-f22a-4a7c-9c76-39284bf3761a",
    personal: {
      profileImage: secondImage,
      name: "Douakh Mohammed",
      location: { country: "Morocco", city: "Meknes" },
      aboutMe: ['developerInsideProfile.aboutMe.description1.para1', 'developerInsideProfile.aboutMe.description1.para2']
    },
    professional: {
      category: "webDevelopment",
      rate1: { min: 75, max: 150 },
      title: "Full Stack Developer",
      skills: [
        { name: "React", percent: 95 },
        { name: "Node.js", percent: 90 },
        { name: "TypeScript", percent: 88 },
        { name: "PostgreSQL", percent: 85 },
        { name: "AWS", percent: 80 }
      ],
      availability: "Full-time availability",
    },
    stats: { rating: { rate: 49, review: 3 }, likes: 1200 },

    services: [
      {
        id: 1,
        type: "web",
        nameService: "developerInsideProfile.serviceNames.web",
        priceService: { min: 75, max: 150 },
        description: "developerInsideProfile.serviceDescriptions.web",
      },
      {
        id: 2,
        type: "Api",
        nameService: "developerInsideProfile.serviceNames.api2",
        priceService: { min: 80, max: 160 },
        description: "developerInsideProfile.serviceDescriptions.api",
      }
    ]
  },
  {
    devId: 2,
    id: "3d8dc8dd-134e-4841-88d2-04095f74742d",
    personal: {
      profileImage: firstImage,
      name: "Chouyoukh Yassine",
      location: { country: "Morocco", city: "Rabat" },
      aboutMe: ['developerInsideProfile.aboutMe.description2.para1', 'developerInsideProfile.aboutMe.description2.para2']
    },
    professional: {
      category: "backend",
      rate1: { min: 80, max: 160 },
      title: "Backend Engineer",
      skills: [
        { name: "Python", percent: 95 },
        { name: "Django", percent: 90 },
        { name: "MongoDB", percent: 85 }
      ],
      availability: "Monday, Thursday and Saturday",
    },
    stats: { rating: { rate: 48, review: 23 }, likes: 189 },

    services: [
      {
        id: 1,
        type: "Api",
        nameService: "developerInsideProfile.serviceNames.api2",
        priceService: { min: 80, max: 160 },
        description: "developerInsideProfile.serviceDescriptions.api2",
      },
      {
        id: 2,
        type: "database",
        nameService: "developerInsideProfile.serviceNames.database",
        priceService: { min: 70, max: 140 },
        description: "developerInsideProfile.serviceDescriptions.data",

      }
    ]
  },
  {
    devId: 3,
    id: "16055edf-c4ba-4eb6-8121-76f897921fc8",
    personal: {
      profileImage: thirdImage,
      name: "Ait Hammadi Mohammed",
      location: { country: "France", city: "Paris" },
      aboutMe: ['developerInsideProfile.aboutMe.description3.para1', 'developerInsideProfile.aboutMe.description3.para2']
    },
    professional: {
      category: "mobileApps",
      rate1: { min: 70, max: 140 },
      title: "Mobile Developer",
      skills: [
        { name: "React Native", percent: 90 },
        { name: "Swift", percent: 85 },
        { name: "Kotlin", percent: 80 }
      ],
      availability: "Only Sunday",
    },
    stats: { rating: { rate: 50, review: 1010 }, likes: 1122 },

    services: [
      {
        id: 1,
        type: "mobile",
        nameService: "developerInsideProfile.serviceNames.mobileApps",
        priceService: { min: 75, max: 150 },
        description: "developerInsideProfile.serviceDescriptions.mobile",

      },
      {
        id: 2,
        type: "Api",
        nameService: "developerInsideProfile.serviceNames.api",
        priceService: { min: 80, max: 160 },
        description: "developerInsideProfile.serviceDescriptions.backend",

      }
    ]
  },
  {
    devId: 4,
    id: "33d0ac32-f7cd-4b56-adcf-e175a929afe8",
    personal: {
      profileImage: fourthImage,
      name: "Hilali Omar",
      location: { country: "United States", city: "New York" },
      aboutMe: ['developerInsideProfile.aboutMe.description4.para1', 'developerInsideProfile.aboutMe.description4.para2']
    },
    professional: {
      category: "aiMl",
      rate1: { min: 80, max: 160 },
      title: "UI/UX Developer",
      skills: [
        { name: "React", percent: 90 },
        { name: "Node.js", percent: 80 },
        { name: "Figma", percent: 85 }
      ],
      availability: "Full-time availability",
    },
    stats: { rating: { rate: 47, review: 4 }, likes: 2122 },

    services: [
      {
        id: 1,
        type: "web",
        nameService: "developerInsideProfile.serviceNames.front",
        priceService: { min: 80, max: 160 },
        description: "developerInsideProfile.serviceDescriptions.uis",

      },
      {
        id: 2,
        type: "ecommerce",
        nameService: "developerInsideProfile.serviceNames.design",
        priceService: { min: 75, max: 150 },
        description: "developerInsideProfile.serviceDescriptions.design",

      }
    ]
  },
  {
    devId: 5,
    id: "c1a94fd7-332d-4087-8d11-c5409d7bc305",
    personal: {
      profileImage: fifthImage,
      name: "James Kim",
      location: { country: "Italy", city: "Rome" },
      aboutMe: ['developerInsideProfile.aboutMe.description5.para1', 'developerInsideProfile.aboutMe.description5.para2']
    },
    professional: {
      category: "devOps",
      rate1: { min: 75, max: 150 },
      title: "DevOps Engineer",
      skills: [
        { name: "AWS", percent: 90 },
        { name: "Docker", percent: 85 },
        { name: "Kubernetes", percent: 80 }
      ],
      availability: "Monday 13–21 pm",
    },
    stats: { rating: { rate: 31, review: 20 }, likes: 20 },

    services: [
      {
        id: 1,
        type: "devops",
        nameService: "developerInsideProfile.serviceNames.devOps",
        priceService: { min: 75, max: 150 },
        description: "developerInsideProfile.serviceDescriptions.cicd",

      },
      {
        id: 2,
        type: "Api",
        nameService: "developerInsideProfile.serviceNames.deployment",
        priceService: { min: 80, max: 160 },
        description: "developerInsideProfile.serviceDescriptions.api3",

      }
    ]
  },
  {
    devId: 6,
    id: "48c509f8-b365-419b-8943-79f89b1b86e9",
    personal: {
      profileImage: sixthImage,
      name: "David Lee",
      location: { country: "China", city: "Pékin" },
      aboutMe: ['developerInsideProfile.aboutMe.description6.para1', 'developerInsideProfile.aboutMe.description6.para2']
    },
    professional: {
      category: "videoEditor",
      rate1: { min: 70, max: 140 },
      title: "Video Editor & Motion Designer",
      skills: [
        { name: "After Effects", percent: 95 },
        { name: "Premiere Pro", percent: 90 },
        { name: "DaVinci Resolve", percent: 85 }
      ],
      availability: "Full-time availability",
    },
    stats: { rating: { rate: 41, review: 65 }, likes: 322 },

    services: [
      {
        id: 1,
        type: "video",
        nameService: "developerInsideProfile.serviceNames.videoEd",
        priceService: { min: 75, max: 150 },
        description: "developerInsideProfile.serviceDescriptions.editing",

      },
      {
        id: 2,
        type: "web",
        nameService: "developerInsideProfile.serviceNames.videoAds",
        priceService: { min: 80, max: 160 },
        description: "developerInsideProfile.serviceDescriptions.ads",
      }
    ]
  },
  {
    devId: 7,
    id: "pu6v4537-897f-4087-8d11-c5409d7bc305",

    personal: {
      profileImage: seventhImage,
      name: "HXXU",
      location: { country: "Hidden", city: "Hidden" },
      aboutMe: [
        "developerInsideProfile.aboutMe.description7.para1",
        "developerInsideProfile.aboutMe.description7.para2"
      ]
    },

    professional: {
      category: "hack",
      rate1: { min: 75, max: 150 },
      title: "Anonymous Hacker",
      skills: [
        { name: "Hidden", percent: 0 },
        { name: "Hidden", percent: 0 },
        { name: "Hidden", percent: 0 }
      ],
      availability: "Unknown"
    },

    stats: {
      rating: { rate: 31, review: 20 },
      likes: 20
    },

    services: [
      {
        id: 1,
        type: "hack",
        nameService: "developerInsideProfile.serviceNames.securityAudit",
        priceService: { min: 80, max: 150 },
        description: "developerInsideProfile.serviceDescriptions.securityAudit"
      },
      {
        id: 2,
        type: "hack",
        nameService: "developerInsideProfile.serviceNames.penetrationTesting",
        priceService: { min: 100, max: 200 },
        description: "developerInsideProfile.serviceDescriptions.penetrationTesting"
      },
      {
        id: 3,
        type: "hack",
        nameService: "developerInsideProfile.serviceNames.vulnerabilityAssessment",
        priceService: { min: 70, max: 130 },
        description: "developerInsideProfile.serviceDescriptions.vulnerabilityAssessment"
      }
    ]
  }

];