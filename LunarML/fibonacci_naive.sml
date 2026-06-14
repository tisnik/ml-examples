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


print(Int.toString(fib 0));
print "\n";

print(Int.toString(fib 1));
print "\n";

print(Int.toString(fib 10));
print "\n";
