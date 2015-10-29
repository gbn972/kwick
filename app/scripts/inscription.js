(function(window , $){
	'use strict';
	const API_ROOT_URL= "http://swapi.co/api";  

	function KwickAPI(url){
		var request= $.ajax({
			type: 'GET',
			url: API_ROOT_URL +url
		});
	}
	
	var  inscription = {

		getLogin: function (user_name, password){
					KwickAPI('/signup/'+user_name+password, function(err ,data){
						if (err)
							 alertify.alert(data.result.message);

							 sessionStorage.setItem("id",data.result.id);
							 sessionStorage.setItem("token",data.result.token);		
					});
		},
		
		login : function(){
				var name     = $(".name");
				var password = $("password");

			$( ".inscription" ).on( "click", function() {

			 	if(name.val().length === "" || password.val().length === ""){
			 		 alertify.alert("un des champs et vide");
			 	}else{
			 		 alertify.alert("vous avez rempli  tous vos champs");
			 	};	
			});
		}

	}

	window.inscription = inscription;
})(window,jQuery)