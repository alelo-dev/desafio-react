export default class StringFormat {
static convertToReal(number: any, options: any = {}) {
    const { moneySign = true } = options;
    if(Number.isNaN(number) || !number) return "need a number as the first parameter";
    if(typeof number === "string") { // n1
        number = Number(number);
    }
    let res;
    const config = moneySign ? {style: 'currency', currency: 'BRL'} : {minimumFractionDigits: 2};
    moneySign
    ? res = number.toLocaleString('pt-BR', config)
    : res = number.toLocaleString('pt-BR', config)
    const needComma = (number: any) => number <= 1000;
    if(needComma(number)) {
        res = res.toString().replace(".", ",");
    }
    return res; // n2
  }
}
