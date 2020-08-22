function main(n2, n3) {
    var n2, n3;
    for (i = n2; i <= n3; i++) {
        for (j = 2; j <= 12; j++) {
            document.write(i + " " + "x" + " " + j + " " + "=" + " " + i * j + "<br>");
        }
        document.write('<br>');
    }
}
main(4, 9);

function trapezium(a, b, c) {
    var area, a, b, c;
    area = ((a + b) / 2) * c;
    document.write("Area of trapeziam is: " + area +"<br>");
}
trapezium(5, 5, 5);

function pro(num1, num2) {
    var num1, num2, sum, sub, multi, divide, dividend;
    sum = num1 + num2;
    sub = num1 - num2;
    multi = num1 * num2;
    divide = num1 / num2;
    dividend = num1 % num2;
    document.write("Sum number: " + sum + "<br>" + "Substraction number: " + sub + "<br>" + "Multipication number: " + multi + "<br>" + "Division number: " + divide + "<br>" + "Divident number: " + dividend + "<br>");
}
pro(30, 20);