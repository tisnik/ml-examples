(* Implementace výpočtu Fibonacciho posloupnosti s využitím pattern matchingu *)

fun fib 0 = 0
  | fib 1 = 1
  | fib n = fib (n - 1) + fib (n - 2);


print(Int.toString(fib 0));
print "\n";

print(Int.toString(fib 1));
print "\n";

print(Int.toString(fib 10));
print "\n";
