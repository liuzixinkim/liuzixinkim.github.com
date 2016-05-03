window.onload=function (){

	var oBox=document.getElementById('box');
	var oBtn=document.getElementById('btn');
	var oImg=document.getElementById('img');
	var oAddBtn=document.getElementById('add_btn');
	var oLgnBtn=document.getElementById('lgn_btn');
	var oUserName=document.getElementById('username');
	var oPassWord=document.getElementById('password');
	var oWrap=document.getElementById('wrap');
	var oUl=document.getElementById('ul1');
	var oTop=document.getElementById('top');
//切换头像
	var faceId='4';
	oBtn.onclick=function (){
		faceId++;
		if(faceId==9)faceId=1;
		oImg.src='face/'+faceId+'.jpg';
	};
//注册
	var URL='http://zhinengshe.com/exercise/im/api.php';
	oAddBtn.onclick=function (){
		jsonp({
			url:URL,
			data:{
				a:'reg',
				user:oUserName.value,
				pass:oPassWord.value,
				face:faceId
			},
			success:function (json){
				if(json.err)
				{
					alert('注册失败:'+json.msg);
				}else
				{
					alert(json.msg);
				}
			}
		});
	};
//登录
	oLgnBtn.onclick=function (){
		jsonp({
			url:URL,
			data:{
				a:'lgn',
				user:oUserName.value,
				pass:oPassWord.value
			},
			success:function (json){
				if(json.err)
				{
					alert('登录失败:'+json.msg);
				}else
				{
					alert(json.msg);
					//登录成功，聊天界面显示，登录界面消失
					oWrap.style.display='block';
					oBox.style.display='none';
				//登录成功以后，已经告知:face:头像ID,login_time:上次登录时间,token:"token"
					getUserList(json.token);//获取用户列表
					getAllMsg(json.token);//获取全部信息
				}
			}
		});
	};

	function getUserList(token){
		jsonp({
			url:URL,
			data:{
				a:'get_user_list',
				token:token
			},
			success:function (json){
				if(json.err)
				{
					alert('获取用户列表失败了');
				}else
				{
					var arr=json.data;
					for(var i=0; i<arr.length; i++)
					{
						var face=arr[i].face;
						// face<1 && face=4;
						face<1 && (face=4);
						face>8 && (face=2)
						var oLi=document.createElement('li');
						oLi.innerHTML='<img src="face/'+face+'.jpg" width="20" alt=""><span>'+arr[i].username+'</span>';
						oUl.appendChild(oLi);
					}
				}
			}
		});
	}

	function getAllMsg(token)
	{
		jsonp({
			url:URL,
			data:{
				a:'get_msg',
				token:token
			},
			success:function (json){
				if(json.err)
				{
					alert('获取聊天列表失败了');
				}else{
					alert('成功');
					var arr=json.data;
					for(var i=0; i<arr.lrngth; i++)
					{
						var oDl=createMsg(arr[i].post_time,arr[i].content,arr[i].username);
						oTop.appendChild(oDl);
					}
				}
			}
		});
	}

};