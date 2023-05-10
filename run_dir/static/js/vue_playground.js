const app = Vue.createApp({
  data() {
    return {
      published_sample_requirements: {},
      published_data_loading: true,
      error_messages: []
    }
  },
  computed: {
    any_errors() {
      return (this.error_messages.length !== 0)
    }
  },
  methods: {
    fetchSampleRequirements() {
      axios
        .get('/api/v1/sample_requirements')
        .then(response => {
            data = response.data.sample_requirements
            this.published_sample_requirements = data
            this.published_data_loading = false
            for ([req_id, req] of Object.entries(data.sample_requirements)) {
                req['Count'] = 0
                req['Hide'] = false
            }
          })
          .catch(error => {
            this.$root.error_messages.push('Unable to fetch published sample requirements data, please try again or contact a system administrator.')
            this.published_data_loading = false
          })
    },
    increment(ref_id) {
      for ([req_id, req] of Object.entries(this.published_sample_requirements.sample_requirements)) {
        req.Hide = false
        if (parseInt(req_id) === ref_id){
          req.Count += 1
        }
      }
    },
    toggle(ref_id) {
      for ([req_id, req] of Object.entries(this.published_sample_requirements.sample_requirements)) {
        if (parseInt(req_id) === ref_id){
          req.Hide = true
        }
      }
    },
    reset(ref_id) {
      for ([req_id, req] of Object.entries(this.published_sample_requirements.sample_requirements)) {
        if (parseInt(req_id) === ref_id){
          req.Count = 0
        }
      }
    }
  }
});


app.component('v-playground', {
  created: function() {
    this.$root.fetchSampleRequirements(true)
  },
  template:
  /*html*/`
  <template v-if="this.$root.published_data_loading">
    <template v-if="this.$root.any_errors">
      <v-sample-requirements-error-display/>
    </template>
    <v-sample-requirements-data-loading/>
  </template>
  <template v-else>
    <template v-if="this.$root.any_errors">
      <v-sample-requirements-error-display/>
    </template>  
    <div class="container">
      <div class="row justify-content-center my-5">
        <div class="col-6">
          <v-inventory/>
        </div>
        <div class="col-2">
          <v-cart/>
        </div>
      </div>
    </div>
  </template>
  `
})

app.component('v-inventory', {
  template:
  /*html*/`
  <div class="card">
    <div class="card-header" style="text-align:center">
      <h2>Inventory</h2>
    </div>
    <div class="card-body">
      <div class="row">
      <template v-for="requirement_data in this.$root.published_sample_requirements.sample_requirements" :key="requirement_data">
        <div class="col-6 justify-content-center" style="display:flex">
          <div class="card mt-5" style="width:150px">
            <div class="card-body">{{ requirement_data.REF_ID }}</div>
            <div style="text-align:right">
              <button type="button" @click="this.$root.increment(requirement_data.REF_ID)" class="btn btn-primary" style="width:50%;">Add</button>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
  `
})

app.component('v-cart', {
  computed: {
    total() {
      let total_count = 0
      for ([req_id, req] of Object.entries(this.$root.published_sample_requirements.sample_requirements)) {
          total_count += req.Count
      }
      return total_count
    }
  },
  template:
  /*html*/`
  <div class="card">
    <div class="card-header" style="text-align:center">
      <h2>Cart</h2>
    </div>
    <div class="card-body">
      <p class="mt-4 ml-1">You have <b>{{ total }}</b> items in your cart</p>
      <p class="mt-5 ml-1"><b>Items:</b></p>
      <p v-for="requirement_data in this.$root.published_sample_requirements.sample_requirements" :key="requirement_data">
        <div v-if="!requirement_data.Hide" class="mt-4 ml-1">
            {{ requirement_data.REF_ID }} ..............  <b>{{ requirement_data.Count }}</b>
            <button class="ml-2" @click="this.$root.toggle(requirement_data.REF_ID);this.$root.reset(requirement_data.REF_ID)">x</button>
        </div>
      </p>
    </div>
  </div>
  `
})

app.component('v-sample-requirements-error-display', {
  /* A list of error messages */
  template: /*html*/`
    <template v-for="msg in this.$root.error_messages">
      <div class="alert alert-danger" role="alert">
        <h5 class="mt-2"><i class="far fa-exclamation-triangle mr-3"></i>{{msg}}</h5>
      </div>
    </template>`
})

app.component('v-sample-requirements-data-loading', {
  /* A div with a bootstrap spinner. */
  template: /*html*/`
    <div class="spinner-grow" role="status"></div><span class="ml-3">Loading data...</span>`
})

app.mount('#vue_playground_id')



