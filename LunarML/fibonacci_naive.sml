(* Naivní implementace výpočtu Fibonacciho posloupnosti *)

fun fib n =
    if n = 0 then 0 else
    if n = 1 then 1 else
    fib (n - 1) + fib (n - 2);


print(Int.toString(fib 0));
print "\n";

print(Int.toString(fib 1));
print "\n";

print(Int.toString(fib 10));
print "\n";
