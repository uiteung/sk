// Import library yang dibutuhkan
import { postFileWithHeader } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.2/croot.js";
import { UrlPostSK, UrlPostSKByFolder } from "./controller/template.js";
// import { getValue } from "https://cdn.jsdelivr.net/gh/jscroot/element@0.0.5/croot.js";
import { token } from "./controller/cookies.js";

const thnAjaran = document.getElementById('thnAjaran');
thnAjaran.addEventListener('change', () => {
    const selectedYear = thnAjaran.value;
    console.log(selectedYear); // Untuk memastikan nilai tahun ajaran yang dipilih

    // Update URL untuk pengiriman SK berdasarkan tahun ajaran yang dipilih
    const PostSKByFolder = UrlPostSKByFolder + `${selectedYear}/mengajar`;

    // Untuk Post File SK 2023 2024 Ganjil
    const submitButton1 = document.getElementById('submitButton1');
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
                postFileWithHeader(PostSKByFolder, "login", token, "skUpload2324Ganjil", "file", responsePostSK1);
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

    // Untuk Post File SK 2023 2024 Ganjil
    const submitButton2 = document.getElementById('submitButton2');
    submitButton2.addEventListener('click', () => {
        confirmUpload2();
    });

    function confirmUpload2() {
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
                postFileWithHeader(PostSKByFolder, "login", token, "skUpload2324Ganjil", "file", responsePostSK2);
            }
        });
    }

    function responsePostSK2(result) {
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
});