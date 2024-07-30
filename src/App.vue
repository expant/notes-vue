<script>
export default {
  data() {
    return {
      inputValue: '',
      notes: [],
    }
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    addNewNote() {
      if (!this.inputValue) {
        return;
      }
      this.notes.push({
        value: this.inputValue,
        isActiveNoteRename: false,
      });
      this.inputValue = '';
      
    },
    removeNote(idx) {
      this.notes.splice(idx, 1);
    },
    activeRenameInput(idx, event) {
      this.notes[idx].isActiveNoteRename = true;
      console.log(this.$refs);
    },
    renameNote(idx, event) {
      const val = event.target.value;
      this.notes[idx].isActiveNoteRename = false;
      if (val === '') {
        return;
      }
      this.notes[idx].value = val;
    }
  }
};
</script>

// TODO: Реализовать редактирование заметок 
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
      v-model="inputValue"
    >
    <button class="add-note-btn" role="button">Добавить</button>
  </form> 
  <div class="notes-not-empty" v-if="notes.length !== 0">
    <div class="notes-count">Кол-во заметок: {{ notes.length }}</div>
    <ul class="notes">
      <li v-for="(note, idx) in notes">
        <span 
          class="note-text" 
          v-if="!note.isActiveNoteRename" 
          @click="activeRenameInput(idx, $event)"
        >
          {{ note.value }}
        </span>
        <input
          class="note-text-input" 
          v-else 
          @blur="renameNote(idx, $event)"
          @keypress.enter="renameNote(idx, $event)"
          ref="renameInput"
          type="text"
          :value="note.value"
        >
        <button class="note-delete" @click="removeNote(idx)">Удалить</button>
      </li>
    </ul>
  </div>
  <div class="notes-empty" v-else>Заметок нет</div>
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

.notes-count {
  margin-bottom: 10px;
  color: #4DB6AC;
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

.notes-empty {
  color: #4DB6AC;
}

</style>
