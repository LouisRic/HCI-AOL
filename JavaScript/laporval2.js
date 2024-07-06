const form = document.getElementById('form');
const errormsg = document.getElementById('error');
const nextButton = document.querySelector('.next-button');

function numcheck(x){
    let val = true
    for(let i= 0; i < x.length; i++){
        let y = x[i];
        if(y >= '0' && y <= '9'){
            val = false;
            break;
        }
    }

    return val
}

function Alphacheck(x){
    let val = true
    for(let i = 0; i < x.length; i++){
        let y = x[i];
        if(y >= 'A' && y <= 'Z'){
            val = false;
            break;
        }
    }

    return val
}

function alphacheck(x){
    let val = true
    for(let i= 0; i < x.length; i++){
        let y = x[i];
        if(y >= 'a' && y <= 'z'){
            val = false;
            break;
        }
    }

    return val
}

const handleForm = (event)=>{
    event.preventDefault();
    const name = document.getElementById('nama');
    const nik = document.getElementById('nik');
    const email = document.getElementById('email');
    const telp = document.getElementById('telepon');
    const dom = document.getElementById('domisili');
    const alm = document.getElementById('alamat')
    const box = document.getElementById('confirmation')

    if(name.value == '' || nik.value == '' || email.value == '' || telp.value == '' || dom.value ==''
        || alm.value ==''){
            console.log('masuk kosong');
            errormsg.innerHTML = 'Mohon Isi Semua Kolom'
            return
        }
    if(!numcheck(name.value)){
        console.log('masuk nama angka')
        errormsg.innerHTML = 'Nama Tidak Boleh Mengandung Huruf'
        return
    }    
    if(name.value.length <= 2){
        console.log('masuk nama')
        errormsg.innerHTML = 'Mohon Masukkan Nama Lengkap Anda'
        return
    }
    if(nik.value.length != 16){
        console.log('masuk nik')
        errormsg.innerHTML = 'NIK Harus Mengandung 16 Digit'
        return
    } 
    if(!alphacheck(nik.value) || !Alphacheck(nik.value)){
        console.log('masuk nik huruf')
        errormsg.innerHTML = 'NIK Tidak Boleh Mengandung Huruf'
        return
    }  
    if(telp.value.length < 10 || telp.value.length > 13){
        console.log('masuk telp')
        errormsg.innerHTML = 'Mohon Masukkan Nomor Telefon yang Benar'
        return
    }
    if(!alphacheck(telp.value) || !Alphacheck(telp.value)){
        console.log('masuk telp huruf');
        errormsg.innerHTML = 'Nomor Telefon Tidak Boleh Mengandung Huruf';
        return
    }
    if(email.value.indexOf('@') == -1 || !email.value.indexOf('.') == -1 || email.value.length <=5){
        console.log('masuk email error')
        errormsg.innerHTML = 'Mohon Masukkan Format Email Dengan Benar'
        return;
    }
    
    if(dom.value.length < 4){
        console.log('masuk dom pendek')
        errormsg.innerHTML = 'Mohon Masukkan Kota Domisili yang Benar'
        return
    }

    const spacenumber = alm.value.split(' ')
    if(spacenumber.length < 2){
        console.log('masuk alamat pendek');
        errormsg.innerHTML = 'Mohon Masukkan Alamat Lengkap'
        return
    }
    if(!box.checked){
        console.log('error t&c')
        errormsg.innerHTML = 'Anda Perlu Setuju Bahwa Data yang Dimasukkan Sudah Benar'
        return
    }
    errormsg.innerHTML = '' 
    window.location.href = 'lapor-3.html';   
}

nextButton.addEventListener('click', handleForm);