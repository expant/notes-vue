<template>
  <div class="form-wrap">
    <div class="form-item">
      <div class="close" @click="notesStore.form.isVisible = false"></div>
      <h2 class="form-item__title">Новая заметка</h2>
      <form>
        <div class="title-field">
        <input 
          type="text" 
          placeholder="Название"
          v-model="notesStore.addNoteForm.title"
        >
        </div>
        <div class="description-field">
          <textarea 
            name="description" 
            id="description" 
            cols="30"
            rows="10" 
            placeholder="Описание"
            v-model="notesStore.addNoteForm.description"
          ></textarea>
        </div>
        <div class="form-item__btn">
          <button 
            type="submit" 
            @click.prevent="notesStore.addNote"
          >Добавить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useNotesStore } from '@/store';
const notesStore = useNotesStore();
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

.form-item__footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
}

.modal-item__btns {
  margin-top: auto;
}

.modal-item__btns .completed,
.modal-item__btns .remove {
  font-weight: 400;
  font-size: 18px;
  padding: 12px 17px;
  border-radius: 5px;
  border: 1px solid #1000ff;
  cursor: pointer;
}

.modal-item__btns .completed {
  margin-right: 13px;
  color: #ffffff;
  background: #1000ff;
}

.modal-item__btns .remove {
  color: #1000ff;
  background: #ffffff;
}

.title-field input,
.description-field textarea {
  width: 100%;
  font-size: 16px;
  padding: 16px;
  background: #eee;
  border: 0;
  border-radius: 5px;
  word-wrap: break-word;
}

.title-field input:focus,
.description-field textarea:focus {
  outline: none;
}

.description-field textarea {
  margin: 10px 0;
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
</style>