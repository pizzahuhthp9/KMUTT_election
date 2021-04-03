<template>
  <div>
    <div id="header">
      <progress-head amount="5" passed="1"></progress-head>
      <h1 class="text-2xl font-bold">ยืนยันข้อมูลนักศึกษา</h1>
    </div>

    <student-info :student="student"></student-info>
    
    <p>ข้อมูลของคุณถูกต้องหรือไม่</p>
    <div class="flex space-x-4 justify-center">
      <button class="w-24 h-10 bg-gray-300 rounded-xl">ไม่ถูกต้อง</button>
      <button class="w-24 h-10 bg-white rounded-xl font-bold">ถูกต้อง</button>
    </div>
  </div>
</template>

<script>
import ProgressHead from "@/components/ProgressHead.vue";
import StudentInfo from "@/components/StudentInfo.vue";
export default {
  name: "Confirm",
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
    StudentInfo
  },
};
</script>

<style></style>
