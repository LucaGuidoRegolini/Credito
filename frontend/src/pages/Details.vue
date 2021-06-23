<template>
  <div>
    <Header :mode="mode" :score="score" :name="name" />
    <div class="body">
      <div class="card" onselectstart="return false">
        <div class="dmax">
          <p class="p pmax">{{ offer.max_loan }}</p>
        </div>
        <div class="fees">
          <p class="p pfees">Juros:</p>
          <div class="space"></div>
          <p class="p pfees">{{ offer.interest_rate }}</p>
        </div>
        <div class="dagency">
          <p class="p pagency">Empresa:</p>
          <div class="space"></div>
          <p class="p pagency">{{ offer.financial_agency }}</p>
        </div>

        <div class="parcels">
          <p class="pparcels">Parcelas:</p>
          <input
            type="number"
            class="inparcel"
            v-model="parcels"
            v-on:change="calculate"
          />
        </div>

        <div class="simulation" v-if="parcels > 0">
          <div class="space"></div>
          <p class="psimulation total">{{ parcel }}</p>
          <p class="psimulation">por mês</p>
        </div>
        <div class="buttons">
          <Button
            buttonstyle="return"
            @activated="lost()"
            class="btn-confg"
            type="button"
            text="Voltar"
          />
          <div class="space"></div>
          <Button
            buttonstyle="continue"
            @activated="buy()"
            class="btn-confg"
            type="button"
            text="Comprar"
          />
        </div>
      </div>
    </div>
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
      offer: "",
      fees: "",
      max: "",
      parcels: "",
      parcel: "",
      id: ""
    };
  },
  beforeMount() {
    this.foundData();
    this.seacher();
  },
  methods: {
    async seacher() {
      const resp = await backend.get("/offer/" + this.$route.params.id);
      const offer = resp.data.offer[0];
      this.offer = offer;
      this.max = offer.max_loan;
      this.fees = offer.interest_rate;
    },

    foundData() {
      if (localStorage["user"] !== undefined) {
        const user = JSON.parse(localStorage["user"]);
        this.mode = user.mode;
        this.score = user.score;
        this.name = "";
      } else if (localStorage["agency"] !== undefined) {
        const agency = JSON.parse(localStorage["agency"]);
        this.mode = agency.mode;
        this.score = "";
        this.name = agency.name;
      } else {
        this.mode = "";
        this.score = "";
        this.name = "";
      }
    },

    calculate() {
      if (this.parcels == 1) {
        this.parcel = this.max.toFixed(2);
        return;
      }
      const parcel =
        (this.max * (1 + this.fees / 100) ** this.parcels) / this.parcels;
      this.parcel = parcel.toFixed(2);
    },

    lost() {
      this.$router.push({ name: "User" });
    },

    async buy() {
      const user = JSON.parse(localStorage["user"]);
      this.id = user.id;

      const resp = await backend.post("/sale/", {
        ID_client: this.id,
        id: this.$route.params.id,
        parcels: this.parcels
      });
      console.log(resp);
      if (resp.data.sucess == true) {
        alert("Credito comprado");
      } else {
        alert("houve algum erro, tente de novo mais tarde ");
      }
      this.$router.push({ name: "User" });
    }
  }
};
</script>

<style scoped>
.body {
  display: grid;
  place-items: center;
}

.card {
  margin-top: 10px;
  max-width: 330px;
  min-width: 280px;
  width: 40%;
  height: 400px;
  background-color: #2488edb6;
  border-radius: 8px;
}

.p {
  margin-bottom: 10px;
}

.dmax {
  display: flex;
  margin-right: 40px;
  margin-left: 40px;
  margin-top: 5px;
  align-items: center;
  justify-content: center;
}

.pmax {
  color: white;
  font-size: 27px;
  font-weight: bolder;
}

.fees {
  display: flex;
  margin-right: 40px;
  margin-left: 40px;
  color: rgb(63, 62, 62);
}

.dagency {
  display: flex;
  margin-right: 40px;
  margin-left: 40px;
  color: rgb(63, 62, 62);
}

.parcels {
  display: flex;
  margin-right: 40px;
  margin-left: 40px;
  color: rgb(63, 62, 62);
}

.inparcel {
  margin-left: 10px;
  width: 43px;
  height: 23px;
  font-size: 13px;
  border-radius: 8px;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
}

.simulation {
  display: flex;
  margin-right: 40px;
  margin-left: 40px;
  color: rgb(63, 62, 62);
  margin-bottom: 0px;
}

.psimulation {
  margin-right: 5px;
  margin-bottom: 0px;
}

.total {
  color: red;
  font-weight: bolder;
}

.buttons {
  margin-top: 120px;
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
