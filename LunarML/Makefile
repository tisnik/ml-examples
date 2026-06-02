programs := \
	accumulate.lua \
	add_1.lua \
	add_2.lua \
	add_3.lua \
	add_4.lua \
	add_5.lua \
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

