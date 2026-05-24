function insert(num) {
    var numero = document.getElementById('resultado').innerText;
    document.getElementById('resultado').innerText = numero + num;
}

function clean() {
    document.getElementById('resultado').innerText = "";
}

function calcular() {
    var numero = document.getElementById('resultado').innerText;
    if (numero) {
        var conta = numero
            .replace(/÷/g, '/')
            .replace(/x/g, '*')
            .replace(/(\d+)%/g, '($1/100)');
        document.getElementById('resultado').innerText = eval(conta);
    }
}

function inverter() {
    var numero = document.getElementById('resultado').innerText;
    if (numero) {
        document.getElementById('resultado').innerText = eval(numero) * -1;
    }
}

function apagar() {
    var numero = document.getElementById('resultado').innerText;
    document.getElementById('resultado').innerText = numero.slice(0, -1);
}

document.addEventListener('keydown', function(evento) {
    var tecla = evento.key;

    if (tecla >= '0' && tecla <= '9') insert(tecla);
    else if (tecla === '+') insert('+');
    else if (tecla === '-') insert('-');
    else if (tecla === '*') insert('*');
    else if (tecla === '/') insert('/');
    else if (tecla === '%') insert('%');
    else if (tecla === '.') insert('.');
    else if (tecla === 'Enter') calcular();
    else if (tecla === 'Backspace') apagar();
    else if (tecla === 'Escape') clean();
});