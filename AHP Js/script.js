document.getElementById('projectForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
});

document.getElementById('detailsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'block';
    generateCriteriaCards();
});

document.getElementById('addCriteria').addEventListener('click', addCriterion);

function generateCriteriaCards() {
    const criteriaCount = document.getElementById('criteriaCount').value;
    const criteriaList = document.getElementById('criteriaList');
    criteriaList.innerHTML = '';
    for (let i = 0; i < criteriaCount; i++) {
        addCriterion();
    }
}

function addCriterion() {
    const criteriaList = document.getElementById('criteriaList');
    const card = document.createElement('div');
    card.className = 'criteria-card';
    card.innerHTML = `
        <input type="text" placeholder="Criterion Name" required>
        <input type="text" placeholder="Description (optional)">
        <input type="file">
        <button onclick="moveUp(this)">Up</button>
        <button onclick="moveDown(this)">Down</button>
        <button onclick="moveToTop(this)">Move to Top</button>
        <button onclick="moveToBottom(this)">Move to Bottom</button>
        <button onclick="removeCriterion(this)">Remove</button>
    `;
    criteriaList.appendChild(card);
}

function moveUp(button) {
    const card = button.parentElement;
    const previousCard = card.previousElementSibling;
    if (previousCard) {
        card.parentElement.insertBefore(card, previousCard);
    }
}

function moveDown(button) {
    const card = button.parentElement;
    const nextCard = card.nextElementSibling;
    if (nextCard) {
        card.parentElement.insertBefore(nextCard, card);
    }
}

function moveToTop(button) {
    const card = button.parentElement;
    card.parentElement.insertBefore(card, card.parentElement.firstChild);
}

function moveToBottom(button) {
    const card = button.parentElement;
    card.parentElement.appendChild(card);
}

function removeCriterion(button) {
    button.parentElement.remove();
}

document.getElementById('submitCriteria').addEventListener('click', function() {
    alert('Criteria submitted!');
});
