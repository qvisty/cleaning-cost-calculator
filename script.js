function formatNumber(value) {
    return value.toLocaleString('da-DK', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function calculate() {
    const hourlyRate = Math.max(0, parseFloat(document.getElementById('hourlyRate').value) || 0);
    const timePerRoom = Math.max(0, parseFloat(document.getElementById('timePerRoom').value) || 0);
    const numberOfRooms = Math.max(0, parseFloat(document.getElementById('numberOfRooms').value) || 0);

    const totalHours = timePerRoom * numberOfRooms;
    const totalPrice = totalHours * hourlyRate;

    document.getElementById('totalHours').textContent = formatNumber(totalHours);
    document.getElementById('totalPrice').textContent = formatNumber(totalPrice) + ' kr';
}

document.getElementById('hourlyRate').addEventListener('input', calculate);
document.getElementById('timePerRoom').addEventListener('input', calculate);
document.getElementById('numberOfRooms').addEventListener('input', calculate);

// Set today's date as default
const datoInput = document.getElementById('dato');
if (!datoInput.value) {
    datoInput.value = new Date().toISOString().split('T')[0];
}

document.getElementById('genererFaktura').addEventListener('click', function () {
    const params = new URLSearchParams({
        navn: document.getElementById('navn').value,
        adresse: document.getElementById('adresse').value,
        cpr: document.getElementById('cpr').value,
        fakturaNr: document.getElementById('fakturaNr').value,
        dato: document.getElementById('dato').value,
        beskrivelse: document.getElementById('beskrivelse').value,
        betalingsfrist: document.getElementById('betalingsfrist').value,
        hourlyRate: document.getElementById('hourlyRate').value,
        timePerRoom: document.getElementById('timePerRoom').value,
        numberOfRooms: document.getElementById('numberOfRooms').value,
    });
    window.location.href = 'faktura.html?' + params.toString();
});

calculate();
