(* Vrácení prvního prvku ze seznamu *)

fun car([]) = raise Empty
  | car(x::y) = x;


car([]);
car([1]);
car([1,2]);
car([1,2,3]);
car(["foo", "bar"]);
