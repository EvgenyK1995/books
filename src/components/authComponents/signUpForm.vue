<template>
    <div class="form">
        <h3>Регистрация нового пользователя</h3>
        <div class="form__control">
            <label class="form__el-label" from="nameField">Введите Ваше имя:</label>
            <input v-model="fieldName" type="text" id="nameField" />
        </div>
        <div class="form__control">
            <label class="form__el-label" from="PasswordField">Введите пароль:</label>
            <input v-model="fieldPassword" type="password" id="PasswordField" />
        </div>
        <p>{{ message }}</p>
        <button @click="signUp">Зарегистрироваться</button>
    </div>
</template>

<script>
import ax from 'axios';
import store from '../../store/index';

export default {
  name: 'SignUpForm',
  data() {
    return {
      fieldName: null,
      fieldPassword: '',
      users: null,
      message: '',
    };
  },
  methods: {
    signUp() {
      // console.log(this.users);
      const exist = this.users.find(user => user.name === this.fieldName);

      if (exist !== undefined) {
        this.message = 'Это имя уже занято, попробуйте другое';
      } else if (this.fieldName != null) {
        ax.post('http://localhost:3000/users', { name: this.fieldName, pass: this.fieldPassword })
          .then((r) => {
            this.message = '';
            store.commit('USER_REGISTRATION', r.data.id);
            this.$emit('userRegistered');
          });
      } else {
        this.message = 'Введите пожалуйста имя!';
      }
    },
  },
  mounted() {
    ax.get('http://localhost:3000/users').then((r) => { this.users = r.data; });
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
