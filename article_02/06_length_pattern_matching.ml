(* Implementace funkce length založená na pattern matchingu *)

fun length([]) = 0
  | length(head::tail) = 1 + length(tail);


length([]);
length([1]);
length([1,2,3,4]);
