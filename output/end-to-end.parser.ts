/*******************************************************************************************/
/* This file was automatically generated (https://github.com/misupov/tg-schema-generator). */
/*                                                                                         */
/* Do not make changes to this file unless you know what you are doing -- modify           */
/* the tool instead.                                                                       */
/*                                                                                         */
/* Source: end-to-end.json                                                                 */
/*                                                                                         */
/*******************************************************************************************/

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
      case 0x1f814f1f: return t.BGI();
      case 0x204d3878: return t.BGI();
      case 0x36b091de: return t.BGI();
      case 0x91cc4674: return t.BGI();
      case 0xaa48327d: return t.BGJ();
      case 0x73164160: return t.BGJ();
      case 0x89f5c4a: return t.BGK();
      case 0x32798a8c: return t.BGL();
      case 0xf1fa8d78: return t.BGL();
      case 0x4cee6ef3: return t.BGM();
      case 0x524a415d: return t.BGM();
      case 0x970c8c0e: return t.BGM();
      case 0x35480a59: return t.BGN();
      case 0x588a0a97: return t.BGO();
      case 0xa1733aec: return t.BGU();
      case 0xb095434b: return t.BGP();
      case 0x7afe8ae2: return t.BGP();
      case 0x6080758f: return t.BGQ();
      case 0x57e0a9cb: return t.BGQ();
      case 0xc4f40be: return t.BGV();
      case 0x65614304: return t.BGW();
      case 0x8ac1f475: return t.BGX();
      case 0x6719e45c: return t.BGY();
      case 0x1be31789: return t.BHH();
      case 0x16bf744e: return t.MD();
      case 0xfd5ec8f5: return t.ME();
      case 0xa187d66f: return t.MF();
      case 0x92042ff7: return t.MG();
      case 0xd52f73f7: return t.MH();
      case 0xe6ac8a6f: return t.MI();
      case 0x990a3c1a: return t.MJ();
      case 0x8faee98e: return t.MK();
      case 0x176f8ba1: return t.ML();
      case 0x628cbc6f: return t.MM();
      case 0x511110b0: return t.BGZ();
      case 0xf3048883: return t.BHA();
      case 0xccb27641: return t.BHB();
      case 0xf3c9611b: return t.BHC();
      case 0x6fe1735b: return t.BHD();
      case 0xdd05ec6b: return t.BHE();
      case 0xec2e0b9b: return t.BHF();
      case 0xa82fdd63: return t.BHG();
      case 0x6c37c15c: return t.NZ();
      case 0x11b58939: return t.OA();
      case 0xfb0a5727: return t.OB();
      case 0x3a556302: return t.OB();
      case 0x5910cccb: return t.OC();
      case 0xef02ce6: return t.OC();
      case 0x51448e5: return t.OD();
      case 0xded218e0: return t.OD();
      case 0x9852f9c6: return t.OD();
      case 0x15590068: return t.OE();
      case 0xe17e23c: return t.EZ();
      case 0x77bfb61b: return t.FA();
      case 0xe9a734fa: return t.FB();
      case 0x7c596b46: return t.BHI();
      case 0x53d69076: return t.BHJ();
      case 0xfa95b0dd: return t.BGR();
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
      case 0x861cc8a0: return t.PD();
      case 0xffb62b95: return t.PB();
      case 0x8a0df56f: return t.BGS();
      case 0xe50511d8: return t.BGT();
      case 0x88f27fbc: return t.MO();
      case 0xbb718624: return t.MP();
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
  
  BGI = () => ({_: 'decryptedMessage', random_id: this.i64(), random_bytes: this.b(), message: this.s(), media: this.o()})
  BGI = () => ({_: 'decryptedMessage', random_id: this.i64(), ttl: this.i32(), message: this.s(), media: this.o()})
  BGI() {
    const flags = this.i32();
    return {
      _: 'decryptedMessage' as const,
      random_id: this.i64(),
      ttl: this.i32(),
      message: this.s(),
      media: flags & 0x200 ? this.o() : undefined,
      entities: flags & 0x80 ? this.v(this.o) : undefined,
      via_bot_name: flags & 0x800 ? this.s() : undefined,
      reply_to_random_id: flags & 0x8 ? this.i64() : undefined,
    }
  }
  BGI() {
    const flags = this.i32();
    return {
      _: 'decryptedMessage' as const,
      random_id: this.i64(),
      ttl: this.i32(),
      message: this.s(),
      media: flags & 0x200 ? this.o() : undefined,
      entities: flags & 0x80 ? this.v(this.o) : undefined,
      via_bot_name: flags & 0x800 ? this.s() : undefined,
      reply_to_random_id: flags & 0x8 ? this.i64() : undefined,
      grouped_id: flags & 0x20000 ? this.i64() : undefined,
    }
  }
  BGJ = () => ({_: 'decryptedMessageService', random_id: this.i64(), random_bytes: this.b(), action: this.o()})
  BGJ = () => ({_: 'decryptedMessageService', random_id: this.i64(), action: this.o()})
  BGK = () => ({_: 'decryptedMessageMediaEmpty'})
  BGL = () => ({_: 'decryptedMessageMediaPhoto', thumb: this.b(), thumb_w: this.i32(), thumb_h: this.i32(), w: this.i32(), h: this.i32(), size: this.i32(), key: this.b(), iv: this.b()})
  BGL = () => ({_: 'decryptedMessageMediaPhoto', thumb: this.b(), thumb_w: this.i32(), thumb_h: this.i32(), w: this.i32(), h: this.i32(), size: this.i32(), key: this.b(), iv: this.b(), caption: this.s()})
  BGM = () => ({_: 'decryptedMessageMediaVideo', thumb: this.b(), thumb_w: this.i32(), thumb_h: this.i32(), duration: this.i32(), w: this.i32(), h: this.i32(), size: this.i32(), key: this.b(), iv: this.b()})
  BGM = () => ({_: 'decryptedMessageMediaVideo', thumb: this.b(), thumb_w: this.i32(), thumb_h: this.i32(), duration: this.i32(), mime_type: this.s(), w: this.i32(), h: this.i32(), size: this.i32(), key: this.b(), iv: this.b()})
  BGM = () => ({_: 'decryptedMessageMediaVideo', thumb: this.b(), thumb_w: this.i32(), thumb_h: this.i32(), duration: this.i32(), mime_type: this.s(), w: this.i32(), h: this.i32(), size: this.i32(), key: this.b(), iv: this.b(), caption: this.s()})
  BGN = () => ({_: 'decryptedMessageMediaGeoPoint', lat: this.d(), long: this.d()})
  BGO = () => ({_: 'decryptedMessageMediaContact', phone_number: this.s(), first_name: this.s(), last_name: this.s(), user_id: this.i32()})
  BGU = () => ({_: 'decryptedMessageActionSetMessageTTL', ttl_seconds: this.i32()})
  BGP = () => ({_: 'decryptedMessageMediaDocument', thumb: this.b(), thumb_w: this.i32(), thumb_h: this.i32(), file_name: this.s(), mime_type: this.s(), size: this.i32(), key: this.b(), iv: this.b()})
  BGP = () => ({_: 'decryptedMessageMediaDocument', thumb: this.b(), thumb_w: this.i32(), thumb_h: this.i32(), mime_type: this.s(), size: this.i32(), key: this.b(), iv: this.b(), attributes: this.v(this.o), caption: this.s()})
  BGQ = () => ({_: 'decryptedMessageMediaAudio', duration: this.i32(), size: this.i32(), key: this.b(), iv: this.b()})
  BGQ = () => ({_: 'decryptedMessageMediaAudio', duration: this.i32(), mime_type: this.s(), size: this.i32(), key: this.b(), iv: this.b()})
  BGV = () => ({_: 'decryptedMessageActionReadMessages', random_ids: this.v(this.i64)})
  BGW = () => ({_: 'decryptedMessageActionDeleteMessages', random_ids: this.v(this.i64)})
  BGX = () => ({_: 'decryptedMessageActionScreenshotMessages', random_ids: this.v(this.i64)})
  BGY = () => ({_: 'decryptedMessageActionFlushHistory'})
  BHH = () => ({_: 'decryptedMessageLayer', random_bytes: this.b(), layer: this.i32(), in_seq_no: this.i32(), out_seq_no: this.i32(), message: this.o()})
  MD = () => ({_: 'sendMessageTypingAction'})
  ME = () => ({_: 'sendMessageCancelAction'})
  MF = () => ({_: 'sendMessageRecordVideoAction'})
  MG = () => ({_: 'sendMessageUploadVideoAction'})
  MH = () => ({_: 'sendMessageRecordAudioAction'})
  MI = () => ({_: 'sendMessageUploadAudioAction'})
  MJ = () => ({_: 'sendMessageUploadPhotoAction'})
  MK = () => ({_: 'sendMessageUploadDocumentAction'})
  ML = () => ({_: 'sendMessageGeoLocationAction'})
  MM = () => ({_: 'sendMessageChooseContactAction'})
  BGZ = () => ({_: 'decryptedMessageActionResend', start_seq_no: this.i32(), end_seq_no: this.i32()})
  BHA = () => ({_: 'decryptedMessageActionNotifyLayer', layer: this.i32()})
  BHB = () => ({_: 'decryptedMessageActionTyping', action: this.o()})
  BHC = () => ({_: 'decryptedMessageActionRequestKey', exchange_id: this.i64(), g_a: this.b()})
  BHD = () => ({_: 'decryptedMessageActionAcceptKey', exchange_id: this.i64(), g_b: this.b(), key_fingerprint: this.i64()})
  BHE = () => ({_: 'decryptedMessageActionAbortKey', exchange_id: this.i64()})
  BHF = () => ({_: 'decryptedMessageActionCommitKey', exchange_id: this.i64(), key_fingerprint: this.i64()})
  BHG = () => ({_: 'decryptedMessageActionNoop'})
  NZ = () => ({_: 'documentAttributeImageSize', w: this.i32(), h: this.i32()})
  OA = () => ({_: 'documentAttributeAnimated'})
  OB = () => ({_: 'documentAttributeSticker'})
  OB = () => ({_: 'documentAttributeSticker', alt: this.s(), stickerset: this.o()})
  OC = () => ({_: 'documentAttributeVideo', duration: this.i32(), w: this.i32(), h: this.i32()})
  OC() {
    const flags = this.i32();
    return {
      _: 'documentAttributeVideo' as const,
      duration: this.i32(),
      w: this.i32(),
      h: this.i32(),
    }
  }
  OD = () => ({_: 'documentAttributeAudio', duration: this.i32()})
  OD = () => ({_: 'documentAttributeAudio', duration: this.i32(), title: this.s(), performer: this.s()})
  OD() {
    const flags = this.i32();
    return {
      _: 'documentAttributeAudio' as const,
      duration: this.i32(),
      title: flags & 0x1 ? this.s() : undefined,
      performer: flags & 0x2 ? this.s() : undefined,
      waveform: flags & 0x4 ? this.b() : undefined,
    }
  }
  OE = () => ({_: 'documentAttributeFilename', file_name: this.s()})
  EZ = () => ({_: 'photoSizeEmpty', type: this.s()})
  FA = () => ({_: 'photoSize', type: this.s(), location: this.o(), w: this.i32(), h: this.i32(), size: this.i32()})
  FB = () => ({_: 'photoCachedSize', type: this.s(), location: this.o(), w: this.i32(), h: this.i32(), bytes: this.b()})
  BHI = () => ({_: 'fileLocationUnavailable', volume_id: this.i64(), local_id: this.i32(), secret: this.i64()})
  BHJ = () => ({_: 'fileLocation', dc_id: this.i32(), volume_id: this.i64(), local_id: this.i32(), secret: this.i64()})
  BGR = () => ({_: 'decryptedMessageMediaExternalDocument', id: this.i64(), access_hash: this.i64(), date: this.i32(), mime_type: this.s(), size: this.i32(), thumb: this.o(), dc_id: this.i32(), attributes: this.v(this.o)})
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
  PD = () => ({_: 'inputStickerSetShortName', short_name: this.s()})
  PB = () => ({_: 'inputStickerSetEmpty'})
  BGS = () => ({_: 'decryptedMessageMediaVenue', lat: this.d(), long: this.d(), title: this.s(), address: this.s(), provider: this.s(), venue_id: this.s()})
  BGT = () => ({_: 'decryptedMessageMediaWebPage', url: this.s()})
  MO = () => ({_: 'sendMessageRecordRoundAction'})
  MP = () => ({_: 'sendMessageUploadRoundAction'})
}
