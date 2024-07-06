const observer = new IntersectionObserver((ent) =>{
    ent.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
        else{
            entry.target.classList.remove('show');
        }
    })
})

const hidden = document.querySelectorAll('.jumbatron-text, .kami-hadir, .cyber-bullying, .penipuan-online, .berita, .panduan-pengaduan, .detail-panduan-grid, .terima-kasih, .logo-large, .tentangkami-content, .visi, .misi');
hidden.forEach((el) => observer.observe(el));