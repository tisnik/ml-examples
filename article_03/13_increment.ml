(* Funkce map *)

fun map (f, []) = []
  | map (f, (head::tail)) = (f head) :: (map (f,tail));


fun increment(lst) = map(fn x=> x+1, lst);


increment [1,2,3];
