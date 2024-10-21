(function() {
    // This will allow each client to have their own unique chatbot instance
    const clientID = 'YOUR_CLIENT_ID';  // You can dynamically replace this with the specific client's ID

    // Create a container div for the chatbot
    const chatbotContainer = document.createElement('div');
    chatbotContainer.id = 'chatbot-container';
    
    // Apply basic styles to position the chatbot (you can modify as needed)
    chatbotContainer.style.position = 'fixed';
    chatbotContainer.style.bottom = '20px';
    chatbotContainer.style.right = '20px';
    chatbotContainer.style.width = '350px';
    chatbotContainer.style.height = '600px';
    chatbotContainer.style.zIndex = '9999';  // Ensure the chatbot stays above other content on the page
    
    // Append the chatbot container to the body of the client’s website
    document.body.appendChild(chatbotContainer);

    // Create an iframe that will contain the chatbot UI
    const iframe = document.createElement('iframe');
    iframe.src = `https://sai-ren-ai-frontend.vercel.app/?clientID=${clientID}`;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';  // Remove default iframe border for seamless embedding
    
    // Append the iframe to the chatbot container
    chatbotContainer.appendChild(iframe);
    
    // Optionally, create a button to close or minimize the chatbot (for a better user experience)
    const closeButton = document.createElement('button');
    closeButton.innerHTML = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.background = 'red';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.cursor = 'pointer';
    
    // Append the close button to the container
    chatbotContainer.appendChild(closeButton);

    // Add event listener to close the chatbot
    closeButton.addEventListener('click', function() {
        chatbotContainer.style.display = 'none';
    });

})();
