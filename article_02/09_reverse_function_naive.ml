(* Naivní implementace funkce reverse *)

fun reverse(x) = if null(x) then x
                 else reverse(tl(x)) @ [hd(x)];


reverse([]);
reverse([1,2]);
reverse([1,2,3,4]);
