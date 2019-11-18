$(function() {
  var $saveButton = $("#save-button");

  var $leftUrlInput = $("#left input[type=url]");
  var $leftTextInput = $("#left input[type=text]");
  var $rightUrlInput = $("#right input[type=url]");
  var $rightTextInput = $("#right input[type=text]");

  $leftUrlInput.val(localStorage.getItem("leftButtonUrl") || "http://game.granbluefantasy.jp/");
  $leftTextInput.val(localStorage.getItem("leftButtonText") || "グラブル");
  $rightUrlInput.val(localStorage.getItem("rightButtonUrl") || "http://game.granbluefantasy.jp/#coopraid");
  $rightTextInput.val(localStorage.getItem("rightButtonText") || "共闘");

  $saveButton.on("click",()=>{
    if($leftUrlInput.val()!="")localStorage.setItem("leftButtonUrl",$leftUrlInput.val());
    if($leftTextInput.val()!="")localStorage.setItem("leftButtonText",$leftTextInput.val());
    if($rightUrlInput.val()!="")localStorage.setItem("rightButtonUrl",$rightUrlInput.val());
    if($rightTextInput.val()!="")localStorage.setItem("rightButtonText",$rightTextInput.val());
  });
});
