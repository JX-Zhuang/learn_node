const Crawler = require('crawler');
const fs = require('fs');
const c = new Crawler({
	maxConnections: 10,
	callback(err, res, done) {
		if (err) {
			console.log(err);
		} else {
			const { body, $, options } = res;
			const { filename } = options;
			fs.createWriteStream(filename).write(body);
		}
		done();
	}
});
c.queue({
	uri:
		'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596791489337&di=9154f088fb3fc07ab69e134180a4a1fb&imgtype=0&src=http%3A%2F%2Fbos.pgzs.com%2Frbpiczy%2FWallpaper%2F2013%2F2%2F21%2F924e9018181449b78f6659d050079fee-3.jpg',
	filename: 'scenery.png',
	encoding: null,
	jQuery: false // set false to suppress warning message.
});
// c.queue({ uri: 'http://www.baidu.com', filename: 'baidu.html' });
// c.queue(['http://www.google.com.hk','http://www.baidu.com']);
