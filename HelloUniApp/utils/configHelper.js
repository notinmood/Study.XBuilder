import {
	config
} from '../.env.config.js';

export class ConfigHelper {
	static get(settingName) {
		return config[settingName];
	}
}