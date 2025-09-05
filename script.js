const elements = [ { atomicNumber: 1, name: "Hydrogen", symbol: "H" }, { atomicNumber: 2, name: "Helium", symbol: "He" }, { atomicNumber: 3, name: "Lithium", symbol: "Li" }, { atomicNumber: 4, name: "Beryllium", symbol: "Be" }, { atomicNumber: 5, name: "Boron", symbol: "B" }, { atomicNumber: 6, name: "Carbon", symbol: "C" }, { atomicNumber: 7, name: "Nitrogen", symbol: "N" }, { atomicNumber: 8, name: "Oxygen", symbol: "O" }, { atomicNumber: 9, name: "Fluorine", symbol: "F" }, { atomicNumber: 10, name: "Neon", symbol: "Ne" }, { atomicNumber: 11, name: "Sodium", symbol: "Na" }, { atomicNumber: 12, name: "Magnesium", symbol: "Mg" }, { atomicNumber: 13, name: "Aluminum", symbol: "Al" }, { atomicNumber: 14, name: "Silicon", symbol: "Si" }, { atomicNumber: 15, name: "Phosphorus", symbol: "P" }, { atomicNumber: 16, name: "Sulfur", symbol: "S" }, { atomicNumber: 17, name: "Chlorine", symbol: "Cl" }, { atomicNumber: 18, name: "Argon", symbol: "Ar" }, { atomicNumber: 19, name: "Potassium", symbol: "K" }, { atomicNumber: 20, name: "Calcium", symbol: "Ca" }, { atomicNumber: 21, name: "Scandium", symbol: "Sc" }, { atomicNumber: 22, name: "Titanium", symbol: "Ti" }, { atomicNumber: 23, name: "Vanadium", symbol: "V" }, { atomicNumber: 24, name: "Chromium", symbol: "Cr" }, { atomicNumber: 25, name: "Manganese", symbol: "Mn" }, { atomicNumber: 26, name: "Iron", symbol: "Fe" }, { atomicNumber: 27, name: "Cobalt", symbol: "Co" }, { atomicNumber: 28, name: "Nickel", symbol: "Ni" }, { atomicNumber: 29, name: "Copper", symbol: "Cu" }, { atomicNumber: 30, name: "Zinc", symbol: "Zn" }, { atomicNumber: 31, name: "Gallium", symbol: "Ga" }, { atomicNumber: 32, name: "Germanium", symbol: "Ge" }, { atomicNumber: 33, name: "Arsenic", symbol: "As" }, { atomicNumber: 34, name: "Selenium", symbol: "Se" }, { atomicNumber: 35, name: "Bromine", symbol: "Br" }, { atomicNumber: 36, name: "Krypton", symbol: "Kr" }, { atomicNumber: 37, name: "Rubidium", symbol: "Rb" }, { atomicNumber: 38, name: "Strontium", symbol: "Sr" }, { atomicNumber: 39, name: "Yttrium", symbol: "Y" }, { atomicNumber: 40, name: "Zirconium", symbol: "Zr" }, { atomicNumber: 41, name: "Niobium", symbol: "Nb" }, { atomicNumber: 42, name: "Molybdenum", symbol: "Mo" }, { atomicNumber: 43, name: "Technetium", symbol: "Tc" }, { atomicNumber: 44, name: "Ruthenium", symbol: "Ru" }, { atomicNumber: 45, name: "Rhodium", symbol: "Rh" }, { atomicNumber: 46, name: "Palladium", symbol: "Pd" }, { atomicNumber: 47, name: "Silver", symbol: "Ag" }, { atomicNumber: 48, name: "Cadmium", symbol: "Cd" }, { atomicNumber: 49, name: "Indium", symbol: "In" }, { atomicNumber: 50, name: "Tin", symbol: "Sn" }, { atomicNumber: 51, name: "Antimony", symbol: "Sb" }, { atomicNumber: 52, name: "Tellurium", symbol: "Te" }, { atomicNumber: 53, name: "Iodine", symbol: "I" }, { atomicNumber: 54, name: "Xenon", symbol: "Xe" }, { atomicNumber: 55, name: "Cesium", symbol: "Cs" }, { atomicNumber: 56, name: "Barium", symbol: "Ba" }, { atomicNumber: 57, name: "Lanthanum", symbol: "La" }, { atomicNumber: 58, name: "Cerium", symbol: "Ce" }, { atomicNumber: 59, name: "Praseodymium", symbol: "Pr" }, { atomicNumber: 60, name: "Neodymium", symbol: "Nd" }, { atomicNumber: 61, name: "Promethium", symbol: "Pm" }, { atomicNumber: 62, name: "Samarium", symbol: "Sm" }, { atomicNumber: 63, name: "Europium", symbol: "Eu" }, { atomicNumber: 64, name: "Gadolinium", symbol: "Gd" }, { atomicNumber: 65, name: "Terbium", symbol: "Tb" }, { atomicNumber: 66, name: "Dysprosium", symbol: "Dy" }, { atomicNumber: 67, name: "Holmium", symbol: "Ho" }, { atomicNumber: 68, name: "Erbium", symbol: "Er" }, { atomicNumber: 69, name: "Thulium", symbol: "Tm" }, { atomicNumber: 70, name: "Ytterbium", symbol: "Yb" }, { atomicNumber: 71, name: "Lutetium", symbol: "Lu" }, { atomicNumber: 72, name: "Hafnium", symbol: "Hf" }, { atomicNumber: 73, name: "Tantalum", symbol: "Ta" }, { atomicNumber: 74, name: "Tungsten", symbol: "W" }, { atomicNumber: 75, name: "Rhenium", symbol: "Re" }, { atomicNumber: 76, name: "Osmium", symbol: "Os" }, { atomicNumber: 77, name: "Iridium", symbol: "Ir" }, { atomicNumber: 78, name: "Platinum", symbol: "Pt" }, { atomicNumber: 79, name: "Gold", symbol: "Au" }, { atomicNumber: 80, name: "Mercury", symbol: "Hg" }, { atomicNumber: 81, name: "Thallium", symbol: "Tl" }, { atomicNumber: 82, name: "Lead", "symbol": "Pb" }, { atomicNumber: 83, name: "Bismuth", "symbol": "Bi" }, { atomicNumber: 84, name: "Polonium", "symbol": "Po" }, { atomicNumber: 85, name: "Astatine", "symbol": "At" }, { atomicNumber: 86, name: "Radon", "symbol": "Rn" }, { atomicNumber: 87, name: "Francium", "symbol": "Fr" }, { atomicNumber: 88, name: "Radium", "symbol": "Ra" }, { atomicNumber: 89, name: "Actinium", "symbol": "Ac" }, { atomicNumber: 90, name: "Thorium", "symbol": "Th" }, { atomicNumber: 91, name: "Protactinium", "symbol": "Pa" }, { atomicNumber: 92, name: "Uranium", "symbol": "U" }];

const premadeLists = { 'first-3-periods': { name: "First 3 Periods (1-18)", elements: elements.filter(el => el.atomicNumber <= 18) }, 'non-obvious': { name: "Non-Obvious Symbols (Latin Names)", elements: elements.filter(el => ["Na", "K", "Fe", "Cu", "Ag", "Sn", "Sb", "W", "Au", "Hg", "Pb"].includes(el.symbol)) }, 'metalloids': { name: "Metalloids", elements: elements.filter(el => [5, 14, 32, 33, 51, 52, 84, 85].includes(el.atomicNumber)) }, 'elements-s': { name: "Elements starting with 'S'", elements: elements.filter(el => el.name.startsWith("S") || el.symbol.startsWith("S")) }, 'elements-t': { name: "Elements starting with 'T'", elements: elements.filter(el => el.name.startsWith("T") || el.symbol.startsWith("T")) } };

const selectionContainer = document.getElementById('selection-container'), startQuizForm = document.getElementById('start-quiz-form'), premadeListSelect = document.getElementById('premade-list-select'), rangeSelectorWrapper = document.getElementById('range-selector-wrapper'), startSelect = document.getElementById('start-element-select'), endSelect = document.getElementById('end-element-select'), quizBox = document.getElementById('quiz-box'), completionScreen = document.getElementById('completion-screen'), progressCounter = document.getElementById('progress-counter'), questionPrompt = document.getElementById('question-prompt'), questionElement = document.getElementById('question-element'), answerForm = document.getElementById('answer-form'), answerInput = document.getElementById('answer-input'), checkButton = document.getElementById('check-button'), hintButton = document.getElementById('hint-button'), feedbackMessage = document.getElementById('feedback-message'), continuePrompt = document.getElementById('continue-prompt'), restartButton = document.getElementById('restart-button'), finalScore = document.getElementById('final-score'), reviewSection = document.getElementById('review-section'), wrongAnswersList = document.getElementById('wrong-answers-list');
let quizElements = [], currentElement = null, questionType = 'name', totalElementsInQuiz = 0, quizDirection = 'random', isWaitingForContinue = false, wronglyAnswered = [];
let lastWronglyAnswered = [];

function populateDropdowns() { elements.forEach((el) => { const optionText = `${el.atomicNumber}. ${el.name} (${el.symbol})`; startSelect.add(new Option(optionText, el.atomicNumber - 1)); endSelect.add(new Option(optionText, el.atomicNumber - 1)); }); endSelect.value = elements.length - 1; }
function populatePremadeListsDropdown() { for (const key in premadeLists) { premadeListSelect.add(new Option(premadeLists[key].name, key)); } }

function handleQuizStart(event) {
    event.preventDefault();
    const selectedListKey = premadeListSelect.value;
    let selectedElements;
    
    if (selectedListKey === 'review-wrong') {
        selectedElements = lastWronglyAnswered;
    } else if (selectedListKey !== 'custom') {
        selectedElements = premadeLists[selectedListKey].elements;
    } else {
        let startIndex = parseInt(startSelect.value), endIndex = parseInt(endSelect.value);
        if (startIndex > endIndex) [startIndex, endIndex] = [endIndex, startIndex];
        selectedElements = elements.slice(startIndex, endIndex + 1);
    }
    quizDirection = document.querySelector('input[name="quiz-direction"]:checked').value;
    startGame(selectedElements);
}

function startGame(selectedElements) {
    quizElements = [...selectedElements];
    totalElementsInQuiz = selectedElements.length;
    wronglyAnswered = [];
    selectionContainer.style.display = 'none';
    completionScreen.style.display = 'none';
    quizBox.style.display = 'block';
    nextQuestion();
}

function nextQuestion() {
    if (quizElements.length === 0) { endGame(); return; }
    isWaitingForContinue = false;
    feedbackMessage.innerHTML = '';
    continuePrompt.style.display = 'none';
    checkButton.textContent = 'Check';
    answerInput.disabled = false;
    hintButton.disabled = false;
    answerInput.value = '';
    progressCounter.textContent = `${quizElements.length} / ${totalElementsInQuiz} elements remaining`;
    currentElement = quizElements[Math.floor(Math.random() * quizElements.length)];
    if (quizDirection === 'random') questionType = Math.random() < 0.5 ? 'name' : 'symbol';
    else if (quizDirection === 'name-to-symbol') questionType = 'name';
    else questionType = 'symbol';
    questionPrompt.textContent = questionType === 'name' ? 'What is the symbol for...' : 'What is the name for...';
    questionElement.textContent = questionType === 'name' ? currentElement.name : currentElement.symbol;
    answerInput.focus();
}

function checkAnswer(event) {
    event.preventDefault();
    if (isWaitingForContinue) { nextQuestion(); return; }
    const userAnswer = answerInput.value.trim();
    if (!userAnswer) return;
    const isCorrect = (questionType === 'name') ? userAnswer.toLowerCase() === currentElement.symbol.toLowerCase() : userAnswer.toLowerCase() === currentElement.name.toLowerCase();
    if (isCorrect) {
        feedbackMessage.innerHTML = `<span class="correct">Correct!</span>`;
        quizElements = quizElements.filter(el => el.symbol !== currentElement.symbol);
        answerInput.disabled = true; hintButton.disabled = true;
        setTimeout(nextQuestion, 600);
    } else {
        feedbackMessage.innerHTML = `<span class="incorrect">Incorrect. The answer is ${currentElement.name} (${currentElement.symbol}).</span>`;
        if (!wronglyAnswered.some(el => el.symbol === currentElement.symbol)) { wronglyAnswered.push(currentElement); }
        isWaitingForContinue = true;
        answerInput.disabled = true; hintButton.disabled = true;
        checkButton.textContent = 'Continue';
        continuePrompt.style.display = 'block';
        checkButton.focus();
    }
}

function showHint() {
    if (currentElement && !isWaitingForContinue) {
        let hintText = '';
        if (questionType === 'name') {
            const symbolLength = currentElement.symbol.length;
            hintText = `Hint: The symbol is ${symbolLength} letter${symbolLength > 1 ? 's' : ''} long.`;
        } else {
            const elementName = currentElement.name, elementSymbol = currentElement.symbol;
            let hintLength = (elementName.length >= 5 ? 2 : 1);
            if (elementName.toLowerCase().startsWith(elementSymbol[0].toLowerCase())) { hintLength++; }
            hintLength = Math.min(hintLength, elementName.length);
            const hintPrefix = elementName.substring(0, hintLength);
            hintText = `Hint: The name starts with "${hintPrefix}...".`;
        }
        feedbackMessage.innerHTML = `<span class="hint-message">${hintText}</span>`;
        hintButton.disabled = true;
        answerInput.focus();
    }
}

function endGame() {
    quizBox.style.display = 'none';
    lastWronglyAnswered = [...wronglyAnswered];
    finalScore.textContent = wronglyAnswered.length === 0 ? `Perfect score! You didn't miss any questions.` : `You missed ${wronglyAnswered.length} out of ${totalElementsInQuiz} questions.`;
    if (wronglyAnswered.length > 0) {
        wrongAnswersList.innerHTML = '';
        wronglyAnswered.sort((a,b) => a.atomicNumber - b.atomicNumber).forEach(el => {
            const listItem = document.createElement('li');
            listItem.textContent = `${el.name} (${el.symbol})`;
            wrongAnswersList.appendChild(listItem);
        });
        reviewSection.style.display = 'block';
    } else {
        reviewSection.style.display = 'none';
    }
    completionScreen.style.display = 'flex';
}

function resetToSelection() {
    completionScreen.style.display = 'none';
    selectionContainer.style.display = 'block';
    
    const existingReviewOption = document.getElementById('review-option');
    if (existingReviewOption) {
        existingReviewOption.remove();
    }

    if (lastWronglyAnswered.length > 0) {
        const reviewOption = new Option(`Review My Wrong Answers (${lastWronglyAnswered.length})`, 'review-wrong');
        reviewOption.id = 'review-option';
        premadeListSelect.prepend(reviewOption);
        premadeListSelect.value = 'review-wrong';
        rangeSelectorWrapper.classList.add('disabled');
    } else {
        premadeListSelect.value = 'custom';
        rangeSelectorWrapper.classList.remove('disabled');
    }
}

startQuizForm.addEventListener('submit', handleQuizStart);
answerForm.addEventListener('submit', checkAnswer);
hintButton.addEventListener('click', showHint);
restartButton.addEventListener('click', resetToSelection);
premadeListSelect.addEventListener('change', () => { rangeSelectorWrapper.classList.toggle('disabled', premadeListSelect.value !== 'custom'); });

populateDropdowns();
populatePremadeListsDropdown();
