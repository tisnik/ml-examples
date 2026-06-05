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
function _String_append(a, b) {
    if (a.length === 0) { return b; }
    if (b.length === 0) { return a; }
    const c = new Uint8Array(a.length + b.length);
    c.set(a);
    c.set(b, a.length);
    return c;
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
function _wrap(f) {
    const F = function() {
        let result = f.apply(undefined, arguments); // [true, Result] | exists X. [false, MLFunction<Result, X>, X]
        while (!result[0]) {
            const g = result[1];
            if ("_MLTAIL_" in g) {
                result = g._MLTAIL_.apply(undefined, result[2]);
            } else {
                return g.apply(undefined, result[2]);
            }
        }
        return result[1];
    }
    F._MLTAIL_ = f;
    return F;
}
{
 const eq = function(a, b) {
  return a === b;
 };
 const revAppend = function(_1, ys) {
  let tmp22 = _1, tmp23 = ys;
  for (;;) {
   const _1$1 = tmp22, ys1 = tmp23;
   if (_1$1 === null) {
    return ys1;
   } else if (! (_1$1 === null)) {
    const tmp24 = _1$1[0];
    const tmp25 = _1$1[1];
    [tmp22, tmp23] = [tmp25, [tmp24, ys1]];
   } else {
    throw _Match;
   }
  }
 };
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
  const tmp22 = revAppend([content, buffer[0]], null);
  const content$PRIME = _String_concat(tmp22);
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
 const tmp4 = {tag: "SOME", payload: function(a) {
  if (closed[0]) {
   throw new Io_tag({cause: ClosedStream, "function": Uint8Array.of(98, 108, 111, 99, 107), name: Uint8Array.of(60, 110, 117, 108, 108, 87, 114, 62)});
  } else {
   return undefined;
  }
 }};
 const tmp5 = {tag: "SOME", payload: function(a) {
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
 const tmp10 = function(a) {
  closed[0] = true;
  return undefined;
 };
 const tmp11 = {block: tmp4, canOutput: tmp5, chunkSize: 1, close: tmp10, endPos: tmp7, getPos: tmp6, ioDesc: {tag: "NONE"}, name: Uint8Array.of(60, 110, 117, 108, 108, 87, 114, 62), setPos: tmp8, verifyPos: tmp9, writeArr: tmp1, writeArrNB: tmp3, writeVec: tmp, writeVecNB: tmp2};
 const tmp12 = [NO_BUF];
 const stdOut = [{buffer: [null], buffer_mode: tmp12, writer: tmp11}];
 let exists;
 exists = function(eq1) {
  return _wrap(function(a) {
   if (a[1] === null) {
    return [true, false];
   } else if (! (a[1] === null)) {
    const element = a[0];
    const tmp22 = a[1][0];
    const tmp23 = a[1][1];
    const tmp24 = eq1(element, tmp22);
    if (tmp24) {
     return [true, true];
    } else {
     const tmp25 = exists(eq1);
     return [false, tmp25, [[element, tmp23]]];
    }
   } else {
    throw _Match;
   }
  });
 };
 const tmp13 = exists(eq);
 const tmp14 = tmp13([2, _list([1, 2, 3])]);
 {
  let tmp22;
  if (tmp14) {
   tmp22 = Uint8Array.of(116, 114, 117, 101);
  } else if (! tmp14) {
   tmp22 = Uint8Array.of(102, 97, 108, 115, 101);
  } else {
   throw _Match;
  }
  const tmp23 = _String_append(tmp22, Uint8Array.of(10));
  outputAndFlush(stdOut[0], tmp23);
 }
 outputAndFlush(stdOut[0], Uint8Array.of(10));
 const tmp15 = exists(eq);
 const tmp16 = tmp15([3, _list([1, 2, 3])]);
 {
  let tmp22;
  if (tmp16) {
   tmp22 = Uint8Array.of(116, 114, 117, 101);
  } else if (! tmp16) {
   tmp22 = Uint8Array.of(102, 97, 108, 115, 101);
  } else {
   throw _Match;
  }
  const tmp23 = _String_append(tmp22, Uint8Array.of(10));
  outputAndFlush(stdOut[0], tmp23);
 }
 outputAndFlush(stdOut[0], Uint8Array.of(10));
 const tmp17 = exists(eq);
 const tmp18 = _list([1, 2]);
 const tmp19 = _list([3, 4]);
 let tmp20;
 {
  const tmp22 = revAppend(tmp18, null);
  tmp20 = revAppend(tmp22, tmp19);
 }
 const tmp21 = tmp17([2, tmp20]);
 {
  let tmp22;
  if (tmp21) {
   tmp22 = Uint8Array.of(116, 114, 117, 101);
  } else if (! tmp21) {
   tmp22 = Uint8Array.of(102, 97, 108, 115, 101);
  } else {
   throw _Match;
  }
  const tmp23 = _String_append(tmp22, Uint8Array.of(10));
  outputAndFlush(stdOut[0], tmp23);
 }
 outputAndFlush(stdOut[0], Uint8Array.of(10));
}
