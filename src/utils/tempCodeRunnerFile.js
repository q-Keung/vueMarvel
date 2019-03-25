var color = "red";
function oColor(){
    var color = "yellow";
}
oColor.color = "green";
oColor.prototype.showColor = function(){
    console.log(this.color);
}
oColor.showColor();