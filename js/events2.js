
//upcoming

$(".u-poster").click(function(){
    $(".active").removeClass("active");
    $(this).addClass("active");
})


//previous

$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};


$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

// $(window).on('resize scroll', function() {
//     if ($('#0').isOnScreen()) {
//         // do something
//         console.log("in viewport");
//     } else {
//         // do something else
//         console.log("not in viewport");
//     }
// });
let anim=$(".card-panel .prev-poster")
// if((anim.GetCurrentAnimatorStateInfo(0).IsName("scrollHorizontal").normalizedTime % 5) == 0.5*5){
//     console.log("done");
// }

cardNumber=6;

for(var i=0;i<$(".card-panel .prev-poster").length;i++){
    $(".card-panel .prev-poster")[i].id=i;
}



for(var i=0;i<$(".card-panel .prev-poster").length;i++){
    // console.log($(`#${i}`).html())
    // $(`#${i}`).css("animation","scrollHorizontal 10s linear infinite");
    const anime=document.querySelector("#anime");
    console.log(anime);
    anime.addEventListener("animationstart",function(){
        console.log("animation started");
    })
}














//moments

function createBubble() {
    const section =
          document.querySelector("Section");
    const createElement =
          document.createElement("span");
    var size = Math.random() * 40;

    createElement.className="bubble";

    createElement.style.animation =
      "animation 28s linear infinite";
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


    image.src=srcList[Math.floor(Math.random() * srcList.length)];
    image.style.width=70 + size + "px";
    image.style.height=70 + size + "px";
    createElement.appendChild(image);
    section.appendChild(createElement);



    setTimeout(() => {
        createElement.remove();
    }, 12000);
}
setInterval(createBubble, 700);

$(".bubble").click(function(){
    console.log("clicked");
})


