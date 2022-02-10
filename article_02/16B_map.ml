(* Implementace funkce map *)

fun map f [] = []
  | map f (head::tail) = (f head) :: (map f tail);


map(fn x => x/2.0, [1.0, 2.0, 3.0]);
