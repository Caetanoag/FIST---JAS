document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const emailInstitucional = document.getElementById('emailInstitucional').value;
        const senha = document.getElementById('senhaUsuario').value;
        console.log("--- Formulário Enviado ---");
        console.log("Email:", emailInstitucional);
        console.log("Senha:", senha);
        if(emailInstitucional == "loginAdm@hotmail.com" && senha == "1234")
        {
            alert("Login bem sucedido")
        }
        else
        {
            alert("Senha ou usuario incorretos, tente novamente");
        }
        setInterval(() => {
            window.location.reload();
        }, 5000);
        
    });
});
