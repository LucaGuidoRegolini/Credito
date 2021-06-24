<template>
  <div class="Home">
    <div class="card">
      <div class="user">
        <h3 class="title">Entrar como cliente</h3>
        <input
          id="cpf"
          class="input"
          placeholder="CPF"
          v-mask="{ mask: '999.999.999-99', greedy: true }"
          v-model="id"
        />
        <Button
          buttonstyle="continue"
          @activated="user()"
          class="btn-confg"
          type="button"
          text="Continuar"
        />
      </div>
      <div class="agency">
        <h3 class="title">Entrar como agencia</h3>
        <input
          id="name"
          class="input"
          placeholder="Nome agencia"
          v-model="name"
        />
        <Button
          buttonstyle="continue"
          @activated="agency()"
          class="btn-confg"
          type="button"
          text="Continuar"
        />
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api/api";
import Button from "../components/Button";
export default {
  components: {
    Button
  },
  data() {
    return {
      id: "",
      name: ""
    };
  },
  methods: {
    delete() {
      localStorage.removeItem("user");
      localStorage.removeItem("agency");
    },
    async user() {
      const elemento = document.getElementById("cpf");
      try {
        const resp = await api.get("/" + this.id);
        const score = resp.data.score.score;
        localStorage.setItem(
          "user",
          JSON.stringify({
            score,
            id: this.id,
            mode: "user"
          })
        );
        elemento.classList.remove("error");
        this.$router.push({ name: "User" });
      } catch (error) {
        elemento.classList.add("error");
      }
    },

    async agency() {
      const elemento = document.getElementById("name");
      if (elemento.value == "") {
        elemento.classList.add("error");
      } else {
        localStorage.setItem(
          "agency",
          JSON.stringify({
            name: this.name,
            mode: "agency"
          })
        );
        elemento.classList.remove("error");
        this.$router.push({ name: "User" });
      }
    }
  },
  beforeMount() {
    this.delete();
  }
};
</script>

<style scoped>
.Home {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
}

.card {
  min-width: 300px;
  width: 50%;
  height: 400px;
}

.user {
  width: 100%;
  height: 50%;
  background: #2488ed;
  border-radius: 8px 8px 0 0;
}

.agency {
  width: 100%;
  height: 50%;
  background: #7621cc;
  border-radius: 0 0 8px 8px;
}

.title {
  margin: 20px;
  color: azure;
  font-weight: bolder;
}

.input {
  border-radius: 10px;
  width: 50%;
  color: black;
  text-align: center;
  font-size: 23px;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
}

.error {
  border: 2px solid red;
}

.btn-confg {
  margin: 10px;
}
</style>
