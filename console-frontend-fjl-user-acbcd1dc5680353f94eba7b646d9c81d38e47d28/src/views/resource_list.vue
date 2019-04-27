<template>
  <div class="resource">
    <!-- 左边栏 -->
    <div class="left">
      <ul>
        <li @click="jumpto()">所有主题库</li>
        <li :class="{active : themeData_name == item.theme_name}" @click="jumpTheme(item)" v-for="(item,id) in themeData" :key="id">{{item.theme_name}}</li>
        <li>其他</li>
      </ul>
    </div>
    <!-- 右边 -->
    <div class="right">
      <!-- 主题库信息 -->
      <div class="theme_resource_info" id="info">
        <p class="resource_num">
          <span class="theme_name">{{themeData_name}}</span>共有资源
          <span class="resource_num">1111</span>个
        </p>
        <div class="resource_cate">
          <ul>
            <li class="nav_order">排序：</li>
            <li>按资源名称</li>
            <li>按数据来源</li>
            <li @click="zxc=1,changeColor=!changeColor" :class="{color:zxc==1}">
              <span>按发布时间</span>
              <span>
                <div class="el-icon-caret-top" id="up" :class="{color:zxc==1&&!changeColor}"></div>
                <div class="el-icon-caret-bottom" id="down"  :class="{color:zxc==1&&changeColor}"></div>
              </span>
            </li>
            <li  @click="zxc=2,changeColor=!changeColor" :class="{changeStyle:zxc==2}">
              <span>按更新时间</span>
              <span>
                <div class="el-icon-caret-top" id="up"  :class="{changeStyle:zxc==2&&changeColor}"></div>
                <div class="el-icon-caret-bottom" id="down" :class="{changeStyle:zxc==2&&!changeColor}"></div>
              </span>
            </li>
            <li>
              <input type="search" placeholder="按资源名称、关联数据表、资源编码搜索">
              <span class="el-icon-search search_btn"></span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 主题库信息内容 -->
      <div class="container">
        <div class="theme_resource_info_contain">
          <div class="theme_resource_detail_info">
            <p class="info_title">常住人口信息（CZRKXXX）</p>
            <ul>
              <li class="info_detail">
                <p>
                  <span>所属主题库：</span>
                  <label>人员主题库</label>
                </p>
                <p>
                  <span>来源数据表：</span>
                  <label>CZRKXXX</label>
                </p>
              </li>
              <li class="info_detail">
                <p>
                  <span>业务分类：</span>
                  <label>治安管理</label>
                </p>
                <p>
                  <span>来源数据源：</span>
                  <label>师弟点击</label>
                </p>
              </li>
              <li class="info_detail">
                <p>
                  <span>资源编码：</span>
                  <label>joajofd</label>
                </p>
                <p>
                  <span>更新周期：</span>
                  <label>加福禄寿</label>
                </p>
              </li>
              <li class="info_detail">
                <p>
                  <span>增量类型：</span>
                  <label>增量</label>
                </p>
                <p>
                  <span>创建时间：</span>
                  <label>2019/3/26 16:35</label>
                </p>
              </li>
              <li class="info_detail">
                <p>
                  <span>资源数量：</span>
                  <label>83938</label>
                </p>
                <p>
                  <span>最近更新时间:</span>
                  <label>2019/3/26 16:35</label>
                </p>
              </li>
              <li class="info_detail">
                <el-button type="text" class="btn" @click="centerDialogVisible = true">查看详情</el-button>
                <el-dialog :visible.sync="centerDialogVisible" width="50%" center>
                  <div class="title">
                    <span>资源详情</span>
                  </div>
                  <div class="nav">
                    <ul>
                      <li class="active">基本信息</li>
                      <li>字段列表</li>
                      <li>分区信息</li>
                      <li>数据预览</li>
                      <li>增量明细表</li>
                      <li>增量统计图</li>
                    </ul>
                  </div>
                  <div class="detail_contain">
                    <div class="member">表名称：juui_sn</div>
                    <div class="member">表描述：常住人口测试数据</div>
                    <div class="member">表所属Schema：暂无</div>
                    <div class="member">增量类型：全量</div>
                    <div class="member">增量字段：暂无</div>
                    <div class="member">表主键：暂无</div>
                    <div class="member">资源描述：测试一</div>
                    <div class="member">资源代码：29923792837492739sadasdada3983</div>
                    <div class="member">关联数据表：usi——kslk</div>
                    <div class="member">行业类别：供电</div>
                    <div class="member">公安业务分类：刑事侦查</div>
                    <div class="member">要素一级分类：人</div>
                    <div class="member">要素二级分类：基本信息</div>
                    <div class="member">要素细目分类：社会信用</div>
                    <div class="member">要素属性分类：行政管理分类</div>
                    <div class="member">更新周期：天</div>
                    <div class="member">提供单位：暂无</div>
                    <div class="member">共享方式：暂无</div>
                    <div class="member">共享范围：暂无</div>
                    <div class="member">来源区域：暂无</div>
                  </div>
                </el-dialog>
              </li>
            </ul>
          </div>
        </div>
        <div class="theme_resource_info_contain">
          <div class="theme_resource_detail_info">
            <p class="info_title">常住人口信息（CZRKXXX）</p>
            <ul>
              <li class="info_detail">
                <p>
                  <span>所属主题库：</span>
                  <label>人员主题库</label>
                </p>
                <p>
                  <span>来源数据表：</span>
                  <label>CZRKXXX</label>
                </p>
              </li>
              <li class="info_detail">
                <p>
                  <span>业务分类：</span>
                  <label>治安管理</label>
                </p>
                <p>
                  <span>来源数据源：</span>
                  <label>师弟点击</label>
                </p>
              </li>
              <li class="info_detail">
                <p>
                  <span>资源编码：</span>
                  <label>joajofd</label>
                </p>
                <p>
                  <span>更新周期：</span>
                  <label>加福禄寿</label>
                </p>
              </li>
              <li class="info_detail">
                <p>
                  <span>增量类型：</span>
                  <label>增量</label>
                </p>
                <p>
                  <span>创建时间：</span>
                  <label>2019/3/26 16:35</label>
                </p>
              </li>
              <li class="info_detail">
                <p>
                  <span>资源数量：</span>
                  <label>83938</label>
                </p>
                <p>
                  <span>最近更新时间:</span>
                  <label>2019/3/26 16:35</label>
                </p>
              </li>
              <li class="info_detail">
                <el-button type="text" class="btn" @click="centerDialogVisible = true">查看详情</el-button>
                <el-dialog :visible.sync="centerDialogVisible" width="50%" center>
                  <div class="title">
                    <span>资源详情</span>
                  </div>
                  <div class="nav">
                    <ul>
                      <li class="active">基本信息</li>
                      <li>字段列表</li>
                      <li>分区信息</li>
                      <li>数据预览</li>
                      <li>增量明细表</li>
                      <li>增量统计图</li>
                    </ul>
                  </div>
                  <div class="detail_contain">
                    <div class="member">表名称：juui_sn</div>
                    <div class="member">表描述：常住人口测试数据</div>
                    <div class="member">表所属Schema：暂无</div>
                    <div class="member">增量类型：全量</div>
                    <div class="member">增量字段：暂无</div>
                    <div class="member">表主键：暂无</div>
                    <div class="member">资源描述：测试一</div>
                    <div class="member">资源代码：29923792837492739sadasdada3983</div>
                    <div class="member">关联数据表：usi——kslk</div>
                    <div class="member">行业类别：供电</div>
                    <div class="member">公安业务分类：刑事侦查</div>
                    <div class="member">要素一级分类：人</div>
                    <div class="member">要素二级分类：基本信息</div>
                    <div class="member">要素细目分类：社会信用</div>
                    <div class="member">要素属性分类：行政管理分类</div>
                    <div class="member">更新周期：天</div>
                    <div class="member">提供单位：暂无</div>
                    <div class="member">共享方式：暂无</div>
                    <div class="member">共享范围：暂无</div>
                    <div class="member">来源区域：暂无</div>
                  </div>
                </el-dialog>
              </li>
            </ul>
          </div>
        </div>
        <div class="theme_resource_info_contain">
          <div class="theme_resource_detail_info">
            <p class="info_title">常住人口信息（CZRKXXX）</p>
            <ul>
              <li class="info_detail">
                <p>
                  <span>所属主题库：</span>
                  <label>人员主题库</label>
                </p>
                <p>
                  <span>来源数据表：</span>
                  <label>CZRKXXX</label>
                </p>
              </li>
              <li class="info_detail">
                <p>
                  <span>业务分类：</span>
                  <label>治安管理</label>
                </p>
                <p>
                  <span>来源数据源：</span>
                  <label>师弟点击</label>
                </p>
              </li>
              <li class="info_detail">
                <p>
                  <span>资源编码：</span>
                  <label>joajofd</label>
                </p>
                <p>
                  <span>更新周期：</span>
                  <label>加福禄寿</label>
                </p>
              </li>
              <li class="info_detail">
                <p>
                  <span>增量类型：</span>
                  <label>增量</label>
                </p>
                <p>
                  <span>创建时间：</span>
                  <label>2019/3/26 16:35</label>
                </p>
              </li>
              <li class="info_detail">
                <p>
                  <span>资源数量：</span>
                  <label>83938</label>
                </p>
                <p>
                  <span>最近更新时间:</span>
                  <label>2019/3/26 16:35</label>
                </p>
              </li>
              <li class="info_detail">
                <el-button type="text" class="btn" @click="centerDialogVisible = true">查看详情</el-button>
                <el-dialog :visible.sync="centerDialogVisible" width="50%" center>
                  <div class="title">
                    <span>资源详情</span>
                  </div>
                  <div class="nav">
                    <ul>
                      <li class="active">基本信息</li>
                      <li>字段列表</li>
                      <li>分区信息</li>
                      <li>数据预览</li>
                      <li>增量明细表</li>
                      <li>增量统计图</li>
                    </ul>
                  </div>
                  <div class="detail_contain">
                    <div class="member">表名称：juui_sn</div>
                    <div class="member">表描述：常住人口测试数据</div>
                    <div class="member">表所属Schema：暂无</div>
                    <div class="member">增量类型：全量</div>
                    <div class="member">增量字段：暂无</div>
                    <div class="member">表主键：暂无</div>
                    <div class="member">资源描述：测试一</div>
                    <div class="member">资源代码：29923792837492739sadasdada3983</div>
                    <div class="member">关联数据表：usi——kslk</div>
                    <div class="member">行业类别：供电</div>
                    <div class="member">公安业务分类：刑事侦查</div>
                    <div class="member">要素一级分类：人</div>
                    <div class="member">要素二级分类：基本信息</div>
                    <div class="member">要素细目分类：社会信用</div>
                    <div class="member">要素属性分类：行政管理分类</div>
                    <div class="member">更新周期：天</div>
                    <div class="member">提供单位：暂无</div>
                    <div class="member">共享方式：暂无</div>
                    <div class="member">共享范围：暂无</div>
                    <div class="member">来源区域：暂无</div>
                  </div>
                </el-dialog>
              </li>
            </ul>
          </div>
        </div>

        <el-pagination background layout="prev, pager, next" :total="1000" class="pagination"></el-pagination>
      </div>

      <!-- 搜索没有资源 -->
      <div class="no_resource" v-if="isShow">
        <img src="../assets/img/no_resource.png" alt="">
      </div>

      <!-- 搜索没有结果 -->
      <div class="no_result" v-if="isShow">
        <img src="../assets/img/no_result.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      centerDialogVisible: false,
      isShow:false,
      themeData:[],
      zxc:0,
      changeColor:true,
      themeData_name:'',
    };
  },
  methods: {
    // 所有主题库跳转
    jumpto() {
      this.$router.push('/')
    },
    // 接受此参数
    getParams() {
      this.themeData = JSON.parse(sessionStorage.getItem('THEMEDATA'));
      this.themeData_name = sessionStorage.getItem('THEMEDATA2');
      console.log(this.themeData_name);
    },
    // 跳转当前主题库
    jumpTheme(item) {
      console.log(item)
      this.themeData_name = item.theme_name
    }
  },
  // created () {
  //    var self = this;
  //    self.getParams();
  // },
  mounted () {
    this.getParams()
  }
};
</script>

<style>
.el-icon-caret-bottom {
  padding-right: 5px;
  padding-top: 5px;
}
</style>

<style lang="scss">
@import "../assets/sass/reset.scss";
html {
  background-color: #f0f0f0;
}
.color{
  color: #318cf5;
}
.changeStyle {
  color: #318cf5;
}
.resource {
  width: 99%;
  margin: 10px 10px 0 20px;
  .left {
    width: 15%;
    float: left;
    height: 921px;
    margin-bottom: 50px;
    background-color: #fff;
    ul {
      width: 100%;
      height: 100%;
      li {
        width: 70%;
        height: 5%;
        line-height: 40px;
        margin: 8% 15%;
        border-radius: 30px;
        text-align: center;
        background-color: #f0f0f0;
      }
      .active {
        background-color: #349feb;
        color: #fff;
      }
    }
  }
  .right {
    width: 83%;
    background-color: #fff;
    height: 921px;
    margin-bottom: 50px;
    margin-left: 16%;
    overflow: hidden;
    position: relative;
    // 主题库资源及分类筛选部分样式
    .theme_resource_info {
      width: 94%;
      height: 9%;
      margin: 20px 3px 0 40px;
      margin-right: 30px;
      border-bottom: 1px solid #d1d1d1;
      .resource_num {
        width: 100%;
        height: 22px;
        .theme_name {
          font-size: 20px;
          font-weight: 600;
          padding-right: 10px;
        }
        .resource_num {
          font-size: 12px;
          color: #e5ac5b;
        }
      }
      .resource_cate {
        width: 100%;
        margin: 20px 0 15px 0;
        ul {
          width: 100%;
          li {
            font-size: 14px;
            width: 9%;
            height: 30px;
            line-height: 30px;
            float: left;
            #order_time {
              color: #5aa3f7;
            }
            span:nth-child(2) {
              color: #000 !important;
              position: relative;
              #up {
                position: absolute;
                top: 1px;
              }
              #down {
                position: absolute;
                top: 2px;
              }
            }
          }
          .nav_order {
            width: 5%;
            color: #787878;
          }
          :nth-child(6) {
            width: 28%;
            height: 35px;
            float: right;
            text-align: center;
            border: 1px solid #d1d1d1;
            margin-top: -20px;
            position: relative;
            // .input_val {
            //   height: 30px;
            //   width: 90%;
            //   border: 0;
            //   margin-top: 2px;
            // }
            input {
              border: 0;
              height: 30px !important;
              line-height: 20px;
              right: 40px;
              width: 90% !important;
              padding-left: -10px !important;
              padding-top: 4px;
            }
            .search_btn {
              font-size: 20px;
              position: absolute;
              right: 8px;
              top: 10px;
            }
          }
        }
      }
    }
    // 主题库资源内容部分样式
    .container {
      width: 100%;
      .theme_resource_info_contain {
        width: 94%;
        height: 100%;
        margin: 1% 2.5%;
        // border-bottom: 1px solid #d1d1d1;

        .theme_resource_detail_info {
          width: 100%;
          border-bottom: 1px solid #d1d1d1;

          .info_title {
            width: 100%;
            color: #5aa3f7;
            font-size: 16px;
            font-weight: 600;
          }
          ul {
            width: 100%;
            height: 70px;
            margin: 0.4% 0;
            position: relative;
            li {
              float: left;
              width: 18%;
              font-size: 14px;
              p {
                margin: 6% 0;
                span {
                  color: #969696;
                }
                label {
                  color: #545454;
                }
              }
              .btn {
                position: absolute;
                width: 6%;
                height: 35px;
                border: 1px solid #318cf5;
                border-radius: 5px;
                right: 2%;
                // top: 1%;
                margin-top: -5%;
                color: #318cf5;
                text-align: center;
                background-color: #fff;
              }
            }

            // 查看详情表部分样式
            .el-dialog {
              width: 100%;
              height: 65%;
              :nth-child(1) {
                padding-left: 0;
              }
              .el-dialog__header {
                padding: 0;
              }
              .el-dialog__close {
                color: #fff;
              }
              .title {
                width: 103.3%;
                height: 50px;
                line-height: 50px;
                background-color: #349feb;
                margin-top: -25px;
                margin-left: -25px;
                padding-left: 20px;
                color: #fff;
              }
              .nav {
                width: 105.5%;
                height: 100%;
                margin-left: -25px;
                border-top: 1px solid #797979;
                border-bottom: 1px solid #797979;
                ul {
                  width: 100%;
                  height: 30px;
                  li {
                    width: 12%;
                    height: 50px;
                    line-height: 60px;
                    text-align: center;
                    margin-top: -15px;
                    padding: 0;
                  }
                }
                :nth-child(1) {
                  margin-left: 20px;
                  line-height: 60px;
                }
                .active {
                  width: 10%;
                  height: 50px;
                  line-height: 60px;
                  background-color: #349feb;
                  color: #fff;
                }
              }
              .detail_contain {
                width: 110%;
                height: 360px;
                margin: 30px 20px;
                .member {
                  float: left;
                  width: 25%;
                  margin-top: 35px;
                  font-size: 16px;
                }
                :nth-child(1),
                :nth-child(2),
                :nth-child(3) {
                  margin-top: 0;
                }
                :nth-child(3n-1) {
                  width: 38%;
                  padding-right: 2%;
                }
              }
            }
          }
        }
      }
      .pagination {
        position: absolute;
        left: 35%;
        bottom: 4%;
      }
    }
    .no_resource {
      text-align: center;
      margin-top: 15%;
    }
    .no_result {
      text-align: center;
      margin-top: 15%;
    }
  }
}
</style>
