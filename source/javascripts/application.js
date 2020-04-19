//= require jquery
//= require popper
//= require bootstrap-sprockets
//= require_tree .

document.addEventListener("DOMContentLoaded", (event) => {
  const third = document.querySelector("#third");

  console.log("current width:" + window.innerWidth);
  if (window.innerWidth < 992) {
    
    third.classList.remove("third-title");
    third.classList.add("third-title-mobile");
  } else {
    
    third.classList.remove("third-title-mobile");
    third.classList.add("third-title");
  }
  window.addEventListener("resize", (event) => {
    reduceSize();
  });
});

const reduceSize = () => {

  const third = document.querySelector("#third");
  console.log(third);
  if (window.innerWidth < 992) {
    
    console.log("removing circle");
    
    third.classList.remove("third-title");
    third.classList.add("third-title-mobile");
  } else {
    
    third.classList.remove("third-title-mobile");
    third.classList.add("third-title");
  }
};
