<template>
    <!-- 播放器功能，不使用默认样式，默认参见电脑端 -->
    <audio id="music-player">
        <source src="../assets/music/Merry Christmas Mr. Lawrence-坂本龍一.flac" type="audio/mpeg">
    </audio>
    <!-- 播放器样式 -->
    <div class="player-container">
        <div class="album-cover mb-5" >
            <img src="../assets/image/musicover2.jpg" class="rounded-circle">
        </div>
        <div class="music-info">
            <h4>Merry Christmas Mr.Lawrence</h4>
            <p>坂本龙一</p>
        </div>
        <div class="control-buttons">
            <button>播放/暂停</button>
        </div>

        <input type="range" id="progress-slider" min="0" max="100" value="0" step="0.1" style="width: 80%;">
        <div style="width: 80%;" class="mx-auto">
            <small id="time">0:00</small>
            <small class="float-right">4:40</small>
        </div>
            
        <br>
        <h6 id="lyrics1" class="mx-2"></h6>
        <br>
        <h6 id="lyrics2" class="mx-2"></h6>
    </div>
</template>

<style scoped>
    /* 播放器容器样式 */
    .player-container {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #f5f5f5;
    }

    /* 音乐封面样式 */
    .album-cover {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-color: #ccc;
      margin-bottom: 20px;
    }

    /* 音乐信息样式 */
    .music-info {
      text-align: center;
      margin-bottom: 20px;
    }

    /* 播放控制按钮样式 */
    .control-buttons {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }

    .control-buttons {
      margin: 0 10px;
      padding: 10px;
      border: none;
      border-radius: 50%;
      background-color: #ccc;
      color: #fff;
      font-size: 16px;
    }

    /* 进度条样式 */
    .progress-slider {
      height: 10px;
      background-color: #ccc;
      margin-bottom: 20px;
    }

</style>

<script scoped>
    const stop1 = 4;
    const stop2 = 40;
    const lyrics1 = {
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
        
    const lyrics2 = {
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

    export default{
        data(){
            return{
                //num用于每0.1秒切换状态，用于判断是否让currentTime++
                num : 0,
                playButton : null,
                // 播放器状态
                isPlaying : false,
                currentTime : 0,
                time : '0:00',
                audioPlayer : null,
                progressSlider : null,
            };
        },
        methods:{
            // 播放音乐
            playMusic() {
                this.isPlaying = true;
                this.playButton.textContent = '暂停';
                this.audioPlayer.play();
                // TODO: 播放音乐的逻辑
            },

            // 暂停音乐
            pauseMusic() {
                this.isPlaying = false;
                this.playButton.textContent = '播放';
                this.audioPlayer.pause();
                // TODO: 暂停音乐的逻辑
            },

            // 播放/暂停音乐
            togglePlay() {
            if (this.isPlaying) {
                this.pauseMusic();
            } else {
                this.playMusic();
            }
            },

            //更新进度条和时间
            updateProgressBar() {
                //时间
                let min = Math.floor(this.currentTime / 60);
                let min66 = "ok";
                let second1 = this.currentTime % 60;
                let second2 = Math.floor(second1);
                let second66 = "ok";
                min66 = min.toString();
                if(second2 < 10)
                second66 = "0"+second2.toString();
                else
                second66 = second2.toString();
                this.time.innerHTML = min66+":"+second66;
                if ((second2 >= stop2) && (min === stop1))
                    this.time.innerHTML = "4:40";
                //进度条
                const progressWidth = (this.audioPlayer.currentTime / this.audioPlayer.duration) * 100;
                this.progressSlider.value = progressWidth;
            },
        },

        mounted() {
            // 获取DOM元素
            this.audioPlayer = document.getElementById('music-player');
            this.playButton = document.querySelector('.control-buttons');
            this.progressSlider = document.getElementById('progress-slider');
            this.time = document.getElementById('time');

            // 获取歌词dom
            const lyricsContainer1 = document.getElementById("lyrics1");
            const lyricsContainer2 = document.getElementById("lyrics2");
            //拖到进度条
            this.progressSlider.addEventListener('input', () => {
                const progressValue = this.progressSlider.value;
                const currentTime = (progressValue / 100) * this.audioPlayer.duration;
                this.audioPlayer.currentTime = currentTime;
            });

            setInterval(() => {
                this.currentTime=this.audioPlayer.currentTime;
                this.num = (this.num++) % 9;
                if ((this.isPlaying) && (!this.num)) {
                    this.currentTime++;
                    this.updateProgressBar();
                }
            }, 100);

            // 监听音频的播放事件
            this.audioPlayer.addEventListener("timeupdate", function() {
                const currentTime1 = Math.floor(this.currentTime);
                if (lyrics1[currentTime1]) {
                lyricsContainer1.textContent = lyrics1[currentTime1];
                }
                if (lyrics2[currentTime1]) {
                lyricsContainer2.textContent = lyrics2[currentTime1];
                }
            });

            // 启动播放器
            this.playButton.addEventListener('click', this.togglePlay);
        },
    }
    /*
    // 更新进度条
    audioPlayer.addEventListener('timeupdate', function() {
        const progressWidth = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressSlider.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    });
    */
</script>