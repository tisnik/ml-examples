(* Funkce exists jako operátor *)

fun exists(element, []) = false
  | exists(element, head::tail) = if element = head then true
                                  else exists(element, tail);

infix 1 exists;


1+1 exists [1,2,3];
3*1 exists [1,2,3];

1+1 exists [1,2] @ [3,4];
