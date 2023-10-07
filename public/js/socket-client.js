//Referencia HTML
const online = document.querySelector("#online")
const offline = document.querySelector("#offline")
const txtMensaje = document.querySelector("#textMensaje")
const btnEnviar = document.querySelector("#btnEnviar")

const socket = io();

socket.on("connect", ()=>{
    offline.style.display = "none"
    online.style.display = ""
})

socket.on("disconnect", ()=>{
    offline.style.display = ""
    online.style.display = "none"
})

//Escuchar mensaje del backend
socket.on("enviar-mensaje", (payload) =>{
    console.log(payload)
})

btnEnviar.addEventListener("click", ()=>{

    const mensaje = txtMensaje.value

    const payload = {
        mensaje,
        id: "123",
        fecha: new Date().getTime()
    }

    socket.emit("enviar-mensaje", payload)
})