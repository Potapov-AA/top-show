<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue"; 
import CardComponent from "@/components/CardComponent.vue";
import PlayersComponent from "@/components/PlayersComponent.vue";


import { useTopStore } from "@/stores/top";
import { onBeforeMount } from "vue";

function getImage(imageName) {
  return new URL("../assets/images/" + imageName + ".jpg", import.meta.url)
    .href;
}

onBeforeMount(() => {
  if (!useTopStore().isRoundStart) {
    useTopStore().startRound();
  }
});
</script>

<template>
  <div class="background d-flex flex-column">
    <HeaderComponent/>

    <v-row v-if="useTopStore().winner == null">
      <v-spacer/>
      <v-col
      cols="5"
      class="border pt-7 pr-5"
      style="height: 80vh;"
      >
        <CardComponent
          :name="useTopStore().firstHalf[0].name"
          :image-name="useTopStore().firstHalf[0].imageName"
          :half="1"
        />
      </v-col>
      <v-col
      cols="1"
      class="border d-flex align-center justify-center"
      style="height: 80vh;"
      >
        <p class="text-vs">VS</p>
      </v-col>
      <v-col
      cols="5"
      class="border pt-7 pl-5"
      style="height: 80vh;"
      >
        <CardComponent
          :name="useTopStore().secondHalf[0].name"
          :image-name="useTopStore().secondHalf[0].imageName"
          :half="2"
        />
      </v-col>
      <v-spacer/>
    </v-row>
    <v-row v-else class="d-flex justify-center ">
      <v-col
        cols="5"
      >
        <CardComponent
        :name="useTopStore().winner.top.name"
        :image-name="useTopStore().winner.top.imageName"
        :half="-1"
      />
    </v-col>
    </v-row>
  </div>
  <v-btn @click="useTopStore().startRound()" class="mt-5"
        >НАЧАТЬ НОВУЮ ИГРУ</v-btn
      >
</template>

<style scoped>
  .background {
    background: linear-gradient(to bottom left, #32A0D1, #27AC99 62%, #C8C748);
    height: 100vh;
  }

  .text-vs {
    font-size: 128px;
    font-family: "Palanquin Dark", sans-serif;
    font-weight: 700;
    font-style: normal;
  }
</style>
