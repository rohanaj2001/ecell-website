//scroll-navbar-----------------------------------------------------
var about = document.getElementById("about");
var aboutPos=about.offsetTop;

var secondHero=document.getElementById("hero-second");
var secondHeroPos=secondHero.offsetTop;

var achievements=document.getElementById("achievements");
var achievementsPos=achievements.offsetTop;

var logo=document.getElementById("logo");


$(window).on("scroll", function(){
  var currentScrollPos = window.pageYOffset;
  if((currentScrollPos>aboutPos && currentScrollPos<secondHeroPos) || currentScrollPos>achievementsPos){
    $("nav").css({"background-color": "rgba(255, 255, 255, 0.8)",
          "color": "black",
          "box-shadow": "inset 0px -1px 0px #C4C4C4"});
    logo.src="../images/homeImages/navlogo.png";
    $(".bar1, .bar2, .bar3").css({
        "background-color": "black"
    });
    $(".text-clr").css({
      "color": "black"
    });

    // $("nav a").on("hover", function(){
    //   $(this).css({
    //     "color": "black"
    //   });
    // });
  }

  else{
    $("nav").css({"background-color": "rgba(0, 0, 0, 0.1)",
          "color": "white",
          "box-shadow": "none"});
    logo.src="../images/homeImages/3.ECELL_LOGO_WHITE_2.png";
    $(".bar1, .bar2, .bar3").css({
      "background-color": "#fff"
    });
    $(".text-clr").css({
      "color": "var(--clr-light)"
    });

    // $("nav a").on("hover", function(){
    //   $("nav a").css({
    //     "color": "rgba(244, 227, 199,0.8)"
    //   });
    // });
  }
});



// navbar--------------------------------------------------
$('nav ul a').click(function(){
    $('.active').removeClass('active');
    $(this).addClass('active');
});

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//     var currentScrollPos = window.pageYOffset;
//     console.log(currentScrollPos);
//     if (prevScrollpos < currentScrollPos) {
//         $("nav").css("transform", "translateY(-100%)");
//     }
//     if (prevScrollpos > currentScrollPos) {
//         $("nav").css("transform", "translateY(0)");
//     }
//     prevScrollpos=currentScrollPos;

// }


// sent-contact-----------------------------------------------------
$('form span i').click(function(){
    $(this).addClass('sent');
    setTimeout(function(){
        $('.sent').removeClass('sent');
    }, 1000);
});


// mobilenav-----------------------------------------------------
function myFunction(x) {
    x.classList.toggle("change");
    let mobNavContent=document.getElementsByClassName("mob-nav-content")[0];
    if(mobNavContent.classList.contains("show")){
        mobNavContent.classList.remove("show");
    }
    else{
        mobNavContent.classList.add("show");
    }
}



// quoteschange-----------------------------------------------------
var objectList = [
    {
      name: 'Richard Branson',
      quote: 'Do not be embarrassed by your failures, learn from them and start again'
    },
    {
      name: 'Ken Follett',
      quote: 'Most rich people have a gangster in their ancestry somewhere'
    },
    {
      name: 'Jaachynma N.E. Agu',
      quote: "Don't set your goals by what other people deem important."
    },
    {
      name: 'Richie Norton',
      quote: 'To escape fear, you have to go through it, not around.'
    },
    {
      name: 'Nolan Bushnell',
      quote: 'The true entrepreneur is a doer, not a dreamer.'
    },
    {
      name: 'Walt Disney',
      quote: 'All our dreams can come true, if we have the courage to pursue them.'
    },
    {
      name: 'Robert H. Schuller',
      quote: 'Tough times never last, but tough people do.'
    },
    {
      name: 'John Maxwell',
      quote: ' A leader is one who knows the way, goes the way, and shows the way.'
    },
    {
      name: 'Walt Disney',
      quote: 'The way to get started is to quit talking and begin doing.'
    },
    {
      name: 'Mahatma Gandhi',
      quote: 'Be the change you wish to see in the world.'
    },
    {
      name: 'John A. Shedd',
      quote: 'A ship in the harbor is safe, but that is not what ships are built for.'
    },
    {
      name: 'Thomas Edison',
      quote: 'I have not failed. I’ve just found 10,000 ways that won’t work.'
    },
    {
      name: 'Drew Houston',
      quote: 'Don’t worry about failure; you only have to be right once.'
    },
    {
      name: 'Albert Einstein',
      quote: 'Try not to become a man of success. Rather become a man of value.'
    },
    {
      name: 'Abu Bakr',
      quote: 'Knowledge without action is meaningless'
    },
    {
      name: 'Peter Drucker',
      quote: 'The best way to predict the future is to create it.'
    },
    {
      name: 'Warren Bennis',
      quote: 'Leadership is the capacity to translate vision into reality.'
    },
    {
      name: 'Donald Trump',
      quote: 'As long as you’re going to be thinking anyway, think big.'
    },
    {
      name: 'John C. Maxwell',
      quote: 'A leader is one who knows the way, goes the way, and shows the way.'
    },
    {
      name: 'Confucius',
      quote: 'Choose a job that you like, and you will never have to work a day in your life.'
    }
  ];

  var quote =document.getElementsByClassName("quote-line")[0];
  var author = document.getElementsByClassName("author")[0];

setInterval(change, 20000);

function change() {
    var index = Math.floor(Math.random()*objectList.length);
    while(objectList[index].quote==quote.textContent){
        index = Math.floor(Math.random()*objectList.length);
    }
    quote.style.opacity = 0;
    author.style.opacity = 0;
    setTimeout(function(){
        quote.textContent = '"' + objectList[index].quote + '"';
        author.textContent = "~" + objectList[index].name; 
        quote.style.opacity = 1;
        author.style.opacity = 1;
    },1000);
}
