(* Currying, verze s neanonymní funkcí *)

fun pow m n = if m = 0 then 1
              else n * pow(m-1) n;


val square = pow 2;
val cube = pow 3;

val x = square 10;
val y = cube 10;

print(Int.toString (x));
print "\n";

print(Int.toString (y));
print "\n";

