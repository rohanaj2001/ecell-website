// nav---------------------------------------


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

var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            console.log(currentScrollPos);
            console.log(prevScrollpos);
            if (prevScrollpos < currentScrollPos) {
                $("nav").css("transform", "translateY(-100%)");
            }
            if (prevScrollpos > currentScrollPos) {
                $("nav").css("transform", "translateY(0)");
            }
            prevScrollpos=currentScrollPos;

        }
      


// upcoming-posters----------------------------------------------------

$(".u-poster").click(function(){
    $(" .active").removeClass("active");
    $(this).addClass("active");
}) 




// prev-posters----------------------------------------------------------

$(".row1 .prev-poster").click(function(){
    $(".row1 .prev-poster").css('animation-play-state', 'paused');
    $(".row1 .select").removeClass("select");
    $(this).addClass("select");
    $(this).click(function(){
        $(this).removeClass("select");
        if($('.row1 .select').length==0){
            $(".row1 .prev-poster").css('animation-play-state', 'running');
        }
    });
})

$(".row2 .prev-poster").click(function(){
    $(".row2 .prev-poster").css('animation-play-state', 'paused');
    $(".row2 .select").removeClass("select");
    $(this).addClass("select");
    $(this).click(function(){
        $(this).removeClass("select");
        if($('.row2 .select').length==0)
            $(".row2 .prev-poster").css('animation-play-state', 'running');
    });
})





// moments-------------------------------------------------------


let isMobileDevice = window.matchMedia("only screen and (max-width: 700px)").matches;

function createBubble() {
    const section = 
          document.querySelector("Section");
    var createElement = 
          document.createElement("div");
    
    var size = Math.random() * 40;

    createElement.className="bubble";

    createElement.style.animation = 
      "animation 35s linear infinite";
    createElement.style.width = 70 + size + "px";
    createElement.style.height = 70 + size + "px";
    createElement.style.left = 
      Math.random() * innerWidth + "px";


    const image=document.createElement("img");

    const srcList=["../images/eventsImages/moments images/photo_2022-04-30_00-02-54.jpg",
    "../images/eventsImages/moments images/photo_2022-04-30_00-03-34.jpg",
    "../images/eventsImages/moments images/photo_2022-04-30_00-03-42.jpg",
    "../images/eventsImages/moments images/photo_2022-04-30_00-03-44.jpg",
    "../images/eventsImages/moments images/photo_2022-04-30_00-03-56.jpg",
    "../images/eventsImages/moments images/photo_2022-04-30_00-03-58.jpg",
    "../images/eventsImages/moments images/photo_2022-04-30_00-04-02.jpg",
    "../images/eventsImages/moments images/photo_2022-04-30_00-04-05.jpg",
    "../images/eventsImages/moments images/photo_2022-04-30_00-04-09.jpg",
    "../images/eventsImages/moments images/photo_2022-04-30_00-04-13.jpg",
    "../images/eventsImages/moments images/photo_2022-04-30_00-04-16.jpg",
    "../images/eventsImages/moments images/photo_2022-04-30_00-04-19.jpg",
    "../images/eventsImages/moments images/photo_2022-04-30_00-04-21.jpg",
    "../images/eventsImages/moments images/photo_2022-04-30_00-04-24.jpg",
    "../images/eventsImages/moments images/photo_2022-04-30_00-04-27.jpg"];


    let bubbleRemoveTime=14000;
    let widthStyle=55 + size + "px";
    

    if(isMobileDevice){
        console.log(true);
        bubbleRemoveTime=5500;
        widthStyle=25 + size + "px";
        bubbleCreateTime=700;
    }



    image.src=srcList[Math.floor(Math.random() * srcList.length)];
    image.style.width=widthStyle;
    image.style.height=widthStyle;
    createElement.appendChild(image);
    section.appendChild(createElement);

    var background=document.getElementsByClassName("background")[0].getElementsByTagName('img')[0];
    image.addEventListener("click", function() {
        background.src=image.src;
        createElement.remove();
    });

    
    setTimeout(() => {
        createElement.remove();
    }, bubbleRemoveTime);
}


let bubbleCreateTime=1000;
setInterval(createBubble, bubbleCreateTime);



