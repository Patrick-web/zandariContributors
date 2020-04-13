<template>
  <div class="logActions">
      <img src="@/assets/eye.svg" alt="">
      <img src="@/assets/pen.svg" alt="">
      <img src="@/assets/trash.svg" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style>
.logActions{

    display: flex;
    justify-content: space-between;
    padding: 5px;
    align-items: center;
    position: absolute;
    left:50%;
    width: 80%;
    background: rgb(250, 250, 250);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.123) !important;
    bottom: -45px;
    transition: 0.2s;
    transform: rotateX(90deg) translateX(-50%);
    transform-origin: top;
    border-radius: 20px;
}
.logActions img{
    width: 15%;
    transition: 0.2s;
    transform: scale(0);
    transition-delay: 0.1s;
}
.showLogActions {
  margin-bottom: 55px !important;
}
.showLogActions .line{
  height: 120px;

}
.showLogActions .logActions{
  transform: rotateX(0deg) translateX(-50%);
}
.showLogActions .logActions img{
  transform: scale(1);
}
</style>