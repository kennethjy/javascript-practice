function canGiveBlood(a, b){
		if(a[a.length - 1] == "+" && b[b.length - 1] == "-"){
			return false;
		}
		else if(b[0] == "O" && a[0] != "O"){
			return false;
		}
		else if(b[0] == "B" && a[0] == "A"){
			return false;
		}
		else if(b[0] == "A" && b[1] != "B" && (a[0] == "B" || (a[0] == "A" && a[1] == "B"))){
			return false;
		}
		else{
			return true;
		}
	}