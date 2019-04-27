
// 数据服务接口模拟数据

export const mockdata = {
  situationLabel: {
    ysb: '原始表(个)',
    ycb: '标准表(个)',
    yszd: '原始字段(个)',
    ydbzd: '已对标字段(个)',
    wdbzd: '未对标字段(个)',
    yssjl: '原始数据量(条)',
    bzsjl: '标准数据量(条)',
    wtsjl: '问题数据量(条)'
  },
  situationList: {},
  metaData: {
    title: '数据元',
    xData: ['身份证号','编号1','编号2','编号3','编号4','编号5','编号6','编号7'],
    sData: [9312, 8123, 7462, 6318, 4123, 3133, 3012, 2854]
  },
  codeData: {
    title: '数据元',
    xData: ['身份证号','编号1','编号2','编号3','编号4','编号5','编号6','编号7'],
    sData: [9312, 8123, 7462, 6318, 4123, 3133, 3012, 2854]
  },
  problemData1: {
    title: '按数据源',
    legend: ['情报数据库', '卡口信息库', '走访信息库', '人口信息库'],
    sData: [
      { name: '情报数据库', value: 4324 },
      { name: '卡口信息库', value: 3452 },
      { name: '走访信息库', value: 2543 },
      { name: '人口信息库', value: 1432 }
    ]
  },
  problemData2: {
    title: '按数据源',
    legend: ['情报数据库', '卡口信息库', '走访信息库', '人口信息库'],
    sData: [
      { name: '情报数据库', value: 4324 },
      { name: '卡口信息库', value: 3452 },
      { name: '走访信息库', value: 2543 },
      { name: '人口信息库', value: 1432 }
    ]
  },
  statuTableLeft1: {
    header: {
      num: '序号',
      name: '函数名称',
      total: '引用字段数'
    },
    data: [
      { num: 1, name: '类型转换', total: 2033 },
      { num: 2, name: '字符替换', total: 2033 },
      { num: 3, name: '手机号提取', total: 2033 },
      { num: 4, name: '类型转换', total: 2033 },
      { num: 5, name: '车牌号码提取', total: 2033 },
      { num: 6, name: '身份证提取', total: 2033 }      
    ]
  },
  statuTableLeft2: {
    header: {
      num: '序号',
      name: '函数名称',
      total: '引用字段数'
    },
    data: [
      { num: 1, name: '类型转换', total: 2033 },
      { num: 2, name: '字符替换', total: 2033 },
      { num: 3, name: '手机号提取', total: 2033 },
      { num: 4, name: '类型转换', total: 2033 },
      { num: 5, name: '车牌号码提取', total: 2033 },
      { num: 6, name: '身份证提取', total: 2033 }      
    ]
  },
  dataTableData: {
    header: {
      num: '序号',
      DS_NAME: '数据源来源',
      TBL_NAME: '数据表名',
      TBL_DESC: '表描述',
      zdzs: '字段总数',
      ydbzd: '已对标字段',
      zsjl: '总数据量',
      bzsjl: '标准数据量',
      wtsjl: '问题数据量',
      btn: '操作'
    },
    data:[
      { num: 1, name: '类型转换', total: 2033 },
      { num: 2, name: '字符替换', total: 2033 },
      { num: 3, name: '手机号提取', total: 2033 },
      { num: 4, name: '类型转换', total: 2033 },
      { num: 5, name: '车牌号码提取', total: 2033 },
      { num: 6, name: '身份证提取', total: 2033 }      
    ],
    total: 1
  },
  standTable1: {
    header: {
      num: '序号',
      dbqzdmc: '对标前字段名称',
      dbqzdms: '对标前字段描述',
      dbhzdmc: '对标后字段名',
      dbhzdms: '对标后字段描述',
      xdc: '关联限定词',
      sjy: '关联数据元',
      funcName: '预处理函数'
    },
    data: [],
    total: 1
  },
  standTable2: {
    header: {
      num: '序号',
      colName: '字段名称(对标后)',
      PRE_DIST: '对标前数据',
      PRE_PROC: '对标后数据'
    },
    data: [],
    total: 0
  },
  barData1: {
    xData: ['身份证号','编号1','编号2','编号3','编号4','编号5','编号6','编号7'],
    sData: [9312, 8123, 7462, 6318, 4123, 3133, 3012, 2854]
  },
  barData2: {
    xData: ['身份证号','编号1','编号2','编号3','编号4','编号5','编号6','编号7'],
    sData: [9312, 8123, 7462, 6318, 4123, 3133, 3012, 2854]
  },
  metaTable: {
    header: {
      num: '序号',
      TBL_NAME: '引用数据表',
      TBL_DESC: '引用表描述',
      COL_NAME: '引用字段名',
      COL_DESC: '引用字段描述'
    },
    data: [],
    total: 0
  },
  codeTable: {
    header: {
      num: '序号',
      TBL_NAME: '引用数据表',
      TBL_DESC: '引用表描述',
      COL_NAME: '引用字段名',
      COL_DESC: '引用字段描述'
    },
    data: [],
    total: 0
  }
}