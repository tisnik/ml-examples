(* Implementace funkce map *)

fun map f [] = []
  | map f (head::tail) = (f head) :: (map f tail);


map(fn x => x+1, [1,2,3]);
