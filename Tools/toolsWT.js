/*
isEven takes a single integer parameter a returning true
if a is even and false if a is odd
*/

function isEven(a)
{
    return a % 2 == 0;
}

/*
print(isEven(-1))
print(isEven(-2))
print(isEven(1))
print(isEven(8))
*/

/*
missing_char takes a non-empty string, str, and returns
the str without the character at index n
*/
function missing_char(str, n)
{
    return str.substr(0, n) + str.substr(n+1);
}

/*
print(missing_char("hello", 1))
print(missing_char("kitty", 4))
print(missing_char("happy", 0))
*/

/*
base2To10 takes a preconditioned string str of only 1s and 0s 
and returns an integer value representing str in base 10
*/

function base2To10(str)
{
    var total = 0
    var i = len(str) - 1
    var n = 0

    while(i >= 0)
    {
        total += int(str[i]) * Math.pow(2, n)
        i -= 1
        n += 1
    }
    return total
    
}

/*
print(base2To10("11111111"))
print(base2To10("1111"))
print(base2To10("1010"))
*/

/*
sumDigits takes integer a >= 0 and returns
the integer sum of its digits
*/
function sumDigits(a)
{
    var total = 0
    while(a > 0)
    {
        total += a % 10
        a = Math.floor(a / 10)
    }
    return total
}
/*
print(sumDigits(123))
print(sumDigits(10))
print(sumDigits(647))
*/