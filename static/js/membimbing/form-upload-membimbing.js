// Import library yang dibutuhkan
import { postFileWithHeader } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.2/croot.js";
import { UrlPostSKByFolder } from "./controller/template.js";
import { token } from "./controller/cookies.js";

const thnAjaran = document.getElementById('thnAjaranBimbing');
const pelaksanaDidik = document.getElementById('pelaksanaDidik');

console.log(thnAjaran, pelaksanaDidik);

// Update URL untuk pengiriman SK berdasarkan tahun ajaran dan pelaksanaan pendidikan yang dipilih
const PostSKByFolder = UrlPostSKByFolder + `${thnAjaran}/${pelaksanaDidik}`;

// Untuk Post File SK 2023 2024 Ganjil
const submitButton1 = document.getElementById('submitButton');
submitButton1.addEventListener('click', () => {
    confirmUpload1();
});

function confirmUpload1() {
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
            postFileWithHeader(PostSKByFolder, "login", token, "skUpload", "file", responsePostSK1);
        }
    });
};

function responsePostSK1(result) {
    Swal.fire({
        icon : 'success',
        title : 'Sukses!',
        text : 'File SK berhasil diunggah.',
        showConfirmButton : false,
        timer : 1500
    }).then(() => {
        window.location.replace("index.html");
    });
    console.log(result);
};