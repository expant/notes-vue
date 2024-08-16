<template>
  <li class="notes-item" v-if="notesType === 'active'">
    <span class="title" @click="$emit('show-modal', id)">{{ title }}</span>
    <div class="remove-note" @click="$emit('remove-note', id, 'active')">
    </div>
  </li>
  <li class="notes-item prep" v-if="notesType === 'prep'">
    <span class="title"><slot></slot></span>
    <div class="remove-note">
    </div>
  </li>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  notesType: {
    type: String,
    default: 'prep',
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.notes-item {
  display: flex;
  justify-content: space-between;
  width: 300px;
  background: #ffffff;
  border: 1px solid #333;
  border-radius: 5px;
}

.notes-item .title {
  display: inline-block;
  width: 250px;
  font-weight: 200;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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