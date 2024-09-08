<template><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" height="16" width="16"><title>{{title}}</title><g fill="#ffffff"><path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16"></path></g></svg></template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "circle half"
		}
	}
}
</script>