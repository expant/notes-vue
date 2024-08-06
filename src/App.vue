<template>
  <div class="container">
    <div class="side-bar">
      <h1 class="side-bar__title">Список заметок</h1>
      <div class="line"></div>
      <div class="side-bar__add-note">
        <h3 class="add-note__title">Добавить заметку</h3>
        <form class="add-note__form">
          <form-field
            field="title"
            v-model="addNoteForm.title.field"
          ></form-field>
          <form-fields
            field="description"
            v-model="addNoteForm.description.field"
          ></form-fields>
          <button class="add-note__btn" type="submit" @click.prevent="validateForm">Добавить</button>
        </form>
      </div>
    </div>
    <div class="right-side">
      <div class="search">
        <label for="search">Поиск:</label>
        <input type="text" name="search" placeholder="Найти">
      </div>
      <div class="content">
        <div class="content__notes-count">Кол-во заметок: {{ idsCount }}</div>
        <ul class="content__notes-list">
          <note-item 
            v-for="note in notes"
            :key="note.id"
            :title="note.title"
            :description="note.description"
            :id="note.id"
            @remove-note="removeNote"
          ></note-item>
          <note-item 
            class="preparatory-note"
            v-if="addNoteForm.title.field.trim()"
            :title="addNoteForm.title.field"
          ></note-item>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NoteItem from './components/NoteItem.vue';
import FormField from './components/FormField.vue';
import WarningItem from './components/WarningItem.vue';

export default {
  data() {
    return {
      addNoteForm: {
        title: {
          field: '',
          isEmpty: false,
        },
        description: {
          field: '',
          isEmpty: false,
        }
      },
      idsCount: 0,
      notes: [],
    }
  },
  methods: {
    addNote(title, description) {
      const id = this.idsCount + 1;
      const title = this.addNoteForm.title.field;
      const description = this.addNoteForm.description.field;

      this.notes.push({ id, title, description });
      this.idsCount += 1;
      this.addNoteForm.title.field = '';
      this.addNoteForm.description.field = '';
    },
    removeNote(id) {
      console.log(this.notes);
      this.notes = this.notes.filter((note) => note.id !== id);
      this.idsCount -= 1; 
    },
  },
  components: {
    NoteItem,
    WarningItem,
    FormField,
  },
}

// export default {
//   data() {
//     return {
//       inputValue: '',
//       notes: [],
//       firstId: 0,
//     }
//   },
//   methods: {
//     inputChangeHandler(event) {
//       this.inputValue = event.target.value;
//     },
//     addNewNote() {
//       if (!this.inputValue.trim()) {
//         return;
//       }
//       // const description = {
//       //   text: 
//       // }
//       this.notes.push({
//         title: this.inputValue,
//         id: this.firstId,
//         isEditing: false,
//       });
//       this.inputValue = '';
//       this.firstId += 1;
//     },
//     removeNote(id) {
//       this.notes = this.notes.filter((note) => note.id !== id);
//     },
//     activateEditing(id) {
//       this.notes = this.notes.map((note) => {
//         if (note.id !== id) return note;
//         return { ...note, isEditing: true };
//       });
//     },
//     editNote(id, title) {
//       this.notes = this.notes.map((note) => {
//         if (note.id !== id) return note;
//         if (!title) return { ...note, isEditing: false };
//         return { id, title, isEditing: false };
//       });
//     }
//   },
//   components: {
//     NoteItem
//   }
// };
</script>

<style scoped>
.container {
  display: flex;
}

.side-bar {
  height: 100vh;
  padding: 30px;
  background: #333333;
}

.right-side {
  display: flex;
  flex-direction: column;
  width: 100%;
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

.add-note__title,
.add-note__description {
  margin-bottom: 20px;
}

.add-note__title {
  font-weight: bold;
  font-size: 22px;
  color: #fff;
}

.add-note__form {
  display: flex;
  flex-direction: column;
}

.add-note__title,
.add-note__form input,
.add-note__form textarea {
  width: 100%;
}

.add-note__form input,
.add-note__form textarea,
.add-note__btn,
.search input {
  font-size: 16px;
  border: 0;
  border-radius: 5px;
}

.add-note__form input,
.add-note__form textarea {
  padding: 16px;
}

.add-note__form input:focus,
.add-note__form textarea:focus,
.add-note__btn:focus,
.search input:focus {
  outline: none;
}

.add-note__form textarea {
  resize: none;
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
  padding: 73px 93px;
}

.content__notes-count {
  color: #455A64;
}

.content__notes-list {
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
