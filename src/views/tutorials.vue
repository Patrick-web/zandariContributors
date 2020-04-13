<template>
<div>
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
        <div class="fgroup getUp" >
            <v-text-field color="#2196F3" label="Add Tag"></v-text-field>
        </div>
      <v-row  align="center" style="margin:auto;width:100%;padding-bottom:10px" class="formActions">
        <v-col align="center">
        <v-btn rounded color="#2196F3" style="color:white;margin-bottom:10px"  >Preview</v-btn>
        </v-col>
      </v-row>
      </div>
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

<style>
  .formTitle{
    background: var(--primary-color);
    color: white;
    height: 40px;
    padding: 8px;
    font-size: 1.25em;
    padding-left: 15px;
    padding-right: 15px;
    position: absolute;
    margin-top: -20px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 30px;
    box-shadow: 0px 0px 3px 2px rgba(148, 148, 148, 0.212);
    
  }
  .form{
    height: 93vh;
    margin-left:8.7vw;
    margin-top: 1.8rem;
    width: 30vw;
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
@media screen and (max-width:700px ) {

  .form{
    width:93.5vw;
    height: auto;
    margin-left: 12px;
    display: none;
  }
  .fgroup{
    margin-top: -5px;
    margin-bottom: 0px;
  }
  .getUp{
    margin-top: -25px;
  }
}

</style>
