(* Spojení řetězců předaných v seznamu *)

fun join([] : string list) = ""
  | join(x::y) = x ^ join y;


join(["foo", " ", "bar", " ", "baz"]);
