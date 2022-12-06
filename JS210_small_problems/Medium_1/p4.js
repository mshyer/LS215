// Implement a language minilang that parses a string into commands
//   -Minilang has a stack of values [] and register init to 0
// DATA STRUCTURE: split string into array of command (strings)
//   -conditional logic processes the command strings
// INPUT
//   - String of uppercase commands separated by single space
//   - All inputs are valid strings of commands
// Output
//   -depends on the function. Undefined by default
// Algorithm:
//   1. Split the input string by spaces into commands arr
//   2. For each command, send to method parse
//     a. parse method will use conditional logic to call sub-methods
//   3. Only print outputs to the console.

function minilang(commandString) {
  let stack = [];
  let register = 0;
  let commands = commandString.split(' ');
  commands.forEach(command => {
    switch(command) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = parseInt(register / stack.pop());
        break;
      case 'REMAINDER':
        register = parseInt(register % stack.pop());
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        register = parseInt(command, 10);
        break;
    }
  }); 
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands):w
//

