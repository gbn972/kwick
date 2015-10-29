(function(window, $){
	'use strict';
	const API_ROOT_URL= "http://swapi.co/api";
	
	function KwickAPI(url){
		var request= $.ajax({
			type: 'GET',
			url: API_ROOT_URL +url
		});

	}


	var connexion = {

		getLoggers : function (token){
					KwickAPI('/user/logged/ '+ "token" ,  function(err, data){
						if (err)
							alertify.alert("Vous etes pas logger ");

							$( ".list" ).append( "<li>Test</li>" );
						
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