// Sample data for students and criteria
const students = ['Student 1', 'Student 2', 'Student 3'];
const criteria = ['Research Excellence', 'Analytical and Interpretive Skills', 'Application and Innovation', 'Presentation and Communication Skills', 'Teamwork and Community Engagement'];

// Populate student names
const studentSelect = document.getElementById('studentName');
students.forEach(student => {
    let option = document.createElement('option');
    option.value = student;
    option.textContent = student;
    studentSelect.appendChild(option);
});

// Event listeners for glowing effect and data collection
document.addEventListener('DOMContentLoaded', function() {
    const criteriaDescriptions = {
        'Research Excellence': [
            'Very limited research and methodology. Few sources, incorrect or superficial information.',
            'Basic research and methodology. Common sources, lacks depth.',
            'Good research and methodology. Several reliable sources, mostly accurate information.',
            'Thorough research and methodology. Variety of credible sources, well-integrated information.',
            'Exceptional research and methodology. Wide range of sources, detailed and accurate information.'
        ],
        'Analytical and Interpretive Skills': [
            'Inaccurate or nonexistent data interpretation. Lack of critical analysis.',
            'Basic data interpretation and limited critical analysis.',
            'Adequate data interpretation and moderate critical analysis.',
            'Strong data interpretation and critical analysis.',
            'Exceptional data interpretation and critical analysis, highly accurate and insightful.'
        ],
        'Application and Innovation': [
            'Minimal or incorrect application of STEM principles. Little to no originality.',
            'Basic application of STEM principles, some originality but derivative.',
            'Good application of STEM, shows creativity.',
            'Strong application of STEM principles, highly creative and original.',
            'Exceptional and innovative application of STEM principles, advanced understanding and breakthrough ideas.'
        ],
        'Presentation and Communication Skills': [
            'Unclear, disorganized presentation. Difficult to follow.',
            'Somewhat clear but lacks engaging organization.',
            'Clear, organized presentation. Engaging to an extent.',
            'Very clear and well-organized. Engages audience effectively.',
            'Exceptionally clear, compelling, and engaging presentation.'
        ],
        'Teamwork and Community Engagement': [
            'Poor teamwork, limited community thinking. Fails to collaborate effectively.',
            'Limited teamwork and community thinking, occasional collaboration issues.',
            'Moderate teamwork and community thinking. Effective collaboration with some community impact.',
            'Strong teamwork and community thinking. Collaborates effectively with community impact.',
            'Exceptional teamwork and community thinking. Outstanding collaboration and prioritizes community impact.'
        ]
    };

    // Populate rubric criteria and ratings in a table format
    const criteriaTableBody = document.querySelector("#criteria tbody");
    Object.entries(criteriaDescriptions).forEach(([criterion, descriptions]) => {
        let row = document.createElement('tr');
        let criteriaCell = document.createElement('td');
        criteriaCell.textContent = criterion;
        row.appendChild(criteriaCell);

        descriptions.forEach((description, index) => {
            let ratingCell = document.createElement('td');
            ratingCell.innerHTML = `${index + 1}<br><small>${description}</small>`;
            ratingCell.setAttribute('data-criterion', criterion);
            ratingCell.setAttribute('data-rating', index + 1);
            ratingCell.classList.add('rating-cell');
            row.appendChild(ratingCell);
        });

        criteriaTableBody.appendChild(row);
    });

    // Event listeners for glowing effect and data collection
    document.querySelectorAll('.rating-cell').forEach(cell => {
        cell.addEventListener('click', function() {
            // Remove glow from other cells in the same criterion row
            let currentCriterion = this.getAttribute('data-criterion');
            document.querySelectorAll(`td[data-criterion="${currentCriterion}"]`).forEach(c => c.classList.remove('glow'));

            // Add glow to clicked cell
            this.classList.add('glow');
        });
    });
});
