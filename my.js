﻿/**
 * Created by Administrator on 2017/2/20.
 */
/************************颜色随机生成****************************************************/
var next = "";
var i = Math.floor(Math.random()*16);//0-15
var color1 = '';var color2 = '';
var color3 = '';var color4 = '';

var xmlhttp, jsonstr;
var text = document.getElementById("text");



/*if (window.XMLHttpRequest)xmlhttp = new XMLHttpRequest();
else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
xmlhttp.open("GET", "quote.txt", true);
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {jsonstr = xmlhttp.responseText;
    // alert(jsonstr.valueOf());//要用valueof（）才行**********************************************************问题
    quoteObj = JSON.parse(jsonstr);}
}*/
var jsonobj={
    "1": "成功的路很直很直，也很宽很宽！但，我还是不断地走弯！最后只不过是转了个圈！",
    "2": "人像沙粒，相互埋没，最后都出头了，便成了一盘散沙！-by 王小波",
    "3": "真理惟一可靠的标准就是永远自相符合。 —— 欧文",
    "4": "我需要三件东西：爱情友谊和图书。然而这三者之间何其相通！炽热的爱情可以充实图书的内容，图书又是人们最忠实的朋友。 —— 蒙田",
    "5": "时间是一切财富中最宝贵的财富。 —— 德奥弗拉斯多",
    "6": "世界上一成不变的东西，只有“任何事物都是在不断变化的”这条真理。 —— 斯里兰卡",
    "7": "生活有度，人生添寿。 —— 书摘",
    "8": "过放荡不羁的生活，容易得像顺水推舟，但是要结识良朋益友，却难如登天。 —— 巴尔扎克",
    "9": "成功就是把复杂的问题简单化，然后狠狠去做。",
    "10": "所有的胜利，与征服自己的胜利比起来，都是微不足道。所有的失败，与失去自己的失败比起来，更是微不足道。",
    "11": "不要对挫折叹气，姑且把这一切看成是在你成大事之前，必须经受的准备工作。",
    "12": "世界原本就不是属于你，因此你用不着抛弃，要抛弃的是一切的执著。万物皆为我所用，但非我所属。",
    "13": "成功的路很直很直，也很宽很宽！但，我还是不断地走弯！最后只不过是转了个圈！",
    "14": "过错是暂时的遗憾，而错过则是永远的遗憾！",
    "15": "注意你的思想，它会变成你的言语；注意你的言语，它会变成你的行动；注意你的行动，它会变成你的习惯；注意你的习惯，它会变成你的性格；注意你的性格，它会变成你的命运。",
    "16": "好习惯的养成，在于不受坏习惯的诱惑。",
    "17": "业精于勤而荒于嬉，行成于思而毁于随！",
    "18": "瀑布对悬崖无可畏惧，所以唱出气势磅礴的生命之歌。",
    "19": "如果在胜利前却步，往往只会拥抱失败；如果在困难时坚持，常常会获得新的成功。",
    "20": "凡过于把幸运之事归功于自己的聪明和智谋的人多半是结局很不幸的。",
    "21": "目标不是都能达到的，但它可以作为瞄准点。",
    "22": "生命太过短暂，今天放弃了明天不一定能得到",
    "23": "任何事物都不如习惯那样强有力。",
    "24": "当你无法从一楼蹦到三楼时，不要忘记走楼梯。要记住伟大的成功往往不是一蹴而就的，必须学会分解你的目标，逐步实施。",
    "25": "自己打败自己是最可悲的失败，自己战胜自己是最可贵的胜利。",
    "26": "我们最值得自豪的不在于从不跌倒，而在于每次跌倒之后都爬起来。",
    "27": "哪怕是最没有希望的事情，只要有一个勇敢者去坚持做，到最后就会拥有希望。",
    "28": "走得最慢的人，只要他不丧失目标，也比漫无目的地徘徊的人走得快。",
    "29": "让生活的句号圈住的人，是无法前时半步的。",
    "30": "这个世界并不是掌握在那些嘲笑者的手中，而恰恰掌握在能够经受得住嘲笑与批评忍不断往前走的人手中。",
    "31": "成功的信念在人脑中的作用就如闹钟，会在你需要时将你唤醒。",
    "32": "盛年不重来，一日难再晨。及时当勉励，岁月不待人。",
    "33": "明日复明日，明日何其多，我生待明日，万事成蹉跎。",
    "34": "一个人越知道时间的价值，越倍觉失时的痛苦！",
    "35": "抛弃时间的人，时间也抛弃他。",
    "36": "平庸的人关心怎样耗费时间，有才能的人竭力利用时间。",
    "37": "光景不待人，须叟发成丝。",
    "38": "时间就像海绵里的水，只要愿挤，总还是有的",
    "39": "莫等闲，白了少年头，空悲切！",
    "40": "在今天和明天之间，有一段很长的时间；趁你还有精神的时候，学习迅速办事。"
    };
quoteObj = JSON.parse(jsonstr);
/*********************************获得随机颜色和随机名言*******************/
function getQuote() {
    while (color1.length < 6) {
        color1 += '0123456789abcde'[Math.floor(Math.random() * 15)];
        color2 += '0123456789abcde'[Math.floor(Math.random() * 15)];
        color3 += '0123456789abcdef'[Math.floor(Math.random() * 16)];
        color4 += '0123456789abcdef'[Math.floor(Math.random() * 16)];
    }
//    var color = parseInt(color2,16);alert(color);
    color1 = '#' + color1;
    color2 = '#' + color2;
    color3 = '#' + color3;
    color4 = '#' + color4;

//   setTimeout("document.getElementById('btnColor0').style.backgroundColor = color1;" +
//       "document.getElementById('btnColor0').style.backgroundColor = color1;","1000");
    document.getElementById("btnColor0").style.backgroundColor = color1;
    document.getElementById("btnColor1").style.backgroundColor = color1;
    document.getElementById("btnColor2").style.backgroundColor = color1;


    document.getElementById("divColor0").style.backgroundColor = color2;
    document.getElementById("divColor1").style.backgroundColor = color2;

    document.getElementById("divColor2").style.backgroundColor = color3;
    document.getElementById("divColor3").style.backgroundColor = color3;

    document.getElementById("divColor4").style.backgroundColor = color4;

    color1 = '';
    color3 = '';
    color2 = '';
    color4 = '';
    /**********************随机取得名言************************************************************/

    var i = Math.floor(Math.random() * 41);//0-40
    if(jsonobj[i]!=undefined)
    text.firstChild.nodeValue =jsonobj[i];
    else text.firstChild.nodeValue ="成功的路很直很直，也很宽很宽！但，我还是不断地走弯！最后只不过是转了个圈！";
}
/************************************************************share*************************************************************************************************************/
function ShareWeibo(){
      var text= document.getElementById("text");
      var good =text.firstChild.nodeValue;
    var shareqqstring="http://v.t.qq.com/share/share.php?title="+good+"--看到这句话我非常有感触，你呢？";
    window.open(shareqqstring,'newwindow','height=100,width=100,top=100,left=100');
}
function ShareTwitter(){
    var text= document.getElementById("text");
    var good =text.firstChild.nodeValue;
    var sharesinastring='http://v.t.sina.com.cn/share/share.php?title='+good+"--看到这句话我非常有感触，你呢？";
    window.open(sharesinastring,'newwindow','height=400,width=400,top=100,left=100');
}









