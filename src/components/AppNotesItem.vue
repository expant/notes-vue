<template>
  <li 
    class="notes-item note animation" 
    v-if="type === 'added'"
  >
    <span class="title" @click="$emit('show-content')">{{ title }}</span>
    <div class="remove-note" @click="$emit('remove-note')"></div>
  </li>
  <li class="notes-new-item note" v-if="type === 'new'">
    <span class="title">Добавить заметку</span>
  </li>
</template>

<script setup>
const emits = defineEmits([
  'remove-note', 
  'show-modal',
  'show-content',
  'hide-content',
]);
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  }
});
</script>

<style scoped>
.note {
  width: 100%;
  border-radius: 5px;
}

.title {
  padding: 15px;
}

.animation {
  opacity: 0;
  transition: 0.5s;
  animation: show-note 0.5s 1;
  animation-fill-mode: forwards;
  animation-delay: 0s;
}

@keyframes show-note {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.notes-item {
  display: flex;
  justify-content: space-between;
  background: rgb(2,0,36);
  background: linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(16,0,255,1) 0%, rgba(238,238,238,1) 73%); 
  transform: translateX(0px);
  transition: all ease-in-out 0.1s;
}

.notes-item:hover {
  transform: translateX(-5px);
}

.notes-item .title {
  display: inline-block;
  width: 230px;
  font-weight: 400;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #fff;
}

.remove-note {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  background: #eee;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: transform ease-in 0.1s;
}

.remove-note::after,
.remove-note::before {
  content: '';
  position: absolute;
  width: 25px;
  height: 1px;
  background: #333;
}

.remove-note::after {
  transform: rotate(45deg);
}

.remove-note::before {
  transform: rotate(-45deg);
}

.notes-new-item {
  padding: 15px;
  color: #2a1cfd;
  background: #fff;
  border: 1px solid #2a1cfd;
  transition: all 0.1s ease;
}

.notes-new-item:hover {
  background: #2a1cfd;
  color: #ffffff;
}

</style>