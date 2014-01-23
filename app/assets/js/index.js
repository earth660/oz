//Canvasオブジェクトの作成
var bgCanvas = document.getElementById('BgContent');
var bgCxt = bgCanvas.getContext('2d');
var graphCanvas = document.getElementById('GraphContent');
var graphCxt = graphCanvas.getContext('2d');

//基本情報
var canvasW = 400;
var canvasH = 300;
var centerX = canvasW/2-50;
var centerY = canvasH/2;
var graphR = 100;
var deleteR = 50;

//グラフデータ
var dataAry=[15,15,15,15,15,15];
var colAry =["#FF0","#0F0","#00F","#F00","#0FF","#F0F"];
var labelAry =["data1","data2","data3","data4","data5"];

var dataAryTotal=0;
var angleAry=[];
var angleCnt=0;
var itemCnt = dataAry.length;
for(i=0;i<itemCnt ;i++){
    dataAryTotal+=dataAry[i];
}
for(i=0;i<itemCnt;i++){
  angleCnt += 360*dataAry[i]/dataAryTotal;
  angleAry[i] = angleCnt;
}

//三角関数系のfunction
function setRad(num){return num*Math.PI/180;}
function sin(num){return Math.sin(setRad(num));}
function cos(num){return Math.cos(setRad(num));}



//グラフ描画
//指定した角度で扇形を作成する関数
function setSector(obj,cX,cY,rr,dr,sR,eR,col){
  startRad = sR-90;
  endRad = eR-90;
  obj.beginPath(); 
  obj.fillStyle = col;
  obj.moveTo(cX, cY);
  obj.moveTo(cX+dr*cos(startRad), cY+dr*sin(startRad));
  obj.arc(cX, cY, rr, setRad(startRad), setRad(endRad) , false);
  obj.arc(cX, cY, dr, setRad(endRad), setRad(startRad) , true);
  obj.closePath();
  obj.fill();
}

//グラフデータを元に扇形を作成
for(i=0;i<itemCnt;i++){
  var sr;
  if(i===0){
   sr=0;
  }else{
   sr=angleAry[i-1];
  }
  var er =angleAry[i];
  setSector(graphCxt,centerX,centerY,graphR,deleteR,sr,er,colAry[i]);
}

