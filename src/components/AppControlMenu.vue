<template>
  <div class="control-menu">
    <button class="control-menu__item" @click="notesStore.form.isVisible = true">Добавить заметку</button>
    <button 
      class="control-menu__item"
      @click="notesStore.removeAllNotesByType"
    >Удалить все заметки</button>
    <button 
      class="control-menu__item"
      v-if="notesStore.types.current !== notesStore.types.all[0]"
      @click="notesStore.removeCurrentType"
    >Удалить тип</button>
    <div class="pointer"></div>
  </div>
</template>

<script setup>
import { useNotesStore } from '@/store';

const notesStore = useNotesStore();

</script>

<style scoped>
.control-menu {
  position: absolute;
  width: 250px;
  left: 45px;
  top: 0;
  background:#eee;
  border-radius: 5px;
  z-index: 10;
}

.pointer {
  position: absolute;
  width: 10px;
  height: 10px;
  left: -5px;
  top: 12px;
  transform: rotate(45deg);
  background:#eee;
  transition: all 0.1s ease;
}

.control-menu__item {
  width: 100%;
  font-size: 16px;
  padding: 10px 20px;
  background: transparent;
  color: #333;
  transition: all 0.1s ease;
  border-radius: inherit;
}

.control-menu__item:hover,
.control-menu__item:hover:first-child ~ .pointer {
  background: #E0E0E0;
}

</style>