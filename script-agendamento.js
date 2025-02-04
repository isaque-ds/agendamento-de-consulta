// Base de dados de agendamentos
let agendamentos = [
    { cpf: '12345678901', nome: 'João Silva', data: '15/07/2024', hora: '14:30', especialidade: 'Cardiologia' },
    { cpf: '98765432109', nome: 'Maria Souza', data: '20/07/2024', hora: '10:00', especialidade: 'Pediatria' },
    { cpf: '45678912345', nome: 'Pedro Santos', data: '22/07/2024', hora: '16:45', especialidade: 'Ortopedia' },
    { cpf: '78912345678', nome: 'Ana Oliveira', data: '25/07/2024', hora: '11:15', especialidade: 'Ginecologia' }
];

function verificarAgendamento() {
    let cpf = document.getElementById('cpf').value.trim();
    let resultado = document.getElementById('resultado');

    // Validação de CPF
    if (cpf.length !== 11) {
        resultado.innerHTML = 'CPF inválido. Digite 11 dígitos.';
        resultado.style.color = 'red';
        resultado.style.display = 'block';
        return;
    }

    // Busca de agendamento
    let consulta = agendamentos.find(agenda => agenda.cpf === cpf);

    if (consulta) {
        resultado.innerHTML = `
            <strong>Consulta Confirmada!</strong><br>
            Paciente: ${consulta.nome}<br>
            Data: ${consulta.data}<br>
            Hora: ${consulta.hora}<br>
            Especialidade: ${consulta.especialidade}
        `;
        resultado.style.color = 'green';
        resultado.style.display = 'block';
    } else {
        resultado.innerHTML = 'Nenhum agendamento encontrado para este CPF.';
        resultado.style.color = 'red';
        resultado.style.display = 'block';
    }
}

function limparResultado() {
    let resultado = document.getElementById('resultado');
    resultado.style.display = 'none';
}



