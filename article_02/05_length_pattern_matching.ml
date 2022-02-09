(* Implementace funkce length založená na pattern matchingu *)

fun length [] = 0
  | length lst = 1 + length(tl(lst));


length([]);
length([1]);
length([1,2,3,4]);
