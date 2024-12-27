<template>
	<view>
		<view>{{ message }}</view>
		<button @click="localUpdate">本地更新</button>
		<button @click="getRemoteUrl">业务地址</button>
		<button @click="remoteGetRequest">远程Get请求</button>
		<button @click="remotePostRequest">远程Post请求</button>
		<button @click="remotePromiseGetRequest">远程PromiseGet请求</button>
		<button @click="remotePromisePostRequest">远程PromisePost请求</button>
	</view>
</template>

<script>
import { StringHelper, ObjectHelper } from 'basiclibrary.ts/dist/index';
import { NumberHelper } from 'basiclibrary.ts/dist/data/numberHelper';
import { ConfigHelper } from '../../utils/configHelper.js';
import { RequestHelper } from '../../utils/requestHelper.js';
export default {
	data() {
		return {
			message: 'Hello, Vue!'
		};
	},
	methods: {
		localUpdate() {
			// 通过 this 关键字访问并修改 data 中的 message 值
			let aa = NumberHelper.getFloat('123.456');
			let bb = NumberHelper.getFloat('123.24', 2);
			let city = StringHelper.getStringBeforeSeparator('qingdao city', ' ');
			city = StringHelper.toUpper(city);
			city = StringHelper.toLower(city);
			let ob = ObjectHelper.combine({ a: '1', b: '2' }, { b: 'b1', c: 'c1' });
			const obl = ObjectHelper.getMemberCount(ob);
			console.log(ob);

			this.message = `【Changed】: 城市：${city} 人口：${bb} 长度：${obl} `;
		},
		getRemoteUrl() {
			// 通过 this 关键字访问并修改 data 中的 message 值
			this.message = '【Remote Url】';
			const bizBaseUrl = ConfigHelper.get('bizBaseUrl');
			console.log('业务地址为：' + bizBaseUrl);
			this.message += bizBaseUrl;
		},
		remoteGetRequest() {
			// 通过 this 关键字访问并修改 data 中的 message 值
			this.message = '【Remote Get Request】';
			const bizBaseUrl = ConfigHelper.get('bizBaseUrl');
			let url = 'https://app.diyipingce.com/demo/dealparam';
			this.message += url;
			// console.log('业务地址为：' + bizBaseUrl);
			// 发起网络请求
			uni.request({
				url: url,
				data: {
					id: '8',
					name: 'alibaba'
				},
				method: 'GET',
				header: {
					// 自定义请求头信息
					'custom-header': 'hello'
				},
				success: (res) => {
					console.log(res);
					this.message += '内容为：' + res.data.toString();
				},
				fail: (err) => {
					this.message += '内容为：' + err.errMsg.toString();
					console.log(err);
				}
			});
		},
		remotePostRequest() {
			// 通过 this 关键字访问并修改 data 中的 message 值
			this.message = '【Remote Get Request】';
			const bizBaseUrl = ConfigHelper.get('bizBaseUrl');
			let url = 'https://app.diyipingce.com/demo/dealparam';
			this.message += url;
			// console.log('业务地址为：' + bizBaseUrl);
			// 发起网络请求
			uni.request({
				url: url,
				data: {
					id: '9',
					name: 'tencent'
				},
				method: 'POST',
				header: {
					// 自定义请求头信息
					'custom-header': 'hello'
				},
				success: (res) => {
					console.log(res);
					this.message += '内容为：' + res.data.toString();
				},
				fail: (err) => {
					this.message += '内容为：' + err.errMsg.toString();
					console.log(err);
				}
			});
		},
		remotePromiseGetRequest() {
			// 通过 this 关键字访问并修改 data 中的 message 值
			this.message = '【Remote Promise Get Request】';
			const bizBaseUrl = ConfigHelper.get('bizBaseUrl');
			let url = bizBaseUrl + '/demo/dealparam';
			this.message += url;
			const paramsObject = { id: '9', name: 'tencent' };
			// 发起网络请求
			RequestHelper.request(url, paramsObject)
				.then((res) => {
					console.log(res);
					this.message += '内容为：' + res.data.toString();
				})
				.catch((err) => {
					this.message += '内容为：' + err.errMsg.toString();
					console.log(err);
				});
		},
		remotePromisePostRequest() {
			// 通过 this 关键字访问并修改 data 中的 message 值
			this.message = '【Remote Promise Post Request】';
			const bizBaseUrl = ConfigHelper.get('bizBaseUrl');
			let url = bizBaseUrl + '/demo/dealparam';
			this.message += url;

			const paramsObject = { id: '12', name: 'pinduoduo' };
			const optionsObject = { method: 'POST' };
			// 发起网络请求
			RequestHelper.request(url, paramsObject, optionsObject)
				.then((res) => {
					console.log(res);
					this.message += '内容为：' + res.data.toString();
				})
				.catch((err) => {
					this.message += '内容为：' + err.errMsg.toString();
					console.log(err);
				});
		}
	}
};
</script>
