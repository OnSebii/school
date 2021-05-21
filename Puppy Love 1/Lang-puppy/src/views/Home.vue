<template>
  <div>
    <v-carousel :show-arrows="false" hide-delimiters cycle interval="3000">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
    <p class="green--text darken-4 text-h3 text-center my-4">Basset Hound Club of America</p>
    <div class="d-block text-center">
      <v-btn class="ma-2" color="green darken-4 white--text">MEMBER LOGIN</v-btn>
      <v-btn class="ma-2" color="green darken-4 white--text">EVENTS</v-btn>
      <v-btn class="ma-2" color="green darken-4 white--text">FIND A DOG</v-btn>
    </div>
    <v-sheet class="mx-auto my-4" width="50%">
      <div class="text-justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam pariatur quasi amet, quis cupiditate
        placeat rem temporibus dolores culpa error perferendis neque. Quis, nesciunt? Recusandae dolor
        doloremque quod totam numquam?
      </div>
    </v-sheet>
    <div class="d-flex flex-wrap justify-center">
      <DogView v-for="d of dogs" :key="d.i" :dog="d" />
    </div>
  </div>
</template>

<script>
import DogView from '@/components/DogView.vue';
export default {
  name: 'Home',
  components: {
    DogView,
  },
  data() {
    return {
      items: [
        {
          src:
            'https://www.rover.com/blog/wp-content/uploads/2018/12/basset-hound-wallpaper-hd-2560x1440-214117.jpg',
        },
        {
          src: 'https://www.welpen.de/cms/wp-content/uploads/2019/01/basset-hound-1.jpg',
        },
        {
          src: 'https://loveandkissespetsitting.net/wp-content/uploads/2017/10/Basset-Hounds-3-of-them.jpg',
        },
      ],
      dogs: [
        {
          id: 1,
          name: 'Francis',
          image: 'https://www.edogs.de/magazin/wp-content/uploads/basset-hound-auf-wiese.jpg',
        },
        {
          id: 2,
          name: 'Karambo',
          image: 'https://www.zooroyal.at/magazin/wp-content/uploads/2018/02/basset-hound-760x570.jpg',
        },
        {
          id: 3,
          name: 'Mr. Phil',
          image:
            'https://mediafiles.mein-haustier.de/wp-content/uploads/2019/01/shutterstock_755551105-komprimiert-1270x847.jpg',
        },
      ],
    };
  },
};
</script>
