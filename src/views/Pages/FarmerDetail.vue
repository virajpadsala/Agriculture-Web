<template>
  
  <b-card body-class="p-0" header-class="border-0">
    <base-header class="pt-md-6 bg-gradient-success">
    </base-header>
    
    
      
  <b-container fluid>
    <div class="row">
      <div class="col">
        <b-card no-body class="card-profile" alt="Image placeholder" img-top>

          <b-card-body>
            <div class="text-center">
              <h5 class="h3">
                {{farmer.firstName}} {{farmer.lastName}}<span class="font-weight-light">, 27</span>
              </h5>
              <div class="h5 font-weight-300">
                <i class="ni location_pin mr-2"></i>{{farmer.email}}
              </div>
              <div class="h5 mt-4">
                <i class="ni business_briefcase-24 mr-2"></i>{{farmer.mobile}}
              </div>
            </div>
          </b-card-body>
        </b-card>
      </div>
    </div>
    <div class="row align-items-baseline">
      <div class="col">
        <button type="button" class="btn btn-default  float-right"> <router-link :to="'/add-farm'" class="text-white">Add farm</router-link></button>
      </div>
      <div class="col-7 col-sm-4 col-lg-3">
        <b-form class="navbar-search form-inline"
          id="navbar-search-main">
          <b-form-group class="form-group mb-0 ml-auto mt-2 mb-2">
            <b-input-group class="input-group-alternative input-group-merge">
              <b-form-input placeholder="Search" type="text"> </b-form-input>

              <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-search"></i></span>
              </div>
            </b-input-group>
          </b-form-group>
        </b-form>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <el-table class="table-responsive table"
                  :data="listOfItems"  @row-click="rowClick"
                  header-row-class-name="thead-light">
          <el-table-column label="name"
                          min-width="150px"
                          prop="name">
          </el-table-column>
          <el-table-column label="acerage"
                          min-width="150px"
                          prop="acerage">
          </el-table-column>
          <el-table-column label="location"
                          min-width="150px"
                          prop="location">
          </el-table-column>
          <el-table-column label="surveyNumber"
                          min-width="150px"
                          prop="surveyNumber">
          </el-table-column>
          <el-table-column label="latitude"
                          min-width="200px"
                          prop="latitude">
          </el-table-column>
          <el-table-column label="longitude"
                          min-width="200px"
                          prop="longitude">
          </el-table-column>
          <!-- <el-table-column label="soliType"
                          min-width="150px"
                          prop="soliType">
          </el-table-column>
          <el-table-column label="corpType"
                          min-width="150px"
                          prop="corpType">
          </el-table-column> -->
        </el-table>
      </div>
    </div>
  </b-container>
  </b-card>
</template>
<script>
  import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui'
  export default {
    name: 'farmers',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
    },
    data() {
      return {
        farmer:  {
          id:1,
          firstName: "Farmer 1",
          lastName: "A",
          email: "farmer1@gmail.com",
          mobile: "1545454545",
        },
          listOfItems: [
        {
          name: 'Farm 1',
          acerage: '2 vigha',
          location: 'Texas',
          surveyNumber: '435345',
          latitude: '73.2',
          longitude: '32.1',
          soliType: 'Red soil',
          corpType: 'Potato',
        },
        {
          name: 'Farm 2',
          acerage: '2 vigha',
          location: 'Texas',
          surveyNumber: '435345',
          latitude: '73.2',
          longitude: '32.1',
          soliType: 'Red soil',
          corpType: 'Potato',
        },
        {
          name: 'Farm 3',
          acerage: '2 vigha',
          location: 'Texas',
          surveyNumber: '435345',
          latitude: '73.2',
          longitude: '32.1',
          soliType: 'Red soil',
          corpType: 'Potato',
        },
        {
          name: 'Farm 4',
          acerage: '2 vigha',
          location: 'Texas',
          surveyNumber: '435345',
          latitude: '73.2',
          longitude: '32.1',
          soliType: 'Red soil',
          corpType: 'Potato',
        },
      ]
      }
    },
     methods: {
      buttonClick(row) {
       alert('Button Clicked')
      },
      rowClick(row) {
      //  alert('Row Clicked')
      }
     }
  }
</script>
<style>
</style>
