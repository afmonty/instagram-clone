var iUrl = $(".inputUrl");
var iCaption = $(".inputCaption");
var form = $("form");
var picsUrl = "http://small-tiyfe.herokuapp.com/collections/a_pics";
var pictures = [];

var getSettings = $.ajax({
		url: picsUrl,
		type: 'get',
		dataType: 'json',
		success: handleData = function(data){
			console.log("get")
			pictures.forEach(function(list){
			var pic = ("<div img = src'"+list.url+"</div");
			var com = ("div>"+list.comment+"</div");
			$("diplay").append(pic, com);
			})
		}
	});


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
			pictures.push(iUrl.val(), iCaption.val());
	
			var postSettings = $.ajax({
				url: picsUrl,
				type: 'post',
				dataType: 'json',
				data: pictures[0],
				success: handleData = function(pictures) {
				  	var container = [];
		    		container.append(iUrl.val(), iCaption.val())
		    		})
				},
			 	error: console.log("error"),
			 	complete: display
			 })
		}
	};
	

function display(){
		iUrl = !iUrl;
		iCaption = 
		var addpic = ("<img src ='"+pictures[0]+"'/>");
		var addcom = ("<span>"+pictures[1]+"</span>");
		$( ".divContainer" ).append(addpic, addcom);

	}



