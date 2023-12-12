const changeStyle = () => {
    let header = document.getElementById('header');
    if (window.scrollY > 100) {
        console.log('first');
        header.classList.add('fixed-top');
    }
    else {
        header.classList.remove('fixed-top');
    }
}

changeStyle();
window.onscroll =changeStyle;

const sections = document.querySelectorAll('section');

sections.forEach(section => {
    //Add active to all sections on the page according to the position of the page scrolled so far pn page load and scroll

    window.addEventListener('load', evenListener);
    window.addEventListener('scroll', evenListener);

    function evenListener () { 
        let windowHeight = window.innerHeight;
        let sectionRectTop = section.getBoundingClientRect().top;

        //console.log('window Height :' + windowHeight);
        //console.log('section rectTop :' + sectionRectTop);
        if (sectionRectTop < windowHeight) {
            section.classList.add('active');
        }
     }

     window.addEventListener('scroll', () => {
        let reveals = section.querySelectorAll('.reveal');

        reveals.forEach((reveal, index) => {
            if(section.classList.contains('active')) {
                const delay = 600;

                setTimeout(() => {
                    reveal.classList.add('active');
                }, index * delay);
            }
        })
     })

     //revealing one by one on load

     window.addEventListener('load', () => {
        let reveals = section.querySelectorAll('.reveal');

        reveals.forEach((reveal, index) => {
            let windowHeight = window.innerHeight;
        let revealRectTop = reveal.getBoundingClientRect().top;
            if(revealRectTop < windowHeight) {
                const delay = 600;

                setTimeout(() => {
                    reveal.classList.add('active');
                }, index * delay);
            }
        })
     })
})