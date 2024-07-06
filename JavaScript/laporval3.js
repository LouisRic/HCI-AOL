const form = document.getElementById('platform');
const chro = document.getElementById('chronology')
const errormsg = document.getElementById('error');
const nextButton = document.querySelector('.next-button');

const handleForm = (event)=>{
    event.preventDefault();
    if(form.value === ""){
        console.log('masuk gak pilih');
        errormsg.innerHTML = 'Mohon Pilih Platform Meida Sosial';
        return;
    }

    if(chro.value == ''){
        console.log('masuk kosong')
        errormsg.innerHTML ='Kronologi Tidak Boleh Kosong'
        return
    }
    const chroValue = chro.value.trim();
    const words = chroValue.split(' ').filter(word => word.length > 0);

    if (chroValue.length < 10){
        console.log('Input is too short')
        errormsg.innerHTML = 'Kronologi Harus Lebih dari 10 Karakter';
        return;
    }

    if (words.length < 5){
        console.log('Not enough words')
        errormsg.innerHTML = 'Kronologi Harus Lebih dari 5 Kata'
        return;
    }

    errormsg.innerHTML = '' 
    window.location.href = 'lapor-4.html';  
}

nextButton.addEventListener('click', handleForm);