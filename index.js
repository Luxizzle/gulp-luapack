const through = require('through2')
const luapack = require('luapack')

module.exports = function() {
	return through.obj(function(file, encoding, callback) {
		try {
			const output = luapack.build(file.path)
			file.content = output

			callback(null, file.path)
		} catch(err) {
			callback(err)
		}
	})
}