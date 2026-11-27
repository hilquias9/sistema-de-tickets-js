const parameters=new URLSearchParams(window.location.search)
const ticketId=parameters.get("id")
const initialTicket={}
async function getTicketInfo(id) {
    const ticket= await fetch(`https://6abae78c5b549d818d62b557.mockapi.io/api/v1/tickets/${id}`)
    const info=ticket.json()
    return info
}
const ticketData=getTicketInfo(ticketId)
ticketData.then(ticket=>{
    const title=document.getElementById("title")
    const description=document.getElementById("description")
    title.value=ticket.title
    description.value=ticket.description
    initialTicket.title=ticket.title
    initialTicket.description=ticket.description
})
const form =document.getElementById("ticket-edition")
form.addEventListener("submit",async function (event) {
    event.preventDefault()
    const title=document.getElementById("title")
    const description=document.getElementById("description")
    const ticketData={title:title.value,description:description.value}
    if(ticketData.title==initialTicket.title && ticketData.description==initialTicket.description){
        return alert("Não houve modificação!")
    }
    else{
        async function sendEditedTicket(ticketData){
            const connection= await fetch(`https://6abae78c5b549d818d62b557.mockapi.io/api/v1/tickets/${ticketId}`,{
                method:"PUT",
                headers:{"Content-Type":"Application/json"},
                body:JSON.stringify(ticketData)
            })
        }
        await sendEditedTicket(ticketData)
        alert("Tíquete alterado com sucesso!")
    }
})