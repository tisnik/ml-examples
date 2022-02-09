(* Naivní implementace funkce append *)

fun append(x, y) = if null(x) then y
                   else hd(x) :: append(tl(x), y);


append([], [1, 2, 3]);
append([1, 2, 3], []);
append([1, 2, 3], [4, 5]);
append([], []);
