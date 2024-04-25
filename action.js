function enviarMensaje() {            
    var mensajeUsuario = document.getElementById("mensaje").value;            
    var chatHistory = document.getElementById("chat-history");            
    var chatBubbleUser = document.createElement("div");            
    chatBubbleUser.innerHTML = "<strong>Tú:</strong> " + mensajeUsuario;            
    chatHistory.appendChild(chatBubbleUser);             
    fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {                
        method: 'POST',                
        headers: {                    
            'Content-Type': 'application/json',                    
            'Authorization': 'Bearer sk-proj-VQeFcuFqe4KBb9CTlJbZT3BlbkFJWSI0FfirgJkA6TnbRU61',                
        },                
        body: JSON.stringify({                    
            prompt: mensajeUsuario,                    
            max_tokens: 150                
        })            
    })            
    .then(response => response.json())            
    .then(data => {                
        var respuestaChatGPT = data.choices[0].text.trim();                
        var chatBubbleGPT = document.createElement("div");                
        chatBubbleGPT.innerHTML = "<strong>ChatGPT:</strong> " + respuestaChatGPT;                
        chatHistory.appendChild(chatBubbleGPT);                
        chatHistory.scrollTop = chatHistory.scrollHeight;            
    })            
    .catch(error => {                
    console.error('Error:', error);            
    });
    document.getElementById("mensaje").value = "";        
    }    