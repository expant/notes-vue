<template>
  <div class="notes-type-btns">
    <app-notes-type-btn
      v-for="type in types.all"
      :key="type"
      :notesType="type"
      :currentType="types.current"
      btnType="available"
      @switch-type="switchType"
    ></app-notes-type-btn>
    <div class="notes-type-btns__new">
      <app-notes-type-btn 
        btnType="new" 
        @clear-err-message="newTypeState.errMessage = ''"
      ></app-notes-type-btn>
      <div class="note-type-input">
        <transition name="fade">
          <input
            type="text"
            name="new-type"
            id="new-type"
            placeholder="Название типа"
            :class="types.isFormVisible ? 'active' : 'hidden'"
            v-if="types.isFormVisible"
            @input="validatNewType($event)"
            @change="handleNewType($event)"
          >
        </transition>
        <transition name="err-message-appearance">
          <span
            class="err-message"
            v-if="newTypeState.errMessage"
          >{{ newTypeState.errMessage }}</span>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppNotesTypeBtn from './AppNotesTypeBtn.vue';
import { useNotesStore } from '@/store';
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
.notes-type-btns {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
}

.notes-type-btns__new {
  position: relative;
  display: flex;
  gap: 5px;
  height: 40px;
}

.note-type-input,
.notes-type-btns__new input {
  height: 100%;
}

.note-type-input {
  position: absolute;
  left: 46px;
  text-align: right;
}

.notes-type-btns__new input {
  padding: 5px 10px;
  border: 1px solid #80CBC4;
  color: #333;
}

.notes-type-btns__new .err-message {
  display: inline-block;
  font-size: 13px;
  color: #F44336;
}

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

.err-message-appearance-enter-active {
  animation: err-message 0.3s;
}

@keyframes err-message {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>