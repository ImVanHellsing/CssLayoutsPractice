function load(){

    document.querySelector('.nav-menu').addEventListener("click",function(){
        document.querySelector('#menu').classList.toggle('active')
    })

    document.querySelector('.close').addEventListener("click",function(){
        document.querySelector('#menu').classList.toggle('active')
    })
}