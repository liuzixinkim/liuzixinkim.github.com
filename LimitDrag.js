//继承属性
function LimitDrag(id){
	Drag.apply(this,arguments);
}
//继承方法
LimitDrag.prototype=new Drag();
LimitDrag.prototype.constructor=LimitDrag;

var oldMove=LimitDrag.prototype.Move;//把之前继承的move存期来

LimitDrag.prototype.Move=function (){//写新的move
	oldMove.apply(this,arguments);//调用继承的move

	if(this.oDiv.offsetLeft<=0)
	{	
		this.oDiv.style.left=0;	
	}
	else if(this.oDiv.offsetLeft>=document.documentElement.clientWidth-this.oDiv.offsetWidth)
	{
		this.oDiv.style.left=document.documentElement.clientWidth-this.oDiv.offsetWidth+'px';
	}

	if(this.oDiv.offsetTop<=0)
	{
		this.oDiv.style.top=0;
	}else if(this.oDiv.offsetTop>=document.documentElement.clientHeight-this.oDiv.offsetHeight)
	{
		this.oDiv.style.top=document.documentElement.clientHeight-this.oDiv.offsetHeight+'px';
	}

};













