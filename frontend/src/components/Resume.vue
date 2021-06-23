<template>
  <div class="body">
    <div class="menssage">
      <h1>Você já pediu um emprestimo</h1>
    </div>
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
        <p class="pparcels">{{ parcels }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import backend from "../api/backend";
export default {
  props: {
    id: ""
  },
  data() {
    return {
      offer: "",
      parcels: ""
    };
  },
  beforeMount() {
    this.seacher();
  },
  methods: {
    async seacher() {
      const resp = await backend.get("/sale/" + this.id);
      if (resp.data.sucess == true) {
        this.offer = resp.data.sale.offer;
        this.parcels = resp.data.sale.parcel;
      }
    }
  }
};
</script>

<style>
.body {
  display: grid;
  place-items: center;
}

.card {
  margin-top: 10px;
  max-width: 330px;
  min-width: 280px;
  width: 40%;
  height: 200px;
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

.pparcels {
  margin-right: 10px;
}

.menssage {
  margin: 15px;
  background-color: rgba(41, 41, 41, 0.603);
  border-radius: 8px;
  color: white;
}
</style>
