<template>
  <section class="body" v-cloak>
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

      <!-- <Planets v-if="renderComponent"/> -->

      <Planets2/>

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
// import Planets from "../components/Planets.vue"
import Planets2 from "../components/Planets2.vue"
import Parallax from "parallax-js";
import gsap from "gsap";
import { Howl, Howler } from 'howler';

export default {
  components: { Planets2 },
  name: "Homepage",
  data() {
    return {
      renderComponent: true,
    };
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
        ease:'bounce.out'
      })
    }
    return {beforeEnter,enter}
  },
  // methods: {
  //   // re render component
  //   forceRerender() {
  //       // Remove my-component from the DOM
  //       this.renderComponent = false;

  //       this.$nextTick(() => {
  //         // Add the component back in
  //         this.renderComponent = true;
  //       });
  //     }
  // },
  mounted: function () {
    
    // parallax
    let scene = document.getElementById("scene");
    let parallaxInstance = new Parallax(scene);
    parallaxInstance.friction(0.1, 0.1);


    // Slider
    // var slideIndex = 0;
    // carousel();

    // function carousel() {
    //   var i;
    //   var x = document.getElementsByClassName("planetPreview");
    //   for (i = 0; i < x.length; i++) {
    //     x[i].style.display = "none";
    //   }
    //   slideIndex++;
    //   if (slideIndex > x.length) {
    //     slideIndex = 1;
    //   }
    //   x[slideIndex - 1].style.display = "block";
    //   setTimeout(carousel, 2000);
    // }


    // Howler js
    var sound = new Howl({
      src:[require("../assets/music1.mp3")],
      html5:true,
      loop:true
    });

    sound.play()

    
    // gsap animation
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

};
</script>

<style>
[v-cloak]{
  display: none;
}

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
</style>