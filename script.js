  function add_Fun()
  {
    let A = parseFloat(document.getElementById('inp1').value);
    let B = parseFloat(document.getElementById('inp2').value);

    let s=A+B;
    document.getElementById('result').innerHTML =s;

  }
  function sub_Fun()
  {
    let A = parseFloat(document.getElementById('inp1').value);
    let B = parseFloat(document.getElementById('inp2').value);

    let s=A-B;
    document.getElementById('result').innerHTML =s;

  }
  function mul_Fun()
  {
    let A = parseFloat(document.getElementById('inp1').value);
    let B = parseFloat(document.getElementById('inp2').value);

    let s=A*B;
    document.getElementById('result').innerHTML =s;

  }
  function div_Fun()
  {
    let A = parseFloat(document.getElementById('inp1').value);
    let B = parseFloat(document.getElementById('inp2').value);

    let s=A/B;
    document.getElementById('result').innerHTML =s;

  }

