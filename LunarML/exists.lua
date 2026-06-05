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
local revAppend, outputAndFlush, stdOut, tmp
do
  local eq = function(a, b)
    return a == b
  end
  revAppend = function(_1, ys)
    local tmp1, tmp2 = _1, ys
    ::cont::
    local _1_1, ys1 = tmp1, tmp2
    if _1_1 == nil then
      return ys1
    elseif _1_1 ~= nil then
      local tmp3 = _1_1[1]
      local tmp4 = _1_1[2]
      tmp1 = tmp4
      tmp2 = {tmp3, ys1}
      goto cont
    else
      _raise(_Match, "list.sml:60:5")
    end
  end
  local stdout = _ENV.io.stdout
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
      local tmp1 = revAppend({content, buffer[1]}, nil)
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
  local function exists(eq1)
    return function(a)
      if a[2] == nil then
        return false
      elseif a[2] ~= nil then
        local element = a[1]
        local tmp1 = a[2][1]
        local tmp2 = a[2][2]
        local tmp3 = eq1(element, tmp1)
        if tmp3 then
          return true
        end
        local tmp4 = exists(eq1)
        return tmp4({element, tmp2})
      else
        _raise(_Match, "exists.sml:3:5")
      end
    end
  end
  local tmp1 = exists(eq)
  local tmp2 = tmp1({2, {1, {2, {3, nil}}}})
  do
    local tmp3
    if tmp2 then
      tmp3 = "true"
    elseif not tmp2 then
      tmp3 = "false"
    else
      _raise(_Match, "exists.sml:11:5")
    end
    outputAndFlush(stdOut, tmp3 .. "\n")
  end
  outputAndFlush(stdOut, "\n")
  local tmp3 = exists(eq)
  local tmp4 = tmp3({3, {1, {2, {3, nil}}}})
  do
    local tmp5
    if tmp4 then
      tmp5 = "true"
    elseif not tmp4 then
      tmp5 = "false"
    else
      _raise(_Match, "exists.sml:11:5")
    end
    outputAndFlush(stdOut, tmp5 .. "\n")
  end
  outputAndFlush(stdOut, "\n")
  tmp = exists(eq)
end
local tmp1 = {1, {2, nil}}
local tmp2 = {3, {4, nil}}
local tmp3
do
  local tmp4 = revAppend(tmp1, nil)
  tmp3 = revAppend(tmp4, tmp2)
end
local tmp4 = tmp({2, tmp3})
do
  local tmp5
  if tmp4 then
    tmp5 = "true"
  elseif not tmp4 then
    tmp5 = "false"
  else
    _raise(_Match, "exists.sml:11:5")
  end
  outputAndFlush(stdOut, tmp5 .. "\n")
end
outputAndFlush(stdOut, "\n")
