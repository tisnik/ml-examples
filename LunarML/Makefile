programs := \
	accumulate.lua \
	add_1.lua \
	add_2.lua \
	add_3.lua \
	add_4.lua \
	add_5.lua \
	anonymous_add_1.lua \
	anonymous_add_2.lua \
	anonymous_inc_1.lua \
	anonymous_inc_2.lua \
	colors_1.lua \
	colors_2.lua \
	colors_3.lua \
	colors_4.lua \
	colors_5.lua \
	colors_6.lua \
	exists.lua \
	fibonacci_func_call_1.lua \
	fibonacci_func_call_2.lua \
	fibonacci_naive.lua \
	fibonacci_pattern_matching.lua \
	hello.lua \
	length.lua \
	mutual_recursion.lua \
	pipe.lua \
	some_none.lua \
	some_none_2.lua \
	string_join.lua \
	sum_int.lua \
	sum_real.lua \
	tuples.lua \
	accumulate.js \
	add_1.js \
	add_2.js \
	add_3.js \
	add_4.js \
	add_5.js \
	anonymous_add_1.js \
	anonymous_add_2.js \
	anonymous_inc_1.js \
	anonymous_inc_2.js \
	colors_1.js \
	colors_2.js \
	colors_3.js \
	colors_4.js \
	colors_5.js \
	colors_6.js \
	exists.js \
	fibonacci_func_call_1.js \
	fibonacci_func_call_2.js \
	fibonacci_naive.js \
	fibonacci_pattern_matching.js \
	hello.js \
	length.js \
	mutual_recursion.js \
	pipe.js \
	some_none.js \
	some_none_2.js \
	string_join.js \
	sum_int.js \
	sum_real.js \
	tuples.js


all: $(programs)

clean:
	rm -f *.lua

.PHONY: all clean

%.lua: %.sml
	docker run -v work1:/work -w /work ghcr.io/minoki/lunarml:latest lunarml compile $<

%.js: %.sml
	docker run -v work1:/work -w /work ghcr.io/minoki/lunarml:latest lunarml compile --webjs $<

