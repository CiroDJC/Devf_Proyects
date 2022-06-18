
function setResult(value) {
  document.getElementById('result').innerHTML = value;
}
function getResult() {
  return(document.getElementById('result').innerHTML);
}
function add(key) { 
  let result = getResult();
  if (result!='0' || isNaN(key)) setResult(result + key);
  else setResult(key);
}
function calc() {
  let result = eval(getResult()); 
  setResult(result);
}
function AC() { 
  setResult("");
}
function del(){
  var del = document.getElementById('result').innerHTML.slice(0,-1)
  setResult(del)
}
