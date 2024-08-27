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
      <app-notes-type-btn btnType="new"></app-notes-type-btn>
      <transition name="fade">
        <input
          type="text"
          name="new-type"
          id="new-type"
          placeholder="Название типа"
          :class="types.isFormVisible ? 'active' : 'hidden'"
          v-if="types.isFormVisible"
          @change="handleNewType($event)"
        >
      </transition>
      <span v-if="typesState.isTypeExist" class="exist">Тип с таким именем уже существует</span>
    </div>
  </div>
</template>

<script setup>
import AppNotesTypeBtn from './AppNotesTypeBtn.vue';
import { useNotesStore } from '@/store';
import { storeToRefs } from 'pinia';
import { reactive } from 'vue';

const notesStore = useNotesStore();
const { types, controlMenu } = storeToRefs(notesStore);
const typesState = reactive({
  newTypeName: '',
  isTypeExist: false,
});

const handleNewType = (event) => {
  if (notesStore.types.all.includes(event.target.value)) {
    typesState.isTypeExist = true;
    return;
  }

  typesState.isTypeExist = false;
  notesStore.addNotesType(event.target.value);
  event.target.value = '';
};

const switchType = (type) => {
  types.value.current = type;
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

.notes-type-btns__new .exist {
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 14px;
  color: #F44336;
}

.notes-type-btns__new input {
  padding: 5px 10px;
  border: 1px solid #80CBC4;
  color: #333;
  position: absolute;
  left: 46px;
  height: 100%;
  /* transition: 0.2s;
  animation: show-new-type-input 0.2s 1;
  animation-fill-mode: forwards;
  animation-delay: 0s; */
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