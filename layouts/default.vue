<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app floating
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

    <!-- <v-navigation-drawer v-model="drawerRight" :mini-variant="miniVariant" :clipped="clipped" fixed app floating right
      :width="230">
      <v-list-item >
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Sidebar Style
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item color="primary">
          <v-list-item-title>Sidebar Close</v-list-item-title>
          <v-spacer></v-spacer>
          <v-switch v-model="drawer"></v-switch>
        </v-list-item>
          <v-list-item color="primary">
          <v-list-item-title>Filters</v-list-item-title>
          <v-spacer></v-spacer>
          <v-text-field v-model="color" v-mask="mask" hide-details solo>
					<template v-slot:append>
						<v-menu v-model="menu" top nudge-bottom="105" nudge-left="16" :close-on-content-click="false">
							<template v-slot:activator="{ on }">
								<div :style="swatchStyle" v-on="on" />
							</template>
							<v-card>
								<v-card-text class="pa-0">
									<v-color-picker v-model="color" flat />
								</v-card-text>
							</v-card>
						</v-menu>
					</template>
				</v-text-field>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-app-bar :clipped-left="clipped" fixed app :height="80">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <div class="row ml-5">
        <div class="col-md-8">
          <input type="text" class="form-control" placeholder="Lacak Order ID">
        </div>
      </div>
      <v-menu left>
        <template v-slot:activator="{on,attrs}">
        <!-- <v-btn icon @click.stop="drawerRight = !drawerRight">
          <v-icon>mdi-cog</v-icon>
        </v-btn> -->
          <v-btn v-bind="attrs" v-on="on" icon class="mr-10">
          <v-icon left>mdi-account</v-icon>
          Admin</v-btn>

        </template>

        <v-list>
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
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
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
          // {
          //   title: 'Change Password',
          //   to: '/auth/changepassword'
          // },
          {
            title: 'Logout',
            to: '/auth/login'
          }
        ]
      }
    },
    // computed: {
    //   swatchStyle() {
    //     const { color, menu } = this
    //     if(process.client){
    //       document.querySelector('.theme--dark.v-navigation-drawer').style.backgroundColor = this.color;
    //     }
    //   return {
    //     backgroundColor: color,
    //     cursor: 'pointer',
    //     height: '30px',
    //     width: '30px',
    //     borderRadius: menu ? '50%' : '4px',
    //     transition: 'border-radius 200ms ease-in-out'
    //   }
    //   }
    // },
  }


</script>
<style>
  .v-application--is-ltr .v-list-item__action:first-child,
  .v-application--is-ltr .v-list-item__icon:first-child {
    margin-right: 10px;
  }
  
</style>
