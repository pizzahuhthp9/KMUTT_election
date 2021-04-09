<template>
  <div>
    <div id="header" class="">
      <progress-head :amount="5" :passed="2"></progress-head>
      <div class="w-full py-3 bg-white border-2 border-black mb-5">
        <p class="text-lg">
          เลือกคณะกรรมการ <br />
          องค์การบริหารนักศึกษา
        </p>
      </div>
    </div>
    <div id="body" class="mx-10">
      <p class="text-md">
        โปรดเลือกเพียง 1พรรค เท่านั้น <br />
        <span class="text-xxs">กดที่เบอร์หรือชื่อพรรค เพื่อทำการโหวต</span>
      </p>

      <party-card
        :party="party"
        class="mb-4"
        v-for="(party, index) in getParties"
        :key="index"
        @select="unSelectNoVote"
      ></party-card>

      <p class="text-lg my-2">หรือ</p>
      <button class="w-full bg-red-200 text-lg rounded-md py-2 mb-10" @click="noVote" v-if="!isNoVote">
        ไม่ประสงค์ลงคะแนน
      </button>
      <button class="w-full bg-red-400 text-lg rounded-md py-2 mb-10" @click="noVote" v-else>
        ไม่ประสงค์ลงคะแนน
      </button>
      <button
        class="bg-gray-200 py-2 px-8 rounded-lg font-bold text-lg mb-3"
        @click="submit"
      >
        ยืนยัน
      </button>
    </div>
  </div>
</template>

<script>
import ProgressHead from "@/components/ProgressHead.vue";
import PartyCard from "@/components/PartyCard.vue";
export default {
  name: "PartySelect",
  data() {
    return {
      isSelected: false,
      isNoVote: false
    };
  },
  computed: {
    getParties() {
      return this.$store.getters.getParties;
    },
  },
  methods: {
    submit() {
      if (this.$store.getters.isAllPartySelected) {
        this.$router.push("PartyConfirm");
      } else {
        console.log("เลือกให้ครบซิ้");
      }
      if (this.isNoVote) {
        this.$router.push("PartyConfirm");
      }
    },
    noVote(){
      this.$store.getters.getParties.forEach(party => {
        this.$store.commit("partyDeSelect", party);
      });
      this.isNoVote = !this.isNoVote;
    },
    unSelectNoVote(){
      this.isNoVote = false;
    }
  },
  components: {
    ProgressHead,
    PartyCard,
  },
};
</script>

<style></style>
