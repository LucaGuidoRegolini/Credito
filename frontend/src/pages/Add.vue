<template>
  <div>
    <Header :mode="mode" :name="name" />
    <form @submit.prevent="grava()" onselectstart="return false">
      <div>
        <label for="name">Valor do emprestimo:</label>
        <input type="text" id="name" v-model="max" />
      </div>
      <div>
        <label for="mail">Juros:</label>
        <input type="email" id="mail" v-model="fees" />
      </div>
      <div>
        <label for="mail">Score minimo:</label>
        <input type="email" id="mail" v-model="score" />
      </div>

      <div class="button">
        <Button
          buttonstyle="return"
          @activated="lost()"
          class="btn-confg"
          type="button"
          text="Voltar"
        />
        <Button
          buttonstyle="continue"
          @activated="create()"
          class="btn-confg"
          type="button"
          text="Continuar"
        />
      </div>
    </form>
  </div>
</template>

<script>
import Header from "../components/Header";
import Button from "../components/Button";
import backend from "../api/backend";
export default {
  components: {
    Header,
    Button
  },
  data() {
    return {
      name: "",
      fees: "",
      max: "",
      score: ""
    };
  },
  beforeMount() {
    this.foundData();
  },
  methods: {
    foundData() {
      const agency = JSON.parse(localStorage["agency"]);
      this.mode = agency.mode;
      this.score = "";
      this.name = agency.name;
    },

    lost() {
      this.$router.push({ name: "User" });
    },
    async create() {
      const resp = await backend.post("/offer", {
        min_score: this.score,
        max_loan: this.max,
        interest_rate: this.fees,
        financial_agency: this.name
      });
      if ((resp.data.sucess = true)) {
        alert("Oferta de credito criada");
      } else {
        alert("Algo deu errado, tente de novo mais tarde");
      }
      this.$router.push({ name: "User" });
    }
  }
};
</script>

<style scoped>
form {
  margin: 0 auto;
  width: 400px;

  margin-top: 20px;

  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
  color: white;
  background-color: #7621cc;
}

form div + div {
  margin-top: 1em;
}

label {
  display: inline-block;
  width: 300px;
  text-align: center;
}

input {
  font: 1em sans-serif;
  width: 300px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #999;
  border-radius: 8px;
  text-align: center;
}

input:focus {
  border-color: #000;
}
</style>
