var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000*60*60*24));
var hours - Math.floor((t%1000*60*60*24))