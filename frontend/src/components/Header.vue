<template>
  <div class="Header" :class="mode">
    <h2 class="title">{{ words }}</h2>
    <h2 class="score">{{ score }}</h2>
    <div class="space"></div>
    <router-link :to="{ name: 'Home' }">
      <a class="button">
        <uit-signout size="38px" class="logo" color="white" />
      </a>
    </router-link>
  </div>
</template>

<script scoped>
import { UitSignout } from "@iconscout/vue-unicons-thinline";
export default {
  props: {
    score: "",
    mode: "",
    name: ""
  },
  components: {
    words: "",
    UitSignout
  },
  created() {
    this.adapt();
  },
  methods: {
    adapt() {
      if (this.mode == "user") this.words = "Score: ";
      if (this.mode == "agency") this.words = this.name;
    }
  }
};
</script>

<style scoped>
.agency {
  background: linear-gradient(340.63deg, #000000 -32.27%, #7621cc 52.81%),
    #00bfff;
}

.user {
  background: linear-gradient(340.63deg, #000000 -32.27%, #2488ed 52.81%),
    #00bfff;
}

.Header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
}

.title {
  color: white;
  margin-left: 20px;
  font-size: 28px;
}

.score {
  color: rgb(158, 4, 4);
  margin-left: 20px;
  font-weight: bolder;
  font-size: 28px;
}

.button:hover {
  filter: brightness(80%);
}
</style>
