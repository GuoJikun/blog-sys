<template>
    <div>234324</div>
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
            articleList().then(res => {
                if (res.code === 200) {
                    this.tableData = res.data;
                }
            });
        },
    },
};
</script>
