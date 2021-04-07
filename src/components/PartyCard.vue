<template>
  <div class="bg-white rounded-lg pt-3 pb-4 px-5">
    <p class="mb-5 font-extrabold">
      เบอร์ {{ getPartyNo }} พรรค{{ party.name }}
    </p>
    <div class="flex justify-around text-sm">
      <button
        class="bg-white border border-black rounded-full p-2 w-2/5"
        v-if="getSelection <= 0"
        @click="accept"
      >
        ยอมรับ
      </button>
      <button
        class="bg-select border border-black rounded-full p-2 w-2/5"
        v-else-if="getSelection == 1"
        @click="accept"
      >
        ยอมรับ
      </button>
      <button
        class="bg-white border border-black rounded-full p-2 w-2/5"
        v-if="getSelection >= 0"
        @click="decline"
      >
        ไม่ยอมรับ
      </button>
      <button
        class="bg-danger border border-black rounded-full p-2 w-2/5"
        v-else-if="getSelection == -1"
        @click="decline"
      >
        ไม่ยอมรับ
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PartyCard",
  data() {
    return {
    };
  },
  methods: {
    accept() {
      if (this.getSelection == 1) {
          this.$store.commit('partyDeSelect', this.party);
      } else {
          this.$store.commit('partyAccept', this.party);
      }
    },
    decline() {
      if (this.getSelection == -1) {
          this.$store.commit('partyDeSelect', this.party);
      } else {
          this.$store.commit('partyDecline', this.party);
      }
    },
  },
  computed: {
    getPartyNo() {
      return this.$store.getters.getParties.indexOf(this.party) + 1;
    },
    getSelection(){
      return this.party.isAccept;
    }
  },
  props: {
    party: Object,
  },
};
</script>

<style></style>
