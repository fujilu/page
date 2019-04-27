<template>
  <div class="body">
    <div class="container">
      <!-- 添加主题库 -->
      <div class="add_theme" @click="add_theme()">
        <span class="el-icon-plus"></span>
        <span>新增主题库</span>
      </div>
      <el-dialog :visible.sync="addDialogVisible" v-if="addDialogVisible" width="40%" center>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules2"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm add_box"
        >
          <div class="title">
            <span>新增主题库</span>
          </div>
          <el-form-item label="主题库名称" prop="theme_name" class="theme_name name_top">
            <el-input
              type="name"
              v-model="ruleForm.theme_name"
              auto-complete="off"
              placeholder="20字以内"
            ></el-input>
          </el-form-item>
          <el-form-item label="排序号" prop="order_num" class="theme_name theme_number">
            <el-input
              type="num"
              auto-complete="off"
              v-model="ruleForm.order_num"
              placeholder="只能输入数字"
              class="input_num"
            ></el-input>
          </el-form-item>
          <el-form-item label="主题库描述 " prop="theme_desc" class="theme_name theme_des">
            <el-input
              type="textarea"
              :autosize="{ minRows: 5, maxRows: 10,}"
              placeholder="请输入内容"
              v-model="ruleForm.theme_desc"
              auto-complete="off"
              resize="none"
              class="text_box"
            ></el-input>
          </el-form-item>
          <el-form-item class="btn">
            <el-button type="primary" @click="addDialogVisible = false" class="btn1">取消</el-button>
            <el-button type="primary" @click="comfirmsave()" class="btn2">保存</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>

      <!-- 主题库概括 -->
      <div class="theme_tatol">
        <p>
          主题库总体概括：主题库数量
          <span>5</span>个，总共包含了数据资源
          <span>289329839</span>个，资源记录
          <span>98323839</span>条。
        </p>
      </div>

      <!--主题库分类 -->
      <div class="theme_catagory" v-for="(item,id) in themeData" :key="id">
        <div class="catagory_member">
          <div class="left">
            <img src="../assets/img/circle.png" alt>
          </div>
          <div class="right">
            <p class="catagory_name">{{item.theme_name}}</p>
            <p class="catagory_resource_num">
              <label>资源数量：</label>
              <span>{{item.theme_num}}个</span>
              <label class="record">数据记录：</label>
              <span>{{item.theme_record}}条</span>
            </p>
            <p class="catagory_des">
              <label>主题库描述：</label>
              {{item.theme_desc}}
            </p>
          </div>
          <div class="hover_box">
            <span class="el-icon-tickets" @click="jumpTo(themeData,item.theme_name)"></span>
            <span class="el-icon-edit" @click="edit_theme()"></span>
            <span class="el-icon-delete" @click="delet_theme()"></span>
          </div>
        </div>
      </div>

      <!-- 编辑主题库 -->
      <el-dialog :visible.sync="editDialogVisible" v-if="editDialogVisible" width="40%" center>
        <el-form
          :model="ruleForm2"
          status-icon
          :rules="rules2"
          ref="ruleForm2"
          label-width="100px"
          class="demo-ruleForm edit_box"
        >
          <div class="title">
            <span>编辑主题库</span>
          </div>
          <el-form-item label="主题库名称" prop="theme_name" class="theme_name name_top">
            <el-input
              type="name"
              v-model="ruleForm2.theme_name"
              auto-complete="off"
              placeholder="20字以内"
              prop="theme_name"
            ></el-input>
          </el-form-item>
          <el-form-item label="排序号" prop="order_num" class="theme_name theme_number">
            <el-input
              type="num"
              auto-complete="off"
              v-model="ruleForm2.order_num"
              placeholder="只能输入数字"
              class="input_num"
            ></el-input>
          </el-form-item>
          <el-form-item label="主题库描述 " prop="theme_desc" class="theme_name theme_des">
            <el-input
              type="textarea"
              :autosize="{ minRows: 5, maxRows: 10,}"
              placeholder="请输入内容"
              v-model="ruleForm2.theme_desc"
              auto-complete="off"
              resize="none"
              class="text_box"
            ></el-input>
          </el-form-item>
          <el-form-item class="btn">
            <el-button type="primary" @click="editDialogVisible = false" class="btn1">取消</el-button>
            <el-button type="primary" @click="save()" class="btn2">保存</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    //增加主题库表单验证
    var checkThemeName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("主题库名称不能为空"));
      }
      setTimeout(() => {
        var reg = /^[\u4e00-\u9fa5\S]{1,20}$/;
        if (!reg.test(value)) {
          callback(new Error("请输入20字以内"));
        } else {
          callback();
        }
      }, 1000);
    };

    var checkNum = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("排序号不能为空"));
      }
      setTimeout(() => {
        var reg = /^[1-9]\d*$/;
        if (!reg.test(value)) {
          callback(new Error("只能输入数字"));
        } else {
          callback();
        }
      }, 1000);
    };

    var checkDesc = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("主题库描述不能为空"));
      }
      setTimeout(() => {
        var reg = /^[\u4e00-\u9fa5\S]{1,50}$/;
        if (!reg.test(value)) {
          callback(new Error("请输入50字以内"));
        } else {
          callback();
        }
      }, 1000);
    };

    return {
      addDialogVisible: false, //新增表单状态
      editDialogVisible: false, //修改表单状态
      dynamicValidateForm: {
        domains: [
          {
            value: ""
          }
        ],
        theme_name: ""
      },
      ruleForm: {
        theme_name: "",
        order_num: "",
        theme_desc: ""
      },
      ruleForm2: {
        theme_name: "",
        order_num: "",
        theme_desc: ""
      },
      rules2: {
        theme_name: [
          { required: true, validator: checkThemeName, trigger: "blur" }
        ],
        order_num: [{ validator: checkNum, trigger: "blur" }],
        theme_desc: [{ validator: checkDesc, trigger: "blur" }]
      },
      themeData: [
        {
          theme_name: "人员主题库",
          theme_num: "23424",
          theme_record: "654543212",
          theme_desc: "记录了人员相关的信息情况",
          id:0,
        },
        {
          theme_name: "物品主题库",
          theme_num: "23424",
          theme_record: "654546532",
          theme_desc: "记录了人员相关的信息情况",
          id:1,
        },
        {
          theme_name: "事件主题库",
          theme_num: "23424",
          theme_record: "654546212",
          theme_desc: "记录了人员相关的信息情况",
          id:2,
        },
        {
          theme_name: "地点主题库",
          theme_num: "23424",
          theme_record: "654546512",
          theme_desc: "记录了人员相关的信息情况",
          id:3,
        },
        {
          theme_name: "组织主题库",
          theme_num: "23424",
          theme_record: "654546512",
          theme_desc: "记录了人员相关的信息情况",
          id:4,
        }
      ]
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 添加主题
    add_theme() {
      this.addDialogVisible = true;
    },
    // 确定添加主题库
    comfirmsave() {

    },  
    // 跳转到详情
    jumpTo(themeData,theme_name) {
    //  数据格式转换
    // console.log(theme_name);
      themeData = JSON.stringify(themeData)
      sessionStorage.setItem('THEMEDATA',themeData)
      sessionStorage.setItem('THEMEDATA2',theme_name)
      // this.$store.commit('THEMEDATA',themeData)
      // this.$store.commit('THEMEDATA2',theme_name)
      // console.log(themeData);
      this.$router.push({
            path: 'resource',
          })
    },
    // 点击编辑
    edit_theme(row) {
      console.log("编辑主题库");
      this.editDialogVisible = true;
      this.ruleForm2.theme_name = row.theme_name;
    },
    // 保存修改后的数据
    save() {
      console.log("保存修改后的数据");
    },
    // 删除主题库
    delet_theme() {
      console.log("删除主题库");
    }
  }
};
</script>
<style>
html {
  background-color: #f0f0f0;
}
.el-icon-close {
  color: #fff !important;
}
.el-form-item__label {
  width: auto !important;
  margin-left: -10px !important;
}
</style>
<style lang="scss" scoped>
@import "../assets/sass/reset.scss";
@import "../assets/sass/all.scss";

.body {
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}

.container {
  width: 1860 / 1920 * 100%;
  margin: 20px 30px 0 30px;
  // 添加主题库部分样式
  .add_theme {
    width: 120px;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    color: #fff;
    background-color: #56cc72;
    span {
      margin: 0 5px;
    }
  }
  // 添加表单部分样式

  .el-dialog__header {
    padding: 0;
  }
  .el-input {
    height: 10%;
  }

  .add_box {
    width: 100%;
    background-color: #fff;
    .title {
      width: 102.8%;
      height: 40px;
      background-color: #349feb;
      color: #fff;
      padding-left: 30px;
      padding-top: 15px;
      margin: -55px 0 30px -25px;
    }
    .theme_name {
      padding-left: 20px;
      width: 80%;
      margin-top: 30px;
      .el-form-item__content {
        padding-left: 4px !important;
        width: auto !important;
      }
    }

    .name_top {
      margin-top: 20px;
      // margin-left: -10px;
    }
    // .theme_number {
    //   padding-left: 40px;
    //   .input_num {
    //     margin-left: -30px;
    //   }
    // }
    .theme_des {
      .text_box {
        width: 120%;
      }
    }
    .btn {
      width: 100%;
      height: 40px;
      line-height: 40px;
      margin-top: 30px;
      .btn1,
      .btn2 {
        width: 18%;
        height: 40px;
        text-align: center;
      }
      .btn1 {
        margin-left: 150px;
        background-color: #bbbbbb;
      }
    }
  }

  // 主题库概括部分样式
  .theme_tatol {
    margin: 20px 0;

    p {
      font-size: 16px;
      font-weight: 600;
      span {
        color: #d88309;
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
  // 主题库分类部分样式
  .theme_catagory {
    width: 100%;
    .catagory_member {
      float: left;
      width: 32.5%;
      height: 135px;
      background-color: #fff;
      margin: 10px 5px;
      // overflow: hidden;
      position: relative;
      .left {
        float: left;
        width: 14%;
        height: 60%;
        border-radius: 50%;
        background-color: #bedcfd;
        margin: 30px 20px;
        img {
          width: 70%;
          height: 70%;
          margin-left: 15%;
          margin-top: 15%;
        }
      }
      .right {
        width: 60%;
        margin-left: 90px;
        .catagory_name {
          font-size: 16px;
          font-weight: 600;
        }
        .catagory_resource_num {
          width: 100%;
          color: #787878;
        }
        .catagory_des {
          color: #787878;
        }
        p {
          margin-top: 15px;
          font-size: 14px;

          label {
            color: #969696;
          }
          .record {
            padding-left: 40px;
          }
          span {
            width: 10%;
            color: #5f5f5f;
          }
        }
        p:nth-child(1) {
          margin-top: 25px;
        }
      }
      .hover_box {
        position: absolute;
        // display: none;
        height: 135px;
        width: 24%;
        left: 480px;
        top: 0px;
        text-align: center;
        line-height: 100px;
        opacity: 0;
        span {
          float: left;
          font-size: 20px;
          margin-top: 55px;
          padding: 0 10px;
        }
        :hover {
          color: #318cf5;
        }
      }
      .hover_box:hover {
        // display: block;
        opacity: 1;
        // right: 100px;
      }
    }
  }
}
.edit_box {
  width: 100%;
  background-color: #fff;
  .title {
    width: 102.8%;
    height: 40px;
    background-color: #349feb;
    color: #fff;
    padding-left: 30px;
    padding-top: 15px;
    margin: -55px 0 30px -25px;
  }
  .theme_name {
    padding-left: 20px;
    width: 80%;
    margin-top: 30px;
    .el-form-item__content {
      padding-left: 4px !important;
      width: auto !important;
    }
  }

  .name_top {
    margin-top: 20px;
    // margin-left: -10px;
  }
  // .theme_number {
  //   padding-left: 40px;
  //   .input_num {
  //     margin-left: -30px;
  //   }
  // }
  .theme_des {
    .text_box {
      width: 120%;
    }
  }
  .btn {
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin-top: 30px;
    .btn1,
    .btn2 {
      width: 18%;
      height: 40px;
      text-align: center;
    }
    .btn1 {
      margin-left: 150px;
      background-color: #bbbbbb;
    }
  }
}
</style>
