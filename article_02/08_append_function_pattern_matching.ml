(* Implementace funkce append založená na pattern matchingu *)

fun append([], y) = y
  | append(head::tail, y) = head :: append(tail, y);


append([], [1, 2, 3]);
append([1, 2, 3], []);
append([1, 2, 3], [4, 5]);
append([], []);
