<template>
  <v-app dark :class="{rtl : $i18n.locale == 'ar'}">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      :right="$i18n.locale === 'ar'"
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="{name :`${item.to}___${$i18n.locale}`}"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="$t(item.title)" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
     
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-menu
        left
        top
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>{{$t('option')}} {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn  @click.prevent="switchLanguage" icon>
        <v-icon>mdi-earth</v-icon>
        <!-- {{$t('language')}} -->
      </v-btn>
      <v-btn @click.prevent="logout" icon>
        <v-icon>mdi-application-export</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      absolute
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    <snackbars-default/>
  </v-app>
</template>

<script>
import items from "@/common/sidebar.js"
export default {
  name :"defaultCView",
  data () {
    return {
      drawer:true,
      items,
      title: 'ELNOZOM'
    }
  },
  created(){
    const locale = localStorage.getItem('locale')
    if(locale){
      this.$i18n.locale = locale
    }
    this.$vuetify.rtl = this.$i18n.locale === 'ar'
  },
  methods:{
    switchLanguage(){
    // console.log(this.$vuetify.rtl);

      const locale = this.$i18n.locale === 'en' ? 'ar' : 'en'
      localStorage.setItem('locale' , locale)
      if(locale == 'ar'){
          this.$vuetify.rtl = true
      } else {
          this.$vuetify.rtl = false

      }
      this.$router.push({name : `index___${locale}`})
    },
    logout() {
            this.$auth.logout()
            .then(() => {
                const snackbar = {
                active : true,
                text: 'logged_out'
                }
                this.$store.commit('ui/setSnackbar' , snackbar)
                this.$router.push({name: `login___${this.$i18n.locale}`})
            })
        },
  }
}
</script>
