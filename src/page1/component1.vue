<template>
<div class="jumbotron border border-dark mb-1 bg-dark text-white" style="border-radius: 0;">
        <!-- 2「」 -->
        <div class="row">
            <div class="col-8">
                <img src="../assets/image/merry-christmas-mr-lawrence.jpg" class="border rounded border-white mb-3" style=" margin-top: 30px;">
                <!-- 轮播图 -->
                <h1 class="display-4 white-font" style="margin-top: 25px;">Merry Christmas Mr.Lawrence</h1>
                <!-- text-muted低调一点 -->
                <p class="text-muted">如若让最渺小的情感发了芽，纵使花费了最大的克制，也无济于事。</p>
                <!-- 一条线 -->
            </div>

            <div class="col-4">
                <!-- 轮播图 -->
                <div style=" margin-top: 30px;" class="float-right d-none d-sm-block">
                    <!-- slide设置为滑动模式-->
                    <div id="carousel" class="carousel slide">
                        <!-- 加上切换栏 -->
                        <ol class="carousel-indicators">
                            <li data-target="#carousel" data-slide-to="0" class="active"></li>
                            <li data-target="#carousel" data-slide-to="1" class="active"></li>
                            <li data-target="#carousel" data-slide-to="2" class="active"></li>
                            <li data-target="#carousel" data-slide-to="3" class="active"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="../assets/image/场景1.jpg" class="w-100" alt="">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/image/场面2.jpg" class="w-100" alt="">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/image/场面3.jpeg" class="w-100" alt="">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/image/场面4.jpg" class="w-100" alt="">
                            </div>
                
                            <!-- 加上左右按钮 -->
                            <a href="#carousel" class="carousel-control-prev" data-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </a>
                            <a href="#carousel" class="carousel-control-next" data-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="height: 30px;" class="bg-dark container-fluid"></div>
        <div style="height: 0.5px; background-color: white; border: none;"></div>

        <!-- 3 -->
        <p class="lead white-font">
            也许花费几世轮回的运气，碰到了仅仅一见便无法自拔地倾慕着的人，即使这种爱慕降临到对方身上即是死亡。
            <br>
            对一个人的每一丁点思绪、念想和倾慕都是一颗水珠，当水珠累成溪流时，我们便涓涓暗恋着；当水珠涌作江潮时，我们便狂热追求着；当水珠聚为大海时，我们便平静回忆着。
            <br>
            或许一辈子也没有机会对喜欢的人说上一句“我爱你”。殊不知这句话早已渗透在与之的每一句话里：
            <br>
            “春节快乐！”
            <br>
            “生日快乐！”
            <br>
            “圣诞快乐！”
            <br>
        </p>
        <p class="lead" style="margin-bottom: 5px;">
            <button type="button"  class="btn btn-outline-secondary" data-toggle="tooltip" data-placement="bottom" title="^o^圣诞快乐o.O">Solute</button> 
        </p>
    </div>
</template>

<script>
import $ from 'jquery';
import 'carousel-plugin';
export default {
    methods:{
        changeHandle2(){
            this.tabComponent="Page2";
        },
    },
    mounted() {
      this.initCarousel();
      this.initTooltips();
    },
    methods: {
      initCarousel() {
        $('#carousel').carousel({
          interval: 2000,
        });
      },
      initTooltips() {
        $('[data-toggle="tooltip"]').tooltip({
          delay: { "show": 200, "hide": 0 }
        });
      }
    }
}
</script>
<style scoped>
    .white-font {
        filter: brightness(0.8); /* 将亮度调暗为80% */
    }
    
</style>