<template>
  <div class="control-menu">
    <button class="control-menu__item">Добавить заметку</button>
    <button 
      class="control-menu__item"
      @click="notesStore.removeAllNotesByType"
    >Удалить все заметки</button>
    <button 
      class="control-menu__item"
      v-if="notesStore.types.current !== notesStore.types.all[0]"
      @click="notesStore.removeCurrentType"
    >Удалить тип</button>
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
  left: 50px;
  top: 0;
  background:#eee;
  border-radius: 5px;
}

.control-menu__item {
  width: 100%;
  padding: 10px 20px;
  background: transparent;
  color: #333;
  transition: all 0.1s ease;
  border-radius: inherit;
}

.control-menu__item:hover {
  background: linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(16,0,255,1) 0%, rgba(238,238,238,1) 90%);;
  color: #fff;
}

</style>