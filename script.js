async function generateContent() {
  const topic = document.getElementById('topicInput').value;
  if (!topic.trim()) {
    alert("Please enter a topic.");
    return;
  }

  document.getElementById('summary').innerText = "Generating...";
  document.getElementById('quiz').innerHTML = "";

  try {
    // Simulating API call (Replace this with real API call to your backend)
    const response = await mockAPI(topic);

    // Update UI with summary and quiz
    document.getElementById('summary').innerText = response.summary;
    const quizList = document.getElementById('quiz');
    response.quiz.forEach((q, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>Q${index + 1}:</strong> ${q.question}<br>
        A. ${q.options[0]}<br>
        B. ${q.options[1]}<br>
        C. ${q.options[2]}<br>
        D. ${q.options[3]}`;
      quizList.appendChild(li);
    });

  } catch (error) {
    document.getElementById('summary').innerText = "Error generating content.";
    console.error(error);
  }
}

// Simulated API Response (this should be replaced with real API call to backend)
async function mockAPI(topic) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        summary: `This is a simple explanation of "${topic}"...`,
        quiz: [
          {
            question: `What is the main idea of ${topic}?`,
            options: ["Option 1", "Option 2", "Option 3", "Correct Answer"]
          },
          {
            question: `Which of the following is related to ${topic}?`,
            options: ["Wrong", "Correct", "Wrong", "Wrong"]
          },
          {
            question: `Choose the correct statement about ${topic}.`,
            options: ["Wrong", "Wrong", "Correct", "Wrong"]
          }
        ]
      });
    }, 1000);
  });
}
