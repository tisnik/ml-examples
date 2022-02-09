(* Implementace funkce reverse pattern matchingem *)

fun reverse([]) = []
  | reverse(lst) = reverse(tl(lst)) @ [hd(lst)];


reverse([]);
reverse([1,2]);
reverse([1,2,3,4]);
