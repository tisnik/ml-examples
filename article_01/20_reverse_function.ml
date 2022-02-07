(* Implementace funkce reverse *)

fun reverse(x, y) = if null(x) then y
                    else reverse(tl(x), hd(x)::y);

reverse([2,3,4], [1]);
