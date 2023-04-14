//import './css/v_pg.css';

const app = Vue.createApp();

app.component('v-playground', {
  data: () => {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count++;
    }
  },
  template:
  /*html*/`
  <div class="container">
    <div class="row my-3">
      <div class="col">
      </div>
      <div class="col-6">
        <div class="card" style="height:500px">
          <div class="card-header" style="text-align:center">
            <h2>Vue Shopping Cart</h2>
          </div>
          <div class="card-body">
            <button type="button" v-on:click.prevent="increment" class="btn btn-primary btn-lg ml-5 mt-5">Add 1 item to cart</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="height:500px">
          <div class="card-body">
            <p class="mt-5 ml-3">You have {{ count }} items in your cart</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
});

app.mount('#vue_playground_id')



