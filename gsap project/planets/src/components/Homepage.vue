<template>
  <section class="body">
    <nav>
      <div class="logo">Explore</div>
      <div class="nav-link">
        <ul>
          <li><img src="../assets/facebook.png" alt="" /></li>
          <li><img src="../assets/linkedin.png" alt="" /></li>
          <li><img src="../assets/instagram-logo.png" alt="" /></li>
        </ul>
      </div>
    </nav>

    <section id="sectionone" class="screen">
      <div id="scene">
        <div data-depth="0.1" class="bg">
          <img src="../assets/background.png" alt="" />
        </div>
        <div data-depth="0.5" class="rock1">
          <img src="../assets/rock.png" alt="" />
        </div>
        <div data-depth="0.5" class="rock2">
          <img src="../assets/rock.png" alt="" />
        </div>
        <div data-depth="1.2" class="earth">
          <img src="../assets/earth.png" alt="" />
        </div>
        <div data-depth="0.1" class="text">
          <h1>PLANETS</h1>
        </div>
        <div data-depth="0.4" class="mid">
          <img src="../assets/mid.png" alt="" />
        </div>
        <div data-depth="0.2" class="fore">
          <img src="../assets/foreground.png" alt="" />
        </div>
      </div>
    </section>
    <section id="sectiontwo" class="screen">
      <!-- slide 1 -->

      <div class="slide1">
        <div class="planetPreview">
          <div class="planetimg">
            <img src="../assets/mercury.png" alt="" />
          </div>
          <h4 class="number"><span>01</span></h4>
          <div class="planetTexts">
            <transition appear @before-enter="beforeEnter" @enter="enter">
            <p class="planetName"><span>Murcury</span></p>
            </transition>
            <p class="planetDes">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                nam quos eveniet iste adipisci asperiores consectetur voluptatum
                architecto blanditiis dolorem, laudantium natus, magnam dicta!
                Debitis id dignissimos nobis ipsum vero!
              </span>
            </p>

            <h5 class="planetsm">
              ORBIT PERIOD:
              <span style="opacity: 0.7"> 87.97 Earth Days </span>
            </h5>

            <h5 class="planetsm" style="margin-left: 5vw">
              KNOWN MOONS:
              <span style="opacity: 0.7"> None </span>
            </h5>
          </div>
        </div>
      </div>

      <!-- slide 2 -->

      <div class="slide1">
        <div class="planetPreview">
          <div class="planetimg">
            <img src="../assets/venus.png" alt="" />
          </div>
          <h4 class="number"><span>02</span></h4>
          <div class="planetTexts">
            <transition appear @before-enter="beforeEnter" @enter="enter">
            <p class="planetName"><span>Venus</span></p>
            </transition>
            <p class="planetDes">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                nam quos eveniet iste adipisci asperiores consectetur voluptatum
                architecto blanditiis dolorem, laudantium natus, magnam dicta!
                Debitis id dignissimos nobis ipsum vero!
              </span>
            </p>

            <h5 class="planetsm">
              ORBIT PERIOD:
              <span style="opacity: 0.7"> 87.97 Earth Days </span>
            </h5>

            <h5 class="planetsm" style="margin-left: 5vw">
              KNOWN MOONS:
              <span style="opacity: 0.7"> None </span>
            </h5>
          </div>
        </div>
      </div>

      <!-- slide 3 -->

      <div class="slide1">
        <div class="planetPreview">
          <div class="planetimg">
            <img src="../assets/earth1.png" alt="" />
          </div>
          <h4 class="number"><span>03</span></h4>
          <div class="planetTexts">
            <transition appear @before-enter="beforeEnter" @enter="enter">
            <p class="planetName"><span>Earth</span></p>
            </transition>
            <p class="planetDes">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                nam quos eveniet iste adipisci asperiores consectetur voluptatum
                architecto blanditiis dolorem, laudantium natus, magnam dicta!
                Debitis id dignissimos nobis ipsum vero!
              </span>
            </p>

            <h5 class="planetsm">
              ORBIT PERIOD:
              <span style="opacity: 0.7"> 87.97 Earth Days </span>
            </h5>

            <h5 class="planetsm" style="margin-left: 5vw">
              KNOWN MOONS:
              <span style="opacity: 0.7"> None </span>
            </h5>
          </div>
        </div>
      </div>

      <!-- slide 4 -->

      <div class="slide1">
        <div class="planetPreview">
          <div class="planetimg">
            <img src="../assets/mars.png" alt="" />
          </div>
          <h4 class="number"><span>04</span></h4>
          <div class="planetTexts">
            <transition appear @before-enter="beforeEnter" @enter="enter">
            <p class="planetName"><span>Mars</span></p>
            </transition>
            <p class="planetDes">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                nam quos eveniet iste adipisci asperiores consectetur voluptatum
                architecto blanditiis dolorem, laudantium natus, magnam dicta!
                Debitis id dignissimos nobis ipsum vero!
              </span>
            </p>

            <h5 class="planetsm">
              ORBIT PERIOD:
              <span style="opacity: 0.7"> 87.97 Earth Days </span>
            </h5>

            <h5 class="planetsm" style="margin-left: 5vw">
              KNOWN MOONS:
              <span style="opacity: 0.7"> None </span>
            </h5>
          </div>
        </div>
      </div>

      <!-- slide 5 -->

      <div class="slide1">
        <div class="planetPreview">
          <div class="planetimg">
            <img src="../assets/jupiter.png" alt="" />
          </div>
          <h4 class="number"><span>05</span></h4>
          <div class="planetTexts">
            <transition appear @before-enter="beforeEnter" @enter="enter">
            <p class="planetName"><span>Jupiter</span></p>
            </transition>
            <p class="planetDes">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                nam quos eveniet iste adipisci asperiores consectetur voluptatum
                architecto blanditiis dolorem, laudantium natus, magnam dicta!
                Debitis id dignissimos nobis ipsum vero!
              </span>
            </p>

            <h5 class="planetsm">
              ORBIT PERIOD:
              <span style="opacity: 0.7"> 87.97 Earth Days </span>
            </h5>

            <h5 class="planetsm" style="margin-left: 5vw">
              KNOWN MOONS:
              <span style="opacity: 0.7"> None </span>
            </h5>
          </div>
        </div>
      </div>

      <!-- slide 6 -->

      <div class="slide1">
        <div class="planetPreview">
          <div class="planetimg">
            <img src="../assets/saturn.png" alt="" />
          </div>
          <h4 class="number"><span>06</span></h4>
          <div class="planetTexts">
            <transition appear @before-enter="beforeEnter" @enter="enter">
            <p class="planetName"><span>Saturn</span></p>
            </transition>
            <p class="planetDes">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                nam quos eveniet iste adipisci asperiores consectetur voluptatum
                architecto blanditiis dolorem, laudantium natus, magnam dicta!
                Debitis id dignissimos nobis ipsum vero!
              </span>
            </p>

            <h5 class="planetsm">
              ORBIT PERIOD:
              <span style="opacity: 0.7"> 87.97 Earth Days </span>
            </h5>

            <h5 class="planetsm" style="margin-left: 5vw">
              KNOWN MOONS:
              <span style="opacity: 0.7"> None </span>
            </h5>
          </div>
        </div>
      </div>

      <!-- slide 7 -->

      <div class="slide1">
        <div class="planetPreview">
          <div class="planetimg">
            <img src="../assets/uranus.png" alt="" />
          </div>
          <h4 class="number"><span>07</span></h4>
          <div class="planetTexts">
            <transition appear @before-enter="beforeEnter" @enter="enter">
            <p class="planetName"><span>Uranus</span></p>
            </transition>
            <p class="planetDes">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                nam quos eveniet iste adipisci asperiores consectetur voluptatum
                architecto blanditiis dolorem, laudantium natus, magnam dicta!
                Debitis id dignissimos nobis ipsum vero!
              </span>
            </p>

            <h5 class="planetsm">
              ORBIT PERIOD:
              <span style="opacity: 0.7"> 87.97 Earth Days </span>
            </h5>

            <h5 class="planetsm" style="margin-left: 5vw">
              KNOWN MOONS:
              <span style="opacity: 0.7"> None </span>
            </h5>
          </div>
        </div>
      </div>

      <!-- slide 8 -->

      <div class="slide1">
        <div class="planetPreview">
          <div class="planetimg">
            <img src="../assets/neptune.png" alt="" />
          </div>
          <h4 class="number"><span>08</span></h4>
          <div class="planetTexts">
            <transition appear @before-enter="beforeEnter" @enter="enter">
            <p class="planetName"><span>Neptune</span></p>
            </transition>
            <p class="planetDes">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                nam quos eveniet iste adipisci asperiores consectetur voluptatum
                architecto blanditiis dolorem, laudantium natus, magnam dicta!
                Debitis id dignissimos nobis ipsum vero!
              </span>
            </p>

            <h5 class="planetsm">
              ORBIT PERIOD:
              <span style="opacity: 0.7"> 87.97 Earth Days </span>
            </h5>

            <h5 class="planetsm" style="margin-left: 5vw">
              KNOWN MOONS:
              <span style="opacity: 0.7"> None </span>
            </h5>
          </div>
        </div>
      </div>

      <!-- SLIDER LINKS -->
      <div>
        <div class="rockbg1">
          <img src="../assets/rock.png" alt="" />
        </div>
      </div>
    </section>

    <!-- <transition appear @before-enter="beforeEnter" @enter="enter">
      <h1 style="color:white">Hi</h1>
    </transition> -->
  </section>

  
</template>

<script>
import Parallax from "parallax-js";
import gsap from "gsap";

export default {
  name: "Homepage",
  mounted: function () {
    let scene = document.getElementById("scene");
    let parallaxInstance = new Parallax(scene);
    parallaxInstance.friction(0.1, 0.1);

    var slideIndex = 0;
    carousel();

    function carousel() {
      var i;
      var x = document.getElementsByClassName("planetPreview");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > x.length) {
        slideIndex = 1;
      }
      x[slideIndex - 1].style.display = "block";
      setTimeout(carousel, 2000);
    }

    // const textrev = gsap.timeline();

    // textrev.from(".planetName span", 1.8, {
    //   y: 200,
    //   ease: "power4.out",
    //   delay: 1,
    //   skewY: 10,
    //   stagger: {
    //     amount: 0.4,
    //   },
    // });
  },
  setup(){
    const beforeEnter = (el) => {
      el.style.transform = 'translateY(-60px)'
      el.style.opacity = 0
    }
    const enter = (el) => {
      gsap.to(el,{
        duration:1,
        y:0,
        opacity:1,
        
      })
    }
    return {beforeEnter,enter}
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: "Roboto";
  list-style: none;
  box-sizing: border-box;
  background-color: #000;
}

nav {
  position: fixed;
  z-index: 100;
  height: 8vh;
  width: 96%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
}

.logo {
  color: #fff;
  font-weight: 600;
  font-size: 16px;
}

nav .nav-link ul {
  display: flex;
  flex-direction: row;
}

nav .nav-link ul li {
  padding: 0 4px;
  list-style: none;
}

nav .nav-link ul img {
  transform: scale(0.45);
}

#sectionone #sectiontwo {
  height: 80vh;
  overflow: hidden;
}

.bg img {
  width: 100vw;
  height: 100vh;
  filter: brightness(1);
}

.rock1 {
  position: absolute;
  top: 35vh !important;
  left: 30vw !important;
}

.rock1 img {
  width: 40%;
  filter: brightness(0.5);
}

.rock2 {
  position: absolute;
  top: 20vh !important;
  left: 80vw !important;
}

.rock2 img {
  width: 40%;
  filter: brightness(0.5);
}

.text h1 {
  font-family: "AlphaCentauri", sans-serif;
  font-size: 5vw;
  color: #fff;
  letter-spacing: 20px;
  position: absolute;
  top: 35vh;
  left: 34vw;
  z-index: 2;
}

.earth img {
  width: 400px;
  height: 400px;
  position: absolute;
  left: 34vw;
  top: 25vh;
  z-index: 1;
  filter: brightness(0.9);
}

.mid {
  left: -100px !important;
  bottom: -200px !important;
  top: unset !important;
}

.mid img {
  width: 100%;
  z-index: 2;
  left: 20px;
  top: 10vh;
  filter: brightness(0.8);
}

.fore {
  right: -50px !important;
  bottom: -200px !important;
  top: 0px;
  left: unset !important;
}

.fore img {
  width: 400px;
  height: 110vh;
  filter: brightness(0.5);
}

/* Swiper */
.slide {
  display: none;
}

#sectiontwo {
  width: 100%;
  height: 100vh;
  position: relative;
}

.rockbg1 {
  position: absolute;
  transform: scale(0.2);
  filter: brightness(0.4);
  top: 30vh;
  left: 0;
  z-index: 1;
}

.planetPreview {
  position: absolute;
  top: 50vh;
  width: 100%;
}

.planetTexts {
  position: absolute;
  top: 0;
  left: 30vw;
  color: white;
}

.planetName {
  color: white;
  font-family: "AlphaCentauri", sans-serif;
  font-size: 8vh;
}

.planetDes {
  width: 60%;
}

.planetsm {
  display: inline-block;
}

.number {
  opacity: 0.3;
  position: absolute;
  top: 0vh;
  left: 26vw;
  color: white;
  transform: scale(3);
}
</style>