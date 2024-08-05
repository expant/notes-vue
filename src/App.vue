<template>
  <h1 class="notes__title">Список заметок</h1>
  <form 
    class="notes__form"
    action="#" 
    @submit.prevent="addNewNote"
  >
    <input 
      class="form__title"
      type="text" 
      placeholder="Добавить заметку"
      v-model="inputValue"
    >
    <textarea class="form__description" name="description" id="description"></textarea>
    <button class="form__btn" role="button">Добавить</button>
  </form> 
  <div class="notes__main" v-if="notes.length !== 0">
    <div class="count">Кол-во заметок: {{ notes.length }}</div>
    <ul class="items">
      <NoteItem
        v-for="note in notes"
        :key="note.id"
        :title="note.title"
        :id="note.id"
        :is-editing="note.isEditing"
        @remove-note="removeNote"
        @activate-editing="activateEditing"
        @edit-note="editNote"
      />
    </ul>
  </div>
  <div class="notes__empty" v-else>Заметок нет</div>
  <!-- <div
    class="form__description"
    @click="showDescription(id, $event)"
    v-if=""
  >
    
  </div> -->
</template>

<script>
import NoteItem from './components/NoteItem.vue';

export default {
  data() {
    return {
      inputValue: '',
      notes: [],
      firstId: 0,
    }
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    addNewNote() {
      if (!this.inputValue.trim()) {
        return;
      }
      // const description = {
      //   text: 
      // }
      this.notes.push({
        title: this.inputValue,
        id: this.firstId,
        isEditing: false,
      });
      this.inputValue = '';
      this.firstId += 1;
    },
    removeNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
    activateEditing(id) {
      this.notes = this.notes.map((note) => {
        if (note.id !== id) return note;
        return { ...note, isEditing: true };
      });
    },
    editNote(id, title) {
      this.notes = this.notes.map((note) => {
        if (note.id !== id) return note;
        if (!title) return { ...note, isEditing: false };
        return { id, title, isEditing: false };
      });
    }
  },
  components: {
    NoteItem
  }
};
</script>

<style scoped>
.notes__form {
  margin: 30px 0;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
}

.form__title {
  font-size: 16px;
  flex: 0 1 315px;
  padding: 5px 5px;
  border: 0;
  border-bottom: 1px solid #fa6400;
}

.form__title:focus {
  outline: 0;
}

.form__description {
  height: auto;
}

.form__btn {
  align-items: center;
  background-clip: padding-box;
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}

.form__btn:hover,
.form__btn:focus {
  background-color: #fb8332;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

.form__btn:hover {
  transform: translateY(-1px);
}

.count {
  margin-bottom: 10px;
  color: #4DB6AC;
}

.items {
  list-style-type: none;
}

.items li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 20px;
  border: 1px solid #fb8332;
  border-radius: 5px;
}

.notes__empty {
  color: #4DB6AC;
}

</style>
