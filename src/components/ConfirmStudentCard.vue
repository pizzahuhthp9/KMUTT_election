<template>
  <div class="bg-main w-full flex justify-between rounded-lg py-1 px-2" >
      <p>{{ student.name }}</p>
      <div class="w-6 h-6 rounded-full border-2 border-black bg-select" v-if="student.selectState == 1"></div>
      <div class="w-6 h-6 rounded-full border-2 border-black bg-danger" v-else-if="student.selectState == -1"></div>
      <div class="w-6 h-6 rounded-full border-2 border-black bg-gray-400" v-else-if="student.selectState == 0"></div>
  </div>
</template>

<script>
export default {
    name: "ConfirmStudentCard",
    props:{
        student: Object
    }
}
</script>

<style>

</style>