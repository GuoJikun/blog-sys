<template>
    <div class="header">
        <div class="container header-inner">
            <div></div>
            <div>
                <div class="header-nav flex">
                    <template v-for="item in navList" :key="item.text">
                        <router-link :to="item.link" custom v-slot="{ href, navigate, isActive }">
                            <el-link :type="isActive ? 'primary' : 'default'" :href="href" @click="navigate" class="header-nav-item">
                                {{ item.text }}
                            </el-link>
                        </router-link>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RootHeader",
    data() {
        return {
            navList: [
                {
                    link: "/",
                    text: "首页",
                },
                {
                    link: "/article",
                    text: "博客",
                },
                {
                    link: "/tag",
                    text: "标签",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.header {
    border-bottom: 1px solid var(--el-border-color-lighter);
    display: flex;
    justify-content: center;
    &-inner {
        width: 1000px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
    }
}
.header-nav-item:not(:first-child) {
    margin-left: 12px;
}
</style>
