<template>
    <div class="editor">
        <Editor
            class="editor-item"
            mode="split"
            :value="value"
            :plugins="plugins"
            @change="handleChange"
            :uploadImages="uploadImage"
        ></Editor>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Editor } from "@bytemd/vue-next";
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight";
import "bytemd/dist/index.css";
import "highlight.js/styles/default.css";

export default defineComponent({
    components: { Editor },
    setup() {
        const value = ref("");
        const plugins = ref([gfm(), highlight()]);
        const handleChange = v => {
            value.value = v;
        };
        const uploadImage = imgList => {
            console.log(imgList);
            return new Promise((resolve, reject) => {
                resolve(
                    imgList.map(c => {
                        const url = URL.createObjectURL(c);
                        return { url, alt: c.name, raw: c };
                    })
                );
            });
        };
        return {
            value,
            plugins,
            handleChange,
            uploadImage,
        };
    },
});
</script>

<style lang="scss" scoped>
.editor {
    height: 100vh;
    font-size: 14px;
    &-item {
        height: 100%;
    }
    :deep(.bytemd) {
        height: 100%;
    }
}
div[data-tippy-root][id^="tippy-"] {
    font-size: 13px;
    display: block !important;
}
</style>
