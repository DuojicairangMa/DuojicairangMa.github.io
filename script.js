document.addEventListener(
    "DOMContentLoaded",
    function(){



/*
================================================

Scroll Spy

根据滚动位置自动切换导航状态

================================================
*/


const sections =
document.querySelectorAll(
    ".content-section[id]"
);




const navLinks =
document.querySelectorAll(
    ".nav-links a[href^='#']"
);






const observerOptions = {


    root:null,


    /*
    当前章节进入页面中间区域时触发
    */

    rootMargin:
    "-20% 0px -65% 0px",


    threshold:0


};







const observer =

new IntersectionObserver(

function(entries){



entries.forEach(

function(entry){



if(entry.isIntersecting){



const currentID =

entry.target.getAttribute(
"id"
);





navLinks.forEach(

function(link){



link.classList.remove(
"active"
);





if(

link.getAttribute(
"href"
)

===

"#"+currentID

){



link.classList.add(
"active"
);



}



}



);



}



}


);



},


observerOptions


);









sections.forEach(

function(section){


observer.observe(section);


}

);









/*
================================================

Smooth Scroll

导航点击平滑移动

================================================
*/


navLinks.forEach(

function(link){



link.addEventListener(

"click",

function(event){





const targetID =

this.getAttribute(
"href"
);





/*

如果不是页面内部链接，
例如CV，不处理

*/


if(
!targetID.startsWith("#")
){

return;

}






const target =

document.querySelector(
targetID
);





if(target){



event.preventDefault();






const navbar =

document.querySelector(
".navbar"
);





const navbarHeight =

navbar.offsetHeight;







const targetPosition =

target.offsetTop

-

navbarHeight

-

20;







window.scrollTo({


top:
targetPosition,


behavior:
"smooth"



});





}





}


);



});






});