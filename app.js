'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

const switcher2 = document.querySelector('#calcbtn');

switcher2.addEventListener('click', function() {
    var op1 = document.getElementById('tb1').value;
    var op2 = document.getElementById('tb2').value;
    var opr = document.getElementById('dd').value;
    console.log(typeof(op1) + opr + op2);

    var n1, n2, res;
    n1 = parseFloat(op1);
    n2 = parseFloat(op2);
    res = 0;

    if(opr === '+')
        res = n1+n2;
    else if(opr === '-')
        res = n1-n2;
    else if(opr === 'x')
        res = n1*n2;
    else if(opr === '/')
        res = n1/n2;
    
    const el = document.getElementById('result');
    el.innerHTML = res.toString();
});