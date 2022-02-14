(* Nový operátor pow *)

fun pow(m, 0) = 1
  | pow(m, n) = m * pow(m, n-1);


infix 8 pow;

2 pow 3;
2 pow 3 + 1;
