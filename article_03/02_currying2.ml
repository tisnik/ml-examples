(* Currying, verze s anonymní funkcí *)

val a = 10;

val f = fn b => a + b;

f(20);
