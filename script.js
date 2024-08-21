let score = 0;
let timeLeft = 180;
let correctAnswer;

function generateProblem() {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const operator = Math.random() > 0.5 ? '+' : '-';
    
    correctAnswer = operator === '+' ? num1 + num2 : num1 - num2;
    
    // Atualiza o problema na tela
    document.getElementById('problem').textContent = `${num1} ${operator} ${num2}`;
    
    // Atualiza o título da página com base na operação
    if (operator === '+') {
        document.querySelector('h1').textContent = 'Adição';
    } else {
        document.querySelector('h1').textContent = 'Subtração';
    }
}

function updateScore(points) {
    score += points;
    document.getElementById('score').textContent = `Pontuação: ${score}`;
}

function showMessage(message, color) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = color;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === correctAnswer) {
        showMessage('Certo!', 'green');
        updateScore(10);
    } else {
        showMessage('Errado!', 'red');
        updateScore(-5);
    }
    document.getElementById('answer').value = '';
    generateProblem();
}

function startTimer() {
    const timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `Tempo: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showMessage(`O jogo acabou! Sua pontuação final é: ${score}`, 'blue');
            document.getElementById('submit').disabled = true;
        }
    }, 1000);
}

document.getElementById('submit').addEventListener('click', checkAnswer);

generateProblem();
startTimer();