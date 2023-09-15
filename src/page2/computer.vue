<template>
  <div id="color" class="container-fluid" style="position: absolute ;height: 100% ; width: 100%; background-color: #f35360;">
        <div class="row">
          <div class="c col-1"></div>
          <!-- 小于md -->
          <div class="c col-4 d-md-none mx-5">
              <div class="mt-5"></div>
              <div class="card">
                  <img src="../assets/image/musicover.jpg" class="card-img-top" alt="Album Cover">
                  <div class="card-body">
                    <h5 class="card-title">Merry Christmas Mr. Lawrence</h5>
                    <p class="card-text">坂本龍一</p>
                    <audio controls style="width: 100%; ">
                      <source src="../assets/music/Merry Christmas Mr. Lawrence-坂本龍一.flac" type="audio/mpeg">
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
          </div>
          
          <!-- 大于md -->
          <div class="c col-4 d-none d-md-block">
              <div class="mt-5"></div>
              <div class="card">
                  <img src="../assets/image/musicover.jpg" class="card-img-top" alt="Album Cover">
                  <div class="card-body">
                    <h5 class="card-title">Merry Christmas Mr. Lawrence</h5>
                    <p class="card-text">坂本龍一</p>
                    <audio controls style="width: 100%;" id="audio">
                      <source src="../assets/music/Merry Christmas Mr. Lawrence-坂本龍一.flac" type="audio/mpeg">
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
          </div>

          <div class="c col-7" >
              <div class="row d-flex align-items-center justify-content-center">
                  <div class="c col-9">
                      <div class="" style="position: absolute; padding-top: 45%;">
                          <h2 id="lyrics3" class="text-muted">
                            《圣诞快乐，劳伦斯先生，Merry Christmas Mr. Lawrence》
                          </h2>
                          <br><br>
                          <h2 id="lyrics4" class="text-muted">
                            这首曲子是坂本龙一为大岛渚的同名电影谱写的
                          </h2>
                      </div>
                  </div>
                  <div class="c col-3">
                      <!-- 颜色设置 -->
                      <div class="dropdown">
                          <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false" id="butt" style="background-color: #f35360; color: white;">
                          颜色
                          </button>
                          <div class="dropdown-menu" id="menu" style="background-color: #f35360; border: none;">
                              <a class="dropdown-item" href="#" v-on:click="changeColor(0)" style="background-color: #f35360; width: 70px; height: 30px;"></a>
                              <a class="dropdown-item" href="#" v-on:click="changeColor(1)" style="background-color: #f82283; width: 70px; height: 30px;"></a>
                              <a class="dropdown-item" href="#" v-on:click="changeColor(2)" style="background-color: #c822f8; width: 70px; height: 30px;"></a>
                              <a class="dropdown-item" href="#" v-on:click="changeColor(3)" style="background-color: #482be3; width: 70px; height: 30px;"></a>
                              <a class="dropdown-item" href="#" v-on:click="changeColor(4)" style="background-color: #2055d5; width: 70px; height: 30px;"></a>
                              <a class="dropdown-item" href="#" v-on:click="changeColor(5)" style="background-color: #20b8d5; width: 70px; height: 30px;"></a>
                              <a class="dropdown-item" href="#" v-on:click="changeColor(6)" style="background-color: #20d574; width: 70px; height: 30px;"></a>
                              <a class="dropdown-item" href="#" v-on:click="changeColor(7)" style="background-color: #5cd520; width: 70px; height: 30px;"></a>
                              <a class="dropdown-item" href="#" v-on:click="changeColor(8)" style="background-color: #bad520; width: 70px; height: 30px;"></a>
                              <a class="dropdown-item" href="#" v-on:click="changeColor(9)" style="background-color: #ede837; width: 70px; height: 30px;"></a>
                              <a class="dropdown-item" href="#" v-on:click="changeColor(10)" style="background-color: #edc437; width: 70px; height: 30px;"></a>
                              <a class="dropdown-item" href="#" v-on:click="changeColor(11)" style="background-color: #ed8537; width: 70px; height: 30px;"></a>
                              <a class="dropdown-item" href="#" v-on:click="changeColor(12)" style="background-color: #ea4623; width: 70px; height: 30px;"></a>
                              <a class="dropdown-item" href="#" v-on:click="changeColor(13)" style="background-color: #ea2323; width: 70px; height: 30px;"></a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script scoped>
//背景色
var color1 = new Array(14);
        color1[1]="#f35360";
        color1[2]="#f82283";
        color1[3]="#c822f8";
        color1[4]="#482be3";
        color1[5]="#2055d5";
        color1[6]="#20b8d5";
        color1[7]="#20d574";
        color1[8]="#5cd520";
        color1[9]="#bad520";
        color1[10]="#ede837";
        color1[11]="#edc437";
        color1[12]="#ed8537";
        color1[13]="#ea4623";
        color1[14]="#ea2323";
        //字幕
        const lyrics3 = {
          0: "《圣诞快乐，劳伦斯先生，Merry Christmas Mr. Lawrence》",
          10: "这是他电影配乐的处女作",
          20: "电影原声中同时收录坂本龙一与前JAPAN乐团主唱David Sylvian合作的歌曲版",
          30: "如诗般的歌词配以空灵婉转的旋律",
          40: "极端网络乐评：",
          50: "这也是一个人一辈子里不可回避的一首曲",
          60: "美丽琴音里流淌着生命永远无法选择的宿命的悲剧感",
          70:"对人性纯粹的追求与矜持,对异样情欲的纠缠与否认",
          80:"所有这些有时沉重得无以承受",
          100:"孰对孰不对的选择更是令人应接不暇、心力交瘁",
          110:"当面对死去的人们只留下或深或浅的记忆",
          120:"然后满天飞舞起洁白的雪花",
          130:"四分多钟里几乎是相同的一段旋律在不断重复",
          140:"难道不需要别的音符吗？",
          150:"可是最深的情感往往埋藏在最简单的语言中",
          160:"我用了好多语调，好多断句，好多节奏",
          170:"为这曲子写点什么，写上一堆话?",
          180:"音乐宽广得像海洋",
          190:"只有不断、不断地听",
          200:"因他已唱尽我想说的一切话语，因他用了那么多不同的断句、节奏、音区",
          210:"渐急渐缓，渐起渐收，渐隐渐消",
          220:"我写重峦，写心也。我写幽泉，写心也",
          230:"然我心明灭",
          240:"圣诞快乐",
          270:"曲终人不见，江上数峰青",
        };
        const lyrics4 = {
          0: "这首曲子是坂本龙一为大岛渚的同名电影谱写的",
          10: "也是他最经典的作品之一",
          20: "但被命名为《Forbidden Colours》",
          30: "不禁使人身心涤荡",
          40: "《Merry Christmas,Mr. Lawrence》大抵算是坂本龙一的传世绝唱",
          50: "如果你没有听过，那你的生命也死掉了四分之一",
          60: "",
          70:"对真理信念的盲目与回避",
          80:"有时又是那般虚弱无力",
          100:"",
          110:"所有生命的美丽化作一句“圣诞快乐”",
          120:"飘落这世间每个干净与不干净的角落",
          130:"",
          140:"不需要铺垫，不需要高潮，不需要深化不需要渐隐吗？",
          150:"我只有一句话讲，只有一句话",
          160:"但其实从头至尾，我想说的就只有一句话",
          170:"可到头来却什么也写不出来",
          180:"而我的声音就像一个小岛，甚至还不如一个岛",
          190:"听Forbidden colour，听Merry Christmas mr.Laurence",
          200:"一直在弹的，却都是那段相同的旋律",
          210:"",
          220:"“幽咽泉流冰下难”，非弦涩，心涩",
          230:"谁人可知？",
          240:"Mr.Laurence",
          270:"solute Ryuichi Sakamoto",
        };

      export default {
        mounted(){
          //字幕变化
          //注意不能再使用lyrics1、lyrics2、lyricsContainer1和lyricsContainer2了，否则在PC端界面播放却让移动端界面字幕改变
          const audio = document.getElementById("audio");
          const lyricsContainer3 = document.getElementById("lyrics3");
          const lyricsContainer4 = document.getElementById("lyrics4");
          // 监听音频的播放事件
          audio.addEventListener("timeupdate", function() {
            const currentTime = Math.floor(audio.currentTime);
            if (lyrics3[currentTime]) {
              lyricsContainer3.textContent = lyrics3[currentTime];
              
            }
            if (lyrics4[currentTime]) {
              lyricsContainer4.textContent = lyrics4[currentTime];
            }
          });

          //该变颜色
        },
        methods:{
          changeColor(num) {
            var res1 = document.getElementById("color");
            res1.style.backgroundColor = color1[num];
            var res2 = document.getElementById("menu");
            res2.style.backgroundColor = color1[num];
            var res3 = document.getElementById("butt");
            res3.style.backgroundColor = color1[num];
        }
        }
      }
</script>