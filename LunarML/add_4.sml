(* Naivní implementace výpočtu Fibonacciho posloupnosti *)

fun fib n =
    if n = 0 then 0 else
    if n = 1 then 1 else
    fib (n - 1) + fib (n - 2);


(* Realizace funkce pro součet tří celočíselných hodnot *)
fun add3 (x, y, z) = x + y + z;

val a = fib 1;
val b = fib 2;
val c = fib 3;
val d = add3(a, b, c);
print(Int.toString d);
print "\n";

