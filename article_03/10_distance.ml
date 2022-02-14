(* Výpočet vzdálenosti dvou bodů *)

fun distance(x, y) =
let
    val squaredx = x*x
    val squaredy = y*y
in
    Math.sqrt(squaredx + squaredy)
end;


distance(1.0, 1.0);
