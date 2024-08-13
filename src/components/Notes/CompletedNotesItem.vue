<template>
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
  
}
</script>

<style scoped>

</style>