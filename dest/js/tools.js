$(function() {
  var $linkButtons = $("#link-buttons"); 

  var $reloadButton = $("#reload-button");
  var $backButton = $("#back-button"); 

  $reloadButton.on("click",()=>{chrome.runtime.sendMessage({"method":"GBFWindowReload"});});
  $backButton.on("click",()=>{chrome.runtime.sendMessage({"method":"GBFWindowBack"});});

  function addButton(url,text){
    var newButton = document.createElement('button');
    $(newButton).text(text);
    $(newButton).on("click",()=>{
      chrome.runtime.sendMessage({"method":"GBFWindowURLSet","url":url}); 
    });
    $linkButtons.append(newButton);
  }

  let leftButtonUrl = localStorage.getItem("leftButtonUrl") || "http://game.granbluefantasy.jp/";
  let leftButtonText = localStorage.getItem("leftButtonText") || "グラブル";
  let rightButtonUrl = localStorage.getItem("rightButtonUrl") || "http://game.granbluefantasy.jp/#coopraid";
  let rightButtonText = localStorage.getItem("rightButtonText") || "共闘";
 
  addButton(leftButtonUrl,leftButtonText);
  addButton(rightButtonUrl,rightButtonText);

});
