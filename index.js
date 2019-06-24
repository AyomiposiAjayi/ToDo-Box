var container = $('.celeb-container');
var button = $('.enterbutton');
var message = $('.message');


button.on("click", AddToCeleb);

function AddToCeleb(){
  var searchbox1 = $('.searchbox1').val();
  var searchbox2 = $('.searchbox2').val();
  var searchbox3 = $('.searchbox3').val();

container.append(`<p> You have added ${searchbox1} as your Favorite Singer, ${searchbox2} as your Favorite Actor, and ${searchbox3} as your Favorite Youtuber.</p>`);

$('.searchbox1').val("");
$('.searchbox2').val("");
$('.searchbox3').val("");
}


// <h4> Insert the Names of your Favorite Celebrity based on the Catergory.</h4>
