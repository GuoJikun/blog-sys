<template>
    <div>
        <t-table :data="tableData" :loading="loading">
            <el-table-column label="标题"></el-table-column>
            <el-table-column label="摘要"></el-table-column>
            <el-table-column label="标签"></el-table-column>
            <el-table-column label="创建人"></el-table-column>
            <el-table-column label="创建时间"></el-table-column>
        </t-table>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import Pager from '@/mixins/pager.js'

export default defineComponent({
    mixins: [Pager],
    data() {
        return {}
    },
    methods: {}
})
</script>

<style lang="scss" scoped></style>
