<template>
	<div class="add-note__title" v-if="variant === 'input'">
		<input 
			type="text" 
			placeholder="Название"
			:value="modelValue"
    	@input="$emit('update:modelValue', $event.target.value)"
		>
		<!-- <span class="warning-item">Название не должно быть пустым</span> -->
	</div>
	<div class="add-note__description" v-if="variant === 'textarea'">
		<textarea 
			name="description" 
			id="description" 
			cols="30" 
			rows="10" 
			placeholder="Описание"
		></textarea>
		<!-- <span class="warning-item">Описание не должно быть пустым</span> -->
  </div>
</template>

<script>
	export default {
		props: {
			variant: String,
			modelValue: String,
		},
		emits: ['update:modelValue'],
	}
</script>

<style>

</style>