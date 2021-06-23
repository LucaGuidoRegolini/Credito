<template>
  <div v-if="this.permission == true">
    <Header :mode="mode" :score="score" :name="name" />
    <Resume :id="this.id" v-if="this.bought == true" />
    <Users :score="score" v-else-if="this.mode == 'user'" />
    <Agency v-else-if="this.mode == 'agency'" />
  </div>
  <div v-else>
    <Warning />
  </div>
</template>

<script scoped>
import Warning from "../components/Warning";
import Header from "../components/Header";
import Users from "../components/Users";
import Agency from "../components/Agency";
import Resume from "../components/Resume";
import backend from "../api/backend";
export default {
  components: {
    Warning,
    Header,
    Users,
    Agency,
    Resume
  },
  data() {
    return {
      mode: "",
      score: "",
      name: "",
      id: "",
      bought: false,
      permission: false
    };
  },
  created() {
    this.foundData();
    this.foundSale();
  },
  methods: {
    foundData() {
      if (localStorage["user"] !== undefined) {
        const user = JSON.parse(localStorage["user"]);
        this.mode = user.mode;
        this.score = user.score;
        this.name = "";
        this.id = user.id;
        this.permission = true;
      } else if (localStorage["agency"] !== undefined) {
        const agency = JSON.parse(localStorage["agency"]);
        this.mode = agency.mode;
        this.score = "";
        this.id = "";
        this.name = agency.name;
        this.permission = true;
      } else {
        this.permission = false;
        this.id = "";
        this.mode = "";
        this.score = "";
        this.name = "";
      }
    },
    async foundSale() {
      if (localStorage["user"] !== undefined) {
        const resp = await backend.get("/sale/" + this.id);
        if (resp.data.sucess == true) {
          this.bought = true;
        }
      }
    }
  }
};
</script>

<style></style>
