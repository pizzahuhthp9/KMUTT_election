<template>
  <div id="content">
    <div class="mx-10">
      <div id="header" class="mt-5 flex justify-between items-center mb-8">
        <div id="langBtn" class="w-max text-xxs group flex flex-col h-4">
          <button class="py-1">Change Language &#9660;</button>
          <button
            class="transform transition bg-white ease-in-out duration-500 rounded-md py-1 -translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
          >
            Thai
          </button>
          <button
            class="transform transition ease-in-out duration-500 delay-100 rounded-md py-1 -translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
          >
            English
          </button>
        </div>
        <div class="w-20 flex space-x-1 items-center">
          <img src="@/assets/KMUTT_Semi_Logo.png" alt="" class="h-8"/>
          <div class="h-8 border-black border-r"></div>
          <img src="@/assets/KMUTT_election.png" alt="" class="h-8">
        </div>
      </div>

      <div id="body" class="flex flex-col justify-center items-center">
        <div>
          <p class="text-3xl font-bold">ระบบการเลือกตั้ง</p>
          <p class="xs:text-xxs xxs:text-xxxs">
            คณะกรรมการองค์การบริหารองค์การนักศึกษาและสภานักศึกษา
            <br />มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
          </p>
        </div>
        <div
          class="w-max bg-white border-black border-2 rounded-3xl mt-8 px-3 pt-3 pb-4"
        >
          <p class="text-sm">เข้าสู่ระบบด้วย KMUTT internet account</p>
          <div class="flex flex-col">
            <input
              type="text"
              class="w-60 border-b-2 border-gray-400 px-2 mt-7 text-xl"
              placeholder="รหัสนักศึกษา"
              v-model="username"
            />
            <input
              :type="passwordToggle"
              class="w-60 border-b-2 border-gray-400 px-2 my-3 text-xl"
              placeholder="รหัสผ่าน"
              v-model="password"
            />
          </div>
          <p class="text-danger">รหัสนักศึกษาหรือรหัสผ่านไม่ถูกต้อง</p>
        </div>
        <div class="flex flex-col">
          <button
            class="bg-white px-8 py-2 rounded-xl mt-6 font-bold w-max mx-auto text-xl"
          >
            เข้าสู่ระบบ
          </button>
          <button class="mt-1 border-b-2 border-black w-max mx-auto text-sms">
            ลืมรหัสผ่าน
          </button>
        </div>
      </div>
    </div>
  </div>
  <div id="footer" class="bottom-4 absolute text-center w-screen">
    <p class="text-xxs">
      สามารถติดตามข้อมูลข่าวสารเพิ่มเติมได้ที่
      <span class="text-sm font-bold border-b-2 border-black"
        >บางมดอยากเลือกตั้ง</span
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      passwordToggle: "password",
      password: null,
      username: null,
    };
  },
  methods: {
    login(){

    },
    forgotPassword(){

    }
  },
};
</script>

<style></style>
