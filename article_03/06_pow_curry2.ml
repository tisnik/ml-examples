(* Currying, verze s neanonymní funkcí *)

fun pow 0 n = 1
  | pow m n = n * pow(m-1) n;


val square = pow 2;
val cube = pow 3;


square 10;
cube 10;
