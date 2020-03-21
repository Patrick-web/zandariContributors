<template>
<div class="wrapper">

      <navBar/>
      <tutorials/>
      <activityPane/>
</div>
</template>

<script>
import tutorials from './views/tutorials';
import navBar from './components/navBar';
import activityPane from './components/activityPane';

export default {
  name: 'App',

  components: {
    navBar,
    tutorials,
    activityPane
  },

  data: () => ({
    //
  }),
};
</script>
<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  --primary-color: #FF005D;
  --white:white;
  --lightWhite:#E8E8E8;
  --black:#000000;
  --lightBlack:#171717;
  --btnBg:#196FF9;
  --tagBg: #FF00FF;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  outline: none;
}
body{
  background: var(--lightWhite);
}
</style>
