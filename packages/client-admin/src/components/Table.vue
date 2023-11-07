<script lang="jsx">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        border: {
            type: Boolean,
            default: true
        }
    },
    setup(props, { attrs, slots }) {
        return () => (
            <el-table
                {...attrs}
                border={props.border}
                v-slots={slots}
                header-cell-style={{ backgroundColor: '#f5f7fa' }}
            ></el-table>
        )
    }
})
</script>
