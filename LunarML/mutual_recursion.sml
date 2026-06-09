(* Vzájemná rekurze *)

fun is_even(0) = true
  | is_even(n) = is_odd(n-1)
and is_odd(0) = false
  | is_odd(n) = is_even(n-1);


fun bool_to_string true  = "true"
  | bool_to_string false = "false";


fun print_bool b = print (bool_to_string b ^ "\n");

print_bool(is_even(42));
print "\n";

print_bool(is_even(43));
print "\n";
