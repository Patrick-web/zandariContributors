<template>
  <div id="pane">
    <div class="paneTitle"> 
      <img src="@/assets/clock.svg" alt="">
      <p>Activity</p>      
    </div>
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
        Links
      </div>
    </v-row>
    <v-container class="cards-container">
      <v-card  class="card card-video">
        <p class="videoTitle">Full stack Mongo and Node Todo app</p> 
        <div class="card-info">
          <p class="channel">Program with Erick</p>        
          <p class="uploadDate">22-08-2020</p>      
        </div>       
        <div class="timeline">
          <div class="elipse"></div>  
          <div class="line"></div>  
        </div>  
      </v-card>
      <v-card  class="card card-video">
        <p class="videoTitle">Full stack Mongo and Node Todo app</p> 
        <div class="card-info">
          <p class="channel">Program with Erick</p>        
          <p class="uploadDate">22-08-2020</p>      
        </div>       
        <div class="timeline">
          <div class="elipse"></div>  
          <div class="line"></div>  
        </div>  
      </v-card>

    </v-container>
  </div>
</template>

<script>
export default {
  created(){
    setTimeout(()=>{
    const lines = Array.from(document.querySelectorAll('.line'));
    const lastLine = lines.length - 1;
    console.log(lines[0]);
    lines[lastLine].style.height = '0px';
    },0)
  }
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
    box-shadow: 0px 0px 2px 2px rgba(128, 128, 128, 0.137);
}
.paneTitle{
  background: var(--primary-color);
  color: white;
  width: 100%;
  padding: 5px;
  font-size: 1.4em;
  display: flex;
  justify-content:center;
  align-items: center;
  font-weight: 600;
}
.paneTitle img{
  width: 10%;
  margin-right: 10px;
}
.cards-container{
    overflow: hidden;
    padding-bottom: 0px;
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
  color: rgb(59, 59, 59);
  background: white;
  box-shadow: 0px 0px  1px 1px rgb(235, 235, 235);
  padding: 5px;
  text-align: center;
  margin: 5px;
  position: relative;
  border-radius: 20px;
  z-index: 1;
  overflow: hidden;
  transition: 0.1s;
}

.activePane{

}
.paneTab:hover{
  color: white;
  border: none;
  background: rgb(0, 183, 255);
  cursor: pointer;

}

.card{
  padding: 7px;
  position: relative;
  background: rgba(0, 0, 0, 0.021) !important;
  color: rgb(85, 83, 83) !important;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif !important;
  font-weight: 100 !important;
  margin-left: 30px;
  margin-bottom: 20px;
  border-radius: 6px !important;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.123) !important;
  border-left: 0px solid rgb(19, 216, 157);
  transition: 0.4s;
  border-left: 3px solid rgba(19, 216, 157, 0) !important;
  border-right: 3px solid rgba(19, 216, 157, 0) !important;

}
.card:hover{
  border-left: 3px solid rgb(19, 216, 157) !important;
  border-right: 3px solid rgb(19, 216, 157) !important;
  border-radius: 10px !important;
  cursor: pointer;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.123) !important;

}

.card:hover .elipse{
  background: rgb(19, 216, 157);
  border-top-left-radius: 0px;
}
.card:hover .line{
  /* background:linear-gradient(rgb(19, 216, 157),rgb(231, 5, 73)) ; */
}

.channel,.uploadDate{
  font-size: 0.9em;
}
.card-info{
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.timeline{
  position: absolute;
  left:-35px;
  top:35%;
  z-index: 3;
  height: 30px;
  width: 30px;
}
.elipse{
  border-radius: 100%;
  background: rgb(255, 0, 119);
  transition: 0.4s;
  width: 20px;
  height: 20px;
  margin: auto;
  margin-bottom: -5px;
  z-index: 3;
  position: relative;
}
.line{
  background:rgb(255, 0, 119);
  width: 1px;
  transition: 0.2s;
  height: 100px;
  border-radius: 5px;
  margin: auto;
}
</style>