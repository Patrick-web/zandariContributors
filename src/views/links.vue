<template>
<div data-app>
  <v-card class="form">
    <form action="">
      <div class="formTitle">
        Web Links
      </div>
      <div class="formGroups">
         <div class="fgroup">
            <v-text-field color="#2196F3" label="Title"></v-text-field>
        </div>
        <div class="fgroup">
            <v-text-field color="#2196F3" label="Link"></v-text-field>
        </div>
        <div class="fgroup">
            <v-textarea filled="" color="#2196F3" label="Description"></v-textarea>
        </div>
        <div class="fgroup">
            <v-text-field color="#2196F3" label="Tag"></v-text-field>
        </div>
       </div>

      <v-row  align="center" style="position:absolute; bottom:30px; left:00%;transform:translateX(-50%) margin:auto;width:100%;padding-bottom:10px" class="formActions">
        <v-col align="center">
        <v-btn rounded color="#2196F3" style="color:white;margin-bottom:10px"  >Upload</v-btn>
        </v-col>
      </v-row>
    </form>
  </v-card>
  </div> 
</template>

<script>
// @ is an alias to /src

export default {
  name: 'tutorials',
  data: () => ({
      type: ['Book', 'CheatSheet', 'PDF'],
  }),
  components: {
  },
  created(){

  }
}
</script>

<style scoped>
  .formTitle{
    background: var(--primary-color);
    color: white;
    height: 40px;
    padding: 8px;
    text-align: center;
    font-size: 1.25em;
    padding-left: 15px;
    padding-right: 15px;
    position: absolute;
    width: 30%;
    left: 46%;
    transform: translateX(-50%);
    margin-top: -20px;
    border-radius: 30px;

  }
  .form{
    height: 93vh;
    margin-left:8.7vw;
    margin-top: 1.8rem;
    width: 30vw;
    min-width: 500px;
    background: rgb(255, 255, 255);
    border-radius: 10px;
    position: relative;
    padding-right: 10px;
  }
  .formGroups{
    margin: 10px;
    padding-top: 30px;
    padding-left: 10px;
  }
  .fgroup{
    margin-top: 20px;
    margin-bottom:20px;


  }
  .inputDiv{
    color: rgb(37, 37, 37);
    position: relative;
  }
  .inputDiv label{
    pointer-events: none;
    color: rgb(85, 85, 85);
    font-size: 1.0em;
  }
  .inputDiv input{
    display: block;
    height: 10px;
    width: 70%;
    /* background: black; */
    border-bottom: rgb(41, 39, 39) 1px solid;
    transition: 0.2s ease-in-out;
    padding-bottom: 10px;
    padding-top: 10px;
  }
  .inputDiv input:focus{
    border-color: rgb(255, 0, 200);
    height: 30px;
  }
  #getInfo{
    background: var(--btnBg);
    padding: 5px;
    position: absolute;
    right: 0;
    color: white;
    border-radius: 3px;
    bottom: 2px;
  }



</style>
