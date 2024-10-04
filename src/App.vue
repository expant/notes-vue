<template>
  <div class="grid grid-cols-1 grid-rows-[60px_auto_auto] sm:grid-rows-[100px_auto_auto] gap-y-6 sm:gap-y-8 min-h-screen">
    <TheHeader />
    <main class="container flex flex-col max-w-[1280px] my-0 mx-auto px-4 sm:px-8">
      <AppTypes />
      <div class="relative w-full flex items-center mt-5 sm:mt-10" role="search">
        <label
          class="absolute left-2.5"
          for="search">
          <IconSearch
            iconName="search"
            :iconWidth="15"
            :iconHeight="15"
            strokeColor="#000000"
          />
        </label>
        <input 
          class="grow-0 shrink-1 basis-full sm:basis-[300px] py-[12px] px-[15px] pl-[30px] border border-[#eeeeee] border-solid"
          v-model.trim="notesStore.searched"
          type="search"
          name="search"
          placeholder="Найти"
        >
      </div>
      <div class="flex flex-row flex-wrap gap-[30px] sm:gap-[100px] mt-[10px]">
        <AppNotes />
        <div class="grow-0 shrink basis-[600px]">
          <h3 class="font-extrabold text-xl text-center sm:text-left sm:text-3xl mb-5 text-sky-600">Содержимое</h3>
          <app-current-note-content
            v-if="notesStore.currentNote.active"
            :noteId="notesStore.currentNote.id"
          >
          </app-current-note-content>
        </div>
      </div>
    </main>
    <TheFooter />
  </div>
  <app-darken-page v-if="notesStore.form.isVisible">
    <TheForm />
  </app-darken-page>
</template>

<script setup>
import AppTypes from './components/AppTypes.vue';
import AppNotes from './components/AppNotes.vue';
import AppDarkenPage from './components/AppDarkenPage.vue';
import AppCurrentNoteContent from './components/AppCurrentNoteContent.vue';
import { useNotesStore } from './store';
import TheForm from './components/TheForm.vue';
import IconSearch from './components/IconSearch.vue';
import TheHeader from './components/views/TheHeader.vue';
import TheFooter from './components/views/TheFooter.vue';

const notesStore = useNotesStore();
</script>

<style scoped>
</style>
