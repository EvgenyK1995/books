<template>
    <div class="btn">
        <button @click="showSignUp = !showSignUp">Регистрация</button>
        <sign-up-form v-on:userRegistered="onLogIn" v-if="showSignUp"></sign-up-form>
    </div>
</template>

<script>
import SignUpForm from './signUpForm';

export default {
  name: 'signUpButton',
  components: { SignUpForm },
  data() {
    return {
      showSignUp: false,
    };
  },
  methods: {
    onLogIn() {
      this.showSignUp = false;
      this.$emit('userLogined');
    },
  },
};
</script>

<style scoped>
.btn {
    position: relative;
}
</style>
