<script setup>
import { useTopStore } from "@/stores/top";

import PlayersComponent from "@/components/PlayersComponent.vue";

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
            class="d-flex flex-column align-center"
        >
            <div class="border">
                ffff
            </div>
            <div class="border">
                ffff
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

</style>
