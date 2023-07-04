<script setup></script>

<template>
    <el-container>
        <el-aside>
            <el-menu>
                <el-menu-item>首页</el-menu-item>
                <el-menu-item>文章管理</el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <el-container>
                <el-header></el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-main>
    </el-container>
</template>
