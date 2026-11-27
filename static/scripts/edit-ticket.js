const parameters=new URLSearchParams(window.location.search)
const ticketId=parameters.get("id")
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
})