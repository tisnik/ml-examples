(* Implementace funkce map *)

fun map f [] = []
  | map f (head::tail) = (f head) :: (map f tail);


fun half x = x / 2.0;

map half [1.0,2.0,3.0,4.0,5.0];
