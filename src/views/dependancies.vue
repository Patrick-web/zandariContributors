<template>
<div>
  <v-card class="form">
    <form action="">
      <div class="formTitle">
        Utilitys
      </div>
      <div class="formGroups">
         <div class="fgroup">
            <v-text-field color="#2196F3" label="Name"></v-text-field>
        </div>
        <div class="fgroup">
            <v-text-field color="#2196F3" label="Link to website"></v-text-field>
        </div>
        <div class="fgroup">
            <v-text-field color="#2196F3" label="Link to Logo"></v-text-field>
        </div>
        <div class="fgroup">
            <v-text-field color="#2196F3" label="Add download Link"></v-text-field>
        </div>
        <div class="fgroup" style="margin-bottom:-10px">
            <v-text-field color="#2196F3" label="Add Tag"></v-text-field>
        </div>
      </div>
      <v-row id="goDown"  align="center" class="formActions">
        <v-col align="center">
        <v-btn rounded color="#2196F3" style="color:white;margin-bottom:10px"  >Preview</v-btn>
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

