function Drag(id){
	if(!id)return;
	this.oDiv=document.getElementById(id);
	this.disX=0; 
	this.disY=0;
	this.init();
}

Drag.prototype.init=function (){
	var _this=this;
	this.oDiv.onmousedown=function (ev){
		var oEvent=ev || event;
		_this.Down(oEvent);
		return false;
	};
};
Drag.prototype.Down=function (oEvent){
	this.disX=oEvent.clientX-this.oDiv.offsetLeft;
	this.disY=oEvent.clientY-this.oDiv.offsetTop;
	var _this=this;
	document.onmousemove=function (ev){
		var oEvent=ev || evevnt;
		_this.Move(oEvent);
	};
	document.onmouseup=function (){
		_this.Up();
	};
};

Drag.prototype.Move=function (oEvent){
	this.oDiv.style.left=oEvent.clientX-this.disX+'px';
	this.oDiv.style.top=oEvent.clientY-this.disY+'px';
};

Drag.prototype.Up=function (){
	document.onmousemove=null;
	document.onmouseup=null;	
};







