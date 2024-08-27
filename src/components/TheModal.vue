<template>
  <div class="modal-wrap">
    <div class="modal-item">
      <h2 class="modal-item__title">{{ notesStore.modal.title }}</h2>
      <p class="modal-item__description">{{ notesStore.modal.description }}</p>
      <footer class="modal-item__footer">
        <div class="modal-item__btns">
          <button 
            class="remove" 
            @click="notesStore.removeNote(notesStore.modal.noteId)"
          >Удалить</button>
        </div>
      </footer>
      <div class="close" @click="notesStore.modal.isVisible = false"></div>
    </div>
  </div>
</template>

<script setup>
import { useNotesStore } from '@/store';
const notesStore = useNotesStore();
</script>

<style scoped> 
.modal-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-item {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 600px;
  height: 495px;
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

.modal-item__title,
.modal-item__description {
  font-size: 20px;
}

.modal-item__title {
  font-weight: 500;
  color: #1000ff;
}

.modal-item__description {
  font-weight: 200;
  word-wrap: break-word;
}

.modal-item .close {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 25px;
  height: 25px;
  cursor: pointer;
}

.modal-item .close::after,
.modal-item .close::before {
  content: '';
  position: absolute;
  top: 12px;
  width: 25px;
  height: 1px;
  background: #333333;
  cursor: pointer;
}

.modal-item .close::after {
  transform: rotate(45deg);
}

.modal-item .close::before {
  transform: rotate(-45deg);
}

.modal-item__footer {
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
</style>