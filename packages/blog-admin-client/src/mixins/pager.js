export const pager = {
    data() {
        return {
            pager: {
                limit: 10,
                offset: 1,
                sizes: [10, 20, 30, 50],
                total: 0,
            },
            tableData: [],
            loading: false,
            loadingStartTime: 0,
        };
    },
    methods: {
        handlerSizeChange(val) {
            this.pager.limit = val;
            this.handlerCurrentChange(this.pager.offset);
        },

        search(ele) {
            this.pager.offset = 1;
            if (ele) {
                this.$refs[ele].validate(valid => {
                    if (valid) {
                        this.handlerCurrentChange(this.pager.offset, true);
                    }
                });
            } else {
                this.handlerCurrentChange(this.pager.offset, true);
            }
        },
        resetForm(ele) {
            this.$refs[ele].resetFields();
        },
        startLoading() {
            this.loading = true;
            this.loadingStartTime = new Date().getTime();
        },
        endLoading(delay = 500) {
            let now = new Date().getTime();
            let diff = now - this.loadingStartTime;
            if (diff < delay) {
                setTimeout(() => {
                    this.loading = false;
                }, delay - diff);
            } else {
                this.loading = false;
            }
        },
    },
};

export default pager;
