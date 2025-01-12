<template>
	<view>
		<view>1. 模板中，某个组件指令内用双引号括起来的，直接就是js表达式代码。</view>		<view>2. 模板中，某个组件属性内用双引号括起来的，是字符串。</view>		<view>3. 模版中，某个组件内容中如果要使用js表达式，要使用"{{}}"限定的插值表达式语法。</view>		<view class="list-0">我是一个组件属性的演示。属性引号内是字符串。</view>		<view :class="bgStyle1">我是一个组件指令的演示。指令引号内的是js表达式代码。</view>		<view>我是一个插值表达式演示。插入的信息：{{bgStyle0}} {{bgStyle1}}</view>		<view v-for="(item, index) in 10">
			<!-- 通过%运算符求余数，实现隔行换色的效果 -->
			<view :class="'list-' + (index % 2)">{{ index % 2 }}</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {			"bgStyle0": "list-0",
			"bgStyle1": "list-1"		};
	}
};
</script>
<style>
.list-0 {
	background-color: #aaaaff;
}
.list-1 {
	background-color: #ffaa7f;
}
</style>
