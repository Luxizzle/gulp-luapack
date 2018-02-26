const through = require('through2')
const luapack = require('luapack')

module.exports = function() {
	return through.obj(function(file, encoding, callback) {
		try {
			file.contents = new Buffer(luapack.build(file.path))

			callback(null, file)
		} catch(err) {
			callback(err)
		}
	})
}