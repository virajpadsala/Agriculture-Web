<template>
  <div class="wrapper">
    <notifications></notifications>
    <side-bar>
      <template slot="links" v-if="menuItems">
        <sidebar-item v-for="(menu, index) in menuItems"
          :key= index
          :link="{
            name: menu.name,
            path: menu.path,
            icon: menu.icon,
          }"
        >
        </sidebar-item>
       
        <sidebar-item
            :link="{
              name: 'Logout',
              path: '/login',
              icon: 'ni ni-planet text-blue'
              }"
            >
        </sidebar-item>

        <!-- <sidebar-item
              :link="{
                name: 'User Profile',
                path: '/profile',
                icon: 'ni ni-single-02 text-yellow'
                }">
        </sidebar-item> -->

      </template>

    </side-bar>
    <div class="main-content">
      <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)" class="main-content-div">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
      </div>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<script>
  /* eslint-disable no-new */
  import PerfectScrollbar from 'perfect-scrollbar';
  import 'perfect-scrollbar/css/perfect-scrollbar.css';

  function hasElement(className) {
    return document.getElementsByClassName(className).length > 0;
  }

  function initScrollbar(className) {
    if (hasElement(className)) {
      new PerfectScrollbar(`.${className}`);
    } else {
      // try to init it later in case this component is loaded async
      setTimeout(() => {
        initScrollbar(className);
      }, 100);
    }
  }

  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import DashboardContent from './Content.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      DashboardContent,
      FadeTransition
    },
    data() {
       return {
        userType: localStorage.getItem('userType'),
        farmerMenu: [{icon: 'ni ni-tv-2 text-primary', name:"Soil Testing", path: '/dashboard'}, {icon: 'ni ni-planet text-blue', name:"My Farms", path: '/dashboard'}, {icon: 'ni ni-single-02 text-yellow', name:"Add Farm", path: '/dashboard'}],
        adminMenu: [{icon: 'ni ni-bullet-list-67 text-red', name: "Farmers", path: '/farmers'},{icon: 'ni ni-tv-2 text-primary', name: "Soil Test", path: '/dashboard'}, {icon: 'ni ni-single-02 text-yellow', name: "Corp", path: '/dashboard'}],
        buyerMenu: [{icon: 'ni ni-bullet-list-67 text-red', name:"Search corp type", path: '/dashboard'}, {icon: 'ni ni-tv-2 text-primary', name:"Search Farm",path: '/dashboard'}],
        menuItems: []
       }
    },
    methods: {
      initScrollbar() {
        let isWindows = navigator.platform.startsWith('Win');
        if (isWindows) {
          initScrollbar('sidenav');
        }
      }
    },
    mounted() {
      this.initScrollbar();
       if(this.userType === 'ADMIN'){
          this.menuItems = this.adminMenu;
      }
      else if(this.userType === 'BUYER'){
          this.menuItems = this.buyerMenu;
      } else {
           this.menuItems = this.farmerMenu;
      }
    }
  };
</script>
<style lang="scss">
</style>
