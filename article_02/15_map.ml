(* Implementace funkce map *)

fun map f [] = []
  | map f (head::tail) = (f head) :: (map f tail);


fun inc x = x + 1;

map inc [1,2,3];
