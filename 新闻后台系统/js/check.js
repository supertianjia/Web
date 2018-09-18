		function shoeTips(spanId, tips) {
			var span = document.getElementById(spanId);
			span.innerHTML = tips;
		}
		/**
		 * 校验用户名
		 */
		function hint() {
			var value = document.getElementById("value").value;
			var hint = document.getElementById("hint");
			if(value.length < 6) {
				hint.innerHTML = "用户名太短";
				return false;
			} else {
				hint.innerHTML = "用户名合格";
				return true;
			}
		}
		
		function hint_hide() {
			var hint = document.getElementById("hint");
			hint.innerHTML = "";
		}
		/**
		 * 校验密码
		 */
		
		function checkPass() {
			var value = document.getElementById("pass_value").value;
			var hint = document.getElementById("pass_hint");
			if(value.length < 6) {
				hint.innerHTML = "密码太短";
				return false;
			} else {
				hint.innerHTML = "密码格式合格";
				return true;
			}
		}
		
		function pass_hide() {
			var hint = document.getElementById("pass_hint");
			hint.innerHTML = "";
		}
		/***
		 * 确认密码的校验
		 */
		function checkPassPass() {
			var papavalue = document.getElementById("passpass_value").value;
			var value = document.getElementById("pass_value").value;
			var papahint = document.getElementById("passpass_hint");
			if(papavalue != value) {
				papahint.innerHTML = "两次密码不一致";
				return false;
			} else {
				papahint.innerHTML = "";
				return true;
			}
		}
		
		function passpass_hide() {
			var papahint = document.getElementById("passpass_hint");
			papahint.innerHTML = "";
		}
		/**
		 * 校验邮箱
		 */
		function checkEmail(strEmail) {
			var emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
			if(emailReg.test(strEmail)) {
				return true;
			} else {
				//      alert("您输入的Email地址格式不正确！");
				return false;
			}
		};
		
		function emailCheck() {
			var emailValue = document.getElementById("email").value;
			var email_hint = document.getElementById("email_hint");
			var flag = checkEmail(emailValue);
			if(flag) {
				email_hint.innerHTML = "邮箱格式正确";
				return true;
			} else {
				email_hint.innerHTML = "邮箱格式错误";
				return false;
			}
		}
		
		function emailHide() {
			var email_hint = document.getElementById("email_hint");
			email_hint.innerHTML = "";
		}
		/**
		 * 校验手机号
		 */
		function checkMobile(strMobile) { //13588888888
			var regu = /^[1][345678][0-9]{9}$/;
			var re = new RegExp(regu);
			if(re.test(strMobile)) {
				return true;
			} else {
				return false;
			}
		};
		
		function phoneCheck() {
			var phone = document.getElementById("phone").value;
			var phone_hint = document.getElementById("phone_hint");
			var flag = checkMobile(phone);
			if(flag) {
				phone_hint.innerHTML = "手机号格式正确";
				return true;
			} else {
				phone_hint.innerHTML = "手机号格式错误";
				return false;
			}
		}
		
		function phoneHide() {
			var phone_hint = document.getElementById("phone_hint");
			phone_hint.innerHTML = "";
		}
		
		/**
		 * 校验验证码
		 */
		var code;
		
		function chengeCode() {
			code = "";
			/*
			 * 定义code的长度
			 */
			var codeLength = 4;
			/*
			 * 把要出现的数字存入数组
			 */
			var codeArr = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
				'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
			for(var i = 0; i < codeLength; i++) {
				/*
				 * 获取36个数中的随机一个
				 * 把获得的值赋值给code
				 */
				var charIndex = Math.floor(Math.random() * 36);
				code = code + codeArr[charIndex];
			}
			document.getElementById("yan_code").innerHTML = code;
			document.getElementById("yan_code").style.fontSize = "20px";
			document.getElementById("yan_code").style.letterSpacing = "3px";
		}
		/*
		 * 校验验证码
		 */
		function checkCode() {
			var yanCode = document.getElementById("yan").value;
			var code1 = code;
			if(yanCode != code1) {
				alert("验证码错误！")
				document.getElementById("yan").value = "";
				return false;
			}else{
				return true;
			}
		}
		
		function checkForm() {
			var flag = emailCheck() && checkPass() && checkPassPass() && hint() && phoneCheck() && checkCode();
			return flag;
		}
		
		function checkForm2() {
			var flag = hint() && checkPass() && checkCode();
			return flag;
		}
		/**
		 * 添加用户
		 */
		function add_user(){
			var add = document.getElementById("add_count");
			add.style.display="block";
		}
		function add_exit(){
			var add = document.getElementById("add_count");
			add.style.display="none";
		}
	/*	window.onload = function(){
			var user_submit = document.getElementById("user_button");
			user_submit.onclick = function (){
				var add = document.getElementById("add_count");
				add.style.display="none";
			}
			
			var user_button_change = document.getElementById("user_button_change");
			user_button_change.onclick = function(){
				var change = document.getElementById("change_count");
				change.style.display="none";
			}
			var user_button_delete = document.getElementById("user_button_delete");
			user_button_change.onclick = function(){
				var delete_count = document.getElementById("delete_count");
				delete_count.style.display="none";
			}
		}*/
		function button_user(){
			var add = document.getElementById("add_count");
			add.style.display="none";
		}
		/**
		 * 编辑用户
		 */
		function change_user(){
			var change = document.getElementById("change_count");
			change.style.display="block";
		}
		function exit_change(){
			var change = document.getElementById("change_count");
			change.style.display="none";
		}
		function button_change(){
			var change = document.getElementById("change_count");
			change.style.display="none";
		}
		/**
		 * 删除用户
		 */
		function delete_count(){
			var delete_count = document.getElementById("delete_count");
			delete_count.style.display = "block";
		}
		function exit_delete(){
			var delete_count = document.getElementById("delete_count");
			delete_count.style.display="none";
		}
		function button_delete(){
			var delete_count = document.getElementById("delete_count");
			delete_count.style.display="none";
		}
		/**
		 * 右侧菜单切换
		 */
		function user_right(){
			var user_oper = document.getElementById("user_oper");
			user_oper.style.display = "block";
			var column_list = document.getElementById("column_list");
			column_list.style.display="none";
			var news_list = document.getElementById("news_list");
			news_list.style.display = "none";
			var user_list = document.getElementById("user_list");
			user_list.style.display = "block";
			var user_list = document.getElementById("user_text");
			user_list.innerHTML = "账户管理";
			var nav_text = document.getElementById("nav_text");
			nav_text.innerHTML="用户管理";
			
		}
		function coulmn_right(){
			var user_oper = document.getElementById("user_oper");
			user_oper.style.display = "block";
			var user_list = document.getElementById("user_list");
			user_list.style.display = "none";
			var news_list = document.getElementById("news_list");
			news_list.style.display = "none";
			var column_list = document.getElementById("column_list");
			column_list.style.display="block";
			var user_list = document.getElementById("user_text");
			user_list.innerHTML = "栏目管理";
			var nav_text = document.getElementById("nav_text");
			nav_text.innerHTML="栏目管理";
		}
		function news_right(){
			var user_oper = document.getElementById("user_oper");
			user_oper.style.display = "none";
			var user_list = document.getElementById("user_list");
			user_list.style.display = "none";
			var column_list = document.getElementById("column_list");
			column_list.style.display="none";
			var news_list = document.getElementById("news_list");
			news_list.style.display = "block";
			var user_list = document.getElementById("user_text");
			user_list.innerHTML = "账户管理";
			var nav_text = document.getElementById("nav_text");
			nav_text.innerHTML="新闻管理";
		
		}
	