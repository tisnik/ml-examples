(* Nový operátor pow *)

fun pow(m, 0) = 1
  | pow(m, n) = m * pow(m, n-1);


infix 8 pow;

val point = 1 pow 1;
val square = 2 pow 2;
val cube = 3 pow 3;

print(Int.toString (point));
print "\n";

print(Int.toString (square));
print "\n";

print(Int.toString (cube));
print "\n";

