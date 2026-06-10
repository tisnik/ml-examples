(* Použití typu option *)

fun fib 0 = 0
  | fib 1 = 1
  | fib n = fib (n - 1) + fib (n - 2);



fun divide(x, 0) = NONE
  | divide(x, y) = SOME(x div y);


fun to_string NONE = "NONE"
  | to_string (SOME n) = Int.toString n;


let
    val a = fib 0
    val b = fib 1
    val c = fib 2
    val x = divide(c, b)
    val y = divide(a, a)
in
    print(to_string(x));
    print "\n";

    print(to_string(y));
    print "\n";
end;

