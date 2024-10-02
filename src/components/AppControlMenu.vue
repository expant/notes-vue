<template>
  <div class="control-menu absolute right-[45px] sm:left-[45px] top-0 w-[250px] bg-[#eeeeee] shadow-md rounded z-10">
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
    <div class="pointer absolute w-2.5 h-2.5 right-[-5px] sm:left-[-5px] top-[12px] rotate-45 bg-[#eeeeee] transition-all"></div>
  </div>
</template>

<script setup>
import { useNotesStore } from '@/store';

const notesStore = useNotesStore();

</script>

<style scoped>
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