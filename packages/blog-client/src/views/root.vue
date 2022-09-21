<template>
    <div class="container-front">
        <root-header></root-header>
        <div class="container-wrap">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import RootHeader from "@/components/root-header.vue";
export default {
    name: "RootLayout",
    components: { RootHeader },
};
</script>

<style lang="scss" scoped>
.container-wrap {
    width: 1000px;
    margin: 0 auto;
}
</style>
