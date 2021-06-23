<template>
  <div v-if="msg == 0" class="box">
    <h1 class="title">
      <br />😕 <br />
      Parece que algo deu errado
    </h1>
    <p class="content">
      Quer tentar de novo?<br />
      É facil, basta clicar nesse botão
    </p>
    <router-link :to="{ name: 'Home' }">
      <a class="button">
        <uit-signout size="38px" class="logo" color="black" />
      </a>
    </router-link>
  </div>
  <div v-else-if="msg == 1" class="box">
    <h1 class="title">
      <br />😕 <br />
      Seu Score esta muito baixo,
    </h1>
    <p class="content">
      ninguem quer te oferecer credito<br />
      tente de novo com outro CPF
    </p>
    <router-link :to="{ name: 'Home' }">
      <a class="button">
        <uit-signout size="38px" class="logo" color="black" />
      </a>
    </router-link>
  </div>
</template>

<script>
import { UitSignout } from "@iconscout/vue-unicons-thinline";
export default {
  props: {
    msg: 0
  },
  components: {
    UitSignout
  }
};
</script>

<style scoped>
* {
  margin: auto;
}

.box {
  width: 300px;
  height: 400px;
  background-color: rgba(41, 41, 41, 0.603);
  border: solid 2px rgb(0, 0, 0);
  border-radius: 20px;
  display: inline-block;
  margin: 10px;
}
.title,
.content {
  color: white;
}

.content {
  font-size: 21px;
  margin-bottom: 0px;
}

.button:hover {
  filter: invert(100%);
}
</style>
