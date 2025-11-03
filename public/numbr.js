"use strict";
var NumbrRuntime = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target2) => (target2 = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target2, "default", { value: mod, enumerable: true }) : target2,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // data/currencies.json
  var require_currencies = __commonJS({
    "data/currencies.json"(exports, module) {
      module.exports = {
        AED: {
          name: "United Arab Emirates dirham",
          dp: 2
        },
        AFN: {
          name: "Afghan afghani",
          dp: 2
        },
        ALL: {
          name: "Albanian lek",
          dp: 2
        },
        AMD: {
          name: "Armenian dram",
          dp: 2
        },
        ANG: {
          name: "Netherlands Antillean guilder",
          dp: 2
        },
        AOA: {
          name: "Angolan kwanza",
          dp: 2
        },
        ARS: {
          name: "Argentine peso",
          dp: 2
        },
        AUD: {
          name: "Australian dollar",
          dp: 2
        },
        AWG: {
          name: "Aruban florin",
          dp: 2
        },
        AZN: {
          name: "Azerbaijani manat",
          dp: 2
        },
        BAM: {
          name: "Bosnia and Herzegovina convertible mark",
          dp: 2
        },
        BBD: {
          name: "Barbados dollar",
          dp: 2
        },
        BDT: {
          name: "Bangladeshi taka",
          dp: 2
        },
        BGN: {
          name: "Bulgarian lev",
          dp: 2
        },
        BHD: {
          name: "Bahraini dinar",
          dp: 3
        },
        BIF: {
          name: "Burundian franc",
          dp: 0
        },
        BMD: {
          name: "Bermudian dollar",
          dp: 2
        },
        BND: {
          name: "Brunei dollar",
          dp: 2
        },
        BOB: {
          name: "Boliviano",
          dp: 2
        },
        BRL: {
          name: "Brazilian real",
          dp: 2
        },
        BSD: {
          name: "Bahamian dollar",
          dp: 2
        },
        BTN: {
          name: "Bhutanese ngultrum",
          dp: 2
        },
        BWP: {
          name: "Botswana pula",
          dp: 2
        },
        BYN: {
          name: "Belarusian ruble",
          dp: 2
        },
        BYR: {
          name: "Belarusian ruble",
          dp: 2
        },
        BZD: {
          name: "Belize dollar",
          dp: 2
        },
        CAD: {
          name: "Canadian dollar",
          dp: 2
        },
        CDF: {
          name: "Congolese franc",
          dp: 2
        },
        CDN: {
          name: "Canadian dollar",
          dp: 2
        },
        CHF: {
          name: "Swiss franc",
          dp: 2
        },
        CLF: {
          name: "Unidad de Fomento",
          dp: 4
        },
        CLP: {
          name: "Chilean peso",
          dp: 0
        },
        CNH: {
          name: "Chinese yuan",
          dp: 2
        },
        CNY: {
          name: "Chinese yuan",
          dp: 2
        },
        COP: {
          name: "Colombian peso",
          dp: 2
        },
        CRC: {
          name: "Costa Rican colon",
          dp: 2
        },
        CSK: {
          name: "Czech koruna",
          dp: 2
        },
        CUC: {
          name: "Cuban convertible peso",
          dp: 2
        },
        CUP: {
          name: "Cuban peso",
          dp: 2
        },
        CVE: {
          name: "Cape Verdean escudo",
          dp: 2
        },
        CZK: {
          name: "Czech koruna",
          dp: 2
        },
        DJF: {
          name: "Djiboutian franc",
          dp: 0
        },
        DKK: {
          name: "Danish krone",
          dp: 2
        },
        DOP: {
          name: "Dominican peso",
          dp: 2
        },
        DZD: {
          name: "Algerian dinar",
          dp: 2
        },
        EGP: {
          name: "Egyptian pound",
          dp: 2
        },
        ERN: {
          name: "Eritrean nakfa",
          dp: 2
        },
        ETB: {
          name: "Ethiopian birr",
          dp: 2
        },
        EUR: {
          name: "Euro",
          dp: 2
        },
        FJD: {
          name: "Fiji dollar",
          dp: 2
        },
        FKP: {
          name: "Falkland Islands pound",
          dp: 2
        },
        GBP: {
          name: "Pound sterling",
          dp: 2
        },
        GEL: {
          name: "Georgian lari",
          dp: 2
        },
        GHS: {
          name: "Ghanaian cedi",
          dp: 2
        },
        GIP: {
          name: "Gibraltar pound",
          dp: 2
        },
        GMD: {
          name: "Gambian dalasi",
          dp: 2
        },
        GNF: {
          name: "Guinean franc",
          dp: 0
        },
        GTQ: {
          name: "Guatemalan quetzal",
          dp: 2
        },
        GYD: {
          name: "Guyanese dollar",
          dp: 2
        },
        HKD: {
          name: "Hong Kong dollar",
          dp: 2
        },
        HNL: {
          name: "Honduran lempira",
          dp: 2
        },
        HRK: {
          name: "Croatian kuna",
          dp: 2
        },
        HTG: {
          name: "Haitian gourde",
          dp: 2
        },
        HUF: {
          name: "Hungarian forint",
          dp: 2
        },
        IDR: {
          name: "Indonesian rupiah",
          dp: 2
        },
        ILS: {
          name: "Israeli new shekel",
          dp: 2
        },
        INR: {
          name: "Indian rupee",
          dp: 2
        },
        IQD: {
          name: "Iraqi dinar",
          dp: 3
        },
        IRR: {
          name: "Iranian rial",
          dp: 2
        },
        ISK: {
          name: "Icelandic kr\xF3na",
          dp: 0
        },
        JMD: {
          name: "Jamaican dollar",
          dp: 2
        },
        JOD: {
          name: "Jordanian dinar",
          dp: 3
        },
        JPY: {
          name: "Japanese yen",
          dp: 0
        },
        KES: {
          name: "Kenyan shilling",
          dp: 2
        },
        KGS: {
          name: "Kyrgyzstani som",
          dp: 2
        },
        KHR: {
          name: "Cambodian riel",
          dp: 2
        },
        KMF: {
          name: "Comoro franc",
          dp: 0
        },
        KPW: {
          name: "North Korean won",
          dp: 2
        },
        KRW: {
          name: "South Korean won",
          dp: 2
        },
        KWD: {
          name: "Kuwaiti dinar",
          dp: 3
        },
        KYD: {
          name: "Cayman Islands dollar",
          dp: 2
        },
        KZT: {
          name: "Kazakhstani tenge",
          dp: 2
        },
        LAK: {
          name: "Lao kip",
          dp: 2
        },
        LBP: {
          name: "Lebanese pound",
          dp: 2
        },
        LKR: {
          name: "Sri Lankan rupee",
          dp: 2
        },
        LRD: {
          name: "Liberian dollar",
          dp: 2
        },
        LSL: {
          name: "Lesotho loti",
          dp: 2
        },
        LTL: {
          name: "Lithuanian litas",
          dp: 2
        },
        LVL: {
          name: "Latvian lats",
          dp: 2
        },
        LYD: {
          name: "Libyan dinar",
          dp: 3
        },
        MAD: {
          name: "Moroccan dirham",
          dp: 2
        },
        MDL: {
          name: "Moldovan leu",
          dp: 2
        },
        MGA: {
          name: "Malagasy ariary",
          dp: 2
        },
        MKD: {
          name: "Macedonian denar",
          dp: 2
        },
        MMK: {
          name: "Myanmar kyat",
          dp: 2
        },
        MNT: {
          name: "Mongolian t\xF6gr\xF6g",
          dp: 2
        },
        MOP: {
          name: "Macanese pataca",
          dp: 2
        },
        MRO: {
          name: "Mauritanian ouguiya",
          dp: 2
        },
        MUR: {
          name: "Mauritian rupee",
          dp: 2
        },
        MVR: {
          name: "Maldivian rufiyaa",
          dp: 2
        },
        MWK: {
          name: "Malawian kwacha",
          dp: 2
        },
        MXN: {
          name: "Mexican peso",
          dp: 2
        },
        MYR: {
          name: "Malaysian ringgit",
          dp: 2
        },
        MZN: {
          name: "Mozambican metical",
          dp: 2
        },
        NAD: {
          name: "Namibian dollar",
          dp: 2
        },
        NGN: {
          name: "Nigerian naira",
          dp: 2
        },
        NIO: {
          name: "Nicaraguan c\xF3rdoba",
          dp: 2
        },
        NOK: {
          name: "Norwegian krone",
          dp: 2
        },
        NPR: {
          name: "Nepalese rupee",
          dp: 2
        },
        NZD: {
          name: "New Zealand dollar",
          dp: 2
        },
        OMR: {
          name: "Omani rial",
          dp: 3
        },
        PAB: {
          name: "Panamanian balboa",
          dp: 2
        },
        PEN: {
          name: "Peruvian sol",
          dp: 2
        },
        PGK: {
          name: "Papua New Guinean kina",
          dp: 2
        },
        PHP: {
          name: "Philippine peso[13]",
          dp: 2
        },
        PKR: {
          name: "Pakistani rupee",
          dp: 2
        },
        PLN: {
          name: "Polish z\u0142oty",
          dp: 2
        },
        PYG: {
          name: "Paraguayan guaran\xED",
          dp: 0
        },
        QAR: {
          name: "Qatari riyal",
          dp: 2
        },
        RMB: {
          name: "Renminbi",
          dp: 2
        },
        RON: {
          name: "Romanian leu",
          dp: 2
        },
        RSD: {
          name: "Serbian dinar",
          dp: 2
        },
        RUB: {
          name: "Russian ruble",
          dp: 2
        },
        RWF: {
          name: "Rwandan franc",
          dp: 0
        },
        SAR: {
          name: "Saudi riyal",
          dp: 2
        },
        SBD: {
          name: "Solomon Islands dollar",
          dp: 2
        },
        SCR: {
          name: "Seychelles rupee",
          dp: 2
        },
        SDG: {
          name: "Sudanese pound",
          dp: 2
        },
        SEK: {
          name: "Swedish krona",
          dp: 2
        },
        SGD: {
          name: "Singapore dollar",
          dp: 2
        },
        SHP: {
          name: "Saint Helena pound",
          dp: 2
        },
        SLL: {
          name: "Sierra Leonean leone",
          dp: 2
        },
        SOS: {
          name: "Somali shilling",
          dp: 2
        },
        SRD: {
          name: "Surinamese dollar",
          dp: 2
        },
        SSP: {
          name: "South Sudanese pound",
          dp: 2
        },
        STD: {
          name: "Sao Tome & Principe Dobra",
          dp: 2
        },
        STN: {
          name: "Sao Tome & Principe Dobra",
          dp: 2
        },
        SVC: {
          name: "Salvadoran col\xF3n",
          dp: 2
        },
        SYP: {
          name: "Syrian pound",
          dp: 2
        },
        SZL: {
          name: "Swazi lilangeni",
          dp: 2
        },
        THB: {
          name: "Thai baht",
          dp: 2
        },
        TJS: {
          name: "Tajikistani somoni",
          dp: 2
        },
        TMT: {
          name: "Turkmenistan manat",
          dp: 2
        },
        TND: {
          name: "Tunisian dinar",
          dp: 3
        },
        TOP: {
          name: "Tongan pa\u02BBanga",
          dp: 2
        },
        TRY: {
          name: "Turkish lira",
          dp: 2
        },
        TTD: {
          name: "Trinidad and Tobago dollar",
          dp: 2
        },
        TWD: {
          name: "New Taiwan dollar",
          dp: 2
        },
        TZS: {
          name: "Tanzanian shilling",
          dp: 2
        },
        UAH: {
          name: "Ukrainian hryvnia",
          dp: 2
        },
        UGX: {
          name: "Ugandan shilling",
          dp: 0
        },
        USD: {
          name: "United States dollar",
          dp: 2
        },
        UYU: {
          name: "Uruguayan peso",
          dp: 2
        },
        UZS: {
          name: "Uzbekistan som",
          dp: 2
        },
        VEF: {
          name: "Venezuelan bol\xEDvar",
          dp: 2
        },
        VND: {
          name: "Vietnamese \u0111\u1ED3ng",
          dp: 0
        },
        VUV: {
          name: "Vanuatu vatu",
          dp: 0
        },
        WST: {
          name: "Samoan tala",
          dp: 2
        },
        XAF: {
          name: "CFA franc BEAC",
          dp: 0
        },
        XAG: {
          name: "Silver ounce",
          dp: 2
        },
        XAU: {
          name: "Gold ounce",
          dp: 2
        },
        XCD: {
          name: "East Caribbean dollar",
          dp: 2
        },
        XDR: {
          name: "Special drawing rights",
          dp: 2
        },
        XOF: {
          name: "CFA franc BCEAO",
          dp: 0
        },
        XPD: {
          name: "Palladium ounce",
          dp: 2
        },
        XPF: {
          name: "CFP franc (franc Pacifique)",
          dp: 0
        },
        XPT: {
          name: "Platinum ounce",
          dp: 2
        },
        YER: {
          name: "Yemeni rial",
          dp: 2
        },
        ZAR: {
          name: "South African rand",
          dp: 2
        },
        ZMK: {
          name: "Zambian kwacha",
          dp: 2
        },
        ZMW: {
          name: "Zambian kwacha",
          dp: 2
        },
        ZWL: {
          name: "Zimbabwean dollar",
          dp: 2
        }
      };
    }
  });

  // data/crypto.json
  var require_crypto = __commonJS({
    "data/crypto.json"(exports, module) {
      module.exports = {
        AAVE: {
          name: "Aave",
          dp: 8
        },
        ADA: {
          name: "Cardano",
          dp: 8
        },
        ALGO: {
          name: "Algorand",
          dp: 8
        },
        ALINK: {
          name: "ALINK",
          dp: 8
        },
        ALPHA: {
          name: "ALPHA",
          dp: 8
        },
        AMPL: {
          name: "AMPL",
          dp: 8
        },
        ATOM: {
          name: "Cosmos",
          dp: 8
        },
        AVAX: {
          name: "Avalanche",
          dp: 8
        },
        BAL: {
          name: "BAL",
          dp: 8
        },
        BAND: {
          name: "BAND",
          dp: 8
        },
        BAT: {
          name: "BAT",
          dp: 8
        },
        BCH: {
          name: "Bitcoin Cash",
          dp: 8
        },
        BNB: {
          name: "Binance Coin",
          dp: 8
        },
        BSV: {
          name: "BSV",
          dp: 8
        },
        BTC: {
          name: "Bitcoin",
          dp: 8
        },
        BTT: {
          name: "BTT",
          dp: 8
        },
        BUSD: {
          name: "Binance USD",
          dp: 8
        },
        CDAI: {
          name: "Compound Dai",
          dp: 8
        },
        CEL: {
          name: "CEL",
          dp: 8
        },
        CELO: {
          name: "CELO",
          dp: 8
        },
        CETH: {
          name: "Compound Ether",
          dp: 8
        },
        CHSB: {
          name: "CHSB",
          dp: 8
        },
        COMP: {
          name: "COMP",
          dp: 8
        },
        CRO: {
          name: "Crypto.com Chain",
          dp: 8
        },
        CRV: {
          name: "CRV",
          dp: 8
        },
        CUSDC: {
          name: "CUSDC",
          dp: 8
        },
        DAI: {
          name: "Dai",
          dp: 8
        },
        DASH: {
          name: "DASH",
          dp: 8
        },
        DCR: {
          name: "DCR",
          dp: 8
        },
        DGB: {
          name: "DGB",
          dp: 8
        },
        DOGE: {
          name: "Dogecoin",
          dp: 8
        },
        DOT: {
          name: "Polkadot",
          dp: 8
        },
        EGLD: {
          name: "Elrond",
          dp: 8
        },
        ENJ: {
          name: "ENJ",
          dp: 8
        },
        EOS: {
          name: "EOS",
          dp: 8
        },
        ETC: {
          name: "Ethereum Classic",
          dp: 8
        },
        ETH: {
          name: "Ethereum",
          dp: 8
        },
        FIL: {
          name: "FIL",
          dp: 8
        },
        FTM: {
          name: "Fantom",
          dp: 8
        },
        FTT: {
          name: "FTX Token",
          dp: 8
        },
        GRT: {
          name: "GRT",
          dp: 8
        },
        HBAR: {
          name: "Hedera HashGraph",
          dp: 8
        },
        HBTC: {
          name: "HBTC",
          dp: 8
        },
        HT: {
          name: "HT",
          dp: 8
        },
        HUSD: {
          name: "HUSD",
          dp: 8
        },
        ICX: {
          name: "ICX",
          dp: 8
        },
        IOST: {
          name: "IOST",
          dp: 8
        },
        KNC: {
          name: "KNC",
          dp: 8
        },
        KSM: {
          name: "KSM",
          dp: 8
        },
        LEO: {
          name: "LEO",
          dp: 8
        },
        LINK: {
          name: "Chainlink",
          dp: 8
        },
        LRC: {
          name: "LRC",
          dp: 8
        },
        LTC: {
          name: "Litecoin",
          dp: 8
        },
        LUNA: {
          name: "Terra",
          dp: 8
        },
        MDX: {
          name: "MDX",
          dp: 8
        },
        MIOTA: {
          name: "MIOTA",
          dp: 8
        },
        MKR: {
          name: "MKR",
          dp: 8
        },
        NANO: {
          name: "NANO",
          dp: 8
        },
        NEO: {
          name: "NEO",
          dp: 8
        },
        NEXO: {
          name: "NEXO",
          dp: 8
        },
        NXM: {
          name: "NXM",
          dp: 8
        },
        OKB: {
          name: "OKB",
          dp: 8
        },
        OMG: {
          name: "OMG",
          dp: 8
        },
        ONT: {
          name: "ONT",
          dp: 8
        },
        PAX: {
          name: "PAX",
          dp: 8
        },
        QNT: {
          name: "QNT",
          dp: 8
        },
        QTUM: {
          name: "QTUM",
          dp: 8
        },
        REN: {
          name: "REN",
          dp: 8
        },
        RENBTC: {
          name: "RENBTC",
          dp: 8
        },
        RSR: {
          name: "RSR",
          dp: 8
        },
        RUNE: {
          name: "RUNE",
          dp: 8
        },
        SC: {
          name: "SC",
          dp: 8
        },
        SNX: {
          name: "SNX",
          dp: 8
        },
        SOL: {
          name: "Solana",
          dp: 8
        },
        STX: {
          name: "STX",
          dp: 8
        },
        SUSHI: {
          name: "SUSHI",
          dp: 8
        },
        THETA: {
          name: "Theta Token",
          dp: 8
        },
        TRX: {
          name: "TRON",
          dp: 8
        },
        TUSD: {
          name: "TUSD",
          dp: 8
        },
        UMA: {
          name: "UMA",
          dp: 8
        },
        UNI: {
          name: "Uniswap",
          dp: 8
        },
        USDC: {
          name: "USDC",
          dp: 8
        },
        USDT: {
          name: "Tether USD",
          dp: 8
        },
        UST: {
          name: "UST",
          dp: 8
        },
        VET: {
          name: "VeChain",
          dp: 8
        },
        VGX: {
          name: "VGX",
          dp: 8
        },
        WAVES: {
          name: "WAVES",
          dp: 8
        },
        WBTC: {
          name: "Wrapped BTC",
          dp: 8
        },
        XEM: {
          name: "XEM",
          dp: 8
        },
        XLM: {
          name: "Stellar",
          dp: 8
        },
        XMR: {
          name: "Monero",
          dp: 8
        },
        XRP: {
          name: "XRP",
          dp: 8
        },
        XTZ: {
          name: "Tezos",
          dp: 8
        },
        XVG: {
          name: "XVG",
          dp: 8
        },
        YFI: {
          name: "YFI",
          dp: 8
        },
        ZEC: {
          name: "ZEC",
          dp: 8
        },
        ZEN: {
          name: "ZEN",
          dp: 8
        },
        ZIL: {
          name: "ZIL",
          dp: 8
        },
        ZRX: {
          name: "ZRX",
          dp: 8
        }
      };
    }
  });

  // node_modules/big.js/big.js
  var require_big = __commonJS({
    "node_modules/big.js/big.js"(exports, module) {
      (function(GLOBAL) {
        "use strict";
        var Big2, DP = 20, RM = 1, MAX_DP = 1e6, MAX_POWER = 1e6, NE = -7, PE = 21, STRICT = false, NAME = "[big.js] ", INVALID = NAME + "Invalid ", INVALID_DP = INVALID + "decimal places", INVALID_RM = INVALID + "rounding mode", DIV_BY_ZERO = NAME + "Division by zero", P = {}, UNDEFINED = void 0, NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
        function _Big_() {
          function Big3(n) {
            var x = this;
            if (!(x instanceof Big3)) return n === UNDEFINED ? _Big_() : new Big3(n);
            if (n instanceof Big3) {
              x.s = n.s;
              x.e = n.e;
              x.c = n.c.slice();
            } else {
              if (typeof n !== "string") {
                if (Big3.strict === true) {
                  throw TypeError(INVALID + "number");
                }
                n = n === 0 && 1 / n < 0 ? "-0" : String(n);
              }
              parse2(x, n);
            }
            x.constructor = Big3;
          }
          Big3.prototype = P;
          Big3.DP = DP;
          Big3.RM = RM;
          Big3.NE = NE;
          Big3.PE = PE;
          Big3.strict = STRICT;
          Big3.roundDown = 0;
          Big3.roundHalfUp = 1;
          Big3.roundHalfEven = 2;
          Big3.roundUp = 3;
          return Big3;
        }
        function parse2(x, n) {
          var e, i, nl;
          if (!NUMERIC.test(n)) {
            throw Error(INVALID + "number");
          }
          x.s = n.charAt(0) == "-" ? (n = n.slice(1), -1) : 1;
          if ((e = n.indexOf(".")) > -1) n = n.replace(".", "");
          if ((i = n.search(/e/i)) > 0) {
            if (e < 0) e = i;
            e += +n.slice(i + 1);
            n = n.substring(0, i);
          } else if (e < 0) {
            e = n.length;
          }
          nl = n.length;
          for (i = 0; i < nl && n.charAt(i) == "0"; ) ++i;
          if (i == nl) {
            x.c = [x.e = 0];
          } else {
            for (; nl > 0 && n.charAt(--nl) == "0"; ) ;
            x.e = e - i - 1;
            x.c = [];
            for (e = 0; i <= nl; ) x.c[e++] = +n.charAt(i++);
          }
          return x;
        }
        function round(x, sd, rm, more) {
          var xc = x.c;
          if (rm === UNDEFINED) rm = x.constructor.RM;
          if (rm !== 0 && rm !== 1 && rm !== 2 && rm !== 3) {
            throw Error(INVALID_RM);
          }
          if (sd < 1) {
            more = rm === 3 && (more || !!xc[0]) || sd === 0 && (rm === 1 && xc[0] >= 5 || rm === 2 && (xc[0] > 5 || xc[0] === 5 && (more || xc[1] !== UNDEFINED)));
            xc.length = 1;
            if (more) {
              x.e = x.e - sd + 1;
              xc[0] = 1;
            } else {
              xc[0] = x.e = 0;
            }
          } else if (sd < xc.length) {
            more = rm === 1 && xc[sd] >= 5 || rm === 2 && (xc[sd] > 5 || xc[sd] === 5 && (more || xc[sd + 1] !== UNDEFINED || xc[sd - 1] & 1)) || rm === 3 && (more || !!xc[0]);
            xc.length = sd--;
            if (more) {
              for (; ++xc[sd] > 9; ) {
                xc[sd] = 0;
                if (!sd--) {
                  ++x.e;
                  xc.unshift(1);
                }
              }
            }
            for (sd = xc.length; !xc[--sd]; ) xc.pop();
          }
          return x;
        }
        function stringify(x, doExponential, isNonzero) {
          var e = x.e, s = x.c.join(""), n = s.length;
          if (doExponential) {
            s = s.charAt(0) + (n > 1 ? "." + s.slice(1) : "") + (e < 0 ? "e" : "e+") + e;
          } else if (e < 0) {
            for (; ++e; ) s = "0" + s;
            s = "0." + s;
          } else if (e > 0) {
            if (++e > n) {
              for (e -= n; e--; ) s += "0";
            } else if (e < n) {
              s = s.slice(0, e) + "." + s.slice(e);
            }
          } else if (n > 1) {
            s = s.charAt(0) + "." + s.slice(1);
          }
          return x.s < 0 && isNonzero ? "-" + s : s;
        }
        P.abs = function() {
          var x = new this.constructor(this);
          x.s = 1;
          return x;
        };
        P.cmp = function(y) {
          var isneg, x = this, xc = x.c, yc = (y = new x.constructor(y)).c, i = x.s, j = y.s, k = x.e, l = y.e;
          if (!xc[0] || !yc[0]) return !xc[0] ? !yc[0] ? 0 : -j : i;
          if (i != j) return i;
          isneg = i < 0;
          if (k != l) return k > l ^ isneg ? 1 : -1;
          j = (k = xc.length) < (l = yc.length) ? k : l;
          for (i = -1; ++i < j; ) {
            if (xc[i] != yc[i]) return xc[i] > yc[i] ^ isneg ? 1 : -1;
          }
          return k == l ? 0 : k > l ^ isneg ? 1 : -1;
        };
        P.div = function(y) {
          var x = this, Big3 = x.constructor, a = x.c, b = (y = new Big3(y)).c, k = x.s == y.s ? 1 : -1, dp = Big3.DP;
          if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
            throw Error(INVALID_DP);
          }
          if (!b[0]) {
            throw Error(DIV_BY_ZERO);
          }
          if (!a[0]) {
            y.s = k;
            y.c = [y.e = 0];
            return y;
          }
          var bl, bt, n, cmp, ri, bz = b.slice(), ai = bl = b.length, al = a.length, r = a.slice(0, bl), rl = r.length, q = y, qc = q.c = [], qi = 0, p = dp + (q.e = x.e - y.e) + 1;
          q.s = k;
          k = p < 0 ? 0 : p;
          bz.unshift(0);
          for (; rl++ < bl; ) r.push(0);
          do {
            for (n = 0; n < 10; n++) {
              if (bl != (rl = r.length)) {
                cmp = bl > rl ? 1 : -1;
              } else {
                for (ri = -1, cmp = 0; ++ri < bl; ) {
                  if (b[ri] != r[ri]) {
                    cmp = b[ri] > r[ri] ? 1 : -1;
                    break;
                  }
                }
              }
              if (cmp < 0) {
                for (bt = rl == bl ? b : bz; rl; ) {
                  if (r[--rl] < bt[rl]) {
                    ri = rl;
                    for (; ri && !r[--ri]; ) r[ri] = 9;
                    --r[ri];
                    r[rl] += 10;
                  }
                  r[rl] -= bt[rl];
                }
                for (; !r[0]; ) r.shift();
              } else {
                break;
              }
            }
            qc[qi++] = cmp ? n : ++n;
            if (r[0] && cmp) r[rl] = a[ai] || 0;
            else r = [a[ai]];
          } while ((ai++ < al || r[0] !== UNDEFINED) && k--);
          if (!qc[0] && qi != 1) {
            qc.shift();
            q.e--;
            p--;
          }
          if (qi > p) round(q, p, Big3.RM, r[0] !== UNDEFINED);
          return q;
        };
        P.eq = function(y) {
          return this.cmp(y) === 0;
        };
        P.gt = function(y) {
          return this.cmp(y) > 0;
        };
        P.gte = function(y) {
          return this.cmp(y) > -1;
        };
        P.lt = function(y) {
          return this.cmp(y) < 0;
        };
        P.lte = function(y) {
          return this.cmp(y) < 1;
        };
        P.minus = P.sub = function(y) {
          var i, j, t, xlty, x = this, Big3 = x.constructor, a = x.s, b = (y = new Big3(y)).s;
          if (a != b) {
            y.s = -b;
            return x.plus(y);
          }
          var xc = x.c.slice(), xe = x.e, yc = y.c, ye = y.e;
          if (!xc[0] || !yc[0]) {
            if (yc[0]) {
              y.s = -b;
            } else if (xc[0]) {
              y = new Big3(x);
            } else {
              y.s = 1;
            }
            return y;
          }
          if (a = xe - ye) {
            if (xlty = a < 0) {
              a = -a;
              t = xc;
            } else {
              ye = xe;
              t = yc;
            }
            t.reverse();
            for (b = a; b--; ) t.push(0);
            t.reverse();
          } else {
            j = ((xlty = xc.length < yc.length) ? xc : yc).length;
            for (a = b = 0; b < j; b++) {
              if (xc[b] != yc[b]) {
                xlty = xc[b] < yc[b];
                break;
              }
            }
          }
          if (xlty) {
            t = xc;
            xc = yc;
            yc = t;
            y.s = -y.s;
          }
          if ((b = (j = yc.length) - (i = xc.length)) > 0) for (; b--; ) xc[i++] = 0;
          for (b = i; j > a; ) {
            if (xc[--j] < yc[j]) {
              for (i = j; i && !xc[--i]; ) xc[i] = 9;
              --xc[i];
              xc[j] += 10;
            }
            xc[j] -= yc[j];
          }
          for (; xc[--b] === 0; ) xc.pop();
          for (; xc[0] === 0; ) {
            xc.shift();
            --ye;
          }
          if (!xc[0]) {
            y.s = 1;
            xc = [ye = 0];
          }
          y.c = xc;
          y.e = ye;
          return y;
        };
        P.mod = function(y) {
          var ygtx, x = this, Big3 = x.constructor, a = x.s, b = (y = new Big3(y)).s;
          if (!y.c[0]) {
            throw Error(DIV_BY_ZERO);
          }
          x.s = y.s = 1;
          ygtx = y.cmp(x) == 1;
          x.s = a;
          y.s = b;
          if (ygtx) return new Big3(x);
          a = Big3.DP;
          b = Big3.RM;
          Big3.DP = Big3.RM = 0;
          x = x.div(y);
          Big3.DP = a;
          Big3.RM = b;
          return this.minus(x.times(y));
        };
        P.plus = P.add = function(y) {
          var e, k, t, x = this, Big3 = x.constructor;
          y = new Big3(y);
          if (x.s != y.s) {
            y.s = -y.s;
            return x.minus(y);
          }
          var xe = x.e, xc = x.c, ye = y.e, yc = y.c;
          if (!xc[0] || !yc[0]) {
            if (!yc[0]) {
              if (xc[0]) {
                y = new Big3(x);
              } else {
                y.s = x.s;
              }
            }
            return y;
          }
          xc = xc.slice();
          if (e = xe - ye) {
            if (e > 0) {
              ye = xe;
              t = yc;
            } else {
              e = -e;
              t = xc;
            }
            t.reverse();
            for (; e--; ) t.push(0);
            t.reverse();
          }
          if (xc.length - yc.length < 0) {
            t = yc;
            yc = xc;
            xc = t;
          }
          e = yc.length;
          for (k = 0; e; xc[e] %= 10) k = (xc[--e] = xc[e] + yc[e] + k) / 10 | 0;
          if (k) {
            xc.unshift(k);
            ++ye;
          }
          for (e = xc.length; xc[--e] === 0; ) xc.pop();
          y.c = xc;
          y.e = ye;
          return y;
        };
        P.pow = function(n) {
          var x = this, one = new x.constructor("1"), y = one, isneg = n < 0;
          if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) {
            throw Error(INVALID + "exponent");
          }
          if (isneg) n = -n;
          for (; ; ) {
            if (n & 1) y = y.times(x);
            n >>= 1;
            if (!n) break;
            x = x.times(x);
          }
          return isneg ? one.div(y) : y;
        };
        P.prec = function(sd, rm) {
          if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
            throw Error(INVALID + "precision");
          }
          return round(new this.constructor(this), sd, rm);
        };
        P.round = function(dp, rm) {
          if (dp === UNDEFINED) dp = 0;
          else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP) {
            throw Error(INVALID_DP);
          }
          return round(new this.constructor(this), dp + this.e + 1, rm);
        };
        P.sqrt = function() {
          var r, c, t, x = this, Big3 = x.constructor, s = x.s, e = x.e, half = new Big3("0.5");
          if (!x.c[0]) return new Big3(x);
          if (s < 0) {
            throw Error(NAME + "No square root");
          }
          s = Math.sqrt(x + "");
          if (s === 0 || s === 1 / 0) {
            c = x.c.join("");
            if (!(c.length + e & 1)) c += "0";
            s = Math.sqrt(c);
            e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
            r = new Big3((s == 1 / 0 ? "5e" : (s = s.toExponential()).slice(0, s.indexOf("e") + 1)) + e);
          } else {
            r = new Big3(s + "");
          }
          e = r.e + (Big3.DP += 4);
          do {
            t = r;
            r = half.times(t.plus(x.div(t)));
          } while (t.c.slice(0, e).join("") !== r.c.slice(0, e).join(""));
          return round(r, (Big3.DP -= 4) + r.e + 1, Big3.RM);
        };
        P.times = P.mul = function(y) {
          var c, x = this, Big3 = x.constructor, xc = x.c, yc = (y = new Big3(y)).c, a = xc.length, b = yc.length, i = x.e, j = y.e;
          y.s = x.s == y.s ? 1 : -1;
          if (!xc[0] || !yc[0]) {
            y.c = [y.e = 0];
            return y;
          }
          y.e = i + j;
          if (a < b) {
            c = xc;
            xc = yc;
            yc = c;
            j = a;
            a = b;
            b = j;
          }
          for (c = new Array(j = a + b); j--; ) c[j] = 0;
          for (i = b; i--; ) {
            b = 0;
            for (j = a + i; j > i; ) {
              b = c[j] + yc[i] * xc[j - i - 1] + b;
              c[j--] = b % 10;
              b = b / 10 | 0;
            }
            c[j] = b;
          }
          if (b) ++y.e;
          else c.shift();
          for (i = c.length; !c[--i]; ) c.pop();
          y.c = c;
          return y;
        };
        P.toExponential = function(dp, rm) {
          var x = this, n = x.c[0];
          if (dp !== UNDEFINED) {
            if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
              throw Error(INVALID_DP);
            }
            x = round(new x.constructor(x), ++dp, rm);
            for (; x.c.length < dp; ) x.c.push(0);
          }
          return stringify(x, true, !!n);
        };
        P.toFixed = function(dp, rm) {
          var x = this, n = x.c[0];
          if (dp !== UNDEFINED) {
            if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
              throw Error(INVALID_DP);
            }
            x = round(new x.constructor(x), dp + x.e + 1, rm);
            for (dp = dp + x.e + 1; x.c.length < dp; ) x.c.push(0);
          }
          return stringify(x, false, !!n);
        };
        P.toJSON = P.toString = function() {
          var x = this, Big3 = x.constructor;
          return stringify(x, x.e <= Big3.NE || x.e >= Big3.PE, !!x.c[0]);
        };
        P.toNumber = function() {
          var n = Number(stringify(this, true, true));
          if (this.constructor.strict === true && !this.eq(n.toString())) {
            throw Error(NAME + "Imprecise conversion");
          }
          return n;
        };
        P.toPrecision = function(sd, rm) {
          var x = this, Big3 = x.constructor, n = x.c[0];
          if (sd !== UNDEFINED) {
            if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
              throw Error(INVALID + "precision");
            }
            x = round(new Big3(x), sd, rm);
            for (; x.c.length < sd; ) x.c.push(0);
          }
          return stringify(x, sd <= x.e || x.e <= Big3.NE || x.e >= Big3.PE, !!n);
        };
        P.valueOf = function() {
          var x = this, Big3 = x.constructor;
          if (Big3.strict === true) {
            throw Error(NAME + "valueOf disallowed");
          }
          return stringify(x, x.e <= Big3.NE || x.e >= Big3.PE, true);
        };
        Big2 = _Big_();
        Big2["default"] = Big2.Big = Big2;
        if (typeof define === "function" && define.amd) {
          define(function() {
            return Big2;
          });
        } else if (typeof module !== "undefined" && module.exports) {
          module.exports = Big2;
        } else {
          GLOBAL.Big = Big2;
        }
      })(exports);
    }
  });

  // web/runtime-client.ts
  var runtime_client_exports = {};

  // currencies.ts
  var currencies = require_currencies();
  var cryptoCurrencies = require_crypto();
  var currenciesList = new Set(Object.keys(currencies).concat(Object.keys(cryptoCurrencies)));
  var currencySignsToCode = /* @__PURE__ */ new Map();
  currencySignsToCode.set("$", "USD");
  currencySignsToCode.set("\uFF04", "USD");
  currencySignsToCode.set("\uFE69", "USD");
  currencySignsToCode.set("\u20BD", "RUB");
  currencySignsToCode.set("\u20AC", "EUR");
  currencySignsToCode.set("\xA3", "GBP");
  currencySignsToCode.set("\u0E3F", "THB");
  currencySignsToCode.set("\xA5", "JPY");
  currencySignsToCode.set("\u20A3", "FRF");
  currencySignsToCode.set("\u20A9", "KRW");
  var currencySigns = new Set(currencySignsToCode.keys());
  var currencyWordsToCode = [
    [/^dollars?$/i, "USD"],
    [/^ro?ubl(es?)?$/i, "RUB"],
    [/^euros?$/i, "EUR"],
    [/^baht$/i, "THB"],
    [/^bitcoins?$/i, "BTC"],
    [/^руб(л(ь|и|ей|ях?|ями?)?)?$/i, "RUB"],
    [/^доллар(ы|ов|ами?|ах)?$/i, "USD"],
    [/^бат(ах)?$/i, "THB"],
    [/^битко[йи]н(ы|ами?|ов|ах)?$/i, "BTC"]
  ];
  function findCurrencyCodeByWord(word2) {
    for (let [r, code] of currencyWordsToCode) {
      if (r.test(word2)) return code;
    }
    return void 0;
  }
  function findCurrencyCode(word2) {
    word2 = word2.toUpperCase();
    let code = currencySignsToCode.get(word2);
    if (code) return code;
    code = findCurrencyCodeByWord(word2);
    if (code) return code;
    if (currenciesList.has(word2)) return word2;
    return void 0;
  }
  function findCurrencyInfo(code) {
    return currencies[code] || cryptoCurrencies[code] || void 0;
  }

  // operators.ts
  var operators = {
    addition: /* @__PURE__ */ new Set(["+", "-", "\u2212"]),
    multiplication: /* @__PURE__ */ new Set(["*", "x", "\u0445", "\xD7", "/", "%"]),
    into: /* @__PURE__ */ new Set(["in", "to", "\u0432"]),
    of: /* @__PURE__ */ new Set(["of", "\u043E\u0442"]),
    sum: /* @__PURE__ */ new Set(["sum", "total"])
  };
  var allOperators = /* @__PURE__ */ new Set();
  for (let s of Object.values(operators))
    for (let op of s)
      allOperators.add(op);

  // nodes.ts
  var import_big = __toESM(require_big());

  // results.ts
  var Nothing = class {
    constructor() {
      this.kind = "nil";
    }
  };
  var Numbr = class {
    constructor(value, currency) {
      this.value = value;
      this.currency = currency;
      this.kind = "numbr";
      if (currency?.toUpperCase() != currency) {
        throw new Error(`The currency ${currency} is in lowercase!`);
      }
    }
    get hasCurrency() {
      return this.currency != void 0;
    }
  };
  var Percent = class {
    constructor(value) {
      this.value = value;
      this.kind = "percent";
    }
  };
  var Header = class {
    constructor(title) {
      this.title = title;
      this.kind = "header";
    }
  };

  // apply.ts
  function apply(op, x, y, rates) {
    if (x.currency == void 0 || y.currency == void 0) {
      return new Numbr(op(x.value, y.value), y.currency || x.currency);
    }
    if (x.currency == y.currency) {
      return new Numbr(op(x.value, y.value), y.currency);
    }
    if (rates[x.currency] == void 0 || rates[y.currency] == void 0) {
      throw new Error(`No currency rates for ${x.currency}/${y.currency}.`);
    }
    return new Numbr(op(x.value.mul(rates[x.currency]).div(rates[y.currency]), y.value), y.currency);
  }

  // nodes.ts
  var Currency = class {
    constructor(token) {
      this.token = token;
      this.kind = "currency";
    }
    evaluate(ctx) {
      return new Nothing();
    }
    toCurrencyCode() {
      return findCurrencyCode(this.token.value);
    }
    highlight() {
      let name;
      let code = this.toCurrencyCode();
      if (code) {
        name = findCurrencyInfo(code)?.name;
      }
      let markup = [];
      markup.push([this.token.start, this.token.end, "currency", name]);
      return markup;
    }
    toString() {
      return this.toCurrencyCode() || "???";
    }
  };
  var Nil = class {
    constructor() {
      this.kind = "nil";
    }
    evaluate(ctx) {
      return new Nothing();
    }
    highlight() {
      return [];
    }
    toString() {
      return "nil";
    }
  };
  var Value = class {
    constructor(value, currency) {
      this.value = value;
      this.currency = currency;
      this.kind = "value";
    }
    evaluate(ctx) {
      let s = this.value.value;
      let multiplier = 1;
      if (/k$/.test(s)) multiplier = 1e3;
      if (/M$/.test(s)) multiplier = 1e6;
      if (s == "\u{1F4AF}") s = "100";
      s = s.replace(/[\s,'_]/g, "").replace(/k$/, "").replace(/M$/, "");
      return new Numbr((0, import_big.default)(s).mul(multiplier), this.currency?.toCurrencyCode());
    }
    highlight() {
      let markup = [];
      markup.push([this.value.start, this.value.end, "number"]);
      markup.push(...this.currency?.highlight() || []);
      return markup;
    }
    toString() {
      return this.value.value + (this.currency?.toString() || "");
    }
  };
  var Percentage = class {
    constructor(value) {
      this.value = value;
      this.kind = "percentage";
    }
    evaluate(ctx) {
      let s = this.value.value.substring(0, this.value.value.length - 1);
      return new Percent((0, import_big.default)(s));
    }
    highlight() {
      let markup = [];
      markup.push([this.value.start, this.value.end - 1, "number"]);
      markup.push([this.value.end - 1, this.value.end, "operator"]);
      return markup;
    }
    toString() {
      return this.value.value;
    }
  };
  var Sum = class {
    constructor(token) {
      this.token = token;
      this.kind = "sum";
    }
    evaluate(ctx) {
      let { rates, answers, line } = ctx;
      let sum = new Numbr((0, import_big.default)(0));
      for (let i = line - 1; i >= 0; i--) {
        if (answers[i] instanceof Header) {
          break;
        }
        if (answers[i] == void 0 || answers[i] instanceof Nothing) {
          continue;
        }
        if (answers[i] instanceof Numbr) {
          sum = apply((x, y) => x.add(y), sum, answers[i], rates);
        } else {
          return new Nothing();
        }
      }
      return sum;
    }
    highlight() {
      let markup = [];
      markup.push([this.token.start, this.token.end, "operator"]);
      return markup;
    }
    toString() {
      return this.token.value;
    }
  };
  var Unary = class {
    constructor(op, node) {
      this.op = op;
      this.node = node;
      this.kind = "unary";
    }
    evaluate(ctx) {
      let v = this.node.evaluate(ctx);
      if (this.op.value == "-" || this.op.value == "\u2212") {
        if (v instanceof Numbr) {
          return new Numbr(v.value.mul(-1), v.currency);
        }
        if (v instanceof Percent) {
          return new Percent(v.value.mul(-1));
        }
      }
      return v;
    }
    highlight() {
      let markup = [];
      markup.push([this.op.start, this.op.end, "operator"]);
      markup.push(...this.node.highlight());
      return markup;
    }
    toString() {
      return `${this.op.value}(${this.node.toString()})`;
    }
  };
  var Binary = class {
    constructor(op, left, right) {
      this.op = op;
      this.left = left;
      this.right = right;
      this.kind = "binary";
    }
    evaluate(ctx) {
      let rates = ctx.rates;
      let a = this.left.evaluate(ctx);
      let b = this.right.evaluate(ctx);
      if (b instanceof Nothing) {
        return a;
      }
      switch (this.op.value) {
        case "+":
          if (a instanceof Numbr && b instanceof Numbr) {
            return apply((x, y) => x.add(y), a, b, rates);
          }
          if (a instanceof Numbr && b instanceof Percent) {
            return new Numbr(a.value.mul((0, import_big.default)(1).add(b.value.div(100))), a.currency);
          }
          if (a instanceof Percent && b instanceof Percent) {
            return new Percent(a.value.add(b.value));
          }
          if (a instanceof Percent && b instanceof Numbr) {
            return new Nothing();
          }
          break;
        case "-":
        case "\u2212":
          if (a instanceof Numbr && b instanceof Numbr) {
            return apply((x, y) => x.minus(y), a, b, rates);
          }
          if (a instanceof Numbr && b instanceof Percent) {
            return new Numbr(a.value.mul((0, import_big.default)(1).minus(b.value.div(100))), a.currency);
          }
          if (a instanceof Percent && b instanceof Numbr) {
            return new Nothing();
          }
          if (a instanceof Percent && b instanceof Percent) {
            return new Percent(a.value.minus(b.value));
          }
          break;
        case "*":
        case "x":
        case "\u0445":
        case "\xD7":
          if (a instanceof Numbr && b instanceof Numbr) {
            return apply((x, y) => x.mul(y), a, b, rates);
          }
          if (a instanceof Numbr && b instanceof Percent) {
            return new Numbr(a.value.mul(b.value).div(100), a.currency);
          }
          if (a instanceof Percent && b instanceof Numbr) {
            return new Percent(a.value.mul(b.value));
          }
          if (a instanceof Percent && b instanceof Percent) {
            return new Percent(a.value.mul(b.value));
          }
          break;
        case "/":
          if (a instanceof Numbr && b instanceof Numbr) {
            let c = apply((x, y) => x.div(y), a, b, rates);
            if (a.hasCurrency && b.hasCurrency) {
              c.currency = void 0;
            }
            return c;
          }
          if (a instanceof Numbr && b instanceof Percent) {
            return new Nothing();
          }
          if (a instanceof Percent && b instanceof Numbr) {
            return new Percent(a.value.div(b.value));
          }
          if (a instanceof Percent && b instanceof Percent) {
            return new Percent(a.value.div(b.value));
          }
          break;
        case "%":
          if (a instanceof Numbr && b instanceof Numbr) {
            return apply((x, y) => x.mod(y), a, b, rates);
          }
          if (a instanceof Numbr && b instanceof Percent) {
            return new Nothing();
          }
          if (a instanceof Percent && b instanceof Numbr) {
            return new Nothing();
          }
          if (a instanceof Percent && b instanceof Percent) {
            return new Percent(a.value.mod(b.value));
          }
          break;
        case "^":
          if (a instanceof Numbr && b instanceof Numbr) {
            return apply((x, y) => x.pow(+y), a, b, rates);
          }
          if (a instanceof Numbr && b instanceof Percent) {
            return new Nothing();
          }
          if (a instanceof Percent && b instanceof Numbr) {
            return new Nothing();
          }
          if (a instanceof Percent && b instanceof Percent) {
            return new Percent(a.value.pow(+b.value));
          }
          break;
      }
      return new Nothing();
    }
    highlight() {
      let markup = [];
      markup.push([this.op.start, this.op.end, "operator"]);
      markup.push(...this.left.highlight());
      markup.push(...this.right.highlight());
      return markup;
    }
    toString() {
      return `(${this.left.toString()} ${this.op.value} ${this.right.toString()})`;
    }
  };
  var Conversion = class {
    constructor(op, node, currency) {
      this.op = op;
      this.node = node;
      this.currency = currency;
      this.kind = "conversion";
    }
    evaluate(ctx) {
      let rates = ctx.rates;
      let a = this.node.evaluate(ctx);
      let currencyCode = this.currency.toCurrencyCode();
      if (a instanceof Numbr) {
        if (a.currency == void 0) {
          return new Numbr(a.value, currencyCode);
        }
        if (currencyCode == void 0) {
          return a;
        }
        if (rates[a.currency] == void 0 || rates[currencyCode] == void 0) {
          return a;
        }
        return new Numbr(a.value.mul(rates[a.currency]).div(rates[currencyCode]), currencyCode);
      }
      if (a instanceof Percent) {
        return new Percent(a.value);
      }
      return new Nothing();
    }
    highlight() {
      let markup = [];
      if (this.op) markup.push([this.op.start, this.op.end, "operator"]);
      markup.push(...this.node.highlight());
      markup.push(...this.currency.highlight());
      return markup;
    }
    toString() {
      return `(${this.node.toString()} ${this.op?.value} ${this.currency.toString()})`;
    }
  };
  var Fraction = class {
    constructor(op, left, right) {
      this.op = op;
      this.left = left;
      this.right = right;
      this.kind = "fraction";
    }
    evaluate(ctx) {
      let a = this.left.evaluate(ctx);
      let b = this.right.evaluate(ctx);
      if (a instanceof Numbr && b instanceof Numbr) {
        return new Numbr(b.value.mul(a.value).div(100), b.currency);
      }
      if (a instanceof Percent && b instanceof Numbr) {
        return new Numbr(b.value.mul(a.value).div(100), b.currency);
      }
      if (a instanceof Percent && b instanceof Percent) {
        return new Percent(b.value.mul(a.value).div(100));
      }
      return new Nothing();
    }
    highlight() {
      let markup = [];
      markup.push([this.op.start, this.op.end, "operator"]);
      markup.push(...this.left.highlight());
      markup.push(...this.right.highlight());
      return markup;
    }
    toString() {
      return `(${this.left.toString()} ${this.op.value} ${this.right.toString()})`;
    }
  };
  var Assignment = class {
    constructor(op, variable, node) {
      this.op = op;
      this.variable = variable;
      this.node = node;
      this.kind = "assignment";
    }
    evaluate(ctx) {
      let a = this.node.evaluate(ctx);
      globalThis[tokenToVariableName(this.variable)] = a;
      return a;
    }
    highlight() {
      let markup = [];
      markup.push([this.variable.start, this.variable.end, "variable"]);
      markup.push([this.op.start, this.op.end, "operator"]);
      markup.push(...this.node.highlight());
      return markup;
    }
    toString() {
      return `TODO ${this.op.value} ${this.node.toString()})`;
    }
  };
  var Variable = class {
    constructor(token) {
      this.token = token;
      this.kind = "variable";
    }
    evaluate(ctx) {
      let result = globalThis[tokenToVariableName(this.token)];
      if (Number.isFinite(result)) {
        return new Numbr(result);
      }
      return result;
    }
    highlight() {
      let markup = [];
      markup.push([this.token.start, this.token.end, "variable"]);
      return markup;
    }
    toString() {
      return this.token.value;
    }
  };
  var Reference = class {
    constructor(token) {
      this.token = token;
      this.kind = "reference";
    }
    evaluate(ctx) {
      return new Nothing();
    }
    highlight() {
      return [];
    }
    toString() {
      return this.token.value;
    }
  };

  // parser/variables.ts
  function tokenToVariableName(t) {
    return t.value.toLowerCase();
  }
  function updateVars(vars, node) {
    if (node instanceof Assignment) {
      vars.push(tokenToVariableName(node.variable));
    }
  }
  function findVars(code, vars) {
    let map = /* @__PURE__ */ new Map();
    if (vars.length == 0) return map;
    vars.sort((a, b) => b.length - a.length);
    let regex = new RegExp(vars.join("|"), "ig");
    let matches = code.matchAll(regex);
    for (let m of matches) {
      if (m.index != void 0) map.set(m.index, m.index + m[0].length);
    }
    return map;
  }

  // parser/lex.ts
  var EOF = "";
  function lex(code, vars = []) {
    let l = new Lexer(
      Array.isArray(code) ? code : [...code],
      findVars(code, vars)
    );
    let colon = l.code.indexOf(":");
    if (colon != -1) {
      l.start = l.end = colon + 1;
    }
    let e = l.code.indexOf("=", l.end);
    if (e != -1) {
      let s = l.end;
      while (l.code[s] == " ") {
        s++;
      }
      while (l.code[e - 1] == " ") {
        e--;
      }
      let value = l.code.slice(s, e).join("");
      if (/^\p{L}[_ \p{L}\p{N}]*$/ui.test(value)) {
        l.tokens.push({ kind: "variable", value, start: s, end: e });
        l.start = l.end = e;
      }
    }
    let state = root;
    while (state) {
      state = state(l);
    }
    l.tokens.push({ kind: "eof", value: "", start: l.start, end: l.end });
    return l.tokens;
  }
  var Lexer = class {
    constructor(code, vars) {
      this.code = code;
      this.vars = vars;
      this.start = 0;
      this.end = 0;
      this.tokens = [];
    }
    next() {
      let ch = this.end < this.code.length ? this.code[this.end] : EOF;
      this.end++;
      return ch;
    }
    backup() {
      this.end--;
    }
    peek() {
      let ch = this.next();
      this.backup();
      return ch;
    }
    word() {
      return this.code.slice(this.start, this.end).join("");
    }
    emit(tag) {
      let word2 = this.word();
      let lower = word2.toLowerCase();
      if (tag == "word" && allOperators.has(lower)) {
        tag = "operator";
        word2 = lower;
      }
      this.tokens.push({ kind: tag, value: word2, start: this.start, end: this.end });
      this.start = this.end;
    }
    drop() {
      this.start = this.end;
    }
    accept(valid) {
      if (valid.test(this.next())) {
        return true;
      }
      this.backup();
      return false;
    }
    acceptRun(valid) {
      while (valid.test(this.next())) {
      }
      this.backup();
    }
  };
  function root(l) {
    let ch = l.next();
    if (ch == EOF) {
      return null;
    }
    let varEnd = l.vars.get(l.start);
    if (varEnd != void 0) {
      l.end = varEnd;
      l.emit("variable");
      return root;
    }
    if ("0" <= ch && ch <= "9") {
      l.backup();
      return number;
    }
    if (ch == "\u{1F4AF}") {
      l.emit("number");
      return root;
    }
    if (ch == ".") {
      if (/[0-9]/.test(l.peek())) {
        l.backup();
        return number;
      }
      l.emit("word");
      return root;
    }
    if ("()".includes(ch)) {
      l.emit("bracket");
      return root;
    }
    if ("+-\u2212*/%^=".includes(ch)) {
      l.emit("operator");
      return root;
    }
    if ("\xD7".includes(ch)) {
      l.emit("operator");
      return root;
    }
    if (ch == "\u0192") {
      if (l.accept(/ы/)) {
        scanNumber(l);
        l.emit("variable");
        return root;
      }
      l.emit("word");
      return root;
    }
    if (ch == "\u27E6") {
      let ch2;
      while ((ch2 = l.next()) != EOF) {
        if (ch2 == "\u27E7") {
          l.emit("reference");
          return root;
        }
      }
      l.emit("word");
      return root;
    }
    if (currencySigns.has(ch)) {
      l.emit("word");
      return root;
    }
    if (isAlphabetic(ch)) {
      l.backup();
      return word;
    }
    l.drop();
    return root;
  }
  function number(l) {
    scanNumber(l);
    if (l.accept(/%/)) {
      l.emit("percentage");
    } else {
      l.emit("number");
    }
    return root;
  }
  function word(l) {
    while (isAlphabetic(l.next())) {
    }
    l.backup();
    l.emit("word");
    return root;
  }
  function scanNumber(l) {
    let digits = /[0-9]/;
    l.acceptRun(digits);
    while (l.accept(/[\s,'_]/)) {
      if (l.accept(digits)) {
        l.acceptRun(digits);
      } else {
        l.backup();
        break;
      }
    }
    if (l.accept(/\./)) {
      l.acceptRun(digits);
    }
    l.accept(/[kM]/);
  }
  function isAlphabetic(r) {
    return r === "_" || /\p{Alphabetic}/u.test(r);
  }

  // parser/parser.ts
  var Parser = class {
    constructor(stream) {
      this.stream = stream;
      this.pos = 0;
      this.words = [];
      this.warnings = [];
      this.current = stream[0];
    }
    next() {
      if (this.pos < this.stream.length - 1) {
        this.pos++;
      } else {
        return;
      }
      this.previous = this.current;
      this.current = this.stream[this.pos];
      if (this.previous.kind == "word") {
        this.words.push(this.previous);
      } else {
        this.words = [];
      }
    }
    skip() {
      while (this.stream[this.pos].kind == "word") {
        this.words.push(this.stream[this.pos]);
        this.pos++;
      }
      this.current = this.stream[this.pos];
    }
    eof() {
      return this.current.kind == "eof";
    }
    is(kind, ...values) {
      return this.current.kind == kind && (values.includes(this.current.value) || values.length == 0);
    }
    isNext(kind, ...values) {
      let token = this.stream[this.pos + 1];
      return token.kind == kind && (values.includes(token.value) || values.length == 0);
    }
  };
  function parse(tokens) {
    let p = new Parser(tokens);
    return [assignment(p), p.warnings];
  }
  function assignment(p) {
    if (p.is("variable") && p.isNext("operator", "=")) {
      let variable = p.current;
      p.next();
      let op = p.current;
      p.next();
      let rhs = expression(p);
      return new Assignment(op, variable, rhs);
    }
    return expression(p);
  }
  function expression(p) {
    p.skip();
    let node = multiplication(p);
    while (p.is("operator")) {
      let op = p.current;
      let wordsBeforeOp = p.words.length;
      p.next();
      if (p.eof()) return node;
      if (operators.into.has(op.value)) {
        if (p.is("word")) {
          let currency = toCurrency(p.current);
          p.next();
          if (currency != void 0) {
            node = new Conversion(op, node, currency);
          }
          p.skip();
        }
      } else if (operators.of.has(op.value)) {
        if (wordsBeforeOp > 0) {
          p.skip();
          continue;
        }
        let rhs = multiplication(p);
        node = new Fraction(op, node, rhs);
      } else if (operators.addition.has(op.value)) {
        p.skip();
        let rhs = multiplication(p);
        node = new Binary(op, node, rhs);
      } else if (operators.multiplication.has(op.value)) {
        p.skip();
        let rhs = power(p);
        node = new Binary(op, node, rhs);
      }
    }
    return node;
  }
  function multiplication(p) {
    let node = power(p);
    while (p.is("operator", ...operators.multiplication)) {
      let op = p.current;
      p.next();
      p.skip();
      if (p.eof()) return node;
      let rhs = power(p);
      node = new Binary(op, node, rhs);
    }
    return node;
  }
  function power(p) {
    let node = unary(p);
    if (p.is("operator", "^")) {
      let op = p.current;
      p.next();
      p.skip();
      let rhs = power(p);
      node = new Binary(op, node, rhs);
    }
    return node;
  }
  function unary(p) {
    if (p.is("operator", "-", "\u2212", "+")) {
      let token = p.current;
      p.next();
      p.skip();
      return new Unary(token, unary(p));
    }
    return primary(p);
  }
  function primary(p) {
    if (p.is("bracket", "(")) {
      p.next();
      p.skip();
      let node = expression(p);
      if (p.is("bracket", ")")) {
        p.next();
        p.skip();
        if (p.eof()) return node;
      }
      return node;
    }
    return number2(p);
  }
  function toCurrency(token) {
    if (token == void 0) {
      return void 0;
    }
    let code = findCurrencyCode(token.value);
    if (code) {
      return new Currency(token);
    }
    return void 0;
  }
  function number2(p) {
    if (p.current.kind == "number") {
      let currency = toCurrency(p.words.length > 0 ? p.words[p.words.length - 1] : void 0);
      let node = new Value(p.current, currency);
      p.next();
      currency = toCurrency(p.current);
      if (currency) node.currency = currency;
      p.skip();
      return node;
    }
    if (p.is("variable")) {
      let currency = toCurrency(p.words.length > 0 ? p.words[p.words.length - 1] : void 0);
      let node = new Variable(p.current);
      p.next();
      currency = toCurrency(p.current) || currency;
      if (currency) node = new Conversion(void 0, node, currency);
      p.skip();
      return node;
    }
    if (p.is("percentage")) {
      let node = new Percentage(p.current);
      p.next();
      p.skip();
      return node;
    }
    if (p.is("reference")) {
      let currency = toCurrency(p.words.length > 0 ? p.words[p.words.length - 1] : void 0);
      let node = new Reference(p.current);
      p.next();
      currency = toCurrency(p.current) || currency;
      if (currency) node = new Conversion(void 0, node, currency);
      p.skip();
      return node;
    }
    if (p.is("operator", ...operators.sum)) {
      let node = new Sum(p.current);
      p.next();
      p.skip();
      return node;
    }
    p.next();
    if (p.eof()) return new Nil();
    return expression(p);
  }

  // runtime.ts
  var formatPresets = {
    "dot-thousand": { decimal: ".", thousand: "," },
    "comma-decimal": { decimal: ",", thousand: "." }
  };
  var defaultFormatKey = "dot-thousand";
  var defaultRates = {
    USD: 1,
    EUR: 0.92,
    GBP: 1.23,
    RUB: 0.013,
    THB: 0.027,
    BTC: 6e4,
    ETH: 3e3
  };
  function evaluateText(text, options = {}) {
    const format = options.format || formatPresets[options.formatKey || defaultFormatKey];
    const rates = options.rates || defaultRates;
    const answers = [];
    const lines = text.split(/\r?\n/);
    const knownVars = [];
    const scope = /* @__PURE__ */ Object.create(null);
    const ABSENT = Symbol("absent");
    const evaluateWithScope = (fn) => {
      const names = Object.keys(scope);
      const previous = /* @__PURE__ */ new Map();
      for (const name of names) {
        if (Object.prototype.hasOwnProperty.call(globalThis, name)) {
          previous.set(name, globalThis[name]);
        } else {
          previous.set(name, ABSENT);
        }
        ;
        globalThis[name] = scope[name];
      }
      try {
        return fn();
      } finally {
        for (const name of names) {
          const original = previous.get(name);
          if (original === ABSENT) {
            delete globalThis[name];
          } else {
            globalThis[name] = original;
          }
        }
      }
    };
    return lines.map((expression2, lineIndex) => {
      const trimmed = expression2.trim();
      if (trimmed.startsWith("#")) {
        const title = trimmed.replace(/^#+\s*/, "");
        const header = new Header(title);
        answers.push(header);
        return {
          expression: expression2,
          result: title,
          kind: "header",
          warnings: [],
          highlight: expression2.length > 0 ? [{ start: 0, end: expression2.length, tag: "header" }] : []
        };
      }
      if (trimmed.startsWith(":")) {
        const desc = trimmed.replace(/^:\s*/, "");
        answers.push(new Nothing());
        return {
          expression: expression2,
          result: desc,
          kind: "description",
          warnings: [],
          highlight: expression2.length > 0 ? [{ start: 0, end: expression2.length, tag: "description" }] : []
        };
      }
      if (trimmed.length === 0) {
        answers.push(new Nothing());
        return {
          expression: expression2,
          result: "",
          kind: "nothing",
          warnings: [],
          highlight: []
        };
      }
      try {
        const { normalized, map } = normalizeLine(expression2, format);
        const [node, warningsNormalized] = parse(lex(normalized, knownVars));
        const isTotal = node instanceof Sum;
        const result = evaluateWithScope(
          () => node.evaluate({
            rates,
            answers,
            line: lineIndex
          })
        );
        answers.push(result);
        updateVars(knownVars, node);
        if (node instanceof Assignment) {
          const name = tokenToVariableName(node.variable);
          scope[name] = result;
        }
        const formatted = formatResult(result, format);
        const highlightNormalized = buildHighlightSegments(normalized, node.highlight());
        const highlight = mapSegmentsToOriginal(highlightNormalized, map, expression2.length);
        const warnings = mapWarningsToOriginal(warningsNormalized, map, expression2.length);
        return {
          expression: expression2,
          result: formatted.text,
          kind: isTotal ? "total" : formatted.kind,
          warnings,
          highlight
        };
      } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error";
        answers.push(new Nothing());
        return {
          expression: expression2,
          result: `Error: ${message}`,
          kind: "error",
          warnings: [],
          highlight: []
        };
      }
    });
  }
  function formatResult(result, format) {
    const kind = result?.kind;
    if (kind === "numbr") {
      const value = result.value;
      const currency = result.currency;
      const formatted = formatWithGrouping(value, format, 2);
      return {
        text: currency ? `${formatted} ${currency}` : formatted,
        kind: "numbr"
      };
    }
    if (kind === "percent") {
      const value = result.value;
      return {
        text: `${formatWithGrouping(value, format, 2)}%`,
        kind: "percent"
      };
    }
    if (kind === "header") {
      return {
        text: result.title ?? "",
        kind: "header"
      };
    }
    if (kind === "nil") {
      return {
        text: "",
        kind: "nothing"
      };
    }
    return {
      text: "",
      kind: typeof kind === "string" ? kind : "unknown"
    };
  }
  function formatWithGrouping(value, format, decimals = 2) {
    const rounded = value.round(decimals);
    const fixed = rounded.toFixed(decimals);
    const negative = fixed.startsWith("-");
    const unsigned = negative ? fixed.slice(1) : fixed;
    const [integer, fraction] = unsigned.split(".");
    const groupedInteger = addThousands(integer, format.thousand);
    const text = fraction != void 0 && decimals > 0 ? `${groupedInteger}${format.decimal}${fraction}` : groupedInteger;
    return negative ? `-${text}` : text;
  }
  function addThousands(integer, separator) {
    if (!separator || integer.length <= 3) return integer;
    return integer.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  }
  function buildHighlightSegments(text, markup) {
    if (!markup || markup.length === 0 || text.length === 0) {
      return [];
    }
    const mask = new Array(text.length);
    for (const [start, end, tag] of markup) {
      if (start >= end) continue;
      const boundedStart = Math.max(0, Math.min(text.length, start));
      const boundedEnd = Math.max(boundedStart, Math.min(text.length, end));
      for (let i = boundedStart; i < boundedEnd; i++) {
        if (!mask[i]) mask[i] = tag;
      }
    }
    const segments = [];
    let index = 0;
    while (index < text.length) {
      const tag = mask[index];
      if (!tag) {
        index++;
        continue;
      }
      let end = index + 1;
      while (end < text.length && mask[end] === tag) {
        end++;
      }
      segments.push({ start: index, end, tag });
      index = end;
    }
    return segments;
  }
  function normalizeLine(line, format) {
    const map = [];
    if (format.decimal === "." && format.thousand === ",") {
      for (let i = 0; i < line.length; i++) {
        map.push(i);
      }
      return { normalized: line, map };
    }
    let normalized = "";
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === format.decimal) {
        normalized += ".";
        map.push(i);
        continue;
      }
      if (ch === format.thousand) {
        const prev = line[i - 1];
        const next = line[i + 1];
        if (isDigit(prev) && isDigit(next)) {
          continue;
        }
      }
      normalized += ch;
      map.push(i);
    }
    return { normalized, map };
  }
  function isDigit(ch) {
    return ch !== void 0 && ch >= "0" && ch <= "9";
  }
  function mapIndexStart(index, map, originalLength) {
    if (index <= 0) return 0;
    if (index >= map.length) return originalLength;
    return map[index];
  }
  function mapIndexEnd(index, map, originalLength) {
    if (index <= 0) return 0;
    if (index > map.length) return originalLength;
    return map[index - 1] + 1;
  }
  function mapSegmentsToOriginal(segments, map, originalLength) {
    if (map.length === 0) return segments;
    return segments.map((segment) => ({
      start: mapIndexStart(segment.start, map, originalLength),
      end: mapIndexEnd(segment.end, map, originalLength),
      tag: segment.tag
    }));
  }
  function mapWarningsToOriginal(warnings, map, originalLength) {
    if (map.length === 0) return warnings;
    return warnings.map((w) => ({
      start: mapIndexStart(w.start, map, originalLength),
      end: mapIndexEnd(w.end, map, originalLength),
      message: w.message
    }));
  }

  // web/runtime-client.ts
  var target = typeof window !== "undefined" ? window : globalThis;
  target.NumbrRuntime = {
    evaluate(text, formatKey) {
      return evaluateText(text, {
        formatKey,
        rates: defaultRates
      });
    },
    formatPresets,
    defaultFormatKey
  };
  return __toCommonJS(runtime_client_exports);
})();
//# sourceMappingURL=numbr.js.map
