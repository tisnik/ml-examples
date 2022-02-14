(* Zachycení výjimky *)

exception EmptyList;

fun car([]) = raise EmptyList
 |  car(a::b) = a;


fun check(l) = car(l) handle EmptyList =>
   (print("error!"); ~1);

check([]);
check([1]);
check([1,2]);
