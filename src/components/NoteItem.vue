<template>
  <li class="notes-item" v-if="type === 'active'">
    <span class="title" @click="$emit('show-modal', id)">{{ title }}</span>
    <div class="remove-note" @click="$emit('remove-note', id, 'active')">
    </div>
  </li>
  <li class="notes-item prep" v-if="type === 'preparatory'">
    <span class="title">{{ title }}</span>
    <div class="remove-note">
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

</style>