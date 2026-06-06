local error = error
local getmetatable = getmetatable
local setmetatable = setmetatable
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
local outputAndFlush, stdOut, White, color_as_string
do
  local io = _ENV.io
  local tostring = _ENV.tostring
  local stdout = io.stdout
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
  local Black = "Black"
  local Yellow = "Yellow"
  White = "White"
  color_as_string = function(a)
    local c = a
    local r, g, b
    if c == "Black" then
      b = 0
      g = 0
      r = 0
    elseif c == "Red" then
      b = 0
      g = 0
      r = 255
    elseif c == "Green" then
      b = 0
      g = 255
      r = 0
    elseif c == "Yellow" then
      b = 0
      g = 255
      r = 255
    elseif c == "Blue" then
      b = 255
      g = 0
      r = 0
    elseif c == "Magenta" then
      b = 255
      g = 0
      r = 255
    elseif c == "Cyan" then
      b = 255
      g = 255
      r = 0
    elseif c == "White" then
      b = 255
      g = 255
      r = 255
    else
      _raise(_Match, "colors_2.sml:17:5")
    end
    local tmp = gsub(tostring(r), "-", "~")
    local tmp1 = "red=" .. tmp .. ", green="
    local tmp2 = gsub(tostring(g), "-", "~")
    local tmp3 = tmp1 .. tmp2 .. ", blue="
    local tmp4 = gsub(tostring(b), "-", "~")
    return tmp3 .. tmp4 .. "\n"
  end
  local tmp = color_as_string(Black)
  outputAndFlush(stdOut, tmp)
  local tmp1 = color_as_string(Yellow)
  outputAndFlush(stdOut, tmp1)
end
local tmp = color_as_string(White)
outputAndFlush(stdOut, tmp)
