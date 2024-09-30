<template>
  <TheHeader />
  <div class="container">
    <main class="main py-10">
      <div class="types">
        <AppTypes />
      </div>
      <div class="search" role="search">
        <label for="search">
          <AppIcon 
            iconName="search"
            :iconWidth="15"
            :iconHeight="15"
            strokeColor="#000000" 
          />
        </label>
        <input container
          v-model.trim="notesStore.searched"
          type="search" 
          name="search" 
          placeholder="Найти"
        >
      </div>
      <div class="list">
        <AppNotes />
        <div class="content">
          <h3 class="content__title">Содержимое</h3>
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
import AppIcon from './components/AppIcon.vue';
import TheHeader from './components/views/TheHeader.vue';
import TheFooter from './components/views/TheFooter.vue';

const notesStore = useNotesStore();
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  max-width: 1220px;
  margin: 0 auto;
  padding: 30px;
  padding-top: 0;
}

/* main (search) */
.search {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 40px;
}

.search input {
  flex: 0 1 300px;
  padding: 12px 15px;
  padding-left: 30px;
  border: 1px solid #eee;
}

.search label {
  position: absolute;
  left: 10px;
}

.list {
  display: flex;
  flex-flow: row wrap;
  gap: 100px;
  margin-top: 10px;
}

.content {
  flex: 0 1 600px;
}

.add-new-note {
  padding: 35px 0;
  vertical-align: middle;
}

.content__title {
  font-size: 30px;
  font-weight: 800;
  color: #968ff5;
  margin-bottom: 20px;
}
</style>
