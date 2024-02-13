window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitioned", () => {
        document.body.removeChild("loader");
    })
})

// Untuk Ganti-Ganti Form
document.getElementById('statusSelect').addEventListener('change', function() {
    var selectedOption = this.value;
    if (selectedOption === '2324-1') {
        document.getElementById('2324-1').removeAttribute('hidden');
        document.getElementById('2324-2').setAttribute('hidden', 'true');
    } else if (selectedOption === '2324-2') {
        document.getElementById('2324-2').removeAttribute('hidden');
        document.getElementById('2324-1').setAttribute('hidden', 'true');
    } else {
        document.getElementById('2324-1').setAttribute('hidden', 'true');
        document.getElementById('2324-2').setAttribute('hidden', 'true');
    }
});