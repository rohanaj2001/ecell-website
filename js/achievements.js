var startups = document.getElementById('startups')
var competitions = document.getElementById('competitions')
var events = document.getElementById('events')
var contentBox = document.getElementById('contentBox')

function startupsFn(){
    contentBox.innerHTML=` <div class="achievementsContentBox p5 d-flex align-items-center justify-content-center text-white">
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
<div class="achievementsContentBox p5 d-flex align-items-center justify-content-center text-white">
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

</div><div class="achievementsContentBox p5 d-flex align-items-center justify-content-center text-white">
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
 `
}

window.addEventListener('load',startupsFn)
startups.addEventListener('click', startupsFn)

competitions.addEventListener('click', ()=>{
    contentBox.innerHTML=`</div><div class="achievementsContentBox p5 d-flex align-items-center justify-content-center text-white">
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
        </div>`
})

events.addEventListener('click', ()=>{
    contentBox.innerHTML=`</div><div class="achievementsContentBox p5 d-flex align-items-center justify-content-center text-white">
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
        </div>`
})