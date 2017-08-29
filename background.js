$(function(){
  $.get("https://twitter.com/i/notifications", function(data){
    var htmlData = data;
    console.log("Here");
    $('body').append(htmlData);
  });
});
