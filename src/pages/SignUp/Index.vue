<template>
  <q-page class="flex flex-center column justify-center q-px-md">
    <q-icon
     name="fas fa-chevron-left"
     size="23px"
     class="absolute-left q-ma-lg"
     color="grey"></q-icon>
    <div class="full-width column items-center justify-center">
       <q-img
        class="logo q-mb-lg"
        src="../../../src/assets/instadev-logo.svg"
      />
      <q-form @submit="onSubmit" class="full-width">
        <q-input filled v-model="name" label="Name" class="full-width q-mb-md" />
        <q-input filled v-model="email" label="E-mail" class="full-width q-mb-md" />
        <q-input filled v-model="userName" label="Username" class="full-width q-mb-md" />
        <q-input
          filled
          v-model="password"
          label="Password"
          type="password"
          class="full-width q-mb-md" />
        <q-input
          filled
          v-model="confirmPassword"
          label="Confirm Password"
          type="password"
          class="full-width" />

        <q-btn
          color="primary"
          :disable="!name || !email || !userName || !password || !confirmPassword"
          type="submit"
          label="Sign Up"
          class="sign-in-button full-width q-mt-lg"
        />
      </q-form>

      <div class="full-width row items-center justify-center q-my-xl">
        <q-separator class="separator" inset/>
        OR
        <q-separator class="separator" inset/>
      </div>

      <div class="full-width row items-center justify-center ">
        <span class="text-black-opacity">
          already have an account?
        </span>
        <a href="#" @click="goToLogin" class="link q-ml-xs">
          Sign In.
        </a>
      </div>
    </div>
    <div class="full-width column items-center absolute-bottom">
      <q-separator class="full-width"/>
      <div class="q-my-lg">
        <span class="text-black-opacity">Instagram от Facebook</span>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      name: '',
      email: '',
      userName: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    goToLogin() {
      this.$router.push({ path: 'sign-in' });
    },
    async onSubmit() {
      if (!this.userName || !this.email || !this.name || !this.password || !this.confirmPassword) {
        this.$q.notify({
          type: 'negative',
          message: 'Todos os campos são obrigatórios!',
          position: 'top',
          icon: 'warning',
        });
      }

      if (this.password !== this.confirmPassword) {
        this.$q.notify({
          type: 'negative',
          message: 'As senhas precisam ser iguais!',
          position: 'top',
          icon: 'warning',
        });
        return;
      }

      const result = await this.$store.dispatch('user/userRegister', {
        name: this.name,
        user_name: this.userName,
        password: this.password,
        email: this.email,
      });

      if (result) {
        this.$router.push({ path: 'main' });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  height: 49px;
  width: 182px;
}
.sign-in-button {
  height: 44px;
  border-radius: 5px;
  background-color: $instablue;
}
.facebook-icon {
  height: 17px;
  width: 17px;
}
.separator {
  width: 35%;
}
</style>
