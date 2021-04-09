<template>
  <div>
    <div id="header">
      <progress-head :amount="5" :passed="3"></progress-head>
      <h1 class="text-md font-bold">
        ยืนยันการเลือกคณะกรรมการ<br />องค์การบริหารองค์การนักศึกษา
      </h1>
    </div>
    <div id="body" class="mx-10 mt-4">
      <div
        class="bg-white rounded-3xl border-2 border-black flex flex-col items-center"
        v-if="selected"
      >
        <div class="mt-2">
          <h1 class="text-md">คุณเลือก</h1>
          <h1 class="text-xl">เบอร์ {{ partyNo }}</h1>
        </div>
        <img :src="imgSrc" alt="" class="mt-3 w-4/5">
        <h1 class="text-lg my-4 font-bold">{{ partyName }}</h1>
      </div>
      <div
        class="bg-white rounded-3xl border-2 border-black flex flex-col items-center h-64"
        v-else
      >
        <h1 class="text-md mt-2">คุณเลือก</h1>
        <div class="h-full w-full flex justify-center items-center">
          <p class="text-danger">ไม่ประสงค์ลงคะแนน</p>
        </div>
      </div>
    </div>
    <div class="mx-10 mt-5 mb-4">
      <p class="text-sm">
        เมื่อเลือก <span class="font-bold text-md">“เสร็จสิ้น”</span><br />
        จะไม่สามารถแก้ไขได้อีก<br />
        คุณจะยืนยันการเลือกหรือไม่
      </p>
      <div class="flex justify-center space-x-5 mt-3">
        <button class="bg-gray-200 py-1 w-24 rounded-lg" @click="edit">
          แก้ไข
        </button>
        <button class="bg-white py-1 w-24 rounded-lg font-bold" @click="submit">
          เสร็จสิ้น
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressHead from "@/components/ProgressHead.vue";
export default {
  name: "ConfirmSelect",
  data() {
    return {
      partyNo: null,
      partyName: null,
      selected: true ,
      imgSrc: ""
    };
  },
  methods: {
    edit(){
      this.$router.push("PartySelect");
    },
    submit(){
      this.$router.push("SelectSecond");
    }
  },
    mounted() {
    let party = this.$store.getters.getSelectedParty;
    if(party == null){
      this.selected = false;
    }else{
      this.selected = true;
      this.partyNo = party.id;
      this.partyName = party.name;
      this.imgSrc = this.$store.getters.getAPIPath + "/api/files/" + party.imageId
    }
  },
  components: {
    ProgressHead,
  },
};
</script>

<style></style>
