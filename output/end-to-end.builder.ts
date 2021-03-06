/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable quote-props */
/* eslint-disable spaced-comment */
/* eslint-disable max-len */
/* eslint-disable operator-linebreak */
/* eslint-disable semi-style */

/*******************************************************************************************/
/* This file was automatically generated (https://github.com/misupov/tg-schema-generator). */
/*                                                                                         */
/* Do not make changes to this file unless you know what you are doing -- modify           */
/* the tool instead.                                                                       */
/*                                                                                         */
/* Source: end-to-end.json (md5: 8996a33c4b128078a454aaa749900956)                         */
/* Time: Thursday, 07 May 2020 06:31:44 (UTC)                                              */
/*                                                                                         */
/*******************************************************************************************/

interface Writer {
  int32(value: number) : void;
  long(value: string): void;
  int128(value: Uint32Array): void;
  int256(value: Uint32Array): void;
  double(value: number): void;
  string(value: string): void;
  bytes(value: ArrayBuffer | SharedArrayBuffer | Uint8Array): void;
}

let w: Writer;
let l = 0;
let fallbackBuilder: ((stream: Writer, o: any) => void) | undefined;

export default function build(writer: Writer, o: any, layer: number, fallback?: (stream: Writer, o: any) => void) {
  w = writer;
  fallbackBuilder = fallback;
  l = layer;
  return obj(o);
}

const _decryptedMessage8 = (o: any) => {
  i64(o.random_id);
  bytes(o.random_bytes);
  str(o.message);
  obj(o.media);
};

const _decryptedMessage17 = (o: any) => {
  i64(o.random_id);
  i32(o.ttl);
  str(o.message);
  obj(o.media);
};

const _decryptedMessage45 = (o: any) => {
  const flags =
      (has(o.media) << 9)
    | (has(o.entities) << 7)
    | (has(o.via_bot_name) << 11)
    | (has(o.reply_to_random_id) << 3);
  i32(flags);
  i64(o.random_id);
  i32(o.ttl);
  str(o.message);
  flag(obj, o.media);
  flagVector(obj, o.entities);
  flag(str, o.via_bot_name);
  flag(i64, o.reply_to_random_id);
};

const _decryptedMessage73 = (o: any) => {
  const flags =
      (has(o.media) << 9)
    | (has(o.entities) << 7)
    | (has(o.via_bot_name) << 11)
    | (has(o.reply_to_random_id) << 3)
    | (has(o.grouped_id) << 17);
  i32(flags);
  i64(o.random_id);
  i32(o.ttl);
  str(o.message);
  flag(obj, o.media);
  flagVector(obj, o.entities);
  flag(str, o.via_bot_name);
  flag(i64, o.reply_to_random_id);
  flag(i64, o.grouped_id);
};

const _decryptedMessageService8 = (o: any) => {
  i64(o.random_id);
  bytes(o.random_bytes);
  obj(o.action);
};

const _decryptedMessageService17 = (o: any) => {
  i64(o.random_id);
  obj(o.action);
};

const _decryptedMessageMediaPhoto8 = (o: any) => {
  bytes(o.thumb);
  i32(o.thumb_w);
  i32(o.thumb_h);
  i32(o.w);
  i32(o.h);
  i32(o.size);
  bytes(o.key);
  bytes(o.iv);
};

const _decryptedMessageMediaPhoto45 = (o: any) => {
  bytes(o.thumb);
  i32(o.thumb_w);
  i32(o.thumb_h);
  i32(o.w);
  i32(o.h);
  i32(o.size);
  bytes(o.key);
  bytes(o.iv);
  str(o.caption);
};

const _decryptedMessageMediaVideo8 = (o: any) => {
  bytes(o.thumb);
  i32(o.thumb_w);
  i32(o.thumb_h);
  i32(o.duration);
  i32(o.w);
  i32(o.h);
  i32(o.size);
  bytes(o.key);
  bytes(o.iv);
};

const _decryptedMessageMediaVideo17 = (o: any) => {
  bytes(o.thumb);
  i32(o.thumb_w);
  i32(o.thumb_h);
  i32(o.duration);
  str(o.mime_type);
  i32(o.w);
  i32(o.h);
  i32(o.size);
  bytes(o.key);
  bytes(o.iv);
};

const _decryptedMessageMediaVideo45 = (o: any) => {
  bytes(o.thumb);
  i32(o.thumb_w);
  i32(o.thumb_h);
  i32(o.duration);
  str(o.mime_type);
  i32(o.w);
  i32(o.h);
  i32(o.size);
  bytes(o.key);
  bytes(o.iv);
  str(o.caption);
};

const _decryptedMessageMediaGeoPoint8 = (o: any) => {
  f64(o.lat);
  f64(o.long);
};

const _decryptedMessageMediaContact8 = (o: any) => {
  str(o.phone_number);
  str(o.first_name);
  str(o.last_name);
  i32(o.user_id);
};

const _decryptedMessageActionSetMessageTTL8 = (o: any) => {
  i32(o.ttl_seconds);
};

const _decryptedMessageMediaDocument8 = (o: any) => {
  bytes(o.thumb);
  i32(o.thumb_w);
  i32(o.thumb_h);
  str(o.file_name);
  str(o.mime_type);
  i32(o.size);
  bytes(o.key);
  bytes(o.iv);
};

const _decryptedMessageMediaDocument45 = (o: any) => {
  bytes(o.thumb);
  i32(o.thumb_w);
  i32(o.thumb_h);
  str(o.mime_type);
  i32(o.size);
  bytes(o.key);
  bytes(o.iv);
  vector(obj, o.attributes);
  str(o.caption);
};

const _decryptedMessageMediaAudio8 = (o: any) => {
  i32(o.duration);
  i32(o.size);
  bytes(o.key);
  bytes(o.iv);
};

const _decryptedMessageMediaAudio17 = (o: any) => {
  i32(o.duration);
  str(o.mime_type);
  i32(o.size);
  bytes(o.key);
  bytes(o.iv);
};

const _decryptedMessageActionReadMessages8 = (o: any) => {
  vector(i64, o.random_ids);
};

const _decryptedMessageActionDeleteMessages8 = (o: any) => {
  vector(i64, o.random_ids);
};

const _decryptedMessageActionScreenshotMessages8 = (o: any) => {
  vector(i64, o.random_ids);
};

const _decryptedMessageLayer17 = (o: any) => {
  bytes(o.random_bytes);
  i32(o.layer);
  i32(o.in_seq_no);
  i32(o.out_seq_no);
  obj(o.message);
};

const _decryptedMessageActionResend17 = (o: any) => {
  i32(o.start_seq_no);
  i32(o.end_seq_no);
};

const _decryptedMessageActionNotifyLayer17 = (o: any) => {
  i32(o.layer);
};

const _decryptedMessageActionTyping17 = (o: any) => {
  obj(o.action);
};

const _decryptedMessageActionRequestKey20 = (o: any) => {
  i64(o.exchange_id);
  bytes(o.g_a);
};

const _decryptedMessageActionAcceptKey20 = (o: any) => {
  i64(o.exchange_id);
  bytes(o.g_b);
  i64(o.key_fingerprint);
};

const _decryptedMessageActionAbortKey20 = (o: any) => {
  i64(o.exchange_id);
};

const _decryptedMessageActionCommitKey20 = (o: any) => {
  i64(o.exchange_id);
  i64(o.key_fingerprint);
};

const _documentAttributeImageSize23 = (o: any) => {
  i32(o.w);
  i32(o.h);
};

const _documentAttributeSticker45 = (o: any) => {
  str(o.alt);
  obj(o.stickerset);
};

const _documentAttributeVideo23 = (o: any) => {
  i32(o.duration);
  i32(o.w);
  i32(o.h);
};

const _documentAttributeVideo66 = (o: any) => {
  const flags =;
    0;
  i32(flags);
  i32(o.duration);
  i32(o.w);
  i32(o.h);
};

const _documentAttributeAudio23 = (o: any) => {
  i32(o.duration);
};

const _documentAttributeAudio45 = (o: any) => {
  i32(o.duration);
  str(o.title);
  str(o.performer);
};

const _documentAttributeAudio46 = (o: any) => {
  const flags =
      has(o.title)
    | (has(o.performer) << 1)
    | (has(o.waveform) << 2);
  i32(flags);
  i32(o.duration);
  flag(str, o.title);
  flag(str, o.performer);
  flag(bytes, o.waveform);
};

const _documentAttributeFilename23 = (o: any) => {
  str(o.file_name);
};

const _photoSizeEmpty23 = (o: any) => {
  str(o.type);
};

const _photoSize23 = (o: any) => {
  str(o.type);
  obj(o.location);
  i32(o.w);
  i32(o.h);
  i32(o.size);
};

const _photoCachedSize23 = (o: any) => {
  str(o.type);
  obj(o.location);
  i32(o.w);
  i32(o.h);
  bytes(o.bytes);
};

const _fileLocationUnavailable23 = (o: any) => {
  i64(o.volume_id);
  i32(o.local_id);
  i64(o.secret);
};

const _fileLocation23 = (o: any) => {
  i32(o.dc_id);
  i64(o.volume_id);
  i32(o.local_id);
  i64(o.secret);
};

const _decryptedMessageMediaExternalDocument23 = (o: any) => {
  i64(o.id);
  i64(o.access_hash);
  i32(o.date);
  str(o.mime_type);
  i32(o.size);
  obj(o.thumb);
  i32(o.dc_id);
  vector(obj, o.attributes);
};

const _messageEntityUnknown45 = (o: any) => {
  i32(o.offset);
  i32(o.length);
};

const _messageEntityMention45 = (o: any) => {
  i32(o.offset);
  i32(o.length);
};

const _messageEntityHashtag45 = (o: any) => {
  i32(o.offset);
  i32(o.length);
};

const _messageEntityBotCommand45 = (o: any) => {
  i32(o.offset);
  i32(o.length);
};

const _messageEntityUrl45 = (o: any) => {
  i32(o.offset);
  i32(o.length);
};

const _messageEntityEmail45 = (o: any) => {
  i32(o.offset);
  i32(o.length);
};

const _messageEntityBold45 = (o: any) => {
  i32(o.offset);
  i32(o.length);
};

const _messageEntityItalic45 = (o: any) => {
  i32(o.offset);
  i32(o.length);
};

const _messageEntityCode45 = (o: any) => {
  i32(o.offset);
  i32(o.length);
};

const _messageEntityPre45 = (o: any) => {
  i32(o.offset);
  i32(o.length);
  str(o.language);
};

const _messageEntityTextUrl45 = (o: any) => {
  i32(o.offset);
  i32(o.length);
  str(o.url);
};

const _inputStickerSetShortName45 = (o: any) => {
  str(o.short_name);
};

const _decryptedMessageMediaVenue45 = (o: any) => {
  f64(o.lat);
  f64(o.long);
  str(o.title);
  str(o.address);
  str(o.provider);
  str(o.venue_id);
};

const _decryptedMessageMediaWebPage45 = (o: any) => {
  str(o.url);
};


const builderMap8: Record<string, [number, ((o: any) => void)?]> = {
  'decryptedMessage': [0x1f814f1f, _decryptedMessage8],
  'decryptedMessageService': [0xaa48327d, _decryptedMessageService8],
  'decryptedMessageMediaEmpty': [0x89f5c4a],
  'decryptedMessageMediaPhoto': [0x32798a8c, _decryptedMessageMediaPhoto8],
  'decryptedMessageMediaVideo': [0x4cee6ef3, _decryptedMessageMediaVideo8],
  'decryptedMessageMediaGeoPoint': [0x35480a59, _decryptedMessageMediaGeoPoint8],
  'decryptedMessageMediaContact': [0x588a0a97, _decryptedMessageMediaContact8],
  'decryptedMessageActionSetMessageTTL': [0xa1733aec, _decryptedMessageActionSetMessageTTL8],
  'decryptedMessageMediaDocument': [0xb095434b, _decryptedMessageMediaDocument8],
  'decryptedMessageMediaAudio': [0x6080758f, _decryptedMessageMediaAudio8],
  'decryptedMessageActionReadMessages': [0xc4f40be, _decryptedMessageActionReadMessages8],
  'decryptedMessageActionDeleteMessages': [0x65614304, _decryptedMessageActionDeleteMessages8],
  'decryptedMessageActionScreenshotMessages': [0x8ac1f475, _decryptedMessageActionScreenshotMessages8],
  'decryptedMessageActionFlushHistory': [0x6719e45c],
};

const builderMap17: Record<string, [number, ((o: any) => void)?]> = {
  ...builderMap8,
  'decryptedMessage': [0x204d3878, _decryptedMessage17],
  'decryptedMessageService': [0x73164160, _decryptedMessageService17],
  'decryptedMessageMediaVideo': [0x524a415d, _decryptedMessageMediaVideo17],
  'decryptedMessageMediaAudio': [0x57e0a9cb, _decryptedMessageMediaAudio17],
  'decryptedMessageLayer': [0x1be31789, _decryptedMessageLayer17],
  'sendMessageTypingAction': [0x16bf744e],
  'sendMessageCancelAction': [0xfd5ec8f5],
  'sendMessageRecordVideoAction': [0xa187d66f],
  'sendMessageUploadVideoAction': [0x92042ff7],
  'sendMessageRecordAudioAction': [0xd52f73f7],
  'sendMessageUploadAudioAction': [0xe6ac8a6f],
  'sendMessageUploadPhotoAction': [0x990a3c1a],
  'sendMessageUploadDocumentAction': [0x8faee98e],
  'sendMessageGeoLocationAction': [0x176f8ba1],
  'sendMessageChooseContactAction': [0x628cbc6f],
  'decryptedMessageActionResend': [0x511110b0, _decryptedMessageActionResend17],
  'decryptedMessageActionNotifyLayer': [0xf3048883, _decryptedMessageActionNotifyLayer17],
  'decryptedMessageActionTyping': [0xccb27641, _decryptedMessageActionTyping17],
};

const builderMap20: Record<string, [number, ((o: any) => void)?]> = {
  ...builderMap17,
  'decryptedMessageActionRequestKey': [0xf3c9611b, _decryptedMessageActionRequestKey20],
  'decryptedMessageActionAcceptKey': [0x6fe1735b, _decryptedMessageActionAcceptKey20],
  'decryptedMessageActionAbortKey': [0xdd05ec6b, _decryptedMessageActionAbortKey20],
  'decryptedMessageActionCommitKey': [0xec2e0b9b, _decryptedMessageActionCommitKey20],
  'decryptedMessageActionNoop': [0xa82fdd63],
};

const builderMap23: Record<string, [number, ((o: any) => void)?]> = {
  ...builderMap20,
  'documentAttributeImageSize': [0x6c37c15c, _documentAttributeImageSize23],
  'documentAttributeAnimated': [0x11b58939],
  'documentAttributeSticker': [0xfb0a5727],
  'documentAttributeVideo': [0x5910cccb, _documentAttributeVideo23],
  'documentAttributeAudio': [0x51448e5, _documentAttributeAudio23],
  'documentAttributeFilename': [0x15590068, _documentAttributeFilename23],
  'photoSizeEmpty': [0xe17e23c, _photoSizeEmpty23],
  'photoSize': [0x77bfb61b, _photoSize23],
  'photoCachedSize': [0xe9a734fa, _photoCachedSize23],
  'fileLocationUnavailable': [0x7c596b46, _fileLocationUnavailable23],
  'fileLocation': [0x53d69076, _fileLocation23],
  'decryptedMessageMediaExternalDocument': [0xfa95b0dd, _decryptedMessageMediaExternalDocument23],
};

const builderMap45: Record<string, [number, ((o: any) => void)?]> = {
  ...builderMap23,
  'decryptedMessage': [0x36b091de, _decryptedMessage45],
  'decryptedMessageMediaPhoto': [0xf1fa8d78, _decryptedMessageMediaPhoto45],
  'decryptedMessageMediaVideo': [0x970c8c0e, _decryptedMessageMediaVideo45],
  'decryptedMessageMediaDocument': [0x7afe8ae2, _decryptedMessageMediaDocument45],
  'documentAttributeSticker': [0x3a556302, _documentAttributeSticker45],
  'documentAttributeAudio': [0xded218e0, _documentAttributeAudio45],
  'messageEntityUnknown': [0xbb92ba95, _messageEntityUnknown45],
  'messageEntityMention': [0xfa04579d, _messageEntityMention45],
  'messageEntityHashtag': [0x6f635b0d, _messageEntityHashtag45],
  'messageEntityBotCommand': [0x6cef8ac7, _messageEntityBotCommand45],
  'messageEntityUrl': [0x6ed02538, _messageEntityUrl45],
  'messageEntityEmail': [0x64e475c2, _messageEntityEmail45],
  'messageEntityBold': [0xbd610bc9, _messageEntityBold45],
  'messageEntityItalic': [0x826f8b60, _messageEntityItalic45],
  'messageEntityCode': [0x28a20571, _messageEntityCode45],
  'messageEntityPre': [0x73924be0, _messageEntityPre45],
  'messageEntityTextUrl': [0x76a6d327, _messageEntityTextUrl45],
  'inputStickerSetShortName': [0x861cc8a0, _inputStickerSetShortName45],
  'inputStickerSetEmpty': [0xffb62b95],
  'decryptedMessageMediaVenue': [0x8a0df56f, _decryptedMessageMediaVenue45],
  'decryptedMessageMediaWebPage': [0xe50511d8, _decryptedMessageMediaWebPage45],
};

const builderMap46: Record<string, [number, ((o: any) => void)?]> = {
  ...builderMap45,
  'documentAttributeAudio': [0x9852f9c6, _documentAttributeAudio46],
};

const builderMap66: Record<string, [number, ((o: any) => void)?]> = {
  ...builderMap46,
  'documentAttributeVideo': [0xef02ce6, _documentAttributeVideo66],
  'sendMessageRecordRoundAction': [0x88f27fbc],
  'sendMessageUploadRoundAction': [0xbb718624],
};

const builderMap73: Record<string, [number, ((o: any) => void)?]> = {
  ...builderMap66,
  'decryptedMessage': [0x91cc4674, _decryptedMessage73],
};

const builderMaps = new Map<number, Record<string, [number, ((o: any) => void)?]>>([
  [8, builderMap8],
  [17, builderMap17],
  [45, builderMap45],
  [73, builderMap73],
  [20, builderMap20],
  [23, builderMap23],
  [66, builderMap66],
  [46, builderMap46],
]);

const i32 = (value: number) => w.int32(value);
const i64 = (value: string) => w.long(value);
const f64 = (value: number) => w.double(value);
const str = (value: string) => w.string(value);
const bytes = (value: ArrayBuffer) => w.bytes(value);

function flagVector(fn: (value: any) => void, value: Array<any>) {
  if (value === undefined || value.length === 0) return;
  vector(fn, value);
}

function flag(fn: (value: any) => void, value: any) {
  if (has(value)) fn(value);
}

function has(value: any) {
  return Array.isArray(value) ? +!!value.length : +!!value;
}

const obj = (o: any, bare = false) => {
  const descriptor = builderMaps.get(l)[o._];
  if (descriptor) {
    const [id, fn] = descriptor;
    if (!bare) i32(id);
    if (fn) fn(o);
  } else if (fallbackBuilder) {
    fallbackBuilder(w, o);
  } else {
    console.error(`Cannot serialize object ${JSON.stringify(o)}`);
  }
};
