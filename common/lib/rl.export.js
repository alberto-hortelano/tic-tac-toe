
import vm from 'vm';
import fs from 'fs';
import path from 'path';
module.exports = (context) => {
	const filename = 'rl.js';
  context = context || {};
  var data = fs.readFileSync(path.join(__dirname, filename));
  vm.runInNewContext(data, context, filename);
  return context;
}
