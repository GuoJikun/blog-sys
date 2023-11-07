<template>
    <div class="page-index">
        <div class="page-banner"></div>
        <div class="page-index-body">
            <div class="page-index-article">
                <div v-for="item in tableData" :key="item.id" class="page-index-article-item">
                    <el-link type="primary">{{ item.title }}</el-link>
                    <p class="page-index-article-item-abstract">{{ item.abstract }}</p>
                </div>
            </div>
            <div class="page-index-other"></div>
        </div>
    </div>
</template>

<script>
import { list as articleList } from "@/api/article.js";
export default {
    data() {
        return {
            tableData: [],
        };
    },
    mounted() {
        this.getArticleList();
    },
    methods: {
        getArticleList() {
            const data = {
                page: 1,
                size: 10,
            };
            articleList(data).then(res => {
                console.log(res);
                if (res.code === 200) {
                    this.tableData = res.data || [];
                } else {
                    this.tableData = [];
                }
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.page-index {
    &-body {
        display: flex;
        width: 100%;
    }
    &-article {
        width: 700px;
        &-item {
            margin-top: 12px;
            padding: 12px;
            font-size: 15px;
            & + & {
                border-top: 1px solid var(--el-border-color-light);
            }
            &-abstract {
                font-size: 13px;
                margin: 8px 0;
            }
            &-extra {
                font-size: 12px;
            }
        }
    }
    &-other {
        background-color: grayscale($color: #00000014);
        margin-left: 24px;
        flex: 0 0 276px;
    }
}
</style>
