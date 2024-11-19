<template>
  <div class="control-menu absolute right-[45px] sm:left-[45px] top-0 w-[250px] bg-[#eeeeee] shadow-md rounded z-10">
    <button class="w-full text-base py-2.5 px-5 bg-transparent text-black transition-all hover:bg-[#E0E0E0] peer" @click="notesStore.form.isVisible = true">Добавить заметку</button>
    <button 
      class="w-full text-base py-2.5 px-5 bg-transparent text-black transition-all hover:bg-[#E0E0E0]"
      @click="notesStore.removeAllNotesByType"
    >Удалить все заметки</button>
    <button 
      class="w-full text-base py-2.5 px-5 bg-transparent text-black transition-all hover:bg-[#E0E0E0]"
      v-if="notesStore.types.current !== notesStore.types.all[0]"
      @click="notesStore.removeCurrentType"
    >Удалить тип</button>
    <div class="pointer absolute w-2.5 h-2.5 right-[-5px] sm:left-[-5px] top-[12px] rotate-45 bg-[#eeeeee] transition-all peer-hover:bg-[#E0E0E0]"></div>
  </div>
</template>

<script setup>
import { useNotesStore } from '@/stores/store';

const notesStore = useNotesStore();

</script>

<style scoped>
</style>