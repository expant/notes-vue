import { defineStore } from "pinia";

export const useNotesStore = defineStore('notesStore', {
  state: () => ({
    activeNotes: [],
  }),
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