(*
 * Seriál "Funkcionální programovací jazyk ML"
 *    https://www.root.cz/serialy/funkcionalni-programovaci-jazyk-ml/
 *
 * První část
 *    LunarML: až překvapivě kvalitní transpiler z jazyka Standard ML do jazyků Lua a JavaScript
 *    https://www.root.cz/clanky/lunarml-az-prekvapive-kvalitni-transpiler-z-jazyka-standard-ml-do-jazyku-lua-a-javascript/
 *
 * Repositář:
 *    https://github.com/tisnik/ml-examples
 *)


(* Naivní implementace výpočtu Fibonacciho posloupnosti *)

fun fib n =
    if n = 0 then 0 else
    if n = 1 then 1 else
    fib (n - 1) + fib (n - 2);


(* Realizace funkce pro součet tří celočíselných hodnot *)
fun add3 (x, y, z) = x + y + z;

let
    val a = fib 1
    val b = fib 2
    val c = fib 3
    val d = add3(a, b, c)
in
    print(Int.toString d);
    print "\n"
end;


