var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
	var element = elements[i];

	for (var j = 0; j < element.childNodes.length; j++) {
		var node = element.childNodes[j];

		if (node.nodeType === 3) {
			var text = node.nodeValue;
			if(text.indexOf("NHS") > -1 || text.indexOf("hospital") > -1 || text.indexOf("hospitals") > -1 || text.indexOf("trusts") > -1 || text.indexOf("healthcare") > -1) {
				var replacedText = text.replace(/NHS Overspend/gi, 'chronic underfunding');
				var replacedText = replacedText.replace(/NHS overspend/gi, 'chronic underfunding');
				var replacedText = replacedText.replace(/NHS overspends/gi, 'NHS is underfunded');
				var replacedText = replacedText.replace(/overspend by hospitals/gi, 'underfunding of hospitals');
				var replacedText = replacedText.replace(/overspending/gi, 'underfunding');
				var replacedText = replacedText.replace(/overspend/gi, 'underfunding');
				var replacedText = replacedText.replace(/overspent/gi, 'were underfunded');
				var replacedText = replacedText.replace(/busting their budgets/gi, 'not receiving necessary funding');
				var replacedText = replacedText.replace(/exceeded their budgets/gi, 'were underfunded');

				var replacedText = replacedText.replace(/in the red/gi, 'underfunded');
				var replacedText = replacedText.replace(/the deficit/gi, 'the underfunding');
				var replacedText = replacedText.replace(/deficit/gi, 'underfunding');
				var replacedText = replacedText.replace(/broken finances/gi, 'underfunding');
				var replacedText = replacedText.replace(/financial crisis/gi, 'underfunding crisis');

				var replacedText = replacedText.replace(/funding gap/gi, 'underfunding');
				var replacedText = replacedText.replace(/funding shortfall/gi, 'underfunding');
				var replacedText = replacedText.replace(/budget gap/gi, 'underfunding');
				var replacedText = replacedText.replace(/budget shortfall/gi, 'underfunding');
				var replacedText = replacedText.replace(/black hole/gi, 'chronic underfunding');
				var replacedText = replacedText.replace(/busted their budgets/gi, 'were underfunded');
				var replacedText = replacedText.replace(/financial results/gi, 'underfunding');
				var replacedText = replacedText.replace(/overspends/gi, 'is underfunded');

				if (replacedText !== text) {
					element.replaceChild(document.createTextNode(replacedText), node);
				}
			}
		}
	}
}
