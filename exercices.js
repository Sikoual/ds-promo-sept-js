function htmlspecialchars(string) {
  // Soluce 1
  const dict = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '&': '&amp;',
  };

  return string.replace(/[<>"&]/g, char => dict[char]);


  // Soluce 2
  // return string.replace(/&/g, "&amp;")
  // .replace(/"/g, "&quot;")
  // .replace(/</g, "&lt;")
  // .replace(/>/g, "&gt;");


  // Soluce 3
  // string = string.replace(/[<>"&]/g, function(match) {
  //   switch (match) {
  //     case '<':
  //       return '&lt;';
  //     case '>':
  //       return '&gt;';
  //     case '"':
  //       return '&quot;';
  //     case '&':
  //       return '&amp;';
  //     default:
  //       return match;
  //   }
  // });
  //
  // return string;
}

console.log(htmlspecialchars("<h2>Hello World</h2>"));