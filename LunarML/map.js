"use strict";
function _list(a) {
    let x = null;
    for (let i = a.length - 1; i >= 0; --i) {
        x = [a[i], x];
    }
    return x;
}
function _Match_tag() {}
_Match_tag.prototype.__isMLExn = true;
_Match_tag.prototype.name = "Match";
const _Match = new _Match_tag();
function _Overflow_tag() {}
_Overflow_tag.prototype.__isMLExn = true;
_Overflow_tag.prototype.name = "Overflow";
const _Overflow = new _Overflow_tag();
const MIN_INT54 = -0x20000000000000;
const MAX_INT54 = 0x1fffffffffffff;
function _Int54_add(x, y) {
    const z = x + y;
    if ((MIN_INT54 < z && z <= MAX_INT54) || (z === MIN_INT54 && (x & 1) === (y & 1))) {
        return z;
    } else {
        throw _Overflow;
    }
}
{
 let map;
 map = function(f) {
  return function(a) {
   if (a === null) {
    return null;
   } else if (! (a === null)) {
    const tmp1 = a[0];
    const tmp2 = a[1];
    const tmp3 = f(tmp1);
    const tmp4 = map(f);
    const tmp5 = tmp4(tmp2);
    return [tmp3, tmp5];
   } else {
    throw _Match;
   }
  };
 };
 const tmp = map(function(x) {
  return _Int54_add(x, 1);
 });
 tmp(_list([1, 2, 3]));
}
