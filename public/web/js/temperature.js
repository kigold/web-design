$(document).ready(function() {
    console.log("temparature");
    var cel = $('#celcius');
    var far = $('#fahrenheit');
    var temp = 0;
    var c = 0;
    var f = 0;
    console.log(cel + " " + far);
    cel.change(function(){
        //c = (f-32) 5/9
        //f = (c x 9/5) +32
        c = cel.val();
        f = (c*(9/5)) + 32;
        far.val(parseFloat(Math.round(f * 100) / 100).toFixed(2));
        console.log(f);
    })
    far.change(function(){
        f = far.val();
        c = (f - 32)*(5/9);        
        cel.val(parseFloat(Math.round(c * 100) / 100).toFixed(2));
        console.log(c);
    })
});