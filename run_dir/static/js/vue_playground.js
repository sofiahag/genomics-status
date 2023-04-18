const app = Vue.createApp();

app.component('v-playground', {
  data: () => {
    return {
      item1: 0,
      item2: 0,
      item3: 0,
      item1hidden: false,
      item2hidden: false,
      item3hidden: false
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
                  <div class="card-body">Item nr <i>1</i></div>
                  <div style="text-align:right">
                    <button type="button" v-on:click="item1++;item1hidden=false" class="btn btn-primary" style="width:40%;">Add</button>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card mt-5 ml-5">
                  <div class="card-body">Item nr <i>2</i></div>
                  <div style="text-align:right">
                    <button type="button" v-on:click="item2++;item2hidden=false" class="btn btn-primary" style="width:40%">Add</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-4">
                <div class="card mt-5 mr-5">
                  <div class="card-body">Item nr <i>3</i></div>
                  <div style="text-align:right">
                    <button type="button" v-on:click="item3++;item3hidden=false" class="btn btn-primary" style="width:40%">Add</button>
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
            <p class="mt-4 ml-1">You have <b>{{ total }}</b> items in your cart</p>
            <p class="mt-5 ml-1"><b>Items:</b></p>
            <p class="mt-4 ml-1" v-if="!item1hidden">Item nr <i>1</i> .............. <b>{{ item1 }}</b><button class="ml-2" v-on:click="item1hidden=true;item1=0">x</button></p>
            <p class="mt-1 ml-1" v-if="!item2hidden">Item nr <i>2</i> .............. <b>{{ item2 }}</b><button class="ml-2" v-on:click="item2hidden=true;item2=0">x</button></p>
            <p class="mt-1 ml-1" v-if="!item3hidden">Item nr <i>3</i> .............. <b>{{ item3 }}</b><button class="ml-2" v-on:click="item3hidden=true;item3=0">x</button></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
});

app.mount('#vue_playground_id')



