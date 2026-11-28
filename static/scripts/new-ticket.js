
const formTicket= document.getElementById("ticket-creation")
formTicket.addEventListener("submit",async function (event) {
    event.preventDefault()
    console.log("preventdefault ativado com sucesso!")
    async function sendTicket(title,description) {
        const data={title:title,description:description}
        const response = await fetch("https://6abae78c5b549d818d62b557.mockapi.io/api/v1/tickets", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        if(response.status==201){
            alert("Tíquete enviado com sucesso!")
            window.location.href="/static/templates/my-tickets.html"
        }
        else{
            alert("Ocorreu um erro ao enviar o tíquete!")
            console.log(response.status)
        }
    }
    const title=document.getElementById("title")
    const description=document.getElementById("description")
    sendTicket(title.value,description.value)
    title.value=""
    description.value=""
})

