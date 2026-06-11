exception DivideByZero of string;

fun divide x 0 = raise DivideByZero ("divide " ^ Int.toString(x) ^ " by zero")
  | divide x y = x div y;


val x = divide 10 5;
print(Int.toString(x));
print "\n";

val y = divide 10 0;
print(Int.toString(y));
print "\n";

