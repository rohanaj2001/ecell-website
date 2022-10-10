
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
    contentBox.innerHTML = `
    <div class="greyBorder"><div></div></div>
    <div class="achievementsContentBox p5 d-flex align-items-center justify-content-center">
        <div class="left d-flex align-items-center justify-content-center flex-column">
            <div class="card text-black" style="width: 18rem;">
                <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-black">2011</h6><ul>
                    <li>CreatHives </li>
                    </ul></h6>
                    <p class="card-text"></p>
                </div>
            </div>
        </div>
        <div class="right d-flex align-items-center justify-content-center flex-column">
            <div class="card text-black" style="width: 18rem;">
                <div class="card-body">
            <h6 class="card-subtitle mb-2 text-black"><span>
            <ion-icon name="briefcase"></ion-icon>
            </span>CreatHives</h6>
                    <p class="card-text"><b>Founders: Mr. Manoj Kumar Kalaivanan, Mr. Vignesh Subramanyam, Mr. Jayanth Veerandra, Ms. Ranjini Prabhu, Mr.Vishnu Tenkayala</b><br>
                    CreatHives is an initiative that brings to focus,
                    the imbalance between the market requirement and what the artists have to offer. We, at
                    CreatHives, cater to both ends of a creative collaboration, finding the right artist for creative
                    needs and the artist finding the right kind of work. Now you can meet other artists, trainers,
                    vendors, and network all you want with just a few clicks.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="greyBorder"><div></div></div>
    <div class="achievementsContentBox p5 d-flex align-items-center justify-content-center">
        <div class="left d-flex align-items-center justify-content-center flex-column">
            <div class="card text-black" style="width: 18rem;">
                <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-black">2012</h6><ul>
                    <li>YANTRAK </li>
                    </ul></h6>
                    <p class="card-text"></p>
                </div>
            </div>
        </div>
        <div class="right d-flex align-items-center justify-content-center flex-column">
            <div class="card text-black" style="width: 18rem;">
                <div class="card-body">
            <h6 class="card-subtitle mb-2 text-black"><span>
            <ion-icon name="briefcase"></ion-icon>
            </span>YANTRAK</h6>
                    <p class="card-text"><b>Founders: Mr. Sonu Singh, Mr. Abhijith K G, Mr. Chetan S Naik </b><br>
                    Yantrak is a technology start-up aspiring to fulfil design and technical needs of individuals,
                    companies, and other uprising startups in various fields. The team at Yantrak believe in
                    innovative ideas and products that have the potential to change the industries and ultimately the
                    lives of people.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="greyBorder"><div></div></div> 
    <div class="achievementsContentBox p5 d-flex align-items-center justify-content-center ">
    <div class="left d-flex align-items-center justify-content-center flex-column">
        <div class="card text-black" style="width: 18rem;">
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-black">2015</h6>
                <p class="card-text"> 
                <ul>
                <li>Listen To News </li>
                <li>366 The Brewing Company </li>
                <li>GeekSynergy</li>
                </ul>
                </p>
            </div>
        </div>
    </div>
    <div class="right d-flex align-items-center justify-content-center flex-column">
        <div class="card text-black" style="width: 18rem;">
            <div class="card-body">
        <h6 class="card-subtitle mb-2 text-black"><span>
        <ion-icon name="briefcase"></ion-icon>
        </span>Listen To News</h6>
                <p class="card-text"><b>Founder: Mr Bhanu Krishna </b><br>
                listen to news’ can help
                people from all background update themselves with current affairs.</p>
            </div>
        </div>
        <div class="card text-black" style="width: 18rem;">
            <div class="card-body">
            <h6 class="card-subtitle mb-2 text-black"><span>
            <ion-icon name="briefcase"></ion-icon>
            </span>366 The Brewing Company</h6>
                <p class="card-text"><b>Founders: Mr A Vishnupati, Mr Koushik Mallesh, Ms Parmita Narang </b><br>
                ‘366 The brewing Company’ aims to introduce craft sodas to the Indian market. They have
                already launched their root beer product to the market and currently working to introduce new
                products.</p>
            </div>
        </div>
        <div class="card text-black" style="width: 18rem;">
            <div class="card-body">
            <h6 class="card-subtitle mb-2 text-black"><span>
            <ion-icon name="briefcase"></ion-icon>
            </span>GeekSynergys</h6>
                <p class="card-text"><b>Founders: Mr. Anil Kumar M, Mr. A B Sachin Anchan, Mr. Gowrav L </b><br>
                GeekSynergy aims to provide cutting edge innovative products that are meaningful and strives to
                surpass the expectation of customers. We aim to educate our customers and deliver the products
                that helps them.</p>
            </div>
        </div>
    </div>

</div>
<div class="greyBorder"><div></div></div>
<div class="achievementsContentBox p5 d-flex align-items-center justify-content-center">
    <div class="left d-flex align-items-center justify-content-center flex-column">
        <div class="card text-black" style="width: 18rem;">
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-black">2016</h6><ul>
                <li>E-Drive </li>
                </ul></h6>
                <p class="card-text"></p>
            </div>
        </div>
    </div>
    <div class="right d-flex align-items-center justify-content-center flex-column">
        <div class="card text-black" style="width: 18rem;">
            <div class="card-body">
        <h6 class="card-subtitle mb-2 text-black"><span>
        <ion-icon name="briefcase"></ion-icon>
        </span>E-Drive</h6>
                <p class="card-text"><b>Founder: Mr Suraj Singh, Mr Sumit Kumar </b><br>
                A technology driven startup which aims to provide modular electric bicycle conversion kits. The
                kit can be mounted on any bicycle and convert it into a smart bicycle that aims to improve lives
                of thousands of people</p>
            </div>
        </div>
    </div>
</div>
<div class="greyBorder"><div></div></div>
<div class="achievementsContentBox p5 d-flex align-items-center justify-content-center ">
<div class="left d-flex align-items-center justify-content-center flex-column">
    <div class="card text-black" style="width: 18rem;">
        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-black">2017</h6>
            <p class="card-text"><ul>
            <li>H.O.P.E - Hitech OMR Pen for Exams</li>
            <li>Aidapp Intelligence Pvt. Limited </li>
            </ul></p>
        </div>
    </div>
</div>
<div class="right d-flex align-items-center justify-content-center flex-column">
    <div class="card text-black" style="width: 18rem;">
        <div class="card-body">
    <h6 class="card-subtitle mb-2 text-black"><span>
    <ion-icon name="briefcase"></ion-icon>
    </span>H.O.P.E - Hitech OMR Pen for Exams</h6>
            <p class="card-text"><b>Founder: Mr Yogesh Suresh</b><br>
            Hitech OMR Pen for Exams - is a pen product that will help students writing entrance
            exams save time.
            In a competitive world where the race is on for students writing entrance exams, this product
            aims to save over 10 minutes in a single exam by filling the OMR sheet answer bubbles in one
            go instead of wasting time colouring it.</p>
        </div>
    </div>
    <div class="card text-black" style="width: 18rem;">
        <div class="card-body">
        <h6 class="card-subtitle mb-2 text-black"><span>
        <ion-icon name="briefcase"></ion-icon>
        </span>Aidapp Intelligence Pvt. Limited</h6>
        <p class="card-text"><b>Founder and Team - Divyansh Lohia Koushik AS, Daniel Monteiro</b><br>
        Aidapp is driven by the values of solving the problems that we care about the most- to help
        people achieve more. We innovate in artificial intelligence and over-the-top user experience
        design implementations to build the next big product that shall empower businesses in decision
        making.</p>
        </div>
    </div>
</div>
</div>
<div class="greyBorder"><div></div></div>
<div class="achievementsContentBox p5 d-flex align-items-center justify-content-center">
    <div class="left d-flex align-items-center justify-content-center flex-column">
        <div class="card text-black" style="width: 18rem;">
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-black">2018</h6><ul>
                <li>@DCOM - Marketing and Advertising </li>
                </ul></h6>
                <p class="card-text"></p>
            </div>
        </div>
    </div>
    <div class="right d-flex align-items-center justify-content-center flex-column">
        <div class="card text-black" style="width: 18rem;">
            <div class="card-body">
        <h6 class="card-subtitle mb-2 text-black"><span>
        <ion-icon name="briefcase"></ion-icon>
        </span>E-Drive</h6>
                <p class="card-text"><b>Founders: Mr. Niraj Agarwalla, Mr. Nirvana Dogra, Mr. Pratush Maheshwari</b><br>
                @Dcom is a startup that institutionalized innovative methods of advertising offline. We work to
                embark a new era of promotion and are very stern with our belief of eradicating pamphlets as
                means of promoting. We collaborate with people at a grass root level to bring out the most
                effective form of advertising amongst the youth of the nation</p>
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
