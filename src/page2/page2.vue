<template>
<!-- 小于md -->
<div class="d-md-none">
    <phone/>
</div>
<!-- 大于md -->
<div class="d-none d-md-block">
    <computer/>
</div>
</template>

<script>
import computer from './computer.vue';
import phone from './phone.vue';
export default{
    components:{
        computer,
        phone,
    },
}
</script>