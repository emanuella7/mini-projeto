const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (!weight || !height || height === 0) {
        alert('Preencha corretamente o peso e a altura.');
        return;
    }

   const imc = weight / (height ** 2);
    const imcFixed = imc.toFixed(1);

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');

    if (imc < 18.5) {
        description = 'CUIDADO!! você está abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        description = 'PARABÉNS!! você está com o peso ideal';
    } else if (imc >= 25 && imc <= 30) {
        description = 'CUIDADO!! você está com sobrepeso';
    } else if (imc > 30 && imc <= 35) {
        description = 'CUIDADO!! você está com obesidade grau I';
    } else if (imc > 35 && imc <= 40) {
        description = 'CUIDADO!! você está com obesidade grau II';
    } else {
        description = 'CUIDADO!! você está com obesidade grau III';
    }

    value.textContent = imcFixed.replace('.', ',');
    document.getElementById('description').innerText = description;
});
