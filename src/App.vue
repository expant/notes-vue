<template>
  <div class="container">
    <div class="side-bar">
      <h1 class="side-bar__title">Список заметок</h1>
      <div class="line"></div>
      <div class="side-bar__add-note">
        <h3 class="add-note__title">Добавить заметку</h3>
        <form class="add-note__form">
          <form-field
            variant="input"
            :isEmpty="addNoteForm.title.isEmpty"
            :maxLength="addNoteForm.title.maxLength"
            v-model="addNoteForm.title.field"

          ></form-field>
          <form-field
            variant="textarea"
            :isEmpty="addNoteForm.description.isEmpty"
            :maxLength="addNoteForm.description.maxLength"
            v-model="addNoteForm.description.field"
        
          ></form-field>
          <button 
            class="add-note__btn" 
            type="submit" 
            @click.prevent="validateForm"
            @submit.prevent="validateForm"
          >Добавить</button>
        </form>
      </div>
    </div>
    <div class="right-side">
      <div class="search">
        <label for="search">Поиск:</label>
        <input type="text" name="search" placeholder="Найти">
      </div>
      <div class="content">
        <div class="active-notes notes">
          <div class="active-notes__count notes-count">Активные: {{ notes.active.length }}</div>
          <ul class="active-notes__list notes-list">
            <note-item 
              v-for="note in notes.active"
              :key="note.id"
              :title="note.title"
              :description="note.description"
              :id="note.id"
              @remove-note="removeNote"
              @show-modal="showModal"
            ></note-item>
            <note-item 
              class="preparatory-note"
              v-if="addNoteForm.title.field.trim()"
              :title="addNoteForm.title.field"
            ></note-item>
          </ul>
        </div>
        <completed-notes
          :notes="this.notes.completed"
          @remove-note="removeNote"
          @return-to-active="returnToActive"
        ></completed-notes>
      </div>
    </div>
  </div>
  <div class="modal-background" v-if="modal.isVisible">
    <div class="modal-item">
      <h2 class="modal-item__title">{{ modal.title }}</h2>
      <p class="modal-item__description">{{ modal.description }}</p>
      <div class="modal-item__btns">
        <button class="completed" @click="completeNote(modal.noteId)">Выполнено</button>
        <button class="remove" @click="removeNote(modal.noteId, 'active')">Удалить</button>
      </div>
      <div class="close" @click="modal.isVisible = false"></div>
    </div>
  </div>
</template>

<script>
import NoteItem from './components/Notes/NoteItem.vue';
import CompletedNotes from './components/Notes/CompletedNotes.vue';
import FormField from './components/FormField.vue';

export default {
  data() {
    return {
      addNoteForm: {
        title: {
          field: '',
          isEmpty: false,
          maxLength: 30,
        },
        description: {
          field: '',
          isEmpty: false,
          maxLength: 400,
        },
      },
      modal: {
        isVisible: false,
        noteId: null,
        title: '',
        description: '',
      },
      notes: {
        active: [],
        completed: [],
      },
    }
  },
  // TODO: Прокидывать массив заметок
  provide() {
    return {
      activeNotes: this.notes.active,
      completedNotes: this.notes.completed,  
    }
  },
  methods: {
    validateForm() {
      const title = this.addNoteForm.title;
      const description = this.addNoteForm.description;
      const titleField = title.field.trim();
      const descriptionField = description.field.trim();
      this.addNoteForm.title.isEmpty = title ? false : true;;
      this.addNoteForm.description.isEmpty = description ? false : true;

      if (!titleField || !descriptionField) {
        return;
      }

      const isTitleTooLong = titleField.length > title.maxLength;
      const isDescriptionTooLong = descriptionField.length > description.maxLength;

      if (isTitleTooLong || isDescriptionTooLong) {
        return;
      }
      this.addNote(titleField, descriptionField);
    },
    addNote(title, description) {
      const id = this.notes.active.length + 1;
      this.notes.active.push({ id, title, description });
      this.addNoteForm.title.field = '';
      this.addNoteForm.description.field = '';
    },
    removeNote(id, noteType) {
      if (this.modal.isVisible) {
        this.modal.isVisible = false;
      }
      this.notes[noteType] = this.notes[noteType]
        .filter((note) => note.id !== id);
    },
    returnToActive(note) {
      const length = this.notes.active.length;
      this.removeNote(note.id, 'completed');
      this.notes.active.push({ ...note, id: length + 1 });
    },
    showModal(id) {
      const note = this.notes.active.find((item) => item.id === id);
      this.modal.noteId = id;
      this.modal.title = note.title;
      this.modal.description = note.description;
      this.modal.isVisible = true;
    },
    completeNote(id) {
      const note = this.notes.active.find((item) => item.id === id);
      const length = this.notes.completed.length;
      const completedNoteId = !length ? 1 : length + 1; 
      this.removeNote(id, 'active');
      this.notes.completed.push({ ...note, id: completedNoteId});
      this.modal.isVisible = false;
    },
    // updateFormState(data) {
    //   console.log(data);
    //   const { isEmpty, variant } = data;
    //   if (variant === 'input') {
    //     this.addNoteForm.title.isEmpty = isEmpty;
    //     return;
    //   }
    //   this.addNoteForm.description.isEmpty = isEmpty;   
    // }
  },
  components: {
    NoteItem,
    FormField,
    CompletedNotes,
  },
}
</script>

<style scoped>
.modal-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(51, 51, 51, 0.7);
  z-index: 1;
}

.modal-item {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 600px;
  height: 495px;
  padding: 30px 40px;
  background: #ffffff;
  border-radius: 20px;
  z-index: 2;
}

.modal-item__title,
.modal-item__description {
  font-size: 20px;
}

.modal-item__title {
  font-weight: 500;
}

.modal-item__description {
  font-weight: 200;
  word-wrap: break-word;
}

.modal-item .close {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 25px;
  height: 25px;
  cursor: pointer;
}

.modal-item .close::after,
.modal-item .close::before {
  content: '';
  position: absolute;
  top: 12px;
  width: 25px;
  height: 1px;
  background: #333333;
  cursor: pointer;
}

.modal-item .close::after {
  transform: rotate(45deg);
}

.modal-item .close::before {
  transform: rotate(-45deg);
}

.modal-item__btns {
  margin-top: auto;
}

.modal-item__btns .completed,
.modal-item__btns .remove {
  font-weight: 200;
  font-size: 20px;
  padding: 12px 17px;
  border-radius: 5px;
  border: 1px solid #333333;
  cursor: pointer;
}

.modal-item__btns .completed {
  margin-right: 13px;
  color: #ffffff;
  background: #333333;
}

.modal-item__btns .remove {
  color: #333333;
  background: #ffffff;
}

/* -------------------  */
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


.add-note__form {
  display: flex;
  flex-direction: column;
}

.add-note__btn,
.search input {
  font-size: 16px;
  border: 0;
  border-radius: 5px;
}

.add-note__btn:focus,
.search input:focus {
  outline: none;
}


.add-note__btn {
  width: 114px;
  font-size: 16px;
  padding: 12px 18px;
  background: #ffffff;
  color: #333333;
  cursor: pointer;
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

.notes {
  flex: 0 0 370px;
  padding: 30px;
  border-radius: 10px;
}

.active-notes {
  background: #ffffff;
}

.active-notes__count {
  color: #455A64;
}

.notes-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
  list-style-type: none;
}

.preparatory-note {
  opacity: 50%;
}
</style>
