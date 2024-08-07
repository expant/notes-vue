<template>
	<div class="add-note__title" v-if="variant === 'input'">
		<input 
			type="text" 
			placeholder="Название"
			:value="modelValue"
    	@input="$emit('update:modelValue', $event.target.value)"
		>
		<div class="warning-item" v-if="isEmpty">Название не должно быть пустым</div>
	</div>
	<div class="add-note__description" v-if="variant === 'textarea'">
		<textarea 
			name="description" 
			id="description" 
			cols="30"
			rows="10" 
			placeholder="Описание"
			:value="modelValue"
    	@input="$emit('update:modelValue', $event.target.value)"
		></textarea>
		<div class="warning-item" v-if="isEmpty">Описание не должно быть пустым</div>
  </div>
</template>

<script>
	export default {
		props: {
			variant: {
				type: String,
				required: true,
			},
			modelValue: {
				type: String,
				required: true,
			},
			isEmpty: Boolean,
		},
		emits: ['update:modelValue'],
	}
</script>

<style>
.add-note__title,
.add-note__description {
  margin-bottom: 20px;
}

.add-note__title {
  font-weight: bold;
  font-size: 22px;
  color: #fff;
}

.add-note__title,
.add-note__title input,
.add-note__description textarea {
  width: 100%;
}

.add-note__title input,
.add-note__description textarea {
  font-size: 16px;
  padding: 16px;
  border: 0;
  border-radius: 5px;
}

.add-note__title input:focus,
.add-note__description textarea:focus {
  outline: none;
}

.add-note__description textarea {
  resize: none;
}

.warning-item {
	font-size: 12px;
	text-align: right;
	margin-top: 5px;
	color: #F44336;
}
</style>