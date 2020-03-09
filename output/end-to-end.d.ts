/* eslint-disable max-len */
/* eslint-disable semi-style */
/* eslint-disable spaced-comment */

/*******************************************************************************************/
/* This file was automatically generated (https://github.com/misupov/tg-schema-generator). */
/*                                                                                         */
/* Do not make changes to this file unless you know what you are doing -- modify           */
/* the tool instead.                                                                       */
/*                                                                                         */
/* Source: end-to-end.json                                                                 */
/*                                                                                         */
/*******************************************************************************************/

/* CONSTRUCTORS */

export type DecryptedMessage =
  | DecryptedMessage.decryptedMessage8
  | DecryptedMessage.decryptedMessage17
  | DecryptedMessage.decryptedMessage45
  | DecryptedMessage.decryptedMessage73
  | DecryptedMessage.decryptedMessageService8
  | DecryptedMessage.decryptedMessageService17
;

export namespace DecryptedMessage {
  export type decryptedMessage8 = {
    _: 'decryptedMessage',
    random_id: string,
    random_bytes: ArrayBuffer,
    message: string,
    media: DecryptedMessageMedia,
  };
  export type decryptedMessage17 = {
    _: 'decryptedMessage',
    random_id: string,
    ttl: number,
    message: string,
    media: DecryptedMessageMedia,
  };
  export type decryptedMessage45 = {
    _: 'decryptedMessage',
    random_id: string,
    ttl: number,
    message: string,
    media?: DecryptedMessageMedia,
    entities?: MessageEntity[],
    via_bot_name?: string,
    reply_to_random_id?: string,
  };
  export type decryptedMessage73 = {
    _: 'decryptedMessage',
    random_id: string,
    ttl: number,
    message: string,
    media?: DecryptedMessageMedia,
    entities?: MessageEntity[],
    via_bot_name?: string,
    reply_to_random_id?: string,
    grouped_id?: string,
  };
  export type decryptedMessageService8 = {
    _: 'decryptedMessageService',
    random_id: string,
    random_bytes: ArrayBuffer,
    action: DecryptedMessageAction,
  };
  export type decryptedMessageService17 = {
    _: 'decryptedMessageService',
    random_id: string,
    action: DecryptedMessageAction,
  };
}

export type DecryptedMessageMedia =
  | DecryptedMessageMedia.decryptedMessageMediaEmpty8
  | DecryptedMessageMedia.decryptedMessageMediaPhoto8
  | DecryptedMessageMedia.decryptedMessageMediaPhoto45
  | DecryptedMessageMedia.decryptedMessageMediaVideo8
  | DecryptedMessageMedia.decryptedMessageMediaVideo17
  | DecryptedMessageMedia.decryptedMessageMediaVideo45
  | DecryptedMessageMedia.decryptedMessageMediaGeoPoint8
  | DecryptedMessageMedia.decryptedMessageMediaContact8
  | DecryptedMessageMedia.decryptedMessageMediaDocument8
  | DecryptedMessageMedia.decryptedMessageMediaDocument45
  | DecryptedMessageMedia.decryptedMessageMediaAudio8
  | DecryptedMessageMedia.decryptedMessageMediaAudio17
  | DecryptedMessageMedia.decryptedMessageMediaExternalDocument23
  | DecryptedMessageMedia.decryptedMessageMediaVenue45
  | DecryptedMessageMedia.decryptedMessageMediaWebPage45
;

export namespace DecryptedMessageMedia {
  export type decryptedMessageMediaEmpty8 = {
    _: 'decryptedMessageMediaEmpty',
  };
  export type decryptedMessageMediaPhoto8 = {
    _: 'decryptedMessageMediaPhoto',
    thumb: ArrayBuffer,
    thumb_w: number,
    thumb_h: number,
    w: number,
    h: number,
    size: number,
    key: ArrayBuffer,
    iv: ArrayBuffer,
  };
  export type decryptedMessageMediaPhoto45 = {
    _: 'decryptedMessageMediaPhoto',
    thumb: ArrayBuffer,
    thumb_w: number,
    thumb_h: number,
    w: number,
    h: number,
    size: number,
    key: ArrayBuffer,
    iv: ArrayBuffer,
    caption: string,
  };
  export type decryptedMessageMediaVideo8 = {
    _: 'decryptedMessageMediaVideo',
    thumb: ArrayBuffer,
    thumb_w: number,
    thumb_h: number,
    duration: number,
    w: number,
    h: number,
    size: number,
    key: ArrayBuffer,
    iv: ArrayBuffer,
  };
  export type decryptedMessageMediaVideo17 = {
    _: 'decryptedMessageMediaVideo',
    thumb: ArrayBuffer,
    thumb_w: number,
    thumb_h: number,
    duration: number,
    mime_type: string,
    w: number,
    h: number,
    size: number,
    key: ArrayBuffer,
    iv: ArrayBuffer,
  };
  export type decryptedMessageMediaVideo45 = {
    _: 'decryptedMessageMediaVideo',
    thumb: ArrayBuffer,
    thumb_w: number,
    thumb_h: number,
    duration: number,
    mime_type: string,
    w: number,
    h: number,
    size: number,
    key: ArrayBuffer,
    iv: ArrayBuffer,
    caption: string,
  };
  export type decryptedMessageMediaGeoPoint8 = {
    _: 'decryptedMessageMediaGeoPoint',
    lat: number,
    long: number,
  };
  export type decryptedMessageMediaContact8 = {
    _: 'decryptedMessageMediaContact',
    phone_number: string,
    first_name: string,
    last_name: string,
    user_id: number,
  };
  export type decryptedMessageMediaDocument8 = {
    _: 'decryptedMessageMediaDocument',
    thumb: ArrayBuffer,
    thumb_w: number,
    thumb_h: number,
    file_name: string,
    mime_type: string,
    size: number,
    key: ArrayBuffer,
    iv: ArrayBuffer,
  };
  export type decryptedMessageMediaDocument45 = {
    _: 'decryptedMessageMediaDocument',
    thumb: ArrayBuffer,
    thumb_w: number,
    thumb_h: number,
    mime_type: string,
    size: number,
    key: ArrayBuffer,
    iv: ArrayBuffer,
    attributes: DocumentAttribute[],
    caption: string,
  };
  export type decryptedMessageMediaAudio8 = {
    _: 'decryptedMessageMediaAudio',
    duration: number,
    size: number,
    key: ArrayBuffer,
    iv: ArrayBuffer,
  };
  export type decryptedMessageMediaAudio17 = {
    _: 'decryptedMessageMediaAudio',
    duration: number,
    mime_type: string,
    size: number,
    key: ArrayBuffer,
    iv: ArrayBuffer,
  };
  export type decryptedMessageMediaExternalDocument23 = {
    _: 'decryptedMessageMediaExternalDocument',
    id: string,
    access_hash: string,
    date: number,
    mime_type: string,
    size: number,
    thumb: PhotoSize,
    dc_id: number,
    attributes: DocumentAttribute[],
  };
  export type decryptedMessageMediaVenue45 = {
    _: 'decryptedMessageMediaVenue',
    lat: number,
    long: number,
    title: string,
    address: string,
    provider: string,
    venue_id: string,
  };
  export type decryptedMessageMediaWebPage45 = {
    _: 'decryptedMessageMediaWebPage',
    url: string,
  };
}

export type DecryptedMessageAction =
  | DecryptedMessageAction.decryptedMessageActionSetMessageTTL8
  | DecryptedMessageAction.decryptedMessageActionReadMessages8
  | DecryptedMessageAction.decryptedMessageActionDeleteMessages8
  | DecryptedMessageAction.decryptedMessageActionScreenshotMessages8
  | DecryptedMessageAction.decryptedMessageActionFlushHistory8
  | DecryptedMessageAction.decryptedMessageActionResend17
  | DecryptedMessageAction.decryptedMessageActionNotifyLayer17
  | DecryptedMessageAction.decryptedMessageActionTyping17
  | DecryptedMessageAction.decryptedMessageActionRequestKey20
  | DecryptedMessageAction.decryptedMessageActionAcceptKey20
  | DecryptedMessageAction.decryptedMessageActionAbortKey20
  | DecryptedMessageAction.decryptedMessageActionCommitKey20
  | DecryptedMessageAction.decryptedMessageActionNoop20
;

export namespace DecryptedMessageAction {
  export type decryptedMessageActionSetMessageTTL8 = {
    _: 'decryptedMessageActionSetMessageTTL',
    ttl_seconds: number,
  };
  export type decryptedMessageActionReadMessages8 = {
    _: 'decryptedMessageActionReadMessages',
    random_ids: string[],
  };
  export type decryptedMessageActionDeleteMessages8 = {
    _: 'decryptedMessageActionDeleteMessages',
    random_ids: string[],
  };
  export type decryptedMessageActionScreenshotMessages8 = {
    _: 'decryptedMessageActionScreenshotMessages',
    random_ids: string[],
  };
  export type decryptedMessageActionFlushHistory8 = {
    _: 'decryptedMessageActionFlushHistory',
  };
  export type decryptedMessageActionResend17 = {
    _: 'decryptedMessageActionResend',
    start_seq_no: number,
    end_seq_no: number,
  };
  export type decryptedMessageActionNotifyLayer17 = {
    _: 'decryptedMessageActionNotifyLayer',
    layer: number,
  };
  export type decryptedMessageActionTyping17 = {
    _: 'decryptedMessageActionTyping',
    action: SendMessageAction,
  };
  export type decryptedMessageActionRequestKey20 = {
    _: 'decryptedMessageActionRequestKey',
    exchange_id: string,
    g_a: ArrayBuffer,
  };
  export type decryptedMessageActionAcceptKey20 = {
    _: 'decryptedMessageActionAcceptKey',
    exchange_id: string,
    g_b: ArrayBuffer,
    key_fingerprint: string,
  };
  export type decryptedMessageActionAbortKey20 = {
    _: 'decryptedMessageActionAbortKey',
    exchange_id: string,
  };
  export type decryptedMessageActionCommitKey20 = {
    _: 'decryptedMessageActionCommitKey',
    exchange_id: string,
    key_fingerprint: string,
  };
  export type decryptedMessageActionNoop20 = {
    _: 'decryptedMessageActionNoop',
  };
}

export type DecryptedMessageLayer =
  | DecryptedMessageLayer.decryptedMessageLayer17
;

export namespace DecryptedMessageLayer {
  export type decryptedMessageLayer17 = {
    _: 'decryptedMessageLayer',
    random_bytes: ArrayBuffer,
    layer: number,
    in_seq_no: number,
    out_seq_no: number,
    message: DecryptedMessage,
  };
}

export type SendMessageAction =
  | SendMessageAction.sendMessageTypingAction17
  | SendMessageAction.sendMessageCancelAction17
  | SendMessageAction.sendMessageRecordVideoAction17
  | SendMessageAction.sendMessageUploadVideoAction17
  | SendMessageAction.sendMessageRecordAudioAction17
  | SendMessageAction.sendMessageUploadAudioAction17
  | SendMessageAction.sendMessageUploadPhotoAction17
  | SendMessageAction.sendMessageUploadDocumentAction17
  | SendMessageAction.sendMessageGeoLocationAction17
  | SendMessageAction.sendMessageChooseContactAction17
  | SendMessageAction.sendMessageRecordRoundAction66
  | SendMessageAction.sendMessageUploadRoundAction66
;

export namespace SendMessageAction {
  export type sendMessageTypingAction17 = {
    _: 'sendMessageTypingAction',
  };
  export type sendMessageCancelAction17 = {
    _: 'sendMessageCancelAction',
  };
  export type sendMessageRecordVideoAction17 = {
    _: 'sendMessageRecordVideoAction',
  };
  export type sendMessageUploadVideoAction17 = {
    _: 'sendMessageUploadVideoAction',
  };
  export type sendMessageRecordAudioAction17 = {
    _: 'sendMessageRecordAudioAction',
  };
  export type sendMessageUploadAudioAction17 = {
    _: 'sendMessageUploadAudioAction',
  };
  export type sendMessageUploadPhotoAction17 = {
    _: 'sendMessageUploadPhotoAction',
  };
  export type sendMessageUploadDocumentAction17 = {
    _: 'sendMessageUploadDocumentAction',
  };
  export type sendMessageGeoLocationAction17 = {
    _: 'sendMessageGeoLocationAction',
  };
  export type sendMessageChooseContactAction17 = {
    _: 'sendMessageChooseContactAction',
  };
  export type sendMessageRecordRoundAction66 = {
    _: 'sendMessageRecordRoundAction',
  };
  export type sendMessageUploadRoundAction66 = {
    _: 'sendMessageUploadRoundAction',
  };
}

export type DocumentAttribute =
  | DocumentAttribute.documentAttributeImageSize23
  | DocumentAttribute.documentAttributeAnimated23
  | DocumentAttribute.documentAttributeSticker23
  | DocumentAttribute.documentAttributeSticker45
  | DocumentAttribute.documentAttributeVideo23
  | DocumentAttribute.documentAttributeVideo66
  | DocumentAttribute.documentAttributeAudio23
  | DocumentAttribute.documentAttributeAudio45
  | DocumentAttribute.documentAttributeAudio46
  | DocumentAttribute.documentAttributeFilename23
;

export namespace DocumentAttribute {
  export type documentAttributeImageSize23 = {
    _: 'documentAttributeImageSize',
    w: number,
    h: number,
  };
  export type documentAttributeAnimated23 = {
    _: 'documentAttributeAnimated',
  };
  export type documentAttributeSticker23 = {
    _: 'documentAttributeSticker',
  };
  export type documentAttributeSticker45 = {
    _: 'documentAttributeSticker',
    alt: string,
    stickerset: InputStickerSet,
  };
  export type documentAttributeVideo23 = {
    _: 'documentAttributeVideo',
    duration: number,
    w: number,
    h: number,
  };
  export type documentAttributeVideo66 = {
    _: 'documentAttributeVideo',
    duration: number,
    w: number,
    h: number,
  };
  export type documentAttributeAudio23 = {
    _: 'documentAttributeAudio',
    duration: number,
  };
  export type documentAttributeAudio45 = {
    _: 'documentAttributeAudio',
    duration: number,
    title: string,
    performer: string,
  };
  export type documentAttributeAudio46 = {
    _: 'documentAttributeAudio',
    duration: number,
    title?: string,
    performer?: string,
    waveform?: ArrayBuffer,
  };
  export type documentAttributeFilename23 = {
    _: 'documentAttributeFilename',
    file_name: string,
  };
}

export type PhotoSize =
  | PhotoSize.photoSizeEmpty23
  | PhotoSize.photoSize23
  | PhotoSize.photoCachedSize23
;

export namespace PhotoSize {
  export type photoSizeEmpty23 = {
    _: 'photoSizeEmpty',
    type: string,
  };
  export type photoSize23 = {
    _: 'photoSize',
    type: string,
    location: FileLocation,
    w: number,
    h: number,
    size: number,
  };
  export type photoCachedSize23 = {
    _: 'photoCachedSize',
    type: string,
    location: FileLocation,
    w: number,
    h: number,
    bytes: ArrayBuffer,
  };
}

export type FileLocation =
  | FileLocation.fileLocationUnavailable23
  | FileLocation.fileLocation23
;

export namespace FileLocation {
  export type fileLocationUnavailable23 = {
    _: 'fileLocationUnavailable',
    volume_id: string,
    local_id: number,
    secret: string,
  };
  export type fileLocation23 = {
    _: 'fileLocation',
    dc_id: number,
    volume_id: string,
    local_id: number,
    secret: string,
  };
}

export type MessageEntity =
  | MessageEntity.messageEntityUnknown45
  | MessageEntity.messageEntityMention45
  | MessageEntity.messageEntityHashtag45
  | MessageEntity.messageEntityBotCommand45
  | MessageEntity.messageEntityUrl45
  | MessageEntity.messageEntityEmail45
  | MessageEntity.messageEntityBold45
  | MessageEntity.messageEntityItalic45
  | MessageEntity.messageEntityCode45
  | MessageEntity.messageEntityPre45
  | MessageEntity.messageEntityTextUrl45
;

export namespace MessageEntity {
  export type messageEntityUnknown45 = {
    _: 'messageEntityUnknown',
    offset: number,
    length: number,
  };
  export type messageEntityMention45 = {
    _: 'messageEntityMention',
    offset: number,
    length: number,
  };
  export type messageEntityHashtag45 = {
    _: 'messageEntityHashtag',
    offset: number,
    length: number,
  };
  export type messageEntityBotCommand45 = {
    _: 'messageEntityBotCommand',
    offset: number,
    length: number,
  };
  export type messageEntityUrl45 = {
    _: 'messageEntityUrl',
    offset: number,
    length: number,
  };
  export type messageEntityEmail45 = {
    _: 'messageEntityEmail',
    offset: number,
    length: number,
  };
  export type messageEntityBold45 = {
    _: 'messageEntityBold',
    offset: number,
    length: number,
  };
  export type messageEntityItalic45 = {
    _: 'messageEntityItalic',
    offset: number,
    length: number,
  };
  export type messageEntityCode45 = {
    _: 'messageEntityCode',
    offset: number,
    length: number,
  };
  export type messageEntityPre45 = {
    _: 'messageEntityPre',
    offset: number,
    length: number,
    language: string,
  };
  export type messageEntityTextUrl45 = {
    _: 'messageEntityTextUrl',
    offset: number,
    length: number,
    url: string,
  };
}

export type InputStickerSet =
  | InputStickerSet.inputStickerSetShortName45
  | InputStickerSet.inputStickerSetEmpty45
;

export namespace InputStickerSet {
  export type inputStickerSetShortName45 = {
    _: 'inputStickerSetShortName',
    short_name: string,
  };
  export type inputStickerSetEmpty45 = {
    _: 'inputStickerSetEmpty',
  };
}

export interface ConstructorDeclMap {
  'decryptedMessage': DecryptedMessage.decryptedMessage8,
  'decryptedMessage': DecryptedMessage.decryptedMessage17,
  'decryptedMessage': DecryptedMessage.decryptedMessage45,
  'decryptedMessage': DecryptedMessage.decryptedMessage73,
  'decryptedMessageService': DecryptedMessage.decryptedMessageService8,
  'decryptedMessageService': DecryptedMessage.decryptedMessageService17,
  'decryptedMessageMediaEmpty': DecryptedMessageMedia.decryptedMessageMediaEmpty8,
  'decryptedMessageMediaPhoto': DecryptedMessageMedia.decryptedMessageMediaPhoto8,
  'decryptedMessageMediaPhoto': DecryptedMessageMedia.decryptedMessageMediaPhoto45,
  'decryptedMessageMediaVideo': DecryptedMessageMedia.decryptedMessageMediaVideo8,
  'decryptedMessageMediaVideo': DecryptedMessageMedia.decryptedMessageMediaVideo17,
  'decryptedMessageMediaVideo': DecryptedMessageMedia.decryptedMessageMediaVideo45,
  'decryptedMessageMediaGeoPoint': DecryptedMessageMedia.decryptedMessageMediaGeoPoint8,
  'decryptedMessageMediaContact': DecryptedMessageMedia.decryptedMessageMediaContact8,
  'decryptedMessageActionSetMessageTTL': DecryptedMessageAction.decryptedMessageActionSetMessageTTL8,
  'decryptedMessageMediaDocument': DecryptedMessageMedia.decryptedMessageMediaDocument8,
  'decryptedMessageMediaDocument': DecryptedMessageMedia.decryptedMessageMediaDocument45,
  'decryptedMessageMediaAudio': DecryptedMessageMedia.decryptedMessageMediaAudio8,
  'decryptedMessageMediaAudio': DecryptedMessageMedia.decryptedMessageMediaAudio17,
  'decryptedMessageActionReadMessages': DecryptedMessageAction.decryptedMessageActionReadMessages8,
  'decryptedMessageActionDeleteMessages': DecryptedMessageAction.decryptedMessageActionDeleteMessages8,
  'decryptedMessageActionScreenshotMessages': DecryptedMessageAction.decryptedMessageActionScreenshotMessages8,
  'decryptedMessageActionFlushHistory': DecryptedMessageAction.decryptedMessageActionFlushHistory8,
  'decryptedMessageLayer': DecryptedMessageLayer.decryptedMessageLayer17,
  'sendMessageTypingAction': SendMessageAction.sendMessageTypingAction17,
  'sendMessageCancelAction': SendMessageAction.sendMessageCancelAction17,
  'sendMessageRecordVideoAction': SendMessageAction.sendMessageRecordVideoAction17,
  'sendMessageUploadVideoAction': SendMessageAction.sendMessageUploadVideoAction17,
  'sendMessageRecordAudioAction': SendMessageAction.sendMessageRecordAudioAction17,
  'sendMessageUploadAudioAction': SendMessageAction.sendMessageUploadAudioAction17,
  'sendMessageUploadPhotoAction': SendMessageAction.sendMessageUploadPhotoAction17,
  'sendMessageUploadDocumentAction': SendMessageAction.sendMessageUploadDocumentAction17,
  'sendMessageGeoLocationAction': SendMessageAction.sendMessageGeoLocationAction17,
  'sendMessageChooseContactAction': SendMessageAction.sendMessageChooseContactAction17,
  'decryptedMessageActionResend': DecryptedMessageAction.decryptedMessageActionResend17,
  'decryptedMessageActionNotifyLayer': DecryptedMessageAction.decryptedMessageActionNotifyLayer17,
  'decryptedMessageActionTyping': DecryptedMessageAction.decryptedMessageActionTyping17,
  'decryptedMessageActionRequestKey': DecryptedMessageAction.decryptedMessageActionRequestKey20,
  'decryptedMessageActionAcceptKey': DecryptedMessageAction.decryptedMessageActionAcceptKey20,
  'decryptedMessageActionAbortKey': DecryptedMessageAction.decryptedMessageActionAbortKey20,
  'decryptedMessageActionCommitKey': DecryptedMessageAction.decryptedMessageActionCommitKey20,
  'decryptedMessageActionNoop': DecryptedMessageAction.decryptedMessageActionNoop20,
  'documentAttributeImageSize': DocumentAttribute.documentAttributeImageSize23,
  'documentAttributeAnimated': DocumentAttribute.documentAttributeAnimated23,
  'documentAttributeSticker': DocumentAttribute.documentAttributeSticker23,
  'documentAttributeSticker': DocumentAttribute.documentAttributeSticker45,
  'documentAttributeVideo': DocumentAttribute.documentAttributeVideo23,
  'documentAttributeVideo': DocumentAttribute.documentAttributeVideo66,
  'documentAttributeAudio': DocumentAttribute.documentAttributeAudio23,
  'documentAttributeAudio': DocumentAttribute.documentAttributeAudio45,
  'documentAttributeAudio': DocumentAttribute.documentAttributeAudio46,
  'documentAttributeFilename': DocumentAttribute.documentAttributeFilename23,
  'photoSizeEmpty': PhotoSize.photoSizeEmpty23,
  'photoSize': PhotoSize.photoSize23,
  'photoCachedSize': PhotoSize.photoCachedSize23,
  'fileLocationUnavailable': FileLocation.fileLocationUnavailable23,
  'fileLocation': FileLocation.fileLocation23,
  'decryptedMessageMediaExternalDocument': DecryptedMessageMedia.decryptedMessageMediaExternalDocument23,
  'messageEntityUnknown': MessageEntity.messageEntityUnknown45,
  'messageEntityMention': MessageEntity.messageEntityMention45,
  'messageEntityHashtag': MessageEntity.messageEntityHashtag45,
  'messageEntityBotCommand': MessageEntity.messageEntityBotCommand45,
  'messageEntityUrl': MessageEntity.messageEntityUrl45,
  'messageEntityEmail': MessageEntity.messageEntityEmail45,
  'messageEntityBold': MessageEntity.messageEntityBold45,
  'messageEntityItalic': MessageEntity.messageEntityItalic45,
  'messageEntityCode': MessageEntity.messageEntityCode45,
  'messageEntityPre': MessageEntity.messageEntityPre45,
  'messageEntityTextUrl': MessageEntity.messageEntityTextUrl45,
  'inputStickerSetShortName': InputStickerSet.inputStickerSetShortName45,
  'inputStickerSetEmpty': InputStickerSet.inputStickerSetEmpty45,
  'decryptedMessageMediaVenue': DecryptedMessageMedia.decryptedMessageMediaVenue45,
  'decryptedMessageMediaWebPage': DecryptedMessageMedia.decryptedMessageMediaWebPage45,
  'sendMessageRecordRoundAction': SendMessageAction.sendMessageRecordRoundAction66,
  'sendMessageUploadRoundAction': SendMessageAction.sendMessageUploadRoundAction66,
}

/* METHODS */

export interface MethodDeclMap {
}
