$(document).ready(function(){  
// slider
let quotes = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut`,
`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut`
];

let names = ['Alice G. Mullins', 'Rupert M. James', 'Kate R. Mila'];
let works = ['General Physician', 'Designer', 'Programmer'];

let currentQuote = 0;
let $buttonQuotes = $('.button-quotes');
let $quoteControls = 'quoteControls';
let qouteAcitveClass = 'quoteControls--isActive';
let $sliderQuote = $('#sliderQuote');
let $personName = $('#personName');
let $jobs = $('#jobs');

for (let i = 0; i < quotes.length; i++) {
$buttonQuotes.append(`
  <label
    data-quote="${i}"
    class="${$quoteControls}"
    for="quote-${i}"
  >
`);
}

let changeQuote = function() {

$sliderQuote.html(quotes[currentQuote]);
$personName.html(names[currentQuote]);
$jobs.html(works[currentQuote]);

$(`.${$quoteControls}`).removeClass(qouteAcitveClass);
$(`.${$quoteControls}[data-quote="${currentQuote}"]`).addClass(qouteAcitveClass);
}

changeQuote();

$(`.${$quoteControls}`).click(function() {
currentQuote = $(this).attr('data-quote');
changeQuote();
});

$('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
  
  $('.burger-nav').toggleClass('burger-nav_active');
  });

 // animation
 $(window).scroll(function(){
  // if ($(this).scrollTop() < 40) {
  //   $('.about-us').css('display', 'none');
  // }
  // else {
  //   $('.about-us').css('display', 'block');
  //   $('.about-us').css('animation', 'bounceInLeft  2s');
  // } 
  if ($(this).scrollTop() > 40) {
       $('.about-us').addClass('animated');
     }
 });

});