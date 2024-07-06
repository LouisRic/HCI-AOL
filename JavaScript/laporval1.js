const form = document.getElementById('form');
const errormsg = document.getElementById('error');
const nextButton = document.querySelector('.next-button');

const handleForm = (event)=>{
    event.preventDefault();
    if(form.value === ""){
        console.log('masuk gak pilih');
        errormsg.innerHTML = 'Mohon Pilih Jenis Cybercrime';
        return;
    }
    errormsg.innerHTML = '' 
    window.location.href = 'lapor-2.html'; 
}

nextButton.addEventListener('click', handleForm);