
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
      



var startups = document.getElementById('startups')
var competitions = document.getElementById('competitions')
var events = document.getElementById('events')
var contentBox = document.getElementById('contentBox')
var contentHeading = document.getElementById('contentHeading')
function startupsFn() {
    contentHeading.innerText = "STARTUPS"
    contentBox.innerHTML = `<div class="greyBorder"><div></div></div> 
    <div class="achievementsContentBox p5 d-flex align-items-center justify-content-center ">
    <div class="left d-flex align-items-center justify-content-center flex-column">
        <div class="card text-black" style="width: 18rem;">
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-black">2008</h6>
                <p class="card-text">Some quick example text to build on the card title and make up
                    the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    <div class="right d-flex align-items-center justify-content-center flex-column">
        <div class="card text-black" style="width: 18rem;">
            <div class="card-body">
        <h6 class="card-subtitle mb-2 text-black"><span>
        <ion-icon name="briefcase"></ion-icon>
        </span>2008</h6>
                <p class="card-text">Some quick example text to build on the card title and make up
                    the bulk of the card's content.</p>
            </div>
        </div>
        <div class="card text-black" style="width: 18rem;">
            <div class="card-body">
            <h6 class="card-subtitle mb-2 text-black"><span>
            <ion-icon name="briefcase"></ion-icon>
            </span>2008</h6>
                <p class="card-text">Some quick example text to build on the card title and make up
                    the bulk of the card's content.</p>
            </div>
        </div>
    </div>

</div>
<div class="greyBorder"><div></div></div>
<div class="achievementsContentBox p5 d-flex align-items-center justify-content-center">
    <div class="left d-flex align-items-center justify-content-center flex-column">
        <div class="card text-black" style="width: 18rem;">
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-black">2008</h6>
                <p class="card-text">Some quick example text to build on the card title and make up
                    the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    <div class="right d-flex align-items-center justify-content-center flex-column">
        <div class="card text-black" style="width: 18rem;">
            <div class="card-body">
        <h6 class="card-subtitle mb-2 text-black"><span>
        <ion-icon name="briefcase"></ion-icon>
        </span>2008</h6>
                <p class="card-text">Some quick example text to build on the card title and make up
                    the bulk of the card's content.</p>
            </div>
        </div>
        <div class="card text-black" style="width: 18rem;">
            <div class="card-body">
            <h6 class="card-subtitle mb-2 text-black"><span>
            <ion-icon name="briefcase"></ion-icon>
            </span>2008</h6>
                <p class="card-text">Some quick example text to build on the card title and make up
                    the bulk of the card's content.</p>
            </div>
        </div>
    </div>
</div>
<div class="greyBorder"><div></div></div>
<div class="achievementsContentBox p5 d-flex align-items-center justify-content-center ">
<div class="left d-flex align-items-center justify-content-center flex-column">
    <div class="card text-black" style="width: 18rem;">
        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-black">2008</h6>
            <p class="card-text">Some quick example text to build on the card title and make up
                the bulk of the card's content.</p>
        </div>
    </div>
</div>
<div class="right d-flex align-items-center justify-content-center flex-column">
    <div class="card text-black" style="width: 18rem;">
        <div class="card-body">
    <h6 class="card-subtitle mb-2 text-black"><span>
    <ion-icon name="briefcase"></ion-icon>
    </span>2008</h6>
            <p class="card-text">Some quick example text to build on the card title and make up
                the bulk of the card's content.</p>
        </div>
    </div>
    <div class="card text-black" style="width: 18rem;">
        <div class="card-body">
        <h6 class="card-subtitle mb-2 text-black"><span>
        <ion-icon name="briefcase"></ion-icon>
        </span>2008</h6>
            <p class="card-text">Some quick example text to build on the card title and make up
                the bulk of the card's content.</p>
        </div>
    </div>
</div>
</div>
<div class="greyBorder"><div></div></div>
`
}

window.addEventListener('load', startupsFn)
startups.addEventListener('click', startupsFn)

competitions.addEventListener('click', () => {
    contentHeading.innerText = "COMPETITIONS"
    contentBox.innerHTML = `<div class="greyBorder"><div></div></div> 
<div class="achievementsContentBox p5 d-flex align-items-center justify-content-center">
    <div class="left d-flex align-items-center justify-content-center flex-column">
        <div class="card text-black" style="width: 18rem;">
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-black">2008</h6>
                <p class="card-text">Some quick example text to build on the card title and make up
                    the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    <div class="right d-flex align-items-center justify-content-center flex-column">
        <div class="card text-black" style="width: 18rem;">
            <div class="card-body">
        <h6 class="card-subtitle mb-2 text-black"><span>
        <ion-icon name="briefcase"></ion-icon>
        </span>2008</h6>
                <p class="card-text">Some quick example text to build on the card title and make up
                    the bulk of the card's content.</p>
            </div>
        </div>
        <div class="card text-black" style="width: 18rem;">
            <div class="card-body">
            <h6 class="card-subtitle mb-2 text-black"><span>
            <ion-icon name="briefcase"></ion-icon>
            </span>2008</h6>
                <p class="card-text">Some quick example text to build on the card title and make up
                    the bulk of the card's content.</p>
            </div>
        </div>
    </div>
</div>
<div class="greyBorder"><div></div></div>
<div class="achievementsContentBox p5 d-flex align-items-center justify-content-center ">
<div class="left d-flex align-items-center justify-content-center flex-column">
    <div class="card text-black" style="width: 18rem;">
        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-black">2008</h6>
            <p class="card-text">Some quick example text to build on the card title and make up
                the bulk of the card's content.</p>
        </div>
    </div>
</div>
<div class="right d-flex align-items-center justify-content-center flex-column">
    <div class="card text-black" style="width: 18rem;">
        <div class="card-body">
    <h6 class="card-subtitle mb-2 text-black"><span>
    <ion-icon name="briefcase"></ion-icon>
    </span>2008</h6>
            <p class="card-text">Some quick example text to build on the card title and make up
                the bulk of the card's content.</p>
        </div>
    </div>
    <div class="card text-black" style="width: 18rem;">
        <div class="card-body">
        <h6 class="card-subtitle mb-2 text-black"><span>
        <ion-icon name="briefcase"></ion-icon>
        </span>2008</h6>
            <p class="card-text">Some quick example text to build on the card title and make up
                the bulk of the card's content.</p>
        </div>
    </div>
</div>
</div>
<div class="greyBorder"><div></div></div>`
})

events.addEventListener('click', () => {
    contentHeading.innerText = "EVENTS"
    contentBox.innerHTML = `<div class="greyBorder"><div></div></div> 
    <div class="achievementsContentBox p5 d-flex align-items-center justify-content-center ">
    <div class="left d-flex align-items-center justify-content-center flex-column">
        <div class="card text-black" style="width: 18rem;">
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-black">2008</h6>
                <p class="card-text">Some quick example text to build on the card title and make up
                    the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    <div class="right d-flex align-items-center justify-content-center flex-column">
        <div class="card text-black" style="width: 18rem;">
            <div class="card-body">
        <h6 class="card-subtitle mb-2 text-black"><span>
        <ion-icon name="briefcase"></ion-icon>
        </span>2008</h6>
                <p class="card-text">Some quick example text to build on the card title and make up
                    the bulk of the card's content.</p>
            </div>
        </div>
        <div class="card text-black" style="width: 18rem;">
            <div class="card-body">
            <h6 class="card-subtitle mb-2 text-black"><span>
            <ion-icon name="briefcase"></ion-icon>
            </span>2008</h6>
                <p class="card-text">Some quick example text to build on the card title and make up
                    the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    </div>
    <div class="greyBorder"><div></div></div>`
})
var anchors = document.getElementsByClassName("hexLinks")
