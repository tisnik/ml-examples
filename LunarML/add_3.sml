(* Naivní implementace výpočtu Fibonacciho posloupnosti *)

fun fib n =
    if n = 0 then 0 else
    if n = 1 then 1 else
    fib (n - 1) + fib (n - 2);


(* Realizace funkce pro součet dvou celočíselných hodnot *)
fun add (x, y) = x + y;

val a = fib 10;
val b = fib 20;
val c = add(a, b);
print(Int.toString c);
print "\n";

