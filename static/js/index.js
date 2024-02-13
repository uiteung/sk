document.getElementById('statusSelect').addEventListener('change', function() {
    var selectedOption = this.value;
    if (selectedOption === 'sk1') {
        document.getElementById('sk1').removeAttribute('hidden');
        document.getElementById('sk2').setAttribute('hidden', 'true');
    } else if (selectedOption === 'sk2') {
        document.getElementById('sk2').removeAttribute('hidden');
        document.getElementById('sk1').setAttribute('hidden', 'true');
    } else {
        document.getElementById('sk1').setAttribute('hidden', 'true');
        document.getElementById('sk2').setAttribute('hidden', 'true');
    }
});