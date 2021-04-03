<template>
  <div class="mx-10">
      <div
        class="w-full border-2 border-black p-6 mb-8 rounded-3xl bg-white flex flex-col justify-center items-center"
      >
        <img
          src="@/assets/logo.png"
          alt=""
          class="w-24 border-black border-2 mb-5"
        />
        <p class="text-xl mb-5">
          {{ student.fullName }} <br />
          {{ student.studentNumber }}
        </p>
        <p class="text-md">
          {{ student.faculty }}
          <br />
          {{ student.department }} <br />
          {{ student.year }}
        </p>
      </div>
    </div>
</template>

<script>
export default {
    name: "StudentInfo",
    props:{

        student: Object
    }
}
</script>

<style>

</style>