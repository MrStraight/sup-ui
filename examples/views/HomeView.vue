<template>
  <div class="home">
    <div class="box">
      <div class="tit">基础用法</div>
      <div class="wrap">
        <sup-button>default</sup-button>
        <sup-button @click="handleClick" type="primary">primary</sup-button>
        <sup-button type="info">info</sup-button>
        <sup-button type="warning">wraring</sup-button>
        <sup-button type="success">success</sup-button>
        <sup-button type="danger">danger</sup-button>
      </div>
      <div class="wrap">
        <sup-button size="normal">default</sup-button>
        <sup-button size="normal" type="primary">primary</sup-button>
        <sup-button size="normal" type="info">info</sup-button>
        <sup-button size="normal" type="warning">wraring</sup-button>
        <sup-button size="normal" type="success">success</sup-button>
        <sup-button size="normal" type="danger">danger</sup-button>
      </div>
      <div class="wrap">
        <sup-button disabled>default</sup-button>
        <sup-button disabled type="primary">primary</sup-button>
        <sup-button disabled type="info">info</sup-button>
        <sup-button disabled type="warning">wraring</sup-button>
        <sup-button disabled type="success">success</sup-button>
        <sup-button disabled type="danger">danger</sup-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeView",
    methods:{
      handleClick(e){
        console.log('e',e);
      }
    }
  };
</script>
<style lang="scss" scoped>
  .wrap {
    margin-top: 20px;
  }
  ::v-deep {
    .wrap {
      button {
        margin-right: 10px;
      }
    }
  }
</style>
