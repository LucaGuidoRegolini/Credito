<template>
  <button @click="Action()" class="button" :class="ButtonStyle" :type="type">
    {{ text }}
  </button>
</template>
<script>
export default {
  props: {
    buttonstyle: String,
    type: String,
    text: {
      required: true,
      type: String
    },
    confirmation: Boolean,
    message: String
  },

  methods: {
    Action() {
      if (this.confirmation) {
        if (confirm(this.message)) {
          this.$emit("activated");
        }
        return;
      }
      this.$emit("activated");
    }
  },

  computed: {
    ButtonStyle() {
      if (this.buttonstyle == "continue") return "button-continue";
      if (this.buttonstyle == "return") return "button-return";
      else return "button-default";
    }
  }
};
</script>

<style scoped>
.button {
  display: inline-block;
}
.button-continue {
  width: 100px;
  height: 40px;
  font-size: 14px;
  border-radius: 6px;
  box-shadow: none;
  border-style: none;
  color: aliceblue;
  text-align: center;
  background-color: green;
}

.button-return {
  width: 100px;
  height: 40px;
  font-size: 14px;
  border-radius: 6px;
  box-shadow: none;
  border-style: none;
  color: aliceblue;
  text-align: center;
  background-color: rgb(90, 90, 90);
}

.button:hover {
  filter: brightness(80%);
}
</style>
