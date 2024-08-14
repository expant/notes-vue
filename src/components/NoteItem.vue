<template>
  <li class="notes-item" v-if="type === 'active'">
    <span class="title" @click="$emit('show-modal', id)">{{ title }}</span>
    <div class="remove-note" @click="$emit('remove-note', id, 'active')">
    </div>
  </li>
  <li class="notes-item preparatory" v-if="type === 'preparatory'">
    <span class="title">{{ title }}</span>
    <div class="remove-note">
    </div>
  </li>
  <li class="completed-note" v-if="type === 'completed'">
    <span class="completed-note__title">{{ title }}</span>
    <div class="completed-note__return" @click="$emit('return-to-active', id)">
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
      @click="$emit('remove-note', id, 'completed')"
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

<script>
export default {
  emits: [
    'remove-note', 
    'show-modal', 
    'return-to-active',
  ],
  // inject: ['notes', 'modal'],
  props: {
    title: String,
    description: String,
    id: Number,
    type: String,
  },
}
</script>

<style>
.notes-item {
  display: flex;
  justify-content: space-between;
  width: 300px;
  background: #ffffff;
  border: 1px solid #333;
  border-radius: 5px;
}

.notes-item .title {
  display: inline-block;
  width: 250px;
  font-weight: 200;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 15px;
  color: #333;
}

.remove-note {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  background: #333;
  cursor: pointer;
  transition: transform ease-in 0.1s;
}

.remove-note::after,
.remove-note::before {
  content: '';
  position: absolute;
  width: 25px;
  height: 1px;
  background: #D9D9D9;
}

.remove-note::after {
  transform: rotate(45deg);
}

.remove-note::before {
  transform: rotate(-45deg);
}

.preparatory {
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