<template>
  <div class="content">
    <h1>Rsbuild with Vue</h1>
    <Input
      className="input-box"
      defaultValue="输入框默认值"
      :maxLength="10"
      :onChange="onChange"
      :onClear="onClear"
    />
  </div>
</template>
<script setup lang="ts">
import Input from '../components/Input.vue';

function onChange(value: string) {
  console.log(value);
}

function onClear() {
  console.log('clear');
}
</script>
<style scoped></style>
