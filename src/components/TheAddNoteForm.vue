<template>
  <div class="side-bar__add-note">
    <h3 class="add-note__title">Добавить заметку</h3>
    <form class="add-note__form">
      <div class="add-note__title">
        <input 
          type="text" 
          placeholder="Название"
          @input="validateTitle($event)"
        >
        <div 
          class="warning-item" 
          v-show="errMessages.title"
        >{{ errMessages.title }}</div>
      </div>
      <div class="add-note__description">
        <textarea 
          name="description" 
          id="description" 
          cols="30"
          rows="10" 
          placeholder="Описание"
        ></textarea>
        <!-- <div 
          class="warning-item" 
          v-if="isEmpty || compareLength(maxLength)"
        >{{ showWarningItem(isEmpty, variant) }}</div> -->
      </div>
      <button 
        class="add-note__btn"
        type="submit" 
        @click.prevent="handleForm"
        @submit.prevent="handleForm"
      >Добавить</button>
    </form>
  </div>
</template>

<script setup>
import { useNotesStore } from '@/store';
import { computed, reactive } from 'vue';

const notesStore = useNotesStore();

// const form = reactive({
//   title: '',
//   description: '',
// });

const errMessages = reactive({
  title: '',
  description: '',
});

const validateTitle = (event) => {
  console.log('Запускается');
  errMessages.title = '';
  const value = event.target.value.trim();

  if (!value) {
    errMessages.title = 'Название не должно быть пустым';
    return;
  }

  const sameNote = notesStore.getNoteByProp('title', value);
  if (!sameNote) return;
  errMessages.title = 'Заметка с таким именем уже существует!';
};

// const validateDescription = () => {
//   errMessages.description = '';

//   if (addNoteForm.value.description) return;
//   errMessages.title = 'Название не должно быть пустым';
// };

const handleForm = () => {
  const { title, description } = errMessages;
  const isValid = !title && !description; 

  if (!isValid) {
    console.log('Форма не валидна');
    return;
  }
  notesStore.addNote();
}

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
	font-size: 13px;
	text-align: right;
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