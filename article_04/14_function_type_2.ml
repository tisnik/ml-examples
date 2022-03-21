(* Vzájemná rekurze *)

fun is_even(0) = true
  | is_even(n) = is_odd(n-1);

fun is_odd(0) = false
  | is_odd(n) = is_even(n-1);
