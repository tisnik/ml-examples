(* Použití typu option *)

fun divide(x, 0) = NONE
  | divide(x, y) = SOME(x div y);


fun to_string NONE = "NONE"
  | to_string (SOME n) = Int.toString n


val x = divide(10, 5);
val y = divide(10, 0);

print(to_string(x));
print "\n";

print(to_string(y));
print "\n";

