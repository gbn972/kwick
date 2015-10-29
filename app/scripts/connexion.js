(function(window, $){
	'use strict';
	const API_ROOT_URL="http://swapi.co/api";

	function KwickAPI(url){
		var request= $.ajax({
			type: 'GET',
			url: API_ROOT_URL +url
		});

	}


	var connexion = {

		getConnexion : function (name, password){
					KwickAPI('/login/ '+name + '/'+ password, function(err, data){
						if (err)
							alertify.alert(data.result.message);

							 sessionStorage.setItem("id",data.result.id);
							 sessionStorage.setItem("token",data.result.token);
							 window.location.href= utilisateur-m.html;
						
						
					});
		},
		
		Connexion : function(){
				var name     = $(".name");
				var password = $(".password");

			$( ".connexion" ).on( "click", function() {

			 	if(name.val().length === "" || password.val().length === ""){
			 		 alertify.alert("un des champs et vide");
			 	}else{
			 		 alertify.alert("vous avez rempli  tous vos champs");
			 	};	
			});
		}

		

	}

	window.app = app;
})(window,jQuery)