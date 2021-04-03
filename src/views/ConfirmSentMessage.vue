<template>
  <div>
    <div id="header">
      <progress-head amount="5" passed="1"></progress-head>
    </div>
    <div id="body">
      <student-info :student="student"></student-info>
    </div>
    <div id="confirmation" class="flex flex-col items-start mx-10">
        <p class="">เบอร์โทรศัพท์ของคุณ</p>
        <input type="text" class="w-full py-1 px-2 rounded-xl mb-2">
        <p class="">ข้อมูลที่ไม่ถูกต้อง</p>
        <textarea type="text" class="w-full py-1 px-2 rounded-xl h-32 mb-8" />

        <div class="flex justify-center space-x-6 w-full mb-8">
            <button class="h-12 w-36 bg-gray-300 rounded-lg text-xl">ย้อนกลับ</button>
            <button class="h-12 w-36 bg-white rounded-lg text-xl font-bold">ส่งข้อความ</button>
        </div>
    </div>
  </div>
</template>

<script>
import ProgressHead from "@/components/ProgressHead.vue";
import StudentInfo from "@/components/StudentInfo.vue";
export default {
  name: "ConfirmSentMessage",
  data() {
    return {
      student: {
        fullName: "นายประเสริฐ มุ่งมานะ",
        studentNumber: "60070501000",
        faculty: "คณะวิศวกรรมศาสตร์",
        department: "ภาควิชาวิศวกรรมคอมพิวเตอร์",
        year: "ชั้นปีที่ 3",
      },
    };
  },
  components: {
    ProgressHead,
    StudentInfo,
  },
};
</script>

<style></style>
