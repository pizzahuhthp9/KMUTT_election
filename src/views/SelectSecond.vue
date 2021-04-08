<template>
  <div>
    <progress-head amount="5" passed="4"></progress-head>
    <div id="head" class="bg-white border-2 border-black py-2 my-2">
      <h1 class="text-lg">เลือกสภานักศึกษา<br />{{ faculty }}</h1>
    </div>
    <div id="body" class="mx-10">
      <h1 class="text-sm mb-2">โปรดพิจารณาสภานักศึกษาให้ครบทุกคน</h1>
      <student-card
        v-for="(student, index) in getStudents"
        :key="index"
        :student="student"
        class="mb-3"
      ></student-card>
      <button class="bg-gray-200 text-lg font-extrabold px-6 py-1 rounded-xl mt-3" @click="submit">ยืนยัน</button>
    </div>
  </div>
</template>

<script>
import ProgressHead from "@/components/ProgressHead.vue";
import StudentCard from "@/components/StudentCard.vue";
export default {
  name: "SelectSecond",
  data() {
    return {
      faculty: "คณะวิศวกรรมศาสตร์",
    };
  },
  methods: {
    submit(){
      this.$router.push("ConfirmSelectSecond");
    }
  },
  computed:{
    getStudents(){
      return this.$store.getters.getConcil;
    }
  },
  components: {
    ProgressHead,
    StudentCard,
  },
};
</script>

<style></style>
