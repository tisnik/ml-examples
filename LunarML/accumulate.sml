(* Funkce accumulate s tail rekurzí *)

fun accumulate ([], a) = a
  | accumulate ((_::tail), a) = accumulate(tail, (1 + a));


(* Funkce pro výpočet délky seznamu *)
fun length lst = accumulate(lst, 0);

print(Int.toString(length []));
print "\n";

print(Int.toString(length [1, 2, 3]));
print "\n";

(* Je možné vypočítat délku seznamu libovolného typu *)
print(Int.toString(length ["foo", "bar", "baz"]));
print "\n";
