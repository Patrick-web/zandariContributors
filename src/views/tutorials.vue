<template>
  <div class="form">
    <form action="">
      <div class="formTitle">
        Tutorials
      </div>
      <div class="formGroups">
        <div class="fgroup">
          <div class="inputDiv">
            <button id="getInfo">Get Info</button>
            <label for="link">Paste Link</label>
            <input type="text">
          </div>
        </div>
        <div class="fgroup">
          <select class="selectDiv" name="category" id="">
            <option value="Js"><span style="margin-top:-2px;display:none">::</span> Category</option>
            <option value="Js">Javascript</option>
            <option value="Js">Javascript</option>
          </select>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'tutorials',
  components: {
  },
  created(){


  }
}
</script>

<style>
  .formTitle{
    background: var(--primary-color);
    color: white;
    height: 45px;
    font-size: 1.25em;
    width: 18vh;
    padding: 10px;
    padding-left: 15px;
    padding-right: 15px;
    position: absolute;
    margin-top: -25px;
    margin-left: 20px;
    border-radius: 30px;
  }
  .form{
    box-shadow: 0px 0px 3px 2px rgba(128, 128, 128, 0.322);
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
    margin-top: 10px;
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
  select{
    background: var(--lightWhite)!important;
    color: rgb(43, 42, 42) !important;
    padding: 10px;
    border-radius: 30px;
    border: 1px solid black;
    width: 70%;
    font-weight: 100;

  }
  option{
    font-size: 1em;    
    border-radius: 10px !important;
  }
 


</style>
