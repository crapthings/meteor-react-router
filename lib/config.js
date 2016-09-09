Config = {
  Router: {}
}

Config.get = function (key) {
  return this[key]
}

console.log(Config.get('Router'))
