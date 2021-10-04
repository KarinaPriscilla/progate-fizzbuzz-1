let output = ''
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            output += 'FizzBuzz! '
        } else {
            output += 'Fizz! '
        }
    } else if (i % 5 === 0) {
        output += 'Buzz! '
    } else {
        output += i + ' '
    }
}

document.write(output)
