<template>
<ul class='list'>
    <li v-for="(item, index) in chipsData" :key="item.title">
        <img :src="require(`@/assets/${item.img}`)" />
        <strong>{{ item.title }}</strong>
        <span>{{ item.desc }}</span>
        <b>{{ item.price }}원</b>
        <button v-on:click="sale(index)">구입하기</button>
    </li>
</ul>
</template>

<script>
export default {
    data() {
        return {
        
        }
    },
    props: ['chipsData'], // 재할당 불가능,
    methods: {
        sale(index) {
            this.$emit('sale_product', index);
        },
    }
}
</script>

<style>

</style>