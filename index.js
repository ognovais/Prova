document.getElementById('form-notas').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const matricula = document.getElementById('matricula').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const media = (nota1 + nota2) / 2;
    const situacao = media > 5 ? 'Aprovado' : 'Reprovado';

    const tabela = document.getElementById('tabela-notas');
    const tbody = tabela.getElementsByTagName('tbody')[0];
    const novaLinha = tbody.insertRow();

    const celulaNome = novaLinha.insertCell(0);
    const celulaMatricula = novaLinha.insertCell(1);
    const celulaNota1 = novaLinha.insertCell(2);
    const celulaNota2 = novaLinha.insertCell(3);
    const celulaMedia = novaLinha.insertCell(4);
    const celulaSituacao = novaLinha.insertCell(5);

    celulaNome.textContent = nome;
    celulaMatricula.textContent = matricula;
    celulaNota1.textContent = nota1.toFixed(1);
    celulaNota2.textContent = nota2.toFixed(1);
    celulaMedia.textContent = media.toFixed(1);
    celulaSituacao.textContent = situacao;

    tabela.style.display = 'table';
    document.getElementById('form-notas').reset();
});