<template>
    <button @click="logOut">Выйти</button>
</template>

<script>
export default {
  name: 'logOutButton',
  methods: {
    logOut() {
      this.$emit('userLogout');
    },
  },
};
</script>

<style scoped>

</style>
