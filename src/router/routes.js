import Books from '../components/books';
import Book from '../components/book';

export default [
  { path: '/', name: 'books', component: Books },
  { path: '/book/:bookId', name: 'book', component: Book, props: true },
];
