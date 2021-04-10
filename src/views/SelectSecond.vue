<template>
  <div>
    <progress-head :amount="5" :passed="4"></progress-head>
    <div id="head" class="bg-white border-2 border-black py-2 my-2">
      <h1 class="text-lg">เลือกสภานักศึกษา<br />{{ faculty }}</h1>
    </div>
    <div id="body" class="w-11/12 l:w-3/4 mx-auto">
      <h1 class="text-sm mb-2">โปรดพิจารณาสภานักศึกษาให้ครบทุกคน</h1>
      <student-card
        v-for="(student, index) in getStudents"
        :key="index"
        :student="student"
        class="mb-3"
      ></student-card>
      <p>*ระบบจะแสดงเฉพาะผู้สมัครจากคณะของท่านเท่านั้น</p>
      <button
        class="bg-gray-200 text-lg font-extrabold px-6 py-1 rounded-xl my-3"
        @click="submit"
      >
        ยืนยัน
      </button>
    </div>
  </div>
</template>

<script>
import ProgressHead from "@/components/ProgressHead.vue";
import StudentCard from "@/components/StudentCard.vue";
import axios from "axios";
export default {
  name: "SelectSecond",
  data() {
    return {
      faculty: this.$store.getters.getUser.faculty,
    };
  },
  methods: {
    submit() {
      if (this.$store.getters.isConcilAllSelected) {
        this.$router.push("ConfirmSelectSecond");
      } else {
        console.log("เลือกให้ครบสิจ้ะ");
      }
      //  this.$router.push("ConfirmSelectSecond");
    },
  },
  computed: {
    // getStudents() {
    //   let concil = this.$store.getters.getConcil;
    //   let user = this.$store.getters.getUser;
    //   let NewConcil = [];
    //   concil.forEach(e => {
    //     if(e.faculty === user.faculty)
    //     {
    //       NewConcil.push(e);
    //     }
    //   });
    //   return NewConcil;
    // },
    getStudents() {
      return this.$store.getters.getConcil;
    },
  },
  mounted() {
    axios({
      method: "GET",
      url: this.$store.getters.getAPIPath + "/api/council/",
      headers: {
        Authorization: this.$store.getters.getToken,
      },
    }).then((result)=>{
      this.$store.commit("setCouncil", result.data);
    });
  },
  components: {
    ProgressHead,
    StudentCard,
  },
};
</script>

<style></style>
