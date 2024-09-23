
const formulario = document.getElementById('meuFormulario');
const mensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const numeroA = parseFloat(document.getElementById('numeroA').value);
    const numeroB = parseFloat(document.getElementById('numeroB').value);

    if (numeroB > numeroA) {
        mensagem.style.color = 'green';
        mensagem.textContent = 'Formulário enviado com sucesso!';
    } else {
        mensagem.style.color = 'red';
        mensagem.textContent = 'Erro: O número B deve ser maior que o número A.';
    }
});
