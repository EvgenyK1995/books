<template>
    <div>
        <button @click="showFormAddBook = !showFormAddBook">Добавить книгу</button><br />
        <div class="formAddBook" v-if="showFormAddBook">
            <div class="form-element">
                <label for="nameField">Название книги:</label>
                <input v-model="formFieldName" id="nameField" type="text">
            </div>
            <div class="form-element">
                <label for="classField">Класс:</label>
                <input v-model="formFieldClass" id="classField" type="text">
            </div>
            <div class="form-element">
                <button @click="AddBook">Добавить</button>
            </div>
        </div>
        <div v-for="item in books" :key="item.id" class="book">
            <h2 class="bookName"><strong>{{ item.name }}</strong></h2>
            <div class="book-img"></div>
            <p><strong>Класс: </strong>{{ item.classBook }}</p>
            <router-link :to="{ name: 'book',
                                params: { bookId: item.id,
                                          nameBook: item.name,
                                          numClassBook: item.classBook
            }}">
                подробнее
            </router-link>
            <button @click="DeleteBook(item.id)">удалить</button>
        </div>
    </div>
</template>
<script>
import ax from 'axios';

export default {
  name: 'books',
  data() {
    return {
      books: null,
      showFormAddBook: false,
      formFieldName: '',
      formFieldClass: '',
    };
  },
  methods: {
    AddBook() {
      ax.post('http://localhost:3000/books', { name: this.formFieldName, classBook: this.formFieldClass })
        .then(() => {
          this.formFieldName = '';
          this.formFieldClass = '';
          this.showFormAddBook = false;
          this.UpdateBooks();
        });
    },
    UpdateBooks() {
      ax.get('http://localhost:3000/books')
        .then((r) => { this.books = r.data; });
    },
    DeleteBook(id) {
      ax.delete(`http://localhost:3000/books/${id}`)
        .then(() => this.UpdateBooks());
    },
  },
  mounted() {
    this.UpdateBooks();
  },
};
</script>
<style scoped>
.book {
    background-color: #e4f5ff;
    border: 1px solid #3f474f;
    border-radius: 5px;
    box-shadow: 2px 3px 5px #919191;
    display: inline-block;
    height: 300px;
    margin: 10px;
    width: 300px;
}
.book-img {
    background-color: #ccc;
    border: 1px solid #000;
    border-radius: 2px;
    height: 150px;
    margin: 0 auto;
    width: 150px;
}
.bookName {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.form-element {
    margin: 20px;
}
.formAddBook {
    border: 2px solid #aaa;
    border-radius: 5px;
    margin: 20px auto;
    text-align: right;
    width: 350px;
}
</style>
