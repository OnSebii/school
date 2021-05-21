<template>
  <v-card class="mx-auto" max-width="244">
    <v-img :src="dog.image" height="200px"></v-img>

    <v-card-title>
      {{dog.name}}
    </v-card-title>

    <v-card-subtitle>
      A special breed
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text>
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time
          for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data
          file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got
          to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
    props: {
        dog: {
            type: Object,
        },
    },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
