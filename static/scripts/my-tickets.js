async function getData() {
    const data= await fetch("https://6abae78c5b549d818d62b557.mockapi.io/api/v1/tickets")
    const dataString=await data.json()
    console.log("Dados encontrados: ",dataString)
    return dataString
}

const data= getData()
data.then(dataInfo=>{
    const frame=document.querySelector(".frame")
    for (ticket of dataInfo){
        console.log(ticket)
        frame.innerHTML+=`
        <div class="ticket">
            <h1 class=title> ${ticket.title} <a href="/static/templates/edit-ticket.html?id=${ticket.id}">🔧</a></h1>
            <h1 class=description> ${ticket.description}</h1>
        </div>
        `
    } 
})
