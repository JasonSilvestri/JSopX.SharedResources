<template><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24"><title>{{title}}</title><g fill="#ffffff"><path d="M10,7H2A1,1,0,0,1,1,6V2A1,1,0,0,1,2,1h8a1,1,0,0,1,1,1V6A1,1,0,0,1,10,7Z" fill="#ffffff"></path><path d="M10,23H2a1,1,0,0,1-1-1V18a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1v4A1,1,0,0,1,10,23Z" fill="#ffffff"></path><rect x="5" y="8" width="2" height="8" fill="#ffffff"></rect><path d="M19,7H17V5H12V3h6a1,1,0,0,1,1,1Z" fill="#ffffff"></path><path d="M18,21H12V19h5V17h2v3A1,1,0,0,1,18,21Z" fill="#ffffff"></path><path d="M18,16a1,1,0,0,1-.515-.143l-5-3a1,1,0,0,1,0-1.714l5-3a1,1,0,0,1,1.03,0l5,3a1,1,0,0,1,0,1.714l-5,3A1,1,0,0,1,18,16Z" fill="#ffffff"></path></g></svg></template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "decision process 1"
		}
	}
}
</script>