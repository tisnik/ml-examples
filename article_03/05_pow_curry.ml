(* Currying, verze s neanonymní funkcí *)

fun pow m n = if m = 0 then 1
              else n * pow(m-1) n;


val square = pow 2;
val cube = pow 3;


square 10;
cube 10;
