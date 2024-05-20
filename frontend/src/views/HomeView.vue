<script setup>
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
  <div class="h-screen d-flex flex-column">
    <div class="text-center mt-4 mb-4">
      <h1 class="h1">ТОП ШОУ</h1>
      <div v-if="useTopStore().winner == null">
        <div>
          {{ useTopStore().roundNumber }} / {{ useTopStore().roundSize }}
        </div>
        <PlayersComponent/>
      </div>
      <div v-else>ПОБЕДИТЕЛЬ</div>
    </div>
    <div
      v-if="useTopStore().winner == null"
      class="d-flex justify-center align-center"
    >
      <CardComponent
        :name="useTopStore().firstHalf[0].name"
        :image-name="useTopStore().firstHalf[0].imageName"
        :half="1"
      />
      <div>
        <h1>V.S.</h1>
      </div>
      <CardComponent
        :name="useTopStore().secondHalf[0].name"
        :image-name="useTopStore().secondHalf[0].imageName"
        :half="2"
      />
    </div>
    <div v-else class="d-flex justify-center align-center flex-column">
      <CardComponent
        :name="useTopStore().winner.name"
        :image-name="useTopStore().winner.imageName"
        :half="-1"
      />
      <v-btn @click="useTopStore().startRound()" class="mt-5"
        >НАЧАТЬ НОВУЮ ИГРУ</v-btn
      >
    </div>
  </div>
</template>
