let stack = [];

function addEmail() {
    const emailInput = document.getElementById('emailInput');
    const tagInput = document.getElementById('tagInput');
    const emailSubject = emailInput.value;
    const emailTag = tagInput.value ? ` [${tagInput.value}]` : ''; // Append tag if provided

    if (emailSubject) {
        // Add email to the stack with an optional tag
        stack.push(`${emailSubject}${emailTag}`);
        emailInput.value = ''; // Clear input
        tagInput.value = ''; // Clear tag input
        updateStackDisplay();
    }
}

function removeEmail() {
    if (stack.length > 0) {
        stack.pop(); // Remove the last email from the stack
        updateStackDisplay();
    }
}

function composeEmail() {
    // This function can be expanded to show a modal or redirect to a new page to compose a full email
    alert("Compose your email: Subject, Body, Recipients, etc.");
}

function sendEmail() {
    if (stack.length > 0) {
        // This could be expanded to actually send the email
        alert(`Sending email: "${stack[stack.length - 1]}"`);
        // Simulate sending the email
        removeEmail(); // Remove email after sending
    } else {
        alert("No emails to send.");
    }
}

function updateStackDisplay() {
    const stackContainer = document.getElementById('stack-container');
    stackContainer.innerHTML = ''; // Clear current display

    stack.forEach((email, index) => {
        const stackItem = document.createElement('div');
        stackItem.className = 'stack-item';
        stackItem.innerText = email;
        stackItem.style.transform = `translateY(-${index * 40}px)`; // Adjust position for stacking effect
        stackContainer.appendChild(stackItem);
    });
}
