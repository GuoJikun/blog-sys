<template>
    <div class="header">
        <div class="container">
            <div></div>
            <div>
                <div class="header-nav flex">
                    <a class="header-nav-item" href="'/page">首页</a>
                    <a class="header-nav-item" href="/page/articles">博客</a>
                    <a class="header-nav-item" href="/page/tags">标签</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RootHeader",
};
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid var(--el-border-color-base);
}
.header-nav-item:not(:first-child) {
    margin-left: 12px;
}
</style>
