(* Currying funkce se čtyřmi parametry, verze s neanonymní funkcí *)

fun foobar x y z w = x + y + z + w;

val f1 = foobar 1;

val f2 = f1 2;

val f3 = f2 3;

val f4 = f3 4;
