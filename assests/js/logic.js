let lightmodebtn=document.querySelector('#Mode');
lightmodebtn.addEventListener('click',LightLogic)

function LightLogic(){
    
    // let bodyColor=document.querySelector('body').style.backgroundColor;
    let bodyColor=document.body
    let sectionborder=document.querySelectorAll('div')
    //console.log(sectionborder)
    bodyColor.classList.toggle("dark-mode-body")
    sectionborder.forEach(element => {
        element.classList.toggle("dark-mode-body")
    });

    let currentMode=localStorage.getItem('Mode')

   // sectionborder.classList.toggle("dark-mode-section")
    if(currentMode=='light' ||!currentMode){
        console.log("white value to black value")
        currentMode=localStorage.setItem('Mode','dark');
    }else if(currentMode=='dark') {
        console.log("black value to white value")
        currentMode=localStorage.setItem('Mode','light');
    }
}

