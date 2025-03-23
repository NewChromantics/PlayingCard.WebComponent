`<playing-card></playing-card>`
=======================
Simple webcomponent to render a small playing card with a `suit` and `rank`, or backing graphics if these attributes are missing.
- `image=Hello.svg` to replace the rank/suit/backing with an explicit image


Example
---------------
```
<html>
<head>
		<script src="https://newchromantics.github.io/PlayingCard.WebComponent/playing-card.js" type=module></script>
</head>
<body>
	<playing-card></playing-card>
	<playing-card image="Joker.svg"></playing-card>
	<playing-card suit="Club", rank=13></playing-card>
	<playing-card suit="$", rank=5></playing-card>
</body>
</html>
```
