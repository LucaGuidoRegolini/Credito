<template>
  <div class="box">
    <router-link
      v-for="offer in offers"
      :key="offer.id"
      :to="'/details/' + offer.id"
    >
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
    </router-link>
  </div>
</template>

<script>
import backend from "../api/backend";
export default {
  data() {
    return {
      offers: []
    };
  },
  methods: {
    async seacher() {
      const resp = await backend.get("/offers/");
      const offers = resp.data.offers;
      this.offers = offers;
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
  max-width: 430px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;

  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  align-content: center;
}

.card:hover {
  filter: brightness(80%);
}
</style>
