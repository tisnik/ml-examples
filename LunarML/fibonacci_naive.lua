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
local function _Int_add(x, y)
  -- assert(math_type(x) == "integer")
  -- assert(math_type(y) == "integer")
  local z = x + y
  if y > 0 and z < x then
    _raise(_Overflow, "Int.+")
  elseif y < 0 and z > x then
    _raise(_Overflow, "Int.+")
  else
    return z
  end
end
local function _Int_sub(x, y)
  -- assert(math_type(x) == "integer")
  -- assert(math_type(y) == "integer")
  local z = x - y
  if y < 0 and z < x then
    _raise(_Overflow, "Int.-")
  elseif y > 0 and x < z then
    _raise(_Overflow, "Int.-")
  else
    return z
  end
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
local tostring, gsub, outputAndFlush, stdOut, tmp
do
  local io = _ENV.io
  tostring = _ENV.tostring
  local stdout = io.stdout
  gsub = string.gsub
  local Io_tag = {"Io"}
  local BlockingNotSupported = setmetatable({tag = {"BlockingNotSupported"}}, _exn_meta)
  local LINE_BUF = "LINE_BUF"
  outputAndFlush = function(_1, content)
    if _1.tag == "LUA_WRITABLE" then
      local writable = _1.payload.writable
      local name = _1.payload.name
      local tmp1, tmp2 = writable:write(content)
      if not tmp1 then
        _raise(setmetatable({tag = Io_tag, payload = {cause = setmetatable({tag = _Fail_tag, payload = tmp2}, _exn_meta), ["function"] = "output", name = name}}, _exn_meta), "text-io.sml:290:43")
      else
        writable:flush()
        return nil
      end
    elseif _1.tag == "PRIM_WRITER" then
      local name = _1.payload.writer.name
      local writeVec = _1.payload.writer.writeVec
      local buffer = _1.payload.buffer
      local tmp1
      do
        local tmp2, tmp3 = {content, buffer[1]}, nil
        ::cont::
        local _1_1, ys = tmp2, tmp3
        if _1_1 == nil then
          tmp1 = ys
        elseif _1_1 ~= nil then
          local tmp4 = _1_1[1]
          local tmp5 = _1_1[2]
          tmp2 = tmp5
          tmp3 = {tmp4, ys}
          goto cont
        else
          _raise(_Match, "list.sml:60:5")
        end
      end
      local tmp2 = _VectorOrArray_fromList(tmp1)
      local content_PRIME = table_concat(tmp2)
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
  local function fib(n)
    if n == 0 then
      return 0
    elseif n == 1 then
      return 1
    end
    local tmp1 = fib(_Int_sub(n, 1))
    local tmp2 = fib(_Int_sub(n, 2))
    return _Int_add(tmp1, tmp2)
  end
  local tmp1 = fib(0)
  local tmp2 = gsub(tostring(tmp1), "-", "~")
  outputAndFlush(stdOut, tmp2)
  outputAndFlush(stdOut, "\n")
  local tmp3 = fib(1)
  local tmp4 = gsub(tostring(tmp3), "-", "~")
  outputAndFlush(stdOut, tmp4)
  outputAndFlush(stdOut, "\n")
  tmp = fib(10)
end
local tmp1 = gsub(tostring(tmp), "-", "~")
outputAndFlush(stdOut, tmp1)
outputAndFlush(stdOut, "\n")
