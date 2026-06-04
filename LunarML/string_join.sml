(* Spojení řetězců předaných v seznamu *)

fun join([] : string list) = ""
  | join(x::y) = x ^ join y;


val x = join(["foo", " ", "bar", " ", "baz"]);

print x;
print "\n";
