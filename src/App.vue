<script>
export default {
  data() {
    return {
      inputValue: '',
      noteId: 0,
      notes: [],
    }
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    addNewNote(event) {
      if (!this.inputValue) {
        return;
      }
      this.notes.push({
        id: this.noteId,
        value: this.inputValue,
      });
      this.inputValue = '';
      this.noteId += 1;
    },
    deleteNote(id) {
      this.notes = this.notes.filter((note) => id !== note.id);
    }
  }
};
</script>

<template>
  <h1>Список заметок</h1>
  <form 
    class="creating-notes-form"
    action="#" 
    @submit.prevent="addNewNote"
  >
    <input 
      class="add-note-input"
      type="text" 
      placeholder="Добавить заметку"
      :value="inputValue"
      @input="inputChangeHandler"
    >
    <button class="add-note-btn" role="button">Добавить</button>
  </form> 
    
  <ul class="notes">
    <li :data-id="note.id" v-for="note in notes">
      <span class="note-text">{{ note.value }}</span>
      <button class="note-delete" @click="() => deleteNote(note.id)">Удалить</button>
    </li>
  </ul>
</template>

<style scoped>
.creating-notes-form {
  margin: 30px 0;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
}

.add-note-input {
  font-size: 16px;
  flex: 0 1 315px;
  padding: 5px 5px;
  border: 0;
  border-bottom: 1px solid #fa6400;
}

.add-note-input:focus {
  outline: 0;
}

.add-note-btn,
.note-delete {
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

.add-note-btn:hover,
.add-note-btn:focus {
  background-color: #fb8332;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

.add-note-btn:hover {
  transform: translateY(-1px);
}

.notes {
  list-style-type: none;
}

.notes li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 20px;
  border: 1px solid #fb8332;
  border-radius: 5px;
}

.note-delete {
  padding: 0px 15px;
}

</style>
