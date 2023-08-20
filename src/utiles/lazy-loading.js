const lazyLoad = () => {

    const lazyImgs = document.querySelectorAll('.lazy');

    // const observer = new IntersectionObserver(()=>{},{
    //     root: 'null',               these parameters are default so you 
    //     rootMargin: '0px',           remove it ....
    //     threshold: 0,
    // });


    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry =>{
            if(entry.isIntersecting)
            {
                let img = entry.target;
                img.src= img.dataset.src;
                img.classList.remove('loading');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        })
    });

    lazyImgs.forEach(imgs => {
        observer.observe(imgs);
    });
}
export default lazyLoad;