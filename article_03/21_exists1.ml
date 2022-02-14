(* Funkce exists *)

fun exists(element, []) = false
  | exists(element, head::tail) = if element = head then true
                                  else exists(element, tail);


exists(2, [1,2,3]);
exists(0, [1,2,3]);
exists(42, [42]);
exists(42, []);
