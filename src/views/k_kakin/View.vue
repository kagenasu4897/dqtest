<template>
    <div class="k_kakin">
      <h1>This is an k_kakin page</h1>
    </div>
    <p>{{ now }}</p><br>
    <button v-on:click="time">現在時刻</button>
<h1>合計 1,000,000円</h1>
    <div>
      <vue-good-table
      :columns="columns"
      :rows="rows"
      :search-options="{
        enabled: true,
        placeholder: '検索したい文字を入力してください'
      }"/>
    </div>
    <nav>
        <router-link to="/dqtact2020">2020</router-link>※始めていません<br>
        <router-link to="/dqtact2021">2021</router-link>※1.5周年から開始<br>
        <router-link to="/dqtact2022">2022</router-link><br>
        <router-link to="/dqtact2023">2023</router-link><br>
        <router-link to="/dqtact2024">2024</router-link><br>
    </nav>  <router-view/>
  </template>

<script>
import Vue from 'vue'
import VueGoodTablePlugin from 'vue-good-table';

export default {
  el: "#app",
   data:{
     now: "00:00:00" //now: == {{}}
   },
   methods: {
     time: function(e){  //function(e) この引数eは、eventの「e」
       let date = new Date();  //new演算子でオブジェクトのインスタンスを生成
        //現在時刻の取得 **ここからはjavascript**
         this.now = date.getHours() + ":"
         + date.getMinutes() + ":" +
         date.getSeconds();
     }
   },
  data(){
    return {
      columns: [
        { label: '名前', field: 'name' },
        { label: '年齢', field: 'age', type: 'number' },
        { label: '性別', field: 'sex' },
      ],
      rows: [
        { id:1, name:"太郎", age: 20, sex: '男性' },
        { id:2, name:"花子", age: 24, sex: '女性' },
        { id:3, name:"次郎", age: 16, sex: '男性' },
      ],
    };
  },
};
</script>