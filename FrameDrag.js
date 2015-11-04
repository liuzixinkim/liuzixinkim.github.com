//继承属性
function FrameDrag(id){
	Drag.apply(this,arguments);

	this.borderWidth=10;
}
//继承方法
FrameDrag.prototype=new Drag();
var aParent={};
for(var name in FrameDrag.prototype)
{
	aParent[name]=FrameDrag.prototype[name];
}

FrameDrag.prototype.Down=function (){
	aParent.Down.apply(this,arguments);

	this.oNewDiv=document.createElement('div');
	this.oNewDiv.style.left=this.oDiv.offsetLeft+'px';
	this.oNewDiv.style.top=this.oDiv.offsetTop+'px';
	this.oNewDiv.style.position='absolute';
	this.oNewDiv.style.width=this.oDiv.offsetWidth-this.borderWidth*2+'px';
	this.oNewDiv.style.height=this.oDiv.offsetHeight-this.borderWidth*2+'px';
	this.oNewDiv.style.border=this.borderWidth+'px dashed #f60';

	this.oDiv.parentNode.appendChild(this.oNewDiv);

	this.oldDiv=this.oDiv;
	this.oDiv=this.oNewDiv;
};

FrameDrag.prototype.Up=function(){
	//alert(1);
	aParent.Up.apply(this,arguments);
	this.oldDiv.style.left=this.oDiv.style.left;
	this.oldDiv.style.top=this.oDiv.style.top;

	this.oldDiv.parentNode.removeChild(this.oDiv);
	this.oDiv=this.oldDiv;
};





















