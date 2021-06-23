<template>
  <div v-if="this.permission == true">
    <Header :mode="mode" :score="score" :name="name" />
    <Users :score="score" v-if="this.mode == 'user'" />
    <Agency v-if="this.mode == 'agency'" />
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
export default {
  components: {
    Warning,
    Header,
    Users,
    Agency,
    mode: "",
    score: "",
    name: "",
    permission: false
  },
  created() {
    this.foundData();
  },
  methods: {
    foundData() {
      if (localStorage["user"] !== undefined) {
        const user = JSON.parse(localStorage["user"]);
        this.mode = user.mode;
        this.score = user.score;
        this.name = "";
        this.permission = true;
      } else if (localStorage["agency"] !== undefined) {
        const agency = JSON.parse(localStorage["agency"]);
        this.mode = agency.mode;
        this.score = "";
        this.name = agency.name;
        this.permission = true;
      } else {
        this.permission = false;
        this.mode = "";
        this.score = "";
        this.name = "";
      }
    }
  }
};
</script>

<style></style>
