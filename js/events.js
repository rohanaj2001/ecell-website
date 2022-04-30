

$(".u-poster").click(function(){
    $(".active").removeClass("active");
    $(this).addClass("active");
}) 


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


