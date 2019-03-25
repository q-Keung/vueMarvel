function Brid(){
    var name = 'name';
    this.type = 'type';
    this.getName = function(){
        console.log(this.name);
    };
}
Brid.color = "white";
Brid.getType = function(){
    console.log(this.type);
};
Brid.prototype.getColor = function(){
    console.log(this.color);
}
var brid = new Brid();brid.getName();Brid.getType();brid.getColor();



var color = "red";
function oColor(){
    var color = "yellow";
}
oColor.color = "green";
oColor.prototype.showColor = function(){
    console.log(this.color);
}


var o = new oColor();
o.color = "blue";
o.showColor();
