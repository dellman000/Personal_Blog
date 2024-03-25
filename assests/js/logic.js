let lightmodebtn=document.querySelector('#Mode');
lightmodebtn.addEventListener('click',Logic)

function Logic(){
    
    // let bodyColor=document.querySelector('body').style.backgroundColor;
    let bodyColor=document.body
    let sectionborder=document.querySelectorAll('div')
    //console.log(sectionborder)
    bodyColor.classList.toggle("dark-mode-body")
    sectionborder.forEach(element => {
        element.classList.toggle("dark-mode-body")
    });


   // sectionborder.classList.toggle("dark-mode-section")
    // if(!bodyColor){
    //     console.log("white value")
    // }else{

    // }


}
