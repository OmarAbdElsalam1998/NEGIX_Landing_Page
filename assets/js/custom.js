//make header sticky and change background color when user scroll
let main_header=document.querySelector(".main-header");
window.onscroll=function(){
    if(this.scrollY > 10){
        main_header.classList.add("sticky-header")


    }
    else{
        main_header.classList.remove("sticky-header")



    }

}



//open menu bar in mobile screens when click on hamburger btn
let hamburger=document.querySelector(".hamburger");
hamburger.addEventListener("click",function(){
    this.classList.toggle("active");
    let menuBar=document.querySelector(".main-header .nav-bar");
    menuBar.classList.toggle("show");
    menuBar.addEventListener("click",function(){
        console.log("sss")
        hamburger.classList.remove("active");
        this.classList.remove("show");
    })
    document.querySelectorAll(".main-header .nav-bar ul li a").forEach(ele=>{
        ele.addEventListener("click",function(){
            hamburger.classList.remove("active");
            menuBar.classList.remove("show");



        })
    })
    
});

let aside=document.querySelector(".main-header .nav-bar nav"); 
aside.addEventListener("click",function(e){
    e.stopPropagation();
})



      







