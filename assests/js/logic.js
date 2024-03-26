let lightmodebtn=document.querySelector('#Mode');
lightmodebtn.addEventListener('click',LightLogic)
setLight()
function LightLogic(){
    

    let bodyColor=document.body
    let sectionborder=document.querySelectorAll('div')
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
function setLight(){
    let currentMode=localStorage.getItem('Mode')
    let sectionborder=document.querySelectorAll('div')
    let bodyColor=document.body
    if(currentMode=='light'){

    }else if(currentMode=='dark'){
        bodyColor.classList.toggle("dark-mode-body")

        sectionborder.forEach(element => {
            element.classList.toggle("dark-mode-body")
        });
    }
}
