"use strict";
function _Match_tag() {}
_Match_tag.prototype.__isMLExn = true;
_Match_tag.prototype.name = "Match";
const _Match = new _Match_tag();
function _Div_tag() {}
_Div_tag.prototype.__isMLExn = true;
_Div_tag.prototype.name = "Div";
const _Div = new _Div_tag();
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
function _Int54_sub(x, y) {
    const z = x - y;
    if ((MIN_INT54 < z && z <= MAX_INT54) || (z === MIN_INT54 && (x & 1) === (y & 1))) {
        return z;
    } else {
        throw _Overflow;
    }
}
function _Int54_div(x, y) {
    if (y === 0) {
        throw _Div;
    } else if (x === MIN_INT54 && y === -1) {
        throw _Overflow;
    } else {
        return 0 + Math.floor(x / y);
    }
}
function _encodeUtf8(s) {
    const encoder = new TextEncoder();
    return encoder.encode(s);
}
function _String_concat(xs) {
    let n = 0;
    let xs0 = xs;
    while (xs0 !== null) {
        const s = xs0[0];
        n += s.length;
        xs0 = xs0[1];
    }
    const a = new Uint8Array(n);
    let m = 0;
    while (xs !== null) {
        const s = xs[0];
        a.set(s, m);
        m += s.length;
        xs = xs[1];
    }
    return a;
}
{
 const Io_tag = function(payload) {
  this.payload = payload;
 };
 Io_tag.prototype.__isMLExn = true;
 Io_tag.prototype.name = "Io";
 const BlockingNotSupported_tag = function() {
 };
 BlockingNotSupported_tag.prototype.__isMLExn = true;
 BlockingNotSupported_tag.prototype.name = "BlockingNotSupported";
 const BlockingNotSupported = new BlockingNotSupported_tag();
 const ClosedStream_tag = function() {
 };
 ClosedStream_tag.prototype.__isMLExn = true;
 ClosedStream_tag.prototype.name = "ClosedStream";
 const ClosedStream = new ClosedStream_tag();
 const NO_BUF = "NO_BUF";
 const outputAndFlush = function(_1, content) {
  const name = _1.writer.name;
  const writeVec = _1.writer.writeVec;
  const buffer = _1.buffer;
  let tmp15;
  cont: {
   let tmp16 = [content, buffer[0]], tmp17 = null;
   for (;;) {
    const _1$1 = tmp16, ys = tmp17;
    if (_1$1 === null) {
     tmp15 = ys;
     break cont;
    } else if (! (_1$1 === null)) {
     const tmp18 = _1$1[0];
     const tmp19 = _1$1[1];
     [tmp16, tmp17] = [tmp19, [tmp18, ys]];
    } else {
     throw _Match;
    }
   }
  }
  const content$PRIME = _String_concat(tmp15);
  if (writeVec.tag === "SOME") {
   const writeVec1 = writeVec.payload;
   writeVec1({base: content$PRIME, length: content$PRIME.length, start: 0});
   buffer[0] = null;
   return undefined;
  } else if (writeVec.tag === "NONE") {
   throw new Io_tag({cause: BlockingNotSupported, "function": Uint8Array.of(111, 117, 116, 112, 117, 116), name: name});
  } else {
   throw _Match;
  }
 };
 const closed = [false];
 const tmp = {tag: "SOME", payload: function(slice) {
  if (closed[0]) {
   throw new Io_tag({cause: ClosedStream, "function": Uint8Array.of(119, 114, 105, 116, 101, 86, 101, 99), name: Uint8Array.of(60, 110, 117, 108, 108, 87, 114, 62)});
  } else {
   return slice.length;
  }
 }};
 const tmp1 = {tag: "SOME", payload: function(slice) {
  if (closed[0]) {
   throw new Io_tag({cause: ClosedStream, "function": Uint8Array.of(119, 114, 105, 116, 101, 65, 114, 114), name: Uint8Array.of(60, 110, 117, 108, 108, 87, 114, 62)});
  } else {
   return slice.length;
  }
 }};
 const tmp2 = {tag: "SOME", payload: function(slice) {
  if (closed[0]) {
   throw new Io_tag({cause: ClosedStream, "function": Uint8Array.of(119, 114, 105, 116, 101, 86, 101, 99, 78, 66), name: Uint8Array.of(60, 110, 117, 108, 108, 87, 114, 62)});
  } else {
   return {tag: "SOME", payload: slice.length};
  }
 }};
 const tmp3 = {tag: "SOME", payload: function(slice) {
  if (closed[0]) {
   throw new Io_tag({cause: ClosedStream, "function": Uint8Array.of(119, 114, 105, 116, 101, 65, 114, 114, 78, 66), name: Uint8Array.of(60, 110, 117, 108, 108, 87, 114, 62)});
  } else {
   return {tag: "SOME", payload: slice.length};
  }
 }};
 const tmp4 = {tag: "SOME", payload: function(a1) {
  if (closed[0]) {
   throw new Io_tag({cause: ClosedStream, "function": Uint8Array.of(98, 108, 111, 99, 107), name: Uint8Array.of(60, 110, 117, 108, 108, 87, 114, 62)});
  } else {
   return undefined;
  }
 }};
 const tmp5 = {tag: "SOME", payload: function(a1) {
  if (closed[0]) {
   throw new Io_tag({cause: ClosedStream, "function": Uint8Array.of(99, 97, 110, 79, 117, 116, 112, 117, 116), name: Uint8Array.of(60, 110, 117, 108, 108, 87, 114, 62)});
  } else {
   return true;
  }
 }};
 const tmp6 = {tag: "NONE"};
 const tmp7 = {tag: "NONE"};
 const tmp8 = {tag: "NONE"};
 const tmp9 = {tag: "NONE"};
 const tmp10 = function(a1) {
  closed[0] = true;
  return undefined;
 };
 const tmp11 = {block: tmp4, canOutput: tmp5, chunkSize: 1, close: tmp10, endPos: tmp7, getPos: tmp6, ioDesc: {tag: "NONE"}, name: Uint8Array.of(60, 110, 117, 108, 108, 87, 114, 62), setPos: tmp8, verifyPos: tmp9, writeArr: tmp1, writeArrNB: tmp3, writeVec: tmp, writeVecNB: tmp2};
 const tmp12 = [NO_BUF];
 const stdOut = [{buffer: [null], buffer_mode: tmp12, writer: tmp11}];
 let fib;
 fib = function(n) {
  if (n === 0) {
   return 0;
  } else if (n === 1) {
   return 1;
  } else {
   const tmp15 = fib(_Int54_sub(n, 1));
   const tmp16 = fib(_Int54_sub(n, 2));
   return _Int54_add(tmp15, tmp16);
  }
 };
 const to_string = function(a1) {
  if (a1.tag === "NONE") {
   return Uint8Array.of(78, 79, 78, 69);
  } else if (a1.tag === "SOME") {
   const n = a1.payload;
   if (n >= 0) {
    const tmp15 = n.toString();
    return _encodeUtf8(tmp15);
   } else {
    const tmp15 = (- n).toString();
    return _encodeUtf8("~" + tmp15);
   }
  } else {
   throw _Match;
  }
 };
 const a = fib(0);
 const b = fib(1);
 const c = fib(2);
 let x;
 if (b === 0) {
  x = {tag: "NONE"};
 } else {
  x = {tag: "SOME", payload: _Int54_div(c, b)};
 }
 let y;
 if (a === 0) {
  y = {tag: "NONE"};
 } else {
  y = {tag: "SOME", payload: _Int54_div(a, a)};
 }
 const tmp13 = to_string(x);
 outputAndFlush(stdOut[0], tmp13);
 outputAndFlush(stdOut[0], Uint8Array.of(10));
 const tmp14 = to_string(y);
 outputAndFlush(stdOut[0], tmp14);
 outputAndFlush(stdOut[0], Uint8Array.of(10));
}
