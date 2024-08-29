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
        :errMessage="typesState.errMessage"
        @clear-err-message="typesState.errMessage = ''"
      ></app-notes-type-btn>
      <transition name="fade">
        <div class="note-type-input">
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
          <span
            class="exist"
            v-if="typesState.errMessage"
          >{{ typesState.errMessage }}</span>
        </div>
      </transition>
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
const typesState = reactive({
  newTypeName: '',
  isTypeExist: false,
  errMessage: '',
  isNewTypeValid: false,
});
const MAX_TYPE_LENGTH = 40;

const validatNewType = (event) => {
  typesState.isNewTypeValid = false;
  typesState.errMessage = '';
  const value = event.target.value.trim();
  if (!value) {
    typesState.errMessage = 'Пустое название';
    return;
  }

  if (notesStore.types.all.includes(value)) {
    typesState.errMessage = 'Такой тип уже есть'
    return;
  }

  if (value.length > MAX_TYPE_LENGTH) {
    typesState.errMessage = 'Длинное название. Максим 40 символов!';
    return;
  }

  typesState.isNewTypeValid = true;
};

const handleNewType = (event) => {
  if (!typesState.isNewTypeValid) return;

  const value = event.target.value.trim();
  notesStore.addNotesType(value);
  typesState.errMessage = '';
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

.notes-type-btns__new .exist {
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
</style>