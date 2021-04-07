<template>
  <div class="flex bg-white p-4 rounded-lg space-x-3 justify-around">
    <div class="h-16 w-16 bg-white border-2 border-black"></div>
    <div class="flex flex-col h-max items-start justify-around">
      <p class="xxs:text-xs xs:text-sm font-bold">{{ student.name }}</p>
      <p class="xxs:text-xxxs xs:text-xxs font-bold">
        {{ student.faculty }} ชั้นปีที่ {{ student.year }}
      </p>
      <div class="flex xs:text-xxs xxs:text-xxxs space-x-1">
        <button
          class="bg-select px-2 py-1 border border-black rounded-2xl"
          v-if="state == 1"
          @click="deSelect"
        >
          ยอมรับ
        </button>
        <button
          class="bg-white px-2 py-1 border border-black rounded-2xl"
          v-else
          @click="accept"
        >
          ยอมรับ
        </button>
        <button
          class="bg-danger py-1 border border-black rounded-2xl"
          v-if="state == -1"
          @click="deSelect"
        >
          ไม่ยอมรับ
        </button>
        <button
          class="bg-white py-1 border border-black rounded-2xl"
          v-else
          @click="decline"
        >
          ไม่ยอมรับ
        </button>
        <button
          class="bg-gray-400 py-1 border border-black rounded-2xl"
          v-if="state == 0"
          @click="deSelect"
        >
          ไม่ออกเสียง
        </button>
        <button
          class="bg-white py-1 border border-black rounded-2xl"
          v-else
          @click="noVote"
        >
          ไม่ออกเสียง
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentCard",
  data() {
    return {
      state: null,
    };
  },
  methods: {
    accept() {
      this.state = 1;
      this.$store.commit("setStudentSelectState", {student: this.student, selectState: this.state});
    },
    decline() {
      this.state = -1;
      this.$store.commit("setStudentSelectState", {student: this.student, selectState: this.state});
    },
    noVote() {
      this.state = 0;
      this.$store.commit("setStudentSelectState", {student: this.student, selectState: this.state});
    },
    deSelect() {
      this.state = null;
      this.$store.commit("setStudentSelectState", {student: this.student, selectState: this.state});
    },
  },
  props: {
    student: Object
  },
};
</script>

<style></style>
