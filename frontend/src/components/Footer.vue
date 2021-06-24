<template>
  <footer class="footer">
    <a class="link" href="https://github.com/LucaGuidoRegolini/Credito"
      >LucaGuidoRegolini/Credito
      <UilGithub size="38px" class="logo" color="white" />
    </a>
  </footer>
</template>

<script>
import { UilGithub } from "@iconscout/vue-unicons";
export default {
  components: {
    UilGithub
  }
};
</script>

<style scoped>
.footer {
  width: 100%;
  height: 100px;
  background-color: black;

  display: flex;
  align-items: center;
  justify-items: end;
}

.link {
  margin-left: 25px;
  color: white;
  text-decoration: none;
}

.link:hover {
  filter: brightness(60%);
}
</style>
