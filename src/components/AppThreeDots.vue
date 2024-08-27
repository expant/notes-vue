<template>
  <div class="three-dots">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
</template>

<script setup>

</script>

<style scoped>
.three-dots,
.dot {
  border-radius: 50%;
}

.three-dots {
  display: flex;
  gap: 3px;
  padding: 16px 10px;
  background: #fff;
  transition: background 0.1s ease;
}

.three-dots:hover {
  background: #eee;
}

.dot {
  width: 3px;
  height: 3px;
  background: #333;
}
</style>