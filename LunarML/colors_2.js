"use strict";
function _Match_tag() {}
_Match_tag.prototype.__isMLExn = true;
_Match_tag.prototype.name = "Match";
const _Match = new _Match_tag();
function _encodeUtf8(s) {
    const encoder = new TextEncoder();
    return encoder.encode(s);
}
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
{
 const toString = function(x) {
  if (x >= 0) {
   const tmp16 = x.toString();
   return _encodeUtf8(tmp16);
  } else {
   const tmp16 = (- x).toString();
   return _encodeUtf8("~" + tmp16);
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
  let tmp16;
  cont: {
   let tmp17 = [content, buffer[0]], tmp18 = null;
   for (;;) {
    const _1$1 = tmp17, ys = tmp18;
    if (_1$1 === null) {
     tmp16 = ys;
     break cont;
    } else if (! (_1$1 === null)) {
     const tmp19 = _1$1[0];
     const tmp20 = _1$1[1];
     [tmp17, tmp18] = [tmp20, [tmp19, ys]];
    } else {
     throw _Match;
    }
   }
  }
  const content$PRIME = _String_concat(tmp16);
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
 const Black = "Black";
 const Yellow = "Yellow";
 const White = "White";
 const color_as_string = function(a) {
  const c = a;
  let r, g, b;
  if (c === "Black") {
   [r, g, b] = [0, 0, 0];
  } else if (c === "Red") {
   [r, g, b] = [255, 0, 0];
  } else if (c === "Green") {
   [r, g, b] = [0, 255, 0];
  } else if (c === "Yellow") {
   [r, g, b] = [255, 255, 0];
  } else if (c === "Blue") {
   [r, g, b] = [0, 0, 255];
  } else if (c === "Magenta") {
   [r, g, b] = [255, 0, 255];
  } else if (c === "Cyan") {
   [r, g, b] = [0, 255, 255];
  } else if (c === "White") {
   [r, g, b] = [255, 255, 255];
  } else {
   throw _Match;
  }
  const tmp16 = toString(r);
  const tmp17 = _String_append(_String_append(Uint8Array.of(114, 101, 100, 61), tmp16), Uint8Array.of(44, 32, 103, 114, 101, 101, 110, 61));
  const tmp18 = toString(g);
  const tmp19 = _String_append(_String_append(tmp17, tmp18), Uint8Array.of(44, 32, 98, 108, 117, 101, 61));
  const tmp20 = toString(b);
  return _String_append(_String_append(tmp19, tmp20), Uint8Array.of(10));
 };
 const tmp13 = color_as_string(Black);
 outputAndFlush(stdOut[0], tmp13);
 const tmp14 = color_as_string(Yellow);
 outputAndFlush(stdOut[0], tmp14);
 const tmp15 = color_as_string(White);
 outputAndFlush(stdOut[0], tmp15);
}
