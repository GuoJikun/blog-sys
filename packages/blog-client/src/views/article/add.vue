<template>
    <Editor class="editor" :value="value" :plugins="plugins" @change="handleChange" />
</template>

<script>
import { Editor } from "@bytemd/vue-next";
import gfm from "@bytemd/plugin-gfm";

const plugins = [
    gfm(),
    // Add more plugins here
];

export default {
    components: { Editor },
    data() {
        return { value: "", plugins };
    },
    methods: {
        handleChange(v) {
            this.value = v;
        },
    },
};
</script>

<style lang="scss" scoped>
.editor {
    height: 100vh;
    border: 1px solid var(--el-border-color);
    font-size: 14px;
    :deep(.bytemd-toolbar),
    :deep(.bytemd-toolbar-left),
    :deep(.bytemd-toolbar-right),
    :deep(.bytemd-status) {
        display: flex;
        align-content: center;
    }
    :deep(.bytemd-toolbar) {
        justify-content: space-between;
        border-bottom: 1px solid var(--el-border-color);
        padding: 12px 0;
    }
    :deep(.bytemd-toolbar-icon) {
        display: inline-flex;
        margin: 0 6px;
    }
    :deep(.bytemd-status) {
        border-top: 1px solid var(--el-border-color);
        justify-content: space-between;
        padding: 6px 0;
    }
    :deep(.bytemd-hidden) {
        display: none;
    }
}
div[data-tippy-root][id^="tippy-"] {
    font-size: 13px;
    display: block !important;
}
</style>
