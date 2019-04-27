const xingqiArray=['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
const APP_LIST = 9;/*appList一版显示的个数，暂时为9个*/

export const getNowTime=(ev)=>{/*获取现在的时间*/
	let myDate = new Date();
	ev.NowTime.year=myDate.getFullYear();
	ev.NowTime.month=myDate.getMonth()+1;
	ev.NowTime.day=myDate.getDate()<10?'0'+myDate.getDate():myDate.getDate();
	ev.NowTime.xingqi =xingqiArray[myDate.getDay()];
	ev.NowTime.hour = myDate.getHours()<10?'0'+myDate.getHours():myDate.getHours();
	ev.NowTime.min = myDate.getMinutes()<10?'0'+myDate.getMinutes():myDate.getMinutes();
	ev.NowTime.sec=myDate.getSeconds()<10?'0'+myDate.getSeconds():myDate.getSeconds();
}

export const dealAppList=(ev)=>{/*处理app列表*/
	let list = (ev.navList.length/APP_LIST).toFixed()/*共有多少组*/
	let navList = JSON.parse(JSON.stringify(ev.navList));
	let arr1=[];
	for(let i = 0; i <list;i++) {/*分成俩组*/
		arr1[i] =[];
		for (let k = 0; k <APP_LIST; k++) {if(navList[k]){arr1[i].push(navList[k])}}
		navList.splice(0,APP_LIST);
	}
	console.log(arr1);
	ev.appArray = arr1;
}
