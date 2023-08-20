
<template>
	<el-button icon="Refresh" size="small" circle />
	<el-button icon="FullScreen" size="small" circle />
	<el-button icon="Setting" size="small" circle />
	<img src="" style="width: 24px;height: 24px;margin:0px 10px;border-radius: 50%;">
	<!-- 下拉菜单 -->
	<el-dropdown>
			<span class="el-dropdown-link">
					<!-- {{ userStore.username }} -->
					<el-icon class="el-icon--right">
							<arrow-down />
					</el-icon>
			</span>
			<template #dropdown>
					<el-dropdown-menu>
							<el-dropdown-item @click="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
			</template>
	</el-dropdown>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

</style>