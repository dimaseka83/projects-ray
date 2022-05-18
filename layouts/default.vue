<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app floating dark
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
    <v-app-bar :clipped-left="clipped" fixed app :height="80" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <div class="row ml-5">
        <div class="col-md-8">
          <input type="text" class="form-control" placeholder="Lacak Order ID">
        </div>
      </div>
      <v-menu left>
        <template v-slot:activator="{on,attrs}">
          <v-card v-bind="attrs" v-on="on" class="mx-auto">
            <v-card-text>
              <v-row>
                <v-col>
                  <v-avatar color="brown" size="30">
                <span class="white--text text-h5">A</span>
              </v-avatar>
                </v-col>
                <v-col>
                Admin
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </template>

        <v-list>
          <v-list-item v-for="(lm, i) in leftMenu" :key="'leftMenu'+i" link :to="lm.to">
            <v-list-item-title>{{lm.title}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container class="m-5">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'DefaultLayout',
    data() {
      return {
        clipped: false,
        drawer: false,
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
            icon: 'mdi-form-select',
            title: 'Forms',
            to: '/forms'
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

        leftMenu: [{
            title: 'Change Password',
            to: '/auth/changepassword'
          },
          {
            title: 'Logout',
            to: '/auth/login'
          }
        ]
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
