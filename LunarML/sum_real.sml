(* Výpočet součtu prvků v seznamu *)

fun sum([] : real list) = 0.0
  | sum(x::y) = x + sum y;


val y = sum([1.0, 2.0, 3.0]);

print(Real.toString(y));
print "\n";
