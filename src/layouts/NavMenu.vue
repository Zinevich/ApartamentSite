<template>
    <div id="app">
        <ElMenu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
        >
            <ElMenuItem
                    index=""

            >Hello</ElMenuItem>
            <ElMenuItem
                    index="/Home"
            >
                Home
            </ElMenuItem>
            <ElMenuItem
                    index="/About"
            >
                About
            </ElMenuItem>
            <ElMenuItem></ElMenuItem>
        </ElMenu>
        <RouterView />
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1',
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
            this.$router.push(key)
        }
    },
}
</script>
<style>

</style>