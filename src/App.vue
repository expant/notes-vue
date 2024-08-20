<template>
  <div class="container">
    <div class="side-bar">
      <h1 class="side-bar__title">Список заметок</h1>
      <!-- <div class="line"></div> -->
      <TheAddNoteForm />
    </div>
    <div class="right-side">
      <header class="header">
        <div class="search" role="search">
          <label for="search">Поиск:</label>
          <input 
            v-model.trim="notesStore.searched"
            type="search" 
            name="search" 
            placeholder="Найти"
          >
        </div>
      </header>
      <div class="content">
        <AppNotes />
        <!-- TODO: Предпросмотр заметки при вводе значения в input (title) -->
      </div>
    </div>
  </div>
  <TheModal />
</template>

<script setup>
import TheAddNoteForm from './components/TheAddNoteForm.vue';
import TheModal from './components/TheModal.vue';
import AppNotes from './components/AppNotes.vue';
import { useNotesStore } from './store';

const notesStore = useNotesStore();
// export default {
  // },
  // methods: {
  //   validateForm() {
  //     const title = this.addNoteForm.title;
  //     const description = this.addNoteForm.description;
  //     const titleField = title.field.trim();
  //     const descriptionField = description.field.trim();
  //     this.addNoteForm.title.isEmpty = title ? false : true;;
  //     this.addNoteForm.description.isEmpty = description ? false : true;

  //     if (!titleField || !descriptionField) {
  //       return;
  //     }

  //     const isTitleTooLong = titleField.length > title.maxLength;
  //     const isDescriptionTooLong = descriptionField.length > description.maxLength;

  //     if (isTitleTooLong || isDescriptionTooLong) {
  //       return;
  //     }
  //     this.addNote(titleField, descriptionField);
  //   },
// }
</script>

<style scoped>
.container {
  display: flex;
}

.side-bar {
  position: fixed;
  left: 0;
  top: 0;
  flex: 1 0 400px;
  height: 100vh;
  /* background: #333333; */
  background: rgb(2,0,36);
  background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(38,0,255,1) 0%, rgba(0,212,255,1) 100%);
  border-radius: 10px;
  box-shadow: 0 0 40px -20px #000;
  margin: 15px 0 0 15px;
  padding: 30px;
}

.right-side {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 400px;
}

.side-bar__title {
  font-weight: 200;
  font-size: 40px;
  margin-bottom: 77px;
  color: #fff;
}

/* .line {
  height: 1px;
  width: 100vw;
  position: absolute;
  top: 85px;
  left: 30px;
  background: #fff;
} */

/* right-side (search) */
.search {
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 15px 0 0 100px;
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

.content {
  padding: 35px 100px;
}
</style>
