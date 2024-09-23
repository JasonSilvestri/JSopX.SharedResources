<template><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" height="16" width="16"><title>{{title}}</title><g fill="#ffffff"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"></path></g></svg></template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "chevron right"
		}
	}
}
</script>