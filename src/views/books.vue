<template>
<div>
  <v-card class="form">
    <form action="">
      <div class="formTitle">
        Books/CheatSheets
      </div>
      <div class="formGroups">
         <div class="fgroup">
            <v-text-field color="#2196F3" label="Title"></v-text-field>
        </div>
        <div class="fgroup">
            <v-text-field color="#2196F3" label="Link"></v-text-field>
        </div>
        <div class="fgroup">
            <v-text-field color="#2196F3" label="Description"></v-text-field>
        </div>
        <div class="fgroup">
          <v-select
          class="selectDiv"
          :items="readType"
          label="Type"
          filled
          color="#2196F3"
          ></v-select>
        </div>
        <div class="fgroup">
            <v-text-field color="#2196F3" label="Tag"></v-text-field>
        </div>
       </div>
      <v-row  align="center" id="goDown"  class="formActions">
        <v-col align="center">
        <v-btn rounded color="#2196F3" style="color:white;"  >Preview</v-btn>
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
      readType: ['Book', 'CheatSheet', 'PDF'],
  }),
  components: {
  },
  created(){
    setTimeout(()=>{
        let inputs = Array.from(document.querySelectorAll('input'))
          const txtArea = document.querySelector('textarea')
          inputs.push(txtArea)
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

@media screen and (min-width:700px ) {
  #goDown{
    position: absolute;
    bottom: 0px;
    left:50%;
    transform:translateX(-50%);
  }

}
</style>