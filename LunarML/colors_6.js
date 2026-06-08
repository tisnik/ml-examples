"use strict";
function _Match_tag() {}
_Match_tag.prototype.__isMLExn = true;
_Match_tag.prototype.name = "Match";
const _Match = new _Match_tag();
function _Overflow_tag() {}
_Overflow_tag.prototype.__isMLExn = true;
_Overflow_tag.prototype.name = "Overflow";
const _Overflow = new _Overflow_tag();
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
 const Domain_tag = function() {
 };
 Domain_tag.prototype.__isMLExn = true;
 Domain_tag.prototype.name = "Domain";
 const Domain = new Domain_tag();
 const isNaN = globalThis.Number.isNaN;
 const floor = globalThis.Math.floor;
 const toString = function(x) {
  if (x >= 0) {
   const tmp28 = x.toString();
   return _encodeUtf8(tmp28);
  } else {
   const tmp28 = (- x).toString();
   return _encodeUtf8("~" + tmp28);
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
  let tmp28;
  cont: {
   let tmp29 = [content, buffer[0]], tmp30 = null;
   for (;;) {
    const _1$1 = tmp29, ys = tmp30;
    if (_1$1 === null) {
     tmp28 = ys;
     break cont;
    } else if (! (_1$1 === null)) {
     const tmp31 = _1$1[0];
     const tmp32 = _1$1[1];
     [tmp29, tmp30] = [tmp32, [tmp31, ys]];
    } else {
     throw _Match;
    }
   }
  }
  const content$PRIME = _String_concat(tmp28);
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
 const Red = "Red";
 const Yellow = "Yellow";
 const White = "White";
 const Dark = "Dark";
 const Bright = "Bright";
 const rgb_as_string = function(r, g, b) {
  const tmp28 = toString(r);
  const tmp29 = _String_append(_String_append(Uint8Array.of(114, 101, 100, 61), tmp28), Uint8Array.of(44, 32, 103, 114, 101, 101, 110, 61));
  const tmp30 = toString(g);
  const tmp31 = _String_append(_String_append(tmp29, tmp30), Uint8Array.of(44, 32, 98, 108, 117, 101, 61));
  const tmp32 = toString(b);
  return _String_append(_String_append(tmp31, tmp32), Uint8Array.of(10));
 };
 const mix_component = function(ratio, c1) {
  return function(c2) {
   const tmp28 = c1 * ratio + c2 * (1.0 - ratio);
   const tmp29 = floor(tmp28);
   const tmp30 = isNaN(tmp29);
   if (tmp30) {
    throw Domain;
   } else if (tmp29 < - 2.147483648e9 || tmp29 > 2.147483647e9) {
    throw _Overflow;
   } else {
    const tmp31 = tmp29 | 0;
    return tmp31;
   }
  };
 };
 let to_rgb;
 to_rgb = function(a) {
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
    const tmp28 = 0 + Math.floor(r / 2);
    const tmp29 = 0 + Math.floor(g / 2);
    return [tmp28, tmp29, 0 + Math.floor(b / 2)];
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
  } else if (a.tag === "Mix") {
   const ratio = a.payload[0];
   const c1 = a.payload[1];
   const c2 = a.payload[2];
   const exp = to_rgb(c1);
   const r1 = exp[0];
   const g1 = exp[1];
   const b1 = exp[2];
   const exp1 = to_rgb(c2);
   const r2 = exp1[0];
   const g2 = exp1[1];
   const b2 = exp1[2];
   const tmp28 = mix_component(ratio, r1);
   const tmp29 = tmp28(r2);
   const tmp30 = mix_component(ratio, g1);
   const tmp31 = tmp30(g2);
   const tmp32 = mix_component(ratio, b1);
   const tmp33 = tmp32(b2);
   return [tmp29, tmp31, tmp33];
  } else {
   throw _Match;
  }
 };
 let tmp13;
 {
  const tmp28 = to_rgb({tag: "BasicColor", payload: [Black, Dark]});
  const r = tmp28[0];
  const g = tmp28[1];
  tmp13 = rgb_as_string(r, g, tmp28[2]);
 }
 outputAndFlush(stdOut[0], tmp13);
 let tmp14;
 {
  const tmp28 = to_rgb({tag: "BasicColor", payload: [Black, Bright]});
  const r = tmp28[0];
  const g = tmp28[1];
  tmp14 = rgb_as_string(r, g, tmp28[2]);
 }
 outputAndFlush(stdOut[0], tmp14);
 let tmp15;
 {
  const tmp28 = to_rgb({tag: "BasicColor", payload: [Yellow, Dark]});
  const r = tmp28[0];
  const g = tmp28[1];
  tmp15 = rgb_as_string(r, g, tmp28[2]);
 }
 outputAndFlush(stdOut[0], tmp15);
 let tmp16;
 {
  const tmp28 = to_rgb({tag: "BasicColor", payload: [Yellow, Bright]});
  const r = tmp28[0];
  const g = tmp28[1];
  tmp16 = rgb_as_string(r, g, tmp28[2]);
 }
 outputAndFlush(stdOut[0], tmp16);
 let tmp17;
 {
  const tmp28 = to_rgb({tag: "BasicColor", payload: [White, Dark]});
  const r = tmp28[0];
  const g = tmp28[1];
  tmp17 = rgb_as_string(r, g, tmp28[2]);
 }
 outputAndFlush(stdOut[0], tmp17);
 let tmp18;
 {
  const tmp28 = to_rgb({tag: "BasicColor", payload: [White, Bright]});
  const r = tmp28[0];
  const g = tmp28[1];
  tmp18 = rgb_as_string(r, g, tmp28[2]);
 }
 outputAndFlush(stdOut[0], tmp18);
 let tmp19;
 {
  const tmp28 = to_rgb({tag: "Gray", payload: 128});
  const r = tmp28[0];
  const g = tmp28[1];
  tmp19 = rgb_as_string(r, g, tmp28[2]);
 }
 outputAndFlush(stdOut[0], tmp19);
 let tmp20;
 {
  const tmp28 = to_rgb({tag: "Gray", payload: 255});
  const r = tmp28[0];
  const g = tmp28[1];
  tmp20 = rgb_as_string(r, g, tmp28[2]);
 }
 outputAndFlush(stdOut[0], tmp20);
 let tmp21;
 {
  const tmp28 = to_rgb({tag: "RGB", payload: [10, 20, 30]});
  const r = tmp28[0];
  const g = tmp28[1];
  tmp21 = rgb_as_string(r, g, tmp28[2]);
 }
 outputAndFlush(stdOut[0], tmp21);
 const tmp22 = 0.5;
 const tmp23 = {tag: "BasicColor", payload: [Red, Bright]};
 let tmp24;
 {
  const tmp28 = to_rgb({tag: "Mix", payload: [tmp22, tmp23, {tag: "RGB", payload: [100, 100, 100]}]});
  const r = tmp28[0];
  const g = tmp28[1];
  tmp24 = rgb_as_string(r, g, tmp28[2]);
 }
 outputAndFlush(stdOut[0], tmp24);
 const tmp25 = 0.5;
 const tmp26 = {tag: "BasicColor", payload: [Black, Dark]};
 let tmp27;
 {
  const tmp28 = to_rgb({tag: "Mix", payload: [tmp25, tmp26, {tag: "BasicColor", payload: [White, Bright]}]});
  const r = tmp28[0];
  const g = tmp28[1];
  tmp27 = rgb_as_string(r, g, tmp28[2]);
 }
 outputAndFlush(stdOut[0], tmp27);
}
