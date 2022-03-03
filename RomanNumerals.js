

const RomanNumerals = { 
  toRoman: function (intValue) {

    //int value is between one and 4000(excluded).

    intValue = intValue.toString().split("").reverse().map((num, i) => {
      return Number(num) * (10 ** i);
    }).map(num => {
      //

      if (num >= 1000) {

        return "M".repeat(num / 1000);
      } else if (num >= 500) {
        //

        if (num === 900) return "CM";
        return "D" + "C".repeat(num / 100 - 5);


      } else if (num >= 100) {


        if (num === 400) return "CD"
        return "C".repeat(num / 100);

      } else if (num >= 50) {
        //
        if (num === 90) return "XC";
        return "L" + "X".repeat(num / 10 - 5);

      } else if (num >= 10) {
        //
        if (num === 40) return "XL";
        return "X".repeat(num / 10);

      } else if (num >= 5) {
        if (num === 9) return "IX"
        return "V" + "I".repeat(num - 5);

      } else {
        //
        if (num === 4) return "IV";
        return 'I'.repeat(num);

      }


    }).reverse().join("");
    return intValue;


  },

  fromRoman: function (romValue) {


    /*
    # I,  one
    # V,  five
    # X,  ten,
    # L,  fifty
    # C,  hundredre
    # D,  five hundred
    # M, thausand
 
    */
    // example: 2122, "MMCXXII"

    romValue = romValue.split("").map((num, i) => {

      if (
        romValue[i + 1] === "M" ||
        romValue[i + 1] === "D" ||
        romValue[i + 1] === "C" ||
        romValue[i + 1] === "L" ||
        romValue[i + 1] === "X" ||
        romValue[i + 1] === "V"
      ) {
        if (num === "C" && (romValue[i + 1] === "M" || romValue[i + 1] === "D")) return -100;
        if (num === 'X' && (romValue[i + 1] === "C" || romValue[i + 1] === "L")) return -10;
        if (num === "I") return -1;
      }
      if (num === "M") return 1000;
      if (num === "D") return 500;
      if (num === "C") return 100;
      if (num === "L") return 50;
      if (num === 'X') return 10;
      if(num==="V") return 5;
      if (num === "I") return 1;




    });

    return romValue.reduce((prev, curr) => {
      return prev + curr;
    });
  }
}




 
console.log(RomanNumerals.fromRoman("IV"));



