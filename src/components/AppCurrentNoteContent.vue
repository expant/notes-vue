<template>
  <div class="content flex flex-col grow-0 shrink basis-full sm:min-h-[400px] p-5 sm:p-[30px] bg-[#eeeeee] rounded text-black" v-if="note">
    <h2 class="text-xl text-sky-600 break-all">{{ note.title }}</h2>
    <p class="break-all text-sm sm:text-base my-5">{{ note.description }}</p>
    <div class="justify-self-start self-end mt-auto">
      <button 
        class="font-normal text-sm sm:text-[18px] p-2.5 sm:py-[12px] sm:px-[17px] bg-sky-600 hover:bg-sky-600 hover:text-white sm:bg-[#eee] border border-solid border-sky-600 rounded text-white sm:text-sky-600 transition-all" 
        @click="notesStore.removeNote(noteId)"
      >Удалить</button>
    </div>
  </div>
</template>

<script setup>
import { useNotesStore } from '@/store';
import { computed } from 'vue';

const notesStore = useNotesStore()

const props = defineProps({ 
  noteId: {
    require: true,
  }
});

const note = computed(() => notesStore.getNoteByProp('id', props.noteId));
</script>

<style scoped>
</style>