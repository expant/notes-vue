import { defineStore } from "pinia";

export const useNotesStore = defineStore('notesStore', {
  state: () => ({
    addNoteForm: {
      title: '',
      description: '',
    },
    types: {
      isFormVisible: false,
      current: 'Все',
      all: ['Все'],
    },
    searched: '',
    notes: [
      { 
        type: 'Активные',
        id: 1,
        title: 'Заметка 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      { 
        type: 'Активные',
        id: 2,
        title: 'Заметка 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      { 
        type: 'Активные',
        id: 3,
        title: 'Заметка 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        type: 'Активные',
        id: 4,
        title: 'Заметка 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        type: 'Завершённые',
        id: 5,
        title: 'Довольно длинное описание',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        type: 'Завершённые',
        id: 6,
        title: 'Заметка 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        type: 'Завершённые',
        id: 7,
        title: 'Заметка 7',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        type: 'Завершённые',
        id: 8,
        title: 'Заметка 8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        type: 'Завершённые',
        id: 9,
        title: 'Заметка 9',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        type: 'Завершённые',
        id: 10,
        title: 'Заметка 10',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        type: 'Завершённые',
        id: 11,
        title: 'Заметка 11',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        type: 'Завершённые',
        id: 12,
        title: 'Заметка 12',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        type: 'Завершённые',
        id: 13,
        title: 'Заметка 13',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
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
    showPreview() {
      return this.addNoteForm.title;
    },
    getSearchNotes: (state) => {
      return (notes = state.notes) => notes.filter((el) => el.title.includes(state.searched))
    },
    getNotes() {
      if (this.types.current === this.types.all[0]) {
        return this.getSearchNotes();
      }
      const notesByType = this.notes.filter((el) => el.type === this.types.current);
      return this.getSearchNotes(notesByType);
    },
    getNoteById: (state) => {
      return (id) => state.notes.find((el) => el.id === id);
    },
  },
  actions: {
    addNote() {
      const { title, description } = this.addNoteForm;
      this.notes.push({
        title,
        description,
        id: new Date().valueOf(),
        type: this.types.current,
      });
      this.addNoteForm.title = '';
      this.addNoteForm.description = '';
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