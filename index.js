  var katzDeli = []

function takeANumber(line, new_cust) {
  line.push(new_cust)
  return `Welcome, ${new_cust}. You are number ${line.indexOf(new_cust) + 1} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${line.shift()}.`
  }
}

// function currentLine(line) {
//   if (line.length === 0) {
//     return "The line is currently empty."
//   }
//   else {
//     for (var cv = 0; cv < line.length; cv++) {
//       var string += `${cv+1}. ${line[cv]}`
//       if (cv < line.length -1) {
//         string += `, `
//       }
//       return `The line is currently: ${string}`
//     }
// }





function currentLine(line){
	var string = "The line is currently: "
	if(line.length === 0){
		return"The line is currently empty."
	}
	else {
		for (var cv = 0; cv < line.length; cv++) {
			string+= `${cv + 1}. ${line[cv]}`
			if(cv < line.length - 1){
				string += ', '
			}
		}
		return string
	}
}
