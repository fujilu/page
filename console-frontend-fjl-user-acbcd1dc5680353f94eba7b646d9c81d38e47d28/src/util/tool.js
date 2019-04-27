//字符串换行（用于Echart)
export function newline(params,length){
  var newParamsName = "";// 最终拼接成的字符串
  var paramsNameNumber = params.length;// 实际标签的个数
  var provideNumber = length;// 每行能显示的字的个数
  var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
  /**
   * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
   */
  // 条件等同于rowNumber>1
  if (paramsNameNumber > provideNumber) {
      /** 循环每一行,p表示行 */
      for (var p = 0; p < rowNumber; p++) {
          var tempStr = "";// 表示每一次截取的字符串
          var start = p * provideNumber;// 开始截取的位置
          var end = start + provideNumber;// 结束截取的位置
          // 此处特殊处理最后一行的索引值
          if (p == rowNumber - 1) {
              // 最后一次不换行
              tempStr = params.substring(start, paramsNameNumber);
          } else {
              // 每一次拼接字符串并换行
              tempStr = params.substring(start, end) + "\n";
          }
          newParamsName += tempStr;// 最终拼成的字符串
      }

  } else {
      // 将旧标签的值赋给新标签
      newParamsName = params;
  }
  //将最终的字符串返回
  return newParamsName;
}
//数字每三位增加逗号
export function formatNum(n){
   var b=parseInt(n).toString();
   var len=b.length;
   if(len<=3){return b;}
   var r=len%3;
   return r>0?b.slice(0,r)+","+b.slice(r,len).match(/\d{3}/g).join(","):b.slice(r,len).match(/\d{3}/g).join(",");
 }
//数组切块
export const chunk = (arr, size) =>
  Array.from({length: Math.ceil(arr.length / size)}, (v, i) => arr.slice(i * size, i * size + size));


 // 数据赛选  x轴为时间
 export function dataHandle(data) {
    var hours = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
    var weekDays = getDateArr(7, 'MM-dd');
    var monthDdays = getDateArr(30, 'MM-dd');
    var ret = { day: [], week: [], month: [] };

    for(let i in data){
        if(i == '7_charts'||i == '30_charts'){
           for(let j = 0;j<data[i].length;j++){
               data[i][j].k1 = String(data[i][j].k1).substr(4).replace(/(\d{2}$)/,'-'+'$1');
           }
        }
    }
    ret.day = dataFill(data['1_charts'], hours);
    ret.week = dataFill(data['7_charts'], weekDays);
    ret.month = dataFill(data['30_charts'], monthDdays);

    return ret;
};
function dataFill(sourceData, fillKeys) {
    var sdata = sourceData;
    var tmp = [],
        hs = {};
    for(let j = 0;j<sdata.length;j++){
        if(sdata[j].k1){
            hs[sdata[j].k1] = j+1;
        }
    }
    for (let c = 0; c < fillKeys.length; c++) {
        if (!hs[fillKeys[c]]) {
            tmp.push({ v1: 0, k1: fillKeys[c] });
        } else {
            tmp.push(sdata[hs[fillKeys[c]]-1]);
        }
    }
    return tmp;
}


Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (!fmt) {
        fmt = 'yyyy-MM-dd hh:mm:ss'
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
/** 
* 获取日期数组
* dayLen 日期长度
*/
function getDateArr(dayLen, format) {
    var arr = [];
    var d = new Date();
    for (var i = 0; i < dayLen; i++) {
        arr.unshift(new Date(d.getTime() - (24 * 60 * 60 * 1000) * i).Format(format));
    }
    return arr;
}
