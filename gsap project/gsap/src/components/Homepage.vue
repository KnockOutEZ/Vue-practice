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
      <div class="swiper-container">
        <div class="swiper-wrapper">

            <!-- SLIDE ONE -->
          <div class="swiper-slide">
            <div class="slide-number">
              <p><span>Murcury</span></p>
            </div>
            <div class="slider-text">
              <h4><span>01</span></h4>
            </div>
            <div class="slide-detail">
              <p>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  nam quos eveniet iste adipisci asperiores consectetur
                  voluptatum architecto blanditiis dolorem, laudantium natus,
                  magnam dicta! Debitis id dignissimos nobis ipsum vero!
                </span>
              </p>
            </div>
            <div class="slide-detail-facts">
                <div>
                    <h5>ORBIT PERIOD:
                        <span style="opacity:0.8">
                            87.97 Earth Days
                        </span>
                    </h5>
                </div>
                <div>
                    <h5>Known Moons:
                        <span style="opacity:0.8">
                            None
                        </span>
                    </h5>
                </div>
            </div>
            <div class="slide-img">

            </div>
          </div>
        </div>
      </div>

      <!-- SLIDER LINKS -->
      <div>
          <div class="rockbg1">
              <img src="../assets/rock.png" alt="">
          </div>
          <div class="planet-links">

          </div>
      </div>
    </section>
  </section>
</template>

<script>
import Parallax from "parallax-js";

export default {
  name: "Homepage",
  mounted: function () {
    let scene = document.getElementById("scene");
    let parallaxInstance = new Parallax(scene);
    parallaxInstance.friction(0.1, 0.1);

    // SWIPER

    let keys = [
        "Mercury",
        "Venus",
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune",
    ]

    let slider = new Swiper(".swiper-container",{
        slidesPreView:"auto",
        spaceBetween:150,
        centeredSlides:true,
        mousewheel:true,
        pagination:{
            el:".planet-links",
            clickable:true,
            renderBullet:function(index,className){
                return '<div class = "' + classname  + '">' + keys[index] + "</div>";
            }
        }
    })
  },
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
#sectiontwo{
    width: 100%;
    height: 100vh;
    position: relative;
}

.rockbg1{
    position: absolute;
    transform: scale(0.2);
    filter: brightness(0.2);
    top: 20vh;
    left: 0;
    z-index: 1;
}

.planet-links{
    width: 95%;
    height: 5vh;
    color: #fff;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-evenly;
    list-style: none;
}

.planet-links .swiper-pagination-bullet{
    opacity: 0.2;
    outline: none;
}

.planet-links .swiper-pagination-bullet-active{
    color: #fff;
    opacity: 1;
}

.swiper-pagination-clickable .swiper-pagination-bullet{
    background: transparent;
}
</style>