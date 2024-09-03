<template>
  <div class="form-wrap">
    <div class="form-item">
      <div class="close" @click="notesStore.form.isVisible = false"></div>
      <h2 class="form-item__title">Новая заметка</h2>
      <form action="" class="form">
        <div class="title-field field-wrap">
          <input 
            type="text" 
            placeholder="Название"
            :class="`${state.title.currentErr ? 'invalid' : ''} field`"
            @input="validate($event, 'title')"
          >
          <div 
            class="warning-item" 
            v-show="state.title.currentErr"
          >{{ state.title.currentErr }}</div>
        </div>
        <div class="description-field field-wrap">
          <textarea 
            name="description" 
            id="description" 
            rows="10" 
            placeholder="Описание"
            :class="`${state.description.currentErr ? 'invalid' : ''} field`"
            @change="validate($event, 'description')"
          ></textarea>
          <div 
            class="warning-item" 
            v-show="state.description.currentErr"
          >{{ state.description.currentErr }}</div>
        </div>
        <div class="form-item__btn">
          <button 
            type="submit" 
            @click.prevent="handleForm"
            @submit.prevent="handleForm"
          >Добавить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useNotesStore } from '@/store';
import { reactive } from 'vue';
const notesStore = useNotesStore();

const state = reactive({
  title: {
    errors: {
      empty: 'Название не должно быть пустым',
      exist: 'Заметка с таким именем уже существует!',
    },
    currentErr: '',
    field: '',
  },
  description: {
    errors: {
      empty: 'Описание не должно быть пустым',
    },
    currentErr: '',
    field: '',
  },
})

const validate = (event, fieldName) => {
  state[fieldName].currentErr = '';
  state[fieldName].field = event.target.value.trim();

  switch (fieldName) {
    case 'title': {
      const { title } = state;
      if (!title.field) {
        state.title.currentErr = title.errors.empty;
        break;
      }
      const sameNote = notesStore.getNoteByProp(fieldName, title.field);
      if (!sameNote) return;
      state.title.currentErr = title.errors.exist;
      break;
    }
    case 'description': {
      const { description } = state;
      state.description.currentErr = description.field ? '' : description.errors.empty;
      break;
    }
    default: throw new Error(`Unknown fieldName: ${fieldName}`);
  }
};

const handleForm = () => {
  const { title, description } = state;
  if (title.currentErr || description.currentErr) {
    return;
  }

  notesStore.addNote(title.field, description.field);
  state.title.field = '';
  state.description.field = '';
}
</script>

<style scoped> 
.form-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-item {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 600px;
  padding: 30px 40px;
  background: #ffffff;
  border-radius: 20px;
  z-index: 2;
  transform: scale(0);
  transition: 0.3s;
  animation: show-modal 0.3s 1;
  animation-fill-mode: forwards;
  animation-delay: 0s;
}

@keyframes show-modal {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.form-item .close {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 25px;
  height: 25px;
  cursor: pointer;
}

.form-item .close::after,
.form-item .close::before {
  content: '';
  position: absolute;
  top: 12px;
  width: 25px;
  height: 1px;
  background: #333333;
  cursor: pointer;
}

.form-item .close::after {
  transform: rotate(45deg);
}

.form-item .close::before {
  transform: rotate(-45deg);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.field {
  width: 100%;
  font-size: 16px;
  padding: 16px;
  background: #eee;
  border: 1px solid #eee;
  border-radius: 5px;
  word-wrap: break-word;
}

.field:focus {
  outline: none;
}

textarea.field {
  resize: none;
}

.form-item__btn button {
  padding: 10px 15px;
  background: #1000ff;
  color: #fff;
  transition: all 0.1s ease;
}

.form-item__btn button:hover {
  background: #0b00b2; 
}

.field-wrap {
  position: relative;
}

.field-wrap .invalid {
  border: 1px solid #F44336;
}

.warning-item {
  position: absolute;
  right: 5px;
  bottom: -17px;
  font-size: 13px;
  color: #F44336;
}

</style>