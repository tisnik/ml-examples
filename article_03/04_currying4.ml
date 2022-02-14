(* Currying, verze s neanonymní funkcí *)

fun adder a b = a + b;


val inc = adder 1;
val inc2 = adder 2;

inc 10;
inc2 10;
