<template>
  <div class="label">{{ label }}</div>  
</template>

<script>
export default {
  data() {
    return {
      labal: 'App with Vue.js'
    };
  },
  mounted() {
    alert('Mounted!');
  }
};
</script>


<style scoped>
.label {
  font-size: 20px;
  color: #555;
  font-family: Arial, sans-serif;
}
</style>
