(* Nový operátor pow *)

fun pow(m, 0) = 1
  | pow(m, n) = m * pow(m, n-1);


infixr 8 pow;

2 pow 3 pow 2;
