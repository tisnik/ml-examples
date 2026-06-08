local error = error
local getmetatable = getmetatable
local setmetatable = setmetatable
local math = math
local math_type = math.type
local string = string
local string_format = string.format
local table = table
local table_concat = table.concat
local _exn_meta = {}
function _exn_meta:__tostring()
  local traceback = self.traceback
  if traceback then
    traceback = "\n" .. traceback
  else
    traceback = ""
  end
  return string_format("%s: %s%s", self.location or "<no location info>", self.tag[1], traceback)
end
local _Match_tag = { "Match" }
local _Match = setmetatable({ tag = _Match_tag }, _exn_meta)
local _Overflow_tag = { "Overflow" }
local _Overflow = setmetatable({ tag = _Overflow_tag }, _exn_meta)
local _Fail_tag = { "Fail" }
local function _raise(x, location)
  local e
  if getmetatable(x) == _exn_meta and location ~= nil then
    local traceback = debug.traceback(nil, 2)
    e = setmetatable({ tag = x.tag, payload = x.payload, location = location, traceback = traceback }, _exn_meta)
  else
    e = x
  end
  error(e, 1)
end
local function _VectorOrArray_fromList(xs)
  local t = {}
  local n = 0
  while xs ~= nil do
    n = n + 1
    t[n] = xs[1]
    xs = xs[2]
  end
  t.n = n
  return t
end
local outputAndFlush, stdOut, Black, Red, Yellow, White, Dark, Bright, rgb_as_string, to_rgb
do
  local Domain = setmetatable({tag = {"Domain"}}, _exn_meta)
  local io = _ENV.io
  local tostring = _ENV.tostring
  local stdout = io.stdout
  local floor = math.floor
  local gsub = string.gsub
  local Io_tag = {"Io"}
  local BlockingNotSupported = setmetatable({tag = {"BlockingNotSupported"}}, _exn_meta)
  local LINE_BUF = "LINE_BUF"
  outputAndFlush = function(_1, content)
    if _1.tag == "LUA_WRITABLE" then
      local writable = _1.payload.writable
      local name = _1.payload.name
      local tmp, tmp1 = writable:write(content)
      if not tmp then
        _raise(setmetatable({tag = Io_tag, payload = {cause = setmetatable({tag = _Fail_tag, payload = tmp1}, _exn_meta), ["function"] = "output", name = name}}, _exn_meta), "text-io.sml:290:43")
      else
        writable:flush()
        return nil
      end
    elseif _1.tag == "PRIM_WRITER" then
      local name = _1.payload.writer.name
      local writeVec = _1.payload.writer.writeVec
      local buffer = _1.payload.buffer
      local tmp
      do
        local tmp1, tmp2 = {content, buffer[1]}, nil
        ::cont::
        local _1_1, ys = tmp1, tmp2
        if _1_1 == nil then
          tmp = ys
        elseif _1_1 ~= nil then
          local tmp3 = _1_1[1]
          local tmp4 = _1_1[2]
          tmp1 = tmp4
          tmp2 = {tmp3, ys}
          goto cont
        else
          _raise(_Match, "list.sml:60:5")
        end
      end
      local tmp1 = _VectorOrArray_fromList(tmp)
      local content_PRIME = table_concat(tmp1)
      if writeVec.tag == "SOME" then
        local writeVec1 = writeVec.payload
        writeVec1({base = content_PRIME, length = #content_PRIME, start = 0})
        buffer[1] = nil
        return nil
      elseif writeVec.tag == "NONE" then
        _raise(setmetatable({tag = Io_tag, payload = {cause = BlockingNotSupported, ["function"] = "output", name = name}}, _exn_meta), "text-io.sml:397:26")
      else
        _raise(_Match, "text-io.sml:395:14")
      end
    else
      _raise(_Match, "text-io.sml:392:9")
    end
  end
  stdOut = {tag = "LUA_WRITABLE", payload = {buffer_mode = {LINE_BUF}, name = "<stdout>", writable = stdout}}
  Black = "Black"
  Red = "Red"
  Yellow = "Yellow"
  White = "White"
  Dark = "Dark"
  Bright = "Bright"
  rgb_as_string = function(r, g, b)
    local tmp = gsub(tostring(r), "-", "~")
    local tmp1 = "red=" .. tmp .. ", green="
    local tmp2 = gsub(tostring(g), "-", "~")
    local tmp3 = tmp1 .. tmp2 .. ", blue="
    local tmp4 = gsub(tostring(b), "-", "~")
    return tmp3 .. tmp4 .. "\n"
  end
  local mix_component = function(ratio, c1)
    return function(c2)
      local tmp = 1.0
      local tmp1 = c1 * tmp
      local tmp2 = tmp1 * ratio
      local tmp3 = 1.0
      local tmp4 = c2 * tmp3
      local tmp5 = tmp2 + tmp4 * (1.0 - ratio)
      local result = floor(tmp5)
      if math_type(result) == "integer" then
        return result
      elseif tmp5 ~= tmp5 then
        _raise(Domain, "real-1.sml:281:26")
      else
        _raise(_Overflow, "real-1.sml:283:26")
      end
    end
  end
  to_rgb = function(a)
    if a.tag == "BasicColor" then
      local c = a.payload
      local color = c[1]
      local brightness_level = c[2]
      local rgb
      if color == "Black" then
        rgb = {0, 0, 0}
      elseif color == "Red" then
        rgb = {255, 0, 0}
      elseif color == "Green" then
        rgb = {0, 255, 0}
      elseif color == "Yellow" then
        rgb = {255, 255, 0}
      elseif color == "Blue" then
        rgb = {0, 0, 255}
      elseif color == "Magenta" then
        rgb = {255, 0, 255}
      elseif color == "Cyan" then
        rgb = {0, 255, 255}
      elseif color == "White" then
        rgb = {255, 255, 255}
      else
        _raise(_Match, "colors_6.sml:40:5")
      end
      if brightness_level == "Dark" then
        local r = rgb[1]
        local g = rgb[2]
        local b = rgb[3]
        local tmp = r // 2
        local tmp1 = g // 2
        return {tmp, tmp1, b // 2}
      elseif brightness_level == "Bright" then
        return rgb
      else
        _raise(_Match, "colors_6.sml:35:5")
      end
    elseif a.tag == "Gray" then
      local g = a.payload
      return {g, g, g}
    elseif a.tag == "RGB" then
      local r = a.payload[1]
      local g = a.payload[2]
      return {r, g, a.payload[3]}
    elseif a.tag == "Mix" then
      local ratio, b1, b2, tmp, tmp1
      do
        ratio = a.payload[1]
        local c1 = a.payload[2]
        local c2 = a.payload[3]
        local exp = to_rgb(c1)
        local r1 = exp[1]
        local g1 = exp[2]
        b1 = exp[3]
        local exp1 = to_rgb(c2)
        local r2 = exp1[1]
        local g2 = exp1[2]
        b2 = exp1[3]
        local tmp2 = mix_component(ratio, r1)
        tmp = tmp2(r2)
        local tmp3 = mix_component(ratio, g1)
        tmp1 = tmp3(g2)
      end
      local tmp2 = mix_component(ratio, b1)
      local tmp3 = tmp2(b2)
      return {tmp, tmp1, tmp3}
    else
      _raise(_Match, "colors_6.sml:68:5")
    end
  end
end
do
  local tmp
  do
    local tmp1 = to_rgb({tag = "BasicColor", payload = {Black, Dark}})
    local r = tmp1[1]
    local g = tmp1[2]
    tmp = rgb_as_string(r, g, tmp1[3])
  end
  outputAndFlush(stdOut, tmp)
  local tmp1
  do
    local tmp2 = to_rgb({tag = "BasicColor", payload = {Black, Bright}})
    local r = tmp2[1]
    local g = tmp2[2]
    tmp1 = rgb_as_string(r, g, tmp2[3])
  end
  outputAndFlush(stdOut, tmp1)
  local tmp2
  do
    local tmp3 = to_rgb({tag = "BasicColor", payload = {Yellow, Dark}})
    local r = tmp3[1]
    local g = tmp3[2]
    tmp2 = rgb_as_string(r, g, tmp3[3])
  end
  outputAndFlush(stdOut, tmp2)
  local tmp3
  do
    local tmp4 = to_rgb({tag = "BasicColor", payload = {Yellow, Bright}})
    local r = tmp4[1]
    local g = tmp4[2]
    tmp3 = rgb_as_string(r, g, tmp4[3])
  end
  outputAndFlush(stdOut, tmp3)
  local tmp4
  do
    local tmp5 = to_rgb({tag = "BasicColor", payload = {White, Dark}})
    local r = tmp5[1]
    local g = tmp5[2]
    tmp4 = rgb_as_string(r, g, tmp5[3])
  end
  outputAndFlush(stdOut, tmp4)
  local tmp5
  do
    local tmp6 = to_rgb({tag = "BasicColor", payload = {White, Bright}})
    local r = tmp6[1]
    local g = tmp6[2]
    tmp5 = rgb_as_string(r, g, tmp6[3])
  end
  outputAndFlush(stdOut, tmp5)
  local tmp6
  do
    local tmp7 = to_rgb({tag = "Gray", payload = 128})
    local r = tmp7[1]
    local g = tmp7[2]
    tmp6 = rgb_as_string(r, g, tmp7[3])
  end
  outputAndFlush(stdOut, tmp6)
  local tmp7
  do
    local tmp8 = to_rgb({tag = "Gray", payload = 255})
    local r = tmp8[1]
    local g = tmp8[2]
    tmp7 = rgb_as_string(r, g, tmp8[3])
  end
  outputAndFlush(stdOut, tmp7)
  local tmp8
  do
    local tmp9 = to_rgb({tag = "RGB", payload = {10, 20, 30}})
    local r = tmp9[1]
    local g = tmp9[2]
    tmp8 = rgb_as_string(r, g, tmp9[3])
  end
  outputAndFlush(stdOut, tmp8)
  local tmp9 = 0.5
  local tmp10 = {tag = "BasicColor", payload = {Red, Bright}}
  local tmp11
  do
    local tmp12 = to_rgb({tag = "Mix", payload = {tmp9, tmp10, {tag = "RGB", payload = {100, 100, 100}}}})
    local r = tmp12[1]
    local g = tmp12[2]
    tmp11 = rgb_as_string(r, g, tmp12[3])
  end
  outputAndFlush(stdOut, tmp11)
end
local tmp = 0.5
local tmp1 = {tag = "BasicColor", payload = {Black, Dark}}
local tmp2
do
  local tmp3 = to_rgb({tag = "Mix", payload = {tmp, tmp1, {tag = "BasicColor", payload = {White, Bright}}}})
  local r = tmp3[1]
  local g = tmp3[2]
  tmp2 = rgb_as_string(r, g, tmp3[3])
end
outputAndFlush(stdOut, tmp2)
