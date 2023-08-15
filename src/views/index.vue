<template>
    <div class="container">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="page1" name="first"></el-tab-pane>
            <el-tab-pane label="page2" name="second"></el-tab-pane>
        </el-tabs>
        <router-view></router-view>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            activeName: 'first'
        };
    },
    methods: {
        handleClick(e) {
            if (this.activeName === 'first') {
                this.$router.push('/index/page1')
            }
            if (this.activeName === 'second') {
                this.$router.push('/index/page2')
            }
        }
    }
};
</script>
  
<style scoped >
.container {
    width: 100%;
    height: 100%;
    padding: 20px;
}
</style>