document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const emailInstitucional = document.getElementById('emailInstitucional').value;
        const senha = document.getElementById('senhaUsuario').value;
        const confirmaSenha = document.getElementById('confirmaSenha').value
        console.log("--- Formulário Enviado ---");
        console.log("Email:", emailInstitucional);
        console.log("Senha:", senha);
        console.log("Senha confirma:", confirmaSenha);
        if(senha !== confirmaSenha)
        {
            alert("As senhas nao coincidem!");
        }
        if(senha == confirmaSenha)
        {
            alert("Cadastro realizado com sucesso");
        
        setInterval(() => {
            window.location.reload();
        }, 5000);
        
    });
});