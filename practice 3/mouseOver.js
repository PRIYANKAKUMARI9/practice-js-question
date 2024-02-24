

// 1. Write a function to add a CSS class to an element on the mouseover even

 var element=document.querySelector(".elementcahnage");

 element.addEventListener("mouseover",function(){
       element.classList.add("change")
       element.style.color='red'
      

 })

 //for remove

 element.addEventListener("mouseout",function(){
    element.classList.remove("change")
 })

 