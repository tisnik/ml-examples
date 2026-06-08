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
    BasicColor of basic_color * brightness
  | Gray of int
  | RGB of int * int * int
  | Mix of real * color * color
;

infix 0 |>;
fun x |> f = f x;


fun darker (r,g,b) =
  (r div 2, g div 2, b div 2)
;


fun brightness rgb Dark   = darker rgb
  | brightness rgb Bright = rgb
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


fun i2s integer = Int.toString integer;

fun rgb_as_string (r, g, b) =
    "red=" ^ i2s(r) ^ ", green=" ^ i2s(g) ^ ", blue=" ^ i2s(b) ^ "\n"
;

fun real_of_int (i:int) : real = 
    Real.fromInt i; 
 
fun int_of_real (r:real) : int = 
    Real.floor r;

fun mix_component ratio c1 c2 =
  int_of_real ((real_of_int c1) * ratio + (real_of_int c2) * (1.0 - ratio));



fun to_rgb (BasicColor c) : int * int * int =
    let val (color, brightness_level) = c
        val rgb = basic_color_to_rgb color
    in brightness rgb brightness_level
    end
  | to_rgb (Gray(g)) = (g,g,g)
  | to_rgb (RGB(r,g,b)) = (r,g,b)
  | to_rgb (Mix(ratio, c1, c2)) =
  let 
    fun mix_colors ratio color1 color2 =
      let
        val (r1,g1,b1) = to_rgb color1
        val (r2,g2,b2) = to_rgb color2
      in
        (mix_component ratio r1 r2,
         mix_component ratio g1 g2,
         mix_component ratio b1 b2)
      end
  in mix_colors ratio c1 c2
  end
;


fun color_as_string c =
    c |> to_rgb |> rgb_as_string
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

val c7 = Gray 128;
print(color_as_string c7);

val c8 = Gray 255;
print(color_as_string c8);

val c9 = RGB(10, 20, 30);
print(color_as_string c9);

val c10 = Mix(0.5, BasicColor(Red, Bright), RGB(100, 100, 100));
print(color_as_string c10);

val c11 = Mix(0.5, BasicColor(Black, Dark), BasicColor(White, Bright));
print(color_as_string c11);

