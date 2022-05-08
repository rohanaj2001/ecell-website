
var carousel = document.querySelector('.ctCarousel');
var cells = carousel.querySelectorAll('.ctCarousel__cell');
var cellCount; // cellCount set from cells-range input value
var selectedIndex = 0;
var cellWidth = carousel.offsetWidth;
var cellHeight = carousel.offsetHeight;
var isHorizontal = true;
var radius, theta;
// console.log( cellWidth, cellHeight );

function rotateCarousel() {
  var angle = theta * selectedIndex * -1;
  carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
  'rotateY' + '(' + angle + 'deg)';
  
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotateCarousel();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
});



function changeCarousel() {
  cellCount = 10;
  theta = 360 / cellCount;
  var cellSize = cellWidth ;
  radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
  //test
  radius += 100;
  //test
  for ( var i=0; i < cells.length; i++ ) {
    var cell = cells[i];
    if ( i < cellCount ) {
      // visible cell
      cell.style.opacity = 1;
      var cellAngle = theta * i;
      cell.style.transform = 'rotateY' + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
    } else {
      // hidden cell
      cell.style.opacity = 0;
      cell.style.transform = 'none';
    }
  }
  rotateCarousel();
}
changeCarousel();

// card js

var ctCard1 = document.querySelector('#ctFlipCard_1');
ctCard1.addEventListener( 'click', function() {
  ctCard1.classList.toggle('is-flipped');
});
var ctCard2 = document.querySelector('#ctFlipCard_2');
ctCard2.addEventListener( 'click', function() {
  ctCard2.classList.toggle('is-flipped');
});
var ctCard3 = document.querySelector('#ctFlipCard_3');
ctCard3.addEventListener( 'click', function() {
  ctCard3.classList.toggle('is-flipped');
});
var ctCard4 = document.querySelector('#ctFlipCard_4');
ctCard4.addEventListener( 'click', function() {
  ctCard4.classList.toggle('is-flipped');
});
var ctCard5 = document.querySelector('#ctFlipCard_5');
ctCard5.addEventListener( 'click', function() {
  ctCard5.classList.toggle('is-flipped');
});
var ctCard6 = document.querySelector('#ctFlipCard_6');
ctCard6.addEventListener( 'click', function() {
  ctCard6.classList.toggle('is-flipped');
});
var ctCard7 = document.querySelector('#ctFlipCard_7');
ctCard7.addEventListener( 'click', function() {
  ctCard7.classList.toggle('is-flipped');
});
var ctCard8 = document.querySelector('#ctFlipCard_8');
ctCard8.addEventListener( 'click', function() {
  ctCard8.classList.toggle('is-flipped');
});
var ctCard9 = document.querySelector('#ctFlipCard_9');
ctCard9.addEventListener( 'click', function() {
  ctCard9.classList.toggle('is-flipped');
});
var ctCard10 = document.querySelector('#ctFlipCard_10');
ctCard10.addEventListener( 'click', function() {
  ctCard10.classList.toggle('is-flipped');
});

// card js end

