console.log('Html.js 2');
const Html = (content, helmet) => `<!doctype html>
<html ${helmet.htmlAttributes.toString()}>
	<head>
		<link rel="stylesheet" type="text/css" href="public/index.css">
		${helmet.title.toString()}
		${helmet.meta.toString()}
		${helmet.link.toString()}
	</head>
	<body ${helmet.bodyAttributes.toString()}>
		<div id="content">${content}</div>
		<div id="cli"></div>
		<script src="/public/bundle.js" async></script>
	</body>
</html>`;


export default Html;
