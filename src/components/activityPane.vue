<template>
  <div id="pane">
    <div class="paneToggler">
      <img @click="showPane" id="openPane" src="@/assets/clock.svg" alt="">
      <img @click="hidePane" id="closePane" src="@/assets/x.svg" alt="">
    </div>
    <div class="paneTitle"> 
      <img src="@/assets/clock.svg" alt="">
      <p>Activity</p>   
    </div>
    <v-row class="switch">
      <div @click="filter($event)" class="visibleLogs">
        Videos
      </div>
      <div @click="filter($event)" class="logType">
        Utils
      </div>
      <div @click="filter($event)" class="logType">
        Books
      </div>
      <div @click="filter($event)" class="logType">
        Links
      </div>
    </v-row>
    <v-container class="cards-container">
      <div :key="vidLog.id" v-for="vidLog in videoHistory"  @click.stop="showLogActions($event)" class="card card-video">
        <p class="videoTitle">{{vidLog.title}}</p> 
        <div class="card-info">
          <p class="channel">{{vidLog.channel}}</p>        
          <p class="uploadDate">{{vidLog.uploadDate}}</p>      
        </div>       
        <div class="timeline">
          <div class="elipse"></div>  
          <div class="line"></div>  
        </div>  
        <logActions :logId="vidLog.id"/>
      </div>


    </v-container>
  </div>
</template>

<script>
import logActions from '@/components/logActions.vue'
export default {
  data(){
    return{
      videoHistory:[
        {
          id:30303,
          title:'Full stack Mongo and Node Todo app',
          channel:'Program with Erick',
          uploadDate:'22 Aug 2020'
        },
        {
          id:5155,
          title:'Building a responsive landing page with css media queries',
          channel:'Dark Code',
          uploadDate:'23 Sep 2020'
        },
        {
          id:5155,
          title:'Building a responsive landing page with css media queries',
          channel:'Dark Code',
          uploadDate:'23 Sep 2020'
        },
        {
          id:5155,
          title:'Building a responsive landing page with css media queries',
          channel:'Dark Code',
          uploadDate:'23 Sep 2020'
        },
        {
          id:5155,
          title:'Building a responsive landing page with css media queries',
          channel:'Dark Code',
          uploadDate:'23 Sep 2020'
        },
        {
          id:5155,
          title:'Building a responsive landing page with css media queries',
          channel:'Dark Code',
          uploadDate:'23 Sep 2020'
        },
        {
          id:5155,
          title:'Building a responsive landing page with css media queries',
          channel:'Dark Code',
          uploadDate:'23 Sep 2020'
        },
      ]
    }
  },
  components:{
    logActions
  },
  methods:{
    filter(e){
      // console.log(e.target);
      document.querySelector('.visibleLogs').classList.add('logType')
      document.querySelector('.visibleLogs').classList.remove('visibleLogs')
      e.target.classList.add('visibleLogs');
      e.target.classList.remove('logType');
    },
    showPane(){
      document.body.classList.add('showPane');
    },
    hidePane(){
      document.body.classList.remove('showPane');
    },
    showLogActions(e){
      console.log(e.currentTarget);
      e.currentTarget.classList.toggle('showLogActions');
    }
  },
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
    z-index: 5;
    position: fixed;
    right: -100%;
    top:0;
    width: 320px;
    height: 100vh;
    background: white;
    box-shadow: 0px 0px 2px 2px rgba(128, 128, 128, 0.137);
    transition:0.2s ease-in-out;
}
::-webkit-scrollbar{
  width: 5px;
}
.showPane #pane{
    right: 0%;

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
.paneToggler {
  z-index: 6;
  width: 40px;
  height: 40px;
  position: fixed;
  top:5px;right: 0;
  display:flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.356);
  /* border-left: 2px solid white;
  border-top: 2px solid white;
  border-bottom: 2px solid white; */
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  background: var(--primary-color);
}
.paneToggler img {
  width: 70%;
  transition: 0.1s;
}
#closePane{
  width: 0;
  /* height: 0; */
}
.showPane .paneToggler{
  background:rgba(248, 248, 248, 0.438);
  border-radius: 100%;
  border: none;
  top:2px;
  right: 5px;
  width: 35px;
  height: 35px;
}
.showPane #closePane{
  width: 70%;
  height: 50%;
}
.showPane #openPane{
  width: 0;
  height: 0;
}
.switch{
  font-size: 1em;
  font-weight: 300;
  margin: auto;
  margin-top: 10px !important;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 40px;
  position: sticky;
}
.logType{
  color: rgb(59, 59, 59);
  background: white;
  box-shadow: 0px 0px  1px 1px rgb(235, 235, 235);
  padding: 5px;
  text-align: center;
  margin: 5px;
  position: relative;
  border-radius: 20px;
  z-index: 1;
  transition: 0.1s;
}

.visibleLogs{
  background: rgb(0, 183, 255);
  color: white;
  padding: 5px;
  text-align: center;
  margin: 5px;
  position: relative;
  border-radius: 20px;
  z-index: 1;
  transition: 0.1s;
  cursor:default;
}
.logType:hover{
  color: rgb(0, 140, 255);
  background: rgb(143, 225, 255);
  cursor: pointer;

}
.cards-container{
    overflow-y: scroll;
    padding-bottom: 80px;
    height: 100%;
}

.card{
  padding: 7px;
  position: relative;
  background: rgba(0, 0, 0, 0.021) !important;
  color: rgb(85, 83, 83) !important;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif !important;
  font-weight: 300 ;
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
  background:linear-gradient(rgb(19, 216, 157),rgb(231, 5, 73)) ;
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
@media (min-width: 700px){
  #pane{
    right: 0;
  }
  .paneToggler{
    display:none;
  }
}
</style>