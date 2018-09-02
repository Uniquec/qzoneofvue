<template>
  <top-bar>
    <div slot="my-home">
      <div class="qzone-message">
        <div class="qzone-head">
          <div class="head-title">
            <div class="qzone-name">
              <div>岁月静好</div>
              <i class="iconfont icon-pingguo"></i>
              <div class="rank-number">56</div>
              <i class="iconfont icon-p-shouji"></i>
            </div>
            <div class="qzone-address">http://837046740.qzone.qq.com</div>
          </div>
          <button>
            <i class="iconfont icon-dianzan1"></i>
            <div>4</div>
          </button>
        </div>
        <div class="homepage-nav">
          <div><img src="/static/head-portrait.jpg"></div>
          <div>
            <div class="qq-name">岁月静好。</div>
            <div class="yellow-diamond-message">
              <div class="diamond-rank">
                <a href="#" class="big-diamond"><i class="iconfont icon-diamonds"></i></a>
                <div>LV1</div>
              </div>
              <a href="#" class="growth-schedule">
                <div>成长值 1 成长速度 - 10点/天</div>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                       aria-valuemax="100">
                    0%
                  </div>
                </div>
              </a>
              <a href="#" class="renew-diamond">续费黄钻</a>
              <a href="#" class="lovers-diamond"><i class="iconfont icon-diamonds"></i></a>
            </div>
            <div class="nav-content">
              <a href="#">主页</a>
              <a href="#">日志</a>
              <a href="#">相册</a>
              <a href="#">留言板</a>
              <a href="#">说说</a>
              <a href="#">个人档</a>
              <a href="#">音乐</a>
              <a href="#">更多</a>
            </div>
          </div>
        </div>
      </div>

      <div class="homepage-content">
        <div class="homepage-lmessage">
          <div class="profile">
            <div>
              <div class="profile-number">532</div>
              <div>照片</div>
            </div>
            <div class="vertical-line"></div>
            <div>
              <div class="profile-number">25</div>
              <div>说说</div>
            </div>
            <div class="vertical-line"></div>
            <div>
              <div class="profile-number">0</div>
              <div>日志</div>
            </div>
          </div>
          <div class="personal-file">
            <div>个人档</div>
            <div><i class="iconfont icon-menu"></i> 20岁 金牛座 女 现居宁波</div>
            <div><i class="iconfont icon-xiexing"></i> 血型 其他</div>
          </div>
          <div class="recent-visitors">
            <div class="visitors-title">最近访客</div>
            <div class="visitors-image">
              <div class="portrait">
                <div v-for="item in list" class="image-square">
                  <img :src="item.image"/>
                  <div class="image-title">{{item.name}}</div>
                </div>
              </div>
              <a class="visitors-more">查看更多</a>
            </div>
          </div>
        </div>
        <div class="homepage-rmessage">
          <div class="photo-wall">
            <div class="left-image"><img src="../assets/pictureWall/image1.jpg" class="image1"></div>
            <div class="right-image">
              <div><img src="../assets/pictureWall/image2.jpg" class="image2"></div>
              <div><img src="../assets/pictureWall/image3.jpg" class="image3"></div>
            </div>
          </div>
          <div class="small-talk" v-for="(item,index) in talkerList">
            <div class="talker-message">
              <img src="/static/head-portrait.jpg" class="talker-image">
              <div class="talker-tips">
                <div class="talker-name">岁月静好。</div>
                <div>{{item.time}}</div>
              </div>
              <span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>
            </div>
            <div class="talk-content">
              <div class="words">{{item.content}}</div>
              <div class="talk-image"><img :src="item.pic"></div>
              <div class="mobile-logo"><i class="iconfont icon-p-shouji"></i>来自 {{item.equipment}}</div>
            </div>
            <div class="talk-message">
              <div class="looks-people">
                浏览{{item.watchNumber}}次
                <div class="more-operation">
                  <img src="../assets/iconImage/thumb.png" @click="dianzan(index)" v-if="!isThumb[index]">
                  <img src="../assets/iconImage/thumb1.png" @click="dianzan(index)" v-if="isThumb[index]">
                  <img src="../assets/iconImage/comment.png" @click="clickComment">
                  <img src="../assets/iconImage/share.png" @click="share">
                </div>
              </div>
              <div class="grey-line"></div>
              <div class="likes-people">
                <div class="icon-bgc"><i class="iconfont icon-dianzan1"></i></div>
                <div class="likes-name">{{likesarr[index].names}}{{likesarr[index].text}}{{item.starNumber}}人觉得很赞</div>
              </div>
            </div>
            <div class="specific-comments">
              <div class="comment">
                <div class="reviewer-comment" v-for="(comment,j) in item.comment">
                  <img :src="comment.pic">
                  <div class="comment-content">
                    <div class="main-comment" @mouseover="hoverCommentArea(j)"
                         @mouseout="leaveCommentArea(j)">
                      <div class="comment-from"><span>{{comment.from}}</span> : {{comment.content}}</div>
                      <div class="comment-time">{{comment.time}}</div>
                      <div class="comment-operation" v-show="isCommentHover[j]">
                        <img src="../assets/iconImage/comment.png">
                        <img src="../assets/iconImage/delete.png" @click="deleteBigComemnt(index,j)">
                      </div>
                    </div>
                    <div class="reply-comments" v-for="(reply,i) in comment.reply">
                      <div class="reply-comments-image">
                        <img :src="reply.pic">
                      </div>
                      <div class="reply-comments-content" @mouseover="hoverArea(i)"
                           @mouseout="leaveArea(i)">
                        <div><span>{{reply.from}} </span>回复<span>{{reply.to}} </span>: {{reply.content}}</div>
                        <div class="reply-info">
                          <div class="comment-time">{{reply.time}}</div>
                          <div class="reply-comment-operation" v-show="isHover[i]">
                            <img src="../assets/iconImage/comment.png">
                            <img src="../assets/iconImage/delete.png" @click="deleteComemnt(index,j,i)">
                          </div>
                        </div>
                        <!--<div class="for-reply-comment">-->
                          <!--<textarea placeholder="回复" class="comment-text" @click="clickComment"-->
                                    <!--v-model="comment[index]"></textarea>-->
                          <!--<i class="iconfont icon-camera"></i>-->
                        <!--</div>-->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="talk-comment">
              <textarea placeholder="评论" class="comment-text" @click="clickComment" v-model="comment[index]"></textarea>
              <i class="iconfont icon-camera"></i>
            </div>
            <div class="publish-comment" v-if="isCommentClicked">
              <div class="comment-expression">
                <i class="iconfont icon-biaoqing"></i>
                <div class="expression-scircle"></div>
              </div>
              <i class="iconfont icon-aite"></i>
              <div class="white-circle"></div>
              <div class="private-comment">私密评论</div>
              <i class="iconfont icon-diamonds"></i>
              <button @click="publishComment(index)">发表</button>
            </div>
          </div>
        </div>
      </div>

      <div class="click-to-top">
        <div><a href="#"><span class="glyphicon glyphicon-menu-up" aria-hidden="true"></span></a></div>
        <div><a href="#">热点</a></div>
      </div>

      <div class="text-center chy-footer">
        <div class="line1">
          <div class="right-border"><a href="#">空间手机版</a></div>
          <div class="right-border"><a href="#">黄钻贵族</a></div>
          <div class="right-border"><a href="#">官方Qzone</a></div>
          <div class="right-border"><a href="#">QQ互联</a></div>
          <div class="right-border"><a href="#">认证服务</a></div>
          <div class="right-border"><a href="#">腾讯博客</a></div>
          <div class="right-border"><a href="#">腾讯客服</a></div>
          <div class="right-border"><a href="#">QQ空间服务协议</a></div>
          <div class="right-border"><a href="#">Complaint Guidelines</a></div>
          <div><a href="#">粤网文[2014]0633-233号</a></div>
        </div>
        <div class="line2">
          <div class="orange-color">Copyright © 2005 - 2017 Tencent.</div>
          <div><a href="#">All Rights Reserved.</a></div>
        </div>
        <div class="line3">
          <div class="orange-color">腾讯公司</div>
          <div><a href="#">版权所有</a></div>
        </div>
      </div>

    </div>
  </top-bar>
</template>

<script>
  import TopBar from '../components/TopBar.vue'
  import {getPeople, getSmallTalks, setSmallTalks} from '../api'

  export default {
    name: 'QZone',
    data() {
      return {
        list: [],
        talkerList: [],
        likesarr: [],
        isCommentClicked: false,
        isThumb: [],
        isHover: [],
        isCommentHover: [],
        starIndex: [],
        comment: []
      }
    },
    created() {
      getPeople()
        .then(d => d.data)
        .then(people => {
          this.list = people
        });
      getSmallTalks()
        .then(d => d.data)
        .then(smalltalk => {
          this.talkerList = smalltalk
          for (let i = 0; i < smalltalk.length; i++) {
            this.resetStar(smalltalk[i], i)
          }
        })
    },
    methods: {
      clickComment() {
        this.isCommentClicked = true
      },
      dianzan(index) {
        this.isThumb[index] = !this.isThumb[index]
        if (this.isThumb[index]) {
          this.talkerList[index].star.push('岁月静好。')
          this.talkerList[index].starNumber++
          this.talkerList[index].isStar = true
          this.resetStar(this.talkerList[index], index)
          setSmallTalks(this.talkerList[index])
        } else {
          console.log(index)
          this.talkerList[index].star.splice(this.starIndex[index], 1)
          this.talkerList[index].starNumber--
          this.talkerList[index].isStar = false
          this.resetStar(this.talkerList[index], index)
          setSmallTalks(this.talkerList[index])
          console.log(this.talkerList[index].star)
        }

      },
      share() {

      },
      deleteComemnt(talkerIndex, commentIndex, replyIndex) {
        console.log(talkerIndex)
        console.log(replyIndex)
        console.log(this.talkerList[talkerIndex].comment[commentIndex].reply[replyIndex])
        this.talkerList[talkerIndex].comment[commentIndex].reply.splice(replyIndex, 1)
        setSmallTalks(this.talkerList[talkerIndex])
      },
      deleteBigComemnt(talkerIndex, commentIndex) {
        console.log(talkerIndex)
        console.log(commentIndex)
        console.log(this.talkerList[talkerIndex].comment[commentIndex])
        this.talkerList[talkerIndex].comment.splice(commentIndex, 1)
        setSmallTalks(this.talkerList[talkerIndex])
      },
      hoverArea(index) {
        this.$set(this.isHover, index, true)
      },
      leaveArea(index) {
        this.$set(this.isHover, index, false)
      },
      hoverCommentArea(index) {
        this.$set(this.isCommentHover, index, true)
      },
      leaveCommentArea(index) {
        this.$set(this.isCommentHover, index, false)
      },
      resetStar(array, index) {
        this.likearr = []
        let arr = []
        let s = ''
        arr = array.star.join('、')
        s = array.starNumber === array.star.length ? '共' : '等'
        this.likesarr[index] = {
          names: arr,
          text: s
        }
        for (let j = 0; j < array.star.length; j++) {
          if (array.star[j] === '岁月静好。') {
            this.isThumb[index] = true
            this.starIndex[index] = j
          }
        }
      },
      publishComment(index) {
        let date = new Date()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let hour = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours()
        let minute = date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes()
        let time = month + '月' + day + '日 ' + hour + ':' + minute
        this.talkerList[index].comment.push({
          from: '岁月静好。',
          content: this.comment[index],
          time: time,
          pic: "/static/head-portrait.jpg"
        })
        setSmallTalks(this.talkerList[index])
        this.comment[index] = ''
        console.log(this.talkerList[index].comment)
      }
    },
    components: {
      TopBar
    }
  }
</script>

<style lang="scss" scoped>
  .nav-style {
    background-color: #d18b00;
    border-color: #d18b00;
    padding-left: 10%;
    color: white;
    div:first-child {
      a {
        display: flex;
        img {
          width: 40px;
          height: 40px;
          margin-top: -12px;
        }
        div {
          color: white;
        }
      }
    }

    div:nth-child(2) {
      a {
        color: white;
        font-size: 12px !important;
        margin-left: -10px;
        .iconfont {
          -webkit-text-stroke: 1px white;
        }
      }

      .music-player {
        display: flex;
        margin-left: 8em;
        .play-square, .stats-square {
          width: 20px;
          height: 20px;
          background-color: #e09600;
          .glyphicon-play {
            margin-left: 3px;
          }
        }
        .stats-square {
          margin-left: 2px;
        }
      }

      .music-player:hover {
        background-color: #FFFFFF;
        .play-square, .stats-square {
          background-color: lightgrey;
          color: gray;
        }
      }

      .search-input {
        input {
          width: 140px;
          margin-left: 20px;
          margin-right: 10px;
          margin-top: 15px;
          border: none;
          outline: none;
          background-color: #dda840;

        }
        input::-webkit-input-placeholder {
          color: #f4e4c5;
        }
        .glyphicon-search {
          margin-left: -35px;
          margin-top: 1px;
        }
      }

      .user-home {
        display: flex;
        img {
          width: 20px;
          height: 20px;
        }
        div {
          margin-left: 5px;
        }
      }

      .sign-out, .settings, .yellow-diamond {
        font-size: 14px !important;
      }

      .yellow-diamond {
        color: #fea402;
        border-color: #fea402;
        margin-top: -2px;
      }

      .user-center:hover {
        background-color: #e09600;
      }

      .my-homepage:hover, .my-homepage:active,
      .friends:hover, .friends:active,
      .games:hover, .games:active,
      .dress:hover, .dress:active,
      .settings:hover, .settings:active {
        background-color: #fff;
        color: #0f0f0f;
        .iconfont {
          color: grey !important;
          -webkit-text-stroke: 1px grey;
        }
      }

      .yellow-diamond:hover, .yellow-diamond:active, .yellow-diamond:visited {
        background-color: #fff;
        color: #fea402;
        border-color: #fea402;
      }

    }
  }

  .qzone-message {
    .qzone-head {
      display: flex;
      .head-title {
        margin-left: 15em;
        margin-top: 20px;
        .qzone-name {
          display: flex;
          div:first-child {
            font-size: 28px;
            color: #a5a5a5;
          }
          .icon-pingguo {
            font-size: 18px;
            margin-left: 8px;
            margin-top: 10px;
            color: #eb7b6a;
          }
          .rank-number {
            font-size: 12px;
            margin-left: -5px;
            margin-top: 20px;
            color: white;
            -webkit-text-stroke: 1px #f49648;
          }
          .icon-p-shouji {
            font-size: 24px;
            margin-left: 10px;
            margin-top: 6px;
            color: #237def;
          }
        }
        .qzone-address {
          font-size: 16px;
          color: #cc8f14;
          margin-top: 3px;
        }
      }

      button {
        display: flex;
        width: 60px;
        height: 30px;
        margin-left: 45em;
        margin-top: 30px;
        color: #939393;
        border-radius: 40%;
        outline: none;
        border: none;
        .icon-dianzan1 {
          color: white;
          font-size: 18px;
        }
        div {
          color: white;
          margin-left: 1em;
          margin-top: 2px;
        }
      }
    }
    .homepage-nav {
      display: flex;
      img {
        width: 130px;
        height: 130px;
        box-sizing: border-box;
        border: 3px solid #FFFFFF;
        margin-left: 15em;
        margin-top: 80px;
      }
      div:nth-child(2) {
        .qq-name {
          margin-top: 80px;
          margin-left: 20px;
          font-size: 20px;
          color: #cc8f14;
        }
        a {
          margin-left: 25px;
          font-size: 15px;
          color: #403e39;
        }
        .yellow-diamond-message {
          display: flex;
          .diamond-rank {
            .big-diamond {
              font-size: 24px;
              color: lightgrey;
              margin-left: 20px;
            }
            div {
              margin-left: 20px;
              color: #FFFFFF;
            }
          }
          .growth-schedule {
            margin-left: 20px;
            margin-top: 10px;
            color: #cc8f14;
            .progress {
              margin-top: 5px;
              border-radius: 5px;
              height: 10px;
              background-color: #a5c4d8;
              .progress-bar {
                width: 0;
                color: black;
                line-height: 10px;
                font-size: 8px;
                margin-left: 3px;
              }
            }
          }
          .renew-diamond {
            width: 80px;
            height: 30px;
            background-color: #ffcf04;
            border: 1px solid #dd8a00;
            color: #a94c04;
            text-align: center;
            margin-top: 15px;
            font-size: 15px;
            font-weight: bolder;
            padding-top: 3px;
          }
          .renew-diamond:hover,
          .big-diamond:hover,
          .lovers-diamond:hover,
          .growth-schedule:hover {
            text-decoration: none;
          }
          .lovers-diamond {
            font-size: 30px;
            color: lightgrey;
            margin-left: 20px;
          }
        }
        .nav-content {
          margin-top: 25px;
          margin-left: 10px;
        }
      }
    }
  }

  .homepage-content {
    display: flex;
    .homepage-lmessage {
      width: 320px;
      margin-left: 15em;
      margin-top: 50px;
      .profile {
        display: flex;
        width: 310px;
        height: 80px;
        border: 1px solid #ebe3bc;
        background-color: #fffcf4;
        color: #403e39;
        border-radius: 3px;
        div {
          text-align: center;
          width: 33%;
          margin: auto;
          font-size: 15px;
          .profile-number {
            font-weight: bolder;
            font-size: 20px;
          }
        }
        .vertical-line {
          width: 1px;
          height: 50px;
          background-color: #ede8d1;
        }
      }
      .personal-file {
        width: 310px;
        height: 130px;
        border: 1px solid #ebe3bc;
        background-color: #fffcf4;
        margin-top: 15px;
        padding-bottom: 10px;
        border-radius: 3px;
        div:first-child {
          height: 40px;
          background-color: #faf7e6;
          font-size: 18px;
          font-weight: bolder;
          padding-top: 10px;
          padding-left: 10px;
        }
        div:nth-child(2) {
          background-color: #fffcf4;
          width: 85%;
          height: 40px;
          margin: auto;
          border-bottom: 1px solid #ede8d1;
          padding-top: 10px;
        }
        div:nth-child(3) {
          background-color: #fffcf4;
          width: 85%;
          margin: auto;
          padding-top: 10px;
        }
        .icon-menu, .icon-xiexing {
          color: #b2aa9b;
          font-weight: bolder;
        }
      }
      .recent-visitors {
        width: 320px;
        height: 420px;
        border: 1px solid #ebe3bc;
        background-color: #fffcf4;
        margin-top: 15px;
        border-radius: 3px;
        padding-bottom: 25px;
        .visitors-title {
          height: 40px;
          background-color: #faf7e6;
          font-size: 18px;
          font-weight: bolder;
          padding-top: 10px;
          padding-left: 10px;
        }
        .visitors-image {
          .portrait {
            display: flex;
            flex-wrap: wrap;
            width: 99%;
            margin: auto;
            padding-left: 5px;
            .image-square {
              margin-right: 5px;
              img {
                width: 100px;
                height: 100px;
                margin: auto;
                padding-top: -5px;
              }
              .image-title {
                position: relative;
                z-index: 10;
                top: -20px;
                padding-left: 5px;
                width: 95px;
                height: 20px;
                background-color: rgba(0, 0, 0, 0.5);
                color: #FFFFFF;
              }
            }

          }
        }
        .visitors-more {
          padding-left: 10px;
          color: #cc8f14;
        }
      }
    }
    .homepage-rmessage {
      width: 615px;
      margin-left: 2em;
      margin-top: 50px;
      .photo-wall {
        display: flex;
        width: 615px;
        padding-bottom: 10px;
        padding-right: 5px;
        margin: auto;
        border: 1px solid #ebe3bc;
        background-color: #fffcf4;
        border-radius: 3px;
        .left-image {
          width: 330px;
          height: 280px;
          padding-left: 10px;
          padding-top: 10px;
          .image1 {
            width: 320px;
            height: 280px;
          }
        }
        .right-image {
          width: 260px;
          height: 300px;
          margin-left: 12px;
          padding-top: 10px;
          .image2, .image3 {
            width: 260px;
            height: 143px;
            padding-bottom: 10px;
          }
        }
      }
      .small-talk {
        width: 615px;
        margin: auto;
        border: 1px solid #ebe3bc;
        background-color: #fffcf4;
        border-radius: 3px;
        margin-top: 20px;
        .talker-message {
          display: flex;
          width: 615px;
          padding-left: 20px;
          padding-top: 20px;
          .talker-image {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
          .talker-tips {
            width: 200px;
            margin-left: 10px;
            padding-top: 5px;
            .talker-name {
              font-size: 16px;
              width: 200px;
            }
          }
          .glyphicon-menu-down {
            color: #bbb4a5;
            padding-left: 30em;
            font-weight: bolder;
          }
        }

        .talk-content {
          width: 615px;
          padding-left: 20px;
          .words {
            padding-top: 10px;
            font-size: 18px;
          }
          .talk-image {
            padding-top: 10px;
            width: 580px;
            height: 400px;
            img {
              height: 100%;
              width: auto;
            }
          }
          .mobile-logo {
            padding-top: 5px;
          }
        }

        .talk-message {
          padding-left: 20px;
          padding-top: 20px;
          .looks-people {
            padding-right: 15px;
            display: flex;
            justify-content: space-between;
            font-size: 15px;

            .more-operation {
              img {
                padding-left: 2em;
              }
            }
          }
          .grey-line {
            width: 580px;
            height: 1px;
            margin-top: 5px;
            background-color: #ede8d1;
          }
          .likes-people {
            padding-top: 10px;
            padding-bottom: 10px;
            display: flex;
            .icon-bgc {
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background-color: #dbab4a;
              .icon-dianzan1 {
                color: #FFFFFF;
                padding-left: 2px;
              }
            }
            .likes-name {
              font-size: 13px;
              margin-left: 5px;
              color: #dbab4a;
              padding-top: 3px;
            }
          }
        }

        .specific-comments {
          padding-left: 20px;
          padding-top: 20px;
          .comment {
            .reviewer-comment {
              display: flex;
              margin-bottom: 10px;
              img {
                width: 30px;
                height: 30px;
                border-radius: 50%;
              }
              .comment-content {
                padding-left: 10px;
                margin-top: -3px;

                .main-comment {
                  display: flex;
                  flex-wrap: wrap;
                }

                .comment-from {
                  width: 100%;
                }
                span {
                  color: #cc8f14;
                }
                .comment-time {
                  color: #80796c;
                }

                .comment-operation {
                  margin-left: 15px;
                  margin-top: 3px;
                  img {
                    width: 15px;
                    height: 15px;
                  }
                }

                .reply-comments {
                  display: flex;
                  .reply-comments-image {
                    img {
                      width: 30px;
                      height: 30px;
                      border-radius: 50%;
                      margin-top: 10px;
                    }
                  }
                  .reply-comments-content {
                    padding: 10px 10px 0;
                    span {
                      color: #cc8f14;
                    }

                    .reply-info {
                      display: flex;
                    }

                    .for-reply-comment {
                      width: 500px;
                      .comment-text {
                        width: 480px;
                        height: 40px;
                        border: 1px solid #ede8d1;
                        background-color: #fffcf4;
                      }
                      ::-webkit-input-placeholder {
                        padding-left: 10px;
                        padding-top: 8px;
                      }
                    }

                    .comment-time {
                      color: #80796c;
                      font-size: 14px;
                      padding-bottom: 10px;
                    }

                    .reply-comment-operation {
                      margin-left: 15px;
                      margin-top: 3px;
                      img {
                        width: 15px;
                        height: 15px;
                      }
                    }
                  }
                }

              }
            }
          }
        }

        .talk-comment {
          width: 615px;
          padding-left: 20px;
          padding-top: 10px;
          margin-bottom: 20px;
          display: flex;
          .comment-text {
            width: 580px;
            height: 40px;
            border: 1px solid #ede8d1;
            background-color: #fffcf4;
          }
          ::-webkit-input-placeholder {
            padding-left: 10px;
            padding-top: 8px;
          }
          .icon-camera {
            margin-left: -30px;
            padding-top: 8px;
            font-size: 20px;
            color: #a69d8d;
          }

        }
      }
      .publish-comment {
        display: flex;
        width: 615px;
        margin: auto;
        padding-left: 20px;
        padding-bottom: 20px;
        .comment-expression {
          display: flex;
          .icon-biaoqing {
            font-size: 20px;
            color: #b6ae9f;
          }
          .expression-scircle {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background-color: #ff6700;
          }
        }
        .icon-aite {
          font-size: 24px;
          padding-left: 8px;
          margin-top: -3px;
          color: #b6ae9f;
        }
        .white-circle {
          width: 15px;
          height: 15px;
          border: 2px solid #cfc9bb;
          margin-top: 8px;
          margin-left: 24em;
        }
        .private-comment {
          margin-left: 5px;
          margin-top: 5px;
          color: #403e39;
        }
        .icon-diamonds {
          font-size: 16px;
          color: #fad808;
          margin-left: 5px;
          margin-top: 5px;
        }
        button {
          width: 78px;
          height: 33px;
          background-color: #e6b85c;
          border: 1px solid #e6b85c;
          outline: none;
          color: white;
          border-radius: 3px;
          margin-left: 1em;
        }
      }
    }
  }

  .click-to-top {
    position: fixed;
    width: 50px;
    height: 100px;
    background-color: #faf7e6;
    border: 1px solid #ebe3bc;
    right: 20px;
    bottom: 20px;
    z-index: 20;
    div:first-child {
      height: 48px;
      border-bottom: 1px solid #ede8d1;
      .glyphicon-menu-up {
        color: #bab9b7;
        font-size: 20px;
        padding-top: 15px;
        padding-left: 15px;
      }
    }
    div:nth-child(2) {
      padding-top: 15px;
      padding-left: 10px;
    }
    a {
      color: #bab9b7;
    }
    a:hover {
      text-decoration: none;
      div {
        background-color: #fff;
      }
    }
    a:visited {
      text-decoration: none;
    }

  }

  .chy-footer {
    width: 90%;
    margin: auto;
    margin-top: 40px;
    .line1, .line2, .line3 {
      display: flex;
      justify-content: center;
      margin-top: 3px;
      font-size: 12px;

      .right-border {
        border-right: 1px solid black;
        padding-right: 5px;
      }
      .orange-color {
        color: #dba200;
      }
      a {
        color: #403e39;
        text-decoration: none;
        margin-left: 5px;
      }
      a:hover {
        text-decoration: underline;
      }
    }
  }
</style>
