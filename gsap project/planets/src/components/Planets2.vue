<template>
  <!-- DIV 1 -->
  <div>
    <div class="planetPreview">
      <div class="planetimg">
        <img src="../assets/mercury.png" alt="" />
      </div>
      <!-- <h4 class="number"><span>01</span></h4> -->
      <div class="planetTexts">
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <p class="planetName"><span>Murcury</span></p>
        </transition>
        <p class="planetDes">
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
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

  <!-- DIV 2 -->
  <div>
    <div class="planetPreview">
      <div class="planetimg">
        <img src="../assets/venus.png" alt="" />
      </div>
      <!-- <h4 class="number"><span>02</span></h4> -->
      <div class="planetTexts">
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <p class="planetName"><span>Venus</span></p>
        </transition>
        <p class="planetDes">
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
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
  <!-- DIV 3 -->
  <div>
    <div class="planetPreview">
      <div class="planetimg">
        <img src="../assets/earth1.png" alt="" />
      </div>
      <!-- <h4 class="number"><span>03</span></h4> -->
      <div class="planetTexts">
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <p class="planetName"><span>Earth</span></p>
        </transition>
        <p class="planetDes">
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
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
  <!-- DIV 4 -->
  <div>
    <div class="planetPreview">
      <div class="planetimg">
        <img src="../assets/mars.png" alt="" />
      </div>
      <!-- <h4 class="number"><span>04</span></h4> -->
      <div class="planetTexts">
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <p class="planetName"><span>Mars</span></p>
        </transition>
        <p class="planetDes">
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
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
  <!-- DIV 5 -->
  <div>
    <div class="planetPreview">
      <div class="planetimg">
        <img src="../assets/jupiter.png" alt="" />
      </div>
      <!-- <h4 class="number"><span>05</span></h4> -->
      <div class="planetTexts">
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <p class="planetName"><span>Jupiter</span></p>
        </transition>
        <p class="planetDes">
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
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
  <!-- DIV 6 -->
  <div>
    <div class="planetPreview">
      <div class="planetimg">
        <img src="../assets/saturn.png" alt="" />
      </div>
      <!-- <h4 class="number"><span>06</span></h4> -->
      <div class="planetTexts">
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <p class="planetName"><span>Saturn</span></p>
        </transition>
        <p class="planetDes">
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
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
  <!-- DIV 7 -->
  <div>
    <div class="planetPreview">
      <div class="planetimg">
        <img src="../assets/uranus.png" alt="" />
      </div>
      <!-- <h4 class="number"><span>07</span></h4> -->
      <div class="planetTexts">
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <p class="planetName"><span>Uranus</span></p>
        </transition>
        <p class="planetDes">
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
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
  <!-- DIV 8 -->
  <div class="planetPreview">
    <div class="planetimg">
      <img src="../assets/neptune.png" alt="" />
    </div>
    <!-- <h4 class="number"><span>08</span></h4> -->
    <div class="planetTexts">
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <p class="planetName"><span>Neptune</span></p>
      </transition>
      <p class="planetDes">
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
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
</template>

<script>
import gsap from "gsap";
export default {
  name: "Planets2",
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
};


</script>

<style>

@media (max-width: 800px) {
  .planetPreview {
    flex-direction: column;
  }
}
.planetPreview {
  margin-top: 30vh;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.planetimg {
  display: inline-block;
}

.planetTexts {
  margin-top: 10vh;
  display: inline-block;
  color: white;
}

.planetName {
  color: white;
  font-family: "AlphaCentauri", sans-serif;
  font-size: 8vh;
  margin-top: 0;
}

.planetDes {
  width: 70%;
  font-size: 2.2vh;
}

.planetsm {
  margin: 0;
  display: inline-block;
}

.number span {
  font-size: 5vh;
  opacity: 0.3;
  color: white;
  transform: scale(3);
}
</style>