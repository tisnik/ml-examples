(* Výpočet součtu prvků v seznamu *)

fun sum([] : real list) = 0.0
  | sum(x::y) = x + sum y;


sum([1.1, 2.2, 3.3]);
