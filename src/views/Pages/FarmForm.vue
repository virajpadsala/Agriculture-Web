<template>
  
  <b-card body-class="p-0" header-class="border-0">
    <base-header class="pt-md-6 bg-gradient-success">
    </base-header>
    
    
      
  <b-container fluid>
    <div class="row">
      <div class="col">
        <card>
          <b-row align-v="center" slot="header" >
            <b-col cols="6">
              <!-- <h3 class="mb-0">Farmer information</h3> -->
            </b-col>
            <b-col cols="6" class="text-right">
              <a href="#!" class="btn btn-default">Add Farm</a>
            </b-col>
          </b-row>

          <b-form @submit.prevent="updateProfile">

            <div class="pl-lg-4">
              
              <b-row >
                <b-col lg="6">
                  <base-input
                    type="text"
                    label="Name"
                    placeholder="Name"
                    v-model="farm.name"
                  >
                  </base-input>
                </b-col>
                <b-col lg="6">
                  <base-input
                    type="text"
                    label="Acerage"
                    placeholder="Acerage"
                    v-model="farm.acerage"
                  >
                  </base-input>
                </b-col>
              </b-row>
              <b-row>
               
                <b-col lg="6">
                  <base-input
                    type="text"
                    label="Location"
                    placeholder="Location"
                    v-model="farm.location"
                  >
                  </base-input>
                </b-col>
                 <b-col lg="6">
                  <base-input
                    type="number"
                    label="Survey Number"
                    placeholder="Survey Number"
                    v-model="farm.surveyNumber"
                  >
                  </base-input>
                </b-col>
              </b-row>
              <b-row>
               
                <b-col lg="6">
                  <base-input
                    type="number"
                    label="Latitude"
                    placeholder="Latitude"
                    v-model="farm.latitude"
                  >
                  </base-input>
                </b-col>
                 <b-col lg="6">
                  <base-input
                    type="number"
                    label="Longitude"
                    placeholder="Longitude"
                    v-model="farm.longitude"
                  >
                  </base-input>
                </b-col>
              </b-row>
              <b-row>
               
                <b-col lg="6">
                  <base-select  
                    label="Soli Type" 
                    :options="soliTypeArray"
                    v-model="farm.soliType"
                    v-on:change="changeItem($event)"      
                  />
                </b-col>
                 <b-col lg="6">
                  <base-select  
                    label="Corp Type" 
                    :options="corpTypeArray"
                    v-model="farm.corpType"
                    v-on:change="changeItem($event)"      
                  />
                </b-col>
              </b-row>
            </div>
      

          </b-form>
        </card>
      </div>
    </div>
  </b-container>
  </b-card>
</template>
<script>
export default {
  data() {
    return {
      farm: {
        name: '',
        acerage: '',
        location: '',
        surveyNumber: '',
        latitude: '',
        longitude: '',
        soliType: '',
        corpType: '',
      },
       soliTypeArray: [
          {id: 1, name: 'Lateritic soil'},
          {id: 2, name: 'Red soil'},
          {id: 3, name: 'Red loam'},
          {id: 4, name: 'Red sandy soil'},
          {id: 5, name: 'Alluvial soil'}],
        corpTypeArray: [
          {id: 1, name:'Potato'}, 
          {id: 2, name:'Carrot'}, 
          {id: 3, name:'Garlic'}, 
          {id: 4, name:'Beans'}, 
          {id: 5, name:'Cabbage'}
          ]
    };
  },
  methods: {
    changeItem(e) {
      console.log(e);
    },
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.farm));
    }
  }
};
</script>
<style></style>
