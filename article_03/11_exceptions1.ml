(* Vyhození výjimky *)

exception EmptyList;

fun car([]) = raise EmptyList
 |  car(a::b) = a;


car([]);
car([1]);
car([1,2]);
