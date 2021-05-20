<template>
  <div class="home">
    <p>Selected: {{ selectedVolksbegehren }}</p>
    <ListView :data="volksbegehren" @selectedVolksbegehren="selectedVolksbegehren = $event"></ListView>
  </div>
</template>

<script>
import ListView from '@/components/ListView.vue';
import axios from 'axios';
export default {
  data() {
    return {
      volksbegehren: [],
      selectedVolksbegehren: '',
    };
  },
  components: {
    ListView,
  },
  created() {
    this.getVolksbegehren();
  },
  methods: {
    async getVolksbegehren() {
      try {
        let { data } = await axios({
          url: 'http://localhost:3000/volksbegehren',
          method: 'get',
        });
        console.log(data);
        this.volksbegehren = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
