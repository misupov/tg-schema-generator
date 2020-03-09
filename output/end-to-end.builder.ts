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
  writeInt32(value: number) : void;
  writeInt64(value: string): void;
  writeInt128(value: string): void;
  writeInt256(value: string): void;
  writeDouble(value: number): void;
  writeString(value: string): void;
  writeBytes(value: ArrayBuffer): void;
}

let s: ByteStream;
function i32(value: number) { s.writeInt32(value); }

function _decryptedMessage8(o: any) {
  i32(0x1f814f1f);
  i64(o.random_id);
  bytes(o.random_bytes);
  str(o.message);
  obj(o.media); // DecryptedMessageMedia
}

function _decryptedMessage17(o: any) {
  i32(0x204d3878);
  i64(o.random_id);
  i32(o.ttl);
  str(o.message);
  obj(o.media); // DecryptedMessageMedia
}

function _decryptedMessage45(o: any) {
  i32(0x36b091de);
  const flags = +!!o.media << 9 | +!!o.entities << 7 | +!!o.via_bot_name << 11 | +!!o.reply_to_random_id << 3;
  i32(flags);
  i64(o.random_id);
  i32(o.ttl);
  str(o.message);
  if (o.media !== undefined) obj(o.media); // flags.9?DecryptedMessageMedia
  if (o.entities !== undefined) obj(o.entities); // flags.7?Vector<MessageEntity>
  if (o.via_bot_name !== undefined) obj(o.via_bot_name); // flags.11?string
  if (o.reply_to_random_id !== undefined) obj(o.reply_to_random_id); // flags.3?long
}

function _decryptedMessage73(o: any) {
  i32(0x91cc4674);
  const flags = +!!o.media << 9 | +!!o.entities << 7 | +!!o.via_bot_name << 11 | +!!o.reply_to_random_id << 3 | +!!o.grouped_id << 17;
  i32(flags);
  i64(o.random_id);
  i32(o.ttl);
  str(o.message);
  if (o.media !== undefined) obj(o.media); // flags.9?DecryptedMessageMedia
  if (o.entities !== undefined) obj(o.entities); // flags.7?Vector<MessageEntity>
  if (o.via_bot_name !== undefined) obj(o.via_bot_name); // flags.11?string
  if (o.reply_to_random_id !== undefined) obj(o.reply_to_random_id); // flags.3?long
  if (o.grouped_id !== undefined) obj(o.grouped_id); // flags.17?long
}

function _decryptedMessageService8(o: any) {
  i32(0xaa48327d);
  i64(o.random_id);
  bytes(o.random_bytes);
  obj(o.action); // DecryptedMessageAction
}

function _decryptedMessageService17(o: any) {
  i32(0x73164160);
  i64(o.random_id);
  obj(o.action); // DecryptedMessageAction
}

function _decryptedMessageMediaEmpty8(o: any) {
  i32(0x89f5c4a);
}

function _decryptedMessageMediaPhoto8(o: any) {
  i32(0x32798a8c);
  bytes(o.thumb);
  i32(o.thumb_w);
  i32(o.thumb_h);
  i32(o.w);
  i32(o.h);
  i32(o.size);
  bytes(o.key);
  bytes(o.iv);
}

function _decryptedMessageMediaPhoto45(o: any) {
  i32(0xf1fa8d78);
  bytes(o.thumb);
  i32(o.thumb_w);
  i32(o.thumb_h);
  i32(o.w);
  i32(o.h);
  i32(o.size);
  bytes(o.key);
  bytes(o.iv);
  str(o.caption);
}

function _decryptedMessageMediaVideo8(o: any) {
  i32(0x4cee6ef3);
  bytes(o.thumb);
  i32(o.thumb_w);
  i32(o.thumb_h);
  i32(o.duration);
  i32(o.w);
  i32(o.h);
  i32(o.size);
  bytes(o.key);
  bytes(o.iv);
}

function _decryptedMessageMediaVideo17(o: any) {
  i32(0x524a415d);
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
}

function _decryptedMessageMediaVideo45(o: any) {
  i32(0x970c8c0e);
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
}

function _decryptedMessageMediaGeoPoint8(o: any) {
  i32(0x35480a59);
  f64(o.lat);
  f64(o.long);
}

function _decryptedMessageMediaContact8(o: any) {
  i32(0x588a0a97);
  str(o.phone_number);
  str(o.first_name);
  str(o.last_name);
  i32(o.user_id);
}

function _decryptedMessageMediaDocument8(o: any) {
  i32(0xb095434b);
  bytes(o.thumb);
  i32(o.thumb_w);
  i32(o.thumb_h);
  str(o.file_name);
  str(o.mime_type);
  i32(o.size);
  bytes(o.key);
  bytes(o.iv);
}

function _decryptedMessageMediaDocument45(o: any) {
  i32(0x7afe8ae2);
  bytes(o.thumb);
  i32(o.thumb_w);
  i32(o.thumb_h);
  str(o.mime_type);
  i32(o.size);
  bytes(o.key);
  bytes(o.iv);
  obj(o.attributes); // Vector<DocumentAttribute>
  str(o.caption);
}

function _decryptedMessageMediaAudio8(o: any) {
  i32(0x6080758f);
  i32(o.duration);
  i32(o.size);
  bytes(o.key);
  bytes(o.iv);
}

function _decryptedMessageMediaAudio17(o: any) {
  i32(0x57e0a9cb);
  i32(o.duration);
  str(o.mime_type);
  i32(o.size);
  bytes(o.key);
  bytes(o.iv);
}

function _decryptedMessageMediaExternalDocument23(o: any) {
  i32(0xfa95b0dd);
  i64(o.id);
  i64(o.access_hash);
  i32(o.date);
  str(o.mime_type);
  i32(o.size);
  obj(o.thumb); // PhotoSize
  i32(o.dc_id);
  obj(o.attributes); // Vector<DocumentAttribute>
}

function _decryptedMessageMediaVenue45(o: any) {
  i32(0x8a0df56f);
  f64(o.lat);
  f64(o.long);
  str(o.title);
  str(o.address);
  str(o.provider);
  str(o.venue_id);
}

function _decryptedMessageMediaWebPage45(o: any) {
  i32(0xe50511d8);
  str(o.url);
}

function _decryptedMessageActionSetMessageTTL8(o: any) {
  i32(0xa1733aec);
  i32(o.ttl_seconds);
}

function _decryptedMessageActionReadMessages8(o: any) {
  i32(0xc4f40be);
  obj(o.random_ids); // Vector<long>
}

function _decryptedMessageActionDeleteMessages8(o: any) {
  i32(0x65614304);
  obj(o.random_ids); // Vector<long>
}

function _decryptedMessageActionScreenshotMessages8(o: any) {
  i32(0x8ac1f475);
  obj(o.random_ids); // Vector<long>
}

function _decryptedMessageActionFlushHistory8(o: any) {
  i32(0x6719e45c);
}

function _decryptedMessageActionResend17(o: any) {
  i32(0x511110b0);
  i32(o.start_seq_no);
  i32(o.end_seq_no);
}

function _decryptedMessageActionNotifyLayer17(o: any) {
  i32(0xf3048883);
  i32(o.layer);
}

function _decryptedMessageActionTyping17(o: any) {
  i32(0xccb27641);
  obj(o.action); // SendMessageAction
}

function _decryptedMessageActionRequestKey20(o: any) {
  i32(0xf3c9611b);
  i64(o.exchange_id);
  bytes(o.g_a);
}

function _decryptedMessageActionAcceptKey20(o: any) {
  i32(0x6fe1735b);
  i64(o.exchange_id);
  bytes(o.g_b);
  i64(o.key_fingerprint);
}

function _decryptedMessageActionAbortKey20(o: any) {
  i32(0xdd05ec6b);
  i64(o.exchange_id);
}

function _decryptedMessageActionCommitKey20(o: any) {
  i32(0xec2e0b9b);
  i64(o.exchange_id);
  i64(o.key_fingerprint);
}

function _decryptedMessageActionNoop20(o: any) {
  i32(0xa82fdd63);
}

function _decryptedMessageLayer17(o: any) {
  i32(0x1be31789);
  bytes(o.random_bytes);
  i32(o.layer);
  i32(o.in_seq_no);
  i32(o.out_seq_no);
  obj(o.message); // DecryptedMessage
}

function _sendMessageTypingAction17(o: any) {
  i32(0x16bf744e);
}

function _sendMessageCancelAction17(o: any) {
  i32(0xfd5ec8f5);
}

function _sendMessageRecordVideoAction17(o: any) {
  i32(0xa187d66f);
}

function _sendMessageUploadVideoAction17(o: any) {
  i32(0x92042ff7);
}

function _sendMessageRecordAudioAction17(o: any) {
  i32(0xd52f73f7);
}

function _sendMessageUploadAudioAction17(o: any) {
  i32(0xe6ac8a6f);
}

function _sendMessageUploadPhotoAction17(o: any) {
  i32(0x990a3c1a);
}

function _sendMessageUploadDocumentAction17(o: any) {
  i32(0x8faee98e);
}

function _sendMessageGeoLocationAction17(o: any) {
  i32(0x176f8ba1);
}

function _sendMessageChooseContactAction17(o: any) {
  i32(0x628cbc6f);
}

function _sendMessageRecordRoundAction66(o: any) {
  i32(0x88f27fbc);
}

function _sendMessageUploadRoundAction66(o: any) {
  i32(0xbb718624);
}

function _documentAttributeImageSize23(o: any) {
  i32(0x6c37c15c);
  i32(o.w);
  i32(o.h);
}

function _documentAttributeAnimated23(o: any) {
  i32(0x11b58939);
}

function _documentAttributeSticker23(o: any) {
  i32(0xfb0a5727);
}

function _documentAttributeSticker45(o: any) {
  i32(0x3a556302);
  str(o.alt);
  obj(o.stickerset); // InputStickerSet
}

function _documentAttributeVideo23(o: any) {
  i32(0x5910cccb);
  i32(o.duration);
  i32(o.w);
  i32(o.h);
}

function _documentAttributeVideo66(o: any) {
  i32(0xef02ce6);
  const flags = ;
  i32(flags);
  i32(o.duration);
  i32(o.w);
  i32(o.h);
}

function _documentAttributeAudio23(o: any) {
  i32(0x51448e5);
  i32(o.duration);
}

function _documentAttributeAudio45(o: any) {
  i32(0xded218e0);
  i32(o.duration);
  str(o.title);
  str(o.performer);
}

function _documentAttributeAudio46(o: any) {
  i32(0x9852f9c6);
  const flags = +!!o.title | +!!o.performer << 1 | +!!o.waveform << 2;
  i32(flags);
  i32(o.duration);
  if (o.title !== undefined) obj(o.title); // flags.0?string
  if (o.performer !== undefined) obj(o.performer); // flags.1?string
  if (o.waveform !== undefined) obj(o.waveform); // flags.2?bytes
}

function _documentAttributeFilename23(o: any) {
  i32(0x15590068);
  str(o.file_name);
}

function _photoSizeEmpty23(o: any) {
  i32(0xe17e23c);
  str(o.type);
}

function _photoSize23(o: any) {
  i32(0x77bfb61b);
  str(o.type);
  obj(o.location); // FileLocation
  i32(o.w);
  i32(o.h);
  i32(o.size);
}

function _photoCachedSize23(o: any) {
  i32(0xe9a734fa);
  str(o.type);
  obj(o.location); // FileLocation
  i32(o.w);
  i32(o.h);
  bytes(o.bytes);
}

function _fileLocationUnavailable23(o: any) {
  i32(0x7c596b46);
  i64(o.volume_id);
  i32(o.local_id);
  i64(o.secret);
}

function _fileLocation23(o: any) {
  i32(0x53d69076);
  i32(o.dc_id);
  i64(o.volume_id);
  i32(o.local_id);
  i64(o.secret);
}

function _messageEntityUnknown45(o: any) {
  i32(0xbb92ba95);
  i32(o.offset);
  i32(o.length);
}

function _messageEntityMention45(o: any) {
  i32(0xfa04579d);
  i32(o.offset);
  i32(o.length);
}

function _messageEntityHashtag45(o: any) {
  i32(0x6f635b0d);
  i32(o.offset);
  i32(o.length);
}

function _messageEntityBotCommand45(o: any) {
  i32(0x6cef8ac7);
  i32(o.offset);
  i32(o.length);
}

function _messageEntityUrl45(o: any) {
  i32(0x6ed02538);
  i32(o.offset);
  i32(o.length);
}

function _messageEntityEmail45(o: any) {
  i32(0x64e475c2);
  i32(o.offset);
  i32(o.length);
}

function _messageEntityBold45(o: any) {
  i32(0xbd610bc9);
  i32(o.offset);
  i32(o.length);
}

function _messageEntityItalic45(o: any) {
  i32(0x826f8b60);
  i32(o.offset);
  i32(o.length);
}

function _messageEntityCode45(o: any) {
  i32(0x28a20571);
  i32(o.offset);
  i32(o.length);
}

function _messageEntityPre45(o: any) {
  i32(0x73924be0);
  i32(o.offset);
  i32(o.length);
  str(o.language);
}

function _messageEntityTextUrl45(o: any) {
  i32(0x76a6d327);
  i32(o.offset);
  i32(o.length);
  str(o.url);
}

function _inputStickerSetShortName45(o: any) {
  i32(0x861cc8a0);
  str(o.short_name);
}

function _inputStickerSetEmpty45(o: any) {
  i32(0xffb62b95);
}

const builderMap: Record<string, (o: any) => void> = {
  'decryptedMessage': _decryptedMessage8,
  'decryptedMessage': _decryptedMessage17,
  'decryptedMessage': _decryptedMessage45,
  'decryptedMessage': _decryptedMessage73,
  'decryptedMessageService': _decryptedMessageService8,
  'decryptedMessageService': _decryptedMessageService17,
  'decryptedMessageMediaEmpty': _decryptedMessageMediaEmpty8,
  'decryptedMessageMediaPhoto': _decryptedMessageMediaPhoto8,
  'decryptedMessageMediaPhoto': _decryptedMessageMediaPhoto45,
  'decryptedMessageMediaVideo': _decryptedMessageMediaVideo8,
  'decryptedMessageMediaVideo': _decryptedMessageMediaVideo17,
  'decryptedMessageMediaVideo': _decryptedMessageMediaVideo45,
  'decryptedMessageMediaGeoPoint': _decryptedMessageMediaGeoPoint8,
  'decryptedMessageMediaContact': _decryptedMessageMediaContact8,
  'decryptedMessageMediaDocument': _decryptedMessageMediaDocument8,
  'decryptedMessageMediaDocument': _decryptedMessageMediaDocument45,
  'decryptedMessageMediaAudio': _decryptedMessageMediaAudio8,
  'decryptedMessageMediaAudio': _decryptedMessageMediaAudio17,
  'decryptedMessageMediaExternalDocument': _decryptedMessageMediaExternalDocument23,
  'decryptedMessageMediaVenue': _decryptedMessageMediaVenue45,
  'decryptedMessageMediaWebPage': _decryptedMessageMediaWebPage45,
  'decryptedMessageActionSetMessageTTL': _decryptedMessageActionSetMessageTTL8,
  'decryptedMessageActionReadMessages': _decryptedMessageActionReadMessages8,
  'decryptedMessageActionDeleteMessages': _decryptedMessageActionDeleteMessages8,
  'decryptedMessageActionScreenshotMessages': _decryptedMessageActionScreenshotMessages8,
  'decryptedMessageActionFlushHistory': _decryptedMessageActionFlushHistory8,
  'decryptedMessageActionResend': _decryptedMessageActionResend17,
  'decryptedMessageActionNotifyLayer': _decryptedMessageActionNotifyLayer17,
  'decryptedMessageActionTyping': _decryptedMessageActionTyping17,
  'decryptedMessageActionRequestKey': _decryptedMessageActionRequestKey20,
  'decryptedMessageActionAcceptKey': _decryptedMessageActionAcceptKey20,
  'decryptedMessageActionAbortKey': _decryptedMessageActionAbortKey20,
  'decryptedMessageActionCommitKey': _decryptedMessageActionCommitKey20,
  'decryptedMessageActionNoop': _decryptedMessageActionNoop20,
  'decryptedMessageLayer': _decryptedMessageLayer17,
  'sendMessageTypingAction': _sendMessageTypingAction17,
  'sendMessageCancelAction': _sendMessageCancelAction17,
  'sendMessageRecordVideoAction': _sendMessageRecordVideoAction17,
  'sendMessageUploadVideoAction': _sendMessageUploadVideoAction17,
  'sendMessageRecordAudioAction': _sendMessageRecordAudioAction17,
  'sendMessageUploadAudioAction': _sendMessageUploadAudioAction17,
  'sendMessageUploadPhotoAction': _sendMessageUploadPhotoAction17,
  'sendMessageUploadDocumentAction': _sendMessageUploadDocumentAction17,
  'sendMessageGeoLocationAction': _sendMessageGeoLocationAction17,
  'sendMessageChooseContactAction': _sendMessageChooseContactAction17,
  'sendMessageRecordRoundAction': _sendMessageRecordRoundAction66,
  'sendMessageUploadRoundAction': _sendMessageUploadRoundAction66,
  'documentAttributeImageSize': _documentAttributeImageSize23,
  'documentAttributeAnimated': _documentAttributeAnimated23,
  'documentAttributeSticker': _documentAttributeSticker23,
  'documentAttributeSticker': _documentAttributeSticker45,
  'documentAttributeVideo': _documentAttributeVideo23,
  'documentAttributeVideo': _documentAttributeVideo66,
  'documentAttributeAudio': _documentAttributeAudio23,
  'documentAttributeAudio': _documentAttributeAudio45,
  'documentAttributeAudio': _documentAttributeAudio46,
  'documentAttributeFilename': _documentAttributeFilename23,
  'photoSizeEmpty': _photoSizeEmpty23,
  'photoSize': _photoSize23,
  'photoCachedSize': _photoCachedSize23,
  'fileLocationUnavailable': _fileLocationUnavailable23,
  'fileLocation': _fileLocation23,
  'messageEntityUnknown': _messageEntityUnknown45,
  'messageEntityMention': _messageEntityMention45,
  'messageEntityHashtag': _messageEntityHashtag45,
  'messageEntityBotCommand': _messageEntityBotCommand45,
  'messageEntityUrl': _messageEntityUrl45,
  'messageEntityEmail': _messageEntityEmail45,
  'messageEntityBold': _messageEntityBold45,
  'messageEntityItalic': _messageEntityItalic45,
  'messageEntityCode': _messageEntityCode45,
  'messageEntityPre': _messageEntityPre45,
  'messageEntityTextUrl': _messageEntityTextUrl45,
  'inputStickerSetShortName': _inputStickerSetShortName45,
  'inputStickerSetEmpty': _inputStickerSetEmpty45,
}

function obj(o: any) {
  const func = builderMap[o._];
  func(o);
}

export function build(stream: ByteStream, o: any) {
  s = stream;
  return obj(o);
}
