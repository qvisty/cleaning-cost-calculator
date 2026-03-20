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

calculate();
