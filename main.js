
function newform(){
  let a = alert('THANKS FOR SIGN UP')
}
function myfunction(){
  var dots =document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if(dots.style.display === "none"){
    moreText.style.display ="none";
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }

}

