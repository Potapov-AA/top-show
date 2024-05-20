<script setup>

import { useTopStore } from '@/stores/top'
import { onBeforeMount } from 'vue';

function getImage(imageName) {

  return new URL("../assets/images/" + imageName + ".jpg", import.meta.url).href;
}

onBeforeMount(() => {
  if (!useTopStore().isRoundStart) {
    useTopStore().startRound();
  }
})
</script>

<template>
  <div class="h-screen d-flex flex-column">
    <div class="text-center mt-4 mb-4">
      <h1 class="h1">ТОП ШОУ</h1>
      <div v-if="useTopStore().winner == null">{{ useTopStore().roundNumber }} / {{ useTopStore().roundSize }}</div>
      <div v-else>ПОБЕДИТЕЛЬ</div>
    </div>
    <div v-if="useTopStore().winner == null" class="d-flex justify-center align-center">
      <div class="d-flex flex-column mr-5">
        <div>
          <v-card width="45vw" height="85vh">
            <v-card-title class="text-center">
              {{ useTopStore().firstHalf[0].name }}
            </v-card-title>
            <v-img
              class="fill-height"
              aspect-ratio="1/1"
              cover
              :src="getImage(useTopStore().firstHalf[0].imageName)"
              @click="useTopStore().updateArray(1)"
            />
          </v-card>
        </div>
      </div>
      <div>
        <h1>V.S.</h1>
      </div>
      <div class="d-flex flex-column ml-5">
        <div>
          <v-card width="45vw" height="85vh">
            <v-card-title class="text-center"> 
            {{ useTopStore().secondHalf[0].name }}
            </v-card-title>
            <v-img
              class="fill-height"
              aspect-ratio="1/1"
              cover
              :src="getImage(useTopStore().secondHalf[0].imageName)"
              @click="useTopStore().updateArray(2)"
            />
          </v-card>
        </div>
      </div>
    </div>
    <div v-else class="d-flex justify-center align-center flex-column">
      <v-card width="45vw" height="80vh">
          <v-card-title class="text-center"> 
            {{ useTopStore().winner.name }}
          </v-card-title>
          <v-img
            class="fill-height"
            aspect-ratio="1/1"
            cover
            :src="getImage(useTopStore().winner.imageName)"
          />
      </v-card>
      <v-btn @click="useTopStore().startRound()" class="mt-5">НАЧАТЬ НОВУЮ ИГРУ</v-btn>
    </div>
  </div>
</template>
