<script setup>
import { useTopStore } from "@/stores/top";

import PlayersComponent from "@/components/PlayersComponent.vue";

const publicPath = import.meta.env.BASE_URL

</script>

<template>
    <v-row>
        <v-spacer/>
        <v-col
            cols="2"
            class="border d-flex align-center"
            style="height: 20vh;"
        >   
            <div>
                <PlayersComponent :id="1"/>
            </div>
        </v-col>
        <v-col
            cols="2"
            class="border d-flex align-center"
            style="height: 20vh;"
        >   
            <div>
                <PlayersComponent :id="2"/>
            </div>
        </v-col>
        <v-col
            cols="3"
            class="border d-flex flex-column align-center justify-center"
            style="height: 20vh;"
        >
            <div class="border">
                <img :src="`${publicPath}icons/crown.svg`"  width="95px" height="80px">
            </div>
            <div class="number-round-block">
                <p class="number-text" align="center"><b>{{ useTopStore().roundNumber }}/{{ useTopStore().roundSize }}</b></p>
            </div>
        
        </v-col>
        <v-col
            cols="2"
            class="border d-flex align-center"
            style="height: 20vh;"
        >   
            <div>
                <PlayersComponent :id="3"/>
            </div>
        </v-col>
        <v-col
            cols="2"
            class="border d-flex align-center"
            style="height: 20vh;"
        >   
            <div>
                <PlayersComponent :id="4"/>
            </div>
        </v-col>
        <v-spacer/>
    </v-row>
</template>

<style scoped>
.number-round-block {
    border: solid 3px;
    border-radius: 40px;
    background-color: white;
    width: 150px;
}

.number-text {
    font-size: 32px;
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    font-style: normal;
}
</style>
