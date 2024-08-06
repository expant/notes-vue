<template>
  <li class="notes-item">
    <span class="title">{{ title }}</span>
    <div class="remove-note" @click="$emit('remove-note', id)">
    </div>
  </li>
</template>

<script>
export default {
  emits: ['remove-note'],
  props: {
    title: String,
    description: String,
    id: Number,
  },
}
</script>

<style>
.notes-item {
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  background: #ffffff;
  border: 1px solid #333;
  border-radius: 5px;
}

.notes-item .title {
  font-weight: 200;
  font-size: 16px;
  padding: 15px;
  color: #333;
}

.remove-note {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  background: #333;
  cursor: pointer;
  transition: transform ease-in 0.1s;
}

.remove-note::after,
.remove-note::before {
  content: '';
  position: absolute;
  width: 25px;
  height: 1px;
  background: #D9D9D9;
}

.remove-note::after {
  transform: rotate(45deg);
}

.remove-note::before {
  transform: rotate(-45deg);
}
</style>