<template>
  <div>
    <div v-for="el of data" :key="el.id" @click="select(el.name)">
      <h3>{{ el.name }}</h3>
      <p>{{ el.initator }}</p>
      <p>
        {{ el.unterschriften.join() }}
      </p>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    select(name) {
      return this.$emit('selectedVolksbegehren', name);
    },
  },
  data() {
    return {
      volksbegehren: [],
    };
  },
  props: {
    data: {
      type: Array,
    },
  },
};
</script>
