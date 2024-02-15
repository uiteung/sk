// Import library yang dibutuhkan
import { postFileWithHeader } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.2/croot.js";
import { UrlPostSKByFolder } from "../controller/template.js";
import { token } from "../controller/cookies.js";

// Ambil elemen-elemen dari HTML
const thnAjaran = document.getElementById('thnAjaranBimbing');
const pelaksanaDidik = document.getElementById('pelaksanaDidik');
const submitButton = document.getElementById('submitButton');

// Tambahkan event listener pada tombol submit
submitButton.addEventListener('click', () => {
    // Ambil nilai yang dipilih saat tombol diklik
    const selectedThnAjaran = thnAjaran.value;
    const selectedPelaksanaDidik = pelaksanaDidik.value;

    // Update URL untuk pengiriman SK berdasarkan tahun ajaran dan pelaksanaan pendidikan yang dipilih
    const postSKByFolder = UrlPostSKByFolder + `${selectedThnAjaran}/${selectedPelaksanaDidik}`;

    // Tampilkan konfirmasi dan kirim file jika dikonfirmasi
    confirmUpload(postSKByFolder);
});

// Fungsi untuk menampilkan konfirmasi upload
function confirmUpload(postSKByFolder) {
    Swal.fire({
        title: 'Konfirmasi',
        text: 'Anda yakin ingin mengunggah file SK?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Unggah!',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            // Kirim file jika dikonfirmasi
            postFileWithHeader(postSKByFolder, "login", token, "skUpload", "file", responsePostSK);
        }
    });
}

// Fungsi untuk menangani respons dari pengiriman file
function responsePostSK(result) {
    Swal.fire({
        icon: 'success',
        title: 'Sukses!',
        text: 'File SK berhasil diunggah.',
        showConfirmButton: false,
        timer: 1500
    }).then(() => {
        window.location.replace("form-upload-membimbing.html");
    });

    // Log respons dari pengiriman file
    console.log(result);
}
