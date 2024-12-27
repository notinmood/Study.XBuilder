export class RequestHelper {
	/**	 * 对网络的请求进行封装。返回Promise对象
	 * @param {String} url 请求的地址
	 * @param {Object} paramsObject 请求的参数
	 * @param {Object} optionsObject 请求的配置。配置项包括method,header等	 */	static request = (url, paramsObject={}, optionsObject={}) => { 
		return new Promise((resolve, reject) => { //异步封装接口，使用Promise处理异步请求
			uni.request({ //发送请求
				url: url, //接收请求的API
				method: optionsObject.method || 'GET', //接收请求的方式,如果不传默认为GET
				data: paramsObject || {}, //接收请求的data,不传默认为空
				success: (res) => { //数据获取成功
					if (res.statusCode !== 200) { //因为200是返回成功的状态码，如果不等于200,则代表获取失败,
						return uni.showToast({
							title: "数据获取失败！"
						})
					}
					resolve(res) //成功,将数据返回
				},
				fail: (err) => { //失败操作
					// uni.showToast({
					// 	title: "请求接口失败！"
					// })
					reject(err)
				}
			})
		})
	}
}