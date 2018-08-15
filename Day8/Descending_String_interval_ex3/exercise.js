var star = "*";
var display = "*";

for(var i = 10; i > 0; i--){//height
for(j = i; j > 0; j--){ //width
    display = display + "" + star;
}
console.log(display);
//clear display
display = "";
}