<template>
  <div>
    <div id="header">
      <progress-head
        :amount=5
        :passed=1
        v-if="!isPrivilegesUsed"
      ></progress-head>
      <progress-head amount="5" passed="5" v-else></progress-head>
      <h1 class="text-2xl font-bold">ยืนยันข้อมูลนักศึกษา</h1>
    </div>

    <user-card :student="getUser"></user-card>

    <div id="comfirmation">
      <div v-if="!isPrivilegesUsed">
        <p>ข้อมูลของคุณถูกต้องหรือไม่</p>
        <div class="flex space-x-4 justify-center">
          <router-link to="/sentmessage"
            ><button
              class="w-24 h-10 bg-gray-300 rounded-xl"
              @click="toSendMessage"
            >
              ไม่ถูกต้อง
            </button></router-link
          >

          <router-link to="/partyselect">
            <button
              class="w-24 h-10 bg-white rounded-xl font-bold"
              @click="toSelect"
            >
              ถูกต้อง
            </button>
          </router-link>
        </div>
      </div>
      <div v-else>
        <p>สิทธิ์ของคุณถูกใช้ไปแล้ว</p>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressHead from "@/components/ProgressHead.vue";
import UserCard from "@/components/UserCard.vue";
export default {
  name: "Confirm",
  data() {
    return {
      isPrivilegesUsed: false,
    };
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  components: {
    ProgressHead,
    UserCard,
  },
};
</script>

<style></style>
