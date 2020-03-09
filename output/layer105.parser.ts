/*******************************************************************************************/
/* This file was automatically generated (https://github.com/misupov/tg-schema-generator). */
/*                                                                                         */
/* Do not make changes to this file unless you know what you are doing -- modify           */
/* the tool instead.                                                                       */
/*                                                                                         */
/* Source: layer105.json                                                                   */
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

function _boolFalse() { return false; }
function _boolTrue() { return true; }
function _true() { return {_: 'true'}; }
function _vector() { return {_: 'vector'}; }
function _error() { return {_: 'error', code: i32(), text: str()}; }
function _null() { return {_: 'null'}; }
function _inputPeerEmpty() { return {_: 'inputPeerEmpty'}; }
function _inputPeerSelf() { return {_: 'inputPeerSelf'}; }
function _inputPeerChat() { return {_: 'inputPeerChat', chat_id: i32()}; }
function _inputUserEmpty() { return {_: 'inputUserEmpty'}; }
function _inputUserSelf() { return {_: 'inputUserSelf'}; }
function _inputPhoneContact() { return {_: 'inputPhoneContact', client_id: i64(), phone: str(), first_name: str(), last_name: str()}; }
function _inputFile() { return {_: 'inputFile', id: i64(), parts: i32(), name: str(), md5_checksum: str()}; }
function _inputMediaEmpty() { return {_: 'inputMediaEmpty'}; }
function _inputMediaUploadedPhoto() {
  const flags = i32();
  return {
    _: 'inputMediaUploadedPhoto' as const,
    file: obj(),
    stickers: flags & 0x1 ? vector(obj) : undefined,
    ttl_seconds: flags & 0x2 ? i32() : undefined,
  }
}
function _inputMediaPhoto() {
  const flags = i32();
  return {
    _: 'inputMediaPhoto' as const,
    id: obj(),
    ttl_seconds: flags & 0x1 ? i32() : undefined,
  }
}
function _inputMediaGeoPoint() { return {_: 'inputMediaGeoPoint', geo_point: obj()}; }
function _inputMediaContact() { return {_: 'inputMediaContact', phone_number: str(), first_name: str(), last_name: str(), vcard: str()}; }
function _inputChatPhotoEmpty() { return {_: 'inputChatPhotoEmpty'}; }
function _inputChatUploadedPhoto() { return {_: 'inputChatUploadedPhoto', file: obj()}; }
function _inputChatPhoto() { return {_: 'inputChatPhoto', id: obj()}; }
function _inputGeoPointEmpty() { return {_: 'inputGeoPointEmpty'}; }
function _inputGeoPoint() { return {_: 'inputGeoPoint', lat: f64(), long: f64()}; }
function _inputPhotoEmpty() { return {_: 'inputPhotoEmpty'}; }
function _inputPhoto() { return {_: 'inputPhoto', id: i64(), access_hash: i64(), file_reference: bytes()}; }
function _inputFileLocation() { return {_: 'inputFileLocation', volume_id: i64(), local_id: i32(), secret: i64(), file_reference: bytes()}; }
function _peerUser() { return {_: 'peerUser', user_id: i32()}; }
function _peerChat() { return {_: 'peerChat', chat_id: i32()}; }
function _storageFileUnknown() { return {_: 'storage.fileUnknown'}; }
function _storageFilePartial() { return {_: 'storage.filePartial'}; }
function _storageFileJpeg() { return {_: 'storage.fileJpeg'}; }
function _storageFileGif() { return {_: 'storage.fileGif'}; }
function _storageFilePng() { return {_: 'storage.filePng'}; }
function _storageFilePdf() { return {_: 'storage.filePdf'}; }
function _storageFileMp3() { return {_: 'storage.fileMp3'}; }
function _storageFileMov() { return {_: 'storage.fileMov'}; }
function _storageFileMp4() { return {_: 'storage.fileMp4'}; }
function _storageFileWebp() { return {_: 'storage.fileWebp'}; }
function _userEmpty() { return {_: 'userEmpty', id: i32()}; }
function _userProfilePhotoEmpty() { return {_: 'userProfilePhotoEmpty'}; }
function _userProfilePhoto() { return {_: 'userProfilePhoto', photo_id: i64(), photo_small: obj(), photo_big: obj(), dc_id: i32()}; }
function _userStatusEmpty() { return {_: 'userStatusEmpty'}; }
function _userStatusOnline() { return {_: 'userStatusOnline', expires: i32()}; }
function _userStatusOffline() { return {_: 'userStatusOffline', was_online: i32()}; }
function _chatEmpty() { return {_: 'chatEmpty', id: i32()}; }
function _chat() {
  const flags = i32();
  return {
    _: 'chat' as const,
    creator: !!(flags & 0x1),
    kicked: !!(flags & 0x2),
    left: !!(flags & 0x4),
    deactivated: !!(flags & 0x20),
    id: i32(),
    title: str(),
    photo: obj(),
    participants_count: i32(),
    date: i32(),
    version: i32(),
    migrated_to: flags & 0x40 ? obj() : undefined,
    admin_rights: flags & 0x4000 ? obj() : undefined,
    default_banned_rights: flags & 0x40000 ? obj() : undefined,
  }
}
function _chatForbidden() { return {_: 'chatForbidden', id: i32(), title: str()}; }
function _chatFull() {
  const flags = i32();
  return {
    _: 'chatFull' as const,
    can_set_username: !!(flags & 0x80),
    has_scheduled: !!(flags & 0x100),
    id: i32(),
    about: str(),
    participants: obj(),
    chat_photo: flags & 0x4 ? obj() : undefined,
    notify_settings: obj(),
    exported_invite: obj(),
    bot_info: flags & 0x8 ? vector(obj) : undefined,
    pinned_msg_id: flags & 0x40 ? i32() : undefined,
    folder_id: flags & 0x800 ? i32() : undefined,
  }
}
function _chatParticipant() { return {_: 'chatParticipant', user_id: i32(), inviter_id: i32(), date: i32()}; }
function _chatParticipantsForbidden() {
  const flags = i32();
  return {
    _: 'chatParticipantsForbidden' as const,
    chat_id: i32(),
    self_participant: flags & 0x1 ? obj() : undefined,
  }
}
function _chatParticipants() { return {_: 'chatParticipants', chat_id: i32(), participants: vector(obj), version: i32()}; }
function _chatPhotoEmpty() { return {_: 'chatPhotoEmpty'}; }
function _chatPhoto() { return {_: 'chatPhoto', photo_small: obj(), photo_big: obj(), dc_id: i32()}; }
function _messageEmpty() { return {_: 'messageEmpty', id: i32()}; }
function _message() {
  const flags = i32();
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
    id: i32(),
    from_id: flags & 0x100 ? i32() : undefined,
    to_id: obj(),
    fwd_from: flags & 0x4 ? obj() : undefined,
    via_bot_id: flags & 0x800 ? i32() : undefined,
    reply_to_msg_id: flags & 0x8 ? i32() : undefined,
    date: i32(),
    message: str(),
    media: flags & 0x200 ? obj() : undefined,
    reply_markup: flags & 0x40 ? obj() : undefined,
    entities: flags & 0x80 ? vector(obj) : undefined,
    views: flags & 0x400 ? i32() : undefined,
    edit_date: flags & 0x8000 ? i32() : undefined,
    post_author: flags & 0x10000 ? str() : undefined,
    grouped_id: flags & 0x20000 ? i64() : undefined,
    restriction_reason: flags & 0x400000 ? vector(obj) : undefined,
  }
}
function _messageService() {
  const flags = i32();
  return {
    _: 'messageService' as const,
    out: !!(flags & 0x2),
    mentioned: !!(flags & 0x10),
    media_unread: !!(flags & 0x20),
    silent: !!(flags & 0x2000),
    post: !!(flags & 0x4000),
    legacy: !!(flags & 0x80000),
    id: i32(),
    from_id: flags & 0x100 ? i32() : undefined,
    to_id: obj(),
    reply_to_msg_id: flags & 0x8 ? i32() : undefined,
    date: i32(),
    action: obj(),
  }
}
function _messageMediaEmpty() { return {_: 'messageMediaEmpty'}; }
function _messageMediaPhoto() {
  const flags = i32();
  return {
    _: 'messageMediaPhoto' as const,
    photo: flags & 0x1 ? obj() : undefined,
    ttl_seconds: flags & 0x4 ? i32() : undefined,
  }
}
function _messageMediaGeo() { return {_: 'messageMediaGeo', geo: obj()}; }
function _messageMediaContact() { return {_: 'messageMediaContact', phone_number: str(), first_name: str(), last_name: str(), vcard: str(), user_id: i32()}; }
function _messageMediaUnsupported() { return {_: 'messageMediaUnsupported'}; }
function _messageActionEmpty() { return {_: 'messageActionEmpty'}; }
function _messageActionChatCreate() { return {_: 'messageActionChatCreate', title: str(), users: vector(i32)}; }
function _messageActionChatEditTitle() { return {_: 'messageActionChatEditTitle', title: str()}; }
function _messageActionChatEditPhoto() { return {_: 'messageActionChatEditPhoto', photo: obj()}; }
function _messageActionChatDeletePhoto() { return {_: 'messageActionChatDeletePhoto'}; }
function _messageActionChatAddUser() { return {_: 'messageActionChatAddUser', users: vector(i32)}; }
function _messageActionChatDeleteUser() { return {_: 'messageActionChatDeleteUser', user_id: i32()}; }
function _dialog() {
  const flags = i32();
  return {
    _: 'dialog' as const,
    pinned: !!(flags & 0x4),
    unread_mark: !!(flags & 0x8),
    peer: obj(),
    top_message: i32(),
    read_inbox_max_id: i32(),
    read_outbox_max_id: i32(),
    unread_count: i32(),
    unread_mentions_count: i32(),
    notify_settings: obj(),
    pts: flags & 0x1 ? i32() : undefined,
    draft: flags & 0x2 ? obj() : undefined,
    folder_id: flags & 0x10 ? i32() : undefined,
  }
}
function _photoEmpty() { return {_: 'photoEmpty', id: i64()}; }
function _photo() {
  const flags = i32();
  return {
    _: 'photo' as const,
    has_stickers: !!(flags & 0x1),
    id: i64(),
    access_hash: i64(),
    file_reference: bytes(),
    date: i32(),
    sizes: vector(obj),
    dc_id: i32(),
  }
}
function _photoSizeEmpty() { return {_: 'photoSizeEmpty', type: str()}; }
function _photoSize() { return {_: 'photoSize', type: str(), location: obj(), w: i32(), h: i32(), size: i32()}; }
function _photoCachedSize() { return {_: 'photoCachedSize', type: str(), location: obj(), w: i32(), h: i32(), bytes: bytes()}; }
function _geoPointEmpty() { return {_: 'geoPointEmpty'}; }
function _geoPoint() { return {_: 'geoPoint', long: f64(), lat: f64(), access_hash: i64()}; }
function _authSentCode() {
  const flags = i32();
  return {
    _: 'auth.sentCode' as const,
    type: obj(),
    phone_code_hash: str(),
    next_type: flags & 0x2 ? obj() : undefined,
    timeout: flags & 0x4 ? i32() : undefined,
  }
}
function _authAuthorization() {
  const flags = i32();
  return {
    _: 'auth.authorization' as const,
    tmp_sessions: flags & 0x1 ? i32() : undefined,
    user: obj(),
  }
}
function _authExportedAuthorization() { return {_: 'auth.exportedAuthorization', id: i32(), bytes: bytes()}; }
function _inputNotifyPeer() { return {_: 'inputNotifyPeer', peer: obj()}; }
function _inputNotifyUsers() { return {_: 'inputNotifyUsers'}; }
function _inputNotifyChats() { return {_: 'inputNotifyChats'}; }
function _inputPeerNotifySettings() {
  const flags = i32();
  return {
    _: 'inputPeerNotifySettings' as const,
    show_previews: flags & 0x1 ? obj() : undefined,
    silent: flags & 0x2 ? obj() : undefined,
    mute_until: flags & 0x4 ? i32() : undefined,
    sound: flags & 0x8 ? str() : undefined,
  }
}
function _peerNotifySettings() {
  const flags = i32();
  return {
    _: 'peerNotifySettings' as const,
    show_previews: flags & 0x1 ? obj() : undefined,
    silent: flags & 0x2 ? obj() : undefined,
    mute_until: flags & 0x4 ? i32() : undefined,
    sound: flags & 0x8 ? str() : undefined,
  }
}
function _peerSettings() {
  const flags = i32();
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
function _wallPaper() {
  const flags = i32();
  return {
    _: 'wallPaper' as const,
    id: i64(),
    creator: !!(flags & 0x1),
    default: !!(flags & 0x2),
    pattern: !!(flags & 0x8),
    dark: !!(flags & 0x10),
    access_hash: i64(),
    slug: str(),
    document: obj(),
    settings: flags & 0x4 ? obj() : undefined,
  }
}
function _inputReportReasonSpam() { return {_: 'inputReportReasonSpam'}; }
function _inputReportReasonViolence() { return {_: 'inputReportReasonViolence'}; }
function _inputReportReasonPornography() { return {_: 'inputReportReasonPornography'}; }
function _inputReportReasonChildAbuse() { return {_: 'inputReportReasonChildAbuse'}; }
function _inputReportReasonOther() { return {_: 'inputReportReasonOther', text: str()}; }
function _userFull() {
  const flags = i32();
  return {
    _: 'userFull' as const,
    blocked: !!(flags & 0x1),
    phone_calls_available: !!(flags & 0x10),
    phone_calls_private: !!(flags & 0x20),
    can_pin_message: !!(flags & 0x80),
    has_scheduled: !!(flags & 0x1000),
    user: obj(),
    about: flags & 0x2 ? str() : undefined,
    settings: obj(),
    profile_photo: flags & 0x4 ? obj() : undefined,
    notify_settings: obj(),
    bot_info: flags & 0x8 ? obj() : undefined,
    pinned_msg_id: flags & 0x40 ? i32() : undefined,
    common_chats_count: i32(),
    folder_id: flags & 0x800 ? i32() : undefined,
  }
}
function _contact() { return {_: 'contact', user_id: i32(), mutual: obj()}; }
function _importedContact() { return {_: 'importedContact', user_id: i32(), client_id: i64()}; }
function _contactBlocked() { return {_: 'contactBlocked', user_id: i32(), date: i32()}; }
function _contactStatus() { return {_: 'contactStatus', user_id: i32(), status: obj()}; }
function _contactsContactsNotModified() { return {_: 'contacts.contactsNotModified'}; }
function _contactsContacts() { return {_: 'contacts.contacts', contacts: vector(obj), saved_count: i32(), users: vector(obj)}; }
function _contactsImportedContacts() { return {_: 'contacts.importedContacts', imported: vector(obj), popular_invites: vector(obj), retry_contacts: vector(i64), users: vector(obj)}; }
function _contactsBlocked() { return {_: 'contacts.blocked', blocked: vector(obj), users: vector(obj)}; }
function _contactsBlockedSlice() { return {_: 'contacts.blockedSlice', count: i32(), blocked: vector(obj), users: vector(obj)}; }
function _messagesDialogs() { return {_: 'messages.dialogs', dialogs: vector(obj), messages: vector(obj), chats: vector(obj), users: vector(obj)}; }
function _messagesDialogsSlice() { return {_: 'messages.dialogsSlice', count: i32(), dialogs: vector(obj), messages: vector(obj), chats: vector(obj), users: vector(obj)}; }
function _messagesMessages() { return {_: 'messages.messages', messages: vector(obj), chats: vector(obj), users: vector(obj)}; }
function _messagesMessagesSlice() {
  const flags = i32();
  return {
    _: 'messages.messagesSlice' as const,
    inexact: !!(flags & 0x2),
    count: i32(),
    next_rate: flags & 0x1 ? i32() : undefined,
    messages: vector(obj),
    chats: vector(obj),
    users: vector(obj),
  }
}
function _messagesChats() { return {_: 'messages.chats', chats: vector(obj)}; }
function _messagesChatFull() { return {_: 'messages.chatFull', full_chat: obj(), chats: vector(obj), users: vector(obj)}; }
function _messagesAffectedHistory() { return {_: 'messages.affectedHistory', pts: i32(), pts_count: i32(), offset: i32()}; }
function _inputMessagesFilterEmpty() { return {_: 'inputMessagesFilterEmpty'}; }
function _inputMessagesFilterPhotos() { return {_: 'inputMessagesFilterPhotos'}; }
function _inputMessagesFilterVideo() { return {_: 'inputMessagesFilterVideo'}; }
function _inputMessagesFilterPhotoVideo() { return {_: 'inputMessagesFilterPhotoVideo'}; }
function _inputMessagesFilterDocument() { return {_: 'inputMessagesFilterDocument'}; }
function _inputMessagesFilterUrl() { return {_: 'inputMessagesFilterUrl'}; }
function _inputMessagesFilterGif() { return {_: 'inputMessagesFilterGif'}; }
function _updateNewMessage() { return {_: 'updateNewMessage', message: obj(), pts: i32(), pts_count: i32()}; }
function _updateMessageID() { return {_: 'updateMessageID', id: i32(), random_id: i64()}; }
function _updateDeleteMessages() { return {_: 'updateDeleteMessages', messages: vector(i32), pts: i32(), pts_count: i32()}; }
function _updateUserTyping() { return {_: 'updateUserTyping', user_id: i32(), action: obj()}; }
function _updateChatUserTyping() { return {_: 'updateChatUserTyping', chat_id: i32(), user_id: i32(), action: obj()}; }
function _updateChatParticipants() { return {_: 'updateChatParticipants', participants: obj()}; }
function _updateUserStatus() { return {_: 'updateUserStatus', user_id: i32(), status: obj()}; }
function _updateUserName() { return {_: 'updateUserName', user_id: i32(), first_name: str(), last_name: str(), username: str()}; }
function _updateUserPhoto() { return {_: 'updateUserPhoto', user_id: i32(), date: i32(), photo: obj(), previous: obj()}; }
function _updatesState() { return {_: 'updates.state', pts: i32(), qts: i32(), date: i32(), seq: i32(), unread_count: i32()}; }
function _updatesDifferenceEmpty() { return {_: 'updates.differenceEmpty', date: i32(), seq: i32()}; }
function _updatesDifference() { return {_: 'updates.difference', new_messages: vector(obj), new_encrypted_messages: vector(obj), other_updates: vector(obj), chats: vector(obj), users: vector(obj), state: obj()}; }
function _updatesDifferenceSlice() { return {_: 'updates.differenceSlice', new_messages: vector(obj), new_encrypted_messages: vector(obj), other_updates: vector(obj), chats: vector(obj), users: vector(obj), intermediate_state: obj()}; }
function _updatesTooLong() { return {_: 'updatesTooLong'}; }
function _updateShortMessage() {
  const flags = i32();
  return {
    _: 'updateShortMessage' as const,
    out: !!(flags & 0x2),
    mentioned: !!(flags & 0x10),
    media_unread: !!(flags & 0x20),
    silent: !!(flags & 0x2000),
    id: i32(),
    user_id: i32(),
    message: str(),
    pts: i32(),
    pts_count: i32(),
    date: i32(),
    fwd_from: flags & 0x4 ? obj() : undefined,
    via_bot_id: flags & 0x800 ? i32() : undefined,
    reply_to_msg_id: flags & 0x8 ? i32() : undefined,
    entities: flags & 0x80 ? vector(obj) : undefined,
  }
}
function _updateShortChatMessage() {
  const flags = i32();
  return {
    _: 'updateShortChatMessage' as const,
    out: !!(flags & 0x2),
    mentioned: !!(flags & 0x10),
    media_unread: !!(flags & 0x20),
    silent: !!(flags & 0x2000),
    id: i32(),
    from_id: i32(),
    chat_id: i32(),
    message: str(),
    pts: i32(),
    pts_count: i32(),
    date: i32(),
    fwd_from: flags & 0x4 ? obj() : undefined,
    via_bot_id: flags & 0x800 ? i32() : undefined,
    reply_to_msg_id: flags & 0x8 ? i32() : undefined,
    entities: flags & 0x80 ? vector(obj) : undefined,
  }
}
function _updateShort() { return {_: 'updateShort', update: obj(), date: i32()}; }
function _updatesCombined() { return {_: 'updatesCombined', updates: vector(obj), users: vector(obj), chats: vector(obj), date: i32(), seq_start: i32(), seq: i32()}; }
function _updates() { return {_: 'updates', updates: vector(obj), users: vector(obj), chats: vector(obj), date: i32(), seq: i32()}; }
function _photosPhotos() { return {_: 'photos.photos', photos: vector(obj), users: vector(obj)}; }
function _photosPhotosSlice() { return {_: 'photos.photosSlice', count: i32(), photos: vector(obj), users: vector(obj)}; }
function _photosPhoto() { return {_: 'photos.photo', photo: obj(), users: vector(obj)}; }
function _uploadFile() { return {_: 'upload.file', type: obj(), mtime: i32(), bytes: bytes()}; }
function _dcOption() {
  const flags = i32();
  return {
    _: 'dcOption' as const,
    ipv6: !!(flags & 0x1),
    media_only: !!(flags & 0x2),
    tcpo_only: !!(flags & 0x4),
    cdn: !!(flags & 0x8),
    static: !!(flags & 0x10),
    id: i32(),
    ip_address: str(),
    port: i32(),
    secret: flags & 0x400 ? bytes() : undefined,
  }
}
function _config() {
  const flags = i32();
  return {
    _: 'config' as const,
    phonecalls_enabled: !!(flags & 0x2),
    default_p2p_contacts: !!(flags & 0x8),
    preload_featured_stickers: !!(flags & 0x10),
    ignore_phone_entities: !!(flags & 0x20),
    revoke_pm_inbox: !!(flags & 0x40),
    blocked_mode: !!(flags & 0x100),
    pfs_enabled: !!(flags & 0x2000),
    date: i32(),
    expires: i32(),
    test_mode: obj(),
    this_dc: i32(),
    dc_options: vector(obj),
    dc_txt_domain_name: str(),
    chat_size_max: i32(),
    megagroup_size_max: i32(),
    forwarded_count_max: i32(),
    online_update_period_ms: i32(),
    offline_blur_timeout_ms: i32(),
    offline_idle_timeout_ms: i32(),
    online_cloud_timeout_ms: i32(),
    notify_cloud_delay_ms: i32(),
    notify_default_delay_ms: i32(),
    push_chat_period_ms: i32(),
    push_chat_limit: i32(),
    saved_gifs_limit: i32(),
    edit_time_limit: i32(),
    revoke_time_limit: i32(),
    revoke_pm_time_limit: i32(),
    rating_e_decay: i32(),
    stickers_recent_limit: i32(),
    stickers_faved_limit: i32(),
    channels_read_media_period: i32(),
    tmp_sessions: flags & 0x1 ? i32() : undefined,
    pinned_dialogs_count_max: i32(),
    pinned_infolder_count_max: i32(),
    call_receive_timeout_ms: i32(),
    call_ring_timeout_ms: i32(),
    call_connect_timeout_ms: i32(),
    call_packet_timeout_ms: i32(),
    me_url_prefix: str(),
    autoupdate_url_prefix: flags & 0x80 ? str() : undefined,
    gif_search_username: flags & 0x200 ? str() : undefined,
    venue_search_username: flags & 0x400 ? str() : undefined,
    img_search_username: flags & 0x800 ? str() : undefined,
    static_maps_provider: flags & 0x1000 ? str() : undefined,
    caption_length_max: i32(),
    message_length_max: i32(),
    webfile_dc_id: i32(),
    suggested_lang_code: flags & 0x4 ? str() : undefined,
    lang_pack_version: flags & 0x4 ? i32() : undefined,
    base_lang_pack_version: flags & 0x4 ? i32() : undefined,
  }
}
function _nearestDc() { return {_: 'nearestDc', country: str(), this_dc: i32(), nearest_dc: i32()}; }
function _helpAppUpdate() {
  const flags = i32();
  return {
    _: 'help.appUpdate' as const,
    can_not_skip: !!(flags & 0x1),
    id: i32(),
    version: str(),
    text: str(),
    entities: vector(obj),
    document: flags & 0x2 ? obj() : undefined,
    url: flags & 0x4 ? str() : undefined,
  }
}
function _helpNoAppUpdate() { return {_: 'help.noAppUpdate'}; }
function _helpInviteText() { return {_: 'help.inviteText', message: str()}; }
function _updateNewEncryptedMessage() { return {_: 'updateNewEncryptedMessage', message: obj(), qts: i32()}; }
function _updateEncryptedChatTyping() { return {_: 'updateEncryptedChatTyping', chat_id: i32()}; }
function _updateEncryption() { return {_: 'updateEncryption', chat: obj(), date: i32()}; }
function _updateEncryptedMessagesRead() { return {_: 'updateEncryptedMessagesRead', chat_id: i32(), max_date: i32(), date: i32()}; }
function _encryptedChatEmpty() { return {_: 'encryptedChatEmpty', id: i32()}; }
function _encryptedChatWaiting() { return {_: 'encryptedChatWaiting', id: i32(), access_hash: i64(), date: i32(), admin_id: i32(), participant_id: i32()}; }
function _encryptedChatRequested() { return {_: 'encryptedChatRequested', id: i32(), access_hash: i64(), date: i32(), admin_id: i32(), participant_id: i32(), g_a: bytes()}; }
function _encryptedChat() { return {_: 'encryptedChat', id: i32(), access_hash: i64(), date: i32(), admin_id: i32(), participant_id: i32(), g_a_or_b: bytes(), key_fingerprint: i64()}; }
function _encryptedChatDiscarded() { return {_: 'encryptedChatDiscarded', id: i32()}; }
function _inputEncryptedChat() { return {_: 'inputEncryptedChat', chat_id: i32(), access_hash: i64()}; }
function _encryptedFileEmpty() { return {_: 'encryptedFileEmpty'}; }
function _encryptedFile() { return {_: 'encryptedFile', id: i64(), access_hash: i64(), size: i32(), dc_id: i32(), key_fingerprint: i32()}; }
function _inputEncryptedFileEmpty() { return {_: 'inputEncryptedFileEmpty'}; }
function _inputEncryptedFileUploaded() { return {_: 'inputEncryptedFileUploaded', id: i64(), parts: i32(), md5_checksum: str(), key_fingerprint: i32()}; }
function _inputEncryptedFile() { return {_: 'inputEncryptedFile', id: i64(), access_hash: i64()}; }
function _inputEncryptedFileLocation() { return {_: 'inputEncryptedFileLocation', id: i64(), access_hash: i64()}; }
function _encryptedMessage() { return {_: 'encryptedMessage', random_id: i64(), chat_id: i32(), date: i32(), bytes: bytes(), file: obj()}; }
function _encryptedMessageService() { return {_: 'encryptedMessageService', random_id: i64(), chat_id: i32(), date: i32(), bytes: bytes()}; }
function _messagesDhConfigNotModified() { return {_: 'messages.dhConfigNotModified', random: bytes()}; }
function _messagesDhConfig() { return {_: 'messages.dhConfig', g: i32(), p: bytes(), version: i32(), random: bytes()}; }
function _messagesSentEncryptedMessage() { return {_: 'messages.sentEncryptedMessage', date: i32()}; }
function _messagesSentEncryptedFile() { return {_: 'messages.sentEncryptedFile', date: i32(), file: obj()}; }
function _inputFileBig() { return {_: 'inputFileBig', id: i64(), parts: i32(), name: str()}; }
function _inputEncryptedFileBigUploaded() { return {_: 'inputEncryptedFileBigUploaded', id: i64(), parts: i32(), key_fingerprint: i32()}; }
function _updateChatParticipantAdd() { return {_: 'updateChatParticipantAdd', chat_id: i32(), user_id: i32(), inviter_id: i32(), date: i32(), version: i32()}; }
function _updateChatParticipantDelete() { return {_: 'updateChatParticipantDelete', chat_id: i32(), user_id: i32(), version: i32()}; }
function _updateDcOptions() { return {_: 'updateDcOptions', dc_options: vector(obj)}; }
function _inputMediaUploadedDocument() {
  const flags = i32();
  return {
    _: 'inputMediaUploadedDocument' as const,
    nosound_video: !!(flags & 0x8),
    file: obj(),
    thumb: flags & 0x4 ? obj() : undefined,
    mime_type: str(),
    attributes: vector(obj),
    stickers: flags & 0x1 ? vector(obj) : undefined,
    ttl_seconds: flags & 0x2 ? i32() : undefined,
  }
}
function _inputMediaDocument() {
  const flags = i32();
  return {
    _: 'inputMediaDocument' as const,
    id: obj(),
    ttl_seconds: flags & 0x1 ? i32() : undefined,
  }
}
function _messageMediaDocument() {
  const flags = i32();
  return {
    _: 'messageMediaDocument' as const,
    document: flags & 0x1 ? obj() : undefined,
    ttl_seconds: flags & 0x4 ? i32() : undefined,
  }
}
function _inputDocumentEmpty() { return {_: 'inputDocumentEmpty'}; }
function _inputDocument() { return {_: 'inputDocument', id: i64(), access_hash: i64(), file_reference: bytes()}; }
function _inputDocumentFileLocation() { return {_: 'inputDocumentFileLocation', id: i64(), access_hash: i64(), file_reference: bytes(), thumb_size: str()}; }
function _documentEmpty() { return {_: 'documentEmpty', id: i64()}; }
function _document() {
  const flags = i32();
  return {
    _: 'document' as const,
    id: i64(),
    access_hash: i64(),
    file_reference: bytes(),
    date: i32(),
    mime_type: str(),
    size: i32(),
    thumbs: flags & 0x1 ? vector(obj) : undefined,
    dc_id: i32(),
    attributes: vector(obj),
  }
}
function _helpSupport() { return {_: 'help.support', phone_number: str(), user: obj()}; }
function _notifyPeer() { return {_: 'notifyPeer', peer: obj()}; }
function _notifyUsers() { return {_: 'notifyUsers'}; }
function _notifyChats() { return {_: 'notifyChats'}; }
function _updateUserBlocked() { return {_: 'updateUserBlocked', user_id: i32(), blocked: obj()}; }
function _updateNotifySettings() { return {_: 'updateNotifySettings', peer: obj(), notify_settings: obj()}; }
function _sendMessageTypingAction() { return {_: 'sendMessageTypingAction'}; }
function _sendMessageCancelAction() { return {_: 'sendMessageCancelAction'}; }
function _sendMessageRecordVideoAction() { return {_: 'sendMessageRecordVideoAction'}; }
function _sendMessageUploadVideoAction() { return {_: 'sendMessageUploadVideoAction', progress: i32()}; }
function _sendMessageRecordAudioAction() { return {_: 'sendMessageRecordAudioAction'}; }
function _sendMessageUploadAudioAction() { return {_: 'sendMessageUploadAudioAction', progress: i32()}; }
function _sendMessageUploadPhotoAction() { return {_: 'sendMessageUploadPhotoAction', progress: i32()}; }
function _sendMessageUploadDocumentAction() { return {_: 'sendMessageUploadDocumentAction', progress: i32()}; }
function _sendMessageGeoLocationAction() { return {_: 'sendMessageGeoLocationAction'}; }
function _sendMessageChooseContactAction() { return {_: 'sendMessageChooseContactAction'}; }
function _contactsFound() { return {_: 'contacts.found', my_results: vector(obj), results: vector(obj), chats: vector(obj), users: vector(obj)}; }
function _updateServiceNotification() {
  const flags = i32();
  return {
    _: 'updateServiceNotification' as const,
    popup: !!(flags & 0x1),
    inbox_date: flags & 0x2 ? i32() : undefined,
    type: str(),
    message: str(),
    media: obj(),
    entities: vector(obj),
  }
}
function _userStatusRecently() { return {_: 'userStatusRecently'}; }
function _userStatusLastWeek() { return {_: 'userStatusLastWeek'}; }
function _userStatusLastMonth() { return {_: 'userStatusLastMonth'}; }
function _updatePrivacy() { return {_: 'updatePrivacy', key: obj(), rules: vector(obj)}; }
function _inputPrivacyKeyStatusTimestamp() { return {_: 'inputPrivacyKeyStatusTimestamp'}; }
function _privacyKeyStatusTimestamp() { return {_: 'privacyKeyStatusTimestamp'}; }
function _inputPrivacyValueAllowContacts() { return {_: 'inputPrivacyValueAllowContacts'}; }
function _inputPrivacyValueAllowAll() { return {_: 'inputPrivacyValueAllowAll'}; }
function _inputPrivacyValueAllowUsers() { return {_: 'inputPrivacyValueAllowUsers', users: vector(obj)}; }
function _inputPrivacyValueDisallowContacts() { return {_: 'inputPrivacyValueDisallowContacts'}; }
function _inputPrivacyValueDisallowAll() { return {_: 'inputPrivacyValueDisallowAll'}; }
function _inputPrivacyValueDisallowUsers() { return {_: 'inputPrivacyValueDisallowUsers', users: vector(obj)}; }
function _privacyValueAllowContacts() { return {_: 'privacyValueAllowContacts'}; }
function _privacyValueAllowAll() { return {_: 'privacyValueAllowAll'}; }
function _privacyValueAllowUsers() { return {_: 'privacyValueAllowUsers', users: vector(i32)}; }
function _privacyValueDisallowContacts() { return {_: 'privacyValueDisallowContacts'}; }
function _privacyValueDisallowAll() { return {_: 'privacyValueDisallowAll'}; }
function _privacyValueDisallowUsers() { return {_: 'privacyValueDisallowUsers', users: vector(i32)}; }
function _accountPrivacyRules() { return {_: 'account.privacyRules', rules: vector(obj), chats: vector(obj), users: vector(obj)}; }
function _accountDaysTTL() { return {_: 'accountDaysTTL', days: i32()}; }
function _updateUserPhone() { return {_: 'updateUserPhone', user_id: i32(), phone: str()}; }
function _documentAttributeImageSize() { return {_: 'documentAttributeImageSize', w: i32(), h: i32()}; }
function _documentAttributeAnimated() { return {_: 'documentAttributeAnimated'}; }
function _documentAttributeSticker() {
  const flags = i32();
  return {
    _: 'documentAttributeSticker' as const,
    mask: !!(flags & 0x2),
    alt: str(),
    stickerset: obj(),
    mask_coords: flags & 0x1 ? obj() : undefined,
  }
}
function _documentAttributeVideo() {
  const flags = i32();
  return {
    _: 'documentAttributeVideo' as const,
    round_message: !!(flags & 0x1),
    supports_streaming: !!(flags & 0x2),
    duration: i32(),
    w: i32(),
    h: i32(),
  }
}
function _documentAttributeAudio() {
  const flags = i32();
  return {
    _: 'documentAttributeAudio' as const,
    voice: !!(flags & 0x400),
    duration: i32(),
    title: flags & 0x1 ? str() : undefined,
    performer: flags & 0x2 ? str() : undefined,
    waveform: flags & 0x4 ? bytes() : undefined,
  }
}
function _documentAttributeFilename() { return {_: 'documentAttributeFilename', file_name: str()}; }
function _messagesStickersNotModified() { return {_: 'messages.stickersNotModified'}; }
function _messagesStickers() { return {_: 'messages.stickers', hash: i32(), stickers: vector(obj)}; }
function _stickerPack() { return {_: 'stickerPack', emoticon: str(), documents: vector(i64)}; }
function _messagesAllStickersNotModified() { return {_: 'messages.allStickersNotModified'}; }
function _messagesAllStickers() { return {_: 'messages.allStickers', hash: i32(), sets: vector(obj)}; }
function _updateReadHistoryInbox() {
  const flags = i32();
  return {
    _: 'updateReadHistoryInbox' as const,
    folder_id: flags & 0x1 ? i32() : undefined,
    peer: obj(),
    max_id: i32(),
    still_unread_count: i32(),
    pts: i32(),
    pts_count: i32(),
  }
}
function _updateReadHistoryOutbox() { return {_: 'updateReadHistoryOutbox', peer: obj(), max_id: i32(), pts: i32(), pts_count: i32()}; }
function _messagesAffectedMessages() { return {_: 'messages.affectedMessages', pts: i32(), pts_count: i32()}; }
function _updateWebPage() { return {_: 'updateWebPage', webpage: obj(), pts: i32(), pts_count: i32()}; }
function _webPageEmpty() { return {_: 'webPageEmpty', id: i64()}; }
function _webPagePending() { return {_: 'webPagePending', id: i64(), date: i32()}; }
function _webPage() {
  const flags = i32();
  return {
    _: 'webPage' as const,
    id: i64(),
    url: str(),
    display_url: str(),
    hash: i32(),
    type: flags & 0x1 ? str() : undefined,
    site_name: flags & 0x2 ? str() : undefined,
    title: flags & 0x4 ? str() : undefined,
    description: flags & 0x8 ? str() : undefined,
    photo: flags & 0x10 ? obj() : undefined,
    embed_url: flags & 0x20 ? str() : undefined,
    embed_type: flags & 0x20 ? str() : undefined,
    embed_width: flags & 0x40 ? i32() : undefined,
    embed_height: flags & 0x40 ? i32() : undefined,
    duration: flags & 0x80 ? i32() : undefined,
    author: flags & 0x100 ? str() : undefined,
    document: flags & 0x200 ? obj() : undefined,
    documents: flags & 0x800 ? vector(obj) : undefined,
    cached_page: flags & 0x400 ? obj() : undefined,
  }
}
function _messageMediaWebPage() { return {_: 'messageMediaWebPage', webpage: obj()}; }
function _authorization() {
  const flags = i32();
  return {
    _: 'authorization' as const,
    current: !!(flags & 0x1),
    official_app: !!(flags & 0x2),
    password_pending: !!(flags & 0x4),
    hash: i64(),
    device_model: str(),
    platform: str(),
    system_version: str(),
    api_id: i32(),
    app_name: str(),
    app_version: str(),
    date_created: i32(),
    date_active: i32(),
    ip: str(),
    country: str(),
    region: str(),
  }
}
function _accountAuthorizations() { return {_: 'account.authorizations', authorizations: vector(obj)}; }
function _accountPassword() {
  const flags = i32();
  return {
    _: 'account.password' as const,
    has_recovery: !!(flags & 0x1),
    has_secure_values: !!(flags & 0x2),
    has_password: !!(flags & 0x4),
    current_algo: flags & 0x4 ? obj() : undefined,
    srp_B: flags & 0x4 ? bytes() : undefined,
    srp_id: flags & 0x4 ? i64() : undefined,
    hint: flags & 0x8 ? str() : undefined,
    email_unconfirmed_pattern: flags & 0x10 ? str() : undefined,
    new_algo: obj(),
    new_secure_algo: obj(),
    secure_random: bytes(),
  }
}
function _accountPasswordSettings() {
  const flags = i32();
  return {
    _: 'account.passwordSettings' as const,
    email: flags & 0x1 ? str() : undefined,
    secure_settings: flags & 0x2 ? obj() : undefined,
  }
}
function _accountPasswordInputSettings() {
  const flags = i32();
  return {
    _: 'account.passwordInputSettings' as const,
    new_algo: flags & 0x1 ? obj() : undefined,
    new_password_hash: flags & 0x1 ? bytes() : undefined,
    hint: flags & 0x1 ? str() : undefined,
    email: flags & 0x2 ? str() : undefined,
    new_secure_settings: flags & 0x4 ? obj() : undefined,
  }
}
function _authPasswordRecovery() { return {_: 'auth.passwordRecovery', email_pattern: str()}; }
function _inputMediaVenue() { return {_: 'inputMediaVenue', geo_point: obj(), title: str(), address: str(), provider: str(), venue_id: str(), venue_type: str()}; }
function _messageMediaVenue() { return {_: 'messageMediaVenue', geo: obj(), title: str(), address: str(), provider: str(), venue_id: str(), venue_type: str()}; }
function _receivedNotifyMessage() { return {_: 'receivedNotifyMessage', id: i32(), flags: i32()}; }
function _chatInviteEmpty() { return {_: 'chatInviteEmpty'}; }
function _chatInviteExported() { return {_: 'chatInviteExported', link: str()}; }
function _chatInviteAlready() { return {_: 'chatInviteAlready', chat: obj()}; }
function _chatInvite() {
  const flags = i32();
  return {
    _: 'chatInvite' as const,
    channel: !!(flags & 0x1),
    broadcast: !!(flags & 0x2),
    public: !!(flags & 0x4),
    megagroup: !!(flags & 0x8),
    title: str(),
    photo: obj(),
    participants_count: i32(),
    participants: flags & 0x10 ? vector(obj) : undefined,
  }
}
function _messageActionChatJoinedByLink() { return {_: 'messageActionChatJoinedByLink', inviter_id: i32()}; }
function _updateReadMessagesContents() { return {_: 'updateReadMessagesContents', messages: vector(i32), pts: i32(), pts_count: i32()}; }
function _inputStickerSetEmpty() { return {_: 'inputStickerSetEmpty'}; }
function _inputStickerSetID() { return {_: 'inputStickerSetID', id: i64(), access_hash: i64()}; }
function _inputStickerSetShortName() { return {_: 'inputStickerSetShortName', short_name: str()}; }
function _stickerSet() {
  const flags = i32();
  return {
    _: 'stickerSet' as const,
    archived: !!(flags & 0x2),
    official: !!(flags & 0x4),
    masks: !!(flags & 0x8),
    animated: !!(flags & 0x20),
    installed_date: flags & 0x1 ? i32() : undefined,
    id: i64(),
    access_hash: i64(),
    title: str(),
    short_name: str(),
    thumb: flags & 0x10 ? obj() : undefined,
    thumb_dc_id: flags & 0x10 ? i32() : undefined,
    count: i32(),
    hash: i32(),
  }
}
function _messagesStickerSet() { return {_: 'messages.stickerSet', set: obj(), packs: vector(obj), documents: vector(obj)}; }
function _user() {
  const flags = i32();
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
    id: i32(),
    access_hash: flags & 0x1 ? i64() : undefined,
    first_name: flags & 0x2 ? str() : undefined,
    last_name: flags & 0x4 ? str() : undefined,
    username: flags & 0x8 ? str() : undefined,
    phone: flags & 0x10 ? str() : undefined,
    photo: flags & 0x20 ? obj() : undefined,
    status: flags & 0x40 ? obj() : undefined,
    bot_info_version: flags & 0x4000 ? i32() : undefined,
    restriction_reason: flags & 0x40000 ? vector(obj) : undefined,
    bot_inline_placeholder: flags & 0x80000 ? str() : undefined,
    lang_code: flags & 0x400000 ? str() : undefined,
  }
}
function _botCommand() { return {_: 'botCommand', command: str(), description: str()}; }
function _botInfo() { return {_: 'botInfo', user_id: i32(), description: str(), commands: vector(obj)}; }
function _keyboardButton() { return {_: 'keyboardButton', text: str()}; }
function _keyboardButtonRow() { return {_: 'keyboardButtonRow', buttons: vector(obj)}; }
function _replyKeyboardHide() {
  const flags = i32();
  return {
    _: 'replyKeyboardHide' as const,
    selective: !!(flags & 0x4),
  }
}
function _replyKeyboardForceReply() {
  const flags = i32();
  return {
    _: 'replyKeyboardForceReply' as const,
    single_use: !!(flags & 0x2),
    selective: !!(flags & 0x4),
  }
}
function _replyKeyboardMarkup() {
  const flags = i32();
  return {
    _: 'replyKeyboardMarkup' as const,
    resize: !!(flags & 0x1),
    single_use: !!(flags & 0x2),
    selective: !!(flags & 0x4),
    rows: vector(obj),
  }
}
function _inputPeerUser() { return {_: 'inputPeerUser', user_id: i32(), access_hash: i64()}; }
function _inputUser() { return {_: 'inputUser', user_id: i32(), access_hash: i64()}; }
function _messageEntityUnknown() { return {_: 'messageEntityUnknown', offset: i32(), length: i32()}; }
function _messageEntityMention() { return {_: 'messageEntityMention', offset: i32(), length: i32()}; }
function _messageEntityHashtag() { return {_: 'messageEntityHashtag', offset: i32(), length: i32()}; }
function _messageEntityBotCommand() { return {_: 'messageEntityBotCommand', offset: i32(), length: i32()}; }
function _messageEntityUrl() { return {_: 'messageEntityUrl', offset: i32(), length: i32()}; }
function _messageEntityEmail() { return {_: 'messageEntityEmail', offset: i32(), length: i32()}; }
function _messageEntityBold() { return {_: 'messageEntityBold', offset: i32(), length: i32()}; }
function _messageEntityItalic() { return {_: 'messageEntityItalic', offset: i32(), length: i32()}; }
function _messageEntityCode() { return {_: 'messageEntityCode', offset: i32(), length: i32()}; }
function _messageEntityPre() { return {_: 'messageEntityPre', offset: i32(), length: i32(), language: str()}; }
function _messageEntityTextUrl() { return {_: 'messageEntityTextUrl', offset: i32(), length: i32(), url: str()}; }
function _updateShortSentMessage() {
  const flags = i32();
  return {
    _: 'updateShortSentMessage' as const,
    out: !!(flags & 0x2),
    id: i32(),
    pts: i32(),
    pts_count: i32(),
    date: i32(),
    media: flags & 0x200 ? obj() : undefined,
    entities: flags & 0x80 ? vector(obj) : undefined,
  }
}
function _inputChannelEmpty() { return {_: 'inputChannelEmpty'}; }
function _inputChannel() { return {_: 'inputChannel', channel_id: i32(), access_hash: i64()}; }
function _peerChannel() { return {_: 'peerChannel', channel_id: i32()}; }
function _inputPeerChannel() { return {_: 'inputPeerChannel', channel_id: i32(), access_hash: i64()}; }
function _channel() {
  const flags = i32();
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
    id: i32(),
    access_hash: flags & 0x2000 ? i64() : undefined,
    title: str(),
    username: flags & 0x40 ? str() : undefined,
    photo: obj(),
    date: i32(),
    version: i32(),
    restriction_reason: flags & 0x200 ? vector(obj) : undefined,
    admin_rights: flags & 0x4000 ? obj() : undefined,
    banned_rights: flags & 0x8000 ? obj() : undefined,
    default_banned_rights: flags & 0x40000 ? obj() : undefined,
    participants_count: flags & 0x20000 ? i32() : undefined,
  }
}
function _channelForbidden() {
  const flags = i32();
  return {
    _: 'channelForbidden' as const,
    broadcast: !!(flags & 0x20),
    megagroup: !!(flags & 0x100),
    id: i32(),
    access_hash: i64(),
    title: str(),
    until_date: flags & 0x10000 ? i32() : undefined,
  }
}
function _contactsResolvedPeer() { return {_: 'contacts.resolvedPeer', peer: obj(), chats: vector(obj), users: vector(obj)}; }
function _channelFull() {
  const flags = i32();
  return {
    _: 'channelFull' as const,
    can_view_participants: !!(flags & 0x8),
    can_set_username: !!(flags & 0x40),
    can_set_stickers: !!(flags & 0x80),
    hidden_prehistory: !!(flags & 0x400),
    can_view_stats: !!(flags & 0x1000),
    can_set_location: !!(flags & 0x10000),
    has_scheduled: !!(flags & 0x80000),
    id: i32(),
    about: str(),
    participants_count: flags & 0x1 ? i32() : undefined,
    admins_count: flags & 0x2 ? i32() : undefined,
    kicked_count: flags & 0x4 ? i32() : undefined,
    banned_count: flags & 0x4 ? i32() : undefined,
    online_count: flags & 0x2000 ? i32() : undefined,
    read_inbox_max_id: i32(),
    read_outbox_max_id: i32(),
    unread_count: i32(),
    chat_photo: obj(),
    notify_settings: obj(),
    exported_invite: obj(),
    bot_info: vector(obj),
    migrated_from_chat_id: flags & 0x10 ? i32() : undefined,
    migrated_from_max_id: flags & 0x10 ? i32() : undefined,
    pinned_msg_id: flags & 0x20 ? i32() : undefined,
    stickerset: flags & 0x100 ? obj() : undefined,
    available_min_id: flags & 0x200 ? i32() : undefined,
    folder_id: flags & 0x800 ? i32() : undefined,
    linked_chat_id: flags & 0x4000 ? i32() : undefined,
    location: flags & 0x8000 ? obj() : undefined,
    slowmode_seconds: flags & 0x20000 ? i32() : undefined,
    slowmode_next_send_date: flags & 0x40000 ? i32() : undefined,
    pts: i32(),
  }
}
function _messageRange() { return {_: 'messageRange', min_id: i32(), max_id: i32()}; }
function _messagesChannelMessages() {
  const flags = i32();
  return {
    _: 'messages.channelMessages' as const,
    inexact: !!(flags & 0x2),
    pts: i32(),
    count: i32(),
    messages: vector(obj),
    chats: vector(obj),
    users: vector(obj),
  }
}
function _messageActionChannelCreate() { return {_: 'messageActionChannelCreate', title: str()}; }
function _updateChannelTooLong() {
  const flags = i32();
  return {
    _: 'updateChannelTooLong' as const,
    channel_id: i32(),
    pts: flags & 0x1 ? i32() : undefined,
  }
}
function _updateChannel() { return {_: 'updateChannel', channel_id: i32()}; }
function _updateNewChannelMessage() { return {_: 'updateNewChannelMessage', message: obj(), pts: i32(), pts_count: i32()}; }
function _updateReadChannelInbox() {
  const flags = i32();
  return {
    _: 'updateReadChannelInbox' as const,
    folder_id: flags & 0x1 ? i32() : undefined,
    channel_id: i32(),
    max_id: i32(),
    still_unread_count: i32(),
    pts: i32(),
  }
}
function _updateDeleteChannelMessages() { return {_: 'updateDeleteChannelMessages', channel_id: i32(), messages: vector(i32), pts: i32(), pts_count: i32()}; }
function _updateChannelMessageViews() { return {_: 'updateChannelMessageViews', channel_id: i32(), id: i32(), views: i32()}; }
function _updatesChannelDifferenceEmpty() {
  const flags = i32();
  return {
    _: 'updates.channelDifferenceEmpty' as const,
    final: !!(flags & 0x1),
    pts: i32(),
    timeout: flags & 0x2 ? i32() : undefined,
  }
}
function _updatesChannelDifferenceTooLong() {
  const flags = i32();
  return {
    _: 'updates.channelDifferenceTooLong' as const,
    final: !!(flags & 0x1),
    timeout: flags & 0x2 ? i32() : undefined,
    dialog: obj(),
    messages: vector(obj),
    chats: vector(obj),
    users: vector(obj),
  }
}
function _updatesChannelDifference() {
  const flags = i32();
  return {
    _: 'updates.channelDifference' as const,
    final: !!(flags & 0x1),
    pts: i32(),
    timeout: flags & 0x2 ? i32() : undefined,
    new_messages: vector(obj),
    other_updates: vector(obj),
    chats: vector(obj),
    users: vector(obj),
  }
}
function _channelMessagesFilterEmpty() { return {_: 'channelMessagesFilterEmpty'}; }
function _channelMessagesFilter() {
  const flags = i32();
  return {
    _: 'channelMessagesFilter' as const,
    exclude_new_messages: !!(flags & 0x2),
    ranges: vector(obj),
  }
}
function _channelParticipant() { return {_: 'channelParticipant', user_id: i32(), date: i32()}; }
function _channelParticipantSelf() { return {_: 'channelParticipantSelf', user_id: i32(), inviter_id: i32(), date: i32()}; }
function _channelParticipantCreator() {
  const flags = i32();
  return {
    _: 'channelParticipantCreator' as const,
    user_id: i32(),
    rank: flags & 0x1 ? str() : undefined,
  }
}
function _channelParticipantsRecent() { return {_: 'channelParticipantsRecent'}; }
function _channelParticipantsAdmins() { return {_: 'channelParticipantsAdmins'}; }
function _channelParticipantsKicked() { return {_: 'channelParticipantsKicked', q: str()}; }
function _channelsChannelParticipants() { return {_: 'channels.channelParticipants', count: i32(), participants: vector(obj), users: vector(obj)}; }
function _channelsChannelParticipant() { return {_: 'channels.channelParticipant', participant: obj(), users: vector(obj)}; }
function _chatParticipantCreator() { return {_: 'chatParticipantCreator', user_id: i32()}; }
function _chatParticipantAdmin() { return {_: 'chatParticipantAdmin', user_id: i32(), inviter_id: i32(), date: i32()}; }
function _updateChatParticipantAdmin() { return {_: 'updateChatParticipantAdmin', chat_id: i32(), user_id: i32(), is_admin: obj(), version: i32()}; }
function _messageActionChatMigrateTo() { return {_: 'messageActionChatMigrateTo', channel_id: i32()}; }
function _messageActionChannelMigrateFrom() { return {_: 'messageActionChannelMigrateFrom', title: str(), chat_id: i32()}; }
function _channelParticipantsBots() { return {_: 'channelParticipantsBots'}; }
function _helpTermsOfService() {
  const flags = i32();
  return {
    _: 'help.termsOfService' as const,
    popup: !!(flags & 0x1),
    id: obj(),
    text: str(),
    entities: vector(obj),
    min_age_confirm: flags & 0x2 ? i32() : undefined,
  }
}
function _updateNewStickerSet() { return {_: 'updateNewStickerSet', stickerset: obj()}; }
function _updateStickerSetsOrder() {
  const flags = i32();
  return {
    _: 'updateStickerSetsOrder' as const,
    masks: !!(flags & 0x1),
    order: vector(i64),
  }
}
function _updateStickerSets() { return {_: 'updateStickerSets'}; }
function _foundGif() { return {_: 'foundGif', url: str(), thumb_url: str(), content_url: str(), content_type: str(), w: i32(), h: i32()}; }
function _foundGifCached() { return {_: 'foundGifCached', url: str(), photo: obj(), document: obj()}; }
function _inputMediaGifExternal() { return {_: 'inputMediaGifExternal', url: str(), q: str()}; }
function _messagesFoundGifs() { return {_: 'messages.foundGifs', next_offset: i32(), results: vector(obj)}; }
function _messagesSavedGifsNotModified() { return {_: 'messages.savedGifsNotModified'}; }
function _messagesSavedGifs() { return {_: 'messages.savedGifs', hash: i32(), gifs: vector(obj)}; }
function _updateSavedGifs() { return {_: 'updateSavedGifs'}; }
function _inputBotInlineMessageMediaAuto() {
  const flags = i32();
  return {
    _: 'inputBotInlineMessageMediaAuto' as const,
    message: str(),
    entities: flags & 0x2 ? vector(obj) : undefined,
    reply_markup: flags & 0x4 ? obj() : undefined,
  }
}
function _inputBotInlineMessageText() {
  const flags = i32();
  return {
    _: 'inputBotInlineMessageText' as const,
    no_webpage: !!(flags & 0x1),
    message: str(),
    entities: flags & 0x2 ? vector(obj) : undefined,
    reply_markup: flags & 0x4 ? obj() : undefined,
  }
}
function _inputBotInlineResult() {
  const flags = i32();
  return {
    _: 'inputBotInlineResult' as const,
    id: str(),
    type: str(),
    title: flags & 0x2 ? str() : undefined,
    description: flags & 0x4 ? str() : undefined,
    url: flags & 0x8 ? str() : undefined,
    thumb: flags & 0x10 ? obj() : undefined,
    content: flags & 0x20 ? obj() : undefined,
    send_message: obj(),
  }
}
function _botInlineMessageMediaAuto() {
  const flags = i32();
  return {
    _: 'botInlineMessageMediaAuto' as const,
    message: str(),
    entities: flags & 0x2 ? vector(obj) : undefined,
    reply_markup: flags & 0x4 ? obj() : undefined,
  }
}
function _botInlineMessageText() {
  const flags = i32();
  return {
    _: 'botInlineMessageText' as const,
    no_webpage: !!(flags & 0x1),
    message: str(),
    entities: flags & 0x2 ? vector(obj) : undefined,
    reply_markup: flags & 0x4 ? obj() : undefined,
  }
}
function _botInlineResult() {
  const flags = i32();
  return {
    _: 'botInlineResult' as const,
    id: str(),
    type: str(),
    title: flags & 0x2 ? str() : undefined,
    description: flags & 0x4 ? str() : undefined,
    url: flags & 0x8 ? str() : undefined,
    thumb: flags & 0x10 ? obj() : undefined,
    content: flags & 0x20 ? obj() : undefined,
    send_message: obj(),
  }
}
function _messagesBotResults() {
  const flags = i32();
  return {
    _: 'messages.botResults' as const,
    gallery: !!(flags & 0x1),
    query_id: i64(),
    next_offset: flags & 0x2 ? str() : undefined,
    switch_pm: flags & 0x4 ? obj() : undefined,
    results: vector(obj),
    cache_time: i32(),
    users: vector(obj),
  }
}
function _updateBotInlineQuery() {
  const flags = i32();
  return {
    _: 'updateBotInlineQuery' as const,
    query_id: i64(),
    user_id: i32(),
    query: str(),
    geo: flags & 0x1 ? obj() : undefined,
    offset: str(),
  }
}
function _updateBotInlineSend() {
  const flags = i32();
  return {
    _: 'updateBotInlineSend' as const,
    user_id: i32(),
    query: str(),
    geo: flags & 0x1 ? obj() : undefined,
    id: str(),
    msg_id: flags & 0x2 ? obj() : undefined,
  }
}
function _inputMessagesFilterVoice() { return {_: 'inputMessagesFilterVoice'}; }
function _inputMessagesFilterMusic() { return {_: 'inputMessagesFilterMusic'}; }
function _inputPrivacyKeyChatInvite() { return {_: 'inputPrivacyKeyChatInvite'}; }
function _privacyKeyChatInvite() { return {_: 'privacyKeyChatInvite'}; }
function _exportedMessageLink() { return {_: 'exportedMessageLink', link: str(), html: str()}; }
function _messageFwdHeader() {
  const flags = i32();
  return {
    _: 'messageFwdHeader' as const,
    from_id: flags & 0x1 ? i32() : undefined,
    from_name: flags & 0x20 ? str() : undefined,
    date: i32(),
    channel_id: flags & 0x2 ? i32() : undefined,
    channel_post: flags & 0x4 ? i32() : undefined,
    post_author: flags & 0x8 ? str() : undefined,
    saved_from_peer: flags & 0x10 ? obj() : undefined,
    saved_from_msg_id: flags & 0x10 ? i32() : undefined,
  }
}
function _updateEditChannelMessage() { return {_: 'updateEditChannelMessage', message: obj(), pts: i32(), pts_count: i32()}; }
function _updateChannelPinnedMessage() { return {_: 'updateChannelPinnedMessage', channel_id: i32(), id: i32()}; }
function _messageActionPinMessage() { return {_: 'messageActionPinMessage'}; }
function _authCodeTypeSms() { return {_: 'auth.codeTypeSms'}; }
function _authCodeTypeCall() { return {_: 'auth.codeTypeCall'}; }
function _authCodeTypeFlashCall() { return {_: 'auth.codeTypeFlashCall'}; }
function _authSentCodeTypeApp() { return {_: 'auth.sentCodeTypeApp', length: i32()}; }
function _authSentCodeTypeSms() { return {_: 'auth.sentCodeTypeSms', length: i32()}; }
function _authSentCodeTypeCall() { return {_: 'auth.sentCodeTypeCall', length: i32()}; }
function _authSentCodeTypeFlashCall() { return {_: 'auth.sentCodeTypeFlashCall', pattern: str()}; }
function _keyboardButtonUrl() { return {_: 'keyboardButtonUrl', text: str(), url: str()}; }
function _keyboardButtonCallback() { return {_: 'keyboardButtonCallback', text: str(), data: bytes()}; }
function _keyboardButtonRequestPhone() { return {_: 'keyboardButtonRequestPhone', text: str()}; }
function _keyboardButtonRequestGeoLocation() { return {_: 'keyboardButtonRequestGeoLocation', text: str()}; }
function _keyboardButtonSwitchInline() {
  const flags = i32();
  return {
    _: 'keyboardButtonSwitchInline' as const,
    same_peer: !!(flags & 0x1),
    text: str(),
    query: str(),
  }
}
function _replyInlineMarkup() { return {_: 'replyInlineMarkup', rows: vector(obj)}; }
function _messagesBotCallbackAnswer() {
  const flags = i32();
  return {
    _: 'messages.botCallbackAnswer' as const,
    alert: !!(flags & 0x2),
    has_url: !!(flags & 0x8),
    native_ui: !!(flags & 0x10),
    message: flags & 0x1 ? str() : undefined,
    url: flags & 0x4 ? str() : undefined,
    cache_time: i32(),
  }
}
function _updateBotCallbackQuery() {
  const flags = i32();
  return {
    _: 'updateBotCallbackQuery' as const,
    query_id: i64(),
    user_id: i32(),
    peer: obj(),
    msg_id: i32(),
    chat_instance: i64(),
    data: flags & 0x1 ? bytes() : undefined,
    game_short_name: flags & 0x2 ? str() : undefined,
  }
}
function _messagesMessageEditData() {
  const flags = i32();
  return {
    _: 'messages.messageEditData' as const,
    caption: !!(flags & 0x1),
  }
}
function _updateEditMessage() { return {_: 'updateEditMessage', message: obj(), pts: i32(), pts_count: i32()}; }
function _inputBotInlineMessageMediaGeo() {
  const flags = i32();
  return {
    _: 'inputBotInlineMessageMediaGeo' as const,
    geo_point: obj(),
    period: i32(),
    reply_markup: flags & 0x4 ? obj() : undefined,
  }
}
function _inputBotInlineMessageMediaVenue() {
  const flags = i32();
  return {
    _: 'inputBotInlineMessageMediaVenue' as const,
    geo_point: obj(),
    title: str(),
    address: str(),
    provider: str(),
    venue_id: str(),
    venue_type: str(),
    reply_markup: flags & 0x4 ? obj() : undefined,
  }
}
function _inputBotInlineMessageMediaContact() {
  const flags = i32();
  return {
    _: 'inputBotInlineMessageMediaContact' as const,
    phone_number: str(),
    first_name: str(),
    last_name: str(),
    vcard: str(),
    reply_markup: flags & 0x4 ? obj() : undefined,
  }
}
function _botInlineMessageMediaGeo() {
  const flags = i32();
  return {
    _: 'botInlineMessageMediaGeo' as const,
    geo: obj(),
    period: i32(),
    reply_markup: flags & 0x4 ? obj() : undefined,
  }
}
function _botInlineMessageMediaVenue() {
  const flags = i32();
  return {
    _: 'botInlineMessageMediaVenue' as const,
    geo: obj(),
    title: str(),
    address: str(),
    provider: str(),
    venue_id: str(),
    venue_type: str(),
    reply_markup: flags & 0x4 ? obj() : undefined,
  }
}
function _botInlineMessageMediaContact() {
  const flags = i32();
  return {
    _: 'botInlineMessageMediaContact' as const,
    phone_number: str(),
    first_name: str(),
    last_name: str(),
    vcard: str(),
    reply_markup: flags & 0x4 ? obj() : undefined,
  }
}
function _inputBotInlineResultPhoto() { return {_: 'inputBotInlineResultPhoto', id: str(), type: str(), photo: obj(), send_message: obj()}; }
function _inputBotInlineResultDocument() {
  const flags = i32();
  return {
    _: 'inputBotInlineResultDocument' as const,
    id: str(),
    type: str(),
    title: flags & 0x2 ? str() : undefined,
    description: flags & 0x4 ? str() : undefined,
    document: obj(),
    send_message: obj(),
  }
}
function _botInlineMediaResult() {
  const flags = i32();
  return {
    _: 'botInlineMediaResult' as const,
    id: str(),
    type: str(),
    photo: flags & 0x1 ? obj() : undefined,
    document: flags & 0x2 ? obj() : undefined,
    title: flags & 0x4 ? str() : undefined,
    description: flags & 0x8 ? str() : undefined,
    send_message: obj(),
  }
}
function _inputBotInlineMessageID() { return {_: 'inputBotInlineMessageID', dc_id: i32(), id: i64(), access_hash: i64()}; }
function _updateInlineBotCallbackQuery() {
  const flags = i32();
  return {
    _: 'updateInlineBotCallbackQuery' as const,
    query_id: i64(),
    user_id: i32(),
    msg_id: obj(),
    chat_instance: i64(),
    data: flags & 0x1 ? bytes() : undefined,
    game_short_name: flags & 0x2 ? str() : undefined,
  }
}
function _inlineBotSwitchPM() { return {_: 'inlineBotSwitchPM', text: str(), start_param: str()}; }
function _messagesPeerDialogs() { return {_: 'messages.peerDialogs', dialogs: vector(obj), messages: vector(obj), chats: vector(obj), users: vector(obj), state: obj()}; }
function _topPeer() { return {_: 'topPeer', peer: obj(), rating: f64()}; }
function _topPeerCategoryBotsPM() { return {_: 'topPeerCategoryBotsPM'}; }
function _topPeerCategoryBotsInline() { return {_: 'topPeerCategoryBotsInline'}; }
function _topPeerCategoryCorrespondents() { return {_: 'topPeerCategoryCorrespondents'}; }
function _topPeerCategoryGroups() { return {_: 'topPeerCategoryGroups'}; }
function _topPeerCategoryChannels() { return {_: 'topPeerCategoryChannels'}; }
function _topPeerCategoryPeers() { return {_: 'topPeerCategoryPeers', category: obj(), count: i32(), peers: vector(obj)}; }
function _contactsTopPeersNotModified() { return {_: 'contacts.topPeersNotModified'}; }
function _contactsTopPeers() { return {_: 'contacts.topPeers', categories: vector(obj), chats: vector(obj), users: vector(obj)}; }
function _messageEntityMentionName() { return {_: 'messageEntityMentionName', offset: i32(), length: i32(), user_id: i32()}; }
function _inputMessageEntityMentionName() { return {_: 'inputMessageEntityMentionName', offset: i32(), length: i32(), user_id: obj()}; }
function _inputMessagesFilterChatPhotos() { return {_: 'inputMessagesFilterChatPhotos'}; }
function _updateReadChannelOutbox() { return {_: 'updateReadChannelOutbox', channel_id: i32(), max_id: i32()}; }
function _updateDraftMessage() { return {_: 'updateDraftMessage', peer: obj(), draft: obj()}; }
function _draftMessageEmpty() {
  const flags = i32();
  return {
    _: 'draftMessageEmpty' as const,
    date: flags & 0x1 ? i32() : undefined,
  }
}
function _draftMessage() {
  const flags = i32();
  return {
    _: 'draftMessage' as const,
    no_webpage: !!(flags & 0x2),
    reply_to_msg_id: flags & 0x1 ? i32() : undefined,
    message: str(),
    entities: flags & 0x8 ? vector(obj) : undefined,
    date: i32(),
  }
}
function _messageActionHistoryClear() { return {_: 'messageActionHistoryClear'}; }
function _messagesFeaturedStickersNotModified() { return {_: 'messages.featuredStickersNotModified'}; }
function _messagesFeaturedStickers() { return {_: 'messages.featuredStickers', hash: i32(), sets: vector(obj), unread: vector(i64)}; }
function _updateReadFeaturedStickers() { return {_: 'updateReadFeaturedStickers'}; }
function _messagesRecentStickersNotModified() { return {_: 'messages.recentStickersNotModified'}; }
function _messagesRecentStickers() { return {_: 'messages.recentStickers', hash: i32(), packs: vector(obj), stickers: vector(obj), dates: vector(i32)}; }
function _updateRecentStickers() { return {_: 'updateRecentStickers'}; }
function _messagesArchivedStickers() { return {_: 'messages.archivedStickers', count: i32(), sets: vector(obj)}; }
function _messagesStickerSetInstallResultSuccess() { return {_: 'messages.stickerSetInstallResultSuccess'}; }
function _messagesStickerSetInstallResultArchive() { return {_: 'messages.stickerSetInstallResultArchive', sets: vector(obj)}; }
function _stickerSetCovered() { return {_: 'stickerSetCovered', set: obj(), cover: obj()}; }
function _updateConfig() { return {_: 'updateConfig'}; }
function _updatePtsChanged() { return {_: 'updatePtsChanged'}; }
function _inputMediaPhotoExternal() {
  const flags = i32();
  return {
    _: 'inputMediaPhotoExternal' as const,
    url: str(),
    ttl_seconds: flags & 0x1 ? i32() : undefined,
  }
}
function _inputMediaDocumentExternal() {
  const flags = i32();
  return {
    _: 'inputMediaDocumentExternal' as const,
    url: str(),
    ttl_seconds: flags & 0x1 ? i32() : undefined,
  }
}
function _stickerSetMultiCovered() { return {_: 'stickerSetMultiCovered', set: obj(), covers: vector(obj)}; }
function _maskCoords() { return {_: 'maskCoords', n: i32(), x: f64(), y: f64(), zoom: f64()}; }
function _documentAttributeHasStickers() { return {_: 'documentAttributeHasStickers'}; }
function _inputStickeredMediaPhoto() { return {_: 'inputStickeredMediaPhoto', id: obj()}; }
function _inputStickeredMediaDocument() { return {_: 'inputStickeredMediaDocument', id: obj()}; }
function _game() {
  const flags = i32();
  return {
    _: 'game' as const,
    id: i64(),
    access_hash: i64(),
    short_name: str(),
    title: str(),
    description: str(),
    photo: obj(),
    document: flags & 0x1 ? obj() : undefined,
  }
}
function _inputBotInlineResultGame() { return {_: 'inputBotInlineResultGame', id: str(), short_name: str(), send_message: obj()}; }
function _inputBotInlineMessageGame() {
  const flags = i32();
  return {
    _: 'inputBotInlineMessageGame' as const,
    reply_markup: flags & 0x4 ? obj() : undefined,
  }
}
function _messageMediaGame() { return {_: 'messageMediaGame', game: obj()}; }
function _inputMediaGame() { return {_: 'inputMediaGame', id: obj()}; }
function _inputGameID() { return {_: 'inputGameID', id: i64(), access_hash: i64()}; }
function _inputGameShortName() { return {_: 'inputGameShortName', bot_id: obj(), short_name: str()}; }
function _keyboardButtonGame() { return {_: 'keyboardButtonGame', text: str()}; }
function _messageActionGameScore() { return {_: 'messageActionGameScore', game_id: i64(), score: i32()}; }
function _highScore() { return {_: 'highScore', pos: i32(), user_id: i32(), score: i32()}; }
function _messagesHighScores() { return {_: 'messages.highScores', scores: vector(obj), users: vector(obj)}; }
function _updatesDifferenceTooLong() { return {_: 'updates.differenceTooLong', pts: i32()}; }
function _updateChannelWebPage() { return {_: 'updateChannelWebPage', channel_id: i32(), webpage: obj(), pts: i32(), pts_count: i32()}; }
function _messagesChatsSlice() { return {_: 'messages.chatsSlice', count: i32(), chats: vector(obj)}; }
function _textEmpty() { return {_: 'textEmpty'}; }
function _textPlain() { return {_: 'textPlain', text: str()}; }
function _textBold() { return {_: 'textBold', text: obj()}; }
function _textItalic() { return {_: 'textItalic', text: obj()}; }
function _textUnderline() { return {_: 'textUnderline', text: obj()}; }
function _textStrike() { return {_: 'textStrike', text: obj()}; }
function _textFixed() { return {_: 'textFixed', text: obj()}; }
function _textUrl() { return {_: 'textUrl', text: obj(), url: str(), webpage_id: i64()}; }
function _textEmail() { return {_: 'textEmail', text: obj(), email: str()}; }
function _textConcat() { return {_: 'textConcat', texts: vector(obj)}; }
function _pageBlockUnsupported() { return {_: 'pageBlockUnsupported'}; }
function _pageBlockTitle() { return {_: 'pageBlockTitle', text: obj()}; }
function _pageBlockSubtitle() { return {_: 'pageBlockSubtitle', text: obj()}; }
function _pageBlockAuthorDate() { return {_: 'pageBlockAuthorDate', author: obj(), published_date: i32()}; }
function _pageBlockHeader() { return {_: 'pageBlockHeader', text: obj()}; }
function _pageBlockSubheader() { return {_: 'pageBlockSubheader', text: obj()}; }
function _pageBlockParagraph() { return {_: 'pageBlockParagraph', text: obj()}; }
function _pageBlockPreformatted() { return {_: 'pageBlockPreformatted', text: obj(), language: str()}; }
function _pageBlockFooter() { return {_: 'pageBlockFooter', text: obj()}; }
function _pageBlockDivider() { return {_: 'pageBlockDivider'}; }
function _pageBlockAnchor() { return {_: 'pageBlockAnchor', name: str()}; }
function _pageBlockList() { return {_: 'pageBlockList', items: vector(obj)}; }
function _pageBlockBlockquote() { return {_: 'pageBlockBlockquote', text: obj(), caption: obj()}; }
function _pageBlockPullquote() { return {_: 'pageBlockPullquote', text: obj(), caption: obj()}; }
function _pageBlockPhoto() {
  const flags = i32();
  return {
    _: 'pageBlockPhoto' as const,
    photo_id: i64(),
    caption: obj(),
    url: flags & 0x1 ? str() : undefined,
    webpage_id: flags & 0x1 ? i64() : undefined,
  }
}
function _pageBlockVideo() {
  const flags = i32();
  return {
    _: 'pageBlockVideo' as const,
    autoplay: !!(flags & 0x1),
    loop: !!(flags & 0x2),
    video_id: i64(),
    caption: obj(),
  }
}
function _pageBlockCover() { return {_: 'pageBlockCover', cover: obj()}; }
function _pageBlockEmbed() {
  const flags = i32();
  return {
    _: 'pageBlockEmbed' as const,
    full_width: !!(flags & 0x1),
    allow_scrolling: !!(flags & 0x8),
    url: flags & 0x2 ? str() : undefined,
    html: flags & 0x4 ? str() : undefined,
    poster_photo_id: flags & 0x10 ? i64() : undefined,
    w: flags & 0x20 ? i32() : undefined,
    h: flags & 0x20 ? i32() : undefined,
    caption: obj(),
  }
}
function _pageBlockEmbedPost() { return {_: 'pageBlockEmbedPost', url: str(), webpage_id: i64(), author_photo_id: i64(), author: str(), date: i32(), blocks: vector(obj), caption: obj()}; }
function _pageBlockCollage() { return {_: 'pageBlockCollage', items: vector(obj), caption: obj()}; }
function _pageBlockSlideshow() { return {_: 'pageBlockSlideshow', items: vector(obj), caption: obj()}; }
function _webPageNotModified() { return {_: 'webPageNotModified'}; }
function _inputPrivacyKeyPhoneCall() { return {_: 'inputPrivacyKeyPhoneCall'}; }
function _privacyKeyPhoneCall() { return {_: 'privacyKeyPhoneCall'}; }
function _sendMessageGamePlayAction() { return {_: 'sendMessageGamePlayAction'}; }
function _phoneCallDiscardReasonMissed() { return {_: 'phoneCallDiscardReasonMissed'}; }
function _phoneCallDiscardReasonDisconnect() { return {_: 'phoneCallDiscardReasonDisconnect'}; }
function _phoneCallDiscardReasonHangup() { return {_: 'phoneCallDiscardReasonHangup'}; }
function _phoneCallDiscardReasonBusy() { return {_: 'phoneCallDiscardReasonBusy'}; }
function _updateDialogPinned() {
  const flags = i32();
  return {
    _: 'updateDialogPinned' as const,
    pinned: !!(flags & 0x1),
    folder_id: flags & 0x2 ? i32() : undefined,
    peer: obj(),
  }
}
function _updatePinnedDialogs() {
  const flags = i32();
  return {
    _: 'updatePinnedDialogs' as const,
    folder_id: flags & 0x2 ? i32() : undefined,
    order: flags & 0x1 ? vector(obj) : undefined,
  }
}
function _dataJSON() { return {_: 'dataJSON', data: str()}; }
function _updateBotWebhookJSON() { return {_: 'updateBotWebhookJSON', data: obj()}; }
function _updateBotWebhookJSONQuery() { return {_: 'updateBotWebhookJSONQuery', query_id: i64(), data: obj(), timeout: i32()}; }
function _labeledPrice() { return {_: 'labeledPrice', label: str(), amount: i64()}; }
function _invoice() {
  const flags = i32();
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
    currency: str(),
    prices: vector(obj),
  }
}
function _inputMediaInvoice() {
  const flags = i32();
  return {
    _: 'inputMediaInvoice' as const,
    title: str(),
    description: str(),
    photo: flags & 0x1 ? obj() : undefined,
    invoice: obj(),
    payload: bytes(),
    provider: str(),
    provider_data: obj(),
    start_param: str(),
  }
}
function _paymentCharge() { return {_: 'paymentCharge', id: str(), provider_charge_id: str()}; }
function _messageActionPaymentSentMe() {
  const flags = i32();
  return {
    _: 'messageActionPaymentSentMe' as const,
    currency: str(),
    total_amount: i64(),
    payload: bytes(),
    info: flags & 0x1 ? obj() : undefined,
    shipping_option_id: flags & 0x2 ? str() : undefined,
    charge: obj(),
  }
}
function _messageMediaInvoice() {
  const flags = i32();
  return {
    _: 'messageMediaInvoice' as const,
    shipping_address_requested: !!(flags & 0x2),
    test: !!(flags & 0x8),
    title: str(),
    description: str(),
    photo: flags & 0x1 ? obj() : undefined,
    receipt_msg_id: flags & 0x4 ? i32() : undefined,
    currency: str(),
    total_amount: i64(),
    start_param: str(),
  }
}
function _postAddress() { return {_: 'postAddress', street_line1: str(), street_line2: str(), city: str(), state: str(), country_iso2: str(), post_code: str()}; }
function _paymentRequestedInfo() {
  const flags = i32();
  return {
    _: 'paymentRequestedInfo' as const,
    name: flags & 0x1 ? str() : undefined,
    phone: flags & 0x2 ? str() : undefined,
    email: flags & 0x4 ? str() : undefined,
    shipping_address: flags & 0x8 ? obj() : undefined,
  }
}
function _keyboardButtonBuy() { return {_: 'keyboardButtonBuy', text: str()}; }
function _messageActionPaymentSent() { return {_: 'messageActionPaymentSent', currency: str(), total_amount: i64()}; }
function _paymentSavedCredentialsCard() { return {_: 'paymentSavedCredentialsCard', id: str(), title: str()}; }
function _webDocument() { return {_: 'webDocument', url: str(), access_hash: i64(), size: i32(), mime_type: str(), attributes: vector(obj)}; }
function _inputWebDocument() { return {_: 'inputWebDocument', url: str(), size: i32(), mime_type: str(), attributes: vector(obj)}; }
function _inputWebFileLocation() { return {_: 'inputWebFileLocation', url: str(), access_hash: i64()}; }
function _uploadWebFile() { return {_: 'upload.webFile', size: i32(), mime_type: str(), file_type: obj(), mtime: i32(), bytes: bytes()}; }
function _paymentsPaymentForm() {
  const flags = i32();
  return {
    _: 'payments.paymentForm' as const,
    can_save_credentials: !!(flags & 0x4),
    password_missing: !!(flags & 0x8),
    bot_id: i32(),
    invoice: obj(),
    provider_id: i32(),
    url: str(),
    native_provider: flags & 0x10 ? str() : undefined,
    native_params: flags & 0x10 ? obj() : undefined,
    saved_info: flags & 0x1 ? obj() : undefined,
    saved_credentials: flags & 0x2 ? obj() : undefined,
    users: vector(obj),
  }
}
function _paymentsValidatedRequestedInfo() {
  const flags = i32();
  return {
    _: 'payments.validatedRequestedInfo' as const,
    id: flags & 0x1 ? str() : undefined,
    shipping_options: flags & 0x2 ? vector(obj) : undefined,
  }
}
function _paymentsPaymentResult() { return {_: 'payments.paymentResult', updates: obj()}; }
function _paymentsPaymentReceipt() {
  const flags = i32();
  return {
    _: 'payments.paymentReceipt' as const,
    date: i32(),
    bot_id: i32(),
    invoice: obj(),
    provider_id: i32(),
    info: flags & 0x1 ? obj() : undefined,
    shipping: flags & 0x2 ? obj() : undefined,
    currency: str(),
    total_amount: i64(),
    credentials_title: str(),
    users: vector(obj),
  }
}
function _paymentsSavedInfo() {
  const flags = i32();
  return {
    _: 'payments.savedInfo' as const,
    has_saved_credentials: !!(flags & 0x2),
    saved_info: flags & 0x1 ? obj() : undefined,
  }
}
function _inputPaymentCredentialsSaved() { return {_: 'inputPaymentCredentialsSaved', id: str(), tmp_password: bytes()}; }
function _inputPaymentCredentials() {
  const flags = i32();
  return {
    _: 'inputPaymentCredentials' as const,
    save: !!(flags & 0x1),
    data: obj(),
  }
}
function _accountTmpPassword() { return {_: 'account.tmpPassword', tmp_password: bytes(), valid_until: i32()}; }
function _shippingOption() { return {_: 'shippingOption', id: str(), title: str(), prices: vector(obj)}; }
function _updateBotShippingQuery() { return {_: 'updateBotShippingQuery', query_id: i64(), user_id: i32(), payload: bytes(), shipping_address: obj()}; }
function _updateBotPrecheckoutQuery() {
  const flags = i32();
  return {
    _: 'updateBotPrecheckoutQuery' as const,
    query_id: i64(),
    user_id: i32(),
    payload: bytes(),
    info: flags & 0x1 ? obj() : undefined,
    shipping_option_id: flags & 0x2 ? str() : undefined,
    currency: str(),
    total_amount: i64(),
  }
}
function _inputStickerSetItem() {
  const flags = i32();
  return {
    _: 'inputStickerSetItem' as const,
    document: obj(),
    emoji: str(),
    mask_coords: flags & 0x1 ? obj() : undefined,
  }
}
function _updatePhoneCall() { return {_: 'updatePhoneCall', phone_call: obj()}; }
function _inputPhoneCall() { return {_: 'inputPhoneCall', id: i64(), access_hash: i64()}; }
function _phoneCallEmpty() { return {_: 'phoneCallEmpty', id: i64()}; }
function _phoneCallWaiting() {
  const flags = i32();
  return {
    _: 'phoneCallWaiting' as const,
    video: !!(flags & 0x20),
    id: i64(),
    access_hash: i64(),
    date: i32(),
    admin_id: i32(),
    participant_id: i32(),
    protocol: obj(),
    receive_date: flags & 0x1 ? i32() : undefined,
  }
}
function _phoneCallRequested() {
  const flags = i32();
  return {
    _: 'phoneCallRequested' as const,
    video: !!(flags & 0x20),
    id: i64(),
    access_hash: i64(),
    date: i32(),
    admin_id: i32(),
    participant_id: i32(),
    g_a_hash: bytes(),
    protocol: obj(),
  }
}
function _phoneCallAccepted() {
  const flags = i32();
  return {
    _: 'phoneCallAccepted' as const,
    video: !!(flags & 0x20),
    id: i64(),
    access_hash: i64(),
    date: i32(),
    admin_id: i32(),
    participant_id: i32(),
    g_b: bytes(),
    protocol: obj(),
  }
}
function _phoneCall() {
  const flags = i32();
  return {
    _: 'phoneCall' as const,
    p2p_allowed: !!(flags & 0x20),
    id: i64(),
    access_hash: i64(),
    date: i32(),
    admin_id: i32(),
    participant_id: i32(),
    g_a_or_b: bytes(),
    key_fingerprint: i64(),
    protocol: obj(),
    connections: vector(obj),
    start_date: i32(),
  }
}
function _phoneCallDiscarded() {
  const flags = i32();
  return {
    _: 'phoneCallDiscarded' as const,
    need_rating: !!(flags & 0x4),
    need_debug: !!(flags & 0x8),
    video: !!(flags & 0x20),
    id: i64(),
    reason: flags & 0x1 ? obj() : undefined,
    duration: flags & 0x2 ? i32() : undefined,
  }
}
function _phoneConnection() { return {_: 'phoneConnection', id: i64(), ip: str(), ipv6: str(), port: i32(), peer_tag: bytes()}; }
function _phoneCallProtocol() {
  const flags = i32();
  return {
    _: 'phoneCallProtocol' as const,
    udp_p2p: !!(flags & 0x1),
    udp_reflector: !!(flags & 0x2),
    min_layer: i32(),
    max_layer: i32(),
  }
}
function _phonePhoneCall() { return {_: 'phone.phoneCall', phone_call: obj(), users: vector(obj)}; }
function _inputMessagesFilterPhoneCalls() {
  const flags = i32();
  return {
    _: 'inputMessagesFilterPhoneCalls' as const,
    missed: !!(flags & 0x1),
  }
}
function _messageActionPhoneCall() {
  const flags = i32();
  return {
    _: 'messageActionPhoneCall' as const,
    video: !!(flags & 0x4),
    call_id: i64(),
    reason: flags & 0x1 ? obj() : undefined,
    duration: flags & 0x2 ? i32() : undefined,
  }
}
function _inputMessagesFilterRoundVoice() { return {_: 'inputMessagesFilterRoundVoice'}; }
function _inputMessagesFilterRoundVideo() { return {_: 'inputMessagesFilterRoundVideo'}; }
function _sendMessageRecordRoundAction() { return {_: 'sendMessageRecordRoundAction'}; }
function _sendMessageUploadRoundAction() { return {_: 'sendMessageUploadRoundAction', progress: i32()}; }
function _uploadFileCdnRedirect() { return {_: 'upload.fileCdnRedirect', dc_id: i32(), file_token: bytes(), encryption_key: bytes(), encryption_iv: bytes(), file_hashes: vector(obj)}; }
function _uploadCdnFileReuploadNeeded() { return {_: 'upload.cdnFileReuploadNeeded', request_token: bytes()}; }
function _uploadCdnFile() { return {_: 'upload.cdnFile', bytes: bytes()}; }
function _cdnPublicKey() { return {_: 'cdnPublicKey', dc_id: i32(), public_key: str()}; }
function _cdnConfig() { return {_: 'cdnConfig', public_keys: vector(obj)}; }
function _pageBlockChannel() { return {_: 'pageBlockChannel', channel: obj()}; }
function _langPackString() { return {_: 'langPackString', key: str(), value: str()}; }
function _langPackStringPluralized() {
  const flags = i32();
  return {
    _: 'langPackStringPluralized' as const,
    key: str(),
    zero_value: flags & 0x1 ? str() : undefined,
    one_value: flags & 0x2 ? str() : undefined,
    two_value: flags & 0x4 ? str() : undefined,
    few_value: flags & 0x8 ? str() : undefined,
    many_value: flags & 0x10 ? str() : undefined,
    other_value: str(),
  }
}
function _langPackStringDeleted() { return {_: 'langPackStringDeleted', key: str()}; }
function _langPackDifference() { return {_: 'langPackDifference', lang_code: str(), from_version: i32(), version: i32(), strings: vector(obj)}; }
function _langPackLanguage() {
  const flags = i32();
  return {
    _: 'langPackLanguage' as const,
    official: !!(flags & 0x1),
    rtl: !!(flags & 0x4),
    beta: !!(flags & 0x8),
    name: str(),
    native_name: str(),
    lang_code: str(),
    base_lang_code: flags & 0x2 ? str() : undefined,
    plural_code: str(),
    strings_count: i32(),
    translated_count: i32(),
    translations_url: str(),
  }
}
function _updateLangPackTooLong() { return {_: 'updateLangPackTooLong', lang_code: str()}; }
function _updateLangPack() { return {_: 'updateLangPack', difference: obj()}; }
function _channelParticipantAdmin() {
  const flags = i32();
  return {
    _: 'channelParticipantAdmin' as const,
    can_edit: !!(flags & 0x1),
    self: !!(flags & 0x2),
    user_id: i32(),
    inviter_id: flags & 0x2 ? i32() : undefined,
    promoted_by: i32(),
    date: i32(),
    admin_rights: obj(),
    rank: flags & 0x4 ? str() : undefined,
  }
}
function _channelParticipantBanned() {
  const flags = i32();
  return {
    _: 'channelParticipantBanned' as const,
    left: !!(flags & 0x1),
    user_id: i32(),
    kicked_by: i32(),
    date: i32(),
    banned_rights: obj(),
  }
}
function _channelParticipantsBanned() { return {_: 'channelParticipantsBanned', q: str()}; }
function _channelParticipantsSearch() { return {_: 'channelParticipantsSearch', q: str()}; }
function _channelAdminLogEventActionChangeTitle() { return {_: 'channelAdminLogEventActionChangeTitle', prev_value: str(), new_value: str()}; }
function _channelAdminLogEventActionChangeAbout() { return {_: 'channelAdminLogEventActionChangeAbout', prev_value: str(), new_value: str()}; }
function _channelAdminLogEventActionChangeUsername() { return {_: 'channelAdminLogEventActionChangeUsername', prev_value: str(), new_value: str()}; }
function _channelAdminLogEventActionChangePhoto() { return {_: 'channelAdminLogEventActionChangePhoto', prev_photo: obj(), new_photo: obj()}; }
function _channelAdminLogEventActionToggleInvites() { return {_: 'channelAdminLogEventActionToggleInvites', new_value: obj()}; }
function _channelAdminLogEventActionToggleSignatures() { return {_: 'channelAdminLogEventActionToggleSignatures', new_value: obj()}; }
function _channelAdminLogEventActionUpdatePinned() { return {_: 'channelAdminLogEventActionUpdatePinned', message: obj()}; }
function _channelAdminLogEventActionEditMessage() { return {_: 'channelAdminLogEventActionEditMessage', prev_message: obj(), new_message: obj()}; }
function _channelAdminLogEventActionDeleteMessage() { return {_: 'channelAdminLogEventActionDeleteMessage', message: obj()}; }
function _channelAdminLogEventActionParticipantJoin() { return {_: 'channelAdminLogEventActionParticipantJoin'}; }
function _channelAdminLogEventActionParticipantLeave() { return {_: 'channelAdminLogEventActionParticipantLeave'}; }
function _channelAdminLogEventActionParticipantInvite() { return {_: 'channelAdminLogEventActionParticipantInvite', participant: obj()}; }
function _channelAdminLogEventActionParticipantToggleBan() { return {_: 'channelAdminLogEventActionParticipantToggleBan', prev_participant: obj(), new_participant: obj()}; }
function _channelAdminLogEventActionParticipantToggleAdmin() { return {_: 'channelAdminLogEventActionParticipantToggleAdmin', prev_participant: obj(), new_participant: obj()}; }
function _channelAdminLogEvent() { return {_: 'channelAdminLogEvent', id: i64(), date: i32(), user_id: i32(), action: obj()}; }
function _channelsAdminLogResults() { return {_: 'channels.adminLogResults', events: vector(obj), chats: vector(obj), users: vector(obj)}; }
function _channelAdminLogEventsFilter() {
  const flags = i32();
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
function _topPeerCategoryPhoneCalls() { return {_: 'topPeerCategoryPhoneCalls'}; }
function _pageBlockAudio() { return {_: 'pageBlockAudio', audio_id: i64(), caption: obj()}; }
function _popularContact() { return {_: 'popularContact', client_id: i64(), importers: i32()}; }
function _messageActionScreenshotTaken() { return {_: 'messageActionScreenshotTaken'}; }
function _messagesFavedStickersNotModified() { return {_: 'messages.favedStickersNotModified'}; }
function _messagesFavedStickers() { return {_: 'messages.favedStickers', hash: i32(), packs: vector(obj), stickers: vector(obj)}; }
function _updateFavedStickers() { return {_: 'updateFavedStickers'}; }
function _updateChannelReadMessagesContents() { return {_: 'updateChannelReadMessagesContents', channel_id: i32(), messages: vector(i32)}; }
function _inputMessagesFilterMyMentions() { return {_: 'inputMessagesFilterMyMentions'}; }
function _updateContactsReset() { return {_: 'updateContactsReset'}; }
function _channelAdminLogEventActionChangeStickerSet() { return {_: 'channelAdminLogEventActionChangeStickerSet', prev_stickerset: obj(), new_stickerset: obj()}; }
function _messageActionCustomAction() { return {_: 'messageActionCustomAction', message: str()}; }
function _inputPaymentCredentialsApplePay() { return {_: 'inputPaymentCredentialsApplePay', payment_data: obj()}; }
function _inputPaymentCredentialsAndroidPay() { return {_: 'inputPaymentCredentialsAndroidPay', payment_token: obj(), google_transaction_id: str()}; }
function _inputMessagesFilterGeo() { return {_: 'inputMessagesFilterGeo'}; }
function _inputMessagesFilterContacts() { return {_: 'inputMessagesFilterContacts'}; }
function _updateChannelAvailableMessages() { return {_: 'updateChannelAvailableMessages', channel_id: i32(), available_min_id: i32()}; }
function _channelAdminLogEventActionTogglePreHistoryHidden() { return {_: 'channelAdminLogEventActionTogglePreHistoryHidden', new_value: obj()}; }
function _inputMediaGeoLive() {
  const flags = i32();
  return {
    _: 'inputMediaGeoLive' as const,
    stopped: !!(flags & 0x1),
    geo_point: obj(),
    period: flags & 0x2 ? i32() : undefined,
  }
}
function _messageMediaGeoLive() { return {_: 'messageMediaGeoLive', geo: obj(), period: i32()}; }
function _recentMeUrlUnknown() { return {_: 'recentMeUrlUnknown', url: str()}; }
function _recentMeUrlUser() { return {_: 'recentMeUrlUser', url: str(), user_id: i32()}; }
function _recentMeUrlChat() { return {_: 'recentMeUrlChat', url: str(), chat_id: i32()}; }
function _recentMeUrlChatInvite() { return {_: 'recentMeUrlChatInvite', url: str(), chat_invite: obj()}; }
function _recentMeUrlStickerSet() { return {_: 'recentMeUrlStickerSet', url: str(), set: obj()}; }
function _helpRecentMeUrls() { return {_: 'help.recentMeUrls', urls: vector(obj), chats: vector(obj), users: vector(obj)}; }
function _channelsChannelParticipantsNotModified() { return {_: 'channels.channelParticipantsNotModified'}; }
function _messagesMessagesNotModified() { return {_: 'messages.messagesNotModified', count: i32()}; }
function _inputSingleMedia() {
  const flags = i32();
  return {
    _: 'inputSingleMedia' as const,
    media: obj(),
    random_id: i64(),
    message: str(),
    entities: flags & 0x1 ? vector(obj) : undefined,
  }
}
function _webAuthorization() { return {_: 'webAuthorization', hash: i64(), bot_id: i32(), domain: str(), browser: str(), platform: str(), date_created: i32(), date_active: i32(), ip: str(), region: str()}; }
function _accountWebAuthorizations() { return {_: 'account.webAuthorizations', authorizations: vector(obj), users: vector(obj)}; }
function _inputMessageID() { return {_: 'inputMessageID', id: i32()}; }
function _inputMessageReplyTo() { return {_: 'inputMessageReplyTo', id: i32()}; }
function _inputMessagePinned() { return {_: 'inputMessagePinned'}; }
function _messageEntityPhone() { return {_: 'messageEntityPhone', offset: i32(), length: i32()}; }
function _messageEntityCashtag() { return {_: 'messageEntityCashtag', offset: i32(), length: i32()}; }
function _messageActionBotAllowed() { return {_: 'messageActionBotAllowed', domain: str()}; }
function _inputDialogPeer() { return {_: 'inputDialogPeer', peer: obj()}; }
function _dialogPeer() { return {_: 'dialogPeer', peer: obj()}; }
function _messagesFoundStickerSetsNotModified() { return {_: 'messages.foundStickerSetsNotModified'}; }
function _messagesFoundStickerSets() { return {_: 'messages.foundStickerSets', hash: i32(), sets: vector(obj)}; }
function _fileHash() { return {_: 'fileHash', offset: i32(), limit: i32(), hash: bytes()}; }
function _webDocumentNoProxy() { return {_: 'webDocumentNoProxy', url: str(), size: i32(), mime_type: str(), attributes: vector(obj)}; }
function _inputClientProxy() { return {_: 'inputClientProxy', address: str(), port: i32()}; }
function _helpProxyDataEmpty() { return {_: 'help.proxyDataEmpty', expires: i32()}; }
function _helpProxyDataPromo() { return {_: 'help.proxyDataPromo', expires: i32(), peer: obj(), chats: vector(obj), users: vector(obj)}; }
function _helpTermsOfServiceUpdateEmpty() { return {_: 'help.termsOfServiceUpdateEmpty', expires: i32()}; }
function _helpTermsOfServiceUpdate() { return {_: 'help.termsOfServiceUpdate', expires: i32(), terms_of_service: obj()}; }
function _inputSecureFileUploaded() { return {_: 'inputSecureFileUploaded', id: i64(), parts: i32(), md5_checksum: str(), file_hash: bytes(), secret: bytes()}; }
function _inputSecureFile() { return {_: 'inputSecureFile', id: i64(), access_hash: i64()}; }
function _inputSecureFileLocation() { return {_: 'inputSecureFileLocation', id: i64(), access_hash: i64()}; }
function _secureFileEmpty() { return {_: 'secureFileEmpty'}; }
function _secureFile() { return {_: 'secureFile', id: i64(), access_hash: i64(), size: i32(), dc_id: i32(), date: i32(), file_hash: bytes(), secret: bytes()}; }
function _secureData() { return {_: 'secureData', data: bytes(), data_hash: bytes(), secret: bytes()}; }
function _securePlainPhone() { return {_: 'securePlainPhone', phone: str()}; }
function _securePlainEmail() { return {_: 'securePlainEmail', email: str()}; }
function _secureValueTypePersonalDetails() { return {_: 'secureValueTypePersonalDetails'}; }
function _secureValueTypePassport() { return {_: 'secureValueTypePassport'}; }
function _secureValueTypeDriverLicense() { return {_: 'secureValueTypeDriverLicense'}; }
function _secureValueTypeIdentityCard() { return {_: 'secureValueTypeIdentityCard'}; }
function _secureValueTypeInternalPassport() { return {_: 'secureValueTypeInternalPassport'}; }
function _secureValueTypeAddress() { return {_: 'secureValueTypeAddress'}; }
function _secureValueTypeUtilityBill() { return {_: 'secureValueTypeUtilityBill'}; }
function _secureValueTypeBankStatement() { return {_: 'secureValueTypeBankStatement'}; }
function _secureValueTypeRentalAgreement() { return {_: 'secureValueTypeRentalAgreement'}; }
function _secureValueTypePassportRegistration() { return {_: 'secureValueTypePassportRegistration'}; }
function _secureValueTypeTemporaryRegistration() { return {_: 'secureValueTypeTemporaryRegistration'}; }
function _secureValueTypePhone() { return {_: 'secureValueTypePhone'}; }
function _secureValueTypeEmail() { return {_: 'secureValueTypeEmail'}; }
function _secureValue() {
  const flags = i32();
  return {
    _: 'secureValue' as const,
    type: obj(),
    data: flags & 0x1 ? obj() : undefined,
    front_side: flags & 0x2 ? obj() : undefined,
    reverse_side: flags & 0x4 ? obj() : undefined,
    selfie: flags & 0x8 ? obj() : undefined,
    translation: flags & 0x40 ? vector(obj) : undefined,
    files: flags & 0x10 ? vector(obj) : undefined,
    plain_data: flags & 0x20 ? obj() : undefined,
    hash: bytes(),
  }
}
function _inputSecureValue() {
  const flags = i32();
  return {
    _: 'inputSecureValue' as const,
    type: obj(),
    data: flags & 0x1 ? obj() : undefined,
    front_side: flags & 0x2 ? obj() : undefined,
    reverse_side: flags & 0x4 ? obj() : undefined,
    selfie: flags & 0x8 ? obj() : undefined,
    translation: flags & 0x40 ? vector(obj) : undefined,
    files: flags & 0x10 ? vector(obj) : undefined,
    plain_data: flags & 0x20 ? obj() : undefined,
  }
}
function _secureValueHash() { return {_: 'secureValueHash', type: obj(), hash: bytes()}; }
function _secureValueErrorData() { return {_: 'secureValueErrorData', type: obj(), data_hash: bytes(), field: str(), text: str()}; }
function _secureValueErrorFrontSide() { return {_: 'secureValueErrorFrontSide', type: obj(), file_hash: bytes(), text: str()}; }
function _secureValueErrorReverseSide() { return {_: 'secureValueErrorReverseSide', type: obj(), file_hash: bytes(), text: str()}; }
function _secureValueErrorSelfie() { return {_: 'secureValueErrorSelfie', type: obj(), file_hash: bytes(), text: str()}; }
function _secureValueErrorFile() { return {_: 'secureValueErrorFile', type: obj(), file_hash: bytes(), text: str()}; }
function _secureValueErrorFiles() { return {_: 'secureValueErrorFiles', type: obj(), file_hash: vector(bytes), text: str()}; }
function _secureCredentialsEncrypted() { return {_: 'secureCredentialsEncrypted', data: bytes(), hash: bytes(), secret: bytes()}; }
function _accountAuthorizationForm() {
  const flags = i32();
  return {
    _: 'account.authorizationForm' as const,
    required_types: vector(obj),
    values: vector(obj),
    errors: vector(obj),
    users: vector(obj),
    privacy_policy_url: flags & 0x1 ? str() : undefined,
  }
}
function _accountSentEmailCode() { return {_: 'account.sentEmailCode', email_pattern: str(), length: i32()}; }
function _messageActionSecureValuesSentMe() { return {_: 'messageActionSecureValuesSentMe', values: vector(obj), credentials: obj()}; }
function _messageActionSecureValuesSent() { return {_: 'messageActionSecureValuesSent', types: vector(obj)}; }
function _helpDeepLinkInfoEmpty() { return {_: 'help.deepLinkInfoEmpty'}; }
function _helpDeepLinkInfo() {
  const flags = i32();
  return {
    _: 'help.deepLinkInfo' as const,
    update_app: !!(flags & 0x1),
    message: str(),
    entities: flags & 0x2 ? vector(obj) : undefined,
  }
}
function _savedPhoneContact() { return {_: 'savedPhoneContact', phone: str(), first_name: str(), last_name: str(), date: i32()}; }
function _accountTakeout() { return {_: 'account.takeout', id: i64()}; }
function _inputTakeoutFileLocation() { return {_: 'inputTakeoutFileLocation'}; }
function _updateDialogUnreadMark() {
  const flags = i32();
  return {
    _: 'updateDialogUnreadMark' as const,
    unread: !!(flags & 0x1),
    peer: obj(),
  }
}
function _messagesDialogsNotModified() { return {_: 'messages.dialogsNotModified', count: i32()}; }
function _inputWebFileGeoPointLocation() { return {_: 'inputWebFileGeoPointLocation', geo_point: obj(), access_hash: i64(), w: i32(), h: i32(), zoom: i32(), scale: i32()}; }
function _contactsTopPeersDisabled() { return {_: 'contacts.topPeersDisabled'}; }
function _inputReportReasonCopyright() { return {_: 'inputReportReasonCopyright'}; }
function _passwordKdfAlgoUnknown() { return {_: 'passwordKdfAlgoUnknown'}; }
function _securePasswordKdfAlgoUnknown() { return {_: 'securePasswordKdfAlgoUnknown'}; }
function _securePasswordKdfAlgoPBKDF2HMACSHA512iter100000() { return {_: 'securePasswordKdfAlgoPBKDF2HMACSHA512iter100000', salt: bytes()}; }
function _securePasswordKdfAlgoSHA512() { return {_: 'securePasswordKdfAlgoSHA512', salt: bytes()}; }
function _secureSecretSettings() { return {_: 'secureSecretSettings', secure_algo: obj(), secure_secret: bytes(), secure_secret_id: i64()}; }
function _passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow() { return {_: 'passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow', salt1: bytes(), salt2: bytes(), g: i32(), p: bytes()}; }
function _inputCheckPasswordEmpty() { return {_: 'inputCheckPasswordEmpty'}; }
function _inputCheckPasswordSRP() { return {_: 'inputCheckPasswordSRP', srp_id: i64(), A: bytes(), M1: bytes()}; }
function _secureValueError() { return {_: 'secureValueError', type: obj(), hash: bytes(), text: str()}; }
function _secureValueErrorTranslationFile() { return {_: 'secureValueErrorTranslationFile', type: obj(), file_hash: bytes(), text: str()}; }
function _secureValueErrorTranslationFiles() { return {_: 'secureValueErrorTranslationFiles', type: obj(), file_hash: vector(bytes), text: str()}; }
function _secureRequiredType() {
  const flags = i32();
  return {
    _: 'secureRequiredType' as const,
    native_names: !!(flags & 0x1),
    selfie_required: !!(flags & 0x2),
    translation_required: !!(flags & 0x4),
    type: obj(),
  }
}
function _secureRequiredTypeOneOf() { return {_: 'secureRequiredTypeOneOf', types: vector(obj)}; }
function _helpPassportConfigNotModified() { return {_: 'help.passportConfigNotModified'}; }
function _helpPassportConfig() { return {_: 'help.passportConfig', hash: i32(), countries_langs: obj()}; }
function _inputAppEvent() { return {_: 'inputAppEvent', time: f64(), type: str(), peer: i64(), data: obj()}; }
function _jsonObjectValue() { return {_: 'jsonObjectValue', key: str(), value: obj()}; }
function _jsonNull() { return {_: 'jsonNull'}; }
function _jsonBool() { return {_: 'jsonBool', value: obj()}; }
function _jsonNumber() { return {_: 'jsonNumber', value: f64()}; }
function _jsonString() { return {_: 'jsonString', value: str()}; }
function _jsonArray() { return {_: 'jsonArray', value: vector(obj)}; }
function _jsonObject() { return {_: 'jsonObject', value: vector(obj)}; }
function _updateUserPinnedMessage() { return {_: 'updateUserPinnedMessage', user_id: i32(), id: i32()}; }
function _updateChatPinnedMessage() { return {_: 'updateChatPinnedMessage', chat_id: i32(), id: i32(), version: i32()}; }
function _inputNotifyBroadcasts() { return {_: 'inputNotifyBroadcasts'}; }
function _notifyBroadcasts() { return {_: 'notifyBroadcasts'}; }
function _textSubscript() { return {_: 'textSubscript', text: obj()}; }
function _textSuperscript() { return {_: 'textSuperscript', text: obj()}; }
function _textMarked() { return {_: 'textMarked', text: obj()}; }
function _textPhone() { return {_: 'textPhone', text: obj(), phone: str()}; }
function _textImage() { return {_: 'textImage', document_id: i64(), w: i32(), h: i32()}; }
function _pageBlockKicker() { return {_: 'pageBlockKicker', text: obj()}; }
function _pageTableCell() {
  const flags = i32();
  return {
    _: 'pageTableCell' as const,
    header: !!(flags & 0x1),
    align_center: !!(flags & 0x8),
    align_right: !!(flags & 0x10),
    valign_middle: !!(flags & 0x20),
    valign_bottom: !!(flags & 0x40),
    text: flags & 0x80 ? obj() : undefined,
    colspan: flags & 0x2 ? i32() : undefined,
    rowspan: flags & 0x4 ? i32() : undefined,
  }
}
function _pageTableRow() { return {_: 'pageTableRow', cells: vector(obj)}; }
function _pageBlockTable() {
  const flags = i32();
  return {
    _: 'pageBlockTable' as const,
    bordered: !!(flags & 0x1),
    striped: !!(flags & 0x2),
    title: obj(),
    rows: vector(obj),
  }
}
function _pageCaption() { return {_: 'pageCaption', text: obj(), credit: obj()}; }
function _pageListItemText() { return {_: 'pageListItemText', text: obj()}; }
function _pageListItemBlocks() { return {_: 'pageListItemBlocks', blocks: vector(obj)}; }
function _pageListOrderedItemText() { return {_: 'pageListOrderedItemText', num: str(), text: obj()}; }
function _pageListOrderedItemBlocks() { return {_: 'pageListOrderedItemBlocks', num: str(), blocks: vector(obj)}; }
function _pageBlockOrderedList() { return {_: 'pageBlockOrderedList', items: vector(obj)}; }
function _pageBlockDetails() {
  const flags = i32();
  return {
    _: 'pageBlockDetails' as const,
    open: !!(flags & 0x1),
    blocks: vector(obj),
    title: obj(),
  }
}
function _pageRelatedArticle() {
  const flags = i32();
  return {
    _: 'pageRelatedArticle' as const,
    url: str(),
    webpage_id: i64(),
    title: flags & 0x1 ? str() : undefined,
    description: flags & 0x2 ? str() : undefined,
    photo_id: flags & 0x4 ? i64() : undefined,
    author: flags & 0x8 ? str() : undefined,
    published_date: flags & 0x10 ? i32() : undefined,
  }
}
function _pageBlockRelatedArticles() { return {_: 'pageBlockRelatedArticles', title: obj(), articles: vector(obj)}; }
function _pageBlockMap() { return {_: 'pageBlockMap', geo: obj(), zoom: i32(), w: i32(), h: i32(), caption: obj()}; }
function _page() {
  const flags = i32();
  return {
    _: 'page' as const,
    part: !!(flags & 0x1),
    rtl: !!(flags & 0x2),
    v2: !!(flags & 0x4),
    url: str(),
    blocks: vector(obj),
    photos: vector(obj),
    documents: vector(obj),
  }
}
function _inputPrivacyKeyPhoneP2P() { return {_: 'inputPrivacyKeyPhoneP2P'}; }
function _privacyKeyPhoneP2P() { return {_: 'privacyKeyPhoneP2P'}; }
function _textAnchor() { return {_: 'textAnchor', text: obj(), name: str()}; }
function _helpSupportName() { return {_: 'help.supportName', name: str()}; }
function _helpUserInfoEmpty() { return {_: 'help.userInfoEmpty'}; }
function _helpUserInfo() { return {_: 'help.userInfo', message: str(), entities: vector(obj), author: str(), date: i32()}; }
function _messageActionContactSignUp() { return {_: 'messageActionContactSignUp'}; }
function _updateMessagePoll() {
  const flags = i32();
  return {
    _: 'updateMessagePoll' as const,
    poll_id: i64(),
    poll: flags & 0x1 ? obj() : undefined,
    results: obj(),
  }
}
function _pollAnswer() { return {_: 'pollAnswer', text: str(), option: bytes()}; }
function _poll() {
  const flags = i32();
  return {
    _: 'poll' as const,
    id: i64(),
    closed: !!(flags & 0x1),
    question: str(),
    answers: vector(obj),
  }
}
function _pollAnswerVoters() {
  const flags = i32();
  return {
    _: 'pollAnswerVoters' as const,
    chosen: !!(flags & 0x1),
    option: bytes(),
    voters: i32(),
  }
}
function _pollResults() {
  const flags = i32();
  return {
    _: 'pollResults' as const,
    min: !!(flags & 0x1),
    results: flags & 0x2 ? vector(obj) : undefined,
    total_voters: flags & 0x4 ? i32() : undefined,
  }
}
function _inputMediaPoll() { return {_: 'inputMediaPoll', poll: obj()}; }
function _messageMediaPoll() { return {_: 'messageMediaPoll', poll: obj(), results: obj()}; }
function _chatOnlines() { return {_: 'chatOnlines', onlines: i32()}; }
function _statsURL() { return {_: 'statsURL', url: str()}; }
function _photoStrippedSize() { return {_: 'photoStrippedSize', type: str(), bytes: bytes()}; }
function _chatAdminRights() {
  const flags = i32();
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
function _chatBannedRights() {
  const flags = i32();
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
    until_date: i32(),
  }
}
function _updateChatDefaultBannedRights() { return {_: 'updateChatDefaultBannedRights', peer: obj(), default_banned_rights: obj(), version: i32()}; }
function _inputWallPaper() { return {_: 'inputWallPaper', id: i64(), access_hash: i64()}; }
function _inputWallPaperSlug() { return {_: 'inputWallPaperSlug', slug: str()}; }
function _channelParticipantsContacts() { return {_: 'channelParticipantsContacts', q: str()}; }
function _channelAdminLogEventActionDefaultBannedRights() { return {_: 'channelAdminLogEventActionDefaultBannedRights', prev_banned_rights: obj(), new_banned_rights: obj()}; }
function _channelAdminLogEventActionStopPoll() { return {_: 'channelAdminLogEventActionStopPoll', message: obj()}; }
function _accountWallPapersNotModified() { return {_: 'account.wallPapersNotModified'}; }
function _accountWallPapers() { return {_: 'account.wallPapers', hash: i32(), wallpapers: vector(obj)}; }
function _codeSettings() {
  const flags = i32();
  return {
    _: 'codeSettings' as const,
    allow_flashcall: !!(flags & 0x1),
    current_number: !!(flags & 0x2),
    allow_app_hash: !!(flags & 0x10),
  }
}
function _wallPaperSettings() {
  const flags = i32();
  return {
    _: 'wallPaperSettings' as const,
    blur: !!(flags & 0x2),
    motion: !!(flags & 0x4),
    background_color: flags & 0x1 ? i32() : undefined,
    intensity: flags & 0x8 ? i32() : undefined,
  }
}
function _autoDownloadSettings() {
  const flags = i32();
  return {
    _: 'autoDownloadSettings' as const,
    disabled: !!(flags & 0x1),
    video_preload_large: !!(flags & 0x2),
    audio_preload_next: !!(flags & 0x4),
    phonecalls_less_data: !!(flags & 0x8),
    photo_size_max: i32(),
    video_size_max: i32(),
    file_size_max: i32(),
  }
}
function _accountAutoDownloadSettings() { return {_: 'account.autoDownloadSettings', low: obj(), medium: obj(), high: obj()}; }
function _emojiKeyword() { return {_: 'emojiKeyword', keyword: str(), emoticons: vector(str)}; }
function _emojiKeywordDeleted() { return {_: 'emojiKeywordDeleted', keyword: str(), emoticons: vector(str)}; }
function _emojiKeywordsDifference() { return {_: 'emojiKeywordsDifference', lang_code: str(), from_version: i32(), version: i32(), keywords: vector(obj)}; }
function _emojiURL() { return {_: 'emojiURL', url: str()}; }
function _emojiLanguage() { return {_: 'emojiLanguage', lang_code: str()}; }
function _inputPrivacyKeyForwards() { return {_: 'inputPrivacyKeyForwards'}; }
function _privacyKeyForwards() { return {_: 'privacyKeyForwards'}; }
function _inputPrivacyKeyProfilePhoto() { return {_: 'inputPrivacyKeyProfilePhoto'}; }
function _privacyKeyProfilePhoto() { return {_: 'privacyKeyProfilePhoto'}; }
function _fileLocationToBeDeprecated() { return {_: 'fileLocationToBeDeprecated', volume_id: i64(), local_id: i32()}; }
function _inputPhotoFileLocation() { return {_: 'inputPhotoFileLocation', id: i64(), access_hash: i64(), file_reference: bytes(), thumb_size: str()}; }
function _inputPeerPhotoFileLocation() {
  const flags = i32();
  return {
    _: 'inputPeerPhotoFileLocation' as const,
    big: !!(flags & 0x1),
    peer: obj(),
    volume_id: i64(),
    local_id: i32(),
  }
}
function _inputStickerSetThumb() { return {_: 'inputStickerSetThumb', stickerset: obj(), volume_id: i64(), local_id: i32()}; }
function _folder() {
  const flags = i32();
  return {
    _: 'folder' as const,
    autofill_new_broadcasts: !!(flags & 0x1),
    autofill_public_groups: !!(flags & 0x2),
    autofill_new_correspondents: !!(flags & 0x4),
    id: i32(),
    title: str(),
    photo: flags & 0x8 ? obj() : undefined,
  }
}
function _dialogFolder() {
  const flags = i32();
  return {
    _: 'dialogFolder' as const,
    pinned: !!(flags & 0x4),
    folder: obj(),
    peer: obj(),
    top_message: i32(),
    unread_muted_peers_count: i32(),
    unread_unmuted_peers_count: i32(),
    unread_muted_messages_count: i32(),
    unread_unmuted_messages_count: i32(),
  }
}
function _inputDialogPeerFolder() { return {_: 'inputDialogPeerFolder', folder_id: i32()}; }
function _dialogPeerFolder() { return {_: 'dialogPeerFolder', folder_id: i32()}; }
function _inputFolderPeer() { return {_: 'inputFolderPeer', peer: obj(), folder_id: i32()}; }
function _folderPeer() { return {_: 'folderPeer', peer: obj(), folder_id: i32()}; }
function _updateFolderPeers() { return {_: 'updateFolderPeers', folder_peers: vector(obj), pts: i32(), pts_count: i32()}; }
function _inputUserFromMessage() { return {_: 'inputUserFromMessage', peer: obj(), msg_id: i32(), user_id: i32()}; }
function _inputChannelFromMessage() { return {_: 'inputChannelFromMessage', peer: obj(), msg_id: i32(), channel_id: i32()}; }
function _inputPeerUserFromMessage() { return {_: 'inputPeerUserFromMessage', peer: obj(), msg_id: i32(), user_id: i32()}; }
function _inputPeerChannelFromMessage() { return {_: 'inputPeerChannelFromMessage', peer: obj(), msg_id: i32(), channel_id: i32()}; }
function _inputPrivacyKeyPhoneNumber() { return {_: 'inputPrivacyKeyPhoneNumber'}; }
function _privacyKeyPhoneNumber() { return {_: 'privacyKeyPhoneNumber'}; }
function _topPeerCategoryForwardUsers() { return {_: 'topPeerCategoryForwardUsers'}; }
function _topPeerCategoryForwardChats() { return {_: 'topPeerCategoryForwardChats'}; }
function _channelAdminLogEventActionChangeLinkedChat() { return {_: 'channelAdminLogEventActionChangeLinkedChat', prev_value: i32(), new_value: i32()}; }
function _messagesSearchCounter() {
  const flags = i32();
  return {
    _: 'messages.searchCounter' as const,
    inexact: !!(flags & 0x2),
    filter: obj(),
    count: i32(),
  }
}
function _keyboardButtonUrlAuth() {
  const flags = i32();
  return {
    _: 'keyboardButtonUrlAuth' as const,
    text: str(),
    fwd_text: flags & 0x1 ? str() : undefined,
    url: str(),
    button_id: i32(),
  }
}
function _inputKeyboardButtonUrlAuth() {
  const flags = i32();
  return {
    _: 'inputKeyboardButtonUrlAuth' as const,
    request_write_access: !!(flags & 0x1),
    text: str(),
    fwd_text: flags & 0x2 ? str() : undefined,
    url: str(),
    bot: obj(),
  }
}
function _urlAuthResultRequest() {
  const flags = i32();
  return {
    _: 'urlAuthResultRequest' as const,
    request_write_access: !!(flags & 0x1),
    bot: obj(),
    domain: str(),
  }
}
function _urlAuthResultAccepted() { return {_: 'urlAuthResultAccepted', url: str()}; }
function _urlAuthResultDefault() { return {_: 'urlAuthResultDefault'}; }
function _inputPrivacyValueAllowChatParticipants() { return {_: 'inputPrivacyValueAllowChatParticipants', chats: vector(i32)}; }
function _inputPrivacyValueDisallowChatParticipants() { return {_: 'inputPrivacyValueDisallowChatParticipants', chats: vector(i32)}; }
function _privacyValueAllowChatParticipants() { return {_: 'privacyValueAllowChatParticipants', chats: vector(i32)}; }
function _privacyValueDisallowChatParticipants() { return {_: 'privacyValueDisallowChatParticipants', chats: vector(i32)}; }
function _messageEntityUnderline() { return {_: 'messageEntityUnderline', offset: i32(), length: i32()}; }
function _messageEntityStrike() { return {_: 'messageEntityStrike', offset: i32(), length: i32()}; }
function _messageEntityBlockquote() { return {_: 'messageEntityBlockquote', offset: i32(), length: i32()}; }
function _updatePeerSettings() { return {_: 'updatePeerSettings', peer: obj(), settings: obj()}; }
function _channelLocationEmpty() { return {_: 'channelLocationEmpty'}; }
function _channelLocation() { return {_: 'channelLocation', geo_point: obj(), address: str()}; }
function _peerLocated() { return {_: 'peerLocated', peer: obj(), expires: i32(), distance: i32()}; }
function _updatePeerLocated() { return {_: 'updatePeerLocated', peers: vector(obj)}; }
function _channelAdminLogEventActionChangeLocation() { return {_: 'channelAdminLogEventActionChangeLocation', prev_value: obj(), new_value: obj()}; }
function _inputReportReasonGeoIrrelevant() { return {_: 'inputReportReasonGeoIrrelevant'}; }
function _channelAdminLogEventActionToggleSlowMode() { return {_: 'channelAdminLogEventActionToggleSlowMode', prev_value: i32(), new_value: i32()}; }
function _authAuthorizationSignUpRequired() {
  const flags = i32();
  return {
    _: 'auth.authorizationSignUpRequired' as const,
    terms_of_service: flags & 0x1 ? obj() : undefined,
  }
}
function _paymentsPaymentVerificationNeeded() { return {_: 'payments.paymentVerificationNeeded', url: str()}; }
function _inputStickerSetAnimatedEmoji() { return {_: 'inputStickerSetAnimatedEmoji'}; }
function _updateNewScheduledMessage() { return {_: 'updateNewScheduledMessage', message: obj()}; }
function _updateDeleteScheduledMessages() { return {_: 'updateDeleteScheduledMessages', peer: obj(), messages: vector(i32)}; }
function _restrictionReason() { return {_: 'restrictionReason', platform: str(), reason: str(), text: str()}; }
function _inputTheme() { return {_: 'inputTheme', id: i64(), access_hash: i64()}; }
function _inputThemeSlug() { return {_: 'inputThemeSlug', slug: str()}; }
function _themeDocumentNotModified() { return {_: 'themeDocumentNotModified'}; }
function _theme() {
  const flags = i32();
  return {
    _: 'theme' as const,
    creator: !!(flags & 0x1),
    default: !!(flags & 0x2),
    id: i64(),
    access_hash: i64(),
    slug: str(),
    title: str(),
    document: flags & 0x4 ? obj() : undefined,
    installs_count: i32(),
  }
}
function _accountThemesNotModified() { return {_: 'account.themesNotModified'}; }
function _accountThemes() { return {_: 'account.themes', hash: i32(), themes: vector(obj)}; }
function _updateTheme() { return {_: 'updateTheme', theme: obj()}; }
function _inputPrivacyKeyAddedByPhone() { return {_: 'inputPrivacyKeyAddedByPhone'}; }
function _privacyKeyAddedByPhone() { return {_: 'privacyKeyAddedByPhone'}; }

const parserMap: Record<number, () => any> = {
  0xbc799737: _boolFalse,
  0x997275b5: _boolTrue,
  0x3fedd339: _true,
  0x1cb5c415: _vector,
  0xc4b9f9bb: _error,
  0x56730bcc: _null,
  0x7f3b18ea: _inputPeerEmpty,
  0x7da07ec9: _inputPeerSelf,
  0x179be863: _inputPeerChat,
  0xb98886cf: _inputUserEmpty,
  0xf7c1b13f: _inputUserSelf,
  0xf392b7f4: _inputPhoneContact,
  0xf52ff27f: _inputFile,
  0x9664f57f: _inputMediaEmpty,
  0x1e287d04: _inputMediaUploadedPhoto,
  0xb3ba0635: _inputMediaPhoto,
  0xf9c44144: _inputMediaGeoPoint,
  0xf8ab7dfb: _inputMediaContact,
  0x1ca48f57: _inputChatPhotoEmpty,
  0x927c55b4: _inputChatUploadedPhoto,
  0x8953ad37: _inputChatPhoto,
  0xe4c123d6: _inputGeoPointEmpty,
  0xf3b7acc9: _inputGeoPoint,
  0x1cd7bf0d: _inputPhotoEmpty,
  0x3bb3b94a: _inputPhoto,
  0xdfdaabe1: _inputFileLocation,
  0x9db1bc6d: _peerUser,
  0xbad0e5bb: _peerChat,
  0xaa963b05: _storageFileUnknown,
  0x40bc6f52: _storageFilePartial,
  0x7efe0e: _storageFileJpeg,
  0xcae1aadf: _storageFileGif,
  0xa4f63c0: _storageFilePng,
  0xae1e508d: _storageFilePdf,
  0x528a0677: _storageFileMp3,
  0x4b09ebbc: _storageFileMov,
  0xb3cea0e4: _storageFileMp4,
  0x1081464c: _storageFileWebp,
  0x200250ba: _userEmpty,
  0x4f11bae1: _userProfilePhotoEmpty,
  0xecd75d8c: _userProfilePhoto,
  0x9d05049: _userStatusEmpty,
  0xedb93949: _userStatusOnline,
  0x8c703f: _userStatusOffline,
  0x9ba2d800: _chatEmpty,
  0x3bda1bde: _chat,
  0x7328bdb: _chatForbidden,
  0x1b7c9db3: _chatFull,
  0xc8d7493e: _chatParticipant,
  0xfc900c2b: _chatParticipantsForbidden,
  0x3f460fed: _chatParticipants,
  0x37c1011c: _chatPhotoEmpty,
  0x475cdbd5: _chatPhoto,
  0x83e5de54: _messageEmpty,
  0x452c0e65: _message,
  0x9e19a1f6: _messageService,
  0x3ded6320: _messageMediaEmpty,
  0x695150d7: _messageMediaPhoto,
  0x56e0d474: _messageMediaGeo,
  0xcbf24940: _messageMediaContact,
  0x9f84f49e: _messageMediaUnsupported,
  0xb6aef7b0: _messageActionEmpty,
  0xa6638b9a: _messageActionChatCreate,
  0xb5a1ce5a: _messageActionChatEditTitle,
  0x7fcb13a8: _messageActionChatEditPhoto,
  0x95e3fbef: _messageActionChatDeletePhoto,
  0x488a7337: _messageActionChatAddUser,
  0xb2ae9b0c: _messageActionChatDeleteUser,
  0x2c171f72: _dialog,
  0x2331b22d: _photoEmpty,
  0xd07504a5: _photo,
  0xe17e23c: _photoSizeEmpty,
  0x77bfb61b: _photoSize,
  0xe9a734fa: _photoCachedSize,
  0x1117dd5f: _geoPointEmpty,
  0x296f104: _geoPoint,
  0x5e002502: _authSentCode,
  0xcd050916: _authAuthorization,
  0xdf969c2d: _authExportedAuthorization,
  0xb8bc5b0c: _inputNotifyPeer,
  0x193b4417: _inputNotifyUsers,
  0x4a95e84e: _inputNotifyChats,
  0x9c3d198e: _inputPeerNotifySettings,
  0xaf509d20: _peerNotifySettings,
  0x818426cd: _peerSettings,
  0xa437c3ed: _wallPaper,
  0x58dbcab8: _inputReportReasonSpam,
  0x1e22c78d: _inputReportReasonViolence,
  0x2e59d922: _inputReportReasonPornography,
  0xadf44ee3: _inputReportReasonChildAbuse,
  0xe1746d0a: _inputReportReasonOther,
  0xedf17c12: _userFull,
  0xf911c994: _contact,
  0xd0028438: _importedContact,
  0x561bc879: _contactBlocked,
  0xd3680c61: _contactStatus,
  0xb74ba9d2: _contactsContactsNotModified,
  0xeae87e42: _contactsContacts,
  0x77d01c3b: _contactsImportedContacts,
  0x1c138d15: _contactsBlocked,
  0x900802a1: _contactsBlockedSlice,
  0x15ba6c40: _messagesDialogs,
  0x71e094f3: _messagesDialogsSlice,
  0x8c718e87: _messagesMessages,
  0xc8edce1e: _messagesMessagesSlice,
  0x64ff9fd5: _messagesChats,
  0xe5d7d19c: _messagesChatFull,
  0xb45c69d1: _messagesAffectedHistory,
  0x57e2f66c: _inputMessagesFilterEmpty,
  0x9609a51c: _inputMessagesFilterPhotos,
  0x9fc00e65: _inputMessagesFilterVideo,
  0x56e9f0e4: _inputMessagesFilterPhotoVideo,
  0x9eddf188: _inputMessagesFilterDocument,
  0x7ef0dd87: _inputMessagesFilterUrl,
  0xffc86587: _inputMessagesFilterGif,
  0x1f2b0afd: _updateNewMessage,
  0x4e90bfd6: _updateMessageID,
  0xa20db0e5: _updateDeleteMessages,
  0x5c486927: _updateUserTyping,
  0x9a65ea1f: _updateChatUserTyping,
  0x7761198: _updateChatParticipants,
  0x1bfbd823: _updateUserStatus,
  0xa7332b73: _updateUserName,
  0x95313b0c: _updateUserPhoto,
  0xa56c2a3e: _updatesState,
  0x5d75a138: _updatesDifferenceEmpty,
  0xf49ca0: _updatesDifference,
  0xa8fb1981: _updatesDifferenceSlice,
  0xe317af7e: _updatesTooLong,
  0x914fbf11: _updateShortMessage,
  0x16812688: _updateShortChatMessage,
  0x78d4dec1: _updateShort,
  0x725b04c3: _updatesCombined,
  0x74ae4240: _updates,
  0x8dca6aa5: _photosPhotos,
  0x15051f54: _photosPhotosSlice,
  0x20212ca8: _photosPhoto,
  0x96a18d5: _uploadFile,
  0x18b7a10d: _dcOption,
  0x330b4067: _config,
  0x8e1a1775: _nearestDc,
  0x1da7158f: _helpAppUpdate,
  0xc45a6536: _helpNoAppUpdate,
  0x18cb9f78: _helpInviteText,
  0x12bcbd9a: _updateNewEncryptedMessage,
  0x1710f156: _updateEncryptedChatTyping,
  0xb4a2e88d: _updateEncryption,
  0x38fe25b7: _updateEncryptedMessagesRead,
  0xab7ec0a0: _encryptedChatEmpty,
  0x3bf703dc: _encryptedChatWaiting,
  0xc878527e: _encryptedChatRequested,
  0xfa56ce36: _encryptedChat,
  0x13d6dd27: _encryptedChatDiscarded,
  0xf141b5e1: _inputEncryptedChat,
  0xc21f497e: _encryptedFileEmpty,
  0x4a70994c: _encryptedFile,
  0x1837c364: _inputEncryptedFileEmpty,
  0x64bd0306: _inputEncryptedFileUploaded,
  0x5a17b5e5: _inputEncryptedFile,
  0xf5235d55: _inputEncryptedFileLocation,
  0xed18c118: _encryptedMessage,
  0x23734b06: _encryptedMessageService,
  0xc0e24635: _messagesDhConfigNotModified,
  0x2c221edd: _messagesDhConfig,
  0x560f8935: _messagesSentEncryptedMessage,
  0x9493ff32: _messagesSentEncryptedFile,
  0xfa4f0bb5: _inputFileBig,
  0x2dc173c8: _inputEncryptedFileBigUploaded,
  0xea4b0e5c: _updateChatParticipantAdd,
  0x6e5f8c22: _updateChatParticipantDelete,
  0x8e5e9873: _updateDcOptions,
  0x5b38c6c1: _inputMediaUploadedDocument,
  0x23ab23d2: _inputMediaDocument,
  0x9cb070d7: _messageMediaDocument,
  0x72f0eaae: _inputDocumentEmpty,
  0x1abfb575: _inputDocument,
  0xbad07584: _inputDocumentFileLocation,
  0x36f8c871: _documentEmpty,
  0x9ba29cc1: _document,
  0x17c6b5f6: _helpSupport,
  0x9fd40bd8: _notifyPeer,
  0xb4c83b4c: _notifyUsers,
  0xc007cec3: _notifyChats,
  0x80ece81a: _updateUserBlocked,
  0xbec268ef: _updateNotifySettings,
  0x16bf744e: _sendMessageTypingAction,
  0xfd5ec8f5: _sendMessageCancelAction,
  0xa187d66f: _sendMessageRecordVideoAction,
  0xe9763aec: _sendMessageUploadVideoAction,
  0xd52f73f7: _sendMessageRecordAudioAction,
  0xf351d7ab: _sendMessageUploadAudioAction,
  0xd1d34a26: _sendMessageUploadPhotoAction,
  0xaa0cd9e4: _sendMessageUploadDocumentAction,
  0x176f8ba1: _sendMessageGeoLocationAction,
  0x628cbc6f: _sendMessageChooseContactAction,
  0xb3134d9d: _contactsFound,
  0xebe46819: _updateServiceNotification,
  0xe26f42f1: _userStatusRecently,
  0x7bf09fc: _userStatusLastWeek,
  0x77ebc742: _userStatusLastMonth,
  0xee3b272a: _updatePrivacy,
  0x4f96cb18: _inputPrivacyKeyStatusTimestamp,
  0xbc2eab30: _privacyKeyStatusTimestamp,
  0xd09e07b: _inputPrivacyValueAllowContacts,
  0x184b35ce: _inputPrivacyValueAllowAll,
  0x131cc67f: _inputPrivacyValueAllowUsers,
  0xba52007: _inputPrivacyValueDisallowContacts,
  0xd66b66c9: _inputPrivacyValueDisallowAll,
  0x90110467: _inputPrivacyValueDisallowUsers,
  0xfffe1bac: _privacyValueAllowContacts,
  0x65427b82: _privacyValueAllowAll,
  0x4d5bbe0c: _privacyValueAllowUsers,
  0xf888fa1a: _privacyValueDisallowContacts,
  0x8b73e763: _privacyValueDisallowAll,
  0xc7f49b7: _privacyValueDisallowUsers,
  0x50a04e45: _accountPrivacyRules,
  0xb8d0afdf: _accountDaysTTL,
  0x12b9417b: _updateUserPhone,
  0x6c37c15c: _documentAttributeImageSize,
  0x11b58939: _documentAttributeAnimated,
  0x6319d612: _documentAttributeSticker,
  0xef02ce6: _documentAttributeVideo,
  0x9852f9c6: _documentAttributeAudio,
  0x15590068: _documentAttributeFilename,
  0xf1749a22: _messagesStickersNotModified,
  0xe4599bbd: _messagesStickers,
  0x12b299d4: _stickerPack,
  0xe86602c3: _messagesAllStickersNotModified,
  0xedfd405f: _messagesAllStickers,
  0x9c974fdf: _updateReadHistoryInbox,
  0x2f2f21bf: _updateReadHistoryOutbox,
  0x84d19185: _messagesAffectedMessages,
  0x7f891213: _updateWebPage,
  0xeb1477e8: _webPageEmpty,
  0xc586da1c: _webPagePending,
  0xfa64e172: _webPage,
  0xa32dd600: _messageMediaWebPage,
  0xad01d61d: _authorization,
  0x1250abde: _accountAuthorizations,
  0xad2641f8: _accountPassword,
  0x9a5c33e5: _accountPasswordSettings,
  0xc23727c9: _accountPasswordInputSettings,
  0x137948a5: _authPasswordRecovery,
  0xc13d1c11: _inputMediaVenue,
  0x2ec0533f: _messageMediaVenue,
  0xa384b779: _receivedNotifyMessage,
  0x69df3769: _chatInviteEmpty,
  0xfc2e05bc: _chatInviteExported,
  0x5a686d7c: _chatInviteAlready,
  0xdfc2f58e: _chatInvite,
  0xf89cf5e8: _messageActionChatJoinedByLink,
  0x68c13933: _updateReadMessagesContents,
  0xffb62b95: _inputStickerSetEmpty,
  0x9de7a269: _inputStickerSetID,
  0x861cc8a0: _inputStickerSetShortName,
  0xeeb46f27: _stickerSet,
  0xb60a24a6: _messagesStickerSet,
  0x938458c1: _user,
  0xc27ac8c7: _botCommand,
  0x98e81d3a: _botInfo,
  0xa2fa4880: _keyboardButton,
  0x77608b83: _keyboardButtonRow,
  0xa03e5b85: _replyKeyboardHide,
  0xf4108aa0: _replyKeyboardForceReply,
  0x3502758c: _replyKeyboardMarkup,
  0x7b8e7de6: _inputPeerUser,
  0xd8292816: _inputUser,
  0xbb92ba95: _messageEntityUnknown,
  0xfa04579d: _messageEntityMention,
  0x6f635b0d: _messageEntityHashtag,
  0x6cef8ac7: _messageEntityBotCommand,
  0x6ed02538: _messageEntityUrl,
  0x64e475c2: _messageEntityEmail,
  0xbd610bc9: _messageEntityBold,
  0x826f8b60: _messageEntityItalic,
  0x28a20571: _messageEntityCode,
  0x73924be0: _messageEntityPre,
  0x76a6d327: _messageEntityTextUrl,
  0x11f1331c: _updateShortSentMessage,
  0xee8c1e86: _inputChannelEmpty,
  0xafeb712e: _inputChannel,
  0xbddde532: _peerChannel,
  0x20adaef8: _inputPeerChannel,
  0xd31a961e: _channel,
  0x289da732: _channelForbidden,
  0x7f077ad9: _contactsResolvedPeer,
  0x2d895c74: _channelFull,
  0xae30253: _messageRange,
  0x99262e37: _messagesChannelMessages,
  0x95d2ac92: _messageActionChannelCreate,
  0xeb0467fb: _updateChannelTooLong,
  0xb6d45656: _updateChannel,
  0x62ba04d9: _updateNewChannelMessage,
  0x330b5424: _updateReadChannelInbox,
  0xc37521c9: _updateDeleteChannelMessages,
  0x98a12b4b: _updateChannelMessageViews,
  0x3e11affb: _updatesChannelDifferenceEmpty,
  0xa4bcc6fe: _updatesChannelDifferenceTooLong,
  0x2064674e: _updatesChannelDifference,
  0x94d42ee7: _channelMessagesFilterEmpty,
  0xcd77d957: _channelMessagesFilter,
  0x15ebac1d: _channelParticipant,
  0xa3289a6d: _channelParticipantSelf,
  0x808d15a4: _channelParticipantCreator,
  0xde3f3c79: _channelParticipantsRecent,
  0xb4608969: _channelParticipantsAdmins,
  0xa3b54985: _channelParticipantsKicked,
  0xf56ee2a8: _channelsChannelParticipants,
  0xd0d9b163: _channelsChannelParticipant,
  0xda13538a: _chatParticipantCreator,
  0xe2d6e436: _chatParticipantAdmin,
  0xb6901959: _updateChatParticipantAdmin,
  0x51bdb021: _messageActionChatMigrateTo,
  0xb055eaee: _messageActionChannelMigrateFrom,
  0xb0d1865b: _channelParticipantsBots,
  0x780a0310: _helpTermsOfService,
  0x688a30aa: _updateNewStickerSet,
  0xbb2d201: _updateStickerSetsOrder,
  0x43ae3dec: _updateStickerSets,
  0x162ecc1f: _foundGif,
  0x9c750409: _foundGifCached,
  0x4843b0fd: _inputMediaGifExternal,
  0x450a1c0a: _messagesFoundGifs,
  0xe8025ca2: _messagesSavedGifsNotModified,
  0x2e0709a5: _messagesSavedGifs,
  0x9375341e: _updateSavedGifs,
  0x3380c786: _inputBotInlineMessageMediaAuto,
  0x3dcd7a87: _inputBotInlineMessageText,
  0x88bf9319: _inputBotInlineResult,
  0x764cf810: _botInlineMessageMediaAuto,
  0x8c7f65e2: _botInlineMessageText,
  0x11965f3a: _botInlineResult,
  0x947ca848: _messagesBotResults,
  0x54826690: _updateBotInlineQuery,
  0xe48f964: _updateBotInlineSend,
  0x50f5c392: _inputMessagesFilterVoice,
  0x3751b49e: _inputMessagesFilterMusic,
  0xbdfb0426: _inputPrivacyKeyChatInvite,
  0x500e6dfa: _privacyKeyChatInvite,
  0x5dab1af4: _exportedMessageLink,
  0xec338270: _messageFwdHeader,
  0x1b3f4df7: _updateEditChannelMessage,
  0x98592475: _updateChannelPinnedMessage,
  0x94bd38ed: _messageActionPinMessage,
  0x72a3158c: _authCodeTypeSms,
  0x741cd3e3: _authCodeTypeCall,
  0x226ccefb: _authCodeTypeFlashCall,
  0x3dbb5986: _authSentCodeTypeApp,
  0xc000bba2: _authSentCodeTypeSms,
  0x5353e5a7: _authSentCodeTypeCall,
  0xab03c6d9: _authSentCodeTypeFlashCall,
  0x258aff05: _keyboardButtonUrl,
  0x683a5e46: _keyboardButtonCallback,
  0xb16a6c29: _keyboardButtonRequestPhone,
  0xfc796b3f: _keyboardButtonRequestGeoLocation,
  0x568a748: _keyboardButtonSwitchInline,
  0x48a30254: _replyInlineMarkup,
  0x36585ea4: _messagesBotCallbackAnswer,
  0xe73547e1: _updateBotCallbackQuery,
  0x26b5dde6: _messagesMessageEditData,
  0xe40370a3: _updateEditMessage,
  0xc1b15d65: _inputBotInlineMessageMediaGeo,
  0x417bbf11: _inputBotInlineMessageMediaVenue,
  0xa6edbffd: _inputBotInlineMessageMediaContact,
  0xb722de65: _botInlineMessageMediaGeo,
  0x8a86659c: _botInlineMessageMediaVenue,
  0x18d1cdc2: _botInlineMessageMediaContact,
  0xa8d864a7: _inputBotInlineResultPhoto,
  0xfff8fdc4: _inputBotInlineResultDocument,
  0x17db940b: _botInlineMediaResult,
  0x890c3d89: _inputBotInlineMessageID,
  0xf9d27a5a: _updateInlineBotCallbackQuery,
  0x3c20629f: _inlineBotSwitchPM,
  0x3371c354: _messagesPeerDialogs,
  0xedcdc05b: _topPeer,
  0xab661b5b: _topPeerCategoryBotsPM,
  0x148677e2: _topPeerCategoryBotsInline,
  0x637b7ed: _topPeerCategoryCorrespondents,
  0xbd17a14a: _topPeerCategoryGroups,
  0x161d9628: _topPeerCategoryChannels,
  0xfb834291: _topPeerCategoryPeers,
  0xde266ef5: _contactsTopPeersNotModified,
  0x70b772a8: _contactsTopPeers,
  0x352dca58: _messageEntityMentionName,
  0x208e68c9: _inputMessageEntityMentionName,
  0x3a20ecb8: _inputMessagesFilterChatPhotos,
  0x25d6c9c7: _updateReadChannelOutbox,
  0xee2bb969: _updateDraftMessage,
  0x1b0c841a: _draftMessageEmpty,
  0xfd8e711f: _draftMessage,
  0x9fbab604: _messageActionHistoryClear,
  0x4ede3cf: _messagesFeaturedStickersNotModified,
  0xf89d88e5: _messagesFeaturedStickers,
  0x571d2742: _updateReadFeaturedStickers,
  0xb17f890: _messagesRecentStickersNotModified,
  0x22f3afb3: _messagesRecentStickers,
  0x9a422c20: _updateRecentStickers,
  0x4fcba9c8: _messagesArchivedStickers,
  0x38641628: _messagesStickerSetInstallResultSuccess,
  0x35e410a8: _messagesStickerSetInstallResultArchive,
  0x6410a5d2: _stickerSetCovered,
  0xa229dd06: _updateConfig,
  0x3354678f: _updatePtsChanged,
  0xe5bbfe1a: _inputMediaPhotoExternal,
  0xfb52dc99: _inputMediaDocumentExternal,
  0x3407e51b: _stickerSetMultiCovered,
  0xaed6dbb2: _maskCoords,
  0x9801d2f7: _documentAttributeHasStickers,
  0x4a992157: _inputStickeredMediaPhoto,
  0x438865b: _inputStickeredMediaDocument,
  0xbdf9653b: _game,
  0x4fa417f2: _inputBotInlineResultGame,
  0x4b425864: _inputBotInlineMessageGame,
  0xfdb19008: _messageMediaGame,
  0xd33f43f3: _inputMediaGame,
  0x32c3e77: _inputGameID,
  0xc331e80a: _inputGameShortName,
  0x50f41ccf: _keyboardButtonGame,
  0x92a72876: _messageActionGameScore,
  0x58fffcd0: _highScore,
  0x9a3bfd99: _messagesHighScores,
  0x4afe8f6d: _updatesDifferenceTooLong,
  0x40771900: _updateChannelWebPage,
  0x9cd81144: _messagesChatsSlice,
  0xdc3d824f: _textEmpty,
  0x744694e0: _textPlain,
  0x6724abc4: _textBold,
  0xd912a59c: _textItalic,
  0xc12622c4: _textUnderline,
  0x9bf8bb95: _textStrike,
  0x6c3f19b9: _textFixed,
  0x3c2884c1: _textUrl,
  0xde5a0dd6: _textEmail,
  0x7e6260d7: _textConcat,
  0x13567e8a: _pageBlockUnsupported,
  0x70abc3fd: _pageBlockTitle,
  0x8ffa9a1f: _pageBlockSubtitle,
  0xbaafe5e0: _pageBlockAuthorDate,
  0xbfd064ec: _pageBlockHeader,
  0xf12bb6e1: _pageBlockSubheader,
  0x467a0766: _pageBlockParagraph,
  0xc070d93e: _pageBlockPreformatted,
  0x48870999: _pageBlockFooter,
  0xdb20b188: _pageBlockDivider,
  0xce0d37b0: _pageBlockAnchor,
  0xe4e88011: _pageBlockList,
  0x263d7c26: _pageBlockBlockquote,
  0x4f4456d3: _pageBlockPullquote,
  0x1759c560: _pageBlockPhoto,
  0x7c8fe7b6: _pageBlockVideo,
  0x39f23300: _pageBlockCover,
  0xa8718dc5: _pageBlockEmbed,
  0xf259a80b: _pageBlockEmbedPost,
  0x65a0fa4d: _pageBlockCollage,
  0x31f9590: _pageBlockSlideshow,
  0x85849473: _webPageNotModified,
  0xfabadc5f: _inputPrivacyKeyPhoneCall,
  0x3d662b7b: _privacyKeyPhoneCall,
  0xdd6a8f48: _sendMessageGamePlayAction,
  0x85e42301: _phoneCallDiscardReasonMissed,
  0xe095c1a0: _phoneCallDiscardReasonDisconnect,
  0x57adc690: _phoneCallDiscardReasonHangup,
  0xfaf7e8c9: _phoneCallDiscardReasonBusy,
  0x6e6fe51c: _updateDialogPinned,
  0xfa0f3ca2: _updatePinnedDialogs,
  0x7d748d04: _dataJSON,
  0x8317c0c3: _updateBotWebhookJSON,
  0x9b9240a6: _updateBotWebhookJSONQuery,
  0xcb296bf8: _labeledPrice,
  0xc30aa358: _invoice,
  0xf4e096c3: _inputMediaInvoice,
  0xea02c27e: _paymentCharge,
  0x8f31b327: _messageActionPaymentSentMe,
  0x84551347: _messageMediaInvoice,
  0x1e8caaeb: _postAddress,
  0x909c3f94: _paymentRequestedInfo,
  0xafd93fbb: _keyboardButtonBuy,
  0x40699cd0: _messageActionPaymentSent,
  0xcdc27a1f: _paymentSavedCredentialsCard,
  0x1c570ed1: _webDocument,
  0x9bed434d: _inputWebDocument,
  0xc239d686: _inputWebFileLocation,
  0x21e753bc: _uploadWebFile,
  0x3f56aea3: _paymentsPaymentForm,
  0xd1451883: _paymentsValidatedRequestedInfo,
  0x4e5f810d: _paymentsPaymentResult,
  0x500911e1: _paymentsPaymentReceipt,
  0xfb8fe43c: _paymentsSavedInfo,
  0xc10eb2cf: _inputPaymentCredentialsSaved,
  0x3417d728: _inputPaymentCredentials,
  0xdb64fd34: _accountTmpPassword,
  0xb6213cdf: _shippingOption,
  0xe0cdc940: _updateBotShippingQuery,
  0x5d2f3aa9: _updateBotPrecheckoutQuery,
  0xffa0a496: _inputStickerSetItem,
  0xab0f6b1e: _updatePhoneCall,
  0x1e36fded: _inputPhoneCall,
  0x5366c915: _phoneCallEmpty,
  0x1b8f4ad1: _phoneCallWaiting,
  0x87eabb53: _phoneCallRequested,
  0x997c454a: _phoneCallAccepted,
  0x8742ae7f: _phoneCall,
  0x50ca4de1: _phoneCallDiscarded,
  0x9d4c17c0: _phoneConnection,
  0xa2bb35cb: _phoneCallProtocol,
  0xec82e140: _phonePhoneCall,
  0x80c99768: _inputMessagesFilterPhoneCalls,
  0x80e11a7f: _messageActionPhoneCall,
  0x7a7c17a4: _inputMessagesFilterRoundVoice,
  0xb549da53: _inputMessagesFilterRoundVideo,
  0x88f27fbc: _sendMessageRecordRoundAction,
  0x243e1c66: _sendMessageUploadRoundAction,
  0xf18cda44: _uploadFileCdnRedirect,
  0xeea8e46e: _uploadCdnFileReuploadNeeded,
  0xa99fca4f: _uploadCdnFile,
  0xc982eaba: _cdnPublicKey,
  0x5725e40a: _cdnConfig,
  0xef1751b5: _pageBlockChannel,
  0xcad181f6: _langPackString,
  0x6c47ac9f: _langPackStringPluralized,
  0x2979eeb2: _langPackStringDeleted,
  0xf385c1f6: _langPackDifference,
  0xeeca5ce3: _langPackLanguage,
  0x46560264: _updateLangPackTooLong,
  0x56022f4d: _updateLangPack,
  0xccbebbaf: _channelParticipantAdmin,
  0x1c0facaf: _channelParticipantBanned,
  0x1427a5e1: _channelParticipantsBanned,
  0x656ac4b: _channelParticipantsSearch,
  0xe6dfb825: _channelAdminLogEventActionChangeTitle,
  0x55188a2e: _channelAdminLogEventActionChangeAbout,
  0x6a4afc38: _channelAdminLogEventActionChangeUsername,
  0x434bd2af: _channelAdminLogEventActionChangePhoto,
  0x1b7907ae: _channelAdminLogEventActionToggleInvites,
  0x26ae0971: _channelAdminLogEventActionToggleSignatures,
  0xe9e82c18: _channelAdminLogEventActionUpdatePinned,
  0x709b2405: _channelAdminLogEventActionEditMessage,
  0x42e047bb: _channelAdminLogEventActionDeleteMessage,
  0x183040d3: _channelAdminLogEventActionParticipantJoin,
  0xf89777f2: _channelAdminLogEventActionParticipantLeave,
  0xe31c34d8: _channelAdminLogEventActionParticipantInvite,
  0xe6d83d7e: _channelAdminLogEventActionParticipantToggleBan,
  0xd5676710: _channelAdminLogEventActionParticipantToggleAdmin,
  0x3b5a3e40: _channelAdminLogEvent,
  0xed8af74d: _channelsAdminLogResults,
  0xea107ae4: _channelAdminLogEventsFilter,
  0x1e76a78c: _topPeerCategoryPhoneCalls,
  0x804361ea: _pageBlockAudio,
  0x5ce14175: _popularContact,
  0x4792929b: _messageActionScreenshotTaken,
  0x9e8fa6d3: _messagesFavedStickersNotModified,
  0xf37f2f16: _messagesFavedStickers,
  0xe511996d: _updateFavedStickers,
  0x89893b45: _updateChannelReadMessagesContents,
  0xc1f8e69a: _inputMessagesFilterMyMentions,
  0x7084a7be: _updateContactsReset,
  0xb1c3caa7: _channelAdminLogEventActionChangeStickerSet,
  0xfae69f56: _messageActionCustomAction,
  0xaa1c39f: _inputPaymentCredentialsApplePay,
  0xca05d50e: _inputPaymentCredentialsAndroidPay,
  0xe7026d0d: _inputMessagesFilterGeo,
  0xe062db83: _inputMessagesFilterContacts,
  0x70db6837: _updateChannelAvailableMessages,
  0x5f5c95f1: _channelAdminLogEventActionTogglePreHistoryHidden,
  0xce4e82fd: _inputMediaGeoLive,
  0x7c3c2609: _messageMediaGeoLive,
  0x46e1d13d: _recentMeUrlUnknown,
  0x8dbc3336: _recentMeUrlUser,
  0xa01b22f9: _recentMeUrlChat,
  0xeb49081d: _recentMeUrlChatInvite,
  0xbc0a57dc: _recentMeUrlStickerSet,
  0xe0310d7: _helpRecentMeUrls,
  0xf0173fe9: _channelsChannelParticipantsNotModified,
  0x74535f21: _messagesMessagesNotModified,
  0x1cc6e91f: _inputSingleMedia,
  0xcac943f2: _webAuthorization,
  0xed56c9fc: _accountWebAuthorizations,
  0xa676a322: _inputMessageID,
  0xbad88395: _inputMessageReplyTo,
  0x86872538: _inputMessagePinned,
  0x9b69e34b: _messageEntityPhone,
  0x4c4e743f: _messageEntityCashtag,
  0xabe9affe: _messageActionBotAllowed,
  0xfcaafeb7: _inputDialogPeer,
  0xe56dbf05: _dialogPeer,
  0xd54b65d: _messagesFoundStickerSetsNotModified,
  0x5108d648: _messagesFoundStickerSets,
  0x6242c773: _fileHash,
  0xf9c8bcc6: _webDocumentNoProxy,
  0x75588b3f: _inputClientProxy,
  0xe09e1fb8: _helpProxyDataEmpty,
  0x2bf7ee23: _helpProxyDataPromo,
  0xe3309f7f: _helpTermsOfServiceUpdateEmpty,
  0x28ecf961: _helpTermsOfServiceUpdate,
  0x3334b0f0: _inputSecureFileUploaded,
  0x5367e5be: _inputSecureFile,
  0xcbc7ee28: _inputSecureFileLocation,
  0x64199744: _secureFileEmpty,
  0xe0277a62: _secureFile,
  0x8aeabec3: _secureData,
  0x7d6099dd: _securePlainPhone,
  0x21ec5a5f: _securePlainEmail,
  0x9d2a81e3: _secureValueTypePersonalDetails,
  0x3dac6a00: _secureValueTypePassport,
  0x6e425c4: _secureValueTypeDriverLicense,
  0xa0d0744b: _secureValueTypeIdentityCard,
  0x99a48f23: _secureValueTypeInternalPassport,
  0xcbe31e26: _secureValueTypeAddress,
  0xfc36954e: _secureValueTypeUtilityBill,
  0x89137c0d: _secureValueTypeBankStatement,
  0x8b883488: _secureValueTypeRentalAgreement,
  0x99e3806a: _secureValueTypePassportRegistration,
  0xea02ec33: _secureValueTypeTemporaryRegistration,
  0xb320aadb: _secureValueTypePhone,
  0x8e3ca7ee: _secureValueTypeEmail,
  0x187fa0ca: _secureValue,
  0xdb21d0a7: _inputSecureValue,
  0xed1ecdb0: _secureValueHash,
  0xe8a40bd9: _secureValueErrorData,
  0xbe3dfa: _secureValueErrorFrontSide,
  0x868a2aa5: _secureValueErrorReverseSide,
  0xe537ced6: _secureValueErrorSelfie,
  0x7a700873: _secureValueErrorFile,
  0x666220e9: _secureValueErrorFiles,
  0x33f0ea47: _secureCredentialsEncrypted,
  0xad2e1cd8: _accountAuthorizationForm,
  0x811f854f: _accountSentEmailCode,
  0x1b287353: _messageActionSecureValuesSentMe,
  0xd95c6154: _messageActionSecureValuesSent,
  0x66afa166: _helpDeepLinkInfoEmpty,
  0x6a4ee832: _helpDeepLinkInfo,
  0x1142bd56: _savedPhoneContact,
  0x4dba4501: _accountTakeout,
  0x29be5899: _inputTakeoutFileLocation,
  0xe16459c3: _updateDialogUnreadMark,
  0xf0e3e596: _messagesDialogsNotModified,
  0x9f2221c9: _inputWebFileGeoPointLocation,
  0xb52c939d: _contactsTopPeersDisabled,
  0x9b89f93a: _inputReportReasonCopyright,
  0xd45ab096: _passwordKdfAlgoUnknown,
  0x4a8537: _securePasswordKdfAlgoUnknown,
  0xbbf2dda0: _securePasswordKdfAlgoPBKDF2HMACSHA512iter100000,
  0x86471d92: _securePasswordKdfAlgoSHA512,
  0x1527bcac: _secureSecretSettings,
  0x3a912d4a: _passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow,
  0x9880f658: _inputCheckPasswordEmpty,
  0xd27ff082: _inputCheckPasswordSRP,
  0x869d758f: _secureValueError,
  0xa1144770: _secureValueErrorTranslationFile,
  0x34636dd8: _secureValueErrorTranslationFiles,
  0x829d99da: _secureRequiredType,
  0x27477b4: _secureRequiredTypeOneOf,
  0xbfb9f457: _helpPassportConfigNotModified,
  0xa098d6af: _helpPassportConfig,
  0x1d1b1245: _inputAppEvent,
  0xc0de1bd9: _jsonObjectValue,
  0x3f6d7b68: _jsonNull,
  0xc7345e6a: _jsonBool,
  0x2be0dfa4: _jsonNumber,
  0xb71e767a: _jsonString,
  0xf7444763: _jsonArray,
  0x99c1d49d: _jsonObject,
  0x4c43da18: _updateUserPinnedMessage,
  0xe10db349: _updateChatPinnedMessage,
  0xb1db7c7e: _inputNotifyBroadcasts,
  0xd612e8ef: _notifyBroadcasts,
  0xed6a8504: _textSubscript,
  0xc7fb5e01: _textSuperscript,
  0x34b8621: _textMarked,
  0x1ccb966a: _textPhone,
  0x81ccf4f: _textImage,
  0x1e148390: _pageBlockKicker,
  0x34566b6a: _pageTableCell,
  0xe0c0c5e5: _pageTableRow,
  0xbf4dea82: _pageBlockTable,
  0x6f747657: _pageCaption,
  0xb92fb6cd: _pageListItemText,
  0x25e073fc: _pageListItemBlocks,
  0x5e068047: _pageListOrderedItemText,
  0x98dd8936: _pageListOrderedItemBlocks,
  0x9a8ae1e1: _pageBlockOrderedList,
  0x76768bed: _pageBlockDetails,
  0xb390dc08: _pageRelatedArticle,
  0x16115a96: _pageBlockRelatedArticles,
  0xa44f3ef6: _pageBlockMap,
  0xae891bec: _page,
  0xdb9e70d2: _inputPrivacyKeyPhoneP2P,
  0x39491cc8: _privacyKeyPhoneP2P,
  0x35553762: _textAnchor,
  0x8c05f1c9: _helpSupportName,
  0xf3ae2eed: _helpUserInfoEmpty,
  0x1eb3758: _helpUserInfo,
  0xf3f25f76: _messageActionContactSignUp,
  0xaca1657b: _updateMessagePoll,
  0x6ca9c2e9: _pollAnswer,
  0xd5529d06: _poll,
  0x3b6ddad2: _pollAnswerVoters,
  0x5755785a: _pollResults,
  0x6b3765b: _inputMediaPoll,
  0x4bd6e798: _messageMediaPoll,
  0xf041e250: _chatOnlines,
  0x47a971e0: _statsURL,
  0xe0b0bc2e: _photoStrippedSize,
  0x5fb224d5: _chatAdminRights,
  0x9f120418: _chatBannedRights,
  0x54c01850: _updateChatDefaultBannedRights,
  0xe630b979: _inputWallPaper,
  0x72091c80: _inputWallPaperSlug,
  0xbb6ae88d: _channelParticipantsContacts,
  0x2df5fc0a: _channelAdminLogEventActionDefaultBannedRights,
  0x8f079643: _channelAdminLogEventActionStopPoll,
  0x1c199183: _accountWallPapersNotModified,
  0x702b65a9: _accountWallPapers,
  0xdebebe83: _codeSettings,
  0xa12f40b8: _wallPaperSettings,
  0xd246fd47: _autoDownloadSettings,
  0x63cacf26: _accountAutoDownloadSettings,
  0xd5b3b9f9: _emojiKeyword,
  0x236df622: _emojiKeywordDeleted,
  0x5cc761bd: _emojiKeywordsDifference,
  0xa575739d: _emojiURL,
  0xb3fb5361: _emojiLanguage,
  0xa4dd4c08: _inputPrivacyKeyForwards,
  0x69ec56a3: _privacyKeyForwards,
  0x5719bacc: _inputPrivacyKeyProfilePhoto,
  0x96151fed: _privacyKeyProfilePhoto,
  0xbc7fc6cd: _fileLocationToBeDeprecated,
  0x40181ffe: _inputPhotoFileLocation,
  0x27d69997: _inputPeerPhotoFileLocation,
  0xdbaeae9: _inputStickerSetThumb,
  0xff544e65: _folder,
  0x71bd134c: _dialogFolder,
  0x64600527: _inputDialogPeerFolder,
  0x514519e2: _dialogPeerFolder,
  0xfbd2c296: _inputFolderPeer,
  0xe9baa668: _folderPeer,
  0x19360dc0: _updateFolderPeers,
  0x2d117597: _inputUserFromMessage,
  0x2a286531: _inputChannelFromMessage,
  0x17bae2e6: _inputPeerUserFromMessage,
  0x9c95f7bb: _inputPeerChannelFromMessage,
  0x352dafa: _inputPrivacyKeyPhoneNumber,
  0xd19ae46d: _privacyKeyPhoneNumber,
  0xa8406ca9: _topPeerCategoryForwardUsers,
  0xfbeec0f0: _topPeerCategoryForwardChats,
  0xa26f881b: _channelAdminLogEventActionChangeLinkedChat,
  0xe844ebff: _messagesSearchCounter,
  0x10b78d29: _keyboardButtonUrlAuth,
  0xd02e7fd4: _inputKeyboardButtonUrlAuth,
  0x92d33a0e: _urlAuthResultRequest,
  0x8f8c0e4e: _urlAuthResultAccepted,
  0xa9d6db1f: _urlAuthResultDefault,
  0x4c81c1ba: _inputPrivacyValueAllowChatParticipants,
  0xd82363af: _inputPrivacyValueDisallowChatParticipants,
  0x18be796b: _privacyValueAllowChatParticipants,
  0xacae0690: _privacyValueDisallowChatParticipants,
  0x9c4e7e8b: _messageEntityUnderline,
  0xbf0693d4: _messageEntityStrike,
  0x20df5d0: _messageEntityBlockquote,
  0x6a7e7366: _updatePeerSettings,
  0xbfb5ad8b: _channelLocationEmpty,
  0x209b82db: _channelLocation,
  0xca461b5d: _peerLocated,
  0xb4afcfb0: _updatePeerLocated,
  0xe6b76ae: _channelAdminLogEventActionChangeLocation,
  0xdbd4feed: _inputReportReasonGeoIrrelevant,
  0x53909779: _channelAdminLogEventActionToggleSlowMode,
  0x44747e9a: _authAuthorizationSignUpRequired,
  0xd8411139: _paymentsPaymentVerificationNeeded,
  0x28703c8: _inputStickerSetAnimatedEmoji,
  0x39a51dfb: _updateNewScheduledMessage,
  0x90866cee: _updateDeleteScheduledMessages,
  0xd072acb4: _restrictionReason,
  0x3c5693e9: _inputTheme,
  0xf5890df1: _inputThemeSlug,
  0x483d270c: _themeDocumentNotModified,
  0xf7d90ce0: _theme,
  0xf41eb622: _accountThemesNotModified,
  0x7f676421: _accountThemes,
  0x8216fba3: _updateTheme,
  0xd1219bdd: _inputPrivacyKeyAddedByPhone,
  0x42ffd42b: _privacyKeyAddedByPhone,
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
