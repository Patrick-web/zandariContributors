<template>
  <div class="nav">
    <div @click="goToTuts" class="activeTab nv">
     <svg id="tutsIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="473 248 115 115" width="115pt" height="115pt"><path d=" M 484.25 305.5 C 484.25 279.974 504.974 259.25 530.5 259.25 C 556.026 259.25 576.75 279.974 576.75 305.5 C 576.75 331.026 556.026 351.75 530.5 351.75 C 504.974 351.75 484.25 331.026 484.25 305.5 L 484.25 305.5 Z  M 473 305.5 C 473 273.765 498.765 248 530.5 248 C 562.235 248 588 273.765 588 305.5 C 588 337.235 562.235 363 530.5 363 C 498.765 363 473 337.235 473 305.5 L 473 305.5 Z  M 512.137 329.282 L 512.078 305.5 L 512.02 281.718 C 512.009 277.343 515.081 275.559 518.875 277.738 L 539.5 289.578 L 560.125 301.418 C 563.919 303.596 563.928 307.148 560.145 309.345 L 539.578 321.287 L 519.012 333.229 C 515.228 335.426 512.147 333.657 512.137 329.282 Z " fill-rule="evenodd"/></svg>
    </div>
    <div @click="goToDeps" class="navLink nv">
      <svg id="depsIcon" style="isolation:isolate" viewBox="8.387 292.299 55.613 48.667" width="55.613pt" height="48.667pt"><g><path d=" M 61.458 316.002 L 50.966 312.07 L 50.966 300.285 C 50.966 298.656 49.956 297.2 48.424 296.625 L 37.562 292.551 C 36.682 292.215 35.705 292.215 34.814 292.551 L 23.952 296.625 C 22.421 297.2 21.411 298.656 21.411 300.285 L 21.411 312.07 L 10.918 316.002 C 9.397 316.578 8.387 318.033 8.387 319.663 L 8.387 331.622 C 8.387 333.099 9.224 334.457 10.549 335.119 L 21.411 340.55 C 22.508 341.104 23.811 341.104 24.908 340.55 L 36.194 334.902 L 47.479 340.55 C 48.576 341.104 49.88 341.104 50.977 340.55 L 61.838 335.119 C 63.164 334.457 64 333.099 64 331.622 L 64 319.663 C 64 318.033 62.99 316.578 61.458 316.002 L 61.458 316.002 Z  M 47.273 312.157 L 38.04 315.622 L 38.04 308.214 L 47.273 304.195 L 47.273 312.157 Z  M 25.114 300.133 L 36.194 295.984 L 47.273 300.133 L 47.273 300.198 L 36.194 304.695 L 25.114 300.198 L 25.114 300.133 Z  M 34.238 331.752 L 25.006 336.368 L 25.006 327.777 L 34.238 323.562 L 34.238 331.752 Z  M 34.238 319.587 L 23.159 324.084 L 12.08 319.587 L 12.08 319.522 L 23.159 315.372 L 34.238 319.522 L 34.238 319.587 Z  M 60.307 331.752 L 51.074 336.368 L 51.074 327.777 L 60.307 323.562 L 60.307 331.752 Z  M 60.307 319.587 L 49.228 324.084 L 38.149 319.587 L 38.149 319.522 L 49.228 315.372 L 60.307 319.522 L 60.307 319.587 Z "/></g></svg>
    </div>
    <div @click="goToBooks" class="navLink nv">
      <svg id="booksIcon" style="isolation:isolate" viewBox="15 670 48.125 55" width="48.125pt" height="55pt"><g><path d=" M 63.125 708.672 L 63.125 672.578 C 63.125 671.149 61.976 670 60.547 670 L 25.313 670 C 19.619 670 15 674.619 15 680.313 L 15 714.688 C 15 720.381 19.619 725 25.313 725 L 60.547 725 C 61.976 725 63.125 723.851 63.125 722.422 L 63.125 720.703 C 63.125 719.897 62.749 719.167 62.169 718.694 C 61.718 717.04 61.718 712.324 62.169 710.67 C 62.749 710.208 63.125 709.478 63.125 708.672 Z  M 28.75 684.395 C 28.75 684.04 29.04 683.75 29.395 683.75 L 52.168 683.75 C 52.522 683.75 52.813 684.04 52.813 684.395 L 52.813 686.543 C 52.813 686.897 52.522 687.188 52.168 687.188 L 29.395 687.188 C 29.04 687.188 28.75 686.897 28.75 686.543 L 28.75 684.395 Z  M 28.75 691.27 C 28.75 690.915 29.04 690.625 29.395 690.625 L 52.168 690.625 C 52.522 690.625 52.813 690.915 52.813 691.27 L 52.813 693.418 C 52.813 693.772 52.522 694.063 52.168 694.063 L 29.395 694.063 C 29.04 694.063 28.75 693.772 28.75 693.418 L 28.75 691.27 Z  M 55.971 718.125 L 25.313 718.125 C 23.411 718.125 21.875 716.589 21.875 714.688 C 21.875 712.797 23.422 711.25 25.313 711.25 L 55.971 711.25 C 55.767 713.087 55.767 716.288 55.971 718.125 Z " /></g></svg>
    </div>
    <div @click="goToLinks" class="navLink nv">
      <svg id="webIcon" style="isolation:isolate" viewBox="13.387 473.683 48.613 40.009" width="48.613pt" height="40.009pt"><g><path d=" M 59.974 473.683 L 20.814 473.683 C 19.695 473.683 18.789 474.803 18.789 476.184 L 18.789 477.017 L 15.413 477.017 C 14.294 477.017 13.387 478.137 13.387 479.518 L 13.387 507.858 C 13.387 511.08 15.503 513.692 18.113 513.692 L 57.949 513.692 C 60.186 513.692 62 511.453 62 508.691 L 62 476.184 C 62 474.803 61.093 473.683 59.974 473.683 Z  M 18.113 508.691 C 17.741 508.691 17.438 508.318 17.438 507.858 L 17.438 482.019 L 18.789 482.019 L 18.789 507.858 C 18.789 508.318 18.486 508.691 18.113 508.691 Z  M 38.031 507.024 L 25.203 507.024 C 24.643 507.024 24.19 506.464 24.19 505.774 L 24.19 504.94 C 24.19 504.25 24.643 503.69 25.203 503.69 L 38.031 503.69 C 38.59 503.69 39.044 504.25 39.044 504.94 L 39.044 505.774 C 39.044 506.464 38.59 507.024 38.031 507.024 Z  M 55.586 507.024 L 42.757 507.024 C 42.198 507.024 41.745 506.464 41.745 505.774 L 41.745 504.94 C 41.745 504.25 42.198 503.69 42.757 503.69 L 55.586 503.69 C 56.145 503.69 56.599 504.25 56.599 504.94 L 56.599 505.774 C 56.599 506.464 56.145 507.024 55.586 507.024 Z  M 38.031 497.022 L 25.203 497.022 C 24.643 497.022 24.19 496.462 24.19 495.772 L 24.19 494.938 C 24.19 494.248 24.643 493.688 25.203 493.688 L 38.031 493.688 C 38.59 493.688 39.044 494.248 39.044 494.938 L 39.044 495.772 C 39.044 496.462 38.59 497.022 38.031 497.022 Z  M 55.586 497.022 L 42.757 497.022 C 42.198 497.022 41.745 496.462 41.745 495.772 L 41.745 494.938 C 41.745 494.248 42.198 493.688 42.757 493.688 L 55.586 493.688 C 56.145 493.688 56.599 494.248 56.599 494.938 L 56.599 495.772 C 56.599 496.462 56.145 497.022 55.586 497.022 Z  M 55.586 487.02 L 25.203 487.02 C 24.643 487.02 24.19 486.46 24.19 485.769 L 24.19 481.602 C 24.19 480.911 24.643 480.352 25.203 480.352 L 55.586 480.352 C 56.145 480.352 56.599 480.911 56.599 481.602 L 56.599 485.769 C 56.599 486.46 56.145 487.02 55.586 487.02 Z " /></g></svg>
    </div>
  </div>
       
</template>

<script>
  export default {
    name: 'navBar',
    methods:{
      goToTuts(){
        if(window.innerWidth<700){
          document.querySelector('.viewsWrapper').style.left = '0%';
        }else{
          document.querySelector('.viewsWrapper').style.top = '0%';
        }

      },
      goToDeps(){
        if(window.innerWidth<700){
          document.querySelector('.viewsWrapper').style.left = '-98.8%';
        }else{
          document.querySelector('.viewsWrapper').style.top = '-100%';
        }
      },
      goToBooks(){
        if(window.innerWidth<700){
          document.querySelector('.viewsWrapper').style.left = '-198.8%';
        }else{
          document.querySelector('.viewsWrapper').style.top = '-200%';
        }
      },
      goToLinks(){
        if(window.innerWidth<700){
          document.querySelector('.viewsWrapper').style.left = '-298.8%';
        }else{
          document.querySelector('.viewsWrapper').style.top = '-300%';
        }
      },
    },
    data: () => ({

    }),
    created(){
      setTimeout(()=>{
        const tabs = document.querySelectorAll('.nv');
        tabs.forEach((tab)=>{
          tab.addEventListener('click',(e)=>{
            if(e.currentTarget.classList.contains('navLink')){
              document.querySelector('.activeTab').classList.add('navLink');
              document.querySelector('.activeTab').classList.remove('activeTab');
              e.currentTarget.classList.add('activeTab');
              e.currentTarget.classList.remove('navLink');
            }
          })
        })

      },0)
    }
  }
</script>
<style  scoped>
.nav{
  top:0;
  left: 0;
  position: fixed;
  height: 100vh;
  width: 9vh;
  background: rgb(255, 255, 255);
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  row-gap: 20px;
  padding-top: 90px;
  padding-bottom: 50px;
  box-shadow: 0px 0px 2px 3px rgba(128, 128, 128, 0.226);
  z-index: 4;
  /* display: none; */
}
.navLink{
  width: 55px;
  height: 55px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  /* background: gray; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
}
.navLink::before{
  content:'';
  position:absolute;
  top:0;
  bottom:0;
  right:0;
  height: 100%;
  width: 100%;
  border-radius:100%;
  transform:scaleX(0) scaleY(0);
  transition:0.2s ease-in-out all;
}

.navLink:hover::before{
  transform:scaleX(1) scaleY(1);
  background: var(--primary-color);
}
.navLink svg{
  fill:rgb(255,0,93)
}
.navLink:hover{
  cursor:pointer;
}

.navLink:hover svg{
  fill: white;
}

.navLink img{
  width: 65%;
}
.navLink img:hover{
  cursor: pointer;
}
.activeTab{
  width: 55px;
  height: 55px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  /* background: gray; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  z-index: 1;
}
.activeTab svg{
  fill:white;
}
.activeTab::before{
  z-index: -1;
  content: '';
  position: absolute;
  width: 7.5vw;
  height: 50px;
  margin: auto;
  left: 2px;
  background: rgb(255, 0, 119);
  border-radius: 40px;
}
.nv::before{
  transition:0.2s;
}
#tutsIcon{
  width:65%;
}
#depsIcon{
  width: 65%;
}
#booksIcon{
  width: 50%;
}
#webIcon{
  width: 55%;
}
@media screen and (max-width:700px ) {
  .nav{
    display: flex;
    width: 100vw;
    height: 60px;
    align-items: center;
    justify-content: center;
    bottom: 0px;
    top:inherit;
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .activeTab::before{
    height: 90;
    top:-15px;
    left: 0;
    height: 125%;
    width:100%;
    border-radius:30px;
    box-shadow: 0px -5px 10px 0px rgba(179, 179, 179, 0.575);
  }
}
</style>
