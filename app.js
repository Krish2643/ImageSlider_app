const slides = document.querySelectorAll(".slide");
// console.log(slides);

var counter = 0;

slides.forEach(
    (slide, index) =>{
        slide.style.left = `${index * 100}%`
        // console.log(slide);
    }
)

const slideImage = ()=> {
    slides.forEach(
        (slide)=> { 
            slide.style.transform = `translateX(-${counter * 100}%)`
                }
    )
}

const goNext = ()=>{
    if(counter >2) return ;
    console.log(counter);
    (counter++);
    slideImage();
}
const goPrev = ()=>{
    (counter--);
    slideImage();
}