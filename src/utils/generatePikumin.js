//PikuminAA/src/utils/generatePikumin.js
const generatePikumin = (name, ability, eye, bodyInput) => {
    let body = Array.from(bodyInput); // split input by emojis
  
    while (body.length < 64) {
      // if there's not enough emojis, use the first one for the remaining.
      body.push(...body);
    }
  
    var output =
    `
${body[0]}${body[1]}${body[2]}
${body[3]}${body[4]}${body[5]}${body[6]}
    ${body[7]}${body[8]}${body[9]}
                ${body[10]}
                ${body[11]} ${name}
        ${body[12]}${body[13]}${body[14]}${body[15]} ピクミンは
    ${body[16]}${body[17]}${body[18]}${body[19]}${body[20]} 『${ability}』
    ${body[21]}${eye}${body[22]}${body[23]}${eye}
    ${body[24]}${body[25]}${body[26]}${body[27]}${body[28]}
        ${body[29]}${body[30]}${body[31]}
            ${body[32]}${body[33]}
    ${body[34]}${body[35]}${body[36]}${body[37]}
${body[38]}  ${body[39]}${body[40]}${body[41]}${body[42]}
${body[43]}  ${body[44]}${body[45]}${body[46]}  ${body[47]}
${body[48]}${body[49]}${body[50]}${body[51]}${body[52]}  ${body[53]}
${body[54]}${body[55]}${body[56]}${body[57]}${body[58]}  ${body[59]}
    ${body[60]}    ${body[61]}
        ${body[62]}    ${body[63]}
        `;
  
    return output;
  };
  
  export default generatePikumin;
    