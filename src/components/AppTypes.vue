<template>
  <div class="flex flex-wrap content-stretch gap-1.5 sm:gap-2.5">
    <app-notes-type-btn
      v-for="type in types.all"
      :key="type"
      :notesType="type"
      :currentType="types.current"
      btnType="available"
      @switch-type="switchType"
    ></app-notes-type-btn>
    <div class="w-full h-9 relative flex gap-[5px] sm:h-11 sm:w-auto">
      <app-notes-type-btn 
        btnType="new" 
        @clear-err-message="newTypeState.errMessage = ''"
      ></app-notes-type-btn>
      <div class="static grow-1 w-full h-full text-right sm:absolute sm:left-[46px] sm:w-auto">
        <transition name="fade">
          <input
            class="w-full text-sm px-2.5 border border-solid border-[#80CBC4] sm:w-auto sm:text-base sm:py-[5px] sm:px-2.5"
            type="text"
            name="new-type"
            id="new-type"
            placeholder="Название типа"
            :class="[types.isFormVisible ? 'active' : 'hidden', 'h-full']"
            v-if="types.isFormVisible"
            @input="validatNewType($event)"
            @change="handleNewType($event)"
          >
        </transition>
        <transition name="err-message-appearance">
          <span
            class="absolute right-0 -bottom-4 inline-block text-xs text-red-500 sm:static"
            v-if="newTypeState.errMessage"
          >{{ newTypeState.errMessage }}</span>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppNotesTypeBtn from './AppNotesTypeBtn.vue';
import { useNotesStore } from '@/stores/store';
import { storeToRefs } from 'pinia';
import { reactive } from 'vue';

const notesStore = useNotesStore();
const { types, controlMenu, currentNote } = storeToRefs(notesStore);

const MAX_TYPE_LENGTH = 40;

const newTypeState = reactive({
  errMessage: '',
  isNewTypeValid: false,
});

const validatNewType = (event) => {
  newTypeState.isNewTypeValid = false;
  newTypeState.errMessage = '';
  const value = event.target.value.trim();
  if (!value) {
    newTypeState.errMessage = 'Пустое название';
    return;
  }

  if (notesStore.types.all.includes(value)) {
    newTypeState.errMessage = 'Такой тип уже есть'
    return;
  }

  if (value.length > MAX_TYPE_LENGTH) {
    newTypeState.errMessage = 'Длинное название. Максим 40 символов!';
    return;
  }

  newTypeState.isNewTypeValid = true;
};

const handleNewType = (event) => {
  if (!newTypeState.isNewTypeValid) return;

  const value = event.target.value.trim();
  notesStore.addNotesType(value);
  newTypeState.errMessage = '';
  event.target.value = '';
}

const switchType = (type) => {
  types.value.current = type;
  currentNote.value.active = false;
  controlMenu.value.active = false;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>