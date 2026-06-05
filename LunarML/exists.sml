(* Operátor exists *)

fun exists(element, []) = false
  | exists(element, head::tail) = if element = head then true
                                  else exists(element, tail);


infix 1 exists;


fun bool_to_string true  = "true"
  | bool_to_string false = "false";


fun print_bool b = print (bool_to_string b ^ "\n");


print_bool(1+1 exists [1,2,3]);
print "\n";

print_bool(3*1 exists [1,2,3]);
print "\n";

print_bool(1+1 exists [1,2] @ [3,4]);
print "\n";

