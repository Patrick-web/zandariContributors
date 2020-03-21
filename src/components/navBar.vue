<template>
  <div class="nav">
    <div class="navLink activeTab">
      <img id="tutsIcon" src="@/assets/tuts.svg" alt="">
    </div>
    <div class="navLink">
      <img id="depsIcon" src="@/assets/Dependancies.svg" alt="">
    </div>
    <div class="navLink">
      <img id="booksIcon" src="@/assets/Books.svg" alt="">
    </div>
    <div class="navLink">
      <img id="webIcon" src="@/assets/Weblinks.svg" alt="">
    </div>
  </div>
       
</template>

<script>
  export default {
    name: 'navBar',

    data: () => ({

    }),
  }
</script>
<style  scoped>
.nav{
  top:0;
  left: 0;
  position: fixed;
  height: 100vh;
  width: 60px;
  background: rgb(255, 255, 255);
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  row-gap: 20px;
  padding-top: 90px;
  padding-bottom: 50px;
  box-shadow: 0px 0px 2px 3px rgba(128, 128, 128, 0.226);
}
.navLink{
  width: 60px;
  height: 60px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  /* background: gray; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.navLink img{
  width: 65%;
}
.activeTab{
  z-index: 1;
}
.activeTab::before{
  z-index: -1;
  content: '';
  position: absolute;
  width: 7.5vw;
  height: 50px;
  margin: auto;
  left: 5px;
  /* margin-top: 5px; */
  /* margin-bottom: 5px; */
  background: rgb(255, 0, 119);
  border-radius: 40px;
}
#depsIcon{
  width: 65%;
}
#booksIcon{
  width: 50%;
}
#webIcon{
  width: 55%;
}

</style>
