const PostButton = document.querySelector('#Back');
PostButton.addEventListener('click', createDiv);

function createDiv(element){
    const ToInsert=document.querySelector('section')
    let Title=element.titleSent
    let content=element.contentSent
    let username=element.usernameSent
    ToInsert.insertAdjacentHTML('beforeend',`
    <div>
    <h1>${Title}</h1>
    <p>${content}</p>
    <footer>
        posted by:${username}
    </footer>
</div>
    `)
}

function showLocalStorage(){
    const array= JSON.parse(localStorage.getItem("store"))
    array.forEach(element => {
        createDiv(element)
        console.log(element)
    });
}

showLocalStorage()