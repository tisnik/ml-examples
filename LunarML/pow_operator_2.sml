(* Nový operátor pow *)

fun pow(m, 0) = 1
  | pow(m, n) = m * pow(m, n-1);


infix 8 pow;

val result = 2 pow 3 pow 2;
print(Int.toString (result));
print "\n";

