// make inital input variables

var num_one = document.getElementById('num_one');
var num_two = document.getElementById('num_two');

//  button select

var calcBtn = document.getElementById('calculateBtn');

// doc

document.addEventListener("DOMContentLoaded", function(event){

  var handleClick = function(){
  var sum = Number(num_one.value) + Number(num_two.value);

    document.getElementById('answer').innerHTML = sum;
    console.log(sum);
}
calculateBtn.addEventListener('click', handleClick);
});
