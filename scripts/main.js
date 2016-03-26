var iUrl = $(".inputUrl");
var iCaption = $(".inputCaption");
var form = $("form");
var picsUrl = "http://small-tiyfe.herokuapp.com/collections/a_pics;"
var pictures = [];

$( ".addButton" ).click(function () {
  if ( $( "section" ).is( ":hidden" ) ) {
    $( "section" ).slideDown( "slow" );
  } else {
    $( "section" ).slideUp();
  }
});


$(".addImage").click(saveInput);


function saveInput(){
	 if	((!iUrl.val()) || (!iCaption.val())){
			alert("please don't leave fields blank")
		}else{
			return pictures.push(iUrl.val(), iCaption.val());
			 display();
	  		}	
	};
	// var getSettings = {
	// 	url: picsUrl,
	// 	type: 'get',
	// 	dataType: 'json',
	// 	success: display,
	// 	error: console.log("error")
	

function display(){
console.log("display");

}

//$.ajax(getSettings);

