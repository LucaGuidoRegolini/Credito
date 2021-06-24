<template>
  <div class="box">
    <div v-on:click="delet(offer.id)" v-for="offer in offers" :key="offer.id">
      <div class="card" onselectstart="return false">
        <div class="max">
          <p class="p max">R$ {{ offer.max_loan }}</p>
        </div>
        <div class="fees">
          <p class="p feels">{{ offer.interest_rate }} %</p>
        </div>
        <div class="agency">
          <p class="p agency">{{ offer.financial_agency }}</p>
        </div>
      </div>
    </div>

    <router-link :to="{ name: 'Add' }">
      <div class="card-plus" onselectstart="return false">
        <uil-plus size="38px" class="logo" color="white" />
      </div>
    </router-link>
  </div>
</template>

<script>
import { UilPlus } from "@iconscout/vue-unicons";
import backend from "../api/backend";
export default {
  components: {
    UilPlus
  },
  data() {
    return {
      offers: []
    };
  },
  methods: {
    async seacher() {
      const agency = JSON.parse(localStorage["agency"]);
      const name = agency.name;
      const resp = await backend.get("/agency/" + name);
      const offers = resp.data.offers;
      this.offers = offers;
    },
    async delet(id) {
      if (confirm("Tem certeza que quer apagar essa oferta?")) {
        const resp = await backend.delete("/delete/offer/" + id);
        this.seacher();
      }
    }
  },
  beforeMount() {
    this.seacher(this.score);
  }
};
</script>

<style scoped>
.card {
  margin: 10px;
  width: 130px;
  height: 130px;
  background-color: #7621ccb6;
  border-radius: 8px;
}

.card-plus {
  margin: 10px;
  width: 130px;
  height: 130px;
  background-color: #666666b6;
  border-radius: 8px;
  display: grid;
  place-items: center;
}

.p {
  margin-bottom: 10px;
}

.max {
  margin-top: 5px;
  color: white;
  font-size: 25px;
  font-weight: bolder;
}

.feels {
  color: rgb(63, 62, 62);
  text-align: end;
  margin-right: 10px;
}

.agency {
  color: rgb(63, 62, 62);
  text-align: end;
  margin-right: 10px;
}

.box {
  max-width: 480px;
  margin: 0 auto;
  margin-top: 30px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  text-align: center;
}

.card-plus:hover {
  filter: brightness(80%);
}
</style>
