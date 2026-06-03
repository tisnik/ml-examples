(* Implementace výpočtu Fibonacciho posloupnosti s využitím pattern matchingu *)

(* Pomocné funkce *)
fun dec1 x = x - 1;
fun dec2 x = x - 2;


fun fib 0 = 0
  | fib 1 = 1
  | fib n = fib (dec1 n) + fib (dec2 n);


print(Int.toString(fib 0));
print "\n";
print(Int.toString(fib 1));
print "\n";
print(Int.toString(fib 10));
print "\n";
