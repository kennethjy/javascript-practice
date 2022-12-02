function digitalDecipher(eMessage, key){
		for(let i = 0; i < eMessage.length; i++){
			eMessage[i] -= parseInt(key.toString()[i % key.toString().length]);
		}
		const alphabet = "abcdefghijklmnopqrstuvwxyz";
		var out = "";
		for(let i = 0; i < eMessage.length; i++){
			out += alphabet[eMessage[i] - 1];
		}
		return out;
	}