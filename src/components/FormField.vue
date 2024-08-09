<template>
	<div class="add-note__title" v-if="variant === 'input'">
		<input 
			type="text" 
			placeholder="Название"
			:value="modelValue"
    	@input="returnData($event)"
		>
		<div 
			class="warning-item" 
			v-if="isEmpty || compareLength(maxLength)"
		>{{ showWarningItem(isEmpty, variant) }}</div>
	</div>
	<div class="add-note__description" v-if="variant === 'textarea'">
		<textarea 
			name="description" 
			id="description" 
			cols="30"
			rows="10" 
			placeholder="Описание"
			:value="modelValue"
    	@input="returnData($event)"
		></textarea>
		<div 
			class="warning-item" 
			v-if="isEmpty || compareLength(maxLength)"
		>{{ showWarningItem(isEmpty, variant) }}</div>
  </div>
</template>

<script>
	export default {
		props: {
			maxLength: Number,
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
		emits: ['update:modelValue', 'update-form-state'],
		methods: {
			compareLength(maxLength) {
				return this.modelValue.length > maxLength;
			},
			showWarningItem(isEmpty, variant) {
				const warningMessages = {
					input: {
						forEmpty: 'Название не должно быть пустым',
						forOverflow: `Слишком длинное название. Не более ${this.maxLength} символов`,
					},
					textarea: {
						forEmpty: 'Описание не должно быть пустым',
						forOverflow: `Слишком длинное описание. Не более ${this.maxLength} символов`,
					}
				};
				const { forEmpty, forOverflow } = warningMessages[variant];
				return isEmpty ? forEmpty : forOverflow; 
			},
			returnData(event) {
				this.$emit('update:modelValue', event.target.value);
				this.showWarningItem(this.isEmpty, this.variant);
			},
		},
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