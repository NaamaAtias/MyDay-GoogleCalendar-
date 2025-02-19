<template>
  <div class="login">
    <p>LOGIN PAGE</p>
    <p v-if="user">{{ user.userInfo.name }}</p>
    <button class="google-btn" @click="login">   
      <img :src="`${ googleLogo }`" alt="Google logo"/>
      {{ loginButtonText }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: "",
      googleLogo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIyLjU2IDEyLjI1YzAtLjc4LS4wNy0xLjUzLS4yLTIuMjVIMTJ2NC4yNmg1LjkyYy0uMjYgMS4zNy0xLjA0IDIuNTMtMi4yMSAzLjMxdjIuNzdoMy41N2MyLjA4LTEuOTIgMy4yOC00Ljc0IDMuMjgtOC4wOXoiIGZpbGw9IiM0Mjg1RjQiLz48cGF0aCBkPSJNMTIgMjNjMi45NyAwIDUuNDYtLjk4IDcuMjgtMi42NmwtMy41Ny0yLjc3Yy0uOTguNjYtMi4yMyAxLjA2LTMuNzEgMS4wNi0yLjg2IDAtNS4yOS0xLjkzLTYuMTYtNC41M0gyLjE4djIuODRDMy45OSAyMC41MyA3LjcgMjMgMTIgMjN6IiBmaWxsPSIjMzRBODUzIi8+PHBhdGggZD0iTTUuODQgMTQuMDljLS4yMi0uNjYtLjM1LTEuMzYtLjM1LTIuMDlzLjEzLTEuNDMuMzUtMi4wOVY3LjA3SDIuMThDMS40MyA4LjU1IDEgMTAuMjIgMSAxMnMuNDMgMy40NSAxLjE4IDQuOTNsMi44NS0yLjIyLjgxLS42MnoiIGZpbGw9IiNGQkJDMDUiLz48cGF0aCBkPSJNMTIgNS4zOGMxLjYyIDAgMy4wNi41NiA0LjIxIDEuNjRsMy4xNS0zLjE1QzE3LjQ1IDIuMDkgMTQuOTcgMSAxMiAxIDcuNyAxIDMuOTkgMy40NyAyLjE4IDcuMDdsMy42NiAyLjg0Yy44Ny0yLjYgMy4zLTQuNTMgNi4xNi00LjUzeiIgZmlsbD0iI0VBNDMzNSIvPjwvc3ZnPg=="
    };
  },

  computed: {
    user() { return this.$store.getters.user },
    loginButtonText() {
      if (!this.user) return "Sign in with google"
      else return "Sign in with another user"
    }
  },

  created() {},

  methods: {
    login() {
      this.$store.dispatch({ type: 'login' })
    },
  },
  components: {
  }
};
</script>

<style>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: 60vh;
  background-color: azure;
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(50%, 50%);
}
.data {
  background-color: yellow;
  width: 100%;
  height: 50%;
}
.google-btn {
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid #dadce0;
  border-radius: 4px;
  padding: 8px 16px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #3c4043;
  cursor: pointer;
  transition: background-color 0.2s, box-shadow 0.2s;
  gap: 8px;
}

.google-btn:hover {
  background-color: #f8f9fa;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.google-btn:active {
  background-color: #f1f3f4;
}

.google-btn img {
  width: 18px;
  height: 18px;
}
</style>
