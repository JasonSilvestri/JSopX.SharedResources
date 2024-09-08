<template><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24"><title>{{title}}</title><g fill="#ffffff" stroke-linejoin="miter" stroke-linecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="#ffffff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></circle><path d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5" fill="none" stroke="#ffffff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path><circle cx="12" cy="7.25" r="1.25" fill="#ffffff" stroke-width="0"></circle></g></svg></template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "c info 2"
		}
	}
}
</script>