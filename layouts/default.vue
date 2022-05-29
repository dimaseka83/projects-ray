<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app
      :width="230">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list v-for="(item, i) in items" nav dense :key="i" >
        <v-list-group :value="true" prepend-icon="mdi-account-circle" v-if="item.sub != null">
          <template v-slot:activator>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </template>

          <v-list-item v-for="(sub, i) in item.sub" :key="'sub'+ i" link :to="sub.to_sub" color="primary">
            <v-list-item-title v-text="sub.title_sub"></v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-item color="primary" :to="item.to" router exact v-else>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app :height="80">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <div class="row ml-5" v-if="displayMobile">
        <div class="col-md-8">
          <input type="text" class="form-control" placeholder="Lacak Order ID">
        </div>
      </div>
      <div class="mr-16" v-else>
          <input type="text" class="form-control" placeholder="Lacak Order ID">
      </div>

      <v-menu left offset-y>
        <template v-slot:activator="{on,attrs}">
          <v-card
          class="mx-auto"
          v-on="on"
          v-bind="attrs"
          >
            <v-card-title>
               <v-avatar
              color="brown"
              :size="sizeAvatar"
            >
              <span class="white--text text-h6">A</span>
            </v-avatar>
            <v-row class="pl-1" v-if="displayMobile">
              <span class="body-2 font-weight-regular">Admin</span>
              <span class="body-2 font-weight-regular">+62896372123</span>
            </v-row>
            </v-card-title>
          </v-card>
        </template>

        <v-list :class="paddingList">
          <v-list-item v-for="(lm, i) in leftMenu" :key="'leftMenu'+i" link :to="lm.to">
            <v-list-item-title>{{lm.title}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container class="my-8">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

  export default {
    component: {
    },
    name: 'DefaultLayout',
    data() {
      return {
        		color: '#000000',
		mask: '!#XXXXXXXX',
		menu: false,
        clipped: false,
        drawer: false,
        drawerRight: false,
        fixed: false,
        items: [{
            icon: 'mdi-apps',
            title: 'Dashboard',
            to: '/'
          },
          {
            icon: 'mdi-account-circle',
            title: 'Authentication',
            sub: [{
              title_sub: 'Login',
              to_sub: '/auth/login'
            }, ]
          },
          {
            icon: 'mdi-bootstrap',
            title: 'Bootstrap',
            sub: [{
              title_sub: 'Forms',
              to_sub: '/bootstrap/forms'
            },
            {
              title_sub: 'Alert',
              to_sub: '/bootstrap/alert'
            },
            {
              title_sub: 'Button',
              to_sub: '/bootstrap/button'
            },
            ]
          },
          {
            icon: 'mdi-note-multiple',
            title: 'Page Sample',
            sub: [{
              title_sub: 'Transaction',
              to_sub: '/pagesample/transaction'
            },
            {
              title_sub: 'Produk',
              to_sub: '/pagesample/produk'
            },
            ]
          },
          {
            icon: 'mdi-tablet-android',
            title: 'Icons',
            to: '/icons'
          },
          {
            icon: 'mdi-view-list',
            title: 'Table',
            to: '/table'
          }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'MyApp',

        leftMenu: [
          {
            title: 'Profil',
            to: '/auth/changeprofil'
          },
          {
            title: 'Logout',
            to: '/auth/login'
          }
        ]
      }
    },
    computed: {
      displayMobile() {
        return this.$vuetify.breakpoint.width >= 500
      },
      sizeAvatar(){
        if(this.displayMobile){
          return '30px'
        }else{
          return '25px'
        }
      },
      paddingList(){
        if(this.displayMobile){
          return ''
        }else{
          return 'pr-16'
        }
      }
    }
  }


</script>
<style>
  .v-application--is-ltr .v-list-item__action:first-child,
  .v-application--is-ltr .v-list-item__icon:first-child {
    margin-right: 10px;
  }
  
</style>
