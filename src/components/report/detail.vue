<template>
    <div>
        <div class="wrapper clearfix">
            <top-nav ref="topnav"></top-nav>

            <div class="container content report">
                <div class="detail">
                    <header class="header">
                        <h1 class="title">{{curData.title}}</h1>
                        <p class="date">{{curData.date}}</p>
                    </header>
                    <main>
                        <img class="mainImg" :src="curData.img" alt="">
                        <div class="mainText">{{curData.text}}</div>
                    </main>
                </div>
                <div class="btn--wrapper">
                    <router-link class="search" to="/evaluating">测评结果查询</router-link>
                    <!--<a class="buy" :href="curData.url" target="_blank">查看完整报告</a>-->
                    <a href="javascript:;" @click="buy" class="buy">购买完整报告</a>
                    <a href="javascript:;" class="return" @click="back">返回</a>
                </div>
            </div>

        </div>

        <footer-nav ref="footer"></footer-nav>
    </div>
</template>

<script>
    import topNav from '../plug-page/topnav.vue'
    import footerNav from '../plug-page/footernav.vue'
    import swal from 'sweetalert'

    export default {
        name: 'home',
        data () {
            return {
                curData:{},
                reportData: [{
                    img: "/piprc/static/pdf/report1.png",
                    title: "移动金融报告",
                    text: "有学者认为，2018年是公众个人信息保护意识觉醒的元年。从支付宝年度账单事件，到江苏消保委诉百度侵犯用户隐私；从李书福称微信的聊天内容可能被腾讯窥视，到今日头条的算法受到用户的质疑。一系列舆论热点的集中爆发，无疑预示着公众在互联网时代的隐私……",
                    date: "2018.03.30",
                    url:'/piprc/static/pdf/移动金融报告 最终版 2018.03.30.pdf',
                },{
                    img: "/piprc/static/pdf/report2.png",
                    title: "2017个人信息保护年度报告",
                    text: "2017年，可称是中国互联网安全领域里程碑的一年。十九大报告、政治局集体学习、中央经济工作会议中，互联网安全与个人信息保护被多次提及，再次明确，二者已经成为国家战略中的重要组成部分。",
                    date: "2017.12",
                    url:'/piprc/static/pdf/南都个人信息保护研究中心——2017个人信息保护年度报告.pdf',
                },{
                    img: "/piprc/static/pdf/report3.png",
                    title: "关于收集个人信息“明示同意”的测评报告",
                    text: "自《网络安全法》正式实施，四部委发起“隐私条款联合测评”以来，大批互联网营运者开始对产品的隐私政策及呈现方式进行修改。随着收集行为不断规范，其中的细节实施也成为互联网企业进一步合规的重要内容。",
                    date: "2018.12.21",
                    url:'/piprc/static/pdf/关于收集个人信息“明示同意”的测评报告 完整版.pdf',
                }],
            }
        },
        components: {
            topNav,
            footerNav,
        },
        mounted() {
            this.curData = this.reportData[this.$route.params.id-1];
        },
        methods:{
            back(){
                this.$router.go(-1);
            },
            buy(){
                swal({
                    text:"购买报告请发邮件至ppa_nandu01@163.com。\n购买功能稍后将上线，敬请期待！",
                    button:'确定',
                });
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>
    @import "~assets/css/less.less";
    .report{padding: 47px 150px;

        .header { text-align: center; border-bottom: 1px #DEE1E5 solid; margin-bottom:44px;
            .title {  font-size: 36px; color: #333333; margin-bottom: 22px; }
            .date {  font-size: 14px; color: #7A7E81; margin-bottom: 10px; }
        }
        .mainImg { display: block; margin: 0 auto 23px; height: 228px; }
        .mainText { text-align: justify;  font-size: 17px; color: #333333; line-height: 34px; }

        .btn--wrapper { margin-top: 57px; display: flex; justify-content: space-between;
            a { width: 200px; font-size: 18px; height: 50px; line-height: 48px; text-align: center; border-radius: 100px; border: 1px solid #0F2A81; cursor: pointer;
                &.search, &.return {
                    background: #fff; color: #0F2A81; padding-left: 40px;
                    &:active { background: #0F2A81; color: #fff; }
                }
                &.buy {
                    width: 282px; height: 60px; border: 1px solid #0F2A81; border-radius: 100px; color: #fff;
                    /*padding-left: 87px;*/ text-align:center;
                     line-height: 55px; font-size: 24px;
                    background: #0F2A81;
                    /*background: url('~assets/img/buy.png') #0F2A81 no-repeat;*/
                    background-size: 32px 31px;
                    background-position: 39px 13px;
                }
                &.search {
                    background-image: url('~assets/img/check.png');
                    background-repeat: no-repeat;
                    background-size: 28px 30.7px;
                    background-position: 26px 10px;
                }
                &.return {
                    padding-left: 30px;
                    background-image: url('~assets/img/back.png');
                    background-repeat: no-repeat;
                    background-size: 27px 24px;
                    background-position: 57px 12px;
                }
            }
        }
    }
</style>