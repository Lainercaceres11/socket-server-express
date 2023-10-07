const socketController = (socket)=>{
    console.log("Cliente conectado")

    //Cliente desconectado
    socket.on("disconnect", ()=>{
        console.log("Cliente desconectado")
    })

    //Escucha evento desde el front
    socket.on("enviar-mensaje", (payload)=>{
        console.log(payload)
    
        //Emite evento a todos los usuarios
        socket.broadcast.emit("enviar-mensaje", payload)
    })



}
module.exports ={
    socketController
}