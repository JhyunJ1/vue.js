<template>
  <div class='sale'>
        <div v-for="(item, index) in saleData">
                        <strong>{{ item.title }}</strong> {{ item.price }}원
                        <button v-on:click="del(index)">삭제</button>
                        <br><br><hr><br>
                    </div>
                </div>
</template>

<script>
export default {
    data() {
                return {

                }
            },
            props: ['chipsData', 'saleData'],
            methods: {
                del(index) {

                    this.$emit('delete_product', index);
                },
            }
}
</script>

<style>

</style>