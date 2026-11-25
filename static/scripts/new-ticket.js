
const formTicket= document.getElementById("ticket-creation")
formTicket.addEventListener("submit",async function (event) {
    event.preventDefault()
    console.log("preventdefault ativado com sucesso!")
    async function sendTicket(title,description) {
        const response = await fetch("https://6abae78c5b549d818d62b557.mockapi.io/api/v1/tickets", {
            method:"POST",
            headers:{
            }
        })

    }
})

