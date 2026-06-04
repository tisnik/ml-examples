(* Výpočet součtu prvků v seznamu *)

fun sum([]) = 0
  | sum(x::y) = x + sum y;


val y = sum([1,2,3]);

print(Int.toString(y));
print "\n";
