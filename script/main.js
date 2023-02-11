// accrodion Item
const items=document.querySelectorAll('.accrodion_btn');

items.forEach(item=>item.addEventListener('click',function(){
    const itemToggle=this.getAttribute('aria-expanded');

    for(i=0;i<items.length;i++){
        items[i].setAttribute('aria-expanded',false);
        if(itemToggle=='false'){
            this.setAttribute('aria-expanded','true');
        }
    }
}))

// owl Carousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        margin:10,
        nav:true,
        dots: false,
        navText: [$('.am-next'),$('.am-prev')],
        responsive:{
            0:{
                items:2
            },
            300:{
                items:3
            },
            
            600:{
                items:4
            },
            780:{
                items:4
            },
            1000:{
                items:4
            }
        }
        })
});

// Message Box
// const msgBox=document.querySelector('#messageBox');
// const input =document.querySelector(".input input");
// const item =document.querySelector('.offcanvas-footer .container .item');
// input.addEventListener("click",function(){
//     msgBox.classList.toggle('active');
// });

// Message Box for Desktop
// const msgBox2=document.querySelector('#messageBox2');
// const input2 =document.querySelector(".input input");
// const item2 =document.querySelector('.offcanvas-footer .container .item');
// input2.addEventListener("click",function(){
//     msgBox2.classList.toggle('active');
// });

// DropDown btn
const dropDowns=document.querySelector("#myDropdown");
function myFunction() {
    dropDowns.classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
// DropDown Button



// offCanvas Search 
// const search=document.querySelector('.offcanvas-header .searchOffCanvas');