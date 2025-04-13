document.getElementById('cardForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const bankName = document.getElementById('bankName').value;
    const paymentSystem = document.getElementById('paymentSystem').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const cardHolder = document.getElementById('cardHolder').value;
    const expiryDate = document.getElementById('expiryDate').value;

    const table = document.getElementById('cardTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = bankName;
    newRow.insertCell(1).textContent = paymentSystem;
    newRow.insertCell(2).textContent = cardNumber.replace(/(\d{4})/g, '$1 ').trim();
    newRow.insertCell(3).textContent = cardHolder;
    newRow.insertCell(4).textContent = expiryDate;

    document.getElementById('cardForm').reset();
    document.getElementById('cardMiniature').innerHTML = `
        <div id="previewBankName">Название банка</div>
        <div id="previewCardNumber">0000 0000 0000 0000</div>
        <div id="previewExpiryDate">00/23</div>
        <div id="previewCardHolder">ИМЯ ДЕРЖАТЕЛЯ</div>
    `;
});

document.getElementById('bankName').addEventListener('input', function() {
    document.getElementById('previewBankName').textContent = this.value;
});

document.getElementById('cardNumber').addEventListener('input', function() {
    document.getElementById('previewCardNumber').textContent = this.value.replace(/(\d{4})/g, '$1 ').trim();
});

document.getElementById('cardHolder').addEventListener('input', function() {
    document.getElementById('previewCardHolder').textContent = this.value.toUpperCase();
});

document.getElementById('expiryDate').addEventListener('input', function() {
    document.getElementById('previewExpiryDate').textContent = this.value.slice(5, 7) + '/' + this.value.slice(2, 4);
});
document.getElementById('cardNumber').addEventListener('input', function(e) {
    this.value = this.value.replace(/\D/g, '');
    
    document.getElementById('previewCardNumber').textContent = this.value.replace(/(\d{4})/g, '$1 ').trim();
});

document.getElementById('cardForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const bankName = document.getElementById('bankName').value;
    const paymentSystem = document.getElementById('paymentSystem').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const cardHolder = document.getElementById('cardHolder').value;
    const expiryDate = document.getElementById('expiryDate').value;

    const table = document.getElementById('cardTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = bankName;
    newRow.insertCell(1).textContent = paymentSystem;
    newRow.insertCell(2).textContent = cardNumber.replace(/(\d{4})/g, '$1 ').trim();
    newRow.insertCell(3).textContent = cardHolder;
    newRow.insertCell(4).textContent = expiryDate;

    document.getElementById('cardForm').reset();
    document.getElementById('cardMiniature').innerHTML = `
        <div id="previewBankName">Название банка</div>
        <div id="previewCardNumber">0000 0000 0000 0000</div>
        <div id="previewExpiryDate">00/23</div>
        <div id="previewCardHolder">ИМЯ ДЕРЖАТЕЛЯ</div>
    `;
});

document.getElementById('bankName').addEventListener('input', function() {
    document.getElementById('previewBankName').textContent = this.value;
});

document.getElementById('cardHolder').addEventListener('input', function() {
    document.getElementById('previewCardHolder').textContent = this.value.toUpperCase();
});

document.getElementById('expiryDate').addEventListener('input', function() {
    document.getElementById('previewExpiryDate').textContent = this.value.slice(5, 7) + '/' + this.value.slice(2, 4);
});