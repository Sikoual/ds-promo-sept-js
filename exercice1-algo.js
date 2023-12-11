function htmlspecialchars(string) {
  // Soluce 1
  const dict = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '&': '&amp;',
  };

  // return string.replace(/[<>"&]/g, specialChar => dict[specialChar]);
  return string.replace(/[<>"&]/g, specialChar => dict[specialChar]);


  // Soluce 2
  // return string.replace(/&/g, "&amp;")
  // .replace(/"/g, "&quot;")
  // .replace(/</g, "&lt;")
  // .replace(/>/g, "&gt;");
  //

  // Soluce 3
  // return string.replace(/[<>"&]/g, function(specialChar) {
  //   switch (specialChar) {
  //     case '<':
  //       return '&lt;';
  //     case '>':
  //       return '&gt;';
  //     case '"':
  //       return '&quot;';
  //     case '&':
  //       return '&amp;';
  //   }
  // });
}

console.log(htmlspecialchars("<h2>Hello World</h2>"));



  


