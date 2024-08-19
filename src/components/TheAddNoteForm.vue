<template>
  <div class="side-bar__add-note">
    <h3 class="add-note__title">Добавить заметку</h3>
    <form class="add-note__form">
      <div class="add-note__title">
        <input 
          type="text" 
          placeholder="Название"
          v-model.trim="addNoteForm.title"
        >
        <!-- <div 
          class="warning-item" 
          v-if="isEmpty || compareLength(maxLength)"
        >{{ showWarningItem(isEmpty, variant) }}</div> -->
      </div>
      <div class="add-note__description">
        <textarea 
          name="description" 
          id="description" 
          cols="30"
          rows="10" 
          placeholder="Описание"
          v-model.trim="addNoteForm.description"
        ></textarea>
        <!-- <div 
          class="warning-item" 
          v-if="isEmpty || compareLength(maxLength)"
        >{{ showWarningItem(isEmpty, variant) }}</div> -->
      </div>
      <button 
        class="add-note__btn"
        type="submit" 
        @click.prevent="run"
        @submit.prevent="run"
      >Добавить</button>
    </form>
  </div>
</template>

<script setup>
import { useNotesStore } from '@/store';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const notesStore = useNotesStore();
const { addNoteForm } = storeToRefs(notesStore);

const isFormValid = () => {
  const { title, description } = addNoteForm.value;

  if (!title || !description) {
    return false;
  }
  return true;
};

const showWarnings = () => {
  console.log('Форма не валидна');
};

const run = computed(() => 
  isFormValid() ? notesStore.addNote() : showWarnings()
);

</script>

<style scoped>
.add-note__form {
  display: flex;
  flex-direction: column;
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

.add-note__title,
.add-note__title input,
.add-note__description textarea {
  width: 100%;
}

.add-note__title input,
.add-note__description textarea {
  font-size: 16px;
  padding: 16px;
  border: 0;
  border-radius: 5px;
}

.add-note__title input:focus,
.add-note__description textarea:focus {
  outline: none;
}

.add-note__description textarea {
  resize: none;
}

.warning-item {
	font-size: 12px;
	text-align: right;
	margin-top: 5px;
	color: #F44336;
}

.add-note__btn {
  font-size: 16px;
  border: 0;
  border-radius: 5px;
}

.add-note__btn {
  width: 114px;
  font-size: 16px;
  padding: 12px 18px;
  background: #ffffff;
  color: #333333;
  cursor: pointer;
}
</style>