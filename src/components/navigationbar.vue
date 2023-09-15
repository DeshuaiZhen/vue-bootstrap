<template>
<nav class="navbar navbar-expand-md navbar-dark bg-dark" id="indexs" style="background-color: black;">
    <!-- brand让其颜色跟随nav变化而变化 -->
    <span class="navbar-brand">Logo</span>
    <!-- navbar-toggler让样式更好看 -->
    <button class="navbar-toggler" data-toggle="collapse" data-target="#navbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <!-- 屏幕缩小会隐藏 -->
    <div id="navbar" class="collapse navbar-collapse">
        <!-- ml-auto可让其在右侧显示 -->
        <ul class="navbar-nav">
            <li class="nav-item"><a href="#1" class="nav-link active" @click.prevent="changeHandle1">首页</a></li>
            <li class="nav-item"><a href="#2" class="nav-link" @click.prevent="changeHandle2">音乐</a></li>
            <li class="nav-item"><a href="#3" class="nav-link" @click.prevent="changeHandle3">电影</a></li>
            <li class="nav-item"><a href="#4" class="nav-link @click.prevent='changeHandle4' disabled">介绍</a></li>
        </ul>
        <span class="navbar-text"></span>
        <form class="form-inline d-flex" style="margin-left: auto;">
            <input type="text" class="form-control" placeholder="“请输入Merry Christmas”" id="input1">
            <button class="btn btn-outline-secondary" id="Christmas">圣诞快乐</button>
        </form>
    </div>
</nav>
<div style="height: 0.5px; background-color: white; border: none;"></div>

<!-- 动态组件 -->
<keep-alive>
    <component :is="tabComponent"></component>
</keep-alive>
</template>

<script scoped>
//nav逻辑功能
window.onload = function() {
    var element = document.getElementById("indexs");
    var color1="linear-gradient(to right, #d16ba5, #bf6eb1, #ab73ba, #9477bf, #7c7ac1, #6a87cd, #5593d5, #3c9eda, #1bb6e8, #04cef0, #31e5f3, #5ffbf1)";
    var color3="linear-gradient(to right, #f61767, #ec1f86, #d934a3, #be49bc, #9a5ace, #7c71e3, #5584f1, #0095f9, #00b1ff, #00c8f8, #00dce3, #28edc8)";
    var color2="linear-gradient(to right, #f6171e, #fb0048, #f4006f, #e00095, #be00b7, #9a50dc, #6773f4, #008dff, #00b2ff, #00cde6, #00df97, #80e739)";
    var colors = [color1, color2, color3];
    var index = 0;
    
    var num=0;
    var intervalId;
    //鬼畜特效触发
    function changeColor() {
        element.style.backgroundImage = colors[index];
        index = (index + 1) % colors.length;
    }
    var button = document.getElementById("Christmas");
    var input=document.getElementById("input1");
    button.addEventListener("click", function(e) {
        e.preventDefault();
        var text = input.value;
        if(text==="Merry Christmas"){
            intervalId =setInterval(changeColor, 100); // 每隔100ms调用changeColor函数
        }
    });
};

//nav下方组件切换
    import { defineAsyncComponent } from 'vue';
    import Page1 from '../page1/page1.vue';
    //异步加载组件，使得在使用B组件时才加载B组件
    const Page2=defineAsyncComponent(()=>
    import('../page2/page2.vue'),
    );
    const Page3=defineAsyncComponent(()=>
    import('../page3/page3.vue'),
    );
    const Page4=defineAsyncComponent(()=>
    import('../page4/page4.vue'),
    );
    export default{

    data(){
        return{
        //注意使用的是字符串
        tabComponent:"Page1",
        };
    },

    components:{
        Page1,
        Page2,
        Page3,
        Page4,
    },

    methods:{
        //组件功能
        changeHandle1(){
        this.tabComponent="Page1";
        },
        changeHandle2(){
        this.tabComponent="Page2";
        },
        changeHandle3(){
        this.tabComponent="Page3";
        },
        changeHandle4(){
        this.tabComponent="Page4";
        },
    },
    };
</script>
