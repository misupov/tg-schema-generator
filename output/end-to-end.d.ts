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
  'decryptedMessage': DecryptedMessage.decryptedMessage,
  'decryptedMessage': DecryptedMessage.decryptedMessage,
  'decryptedMessage': DecryptedMessage.decryptedMessage,
  'decryptedMessage': DecryptedMessage.decryptedMessage,
  'decryptedMessageService': DecryptedMessage.decryptedMessageService,
  'decryptedMessageService': DecryptedMessage.decryptedMessageService,
  'decryptedMessageMediaEmpty': DecryptedMessageMedia.decryptedMessageMediaEmpty,
  'decryptedMessageMediaPhoto': DecryptedMessageMedia.decryptedMessageMediaPhoto,
  'decryptedMessageMediaPhoto': DecryptedMessageMedia.decryptedMessageMediaPhoto,
  'decryptedMessageMediaVideo': DecryptedMessageMedia.decryptedMessageMediaVideo,
  'decryptedMessageMediaVideo': DecryptedMessageMedia.decryptedMessageMediaVideo,
  'decryptedMessageMediaVideo': DecryptedMessageMedia.decryptedMessageMediaVideo,
  'decryptedMessageMediaGeoPoint': DecryptedMessageMedia.decryptedMessageMediaGeoPoint,
  'decryptedMessageMediaContact': DecryptedMessageMedia.decryptedMessageMediaContact,
  'decryptedMessageActionSetMessageTTL': DecryptedMessageAction.decryptedMessageActionSetMessageTTL,
  'decryptedMessageMediaDocument': DecryptedMessageMedia.decryptedMessageMediaDocument,
  'decryptedMessageMediaDocument': DecryptedMessageMedia.decryptedMessageMediaDocument,
  'decryptedMessageMediaAudio': DecryptedMessageMedia.decryptedMessageMediaAudio,
  'decryptedMessageMediaAudio': DecryptedMessageMedia.decryptedMessageMediaAudio,
  'decryptedMessageActionReadMessages': DecryptedMessageAction.decryptedMessageActionReadMessages,
  'decryptedMessageActionDeleteMessages': DecryptedMessageAction.decryptedMessageActionDeleteMessages,
  'decryptedMessageActionScreenshotMessages': DecryptedMessageAction.decryptedMessageActionScreenshotMessages,
  'decryptedMessageActionFlushHistory': DecryptedMessageAction.decryptedMessageActionFlushHistory,
  'decryptedMessageLayer': DecryptedMessageLayer.decryptedMessageLayer,
  'sendMessageTypingAction': SendMessageAction.sendMessageTypingAction,
  'sendMessageCancelAction': SendMessageAction.sendMessageCancelAction,
  'sendMessageRecordVideoAction': SendMessageAction.sendMessageRecordVideoAction,
  'sendMessageUploadVideoAction': SendMessageAction.sendMessageUploadVideoAction,
  'sendMessageRecordAudioAction': SendMessageAction.sendMessageRecordAudioAction,
  'sendMessageUploadAudioAction': SendMessageAction.sendMessageUploadAudioAction,
  'sendMessageUploadPhotoAction': SendMessageAction.sendMessageUploadPhotoAction,
  'sendMessageUploadDocumentAction': SendMessageAction.sendMessageUploadDocumentAction,
  'sendMessageGeoLocationAction': SendMessageAction.sendMessageGeoLocationAction,
  'sendMessageChooseContactAction': SendMessageAction.sendMessageChooseContactAction,
  'decryptedMessageActionResend': DecryptedMessageAction.decryptedMessageActionResend,
  'decryptedMessageActionNotifyLayer': DecryptedMessageAction.decryptedMessageActionNotifyLayer,
  'decryptedMessageActionTyping': DecryptedMessageAction.decryptedMessageActionTyping,
  'decryptedMessageActionRequestKey': DecryptedMessageAction.decryptedMessageActionRequestKey,
  'decryptedMessageActionAcceptKey': DecryptedMessageAction.decryptedMessageActionAcceptKey,
  'decryptedMessageActionAbortKey': DecryptedMessageAction.decryptedMessageActionAbortKey,
  'decryptedMessageActionCommitKey': DecryptedMessageAction.decryptedMessageActionCommitKey,
  'decryptedMessageActionNoop': DecryptedMessageAction.decryptedMessageActionNoop,
  'documentAttributeImageSize': DocumentAttribute.documentAttributeImageSize,
  'documentAttributeAnimated': DocumentAttribute.documentAttributeAnimated,
  'documentAttributeSticker': DocumentAttribute.documentAttributeSticker,
  'documentAttributeSticker': DocumentAttribute.documentAttributeSticker,
  'documentAttributeVideo': DocumentAttribute.documentAttributeVideo,
  'documentAttributeVideo': DocumentAttribute.documentAttributeVideo,
  'documentAttributeAudio': DocumentAttribute.documentAttributeAudio,
  'documentAttributeAudio': DocumentAttribute.documentAttributeAudio,
  'documentAttributeAudio': DocumentAttribute.documentAttributeAudio,
  'documentAttributeFilename': DocumentAttribute.documentAttributeFilename,
  'photoSizeEmpty': PhotoSize.photoSizeEmpty,
  'photoSize': PhotoSize.photoSize,
  'photoCachedSize': PhotoSize.photoCachedSize,
  'fileLocationUnavailable': FileLocation.fileLocationUnavailable,
  'fileLocation': FileLocation.fileLocation,
  'decryptedMessageMediaExternalDocument': DecryptedMessageMedia.decryptedMessageMediaExternalDocument,
  'messageEntityUnknown': MessageEntity.messageEntityUnknown,
  'messageEntityMention': MessageEntity.messageEntityMention,
  'messageEntityHashtag': MessageEntity.messageEntityHashtag,
  'messageEntityBotCommand': MessageEntity.messageEntityBotCommand,
  'messageEntityUrl': MessageEntity.messageEntityUrl,
  'messageEntityEmail': MessageEntity.messageEntityEmail,
  'messageEntityBold': MessageEntity.messageEntityBold,
  'messageEntityItalic': MessageEntity.messageEntityItalic,
  'messageEntityCode': MessageEntity.messageEntityCode,
  'messageEntityPre': MessageEntity.messageEntityPre,
  'messageEntityTextUrl': MessageEntity.messageEntityTextUrl,
  'inputStickerSetShortName': InputStickerSet.inputStickerSetShortName,
  'inputStickerSetEmpty': InputStickerSet.inputStickerSetEmpty,
  'decryptedMessageMediaVenue': DecryptedMessageMedia.decryptedMessageMediaVenue,
  'decryptedMessageMediaWebPage': DecryptedMessageMedia.decryptedMessageMediaWebPage,
  'sendMessageRecordRoundAction': SendMessageAction.sendMessageRecordRoundAction,
  'sendMessageUploadRoundAction': SendMessageAction.sendMessageUploadRoundAction,
}

/* METHODS */

export interface MethodDeclMap {
}
