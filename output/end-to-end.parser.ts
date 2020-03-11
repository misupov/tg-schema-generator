/*******************************************************************************************/
/* This file was automatically generated (https://github.com/misupov/tg-schema-generator). */
/*                                                                                         */
/* Do not make changes to this file unless you know what you are doing -- modify           */
/* the tool instead.                                                                       */
/*                                                                                         */
/* Source: end-to-end.json (md5: 8996a33c4b128078a454aaa749900956)                         */
/* Time: Wednesday, 11 March 2020 21:54:25 (UTC)                                           */
/*                                                                                         */
/*******************************************************************************************/

interface ByteStream {
  readInt32(): number;
  readInt64(): string;
  readInt128(): string;
  readInt256(): string;
  readDouble(): number;
  readString(): string;
  readBytes(): ArrayBuffer;
  revert(bytes: number): void;
}

let s: ByteStream;
let fallbackParse: ((stream: ByteStream) => any) | undefined;

export default function parse(stream: ByteStream, fallback?: (stream: ByteStream) => any) {
  s = stream;
  fallbackParse = fallback;
  return obj();
}

const _decryptedMessage8: any = () => ({ _: 'decryptedMessage', random_id: i64(), random_bytes: bytes(), message: str(), media: obj() });
const _decryptedMessage17: any = () => ({ _: 'decryptedMessage', random_id: i64(), ttl: i32(), message: str(), media: obj() });
const _decryptedMessage45 = (): any => {
  const flags = i32();
  return {
    _: 'decryptedMessage',
    random_id: i64(),
    ttl: i32(),
    message: str(),
    media: flags & 0x200 ? obj() : u,
    entities: flags & 0x80 ? vector(obj) : u,
    via_bot_name: flags & 0x800 ? str() : u,
    reply_to_random_id: flags & 0x8 ? i64() : u,
  }
};
const _decryptedMessage73 = (): any => {
  const flags = i32();
  return {
    _: 'decryptedMessage',
    random_id: i64(),
    ttl: i32(),
    message: str(),
    media: flags & 0x200 ? obj() : u,
    entities: flags & 0x80 ? vector(obj) : u,
    via_bot_name: flags & 0x800 ? str() : u,
    reply_to_random_id: flags & 0x8 ? i64() : u,
    grouped_id: flags & 0x20000 ? i64() : u,
  }
};
const _decryptedMessageService8: any = () => ({ _: 'decryptedMessageService', random_id: i64(), random_bytes: bytes(), action: obj() });
const _decryptedMessageService17: any = () => ({ _: 'decryptedMessageService', random_id: i64(), action: obj() });
const _decryptedMessageMediaEmpty8: any = () => ({ _: 'decryptedMessageMediaEmpty' });
const _decryptedMessageMediaPhoto8: any = () => ({ _: 'decryptedMessageMediaPhoto', thumb: bytes(), thumb_w: i32(), thumb_h: i32(), w: i32(), h: i32(), size: i32(), key: bytes(), iv: bytes() });
const _decryptedMessageMediaPhoto45: any = () => ({ _: 'decryptedMessageMediaPhoto', thumb: bytes(), thumb_w: i32(), thumb_h: i32(), w: i32(), h: i32(), size: i32(), key: bytes(), iv: bytes(), caption: str() });
const _decryptedMessageMediaVideo8: any = () => ({ _: 'decryptedMessageMediaVideo', thumb: bytes(), thumb_w: i32(), thumb_h: i32(), duration: i32(), w: i32(), h: i32(), size: i32(), key: bytes(), iv: bytes() });
const _decryptedMessageMediaVideo17: any = () => ({ _: 'decryptedMessageMediaVideo', thumb: bytes(), thumb_w: i32(), thumb_h: i32(), duration: i32(), mime_type: str(), w: i32(), h: i32(), size: i32(), key: bytes(), iv: bytes() });
const _decryptedMessageMediaVideo45: any = () => ({ _: 'decryptedMessageMediaVideo', thumb: bytes(), thumb_w: i32(), thumb_h: i32(), duration: i32(), mime_type: str(), w: i32(), h: i32(), size: i32(), key: bytes(), iv: bytes(), caption: str() });
const _decryptedMessageMediaGeoPoint8: any = () => ({ _: 'decryptedMessageMediaGeoPoint', lat: f64(), long: f64() });
const _decryptedMessageMediaContact8: any = () => ({ _: 'decryptedMessageMediaContact', phone_number: str(), first_name: str(), last_name: str(), user_id: i32() });
const _decryptedMessageActionSetMessageTTL8: any = () => ({ _: 'decryptedMessageActionSetMessageTTL', ttl_seconds: i32() });
const _decryptedMessageMediaDocument8: any = () => ({ _: 'decryptedMessageMediaDocument', thumb: bytes(), thumb_w: i32(), thumb_h: i32(), file_name: str(), mime_type: str(), size: i32(), key: bytes(), iv: bytes() });
const _decryptedMessageMediaDocument45: any = () => ({ _: 'decryptedMessageMediaDocument', thumb: bytes(), thumb_w: i32(), thumb_h: i32(), mime_type: str(), size: i32(), key: bytes(), iv: bytes(), attributes: vector(obj), caption: str() });
const _decryptedMessageMediaAudio8: any = () => ({ _: 'decryptedMessageMediaAudio', duration: i32(), size: i32(), key: bytes(), iv: bytes() });
const _decryptedMessageMediaAudio17: any = () => ({ _: 'decryptedMessageMediaAudio', duration: i32(), mime_type: str(), size: i32(), key: bytes(), iv: bytes() });
const _decryptedMessageActionReadMessages8: any = () => ({ _: 'decryptedMessageActionReadMessages', random_ids: vector(i64) });
const _decryptedMessageActionDeleteMessages8: any = () => ({ _: 'decryptedMessageActionDeleteMessages', random_ids: vector(i64) });
const _decryptedMessageActionScreenshotMessages8: any = () => ({ _: 'decryptedMessageActionScreenshotMessages', random_ids: vector(i64) });
const _decryptedMessageActionFlushHistory8: any = () => ({ _: 'decryptedMessageActionFlushHistory' });
const _decryptedMessageLayer17: any = () => ({ _: 'decryptedMessageLayer', random_bytes: bytes(), layer: i32(), in_seq_no: i32(), out_seq_no: i32(), message: obj() });
const _sendMessageTypingAction17: any = () => ({ _: 'sendMessageTypingAction' });
const _sendMessageCancelAction17: any = () => ({ _: 'sendMessageCancelAction' });
const _sendMessageRecordVideoAction17: any = () => ({ _: 'sendMessageRecordVideoAction' });
const _sendMessageUploadVideoAction17: any = () => ({ _: 'sendMessageUploadVideoAction' });
const _sendMessageRecordAudioAction17: any = () => ({ _: 'sendMessageRecordAudioAction' });
const _sendMessageUploadAudioAction17: any = () => ({ _: 'sendMessageUploadAudioAction' });
const _sendMessageUploadPhotoAction17: any = () => ({ _: 'sendMessageUploadPhotoAction' });
const _sendMessageUploadDocumentAction17: any = () => ({ _: 'sendMessageUploadDocumentAction' });
const _sendMessageGeoLocationAction17: any = () => ({ _: 'sendMessageGeoLocationAction' });
const _sendMessageChooseContactAction17: any = () => ({ _: 'sendMessageChooseContactAction' });
const _decryptedMessageActionResend17: any = () => ({ _: 'decryptedMessageActionResend', start_seq_no: i32(), end_seq_no: i32() });
const _decryptedMessageActionNotifyLayer17: any = () => ({ _: 'decryptedMessageActionNotifyLayer', layer: i32() });
const _decryptedMessageActionTyping17: any = () => ({ _: 'decryptedMessageActionTyping', action: obj() });
const _decryptedMessageActionRequestKey20: any = () => ({ _: 'decryptedMessageActionRequestKey', exchange_id: i64(), g_a: bytes() });
const _decryptedMessageActionAcceptKey20: any = () => ({ _: 'decryptedMessageActionAcceptKey', exchange_id: i64(), g_b: bytes(), key_fingerprint: i64() });
const _decryptedMessageActionAbortKey20: any = () => ({ _: 'decryptedMessageActionAbortKey', exchange_id: i64() });
const _decryptedMessageActionCommitKey20: any = () => ({ _: 'decryptedMessageActionCommitKey', exchange_id: i64(), key_fingerprint: i64() });
const _decryptedMessageActionNoop20: any = () => ({ _: 'decryptedMessageActionNoop' });
const _documentAttributeImageSize23: any = () => ({ _: 'documentAttributeImageSize', w: i32(), h: i32() });
const _documentAttributeAnimated23: any = () => ({ _: 'documentAttributeAnimated' });
const _documentAttributeSticker23: any = () => ({ _: 'documentAttributeSticker' });
const _documentAttributeSticker45: any = () => ({ _: 'documentAttributeSticker', alt: str(), stickerset: obj() });
const _documentAttributeVideo23: any = () => ({ _: 'documentAttributeVideo', duration: i32(), w: i32(), h: i32() });
const _documentAttributeVideo66 = (): any => {
  const flags = i32();
  return {
    _: 'documentAttributeVideo',
    duration: i32(),
    w: i32(),
    h: i32(),
  }
};
const _documentAttributeAudio23: any = () => ({ _: 'documentAttributeAudio', duration: i32() });
const _documentAttributeAudio45: any = () => ({ _: 'documentAttributeAudio', duration: i32(), title: str(), performer: str() });
const _documentAttributeAudio46 = (): any => {
  const flags = i32();
  return {
    _: 'documentAttributeAudio',
    duration: i32(),
    title: flags & 0x1 ? str() : u,
    performer: flags & 0x2 ? str() : u,
    waveform: flags & 0x4 ? bytes() : u,
  }
};
const _documentAttributeFilename23: any = () => ({ _: 'documentAttributeFilename', file_name: str() });
const _photoSizeEmpty23: any = () => ({ _: 'photoSizeEmpty', type: str() });
const _photoSize23: any = () => ({ _: 'photoSize', type: str(), location: obj(), w: i32(), h: i32(), size: i32() });
const _photoCachedSize23: any = () => ({ _: 'photoCachedSize', type: str(), location: obj(), w: i32(), h: i32(), bytes: bytes() });
const _fileLocationUnavailable23: any = () => ({ _: 'fileLocationUnavailable', volume_id: i64(), local_id: i32(), secret: i64() });
const _fileLocation23: any = () => ({ _: 'fileLocation', dc_id: i32(), volume_id: i64(), local_id: i32(), secret: i64() });
const _decryptedMessageMediaExternalDocument23: any = () => ({ _: 'decryptedMessageMediaExternalDocument', id: i64(), access_hash: i64(), date: i32(), mime_type: str(), size: i32(), thumb: obj(), dc_id: i32(), attributes: vector(obj) });
const _messageEntityUnknown45: any = () => ({ _: 'messageEntityUnknown', offset: i32(), length: i32() });
const _messageEntityMention45: any = () => ({ _: 'messageEntityMention', offset: i32(), length: i32() });
const _messageEntityHashtag45: any = () => ({ _: 'messageEntityHashtag', offset: i32(), length: i32() });
const _messageEntityBotCommand45: any = () => ({ _: 'messageEntityBotCommand', offset: i32(), length: i32() });
const _messageEntityUrl45: any = () => ({ _: 'messageEntityUrl', offset: i32(), length: i32() });
const _messageEntityEmail45: any = () => ({ _: 'messageEntityEmail', offset: i32(), length: i32() });
const _messageEntityBold45: any = () => ({ _: 'messageEntityBold', offset: i32(), length: i32() });
const _messageEntityItalic45: any = () => ({ _: 'messageEntityItalic', offset: i32(), length: i32() });
const _messageEntityCode45: any = () => ({ _: 'messageEntityCode', offset: i32(), length: i32() });
const _messageEntityPre45: any = () => ({ _: 'messageEntityPre', offset: i32(), length: i32(), language: str() });
const _messageEntityTextUrl45: any = () => ({ _: 'messageEntityTextUrl', offset: i32(), length: i32(), url: str() });
const _inputStickerSetShortName45: any = () => ({ _: 'inputStickerSetShortName', short_name: str() });
const _inputStickerSetEmpty45: any = () => ({ _: 'inputStickerSetEmpty' });
const _decryptedMessageMediaVenue45: any = () => ({ _: 'decryptedMessageMediaVenue', lat: f64(), long: f64(), title: str(), address: str(), provider: str(), venue_id: str() });
const _decryptedMessageMediaWebPage45: any = () => ({ _: 'decryptedMessageMediaWebPage', url: str() });
const _sendMessageRecordRoundAction66: any = () => ({ _: 'sendMessageRecordRoundAction' });
const _sendMessageUploadRoundAction66: any = () => ({ _: 'sendMessageUploadRoundAction' });

const parserMap = new Map<number, () => any>([
  [0x1f814f1f, _decryptedMessage8],
  [0x204d3878, _decryptedMessage17],
  [0x36b091de, _decryptedMessage45],
  [0x91cc4674, _decryptedMessage73],
  [0xaa48327d, _decryptedMessageService8],
  [0x73164160, _decryptedMessageService17],
  [0x89f5c4a, _decryptedMessageMediaEmpty8],
  [0x32798a8c, _decryptedMessageMediaPhoto8],
  [0xf1fa8d78, _decryptedMessageMediaPhoto45],
  [0x4cee6ef3, _decryptedMessageMediaVideo8],
  [0x524a415d, _decryptedMessageMediaVideo17],
  [0x970c8c0e, _decryptedMessageMediaVideo45],
  [0x35480a59, _decryptedMessageMediaGeoPoint8],
  [0x588a0a97, _decryptedMessageMediaContact8],
  [0xa1733aec, _decryptedMessageActionSetMessageTTL8],
  [0xb095434b, _decryptedMessageMediaDocument8],
  [0x7afe8ae2, _decryptedMessageMediaDocument45],
  [0x6080758f, _decryptedMessageMediaAudio8],
  [0x57e0a9cb, _decryptedMessageMediaAudio17],
  [0xc4f40be, _decryptedMessageActionReadMessages8],
  [0x65614304, _decryptedMessageActionDeleteMessages8],
  [0x8ac1f475, _decryptedMessageActionScreenshotMessages8],
  [0x6719e45c, _decryptedMessageActionFlushHistory8],
  [0x1be31789, _decryptedMessageLayer17],
  [0x16bf744e, _sendMessageTypingAction17],
  [0xfd5ec8f5, _sendMessageCancelAction17],
  [0xa187d66f, _sendMessageRecordVideoAction17],
  [0x92042ff7, _sendMessageUploadVideoAction17],
  [0xd52f73f7, _sendMessageRecordAudioAction17],
  [0xe6ac8a6f, _sendMessageUploadAudioAction17],
  [0x990a3c1a, _sendMessageUploadPhotoAction17],
  [0x8faee98e, _sendMessageUploadDocumentAction17],
  [0x176f8ba1, _sendMessageGeoLocationAction17],
  [0x628cbc6f, _sendMessageChooseContactAction17],
  [0x511110b0, _decryptedMessageActionResend17],
  [0xf3048883, _decryptedMessageActionNotifyLayer17],
  [0xccb27641, _decryptedMessageActionTyping17],
  [0xf3c9611b, _decryptedMessageActionRequestKey20],
  [0x6fe1735b, _decryptedMessageActionAcceptKey20],
  [0xdd05ec6b, _decryptedMessageActionAbortKey20],
  [0xec2e0b9b, _decryptedMessageActionCommitKey20],
  [0xa82fdd63, _decryptedMessageActionNoop20],
  [0x6c37c15c, _documentAttributeImageSize23],
  [0x11b58939, _documentAttributeAnimated23],
  [0xfb0a5727, _documentAttributeSticker23],
  [0x3a556302, _documentAttributeSticker45],
  [0x5910cccb, _documentAttributeVideo23],
  [0xef02ce6, _documentAttributeVideo66],
  [0x51448e5, _documentAttributeAudio23],
  [0xded218e0, _documentAttributeAudio45],
  [0x9852f9c6, _documentAttributeAudio46],
  [0x15590068, _documentAttributeFilename23],
  [0xe17e23c, _photoSizeEmpty23],
  [0x77bfb61b, _photoSize23],
  [0xe9a734fa, _photoCachedSize23],
  [0x7c596b46, _fileLocationUnavailable23],
  [0x53d69076, _fileLocation23],
  [0xfa95b0dd, _decryptedMessageMediaExternalDocument23],
  [0xbb92ba95, _messageEntityUnknown45],
  [0xfa04579d, _messageEntityMention45],
  [0x6f635b0d, _messageEntityHashtag45],
  [0x6cef8ac7, _messageEntityBotCommand45],
  [0x6ed02538, _messageEntityUrl45],
  [0x64e475c2, _messageEntityEmail45],
  [0xbd610bc9, _messageEntityBold45],
  [0x826f8b60, _messageEntityItalic45],
  [0x28a20571, _messageEntityCode45],
  [0x73924be0, _messageEntityPre45],
  [0x76a6d327, _messageEntityTextUrl45],
  [0x861cc8a0, _inputStickerSetShortName45],
  [0xffb62b95, _inputStickerSetEmpty45],
  [0x8a0df56f, _decryptedMessageMediaVenue45],
  [0xe50511d8, _decryptedMessageMediaWebPage45],
  [0x88f27fbc, _sendMessageRecordRoundAction66],
  [0xbb718624, _sendMessageUploadRoundAction66],
]);

const u = undefined;
const i32 = () => s.readInt32();
const i64 = () => s.readInt64();
const f64 = () => s.readDouble();
const str = () => s.readString();
const bytes = () => s.readBytes();

function vector(t: () => any, bare = false) {
  if (!bare) { i32(); /* ignoring constructor id. */ }
  const len = i32();
  const result = [];
  for (let i = 0; i < len; ++i) result.push(t());
  return result;
}

function obj() {
  const c = i32() >>> 0;
  const f = parserMap.get(c);
  if (f) {
    return f();
  } else if (fallbackParse) {
    s.revert(4);
    return fallbackParse(s);
  } else {
    console.error(`Unknown constructor 0x${c.toString(16)}.`);
    return undefined;
  }
}
