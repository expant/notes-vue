<template>
  <div class="container">
    <div class="side-bar">
      <h1 class="side-bar__title">Список заметок</h1>
      <div class="line"></div>
      <TheAddNoteForm />
    </div>
    <div class="right-side">
      <div class="search">
        <label for="search">Поиск:</label>
        <input type="text" name="search" placeholder="Найти">
      </div>
      <div class="content">
        <AppNotes notesType="active" />
        <AppNotes notesType="completed" />
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
  background: #333333;
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

.line {
  height: 1px;
  width: 100vw;
  position: absolute;
  top: 85px;
  left: 30px;
  background: #fff;
}

/* right-side (search) */
.search {
  display: flex;
  align-items: center;
  padding: 20px 90px;
}

.search input {
  flex: 0 1 400px;
  margin-left: 10px;
  padding: 12px 15px;
  border: 1px solid #333333;
}

.content {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 50px;
  padding: 73px 93px;
}
</style>
