let num = +prompt("Enter first number")
let op = prompt("Enter operator")
let num2 = +prompt("Enter second number")
let answer

if(op == '+'){
   answer = num + num2
}
else if(op == '-'){
    answer = num - num2
}
else if(op == '*'){
    answer = num * num2
}
else if(op == '/'){
    answer = num / num2
}
else{
    console.log("Error")
}

console.log(answer)
