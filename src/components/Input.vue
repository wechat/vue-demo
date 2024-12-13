<template>
  <div :class="`input-container ${className}`">
    <input type="text" v-model="inputValue" :max-length="maxLength" @input="handleChange" />
    <button @click="handleclear">X</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const inputValue = ref("");
const prop = defineProps({
  defaultValue: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    required: true,
  },
  maxLength: {
    type: Number,
    required: true,
  },
  onChange: {
    type: Function,
    required: true,
  },
  onClear: {
    type: Function,
    required: true,
  },
});

if (prop.defaultValue) {
  inputValue.value = prop.defaultValue
}

const handleChange = () => {
  prop.onChange(inputValue.value);
};

const handleclear = () => {
  inputValue.value = "";
  prop.onClear();
};
</script>

<style scoped></style>
