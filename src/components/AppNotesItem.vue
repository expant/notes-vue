<template>
  <li class="notes-item note">
    <span class="title" @click="$emit('show-modal')">{{ title }}</span>
    <div class="remove-note" @click="$emit('remove-note')">
    </div>
  </li>
</template>

<script setup>
const emits = defineEmits(['remove-note', 'show-modal']);
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.note {
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
  width: 300px;
  /* background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(16,0,255,1) 0%, rgba(238,238,238,1) 78%); */
  /* border: 1px solid #333; */
  background: rgb(2,0,36);
  background: linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(16,0,255,1) 0%, rgba(238,238,238,1) 73%); 
  border-radius: 5px;
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
  padding: 15px;
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

.prep {
  opacity: 50%;
}

.completed-note {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 300px;
  list-style-type: none;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  transition: all ease-in 0.1s;
}

.completed-note:hover {
  background: #eeeeee;
}

.completed-note__title,
.completed-note__return,
.completed-note__remove {
  padding: 10px;
}

.completed-note__return,
.completed-note__remove  {
  background: #eeeeee;
}

.completed-note__title {
  flex: 0 0 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: auto;
}

.completed-note__return,
.completed-note__remove {
  transition: background ease-out 0.1s;
}

.completed-note__remove {
  border-radius: 0 5px 5px 0;
}

.completed-note__return:hover {
  cursor: pointer;
  background: #9ACD32;
}

.completed-note__remove:hover {
  cursor: pointer;
  background: #FF0000;
}

</style>