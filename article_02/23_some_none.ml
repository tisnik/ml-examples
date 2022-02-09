(* Použití typu option *)

fun divide(x, 0) = NONE
  | divide(x, y) = SOME(x div y);


divide(10, 5);
divide(10, 0);
