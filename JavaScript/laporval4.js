const box = document.getElementById('terms')
const submit = document.getElementById('submit')
const errormsg = document.getElementById('error');
const modal = document.getElementById('laporModal');
const close = document.querySelector('.close');
const kembali = document.getElementById('kembaliButton');

const handleForm = (event)=>{
    event.preventDefault();
    if(!box.checked){
        console.log('masuk gak setuju')
        errormsg.innerHTML = 'Anda Perlu Menyetujui Syarat & Ketentuan yang Ada'
        return
    }
    errormsg.innerHTML = '' 
    modal.style.display = 'block';
}

submit.addEventListener('click', handleForm);

close.addEventListener('click', () => {
    modal.style.display = 'none';
});


kembali.addEventListener('click', () => {
    modal.style.display = 'none';
    window.location.href = 'home.html';  
});


window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});