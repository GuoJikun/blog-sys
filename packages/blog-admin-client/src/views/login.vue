<template>
    <div class="login">
        <div class="login-container">
            <h1 class="login-header">登录</h1>
            <el-form :model="formItem" ref="formRef">
                <el-form-item>
                    <el-input
                        :prefix-icon="User"
                        v-model.trim="formItem.username"
                        maxlength="11"
                        placeholder="请输入用户名"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input
                        :prefix-icon="Lock"
                        type="password"
                        v-model.trim="formItem.password"
                        show-password
                        placeholder="请输入密码"
                    ></el-input>
                </el-form-item>
                <div style="text-align: center">
                    <el-button type="primary" style="width: 100px" @click="submits">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { login } from '@/api/user.js'

const formItem = ref({
    username: '',
    password: ''
})

const formRef = ref()

const submits = () => {
    formRef.value.validate((valid) => {
        if (valid) {
            const data = {
                account: formItem.value.username,
                password: formItem.value.password
            }
            login(data).then((res) => {
                if (res.code === 200) {
                    console.log(res.data)
                } else {
                    console.log(res.msg)
                }
            })
        }
    })
}
</script>

<style lang="scss" scoped>
.login {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: cadetblue;
    &-container {
        width: 320px;
        background-color: #ffffff;
        border-radius: 8px;
        padding: 24px;
    }
    &-header {
        font-size: 20px;
        color: var(--el-text-color-primary);
        font-weight: 500;
        text-align: center;
        margin-bottom: 24px;
    }
}
</style>
