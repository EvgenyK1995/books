<template>
    <div class="form">
        <h3>Вход</h3>
        <div class="form__control">
            <label class="form__el-label" from="nameField">Введите Ваше имя:</label>
            <input v-model="fieldName" type="text" id="nameField" />
        </div>
        <div class="form__control">
            <label class="form__el-label" from="PasswordField">Введите пароль:</label>
            <input v-model="fieldPassword" type="password" id="PasswordField" />
        </div>
        <p>{{ message }}</p>
        <button @click="signIn">Войти</button>
    </div>
</template>

<script>
import ax from 'axios';
import store from '../../store/index';

export default {
  name: 'signInForm',
  data() {
    return {
      fieldName: '',
      fieldPassword: '',
      users: null,
      message: '',
    };
  },
  methods: {
    signIn() {
      const exist = this.users.find(user => user.name === this.fieldName);

      if (exist && exist.pass === this.fieldPassword) {
        this.message = '';
        store.commit('USER_REGISTRATION', exist.id);
        this.$emit('userRegistered');
      } else {
        this.message = 'Неверное имя пользователя или пароль!';
      }
    },
    getUsers() {
      ax.get('http://localhost:3000/users')
        .then((r) => {
          this.users = r.data;
        });
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>

<style scoped>
.form {
    background: #d5fee9;
    border: 1px solid #484848;
    border-radius: 5px;
    box-shadow: 2px 3px 5px #919191;
    padding: 1em;
    position: absolute;
    right: 10%;
    width: 24em;
}
.form__control {
    padding: 1em;
    text-align: right;
}
</style>
