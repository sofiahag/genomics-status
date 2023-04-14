//import './css/v_pg.css';

const app = Vue.createApp();

app.component('v-playground', {
  data: () => {
    return {
      count_one: 0,
      count_two: 0,
      count_three: 0
    }
  },
  computed: {
    total() {
      return parseInt(this.count_one) + parseInt(this.count_two) + parseInt(this.count_three);
    }
  },
  methods: {
    incr_one () {
      this.count_one++;
    },
    decr_one () {
      this.count_one--;
    },
    incr_two () {
      this.count_two++;
    },
    decr_two () {
      this.count_two--;
    },
    incr_three () {
      this.count_three++;
    },
    decr_three () {
      this.count_three--;
    }
  },
  template:
  /*html*/`
  <div class="container">
    <div class="row justify-content-center my-5">
      <div class="col-6">
        <div class="card" style="height:700px">
          <div class="card-header" style="text-align:center">
            <h2>Vue Shopping Cart</h2>
          </div>
          <div class="card-body">
            <div class="row justify-content-center">
              <div class="col-4">
                <div class="card mt-5 mr-5">
                  <div class="card-body">Item nr 1</div>
                  <button type="button" v-on:click.prevent="incr_one" class="btn btn-primary">Add</button>
                </div>
              </div>
              <div class="col-4">
                <div class="card mt-5 ml-5">
                  <div class="card-body">Item nr 2</div>
                  <button type="button" v-on:click.prevent="incr_two" class="btn btn-primary">Add</button>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-4">
                <div class="card mt-5 mr-5">
                  <div class="card-body">Item nr 3</div>
                  <button type="button" v-on:click.prevent="incr_three" class="btn btn-primary">Add</button>
                </div>
              </div>
              <div class="col-4"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-2">
        <div class="card" style="height:300px">
          <div class="card-body">
            <p class="mt-4 ml-1">You have {{ total }} items in your cart</p>
            <p class="mt-5 ml-1">Items:</p>
            <p class="mt-4 ml-1">Item nr 1................{{ count_one }} <button v-on:click.prevent="decr_one">x</button></p>
            <p class="mt-1 ml-1">Item nr 2................{{ count_two }} <button v-on:click.prevent="decr_two">x</button></p>
            <p class="mt-1 ml-1">Item nr 3................{{ count_three }} <button v-on:click.prevent="decr_three">x</button></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
});

app.mount('#vue_playground_id')



