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


datatype brightness =
    Dark
  | Bright
;


datatype color =
    BasicColor of basic_color * brightness;


fun darker (r,g,b) =
  (r div 2, g div 2, b div 2)
;


fun brightness (rgb, Dark)   = darker rgb
  | brightness (rgb, Bright) = rgb
;


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

fun rgb_as_string (r, g, b) =
    "red=" ^ i2s(r) ^ ", green=" ^ i2s(g) ^ ", blue=" ^ i2s(b) ^ "\n";

fun color_as_string (BasicColor c) = 
    let val (color, brightness_level) = c
        val rgb = basic_color_to_rgb color
        val (r, g, b) = brightness(rgb, brightness_level)
    in rgb_as_string(r, g, b)
    end
;


val c1 = BasicColor(Black, Dark);
print(color_as_string c1);

val c2 = BasicColor(Black, Bright);
print(color_as_string c2);

val c3 = BasicColor(Yellow, Dark);
print(color_as_string c3);

val c4 = BasicColor(Yellow, Bright);
print(color_as_string c4);

val c5 = BasicColor(White, Dark);
print(color_as_string c5);

val c6 = BasicColor(White, Bright);
print(color_as_string c6);

