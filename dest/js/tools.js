$(function() {
  var $linkButtons = $("#link-buttons"); 
  console.log($linkButtons);
  
  function addButton(url,text){
    var newButton = document.createElement('button');
    $(newButton).text(text);
    $(newButton).on("click",()=>{
      chrome.runtime.sendMessage({"method":"GBFWindowURLSet","url":url}); 
    });
    $linkButtons.append(newButton);
  }
 
  addButton("https://twitter.com/","ついったー");
  addButton("http://game.granbluefantasy.jp/#quest/supporter/800011/22","CPクエ");
  addButton("http://game.granbluefantasy.jp/#coopraid","共闘");

});