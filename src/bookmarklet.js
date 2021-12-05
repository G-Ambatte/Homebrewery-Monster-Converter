javascript:(function(){
if(location.href.substring(0,35)=='https://homebrewery.naturalcrit.com'){
		const inputText = prompt('Enter source text:');
		if(!inputText){alert('No input text!'); return;}
		const replacementList = [
			{term: "^___(\\s*)^___", text: "{{monster,frame,wide\n"},
			{term: "^___", text: "{{monster,frame\n"},
			{term: "(^>)(\\s*)(___)", text:"\n___\n"},
			{term: "(^>)(?:\\s)?$", text:"\n:\n"},
			{term: "^>", text: ""}
		];
		var outputText = inputText;
		for (const replacement of replacementList){
			outputText = outputText.replace(new RegExp(replacement.term, 'gim'), replacement.text);
		}
		outputText = `${outputText}\n}}`;
		navigator.clipboard.writeText(outputText);
		alert(`Output copied to clipboard!\n${outputText}`);
	};
})();