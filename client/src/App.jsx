
// import ChatContainer from "./components/ChatContainer.jsx";

import './App.css';
import { useEffect, useState } from "react";
import { getDeafMessage } from "./api/recive_message_api";
import { setDeafMessage } from "./api/send_message_api";



var index = 0;
const addAMessage = (e) => {
  e.preventDefault();
  console.log('Send the message.');
  if(document.getElementById("hearMessage").value != ""){
    const element = document.createElement('div');
    element.textContent = document.getElementById("hearMessage").value;
    setDeafMessage(document.getElementById("hearMessage").value);
    element.className = 'hearText';
    document.getElementById('mensajes').appendChild(element)
    document.getElementById("hearMessage").value = "";

  }
  
}

export default function App() {
  const [time, setTime] = useState(Date.now());
  useEffect(() => {
    // Update component every X seconds
    const interval = setInterval(() => {
      setTime(new Date());

      // Get request
      async function loadDeafMessage(){
        const res = await getDeafMessage();
        if (res.data.index > index){
          const element = document.createElement('div');
          element.textContent = res.data.phrase;
          element.className = 'deafText';
          document.getElementById('mensajes').appendChild(element)
          index += 1;
        }
        console.log(res.data.phrase)
        console.log(res.data.index)

      }
      loadDeafMessage();
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <div>
        <div class = "messagesBox" >
          <div id="mensajes">
            {/* <div class="deafText">Mensaje de prueba</div> */}
          </div>
        </div>

        <div class = "inputMessageBox" >
          <input id = "hearMessage" type="text" placeholder="Escriba su mensaje" class="inputText"/>
          <button onClick={addAMessage} class="btn btn-4 btn-sep icon-send" >Traducir mensaje</button>
        </div>
      </div>
    </>
  )
}



// function App() {
//   return (
//     <>
//       <div>
//         <div class = "messagesBox" >
//           <div id="mensajes">
//             <div class="deafText">Mensaje de prueba</div>
//           </div>
//         </div>

//         <div class = "inputMessageBox" >
//           <input id = "hearMessage" type="text" placeholder="Escriba su mensaje" class="inputText"/>
//           <button onClick={addAMessage} class="btn btn-4 btn-sep icon-send" >Traducir mensaje</button>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App

