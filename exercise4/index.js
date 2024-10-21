/* 
  Given a string containing just the characters ( and ), find the length of the longest valid (well-formed) parentheses substring.
*/

/*
  The idea would be to look for '(' and trying to balance it with a ')'.
  For every '(' I would add 1 to my openCounter (open parentheses counter) and every ')' I would subtract 1, and update the longestValidation with balancedParentheses.
    But if I find a ')' and my openCounter is < 0, then I would start a new counter (balancedParentheses)
*/

function sizeParentheses(parenthesesList) {
  let openCounter = 0;
  let balancedParentheses = 0;
  let longestValidation = 0;

  for (let i = 0; i < parenthesesList.length; i++) {
    const parentheses = parenthesesList[i];

    if (parentheses === "(") {
      openCounter++;
    } else if (parentheses === ")") {
      if (openCounter > 0) {
        openCounter--;
        balancedParentheses += 2;
        longestValidation = Math.max(balancedParentheses, longestValidation);
      } else {
        balancedParentheses = 0;
      }
    }
  }

  console.log(longestValidation);
  return longestValidation;
}

sizeParentheses("(()"); // ➞ 2 Longest valid parentheses substring is "()"
sizeParentheses(")()())"); // ➞ 4 Longest valid parentheses substring is "()()"
sizeParentheses("()))))(()())("); // ➞ 6 (()())
sizeParentheses(")))()"); // ➞ 2 ()
sizeParentheses("))(()))(())()((("); // ➞ 6 (())()
sizeParentheses(")()())"); // ➞ 4 ()()
