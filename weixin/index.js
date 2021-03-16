const http = require('http');
const https = require('https');
const url = require('url');
const querystring = require('querystring');
const serverOption = {
	port: '5560'
};

const weixinOption = {
	appid: 'wxbd66067aa8ee564e',
	secret: 'c1f4209b00a792ff7cab97b47a2695a6',
	grant_type: 'authorization_code'
};
const retrieveWeixinToken = (code) => {
	return new Promise((resolve) => {
		https.get(
			`https://api.weixin.qq.com/sns/oauth2/access_token?appid=${weixinOption.appid}&secret=${weixinOption.secret}&code=${code}&grant_type=${weixinOption.grant_type}`,
			(res) => {
				res.on('data', (d) => {
					resolve(d.toString());
				});
			}
		);
	});
};
const getWeixinUserInfo = (token, openId) => {
	return new Promise((resolve) => {
		https.get(`https://api.weixin.qq.com/sns/userinfo?access_token=${token}&openid=${openId}&lang=zh_CN`, (res) => {
			res.on('data', (d) => {
				resolve(d.toString());
			});
		});
	});
};
const server = http.createServer((req, res) => {
	const init = async () => {
		const urlParse = url.parse(req.url);
		const { query } = urlParse;
		if (urlParse.pathname === '/getWXUserInfo') {
			const { code } = querystring.parse(query);
			const originTokenResponse = await retrieveWeixinToken(code);
			const tokenResponse = JSON.parse(originTokenResponse);
			if ('errcode' in tokenResponse) {
				res.writeHead(200, { 'Content-Type': 'application/json ' });
				res.end(originTokenResponse);
				return;
			}
			const { access_token, openid } = tokenResponse;
			const userInfo = await getWeixinUserInfo(access_token, openid);
			res.writeHead(200, { 'Content-Type': 'text/plain' });
			res.end(`${code}`);
			return;
		}
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end('okay');
	};
	init();
});
server.on('connect', () => {
	console.log('connect success');
});
server.listen(serverOption.port, () => {
	console.log('listen success');
});
