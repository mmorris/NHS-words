var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
	var element = elements[i];

	for (var j = 0; j < element.childNodes.length; j++) {
		var node = element.childNodes[j];

		if (node.nodeType === 3) {
			var text = node.nodeValue;
			if(text.indexOf("NHS") > -1) {
				var replacedText = text.replace(/NHS Overspend/gi, 'chronic underfunding');
				var replacedText = replacedText.replace(/overspend by hospitals/gi, 'underfunding of hospitals');
				var replacedText = replacedText.replace(/overspend/gi, 'underfunding');
				var replacedText = replacedText.replace(/overspent/gi, 'were underfunded');
				var replacedText = replacedText.replace(/busting their budgets/gi, 'not receiving necessary funding');
				var replacedText = replacedText.replace(/exceeded their budgets/gi, 'were underfunded');

				if (replacedText !== text) {
					element.replaceChild(document.createTextNode(replacedText), node);
				}
			}
		}
	}
}
