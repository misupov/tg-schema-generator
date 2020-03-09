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

function i32() { return s.readInt32(); }
function i64() { return s.readInt64(); }
function i128() { return s.readInt128(); }
function i256() { return s.readInt256(); }
function f64() { return s.readDouble(); }
function str() { return s.readString(); }
function bytes() { return s.readBytes(); }

function vector(t: () => any, bare = false) {
  if (!bare) { i32(); /* ignoring constructor id. */ }
  const len = i32();
  const result = [];
  for (let i = 0; i < len; ++i) result.push(t());
  return result;
}

function _decryptedMessage8() { return {_: 'decryptedMessage', random_id: i64(), random_bytes: bytes(), message: str(), media: obj()}; }
function _decryptedMessage17() { return {_: 'decryptedMessage', random_id: i64(), ttl: i32(), message: str(), media: obj()}; }
function _decryptedMessage45() {
  const flags = i32();
  return {
    _: 'decryptedMessage' as const,
    random_id: i64(),
    ttl: i32(),
    message: str(),
    media: flags & 0x200 ? obj() : undefined,
    entities: flags & 0x80 ? vector(obj) : undefined,
    via_bot_name: flags & 0x800 ? str() : undefined,
    reply_to_random_id: flags & 0x8 ? i64() : undefined,
  }
}
function _decryptedMessage73() {
  const flags = i32();
  return {
    _: 'decryptedMessage' as const,
    random_id: i64(),
    ttl: i32(),
    message: str(),
    media: flags & 0x200 ? obj() : undefined,
    entities: flags & 0x80 ? vector(obj) : undefined,
    via_bot_name: flags & 0x800 ? str() : undefined,
    reply_to_random_id: flags & 0x8 ? i64() : undefined,
    grouped_id: flags & 0x20000 ? i64() : undefined,
  }
}
function _decryptedMessageService8() { return {_: 'decryptedMessageService', random_id: i64(), random_bytes: bytes(), action: obj()}; }
function _decryptedMessageService17() { return {_: 'decryptedMessageService', random_id: i64(), action: obj()}; }
function _decryptedMessageMediaEmpty8() { return {_: 'decryptedMessageMediaEmpty'}; }
function _decryptedMessageMediaPhoto8() { return {_: 'decryptedMessageMediaPhoto', thumb: bytes(), thumb_w: i32(), thumb_h: i32(), w: i32(), h: i32(), size: i32(), key: bytes(), iv: bytes()}; }
function _decryptedMessageMediaPhoto45() { return {_: 'decryptedMessageMediaPhoto', thumb: bytes(), thumb_w: i32(), thumb_h: i32(), w: i32(), h: i32(), size: i32(), key: bytes(), iv: bytes(), caption: str()}; }
function _decryptedMessageMediaVideo8() { return {_: 'decryptedMessageMediaVideo', thumb: bytes(), thumb_w: i32(), thumb_h: i32(), duration: i32(), w: i32(), h: i32(), size: i32(), key: bytes(), iv: bytes()}; }
function _decryptedMessageMediaVideo17() { return {_: 'decryptedMessageMediaVideo', thumb: bytes(), thumb_w: i32(), thumb_h: i32(), duration: i32(), mime_type: str(), w: i32(), h: i32(), size: i32(), key: bytes(), iv: bytes()}; }
function _decryptedMessageMediaVideo45() { return {_: 'decryptedMessageMediaVideo', thumb: bytes(), thumb_w: i32(), thumb_h: i32(), duration: i32(), mime_type: str(), w: i32(), h: i32(), size: i32(), key: bytes(), iv: bytes(), caption: str()}; }
function _decryptedMessageMediaGeoPoint8() { return {_: 'decryptedMessageMediaGeoPoint', lat: f64(), long: f64()}; }
function _decryptedMessageMediaContact8() { return {_: 'decryptedMessageMediaContact', phone_number: str(), first_name: str(), last_name: str(), user_id: i32()}; }
function _decryptedMessageActionSetMessageTTL8() { return {_: 'decryptedMessageActionSetMessageTTL', ttl_seconds: i32()}; }
function _decryptedMessageMediaDocument8() { return {_: 'decryptedMessageMediaDocument', thumb: bytes(), thumb_w: i32(), thumb_h: i32(), file_name: str(), mime_type: str(), size: i32(), key: bytes(), iv: bytes()}; }
function _decryptedMessageMediaDocument45() { return {_: 'decryptedMessageMediaDocument', thumb: bytes(), thumb_w: i32(), thumb_h: i32(), mime_type: str(), size: i32(), key: bytes(), iv: bytes(), attributes: vector(obj), caption: str()}; }
function _decryptedMessageMediaAudio8() { return {_: 'decryptedMessageMediaAudio', duration: i32(), size: i32(), key: bytes(), iv: bytes()}; }
function _decryptedMessageMediaAudio17() { return {_: 'decryptedMessageMediaAudio', duration: i32(), mime_type: str(), size: i32(), key: bytes(), iv: bytes()}; }
function _decryptedMessageActionReadMessages8() { return {_: 'decryptedMessageActionReadMessages', random_ids: vector(i64)}; }
function _decryptedMessageActionDeleteMessages8() { return {_: 'decryptedMessageActionDeleteMessages', random_ids: vector(i64)}; }
function _decryptedMessageActionScreenshotMessages8() { return {_: 'decryptedMessageActionScreenshotMessages', random_ids: vector(i64)}; }
function _decryptedMessageActionFlushHistory8() { return {_: 'decryptedMessageActionFlushHistory'}; }
function _decryptedMessageLayer17() { return {_: 'decryptedMessageLayer', random_bytes: bytes(), layer: i32(), in_seq_no: i32(), out_seq_no: i32(), message: obj()}; }
function _sendMessageTypingAction17() { return {_: 'sendMessageTypingAction'}; }
function _sendMessageCancelAction17() { return {_: 'sendMessageCancelAction'}; }
function _sendMessageRecordVideoAction17() { return {_: 'sendMessageRecordVideoAction'}; }
function _sendMessageUploadVideoAction17() { return {_: 'sendMessageUploadVideoAction'}; }
function _sendMessageRecordAudioAction17() { return {_: 'sendMessageRecordAudioAction'}; }
function _sendMessageUploadAudioAction17() { return {_: 'sendMessageUploadAudioAction'}; }
function _sendMessageUploadPhotoAction17() { return {_: 'sendMessageUploadPhotoAction'}; }
function _sendMessageUploadDocumentAction17() { return {_: 'sendMessageUploadDocumentAction'}; }
function _sendMessageGeoLocationAction17() { return {_: 'sendMessageGeoLocationAction'}; }
function _sendMessageChooseContactAction17() { return {_: 'sendMessageChooseContactAction'}; }
function _decryptedMessageActionResend17() { return {_: 'decryptedMessageActionResend', start_seq_no: i32(), end_seq_no: i32()}; }
function _decryptedMessageActionNotifyLayer17() { return {_: 'decryptedMessageActionNotifyLayer', layer: i32()}; }
function _decryptedMessageActionTyping17() { return {_: 'decryptedMessageActionTyping', action: obj()}; }
function _decryptedMessageActionRequestKey20() { return {_: 'decryptedMessageActionRequestKey', exchange_id: i64(), g_a: bytes()}; }
function _decryptedMessageActionAcceptKey20() { return {_: 'decryptedMessageActionAcceptKey', exchange_id: i64(), g_b: bytes(), key_fingerprint: i64()}; }
function _decryptedMessageActionAbortKey20() { return {_: 'decryptedMessageActionAbortKey', exchange_id: i64()}; }
function _decryptedMessageActionCommitKey20() { return {_: 'decryptedMessageActionCommitKey', exchange_id: i64(), key_fingerprint: i64()}; }
function _decryptedMessageActionNoop20() { return {_: 'decryptedMessageActionNoop'}; }
function _documentAttributeImageSize23() { return {_: 'documentAttributeImageSize', w: i32(), h: i32()}; }
function _documentAttributeAnimated23() { return {_: 'documentAttributeAnimated'}; }
function _documentAttributeSticker23() { return {_: 'documentAttributeSticker'}; }
function _documentAttributeSticker45() { return {_: 'documentAttributeSticker', alt: str(), stickerset: obj()}; }
function _documentAttributeVideo23() { return {_: 'documentAttributeVideo', duration: i32(), w: i32(), h: i32()}; }
function _documentAttributeVideo66() {
  const flags = i32();
  return {
    _: 'documentAttributeVideo' as const,
    duration: i32(),
    w: i32(),
    h: i32(),
  }
}
function _documentAttributeAudio23() { return {_: 'documentAttributeAudio', duration: i32()}; }
function _documentAttributeAudio45() { return {_: 'documentAttributeAudio', duration: i32(), title: str(), performer: str()}; }
function _documentAttributeAudio46() {
  const flags = i32();
  return {
    _: 'documentAttributeAudio' as const,
    duration: i32(),
    title: flags & 0x1 ? str() : undefined,
    performer: flags & 0x2 ? str() : undefined,
    waveform: flags & 0x4 ? bytes() : undefined,
  }
}
function _documentAttributeFilename23() { return {_: 'documentAttributeFilename', file_name: str()}; }
function _photoSizeEmpty23() { return {_: 'photoSizeEmpty', type: str()}; }
function _photoSize23() { return {_: 'photoSize', type: str(), location: obj(), w: i32(), h: i32(), size: i32()}; }
function _photoCachedSize23() { return {_: 'photoCachedSize', type: str(), location: obj(), w: i32(), h: i32(), bytes: bytes()}; }
function _fileLocationUnavailable23() { return {_: 'fileLocationUnavailable', volume_id: i64(), local_id: i32(), secret: i64()}; }
function _fileLocation23() { return {_: 'fileLocation', dc_id: i32(), volume_id: i64(), local_id: i32(), secret: i64()}; }
function _decryptedMessageMediaExternalDocument23() { return {_: 'decryptedMessageMediaExternalDocument', id: i64(), access_hash: i64(), date: i32(), mime_type: str(), size: i32(), thumb: obj(), dc_id: i32(), attributes: vector(obj)}; }
function _messageEntityUnknown45() { return {_: 'messageEntityUnknown', offset: i32(), length: i32()}; }
function _messageEntityMention45() { return {_: 'messageEntityMention', offset: i32(), length: i32()}; }
function _messageEntityHashtag45() { return {_: 'messageEntityHashtag', offset: i32(), length: i32()}; }
function _messageEntityBotCommand45() { return {_: 'messageEntityBotCommand', offset: i32(), length: i32()}; }
function _messageEntityUrl45() { return {_: 'messageEntityUrl', offset: i32(), length: i32()}; }
function _messageEntityEmail45() { return {_: 'messageEntityEmail', offset: i32(), length: i32()}; }
function _messageEntityBold45() { return {_: 'messageEntityBold', offset: i32(), length: i32()}; }
function _messageEntityItalic45() { return {_: 'messageEntityItalic', offset: i32(), length: i32()}; }
function _messageEntityCode45() { return {_: 'messageEntityCode', offset: i32(), length: i32()}; }
function _messageEntityPre45() { return {_: 'messageEntityPre', offset: i32(), length: i32(), language: str()}; }
function _messageEntityTextUrl45() { return {_: 'messageEntityTextUrl', offset: i32(), length: i32(), url: str()}; }
function _inputStickerSetShortName45() { return {_: 'inputStickerSetShortName', short_name: str()}; }
function _inputStickerSetEmpty45() { return {_: 'inputStickerSetEmpty'}; }
function _decryptedMessageMediaVenue45() { return {_: 'decryptedMessageMediaVenue', lat: f64(), long: f64(), title: str(), address: str(), provider: str(), venue_id: str()}; }
function _decryptedMessageMediaWebPage45() { return {_: 'decryptedMessageMediaWebPage', url: str()}; }
function _sendMessageRecordRoundAction66() { return {_: 'sendMessageRecordRoundAction'}; }
function _sendMessageUploadRoundAction66() { return {_: 'sendMessageUploadRoundAction'}; }

const parserMap: Record<number, () => any> = {
  0x1f814f1f: _decryptedMessage8,
  0x204d3878: _decryptedMessage17,
  0x36b091de: _decryptedMessage45,
  0x91cc4674: _decryptedMessage73,
  0xaa48327d: _decryptedMessageService8,
  0x73164160: _decryptedMessageService17,
  0x89f5c4a: _decryptedMessageMediaEmpty8,
  0x32798a8c: _decryptedMessageMediaPhoto8,
  0xf1fa8d78: _decryptedMessageMediaPhoto45,
  0x4cee6ef3: _decryptedMessageMediaVideo8,
  0x524a415d: _decryptedMessageMediaVideo17,
  0x970c8c0e: _decryptedMessageMediaVideo45,
  0x35480a59: _decryptedMessageMediaGeoPoint8,
  0x588a0a97: _decryptedMessageMediaContact8,
  0xa1733aec: _decryptedMessageActionSetMessageTTL8,
  0xb095434b: _decryptedMessageMediaDocument8,
  0x7afe8ae2: _decryptedMessageMediaDocument45,
  0x6080758f: _decryptedMessageMediaAudio8,
  0x57e0a9cb: _decryptedMessageMediaAudio17,
  0xc4f40be: _decryptedMessageActionReadMessages8,
  0x65614304: _decryptedMessageActionDeleteMessages8,
  0x8ac1f475: _decryptedMessageActionScreenshotMessages8,
  0x6719e45c: _decryptedMessageActionFlushHistory8,
  0x1be31789: _decryptedMessageLayer17,
  0x16bf744e: _sendMessageTypingAction17,
  0xfd5ec8f5: _sendMessageCancelAction17,
  0xa187d66f: _sendMessageRecordVideoAction17,
  0x92042ff7: _sendMessageUploadVideoAction17,
  0xd52f73f7: _sendMessageRecordAudioAction17,
  0xe6ac8a6f: _sendMessageUploadAudioAction17,
  0x990a3c1a: _sendMessageUploadPhotoAction17,
  0x8faee98e: _sendMessageUploadDocumentAction17,
  0x176f8ba1: _sendMessageGeoLocationAction17,
  0x628cbc6f: _sendMessageChooseContactAction17,
  0x511110b0: _decryptedMessageActionResend17,
  0xf3048883: _decryptedMessageActionNotifyLayer17,
  0xccb27641: _decryptedMessageActionTyping17,
  0xf3c9611b: _decryptedMessageActionRequestKey20,
  0x6fe1735b: _decryptedMessageActionAcceptKey20,
  0xdd05ec6b: _decryptedMessageActionAbortKey20,
  0xec2e0b9b: _decryptedMessageActionCommitKey20,
  0xa82fdd63: _decryptedMessageActionNoop20,
  0x6c37c15c: _documentAttributeImageSize23,
  0x11b58939: _documentAttributeAnimated23,
  0xfb0a5727: _documentAttributeSticker23,
  0x3a556302: _documentAttributeSticker45,
  0x5910cccb: _documentAttributeVideo23,
  0xef02ce6: _documentAttributeVideo66,
  0x51448e5: _documentAttributeAudio23,
  0xded218e0: _documentAttributeAudio45,
  0x9852f9c6: _documentAttributeAudio46,
  0x15590068: _documentAttributeFilename23,
  0xe17e23c: _photoSizeEmpty23,
  0x77bfb61b: _photoSize23,
  0xe9a734fa: _photoCachedSize23,
  0x7c596b46: _fileLocationUnavailable23,
  0x53d69076: _fileLocation23,
  0xfa95b0dd: _decryptedMessageMediaExternalDocument23,
  0xbb92ba95: _messageEntityUnknown45,
  0xfa04579d: _messageEntityMention45,
  0x6f635b0d: _messageEntityHashtag45,
  0x6cef8ac7: _messageEntityBotCommand45,
  0x6ed02538: _messageEntityUrl45,
  0x64e475c2: _messageEntityEmail45,
  0xbd610bc9: _messageEntityBold45,
  0x826f8b60: _messageEntityItalic45,
  0x28a20571: _messageEntityCode45,
  0x73924be0: _messageEntityPre45,
  0x76a6d327: _messageEntityTextUrl45,
  0x861cc8a0: _inputStickerSetShortName45,
  0xffb62b95: _inputStickerSetEmpty45,
  0x8a0df56f: _decryptedMessageMediaVenue45,
  0xe50511d8: _decryptedMessageMediaWebPage45,
  0x88f27fbc: _sendMessageRecordRoundAction66,
  0xbb718624: _sendMessageUploadRoundAction66,
};

function obj() {
  const c = i32() >>> 0;
  const f = parserMap[c];
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
