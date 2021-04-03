<template>
  <div>
      <div id="header">
          <progress-head amount="5" passed="1"></progress-head>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
import ProgressHead from '@/components/ProgressHead.vue';
export default {
    name: "Form",
    components:{
        ProgressHead
    }
}
</script>

        ProgressHead
<style>

</style>