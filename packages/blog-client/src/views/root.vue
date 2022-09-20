<template>
    <root-header></root-header>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import RootHeader from "@/components/root-header.vue";
export default {
    name: "RootLayout",
    components: { RootHeader },
};
</script>
