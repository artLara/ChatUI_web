
// import ChatContainer from "./components/ChatContainer.jsx";

import './App.css'



const addAMessage = (e) => {
  e.preventDefault();
  console.log('Send the message.');
  const element = document.createElement('div');
  element.textContent = 'New message';
  element.className = 'hearText';
  document.getElementById('mensajes').appendChild(element)
}

function App() {
  return (
    <>
      <div>
        <div class = "messagesBox" >
          <div id="mensajes"></div>
        </div>

        <div class = "inputMessageBox" >
          <input className="e-input" type="text" placeholder="Escriba su mensaje" />
          <button onClick={addAMessage}>Send</button>
        </div>
      </div>
    </>
  )
}

export default App

