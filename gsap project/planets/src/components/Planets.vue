<template>
      <div class="wrapper">

  <div class="slider">

    <!-- Works with as many slides as are added in-->

    <input type="radio" name="slide-switches" id="slide_text" checked class="slide-switch">
    <label for="slide_text"  class="slide-label">Slide Text</label>
    <div class="slide-content padded">
      <!-- slide 1 -->

  <div class="">
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
    </div>

    <input type="radio" name="slide-switches" id="slide_text7" class="slide-switch">
    <label for="slide_text7"  class="slide-label">Slide Text</label>
    <div class="slide-content padded">
      <!-- slide 2 -->

      <div class="">
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
    </div>

    <input type="radio" name="slide-switches" id="slide_text6" class="slide-switch">
    <label for="slide_text6"  class="slide-label">Slide Text</label>
    <div class="slide-content padded">
      <!-- slide 3 -->

      <div class="">
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
    </div>

    <input type="radio" name="slide-switches" id="slide_text5" class="slide-switch">
    <label for="slide_text5"  class="slide-label">Slide Text</label>
    <div class="slide-content padded">
      <!-- slide 4 -->

      <div class="">
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
    </div>

    <input type="radio" name="slide-switches" id="slide_text4"  class="slide-switch">
    <label for="slide_text4"  class="slide-label">Slide Text</label>
    <div class="slide-content padded">
      <!-- slide 5 -->

      <div class="">
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
    </div>

    <input type="radio" name="slide-switches" id="slide_text3"  class="slide-switch">
    <label for="slide_text3"  class="slide-label">Slide Text</label>
    <div class="slide-content padded">
      <!-- slide 6 -->

      <div class="">
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
    </div>
    

    <input type="radio" name="slide-switches" id="slide_text69"  class="slide-switch">
    <label for="slide_text69"  class="slide-label">Slide Text</label>
    <div class="slide-content padded">
      <!-- slide 7 -->

      <div class="">
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
    </div>

    <input type="radio" name="slide-switches" id="slide_text8"  class="slide-switch">
    <label for="slide_text8"  class="slide-label">Slide Text</label>
    <div class="slide-content padded">
      <!-- slide 8 -->
      <div class="">
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
    </div>

    

    

    

    <!-- <input type="radio" name="slide-switches" id="slide_image" class="slide-switch">
    <label for="slide_image" class="slide-label">Slide Image</label>
    <div class="slide-content">
      <img src="https://i.imgur.com/1k0xC1C.jpg">
    </div>

    <input type="radio" name="slide-switches" id="slide_video" class="slide-switch">
    <label for="slide_video" class="slide-label">Slide Video</label>
    <div class="slide-content">
      <iframe width="100%" height="420" src="https://www.youtube.com/embed/zgrrjh5_7IM" frameborder="0" allowfullscreen></iframe>
    </div> -->

  </div>

  <!-- <p>Line outside slider</p> -->

</div>
</template>

<script>
import gsap from "gsap";

export default {
    name:"Planets",
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
        ease:'bounce.out'
      })
    }
    return {beforeEnter,enter}
  }

}
</script>

<style>
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

.slider::after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  content: '';
  display: block;
  background: #34495e;
  height: 3rem;
}
.slide-switch {
  display: none;
}
.slide-label {
  position: absolute;
  bottom: 1rem;
  display: block;
  z-index: 5;
  height: 1rem;
  width: 1rem;
  text-indent: 1rem;
  overflow: hidden;
  background: #2980b9;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.25s;
}
.slide-label:nth-of-type(1) {
  left: 1rem;
}
.slide-label:nth-of-type(2) {
  left: 2.5rem;
}
.slide-label:nth-of-type(3) {
  left: 4rem;
}
.slide-label:nth-of-type(4) {
  left: 5.5rem;
}
.slide-label:nth-of-type(5) {
  left: 7rem;
}
.slide-label:nth-of-type(6) {
  left: 8.5rem;
}
.slide-label:nth-of-type(7) {
  left: 10rem;
}
.slide-label:nth-of-type(8) {
  left: 11.5rem;
}
.slide-switch:not(:checked) + .slide-label + .slide-content {
  opacity: 0;
  transition: opacity 0.35s;
  pointer-events: none;
}
.slide-switch:checked + .slide-label + .slide-content {
  animation: slide 1s;
}
@keyframes slide {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

</style>