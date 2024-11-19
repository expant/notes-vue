<template>
  <div class="flex items-center justify-center w-full h-full">
    <div class="relative flex flex-col gap-[30px] w-[90%] mx-2.5 sm:mx-0 sm:w-[600px] py-5 px-7 sm:py-[30px] sm:px-[40px] bg-white rounded sm:rounded-[20px] z-20 scale-0 duration-300 animate-show-modal">
      <div 
        class="absolute top-[15px] right-[15px] w-[25px] h-[25px] cursor-pointer" 
        @click="notesStore.form.isVisible = false"
      >
        <span class="absolute top-3 w-[25px] h-px bg-black cursor-pointer -rotate-45"></span>
        <span class="absolute top-3 w-[25px] h-px bg-black cursor-pointer rotate-45"></span>
      </div>
      <h2>Новая заметка</h2>
      <form action="" class="flex flex-col gap-5">
        <div class="relative">
          <input 
            type="text" 
            placeholder="Название"
            :class="[state.title.currentErr ? 'border border-solid border-red-500' : '', 'w-full text-sm p-2 bg-[#eee] border border-solid border-[#eee] rounded break-words focus:outline-none sm:text-base sm:p-4']"
            @input="validate($event, 'title')"
          >
          <div 
            class="absolute right-[5px] bottom-[-17px] text-[13px] text-red-500" 
            v-show="state.title.currentErr"
          >{{ state.title.currentErr }}</div>
        </div>
        <div class="relative">
          <textarea
            class="resize-none"
            name="description"
            id="description"
            rows="10"
            placeholder="Описание"
            :class="[state.description.currentErr ? 'border border-solid border-red-500' : '', 'w-full text-sm p-2 bg-[#eee] border border-solid border-[#eee] rounded break-words focus:outline-none sm:text-base sm:p-4']"
            @change="validate($event, 'description')"
          ></textarea>
          <div
            class="absolute right-[5px] bottom-[-17px] text-[13px] text-red-500"
            v-show="state.description.currentErr"
          >{{ state.description.currentErr }}</div>
        </div>
        <div>
          <button
            class="py-2 px-2.5 text-sm bg-sky-600 text-white transition-all hover:bg-sky-800 sm:py-2.5 sm:px-[15px] sm:text-base"
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
import { useNotesStore } from '@/stores/store';
import { reactive } from 'vue';
const notesStore = useNotesStore();

const state = reactive({
  title: {
    errors: {
      empty: 'Название не должно быть пустым',
      exist: 'Заметка с таким именем уже существует!',
    },
    currentErr: null,
    field: '',
  },
  description: {
    errors: {
      empty: 'Описание не должно быть пустым',
    },
    currentErr: null,
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

const checkCurrentErr = (fieldName) => {
  if (state[fieldName].currentErr === null) {
    state[fieldName].currentErr = state[fieldName].errors.empty;
  }
};

const handleForm = () => {
  const { title, description } = state;
  checkCurrentErr('title');
  checkCurrentErr('description');
  if (title.currentErr || description.currentErr) {
    return;
  }

  notesStore.addNote(title.field, description.field);
  state.title.field = '';
  state.description.field = '';
}
</script>

<style scoped> 
</style>