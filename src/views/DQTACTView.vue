<template>
    <div class="dqtact">
      <h1>本サイトは、ドラクエタクトの履歴を残すためのページとなります。</h1>
      
      <button @click="externalLink">ドラクエタクト公式</button>
  
      <h2>This is an history page</h2>
    </div>
   
    <nav>
        <router-link to="/dqtact2020">2020</router-link>※始めていません<br>
        <router-link to="/dqtact2021">2021</router-link>※1.5周年から開始<br>
        <router-link to="/dqtact2022">2022</router-link><br>
        <router-link to="/dqtact2023">2023</router-link><br>
        <router-link to="/dqtact2024">2024</router-link><br>
    </nav>  <router-view/>

    <div id="app">
      <p>{{ message }}</p>
      <!-- <button v-on:click="externalLink_k_kakin">K氏の課金額表示</button> -->
      <!-- <router-link to="/dqtact2024">2024</router-link><br> -->
      <button v-on:click="externalLink_k_kakin">K氏の課金額表示</button>
    </div>
</template>

<script>
export default ({
  methods: {
    externalLink() {
      const url = 'https://www.dragonquest.jp/tact/'
      // window.location.href = url
      window.open(url, '_blank')
    },
    // externalLink_k_kakin() {
    //   const url = 'https://www.dragonquest.jp/tact/'
    //   // window.location.href = url
    //   window.open(url, '_blank')
    // },
    externalLink_k_kakin(){
      this.$router.push('/k_kakin')
    }
  }
})
</script>

<style>
</style>