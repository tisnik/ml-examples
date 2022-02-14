(* Funkce exists jako operátor *)

fun exists(element, []) = false
  | exists(element, head::tail) = if element = head then true
                                  else exists(element, tail);

infix 1 exists;


2 exists [1,2,3];
0 exists [1,2,3];
42 exists [42];
42 exists [];
