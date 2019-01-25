<template>
    <div>
        <div class="formEditBook">
            <div class="form-element">
                <label for="nameField">Название книги:</label>
                <input v-model="fieldName" id="nameField" type="text">
            </div>
            <div class="form-element">
                <label for="classField">Класс:</label>
                <input v-model="fieldClass" id="classField" type="text">
            </div>
            <div class="form-element">
                <button @click="EditBook">Сохранить</button>
            </div>
        </div>
    </div>
</template>
<script>
import ax from 'axios';

export default {
  name: 'editBook',
  data() {
    return {
      fieldName: '',
      fieldClass: '',
      book: {},
    };
  },
  methods: {
    EditBook() {
      const id = this.$route.params.bookId;
      ax.put(`http://localhost:3000/books/${id}`, { name: this.fieldName, classBook: this.fieldClass })
        .then(() => { this.$emit('changesOK'); });
    },
    getBook() {
      const id = this.$route.params.bookId;
      ax.get(`http://localhost:3000/books/${id}`)
        .then((r) => {
          this.book = r.data;
          this.fieldName = this.book.name;
          this.fieldClass = this.book.classBook;
        });
    },
  },
  mounted() {
    this.getBook();
  },
};
</script>
<style scoped>
.form-element {
    margin: 20px;
}
.formEditBook {
    border: 2px solid #aaa;
    border-radius: 5px;
    margin: 20px auto;
    text-align: right;
    width: 350px;
}
</style>
