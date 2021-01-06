var myVar;

	function myFunction() {
	  myVar = setTimeout(showPage, 2000);
	}

	function showPage() {
	  document.getElementById("loader").style.display = "none";
	  document.getElementById("maincontent").style.display = "block";
	}

var myIndex = 0;
carousel2();

function carousel2() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    x[i].style.opacity = 0;  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  x[myIndex-1].style.opacity = 1; 
  setTimeout(carousel2, 5000);    
}


$('#myCarousel').carousel({
    interval:   3000
  });