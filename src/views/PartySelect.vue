<template>
  <div>
    <div id="header" class="">
      <progress-head amount="5" passed="2"></progress-head>
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
      <party-card no="1" name="ที่ใจไว้ที่เทอว์" class="mb-4"></party-card>
      <p class="text-lg my-2">หรือ</p>
      <button class="w-full bg-red-200 text-lg rounded-md py-2 mb-10">ไม่ประสงค์ลงคะแนน</button>
      <button class="bg-gray-200 py-2 px-8 rounded-lg font-bold text-lg">ยืนยัน</button>
    </div>
  </div>
</template>

<script>
import ProgressHead from "@/components/ProgressHead.vue";
import PartyCard from "@/components/PartyCard.vue";
export default {
  name: "PartySelect",
  components: {
    ProgressHead,
    PartyCard,
  },
};
</script>

<style></style>
