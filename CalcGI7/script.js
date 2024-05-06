let result = document.getElementById('result');
//textContent property returns text content of spec node
function appendNumber(num) {
    if (result.textContent === '0' && num !== '0') {
        result.textContent = num;
    } else {
        result.textContent += num;
    }
}


function appendOperator(operator) {
if (result.textContent !== '0') {
    result.textContent += operator;
    }
}

function clearResult(){
    result.textContent = '0'
}
// the try defines a code block to run
// the catch defines code block to cathc error 
function calculate() {
    try {
        result.textContent = eval(result.textContent);
    } catch (error) {
        result.textContent = 'Error';
    }
}