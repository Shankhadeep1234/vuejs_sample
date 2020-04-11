// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

//Create global filter
Vue.filter("snippet", val => {
  if (!val || typeof val !== "string") return "";
  val = val.slice(0, 50);
  return val;
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
