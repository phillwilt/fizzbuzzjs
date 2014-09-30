function fizzBuzz(n) {
  var str = '';
  if (n % 3 == 0) {
    str += 'Fizz';
  }
  if (n % 5 == 0) {
    str += 'Buzz';
  }
  return (str.length == 0) ? n: str;
}

function iterator(proc, start, end) {
  for(var i = start; i <= end; i++) {
    console.log(String(proc(i)));
  }
}

// Tests {
console.assert(fizzBuzz(3) == 'Fizz', '3 does not equal Fizz')
console.assert(fizzBuzz(5) == 'Buzz', '5 does not equal Buzz')
console.assert(fizzBuzz(15) == 'FizzBuzz', '15 does not equal FizzBuzz')
console.assert(fizzBuzz(4) == 4, '4 does not equal 4')
// Tests }

iterator(fizzBuzz, 1, 1000);
