<template>
    <div>
        <router-link :to="{ name: 'books' }">
            <button class="btn">Назад</button>
        </router-link>
        <div class="book">
            <h2><strong>{{ book.name }}</strong></h2>
            <div class="book-img"></div>
            <p><strong>Класс: </strong>{{ book.classBook }}</p>
        </div>
        <button @click="showEditPanel = !showEditPanel">Редактировать</button>
        <div v-if="showEditPanel">
            <edit-form v-on:changesOK="UpdateParams"></edit-form>
        </div>
        <div v-if="showMessage">
            {{ message }}
        </div>
    </div>
</template>
<script>
import ax from 'axios';
import editForm from './editBook';

export default {
  name: 'book',
  props: ['nameBook', 'numClassBook'],
  data() {
    return {
      book: {},
      message: 'Изменения успешно внесены',
      showMessage: false,
      showEditPanel: false,
    };
  },
  methods: {
    GetBook() {
      const id = this.$route.params.bookId;
      ax.get(`http://localhost:3000/books/${id}`)
        .then((r) => { this.book = r.data; });
    },
    UpdateParams() {
      this.GetBook();
      this.showMessage = true;
      this.showEditPanel = false;
    },
  },
  mounted() {
    this.GetBook();
  },
  components: {
    editForm,
  },
};
</script>
<style scoped>
.book {
    background-color: #e4f5ff;
    border: 1px solid #3f474f;
    border-radius: 5px;
    box-shadow: 2px 3px 5px #919191;
    height: 300px;
    margin: 10px auto;
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
.btn {
    background-color: #dbe7ff;
    border: 2px solid #8293ff;
    border-radius: 3px;
    color: #424242;
    cursor: pointer;
    font-weight: bold;
    padding: 10px 20px;
    text-transform: uppercase;
}
</style>
