const app = Vue.createApp();

app.component('v-playground', {
  data: () => {
    return {
        'itemid1': {
                'id': 'item1', 
                'name': 'Item nr 1',
                'count': 0,
                'hide': false
                },
        'itemid2': {
                'id': 'item2', 
                'name': 'Item nr 2', 
                'count': 0,
                'hide': false
                }, 
        'itemid3': {
                'id': 'item3', 
                'name': 'Item nr 3',
                'count': 0, 
                'hide': false
                }
    }
  },
  computed: {
    total() {
      return this.itemid1.count + this.itemid2.count + this.itemid3.count
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
                  <div class="card-body">{{ itemid1.name }}</div>
                  <div style="text-align:right">
                    <button type="button" v-on:click="itemid1.count++;itemid1.hidden=false" class="btn btn-primary" style="width:40%;">Add</button>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card mt-5 ml-5">
                  <div class="card-body">{{ itemid2.name }}</div>
                  <div style="text-align:right">
                    <button type="button" v-on:click="itemid2.count++;itemid2.hidden=false" class="btn btn-primary" style="width:40%">Add</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-4">
                <div class="card mt-5 mr-5">
                  <div class="card-body">{{ itemid3.name }}</div>
                  <div style="text-align:right">
                    <button type="button" v-on:click="itemid3.count++;itemid1.hidden=false" class="btn btn-primary" style="width:40%">Add</button>
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
            <p class="mt-4 ml-1" v-if="!itemid1.hidden">{{ itemid1.name }} .............. <b>{{ itemid1.count }}</b><button class="ml-2" v-on:click="itemid1.hidden=true;itemid1.count=0">x</button></p>
            <p class="mt-1 ml-1" v-if="!itemid2.hidden">{{ itemid2.name }} .............. <b>{{ itemid2.count }}</b><button class="ml-2" v-on:click="itemid2.hidden=true;itemid2.count=0">x</button></p>
            <p class="mt-1 ml-1" v-if="!itemid3.hidden">{{ itemid3.name }} .............. <b>{{ itemid3.count }}</b><button class="ml-2" v-on:click="itemid3.hidden=true;itemid3.count=0">x</button></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
});

app.mount('#vue_playground_id')



