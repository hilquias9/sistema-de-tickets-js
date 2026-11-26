
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
    }
    const title=document.getElementById("title")
    const description=document.getElementById("description")
    sendTicket(title.value,description.value)
    alert("Tíquete enviado com sucesso!")
    title.value=""
    description.value=""
})

