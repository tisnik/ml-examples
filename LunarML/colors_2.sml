datatype basic_color =
    Black
  | Red
  | Green
  | Yellow
  | Blue
  | Magenta
  | Cyan
  | White
;


datatype color =
    BasicColor of basic_color;


fun basic_color_to_rgb Black   = (0,   0,   0)
  | basic_color_to_rgb Red     = (255, 0,   0)
  | basic_color_to_rgb Green   = (0,   255, 0)
  | basic_color_to_rgb Yellow  = (255, 255, 0)
  | basic_color_to_rgb Blue    = (0,   0,   255)
  | basic_color_to_rgb Magenta = (255, 0,   255)
  | basic_color_to_rgb Cyan    = (0,   255, 255)
  | basic_color_to_rgb White   = (255, 255, 255)
  ;


fun i2s integer = Int.toString(integer);


fun color_as_string (BasicColor c) = 
    let val (r, g, b) = basic_color_to_rgb c
    in "red=" ^ i2s(r) ^ ", green=" ^ i2s(g) ^ ", blue=" ^ i2s(b) ^ "\n"
    end
;


val c1 = BasicColor(Black);
print(color_as_string c1);

val c2 = BasicColor(Yellow);
print(color_as_string c2);

val c3 = BasicColor(White);
print(color_as_string c3);

