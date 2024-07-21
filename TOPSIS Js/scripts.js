// scripts.js

// Save project title and move to alternatives page
document.getElementById('projectForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const projectTitle = document.getElementById('projectTitle').value;
    localStorage.setItem('projectTitle', projectTitle);
    window.location.href = 'alternatives.html';
});

// Display project title on alternatives page
if (window.location.pathname.includes('alternatives.html')) {
    document.getElementById('projectTitleDisplay').textContent = localStorage.getItem('projectTitle');
}

// Create table of alternatives
function createAlternativesTable() {
    const numAlternatives = document.getElementById('numAlternatives').value;
    let tableHTML = '<table class="table table-bordered"><thead><tr><th>Alternative</th></tr></thead><tbody>';
    for (let i = 1; i <= numAlternatives; i++) {
        tableHTML += `<tr><td contenteditable="true">Alternative ${i}</td></tr>`;
    }
    tableHTML += '</tbody></table>';
    document.getElementById('alternativesTable').innerHTML = tableHTML;
}

// Create table of criteria
function createCriteriaTable() {
    const numCriteria = document.getElementById('numCriteria').value;
    let tableHTML = '<table class="table table-bordered"><thead><tr><th>Criterion</th><th>Type</th><th>Weight</th></tr></thead><tbody>';
    for (let i = 1; i <= numCriteria; i++) {
        tableHTML += `<tr>
                        <td contenteditable="true">Criterion ${i}</td>
                        <td contenteditable="true">+</td>
                        <td contenteditable="true">0.200</td>
                      </tr>`;
    }
    tableHTML += '</tbody></table>';
    document.getElementById('criteriaTable').innerHTML = tableHTML;
}

// Move to matrix page
function goToMatrixPage() {
    window.location.href = 'matrix.html';
}

// Display project title on matrix page
if (window.location.pathname.includes('matrix.html')) {
    document.getElementById('matrixProjectTitle').textContent = localStorage.getItem('projectTitle');
    generateDecisionMatrix();
}

// Generate decision matrix (placeholder function)
function generateDecisionMatrix() {
    // Retrieve data from previous steps (implementation required)
    // Display the matrix (implementation required)
}

// Go back to previous page
function goBack() {
    window.history.back();
}

// Go back to alternatives page
function goBackToAlternatives() {
    window.location.href = 'alternatives.html';
}
