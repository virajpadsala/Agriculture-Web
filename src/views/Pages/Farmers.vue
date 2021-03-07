<template>
  
  <b-card body-class="p-0" header-class="border-0">
    <base-header class="pt-md-6 bg-gradient-success">
    </base-header>
    
    
      
  <b-container fluid>
    <div class="row">
    <div class="col">
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
              :data="listOfItems"
              header-row-class-name="thead-light">
      <el-table-column label="Name"
                       min-width="150px"
                       prop="page">
        <template v-slot="{row}">
          <div class="font-weight-600">{{row.firstName}} {{row.lastName}}</div>
        </template>
      </el-table-column>
      <el-table-column label="Email"
                       min-width="200px"
                       prop="email">
      </el-table-column>
      <el-table-column label="Mobile"
                       min-width="150px"
                       prop="mobile">
      </el-table-column>
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
         listOfItems: [
        {
        firstName: "Farmer 1",
        lastName: "A",
        email: "farmer1@gmail.com",
        mobile: "1545454545",
        },
        {
        firstName: "Farmer 2",
        lastName: "B",
        email: "farmer3@gmail.com",
        mobile: "2545454545",
        },
        {
        firstName: "Farmer 3",
        lastName: "C",
        email: "farmer3@gmail.com",
        mobile: "3545454545",
        },
        {
        firstName: "Farmer 4",
        lastName: "D",
        email: "farmer4@gmail.com",
        mobile: "4545454545",
        },
        {
        firstName: "Farmer 5",
        lastName: "E",
        email: "farmer5@gmail.com",
        mobile: "5545454545",
        }
      ]
      }
    }
  }
</script>
<style>
</style>
