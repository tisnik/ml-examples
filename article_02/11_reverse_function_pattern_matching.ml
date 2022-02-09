(* Implementace funkce reverse pattern matchingem *)

fun reverse([]) = []
  | reverse(head::tail) = reverse(tail) @ [head];


reverse([]);
reverse([1,2]);
reverse([1,2,3,4]);
