<template>
	<div class="add-note__title" v-if="field === 'title'">
		<input type="text" placeholder="Название">
		<warning-item 
			v-if="!ui.addNoteForm.title.isEmpty"
		>Название не должно быть пустым</warning-item>
	</div>
	<div class="add-note__description" v-if="field === 'description'">
		<textarea 
			name="description" 
			id="description" 
			cols="30" 
			rows="10" 
			placeholder="Описание"
		></textarea>
		<warning-item
			v-if="!ui.addNoteForm.description.isEmpty"
		>Описание не должно быть пустым</warning-item>
  </div>
</template>

<script>
	export default {
		props: {
			field: String,
		},
		methods: {
			validateForm() {
      const title = this.addNoteForm.title.field;
      const description = this.addNoteForm.description.field;
      this.addNoteForm.title.isEmpty = title.trim()  ? false : true;
      this.addNoteForm.description.isEmpty = description.trim() ? false : true;
      if () {
        
      }
    },
		}
	}
</script>

<style>

</style>