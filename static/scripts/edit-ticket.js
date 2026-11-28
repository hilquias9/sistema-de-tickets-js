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
    const action=event.submitter.name
    console.log(action)
    if (action==="edit"){

        const title=document.getElementById("title")
        const description=document.getElementById("description")
        const ticketData={title:title.value,description:description.value}
        if(ticketData.title==initialTicket.title && ticketData.description==initialTicket.description){
            return alert("Não houve modificação!")
        }
        else{
            async function EditedTicket(ticketData){
                const connection= await fetch(`https://6abae78c5b549d818d62b557.mockapi.io/api/v1/tickets/${ticketId}`,{
                    method:"PUT",
                    headers:{"Content-Type":"Application/json"},
                    body:JSON.stringify(ticketData)
                })
                if (connection.status==200){
                    alert("Tíquete alterado com sucesso!")
                    window.location.href="/static/templates/my-tickets.html"
                }
                else{
                    alert("Ocorreu um erro ao alterar o tíquete!")
                }
            }
            await EditedTicket(ticketData)
        }
    }
    else if(action==="delete"){
        const deleteTicket=await fetch (`https://6abae78c5b549d818d62b557.mockapi.io/api/v1/tickets/${ticketId}`,{
            method:"DELETE"
        })
        if (deleteTicket.status==200){
            alert("Tíquete deletado com sucesso!")
            window.location.href="/static/templates/my-tickets.html"
        }
        else{
            alert("Ocorreu um erro ao deletar o tíquete!")
        }
    }
})