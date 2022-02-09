(* Naivní implementace funkce length *)

fun length(x) = if null(x) then 0
                else 1 + length(tl(x));


length([]);
length([1]);
length([1,2,3,4]);
