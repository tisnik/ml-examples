(* Implementace funkce length založená na pattern matchingu *)

fun length([]) = 0
  | length(head::tail) = 1 + length(tail);


val l1 = length([]);
val l2 = length([1]);
val l3 = length([1,2,3,4]);

print(Int.toString(l1));
print "\n";

print(Int.toString(l2));
print "\n";

print(Int.toString(l3));
print "\n";
