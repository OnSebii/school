<template>
  <v-app>
    <v-app-bar app color="brown" dark>
      <div class="d-flex align-center">
        <v-img
          id="logo"
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="puppy.png"
          transition="scale-transition"
          width="70"
        />
        <span class="text-h4">Puppy Love <v-icon x-large color="green darken-1">mdi-heart-outline</v-icon></span>
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/about" text>
        <span class="mr-2">About</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style scoped>
#logo {
  margin-top: 20px;
}
</style>
