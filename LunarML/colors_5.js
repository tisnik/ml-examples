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
   const tmp22 = x.toString();
   return _encodeUtf8(tmp22);
  } else {
   const tmp22 = (- x).toString();
   return _encodeUtf8("~" + tmp22);
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
  let tmp22;
  cont: {
   let tmp23 = [content, buffer[0]], tmp24 = null;
   for (;;) {
    const _1$1 = tmp23, ys = tmp24;
    if (_1$1 === null) {
     tmp22 = ys;
     break cont;
    } else if (! (_1$1 === null)) {
     const tmp25 = _1$1[0];
     const tmp26 = _1$1[1];
     [tmp23, tmp24] = [tmp26, [tmp25, ys]];
    } else {
     throw _Match;
    }
   }
  }
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
 const Black = "Black";
 const Yellow = "Yellow";
 const White = "White";
 const Dark = "Dark";
 const Bright = "Bright";
 const rgb_as_string = function(r, g, b) {
  const tmp22 = toString(r);
  const tmp23 = _String_append(_String_append(Uint8Array.of(114, 101, 100, 61), tmp22), Uint8Array.of(44, 32, 103, 114, 101, 101, 110, 61));
  const tmp24 = toString(g);
  const tmp25 = _String_append(_String_append(tmp23, tmp24), Uint8Array.of(44, 32, 98, 108, 117, 101, 61));
  const tmp26 = toString(b);
  return _String_append(_String_append(tmp25, tmp26), Uint8Array.of(10));
 };
 const to_rgb = function(a) {
  if (a.tag === "BasicColor") {
   const c = a.payload;
   const color = c[0];
   const brightness_level = c[1];
   let rgb;
   if (color === "Black") {
    rgb = [0, 0, 0];
   } else if (color === "Red") {
    rgb = [255, 0, 0];
   } else if (color === "Green") {
    rgb = [0, 255, 0];
   } else if (color === "Yellow") {
    rgb = [255, 255, 0];
   } else if (color === "Blue") {
    rgb = [0, 0, 255];
   } else if (color === "Magenta") {
    rgb = [255, 0, 255];
   } else if (color === "Cyan") {
    rgb = [0, 255, 255];
   } else if (color === "White") {
    rgb = [255, 255, 255];
   } else {
    throw _Match;
   }
   if (brightness_level === "Dark") {
    const r = rgb[0];
    const g = rgb[1];
    const b = rgb[2];
    const tmp22 = 0 + Math.floor(r / 2);
    const tmp23 = 0 + Math.floor(g / 2);
    return [tmp22, tmp23, 0 + Math.floor(b / 2)];
   } else if (brightness_level === "Bright") {
    return rgb;
   } else {
    throw _Match;
   }
  } else if (a.tag === "Gray") {
   const g = a.payload;
   return [g, g, g];
  } else if (a.tag === "RGB") {
   const r = a.payload[0];
   const g = a.payload[1];
   return [r, g, a.payload[2]];
  } else {
   throw _Match;
  }
 };
 let tmp13;
 {
  const tmp22 = to_rgb({tag: "BasicColor", payload: [Black, Dark]});
  const r = tmp22[0];
  const g = tmp22[1];
  tmp13 = rgb_as_string(r, g, tmp22[2]);
 }
 outputAndFlush(stdOut[0], tmp13);
 let tmp14;
 {
  const tmp22 = to_rgb({tag: "BasicColor", payload: [Black, Bright]});
  const r = tmp22[0];
  const g = tmp22[1];
  tmp14 = rgb_as_string(r, g, tmp22[2]);
 }
 outputAndFlush(stdOut[0], tmp14);
 let tmp15;
 {
  const tmp22 = to_rgb({tag: "BasicColor", payload: [Yellow, Dark]});
  const r = tmp22[0];
  const g = tmp22[1];
  tmp15 = rgb_as_string(r, g, tmp22[2]);
 }
 outputAndFlush(stdOut[0], tmp15);
 let tmp16;
 {
  const tmp22 = to_rgb({tag: "BasicColor", payload: [Yellow, Bright]});
  const r = tmp22[0];
  const g = tmp22[1];
  tmp16 = rgb_as_string(r, g, tmp22[2]);
 }
 outputAndFlush(stdOut[0], tmp16);
 let tmp17;
 {
  const tmp22 = to_rgb({tag: "BasicColor", payload: [White, Dark]});
  const r = tmp22[0];
  const g = tmp22[1];
  tmp17 = rgb_as_string(r, g, tmp22[2]);
 }
 outputAndFlush(stdOut[0], tmp17);
 let tmp18;
 {
  const tmp22 = to_rgb({tag: "BasicColor", payload: [White, Bright]});
  const r = tmp22[0];
  const g = tmp22[1];
  tmp18 = rgb_as_string(r, g, tmp22[2]);
 }
 outputAndFlush(stdOut[0], tmp18);
 let tmp19;
 {
  const tmp22 = to_rgb({tag: "Gray", payload: 128});
  const r = tmp22[0];
  const g = tmp22[1];
  tmp19 = rgb_as_string(r, g, tmp22[2]);
 }
 outputAndFlush(stdOut[0], tmp19);
 let tmp20;
 {
  const tmp22 = to_rgb({tag: "Gray", payload: 255});
  const r = tmp22[0];
  const g = tmp22[1];
  tmp20 = rgb_as_string(r, g, tmp22[2]);
 }
 outputAndFlush(stdOut[0], tmp20);
 let tmp21;
 {
  const tmp22 = to_rgb({tag: "RGB", payload: [10, 20, 30]});
  const r = tmp22[0];
  const g = tmp22[1];
  tmp21 = rgb_as_string(r, g, tmp22[2]);
 }
 outputAndFlush(stdOut[0], tmp21);
}
