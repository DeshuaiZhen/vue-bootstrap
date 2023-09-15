<template>
<Component1/>
<Component2/>
<Component3/>
</template>

<script>
import Component1 from './component1.vue';
import Component2 from './component2.vue';
import Component3 from './component3.vue';
export default{
    components:{
        Component1,
        Component2,
        Component3,
    }
}
</script>

<style>
    .white-font {
        filter: brightness(0.8); /* 将亮度调暗为80% */
    }
</style>