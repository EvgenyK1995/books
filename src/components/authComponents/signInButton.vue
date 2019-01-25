<template>
    <div class="btn">
        <button @click="showSignIn = !showSignIn">Вход</button>
        <sign-in-form v-on:userRegistered="onLogIn" v-if="showSignIn"></sign-in-form>
    </div>
</template>

<script>
import SignInForm from './signInForm';

export default {
  name: 'signInButton',
  components: { SignInForm },
  data() {
    return {
      showSignIn: false,
    };
  },
  methods: {
    onLogIn() {
      this.showSignIn = false;
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
