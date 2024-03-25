// const PostButton = document.querySelector('#sub');
// PostButton.addEventListener('click', savePost);

const form = document.querySelector('form');
form.addEventListener('submit', function (evenObj) {
    evenObj.preventDefault()
    savePost()
});


// function getIndexSize(){
//     let index=localStorage.getItem('index');
//     if(index==undefined){
//         index=localStorage.setItem('index','1');
//         index=localStorage.getItem('index')
//         //console.log("UD block index :",index)
//     }
//     else{
//         let newindex=parseInt(index,10)+1;
//         index=localStorage.setItem('index',newindex.toString());
//         index=localStorage.getItem('index')
//         //console.log("GT block",index)
//     }
//     return index;
// }




function setArr(package){
    let store=localStorage.getItem("store");
    if(store==undefined){
        let arr=[]
        arr.push(package)
        let ArrTOGO=JSON.stringify(arr)
        localStorage.setItem('store',ArrTOGO)
    }else{
        
        let arr =JSON.parse(store)
        arr.push(package);
        let ArrTOGO=JSON.stringify(arr)
        localStorage.setItem('store',ArrTOGO)
    }
}




function savePost(){
    
    let username=document.getElementById("username").value
    let title=document.getElementById("title").value
    let content=document.getElementById("content").value

    let package={
        usernameSent:username,
        titleSent:title,
       contentSent:content
    }
    setArr(package)
    window.location="./blog.html"
 //  localStorage.clear()
}

