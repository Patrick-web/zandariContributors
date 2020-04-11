<template>
<div data-app>
  <v-card class="form">
    <form action="">
      <div class="formTitle">
        Tutorials
      </div>
      <div class="formGroups">
        <div class="fgroup">
            <v-text-field color="#2196F3" label="Paste Link"></v-text-field>
        </div>
        <div class="fgroup">
          <v-select
          class="selectDiv"
          :items="categories"
          label="Category"
          filled
          color="#2196F3"
          ></v-select>
        </div>
        <div class="fgroup">
          <v-select
          class="selectDiv"
          :items="categories"
          label="Area"
          filled
          color="#2196F3"
          ></v-select>
        </div>
        <div class="fgroup">
          <v-select
          class="selectDiv"
          :items="categories"
          label="Type"
          filled
          color="#2196F3"
          ></v-select>
        </div>
        <div class="fgroup">
          <v-select
          class="selectDiv"
          :items="categories"
          label="Study Point"
          filled
          color="#2196F3"
          ></v-select>
        </div>
        <div class="fgroup" style="margin-bottom:-10px">
            <v-text-field color="#2196F3" label="Add Tag"></v-text-field>
        </div>
      </div>
      <v-row  align="center" style="margin:auto;width:100%;padding-bottom:10px" class="formActions">
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
      categories: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
  components: {
  },
  created(){
  setTimeout(()=>{
      let inputs = Array.from(document.querySelectorAll('input'))
      inputs.forEach((inputer,index)=>{
      inputer.addEventListener('keydown',(e)=>{
        if(e.key == 'Enter'){
          inputs[index+1].focus();
        }
      })
    })  
  },0)
  }
}
</script>

<style scoped>
  .formTitle{
    background: var(--primary-color);
    color: white;
    height: 40px;
    padding: 8px;
    width: 18vh;
    min-width: 110px;
    font-size: 1.25em;
    padding-left: 15px;
    padding-right: 15px;
    position: absolute;
    margin-top: -20px;
    margin-left: 20px;
    border-radius: 30px;
    box-shadow: 0px 0px 3px 2px rgba(148, 148, 148, 0.212);
    
  }
  .form{
    height: 93vh;
    margin-left:8.7vw;
    margin-top: 1.8rem;
    width: 30vw;
    min-width: 500px;
    background: rgb(255, 255, 255);
    border-radius: 10px;
  }
  .formGroups{
    margin: 10px;
    padding-top: 30px;
    padding-left: 10px;
  }
  .fgroup{
    margin-top: 5px;
    margin-bottom:5px;


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
  .selectDiv{
    /* border-radius: 30px; */
  }


</style>
