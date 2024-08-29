<template>
  <div class="container">
    <!-- <div class="side-bar">
      <h1 class="side-bar__title">Список заметок</h1>
      <TheAddNoteForm />
    </div> -->
    <header class="header">
      <h1 class="header__title">Список заметок</h1>
      <div class="search" role="search">
        <label for="search">Поиск:</label>
        <input container
          v-model.trim="notesStore.searched"
          type="search" 
          name="search" 
          placeholder="Найти"
        >
      </div>
    </header>
    <main class="main">
      <div class="types">
        <AppTypes />
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

const notesStore = useNotesStore();
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 20px 40px;
}

.header__title {
  font-size: 50px;
  font-weight: 200;
  color: #948ef5;
}

/* main (search) */
.search {
  flex: 0 1 600px;
  display: flex;
  align-items: center;
  padding: 20px;
  background: rgb(2,0,36);
  background: linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(16,0,255,1) 0%, rgba(255,255,255,1) 74%); 
  border-radius: 10px;
  color: #fff;
}

.search input {
  flex: 0 1 400px;
  margin-left: 10px;
  padding: 12px 15px;
}

.main {
  padding: 35px 100px;
}

.list {
  display: flex;
  gap: 100px;
  margin-top: 40px;
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
