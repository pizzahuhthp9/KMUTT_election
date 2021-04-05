<template>
  <div class="bg-white rounded-lg pt-3 pb-4 px-5">
    <p class="mb-5 font-extrabold">เบอร์ {{ no }} พรรค{{ name }}</p>
    <div class="flex justify-around text-sm">
      <button class="bg-white border border-black rounded-full p-2 w-2/5 transition duration-300 hover:bg-select" v-if="selectState <= 0" @click="accept">ยอมรับ</button>
      <button class="bg-select border border-black rounded-full p-2 w-2/5" v-else-if="selectState == 1" @click="accept">ยอมรับ</button>
      <button class="bg-white border border-black rounded-full p-2 w-2/5 transition duration-300 hover:bg-danger" v-if="selectState >= 0" @click="decline">ไม่ยอมรับ</button>
      <button class="bg-danger border border-black rounded-full p-2 w-2/5" v-else-if="selectState == -1" @click="decline">ไม่ยอมรับ</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PartyCard",
  data() {
      return {
          selectState: 0
      }
  },
  methods:{
      accept(){
          if (this.selectState == 1) {
              setTimeout(() => {
                this.selectState = 0;    
              }, 300);
              
          } else{
              setTimeout(() => {
                  this.selectState = 1;
              }, 300);
          }
      },
      decline(){
          if (this.selectState == -1) {
              setTimeout(() => {
                this.selectState = 0;    
              }, 300);
              
          } else{
              setTimeout(() => {
                  this.selectState = -1;
              }, 300);
          }
      }
  },
  props: {
    no: Number,
    name: String,
  },
};
</script>

<style></style>
