<template>
<div>
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

      <v-row  align="center" id="goDown" class="formActions">
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
      type: ['Book', 'CheatSheet', 'PDF'],
  }),
  components: {
  },
  created(){

  }
}
</script>
