const app = Vue.createApp();

app.component('v-playground', {
  data: () => {
    return {
        items: {
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
    }
  },
  computed: {
    total() {
      return this.items.itemid1.count + this.items.itemid2.count + this.items.itemid3.count
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
            <div class="row">
              <div v-for="item in items" class="col-4">
                <div class="card mt-5">
                  <div class="card-body">{{ item.name }}
                  </div>
                  <div style="text-align:right">
                    <button type="button" v-on:click="item.count++;item.hide=false" class="btn btn-primary" style="width:40%;">Add</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-2">
        <div class="card" style="height:300px">
          <div class="card-body">
            <p class="mt-4 ml-1">You have <b>{{ total }}</b> items in your cart</p>
            <p class="mt-5 ml-1"><b>Items:</b></p>
            <div v-for="item in items">
              <p v-if="!item.hide" class="mt-4 ml-1">{{ item.name }} .............. <b>{{ item.count }}</b>
              <button class="ml-2" v-on:click="item.hide=true;item.count=0">x</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
});

app.mount('#vue_playground_id')



