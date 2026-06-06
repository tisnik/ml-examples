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
   const tmp19 = x.toString();
   return _encodeUtf8(tmp19);
  } else {
   const tmp19 = (- x).toString();
   return _encodeUtf8("~" + tmp19);
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
  let tmp19;
  cont: {
   let tmp20 = [content, buffer[0]], tmp21 = null;
   for (;;) {
    const _1$1 = tmp20, ys = tmp21;
    if (_1$1 === null) {
     tmp19 = ys;
     break cont;
    } else if (! (_1$1 === null)) {
     const tmp22 = _1$1[0];
     const tmp23 = _1$1[1];
     [tmp20, tmp21] = [tmp23, [tmp22, ys]];
    } else {
     throw _Match;
    }
   }
  }
  const content$PRIME = _String_concat(tmp19);
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
 const Dark = "Dark";
 const Bright = "Bright";
 const color_as_string = function(a) {
  const c = a;
  const color = c[0];
  const brightness_level = c[1];
  let r, g, b;
  if (color === "Black") {
   [r, g, b] = [0, 0, 0];
  } else if (color === "Red") {
   [r, g, b] = [255, 0, 0];
  } else if (color === "Green") {
   [r, g, b] = [0, 255, 0];
  } else if (color === "Yellow") {
   [r, g, b] = [255, 255, 0];
  } else if (color === "Blue") {
   [r, g, b] = [0, 0, 255];
  } else if (color === "Magenta") {
   [r, g, b] = [255, 0, 255];
  } else if (color === "Cyan") {
   [r, g, b] = [0, 255, 255];
  } else if (color === "White") {
   [r, g, b] = [255, 255, 255];
  } else {
   throw _Match;
  }
  let r1, g1, b1;
  if (brightness_level === "Dark") {
   const tmp24 = 0 + Math.floor(r / 2);
   const tmp25 = 0 + Math.floor(g / 2);
   [r1, g1, b1] = [tmp24, tmp25, 0 + Math.floor(b / 2)];
  } else if (brightness_level === "Bright") {
   [r1, g1, b1] = [r, g, b];
  } else {
   throw _Match;
  }
  const tmp19 = toString(r1);
  const tmp20 = _String_append(_String_append(Uint8Array.of(114, 101, 100, 61), tmp19), Uint8Array.of(44, 32, 103, 114, 101, 101, 110, 61));
  const tmp21 = toString(g1);
  const tmp22 = _String_append(_String_append(tmp20, tmp21), Uint8Array.of(44, 32, 98, 108, 117, 101, 61));
  const tmp23 = toString(b1);
  return _String_append(_String_append(tmp22, tmp23), Uint8Array.of(10));
 };
 const tmp13 = color_as_string([Black, Dark]);
 outputAndFlush(stdOut[0], tmp13);
 const tmp14 = color_as_string([Black, Bright]);
 outputAndFlush(stdOut[0], tmp14);
 const tmp15 = color_as_string([Yellow, Dark]);
 outputAndFlush(stdOut[0], tmp15);
 const tmp16 = color_as_string([Yellow, Bright]);
 outputAndFlush(stdOut[0], tmp16);
 const tmp17 = color_as_string([White, Dark]);
 outputAndFlush(stdOut[0], tmp17);
 const tmp18 = color_as_string([White, Bright]);
 outputAndFlush(stdOut[0], tmp18);
}
