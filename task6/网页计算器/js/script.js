var calc = {
    reg1: 0, //存储操作数，同时也作为计算器屏幕的缓存，其内容直接显示到计算器屏幕
    reg2: 0, //存储双目运算的另一个操作数
    operator: "empty", // 存储运算符号+ - * /
    cls: false, // 清屏幕指示，在按下运算符号后设置为true，其后输入数字作为另一个操作数的一部分，同时会清空目前显示的数字
    decimalPoint: false, // 小数点标志，表示已经输入了一个小数点，

    //处理数字键，num为按下的数字（0.。9及小数点中之一）
    clickNumber: function(num) {
        if (this.cls) {
            //如果清屏标志为true，则目前正接受新的数字输入
            // 将目前屏幕显示的数字缓存到reg2中，
            //然后清空当前屏幕缓存，接受新的数字输入
            this.reg2 = this.reg1;
            this.reg1 = 0;
        }
        var text = this.reg1.toString(); //从屏幕缓存中取出操作数，将其以字符串表示，方便处理

        if (num === ".") {
            if (text.indexOf(".") === -1) { //如果数字中不存在小数点
                this.decimalPoint = true; //则设置小数点标志，
            } else {
                //应将该小数点加到数字text中，但在应用parseFloat()函数转换中，字符串结尾的小数点不会保留，
                // 故这里不处理小数点，设置小数点标志，等待下次输入时处理
            }
        } else {
            if (this.decimalPoint) { //提示上一次输入了小数点，
                this.reg1 = parseFloat(text + "." + num); //将小数点加入到数字中
                this.decimalPoint = false;
            } else {
                this.reg1 = parseFloat(text + num); //将处理好的操作数转换为数字存储
            }
        }
        this.cls = false; //继续接受数字，直到再次按下运算符
    },
    //处理sin cos tan sqrt +/-等单目操作符，操作的对象为屏幕目前显示的数字（存储在reg1中）
    clickUnaryOperator: function(key) {
        var result = 0;
        switch (key) {
            case "sin":
                result = parseFloat(Math.sin((this.reg1)*Math.PI/180).toFixed(8));
                break;
            case "cos":
                result = parseFloat(Math.cos((this.reg1)*Math.PI/180).toFixed(8));
                break;
            case "tan":
                result = parseFloat(Math.tan((this.reg1)*Math.PI/180).toFixed(8));
                break;
            case "sqrt":
                result = parseFloat(Math.sqr(t(this.reg1*Math.PI/180).toFixed(8)));
                break;
            case "1/x":
                result = 1 / this.reg1;
                break;
            case "+/-":
                result = -this.reg1;
                break;
        }
        this.reg1 = result;
        this.cls = true; //计算完毕，设置清屏标志，再次数的数字视为另一个操作数
    },
    // + - * / 双目运算符处理， 操作数为为reg1, reg2，运算符为operator中存储的
    // key为目前点击的操作符
    clickBinaryOperator: function(key) {
        if (this.operator === "empty") { //如operator未设置，则将目前的操作符存入
            this.operator = key;
        } else {
            this.reg1 = this.binaryOperation(); //进行计算，结果存入reg1中，以便输出
            this.reg2 = 0;
            this.operator = key;
        } //
        this.cls = true; //设置清屏标记，接受新的运算符输入
    },
    //进行+ - * /运算，返回结果给调用函数
    binaryOperation: function() {
        var result = 0;
        switch (this.operator) {
            case "+":
                result = this.reg1 + this.reg2;
                break;
            case "-":
                result = this.reg2 - this.reg1;
                break;
            case "*":
                result = this.reg1 * this.reg2;
                break;
            case "/":
                result = this.reg2 / this.reg1;
                break;
            default:
        }
        return parseFloat(result.toFixed(8));
    },
    // 清除计算器寄存器，以便重新计算
    clear: function() {
        this.reg1 = 0;
        this.reg2 = 0;
        this.operator = "empty";
    },
    //点击等于号=时的操作： 对目前寄存器的内容进行运算（req1 oeprator reg2)
    // 同时清除寄存器，以便开始新的计算
    clickEqual: function() {
        this.reg1 = this.binaryOperation().toString();
        this.cls = true;
        this.reg2 = 0;
        this.operator = "empty";
    },
    //处理退格键，从右侧向左删除数字
    backspace: function() {
        var text = this.reg1.toString();
        if (text.length === 1 || /^0.\d$/.test(text)) {
            this.reg1 = 0;
        } else {
            var end = text.length - 1;
            text = text.slice(0, end);
            this.reg1 = parseFloat(text);
        }
    }
};

// 用户接口对象，负责处理用户界面的点击事件，同时输出计算结果
var ui = {
    // 初始化计算器按键的事件监听器，以便对点击事件发出相应
    init: function() {
        var keys = document.getElementsByTagName("td");
        for (var i = 0; i < keys.length; i++) {
            keys[i].addEventListener("click", this.keyClick);
        }
    },

    // 处理点击按键事件
    keyClick: function(event) {
        var keyName = event.target.textContent;
        switch (keyName) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
            case ".":
                calc.clickNumber(keyName);
                break;
            case "sin":
            case "cos":
            case "tan":
            case "sqrt":
            case "1/x":
            case "+/-":
                calc.clickUnaryOperator(keyName);
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                calc.clickBinaryOperator(keyName);
                break;
            case "C":
                calc.clear();
                break;
            case "=":
                calc.clickEqual();
                break;
            case "Back":
                calc.backspace();
                break;
            default:
        }
        //负责点击按键后计算器屏幕的显示，内容输出到<input id="lcd">中
        var screen = document.getElementById("lcd");
        var text = calc.reg1.toString(); //将计算器中的reg1数字转换为字符串以便处理后输出
        if (calc.decimalPoint) { //设置了小数点标志后，输出时记得加入小数点
            screen.value = text + ".";
        } else {
            screen.value = text;
        }
    }
};
//初始化计算器
ui.init();
