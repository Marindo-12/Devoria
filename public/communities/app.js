function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById('page-' + pageName).classList.add('active');

    if (pageName === 'list') {
        displayCommunities();
    } else if (pageName === 'my') {
        displayMyCommunities();
    }
}

function displayCommunities() {
    const communities = getCommunities();
    const container = document.getElementById('communities-list');
    container.innerHTML = '';

    communities.forEach(community => {
        container.innerHTML += createCommunityCard(community);
    });
}

function createCommunityCard(community) {
    const tagsHtml = community.tags.map(tag =>
        `<span class="tech-tag">${tag}</span>`
    ).join('');

    const privacyBadge = community.isPrivate
        ? '<span class="privacy-badge">🔒 Privée</span>'
        : '<span class="privacy-badge">🌍 Publique</span>';

    return `
        <div class="col-md-6 col-lg-4">
            <div class="community-card" onclick="viewCommunity('${community.id}')" style="position: relative;">
                ${privacyBadge}
                <img src="${community.coverImage}" class="community-cover" alt="${community.name}">
                <p class="text-xl font-semibold">${community.name}</p>
                <p class="t-mm">${community.description}</p>
                <div class="tech-tags mb-3">
                    ${tagsHtml}
                </div>
                <div class="mb-2">
                    <small class="t-mm">👤 Créée par <strong>${community.creatorName}</strong></small>
                </div>
                <div class="flex justify-end flex-col gap-2">
                    <span class="border rounded-lg py-2 px-4 bg-primary text-white text-center">${community.members.length} membres</span>
                    <span class="border rounded-lg py-2 px-4 text-center">${community.posts.length} posts</span>
                </div>
            </div>
        </div>
    `;
}

function filterCommunities() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const communities = getCommunities();
    const container = document.getElementById('communities-list');
    container.innerHTML = '';

    const filtered = communities.filter(c =>
        c.name.toLowerCase().includes(searchTerm) ||
        c.description.toLowerCase().includes(searchTerm) ||
        c.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );

    filtered.forEach(community => {
        container.innerHTML += createCommunityCard(community);
    });
}


function viewCommunity(communityId) {
    const community = getCommunityById(communityId);

    if (!community) return;

    const isMember = community.members.includes(currentUser);
    const isCreator = community.creatorId === currentUser;

    const tagsHtml = community.tags.map(tag =>
        `<span class="tech-tag">${tag}</span>`
    ).join('');

    let postsHtml = '';
    community.posts.forEach(post => {
        postsHtml += createPostCard(post, communityId, isMember);
    });

    const detailHtml = `
        <img src="${community.coverImage}" class="community-cover" alt="${community.name}">
        <div class="d-flex justify-content-between align-items-start mb-4">
            <div>
                <h2>${community.name}</h2>
                <p class="text-muted">${community.description}</p>
                <div class="tech-tags mb-3">
                    ${tagsHtml}
                </div>
                <div class="mb-2">
                    <small class="text-muted">👤 Créée par <strong>${community.creatorName}</strong></small>
                </div>
                <span class="badge bg-primary">${community.members.length} membres</span>
            </div>
            <div>
                ${!isMember ? `
                    <button class="btn btn-primary" onclick="joinCommunity('${communityId}')">Rejoindre</button>
                ` : `
                    <button class="btn btn-outline-danger" onclick="leaveCommunity('${communityId}')">Quitter</button>
                `}
            </div>
        </div>

        ${isMember ? `
            <div class="community-card mb-4">
                <h5>📝 Créer un post</h5>
                <textarea class="form-control mb-2" id="new-post" placeholder="Partagez quelque chose..." rows="3"></textarea>
                <button class="btn btn-primary" onclick="createPost('${communityId}')">Publier</button>
            </div>
        ` : ''}

        <h4>📰 Publications</h4>
        ${postsHtml || '<p class="text-muted">Aucune publication pour le moment.</p>'}
    `;

    document.getElementById('community-detail').innerHTML = detailHtml;
    showPage('detail');
}

function createPostCard(post, communityId, isMember) {
    let commentsHtml = '';
    post.comments.forEach(comment => {
        commentsHtml += `
            <div class="comment">
                <strong>👤 ${comment.userName}</strong>
                <p class="mb-0">${comment.content}</p>
                <small class="text-muted">${new Date(comment.date).toLocaleString('fr-FR')}</small>
            </div>
        `;
    });

    return `
        <div class="post-card">
            <div class="d-flex justify-content-between">
                <strong>👤 ${post.userName}</strong>
                <small class="text-muted">${new Date(post.date).toLocaleString('fr-FR')}</small>
            </div>
            <p class="mt-2">${post.content}</p>
            <hr>
            <strong>💬 Commentaires (${post.comments.length})</strong>
            ${commentsHtml}
            ${isMember ? `
                <div class="mt-3">
                    <textarea class="form-control mb-2" id="comment-${post.id}" placeholder="Écrire un commentaire..." rows="2"></textarea>
                    <button class="btn btn-sm btn-primary" onclick="addComment('${communityId}', '${post.id}')">Commenter</button>
                </div>
            ` : ''}
        </div>
    `;
}


function joinCommunity(communityId) {
    const community = getCommunityById(communityId);

    if (community.members.includes(currentUser)) {
        return;
    }

    if (community.isPrivate) {
        showAccessCodeModal(communityId);
    } else {
        community.members.push(currentUser);
        updateCommunity(communityId, community);
        viewCommunity(communityId);
    }
}

function showAccessCodeModal(communityId) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <h4>🔒 Communauté Privée</h4>
            <p>Cette communauté est privée. Veuillez entrer le code d'accès pour rejoindre.</p>
            <input type="text" class="form-control mb-3" id="modal-access-code" placeholder="Code d'accès">
            <div class="d-flex gap-2">
                <button class="btn btn-primary flex-fill" onclick="verifyAccessCode('${communityId}')">Rejoindre</button>
                <button class="btn btn-outline-secondary flex-fill" onclick="closeModal()">Annuler</button>
            </div>
            <div id="error-message" class="text-danger mt-2" style="display: none;"></div>
        </div>
    `;
    document.body.appendChild(modal);
}

function verifyAccessCode(communityId) {
    const enteredCode = document.getElementById('modal-access-code').value.trim();
    const community = getCommunityById(communityId);

    if (enteredCode === community.accessCode) {
        community.members.push(currentUser);
        updateCommunity(communityId, community);
        closeModal();
        viewCommunity(communityId);
    } else {
        const errorMsg = document.getElementById('error-message');
        errorMsg.textContent = '❌ Code d\'accès incorrect. Veuillez réessayer.';
        errorMsg.style.display = 'block';
    }
}

function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.remove();
    }
}

function leaveCommunity(communityId) {
    const community = getCommunityById(communityId);

    community.members = community.members.filter(m => m !== currentUser);
    updateCommunity(communityId, community);
    viewCommunity(communityId);
}


function createPost(communityId) {
    const content = document.getElementById('new-post').value.trim();
    if (!content) return;

    const community = getCommunityById(communityId);

    const newPost = {
        id: 'p' + Date.now(),
        userId: currentUser,
        userName: currentUserName,
        content: content,
        date: new Date().toISOString(),
        comments: []
    };

    community.posts.unshift(newPost);
    updateCommunity(communityId, community);
    viewCommunity(communityId);
}


function addComment(communityId, postId) {
    const content = document.getElementById('comment-' + postId).value.trim();
    if (!content) return;

    const community = getCommunityById(communityId);
    const post = community.posts.find(p => p.id === postId);

    const newComment = {
        id: 'cm' + Date.now(),
        userId: currentUser,
        userName: currentUserName,
        content: content,
        date: new Date().toISOString()
    };

    post.comments.push(newComment);
    updateCommunity(communityId, community);
    viewCommunity(communityId);
}


function toggleAccessCode() {
    const privacySelect = document.getElementById('create-privacy');
    const accessCodeField = document.getElementById('access-code-field');

    if (privacySelect.value === 'private') {
        accessCodeField.style.display = 'block';
        document.getElementById('create-access-code').required = true;
    } else {
        accessCodeField.style.display = 'none';
        document.getElementById('create-access-code').required = false;
    }
}

function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const preview = document.getElementById('image-preview');
            const previewImg = document.getElementById('preview-img');
            previewImg.src = e.target.result;
            preview.style.display = 'block';
            document.getElementById('create-image-url').value = '';
        }
        reader.readAsDataURL(file);
    }
}

function createCommunity(event) {
    event.preventDefault();

    const name = document.getElementById('create-name').value;
    const description = document.getElementById('create-description').value;
    const tagsInput = document.getElementById('create-tags').value;
    const privacy = document.getElementById('create-privacy').value;
    const accessCode = document.getElementById('create-access-code').value.trim();

    const imageFile = document.getElementById('create-image-file').files[0];
    const imageUrl = document.getElementById('create-image-url').value;
    let coverImage = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800';

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            coverImage = e.target.result;
            saveCommunityData();
        }
        reader.readAsDataURL(imageFile);
    } else if (imageUrl) {
        coverImage = imageUrl;
        saveCommunityData();
    } else {
        saveCommunityData();
    }

    function saveCommunityData() {
        const tags = tagsInput
            .split(',')
            .map(tag => tag.trim())
            .filter(tag => tag.length > 0);

        const communities = getCommunities();

        const newCommunity = {
            id: 'c' + Date.now(),
            name: name,
            description: description,
            creatorId: currentUser,
            creatorName: currentUserName,
            members: [currentUser],
            coverImage: coverImage,
            tags: tags.length > 0 ? tags : ['General'],
            isPrivate: privacy === 'private',
            accessCode: privacy === 'private' ? accessCode : null,
            posts: []
        };

        communities.push(newCommunity);
        saveCommunities(communities);

        document.getElementById('create-name').value = '';
        document.getElementById('create-description').value = '';
        document.getElementById('create-tags').value = '';
        document.getElementById('create-image-file').value = '';
        document.getElementById('create-image-url').value = '';
        document.getElementById('create-access-code').value = '';
        document.getElementById('create-privacy').value = 'public';
        document.getElementById('access-code-field').style.display = 'none';
        document.getElementById('image-preview').style.display = 'none';

        showPage('list');
    }
}


function displayMyCommunities() {
    const communities = getCommunities();
    const myCommunities = communities.filter(c => c.members.includes(currentUser));
    const container = document.getElementById('my-communities-list');
    container.innerHTML = '';

    if (myCommunities.length === 0) {
        container.innerHTML = '<p class="text-muted">Vous n\'avez rejoint aucune communauté.</p>';
        return;
    }

    myCommunities.forEach(community => {
        container.innerHTML += createCommunityCard(community);
    });
}


document.addEventListener('DOMContentLoaded', function () {
    displayCommunities();
});