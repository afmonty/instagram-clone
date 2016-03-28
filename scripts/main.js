var $iUrl = $("#inputUrl");
var $iComment = $(".inputComment");
var $item = $("#divContainer");
var picsUrl = "http://small-tiyfe.herokuapp.com/collections/pictures";



function display(picture){
		$item.append(("<div><img src ='"+picture.url+"'/></div>")+
			("<div>"+picture.com+"</div>"));
};


$(function(){
		$.ajax(  {
		url: picsUrl,
		type: 'get',
		dataType: 'json',
		success: function(pictures){
			$.each(pictures, function(i, picture){
			display(picture);
			});
		}
	});
});



$( ".addButton" ).click(function () {
  if ( $( ".input" ).is( ":hidden" ) ) {
    $( ".input" ).slideDown( "slow" );
  } else {
    $( ".input" ).slideUp();
  }
});


$(".addImage").click(saveInput);

function saveInput(){
	var picture = {
		url: $iUrl.val(),
		com: $iComment.val(),
	};
	if(!($iUrl.val()) || !($iComment.val())) {
		alert("Please do not leave fields blank");
	 } else if
 		(!($iUrl.val().contains("http")) {
 			alert("Please enter a valid URL.");
 		} else {	
			var postSettings = $.ajax({
				url: picsUrl,
				type: 'post',
				dataType: 'json',
				data: picture,
				success: function(newpic){
					display(newpic);
				},
			 	error: function(err) {
			 	 console.log("error")
			    }
			 })
		  }
	 };
	


$(".cancel").click(function() {
	$iUrl.val("");
	$iComment.val("");
});





