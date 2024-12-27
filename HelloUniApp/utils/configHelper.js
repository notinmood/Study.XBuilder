import {
	config
} from '../.env.config.js';
/** * 本项目内统一配置，可以随时替换为BL.TS内地配置辅助器 */
export class ConfigHelper {
	static get(settingName) {
		return config[settingName];
	}
}