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


(* Implementace výpočtu Fibonacciho posloupnosti s využitím pattern matchingu *)

(* Pomocné funkce *)
fun dec1 x = x - 1;
fun dec2 x = dec1 (dec1 x);


fun fib 0 = 0
  | fib 1 = 1
  | fib n = fib (dec1 n) + fib (dec2 n);


print(Int.toString(fib 0));
print "\n";

print(Int.toString(fib 1));
print "\n";

print(Int.toString(fib 10));
print "\n";
