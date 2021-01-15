
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


// $(document).ready(function(){
//     $(window).scroll(function() {
//         //check if your div is visible to user
//         // CODE ONLY CHECKS VISIBILITY FROM TOP OF THE PAGE
//         if ($(window).scrollTop() + $(window).height() >= $('#load').offset().top) {
//             if(!$('#load').attr('loaded')) {
//                 //not in ajax.success due to multiple sroll events
//                 $('#load').attr('loaded', true);

//                 //ajax goes here
//                 //in theory, this code still may be called several times
//             }
//         }
//     });
// });