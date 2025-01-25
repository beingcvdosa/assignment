function enrollfunction() {
    const button = document.getElementById('enroll-button');
    const message = document.getElementById('messages');

    button.style.backgroundColor = 'rgb(35, 220, 100)';
    button.textContent = 'Enrolled';

    message.textContent = 'You have been enrolled in the course!';
    message.style.display = 'block';

    setTimeout(() => {
        message.style.display = 'none';
    }, 1000);
}


const stars = document.querySelectorAll('.star-rating input');
const message = document.getElementById('messages');

stars.forEach(star => {
    star.addEventListener('change', () => {

        message.textContent = `You rated this course ${star.value} stars`;
        message.style.display = 'block';

        setTimeout(() => {
            message.style.display = 'none';
        }, 1000);
    });
});


function saveNote() {
    const videoSelect = document.getElementById('video-select');
    const notesText = document.getElementById('notes-text');
    const message = document.getElementById('messages');

    if (videoSelect.value && notesText.value.trim() !== '') {
        message.style.display = 'block';
        message.textContent = "Note has been saved!";

    }
    else {
        message.style.display = 'block';
        message.textContent = "Please select a video and write a note!";

    }

    setTimeout(() => {
        message.style.display = 'none';
    }, 1500);

}


function submitAnswer() {
    const answer = document.getElementById('knowledge-answer');
    const message = document.getElementById('messages');

    if (answer.value.trim() !== '') {
        message.style.display = 'block';
        message.textContent = "Answer Submitted!";

    }
    else {
        message.style.display = 'block';
        message.textContent = "Please select an answer!";

    }

    setTimeout(() => {
        message.style.display = 'none';
    }, 1000);

}



const leaderboardData = [
    { name: "Rawat", score: 95 },
    { name: "Kartik", score: 85 },
    { name: "Vishal", score: 75 },
];

function renderLeaderboard() {
    const tableBody = document.querySelector("#leaderboard-table tbody");
    tableBody.innerHTML = "";


    leaderboardData.sort((a, b) => b.score - a.score);


    leaderboardData.forEach((player, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${player.name}</td>
            <td>${player.score}</td>
        `;
        tableBody.appendChild(row);
    });
}

function addPlayer() {
    const playerName = document.getElementById("player-name").value.trim();
    const playerScore = parseInt(document.getElementById("player-score").value);

    if (!playerName || isNaN(playerScore)) {
        alert("Please enter a valid name and score.");
        return;
    }

    leaderboardData.push({ name: playerName, score: playerScore });
    renderLeaderboard();


    document.getElementById("player-name").value = "";
    document.getElementById("player-score").value = "";
}


renderLeaderboard();


function postComment() {
    const message = document.getElementById('messages');
    const author = document.getElementById("comment-author").value.trim();
    const text = document.getElementById("comment-text").value.trim();

    if (!author || !text) {
        message.style.display = 'block';
        message.textContent = "Please fill in both fields!";

        setTimeout(() => {
            message.style.display = 'none';
        }, 1500);

        return;
    } else {
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        commentDiv.innerHTML = `<strong>${author}:</strong><p>${text}</p>`;

        document.getElementById("comments-section").appendChild(commentDiv);


        document.getElementById("comment-author").value = "";
        document.getElementById("comment-text").value = "";

        message.style.display = 'block';
        message.textContent = "Comment Added!";

        setTimeout(() => {
            message.style.display = 'none';
        }, 1000);
    }
}


document.getElementById('toggle-dark-button').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


document.getElementById('download-button').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'path-to-your-certificate.pdf';
    link.download = 'Certificate.pdf';
    link.click();
});




const mainVideoBox = document.getElementById('videobox');
const mainVideoBoxdetails = document.getElementById('video-details');
const checkboxes = document.querySelectorAll('.video-checkbox');
const videoCheckboxes = document.querySelectorAll('.video-checkbox');
const progressBar = document.getElementById('progress-bar');
const description = document.getElementById('description');

videoCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('click', function () {
        if (checkbox.checked) {
            message.textContent = "Marked Video Completed!";
            message.style.display = 'block';
        } else {
            message.textContent = "Unmarked Video Completed!";
            message.style.display = 'block';
        }


        setTimeout(function () {
            message.style.display = 'none';
        }, 1000);
    });
});


function updateProgressBar() {
    const checkedCheckboxes = document.querySelectorAll('.video-checkbox:checked').length;
    const totalCheckboxes = videoCheckboxes.length;
    const progressPercentage = (checkedCheckboxes / totalCheckboxes) * 100;

    progressBar.style.width = progressPercentage + '%';
    progressBar.textContent = `${Math.round(progressPercentage)}%`;


}

videoCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            const newVideoSrc = checkbox.getAttribute('data-video-src');
            const newDescription = checkbox.getAttribute('data-description');


            mainVideoBox.src = newVideoSrc;


            description.textContent = newDescription;
        }

        updateProgressBar();
    });
});






document.querySelectorAll('.other-video-container').forEach((container) => {
    container.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            const checkbox = container.querySelector('.video-checkbox');
            checkbox.checked = true;
            checkbox.dispatchEvent(new Event('change'));
        }
    });
});


