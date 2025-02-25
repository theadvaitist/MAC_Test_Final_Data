document.getElementById('submitButton').addEventListener('click', submitMessage);

function submitMessage() {
    const userMessage = document.getElementById('userInput').value;
    document.getElementById('chatLog').innerHTML += `<div class="userMessage">${userMessage}</div><br>`;
    document.getElementById('userInput').value = '';

    // Simulate Chloe's response
    const chloeResponse = getChloeResponse(userMessage);
    document.getElementById('chatLog').innerHTML += `<div class="chloeMessage">${chloeResponse}</div><br>`;
}

function getChloeResponse(message) {
    // Here you would ideally call an API that interacts with the AI and returns the response
    // For the sake of this example, let's just return a placeholder text
    return "Hello, " + message.split(' ')[0] + "! I'm Chloe, your virtual assistant. How can I help you today?";
}