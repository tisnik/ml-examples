(* Funkce accumulate s tail rekurzí *)

fun accumulate ([], a) = a
  | accumulate ((_::tail), a) = accumulate(tail, (1 + a));


fun length lst = accumulate(lst, 0);

length [];
length [1,2,3];
