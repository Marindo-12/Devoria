const currentUser = 'dev1';
const currentUserName = 'Mohamed Ait Hammadi';

const initialCommunitiesData = [
    {
        id: 'c1',
        name: 'Web Developers',
        description: 'Espace pour les développeurs web passionnés',
        creatorId: 'dev1',
        creatorName: 'Mohamed Ait Hammadi',
        members: ['dev1', 'dev2', 'dev5'],
        coverImage: "/communities/images/WEB DEVOLPPERS.jpg",
        tags: ['JavaScript', 'HTML', 'CSS', 'React', 'Vue.js'],
        isPrivate: false,
        accessCode: null,
        posts: [
            {
                id: 'p1',
                userId: 'dev2',
                userName: 'Ismat Hajji',
                content: 'Bienvenue à tous dans cette communauté ! N\'hésitez pas à partager vos projets.',
                date: '2025-11-04T10:20:00',
                comments: [
                    {
                        id: 'cm1',
                        userId: 'dev2',
                        userName: 'Ahmed Benali',
                        content: 'Merci pour l\'accueil !',
                        date: '2025-11-04T11:00:00'
                    }
                ]
            }
        ]
    },
    {
        id: 'c2',
        name: 'Mobile Apps',
        description: 'Développement d\'applications mobiles iOS et Android',
        creatorId: 'dev3',
        creatorName: 'Youssef Bamou',
        members: ['dev3', 'dev4', 'dev6'],
        coverImage: "/communities/images/MOBILE APPS.jpg",
        tags: ['Swift', 'Kotlin', 'React Native', 'Flutter'],
        isPrivate: false,
        accessCode: null,
        posts: []
    },
    {
        id: 'c3',
        name: 'Data Science & AI',
        description: 'Communauté pour les passionnés de data science et intelligence artificielle',
        creatorId: 'dev1',
        creatorName: 'Mohamed Ait Hammadi',
        members: ['dev1', 'dev7', 'dev9'],
        coverImage: "/communities/images/DATA SCIENCE AI.jpg",
        tags: ['Python', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy'],
        isPrivate: true,
        accessCode: 'DATA2025',
        posts: [
            {
                id: 'p2',
                userId: 'dev7',
                userName: 'Fatima Zahra',
                content: 'Qui travaille sur des projets de machine learning ? Partageons nos expériences !',
                date: '2025-12-03T14:30:00',
                comments: []
            }
        ]
    },
    {
        id: 'c4',
        name: 'DevOps & Cloud',
        description: 'Tout sur le DevOps, CI/CD, Docker, Kubernetes et le cloud',
        creatorId: 'dev10',
        creatorName: 'Mohamed Douakh',
        members: ['dev10', 'dev11'],
        coverImage: "/communities/images/DevOps & Cloud.jpg",
        tags: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Jenkins'],
        isPrivate: false,
        accessCode: null,
        posts: []
    },
    {
        id: 'c5',
        name: 'UI/UX Design',
        description: 'Pour les designers et développeurs front-end passionnés par l\'expérience utilisateur',
        creatorId: 'dev12',
        creatorName: 'Laila Mansouri',
        members: ['dev12', 'dev13', 'dev14'],
        coverImage: "/communities/images/UIUX DESIGN.jpg",
        tags: ['Figma', 'Adobe XD', 'Sketch', 'CSS', 'Tailwind'],
        isPrivate: false,
        accessCode: null,
        posts: [
            {
                id: 'p3',
                userId: 'dev12',
                userName: 'Laila Mansouri',
                content: 'Nouveau projet de redesign ! Besoin de vos feedbacks 🎨',
                date: '2025-12-02T16:45:00',
                comments: [
                    {
                        id: 'cm2',
                        userId: 'dev13',
                        userName: 'Omar Idrissi',
                        content: 'Super concept ! Les couleurs sont très harmonieuses.',
                        date: '2025-12-02T17:20:00'
                    }
                ]
            }
        ]
    },
    {
        id: 'c6',
        name: 'Cybersécurité',
        description: 'Discussions sur la sécurité informatique, ethical hacking et protection des données',
        creatorId: 'dev15',
        creatorName: 'Amine Harit',
        members: ['dev15', 'dev16'],
        coverImage: "/communities/images/CYBERCECURITY.jpg",
        tags: ['Kali Linux', 'Python', 'Network Security', 'Penetration Testing'],
        isPrivate: true,
        accessCode: 'SECURE123',
        posts: []
    },
    {
        id: 'c7',
        name: 'Backend Development',
        description: 'Architecture backend, API REST, microservices et bases de données',
        creatorId: 'dev10',
        creatorName: 'Mohamed Douakh',
        members: ['dev10', 'dev18'],
        coverImage: "/communities/images/BACKEND.jpg",
        tags: ['Node.js', 'Java', 'Spring Boot', 'MongoDB', 'PostgreSQL'],
        isPrivate: false,
        accessCode: null,
        posts: []
    },
    {
        id: 'c8',
        name: 'Game Development',
        description: 'Création de jeux vidéo, moteurs de jeu et programmation graphique',
        creatorId: 'dev19',
        creatorName: 'Hamza Kadar',
        members: ['dev19', 'dev20'],
        coverImage: "/communities/images/GAME DEVELOPPEMENT.jpg",
        tags: ['Unity', 'Unreal Engine', 'C#', 'C++', 'Blender'],
        isPrivate: false,
        accessCode: null,
        posts: []
    }
];

function initData() {
    if (!localStorage.getItem('communities')) {
        localStorage.setItem('communities', JSON.stringify(initialCommunitiesData));
    }
}

function getCommunities() {
    return JSON.parse(localStorage.getItem('communities')) || [];
}

function saveCommunities(communities) {
    localStorage.setItem('communities', JSON.stringify(communities));
}

function getCommunityById(communityId) {
    const communities = getCommunities();
    return communities.find(c => c.id === communityId);
}

function updateCommunity(communityId, updatedCommunity) {
    const communities = getCommunities();
    const index = communities.findIndex(c => c.id === communityId);
    if (index !== -1) {
        communities[index] = updatedCommunity;
        saveCommunities(communities);
    }
}
localStorage.removeItem('communities');
initData();