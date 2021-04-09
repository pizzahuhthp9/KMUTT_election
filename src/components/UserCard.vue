<template>
  <div class="mx-10">
      <div
        class="w-full border-2 border-black p-6 mb-8 rounded-3xl bg-white flex flex-col justify-center items-center"
      >
        <img
          :src="imgSrc"
          alt=""
          class="w-32 border-black border-2 mt-1.5"
        />
        <p class="text-xl mb-3">
          {{ student.name }} <br />
          {{ student.no }}
        </p>
        <p class="text-sm">
          {{ student.faculty }}
          <br />
          {{ student.department }} <br />
          ชั้นปีที่ {{ student.year }}
        </p>
      </div>
    </div>
</template>

<script>
export default {
    name: "UserCard",
    props:{
        student: Object
    },
    data() {
      return {
        imgSrc: this.$store.getters.getAPIPath + this.$store.getters.getUser.imagePath
      }
    },
}
</script>

<style>

</style>