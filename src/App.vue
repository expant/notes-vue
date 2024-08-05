<template>
  <div class="container">
    <div class="side-bar">
      <h1 class="side-bar__title">Список заметок</h1>
      <div class="line"></div>
      <div class="side-bar__add-note">
        <h3 class="add-note__title">Добавить заметку</h3>
        <form class="add-note__form">
          <input type="text" placeholder="Название">
          <textarea name="description" id="description" cols="30" rows="10" placeholder="Описание"></textarea>
          <button class="add-note__btn">Добавить</button>
        </form>
      </div>
    </div>
    <div class="main">

    </div>
  </div>

  <!-- <h1 class="notes__title">Список заметок</h1>
  <form 
    class="notes__form"
    action="#" 
    @submit.prevent="addNewNote"
  >
    <input 
      class="form__title"
      type="text" 
      placeholder="Добавить заметку"
      v-model="inputValue"
    >
    <textarea class="form__description" name="description" id="description"></textarea>
    <button class="form__btn" role="button">Добавить</button>
  </form> 
  <div class="notes__main" v-if="notes.length !== 0">
    <div class="count">Кол-во заметок: {{ notes.length }}</div>
    <ul class="items">
      <NoteItem
        v-for="note in notes"
        :key="note.id"
        :title="note.title"
        :id="note.id"
        :is-editing="note.isEditing"
        @remove-note="removeNote"
        @activate-editing="activateEditing"
        @edit-note="editNote"
      />
    </ul>
  </div>
  <div class="notes__empty" v-else>Заметок нет</div> -->
</template>

<script>
// import NoteItem from './components/NoteItem.vue';

// export default {
//   data() {
//     return {
//       inputValue: '',
//       notes: [],
//       firstId: 0,
//     }
//   },
//   methods: {
//     inputChangeHandler(event) {
//       this.inputValue = event.target.value;
//     },
//     addNewNote() {
//       if (!this.inputValue.trim()) {
//         return;
//       }
//       // const description = {
//       //   text: 
//       // }
//       this.notes.push({
//         title: this.inputValue,
//         id: this.firstId,
//         isEditing: false,
//       });
//       this.inputValue = '';
//       this.firstId += 1;
//     },
//     removeNote(id) {
//       this.notes = this.notes.filter((note) => note.id !== id);
//     },
//     activateEditing(id) {
//       this.notes = this.notes.map((note) => {
//         if (note.id !== id) return note;
//         return { ...note, isEditing: true };
//       });
//     },
//     editNote(id, title) {
//       this.notes = this.notes.map((note) => {
//         if (note.id !== id) return note;
//         if (!title) return { ...note, isEditing: false };
//         return { id, title, isEditing: false };
//       });
//     }
//   },
//   components: {
//     NoteItem
//   }
// };
</script>

<style scoped>
.container {
  display: flex;
}

.side-bar {
  height: 100vh;
  padding: 30px;
  background: #333333;
}

.side-bar__title {
  font-weight: 200;
  font-size: 40px;
  margin-bottom: 77px;
  color: #fff;
}

.line {
  height: 1px;
  width: 100%;
  position: absolute;
  top: 90px;
  left: 30px;
  background: #fff;
}

.add-note__title {
  font-weight: bold;
  font-size: 22px;
  color: #fff;
}

.add-note__form {
  display: flex;
  flex-direction: column;
}

.add-note__title,
.add-note__form input,
.add-note__form textarea {
  margin-bottom: 20px;
}

.add-note__form input,
.add-note__form textarea,
.add-note__btn {
  font-size: 16px;
  border: 0;
  border-radius: 5px;
}

.add-note__form input,
.add-note__form textarea {
  padding: 16px;
}

.add-note__form input:focus,
.add-note__form textarea:focus,
.add-note__btn:focus {
  outline: none;
}

.add-note__form textarea {
  resize: none;
}

.add-note__btn {
  width: 114px;
  font-size: 16px;
  padding: 12px 18px;
  background: #ffffff;
  color: #333333;
  cursor: pointer;
}

/* .notes__form {
  margin: 30px 0;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
}

.form__title {
  font-size: 16px;
  flex: 0 1 315px;
  padding: 5px 5px;
  border: 0;
  border-bottom: 1px solid #fa6400;
}

.form__title:focus {
  outline: 0;
}

.form__description {
  height: auto;
}

.form__btn {
  align-items: center;
  background-clip: padding-box;
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}

.form__btn:hover,
.form__btn:focus {
  background-color: #fb8332;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

.form__btn:hover {
  transform: translateY(-1px);
}

.count {
  margin-bottom: 10px;
  color: #4DB6AC;
}

.items {
  list-style-type: none;
}

.items li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 20px;
  border: 1px solid #fb8332;
  border-radius: 5px;
}

.notes__empty {
  color: #4DB6AC;
} */

</style>
