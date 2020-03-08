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
  writeUint32(value: number): void;
  writeInt64(value: string): void;
  writeInt128(value: string): void;
  writeInt256(value: string): void;
  writeDouble(value: number): void;
  writeString(value: string): void;
  writeBytes(value: ArrayBuffer): void;
}

function i32(s: ByteStream, value: number) {
  s.writeInt32(value);
}

function _decryptedMessage(s: ByteStream, o: any) {
  i32(s, 0x1f814f1f);
  o.random_id
  o.random_bytes
  o.message
  o.media
}

function _decryptedMessage(s: ByteStream, o: any) {
  i32(s, 0x204d3878);
  o.random_id
  i32(s, o.ttl);
  o.message
  o.media
}

function _decryptedMessage(s: ByteStream, o: any) {
  i32(s, 0x36b091de);
  const flags = +!!o.media << 9 | +!!o.entities << 7 | +!!o.via_bot_name << 11 | +!!o.reply_to_random_id << 3;
  i32(s, flags);
  o.random_id
  i32(s, o.ttl);
  o.message
  if (o.media !== undefined) o.media
  if (o.entities !== undefined) o.entities
  if (o.via_bot_name !== undefined) o.via_bot_name
  if (o.reply_to_random_id !== undefined) o.reply_to_random_id
}

function _decryptedMessage(s: ByteStream, o: any) {
  i32(s, 0x91cc4674);
  const flags = +!!o.media << 9 | +!!o.entities << 7 | +!!o.via_bot_name << 11 | +!!o.reply_to_random_id << 3 | +!!o.grouped_id << 17;
  i32(s, flags);
  o.random_id
  i32(s, o.ttl);
  o.message
  if (o.media !== undefined) o.media
  if (o.entities !== undefined) o.entities
  if (o.via_bot_name !== undefined) o.via_bot_name
  if (o.reply_to_random_id !== undefined) o.reply_to_random_id
  if (o.grouped_id !== undefined) o.grouped_id
}

function _decryptedMessageService(s: ByteStream, o: any) {
  i32(s, 0xaa48327d);
  o.random_id
  o.random_bytes
  o.action
}

function _decryptedMessageService(s: ByteStream, o: any) {
  i32(s, 0x73164160);
  o.random_id
  o.action
}

function _decryptedMessageMediaEmpty(s: ByteStream, o: any) {
  i32(s, 0x89f5c4a);
}

function _decryptedMessageMediaPhoto(s: ByteStream, o: any) {
  i32(s, 0x32798a8c);
  o.thumb
  i32(s, o.thumb_w);
  i32(s, o.thumb_h);
  i32(s, o.w);
  i32(s, o.h);
  i32(s, o.size);
  o.key
  o.iv
}

function _decryptedMessageMediaPhoto(s: ByteStream, o: any) {
  i32(s, 0xf1fa8d78);
  o.thumb
  i32(s, o.thumb_w);
  i32(s, o.thumb_h);
  i32(s, o.w);
  i32(s, o.h);
  i32(s, o.size);
  o.key
  o.iv
  o.caption
}

function _decryptedMessageMediaVideo(s: ByteStream, o: any) {
  i32(s, 0x4cee6ef3);
  o.thumb
  i32(s, o.thumb_w);
  i32(s, o.thumb_h);
  i32(s, o.duration);
  i32(s, o.w);
  i32(s, o.h);
  i32(s, o.size);
  o.key
  o.iv
}

function _decryptedMessageMediaVideo(s: ByteStream, o: any) {
  i32(s, 0x524a415d);
  o.thumb
  i32(s, o.thumb_w);
  i32(s, o.thumb_h);
  i32(s, o.duration);
  o.mime_type
  i32(s, o.w);
  i32(s, o.h);
  i32(s, o.size);
  o.key
  o.iv
}

function _decryptedMessageMediaVideo(s: ByteStream, o: any) {
  i32(s, 0x970c8c0e);
  o.thumb
  i32(s, o.thumb_w);
  i32(s, o.thumb_h);
  i32(s, o.duration);
  o.mime_type
  i32(s, o.w);
  i32(s, o.h);
  i32(s, o.size);
  o.key
  o.iv
  o.caption
}

function _decryptedMessageMediaGeoPoint(s: ByteStream, o: any) {
  i32(s, 0x35480a59);
  o.lat
  o.long
}

function _decryptedMessageMediaContact(s: ByteStream, o: any) {
  i32(s, 0x588a0a97);
  o.phone_number
  o.first_name
  o.last_name
  i32(s, o.user_id);
}

function _decryptedMessageMediaDocument(s: ByteStream, o: any) {
  i32(s, 0xb095434b);
  o.thumb
  i32(s, o.thumb_w);
  i32(s, o.thumb_h);
  o.file_name
  o.mime_type
  i32(s, o.size);
  o.key
  o.iv
}

function _decryptedMessageMediaDocument(s: ByteStream, o: any) {
  i32(s, 0x7afe8ae2);
  o.thumb
  i32(s, o.thumb_w);
  i32(s, o.thumb_h);
  o.mime_type
  i32(s, o.size);
  o.key
  o.iv
  o.attributes
  o.caption
}

function _decryptedMessageMediaAudio(s: ByteStream, o: any) {
  i32(s, 0x6080758f);
  i32(s, o.duration);
  i32(s, o.size);
  o.key
  o.iv
}

function _decryptedMessageMediaAudio(s: ByteStream, o: any) {
  i32(s, 0x57e0a9cb);
  i32(s, o.duration);
  o.mime_type
  i32(s, o.size);
  o.key
  o.iv
}

function _decryptedMessageMediaExternalDocument(s: ByteStream, o: any) {
  i32(s, 0xfa95b0dd);
  o.id
  o.access_hash
  i32(s, o.date);
  o.mime_type
  i32(s, o.size);
  o.thumb
  i32(s, o.dc_id);
  o.attributes
}

function _decryptedMessageMediaVenue(s: ByteStream, o: any) {
  i32(s, 0x8a0df56f);
  o.lat
  o.long
  o.title
  o.address
  o.provider
  o.venue_id
}

function _decryptedMessageMediaWebPage(s: ByteStream, o: any) {
  i32(s, 0xe50511d8);
  o.url
}

function _decryptedMessageActionSetMessageTTL(s: ByteStream, o: any) {
  i32(s, 0xa1733aec);
  i32(s, o.ttl_seconds);
}

function _decryptedMessageActionReadMessages(s: ByteStream, o: any) {
  i32(s, 0xc4f40be);
  o.random_ids
}

function _decryptedMessageActionDeleteMessages(s: ByteStream, o: any) {
  i32(s, 0x65614304);
  o.random_ids
}

function _decryptedMessageActionScreenshotMessages(s: ByteStream, o: any) {
  i32(s, 0x8ac1f475);
  o.random_ids
}

function _decryptedMessageActionFlushHistory(s: ByteStream, o: any) {
  i32(s, 0x6719e45c);
}

function _decryptedMessageActionResend(s: ByteStream, o: any) {
  i32(s, 0x511110b0);
  i32(s, o.start_seq_no);
  i32(s, o.end_seq_no);
}

function _decryptedMessageActionNotifyLayer(s: ByteStream, o: any) {
  i32(s, 0xf3048883);
  i32(s, o.layer);
}

function _decryptedMessageActionTyping(s: ByteStream, o: any) {
  i32(s, 0xccb27641);
  o.action
}

function _decryptedMessageActionRequestKey(s: ByteStream, o: any) {
  i32(s, 0xf3c9611b);
  o.exchange_id
  o.g_a
}

function _decryptedMessageActionAcceptKey(s: ByteStream, o: any) {
  i32(s, 0x6fe1735b);
  o.exchange_id
  o.g_b
  o.key_fingerprint
}

function _decryptedMessageActionAbortKey(s: ByteStream, o: any) {
  i32(s, 0xdd05ec6b);
  o.exchange_id
}

function _decryptedMessageActionCommitKey(s: ByteStream, o: any) {
  i32(s, 0xec2e0b9b);
  o.exchange_id
  o.key_fingerprint
}

function _decryptedMessageActionNoop(s: ByteStream, o: any) {
  i32(s, 0xa82fdd63);
}

function _decryptedMessageLayer(s: ByteStream, o: any) {
  i32(s, 0x1be31789);
  o.random_bytes
  i32(s, o.layer);
  i32(s, o.in_seq_no);
  i32(s, o.out_seq_no);
  o.message
}

function _sendMessageTypingAction(s: ByteStream, o: any) {
  i32(s, 0x16bf744e);
}

function _sendMessageCancelAction(s: ByteStream, o: any) {
  i32(s, 0xfd5ec8f5);
}

function _sendMessageRecordVideoAction(s: ByteStream, o: any) {
  i32(s, 0xa187d66f);
}

function _sendMessageUploadVideoAction(s: ByteStream, o: any) {
  i32(s, 0x92042ff7);
}

function _sendMessageRecordAudioAction(s: ByteStream, o: any) {
  i32(s, 0xd52f73f7);
}

function _sendMessageUploadAudioAction(s: ByteStream, o: any) {
  i32(s, 0xe6ac8a6f);
}

function _sendMessageUploadPhotoAction(s: ByteStream, o: any) {
  i32(s, 0x990a3c1a);
}

function _sendMessageUploadDocumentAction(s: ByteStream, o: any) {
  i32(s, 0x8faee98e);
}

function _sendMessageGeoLocationAction(s: ByteStream, o: any) {
  i32(s, 0x176f8ba1);
}

function _sendMessageChooseContactAction(s: ByteStream, o: any) {
  i32(s, 0x628cbc6f);
}

function _sendMessageRecordRoundAction(s: ByteStream, o: any) {
  i32(s, 0x88f27fbc);
}

function _sendMessageUploadRoundAction(s: ByteStream, o: any) {
  i32(s, 0xbb718624);
}

function _documentAttributeImageSize(s: ByteStream, o: any) {
  i32(s, 0x6c37c15c);
  i32(s, o.w);
  i32(s, o.h);
}

function _documentAttributeAnimated(s: ByteStream, o: any) {
  i32(s, 0x11b58939);
}

function _documentAttributeSticker(s: ByteStream, o: any) {
  i32(s, 0xfb0a5727);
}

function _documentAttributeSticker(s: ByteStream, o: any) {
  i32(s, 0x3a556302);
  o.alt
  o.stickerset
}

function _documentAttributeVideo(s: ByteStream, o: any) {
  i32(s, 0x5910cccb);
  i32(s, o.duration);
  i32(s, o.w);
  i32(s, o.h);
}

function _documentAttributeVideo(s: ByteStream, o: any) {
  i32(s, 0xef02ce6);
  const flags = ;
  i32(s, flags);
  i32(s, o.duration);
  i32(s, o.w);
  i32(s, o.h);
}

function _documentAttributeAudio(s: ByteStream, o: any) {
  i32(s, 0x51448e5);
  i32(s, o.duration);
}

function _documentAttributeAudio(s: ByteStream, o: any) {
  i32(s, 0xded218e0);
  i32(s, o.duration);
  o.title
  o.performer
}

function _documentAttributeAudio(s: ByteStream, o: any) {
  i32(s, 0x9852f9c6);
  const flags = +!!o.title | +!!o.performer << 1 | +!!o.waveform << 2;
  i32(s, flags);
  i32(s, o.duration);
  if (o.title !== undefined) o.title
  if (o.performer !== undefined) o.performer
  if (o.waveform !== undefined) o.waveform
}

function _documentAttributeFilename(s: ByteStream, o: any) {
  i32(s, 0x15590068);
  o.file_name
}

function _photoSizeEmpty(s: ByteStream, o: any) {
  i32(s, 0xe17e23c);
  o.type
}

function _photoSize(s: ByteStream, o: any) {
  i32(s, 0x77bfb61b);
  o.type
  o.location
  i32(s, o.w);
  i32(s, o.h);
  i32(s, o.size);
}

function _photoCachedSize(s: ByteStream, o: any) {
  i32(s, 0xe9a734fa);
  o.type
  o.location
  i32(s, o.w);
  i32(s, o.h);
  o.bytes
}

function _fileLocationUnavailable(s: ByteStream, o: any) {
  i32(s, 0x7c596b46);
  o.volume_id
  i32(s, o.local_id);
  o.secret
}

function _fileLocation(s: ByteStream, o: any) {
  i32(s, 0x53d69076);
  i32(s, o.dc_id);
  o.volume_id
  i32(s, o.local_id);
  o.secret
}

function _messageEntityUnknown(s: ByteStream, o: any) {
  i32(s, 0xbb92ba95);
  i32(s, o.offset);
  i32(s, o.length);
}

function _messageEntityMention(s: ByteStream, o: any) {
  i32(s, 0xfa04579d);
  i32(s, o.offset);
  i32(s, o.length);
}

function _messageEntityHashtag(s: ByteStream, o: any) {
  i32(s, 0x6f635b0d);
  i32(s, o.offset);
  i32(s, o.length);
}

function _messageEntityBotCommand(s: ByteStream, o: any) {
  i32(s, 0x6cef8ac7);
  i32(s, o.offset);
  i32(s, o.length);
}

function _messageEntityUrl(s: ByteStream, o: any) {
  i32(s, 0x6ed02538);
  i32(s, o.offset);
  i32(s, o.length);
}

function _messageEntityEmail(s: ByteStream, o: any) {
  i32(s, 0x64e475c2);
  i32(s, o.offset);
  i32(s, o.length);
}

function _messageEntityBold(s: ByteStream, o: any) {
  i32(s, 0xbd610bc9);
  i32(s, o.offset);
  i32(s, o.length);
}

function _messageEntityItalic(s: ByteStream, o: any) {
  i32(s, 0x826f8b60);
  i32(s, o.offset);
  i32(s, o.length);
}

function _messageEntityCode(s: ByteStream, o: any) {
  i32(s, 0x28a20571);
  i32(s, o.offset);
  i32(s, o.length);
}

function _messageEntityPre(s: ByteStream, o: any) {
  i32(s, 0x73924be0);
  i32(s, o.offset);
  i32(s, o.length);
  o.language
}

function _messageEntityTextUrl(s: ByteStream, o: any) {
  i32(s, 0x76a6d327);
  i32(s, o.offset);
  i32(s, o.length);
  o.url
}

function _inputStickerSetShortName(s: ByteStream, o: any) {
  i32(s, 0x861cc8a0);
  o.short_name
}

function _inputStickerSetEmpty(s: ByteStream, o: any) {
  i32(s, 0xffb62b95);
}

const builderMap: Record<string, (s: ByteStream, o: any) => void> = {
  'decryptedMessage': _decryptedMessage,
  'decryptedMessage': _decryptedMessage,
  'decryptedMessage': _decryptedMessage,
  'decryptedMessage': _decryptedMessage,
  'decryptedMessageService': _decryptedMessageService,
  'decryptedMessageService': _decryptedMessageService,
  'decryptedMessageMediaEmpty': _decryptedMessageMediaEmpty,
  'decryptedMessageMediaPhoto': _decryptedMessageMediaPhoto,
  'decryptedMessageMediaPhoto': _decryptedMessageMediaPhoto,
  'decryptedMessageMediaVideo': _decryptedMessageMediaVideo,
  'decryptedMessageMediaVideo': _decryptedMessageMediaVideo,
  'decryptedMessageMediaVideo': _decryptedMessageMediaVideo,
  'decryptedMessageMediaGeoPoint': _decryptedMessageMediaGeoPoint,
  'decryptedMessageMediaContact': _decryptedMessageMediaContact,
  'decryptedMessageMediaDocument': _decryptedMessageMediaDocument,
  'decryptedMessageMediaDocument': _decryptedMessageMediaDocument,
  'decryptedMessageMediaAudio': _decryptedMessageMediaAudio,
  'decryptedMessageMediaAudio': _decryptedMessageMediaAudio,
  'decryptedMessageMediaExternalDocument': _decryptedMessageMediaExternalDocument,
  'decryptedMessageMediaVenue': _decryptedMessageMediaVenue,
  'decryptedMessageMediaWebPage': _decryptedMessageMediaWebPage,
  'decryptedMessageActionSetMessageTTL': _decryptedMessageActionSetMessageTTL,
  'decryptedMessageActionReadMessages': _decryptedMessageActionReadMessages,
  'decryptedMessageActionDeleteMessages': _decryptedMessageActionDeleteMessages,
  'decryptedMessageActionScreenshotMessages': _decryptedMessageActionScreenshotMessages,
  'decryptedMessageActionFlushHistory': _decryptedMessageActionFlushHistory,
  'decryptedMessageActionResend': _decryptedMessageActionResend,
  'decryptedMessageActionNotifyLayer': _decryptedMessageActionNotifyLayer,
  'decryptedMessageActionTyping': _decryptedMessageActionTyping,
  'decryptedMessageActionRequestKey': _decryptedMessageActionRequestKey,
  'decryptedMessageActionAcceptKey': _decryptedMessageActionAcceptKey,
  'decryptedMessageActionAbortKey': _decryptedMessageActionAbortKey,
  'decryptedMessageActionCommitKey': _decryptedMessageActionCommitKey,
  'decryptedMessageActionNoop': _decryptedMessageActionNoop,
  'decryptedMessageLayer': _decryptedMessageLayer,
  'sendMessageTypingAction': _sendMessageTypingAction,
  'sendMessageCancelAction': _sendMessageCancelAction,
  'sendMessageRecordVideoAction': _sendMessageRecordVideoAction,
  'sendMessageUploadVideoAction': _sendMessageUploadVideoAction,
  'sendMessageRecordAudioAction': _sendMessageRecordAudioAction,
  'sendMessageUploadAudioAction': _sendMessageUploadAudioAction,
  'sendMessageUploadPhotoAction': _sendMessageUploadPhotoAction,
  'sendMessageUploadDocumentAction': _sendMessageUploadDocumentAction,
  'sendMessageGeoLocationAction': _sendMessageGeoLocationAction,
  'sendMessageChooseContactAction': _sendMessageChooseContactAction,
  'sendMessageRecordRoundAction': _sendMessageRecordRoundAction,
  'sendMessageUploadRoundAction': _sendMessageUploadRoundAction,
  'documentAttributeImageSize': _documentAttributeImageSize,
  'documentAttributeAnimated': _documentAttributeAnimated,
  'documentAttributeSticker': _documentAttributeSticker,
  'documentAttributeSticker': _documentAttributeSticker,
  'documentAttributeVideo': _documentAttributeVideo,
  'documentAttributeVideo': _documentAttributeVideo,
  'documentAttributeAudio': _documentAttributeAudio,
  'documentAttributeAudio': _documentAttributeAudio,
  'documentAttributeAudio': _documentAttributeAudio,
  'documentAttributeFilename': _documentAttributeFilename,
  'photoSizeEmpty': _photoSizeEmpty,
  'photoSize': _photoSize,
  'photoCachedSize': _photoCachedSize,
  'fileLocationUnavailable': _fileLocationUnavailable,
  'fileLocation': _fileLocation,
  'messageEntityUnknown': _messageEntityUnknown,
  'messageEntityMention': _messageEntityMention,
  'messageEntityHashtag': _messageEntityHashtag,
  'messageEntityBotCommand': _messageEntityBotCommand,
  'messageEntityUrl': _messageEntityUrl,
  'messageEntityEmail': _messageEntityEmail,
  'messageEntityBold': _messageEntityBold,
  'messageEntityItalic': _messageEntityItalic,
  'messageEntityCode': _messageEntityCode,
  'messageEntityPre': _messageEntityPre,
  'messageEntityTextUrl': _messageEntityTextUrl,
  'inputStickerSetShortName': _inputStickerSetShortName,
  'inputStickerSetEmpty': _inputStickerSetEmpty,
}

function obj(s: ByteStream, o: any) {
  const func = builderMap[o._];
  func(s, o);
}

export function build(s: ByteStream, o: any) {
  return obj(s, o);
}
