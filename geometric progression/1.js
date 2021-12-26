var first, r, n,Sn;

first = prompt("enter the first number of geometric progression");
r = prompt("enter the common multiplication or divisible number");
n = prompt("enter the nth term of the element");


// Sn = a * r^(n-1)
Sn =  (first * (Math.pow(r, n-1)));
alert(Sn);