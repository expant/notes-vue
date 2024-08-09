<template>
  <li class="notes-item" v-if="type === 'active'">
    <span class="title" @click="$emit('show-modal', id)">{{ title }}</span>
    <div class="remove-note" @click="$emit('remove-note', id, 'active')">
    </div>
  </li>
  <li   
        class="completed-note"
        v-for="note in notes" 
        :key="note.id" 
        :id="note.id"
      >
        <span class="completed-note__title">{{ note.title }}</span>
        <div class="completed-note__return" @click="$emit('return-to-active', note)">
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
          @click="$emit('remove-note', note.id, 'completed')"
        >
          <svg 
            width="20px" 
            height="20px" 
            viewBox="-0.5 0 25 25" 
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
</style>