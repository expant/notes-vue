import { defineStore } from "pinia";

export const useNotesStore = defineStore('notesStore', {
  state: () => ({
    types: {
      isFormVisible: false,
      current: 'Все',
      all: ['Все'],
    },
    searched: '',
    notes: [
      {
        type: 'Завершённые',
        id: 14,
        title: 'Заметка 14',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        type: 'Завершённые',
        id: 15,
        title: 'Заметка 15',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
    ],
    currentNote: {
      active: false,
      id: null,
    },
    form: {
      isVisible: false,
      noteId: null,
      title: '',
      description: '',
    },
    controlMenu: {
      active: false,
    },
  }),
  getters: {
    getSearchNotes: (state) => {
      return (notes = state.notes) => notes.filter((el) => el.title.includes(state.searched))
    },
    getNotes() {
      if (this.types.current === this.types.all[0]) {
        return this.getSearchNotes();
      }
  
      const notesByType = this.notes.filter((el) => el.type === this.types.current);
      console.log(notesByType);
      return this.getSearchNotes(notesByType);
    },
    getNoteByProp: (state) => {
      return (name, val) => state.notes.find((el) => el[name] === val);
    },
  },
  actions: {
    addNote(title, description) {
      this.notes.push({
        title,
        description,
        id: new Date().valueOf(),
        type: this.types.current,
      });
      this.form.isVisible = false;
    },
    addNotesType(typeName) {
      this.types.all.push(typeName);
      this.types.isFormVisible = false;
    },
    removeNote(id) {
      this.notes = this.notes.filter((el) => el.id !== id);
      this.currentNote.active = false;
    },
    removeAllNotesByType() {
      if (this.types.current === this.types.all[0]) {
        this.notes = [];
        return;
      }

      this.notes = this.notes.filter((el) => el.type !== this.types.current);
    },
    removeCurrentType() {
      const index = this.types.all.indexOf(this.types.current);
      this.types.all.splice(index, 1);
      this.types.current = this.types.all[0];
    },
    defineModal(id) {
      const note = this.notes.find((el) => el.id === id);
      this.form.noteId = id;
      this.form.title = note.title;
      this.form.description = note.description;
      this.form.isVisible = true;
      this.form.date = note.date;
    },
    changeNoteType(id, newType) {
      if (this.form.isVisible) {
        this.form.isVisible = false;
      }
      this.notes = this.notes
        .map((el) => el.id === id ? { ...el, type: newType } : el);
      this.currentNote.active = false;
      this.controlMenu.active = false;
    },
  }
});