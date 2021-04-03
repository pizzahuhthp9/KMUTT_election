<template>
  <div>
      <div class="h-1 w-screen mt-8 px-5 mb-8 border-black border-b-3 flex justify-around items-center">
          
          
          <div class="h-5 w-5 bg-black rounded-full border-black border-3" v-for="index in parseInt(passed)" :key="index"></div>
          <div class="h-5 w-5 bg-main rounded-full border-black border-3" v-for="index in parseInt(amount-passed)" :key="index"></div>
          <!-- <div class="h-5 w-5 bg-main rounded-full border-black border-3" ></div>
          <div class="h-5 w-5 bg-main rounded-full border-black border-3" ></div>
          <div class="h-5 w-5 bg-main rounded-full border-black border-3" ></div>
          <div class="h-5 w-5 bg-main rounded-full border-black border-3" ></div> -->
      </div>
  </div>
</template>

<script>
export default {
    props:{
        amount: Number,
        passed: Number
    }
}
</script>

<style>

</style>