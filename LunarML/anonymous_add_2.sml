(* Naivní implementace výpočtu Fibonacciho posloupnosti *)

fun fib n =
    if n = 0 then 0 else
    if n = 1 then 1 else
    fib (n - 1) + fib (n - 2);


(* Anonymní funkce *)
val result = (fn (x, y) => x+y) (fib 1, fib 2);

print(Int.toString (result));
print "\n";
