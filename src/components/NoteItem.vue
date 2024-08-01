<template>
  <li>
    <span 
      class="note-text" 
      v-if="!isEditing" 
      @click="activateEditing(id)"
    >
      {{ title }}
    </span>
    <input
      class="note-text-input" 
      v-else 
      @blur="prepareForEditing(id, $event)"
      @keypress.enter="prepareForEditing(id, $event)"
      ref="inputForEditing"
      type="text"
      :value="title"
    >
    <button class="note-delete" @click="$emit('remove-note', id)">Удалить</button>
  </li>
</template>

<script>
export default {
  props: {
    title: String,
    id: Number,
    isEditing: Boolean,
  },
  methods: {
    prepareForEditing(id, event) {
      const title = event.target.value.trim();
      this.$emit('edit-note', id, title);
    },
    activateEditing(id) {
      this.$emit('activate-editing', id);
    },
  },
  mounted() {
    if (this.$refs.inputForEditing) {
      this.$refs.inputForEditing.focus();
    }
    
  }
}
</script>

<style>
.note-delete {
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  background-clip: padding-box;
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  padding: 5px 15px;
}

</style>