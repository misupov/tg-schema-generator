interface ByteStream {
  readInt32(): number;
  readUint32(): number;
  readInt64(): string;
  readInt128(): string;
  readInt256(): string;
  readDouble(): number;
  readString(): string;
  readBytes(): ArrayBuffer;
  revert(bytes: number): void;
}

interface Parser {
  parse(stream: ByteStream): any;
}

export default class MessageParser implements Parser {
  private _s!: ByteStream;
  
  constructor(private fallbackParser?: Parser) {}
  
  public parse(stream: ByteStream) {
    this._s = stream;
    return this.o();
  }
  
  private i32 = () => this._s.readInt32();
  private u32 = () => this._s.readUint32();
  private i64 = () => this._s.readInt64();
  private i128 = () => this._s.readInt128();
  private i256 = () => this._s.readInt256();
  private d = () => this._s.readDouble();
  private s = () => this._s.readString();
  private b = () => this._s.readBytes();
  
  private v = (t: () => any, bare = false) => {
    if (!bare) { this.u32(); } // should always be 481674261
    const len = this.u32();
    const result = [];
    for (let i = 0; i < len; ++i) result.push(t());
    return result;
  }
  
  private o = (): any => {
    const t = this;
    const c = this.u32();
    switch (c) {
      case 0xbc799737: return t.A();
      case 0x997275b5: return t.B();
      case 0x3fedd339: return t.C();
      case 0x1cb5c415: return t.D();
      case 0xc4b9f9bb: return t.E();
      case 0x56730bcc: return t.F();
      case 0x7f3b18ea: return t.G();
      case 0x7da07ec9: return t.H();
      case 0x179be863: return t.I();
      case 0xb98886cf: return t.N();
      case 0xf7c1b13f: return t.O();
      case 0xf392b7f4: return t.R();
      case 0xf52ff27f: return t.S();
      case 0x9664f57f: return t.U();
      case 0x1e287d04: return t.V();
      case 0xb3ba0635: return t.W();
      case 0xf9c44144: return t.X();
      case 0xf8ab7dfb: return t.Y();
      case 0x1ca48f57: return t.BJ();
      case 0x927c55b4: return t.BK();
      case 0x8953ad37: return t.BL();
      case 0xe4c123d6: return t.BM();
      case 0xf3b7acc9: return t.BN();
      case 0x1cd7bf0d: return t.BO();
      case 0x3bb3b94a: return t.BP();
      case 0xdfdaabe1: return t.BQ();
      case 0x9db1bc6d: return t.BY();
      case 0xbad0e5bb: return t.BZ();
      case 0xaa963b05: return t.CB();
      case 0x40bc6f52: return t.CC();
      case 0x7efe0e: return t.CD();
      case 0xcae1aadf: return t.CE();
      case 0xa4f63c0: return t.CF();
      case 0xae1e508d: return t.CG();
      case 0x528a0677: return t.CH();
      case 0x4b09ebbc: return t.CI();
      case 0xb3cea0e4: return t.CJ();
      case 0x1081464c: return t.CK();
      case 0x200250ba: return t.CL();
      case 0x4f11bae1: return t.CN();
      case 0xecd75d8c: return t.CO();
      case 0x9d05049: return t.CP();
      case 0xedb93949: return t.CQ();
      case 0x8c703f: return t.CR();
      case 0x9ba2d800: return t.CV();
      case 0x3bda1bde: return t.CW();
      case 0x7328bdb: return t.CX();
      case 0x1b7c9db3: return t.DA();
      case 0xc8d7493e: return t.DC();
      case 0xfc900c2b: return t.DF();
      case 0x3f460fed: return t.DG();
      case 0x37c1011c: return t.DH();
      case 0x475cdbd5: return t.DI();
      case 0x83e5de54: return t.DJ();
      case 0x452c0e65: return t.DK();
      case 0x9e19a1f6: return t.DL();
      case 0x3ded6320: return t.DM();
      case 0x695150d7: return t.DN();
      case 0x56e0d474: return t.DO();
      case 0xcbf24940: return t.DP();
      case 0x9f84f49e: return t.DQ();
      case 0xb6aef7b0: return t.DY();
      case 0xa6638b9a: return t.DZ();
      case 0xb5a1ce5a: return t.EA();
      case 0x7fcb13a8: return t.EB();
      case 0x95e3fbef: return t.EC();
      case 0x488a7337: return t.ED();
      case 0xb2ae9b0c: return t.EE();
      case 0x2c171f72: return t.EV();
      case 0x2331b22d: return t.EX();
      case 0xd07504a5: return t.EY();
      case 0xe17e23c: return t.EZ();
      case 0x77bfb61b: return t.FA();
      case 0xe9a734fa: return t.FB();
      case 0x1117dd5f: return t.FD();
      case 0x296f104: return t.FE();
      case 0x5e002502: return t.FF();
      case 0xcd050916: return t.FG();
      case 0xdf969c2d: return t.FI();
      case 0xb8bc5b0c: return t.FJ();
      case 0x193b4417: return t.FK();
      case 0x4a95e84e: return t.FL();
      case 0x9c3d198e: return t.FN();
      case 0xaf509d20: return t.FO();
      case 0x818426cd: return t.FP();
      case 0xa437c3ed: return t.FQ();
      case 0x58dbcab8: return t.FR();
      case 0x1e22c78d: return t.FS();
      case 0x2e59d922: return t.FT();
      case 0xadf44ee3: return t.FU();
      case 0xe1746d0a: return t.FV();
      case 0xedf17c12: return t.FY();
      case 0xf911c994: return t.FZ();
      case 0xd0028438: return t.GA();
      case 0x561bc879: return t.GB();
      case 0xd3680c61: return t.GC();
      case 0xb74ba9d2: return t.GD();
      case 0xeae87e42: return t.GE();
      case 0x77d01c3b: return t.GF();
      case 0x1c138d15: return t.GG();
      case 0x900802a1: return t.GH();
      case 0x15ba6c40: return t.GI();
      case 0x71e094f3: return t.GJ();
      case 0x8c718e87: return t.GL();
      case 0xc8edce1e: return t.GM();
      case 0x64ff9fd5: return t.GP();
      case 0xe5d7d19c: return t.GR();
      case 0xb45c69d1: return t.GS();
      case 0x57e2f66c: return t.GT();
      case 0x9609a51c: return t.GU();
      case 0x9fc00e65: return t.GV();
      case 0x56e9f0e4: return t.GW();
      case 0x9eddf188: return t.GX();
      case 0x7ef0dd87: return t.GY();
      case 0xffc86587: return t.GZ();
      case 0x1f2b0afd: return t.HJ();
      case 0x4e90bfd6: return t.HK();
      case 0xa20db0e5: return t.HL();
      case 0x5c486927: return t.HM();
      case 0x9a65ea1f: return t.HN();
      case 0x7761198: return t.HO();
      case 0x1bfbd823: return t.HP();
      case 0xa7332b73: return t.HQ();
      case 0x95313b0c: return t.HR();
      case 0xa56c2a3e: return t.KF();
      case 0x5d75a138: return t.KG();
      case 0xf49ca0: return t.KH();
      case 0xa8fb1981: return t.KI();
      case 0xe317af7e: return t.KK();
      case 0x914fbf11: return t.KL();
      case 0x16812688: return t.KM();
      case 0x78d4dec1: return t.KN();
      case 0x725b04c3: return t.KO();
      case 0x74ae4240: return t.KP();
      case 0x8dca6aa5: return t.KR();
      case 0x15051f54: return t.KS();
      case 0x20212ca8: return t.KT();
      case 0x96a18d5: return t.KU();
      case 0x18b7a10d: return t.KW();
      case 0x330b4067: return t.KX();
      case 0x8e1a1775: return t.KY();
      case 0x1da7158f: return t.KZ();
      case 0xc45a6536: return t.LA();
      case 0x18cb9f78: return t.LB();
      case 0x12bcbd9a: return t.HS();
      case 0x1710f156: return t.HT();
      case 0xb4a2e88d: return t.HU();
      case 0x38fe25b7: return t.HV();
      case 0xab7ec0a0: return t.LC();
      case 0x3bf703dc: return t.LD();
      case 0xc878527e: return t.LE();
      case 0xfa56ce36: return t.LF();
      case 0x13d6dd27: return t.LG();
      case 0xf141b5e1: return t.LH();
      case 0xc21f497e: return t.LI();
      case 0x4a70994c: return t.LJ();
      case 0x1837c364: return t.LK();
      case 0x64bd0306: return t.LL();
      case 0x5a17b5e5: return t.LM();
      case 0xf5235d55: return t.BR();
      case 0xed18c118: return t.LO();
      case 0x23734b06: return t.LP();
      case 0xc0e24635: return t.LQ();
      case 0x2c221edd: return t.LR();
      case 0x560f8935: return t.LS();
      case 0x9493ff32: return t.LT();
      case 0xfa4f0bb5: return t.T();
      case 0x2dc173c8: return t.LN();
      case 0xea4b0e5c: return t.HW();
      case 0x6e5f8c22: return t.HX();
      case 0x8e5e9873: return t.HY();
      case 0x5b38c6c1: return t.Z();
      case 0x23ab23d2: return t.BA();
      case 0x9cb070d7: return t.DR();
      case 0x72f0eaae: return t.LU();
      case 0x1abfb575: return t.LV();
      case 0xbad07584: return t.BS();
      case 0x36f8c871: return t.LW();
      case 0x9ba29cc1: return t.LX();
      case 0x17c6b5f6: return t.LY();
      case 0x9fd40bd8: return t.LZ();
      case 0xb4c83b4c: return t.MA();
      case 0xc007cec3: return t.MB();
      case 0x80ece81a: return t.HZ();
      case 0xbec268ef: return t.IA();
      case 0x16bf744e: return t.MD();
      case 0xfd5ec8f5: return t.ME();
      case 0xa187d66f: return t.MF();
      case 0xe9763aec: return t.MG();
      case 0xd52f73f7: return t.MH();
      case 0xf351d7ab: return t.MI();
      case 0xd1d34a26: return t.MJ();
      case 0xaa0cd9e4: return t.MK();
      case 0x176f8ba1: return t.ML();
      case 0x628cbc6f: return t.MM();
      case 0xb3134d9d: return t.MQ();
      case 0xebe46819: return t.IB();
      case 0xe26f42f1: return t.CS();
      case 0x7bf09fc: return t.CT();
      case 0x77ebc742: return t.CU();
      case 0xee3b272a: return t.IC();
      case 0x4f96cb18: return t.MR();
      case 0xbc2eab30: return t.MZ();
      case 0xd09e07b: return t.NH();
      case 0x184b35ce: return t.NI();
      case 0x131cc67f: return t.NJ();
      case 0xba52007: return t.NK();
      case 0xd66b66c9: return t.NL();
      case 0x90110467: return t.NM();
      case 0xfffe1bac: return t.NP();
      case 0x65427b82: return t.NQ();
      case 0x4d5bbe0c: return t.NR();
      case 0xf888fa1a: return t.NS();
      case 0x8b73e763: return t.NT();
      case 0xc7f49b7: return t.NU();
      case 0x50a04e45: return t.NX();
      case 0xb8d0afdf: return t.NY();
      case 0x12b9417b: return t.ID();
      case 0x6c37c15c: return t.NZ();
      case 0x11b58939: return t.OA();
      case 0x6319d612: return t.OB();
      case 0xef02ce6: return t.OC();
      case 0x9852f9c6: return t.OD();
      case 0x15590068: return t.OE();
      case 0xf1749a22: return t.OG();
      case 0xe4599bbd: return t.OH();
      case 0x12b299d4: return t.OI();
      case 0xe86602c3: return t.OJ();
      case 0xedfd405f: return t.OK();
      case 0x9c974fdf: return t.IE();
      case 0x2f2f21bf: return t.IF();
      case 0x84d19185: return t.OL();
      case 0x7f891213: return t.IG();
      case 0xeb1477e8: return t.OM();
      case 0xc586da1c: return t.ON();
      case 0xe89c45b2: return t.OO();
      case 0xa32dd600: return t.DS();
      case 0xad01d61d: return t.OQ();
      case 0x1250abde: return t.OR();
      case 0xad2641f8: return t.OS();
      case 0x9a5c33e5: return t.OT();
      case 0xc23727c9: return t.OU();
      case 0x137948a5: return t.OV();
      case 0xc13d1c11: return t.BB();
      case 0x2ec0533f: return t.DT();
      case 0xa384b779: return t.OW();
      case 0x69df3769: return t.OX();
      case 0xfc2e05bc: return t.OY();
      case 0x5a686d7c: return t.OZ();
      case 0xdfc2f58e: return t.PA();
      case 0xf89cf5e8: return t.EF();
      case 0x68c13933: return t.IH();
      case 0xffb62b95: return t.PB();
      case 0x9de7a269: return t.PC();
      case 0x861cc8a0: return t.PD();
      case 0xeeb46f27: return t.PF();
      case 0xb60a24a6: return t.PG();
      case 0x938458c1: return t.CM();
      case 0xc27ac8c7: return t.PH();
      case 0x98e81d3a: return t.PI();
      case 0xa2fa4880: return t.PJ();
      case 0x77608b83: return t.PT();
      case 0xa03e5b85: return t.PU();
      case 0xf4108aa0: return t.PV();
      case 0x3502758c: return t.PW();
      case 0x7b8e7de6: return t.J();
      case 0xd8292816: return t.P();
      case 0xbb92ba95: return t.PY();
      case 0xfa04579d: return t.PZ();
      case 0x6f635b0d: return t.QA();
      case 0x6cef8ac7: return t.QB();
      case 0x6ed02538: return t.QC();
      case 0x64e475c2: return t.QD();
      case 0xbd610bc9: return t.QE();
      case 0x826f8b60: return t.QF();
      case 0x28a20571: return t.QG();
      case 0x73924be0: return t.QH();
      case 0x76a6d327: return t.QI();
      case 0x11f1331c: return t.KQ();
      case 0xee8c1e86: return t.QQ();
      case 0xafeb712e: return t.QR();
      case 0xbddde532: return t.CA();
      case 0x20adaef8: return t.K();
      case 0xd31a961e: return t.CY();
      case 0x289da732: return t.CZ();
      case 0x7f077ad9: return t.QT();
      case 0x2d895c74: return t.DB();
      case 0xae30253: return t.QU();
      case 0x99262e37: return t.GN();
      case 0x95d2ac92: return t.EG();
      case 0xeb0467fb: return t.II();
      case 0xb6d45656: return t.IJ();
      case 0x62ba04d9: return t.IK();
      case 0x330b5424: return t.IL();
      case 0xc37521c9: return t.IM();
      case 0x98a12b4b: return t.IN();
      case 0x3e11affb: return t.QV();
      case 0xa4bcc6fe: return t.QW();
      case 0x2064674e: return t.QX();
      case 0x94d42ee7: return t.QY();
      case 0xcd77d957: return t.QZ();
      case 0x15ebac1d: return t.RA();
      case 0xa3289a6d: return t.RB();
      case 0x808d15a4: return t.RC();
      case 0xde3f3c79: return t.RF();
      case 0xb4608969: return t.RG();
      case 0xa3b54985: return t.RH();
      case 0xf56ee2a8: return t.RM();
      case 0xd0d9b163: return t.RO();
      case 0xda13538a: return t.DD();
      case 0xe2d6e436: return t.DE();
      case 0xb6901959: return t.IO();
      case 0x51bdb021: return t.EH();
      case 0xb055eaee: return t.EI();
      case 0xb0d1865b: return t.RI();
      case 0x780a0310: return t.RP();
      case 0x688a30aa: return t.IP();
      case 0xbb2d201: return t.IQ();
      case 0x43ae3dec: return t.IR();
      case 0x162ecc1f: return t.RQ();
      case 0x9c750409: return t.RR();
      case 0x4843b0fd: return t.BC();
      case 0x450a1c0a: return t.RS();
      case 0xe8025ca2: return t.RT();
      case 0x2e0709a5: return t.RU();
      case 0x9375341e: return t.IS();
      case 0x3380c786: return t.RV();
      case 0x3dcd7a87: return t.RW();
      case 0x88bf9319: return t.SB();
      case 0x764cf810: return t.SF();
      case 0x8c7f65e2: return t.SG();
      case 0x11965f3a: return t.SK();
      case 0x947ca848: return t.SM();
      case 0x54826690: return t.IT();
      case 0xe48f964: return t.IU();
      case 0x50f5c392: return t.HA();
      case 0x3751b49e: return t.HB();
      case 0xbdfb0426: return t.MS();
      case 0x500e6dfa: return t.NA();
      case 0x5dab1af4: return t.SN();
      case 0xec338270: return t.SO();
      case 0x1b3f4df7: return t.IV();
      case 0x98592475: return t.IW();
      case 0x94bd38ed: return t.EJ();
      case 0x72a3158c: return t.SP();
      case 0x741cd3e3: return t.SQ();
      case 0x226ccefb: return t.SR();
      case 0x3dbb5986: return t.SS();
      case 0xc000bba2: return t.ST();
      case 0x5353e5a7: return t.SU();
      case 0xab03c6d9: return t.SV();
      case 0x258aff05: return t.PK();
      case 0x683a5e46: return t.PL();
      case 0xb16a6c29: return t.PM();
      case 0xfc796b3f: return t.PN();
      case 0x568a748: return t.PO();
      case 0x48a30254: return t.PX();
      case 0x36585ea4: return t.SW();
      case 0xe73547e1: return t.IX();
      case 0x26b5dde6: return t.SX();
      case 0xe40370a3: return t.IY();
      case 0xc1b15d65: return t.RX();
      case 0x417bbf11: return t.RY();
      case 0xa6edbffd: return t.RZ();
      case 0xb722de65: return t.SH();
      case 0x8a86659c: return t.SI();
      case 0x18d1cdc2: return t.SJ();
      case 0xa8d864a7: return t.SC();
      case 0xfff8fdc4: return t.SD();
      case 0x17db940b: return t.SL();
      case 0x890c3d89: return t.SY();
      case 0xf9d27a5a: return t.IZ();
      case 0x3c20629f: return t.SZ();
      case 0x3371c354: return t.TA();
      case 0xedcdc05b: return t.TB();
      case 0xab661b5b: return t.TC();
      case 0x148677e2: return t.TD();
      case 0x637b7ed: return t.TE();
      case 0xbd17a14a: return t.TF();
      case 0x161d9628: return t.TG();
      case 0xfb834291: return t.TK();
      case 0xde266ef5: return t.TL();
      case 0x70b772a8: return t.TM();
      case 0x352dca58: return t.QJ();
      case 0x208e68c9: return t.QK();
      case 0x3a20ecb8: return t.HC();
      case 0x25d6c9c7: return t.JA();
      case 0xee2bb969: return t.JB();
      case 0x1b0c841a: return t.TO();
      case 0xfd8e711f: return t.TP();
      case 0x9fbab604: return t.EK();
      case 0x4ede3cf: return t.TQ();
      case 0xf89d88e5: return t.TR();
      case 0x571d2742: return t.JC();
      case 0xb17f890: return t.TS();
      case 0x22f3afb3: return t.TT();
      case 0x9a422c20: return t.JD();
      case 0x4fcba9c8: return t.TU();
      case 0x38641628: return t.TV();
      case 0x35e410a8: return t.TW();
      case 0x6410a5d2: return t.TX();
      case 0xa229dd06: return t.JE();
      case 0x3354678f: return t.JF();
      case 0xe5bbfe1a: return t.BD();
      case 0xfb52dc99: return t.BE();
      case 0x3407e51b: return t.TY();
      case 0xaed6dbb2: return t.TZ();
      case 0x9801d2f7: return t.OF();
      case 0x4a992157: return t.UA();
      case 0x438865b: return t.UB();
      case 0xbdf9653b: return t.UC();
      case 0x4fa417f2: return t.SE();
      case 0x4b425864: return t.SA();
      case 0xfdb19008: return t.DU();
      case 0xd33f43f3: return t.BF();
      case 0x32c3e77: return t.UD();
      case 0xc331e80a: return t.UE();
      case 0x50f41ccf: return t.PP();
      case 0x92a72876: return t.EL();
      case 0x58fffcd0: return t.UF();
      case 0x9a3bfd99: return t.UG();
      case 0x4afe8f6d: return t.KJ();
      case 0x40771900: return t.JG();
      case 0x9cd81144: return t.GQ();
      case 0xdc3d824f: return t.UH();
      case 0x744694e0: return t.UI();
      case 0x6724abc4: return t.UJ();
      case 0xd912a59c: return t.UK();
      case 0xc12622c4: return t.UL();
      case 0x9bf8bb95: return t.UM();
      case 0x6c3f19b9: return t.UN();
      case 0x3c2884c1: return t.UO();
      case 0xde5a0dd6: return t.UP();
      case 0x7e6260d7: return t.UQ();
      case 0x13567e8a: return t.UX();
      case 0x70abc3fd: return t.UY();
      case 0x8ffa9a1f: return t.UZ();
      case 0xbaafe5e0: return t.VA();
      case 0xbfd064ec: return t.VB();
      case 0xf12bb6e1: return t.VC();
      case 0x467a0766: return t.VD();
      case 0xc070d93e: return t.VE();
      case 0x48870999: return t.VF();
      case 0xdb20b188: return t.VG();
      case 0xce0d37b0: return t.VH();
      case 0xe4e88011: return t.VI();
      case 0x263d7c26: return t.VJ();
      case 0x4f4456d3: return t.VK();
      case 0x1759c560: return t.VL();
      case 0x7c8fe7b6: return t.VM();
      case 0x39f23300: return t.VN();
      case 0xa8718dc5: return t.VO();
      case 0xf259a80b: return t.VP();
      case 0x65a0fa4d: return t.VQ();
      case 0x31f9590: return t.VR();
      case 0x85849473: return t.OP();
      case 0xfabadc5f: return t.MT();
      case 0x3d662b7b: return t.NB();
      case 0xdd6a8f48: return t.MN();
      case 0x85e42301: return t.WA();
      case 0xe095c1a0: return t.WB();
      case 0x57adc690: return t.WC();
      case 0xfaf7e8c9: return t.WD();
      case 0x6e6fe51c: return t.JH();
      case 0xfa0f3ca2: return t.JI();
      case 0x7d748d04: return t.WE();
      case 0x8317c0c3: return t.JJ();
      case 0x9b9240a6: return t.JK();
      case 0xcb296bf8: return t.WF();
      case 0xc30aa358: return t.WG();
      case 0xf4e096c3: return t.BG();
      case 0xea02c27e: return t.WH();
      case 0x8f31b327: return t.EM();
      case 0x84551347: return t.DV();
      case 0x1e8caaeb: return t.WI();
      case 0x909c3f94: return t.WJ();
      case 0xafd93fbb: return t.PQ();
      case 0x40699cd0: return t.EN();
      case 0xcdc27a1f: return t.WK();
      case 0x1c570ed1: return t.WL();
      case 0x9bed434d: return t.WN();
      case 0xc239d686: return t.WO();
      case 0x21e753bc: return t.WQ();
      case 0x3f56aea3: return t.WR();
      case 0xd1451883: return t.WS();
      case 0x4e5f810d: return t.WT();
      case 0x500911e1: return t.WV();
      case 0xfb8fe43c: return t.WW();
      case 0xc10eb2cf: return t.WX();
      case 0x3417d728: return t.WY();
      case 0xdb64fd34: return t.XB();
      case 0xb6213cdf: return t.XC();
      case 0xe0cdc940: return t.JL();
      case 0x5d2f3aa9: return t.JM();
      case 0xffa0a496: return t.XD();
      case 0xab0f6b1e: return t.JN();
      case 0x1e36fded: return t.XE();
      case 0x5366c915: return t.XF();
      case 0x1b8f4ad1: return t.XG();
      case 0x87eabb53: return t.XH();
      case 0x997c454a: return t.XI();
      case 0x8742ae7f: return t.XJ();
      case 0x50ca4de1: return t.XK();
      case 0x9d4c17c0: return t.XL();
      case 0xa2bb35cb: return t.XM();
      case 0xec82e140: return t.XN();
      case 0x80c99768: return t.HD();
      case 0x80e11a7f: return t.EO();
      case 0x7a7c17a4: return t.HE();
      case 0xb549da53: return t.HF();
      case 0x88f27fbc: return t.MO();
      case 0x243e1c66: return t.MP();
      case 0xf18cda44: return t.KV();
      case 0xeea8e46e: return t.XO();
      case 0xa99fca4f: return t.XP();
      case 0xc982eaba: return t.XQ();
      case 0x5725e40a: return t.XR();
      case 0xef1751b5: return t.VS();
      case 0xcad181f6: return t.XS();
      case 0x6c47ac9f: return t.XT();
      case 0x2979eeb2: return t.XU();
      case 0xf385c1f6: return t.XV();
      case 0xeeca5ce3: return t.XW();
      case 0x46560264: return t.JO();
      case 0x56022f4d: return t.JP();
      case 0xccbebbaf: return t.RD();
      case 0x1c0facaf: return t.RE();
      case 0x1427a5e1: return t.RJ();
      case 0x656ac4b: return t.RK();
      case 0xe6dfb825: return t.XX();
      case 0x55188a2e: return t.XY();
      case 0x6a4afc38: return t.XZ();
      case 0x434bd2af: return t.YA();
      case 0x1b7907ae: return t.YB();
      case 0x26ae0971: return t.YC();
      case 0xe9e82c18: return t.YD();
      case 0x709b2405: return t.YE();
      case 0x42e047bb: return t.YF();
      case 0x183040d3: return t.YG();
      case 0xf89777f2: return t.YH();
      case 0xe31c34d8: return t.YI();
      case 0xe6d83d7e: return t.YJ();
      case 0xd5676710: return t.YK();
      case 0x3b5a3e40: return t.YS();
      case 0xed8af74d: return t.YT();
      case 0xea107ae4: return t.YU();
      case 0x1e76a78c: return t.TH();
      case 0x804361ea: return t.VT();
      case 0x5ce14175: return t.YV();
      case 0x4792929b: return t.EP();
      case 0x9e8fa6d3: return t.YW();
      case 0xf37f2f16: return t.YX();
      case 0xe511996d: return t.JQ();
      case 0x89893b45: return t.JR();
      case 0xc1f8e69a: return t.HG();
      case 0x7084a7be: return t.JS();
      case 0xb1c3caa7: return t.YL();
      case 0xfae69f56: return t.EQ();
      case 0xaa1c39f: return t.WZ();
      case 0xca05d50e: return t.XA();
      case 0xe7026d0d: return t.HH();
      case 0xe062db83: return t.HI();
      case 0x70db6837: return t.JT();
      case 0x5f5c95f1: return t.YM();
      case 0xce4e82fd: return t.BH();
      case 0x7c3c2609: return t.DW();
      case 0x46e1d13d: return t.YY();
      case 0x8dbc3336: return t.YZ();
      case 0xa01b22f9: return t.ZA();
      case 0xeb49081d: return t.ZB();
      case 0xbc0a57dc: return t.ZC();
      case 0xe0310d7: return t.ZD();
      case 0xf0173fe9: return t.RN();
      case 0x74535f21: return t.GO();
      case 0x1cc6e91f: return t.ZE();
      case 0xcac943f2: return t.ZF();
      case 0xed56c9fc: return t.ZG();
      case 0xa676a322: return t.ZH();
      case 0xbad88395: return t.ZI();
      case 0x86872538: return t.ZJ();
      case 0x9b69e34b: return t.QL();
      case 0x4c4e743f: return t.QM();
      case 0xabe9affe: return t.ER();
      case 0xfcaafeb7: return t.ZK();
      case 0xe56dbf05: return t.ZM();
      case 0xd54b65d: return t.ZO();
      case 0x5108d648: return t.ZP();
      case 0x6242c773: return t.ZQ();
      case 0xf9c8bcc6: return t.WM();
      case 0x75588b3f: return t.ZR();
      case 0xe09e1fb8: return t.ZS();
      case 0x2bf7ee23: return t.ZT();
      case 0xe3309f7f: return t.ZU();
      case 0x28ecf961: return t.ZV();
      case 0x3334b0f0: return t.ZW();
      case 0x5367e5be: return t.ZX();
      case 0xcbc7ee28: return t.BT();
      case 0x64199744: return t.ZY();
      case 0xe0277a62: return t.ZZ();
      case 0x8aeabec3: return t.BAA();
      case 0x7d6099dd: return t.BAB();
      case 0x21ec5a5f: return t.BAC();
      case 0x9d2a81e3: return t.BAD();
      case 0x3dac6a00: return t.BAE();
      case 0x6e425c4: return t.BAF();
      case 0xa0d0744b: return t.BAG();
      case 0x99a48f23: return t.BAH();
      case 0xcbe31e26: return t.BAI();
      case 0xfc36954e: return t.BAJ();
      case 0x89137c0d: return t.BAK();
      case 0x8b883488: return t.BAL();
      case 0x99e3806a: return t.BAM();
      case 0xea02ec33: return t.BAN();
      case 0xb320aadb: return t.BAO();
      case 0x8e3ca7ee: return t.BAP();
      case 0x187fa0ca: return t.BAQ();
      case 0xdb21d0a7: return t.BAR();
      case 0xed1ecdb0: return t.BAS();
      case 0xe8a40bd9: return t.BAT();
      case 0xbe3dfa: return t.BAU();
      case 0x868a2aa5: return t.BAV();
      case 0xe537ced6: return t.BAW();
      case 0x7a700873: return t.BAX();
      case 0x666220e9: return t.BAY();
      case 0x33f0ea47: return t.BBC();
      case 0xad2e1cd8: return t.BBD();
      case 0x811f854f: return t.BBE();
      case 0x1b287353: return t.ES();
      case 0xd95c6154: return t.ET();
      case 0x66afa166: return t.BBF();
      case 0x6a4ee832: return t.BBG();
      case 0x1142bd56: return t.BBH();
      case 0x4dba4501: return t.BBI();
      case 0x29be5899: return t.BU();
      case 0xe16459c3: return t.JU();
      case 0xf0e3e596: return t.GK();
      case 0x9f2221c9: return t.WP();
      case 0xb52c939d: return t.TN();
      case 0x9b89f93a: return t.FW();
      case 0xd45ab096: return t.BBJ();
      case 0x4a8537: return t.BBL();
      case 0xbbf2dda0: return t.BBM();
      case 0x86471d92: return t.BBN();
      case 0x1527bcac: return t.BBO();
      case 0x3a912d4a: return t.BBK();
      case 0x9880f658: return t.BBP();
      case 0xd27ff082: return t.BBQ();
      case 0x869d758f: return t.BAZ();
      case 0xa1144770: return t.BBA();
      case 0x34636dd8: return t.BBB();
      case 0x829d99da: return t.BBR();
      case 0x27477b4: return t.BBS();
      case 0xbfb9f457: return t.BBT();
      case 0xa098d6af: return t.BBU();
      case 0x1d1b1245: return t.BBV();
      case 0xc0de1bd9: return t.BBW();
      case 0x3f6d7b68: return t.BBX();
      case 0xc7345e6a: return t.BBY();
      case 0x2be0dfa4: return t.BBZ();
      case 0xb71e767a: return t.BCA();
      case 0xf7444763: return t.BCB();
      case 0x99c1d49d: return t.BCC();
      case 0x4c43da18: return t.JV();
      case 0xe10db349: return t.JW();
      case 0xb1db7c7e: return t.FM();
      case 0xd612e8ef: return t.MC();
      case 0xed6a8504: return t.UR();
      case 0xc7fb5e01: return t.US();
      case 0x34b8621: return t.UT();
      case 0x1ccb966a: return t.UU();
      case 0x81ccf4f: return t.UV();
      case 0x1e148390: return t.VU();
      case 0x34566b6a: return t.BCD();
      case 0xe0c0c5e5: return t.BCE();
      case 0xbf4dea82: return t.VV();
      case 0x6f747657: return t.BCF();
      case 0xb92fb6cd: return t.BCG();
      case 0x25e073fc: return t.BCH();
      case 0x5e068047: return t.BCI();
      case 0x98dd8936: return t.BCJ();
      case 0x9a8ae1e1: return t.VW();
      case 0x76768bed: return t.VX();
      case 0xb390dc08: return t.BCK();
      case 0x16115a96: return t.VY();
      case 0xa44f3ef6: return t.VZ();
      case 0xae891bec: return t.BCL();
      case 0xdb9e70d2: return t.MU();
      case 0x39491cc8: return t.NC();
      case 0x35553762: return t.UW();
      case 0x8c05f1c9: return t.BCM();
      case 0xf3ae2eed: return t.BCN();
      case 0x1eb3758: return t.BCO();
      case 0xf3f25f76: return t.EU();
      case 0xaca1657b: return t.JX();
      case 0x6ca9c2e9: return t.BCP();
      case 0xd5529d06: return t.BCQ();
      case 0x3b6ddad2: return t.BCR();
      case 0x5755785a: return t.BCS();
      case 0x6b3765b: return t.BI();
      case 0x4bd6e798: return t.DX();
      case 0xf041e250: return t.BCT();
      case 0x47a971e0: return t.BCU();
      case 0xe0b0bc2e: return t.FC();
      case 0x5fb224d5: return t.BCV();
      case 0x9f120418: return t.BCW();
      case 0x54c01850: return t.JY();
      case 0xe630b979: return t.BCX();
      case 0x72091c80: return t.BCY();
      case 0xbb6ae88d: return t.RL();
      case 0x2df5fc0a: return t.YN();
      case 0x8f079643: return t.YO();
      case 0x1c199183: return t.BCZ();
      case 0x702b65a9: return t.BDA();
      case 0xdebebe83: return t.BDB();
      case 0x5086cf8: return t.BDC();
      case 0xe04232f3: return t.BDD();
      case 0x63cacf26: return t.BDE();
      case 0xd5b3b9f9: return t.BDF();
      case 0x236df622: return t.BDG();
      case 0x5cc761bd: return t.BDH();
      case 0xa575739d: return t.BDI();
      case 0xb3fb5361: return t.BDJ();
      case 0xa4dd4c08: return t.MV();
      case 0x69ec56a3: return t.ND();
      case 0x5719bacc: return t.MW();
      case 0x96151fed: return t.NE();
      case 0xbc7fc6cd: return t.BDK();
      case 0x40181ffe: return t.BV();
      case 0xd83466f3: return t.BEC();
      case 0x27d69997: return t.BW();
      case 0xdbaeae9: return t.BX();
      case 0xff544e65: return t.BDL();
      case 0x71bd134c: return t.EW();
      case 0x64600527: return t.ZL();
      case 0x514519e2: return t.ZN();
      case 0xfbd2c296: return t.BDM();
      case 0xe9baa668: return t.BDN();
      case 0x19360dc0: return t.JZ();
      case 0x2d117597: return t.Q();
      case 0x2a286531: return t.QS();
      case 0x17bae2e6: return t.L();
      case 0x9c95f7bb: return t.M();
      case 0x352dafa: return t.MX();
      case 0xd19ae46d: return t.NF();
      case 0xa8406ca9: return t.TI();
      case 0xfbeec0f0: return t.TJ();
      case 0xa26f881b: return t.YP();
      case 0xe844ebff: return t.BDO();
      case 0x10b78d29: return t.PR();
      case 0xd02e7fd4: return t.PS();
      case 0x92d33a0e: return t.BDP();
      case 0x8f8c0e4e: return t.BDQ();
      case 0xa9d6db1f: return t.BDR();
      case 0x4c81c1ba: return t.NN();
      case 0xd82363af: return t.NO();
      case 0x18be796b: return t.NV();
      case 0xacae0690: return t.NW();
      case 0x9c4e7e8b: return t.QN();
      case 0xbf0693d4: return t.QO();
      case 0x20df5d0: return t.QP();
      case 0x6a7e7366: return t.KA();
      case 0xbfb5ad8b: return t.BDS();
      case 0x209b82db: return t.BDT();
      case 0xca461b5d: return t.BDU();
      case 0xb4afcfb0: return t.KB();
      case 0xe6b76ae: return t.YQ();
      case 0xdbd4feed: return t.FX();
      case 0x53909779: return t.YR();
      case 0x44747e9a: return t.FH();
      case 0xd8411139: return t.WU();
      case 0x28703c8: return t.PE();
      case 0x39a51dfb: return t.KC();
      case 0x90866cee: return t.KD();
      case 0xd072acb4: return t.BDV();
      case 0x3c5693e9: return t.BDW();
      case 0xf5890df1: return t.BDX();
      case 0x28f1114: return t.BDZ();
      case 0xf41eb622: return t.BEA();
      case 0x7f676421: return t.BEB();
      case 0x8216fba3: return t.KE();
      case 0xd1219bdd: return t.MY();
      case 0x42ffd42b: return t.NG();
      case 0x871fb939: return t.BEE();
      case 0x564fe691: return t.BEF();
      case 0x629f1980: return t.BEH();
      case 0x68e9916: return t.BEI();
      case 0x390d5c5e: return t.BEJ();
      case 0x57e28221: return t.BEK();
      case 0xa927fec5: return t.BEL();
      case 0xc3a12462: return t.BEM();
      case 0xfbd81688: return t.BEN();
      case 0xb7b31ea8: return t.BEO();
      case 0x6d5f77ee: return t.BEP();
      case 0x5b11125a: return t.BEQ();
      case 0x8427bbac: return t.BEG();
      case 0x8af40b25: return t.BED();
      case 0xbd507cd1: return t.BER();
      case 0x9c14984a: return t.BES();
      case 0x54b56617: return t.BET();
      default: {
        if (this.fallbackParser) {
          this._s.revert(4);
          return this.fallbackParser.parse(this._s);
        } else {
          console.error(`Unknown constructor 0x${c.toString(16)}.`);
          return undefined;
        }
      }
    }
  }
  
  A = () => false;
  B = () => true;
  C = () => ({_: 'true'})
  D = () => ({_: 'vector'})
  E = () => ({_: 'error', code: this.i32(), text: this.s()})
  F = () => ({_: 'null'})
  G = () => ({_: 'inputPeerEmpty'})
  H = () => ({_: 'inputPeerSelf'})
  I = () => ({_: 'inputPeerChat', chat_id: this.i32()})
  N = () => ({_: 'inputUserEmpty'})
  O = () => ({_: 'inputUserSelf'})
  R = () => ({_: 'inputPhoneContact', client_id: this.i64(), phone: this.s(), first_name: this.s(), last_name: this.s()})
  S = () => ({_: 'inputFile', id: this.i64(), parts: this.i32(), name: this.s(), md5_checksum: this.s()})
  U = () => ({_: 'inputMediaEmpty'})
  V() {
    const flags = this.i32();
    return {
      _: 'inputMediaUploadedPhoto' as const,
      file: this.o(),
      stickers: flags & 0x1 ? this.v(this.o) : undefined,
      ttl_seconds: flags & 0x2 ? this.i32() : undefined,
    }
  }
  W() {
    const flags = this.i32();
    return {
      _: 'inputMediaPhoto' as const,
      id: this.o(),
      ttl_seconds: flags & 0x1 ? this.i32() : undefined,
    }
  }
  X = () => ({_: 'inputMediaGeoPoint', geo_point: this.o()})
  Y = () => ({_: 'inputMediaContact', phone_number: this.s(), first_name: this.s(), last_name: this.s(), vcard: this.s()})
  BJ = () => ({_: 'inputChatPhotoEmpty'})
  BK = () => ({_: 'inputChatUploadedPhoto', file: this.o()})
  BL = () => ({_: 'inputChatPhoto', id: this.o()})
  BM = () => ({_: 'inputGeoPointEmpty'})
  BN = () => ({_: 'inputGeoPoint', lat: this.d(), long: this.d()})
  BO = () => ({_: 'inputPhotoEmpty'})
  BP = () => ({_: 'inputPhoto', id: this.i64(), access_hash: this.i64(), file_reference: this.b()})
  BQ = () => ({_: 'inputFileLocation', volume_id: this.i64(), local_id: this.i32(), secret: this.i64(), file_reference: this.b()})
  BY = () => ({_: 'peerUser', user_id: this.i32()})
  BZ = () => ({_: 'peerChat', chat_id: this.i32()})
  CB = () => ({_: 'storage.fileUnknown'})
  CC = () => ({_: 'storage.filePartial'})
  CD = () => ({_: 'storage.fileJpeg'})
  CE = () => ({_: 'storage.fileGif'})
  CF = () => ({_: 'storage.filePng'})
  CG = () => ({_: 'storage.filePdf'})
  CH = () => ({_: 'storage.fileMp3'})
  CI = () => ({_: 'storage.fileMov'})
  CJ = () => ({_: 'storage.fileMp4'})
  CK = () => ({_: 'storage.fileWebp'})
  CL = () => ({_: 'userEmpty', id: this.i32()})
  CN = () => ({_: 'userProfilePhotoEmpty'})
  CO = () => ({_: 'userProfilePhoto', photo_id: this.i64(), photo_small: this.o(), photo_big: this.o(), dc_id: this.i32()})
  CP = () => ({_: 'userStatusEmpty'})
  CQ = () => ({_: 'userStatusOnline', expires: this.i32()})
  CR = () => ({_: 'userStatusOffline', was_online: this.i32()})
  CV = () => ({_: 'chatEmpty', id: this.i32()})
  CW() {
    const flags = this.i32();
    return {
      _: 'chat' as const,
      creator: !!(flags & 0x1),
      kicked: !!(flags & 0x2),
      left: !!(flags & 0x4),
      deactivated: !!(flags & 0x20),
      id: this.i32(),
      title: this.s(),
      photo: this.o(),
      participants_count: this.i32(),
      date: this.i32(),
      version: this.i32(),
      migrated_to: flags & 0x40 ? this.o() : undefined,
      admin_rights: flags & 0x4000 ? this.o() : undefined,
      default_banned_rights: flags & 0x40000 ? this.o() : undefined,
    }
  }
  CX = () => ({_: 'chatForbidden', id: this.i32(), title: this.s()})
  DA() {
    const flags = this.i32();
    return {
      _: 'chatFull' as const,
      can_set_username: !!(flags & 0x80),
      has_scheduled: !!(flags & 0x100),
      id: this.i32(),
      about: this.s(),
      participants: this.o(),
      chat_photo: flags & 0x4 ? this.o() : undefined,
      notify_settings: this.o(),
      exported_invite: this.o(),
      bot_info: flags & 0x8 ? this.v(this.o) : undefined,
      pinned_msg_id: flags & 0x40 ? this.i32() : undefined,
      folder_id: flags & 0x800 ? this.i32() : undefined,
    }
  }
  DC = () => ({_: 'chatParticipant', user_id: this.i32(), inviter_id: this.i32(), date: this.i32()})
  DF() {
    const flags = this.i32();
    return {
      _: 'chatParticipantsForbidden' as const,
      chat_id: this.i32(),
      self_participant: flags & 0x1 ? this.o() : undefined,
    }
  }
  DG = () => ({_: 'chatParticipants', chat_id: this.i32(), participants: this.v(this.o), version: this.i32()})
  DH = () => ({_: 'chatPhotoEmpty'})
  DI = () => ({_: 'chatPhoto', photo_small: this.o(), photo_big: this.o(), dc_id: this.i32()})
  DJ = () => ({_: 'messageEmpty', id: this.i32()})
  DK() {
    const flags = this.i32();
    return {
      _: 'message' as const,
      out: !!(flags & 0x2),
      mentioned: !!(flags & 0x10),
      media_unread: !!(flags & 0x20),
      silent: !!(flags & 0x2000),
      post: !!(flags & 0x4000),
      from_scheduled: !!(flags & 0x40000),
      legacy: !!(flags & 0x80000),
      edit_hide: !!(flags & 0x200000),
      id: this.i32(),
      from_id: flags & 0x100 ? this.i32() : undefined,
      to_id: this.o(),
      fwd_from: flags & 0x4 ? this.o() : undefined,
      via_bot_id: flags & 0x800 ? this.i32() : undefined,
      reply_to_msg_id: flags & 0x8 ? this.i32() : undefined,
      date: this.i32(),
      message: this.s(),
      media: flags & 0x200 ? this.o() : undefined,
      reply_markup: flags & 0x40 ? this.o() : undefined,
      entities: flags & 0x80 ? this.v(this.o) : undefined,
      views: flags & 0x400 ? this.i32() : undefined,
      edit_date: flags & 0x8000 ? this.i32() : undefined,
      post_author: flags & 0x10000 ? this.s() : undefined,
      grouped_id: flags & 0x20000 ? this.i64() : undefined,
      restriction_reason: flags & 0x400000 ? this.v(this.o) : undefined,
    }
  }
  DL() {
    const flags = this.i32();
    return {
      _: 'messageService' as const,
      out: !!(flags & 0x2),
      mentioned: !!(flags & 0x10),
      media_unread: !!(flags & 0x20),
      silent: !!(flags & 0x2000),
      post: !!(flags & 0x4000),
      legacy: !!(flags & 0x80000),
      id: this.i32(),
      from_id: flags & 0x100 ? this.i32() : undefined,
      to_id: this.o(),
      reply_to_msg_id: flags & 0x8 ? this.i32() : undefined,
      date: this.i32(),
      action: this.o(),
    }
  }
  DM = () => ({_: 'messageMediaEmpty'})
  DN() {
    const flags = this.i32();
    return {
      _: 'messageMediaPhoto' as const,
      photo: flags & 0x1 ? this.o() : undefined,
      ttl_seconds: flags & 0x4 ? this.i32() : undefined,
    }
  }
  DO = () => ({_: 'messageMediaGeo', geo: this.o()})
  DP = () => ({_: 'messageMediaContact', phone_number: this.s(), first_name: this.s(), last_name: this.s(), vcard: this.s(), user_id: this.i32()})
  DQ = () => ({_: 'messageMediaUnsupported'})
  DY = () => ({_: 'messageActionEmpty'})
  DZ = () => ({_: 'messageActionChatCreate', title: this.s(), users: this.v(this.i32)})
  EA = () => ({_: 'messageActionChatEditTitle', title: this.s()})
  EB = () => ({_: 'messageActionChatEditPhoto', photo: this.o()})
  EC = () => ({_: 'messageActionChatDeletePhoto'})
  ED = () => ({_: 'messageActionChatAddUser', users: this.v(this.i32)})
  EE = () => ({_: 'messageActionChatDeleteUser', user_id: this.i32()})
  EV() {
    const flags = this.i32();
    return {
      _: 'dialog' as const,
      pinned: !!(flags & 0x4),
      unread_mark: !!(flags & 0x8),
      peer: this.o(),
      top_message: this.i32(),
      read_inbox_max_id: this.i32(),
      read_outbox_max_id: this.i32(),
      unread_count: this.i32(),
      unread_mentions_count: this.i32(),
      notify_settings: this.o(),
      pts: flags & 0x1 ? this.i32() : undefined,
      draft: flags & 0x2 ? this.o() : undefined,
      folder_id: flags & 0x10 ? this.i32() : undefined,
    }
  }
  EX = () => ({_: 'photoEmpty', id: this.i64()})
  EY() {
    const flags = this.i32();
    return {
      _: 'photo' as const,
      has_stickers: !!(flags & 0x1),
      id: this.i64(),
      access_hash: this.i64(),
      file_reference: this.b(),
      date: this.i32(),
      sizes: this.v(this.o),
      dc_id: this.i32(),
    }
  }
  EZ = () => ({_: 'photoSizeEmpty', type: this.s()})
  FA = () => ({_: 'photoSize', type: this.s(), location: this.o(), w: this.i32(), h: this.i32(), size: this.i32()})
  FB = () => ({_: 'photoCachedSize', type: this.s(), location: this.o(), w: this.i32(), h: this.i32(), bytes: this.b()})
  FD = () => ({_: 'geoPointEmpty'})
  FE = () => ({_: 'geoPoint', long: this.d(), lat: this.d(), access_hash: this.i64()})
  FF() {
    const flags = this.i32();
    return {
      _: 'auth.sentCode' as const,
      type: this.o(),
      phone_code_hash: this.s(),
      next_type: flags & 0x2 ? this.o() : undefined,
      timeout: flags & 0x4 ? this.i32() : undefined,
    }
  }
  FG() {
    const flags = this.i32();
    return {
      _: 'auth.authorization' as const,
      tmp_sessions: flags & 0x1 ? this.i32() : undefined,
      user: this.o(),
    }
  }
  FI = () => ({_: 'auth.exportedAuthorization', id: this.i32(), bytes: this.b()})
  FJ = () => ({_: 'inputNotifyPeer', peer: this.o()})
  FK = () => ({_: 'inputNotifyUsers'})
  FL = () => ({_: 'inputNotifyChats'})
  FN() {
    const flags = this.i32();
    return {
      _: 'inputPeerNotifySettings' as const,
      show_previews: flags & 0x1 ? this.o() : undefined,
      silent: flags & 0x2 ? this.o() : undefined,
      mute_until: flags & 0x4 ? this.i32() : undefined,
      sound: flags & 0x8 ? this.s() : undefined,
    }
  }
  FO() {
    const flags = this.i32();
    return {
      _: 'peerNotifySettings' as const,
      show_previews: flags & 0x1 ? this.o() : undefined,
      silent: flags & 0x2 ? this.o() : undefined,
      mute_until: flags & 0x4 ? this.i32() : undefined,
      sound: flags & 0x8 ? this.s() : undefined,
    }
  }
  FP() {
    const flags = this.i32();
    return {
      _: 'peerSettings' as const,
      report_spam: !!(flags & 0x1),
      add_contact: !!(flags & 0x2),
      block_contact: !!(flags & 0x4),
      share_contact: !!(flags & 0x8),
      need_contacts_exception: !!(flags & 0x10),
      report_geo: !!(flags & 0x20),
    }
  }
  FQ() {
    const flags = this.i32();
    return {
      _: 'wallPaper' as const,
      id: this.i64(),
      creator: !!(flags & 0x1),
      default: !!(flags & 0x2),
      pattern: !!(flags & 0x8),
      dark: !!(flags & 0x10),
      access_hash: this.i64(),
      slug: this.s(),
      document: this.o(),
      settings: flags & 0x4 ? this.o() : undefined,
    }
  }
  FR = () => ({_: 'inputReportReasonSpam'})
  FS = () => ({_: 'inputReportReasonViolence'})
  FT = () => ({_: 'inputReportReasonPornography'})
  FU = () => ({_: 'inputReportReasonChildAbuse'})
  FV = () => ({_: 'inputReportReasonOther', text: this.s()})
  FY() {
    const flags = this.i32();
    return {
      _: 'userFull' as const,
      blocked: !!(flags & 0x1),
      phone_calls_available: !!(flags & 0x10),
      phone_calls_private: !!(flags & 0x20),
      can_pin_message: !!(flags & 0x80),
      has_scheduled: !!(flags & 0x1000),
      user: this.o(),
      about: flags & 0x2 ? this.s() : undefined,
      settings: this.o(),
      profile_photo: flags & 0x4 ? this.o() : undefined,
      notify_settings: this.o(),
      bot_info: flags & 0x8 ? this.o() : undefined,
      pinned_msg_id: flags & 0x40 ? this.i32() : undefined,
      common_chats_count: this.i32(),
      folder_id: flags & 0x800 ? this.i32() : undefined,
    }
  }
  FZ = () => ({_: 'contact', user_id: this.i32(), mutual: this.o()})
  GA = () => ({_: 'importedContact', user_id: this.i32(), client_id: this.i64()})
  GB = () => ({_: 'contactBlocked', user_id: this.i32(), date: this.i32()})
  GC = () => ({_: 'contactStatus', user_id: this.i32(), status: this.o()})
  GD = () => ({_: 'contacts.contactsNotModified'})
  GE = () => ({_: 'contacts.contacts', contacts: this.v(this.o), saved_count: this.i32(), users: this.v(this.o)})
  GF = () => ({_: 'contacts.importedContacts', imported: this.v(this.o), popular_invites: this.v(this.o), retry_contacts: this.v(this.i64), users: this.v(this.o)})
  GG = () => ({_: 'contacts.blocked', blocked: this.v(this.o), users: this.v(this.o)})
  GH = () => ({_: 'contacts.blockedSlice', count: this.i32(), blocked: this.v(this.o), users: this.v(this.o)})
  GI = () => ({_: 'messages.dialogs', dialogs: this.v(this.o), messages: this.v(this.o), chats: this.v(this.o), users: this.v(this.o)})
  GJ = () => ({_: 'messages.dialogsSlice', count: this.i32(), dialogs: this.v(this.o), messages: this.v(this.o), chats: this.v(this.o), users: this.v(this.o)})
  GL = () => ({_: 'messages.messages', messages: this.v(this.o), chats: this.v(this.o), users: this.v(this.o)})
  GM() {
    const flags = this.i32();
    return {
      _: 'messages.messagesSlice' as const,
      inexact: !!(flags & 0x2),
      count: this.i32(),
      next_rate: flags & 0x1 ? this.i32() : undefined,
      messages: this.v(this.o),
      chats: this.v(this.o),
      users: this.v(this.o),
    }
  }
  GP = () => ({_: 'messages.chats', chats: this.v(this.o)})
  GR = () => ({_: 'messages.chatFull', full_chat: this.o(), chats: this.v(this.o), users: this.v(this.o)})
  GS = () => ({_: 'messages.affectedHistory', pts: this.i32(), pts_count: this.i32(), offset: this.i32()})
  GT = () => ({_: 'inputMessagesFilterEmpty'})
  GU = () => ({_: 'inputMessagesFilterPhotos'})
  GV = () => ({_: 'inputMessagesFilterVideo'})
  GW = () => ({_: 'inputMessagesFilterPhotoVideo'})
  GX = () => ({_: 'inputMessagesFilterDocument'})
  GY = () => ({_: 'inputMessagesFilterUrl'})
  GZ = () => ({_: 'inputMessagesFilterGif'})
  HJ = () => ({_: 'updateNewMessage', message: this.o(), pts: this.i32(), pts_count: this.i32()})
  HK = () => ({_: 'updateMessageID', id: this.i32(), random_id: this.i64()})
  HL = () => ({_: 'updateDeleteMessages', messages: this.v(this.i32), pts: this.i32(), pts_count: this.i32()})
  HM = () => ({_: 'updateUserTyping', user_id: this.i32(), action: this.o()})
  HN = () => ({_: 'updateChatUserTyping', chat_id: this.i32(), user_id: this.i32(), action: this.o()})
  HO = () => ({_: 'updateChatParticipants', participants: this.o()})
  HP = () => ({_: 'updateUserStatus', user_id: this.i32(), status: this.o()})
  HQ = () => ({_: 'updateUserName', user_id: this.i32(), first_name: this.s(), last_name: this.s(), username: this.s()})
  HR = () => ({_: 'updateUserPhoto', user_id: this.i32(), date: this.i32(), photo: this.o(), previous: this.o()})
  KF = () => ({_: 'updates.state', pts: this.i32(), qts: this.i32(), date: this.i32(), seq: this.i32(), unread_count: this.i32()})
  KG = () => ({_: 'updates.differenceEmpty', date: this.i32(), seq: this.i32()})
  KH = () => ({_: 'updates.difference', new_messages: this.v(this.o), new_encrypted_messages: this.v(this.o), other_updates: this.v(this.o), chats: this.v(this.o), users: this.v(this.o), state: this.o()})
  KI = () => ({_: 'updates.differenceSlice', new_messages: this.v(this.o), new_encrypted_messages: this.v(this.o), other_updates: this.v(this.o), chats: this.v(this.o), users: this.v(this.o), intermediate_state: this.o()})
  KK = () => ({_: 'updatesTooLong'})
  KL() {
    const flags = this.i32();
    return {
      _: 'updateShortMessage' as const,
      out: !!(flags & 0x2),
      mentioned: !!(flags & 0x10),
      media_unread: !!(flags & 0x20),
      silent: !!(flags & 0x2000),
      id: this.i32(),
      user_id: this.i32(),
      message: this.s(),
      pts: this.i32(),
      pts_count: this.i32(),
      date: this.i32(),
      fwd_from: flags & 0x4 ? this.o() : undefined,
      via_bot_id: flags & 0x800 ? this.i32() : undefined,
      reply_to_msg_id: flags & 0x8 ? this.i32() : undefined,
      entities: flags & 0x80 ? this.v(this.o) : undefined,
    }
  }
  KM() {
    const flags = this.i32();
    return {
      _: 'updateShortChatMessage' as const,
      out: !!(flags & 0x2),
      mentioned: !!(flags & 0x10),
      media_unread: !!(flags & 0x20),
      silent: !!(flags & 0x2000),
      id: this.i32(),
      from_id: this.i32(),
      chat_id: this.i32(),
      message: this.s(),
      pts: this.i32(),
      pts_count: this.i32(),
      date: this.i32(),
      fwd_from: flags & 0x4 ? this.o() : undefined,
      via_bot_id: flags & 0x800 ? this.i32() : undefined,
      reply_to_msg_id: flags & 0x8 ? this.i32() : undefined,
      entities: flags & 0x80 ? this.v(this.o) : undefined,
    }
  }
  KN = () => ({_: 'updateShort', update: this.o(), date: this.i32()})
  KO = () => ({_: 'updatesCombined', updates: this.v(this.o), users: this.v(this.o), chats: this.v(this.o), date: this.i32(), seq_start: this.i32(), seq: this.i32()})
  KP = () => ({_: 'updates', updates: this.v(this.o), users: this.v(this.o), chats: this.v(this.o), date: this.i32(), seq: this.i32()})
  KR = () => ({_: 'photos.photos', photos: this.v(this.o), users: this.v(this.o)})
  KS = () => ({_: 'photos.photosSlice', count: this.i32(), photos: this.v(this.o), users: this.v(this.o)})
  KT = () => ({_: 'photos.photo', photo: this.o(), users: this.v(this.o)})
  KU = () => ({_: 'upload.file', type: this.o(), mtime: this.i32(), bytes: this.b()})
  KW() {
    const flags = this.i32();
    return {
      _: 'dcOption' as const,
      ipv6: !!(flags & 0x1),
      media_only: !!(flags & 0x2),
      tcpo_only: !!(flags & 0x4),
      cdn: !!(flags & 0x8),
      static: !!(flags & 0x10),
      id: this.i32(),
      ip_address: this.s(),
      port: this.i32(),
      secret: flags & 0x400 ? this.b() : undefined,
    }
  }
  KX() {
    const flags = this.i32();
    return {
      _: 'config' as const,
      phonecalls_enabled: !!(flags & 0x2),
      default_p2p_contacts: !!(flags & 0x8),
      preload_featured_stickers: !!(flags & 0x10),
      ignore_phone_entities: !!(flags & 0x20),
      revoke_pm_inbox: !!(flags & 0x40),
      blocked_mode: !!(flags & 0x100),
      pfs_enabled: !!(flags & 0x2000),
      date: this.i32(),
      expires: this.i32(),
      test_mode: this.o(),
      this_dc: this.i32(),
      dc_options: this.v(this.o),
      dc_txt_domain_name: this.s(),
      chat_size_max: this.i32(),
      megagroup_size_max: this.i32(),
      forwarded_count_max: this.i32(),
      online_update_period_ms: this.i32(),
      offline_blur_timeout_ms: this.i32(),
      offline_idle_timeout_ms: this.i32(),
      online_cloud_timeout_ms: this.i32(),
      notify_cloud_delay_ms: this.i32(),
      notify_default_delay_ms: this.i32(),
      push_chat_period_ms: this.i32(),
      push_chat_limit: this.i32(),
      saved_gifs_limit: this.i32(),
      edit_time_limit: this.i32(),
      revoke_time_limit: this.i32(),
      revoke_pm_time_limit: this.i32(),
      rating_e_decay: this.i32(),
      stickers_recent_limit: this.i32(),
      stickers_faved_limit: this.i32(),
      channels_read_media_period: this.i32(),
      tmp_sessions: flags & 0x1 ? this.i32() : undefined,
      pinned_dialogs_count_max: this.i32(),
      pinned_infolder_count_max: this.i32(),
      call_receive_timeout_ms: this.i32(),
      call_ring_timeout_ms: this.i32(),
      call_connect_timeout_ms: this.i32(),
      call_packet_timeout_ms: this.i32(),
      me_url_prefix: this.s(),
      autoupdate_url_prefix: flags & 0x80 ? this.s() : undefined,
      gif_search_username: flags & 0x200 ? this.s() : undefined,
      venue_search_username: flags & 0x400 ? this.s() : undefined,
      img_search_username: flags & 0x800 ? this.s() : undefined,
      static_maps_provider: flags & 0x1000 ? this.s() : undefined,
      caption_length_max: this.i32(),
      message_length_max: this.i32(),
      webfile_dc_id: this.i32(),
      suggested_lang_code: flags & 0x4 ? this.s() : undefined,
      lang_pack_version: flags & 0x4 ? this.i32() : undefined,
      base_lang_pack_version: flags & 0x4 ? this.i32() : undefined,
    }
  }
  KY = () => ({_: 'nearestDc', country: this.s(), this_dc: this.i32(), nearest_dc: this.i32()})
  KZ() {
    const flags = this.i32();
    return {
      _: 'help.appUpdate' as const,
      can_not_skip: !!(flags & 0x1),
      id: this.i32(),
      version: this.s(),
      text: this.s(),
      entities: this.v(this.o),
      document: flags & 0x2 ? this.o() : undefined,
      url: flags & 0x4 ? this.s() : undefined,
    }
  }
  LA = () => ({_: 'help.noAppUpdate'})
  LB = () => ({_: 'help.inviteText', message: this.s()})
  HS = () => ({_: 'updateNewEncryptedMessage', message: this.o(), qts: this.i32()})
  HT = () => ({_: 'updateEncryptedChatTyping', chat_id: this.i32()})
  HU = () => ({_: 'updateEncryption', chat: this.o(), date: this.i32()})
  HV = () => ({_: 'updateEncryptedMessagesRead', chat_id: this.i32(), max_date: this.i32(), date: this.i32()})
  LC = () => ({_: 'encryptedChatEmpty', id: this.i32()})
  LD = () => ({_: 'encryptedChatWaiting', id: this.i32(), access_hash: this.i64(), date: this.i32(), admin_id: this.i32(), participant_id: this.i32()})
  LE = () => ({_: 'encryptedChatRequested', id: this.i32(), access_hash: this.i64(), date: this.i32(), admin_id: this.i32(), participant_id: this.i32(), g_a: this.b()})
  LF = () => ({_: 'encryptedChat', id: this.i32(), access_hash: this.i64(), date: this.i32(), admin_id: this.i32(), participant_id: this.i32(), g_a_or_b: this.b(), key_fingerprint: this.i64()})
  LG = () => ({_: 'encryptedChatDiscarded', id: this.i32()})
  LH = () => ({_: 'inputEncryptedChat', chat_id: this.i32(), access_hash: this.i64()})
  LI = () => ({_: 'encryptedFileEmpty'})
  LJ = () => ({_: 'encryptedFile', id: this.i64(), access_hash: this.i64(), size: this.i32(), dc_id: this.i32(), key_fingerprint: this.i32()})
  LK = () => ({_: 'inputEncryptedFileEmpty'})
  LL = () => ({_: 'inputEncryptedFileUploaded', id: this.i64(), parts: this.i32(), md5_checksum: this.s(), key_fingerprint: this.i32()})
  LM = () => ({_: 'inputEncryptedFile', id: this.i64(), access_hash: this.i64()})
  BR = () => ({_: 'inputEncryptedFileLocation', id: this.i64(), access_hash: this.i64()})
  LO = () => ({_: 'encryptedMessage', random_id: this.i64(), chat_id: this.i32(), date: this.i32(), bytes: this.b(), file: this.o()})
  LP = () => ({_: 'encryptedMessageService', random_id: this.i64(), chat_id: this.i32(), date: this.i32(), bytes: this.b()})
  LQ = () => ({_: 'messages.dhConfigNotModified', random: this.b()})
  LR = () => ({_: 'messages.dhConfig', g: this.i32(), p: this.b(), version: this.i32(), random: this.b()})
  LS = () => ({_: 'messages.sentEncryptedMessage', date: this.i32()})
  LT = () => ({_: 'messages.sentEncryptedFile', date: this.i32(), file: this.o()})
  T = () => ({_: 'inputFileBig', id: this.i64(), parts: this.i32(), name: this.s()})
  LN = () => ({_: 'inputEncryptedFileBigUploaded', id: this.i64(), parts: this.i32(), key_fingerprint: this.i32()})
  HW = () => ({_: 'updateChatParticipantAdd', chat_id: this.i32(), user_id: this.i32(), inviter_id: this.i32(), date: this.i32(), version: this.i32()})
  HX = () => ({_: 'updateChatParticipantDelete', chat_id: this.i32(), user_id: this.i32(), version: this.i32()})
  HY = () => ({_: 'updateDcOptions', dc_options: this.v(this.o)})
  Z() {
    const flags = this.i32();
    return {
      _: 'inputMediaUploadedDocument' as const,
      nosound_video: !!(flags & 0x8),
      file: this.o(),
      thumb: flags & 0x4 ? this.o() : undefined,
      mime_type: this.s(),
      attributes: this.v(this.o),
      stickers: flags & 0x1 ? this.v(this.o) : undefined,
      ttl_seconds: flags & 0x2 ? this.i32() : undefined,
    }
  }
  BA() {
    const flags = this.i32();
    return {
      _: 'inputMediaDocument' as const,
      id: this.o(),
      ttl_seconds: flags & 0x1 ? this.i32() : undefined,
    }
  }
  DR() {
    const flags = this.i32();
    return {
      _: 'messageMediaDocument' as const,
      document: flags & 0x1 ? this.o() : undefined,
      ttl_seconds: flags & 0x4 ? this.i32() : undefined,
    }
  }
  LU = () => ({_: 'inputDocumentEmpty'})
  LV = () => ({_: 'inputDocument', id: this.i64(), access_hash: this.i64(), file_reference: this.b()})
  BS = () => ({_: 'inputDocumentFileLocation', id: this.i64(), access_hash: this.i64(), file_reference: this.b(), thumb_size: this.s()})
  LW = () => ({_: 'documentEmpty', id: this.i64()})
  LX() {
    const flags = this.i32();
    return {
      _: 'document' as const,
      id: this.i64(),
      access_hash: this.i64(),
      file_reference: this.b(),
      date: this.i32(),
      mime_type: this.s(),
      size: this.i32(),
      thumbs: flags & 0x1 ? this.v(this.o) : undefined,
      dc_id: this.i32(),
      attributes: this.v(this.o),
    }
  }
  LY = () => ({_: 'help.support', phone_number: this.s(), user: this.o()})
  LZ = () => ({_: 'notifyPeer', peer: this.o()})
  MA = () => ({_: 'notifyUsers'})
  MB = () => ({_: 'notifyChats'})
  HZ = () => ({_: 'updateUserBlocked', user_id: this.i32(), blocked: this.o()})
  IA = () => ({_: 'updateNotifySettings', peer: this.o(), notify_settings: this.o()})
  MD = () => ({_: 'sendMessageTypingAction'})
  ME = () => ({_: 'sendMessageCancelAction'})
  MF = () => ({_: 'sendMessageRecordVideoAction'})
  MG = () => ({_: 'sendMessageUploadVideoAction', progress: this.i32()})
  MH = () => ({_: 'sendMessageRecordAudioAction'})
  MI = () => ({_: 'sendMessageUploadAudioAction', progress: this.i32()})
  MJ = () => ({_: 'sendMessageUploadPhotoAction', progress: this.i32()})
  MK = () => ({_: 'sendMessageUploadDocumentAction', progress: this.i32()})
  ML = () => ({_: 'sendMessageGeoLocationAction'})
  MM = () => ({_: 'sendMessageChooseContactAction'})
  MQ = () => ({_: 'contacts.found', my_results: this.v(this.o), results: this.v(this.o), chats: this.v(this.o), users: this.v(this.o)})
  IB() {
    const flags = this.i32();
    return {
      _: 'updateServiceNotification' as const,
      popup: !!(flags & 0x1),
      inbox_date: flags & 0x2 ? this.i32() : undefined,
      type: this.s(),
      message: this.s(),
      media: this.o(),
      entities: this.v(this.o),
    }
  }
  CS = () => ({_: 'userStatusRecently'})
  CT = () => ({_: 'userStatusLastWeek'})
  CU = () => ({_: 'userStatusLastMonth'})
  IC = () => ({_: 'updatePrivacy', key: this.o(), rules: this.v(this.o)})
  MR = () => ({_: 'inputPrivacyKeyStatusTimestamp'})
  MZ = () => ({_: 'privacyKeyStatusTimestamp'})
  NH = () => ({_: 'inputPrivacyValueAllowContacts'})
  NI = () => ({_: 'inputPrivacyValueAllowAll'})
  NJ = () => ({_: 'inputPrivacyValueAllowUsers', users: this.v(this.o)})
  NK = () => ({_: 'inputPrivacyValueDisallowContacts'})
  NL = () => ({_: 'inputPrivacyValueDisallowAll'})
  NM = () => ({_: 'inputPrivacyValueDisallowUsers', users: this.v(this.o)})
  NP = () => ({_: 'privacyValueAllowContacts'})
  NQ = () => ({_: 'privacyValueAllowAll'})
  NR = () => ({_: 'privacyValueAllowUsers', users: this.v(this.i32)})
  NS = () => ({_: 'privacyValueDisallowContacts'})
  NT = () => ({_: 'privacyValueDisallowAll'})
  NU = () => ({_: 'privacyValueDisallowUsers', users: this.v(this.i32)})
  NX = () => ({_: 'account.privacyRules', rules: this.v(this.o), chats: this.v(this.o), users: this.v(this.o)})
  NY = () => ({_: 'accountDaysTTL', days: this.i32()})
  ID = () => ({_: 'updateUserPhone', user_id: this.i32(), phone: this.s()})
  NZ = () => ({_: 'documentAttributeImageSize', w: this.i32(), h: this.i32()})
  OA = () => ({_: 'documentAttributeAnimated'})
  OB() {
    const flags = this.i32();
    return {
      _: 'documentAttributeSticker' as const,
      mask: !!(flags & 0x2),
      alt: this.s(),
      stickerset: this.o(),
      mask_coords: flags & 0x1 ? this.o() : undefined,
    }
  }
  OC() {
    const flags = this.i32();
    return {
      _: 'documentAttributeVideo' as const,
      round_message: !!(flags & 0x1),
      supports_streaming: !!(flags & 0x2),
      duration: this.i32(),
      w: this.i32(),
      h: this.i32(),
    }
  }
  OD() {
    const flags = this.i32();
    return {
      _: 'documentAttributeAudio' as const,
      voice: !!(flags & 0x400),
      duration: this.i32(),
      title: flags & 0x1 ? this.s() : undefined,
      performer: flags & 0x2 ? this.s() : undefined,
      waveform: flags & 0x4 ? this.b() : undefined,
    }
  }
  OE = () => ({_: 'documentAttributeFilename', file_name: this.s()})
  OG = () => ({_: 'messages.stickersNotModified'})
  OH = () => ({_: 'messages.stickers', hash: this.i32(), stickers: this.v(this.o)})
  OI = () => ({_: 'stickerPack', emoticon: this.s(), documents: this.v(this.i64)})
  OJ = () => ({_: 'messages.allStickersNotModified'})
  OK = () => ({_: 'messages.allStickers', hash: this.i32(), sets: this.v(this.o)})
  IE() {
    const flags = this.i32();
    return {
      _: 'updateReadHistoryInbox' as const,
      folder_id: flags & 0x1 ? this.i32() : undefined,
      peer: this.o(),
      max_id: this.i32(),
      still_unread_count: this.i32(),
      pts: this.i32(),
      pts_count: this.i32(),
    }
  }
  IF = () => ({_: 'updateReadHistoryOutbox', peer: this.o(), max_id: this.i32(), pts: this.i32(), pts_count: this.i32()})
  OL = () => ({_: 'messages.affectedMessages', pts: this.i32(), pts_count: this.i32()})
  IG = () => ({_: 'updateWebPage', webpage: this.o(), pts: this.i32(), pts_count: this.i32()})
  OM = () => ({_: 'webPageEmpty', id: this.i64()})
  ON = () => ({_: 'webPagePending', id: this.i64(), date: this.i32()})
  OO() {
    const flags = this.i32();
    return {
      _: 'webPage' as const,
      id: this.i64(),
      url: this.s(),
      display_url: this.s(),
      hash: this.i32(),
      type: flags & 0x1 ? this.s() : undefined,
      site_name: flags & 0x2 ? this.s() : undefined,
      title: flags & 0x4 ? this.s() : undefined,
      description: flags & 0x8 ? this.s() : undefined,
      photo: flags & 0x10 ? this.o() : undefined,
      embed_url: flags & 0x20 ? this.s() : undefined,
      embed_type: flags & 0x20 ? this.s() : undefined,
      embed_width: flags & 0x40 ? this.i32() : undefined,
      embed_height: flags & 0x40 ? this.i32() : undefined,
      duration: flags & 0x80 ? this.i32() : undefined,
      author: flags & 0x100 ? this.s() : undefined,
      document: flags & 0x200 ? this.o() : undefined,
      cached_page: flags & 0x400 ? this.o() : undefined,
      attributes: flags & 0x1000 ? this.v(this.o) : undefined,
    }
  }
  DS = () => ({_: 'messageMediaWebPage', webpage: this.o()})
  OQ() {
    const flags = this.i32();
    return {
      _: 'authorization' as const,
      current: !!(flags & 0x1),
      official_app: !!(flags & 0x2),
      password_pending: !!(flags & 0x4),
      hash: this.i64(),
      device_model: this.s(),
      platform: this.s(),
      system_version: this.s(),
      api_id: this.i32(),
      app_name: this.s(),
      app_version: this.s(),
      date_created: this.i32(),
      date_active: this.i32(),
      ip: this.s(),
      country: this.s(),
      region: this.s(),
    }
  }
  OR = () => ({_: 'account.authorizations', authorizations: this.v(this.o)})
  OS() {
    const flags = this.i32();
    return {
      _: 'account.password' as const,
      has_recovery: !!(flags & 0x1),
      has_secure_values: !!(flags & 0x2),
      has_password: !!(flags & 0x4),
      current_algo: flags & 0x4 ? this.o() : undefined,
      srp_B: flags & 0x4 ? this.b() : undefined,
      srp_id: flags & 0x4 ? this.i64() : undefined,
      hint: flags & 0x8 ? this.s() : undefined,
      email_unconfirmed_pattern: flags & 0x10 ? this.s() : undefined,
      new_algo: this.o(),
      new_secure_algo: this.o(),
      secure_random: this.b(),
    }
  }
  OT() {
    const flags = this.i32();
    return {
      _: 'account.passwordSettings' as const,
      email: flags & 0x1 ? this.s() : undefined,
      secure_settings: flags & 0x2 ? this.o() : undefined,
    }
  }
  OU() {
    const flags = this.i32();
    return {
      _: 'account.passwordInputSettings' as const,
      new_algo: flags & 0x1 ? this.o() : undefined,
      new_password_hash: flags & 0x1 ? this.b() : undefined,
      hint: flags & 0x1 ? this.s() : undefined,
      email: flags & 0x2 ? this.s() : undefined,
      new_secure_settings: flags & 0x4 ? this.o() : undefined,
    }
  }
  OV = () => ({_: 'auth.passwordRecovery', email_pattern: this.s()})
  BB = () => ({_: 'inputMediaVenue', geo_point: this.o(), title: this.s(), address: this.s(), provider: this.s(), venue_id: this.s(), venue_type: this.s()})
  DT = () => ({_: 'messageMediaVenue', geo: this.o(), title: this.s(), address: this.s(), provider: this.s(), venue_id: this.s(), venue_type: this.s()})
  OW() {
    return {
      _: 'receivedNotifyMessage' as const,
      id: this.i32(),
      flags: this.i32(),
    }
  }
  OX = () => ({_: 'chatInviteEmpty'})
  OY = () => ({_: 'chatInviteExported', link: this.s()})
  OZ = () => ({_: 'chatInviteAlready', chat: this.o()})
  PA() {
    const flags = this.i32();
    return {
      _: 'chatInvite' as const,
      channel: !!(flags & 0x1),
      broadcast: !!(flags & 0x2),
      public: !!(flags & 0x4),
      megagroup: !!(flags & 0x8),
      title: this.s(),
      photo: this.o(),
      participants_count: this.i32(),
      participants: flags & 0x10 ? this.v(this.o) : undefined,
    }
  }
  EF = () => ({_: 'messageActionChatJoinedByLink', inviter_id: this.i32()})
  IH = () => ({_: 'updateReadMessagesContents', messages: this.v(this.i32), pts: this.i32(), pts_count: this.i32()})
  PB = () => ({_: 'inputStickerSetEmpty'})
  PC = () => ({_: 'inputStickerSetID', id: this.i64(), access_hash: this.i64()})
  PD = () => ({_: 'inputStickerSetShortName', short_name: this.s()})
  PF() {
    const flags = this.i32();
    return {
      _: 'stickerSet' as const,
      archived: !!(flags & 0x2),
      official: !!(flags & 0x4),
      masks: !!(flags & 0x8),
      animated: !!(flags & 0x20),
      installed_date: flags & 0x1 ? this.i32() : undefined,
      id: this.i64(),
      access_hash: this.i64(),
      title: this.s(),
      short_name: this.s(),
      thumb: flags & 0x10 ? this.o() : undefined,
      thumb_dc_id: flags & 0x10 ? this.i32() : undefined,
      count: this.i32(),
      hash: this.i32(),
    }
  }
  PG = () => ({_: 'messages.stickerSet', set: this.o(), packs: this.v(this.o), documents: this.v(this.o)})
  CM() {
    const flags = this.i32();
    return {
      _: 'user' as const,
      self: !!(flags & 0x400),
      contact: !!(flags & 0x800),
      mutual_contact: !!(flags & 0x1000),
      deleted: !!(flags & 0x2000),
      bot: !!(flags & 0x4000),
      bot_chat_history: !!(flags & 0x8000),
      bot_nochats: !!(flags & 0x10000),
      verified: !!(flags & 0x20000),
      restricted: !!(flags & 0x40000),
      min: !!(flags & 0x100000),
      bot_inline_geo: !!(flags & 0x200000),
      support: !!(flags & 0x800000),
      scam: !!(flags & 0x1000000),
      id: this.i32(),
      access_hash: flags & 0x1 ? this.i64() : undefined,
      first_name: flags & 0x2 ? this.s() : undefined,
      last_name: flags & 0x4 ? this.s() : undefined,
      username: flags & 0x8 ? this.s() : undefined,
      phone: flags & 0x10 ? this.s() : undefined,
      photo: flags & 0x20 ? this.o() : undefined,
      status: flags & 0x40 ? this.o() : undefined,
      bot_info_version: flags & 0x4000 ? this.i32() : undefined,
      restriction_reason: flags & 0x40000 ? this.v(this.o) : undefined,
      bot_inline_placeholder: flags & 0x80000 ? this.s() : undefined,
      lang_code: flags & 0x400000 ? this.s() : undefined,
    }
  }
  PH = () => ({_: 'botCommand', command: this.s(), description: this.s()})
  PI = () => ({_: 'botInfo', user_id: this.i32(), description: this.s(), commands: this.v(this.o)})
  PJ = () => ({_: 'keyboardButton', text: this.s()})
  PT = () => ({_: 'keyboardButtonRow', buttons: this.v(this.o)})
  PU() {
    const flags = this.i32();
    return {
      _: 'replyKeyboardHide' as const,
      selective: !!(flags & 0x4),
    }
  }
  PV() {
    const flags = this.i32();
    return {
      _: 'replyKeyboardForceReply' as const,
      single_use: !!(flags & 0x2),
      selective: !!(flags & 0x4),
    }
  }
  PW() {
    const flags = this.i32();
    return {
      _: 'replyKeyboardMarkup' as const,
      resize: !!(flags & 0x1),
      single_use: !!(flags & 0x2),
      selective: !!(flags & 0x4),
      rows: this.v(this.o),
    }
  }
  J = () => ({_: 'inputPeerUser', user_id: this.i32(), access_hash: this.i64()})
  P = () => ({_: 'inputUser', user_id: this.i32(), access_hash: this.i64()})
  PY = () => ({_: 'messageEntityUnknown', offset: this.i32(), length: this.i32()})
  PZ = () => ({_: 'messageEntityMention', offset: this.i32(), length: this.i32()})
  QA = () => ({_: 'messageEntityHashtag', offset: this.i32(), length: this.i32()})
  QB = () => ({_: 'messageEntityBotCommand', offset: this.i32(), length: this.i32()})
  QC = () => ({_: 'messageEntityUrl', offset: this.i32(), length: this.i32()})
  QD = () => ({_: 'messageEntityEmail', offset: this.i32(), length: this.i32()})
  QE = () => ({_: 'messageEntityBold', offset: this.i32(), length: this.i32()})
  QF = () => ({_: 'messageEntityItalic', offset: this.i32(), length: this.i32()})
  QG = () => ({_: 'messageEntityCode', offset: this.i32(), length: this.i32()})
  QH = () => ({_: 'messageEntityPre', offset: this.i32(), length: this.i32(), language: this.s()})
  QI = () => ({_: 'messageEntityTextUrl', offset: this.i32(), length: this.i32(), url: this.s()})
  KQ() {
    const flags = this.i32();
    return {
      _: 'updateShortSentMessage' as const,
      out: !!(flags & 0x2),
      id: this.i32(),
      pts: this.i32(),
      pts_count: this.i32(),
      date: this.i32(),
      media: flags & 0x200 ? this.o() : undefined,
      entities: flags & 0x80 ? this.v(this.o) : undefined,
    }
  }
  QQ = () => ({_: 'inputChannelEmpty'})
  QR = () => ({_: 'inputChannel', channel_id: this.i32(), access_hash: this.i64()})
  CA = () => ({_: 'peerChannel', channel_id: this.i32()})
  K = () => ({_: 'inputPeerChannel', channel_id: this.i32(), access_hash: this.i64()})
  CY() {
    const flags = this.i32();
    return {
      _: 'channel' as const,
      creator: !!(flags & 0x1),
      left: !!(flags & 0x4),
      broadcast: !!(flags & 0x20),
      verified: !!(flags & 0x80),
      megagroup: !!(flags & 0x100),
      restricted: !!(flags & 0x200),
      signatures: !!(flags & 0x800),
      min: !!(flags & 0x1000),
      scam: !!(flags & 0x80000),
      has_link: !!(flags & 0x100000),
      has_geo: !!(flags & 0x200000),
      slowmode_enabled: !!(flags & 0x400000),
      id: this.i32(),
      access_hash: flags & 0x2000 ? this.i64() : undefined,
      title: this.s(),
      username: flags & 0x40 ? this.s() : undefined,
      photo: this.o(),
      date: this.i32(),
      version: this.i32(),
      restriction_reason: flags & 0x200 ? this.v(this.o) : undefined,
      admin_rights: flags & 0x4000 ? this.o() : undefined,
      banned_rights: flags & 0x8000 ? this.o() : undefined,
      default_banned_rights: flags & 0x40000 ? this.o() : undefined,
      participants_count: flags & 0x20000 ? this.i32() : undefined,
    }
  }
  CZ() {
    const flags = this.i32();
    return {
      _: 'channelForbidden' as const,
      broadcast: !!(flags & 0x20),
      megagroup: !!(flags & 0x100),
      id: this.i32(),
      access_hash: this.i64(),
      title: this.s(),
      until_date: flags & 0x10000 ? this.i32() : undefined,
    }
  }
  QT = () => ({_: 'contacts.resolvedPeer', peer: this.o(), chats: this.v(this.o), users: this.v(this.o)})
  DB() {
    const flags = this.i32();
    return {
      _: 'channelFull' as const,
      can_view_participants: !!(flags & 0x8),
      can_set_username: !!(flags & 0x40),
      can_set_stickers: !!(flags & 0x80),
      hidden_prehistory: !!(flags & 0x400),
      can_view_stats: !!(flags & 0x1000),
      can_set_location: !!(flags & 0x10000),
      has_scheduled: !!(flags & 0x80000),
      id: this.i32(),
      about: this.s(),
      participants_count: flags & 0x1 ? this.i32() : undefined,
      admins_count: flags & 0x2 ? this.i32() : undefined,
      kicked_count: flags & 0x4 ? this.i32() : undefined,
      banned_count: flags & 0x4 ? this.i32() : undefined,
      online_count: flags & 0x2000 ? this.i32() : undefined,
      read_inbox_max_id: this.i32(),
      read_outbox_max_id: this.i32(),
      unread_count: this.i32(),
      chat_photo: this.o(),
      notify_settings: this.o(),
      exported_invite: this.o(),
      bot_info: this.v(this.o),
      migrated_from_chat_id: flags & 0x10 ? this.i32() : undefined,
      migrated_from_max_id: flags & 0x10 ? this.i32() : undefined,
      pinned_msg_id: flags & 0x20 ? this.i32() : undefined,
      stickerset: flags & 0x100 ? this.o() : undefined,
      available_min_id: flags & 0x200 ? this.i32() : undefined,
      folder_id: flags & 0x800 ? this.i32() : undefined,
      linked_chat_id: flags & 0x4000 ? this.i32() : undefined,
      location: flags & 0x8000 ? this.o() : undefined,
      slowmode_seconds: flags & 0x20000 ? this.i32() : undefined,
      slowmode_next_send_date: flags & 0x40000 ? this.i32() : undefined,
      pts: this.i32(),
    }
  }
  QU = () => ({_: 'messageRange', min_id: this.i32(), max_id: this.i32()})
  GN() {
    const flags = this.i32();
    return {
      _: 'messages.channelMessages' as const,
      inexact: !!(flags & 0x2),
      pts: this.i32(),
      count: this.i32(),
      messages: this.v(this.o),
      chats: this.v(this.o),
      users: this.v(this.o),
    }
  }
  EG = () => ({_: 'messageActionChannelCreate', title: this.s()})
  II() {
    const flags = this.i32();
    return {
      _: 'updateChannelTooLong' as const,
      channel_id: this.i32(),
      pts: flags & 0x1 ? this.i32() : undefined,
    }
  }
  IJ = () => ({_: 'updateChannel', channel_id: this.i32()})
  IK = () => ({_: 'updateNewChannelMessage', message: this.o(), pts: this.i32(), pts_count: this.i32()})
  IL() {
    const flags = this.i32();
    return {
      _: 'updateReadChannelInbox' as const,
      folder_id: flags & 0x1 ? this.i32() : undefined,
      channel_id: this.i32(),
      max_id: this.i32(),
      still_unread_count: this.i32(),
      pts: this.i32(),
    }
  }
  IM = () => ({_: 'updateDeleteChannelMessages', channel_id: this.i32(), messages: this.v(this.i32), pts: this.i32(), pts_count: this.i32()})
  IN = () => ({_: 'updateChannelMessageViews', channel_id: this.i32(), id: this.i32(), views: this.i32()})
  QV() {
    const flags = this.i32();
    return {
      _: 'updates.channelDifferenceEmpty' as const,
      final: !!(flags & 0x1),
      pts: this.i32(),
      timeout: flags & 0x2 ? this.i32() : undefined,
    }
  }
  QW() {
    const flags = this.i32();
    return {
      _: 'updates.channelDifferenceTooLong' as const,
      final: !!(flags & 0x1),
      timeout: flags & 0x2 ? this.i32() : undefined,
      dialog: this.o(),
      messages: this.v(this.o),
      chats: this.v(this.o),
      users: this.v(this.o),
    }
  }
  QX() {
    const flags = this.i32();
    return {
      _: 'updates.channelDifference' as const,
      final: !!(flags & 0x1),
      pts: this.i32(),
      timeout: flags & 0x2 ? this.i32() : undefined,
      new_messages: this.v(this.o),
      other_updates: this.v(this.o),
      chats: this.v(this.o),
      users: this.v(this.o),
    }
  }
  QY = () => ({_: 'channelMessagesFilterEmpty'})
  QZ() {
    const flags = this.i32();
    return {
      _: 'channelMessagesFilter' as const,
      exclude_new_messages: !!(flags & 0x2),
      ranges: this.v(this.o),
    }
  }
  RA = () => ({_: 'channelParticipant', user_id: this.i32(), date: this.i32()})
  RB = () => ({_: 'channelParticipantSelf', user_id: this.i32(), inviter_id: this.i32(), date: this.i32()})
  RC() {
    const flags = this.i32();
    return {
      _: 'channelParticipantCreator' as const,
      user_id: this.i32(),
      rank: flags & 0x1 ? this.s() : undefined,
    }
  }
  RF = () => ({_: 'channelParticipantsRecent'})
  RG = () => ({_: 'channelParticipantsAdmins'})
  RH = () => ({_: 'channelParticipantsKicked', q: this.s()})
  RM = () => ({_: 'channels.channelParticipants', count: this.i32(), participants: this.v(this.o), users: this.v(this.o)})
  RO = () => ({_: 'channels.channelParticipant', participant: this.o(), users: this.v(this.o)})
  DD = () => ({_: 'chatParticipantCreator', user_id: this.i32()})
  DE = () => ({_: 'chatParticipantAdmin', user_id: this.i32(), inviter_id: this.i32(), date: this.i32()})
  IO = () => ({_: 'updateChatParticipantAdmin', chat_id: this.i32(), user_id: this.i32(), is_admin: this.o(), version: this.i32()})
  EH = () => ({_: 'messageActionChatMigrateTo', channel_id: this.i32()})
  EI = () => ({_: 'messageActionChannelMigrateFrom', title: this.s(), chat_id: this.i32()})
  RI = () => ({_: 'channelParticipantsBots'})
  RP() {
    const flags = this.i32();
    return {
      _: 'help.termsOfService' as const,
      popup: !!(flags & 0x1),
      id: this.o(),
      text: this.s(),
      entities: this.v(this.o),
      min_age_confirm: flags & 0x2 ? this.i32() : undefined,
    }
  }
  IP = () => ({_: 'updateNewStickerSet', stickerset: this.o()})
  IQ() {
    const flags = this.i32();
    return {
      _: 'updateStickerSetsOrder' as const,
      masks: !!(flags & 0x1),
      order: this.v(this.i64),
    }
  }
  IR = () => ({_: 'updateStickerSets'})
  RQ = () => ({_: 'foundGif', url: this.s(), thumb_url: this.s(), content_url: this.s(), content_type: this.s(), w: this.i32(), h: this.i32()})
  RR = () => ({_: 'foundGifCached', url: this.s(), photo: this.o(), document: this.o()})
  BC = () => ({_: 'inputMediaGifExternal', url: this.s(), q: this.s()})
  RS = () => ({_: 'messages.foundGifs', next_offset: this.i32(), results: this.v(this.o)})
  RT = () => ({_: 'messages.savedGifsNotModified'})
  RU = () => ({_: 'messages.savedGifs', hash: this.i32(), gifs: this.v(this.o)})
  IS = () => ({_: 'updateSavedGifs'})
  RV() {
    const flags = this.i32();
    return {
      _: 'inputBotInlineMessageMediaAuto' as const,
      message: this.s(),
      entities: flags & 0x2 ? this.v(this.o) : undefined,
      reply_markup: flags & 0x4 ? this.o() : undefined,
    }
  }
  RW() {
    const flags = this.i32();
    return {
      _: 'inputBotInlineMessageText' as const,
      no_webpage: !!(flags & 0x1),
      message: this.s(),
      entities: flags & 0x2 ? this.v(this.o) : undefined,
      reply_markup: flags & 0x4 ? this.o() : undefined,
    }
  }
  SB() {
    const flags = this.i32();
    return {
      _: 'inputBotInlineResult' as const,
      id: this.s(),
      type: this.s(),
      title: flags & 0x2 ? this.s() : undefined,
      description: flags & 0x4 ? this.s() : undefined,
      url: flags & 0x8 ? this.s() : undefined,
      thumb: flags & 0x10 ? this.o() : undefined,
      content: flags & 0x20 ? this.o() : undefined,
      send_message: this.o(),
    }
  }
  SF() {
    const flags = this.i32();
    return {
      _: 'botInlineMessageMediaAuto' as const,
      message: this.s(),
      entities: flags & 0x2 ? this.v(this.o) : undefined,
      reply_markup: flags & 0x4 ? this.o() : undefined,
    }
  }
  SG() {
    const flags = this.i32();
    return {
      _: 'botInlineMessageText' as const,
      no_webpage: !!(flags & 0x1),
      message: this.s(),
      entities: flags & 0x2 ? this.v(this.o) : undefined,
      reply_markup: flags & 0x4 ? this.o() : undefined,
    }
  }
  SK() {
    const flags = this.i32();
    return {
      _: 'botInlineResult' as const,
      id: this.s(),
      type: this.s(),
      title: flags & 0x2 ? this.s() : undefined,
      description: flags & 0x4 ? this.s() : undefined,
      url: flags & 0x8 ? this.s() : undefined,
      thumb: flags & 0x10 ? this.o() : undefined,
      content: flags & 0x20 ? this.o() : undefined,
      send_message: this.o(),
    }
  }
  SM() {
    const flags = this.i32();
    return {
      _: 'messages.botResults' as const,
      gallery: !!(flags & 0x1),
      query_id: this.i64(),
      next_offset: flags & 0x2 ? this.s() : undefined,
      switch_pm: flags & 0x4 ? this.o() : undefined,
      results: this.v(this.o),
      cache_time: this.i32(),
      users: this.v(this.o),
    }
  }
  IT() {
    const flags = this.i32();
    return {
      _: 'updateBotInlineQuery' as const,
      query_id: this.i64(),
      user_id: this.i32(),
      query: this.s(),
      geo: flags & 0x1 ? this.o() : undefined,
      offset: this.s(),
    }
  }
  IU() {
    const flags = this.i32();
    return {
      _: 'updateBotInlineSend' as const,
      user_id: this.i32(),
      query: this.s(),
      geo: flags & 0x1 ? this.o() : undefined,
      id: this.s(),
      msg_id: flags & 0x2 ? this.o() : undefined,
    }
  }
  HA = () => ({_: 'inputMessagesFilterVoice'})
  HB = () => ({_: 'inputMessagesFilterMusic'})
  MS = () => ({_: 'inputPrivacyKeyChatInvite'})
  NA = () => ({_: 'privacyKeyChatInvite'})
  SN = () => ({_: 'exportedMessageLink', link: this.s(), html: this.s()})
  SO() {
    const flags = this.i32();
    return {
      _: 'messageFwdHeader' as const,
      from_id: flags & 0x1 ? this.i32() : undefined,
      from_name: flags & 0x20 ? this.s() : undefined,
      date: this.i32(),
      channel_id: flags & 0x2 ? this.i32() : undefined,
      channel_post: flags & 0x4 ? this.i32() : undefined,
      post_author: flags & 0x8 ? this.s() : undefined,
      saved_from_peer: flags & 0x10 ? this.o() : undefined,
      saved_from_msg_id: flags & 0x10 ? this.i32() : undefined,
    }
  }
  IV = () => ({_: 'updateEditChannelMessage', message: this.o(), pts: this.i32(), pts_count: this.i32()})
  IW = () => ({_: 'updateChannelPinnedMessage', channel_id: this.i32(), id: this.i32()})
  EJ = () => ({_: 'messageActionPinMessage'})
  SP = () => ({_: 'auth.codeTypeSms'})
  SQ = () => ({_: 'auth.codeTypeCall'})
  SR = () => ({_: 'auth.codeTypeFlashCall'})
  SS = () => ({_: 'auth.sentCodeTypeApp', length: this.i32()})
  ST = () => ({_: 'auth.sentCodeTypeSms', length: this.i32()})
  SU = () => ({_: 'auth.sentCodeTypeCall', length: this.i32()})
  SV = () => ({_: 'auth.sentCodeTypeFlashCall', pattern: this.s()})
  PK = () => ({_: 'keyboardButtonUrl', text: this.s(), url: this.s()})
  PL = () => ({_: 'keyboardButtonCallback', text: this.s(), data: this.b()})
  PM = () => ({_: 'keyboardButtonRequestPhone', text: this.s()})
  PN = () => ({_: 'keyboardButtonRequestGeoLocation', text: this.s()})
  PO() {
    const flags = this.i32();
    return {
      _: 'keyboardButtonSwitchInline' as const,
      same_peer: !!(flags & 0x1),
      text: this.s(),
      query: this.s(),
    }
  }
  PX = () => ({_: 'replyInlineMarkup', rows: this.v(this.o)})
  SW() {
    const flags = this.i32();
    return {
      _: 'messages.botCallbackAnswer' as const,
      alert: !!(flags & 0x2),
      has_url: !!(flags & 0x8),
      native_ui: !!(flags & 0x10),
      message: flags & 0x1 ? this.s() : undefined,
      url: flags & 0x4 ? this.s() : undefined,
      cache_time: this.i32(),
    }
  }
  IX() {
    const flags = this.i32();
    return {
      _: 'updateBotCallbackQuery' as const,
      query_id: this.i64(),
      user_id: this.i32(),
      peer: this.o(),
      msg_id: this.i32(),
      chat_instance: this.i64(),
      data: flags & 0x1 ? this.b() : undefined,
      game_short_name: flags & 0x2 ? this.s() : undefined,
    }
  }
  SX() {
    const flags = this.i32();
    return {
      _: 'messages.messageEditData' as const,
      caption: !!(flags & 0x1),
    }
  }
  IY = () => ({_: 'updateEditMessage', message: this.o(), pts: this.i32(), pts_count: this.i32()})
  RX() {
    const flags = this.i32();
    return {
      _: 'inputBotInlineMessageMediaGeo' as const,
      geo_point: this.o(),
      period: this.i32(),
      reply_markup: flags & 0x4 ? this.o() : undefined,
    }
  }
  RY() {
    const flags = this.i32();
    return {
      _: 'inputBotInlineMessageMediaVenue' as const,
      geo_point: this.o(),
      title: this.s(),
      address: this.s(),
      provider: this.s(),
      venue_id: this.s(),
      venue_type: this.s(),
      reply_markup: flags & 0x4 ? this.o() : undefined,
    }
  }
  RZ() {
    const flags = this.i32();
    return {
      _: 'inputBotInlineMessageMediaContact' as const,
      phone_number: this.s(),
      first_name: this.s(),
      last_name: this.s(),
      vcard: this.s(),
      reply_markup: flags & 0x4 ? this.o() : undefined,
    }
  }
  SH() {
    const flags = this.i32();
    return {
      _: 'botInlineMessageMediaGeo' as const,
      geo: this.o(),
      period: this.i32(),
      reply_markup: flags & 0x4 ? this.o() : undefined,
    }
  }
  SI() {
    const flags = this.i32();
    return {
      _: 'botInlineMessageMediaVenue' as const,
      geo: this.o(),
      title: this.s(),
      address: this.s(),
      provider: this.s(),
      venue_id: this.s(),
      venue_type: this.s(),
      reply_markup: flags & 0x4 ? this.o() : undefined,
    }
  }
  SJ() {
    const flags = this.i32();
    return {
      _: 'botInlineMessageMediaContact' as const,
      phone_number: this.s(),
      first_name: this.s(),
      last_name: this.s(),
      vcard: this.s(),
      reply_markup: flags & 0x4 ? this.o() : undefined,
    }
  }
  SC = () => ({_: 'inputBotInlineResultPhoto', id: this.s(), type: this.s(), photo: this.o(), send_message: this.o()})
  SD() {
    const flags = this.i32();
    return {
      _: 'inputBotInlineResultDocument' as const,
      id: this.s(),
      type: this.s(),
      title: flags & 0x2 ? this.s() : undefined,
      description: flags & 0x4 ? this.s() : undefined,
      document: this.o(),
      send_message: this.o(),
    }
  }
  SL() {
    const flags = this.i32();
    return {
      _: 'botInlineMediaResult' as const,
      id: this.s(),
      type: this.s(),
      photo: flags & 0x1 ? this.o() : undefined,
      document: flags & 0x2 ? this.o() : undefined,
      title: flags & 0x4 ? this.s() : undefined,
      description: flags & 0x8 ? this.s() : undefined,
      send_message: this.o(),
    }
  }
  SY = () => ({_: 'inputBotInlineMessageID', dc_id: this.i32(), id: this.i64(), access_hash: this.i64()})
  IZ() {
    const flags = this.i32();
    return {
      _: 'updateInlineBotCallbackQuery' as const,
      query_id: this.i64(),
      user_id: this.i32(),
      msg_id: this.o(),
      chat_instance: this.i64(),
      data: flags & 0x1 ? this.b() : undefined,
      game_short_name: flags & 0x2 ? this.s() : undefined,
    }
  }
  SZ = () => ({_: 'inlineBotSwitchPM', text: this.s(), start_param: this.s()})
  TA = () => ({_: 'messages.peerDialogs', dialogs: this.v(this.o), messages: this.v(this.o), chats: this.v(this.o), users: this.v(this.o), state: this.o()})
  TB = () => ({_: 'topPeer', peer: this.o(), rating: this.d()})
  TC = () => ({_: 'topPeerCategoryBotsPM'})
  TD = () => ({_: 'topPeerCategoryBotsInline'})
  TE = () => ({_: 'topPeerCategoryCorrespondents'})
  TF = () => ({_: 'topPeerCategoryGroups'})
  TG = () => ({_: 'topPeerCategoryChannels'})
  TK = () => ({_: 'topPeerCategoryPeers', category: this.o(), count: this.i32(), peers: this.v(this.o)})
  TL = () => ({_: 'contacts.topPeersNotModified'})
  TM = () => ({_: 'contacts.topPeers', categories: this.v(this.o), chats: this.v(this.o), users: this.v(this.o)})
  QJ = () => ({_: 'messageEntityMentionName', offset: this.i32(), length: this.i32(), user_id: this.i32()})
  QK = () => ({_: 'inputMessageEntityMentionName', offset: this.i32(), length: this.i32(), user_id: this.o()})
  HC = () => ({_: 'inputMessagesFilterChatPhotos'})
  JA = () => ({_: 'updateReadChannelOutbox', channel_id: this.i32(), max_id: this.i32()})
  JB = () => ({_: 'updateDraftMessage', peer: this.o(), draft: this.o()})
  TO() {
    const flags = this.i32();
    return {
      _: 'draftMessageEmpty' as const,
      date: flags & 0x1 ? this.i32() : undefined,
    }
  }
  TP() {
    const flags = this.i32();
    return {
      _: 'draftMessage' as const,
      no_webpage: !!(flags & 0x2),
      reply_to_msg_id: flags & 0x1 ? this.i32() : undefined,
      message: this.s(),
      entities: flags & 0x8 ? this.v(this.o) : undefined,
      date: this.i32(),
    }
  }
  EK = () => ({_: 'messageActionHistoryClear'})
  TQ = () => ({_: 'messages.featuredStickersNotModified'})
  TR = () => ({_: 'messages.featuredStickers', hash: this.i32(), sets: this.v(this.o), unread: this.v(this.i64)})
  JC = () => ({_: 'updateReadFeaturedStickers'})
  TS = () => ({_: 'messages.recentStickersNotModified'})
  TT = () => ({_: 'messages.recentStickers', hash: this.i32(), packs: this.v(this.o), stickers: this.v(this.o), dates: this.v(this.i32)})
  JD = () => ({_: 'updateRecentStickers'})
  TU = () => ({_: 'messages.archivedStickers', count: this.i32(), sets: this.v(this.o)})
  TV = () => ({_: 'messages.stickerSetInstallResultSuccess'})
  TW = () => ({_: 'messages.stickerSetInstallResultArchive', sets: this.v(this.o)})
  TX = () => ({_: 'stickerSetCovered', set: this.o(), cover: this.o()})
  JE = () => ({_: 'updateConfig'})
  JF = () => ({_: 'updatePtsChanged'})
  BD() {
    const flags = this.i32();
    return {
      _: 'inputMediaPhotoExternal' as const,
      url: this.s(),
      ttl_seconds: flags & 0x1 ? this.i32() : undefined,
    }
  }
  BE() {
    const flags = this.i32();
    return {
      _: 'inputMediaDocumentExternal' as const,
      url: this.s(),
      ttl_seconds: flags & 0x1 ? this.i32() : undefined,
    }
  }
  TY = () => ({_: 'stickerSetMultiCovered', set: this.o(), covers: this.v(this.o)})
  TZ = () => ({_: 'maskCoords', n: this.i32(), x: this.d(), y: this.d(), zoom: this.d()})
  OF = () => ({_: 'documentAttributeHasStickers'})
  UA = () => ({_: 'inputStickeredMediaPhoto', id: this.o()})
  UB = () => ({_: 'inputStickeredMediaDocument', id: this.o()})
  UC() {
    const flags = this.i32();
    return {
      _: 'game' as const,
      id: this.i64(),
      access_hash: this.i64(),
      short_name: this.s(),
      title: this.s(),
      description: this.s(),
      photo: this.o(),
      document: flags & 0x1 ? this.o() : undefined,
    }
  }
  SE = () => ({_: 'inputBotInlineResultGame', id: this.s(), short_name: this.s(), send_message: this.o()})
  SA() {
    const flags = this.i32();
    return {
      _: 'inputBotInlineMessageGame' as const,
      reply_markup: flags & 0x4 ? this.o() : undefined,
    }
  }
  DU = () => ({_: 'messageMediaGame', game: this.o()})
  BF = () => ({_: 'inputMediaGame', id: this.o()})
  UD = () => ({_: 'inputGameID', id: this.i64(), access_hash: this.i64()})
  UE = () => ({_: 'inputGameShortName', bot_id: this.o(), short_name: this.s()})
  PP = () => ({_: 'keyboardButtonGame', text: this.s()})
  EL = () => ({_: 'messageActionGameScore', game_id: this.i64(), score: this.i32()})
  UF = () => ({_: 'highScore', pos: this.i32(), user_id: this.i32(), score: this.i32()})
  UG = () => ({_: 'messages.highScores', scores: this.v(this.o), users: this.v(this.o)})
  KJ = () => ({_: 'updates.differenceTooLong', pts: this.i32()})
  JG = () => ({_: 'updateChannelWebPage', channel_id: this.i32(), webpage: this.o(), pts: this.i32(), pts_count: this.i32()})
  GQ = () => ({_: 'messages.chatsSlice', count: this.i32(), chats: this.v(this.o)})
  UH = () => ({_: 'textEmpty'})
  UI = () => ({_: 'textPlain', text: this.s()})
  UJ = () => ({_: 'textBold', text: this.o()})
  UK = () => ({_: 'textItalic', text: this.o()})
  UL = () => ({_: 'textUnderline', text: this.o()})
  UM = () => ({_: 'textStrike', text: this.o()})
  UN = () => ({_: 'textFixed', text: this.o()})
  UO = () => ({_: 'textUrl', text: this.o(), url: this.s(), webpage_id: this.i64()})
  UP = () => ({_: 'textEmail', text: this.o(), email: this.s()})
  UQ = () => ({_: 'textConcat', texts: this.v(this.o)})
  UX = () => ({_: 'pageBlockUnsupported'})
  UY = () => ({_: 'pageBlockTitle', text: this.o()})
  UZ = () => ({_: 'pageBlockSubtitle', text: this.o()})
  VA = () => ({_: 'pageBlockAuthorDate', author: this.o(), published_date: this.i32()})
  VB = () => ({_: 'pageBlockHeader', text: this.o()})
  VC = () => ({_: 'pageBlockSubheader', text: this.o()})
  VD = () => ({_: 'pageBlockParagraph', text: this.o()})
  VE = () => ({_: 'pageBlockPreformatted', text: this.o(), language: this.s()})
  VF = () => ({_: 'pageBlockFooter', text: this.o()})
  VG = () => ({_: 'pageBlockDivider'})
  VH = () => ({_: 'pageBlockAnchor', name: this.s()})
  VI = () => ({_: 'pageBlockList', items: this.v(this.o)})
  VJ = () => ({_: 'pageBlockBlockquote', text: this.o(), caption: this.o()})
  VK = () => ({_: 'pageBlockPullquote', text: this.o(), caption: this.o()})
  VL() {
    const flags = this.i32();
    return {
      _: 'pageBlockPhoto' as const,
      photo_id: this.i64(),
      caption: this.o(),
      url: flags & 0x1 ? this.s() : undefined,
      webpage_id: flags & 0x1 ? this.i64() : undefined,
    }
  }
  VM() {
    const flags = this.i32();
    return {
      _: 'pageBlockVideo' as const,
      autoplay: !!(flags & 0x1),
      loop: !!(flags & 0x2),
      video_id: this.i64(),
      caption: this.o(),
    }
  }
  VN = () => ({_: 'pageBlockCover', cover: this.o()})
  VO() {
    const flags = this.i32();
    return {
      _: 'pageBlockEmbed' as const,
      full_width: !!(flags & 0x1),
      allow_scrolling: !!(flags & 0x8),
      url: flags & 0x2 ? this.s() : undefined,
      html: flags & 0x4 ? this.s() : undefined,
      poster_photo_id: flags & 0x10 ? this.i64() : undefined,
      w: flags & 0x20 ? this.i32() : undefined,
      h: flags & 0x20 ? this.i32() : undefined,
      caption: this.o(),
    }
  }
  VP = () => ({_: 'pageBlockEmbedPost', url: this.s(), webpage_id: this.i64(), author_photo_id: this.i64(), author: this.s(), date: this.i32(), blocks: this.v(this.o), caption: this.o()})
  VQ = () => ({_: 'pageBlockCollage', items: this.v(this.o), caption: this.o()})
  VR = () => ({_: 'pageBlockSlideshow', items: this.v(this.o), caption: this.o()})
  OP = () => ({_: 'webPageNotModified'})
  MT = () => ({_: 'inputPrivacyKeyPhoneCall'})
  NB = () => ({_: 'privacyKeyPhoneCall'})
  MN = () => ({_: 'sendMessageGamePlayAction'})
  WA = () => ({_: 'phoneCallDiscardReasonMissed'})
  WB = () => ({_: 'phoneCallDiscardReasonDisconnect'})
  WC = () => ({_: 'phoneCallDiscardReasonHangup'})
  WD = () => ({_: 'phoneCallDiscardReasonBusy'})
  JH() {
    const flags = this.i32();
    return {
      _: 'updateDialogPinned' as const,
      pinned: !!(flags & 0x1),
      folder_id: flags & 0x2 ? this.i32() : undefined,
      peer: this.o(),
    }
  }
  JI() {
    const flags = this.i32();
    return {
      _: 'updatePinnedDialogs' as const,
      folder_id: flags & 0x2 ? this.i32() : undefined,
      order: flags & 0x1 ? this.v(this.o) : undefined,
    }
  }
  WE = () => ({_: 'dataJSON', data: this.s()})
  JJ = () => ({_: 'updateBotWebhookJSON', data: this.o()})
  JK = () => ({_: 'updateBotWebhookJSONQuery', query_id: this.i64(), data: this.o(), timeout: this.i32()})
  WF = () => ({_: 'labeledPrice', label: this.s(), amount: this.i64()})
  WG() {
    const flags = this.i32();
    return {
      _: 'invoice' as const,
      test: !!(flags & 0x1),
      name_requested: !!(flags & 0x2),
      phone_requested: !!(flags & 0x4),
      email_requested: !!(flags & 0x8),
      shipping_address_requested: !!(flags & 0x10),
      flexible: !!(flags & 0x20),
      phone_to_provider: !!(flags & 0x40),
      email_to_provider: !!(flags & 0x80),
      currency: this.s(),
      prices: this.v(this.o),
    }
  }
  BG() {
    const flags = this.i32();
    return {
      _: 'inputMediaInvoice' as const,
      title: this.s(),
      description: this.s(),
      photo: flags & 0x1 ? this.o() : undefined,
      invoice: this.o(),
      payload: this.b(),
      provider: this.s(),
      provider_data: this.o(),
      start_param: this.s(),
    }
  }
  WH = () => ({_: 'paymentCharge', id: this.s(), provider_charge_id: this.s()})
  EM() {
    const flags = this.i32();
    return {
      _: 'messageActionPaymentSentMe' as const,
      currency: this.s(),
      total_amount: this.i64(),
      payload: this.b(),
      info: flags & 0x1 ? this.o() : undefined,
      shipping_option_id: flags & 0x2 ? this.s() : undefined,
      charge: this.o(),
    }
  }
  DV() {
    const flags = this.i32();
    return {
      _: 'messageMediaInvoice' as const,
      shipping_address_requested: !!(flags & 0x2),
      test: !!(flags & 0x8),
      title: this.s(),
      description: this.s(),
      photo: flags & 0x1 ? this.o() : undefined,
      receipt_msg_id: flags & 0x4 ? this.i32() : undefined,
      currency: this.s(),
      total_amount: this.i64(),
      start_param: this.s(),
    }
  }
  WI = () => ({_: 'postAddress', street_line1: this.s(), street_line2: this.s(), city: this.s(), state: this.s(), country_iso2: this.s(), post_code: this.s()})
  WJ() {
    const flags = this.i32();
    return {
      _: 'paymentRequestedInfo' as const,
      name: flags & 0x1 ? this.s() : undefined,
      phone: flags & 0x2 ? this.s() : undefined,
      email: flags & 0x4 ? this.s() : undefined,
      shipping_address: flags & 0x8 ? this.o() : undefined,
    }
  }
  PQ = () => ({_: 'keyboardButtonBuy', text: this.s()})
  EN = () => ({_: 'messageActionPaymentSent', currency: this.s(), total_amount: this.i64()})
  WK = () => ({_: 'paymentSavedCredentialsCard', id: this.s(), title: this.s()})
  WL = () => ({_: 'webDocument', url: this.s(), access_hash: this.i64(), size: this.i32(), mime_type: this.s(), attributes: this.v(this.o)})
  WN = () => ({_: 'inputWebDocument', url: this.s(), size: this.i32(), mime_type: this.s(), attributes: this.v(this.o)})
  WO = () => ({_: 'inputWebFileLocation', url: this.s(), access_hash: this.i64()})
  WQ = () => ({_: 'upload.webFile', size: this.i32(), mime_type: this.s(), file_type: this.o(), mtime: this.i32(), bytes: this.b()})
  WR() {
    const flags = this.i32();
    return {
      _: 'payments.paymentForm' as const,
      can_save_credentials: !!(flags & 0x4),
      password_missing: !!(flags & 0x8),
      bot_id: this.i32(),
      invoice: this.o(),
      provider_id: this.i32(),
      url: this.s(),
      native_provider: flags & 0x10 ? this.s() : undefined,
      native_params: flags & 0x10 ? this.o() : undefined,
      saved_info: flags & 0x1 ? this.o() : undefined,
      saved_credentials: flags & 0x2 ? this.o() : undefined,
      users: this.v(this.o),
    }
  }
  WS() {
    const flags = this.i32();
    return {
      _: 'payments.validatedRequestedInfo' as const,
      id: flags & 0x1 ? this.s() : undefined,
      shipping_options: flags & 0x2 ? this.v(this.o) : undefined,
    }
  }
  WT = () => ({_: 'payments.paymentResult', updates: this.o()})
  WV() {
    const flags = this.i32();
    return {
      _: 'payments.paymentReceipt' as const,
      date: this.i32(),
      bot_id: this.i32(),
      invoice: this.o(),
      provider_id: this.i32(),
      info: flags & 0x1 ? this.o() : undefined,
      shipping: flags & 0x2 ? this.o() : undefined,
      currency: this.s(),
      total_amount: this.i64(),
      credentials_title: this.s(),
      users: this.v(this.o),
    }
  }
  WW() {
    const flags = this.i32();
    return {
      _: 'payments.savedInfo' as const,
      has_saved_credentials: !!(flags & 0x2),
      saved_info: flags & 0x1 ? this.o() : undefined,
    }
  }
  WX = () => ({_: 'inputPaymentCredentialsSaved', id: this.s(), tmp_password: this.b()})
  WY() {
    const flags = this.i32();
    return {
      _: 'inputPaymentCredentials' as const,
      save: !!(flags & 0x1),
      data: this.o(),
    }
  }
  XB = () => ({_: 'account.tmpPassword', tmp_password: this.b(), valid_until: this.i32()})
  XC = () => ({_: 'shippingOption', id: this.s(), title: this.s(), prices: this.v(this.o)})
  JL = () => ({_: 'updateBotShippingQuery', query_id: this.i64(), user_id: this.i32(), payload: this.b(), shipping_address: this.o()})
  JM() {
    const flags = this.i32();
    return {
      _: 'updateBotPrecheckoutQuery' as const,
      query_id: this.i64(),
      user_id: this.i32(),
      payload: this.b(),
      info: flags & 0x1 ? this.o() : undefined,
      shipping_option_id: flags & 0x2 ? this.s() : undefined,
      currency: this.s(),
      total_amount: this.i64(),
    }
  }
  XD() {
    const flags = this.i32();
    return {
      _: 'inputStickerSetItem' as const,
      document: this.o(),
      emoji: this.s(),
      mask_coords: flags & 0x1 ? this.o() : undefined,
    }
  }
  JN = () => ({_: 'updatePhoneCall', phone_call: this.o()})
  XE = () => ({_: 'inputPhoneCall', id: this.i64(), access_hash: this.i64()})
  XF = () => ({_: 'phoneCallEmpty', id: this.i64()})
  XG() {
    const flags = this.i32();
    return {
      _: 'phoneCallWaiting' as const,
      video: !!(flags & 0x20),
      id: this.i64(),
      access_hash: this.i64(),
      date: this.i32(),
      admin_id: this.i32(),
      participant_id: this.i32(),
      protocol: this.o(),
      receive_date: flags & 0x1 ? this.i32() : undefined,
    }
  }
  XH() {
    const flags = this.i32();
    return {
      _: 'phoneCallRequested' as const,
      video: !!(flags & 0x20),
      id: this.i64(),
      access_hash: this.i64(),
      date: this.i32(),
      admin_id: this.i32(),
      participant_id: this.i32(),
      g_a_hash: this.b(),
      protocol: this.o(),
    }
  }
  XI() {
    const flags = this.i32();
    return {
      _: 'phoneCallAccepted' as const,
      video: !!(flags & 0x20),
      id: this.i64(),
      access_hash: this.i64(),
      date: this.i32(),
      admin_id: this.i32(),
      participant_id: this.i32(),
      g_b: this.b(),
      protocol: this.o(),
    }
  }
  XJ() {
    const flags = this.i32();
    return {
      _: 'phoneCall' as const,
      p2p_allowed: !!(flags & 0x20),
      id: this.i64(),
      access_hash: this.i64(),
      date: this.i32(),
      admin_id: this.i32(),
      participant_id: this.i32(),
      g_a_or_b: this.b(),
      key_fingerprint: this.i64(),
      protocol: this.o(),
      connections: this.v(this.o),
      start_date: this.i32(),
    }
  }
  XK() {
    const flags = this.i32();
    return {
      _: 'phoneCallDiscarded' as const,
      need_rating: !!(flags & 0x4),
      need_debug: !!(flags & 0x8),
      video: !!(flags & 0x20),
      id: this.i64(),
      reason: flags & 0x1 ? this.o() : undefined,
      duration: flags & 0x2 ? this.i32() : undefined,
    }
  }
  XL = () => ({_: 'phoneConnection', id: this.i64(), ip: this.s(), ipv6: this.s(), port: this.i32(), peer_tag: this.b()})
  XM() {
    const flags = this.i32();
    return {
      _: 'phoneCallProtocol' as const,
      udp_p2p: !!(flags & 0x1),
      udp_reflector: !!(flags & 0x2),
      min_layer: this.i32(),
      max_layer: this.i32(),
    }
  }
  XN = () => ({_: 'phone.phoneCall', phone_call: this.o(), users: this.v(this.o)})
  HD() {
    const flags = this.i32();
    return {
      _: 'inputMessagesFilterPhoneCalls' as const,
      missed: !!(flags & 0x1),
    }
  }
  EO() {
    const flags = this.i32();
    return {
      _: 'messageActionPhoneCall' as const,
      video: !!(flags & 0x4),
      call_id: this.i64(),
      reason: flags & 0x1 ? this.o() : undefined,
      duration: flags & 0x2 ? this.i32() : undefined,
    }
  }
  HE = () => ({_: 'inputMessagesFilterRoundVoice'})
  HF = () => ({_: 'inputMessagesFilterRoundVideo'})
  MO = () => ({_: 'sendMessageRecordRoundAction'})
  MP = () => ({_: 'sendMessageUploadRoundAction', progress: this.i32()})
  KV = () => ({_: 'upload.fileCdnRedirect', dc_id: this.i32(), file_token: this.b(), encryption_key: this.b(), encryption_iv: this.b(), file_hashes: this.v(this.o)})
  XO = () => ({_: 'upload.cdnFileReuploadNeeded', request_token: this.b()})
  XP = () => ({_: 'upload.cdnFile', bytes: this.b()})
  XQ = () => ({_: 'cdnPublicKey', dc_id: this.i32(), public_key: this.s()})
  XR = () => ({_: 'cdnConfig', public_keys: this.v(this.o)})
  VS = () => ({_: 'pageBlockChannel', channel: this.o()})
  XS = () => ({_: 'langPackString', key: this.s(), value: this.s()})
  XT() {
    const flags = this.i32();
    return {
      _: 'langPackStringPluralized' as const,
      key: this.s(),
      zero_value: flags & 0x1 ? this.s() : undefined,
      one_value: flags & 0x2 ? this.s() : undefined,
      two_value: flags & 0x4 ? this.s() : undefined,
      few_value: flags & 0x8 ? this.s() : undefined,
      many_value: flags & 0x10 ? this.s() : undefined,
      other_value: this.s(),
    }
  }
  XU = () => ({_: 'langPackStringDeleted', key: this.s()})
  XV = () => ({_: 'langPackDifference', lang_code: this.s(), from_version: this.i32(), version: this.i32(), strings: this.v(this.o)})
  XW() {
    const flags = this.i32();
    return {
      _: 'langPackLanguage' as const,
      official: !!(flags & 0x1),
      rtl: !!(flags & 0x4),
      beta: !!(flags & 0x8),
      name: this.s(),
      native_name: this.s(),
      lang_code: this.s(),
      base_lang_code: flags & 0x2 ? this.s() : undefined,
      plural_code: this.s(),
      strings_count: this.i32(),
      translated_count: this.i32(),
      translations_url: this.s(),
    }
  }
  JO = () => ({_: 'updateLangPackTooLong', lang_code: this.s()})
  JP = () => ({_: 'updateLangPack', difference: this.o()})
  RD() {
    const flags = this.i32();
    return {
      _: 'channelParticipantAdmin' as const,
      can_edit: !!(flags & 0x1),
      self: !!(flags & 0x2),
      user_id: this.i32(),
      inviter_id: flags & 0x2 ? this.i32() : undefined,
      promoted_by: this.i32(),
      date: this.i32(),
      admin_rights: this.o(),
      rank: flags & 0x4 ? this.s() : undefined,
    }
  }
  RE() {
    const flags = this.i32();
    return {
      _: 'channelParticipantBanned' as const,
      left: !!(flags & 0x1),
      user_id: this.i32(),
      kicked_by: this.i32(),
      date: this.i32(),
      banned_rights: this.o(),
    }
  }
  RJ = () => ({_: 'channelParticipantsBanned', q: this.s()})
  RK = () => ({_: 'channelParticipantsSearch', q: this.s()})
  XX = () => ({_: 'channelAdminLogEventActionChangeTitle', prev_value: this.s(), new_value: this.s()})
  XY = () => ({_: 'channelAdminLogEventActionChangeAbout', prev_value: this.s(), new_value: this.s()})
  XZ = () => ({_: 'channelAdminLogEventActionChangeUsername', prev_value: this.s(), new_value: this.s()})
  YA = () => ({_: 'channelAdminLogEventActionChangePhoto', prev_photo: this.o(), new_photo: this.o()})
  YB = () => ({_: 'channelAdminLogEventActionToggleInvites', new_value: this.o()})
  YC = () => ({_: 'channelAdminLogEventActionToggleSignatures', new_value: this.o()})
  YD = () => ({_: 'channelAdminLogEventActionUpdatePinned', message: this.o()})
  YE = () => ({_: 'channelAdminLogEventActionEditMessage', prev_message: this.o(), new_message: this.o()})
  YF = () => ({_: 'channelAdminLogEventActionDeleteMessage', message: this.o()})
  YG = () => ({_: 'channelAdminLogEventActionParticipantJoin'})
  YH = () => ({_: 'channelAdminLogEventActionParticipantLeave'})
  YI = () => ({_: 'channelAdminLogEventActionParticipantInvite', participant: this.o()})
  YJ = () => ({_: 'channelAdminLogEventActionParticipantToggleBan', prev_participant: this.o(), new_participant: this.o()})
  YK = () => ({_: 'channelAdminLogEventActionParticipantToggleAdmin', prev_participant: this.o(), new_participant: this.o()})
  YS = () => ({_: 'channelAdminLogEvent', id: this.i64(), date: this.i32(), user_id: this.i32(), action: this.o()})
  YT = () => ({_: 'channels.adminLogResults', events: this.v(this.o), chats: this.v(this.o), users: this.v(this.o)})
  YU() {
    const flags = this.i32();
    return {
      _: 'channelAdminLogEventsFilter' as const,
      join: !!(flags & 0x1),
      leave: !!(flags & 0x2),
      invite: !!(flags & 0x4),
      ban: !!(flags & 0x8),
      unban: !!(flags & 0x10),
      kick: !!(flags & 0x20),
      unkick: !!(flags & 0x40),
      promote: !!(flags & 0x80),
      demote: !!(flags & 0x100),
      info: !!(flags & 0x200),
      settings: !!(flags & 0x400),
      pinned: !!(flags & 0x800),
      edit: !!(flags & 0x1000),
      delete: !!(flags & 0x2000),
    }
  }
  TH = () => ({_: 'topPeerCategoryPhoneCalls'})
  VT = () => ({_: 'pageBlockAudio', audio_id: this.i64(), caption: this.o()})
  YV = () => ({_: 'popularContact', client_id: this.i64(), importers: this.i32()})
  EP = () => ({_: 'messageActionScreenshotTaken'})
  YW = () => ({_: 'messages.favedStickersNotModified'})
  YX = () => ({_: 'messages.favedStickers', hash: this.i32(), packs: this.v(this.o), stickers: this.v(this.o)})
  JQ = () => ({_: 'updateFavedStickers'})
  JR = () => ({_: 'updateChannelReadMessagesContents', channel_id: this.i32(), messages: this.v(this.i32)})
  HG = () => ({_: 'inputMessagesFilterMyMentions'})
  JS = () => ({_: 'updateContactsReset'})
  YL = () => ({_: 'channelAdminLogEventActionChangeStickerSet', prev_stickerset: this.o(), new_stickerset: this.o()})
  EQ = () => ({_: 'messageActionCustomAction', message: this.s()})
  WZ = () => ({_: 'inputPaymentCredentialsApplePay', payment_data: this.o()})
  XA = () => ({_: 'inputPaymentCredentialsAndroidPay', payment_token: this.o(), google_transaction_id: this.s()})
  HH = () => ({_: 'inputMessagesFilterGeo'})
  HI = () => ({_: 'inputMessagesFilterContacts'})
  JT = () => ({_: 'updateChannelAvailableMessages', channel_id: this.i32(), available_min_id: this.i32()})
  YM = () => ({_: 'channelAdminLogEventActionTogglePreHistoryHidden', new_value: this.o()})
  BH() {
    const flags = this.i32();
    return {
      _: 'inputMediaGeoLive' as const,
      stopped: !!(flags & 0x1),
      geo_point: this.o(),
      period: flags & 0x2 ? this.i32() : undefined,
    }
  }
  DW = () => ({_: 'messageMediaGeoLive', geo: this.o(), period: this.i32()})
  YY = () => ({_: 'recentMeUrlUnknown', url: this.s()})
  YZ = () => ({_: 'recentMeUrlUser', url: this.s(), user_id: this.i32()})
  ZA = () => ({_: 'recentMeUrlChat', url: this.s(), chat_id: this.i32()})
  ZB = () => ({_: 'recentMeUrlChatInvite', url: this.s(), chat_invite: this.o()})
  ZC = () => ({_: 'recentMeUrlStickerSet', url: this.s(), set: this.o()})
  ZD = () => ({_: 'help.recentMeUrls', urls: this.v(this.o), chats: this.v(this.o), users: this.v(this.o)})
  RN = () => ({_: 'channels.channelParticipantsNotModified'})
  GO = () => ({_: 'messages.messagesNotModified', count: this.i32()})
  ZE() {
    const flags = this.i32();
    return {
      _: 'inputSingleMedia' as const,
      media: this.o(),
      random_id: this.i64(),
      message: this.s(),
      entities: flags & 0x1 ? this.v(this.o) : undefined,
    }
  }
  ZF = () => ({_: 'webAuthorization', hash: this.i64(), bot_id: this.i32(), domain: this.s(), browser: this.s(), platform: this.s(), date_created: this.i32(), date_active: this.i32(), ip: this.s(), region: this.s()})
  ZG = () => ({_: 'account.webAuthorizations', authorizations: this.v(this.o), users: this.v(this.o)})
  ZH = () => ({_: 'inputMessageID', id: this.i32()})
  ZI = () => ({_: 'inputMessageReplyTo', id: this.i32()})
  ZJ = () => ({_: 'inputMessagePinned'})
  QL = () => ({_: 'messageEntityPhone', offset: this.i32(), length: this.i32()})
  QM = () => ({_: 'messageEntityCashtag', offset: this.i32(), length: this.i32()})
  ER = () => ({_: 'messageActionBotAllowed', domain: this.s()})
  ZK = () => ({_: 'inputDialogPeer', peer: this.o()})
  ZM = () => ({_: 'dialogPeer', peer: this.o()})
  ZO = () => ({_: 'messages.foundStickerSetsNotModified'})
  ZP = () => ({_: 'messages.foundStickerSets', hash: this.i32(), sets: this.v(this.o)})
  ZQ = () => ({_: 'fileHash', offset: this.i32(), limit: this.i32(), hash: this.b()})
  WM = () => ({_: 'webDocumentNoProxy', url: this.s(), size: this.i32(), mime_type: this.s(), attributes: this.v(this.o)})
  ZR = () => ({_: 'inputClientProxy', address: this.s(), port: this.i32()})
  ZS = () => ({_: 'help.proxyDataEmpty', expires: this.i32()})
  ZT = () => ({_: 'help.proxyDataPromo', expires: this.i32(), peer: this.o(), chats: this.v(this.o), users: this.v(this.o)})
  ZU = () => ({_: 'help.termsOfServiceUpdateEmpty', expires: this.i32()})
  ZV = () => ({_: 'help.termsOfServiceUpdate', expires: this.i32(), terms_of_service: this.o()})
  ZW = () => ({_: 'inputSecureFileUploaded', id: this.i64(), parts: this.i32(), md5_checksum: this.s(), file_hash: this.b(), secret: this.b()})
  ZX = () => ({_: 'inputSecureFile', id: this.i64(), access_hash: this.i64()})
  BT = () => ({_: 'inputSecureFileLocation', id: this.i64(), access_hash: this.i64()})
  ZY = () => ({_: 'secureFileEmpty'})
  ZZ = () => ({_: 'secureFile', id: this.i64(), access_hash: this.i64(), size: this.i32(), dc_id: this.i32(), date: this.i32(), file_hash: this.b(), secret: this.b()})
  BAA = () => ({_: 'secureData', data: this.b(), data_hash: this.b(), secret: this.b()})
  BAB = () => ({_: 'securePlainPhone', phone: this.s()})
  BAC = () => ({_: 'securePlainEmail', email: this.s()})
  BAD = () => ({_: 'secureValueTypePersonalDetails'})
  BAE = () => ({_: 'secureValueTypePassport'})
  BAF = () => ({_: 'secureValueTypeDriverLicense'})
  BAG = () => ({_: 'secureValueTypeIdentityCard'})
  BAH = () => ({_: 'secureValueTypeInternalPassport'})
  BAI = () => ({_: 'secureValueTypeAddress'})
  BAJ = () => ({_: 'secureValueTypeUtilityBill'})
  BAK = () => ({_: 'secureValueTypeBankStatement'})
  BAL = () => ({_: 'secureValueTypeRentalAgreement'})
  BAM = () => ({_: 'secureValueTypePassportRegistration'})
  BAN = () => ({_: 'secureValueTypeTemporaryRegistration'})
  BAO = () => ({_: 'secureValueTypePhone'})
  BAP = () => ({_: 'secureValueTypeEmail'})
  BAQ() {
    const flags = this.i32();
    return {
      _: 'secureValue' as const,
      type: this.o(),
      data: flags & 0x1 ? this.o() : undefined,
      front_side: flags & 0x2 ? this.o() : undefined,
      reverse_side: flags & 0x4 ? this.o() : undefined,
      selfie: flags & 0x8 ? this.o() : undefined,
      translation: flags & 0x40 ? this.v(this.o) : undefined,
      files: flags & 0x10 ? this.v(this.o) : undefined,
      plain_data: flags & 0x20 ? this.o() : undefined,
      hash: this.b(),
    }
  }
  BAR() {
    const flags = this.i32();
    return {
      _: 'inputSecureValue' as const,
      type: this.o(),
      data: flags & 0x1 ? this.o() : undefined,
      front_side: flags & 0x2 ? this.o() : undefined,
      reverse_side: flags & 0x4 ? this.o() : undefined,
      selfie: flags & 0x8 ? this.o() : undefined,
      translation: flags & 0x40 ? this.v(this.o) : undefined,
      files: flags & 0x10 ? this.v(this.o) : undefined,
      plain_data: flags & 0x20 ? this.o() : undefined,
    }
  }
  BAS = () => ({_: 'secureValueHash', type: this.o(), hash: this.b()})
  BAT = () => ({_: 'secureValueErrorData', type: this.o(), data_hash: this.b(), field: this.s(), text: this.s()})
  BAU = () => ({_: 'secureValueErrorFrontSide', type: this.o(), file_hash: this.b(), text: this.s()})
  BAV = () => ({_: 'secureValueErrorReverseSide', type: this.o(), file_hash: this.b(), text: this.s()})
  BAW = () => ({_: 'secureValueErrorSelfie', type: this.o(), file_hash: this.b(), text: this.s()})
  BAX = () => ({_: 'secureValueErrorFile', type: this.o(), file_hash: this.b(), text: this.s()})
  BAY = () => ({_: 'secureValueErrorFiles', type: this.o(), file_hash: this.v(this.b), text: this.s()})
  BBC = () => ({_: 'secureCredentialsEncrypted', data: this.b(), hash: this.b(), secret: this.b()})
  BBD() {
    const flags = this.i32();
    return {
      _: 'account.authorizationForm' as const,
      required_types: this.v(this.o),
      values: this.v(this.o),
      errors: this.v(this.o),
      users: this.v(this.o),
      privacy_policy_url: flags & 0x1 ? this.s() : undefined,
    }
  }
  BBE = () => ({_: 'account.sentEmailCode', email_pattern: this.s(), length: this.i32()})
  ES = () => ({_: 'messageActionSecureValuesSentMe', values: this.v(this.o), credentials: this.o()})
  ET = () => ({_: 'messageActionSecureValuesSent', types: this.v(this.o)})
  BBF = () => ({_: 'help.deepLinkInfoEmpty'})
  BBG() {
    const flags = this.i32();
    return {
      _: 'help.deepLinkInfo' as const,
      update_app: !!(flags & 0x1),
      message: this.s(),
      entities: flags & 0x2 ? this.v(this.o) : undefined,
    }
  }
  BBH = () => ({_: 'savedPhoneContact', phone: this.s(), first_name: this.s(), last_name: this.s(), date: this.i32()})
  BBI = () => ({_: 'account.takeout', id: this.i64()})
  BU = () => ({_: 'inputTakeoutFileLocation'})
  JU() {
    const flags = this.i32();
    return {
      _: 'updateDialogUnreadMark' as const,
      unread: !!(flags & 0x1),
      peer: this.o(),
    }
  }
  GK = () => ({_: 'messages.dialogsNotModified', count: this.i32()})
  WP = () => ({_: 'inputWebFileGeoPointLocation', geo_point: this.o(), access_hash: this.i64(), w: this.i32(), h: this.i32(), zoom: this.i32(), scale: this.i32()})
  TN = () => ({_: 'contacts.topPeersDisabled'})
  FW = () => ({_: 'inputReportReasonCopyright'})
  BBJ = () => ({_: 'passwordKdfAlgoUnknown'})
  BBL = () => ({_: 'securePasswordKdfAlgoUnknown'})
  BBM = () => ({_: 'securePasswordKdfAlgoPBKDF2HMACSHA512iter100000', salt: this.b()})
  BBN = () => ({_: 'securePasswordKdfAlgoSHA512', salt: this.b()})
  BBO = () => ({_: 'secureSecretSettings', secure_algo: this.o(), secure_secret: this.b(), secure_secret_id: this.i64()})
  BBK = () => ({_: 'passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow', salt1: this.b(), salt2: this.b(), g: this.i32(), p: this.b()})
  BBP = () => ({_: 'inputCheckPasswordEmpty'})
  BBQ = () => ({_: 'inputCheckPasswordSRP', srp_id: this.i64(), A: this.b(), M1: this.b()})
  BAZ = () => ({_: 'secureValueError', type: this.o(), hash: this.b(), text: this.s()})
  BBA = () => ({_: 'secureValueErrorTranslationFile', type: this.o(), file_hash: this.b(), text: this.s()})
  BBB = () => ({_: 'secureValueErrorTranslationFiles', type: this.o(), file_hash: this.v(this.b), text: this.s()})
  BBR() {
    const flags = this.i32();
    return {
      _: 'secureRequiredType' as const,
      native_names: !!(flags & 0x1),
      selfie_required: !!(flags & 0x2),
      translation_required: !!(flags & 0x4),
      type: this.o(),
    }
  }
  BBS = () => ({_: 'secureRequiredTypeOneOf', types: this.v(this.o)})
  BBT = () => ({_: 'help.passportConfigNotModified'})
  BBU = () => ({_: 'help.passportConfig', hash: this.i32(), countries_langs: this.o()})
  BBV = () => ({_: 'inputAppEvent', time: this.d(), type: this.s(), peer: this.i64(), data: this.o()})
  BBW = () => ({_: 'jsonObjectValue', key: this.s(), value: this.o()})
  BBX = () => ({_: 'jsonNull'})
  BBY = () => ({_: 'jsonBool', value: this.o()})
  BBZ = () => ({_: 'jsonNumber', value: this.d()})
  BCA = () => ({_: 'jsonString', value: this.s()})
  BCB = () => ({_: 'jsonArray', value: this.v(this.o)})
  BCC = () => ({_: 'jsonObject', value: this.v(this.o)})
  JV = () => ({_: 'updateUserPinnedMessage', user_id: this.i32(), id: this.i32()})
  JW = () => ({_: 'updateChatPinnedMessage', chat_id: this.i32(), id: this.i32(), version: this.i32()})
  FM = () => ({_: 'inputNotifyBroadcasts'})
  MC = () => ({_: 'notifyBroadcasts'})
  UR = () => ({_: 'textSubscript', text: this.o()})
  US = () => ({_: 'textSuperscript', text: this.o()})
  UT = () => ({_: 'textMarked', text: this.o()})
  UU = () => ({_: 'textPhone', text: this.o(), phone: this.s()})
  UV = () => ({_: 'textImage', document_id: this.i64(), w: this.i32(), h: this.i32()})
  VU = () => ({_: 'pageBlockKicker', text: this.o()})
  BCD() {
    const flags = this.i32();
    return {
      _: 'pageTableCell' as const,
      header: !!(flags & 0x1),
      align_center: !!(flags & 0x8),
      align_right: !!(flags & 0x10),
      valign_middle: !!(flags & 0x20),
      valign_bottom: !!(flags & 0x40),
      text: flags & 0x80 ? this.o() : undefined,
      colspan: flags & 0x2 ? this.i32() : undefined,
      rowspan: flags & 0x4 ? this.i32() : undefined,
    }
  }
  BCE = () => ({_: 'pageTableRow', cells: this.v(this.o)})
  VV() {
    const flags = this.i32();
    return {
      _: 'pageBlockTable' as const,
      bordered: !!(flags & 0x1),
      striped: !!(flags & 0x2),
      title: this.o(),
      rows: this.v(this.o),
    }
  }
  BCF = () => ({_: 'pageCaption', text: this.o(), credit: this.o()})
  BCG = () => ({_: 'pageListItemText', text: this.o()})
  BCH = () => ({_: 'pageListItemBlocks', blocks: this.v(this.o)})
  BCI = () => ({_: 'pageListOrderedItemText', num: this.s(), text: this.o()})
  BCJ = () => ({_: 'pageListOrderedItemBlocks', num: this.s(), blocks: this.v(this.o)})
  VW = () => ({_: 'pageBlockOrderedList', items: this.v(this.o)})
  VX() {
    const flags = this.i32();
    return {
      _: 'pageBlockDetails' as const,
      open: !!(flags & 0x1),
      blocks: this.v(this.o),
      title: this.o(),
    }
  }
  BCK() {
    const flags = this.i32();
    return {
      _: 'pageRelatedArticle' as const,
      url: this.s(),
      webpage_id: this.i64(),
      title: flags & 0x1 ? this.s() : undefined,
      description: flags & 0x2 ? this.s() : undefined,
      photo_id: flags & 0x4 ? this.i64() : undefined,
      author: flags & 0x8 ? this.s() : undefined,
      published_date: flags & 0x10 ? this.i32() : undefined,
    }
  }
  VY = () => ({_: 'pageBlockRelatedArticles', title: this.o(), articles: this.v(this.o)})
  VZ = () => ({_: 'pageBlockMap', geo: this.o(), zoom: this.i32(), w: this.i32(), h: this.i32(), caption: this.o()})
  BCL() {
    const flags = this.i32();
    return {
      _: 'page' as const,
      part: !!(flags & 0x1),
      rtl: !!(flags & 0x2),
      v2: !!(flags & 0x4),
      url: this.s(),
      blocks: this.v(this.o),
      photos: this.v(this.o),
      documents: this.v(this.o),
    }
  }
  MU = () => ({_: 'inputPrivacyKeyPhoneP2P'})
  NC = () => ({_: 'privacyKeyPhoneP2P'})
  UW = () => ({_: 'textAnchor', text: this.o(), name: this.s()})
  BCM = () => ({_: 'help.supportName', name: this.s()})
  BCN = () => ({_: 'help.userInfoEmpty'})
  BCO = () => ({_: 'help.userInfo', message: this.s(), entities: this.v(this.o), author: this.s(), date: this.i32()})
  EU = () => ({_: 'messageActionContactSignUp'})
  JX() {
    const flags = this.i32();
    return {
      _: 'updateMessagePoll' as const,
      poll_id: this.i64(),
      poll: flags & 0x1 ? this.o() : undefined,
      results: this.o(),
    }
  }
  BCP = () => ({_: 'pollAnswer', text: this.s(), option: this.b()})
  BCQ() {
    const flags = this.i32();
    return {
      _: 'poll' as const,
      id: this.i64(),
      closed: !!(flags & 0x1),
      public_voters: !!(flags & 0x2),
      multiple_choice: !!(flags & 0x4),
      quiz: !!(flags & 0x8),
      question: this.s(),
      answers: this.v(this.o),
    }
  }
  BCR() {
    const flags = this.i32();
    return {
      _: 'pollAnswerVoters' as const,
      chosen: !!(flags & 0x1),
      correct: !!(flags & 0x2),
      option: this.b(),
      voters: this.i32(),
    }
  }
  BCS() {
    const flags = this.i32();
    return {
      _: 'pollResults' as const,
      min: !!(flags & 0x1),
      results: flags & 0x2 ? this.v(this.o) : undefined,
      total_voters: flags & 0x4 ? this.i32() : undefined,
    }
  }
  BI = () => ({_: 'inputMediaPoll', poll: this.o()})
  DX = () => ({_: 'messageMediaPoll', poll: this.o(), results: this.o()})
  BCT = () => ({_: 'chatOnlines', onlines: this.i32()})
  BCU = () => ({_: 'statsURL', url: this.s()})
  FC = () => ({_: 'photoStrippedSize', type: this.s(), bytes: this.b()})
  BCV() {
    const flags = this.i32();
    return {
      _: 'chatAdminRights' as const,
      change_info: !!(flags & 0x1),
      post_messages: !!(flags & 0x2),
      edit_messages: !!(flags & 0x4),
      delete_messages: !!(flags & 0x8),
      ban_users: !!(flags & 0x10),
      invite_users: !!(flags & 0x20),
      pin_messages: !!(flags & 0x80),
      add_admins: !!(flags & 0x200),
    }
  }
  BCW() {
    const flags = this.i32();
    return {
      _: 'chatBannedRights' as const,
      view_messages: !!(flags & 0x1),
      send_messages: !!(flags & 0x2),
      send_media: !!(flags & 0x4),
      send_stickers: !!(flags & 0x8),
      send_gifs: !!(flags & 0x10),
      send_games: !!(flags & 0x20),
      send_inline: !!(flags & 0x40),
      embed_links: !!(flags & 0x80),
      send_polls: !!(flags & 0x100),
      change_info: !!(flags & 0x400),
      invite_users: !!(flags & 0x8000),
      pin_messages: !!(flags & 0x20000),
      until_date: this.i32(),
    }
  }
  JY = () => ({_: 'updateChatDefaultBannedRights', peer: this.o(), default_banned_rights: this.o(), version: this.i32()})
  BCX = () => ({_: 'inputWallPaper', id: this.i64(), access_hash: this.i64()})
  BCY = () => ({_: 'inputWallPaperSlug', slug: this.s()})
  RL = () => ({_: 'channelParticipantsContacts', q: this.s()})
  YN = () => ({_: 'channelAdminLogEventActionDefaultBannedRights', prev_banned_rights: this.o(), new_banned_rights: this.o()})
  YO = () => ({_: 'channelAdminLogEventActionStopPoll', message: this.o()})
  BCZ = () => ({_: 'account.wallPapersNotModified'})
  BDA = () => ({_: 'account.wallPapers', hash: this.i32(), wallpapers: this.v(this.o)})
  BDB() {
    const flags = this.i32();
    return {
      _: 'codeSettings' as const,
      allow_flashcall: !!(flags & 0x1),
      current_number: !!(flags & 0x2),
      allow_app_hash: !!(flags & 0x10),
    }
  }
  BDC() {
    const flags = this.i32();
    return {
      _: 'wallPaperSettings' as const,
      blur: !!(flags & 0x2),
      motion: !!(flags & 0x4),
      background_color: flags & 0x1 ? this.i32() : undefined,
      second_background_color: flags & 0x10 ? this.i32() : undefined,
      intensity: flags & 0x8 ? this.i32() : undefined,
      rotation: flags & 0x10 ? this.i32() : undefined,
    }
  }
  BDD() {
    const flags = this.i32();
    return {
      _: 'autoDownloadSettings' as const,
      disabled: !!(flags & 0x1),
      video_preload_large: !!(flags & 0x2),
      audio_preload_next: !!(flags & 0x4),
      phonecalls_less_data: !!(flags & 0x8),
      photo_size_max: this.i32(),
      video_size_max: this.i32(),
      file_size_max: this.i32(),
      video_upload_maxbitrate: this.i32(),
    }
  }
  BDE = () => ({_: 'account.autoDownloadSettings', low: this.o(), medium: this.o(), high: this.o()})
  BDF = () => ({_: 'emojiKeyword', keyword: this.s(), emoticons: this.v(this.s)})
  BDG = () => ({_: 'emojiKeywordDeleted', keyword: this.s(), emoticons: this.v(this.s)})
  BDH = () => ({_: 'emojiKeywordsDifference', lang_code: this.s(), from_version: this.i32(), version: this.i32(), keywords: this.v(this.o)})
  BDI = () => ({_: 'emojiURL', url: this.s()})
  BDJ = () => ({_: 'emojiLanguage', lang_code: this.s()})
  MV = () => ({_: 'inputPrivacyKeyForwards'})
  ND = () => ({_: 'privacyKeyForwards'})
  MW = () => ({_: 'inputPrivacyKeyProfilePhoto'})
  NE = () => ({_: 'privacyKeyProfilePhoto'})
  BDK = () => ({_: 'fileLocationToBeDeprecated', volume_id: this.i64(), local_id: this.i32()})
  BV = () => ({_: 'inputPhotoFileLocation', id: this.i64(), access_hash: this.i64(), file_reference: this.b(), thumb_size: this.s()})
  BEC = () => ({_: 'inputPhotoLegacyFileLocation', id: this.i64(), access_hash: this.i64(), file_reference: this.b(), volume_id: this.i64(), local_id: this.i32(), secret: this.i64()})
  BW() {
    const flags = this.i32();
    return {
      _: 'inputPeerPhotoFileLocation' as const,
      big: !!(flags & 0x1),
      peer: this.o(),
      volume_id: this.i64(),
      local_id: this.i32(),
    }
  }
  BX = () => ({_: 'inputStickerSetThumb', stickerset: this.o(), volume_id: this.i64(), local_id: this.i32()})
  BDL() {
    const flags = this.i32();
    return {
      _: 'folder' as const,
      autofill_new_broadcasts: !!(flags & 0x1),
      autofill_public_groups: !!(flags & 0x2),
      autofill_new_correspondents: !!(flags & 0x4),
      id: this.i32(),
      title: this.s(),
      photo: flags & 0x8 ? this.o() : undefined,
    }
  }
  EW() {
    const flags = this.i32();
    return {
      _: 'dialogFolder' as const,
      pinned: !!(flags & 0x4),
      folder: this.o(),
      peer: this.o(),
      top_message: this.i32(),
      unread_muted_peers_count: this.i32(),
      unread_unmuted_peers_count: this.i32(),
      unread_muted_messages_count: this.i32(),
      unread_unmuted_messages_count: this.i32(),
    }
  }
  ZL = () => ({_: 'inputDialogPeerFolder', folder_id: this.i32()})
  ZN = () => ({_: 'dialogPeerFolder', folder_id: this.i32()})
  BDM = () => ({_: 'inputFolderPeer', peer: this.o(), folder_id: this.i32()})
  BDN = () => ({_: 'folderPeer', peer: this.o(), folder_id: this.i32()})
  JZ = () => ({_: 'updateFolderPeers', folder_peers: this.v(this.o), pts: this.i32(), pts_count: this.i32()})
  Q = () => ({_: 'inputUserFromMessage', peer: this.o(), msg_id: this.i32(), user_id: this.i32()})
  QS = () => ({_: 'inputChannelFromMessage', peer: this.o(), msg_id: this.i32(), channel_id: this.i32()})
  L = () => ({_: 'inputPeerUserFromMessage', peer: this.o(), msg_id: this.i32(), user_id: this.i32()})
  M = () => ({_: 'inputPeerChannelFromMessage', peer: this.o(), msg_id: this.i32(), channel_id: this.i32()})
  MX = () => ({_: 'inputPrivacyKeyPhoneNumber'})
  NF = () => ({_: 'privacyKeyPhoneNumber'})
  TI = () => ({_: 'topPeerCategoryForwardUsers'})
  TJ = () => ({_: 'topPeerCategoryForwardChats'})
  YP = () => ({_: 'channelAdminLogEventActionChangeLinkedChat', prev_value: this.i32(), new_value: this.i32()})
  BDO() {
    const flags = this.i32();
    return {
      _: 'messages.searchCounter' as const,
      inexact: !!(flags & 0x2),
      filter: this.o(),
      count: this.i32(),
    }
  }
  PR() {
    const flags = this.i32();
    return {
      _: 'keyboardButtonUrlAuth' as const,
      text: this.s(),
      fwd_text: flags & 0x1 ? this.s() : undefined,
      url: this.s(),
      button_id: this.i32(),
    }
  }
  PS() {
    const flags = this.i32();
    return {
      _: 'inputKeyboardButtonUrlAuth' as const,
      request_write_access: !!(flags & 0x1),
      text: this.s(),
      fwd_text: flags & 0x2 ? this.s() : undefined,
      url: this.s(),
      bot: this.o(),
    }
  }
  BDP() {
    const flags = this.i32();
    return {
      _: 'urlAuthResultRequest' as const,
      request_write_access: !!(flags & 0x1),
      bot: this.o(),
      domain: this.s(),
    }
  }
  BDQ = () => ({_: 'urlAuthResultAccepted', url: this.s()})
  BDR = () => ({_: 'urlAuthResultDefault'})
  NN = () => ({_: 'inputPrivacyValueAllowChatParticipants', chats: this.v(this.i32)})
  NO = () => ({_: 'inputPrivacyValueDisallowChatParticipants', chats: this.v(this.i32)})
  NV = () => ({_: 'privacyValueAllowChatParticipants', chats: this.v(this.i32)})
  NW = () => ({_: 'privacyValueDisallowChatParticipants', chats: this.v(this.i32)})
  QN = () => ({_: 'messageEntityUnderline', offset: this.i32(), length: this.i32()})
  QO = () => ({_: 'messageEntityStrike', offset: this.i32(), length: this.i32()})
  QP = () => ({_: 'messageEntityBlockquote', offset: this.i32(), length: this.i32()})
  KA = () => ({_: 'updatePeerSettings', peer: this.o(), settings: this.o()})
  BDS = () => ({_: 'channelLocationEmpty'})
  BDT = () => ({_: 'channelLocation', geo_point: this.o(), address: this.s()})
  BDU = () => ({_: 'peerLocated', peer: this.o(), expires: this.i32(), distance: this.i32()})
  KB = () => ({_: 'updatePeerLocated', peers: this.v(this.o)})
  YQ = () => ({_: 'channelAdminLogEventActionChangeLocation', prev_value: this.o(), new_value: this.o()})
  FX = () => ({_: 'inputReportReasonGeoIrrelevant'})
  YR = () => ({_: 'channelAdminLogEventActionToggleSlowMode', prev_value: this.i32(), new_value: this.i32()})
  FH() {
    const flags = this.i32();
    return {
      _: 'auth.authorizationSignUpRequired' as const,
      terms_of_service: flags & 0x1 ? this.o() : undefined,
    }
  }
  WU = () => ({_: 'payments.paymentVerificationNeeded', url: this.s()})
  PE = () => ({_: 'inputStickerSetAnimatedEmoji'})
  KC = () => ({_: 'updateNewScheduledMessage', message: this.o()})
  KD = () => ({_: 'updateDeleteScheduledMessages', peer: this.o(), messages: this.v(this.i32)})
  BDV = () => ({_: 'restrictionReason', platform: this.s(), reason: this.s(), text: this.s()})
  BDW = () => ({_: 'inputTheme', id: this.i64(), access_hash: this.i64()})
  BDX = () => ({_: 'inputThemeSlug', slug: this.s()})
  BDZ() {
    const flags = this.i32();
    return {
      _: 'theme' as const,
      creator: !!(flags & 0x1),
      default: !!(flags & 0x2),
      id: this.i64(),
      access_hash: this.i64(),
      slug: this.s(),
      title: this.s(),
      document: flags & 0x4 ? this.o() : undefined,
      settings: flags & 0x8 ? this.o() : undefined,
      installs_count: this.i32(),
    }
  }
  BEA = () => ({_: 'account.themesNotModified'})
  BEB = () => ({_: 'account.themes', hash: this.i32(), themes: this.v(this.o)})
  KE = () => ({_: 'updateTheme', theme: this.o()})
  MY = () => ({_: 'inputPrivacyKeyAddedByPhone'})
  NG = () => ({_: 'privacyKeyAddedByPhone'})
  BEE = () => ({_: 'updateGeoLiveViewed', peer: this.o(), msg_id: this.i32()})
  BEF = () => ({_: 'updateLoginToken'})
  BEH = () => ({_: 'auth.loginToken', expires: this.i32(), token: this.b()})
  BEI = () => ({_: 'auth.loginTokenMigrateTo', dc_id: this.i32(), token: this.b()})
  BEJ = () => ({_: 'auth.loginTokenSuccess', authorization: this.o()})
  BEK() {
    const flags = this.i32();
    return {
      _: 'account.contentSettings' as const,
      sensitive_enabled: !!(flags & 0x1),
      sensitive_can_change: !!(flags & 0x2),
    }
  }
  BEL = () => ({_: 'messages.inactiveChats', dates: this.v(this.i32), chats: this.v(this.o), users: this.v(this.o)})
  BEM = () => ({_: 'baseThemeClassic'})
  BEN = () => ({_: 'baseThemeDay'})
  BEO = () => ({_: 'baseThemeNight'})
  BEP = () => ({_: 'baseThemeTinted'})
  BEQ = () => ({_: 'baseThemeArctic'})
  BEG = () => ({_: 'inputWallPaperNoFile'})
  BED() {
    const flags = this.i32();
    return {
      _: 'wallPaperNoFile' as const,
      default: !!(flags & 0x2),
      dark: !!(flags & 0x10),
      settings: flags & 0x4 ? this.o() : undefined,
    }
  }
  BER() {
    const flags = this.i32();
    return {
      _: 'inputThemeSettings' as const,
      base_theme: this.o(),
      accent_color: this.i32(),
      message_top_color: flags & 0x1 ? this.i32() : undefined,
      message_bottom_color: flags & 0x1 ? this.i32() : undefined,
      wallpaper: flags & 0x2 ? this.o() : undefined,
      wallpaper_settings: flags & 0x2 ? this.o() : undefined,
    }
  }
  BES() {
    const flags = this.i32();
    return {
      _: 'themeSettings' as const,
      base_theme: this.o(),
      accent_color: this.i32(),
      message_top_color: flags & 0x1 ? this.i32() : undefined,
      message_bottom_color: flags & 0x1 ? this.i32() : undefined,
      wallpaper: flags & 0x2 ? this.o() : undefined,
    }
  }
  BET() {
    const flags = this.i32();
    return {
      _: 'webPageAttributeTheme' as const,
      documents: flags & 0x1 ? this.v(this.o) : undefined,
      settings: flags & 0x2 ? this.o() : undefined,
    }
  }
}
