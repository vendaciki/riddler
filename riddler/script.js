function getRandomQuestions(allQuestions, numberOfQuestions) {
    const shuffledQuestions = [...allQuestions];
    shuffleArray(shuffledQuestions);
    return shuffledQuestions.slice(0, numberOfQuestions);
}

const quizData = [
    { question: "Smutek, žal a trápení o práci se přičiní, rytíř pro mě život dá, gentleman mě rád podá. Upomínka na těle, nevolej pak přítele. ", correctAnswer: "Kapesník", hint: "8 písmen" },
    { question: "Mám města, ale ne domy. Mám hory, ale ne stromy. Mám řeky, ale ne ryby. Kdo jsem? ", correctAnswer: "Mapa", hint: "4 písmena" },
    { question: "Nestojím, neležím, nesedím, neběžím, pracuji v temné čekárně. S bratry se flákám na lajně. Stavím věci do pozoru. Záleží na módním vzoru.", correctAnswer: "Ramínko", hint: "7 písmen" },
    { question: "V košilce malé po světě běhá. Rodí se z radosti, žije si s lehkostí. Do trávy lehá, říkají jí…", correctAnswer: "Mlha", hint: "4 písmena" },
    { question: "Co má klíč, ale neotevře žádné dveře? ", correctAnswer: "Noty", hint: "4 písmena" },
    { question: "Kdo bez štětce a bez barev obarví nám pestře les? ", correctAnswer: "Podzim", hint: "6 písmen" },
    { question: "Chodí v koruně, král to není. Nosí ostruhy, rytíř to není. Má šavli, husar to není. K ránu chodívá, ponocný to není. Co to je? ", correctAnswer: "Kohout", hint: "6 písmen" },
    { question: "Zelené, žluté, červené, člověku žízeň zažene. Který strom má v září k mání, tohle sladké pochutnání? ", correctAnswer: "Jabloň", hint: "6 písmen" },
    { question: "Kdo klepe na okno, ale dovnitř nejde? ", correctAnswer: "Déšť", hint: "4 písmena" },
    { question: "Zelený, pichlavý ježeček, ukrývá malý dáreček, který má hnědý obleček. Co to je?", correctAnswer: "Kaštan", hint: "6 písmen" },
    { question: "Neřeknu ti, i když vím, co zem snáší na podzim. Kokodáká slepička: země snáší vajíčka! Co to je? ", correctAnswer: "Brambory", hint: "8 písmen" },
    { question: "Tloustnu a hubnu ze vzduchu, štamgasta zvolá ejchuchu. Nosím se jak mimino, žebra stojí v domino. Co jsem?", correctAnswer: "Harmonika", hint: "9 písmen" },
    { question: "Jen půl roku pracuji, do žeber si pumpuji. Děvče svléknu během chvilky, stačí pustit více žilky. Plyn, proud i ta voda je mou krevní skupinou, přijde-li však velká vada, škrtni sirkou jedinou. ", correctAnswer: "Topení", hint: "6 písmen" },
    { question: "Co letí bez křídel?", correctAnswer: "Čas", hint: "3 písmena" },
    { question: "Co je to, co nikdy nebere, ale vždycky něco dává? ", correctAnswer: "Rada", hint: "4 písmena" },
    { question: "Co je vždy před vámi, ale nikdy se k vám nepřiblíží?", correctAnswer: "Budoucnost", hint: "10 písmen" },
    { question: "Co může být suché nebo mokré, a přesto zůstává vždy stejné? ", correctAnswer: "Ručník", hint: "6 písmen" },
    { question: "Co se vyskytuje jednou v minutě, dvakrát v každém momentě, ale ani jednou v roce?", correctAnswer: "M", hint: "moc lehké" },
    { question: "Který tkadlec chodí nahý?", correctAnswer: "Pavouk", hint: "6 písmen" },
    { question: "Když ho máš, chceš ho sdílet. Když ho sdílíš, tak ho nemáš.", correctAnswer: "Tajemství", hint: "9 písmen" },
    { question: "Pavlova matka má tři syny. První se jmenuje Pondělí, druhý Úterý. Jak se jmenuje třetí? ", correctAnswer: "Pavel", hint: "5 písmen" },
    { question: "Co tě dokáže popálit, ale není to oheň?", correctAnswer: "Kopřiva", hint: "7 písmen" },
    { question: "Sedí babka kulatá, má sto sukní ze zlata. Když ji jednou vysvléct zkusíš, rozplakat se přitom musíš.", correctAnswer: "Cibule", hint: "6 písmen" },

];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let attemptsLeft = 2;
let quizDataForCurrentSession = getRandomQuestions(quizData, 12);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    const currentQuizData = quizDataForCurrentSession[currentQuestionIndex];

    questionContainer.textContent = currentQuizData.question;
}

function showHint() {
    const currentQuizData = quizDataForCurrentSession[currentQuestionIndex];
    alert(`Nápověda: ${currentQuizData.hint}`);
}

function hideHintButton() {
    document.getElementById("hint-button").style.display = "none";
}

function nextQuestion() {
    const userAnswer = document.getElementById("answer-input").value.toLowerCase();
    const currentQuizData = quizDataForCurrentSession[currentQuestionIndex];

    if (userAnswer === currentQuizData.correctAnswer.toLowerCase()) {
        correctAnswers++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizDataForCurrentSession.length) {
        showQuestion();
        document.getElementById("answer-input").value = "";
    } else {
        endQuiz();
    }
}

function lastAttempt() {
    const userAnswer = document.getElementById("answer-input").value.toLowerCase();
    const currentQuizData = quizDataForCurrentSession[currentQuestionIndex];

    if (userAnswer === currentQuizData.correctAnswer.toLowerCase()) {
        correctAnswers++;
    }

    endQuiz();
}

function hideElement(elementId) {
    document.getElementById(elementId).style.display = "none";
}

function endQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result");
    const answerInput = document.getElementById("answer-input");
    const questionContainer = document.getElementById("question-container");
    const nextQuestionButton = document.getElementById("next-question-button");
    const lastAttemptButton = document.getElementById("last-attempt-button");

    hideElement("answer-input");
    hideElement("question-container");
    hideElement("next-question-button");
    hideElement("last-attempt-button");
    hideElement("hint-button");

    const successRate = (correctAnswers / quizDataForCurrentSession.length) * 100;

    if (successRate >= 80) {
        resultContainer.innerHTML = `Splnili jste kvíz! <br/> Úspěšnost: ${successRate.toFixed(2)}%`;
    } else if (attemptsLeft > 1) {
        resultContainer.innerHTML = `Bylo dosaženo pouze ${successRate.toFixed(2)}% úspěšnosti. <br/> Zbývá ${attemptsLeft - 1} pokus`;
        attemptsLeft--;
        resetQuiz();
    } else {
        // resultContainer.innerHTML = `GAME OVER. <br/>Úspěšnost: ${successRate.toFixed(2)}%`;
        // answerInput.style.display = "block";
    }

    // Zobrazí tlačítko "Poslední pokus" pouze pokud nebyl úkol splněn a je poslední pokus
    if (successRate < 80 && attemptsLeft === 1) {
        lastAttemptButton.style.display = "block";
        lastAttemptButton.onclick = lastAttempt; // Přiřazení funkce lastAttempt() tlačítku "Poslední pokus"
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    attemptsLeft = 1; // Resetuje počet pokusů
    quizDataForCurrentSession = getRandomQuestions(quizData, 12);
    shuffleArray(quizDataForCurrentSession);
    showQuestion();
    document.getElementById("last-attempt-button").style.display = "none"; // Skrýt tlačítko "Poslední pokus"
}

// Přidáme event listener na tlačítko "Start"
document.getElementById("start-button").addEventListener("click", function () {
    document.getElementById("intro-container").style.display = "none"; // Skrýt úvodní obrazovku
    document.getElementById("quiz-container").style.display = "flex"; // Zobrazit kvíz
    showQuestion(); // Zobrazit první otázku
});

// Přidáme event listener na tlačítko "Další otázka"
document.getElementById("next-question-button").addEventListener("click", nextQuestion);


