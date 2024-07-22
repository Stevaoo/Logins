function validarForm() {
    // Pegando os valores dos campos
    var nome = document.getElementById("nome").value.trim();
    var email = document.getElementById("email").value.trim();
    var senha = document.getElementById("senha").value.trim();

    // Variáveis para controle de erros
    var nomeError = document.getElementById("nomeError");
    var emailError = document.getElementById("emailError");
    var senhaError = document.getElementById("senhaError");

    // Resetando erros
    nomeError.innerHTML = "";
    emailError.innerHTML = "";
    senhaError.innerHTML = "";

    // Validando nome
    if (nome === "") {
        nomeError.innerHTML = "Por favor, informe o nome.";
        return false;
    }

    // Validando email
    if (email === "") {
        emailError.innerHTML = "Por favor, informe o email.";
        return false;
    } else if (!isValidEmail(email)) {
        emailError.innerHTML = "Por favor, informe um email válido.";
        return false;
    }

    // Validando senha
    if (senha === "") {
        senhaError.innerHTML = "Por favor, informe a senha.";
        return false;
    } else if (senha.length < 6) {
        senhaError.innerHTML = "A senha deve ter pelo menos 6 caracteres.";
        return false;
    }

    // Se tudo estiver correto, o formulário pode ser enviado
    return true;
}

// Função para validar o formato do email
function isValidEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}