window.onload = function() {
    var leftInput = document.getElementById("left");
    var rightInput = document.getElementById("right");
    var operator = document.getElementById("operator");
    var btn = document.getElementById("btn");
    var result = document.getElementById("result");
    var clear = document.getElementById("clear");
    btn.onclick = function() {
        if (leftInput.value == "" || rightInput.value == "" || isNaN(leftInput.value) || isNaN(rightInput.value)) {
            alert('请输入有效数字！');
            return;
        }
        switch (operator.value) {
            case '+':
                result.value = parseFloat((Number(leftInput.value) + Number(rightInput.value)).toFixed(8));
                break;
            case '-':
                result.value = parseFloat((Number(leftInput.value) - Number(rightInput.value)).toFixed(8));
                break;
            case '*':
                result.value = parseFloat((Number(leftInput.value) * Number(rightInput.value)).toFixed(8));
                break;
            case '/':
                if (rightInput.value == "0"||rightInput.value=="0.") {
                    alert("0不能做被除数");
                    return;
                }
                result.value = (Number(leftInput.value) / Number(rightInput.value)).toFixed(2);
                break;
            case '%':
            	if (rightInput.value == "0") {
                    alert("0不能做被除数");
                    return;
                }
                result.value = Number(leftInput.value) % Number(rightInput.value);
                break;
        }
    }
    clear.onclick = function() {
        leftInput.value = '';
        rightInput.value = '';
        result.value = '';
    }
}
