<script setup>
import { useTopStore } from '@/stores/top'

const props = defineProps({
  name: String,
  imageName: String,
  half: Number,
});

function getImage(imageName) {
  return new URL("../assets/images/" + imageName + ".jpg", import.meta.url).href;
}

function updateTop() {

  if (props.half == 1) {

    var element1 = document.getElementById('top-card-1');
    element1.className += ' animation-win-1';

    var element2 = document.getElementById('top-card-2');
    element2.className += ' animation-hiden';
    

    setTimeout(() => { 
      useTopStore().updateArray(props.half);
      element1.className = 'animation-visible';
      element2.className = 'animation-visible';
    }, 4000);

    setTimeout(() => {
      element1.className = '';
      element2.className = '';
    }, 5000);
  } else {

    var element1 = document.getElementById('top-card-2');
    element1.className += ' animation-win-2';

    var element2 = document.getElementById('top-card-1');
    element2.className += ' animation-hiden';

    setTimeout(() => { 
      useTopStore().updateArray(props.half);
      element1.className = 'animation-visible';
      element2.className = 'animation-visible';
    }, 4000);

    setTimeout(() => {
      element1.className = '';
      element2.className = '';
    }, 5000);
  }
}
</script>

<template>
  <div :id="'top-card-' + props.half" class="" style="height: 74vh;"> 
    <div class="top-title-block" style="height: 6%;">
      <p class="text-top-title" align="center">{{ props.name }}</p>
    </div>
    <div class="top-image-block d-flex" style="height: 94%;">
      <v-img
        aspect-ratio="1/1"
        :src="getImage(props.imageName)"
        @click="updateTop()"
      />
    </div>
  </div>
</template>

<style scoped>
.top-title-block {
  border: solid 3px;
  border-radius: 30px 30px 0px 0px;
  background-color: white;
  box-shadow: 0 10px 6px 1px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index:1;
}

.text-top-title {
  font-size: 24px;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-style: normal;
}

.top-image-block {
  border-right: solid 3px;
  border-bottom: solid 3px;
  border-left: solid 3px;
  border-radius: 0px 0px 60px 60px;
  background: white;
  box-shadow: 5px 10px 6px 1px rgba(0, 0, 0, 0.25);
  position: relative;
}

@keyframes go_right {
    from {
      left: 0px;
    }
    to {
      left: calc(63%);
    }
  }

.animation-win-1 {
  animation: go_right 3s forwards, hidden 1s forwards;
  animation-delay: 0s, 3s;
  position: relative;
}

@keyframes go_left {
  from {
      right: 0px;
    }
    to {
      right: calc(63%);
    }
}

.animation-win-2 {
  animation: go_left 3s forwards, hidden 1s forwards;
  animation-delay: 0s, 3s;
  position: relative;
}

@keyframes hidden {
  from {
    opacity: 1;
    visibility: visible;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
}

.animation-hiden {
  animation: hidden 1s;
  animation-fill-mode: forwards;
  position: relative;
}

@keyframes visible {
  from {
    opacity: 0;
    visibility: hidden;
  }
  to {
    opacity: 1;
    visibility: visible;
  }
}

.animation-visible {
  animation: visible 2s;
  position: relative;
}
</style>
