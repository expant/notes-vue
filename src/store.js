import { defineStore } from "pinia";

export const useNotesStore = defineStore('notesStore', {
  state: () => ({
    addNoteForm: {
      title: '',
      description: '',
    },
    notes: [],
  }),
  getters: {
    showPreview() {
      return this.addNoteForm.title;
    },
  },
  actions: {
    addNote(title, description) {
      this.$state.activeNotes.push({
        title,
        description,
        id: new Date().valueOf(),
      });
    },
  }
});