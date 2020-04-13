<template>
<div data-app class="wrapper">

      <navBar/>
      <div class="forms">
        <div class="viewsWrapper">
          <tutorials class="view"/>
          <dependancies class="view"/>
          <books class="view"/>
          <links class="view"/>
        </div>
      </div>
      <activityPane/>
</div>
</template>

<script>
import tutorials from './views/tutorials';
import books from './views/books';
import dependancies from './views/dependancies';
import links from './views/links';
import navBar from './components/navBar';
import activityPane from './components/activityPane';

export default {
  name: 'App',

  components: {
    navBar,
    tutorials,
    dependancies,
    books,
    links,
    activityPane
  },

  data: () => ({
    //
  }),
  created(){
    setTimeout(()=>{
    })
  }
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
.forms{
  height: 100vh;
  /* background: black; */
  overflow-y: hidden;
  position: relative;
}
.viewsWrapper{
  top:0%;
  position: absolute;
  transition: 0.4s ease-in-out;
}
.view{
  margin-bottom: 50px;
}

@media screen and (max-width:700px ) {
  .forms{
    overflow-y: scroll;
    overflow-x: hidden;
    width: 98vw;
    
  }
  .viewsWrapper{
    display: flex;
    transition: 0.15s linear;
  }
}
</style>
