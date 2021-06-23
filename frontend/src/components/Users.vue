<template>
  <div class="container" v-if="lowScore == false">
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
  <Warning v-else msg="1" />
</template>

<script>
import Warning from "../components/Warning";
import backend from "../api/backend";
export default {
  props: {
    score: "",
    id: ""
  },
  components: {
    Warning
  },
  data() {
    return {
      offers: [],
      lowScore: false
    };
  },
  methods: {
    async seacher(score) {
      const resp = await backend.get("/offers/" + score);
      const offers = resp.data.offers;
      this.offers = offers;
      if (this.offers.length == 0) {
        this.lowScore = true;
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
  background-color: #2488edb6;
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

.container {
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
