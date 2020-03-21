<template>
  <div id="pane">
    <div class="paneTitle">Activity</div>
    <v-row class="switch">
      <div class="paneTab activePane">
        Videos
      </div>
      <div class="paneTab">
        Utils
      </div>
      <div class="paneTab">
        Books
      </div>
      <div class="paneTab">
        Weblinks
      </div>
    </v-row>
    <v-container class="cards-container">
      <div  class="card card-video">
      <p class="videoTitle">Full stack Mongo and Node Todo app</p>        
      <p class="channel">Program with Erick</p>        
      <p class="uploadDate">22-08-2020</p>        
      </div>
    </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#pane{
    position: fixed;
    right: 0;
    top:0;
    width: 320px;
    height: 100vh;
    background: white;
    box-shadow: 0px 0px 2px 3px rgba(128, 128, 128, 0.226);
    
}
.paneTitle{
  background: var(--primary-color);
  color: white;
  text-align: center;
  width: 10vw;
  padding: 5px;
  font-size: 1.3em;
  border-radius: 30px !important;
  margin: auto;
  margin-top: 5px;
}
.paneTab img{
  width: 50%;
}
.switch{
  font-size: 1em;
  font-weight: 100;
  margin: auto;
  margin-top: 10px !important;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 40px;
}
.paneTab{
  background: rgb(38, 139, 206);
  color: rgb(248, 248, 248);
  padding: 6px;
  text-align: center;
  margin: 5px;
  position: relative;
  border-radius: 20px;
  z-index: 1;
}
.paneTab::before{
  z-index: -1;
  border-radius: 20px;
  content: '';
  position: absolute;
  top:0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: scaleY(0) scaleX(0);
  transform-origin: center;
  background: var(--primary-color);
  transition: 0.2s transform ease;
}
.activePane{

}
.paneTab:hover{
  color: white;
  border: none;
  
  cursor: pointer;
}
.paneTab:hover::before{
  transform: scaleY(1) scaleX(1);
}
.card{
  padding: 10px;
  position: relative;
  background: rgb(0, 205, 110) !important;
  color: rgb(255, 255, 255) !important;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
  height: 12vh;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: 5px solid rgb(0, 245, 143);
}
.channel,.uploadDate{
  font-size: 0.9em;
}
.videoTitle{
  position: absolute;
  top:5px;
  left: 10px;
  font-weight: 300;
}
.uploadDate{
  font-weight: 300;
  position: absolute;
  bottom: 5px;
  right: 5px;
}
.channel{
  font-weight: 300;
  position: absolute;
  bottom: 5px;
  left: 10px;
}
</style>