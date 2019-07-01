<template>
    <div id="app">

        <ElMenu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
        >
            <ElMenuItem >
                <img src="../assets/LogO.png" alt="Logo" style="height: 5em; width: 6em;">
            </ElMenuItem>
            <ElMenuItem
                    index="/home"

            >Главная</ElMenuItem>
<!--            <ElMenuItem-->
<!--                    index="/Home"-->
<!--            >-->
<!--                Квартиры-->
<!--            </ElMenuItem>-->
            <ElSubmenu
                    index="/sale"
            >
                <template slot="title">Продажа</template>
                <ElMenuItem
                        index="/Sale/Apartmentsale"
                >Квартира</ElMenuItem>
                <ElMenuItem
                        index="/Sale/Housesale"
                >Дом</ElMenuItem>
            </ElSubmenu>
            <ElSubmenu
                    index="/rent"
            >
                <template slot="title">Аренда</template>
                <ElMenuItem
                        index="/Rent/Apartmentrent"
                >Квартира</ElMenuItem>
                <ElMenuItem
                        index="/Rent/Houserent"
                >Дом</ElMenuItem>
            </ElSubmenu>
            <ElMenuItem
                    index="/About"
            >
                О компании
            </ElMenuItem>
            <v-spacer></v-spacer>
            <ElMenuItem style="float: right">
                <ElButton type="primary" plain>Вход</ElButton>
                <ElButton type="primary" plain>Регистрация</ElButton>
            </ElMenuItem>
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
            url: './assets/LoGo.png'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            // console.log(key, keyPath);
            this.$router.push(key)
        }
    },
}
</script>
<style>
.el-menu-demo {
    height: 5em;
}

</style>