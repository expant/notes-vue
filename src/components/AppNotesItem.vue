<template>
  <li class="notes-item note" v-if="notesType === 'active'">
    <span class="title" @click="$emit('show-modal')">{{ title }}</span>
    <div class="remove-note" @click="$emit('remove-note')">
    </div>
  </li>
  <!-- <li class="notes-item prep" v-if="notesType === 'active'">
    <span class="title">{{ title }}</span>
    <div class="remove-note">
    </div>
  </li> -->
  <li class="completed-note note" v-if="notesType === 'completed'">
    <span class="completed-note__title">{{ title }}</span>
    <div class="completed-note__return" @click="$emit('change-note-type')">
      <svg 
        width="20px" 
        height="20px"
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.9998 8L6 14L12.9998 21" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div 
      class="completed-note__remove" 
      @click="$emit('remove-note', id)"
    >
      <svg 
        width="20px" 
        height="20px" 
        viewBox="-0.5 0 25 25 " 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 21.32L21 3.32001" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 3.32001L21 21.32" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </li>
</template>

<script setup>
const emits = defineEmits(['remove-note', 'show-modal', 'change-note-type']);
const props = defineProps({
  notesType: {
    type: String,
    default: 'prep',
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.note {
  opacity: 0;
  transition: 0.5s;
  animation: show-note 0.5s 1;
  animation-fill-mode: forwards;
  animation-delay: 0s;
}

@keyframes show-note {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.notes-item {
  display: flex;
  justify-content: space-between;
  width: 300px;
  /* background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(16,0,255,1) 0%, rgba(238,238,238,1) 78%); */
  /* border: 1px solid #333; */
  background: rgb(2,0,36);
  background: linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(16,0,255,1) 0%, rgba(238,238,238,1) 73%); 
  border-radius: 5px;
  transform: translateX(0px);
  transition: all ease-in-out 0.1s;
}

.notes-item:hover {
  transform: translateX(-5px);
}

.notes-item .title {
  display: inline-block;
  width: 230px;
  font-weight: 400;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 15px;
  color: #fff;
}

.remove-note {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  background: #eee;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: transform ease-in 0.1s;
}

.remove-note::after,
.remove-note::before {
  content: '';
  position: absolute;
  width: 25px;
  height: 1px;
  background: #333;
}

.remove-note::after {
  transform: rotate(45deg);
}

.remove-note::before {
  transform: rotate(-45deg);
}

.prep {
  opacity: 50%;
}

.completed-note {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 300px;
  list-style-type: none;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  transition: all ease-in 0.1s;
}

.completed-note:hover {
  background: #eeeeee;
}

.completed-note__title,
.completed-note__return,
.completed-note__remove {
  padding: 10px;
}

.completed-note__return,
.completed-note__remove  {
  background: #eeeeee;
}

.completed-note__title {
  flex: 0 0 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: auto;
}

.completed-note__return,
.completed-note__remove {
  transition: background ease-out 0.1s;
}

.completed-note__remove {
  border-radius: 0 5px 5px 0;
}

.completed-note__return:hover {
  cursor: pointer;
  background: #9ACD32;
}

.completed-note__remove:hover {
  cursor: pointer;
  background: #FF0000;
}

</style>