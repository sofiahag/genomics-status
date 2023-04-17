const app = Vue.createApp();

app.component('v-playground', {
  data: () => {
    return {
      item1: 0,
      item2: 0,
      item3: 0
    }
  },
  computed: {
    total() {
      return this.item1 + this.item2 + this.item3;
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
                  <div style="text-align:right">
                    <button type="button" v-on:click="item1++" class="btn btn-primary" style="width:40%;">Add</button>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card mt-5 ml-5">
                  <div class="card-body">Item nr 2</div>
                  <div style="text-align:right">
                    <button type="button" v-on:click="item2++" class="btn btn-primary" style="width:40%">Add</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-4">
                <div class="card mt-5 mr-5">
                  <div class="card-body">Item nr 3</div>
                  <div style="text-align:right">
                    <button type="button" v-on:click="item3++" class="btn btn-primary" style="width:40%">Add</button>
                  </div>
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
            <p class="mt-4 ml-1">Item nr 1................{{ item1 }} <button v-on:click="item1--">x</button></p>
            <p class="mt-1 ml-1">Item nr 2................{{ item2 }} <button v-on:click="item2--">x</button></p>
            <p class="mt-1 ml-1">Item nr 3................{{ item3 }} <button v-on:click="item3--">x</button></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
});

app.mount('#vue_playground_id')



