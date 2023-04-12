
  
  
  function getWelcomeMessage(name, gender) {
    let title = '';
    if (gender === 'male') {
      title = 'Mr';
    } else if (gender === 'female') {
      title = 'Ms';
    }
    return `Welcome, ${title} ${name}!`;
  }
  
  function getUserInput(question) {
    let answer = prompt(question);
    if (answer === '') {
      answer = 'invalid';
    }
    return answer;
  }
  
  function getAllAnswers() {
    const answers = [];
    answers.push(getUserInput('What is your name?'));
    answers.push(getUserInput('What is your gender? (male/female)'));
    answers.push(getUserInput('What is your age?'));
    answers.push(getUserInput('Are you enjoying this program? (Yes/No)'));
    answers.push(getUserInput('Do you find the program helpful? (Yes/No)'));
    answers.push(getUserInput('Would you recommend the program to others? (Yes/No)'));
    return answers;
  }
  
  function displayAnswers(answers) {
    for (let i = 0; i < answers.length; i++) {
      console.log(`Answer ${i + 1}: ${answers[i]}`);
    }
  }
  
  const allAnswers = getAllAnswers();
  const name = allAnswers[0];
  const gender = allAnswers[1];
  const age = parseInt(allAnswers[2]);
  const skipMessage = false;
  
  if (age <= 0) {
    alert('Invalid age! Please enter a valid age.');
  } else {
    const welcomeMessage = getWelcomeMessage(name, gender);
    if (!skipMessage) {
      alert(welcomeMessage);
    }
  
    displayAnswers(allAnswers);
  }
  
