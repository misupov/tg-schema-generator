/*******************************************************************************************/
/* This file was automatically generated (https://github.com/misupov/tg-schema-generator). */
/*                                                                                         */
/* Do not make changes to this file unless you know what you are doing -- modify           */
/* the tool instead.                                                                       */
/*                                                                                         */
/* Source: layer108.json                                                                   */
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
let fallbackBuilder: ((stream: ByteStream, o: any) => void) | undefined;

function _error(o: any) {
  i32(o.code);
  str(o.text);
}

function _inputPeerChat(o: any) {
  i32(o.chat_id);
}

function _inputPhoneContact(o: any) {
  i64(o.client_id);
  str(o.phone);
  str(o.first_name);
  str(o.last_name);
}

function _inputFile(o: any) {
  i64(o.id);
  i32(o.parts);
  str(o.name);
  str(o.md5_checksum);
}

function _inputMediaUploadedPhoto(o: any) {
  const flags = 
      has(o.stickers)
    | has(o.ttl_seconds) << 1;
  i32(flags);
  
  obj(o.file);
  flagVector(obj, o.stickers);
  flag(i32, o.ttl_seconds);
}

function _inputMediaPhoto(o: any) {
  const flags = 
      has(o.ttl_seconds);
  i32(flags);
  
  obj(o.id);
  flag(i32, o.ttl_seconds);
}

function _inputMediaGeoPoint(o: any) {
  obj(o.geo_point);
}

function _inputMediaContact(o: any) {
  str(o.phone_number);
  str(o.first_name);
  str(o.last_name);
  str(o.vcard);
}

function _inputChatUploadedPhoto(o: any) {
  obj(o.file);
}

function _inputChatPhoto(o: any) {
  obj(o.id);
}

function _inputGeoPoint(o: any) {
  f64(o.lat);
  f64(o.long);
}

function _inputPhoto(o: any) {
  i64(o.id);
  i64(o.access_hash);
  bytes(o.file_reference);
}

function _inputFileLocation(o: any) {
  i64(o.volume_id);
  i32(o.local_id);
  i64(o.secret);
  bytes(o.file_reference);
}

function _peerUser(o: any) {
  i32(o.user_id);
}

function _peerChat(o: any) {
  i32(o.chat_id);
}

function _userEmpty(o: any) {
  i32(o.id);
}

function _userProfilePhoto(o: any) {
  i64(o.photo_id);
  obj(o.photo_small);
  obj(o.photo_big);
  i32(o.dc_id);
}

function _userStatusOnline(o: any) {
  i32(o.expires);
}

function _userStatusOffline(o: any) {
  i32(o.was_online);
}

function _chatEmpty(o: any) {
  i32(o.id);
}

function _chat(o: any) {
  const flags = 
      has(o.creator)
    | has(o.kicked) << 1
    | has(o.left) << 2
    | has(o.deactivated) << 5
    | has(o.migrated_to) << 6
    | has(o.admin_rights) << 14
    | has(o.default_banned_rights) << 18;
  i32(flags);
  
  i32(o.id);
  str(o.title);
  obj(o.photo);
  i32(o.participants_count);
  i32(o.date);
  i32(o.version);
  flag(obj, o.migrated_to);
  flag(obj, o.admin_rights);
  flag(obj, o.default_banned_rights);
}

function _chatForbidden(o: any) {
  i32(o.id);
  str(o.title);
}

function _chatFull(o: any) {
  const flags = 
      has(o.can_set_username) << 7
    | has(o.has_scheduled) << 8
    | has(o.chat_photo) << 2
    | has(o.bot_info) << 3
    | has(o.pinned_msg_id) << 6
    | has(o.folder_id) << 11;
  i32(flags);
  
  i32(o.id);
  str(o.about);
  obj(o.participants);
  flag(obj, o.chat_photo);
  obj(o.notify_settings);
  obj(o.exported_invite);
  flagVector(obj, o.bot_info);
  flag(i32, o.pinned_msg_id);
  flag(i32, o.folder_id);
}

function _chatParticipant(o: any) {
  i32(o.user_id);
  i32(o.inviter_id);
  i32(o.date);
}

function _chatParticipantsForbidden(o: any) {
  const flags = 
      has(o.self_participant);
  i32(flags);
  
  i32(o.chat_id);
  flag(obj, o.self_participant);
}

function _chatParticipants(o: any) {
  i32(o.chat_id);
  vector(obj, o.participants);
  i32(o.version);
}

function _chatPhoto(o: any) {
  obj(o.photo_small);
  obj(o.photo_big);
  i32(o.dc_id);
}

function _messageEmpty(o: any) {
  i32(o.id);
}

function _message(o: any) {
  const flags = 
      has(o.out) << 1
    | has(o.mentioned) << 4
    | has(o.media_unread) << 5
    | has(o.silent) << 13
    | has(o.post) << 14
    | has(o.from_scheduled) << 18
    | has(o.legacy) << 19
    | has(o.edit_hide) << 21
    | has(o.from_id) << 8
    | has(o.fwd_from) << 2
    | has(o.via_bot_id) << 11
    | has(o.reply_to_msg_id) << 3
    | has(o.media) << 9
    | has(o.reply_markup) << 6
    | has(o.entities) << 7
    | has(o.views) << 10
    | has(o.edit_date) << 15
    | has(o.post_author) << 16
    | has(o.grouped_id) << 17
    | has(o.restriction_reason) << 22;
  i32(flags);
  
  i32(o.id);
  flag(i32, o.from_id);
  obj(o.to_id);
  flag(obj, o.fwd_from);
  flag(i32, o.via_bot_id);
  flag(i32, o.reply_to_msg_id);
  i32(o.date);
  str(o.message);
  flag(obj, o.media);
  flag(obj, o.reply_markup);
  flagVector(obj, o.entities);
  flag(i32, o.views);
  flag(i32, o.edit_date);
  flag(str, o.post_author);
  flag(i64, o.grouped_id);
  flagVector(obj, o.restriction_reason);
}

function _messageService(o: any) {
  const flags = 
      has(o.out) << 1
    | has(o.mentioned) << 4
    | has(o.media_unread) << 5
    | has(o.silent) << 13
    | has(o.post) << 14
    | has(o.legacy) << 19
    | has(o.from_id) << 8
    | has(o.reply_to_msg_id) << 3
  i32(flags);
  
  i32(o.id);
  flag(i32, o.from_id);
  obj(o.to_id);
  flag(i32, o.reply_to_msg_id);
  i32(o.date);
  obj(o.action);
}

function _messageMediaPhoto(o: any) {
  const flags = 
      has(o.photo)
    | has(o.ttl_seconds) << 2;
  i32(flags);
  
  flag(obj, o.photo);
  flag(i32, o.ttl_seconds);
}

function _messageMediaGeo(o: any) {
  obj(o.geo);
}

function _messageMediaContact(o: any) {
  str(o.phone_number);
  str(o.first_name);
  str(o.last_name);
  str(o.vcard);
  i32(o.user_id);
}

function _messageActionChatCreate(o: any) {
  str(o.title);
  vector(i32, o.users);
}

function _messageActionChatEditTitle(o: any) {
  str(o.title);
}

function _messageActionChatEditPhoto(o: any) {
  obj(o.photo);
}

function _messageActionChatAddUser(o: any) {
  vector(i32, o.users);
}

function _messageActionChatDeleteUser(o: any) {
  i32(o.user_id);
}

function _dialog(o: any) {
  const flags = 
      has(o.pinned) << 2
    | has(o.unread_mark) << 3
    | has(o.pts)
    | has(o.draft) << 1
    | has(o.folder_id) << 4;
  i32(flags);
  
  obj(o.peer);
  i32(o.top_message);
  i32(o.read_inbox_max_id);
  i32(o.read_outbox_max_id);
  i32(o.unread_count);
  i32(o.unread_mentions_count);
  obj(o.notify_settings);
  flag(i32, o.pts);
  flag(obj, o.draft);
  flag(i32, o.folder_id);
}

function _photoEmpty(o: any) {
  i64(o.id);
}

function _photo(o: any) {
  const flags = 
      has(o.has_stickers)
  i32(flags);
  
  i64(o.id);
  i64(o.access_hash);
  bytes(o.file_reference);
  i32(o.date);
  vector(obj, o.sizes);
  i32(o.dc_id);
}

function _photoSizeEmpty(o: any) {
  str(o.type);
}

function _photoSize(o: any) {
  str(o.type);
  obj(o.location);
  i32(o.w);
  i32(o.h);
  i32(o.size);
}

function _photoCachedSize(o: any) {
  str(o.type);
  obj(o.location);
  i32(o.w);
  i32(o.h);
  bytes(o.bytes);
}

function _geoPoint(o: any) {
  f64(o.long);
  f64(o.lat);
  i64(o.access_hash);
}

function _authSentCode(o: any) {
  const flags = 
      has(o.next_type) << 1
    | has(o.timeout) << 2;
  i32(flags);
  
  obj(o.type);
  str(o.phone_code_hash);
  flag(obj, o.next_type);
  flag(i32, o.timeout);
}

function _authAuthorization(o: any) {
  const flags = 
      has(o.tmp_sessions)
  i32(flags);
  
  flag(i32, o.tmp_sessions);
  obj(o.user);
}

function _authExportedAuthorization(o: any) {
  i32(o.id);
  bytes(o.bytes);
}

function _inputNotifyPeer(o: any) {
  obj(o.peer);
}

function _inputPeerNotifySettings(o: any) {
  const flags = 
      has(o.show_previews)
    | has(o.silent) << 1
    | has(o.mute_until) << 2
    | has(o.sound) << 3;
  i32(flags);
  
  flag(bool, o.show_previews);
  flag(bool, o.silent);
  flag(i32, o.mute_until);
  flag(str, o.sound);
}

function _peerNotifySettings(o: any) {
  const flags = 
      has(o.show_previews)
    | has(o.silent) << 1
    | has(o.mute_until) << 2
    | has(o.sound) << 3;
  i32(flags);
  
  flag(bool, o.show_previews);
  flag(bool, o.silent);
  flag(i32, o.mute_until);
  flag(str, o.sound);
}

function _peerSettings(o: any) {
  const flags = 
      has(o.report_spam)
    | has(o.add_contact) << 1
    | has(o.block_contact) << 2
    | has(o.share_contact) << 3
    | has(o.need_contacts_exception) << 4
    | has(o.report_geo) << 5;
  i32(flags);
  
}

function _wallPaper(o: any) {
  const flags = 
      has(o.creator)
    | has(o.default) << 1
    | has(o.pattern) << 3
    | has(o.dark) << 4
    | has(o.settings) << 2;
  i32(flags);
  
  i64(o.id);
  i64(o.access_hash);
  str(o.slug);
  obj(o.document);
  flag(obj, o.settings);
}

function _inputReportReasonOther(o: any) {
  str(o.text);
}

function _userFull(o: any) {
  const flags = 
      has(o.blocked)
    | has(o.phone_calls_available) << 4
    | has(o.phone_calls_private) << 5
    | has(o.can_pin_message) << 7
    | has(o.has_scheduled) << 12
    | has(o.about) << 1
    | has(o.profile_photo) << 2
    | has(o.bot_info) << 3
    | has(o.pinned_msg_id) << 6
    | has(o.folder_id) << 11;
  i32(flags);
  
  obj(o.user);
  flag(str, o.about);
  obj(o.settings);
  flag(obj, o.profile_photo);
  obj(o.notify_settings);
  flag(obj, o.bot_info);
  flag(i32, o.pinned_msg_id);
  i32(o.common_chats_count);
  flag(i32, o.folder_id);
}

function _contact(o: any) {
  i32(o.user_id);
  bool(o.mutual);
}

function _importedContact(o: any) {
  i32(o.user_id);
  i64(o.client_id);
}

function _contactBlocked(o: any) {
  i32(o.user_id);
  i32(o.date);
}

function _contactStatus(o: any) {
  i32(o.user_id);
  obj(o.status);
}

function _contactsContacts(o: any) {
  vector(obj, o.contacts);
  i32(o.saved_count);
  vector(obj, o.users);
}

function _contactsImportedContacts(o: any) {
  vector(obj, o.imported);
  vector(obj, o.popular_invites);
  vector(i64, o.retry_contacts);
  vector(obj, o.users);
}

function _contactsBlocked(o: any) {
  vector(obj, o.blocked);
  vector(obj, o.users);
}

function _contactsBlockedSlice(o: any) {
  i32(o.count);
  vector(obj, o.blocked);
  vector(obj, o.users);
}

function _messagesDialogs(o: any) {
  vector(obj, o.dialogs);
  vector(obj, o.messages);
  vector(obj, o.chats);
  vector(obj, o.users);
}

function _messagesDialogsSlice(o: any) {
  i32(o.count);
  vector(obj, o.dialogs);
  vector(obj, o.messages);
  vector(obj, o.chats);
  vector(obj, o.users);
}

function _messagesMessages(o: any) {
  vector(obj, o.messages);
  vector(obj, o.chats);
  vector(obj, o.users);
}

function _messagesMessagesSlice(o: any) {
  const flags = 
      has(o.inexact) << 1
    | has(o.next_rate)
  i32(flags);
  
  i32(o.count);
  flag(i32, o.next_rate);
  vector(obj, o.messages);
  vector(obj, o.chats);
  vector(obj, o.users);
}

function _messagesChats(o: any) {
  vector(obj, o.chats);
}

function _messagesChatFull(o: any) {
  obj(o.full_chat);
  vector(obj, o.chats);
  vector(obj, o.users);
}

function _messagesAffectedHistory(o: any) {
  i32(o.pts);
  i32(o.pts_count);
  i32(o.offset);
}

function _updateNewMessage(o: any) {
  obj(o.message);
  i32(o.pts);
  i32(o.pts_count);
}

function _updateMessageID(o: any) {
  i32(o.id);
  i64(o.random_id);
}

function _updateDeleteMessages(o: any) {
  vector(i32, o.messages);
  i32(o.pts);
  i32(o.pts_count);
}

function _updateUserTyping(o: any) {
  i32(o.user_id);
  obj(o.action);
}

function _updateChatUserTyping(o: any) {
  i32(o.chat_id);
  i32(o.user_id);
  obj(o.action);
}

function _updateChatParticipants(o: any) {
  obj(o.participants);
}

function _updateUserStatus(o: any) {
  i32(o.user_id);
  obj(o.status);
}

function _updateUserName(o: any) {
  i32(o.user_id);
  str(o.first_name);
  str(o.last_name);
  str(o.username);
}

function _updateUserPhoto(o: any) {
  i32(o.user_id);
  i32(o.date);
  obj(o.photo);
  bool(o.previous);
}

function _updatesState(o: any) {
  i32(o.pts);
  i32(o.qts);
  i32(o.date);
  i32(o.seq);
  i32(o.unread_count);
}

function _updatesDifferenceEmpty(o: any) {
  i32(o.date);
  i32(o.seq);
}

function _updatesDifference(o: any) {
  vector(obj, o.new_messages);
  vector(obj, o.new_encrypted_messages);
  vector(obj, o.other_updates);
  vector(obj, o.chats);
  vector(obj, o.users);
  obj(o.state);
}

function _updatesDifferenceSlice(o: any) {
  vector(obj, o.new_messages);
  vector(obj, o.new_encrypted_messages);
  vector(obj, o.other_updates);
  vector(obj, o.chats);
  vector(obj, o.users);
  obj(o.intermediate_state);
}

function _updateShortMessage(o: any) {
  const flags = 
      has(o.out) << 1
    | has(o.mentioned) << 4
    | has(o.media_unread) << 5
    | has(o.silent) << 13
    | has(o.fwd_from) << 2
    | has(o.via_bot_id) << 11
    | has(o.reply_to_msg_id) << 3
    | has(o.entities) << 7;
  i32(flags);
  
  i32(o.id);
  i32(o.user_id);
  str(o.message);
  i32(o.pts);
  i32(o.pts_count);
  i32(o.date);
  flag(obj, o.fwd_from);
  flag(i32, o.via_bot_id);
  flag(i32, o.reply_to_msg_id);
  flagVector(obj, o.entities);
}

function _updateShortChatMessage(o: any) {
  const flags = 
      has(o.out) << 1
    | has(o.mentioned) << 4
    | has(o.media_unread) << 5
    | has(o.silent) << 13
    | has(o.fwd_from) << 2
    | has(o.via_bot_id) << 11
    | has(o.reply_to_msg_id) << 3
    | has(o.entities) << 7;
  i32(flags);
  
  i32(o.id);
  i32(o.from_id);
  i32(o.chat_id);
  str(o.message);
  i32(o.pts);
  i32(o.pts_count);
  i32(o.date);
  flag(obj, o.fwd_from);
  flag(i32, o.via_bot_id);
  flag(i32, o.reply_to_msg_id);
  flagVector(obj, o.entities);
}

function _updateShort(o: any) {
  obj(o.update);
  i32(o.date);
}

function _updatesCombined(o: any) {
  vector(obj, o.updates);
  vector(obj, o.users);
  vector(obj, o.chats);
  i32(o.date);
  i32(o.seq_start);
  i32(o.seq);
}

function _updates(o: any) {
  vector(obj, o.updates);
  vector(obj, o.users);
  vector(obj, o.chats);
  i32(o.date);
  i32(o.seq);
}

function _photosPhotos(o: any) {
  vector(obj, o.photos);
  vector(obj, o.users);
}

function _photosPhotosSlice(o: any) {
  i32(o.count);
  vector(obj, o.photos);
  vector(obj, o.users);
}

function _photosPhoto(o: any) {
  obj(o.photo);
  vector(obj, o.users);
}

function _uploadFile(o: any) {
  obj(o.type);
  i32(o.mtime);
  bytes(o.bytes);
}

function _dcOption(o: any) {
  const flags = 
      has(o.ipv6)
    | has(o.media_only) << 1
    | has(o.tcpo_only) << 2
    | has(o.cdn) << 3
    | has(o.static) << 4
    | has(o.secret) << 10;
  i32(flags);
  
  i32(o.id);
  str(o.ip_address);
  i32(o.port);
  flag(bytes, o.secret);
}

function _config(o: any) {
  const flags = 
      has(o.phonecalls_enabled) << 1
    | has(o.default_p2p_contacts) << 3
    | has(o.preload_featured_stickers) << 4
    | has(o.ignore_phone_entities) << 5
    | has(o.revoke_pm_inbox) << 6
    | has(o.blocked_mode) << 8
    | has(o.pfs_enabled) << 13
    | has(o.tmp_sessions)
    | has(o.autoupdate_url_prefix) << 7
    | has(o.gif_search_username) << 9
    | has(o.venue_search_username) << 10
    | has(o.img_search_username) << 11
    | has(o.static_maps_provider) << 12
    | has(o.suggested_lang_code) << 2
    | has(o.lang_pack_version) << 2
    | has(o.base_lang_pack_version) << 2;
  i32(flags);
  
  i32(o.date);
  i32(o.expires);
  bool(o.test_mode);
  i32(o.this_dc);
  vector(obj, o.dc_options);
  str(o.dc_txt_domain_name);
  i32(o.chat_size_max);
  i32(o.megagroup_size_max);
  i32(o.forwarded_count_max);
  i32(o.online_update_period_ms);
  i32(o.offline_blur_timeout_ms);
  i32(o.offline_idle_timeout_ms);
  i32(o.online_cloud_timeout_ms);
  i32(o.notify_cloud_delay_ms);
  i32(o.notify_default_delay_ms);
  i32(o.push_chat_period_ms);
  i32(o.push_chat_limit);
  i32(o.saved_gifs_limit);
  i32(o.edit_time_limit);
  i32(o.revoke_time_limit);
  i32(o.revoke_pm_time_limit);
  i32(o.rating_e_decay);
  i32(o.stickers_recent_limit);
  i32(o.stickers_faved_limit);
  i32(o.channels_read_media_period);
  flag(i32, o.tmp_sessions);
  i32(o.pinned_dialogs_count_max);
  i32(o.pinned_infolder_count_max);
  i32(o.call_receive_timeout_ms);
  i32(o.call_ring_timeout_ms);
  i32(o.call_connect_timeout_ms);
  i32(o.call_packet_timeout_ms);
  str(o.me_url_prefix);
  flag(str, o.autoupdate_url_prefix);
  flag(str, o.gif_search_username);
  flag(str, o.venue_search_username);
  flag(str, o.img_search_username);
  flag(str, o.static_maps_provider);
  i32(o.caption_length_max);
  i32(o.message_length_max);
  i32(o.webfile_dc_id);
  flag(str, o.suggested_lang_code);
  flag(i32, o.lang_pack_version);
  flag(i32, o.base_lang_pack_version);
}

function _nearestDc(o: any) {
  str(o.country);
  i32(o.this_dc);
  i32(o.nearest_dc);
}

function _helpAppUpdate(o: any) {
  const flags = 
      has(o.can_not_skip)
    | has(o.document) << 1
    | has(o.url) << 2;
  i32(flags);
  
  i32(o.id);
  str(o.version);
  str(o.text);
  vector(obj, o.entities);
  flag(obj, o.document);
  flag(str, o.url);
}

function _helpInviteText(o: any) {
  str(o.message);
}

function _updateNewEncryptedMessage(o: any) {
  obj(o.message);
  i32(o.qts);
}

function _updateEncryptedChatTyping(o: any) {
  i32(o.chat_id);
}

function _updateEncryption(o: any) {
  obj(o.chat);
  i32(o.date);
}

function _updateEncryptedMessagesRead(o: any) {
  i32(o.chat_id);
  i32(o.max_date);
  i32(o.date);
}

function _encryptedChatEmpty(o: any) {
  i32(o.id);
}

function _encryptedChatWaiting(o: any) {
  i32(o.id);
  i64(o.access_hash);
  i32(o.date);
  i32(o.admin_id);
  i32(o.participant_id);
}

function _encryptedChatRequested(o: any) {
  i32(o.id);
  i64(o.access_hash);
  i32(o.date);
  i32(o.admin_id);
  i32(o.participant_id);
  bytes(o.g_a);
}

function _encryptedChat(o: any) {
  i32(o.id);
  i64(o.access_hash);
  i32(o.date);
  i32(o.admin_id);
  i32(o.participant_id);
  bytes(o.g_a_or_b);
  i64(o.key_fingerprint);
}

function _encryptedChatDiscarded(o: any) {
  i32(o.id);
}

function _inputEncryptedChat(o: any) {
  i32(o.chat_id);
  i64(o.access_hash);
}

function _encryptedFile(o: any) {
  i64(o.id);
  i64(o.access_hash);
  i32(o.size);
  i32(o.dc_id);
  i32(o.key_fingerprint);
}

function _inputEncryptedFileUploaded(o: any) {
  i64(o.id);
  i32(o.parts);
  str(o.md5_checksum);
  i32(o.key_fingerprint);
}

function _inputEncryptedFile(o: any) {
  i64(o.id);
  i64(o.access_hash);
}

function _inputEncryptedFileLocation(o: any) {
  i64(o.id);
  i64(o.access_hash);
}

function _encryptedMessage(o: any) {
  i64(o.random_id);
  i32(o.chat_id);
  i32(o.date);
  bytes(o.bytes);
  obj(o.file);
}

function _encryptedMessageService(o: any) {
  i64(o.random_id);
  i32(o.chat_id);
  i32(o.date);
  bytes(o.bytes);
}

function _messagesDhConfigNotModified(o: any) {
  bytes(o.random);
}

function _messagesDhConfig(o: any) {
  i32(o.g);
  bytes(o.p);
  i32(o.version);
  bytes(o.random);
}

function _messagesSentEncryptedMessage(o: any) {
  i32(o.date);
}

function _messagesSentEncryptedFile(o: any) {
  i32(o.date);
  obj(o.file);
}

function _inputFileBig(o: any) {
  i64(o.id);
  i32(o.parts);
  str(o.name);
}

function _inputEncryptedFileBigUploaded(o: any) {
  i64(o.id);
  i32(o.parts);
  i32(o.key_fingerprint);
}

function _updateChatParticipantAdd(o: any) {
  i32(o.chat_id);
  i32(o.user_id);
  i32(o.inviter_id);
  i32(o.date);
  i32(o.version);
}

function _updateChatParticipantDelete(o: any) {
  i32(o.chat_id);
  i32(o.user_id);
  i32(o.version);
}

function _updateDcOptions(o: any) {
  vector(obj, o.dc_options);
}

function _inputMediaUploadedDocument(o: any) {
  const flags = 
      has(o.nosound_video) << 3
    | has(o.thumb) << 2
    | has(o.stickers)
    | has(o.ttl_seconds) << 1;
  i32(flags);
  
  obj(o.file);
  flag(obj, o.thumb);
  str(o.mime_type);
  vector(obj, o.attributes);
  flagVector(obj, o.stickers);
  flag(i32, o.ttl_seconds);
}

function _inputMediaDocument(o: any) {
  const flags = 
      has(o.ttl_seconds);
  i32(flags);
  
  obj(o.id);
  flag(i32, o.ttl_seconds);
}

function _messageMediaDocument(o: any) {
  const flags = 
      has(o.document)
    | has(o.ttl_seconds) << 2;
  i32(flags);
  
  flag(obj, o.document);
  flag(i32, o.ttl_seconds);
}

function _inputDocument(o: any) {
  i64(o.id);
  i64(o.access_hash);
  bytes(o.file_reference);
}

function _inputDocumentFileLocation(o: any) {
  i64(o.id);
  i64(o.access_hash);
  bytes(o.file_reference);
  str(o.thumb_size);
}

function _documentEmpty(o: any) {
  i64(o.id);
}

function _document(o: any) {
  const flags = 
      has(o.thumbs)
  i32(flags);
  
  i64(o.id);
  i64(o.access_hash);
  bytes(o.file_reference);
  i32(o.date);
  str(o.mime_type);
  i32(o.size);
  flagVector(obj, o.thumbs);
  i32(o.dc_id);
  vector(obj, o.attributes);
}

function _helpSupport(o: any) {
  str(o.phone_number);
  obj(o.user);
}

function _notifyPeer(o: any) {
  obj(o.peer);
}

function _updateUserBlocked(o: any) {
  i32(o.user_id);
  bool(o.blocked);
}

function _updateNotifySettings(o: any) {
  obj(o.peer);
  obj(o.notify_settings);
}

function _sendMessageUploadVideoAction(o: any) {
  i32(o.progress);
}

function _sendMessageUploadAudioAction(o: any) {
  i32(o.progress);
}

function _sendMessageUploadPhotoAction(o: any) {
  i32(o.progress);
}

function _sendMessageUploadDocumentAction(o: any) {
  i32(o.progress);
}

function _contactsFound(o: any) {
  vector(obj, o.my_results);
  vector(obj, o.results);
  vector(obj, o.chats);
  vector(obj, o.users);
}

function _updateServiceNotification(o: any) {
  const flags = 
      has(o.popup)
    | has(o.inbox_date) << 1
  i32(flags);
  
  flag(i32, o.inbox_date);
  str(o.type);
  str(o.message);
  obj(o.media);
  vector(obj, o.entities);
}

function _updatePrivacy(o: any) {
  obj(o.key);
  vector(obj, o.rules);
}

function _inputPrivacyValueAllowUsers(o: any) {
  vector(obj, o.users);
}

function _inputPrivacyValueDisallowUsers(o: any) {
  vector(obj, o.users);
}

function _privacyValueAllowUsers(o: any) {
  vector(i32, o.users);
}

function _privacyValueDisallowUsers(o: any) {
  vector(i32, o.users);
}

function _accountPrivacyRules(o: any) {
  vector(obj, o.rules);
  vector(obj, o.chats);
  vector(obj, o.users);
}

function _accountDaysTTL(o: any) {
  i32(o.days);
}

function _updateUserPhone(o: any) {
  i32(o.user_id);
  str(o.phone);
}

function _documentAttributeImageSize(o: any) {
  i32(o.w);
  i32(o.h);
}

function _documentAttributeSticker(o: any) {
  const flags = 
      has(o.mask) << 1
    | has(o.mask_coords);
  i32(flags);
  
  str(o.alt);
  obj(o.stickerset);
  flag(obj, o.mask_coords);
}

function _documentAttributeVideo(o: any) {
  const flags = 
      has(o.round_message)
    | has(o.supports_streaming) << 1
  i32(flags);
  
  i32(o.duration);
  i32(o.w);
  i32(o.h);
}

function _documentAttributeAudio(o: any) {
  const flags = 
      has(o.voice) << 10
    | has(o.title)
    | has(o.performer) << 1
    | has(o.waveform) << 2;
  i32(flags);
  
  i32(o.duration);
  flag(str, o.title);
  flag(str, o.performer);
  flag(bytes, o.waveform);
}

function _documentAttributeFilename(o: any) {
  str(o.file_name);
}

function _messagesStickers(o: any) {
  i32(o.hash);
  vector(obj, o.stickers);
}

function _stickerPack(o: any) {
  str(o.emoticon);
  vector(i64, o.documents);
}

function _messagesAllStickers(o: any) {
  i32(o.hash);
  vector(obj, o.sets);
}

function _updateReadHistoryInbox(o: any) {
  const flags = 
      has(o.folder_id)
  i32(flags);
  
  flag(i32, o.folder_id);
  obj(o.peer);
  i32(o.max_id);
  i32(o.still_unread_count);
  i32(o.pts);
  i32(o.pts_count);
}

function _updateReadHistoryOutbox(o: any) {
  obj(o.peer);
  i32(o.max_id);
  i32(o.pts);
  i32(o.pts_count);
}

function _messagesAffectedMessages(o: any) {
  i32(o.pts);
  i32(o.pts_count);
}

function _updateWebPage(o: any) {
  obj(o.webpage);
  i32(o.pts);
  i32(o.pts_count);
}

function _webPageEmpty(o: any) {
  i64(o.id);
}

function _webPagePending(o: any) {
  i64(o.id);
  i32(o.date);
}

function _webPage(o: any) {
  const flags = 
      has(o.type)
    | has(o.site_name) << 1
    | has(o.title) << 2
    | has(o.description) << 3
    | has(o.photo) << 4
    | has(o.embed_url) << 5
    | has(o.embed_type) << 5
    | has(o.embed_width) << 6
    | has(o.embed_height) << 6
    | has(o.duration) << 7
    | has(o.author) << 8
    | has(o.document) << 9
    | has(o.cached_page) << 10
    | has(o.attributes) << 12;
  i32(flags);
  
  i64(o.id);
  str(o.url);
  str(o.display_url);
  i32(o.hash);
  flag(str, o.type);
  flag(str, o.site_name);
  flag(str, o.title);
  flag(str, o.description);
  flag(obj, o.photo);
  flag(str, o.embed_url);
  flag(str, o.embed_type);
  flag(i32, o.embed_width);
  flag(i32, o.embed_height);
  flag(i32, o.duration);
  flag(str, o.author);
  flag(obj, o.document);
  flag(obj, o.cached_page);
  flagVector(obj, o.attributes);
}

function _messageMediaWebPage(o: any) {
  obj(o.webpage);
}

function _authorization(o: any) {
  const flags = 
      has(o.current)
    | has(o.official_app) << 1
    | has(o.password_pending) << 2
  i32(flags);
  
  i64(o.hash);
  str(o.device_model);
  str(o.platform);
  str(o.system_version);
  i32(o.api_id);
  str(o.app_name);
  str(o.app_version);
  i32(o.date_created);
  i32(o.date_active);
  str(o.ip);
  str(o.country);
  str(o.region);
}

function _accountAuthorizations(o: any) {
  vector(obj, o.authorizations);
}

function _accountPassword(o: any) {
  const flags = 
      has(o.has_recovery)
    | has(o.has_secure_values) << 1
    | has(o.has_password) << 2
    | has(o.current_algo) << 2
    | has(o.srp_B) << 2
    | has(o.srp_id) << 2
    | has(o.hint) << 3
    | has(o.email_unconfirmed_pattern) << 4
  i32(flags);
  
  flag(obj, o.current_algo);
  flag(bytes, o.srp_B);
  flag(i64, o.srp_id);
  flag(str, o.hint);
  flag(str, o.email_unconfirmed_pattern);
  obj(o.new_algo);
  obj(o.new_secure_algo);
  bytes(o.secure_random);
}

function _accountPasswordSettings(o: any) {
  const flags = 
      has(o.email)
    | has(o.secure_settings) << 1;
  i32(flags);
  
  flag(str, o.email);
  flag(obj, o.secure_settings);
}

function _accountPasswordInputSettings(o: any) {
  const flags = 
      has(o.new_algo)
    | has(o.new_password_hash)
    | has(o.hint)
    | has(o.email) << 1
    | has(o.new_secure_settings) << 2;
  i32(flags);
  
  flag(obj, o.new_algo);
  flag(bytes, o.new_password_hash);
  flag(str, o.hint);
  flag(str, o.email);
  flag(obj, o.new_secure_settings);
}

function _authPasswordRecovery(o: any) {
  str(o.email_pattern);
}

function _inputMediaVenue(o: any) {
  obj(o.geo_point);
  str(o.title);
  str(o.address);
  str(o.provider);
  str(o.venue_id);
  str(o.venue_type);
}

function _messageMediaVenue(o: any) {
  obj(o.geo);
  str(o.title);
  str(o.address);
  str(o.provider);
  str(o.venue_id);
  str(o.venue_type);
}

function _receivedNotifyMessage(o: any) {
  i32(o.id);
}

function _chatInviteExported(o: any) {
  str(o.link);
}

function _chatInviteAlready(o: any) {
  obj(o.chat);
}

function _chatInvite(o: any) {
  const flags = 
      has(o.channel)
    | has(o.broadcast) << 1
    | has(o.public) << 2
    | has(o.megagroup) << 3
    | has(o.participants) << 4;
  i32(flags);
  
  str(o.title);
  obj(o.photo);
  i32(o.participants_count);
  flagVector(obj, o.participants);
}

function _messageActionChatJoinedByLink(o: any) {
  i32(o.inviter_id);
}

function _updateReadMessagesContents(o: any) {
  vector(i32, o.messages);
  i32(o.pts);
  i32(o.pts_count);
}

function _inputStickerSetID(o: any) {
  i64(o.id);
  i64(o.access_hash);
}

function _inputStickerSetShortName(o: any) {
  str(o.short_name);
}

function _stickerSet(o: any) {
  const flags = 
      has(o.archived) << 1
    | has(o.official) << 2
    | has(o.masks) << 3
    | has(o.animated) << 5
    | has(o.installed_date)
    | has(o.thumb) << 4
    | has(o.thumb_dc_id) << 4
  i32(flags);
  
  flag(i32, o.installed_date);
  i64(o.id);
  i64(o.access_hash);
  str(o.title);
  str(o.short_name);
  flag(obj, o.thumb);
  flag(i32, o.thumb_dc_id);
  i32(o.count);
  i32(o.hash);
}

function _messagesStickerSet(o: any) {
  obj(o.set);
  vector(obj, o.packs);
  vector(obj, o.documents);
}

function _user(o: any) {
  const flags = 
      has(o.self) << 10
    | has(o.contact) << 11
    | has(o.mutual_contact) << 12
    | has(o.deleted) << 13
    | has(o.bot) << 14
    | has(o.bot_chat_history) << 15
    | has(o.bot_nochats) << 16
    | has(o.verified) << 17
    | has(o.restricted) << 18
    | has(o.min) << 20
    | has(o.bot_inline_geo) << 21
    | has(o.support) << 23
    | has(o.scam) << 24
    | has(o.access_hash)
    | has(o.first_name) << 1
    | has(o.last_name) << 2
    | has(o.username) << 3
    | has(o.phone) << 4
    | has(o.photo) << 5
    | has(o.status) << 6
    | has(o.bot_info_version) << 14
    | has(o.restriction_reason) << 18
    | has(o.bot_inline_placeholder) << 19
    | has(o.lang_code) << 22;
  i32(flags);
  
  i32(o.id);
  flag(i64, o.access_hash);
  flag(str, o.first_name);
  flag(str, o.last_name);
  flag(str, o.username);
  flag(str, o.phone);
  flag(obj, o.photo);
  flag(obj, o.status);
  flag(i32, o.bot_info_version);
  flagVector(obj, o.restriction_reason);
  flag(str, o.bot_inline_placeholder);
  flag(str, o.lang_code);
}

function _botCommand(o: any) {
  str(o.command);
  str(o.description);
}

function _botInfo(o: any) {
  i32(o.user_id);
  str(o.description);
  vector(obj, o.commands);
}

function _keyboardButton(o: any) {
  str(o.text);
}

function _keyboardButtonRow(o: any) {
  vector(obj, o.buttons);
}

function _replyKeyboardHide(o: any) {
  const flags = 
      has(o.selective) << 2;
  i32(flags);
  
}

function _replyKeyboardForceReply(o: any) {
  const flags = 
      has(o.single_use) << 1
    | has(o.selective) << 2;
  i32(flags);
  
}

function _replyKeyboardMarkup(o: any) {
  const flags = 
      has(o.resize)
    | has(o.single_use) << 1
    | has(o.selective) << 2
  i32(flags);
  
  vector(obj, o.rows);
}

function _inputPeerUser(o: any) {
  i32(o.user_id);
  i64(o.access_hash);
}

function _inputUser(o: any) {
  i32(o.user_id);
  i64(o.access_hash);
}

function _messageEntityUnknown(o: any) {
  i32(o.offset);
  i32(o.length);
}

function _messageEntityMention(o: any) {
  i32(o.offset);
  i32(o.length);
}

function _messageEntityHashtag(o: any) {
  i32(o.offset);
  i32(o.length);
}

function _messageEntityBotCommand(o: any) {
  i32(o.offset);
  i32(o.length);
}

function _messageEntityUrl(o: any) {
  i32(o.offset);
  i32(o.length);
}

function _messageEntityEmail(o: any) {
  i32(o.offset);
  i32(o.length);
}

function _messageEntityBold(o: any) {
  i32(o.offset);
  i32(o.length);
}

function _messageEntityItalic(o: any) {
  i32(o.offset);
  i32(o.length);
}

function _messageEntityCode(o: any) {
  i32(o.offset);
  i32(o.length);
}

function _messageEntityPre(o: any) {
  i32(o.offset);
  i32(o.length);
  str(o.language);
}

function _messageEntityTextUrl(o: any) {
  i32(o.offset);
  i32(o.length);
  str(o.url);
}

function _updateShortSentMessage(o: any) {
  const flags = 
      has(o.out) << 1
    | has(o.media) << 9
    | has(o.entities) << 7;
  i32(flags);
  
  i32(o.id);
  i32(o.pts);
  i32(o.pts_count);
  i32(o.date);
  flag(obj, o.media);
  flagVector(obj, o.entities);
}

function _inputChannel(o: any) {
  i32(o.channel_id);
  i64(o.access_hash);
}

function _peerChannel(o: any) {
  i32(o.channel_id);
}

function _inputPeerChannel(o: any) {
  i32(o.channel_id);
  i64(o.access_hash);
}

function _channel(o: any) {
  const flags = 
      has(o.creator)
    | has(o.left) << 2
    | has(o.broadcast) << 5
    | has(o.verified) << 7
    | has(o.megagroup) << 8
    | has(o.restricted) << 9
    | has(o.signatures) << 11
    | has(o.min) << 12
    | has(o.scam) << 19
    | has(o.has_link) << 20
    | has(o.has_geo) << 21
    | has(o.slowmode_enabled) << 22
    | has(o.access_hash) << 13
    | has(o.username) << 6
    | has(o.restriction_reason) << 9
    | has(o.admin_rights) << 14
    | has(o.banned_rights) << 15
    | has(o.default_banned_rights) << 18
    | has(o.participants_count) << 17;
  i32(flags);
  
  i32(o.id);
  flag(i64, o.access_hash);
  str(o.title);
  flag(str, o.username);
  obj(o.photo);
  i32(o.date);
  i32(o.version);
  flagVector(obj, o.restriction_reason);
  flag(obj, o.admin_rights);
  flag(obj, o.banned_rights);
  flag(obj, o.default_banned_rights);
  flag(i32, o.participants_count);
}

function _channelForbidden(o: any) {
  const flags = 
      has(o.broadcast) << 5
    | has(o.megagroup) << 8
    | has(o.until_date) << 16;
  i32(flags);
  
  i32(o.id);
  i64(o.access_hash);
  str(o.title);
  flag(i32, o.until_date);
}

function _contactsResolvedPeer(o: any) {
  obj(o.peer);
  vector(obj, o.chats);
  vector(obj, o.users);
}

function _channelFull(o: any) {
  const flags = 
      has(o.can_view_participants) << 3
    | has(o.can_set_username) << 6
    | has(o.can_set_stickers) << 7
    | has(o.hidden_prehistory) << 10
    | has(o.can_view_stats) << 12
    | has(o.can_set_location) << 16
    | has(o.has_scheduled) << 19
    | has(o.participants_count)
    | has(o.admins_count) << 1
    | has(o.kicked_count) << 2
    | has(o.banned_count) << 2
    | has(o.online_count) << 13
    | has(o.migrated_from_chat_id) << 4
    | has(o.migrated_from_max_id) << 4
    | has(o.pinned_msg_id) << 5
    | has(o.stickerset) << 8
    | has(o.available_min_id) << 9
    | has(o.folder_id) << 11
    | has(o.linked_chat_id) << 14
    | has(o.location) << 15
    | has(o.slowmode_seconds) << 17
    | has(o.slowmode_next_send_date) << 18
  i32(flags);
  
  i32(o.id);
  str(o.about);
  flag(i32, o.participants_count);
  flag(i32, o.admins_count);
  flag(i32, o.kicked_count);
  flag(i32, o.banned_count);
  flag(i32, o.online_count);
  i32(o.read_inbox_max_id);
  i32(o.read_outbox_max_id);
  i32(o.unread_count);
  obj(o.chat_photo);
  obj(o.notify_settings);
  obj(o.exported_invite);
  vector(obj, o.bot_info);
  flag(i32, o.migrated_from_chat_id);
  flag(i32, o.migrated_from_max_id);
  flag(i32, o.pinned_msg_id);
  flag(obj, o.stickerset);
  flag(i32, o.available_min_id);
  flag(i32, o.folder_id);
  flag(i32, o.linked_chat_id);
  flag(obj, o.location);
  flag(i32, o.slowmode_seconds);
  flag(i32, o.slowmode_next_send_date);
  i32(o.pts);
}

function _messageRange(o: any) {
  i32(o.min_id);
  i32(o.max_id);
}

function _messagesChannelMessages(o: any) {
  const flags = 
      has(o.inexact) << 1
  i32(flags);
  
  i32(o.pts);
  i32(o.count);
  vector(obj, o.messages);
  vector(obj, o.chats);
  vector(obj, o.users);
}

function _messageActionChannelCreate(o: any) {
  str(o.title);
}

function _updateChannelTooLong(o: any) {
  const flags = 
      has(o.pts);
  i32(flags);
  
  i32(o.channel_id);
  flag(i32, o.pts);
}

function _updateChannel(o: any) {
  i32(o.channel_id);
}

function _updateNewChannelMessage(o: any) {
  obj(o.message);
  i32(o.pts);
  i32(o.pts_count);
}

function _updateReadChannelInbox(o: any) {
  const flags = 
      has(o.folder_id)
  i32(flags);
  
  flag(i32, o.folder_id);
  i32(o.channel_id);
  i32(o.max_id);
  i32(o.still_unread_count);
  i32(o.pts);
}

function _updateDeleteChannelMessages(o: any) {
  i32(o.channel_id);
  vector(i32, o.messages);
  i32(o.pts);
  i32(o.pts_count);
}

function _updateChannelMessageViews(o: any) {
  i32(o.channel_id);
  i32(o.id);
  i32(o.views);
}

function _updatesChannelDifferenceEmpty(o: any) {
  const flags = 
      has(o.final)
    | has(o.timeout) << 1;
  i32(flags);
  
  i32(o.pts);
  flag(i32, o.timeout);
}

function _updatesChannelDifferenceTooLong(o: any) {
  const flags = 
      has(o.final)
    | has(o.timeout) << 1
  i32(flags);
  
  flag(i32, o.timeout);
  obj(o.dialog);
  vector(obj, o.messages);
  vector(obj, o.chats);
  vector(obj, o.users);
}

function _updatesChannelDifference(o: any) {
  const flags = 
      has(o.final)
    | has(o.timeout) << 1
  i32(flags);
  
  i32(o.pts);
  flag(i32, o.timeout);
  vector(obj, o.new_messages);
  vector(obj, o.other_updates);
  vector(obj, o.chats);
  vector(obj, o.users);
}

function _channelMessagesFilter(o: any) {
  const flags = 
      has(o.exclude_new_messages) << 1
  i32(flags);
  
  vector(obj, o.ranges);
}

function _channelParticipant(o: any) {
  i32(o.user_id);
  i32(o.date);
}

function _channelParticipantSelf(o: any) {
  i32(o.user_id);
  i32(o.inviter_id);
  i32(o.date);
}

function _channelParticipantCreator(o: any) {
  const flags = 
      has(o.rank);
  i32(flags);
  
  i32(o.user_id);
  flag(str, o.rank);
}

function _channelParticipantsKicked(o: any) {
  str(o.q);
}

function _channelsChannelParticipants(o: any) {
  i32(o.count);
  vector(obj, o.participants);
  vector(obj, o.users);
}

function _channelsChannelParticipant(o: any) {
  obj(o.participant);
  vector(obj, o.users);
}

function _chatParticipantCreator(o: any) {
  i32(o.user_id);
}

function _chatParticipantAdmin(o: any) {
  i32(o.user_id);
  i32(o.inviter_id);
  i32(o.date);
}

function _updateChatParticipantAdmin(o: any) {
  i32(o.chat_id);
  i32(o.user_id);
  bool(o.is_admin);
  i32(o.version);
}

function _messageActionChatMigrateTo(o: any) {
  i32(o.channel_id);
}

function _messageActionChannelMigrateFrom(o: any) {
  str(o.title);
  i32(o.chat_id);
}

function _helpTermsOfService(o: any) {
  const flags = 
      has(o.popup)
    | has(o.min_age_confirm) << 1;
  i32(flags);
  
  obj(o.id);
  str(o.text);
  vector(obj, o.entities);
  flag(i32, o.min_age_confirm);
}

function _updateNewStickerSet(o: any) {
  obj(o.stickerset);
}

function _updateStickerSetsOrder(o: any) {
  const flags = 
      has(o.masks)
  i32(flags);
  
  vector(i64, o.order);
}

function _foundGif(o: any) {
  str(o.url);
  str(o.thumb_url);
  str(o.content_url);
  str(o.content_type);
  i32(o.w);
  i32(o.h);
}

function _foundGifCached(o: any) {
  str(o.url);
  obj(o.photo);
  obj(o.document);
}

function _inputMediaGifExternal(o: any) {
  str(o.url);
  str(o.q);
}

function _messagesFoundGifs(o: any) {
  i32(o.next_offset);
  vector(obj, o.results);
}

function _messagesSavedGifs(o: any) {
  i32(o.hash);
  vector(obj, o.gifs);
}

function _inputBotInlineMessageMediaAuto(o: any) {
  const flags = 
      has(o.entities) << 1
    | has(o.reply_markup) << 2;
  i32(flags);
  
  str(o.message);
  flagVector(obj, o.entities);
  flag(obj, o.reply_markup);
}

function _inputBotInlineMessageText(o: any) {
  const flags = 
      has(o.no_webpage)
    | has(o.entities) << 1
    | has(o.reply_markup) << 2;
  i32(flags);
  
  str(o.message);
  flagVector(obj, o.entities);
  flag(obj, o.reply_markup);
}

function _inputBotInlineResult(o: any) {
  const flags = 
      has(o.title) << 1
    | has(o.description) << 2
    | has(o.url) << 3
    | has(o.thumb) << 4
    | has(o.content) << 5
  i32(flags);
  
  str(o.id);
  str(o.type);
  flag(str, o.title);
  flag(str, o.description);
  flag(str, o.url);
  flag(obj, o.thumb);
  flag(obj, o.content);
  obj(o.send_message);
}

function _botInlineMessageMediaAuto(o: any) {
  const flags = 
      has(o.entities) << 1
    | has(o.reply_markup) << 2;
  i32(flags);
  
  str(o.message);
  flagVector(obj, o.entities);
  flag(obj, o.reply_markup);
}

function _botInlineMessageText(o: any) {
  const flags = 
      has(o.no_webpage)
    | has(o.entities) << 1
    | has(o.reply_markup) << 2;
  i32(flags);
  
  str(o.message);
  flagVector(obj, o.entities);
  flag(obj, o.reply_markup);
}

function _botInlineResult(o: any) {
  const flags = 
      has(o.title) << 1
    | has(o.description) << 2
    | has(o.url) << 3
    | has(o.thumb) << 4
    | has(o.content) << 5
  i32(flags);
  
  str(o.id);
  str(o.type);
  flag(str, o.title);
  flag(str, o.description);
  flag(str, o.url);
  flag(obj, o.thumb);
  flag(obj, o.content);
  obj(o.send_message);
}

function _messagesBotResults(o: any) {
  const flags = 
      has(o.gallery)
    | has(o.next_offset) << 1
    | has(o.switch_pm) << 2
  i32(flags);
  
  i64(o.query_id);
  flag(str, o.next_offset);
  flag(obj, o.switch_pm);
  vector(obj, o.results);
  i32(o.cache_time);
  vector(obj, o.users);
}

function _updateBotInlineQuery(o: any) {
  const flags = 
      has(o.geo)
  i32(flags);
  
  i64(o.query_id);
  i32(o.user_id);
  str(o.query);
  flag(obj, o.geo);
  str(o.offset);
}

function _updateBotInlineSend(o: any) {
  const flags = 
      has(o.geo)
    | has(o.msg_id) << 1;
  i32(flags);
  
  i32(o.user_id);
  str(o.query);
  flag(obj, o.geo);
  str(o.id);
  flag(obj, o.msg_id);
}

function _exportedMessageLink(o: any) {
  str(o.link);
  str(o.html);
}

function _messageFwdHeader(o: any) {
  const flags = 
      has(o.from_id)
    | has(o.from_name) << 5
    | has(o.channel_id) << 1
    | has(o.channel_post) << 2
    | has(o.post_author) << 3
    | has(o.saved_from_peer) << 4
    | has(o.saved_from_msg_id) << 4;
  i32(flags);
  
  flag(i32, o.from_id);
  flag(str, o.from_name);
  i32(o.date);
  flag(i32, o.channel_id);
  flag(i32, o.channel_post);
  flag(str, o.post_author);
  flag(obj, o.saved_from_peer);
  flag(i32, o.saved_from_msg_id);
}

function _updateEditChannelMessage(o: any) {
  obj(o.message);
  i32(o.pts);
  i32(o.pts_count);
}

function _updateChannelPinnedMessage(o: any) {
  i32(o.channel_id);
  i32(o.id);
}

function _authSentCodeTypeApp(o: any) {
  i32(o.length);
}

function _authSentCodeTypeSms(o: any) {
  i32(o.length);
}

function _authSentCodeTypeCall(o: any) {
  i32(o.length);
}

function _authSentCodeTypeFlashCall(o: any) {
  str(o.pattern);
}

function _keyboardButtonUrl(o: any) {
  str(o.text);
  str(o.url);
}

function _keyboardButtonCallback(o: any) {
  str(o.text);
  bytes(o.data);
}

function _keyboardButtonRequestPhone(o: any) {
  str(o.text);
}

function _keyboardButtonRequestGeoLocation(o: any) {
  str(o.text);
}

function _keyboardButtonSwitchInline(o: any) {
  const flags = 
      has(o.same_peer)
  i32(flags);
  
  str(o.text);
  str(o.query);
}

function _replyInlineMarkup(o: any) {
  vector(obj, o.rows);
}

function _messagesBotCallbackAnswer(o: any) {
  const flags = 
      has(o.alert) << 1
    | has(o.has_url) << 3
    | has(o.native_ui) << 4
    | has(o.message)
    | has(o.url) << 2
  i32(flags);
  
  flag(str, o.message);
  flag(str, o.url);
  i32(o.cache_time);
}

function _updateBotCallbackQuery(o: any) {
  const flags = 
      has(o.data)
    | has(o.game_short_name) << 1;
  i32(flags);
  
  i64(o.query_id);
  i32(o.user_id);
  obj(o.peer);
  i32(o.msg_id);
  i64(o.chat_instance);
  flag(bytes, o.data);
  flag(str, o.game_short_name);
}

function _messagesMessageEditData(o: any) {
  const flags = 
      has(o.caption);
  i32(flags);
  
}

function _updateEditMessage(o: any) {
  obj(o.message);
  i32(o.pts);
  i32(o.pts_count);
}

function _inputBotInlineMessageMediaGeo(o: any) {
  const flags = 
      has(o.reply_markup) << 2;
  i32(flags);
  
  obj(o.geo_point);
  i32(o.period);
  flag(obj, o.reply_markup);
}

function _inputBotInlineMessageMediaVenue(o: any) {
  const flags = 
      has(o.reply_markup) << 2;
  i32(flags);
  
  obj(o.geo_point);
  str(o.title);
  str(o.address);
  str(o.provider);
  str(o.venue_id);
  str(o.venue_type);
  flag(obj, o.reply_markup);
}

function _inputBotInlineMessageMediaContact(o: any) {
  const flags = 
      has(o.reply_markup) << 2;
  i32(flags);
  
  str(o.phone_number);
  str(o.first_name);
  str(o.last_name);
  str(o.vcard);
  flag(obj, o.reply_markup);
}

function _botInlineMessageMediaGeo(o: any) {
  const flags = 
      has(o.reply_markup) << 2;
  i32(flags);
  
  obj(o.geo);
  i32(o.period);
  flag(obj, o.reply_markup);
}

function _botInlineMessageMediaVenue(o: any) {
  const flags = 
      has(o.reply_markup) << 2;
  i32(flags);
  
  obj(o.geo);
  str(o.title);
  str(o.address);
  str(o.provider);
  str(o.venue_id);
  str(o.venue_type);
  flag(obj, o.reply_markup);
}

function _botInlineMessageMediaContact(o: any) {
  const flags = 
      has(o.reply_markup) << 2;
  i32(flags);
  
  str(o.phone_number);
  str(o.first_name);
  str(o.last_name);
  str(o.vcard);
  flag(obj, o.reply_markup);
}

function _inputBotInlineResultPhoto(o: any) {
  str(o.id);
  str(o.type);
  obj(o.photo);
  obj(o.send_message);
}

function _inputBotInlineResultDocument(o: any) {
  const flags = 
      has(o.title) << 1
    | has(o.description) << 2
  i32(flags);
  
  str(o.id);
  str(o.type);
  flag(str, o.title);
  flag(str, o.description);
  obj(o.document);
  obj(o.send_message);
}

function _botInlineMediaResult(o: any) {
  const flags = 
      has(o.photo)
    | has(o.document) << 1
    | has(o.title) << 2
    | has(o.description) << 3
  i32(flags);
  
  str(o.id);
  str(o.type);
  flag(obj, o.photo);
  flag(obj, o.document);
  flag(str, o.title);
  flag(str, o.description);
  obj(o.send_message);
}

function _inputBotInlineMessageID(o: any) {
  i32(o.dc_id);
  i64(o.id);
  i64(o.access_hash);
}

function _updateInlineBotCallbackQuery(o: any) {
  const flags = 
      has(o.data)
    | has(o.game_short_name) << 1;
  i32(flags);
  
  i64(o.query_id);
  i32(o.user_id);
  obj(o.msg_id);
  i64(o.chat_instance);
  flag(bytes, o.data);
  flag(str, o.game_short_name);
}

function _inlineBotSwitchPM(o: any) {
  str(o.text);
  str(o.start_param);
}

function _messagesPeerDialogs(o: any) {
  vector(obj, o.dialogs);
  vector(obj, o.messages);
  vector(obj, o.chats);
  vector(obj, o.users);
  obj(o.state);
}

function _topPeer(o: any) {
  obj(o.peer);
  f64(o.rating);
}

function _topPeerCategoryPeers(o: any) {
  obj(o.category);
  i32(o.count);
  vector(obj, o.peers);
}

function _contactsTopPeers(o: any) {
  vector(obj, o.categories);
  vector(obj, o.chats);
  vector(obj, o.users);
}

function _messageEntityMentionName(o: any) {
  i32(o.offset);
  i32(o.length);
  i32(o.user_id);
}

function _inputMessageEntityMentionName(o: any) {
  i32(o.offset);
  i32(o.length);
  obj(o.user_id);
}

function _updateReadChannelOutbox(o: any) {
  i32(o.channel_id);
  i32(o.max_id);
}

function _updateDraftMessage(o: any) {
  obj(o.peer);
  obj(o.draft);
}

function _draftMessageEmpty(o: any) {
  const flags = 
      has(o.date);
  i32(flags);
  
  flag(i32, o.date);
}

function _draftMessage(o: any) {
  const flags = 
      has(o.no_webpage) << 1
    | has(o.reply_to_msg_id)
    | has(o.entities) << 3
  i32(flags);
  
  flag(i32, o.reply_to_msg_id);
  str(o.message);
  flagVector(obj, o.entities);
  i32(o.date);
}

function _messagesFeaturedStickers(o: any) {
  i32(o.hash);
  vector(obj, o.sets);
  vector(i64, o.unread);
}

function _messagesRecentStickers(o: any) {
  i32(o.hash);
  vector(obj, o.packs);
  vector(obj, o.stickers);
  vector(i32, o.dates);
}

function _messagesArchivedStickers(o: any) {
  i32(o.count);
  vector(obj, o.sets);
}

function _messagesStickerSetInstallResultArchive(o: any) {
  vector(obj, o.sets);
}

function _stickerSetCovered(o: any) {
  obj(o.set);
  obj(o.cover);
}

function _inputMediaPhotoExternal(o: any) {
  const flags = 
      has(o.ttl_seconds);
  i32(flags);
  
  str(o.url);
  flag(i32, o.ttl_seconds);
}

function _inputMediaDocumentExternal(o: any) {
  const flags = 
      has(o.ttl_seconds);
  i32(flags);
  
  str(o.url);
  flag(i32, o.ttl_seconds);
}

function _stickerSetMultiCovered(o: any) {
  obj(o.set);
  vector(obj, o.covers);
}

function _maskCoords(o: any) {
  i32(o.n);
  f64(o.x);
  f64(o.y);
  f64(o.zoom);
}

function _inputStickeredMediaPhoto(o: any) {
  obj(o.id);
}

function _inputStickeredMediaDocument(o: any) {
  obj(o.id);
}

function _game(o: any) {
  const flags = 
      has(o.document);
  i32(flags);
  
  i64(o.id);
  i64(o.access_hash);
  str(o.short_name);
  str(o.title);
  str(o.description);
  obj(o.photo);
  flag(obj, o.document);
}

function _inputBotInlineResultGame(o: any) {
  str(o.id);
  str(o.short_name);
  obj(o.send_message);
}

function _inputBotInlineMessageGame(o: any) {
  const flags = 
      has(o.reply_markup) << 2;
  i32(flags);
  
  flag(obj, o.reply_markup);
}

function _messageMediaGame(o: any) {
  obj(o.game);
}

function _inputMediaGame(o: any) {
  obj(o.id);
}

function _inputGameID(o: any) {
  i64(o.id);
  i64(o.access_hash);
}

function _inputGameShortName(o: any) {
  obj(o.bot_id);
  str(o.short_name);
}

function _keyboardButtonGame(o: any) {
  str(o.text);
}

function _messageActionGameScore(o: any) {
  i64(o.game_id);
  i32(o.score);
}

function _highScore(o: any) {
  i32(o.pos);
  i32(o.user_id);
  i32(o.score);
}

function _messagesHighScores(o: any) {
  vector(obj, o.scores);
  vector(obj, o.users);
}

function _updatesDifferenceTooLong(o: any) {
  i32(o.pts);
}

function _updateChannelWebPage(o: any) {
  i32(o.channel_id);
  obj(o.webpage);
  i32(o.pts);
  i32(o.pts_count);
}

function _messagesChatsSlice(o: any) {
  i32(o.count);
  vector(obj, o.chats);
}

function _textPlain(o: any) {
  str(o.text);
}

function _textBold(o: any) {
  obj(o.text);
}

function _textItalic(o: any) {
  obj(o.text);
}

function _textUnderline(o: any) {
  obj(o.text);
}

function _textStrike(o: any) {
  obj(o.text);
}

function _textFixed(o: any) {
  obj(o.text);
}

function _textUrl(o: any) {
  obj(o.text);
  str(o.url);
  i64(o.webpage_id);
}

function _textEmail(o: any) {
  obj(o.text);
  str(o.email);
}

function _textConcat(o: any) {
  vector(obj, o.texts);
}

function _pageBlockTitle(o: any) {
  obj(o.text);
}

function _pageBlockSubtitle(o: any) {
  obj(o.text);
}

function _pageBlockAuthorDate(o: any) {
  obj(o.author);
  i32(o.published_date);
}

function _pageBlockHeader(o: any) {
  obj(o.text);
}

function _pageBlockSubheader(o: any) {
  obj(o.text);
}

function _pageBlockParagraph(o: any) {
  obj(o.text);
}

function _pageBlockPreformatted(o: any) {
  obj(o.text);
  str(o.language);
}

function _pageBlockFooter(o: any) {
  obj(o.text);
}

function _pageBlockAnchor(o: any) {
  str(o.name);
}

function _pageBlockList(o: any) {
  vector(obj, o.items);
}

function _pageBlockBlockquote(o: any) {
  obj(o.text);
  obj(o.caption);
}

function _pageBlockPullquote(o: any) {
  obj(o.text);
  obj(o.caption);
}

function _pageBlockPhoto(o: any) {
  const flags = 
      has(o.url)
    | has(o.webpage_id);
  i32(flags);
  
  i64(o.photo_id);
  obj(o.caption);
  flag(str, o.url);
  flag(i64, o.webpage_id);
}

function _pageBlockVideo(o: any) {
  const flags = 
      has(o.autoplay)
    | has(o.loop) << 1
  i32(flags);
  
  i64(o.video_id);
  obj(o.caption);
}

function _pageBlockCover(o: any) {
  obj(o.cover);
}

function _pageBlockEmbed(o: any) {
  const flags = 
      has(o.full_width)
    | has(o.allow_scrolling) << 3
    | has(o.url) << 1
    | has(o.html) << 2
    | has(o.poster_photo_id) << 4
    | has(o.w) << 5
    | has(o.h) << 5
  i32(flags);
  
  flag(str, o.url);
  flag(str, o.html);
  flag(i64, o.poster_photo_id);
  flag(i32, o.w);
  flag(i32, o.h);
  obj(o.caption);
}

function _pageBlockEmbedPost(o: any) {
  str(o.url);
  i64(o.webpage_id);
  i64(o.author_photo_id);
  str(o.author);
  i32(o.date);
  vector(obj, o.blocks);
  obj(o.caption);
}

function _pageBlockCollage(o: any) {
  vector(obj, o.items);
  obj(o.caption);
}

function _pageBlockSlideshow(o: any) {
  vector(obj, o.items);
  obj(o.caption);
}

function _updateDialogPinned(o: any) {
  const flags = 
      has(o.pinned)
    | has(o.folder_id) << 1
  i32(flags);
  
  flag(i32, o.folder_id);
  obj(o.peer);
}

function _updatePinnedDialogs(o: any) {
  const flags = 
      has(o.folder_id) << 1
    | has(o.order);
  i32(flags);
  
  flag(i32, o.folder_id);
  flagVector(obj, o.order);
}

function _dataJSON(o: any) {
  str(o.data);
}

function _updateBotWebhookJSON(o: any) {
  obj(o.data);
}

function _updateBotWebhookJSONQuery(o: any) {
  i64(o.query_id);
  obj(o.data);
  i32(o.timeout);
}

function _labeledPrice(o: any) {
  str(o.label);
  i64(o.amount);
}

function _invoice(o: any) {
  const flags = 
      has(o.test)
    | has(o.name_requested) << 1
    | has(o.phone_requested) << 2
    | has(o.email_requested) << 3
    | has(o.shipping_address_requested) << 4
    | has(o.flexible) << 5
    | has(o.phone_to_provider) << 6
    | has(o.email_to_provider) << 7
  i32(flags);
  
  str(o.currency);
  vector(obj, o.prices);
}

function _inputMediaInvoice(o: any) {
  const flags = 
      has(o.photo)
  i32(flags);
  
  str(o.title);
  str(o.description);
  flag(obj, o.photo);
  obj(o.invoice);
  bytes(o.payload);
  str(o.provider);
  obj(o.provider_data);
  str(o.start_param);
}

function _paymentCharge(o: any) {
  str(o.id);
  str(o.provider_charge_id);
}

function _messageActionPaymentSentMe(o: any) {
  const flags = 
      has(o.info)
    | has(o.shipping_option_id) << 1
  i32(flags);
  
  str(o.currency);
  i64(o.total_amount);
  bytes(o.payload);
  flag(obj, o.info);
  flag(str, o.shipping_option_id);
  obj(o.charge);
}

function _messageMediaInvoice(o: any) {
  const flags = 
      has(o.shipping_address_requested) << 1
    | has(o.test) << 3
    | has(o.photo)
    | has(o.receipt_msg_id) << 2
  i32(flags);
  
  str(o.title);
  str(o.description);
  flag(obj, o.photo);
  flag(i32, o.receipt_msg_id);
  str(o.currency);
  i64(o.total_amount);
  str(o.start_param);
}

function _postAddress(o: any) {
  str(o.street_line1);
  str(o.street_line2);
  str(o.city);
  str(o.state);
  str(o.country_iso2);
  str(o.post_code);
}

function _paymentRequestedInfo(o: any) {
  const flags = 
      has(o.name)
    | has(o.phone) << 1
    | has(o.email) << 2
    | has(o.shipping_address) << 3;
  i32(flags);
  
  flag(str, o.name);
  flag(str, o.phone);
  flag(str, o.email);
  flag(obj, o.shipping_address);
}

function _keyboardButtonBuy(o: any) {
  str(o.text);
}

function _messageActionPaymentSent(o: any) {
  str(o.currency);
  i64(o.total_amount);
}

function _paymentSavedCredentialsCard(o: any) {
  str(o.id);
  str(o.title);
}

function _webDocument(o: any) {
  str(o.url);
  i64(o.access_hash);
  i32(o.size);
  str(o.mime_type);
  vector(obj, o.attributes);
}

function _inputWebDocument(o: any) {
  str(o.url);
  i32(o.size);
  str(o.mime_type);
  vector(obj, o.attributes);
}

function _inputWebFileLocation(o: any) {
  str(o.url);
  i64(o.access_hash);
}

function _uploadWebFile(o: any) {
  i32(o.size);
  str(o.mime_type);
  obj(o.file_type);
  i32(o.mtime);
  bytes(o.bytes);
}

function _paymentsPaymentForm(o: any) {
  const flags = 
      has(o.can_save_credentials) << 2
    | has(o.password_missing) << 3
    | has(o.native_provider) << 4
    | has(o.native_params) << 4
    | has(o.saved_info)
    | has(o.saved_credentials) << 1
  i32(flags);
  
  i32(o.bot_id);
  obj(o.invoice);
  i32(o.provider_id);
  str(o.url);
  flag(str, o.native_provider);
  flag(obj, o.native_params);
  flag(obj, o.saved_info);
  flag(obj, o.saved_credentials);
  vector(obj, o.users);
}

function _paymentsValidatedRequestedInfo(o: any) {
  const flags = 
      has(o.id)
    | has(o.shipping_options) << 1;
  i32(flags);
  
  flag(str, o.id);
  flagVector(obj, o.shipping_options);
}

function _paymentsPaymentResult(o: any) {
  obj(o.updates);
}

function _paymentsPaymentReceipt(o: any) {
  const flags = 
      has(o.info)
    | has(o.shipping) << 1
  i32(flags);
  
  i32(o.date);
  i32(o.bot_id);
  obj(o.invoice);
  i32(o.provider_id);
  flag(obj, o.info);
  flag(obj, o.shipping);
  str(o.currency);
  i64(o.total_amount);
  str(o.credentials_title);
  vector(obj, o.users);
}

function _paymentsSavedInfo(o: any) {
  const flags = 
      has(o.has_saved_credentials) << 1
    | has(o.saved_info);
  i32(flags);
  
  flag(obj, o.saved_info);
}

function _inputPaymentCredentialsSaved(o: any) {
  str(o.id);
  bytes(o.tmp_password);
}

function _inputPaymentCredentials(o: any) {
  const flags = 
      has(o.save)
  i32(flags);
  
  obj(o.data);
}

function _accountTmpPassword(o: any) {
  bytes(o.tmp_password);
  i32(o.valid_until);
}

function _shippingOption(o: any) {
  str(o.id);
  str(o.title);
  vector(obj, o.prices);
}

function _updateBotShippingQuery(o: any) {
  i64(o.query_id);
  i32(o.user_id);
  bytes(o.payload);
  obj(o.shipping_address);
}

function _updateBotPrecheckoutQuery(o: any) {
  const flags = 
      has(o.info)
    | has(o.shipping_option_id) << 1
  i32(flags);
  
  i64(o.query_id);
  i32(o.user_id);
  bytes(o.payload);
  flag(obj, o.info);
  flag(str, o.shipping_option_id);
  str(o.currency);
  i64(o.total_amount);
}

function _inputStickerSetItem(o: any) {
  const flags = 
      has(o.mask_coords);
  i32(flags);
  
  obj(o.document);
  str(o.emoji);
  flag(obj, o.mask_coords);
}

function _updatePhoneCall(o: any) {
  obj(o.phone_call);
}

function _inputPhoneCall(o: any) {
  i64(o.id);
  i64(o.access_hash);
}

function _phoneCallEmpty(o: any) {
  i64(o.id);
}

function _phoneCallWaiting(o: any) {
  const flags = 
      has(o.video) << 5
    | has(o.receive_date);
  i32(flags);
  
  i64(o.id);
  i64(o.access_hash);
  i32(o.date);
  i32(o.admin_id);
  i32(o.participant_id);
  obj(o.protocol);
  flag(i32, o.receive_date);
}

function _phoneCallRequested(o: any) {
  const flags = 
      has(o.video) << 5
  i32(flags);
  
  i64(o.id);
  i64(o.access_hash);
  i32(o.date);
  i32(o.admin_id);
  i32(o.participant_id);
  bytes(o.g_a_hash);
  obj(o.protocol);
}

function _phoneCallAccepted(o: any) {
  const flags = 
      has(o.video) << 5
  i32(flags);
  
  i64(o.id);
  i64(o.access_hash);
  i32(o.date);
  i32(o.admin_id);
  i32(o.participant_id);
  bytes(o.g_b);
  obj(o.protocol);
}

function _phoneCall(o: any) {
  const flags = 
      has(o.p2p_allowed) << 5
  i32(flags);
  
  i64(o.id);
  i64(o.access_hash);
  i32(o.date);
  i32(o.admin_id);
  i32(o.participant_id);
  bytes(o.g_a_or_b);
  i64(o.key_fingerprint);
  obj(o.protocol);
  vector(obj, o.connections);
  i32(o.start_date);
}

function _phoneCallDiscarded(o: any) {
  const flags = 
      has(o.need_rating) << 2
    | has(o.need_debug) << 3
    | has(o.video) << 5
    | has(o.reason)
    | has(o.duration) << 1;
  i32(flags);
  
  i64(o.id);
  flag(obj, o.reason);
  flag(i32, o.duration);
}

function _phoneConnection(o: any) {
  i64(o.id);
  str(o.ip);
  str(o.ipv6);
  i32(o.port);
  bytes(o.peer_tag);
}

function _phoneCallProtocol(o: any) {
  const flags = 
      has(o.udp_p2p)
    | has(o.udp_reflector) << 1
  i32(flags);
  
  i32(o.min_layer);
  i32(o.max_layer);
}

function _phonePhoneCall(o: any) {
  obj(o.phone_call);
  vector(obj, o.users);
}

function _inputMessagesFilterPhoneCalls(o: any) {
  const flags = 
      has(o.missed);
  i32(flags);
  
}

function _messageActionPhoneCall(o: any) {
  const flags = 
      has(o.video) << 2
    | has(o.reason)
    | has(o.duration) << 1;
  i32(flags);
  
  i64(o.call_id);
  flag(obj, o.reason);
  flag(i32, o.duration);
}

function _sendMessageUploadRoundAction(o: any) {
  i32(o.progress);
}

function _uploadFileCdnRedirect(o: any) {
  i32(o.dc_id);
  bytes(o.file_token);
  bytes(o.encryption_key);
  bytes(o.encryption_iv);
  vector(obj, o.file_hashes);
}

function _uploadCdnFileReuploadNeeded(o: any) {
  bytes(o.request_token);
}

function _uploadCdnFile(o: any) {
  bytes(o.bytes);
}

function _cdnPublicKey(o: any) {
  i32(o.dc_id);
  str(o.public_key);
}

function _cdnConfig(o: any) {
  vector(obj, o.public_keys);
}

function _pageBlockChannel(o: any) {
  obj(o.channel);
}

function _langPackString(o: any) {
  str(o.key);
  str(o.value);
}

function _langPackStringPluralized(o: any) {
  const flags = 
      has(o.zero_value)
    | has(o.one_value) << 1
    | has(o.two_value) << 2
    | has(o.few_value) << 3
    | has(o.many_value) << 4
  i32(flags);
  
  str(o.key);
  flag(str, o.zero_value);
  flag(str, o.one_value);
  flag(str, o.two_value);
  flag(str, o.few_value);
  flag(str, o.many_value);
  str(o.other_value);
}

function _langPackStringDeleted(o: any) {
  str(o.key);
}

function _langPackDifference(o: any) {
  str(o.lang_code);
  i32(o.from_version);
  i32(o.version);
  vector(obj, o.strings);
}

function _langPackLanguage(o: any) {
  const flags = 
      has(o.official)
    | has(o.rtl) << 2
    | has(o.beta) << 3
    | has(o.base_lang_code) << 1
  i32(flags);
  
  str(o.name);
  str(o.native_name);
  str(o.lang_code);
  flag(str, o.base_lang_code);
  str(o.plural_code);
  i32(o.strings_count);
  i32(o.translated_count);
  str(o.translations_url);
}

function _updateLangPackTooLong(o: any) {
  str(o.lang_code);
}

function _updateLangPack(o: any) {
  obj(o.difference);
}

function _channelParticipantAdmin(o: any) {
  const flags = 
      has(o.can_edit)
    | has(o.self) << 1
    | has(o.inviter_id) << 1
    | has(o.rank) << 2;
  i32(flags);
  
  i32(o.user_id);
  flag(i32, o.inviter_id);
  i32(o.promoted_by);
  i32(o.date);
  obj(o.admin_rights);
  flag(str, o.rank);
}

function _channelParticipantBanned(o: any) {
  const flags = 
      has(o.left)
  i32(flags);
  
  i32(o.user_id);
  i32(o.kicked_by);
  i32(o.date);
  obj(o.banned_rights);
}

function _channelParticipantsBanned(o: any) {
  str(o.q);
}

function _channelParticipantsSearch(o: any) {
  str(o.q);
}

function _channelAdminLogEventActionChangeTitle(o: any) {
  str(o.prev_value);
  str(o.new_value);
}

function _channelAdminLogEventActionChangeAbout(o: any) {
  str(o.prev_value);
  str(o.new_value);
}

function _channelAdminLogEventActionChangeUsername(o: any) {
  str(o.prev_value);
  str(o.new_value);
}

function _channelAdminLogEventActionChangePhoto(o: any) {
  obj(o.prev_photo);
  obj(o.new_photo);
}

function _channelAdminLogEventActionToggleInvites(o: any) {
  bool(o.new_value);
}

function _channelAdminLogEventActionToggleSignatures(o: any) {
  bool(o.new_value);
}

function _channelAdminLogEventActionUpdatePinned(o: any) {
  obj(o.message);
}

function _channelAdminLogEventActionEditMessage(o: any) {
  obj(o.prev_message);
  obj(o.new_message);
}

function _channelAdminLogEventActionDeleteMessage(o: any) {
  obj(o.message);
}

function _channelAdminLogEventActionParticipantInvite(o: any) {
  obj(o.participant);
}

function _channelAdminLogEventActionParticipantToggleBan(o: any) {
  obj(o.prev_participant);
  obj(o.new_participant);
}

function _channelAdminLogEventActionParticipantToggleAdmin(o: any) {
  obj(o.prev_participant);
  obj(o.new_participant);
}

function _channelAdminLogEvent(o: any) {
  i64(o.id);
  i32(o.date);
  i32(o.user_id);
  obj(o.action);
}

function _channelsAdminLogResults(o: any) {
  vector(obj, o.events);
  vector(obj, o.chats);
  vector(obj, o.users);
}

function _channelAdminLogEventsFilter(o: any) {
  const flags = 
      has(o.join)
    | has(o.leave) << 1
    | has(o.invite) << 2
    | has(o.ban) << 3
    | has(o.unban) << 4
    | has(o.kick) << 5
    | has(o.unkick) << 6
    | has(o.promote) << 7
    | has(o.demote) << 8
    | has(o.info) << 9
    | has(o.settings) << 10
    | has(o.pinned) << 11
    | has(o.edit) << 12
    | has(o.delete) << 13;
  i32(flags);
  
}

function _pageBlockAudio(o: any) {
  i64(o.audio_id);
  obj(o.caption);
}

function _popularContact(o: any) {
  i64(o.client_id);
  i32(o.importers);
}

function _messagesFavedStickers(o: any) {
  i32(o.hash);
  vector(obj, o.packs);
  vector(obj, o.stickers);
}

function _updateChannelReadMessagesContents(o: any) {
  i32(o.channel_id);
  vector(i32, o.messages);
}

function _channelAdminLogEventActionChangeStickerSet(o: any) {
  obj(o.prev_stickerset);
  obj(o.new_stickerset);
}

function _messageActionCustomAction(o: any) {
  str(o.message);
}

function _inputPaymentCredentialsApplePay(o: any) {
  obj(o.payment_data);
}

function _inputPaymentCredentialsAndroidPay(o: any) {
  obj(o.payment_token);
  str(o.google_transaction_id);
}

function _updateChannelAvailableMessages(o: any) {
  i32(o.channel_id);
  i32(o.available_min_id);
}

function _channelAdminLogEventActionTogglePreHistoryHidden(o: any) {
  bool(o.new_value);
}

function _inputMediaGeoLive(o: any) {
  const flags = 
      has(o.stopped)
    | has(o.period) << 1;
  i32(flags);
  
  obj(o.geo_point);
  flag(i32, o.period);
}

function _messageMediaGeoLive(o: any) {
  obj(o.geo);
  i32(o.period);
}

function _recentMeUrlUnknown(o: any) {
  str(o.url);
}

function _recentMeUrlUser(o: any) {
  str(o.url);
  i32(o.user_id);
}

function _recentMeUrlChat(o: any) {
  str(o.url);
  i32(o.chat_id);
}

function _recentMeUrlChatInvite(o: any) {
  str(o.url);
  obj(o.chat_invite);
}

function _recentMeUrlStickerSet(o: any) {
  str(o.url);
  obj(o.set);
}

function _helpRecentMeUrls(o: any) {
  vector(obj, o.urls);
  vector(obj, o.chats);
  vector(obj, o.users);
}

function _messagesMessagesNotModified(o: any) {
  i32(o.count);
}

function _inputSingleMedia(o: any) {
  const flags = 
      has(o.entities);
  i32(flags);
  
  obj(o.media);
  i64(o.random_id);
  str(o.message);
  flagVector(obj, o.entities);
}

function _webAuthorization(o: any) {
  i64(o.hash);
  i32(o.bot_id);
  str(o.domain);
  str(o.browser);
  str(o.platform);
  i32(o.date_created);
  i32(o.date_active);
  str(o.ip);
  str(o.region);
}

function _accountWebAuthorizations(o: any) {
  vector(obj, o.authorizations);
  vector(obj, o.users);
}

function _inputMessageID(o: any) {
  i32(o.id);
}

function _inputMessageReplyTo(o: any) {
  i32(o.id);
}

function _messageEntityPhone(o: any) {
  i32(o.offset);
  i32(o.length);
}

function _messageEntityCashtag(o: any) {
  i32(o.offset);
  i32(o.length);
}

function _messageActionBotAllowed(o: any) {
  str(o.domain);
}

function _inputDialogPeer(o: any) {
  obj(o.peer);
}

function _dialogPeer(o: any) {
  obj(o.peer);
}

function _messagesFoundStickerSets(o: any) {
  i32(o.hash);
  vector(obj, o.sets);
}

function _fileHash(o: any) {
  i32(o.offset);
  i32(o.limit);
  bytes(o.hash);
}

function _webDocumentNoProxy(o: any) {
  str(o.url);
  i32(o.size);
  str(o.mime_type);
  vector(obj, o.attributes);
}

function _inputClientProxy(o: any) {
  str(o.address);
  i32(o.port);
}

function _helpProxyDataEmpty(o: any) {
  i32(o.expires);
}

function _helpProxyDataPromo(o: any) {
  i32(o.expires);
  obj(o.peer);
  vector(obj, o.chats);
  vector(obj, o.users);
}

function _helpTermsOfServiceUpdateEmpty(o: any) {
  i32(o.expires);
}

function _helpTermsOfServiceUpdate(o: any) {
  i32(o.expires);
  obj(o.terms_of_service);
}

function _inputSecureFileUploaded(o: any) {
  i64(o.id);
  i32(o.parts);
  str(o.md5_checksum);
  bytes(o.file_hash);
  bytes(o.secret);
}

function _inputSecureFile(o: any) {
  i64(o.id);
  i64(o.access_hash);
}

function _inputSecureFileLocation(o: any) {
  i64(o.id);
  i64(o.access_hash);
}

function _secureFile(o: any) {
  i64(o.id);
  i64(o.access_hash);
  i32(o.size);
  i32(o.dc_id);
  i32(o.date);
  bytes(o.file_hash);
  bytes(o.secret);
}

function _secureData(o: any) {
  bytes(o.data);
  bytes(o.data_hash);
  bytes(o.secret);
}

function _securePlainPhone(o: any) {
  str(o.phone);
}

function _securePlainEmail(o: any) {
  str(o.email);
}

function _secureValue(o: any) {
  const flags = 
      has(o.data)
    | has(o.front_side) << 1
    | has(o.reverse_side) << 2
    | has(o.selfie) << 3
    | has(o.translation) << 6
    | has(o.files) << 4
    | has(o.plain_data) << 5
  i32(flags);
  
  obj(o.type);
  flag(obj, o.data);
  flag(obj, o.front_side);
  flag(obj, o.reverse_side);
  flag(obj, o.selfie);
  flagVector(obj, o.translation);
  flagVector(obj, o.files);
  flag(obj, o.plain_data);
  bytes(o.hash);
}

function _inputSecureValue(o: any) {
  const flags = 
      has(o.data)
    | has(o.front_side) << 1
    | has(o.reverse_side) << 2
    | has(o.selfie) << 3
    | has(o.translation) << 6
    | has(o.files) << 4
    | has(o.plain_data) << 5;
  i32(flags);
  
  obj(o.type);
  flag(obj, o.data);
  flag(obj, o.front_side);
  flag(obj, o.reverse_side);
  flag(obj, o.selfie);
  flagVector(obj, o.translation);
  flagVector(obj, o.files);
  flag(obj, o.plain_data);
}

function _secureValueHash(o: any) {
  obj(o.type);
  bytes(o.hash);
}

function _secureValueErrorData(o: any) {
  obj(o.type);
  bytes(o.data_hash);
  str(o.field);
  str(o.text);
}

function _secureValueErrorFrontSide(o: any) {
  obj(o.type);
  bytes(o.file_hash);
  str(o.text);
}

function _secureValueErrorReverseSide(o: any) {
  obj(o.type);
  bytes(o.file_hash);
  str(o.text);
}

function _secureValueErrorSelfie(o: any) {
  obj(o.type);
  bytes(o.file_hash);
  str(o.text);
}

function _secureValueErrorFile(o: any) {
  obj(o.type);
  bytes(o.file_hash);
  str(o.text);
}

function _secureValueErrorFiles(o: any) {
  obj(o.type);
  vector(bytes, o.file_hash);
  str(o.text);
}

function _secureCredentialsEncrypted(o: any) {
  bytes(o.data);
  bytes(o.hash);
  bytes(o.secret);
}

function _accountAuthorizationForm(o: any) {
  const flags = 
      has(o.privacy_policy_url);
  i32(flags);
  
  vector(obj, o.required_types);
  vector(obj, o.values);
  vector(obj, o.errors);
  vector(obj, o.users);
  flag(str, o.privacy_policy_url);
}

function _accountSentEmailCode(o: any) {
  str(o.email_pattern);
  i32(o.length);
}

function _messageActionSecureValuesSentMe(o: any) {
  vector(obj, o.values);
  obj(o.credentials);
}

function _messageActionSecureValuesSent(o: any) {
  vector(obj, o.types);
}

function _helpDeepLinkInfo(o: any) {
  const flags = 
      has(o.update_app)
    | has(o.entities) << 1;
  i32(flags);
  
  str(o.message);
  flagVector(obj, o.entities);
}

function _savedPhoneContact(o: any) {
  str(o.phone);
  str(o.first_name);
  str(o.last_name);
  i32(o.date);
}

function _accountTakeout(o: any) {
  i64(o.id);
}

function _updateDialogUnreadMark(o: any) {
  const flags = 
      has(o.unread)
  i32(flags);
  
  obj(o.peer);
}

function _messagesDialogsNotModified(o: any) {
  i32(o.count);
}

function _inputWebFileGeoPointLocation(o: any) {
  obj(o.geo_point);
  i64(o.access_hash);
  i32(o.w);
  i32(o.h);
  i32(o.zoom);
  i32(o.scale);
}

function _securePasswordKdfAlgoPBKDF2HMACSHA512iter100000(o: any) {
  bytes(o.salt);
}

function _securePasswordKdfAlgoSHA512(o: any) {
  bytes(o.salt);
}

function _secureSecretSettings(o: any) {
  obj(o.secure_algo);
  bytes(o.secure_secret);
  i64(o.secure_secret_id);
}

function _passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow(o: any) {
  bytes(o.salt1);
  bytes(o.salt2);
  i32(o.g);
  bytes(o.p);
}

function _inputCheckPasswordSRP(o: any) {
  i64(o.srp_id);
  bytes(o.A);
  bytes(o.M1);
}

function _secureValueError(o: any) {
  obj(o.type);
  bytes(o.hash);
  str(o.text);
}

function _secureValueErrorTranslationFile(o: any) {
  obj(o.type);
  bytes(o.file_hash);
  str(o.text);
}

function _secureValueErrorTranslationFiles(o: any) {
  obj(o.type);
  vector(bytes, o.file_hash);
  str(o.text);
}

function _secureRequiredType(o: any) {
  const flags = 
      has(o.native_names)
    | has(o.selfie_required) << 1
    | has(o.translation_required) << 2
  i32(flags);
  
  obj(o.type);
}

function _secureRequiredTypeOneOf(o: any) {
  vector(obj, o.types);
}

function _helpPassportConfig(o: any) {
  i32(o.hash);
  obj(o.countries_langs);
}

function _inputAppEvent(o: any) {
  f64(o.time);
  str(o.type);
  i64(o.peer);
  obj(o.data);
}

function _jsonObjectValue(o: any) {
  str(o.key);
  obj(o.value);
}

function _jsonBool(o: any) {
  bool(o.value);
}

function _jsonNumber(o: any) {
  f64(o.value);
}

function _jsonString(o: any) {
  str(o.value);
}

function _jsonArray(o: any) {
  vector(obj, o.value);
}

function _jsonObject(o: any) {
  vector(obj, o.value);
}

function _updateUserPinnedMessage(o: any) {
  i32(o.user_id);
  i32(o.id);
}

function _updateChatPinnedMessage(o: any) {
  i32(o.chat_id);
  i32(o.id);
  i32(o.version);
}

function _textSubscript(o: any) {
  obj(o.text);
}

function _textSuperscript(o: any) {
  obj(o.text);
}

function _textMarked(o: any) {
  obj(o.text);
}

function _textPhone(o: any) {
  obj(o.text);
  str(o.phone);
}

function _textImage(o: any) {
  i64(o.document_id);
  i32(o.w);
  i32(o.h);
}

function _pageBlockKicker(o: any) {
  obj(o.text);
}

function _pageTableCell(o: any) {
  const flags = 
      has(o.header)
    | has(o.align_center) << 3
    | has(o.align_right) << 4
    | has(o.valign_middle) << 5
    | has(o.valign_bottom) << 6
    | has(o.text) << 7
    | has(o.colspan) << 1
    | has(o.rowspan) << 2;
  i32(flags);
  
  flag(obj, o.text);
  flag(i32, o.colspan);
  flag(i32, o.rowspan);
}

function _pageTableRow(o: any) {
  vector(obj, o.cells);
}

function _pageBlockTable(o: any) {
  const flags = 
      has(o.bordered)
    | has(o.striped) << 1
  i32(flags);
  
  obj(o.title);
  vector(obj, o.rows);
}

function _pageCaption(o: any) {
  obj(o.text);
  obj(o.credit);
}

function _pageListItemText(o: any) {
  obj(o.text);
}

function _pageListItemBlocks(o: any) {
  vector(obj, o.blocks);
}

function _pageListOrderedItemText(o: any) {
  str(o.num);
  obj(o.text);
}

function _pageListOrderedItemBlocks(o: any) {
  str(o.num);
  vector(obj, o.blocks);
}

function _pageBlockOrderedList(o: any) {
  vector(obj, o.items);
}

function _pageBlockDetails(o: any) {
  const flags = 
      has(o.open)
  i32(flags);
  
  vector(obj, o.blocks);
  obj(o.title);
}

function _pageRelatedArticle(o: any) {
  const flags = 
      has(o.title)
    | has(o.description) << 1
    | has(o.photo_id) << 2
    | has(o.author) << 3
    | has(o.published_date) << 4;
  i32(flags);
  
  str(o.url);
  i64(o.webpage_id);
  flag(str, o.title);
  flag(str, o.description);
  flag(i64, o.photo_id);
  flag(str, o.author);
  flag(i32, o.published_date);
}

function _pageBlockRelatedArticles(o: any) {
  obj(o.title);
  vector(obj, o.articles);
}

function _pageBlockMap(o: any) {
  obj(o.geo);
  i32(o.zoom);
  i32(o.w);
  i32(o.h);
  obj(o.caption);
}

function _page(o: any) {
  const flags = 
      has(o.part)
    | has(o.rtl) << 1
    | has(o.v2) << 2
  i32(flags);
  
  str(o.url);
  vector(obj, o.blocks);
  vector(obj, o.photos);
  vector(obj, o.documents);
}

function _textAnchor(o: any) {
  obj(o.text);
  str(o.name);
}

function _helpSupportName(o: any) {
  str(o.name);
}

function _helpUserInfo(o: any) {
  str(o.message);
  vector(obj, o.entities);
  str(o.author);
  i32(o.date);
}

function _updateMessagePoll(o: any) {
  const flags = 
      has(o.poll)
  i32(flags);
  
  i64(o.poll_id);
  flag(obj, o.poll);
  obj(o.results);
}

function _pollAnswer(o: any) {
  str(o.text);
  bytes(o.option);
}

function _poll(o: any) {
  const flags = 
      has(o.closed)
    | has(o.public_voters) << 1
    | has(o.multiple_choice) << 2
    | has(o.quiz) << 3
  i32(flags);
  
  i64(o.id);
  str(o.question);
  vector(obj, o.answers);
}

function _pollAnswerVoters(o: any) {
  const flags = 
      has(o.chosen)
    | has(o.correct) << 1
  i32(flags);
  
  bytes(o.option);
  i32(o.voters);
}

function _pollResults(o: any) {
  const flags = 
      has(o.min)
    | has(o.results) << 1
    | has(o.total_voters) << 2;
  i32(flags);
  
  flagVector(obj, o.results);
  flag(i32, o.total_voters);
}

function _inputMediaPoll(o: any) {
  obj(o.poll);
}

function _messageMediaPoll(o: any) {
  obj(o.poll);
  obj(o.results);
}

function _chatOnlines(o: any) {
  i32(o.onlines);
}

function _statsURL(o: any) {
  str(o.url);
}

function _photoStrippedSize(o: any) {
  str(o.type);
  bytes(o.bytes);
}

function _chatAdminRights(o: any) {
  const flags = 
      has(o.change_info)
    | has(o.post_messages) << 1
    | has(o.edit_messages) << 2
    | has(o.delete_messages) << 3
    | has(o.ban_users) << 4
    | has(o.invite_users) << 5
    | has(o.pin_messages) << 7
    | has(o.add_admins) << 9;
  i32(flags);
  
}

function _chatBannedRights(o: any) {
  const flags = 
      has(o.view_messages)
    | has(o.send_messages) << 1
    | has(o.send_media) << 2
    | has(o.send_stickers) << 3
    | has(o.send_gifs) << 4
    | has(o.send_games) << 5
    | has(o.send_inline) << 6
    | has(o.embed_links) << 7
    | has(o.send_polls) << 8
    | has(o.change_info) << 10
    | has(o.invite_users) << 15
    | has(o.pin_messages) << 17
  i32(flags);
  
  i32(o.until_date);
}

function _updateChatDefaultBannedRights(o: any) {
  obj(o.peer);
  obj(o.default_banned_rights);
  i32(o.version);
}

function _inputWallPaper(o: any) {
  i64(o.id);
  i64(o.access_hash);
}

function _inputWallPaperSlug(o: any) {
  str(o.slug);
}

function _channelParticipantsContacts(o: any) {
  str(o.q);
}

function _channelAdminLogEventActionDefaultBannedRights(o: any) {
  obj(o.prev_banned_rights);
  obj(o.new_banned_rights);
}

function _channelAdminLogEventActionStopPoll(o: any) {
  obj(o.message);
}

function _accountWallPapers(o: any) {
  i32(o.hash);
  vector(obj, o.wallpapers);
}

function _codeSettings(o: any) {
  const flags = 
      has(o.allow_flashcall)
    | has(o.current_number) << 1
    | has(o.allow_app_hash) << 4;
  i32(flags);
  
}

function _wallPaperSettings(o: any) {
  const flags = 
      has(o.blur) << 1
    | has(o.motion) << 2
    | has(o.background_color)
    | has(o.second_background_color) << 4
    | has(o.intensity) << 3
    | has(o.rotation) << 4;
  i32(flags);
  
  flag(i32, o.background_color);
  flag(i32, o.second_background_color);
  flag(i32, o.intensity);
  flag(i32, o.rotation);
}

function _autoDownloadSettings(o: any) {
  const flags = 
      has(o.disabled)
    | has(o.video_preload_large) << 1
    | has(o.audio_preload_next) << 2
    | has(o.phonecalls_less_data) << 3
  i32(flags);
  
  i32(o.photo_size_max);
  i32(o.video_size_max);
  i32(o.file_size_max);
  i32(o.video_upload_maxbitrate);
}

function _accountAutoDownloadSettings(o: any) {
  obj(o.low);
  obj(o.medium);
  obj(o.high);
}

function _emojiKeyword(o: any) {
  str(o.keyword);
  vector(str, o.emoticons);
}

function _emojiKeywordDeleted(o: any) {
  str(o.keyword);
  vector(str, o.emoticons);
}

function _emojiKeywordsDifference(o: any) {
  str(o.lang_code);
  i32(o.from_version);
  i32(o.version);
  vector(obj, o.keywords);
}

function _emojiURL(o: any) {
  str(o.url);
}

function _emojiLanguage(o: any) {
  str(o.lang_code);
}

function _fileLocationToBeDeprecated(o: any) {
  i64(o.volume_id);
  i32(o.local_id);
}

function _inputPhotoFileLocation(o: any) {
  i64(o.id);
  i64(o.access_hash);
  bytes(o.file_reference);
  str(o.thumb_size);
}

function _inputPhotoLegacyFileLocation(o: any) {
  i64(o.id);
  i64(o.access_hash);
  bytes(o.file_reference);
  i64(o.volume_id);
  i32(o.local_id);
  i64(o.secret);
}

function _inputPeerPhotoFileLocation(o: any) {
  const flags = 
      has(o.big)
  i32(flags);
  
  obj(o.peer);
  i64(o.volume_id);
  i32(o.local_id);
}

function _inputStickerSetThumb(o: any) {
  obj(o.stickerset);
  i64(o.volume_id);
  i32(o.local_id);
}

function _folder(o: any) {
  const flags = 
      has(o.autofill_new_broadcasts)
    | has(o.autofill_public_groups) << 1
    | has(o.autofill_new_correspondents) << 2
    | has(o.photo) << 3;
  i32(flags);
  
  i32(o.id);
  str(o.title);
  flag(obj, o.photo);
}

function _dialogFolder(o: any) {
  const flags = 
      has(o.pinned) << 2
  i32(flags);
  
  obj(o.folder);
  obj(o.peer);
  i32(o.top_message);
  i32(o.unread_muted_peers_count);
  i32(o.unread_unmuted_peers_count);
  i32(o.unread_muted_messages_count);
  i32(o.unread_unmuted_messages_count);
}

function _inputDialogPeerFolder(o: any) {
  i32(o.folder_id);
}

function _dialogPeerFolder(o: any) {
  i32(o.folder_id);
}

function _inputFolderPeer(o: any) {
  obj(o.peer);
  i32(o.folder_id);
}

function _folderPeer(o: any) {
  obj(o.peer);
  i32(o.folder_id);
}

function _updateFolderPeers(o: any) {
  vector(obj, o.folder_peers);
  i32(o.pts);
  i32(o.pts_count);
}

function _inputUserFromMessage(o: any) {
  obj(o.peer);
  i32(o.msg_id);
  i32(o.user_id);
}

function _inputChannelFromMessage(o: any) {
  obj(o.peer);
  i32(o.msg_id);
  i32(o.channel_id);
}

function _inputPeerUserFromMessage(o: any) {
  obj(o.peer);
  i32(o.msg_id);
  i32(o.user_id);
}

function _inputPeerChannelFromMessage(o: any) {
  obj(o.peer);
  i32(o.msg_id);
  i32(o.channel_id);
}

function _channelAdminLogEventActionChangeLinkedChat(o: any) {
  i32(o.prev_value);
  i32(o.new_value);
}

function _messagesSearchCounter(o: any) {
  const flags = 
      has(o.inexact) << 1
  i32(flags);
  
  obj(o.filter);
  i32(o.count);
}

function _keyboardButtonUrlAuth(o: any) {
  const flags = 
      has(o.fwd_text)
  i32(flags);
  
  str(o.text);
  flag(str, o.fwd_text);
  str(o.url);
  i32(o.button_id);
}

function _inputKeyboardButtonUrlAuth(o: any) {
  const flags = 
      has(o.request_write_access)
    | has(o.fwd_text) << 1
  i32(flags);
  
  str(o.text);
  flag(str, o.fwd_text);
  str(o.url);
  obj(o.bot);
}

function _urlAuthResultRequest(o: any) {
  const flags = 
      has(o.request_write_access)
  i32(flags);
  
  obj(o.bot);
  str(o.domain);
}

function _urlAuthResultAccepted(o: any) {
  str(o.url);
}

function _inputPrivacyValueAllowChatParticipants(o: any) {
  vector(i32, o.chats);
}

function _inputPrivacyValueDisallowChatParticipants(o: any) {
  vector(i32, o.chats);
}

function _privacyValueAllowChatParticipants(o: any) {
  vector(i32, o.chats);
}

function _privacyValueDisallowChatParticipants(o: any) {
  vector(i32, o.chats);
}

function _messageEntityUnderline(o: any) {
  i32(o.offset);
  i32(o.length);
}

function _messageEntityStrike(o: any) {
  i32(o.offset);
  i32(o.length);
}

function _messageEntityBlockquote(o: any) {
  i32(o.offset);
  i32(o.length);
}

function _updatePeerSettings(o: any) {
  obj(o.peer);
  obj(o.settings);
}

function _channelLocation(o: any) {
  obj(o.geo_point);
  str(o.address);
}

function _peerLocated(o: any) {
  obj(o.peer);
  i32(o.expires);
  i32(o.distance);
}

function _updatePeerLocated(o: any) {
  vector(obj, o.peers);
}

function _channelAdminLogEventActionChangeLocation(o: any) {
  obj(o.prev_value);
  obj(o.new_value);
}

function _channelAdminLogEventActionToggleSlowMode(o: any) {
  i32(o.prev_value);
  i32(o.new_value);
}

function _authAuthorizationSignUpRequired(o: any) {
  const flags = 
      has(o.terms_of_service);
  i32(flags);
  
  flag(obj, o.terms_of_service);
}

function _paymentsPaymentVerificationNeeded(o: any) {
  str(o.url);
}

function _updateNewScheduledMessage(o: any) {
  obj(o.message);
}

function _updateDeleteScheduledMessages(o: any) {
  obj(o.peer);
  vector(i32, o.messages);
}

function _restrictionReason(o: any) {
  str(o.platform);
  str(o.reason);
  str(o.text);
}

function _inputTheme(o: any) {
  i64(o.id);
  i64(o.access_hash);
}

function _inputThemeSlug(o: any) {
  str(o.slug);
}

function _theme(o: any) {
  const flags = 
      has(o.creator)
    | has(o.default) << 1
    | has(o.document) << 2
    | has(o.settings) << 3
  i32(flags);
  
  i64(o.id);
  i64(o.access_hash);
  str(o.slug);
  str(o.title);
  flag(obj, o.document);
  flag(obj, o.settings);
  i32(o.installs_count);
}

function _accountThemes(o: any) {
  i32(o.hash);
  vector(obj, o.themes);
}

function _updateTheme(o: any) {
  obj(o.theme);
}

function _updateGeoLiveViewed(o: any) {
  obj(o.peer);
  i32(o.msg_id);
}

function _authLoginToken(o: any) {
  i32(o.expires);
  bytes(o.token);
}

function _authLoginTokenMigrateTo(o: any) {
  i32(o.dc_id);
  bytes(o.token);
}

function _authLoginTokenSuccess(o: any) {
  obj(o.authorization);
}

function _accountContentSettings(o: any) {
  const flags = 
      has(o.sensitive_enabled)
    | has(o.sensitive_can_change) << 1;
  i32(flags);
  
}

function _messagesInactiveChats(o: any) {
  vector(i32, o.dates);
  vector(obj, o.chats);
  vector(obj, o.users);
}

function _wallPaperNoFile(o: any) {
  const flags = 
      has(o.default) << 1
    | has(o.dark) << 4
    | has(o.settings) << 2;
  i32(flags);
  
  flag(obj, o.settings);
}

function _inputThemeSettings(o: any) {
  const flags = 
      has(o.message_top_color)
    | has(o.message_bottom_color)
    | has(o.wallpaper) << 1
    | has(o.wallpaper_settings) << 1;
  i32(flags);
  
  obj(o.base_theme);
  i32(o.accent_color);
  flag(i32, o.message_top_color);
  flag(i32, o.message_bottom_color);
  flag(obj, o.wallpaper);
  flag(obj, o.wallpaper_settings);
}

function _themeSettings(o: any) {
  const flags = 
      has(o.message_top_color)
    | has(o.message_bottom_color)
    | has(o.wallpaper) << 1;
  i32(flags);
  
  obj(o.base_theme);
  i32(o.accent_color);
  flag(i32, o.message_top_color);
  flag(i32, o.message_bottom_color);
  flag(obj, o.wallpaper);
}

function _webPageAttributeTheme(o: any) {
  const flags = 
      has(o.documents)
    | has(o.settings) << 1;
  i32(flags);
  
  flagVector(obj, o.documents);
  flag(obj, o.settings);
}

function _invokeAfterMsg(o: any) {
  i64(o.msg_id);
  obj(o.query);
}

function _invokeAfterMsgs(o: any) {
  vector(i64, o.msg_ids);
  obj(o.query);
}

function _authSendCode(o: any) {
  str(o.phone_number);
  i32(o.api_id);
  str(o.api_hash);
  obj(o.settings);
}

function _authSignUp(o: any) {
  str(o.phone_number);
  str(o.phone_code_hash);
  str(o.first_name);
  str(o.last_name);
}

function _authSignIn(o: any) {
  str(o.phone_number);
  str(o.phone_code_hash);
  str(o.phone_code);
}

function _authExportAuthorization(o: any) {
  i32(o.dc_id);
}

function _authImportAuthorization(o: any) {
  i32(o.id);
  bytes(o.bytes);
}

function _authBindTempAuthKey(o: any) {
  i64(o.perm_auth_key_id);
  i64(o.nonce);
  i32(o.expires_at);
  bytes(o.encrypted_message);
}

function _accountRegisterDevice(o: any) {
  const flags = 
      has(o.no_muted)
  i32(flags);
  
  i32(o.token_type);
  str(o.token);
  bool(o.app_sandbox);
  bytes(o.secret);
  vector(i32, o.other_uids);
}

function _accountUnregisterDevice(o: any) {
  i32(o.token_type);
  str(o.token);
  vector(i32, o.other_uids);
}

function _accountUpdateNotifySettings(o: any) {
  obj(o.peer);
  obj(o.settings);
}

function _accountGetNotifySettings(o: any) {
  obj(o.peer);
}

function _accountUpdateProfile(o: any) {
  const flags = 
      has(o.first_name)
    | has(o.last_name) << 1
    | has(o.about) << 2;
  i32(flags);
  
  flag(str, o.first_name);
  flag(str, o.last_name);
  flag(str, o.about);
}

function _accountUpdateStatus(o: any) {
  bool(o.offline);
}

function _accountGetWallPapers(o: any) {
  i32(o.hash);
}

function _accountReportPeer(o: any) {
  obj(o.peer);
  obj(o.reason);
}

function _usersGetUsers(o: any) {
  vector(obj, o.id);
}

function _usersGetFullUser(o: any) {
  obj(o.id);
}

function _contactsGetContactIDs(o: any) {
  i32(o.hash);
}

function _contactsGetContacts(o: any) {
  i32(o.hash);
}

function _contactsImportContacts(o: any) {
  vector(obj, o.contacts);
}

function _contactsDeleteContacts(o: any) {
  vector(obj, o.id);
}

function _contactsDeleteByPhones(o: any) {
  vector(str, o.phones);
}

function _contactsBlock(o: any) {
  obj(o.id);
}

function _contactsUnblock(o: any) {
  obj(o.id);
}

function _contactsGetBlocked(o: any) {
  i32(o.offset);
  i32(o.limit);
}

function _messagesGetMessages(o: any) {
  vector(obj, o.id);
}

function _messagesGetDialogs(o: any) {
  const flags = 
      has(o.exclude_pinned)
    | has(o.folder_id) << 1
  i32(flags);
  
  flag(i32, o.folder_id);
  i32(o.offset_date);
  i32(o.offset_id);
  obj(o.offset_peer);
  i32(o.limit);
  i32(o.hash);
}

function _messagesGetHistory(o: any) {
  obj(o.peer);
  i32(o.offset_id);
  i32(o.offset_date);
  i32(o.add_offset);
  i32(o.limit);
  i32(o.max_id);
  i32(o.min_id);
  i32(o.hash);
}

function _messagesSearch(o: any) {
  const flags = 
      has(o.from_id)
  i32(flags);
  
  obj(o.peer);
  str(o.q);
  flag(obj, o.from_id);
  obj(o.filter);
  i32(o.min_date);
  i32(o.max_date);
  i32(o.offset_id);
  i32(o.add_offset);
  i32(o.limit);
  i32(o.max_id);
  i32(o.min_id);
  i32(o.hash);
}

function _messagesReadHistory(o: any) {
  obj(o.peer);
  i32(o.max_id);
}

function _messagesDeleteHistory(o: any) {
  const flags = 
      has(o.just_clear)
    | has(o.revoke) << 1
  i32(flags);
  
  obj(o.peer);
  i32(o.max_id);
}

function _messagesDeleteMessages(o: any) {
  const flags = 
      has(o.revoke)
  i32(flags);
  
  vector(i32, o.id);
}

function _messagesReceivedMessages(o: any) {
  i32(o.max_id);
}

function _messagesSetTyping(o: any) {
  obj(o.peer);
  obj(o.action);
}

function _messagesSendMessage(o: any) {
  const flags = 
      has(o.no_webpage) << 1
    | has(o.silent) << 5
    | has(o.background) << 6
    | has(o.clear_draft) << 7
    | has(o.reply_to_msg_id)
    | has(o.reply_markup) << 2
    | has(o.entities) << 3
    | has(o.schedule_date) << 10;
  i32(flags);
  
  obj(o.peer);
  flag(i32, o.reply_to_msg_id);
  str(o.message);
  i64(o.random_id);
  flag(obj, o.reply_markup);
  flagVector(obj, o.entities);
  flag(i32, o.schedule_date);
}

function _messagesSendMedia(o: any) {
  const flags = 
      has(o.silent) << 5
    | has(o.background) << 6
    | has(o.clear_draft) << 7
    | has(o.reply_to_msg_id)
    | has(o.reply_markup) << 2
    | has(o.entities) << 3
    | has(o.schedule_date) << 10;
  i32(flags);
  
  obj(o.peer);
  flag(i32, o.reply_to_msg_id);
  obj(o.media);
  str(o.message);
  i64(o.random_id);
  flag(obj, o.reply_markup);
  flagVector(obj, o.entities);
  flag(i32, o.schedule_date);
}

function _messagesForwardMessages(o: any) {
  const flags = 
      has(o.silent) << 5
    | has(o.background) << 6
    | has(o.with_my_score) << 8
    | has(o.grouped) << 9
    | has(o.schedule_date) << 10;
  i32(flags);
  
  obj(o.from_peer);
  vector(i32, o.id);
  vector(i64, o.random_id);
  obj(o.to_peer);
  flag(i32, o.schedule_date);
}

function _messagesReportSpam(o: any) {
  obj(o.peer);
}

function _messagesGetPeerSettings(o: any) {
  obj(o.peer);
}

function _messagesReport(o: any) {
  obj(o.peer);
  vector(i32, o.id);
  obj(o.reason);
}

function _messagesGetChats(o: any) {
  vector(i32, o.id);
}

function _messagesGetFullChat(o: any) {
  i32(o.chat_id);
}

function _messagesEditChatTitle(o: any) {
  i32(o.chat_id);
  str(o.title);
}

function _messagesEditChatPhoto(o: any) {
  i32(o.chat_id);
  obj(o.photo);
}

function _messagesAddChatUser(o: any) {
  i32(o.chat_id);
  obj(o.user_id);
  i32(o.fwd_limit);
}

function _messagesDeleteChatUser(o: any) {
  i32(o.chat_id);
  obj(o.user_id);
}

function _messagesCreateChat(o: any) {
  vector(obj, o.users);
  str(o.title);
}

function _updatesGetDifference(o: any) {
  const flags = 
      has(o.pts_total_limit)
  i32(flags);
  
  i32(o.pts);
  flag(i32, o.pts_total_limit);
  i32(o.date);
  i32(o.qts);
}

function _photosUpdateProfilePhoto(o: any) {
  obj(o.id);
}

function _photosUploadProfilePhoto(o: any) {
  obj(o.file);
}

function _photosDeletePhotos(o: any) {
  vector(obj, o.id);
}

function _uploadSaveFilePart(o: any) {
  i64(o.file_id);
  i32(o.file_part);
  bytes(o.bytes);
}

function _uploadGetFile(o: any) {
  const flags = 
      has(o.precise)
    | has(o.cdn_supported) << 1
  i32(flags);
  
  obj(o.location);
  i32(o.offset);
  i32(o.limit);
}

function _helpGetAppUpdate(o: any) {
  str(o.source);
}

function _photosGetUserPhotos(o: any) {
  obj(o.user_id);
  i32(o.offset);
  i64(o.max_id);
  i32(o.limit);
}

function _messagesGetDhConfig(o: any) {
  i32(o.version);
  i32(o.random_length);
}

function _messagesRequestEncryption(o: any) {
  obj(o.user_id);
  i32(o.random_id);
  bytes(o.g_a);
}

function _messagesAcceptEncryption(o: any) {
  obj(o.peer);
  bytes(o.g_b);
  i64(o.key_fingerprint);
}

function _messagesDiscardEncryption(o: any) {
  i32(o.chat_id);
}

function _messagesSetEncryptedTyping(o: any) {
  obj(o.peer);
  bool(o.typing);
}

function _messagesReadEncryptedHistory(o: any) {
  obj(o.peer);
  i32(o.max_date);
}

function _messagesSendEncrypted(o: any) {
  obj(o.peer);
  i64(o.random_id);
  bytes(o.data);
}

function _messagesSendEncryptedFile(o: any) {
  obj(o.peer);
  i64(o.random_id);
  bytes(o.data);
  obj(o.file);
}

function _messagesSendEncryptedService(o: any) {
  obj(o.peer);
  i64(o.random_id);
  bytes(o.data);
}

function _messagesReceivedQueue(o: any) {
  i32(o.max_qts);
}

function _messagesReportEncryptedSpam(o: any) {
  obj(o.peer);
}

function _uploadSaveBigFilePart(o: any) {
  i64(o.file_id);
  i32(o.file_part);
  i32(o.file_total_parts);
  bytes(o.bytes);
}

function _initConnection(o: any) {
  const flags = 
      has(o.proxy)
  i32(flags);
  
  i32(o.api_id);
  str(o.device_model);
  str(o.system_version);
  str(o.app_version);
  str(o.system_lang_code);
  str(o.lang_pack);
  str(o.lang_code);
  flag(obj, o.proxy);
  obj(o.query);
}

function _messagesReadMessageContents(o: any) {
  vector(i32, o.id);
}

function _accountCheckUsername(o: any) {
  str(o.username);
}

function _accountUpdateUsername(o: any) {
  str(o.username);
}

function _contactsSearch(o: any) {
  str(o.q);
  i32(o.limit);
}

function _accountGetPrivacy(o: any) {
  obj(o.key);
}

function _accountSetPrivacy(o: any) {
  obj(o.key);
  vector(obj, o.rules);
}

function _accountDeleteAccount(o: any) {
  str(o.reason);
}

function _accountSetAccountTTL(o: any) {
  obj(o.ttl);
}

function _invokeWithLayer(o: any) {
  i32(o.layer);
  obj(o.query);
}

function _contactsResolveUsername(o: any) {
  str(o.username);
}

function _accountSendChangePhoneCode(o: any) {
  str(o.phone_number);
  obj(o.settings);
}

function _accountChangePhone(o: any) {
  str(o.phone_number);
  str(o.phone_code_hash);
  str(o.phone_code);
}

function _messagesGetStickers(o: any) {
  str(o.emoticon);
  i32(o.hash);
}

function _messagesGetAllStickers(o: any) {
  i32(o.hash);
}

function _accountUpdateDeviceLocked(o: any) {
  i32(o.period);
}

function _authImportBotAuthorization(o: any) {
  i32(o.api_id);
  str(o.api_hash);
  str(o.bot_auth_token);
}

function _messagesGetWebPagePreview(o: any) {
  const flags = 
      has(o.entities) << 3;
  i32(flags);
  
  str(o.message);
  flagVector(obj, o.entities);
}

function _accountResetAuthorization(o: any) {
  i64(o.hash);
}

function _accountGetPasswordSettings(o: any) {
  obj(o.password);
}

function _accountUpdatePasswordSettings(o: any) {
  obj(o.password);
  obj(o.new_settings);
}

function _authCheckPassword(o: any) {
  obj(o.password);
}

function _authRecoverPassword(o: any) {
  str(o.code);
}

function _invokeWithoutUpdates(o: any) {
  obj(o.query);
}

function _messagesExportChatInvite(o: any) {
  obj(o.peer);
}

function _messagesCheckChatInvite(o: any) {
  str(o.hash);
}

function _messagesImportChatInvite(o: any) {
  str(o.hash);
}

function _messagesGetStickerSet(o: any) {
  obj(o.stickerset);
}

function _messagesInstallStickerSet(o: any) {
  obj(o.stickerset);
  bool(o.archived);
}

function _messagesUninstallStickerSet(o: any) {
  obj(o.stickerset);
}

function _messagesStartBot(o: any) {
  obj(o.bot);
  obj(o.peer);
  i64(o.random_id);
  str(o.start_param);
}

function _helpGetAppChangelog(o: any) {
  str(o.prev_app_version);
}

function _messagesGetMessagesViews(o: any) {
  obj(o.peer);
  vector(i32, o.id);
  bool(o.increment);
}

function _channelsReadHistory(o: any) {
  obj(o.channel);
  i32(o.max_id);
}

function _channelsDeleteMessages(o: any) {
  obj(o.channel);
  vector(i32, o.id);
}

function _channelsDeleteUserHistory(o: any) {
  obj(o.channel);
  obj(o.user_id);
}

function _channelsReportSpam(o: any) {
  obj(o.channel);
  obj(o.user_id);
  vector(i32, o.id);
}

function _channelsGetMessages(o: any) {
  obj(o.channel);
  vector(obj, o.id);
}

function _channelsGetParticipants(o: any) {
  obj(o.channel);
  obj(o.filter);
  i32(o.offset);
  i32(o.limit);
  i32(o.hash);
}

function _channelsGetParticipant(o: any) {
  obj(o.channel);
  obj(o.user_id);
}

function _channelsGetChannels(o: any) {
  vector(obj, o.id);
}

function _channelsGetFullChannel(o: any) {
  obj(o.channel);
}

function _channelsCreateChannel(o: any) {
  const flags = 
      has(o.broadcast)
    | has(o.megagroup) << 1
    | has(o.geo_point) << 2
    | has(o.address) << 2;
  i32(flags);
  
  str(o.title);
  str(o.about);
  flag(obj, o.geo_point);
  flag(str, o.address);
}

function _channelsEditAdmin(o: any) {
  obj(o.channel);
  obj(o.user_id);
  obj(o.admin_rights);
  str(o.rank);
}

function _channelsEditTitle(o: any) {
  obj(o.channel);
  str(o.title);
}

function _channelsEditPhoto(o: any) {
  obj(o.channel);
  obj(o.photo);
}

function _channelsCheckUsername(o: any) {
  obj(o.channel);
  str(o.username);
}

function _channelsUpdateUsername(o: any) {
  obj(o.channel);
  str(o.username);
}

function _channelsJoinChannel(o: any) {
  obj(o.channel);
}

function _channelsLeaveChannel(o: any) {
  obj(o.channel);
}

function _channelsInviteToChannel(o: any) {
  obj(o.channel);
  vector(obj, o.users);
}

function _channelsDeleteChannel(o: any) {
  obj(o.channel);
}

function _updatesGetChannelDifference(o: any) {
  const flags = 
      has(o.force)
  i32(flags);
  
  obj(o.channel);
  obj(o.filter);
  i32(o.pts);
  i32(o.limit);
}

function _messagesEditChatAdmin(o: any) {
  i32(o.chat_id);
  obj(o.user_id);
  bool(o.is_admin);
}

function _messagesMigrateChat(o: any) {
  i32(o.chat_id);
}

function _messagesSearchGlobal(o: any) {
  const flags = 
      has(o.folder_id)
  i32(flags);
  
  flag(i32, o.folder_id);
  str(o.q);
  i32(o.offset_rate);
  obj(o.offset_peer);
  i32(o.offset_id);
  i32(o.limit);
}

function _messagesReorderStickerSets(o: any) {
  const flags = 
      has(o.masks)
  i32(flags);
  
  vector(i64, o.order);
}

function _messagesGetDocumentByHash(o: any) {
  bytes(o.sha256);
  i32(o.size);
  str(o.mime_type);
}

function _messagesSearchGifs(o: any) {
  str(o.q);
  i32(o.offset);
}

function _messagesGetSavedGifs(o: any) {
  i32(o.hash);
}

function _messagesSaveGif(o: any) {
  obj(o.id);
  bool(o.unsave);
}

function _messagesGetInlineBotResults(o: any) {
  const flags = 
      has(o.geo_point)
  i32(flags);
  
  obj(o.bot);
  obj(o.peer);
  flag(obj, o.geo_point);
  str(o.query);
  str(o.offset);
}

function _messagesSetInlineBotResults(o: any) {
  const flags = 
      has(o.gallery)
    | has(o.private) << 1
    | has(o.next_offset) << 2
    | has(o.switch_pm) << 3;
  i32(flags);
  
  i64(o.query_id);
  vector(obj, o.results);
  i32(o.cache_time);
  flag(str, o.next_offset);
  flag(obj, o.switch_pm);
}

function _messagesSendInlineBotResult(o: any) {
  const flags = 
      has(o.silent) << 5
    | has(o.background) << 6
    | has(o.clear_draft) << 7
    | has(o.hide_via) << 11
    | has(o.reply_to_msg_id)
    | has(o.schedule_date) << 10;
  i32(flags);
  
  obj(o.peer);
  flag(i32, o.reply_to_msg_id);
  i64(o.random_id);
  i64(o.query_id);
  str(o.id);
  flag(i32, o.schedule_date);
}

function _channelsExportMessageLink(o: any) {
  obj(o.channel);
  i32(o.id);
  bool(o.grouped);
}

function _channelsToggleSignatures(o: any) {
  obj(o.channel);
  bool(o.enabled);
}

function _authResendCode(o: any) {
  str(o.phone_number);
  str(o.phone_code_hash);
}

function _authCancelCode(o: any) {
  str(o.phone_number);
  str(o.phone_code_hash);
}

function _messagesGetMessageEditData(o: any) {
  obj(o.peer);
  i32(o.id);
}

function _messagesEditMessage(o: any) {
  const flags = 
      has(o.no_webpage) << 1
    | has(o.message) << 11
    | has(o.media) << 14
    | has(o.reply_markup) << 2
    | has(o.entities) << 3
    | has(o.schedule_date) << 15;
  i32(flags);
  
  obj(o.peer);
  i32(o.id);
  flag(str, o.message);
  flag(obj, o.media);
  flag(obj, o.reply_markup);
  flagVector(obj, o.entities);
  flag(i32, o.schedule_date);
}

function _messagesEditInlineBotMessage(o: any) {
  const flags = 
      has(o.no_webpage) << 1
    | has(o.message) << 11
    | has(o.media) << 14
    | has(o.reply_markup) << 2
    | has(o.entities) << 3;
  i32(flags);
  
  obj(o.id);
  flag(str, o.message);
  flag(obj, o.media);
  flag(obj, o.reply_markup);
  flagVector(obj, o.entities);
}

function _messagesGetBotCallbackAnswer(o: any) {
  const flags = 
      has(o.game) << 1
    | has(o.data);
  i32(flags);
  
  obj(o.peer);
  i32(o.msg_id);
  flag(bytes, o.data);
}

function _messagesSetBotCallbackAnswer(o: any) {
  const flags = 
      has(o.alert) << 1
    | has(o.message)
    | has(o.url) << 2
  i32(flags);
  
  i64(o.query_id);
  flag(str, o.message);
  flag(str, o.url);
  i32(o.cache_time);
}

function _contactsGetTopPeers(o: any) {
  const flags = 
      has(o.correspondents)
    | has(o.bots_pm) << 1
    | has(o.bots_inline) << 2
    | has(o.phone_calls) << 3
    | has(o.forward_users) << 4
    | has(o.forward_chats) << 5
    | has(o.groups) << 10
    | has(o.channels) << 15
  i32(flags);
  
  i32(o.offset);
  i32(o.limit);
  i32(o.hash);
}

function _contactsResetTopPeerRating(o: any) {
  obj(o.category);
  obj(o.peer);
}

function _messagesGetPeerDialogs(o: any) {
  vector(obj, o.peers);
}

function _messagesSaveDraft(o: any) {
  const flags = 
      has(o.no_webpage) << 1
    | has(o.reply_to_msg_id)
    | has(o.entities) << 3;
  i32(flags);
  
  flag(i32, o.reply_to_msg_id);
  obj(o.peer);
  str(o.message);
  flagVector(obj, o.entities);
}

function _messagesGetFeaturedStickers(o: any) {
  i32(o.hash);
}

function _messagesReadFeaturedStickers(o: any) {
  vector(i64, o.id);
}

function _messagesGetRecentStickers(o: any) {
  const flags = 
      has(o.attached)
  i32(flags);
  
  i32(o.hash);
}

function _messagesSaveRecentSticker(o: any) {
  const flags = 
      has(o.attached)
  i32(flags);
  
  obj(o.id);
  bool(o.unsave);
}

function _messagesClearRecentStickers(o: any) {
  const flags = 
      has(o.attached);
  i32(flags);
  
}

function _messagesGetArchivedStickers(o: any) {
  const flags = 
      has(o.masks)
  i32(flags);
  
  i64(o.offset_id);
  i32(o.limit);
}

function _accountSendConfirmPhoneCode(o: any) {
  str(o.hash);
  obj(o.settings);
}

function _accountConfirmPhone(o: any) {
  str(o.phone_code_hash);
  str(o.phone_code);
}

function _channelsGetAdminedPublicChannels(o: any) {
  const flags = 
      has(o.by_location)
    | has(o.check_limit) << 1;
  i32(flags);
  
}

function _messagesGetMaskStickers(o: any) {
  i32(o.hash);
}

function _messagesGetAttachedStickers(o: any) {
  obj(o.media);
}

function _authDropTempAuthKeys(o: any) {
  vector(i64, o.except_auth_keys);
}

function _messagesSetGameScore(o: any) {
  const flags = 
      has(o.edit_message)
    | has(o.force) << 1
  i32(flags);
  
  obj(o.peer);
  i32(o.id);
  obj(o.user_id);
  i32(o.score);
}

function _messagesSetInlineGameScore(o: any) {
  const flags = 
      has(o.edit_message)
    | has(o.force) << 1
  i32(flags);
  
  obj(o.id);
  obj(o.user_id);
  i32(o.score);
}

function _messagesGetGameHighScores(o: any) {
  obj(o.peer);
  i32(o.id);
  obj(o.user_id);
}

function _messagesGetInlineGameHighScores(o: any) {
  obj(o.id);
  obj(o.user_id);
}

function _messagesGetCommonChats(o: any) {
  obj(o.user_id);
  i32(o.max_id);
  i32(o.limit);
}

function _messagesGetAllChats(o: any) {
  vector(i32, o.except_ids);
}

function _helpSetBotUpdatesStatus(o: any) {
  i32(o.pending_updates_count);
  str(o.message);
}

function _messagesGetWebPage(o: any) {
  str(o.url);
  i32(o.hash);
}

function _messagesToggleDialogPin(o: any) {
  const flags = 
      has(o.pinned)
  i32(flags);
  
  obj(o.peer);
}

function _messagesReorderPinnedDialogs(o: any) {
  const flags = 
      has(o.force)
  i32(flags);
  
  i32(o.folder_id);
  vector(obj, o.order);
}

function _messagesGetPinnedDialogs(o: any) {
  i32(o.folder_id);
}

function _botsSendCustomRequest(o: any) {
  str(o.custom_method);
  obj(o.params);
}

function _botsAnswerWebhookJSONQuery(o: any) {
  i64(o.query_id);
  obj(o.data);
}

function _uploadGetWebFile(o: any) {
  obj(o.location);
  i32(o.offset);
  i32(o.limit);
}

function _paymentsGetPaymentForm(o: any) {
  i32(o.msg_id);
}

function _paymentsGetPaymentReceipt(o: any) {
  i32(o.msg_id);
}

function _paymentsValidateRequestedInfo(o: any) {
  const flags = 
      has(o.save)
  i32(flags);
  
  i32(o.msg_id);
  obj(o.info);
}

function _paymentsSendPaymentForm(o: any) {
  const flags = 
      has(o.requested_info_id)
    | has(o.shipping_option_id) << 1
  i32(flags);
  
  i32(o.msg_id);
  flag(str, o.requested_info_id);
  flag(str, o.shipping_option_id);
  obj(o.credentials);
}

function _accountGetTmpPassword(o: any) {
  obj(o.password);
  i32(o.period);
}

function _paymentsClearSavedInfo(o: any) {
  const flags = 
      has(o.credentials)
    | has(o.info) << 1;
  i32(flags);
  
}

function _messagesSetBotShippingResults(o: any) {
  const flags = 
      has(o.error)
    | has(o.shipping_options) << 1;
  i32(flags);
  
  i64(o.query_id);
  flag(str, o.error);
  flagVector(obj, o.shipping_options);
}

function _messagesSetBotPrecheckoutResults(o: any) {
  const flags = 
      has(o.success) << 1
    | has(o.error);
  i32(flags);
  
  i64(o.query_id);
  flag(str, o.error);
}

function _stickersCreateStickerSet(o: any) {
  const flags = 
      has(o.masks)
  i32(flags);
  
  obj(o.user_id);
  str(o.title);
  str(o.short_name);
  vector(obj, o.stickers);
}

function _stickersRemoveStickerFromSet(o: any) {
  obj(o.sticker);
}

function _stickersChangeStickerPosition(o: any) {
  obj(o.sticker);
  i32(o.position);
}

function _stickersAddStickerToSet(o: any) {
  obj(o.stickerset);
  obj(o.sticker);
}

function _messagesUploadMedia(o: any) {
  obj(o.peer);
  obj(o.media);
}

function _phoneRequestCall(o: any) {
  const flags = 
      has(o.video)
  i32(flags);
  
  obj(o.user_id);
  i32(o.random_id);
  bytes(o.g_a_hash);
  obj(o.protocol);
}

function _phoneAcceptCall(o: any) {
  obj(o.peer);
  bytes(o.g_b);
  obj(o.protocol);
}

function _phoneConfirmCall(o: any) {
  obj(o.peer);
  bytes(o.g_a);
  i64(o.key_fingerprint);
  obj(o.protocol);
}

function _phoneReceivedCall(o: any) {
  obj(o.peer);
}

function _phoneDiscardCall(o: any) {
  const flags = 
      has(o.video)
  i32(flags);
  
  obj(o.peer);
  i32(o.duration);
  obj(o.reason);
  i64(o.connection_id);
}

function _phoneSetCallRating(o: any) {
  const flags = 
      has(o.user_initiative)
  i32(flags);
  
  obj(o.peer);
  i32(o.rating);
  str(o.comment);
}

function _phoneSaveCallDebug(o: any) {
  obj(o.peer);
  obj(o.debug);
}

function _uploadGetCdnFile(o: any) {
  bytes(o.file_token);
  i32(o.offset);
  i32(o.limit);
}

function _uploadReuploadCdnFile(o: any) {
  bytes(o.file_token);
  bytes(o.request_token);
}

function _langpackGetLangPack(o: any) {
  str(o.lang_pack);
  str(o.lang_code);
}

function _langpackGetStrings(o: any) {
  str(o.lang_pack);
  str(o.lang_code);
  vector(str, o.keys);
}

function _langpackGetDifference(o: any) {
  str(o.lang_pack);
  str(o.lang_code);
  i32(o.from_version);
}

function _langpackGetLanguages(o: any) {
  str(o.lang_pack);
}

function _channelsEditBanned(o: any) {
  obj(o.channel);
  obj(o.user_id);
  obj(o.banned_rights);
}

function _channelsGetAdminLog(o: any) {
  const flags = 
      has(o.events_filter)
    | has(o.admins) << 1
  i32(flags);
  
  obj(o.channel);
  str(o.q);
  flag(obj, o.events_filter);
  flagVector(obj, o.admins);
  i64(o.max_id);
  i64(o.min_id);
  i32(o.limit);
}

function _uploadGetCdnFileHashes(o: any) {
  bytes(o.file_token);
  i32(o.offset);
}

function _messagesSendScreenshotNotification(o: any) {
  obj(o.peer);
  i32(o.reply_to_msg_id);
  i64(o.random_id);
}

function _channelsSetStickers(o: any) {
  obj(o.channel);
  obj(o.stickerset);
}

function _messagesGetFavedStickers(o: any) {
  i32(o.hash);
}

function _messagesFaveSticker(o: any) {
  obj(o.id);
  bool(o.unfave);
}

function _channelsReadMessageContents(o: any) {
  obj(o.channel);
  vector(i32, o.id);
}

function _messagesGetUnreadMentions(o: any) {
  obj(o.peer);
  i32(o.offset_id);
  i32(o.add_offset);
  i32(o.limit);
  i32(o.max_id);
  i32(o.min_id);
}

function _channelsDeleteHistory(o: any) {
  obj(o.channel);
  i32(o.max_id);
}

function _helpGetRecentMeUrls(o: any) {
  str(o.referer);
}

function _channelsTogglePreHistoryHidden(o: any) {
  obj(o.channel);
  bool(o.enabled);
}

function _messagesReadMentions(o: any) {
  obj(o.peer);
}

function _messagesGetRecentLocations(o: any) {
  obj(o.peer);
  i32(o.limit);
  i32(o.hash);
}

function _messagesSendMultiMedia(o: any) {
  const flags = 
      has(o.silent) << 5
    | has(o.background) << 6
    | has(o.clear_draft) << 7
    | has(o.reply_to_msg_id)
    | has(o.schedule_date) << 10;
  i32(flags);
  
  obj(o.peer);
  flag(i32, o.reply_to_msg_id);
  vector(obj, o.multi_media);
  flag(i32, o.schedule_date);
}

function _messagesUploadEncryptedFile(o: any) {
  obj(o.peer);
  obj(o.file);
}

function _accountResetWebAuthorization(o: any) {
  i64(o.hash);
}

function _messagesSearchStickerSets(o: any) {
  const flags = 
      has(o.exclude_featured)
  i32(flags);
  
  str(o.q);
  i32(o.hash);
}

function _uploadGetFileHashes(o: any) {
  obj(o.location);
  i32(o.offset);
}

function _helpAcceptTermsOfService(o: any) {
  obj(o.id);
}

function _accountGetSecureValue(o: any) {
  vector(obj, o.types);
}

function _accountSaveSecureValue(o: any) {
  obj(o.value);
  i64(o.secure_secret_id);
}

function _accountDeleteSecureValue(o: any) {
  vector(obj, o.types);
}

function _usersSetSecureValueErrors(o: any) {
  obj(o.id);
  vector(obj, o.errors);
}

function _accountGetAuthorizationForm(o: any) {
  i32(o.bot_id);
  str(o.scope);
  str(o.public_key);
}

function _accountAcceptAuthorization(o: any) {
  i32(o.bot_id);
  str(o.scope);
  str(o.public_key);
  vector(obj, o.value_hashes);
  obj(o.credentials);
}

function _accountSendVerifyPhoneCode(o: any) {
  str(o.phone_number);
  obj(o.settings);
}

function _accountVerifyPhone(o: any) {
  str(o.phone_number);
  str(o.phone_code_hash);
  str(o.phone_code);
}

function _accountSendVerifyEmailCode(o: any) {
  str(o.email);
}

function _accountVerifyEmail(o: any) {
  str(o.email);
  str(o.code);
}

function _helpGetDeepLinkInfo(o: any) {
  str(o.path);
}

function _channelsGetLeftChannels(o: any) {
  i32(o.offset);
}

function _accountInitTakeoutSession(o: any) {
  const flags = 
      has(o.contacts)
    | has(o.message_users) << 1
    | has(o.message_chats) << 2
    | has(o.message_megagroups) << 3
    | has(o.message_channels) << 4
    | has(o.files) << 5
    | has(o.file_max_size) << 5;
  i32(flags);
  
  flag(i32, o.file_max_size);
}

function _accountFinishTakeoutSession(o: any) {
  const flags = 
      has(o.success);
  i32(flags);
  
}

function _invokeWithMessagesRange(o: any) {
  obj(o.range);
  obj(o.query);
}

function _invokeWithTakeout(o: any) {
  i64(o.takeout_id);
  obj(o.query);
}

function _messagesMarkDialogUnread(o: any) {
  const flags = 
      has(o.unread)
  i32(flags);
  
  obj(o.peer);
}

function _contactsToggleTopPeers(o: any) {
  bool(o.enabled);
}

function _helpSaveAppLog(o: any) {
  vector(obj, o.events);
}

function _helpGetPassportConfig(o: any) {
  i32(o.hash);
}

function _langpackGetLanguage(o: any) {
  str(o.lang_pack);
  str(o.lang_code);
}

function _messagesUpdatePinnedMessage(o: any) {
  const flags = 
      has(o.silent)
  i32(flags);
  
  obj(o.peer);
  i32(o.id);
}

function _accountConfirmPasswordEmail(o: any) {
  str(o.code);
}

function _helpGetUserInfo(o: any) {
  obj(o.user_id);
}

function _helpEditUserInfo(o: any) {
  obj(o.user_id);
  str(o.message);
  vector(obj, o.entities);
}

function _accountSetContactSignUpNotification(o: any) {
  bool(o.silent);
}

function _accountGetNotifyExceptions(o: any) {
  const flags = 
      has(o.compare_sound) << 1
    | has(o.peer);
  i32(flags);
  
  flag(obj, o.peer);
}

function _messagesSendVote(o: any) {
  obj(o.peer);
  i32(o.msg_id);
  vector(bytes, o.options);
}

function _messagesGetPollResults(o: any) {
  obj(o.peer);
  i32(o.msg_id);
}

function _messagesGetOnlines(o: any) {
  obj(o.peer);
}

function _messagesGetStatsURL(o: any) {
  const flags = 
      has(o.dark)
  i32(flags);
  
  obj(o.peer);
  str(o.params);
}

function _messagesEditChatAbout(o: any) {
  obj(o.peer);
  str(o.about);
}

function _messagesEditChatDefaultBannedRights(o: any) {
  obj(o.peer);
  obj(o.banned_rights);
}

function _accountGetWallPaper(o: any) {
  obj(o.wallpaper);
}

function _accountUploadWallPaper(o: any) {
  obj(o.file);
  str(o.mime_type);
  obj(o.settings);
}

function _accountSaveWallPaper(o: any) {
  obj(o.wallpaper);
  bool(o.unsave);
  obj(o.settings);
}

function _accountInstallWallPaper(o: any) {
  obj(o.wallpaper);
  obj(o.settings);
}

function _accountSaveAutoDownloadSettings(o: any) {
  const flags = 
      has(o.low)
    | has(o.high) << 1
  i32(flags);
  
  obj(o.settings);
}

function _messagesGetEmojiKeywords(o: any) {
  str(o.lang_code);
}

function _messagesGetEmojiKeywordsDifference(o: any) {
  str(o.lang_code);
  i32(o.from_version);
}

function _messagesGetEmojiKeywordsLanguages(o: any) {
  vector(str, o.lang_codes);
}

function _messagesGetEmojiURL(o: any) {
  str(o.lang_code);
}

function _foldersEditPeerFolders(o: any) {
  vector(obj, o.folder_peers);
}

function _foldersDeleteFolder(o: any) {
  i32(o.folder_id);
}

function _messagesGetSearchCounters(o: any) {
  obj(o.peer);
  vector(obj, o.filters);
}

function _channelsSetDiscussionGroup(o: any) {
  obj(o.broadcast);
  obj(o.group);
}

function _messagesRequestUrlAuth(o: any) {
  obj(o.peer);
  i32(o.msg_id);
  i32(o.button_id);
}

function _messagesAcceptUrlAuth(o: any) {
  const flags = 
      has(o.write_allowed)
  i32(flags);
  
  obj(o.peer);
  i32(o.msg_id);
  i32(o.button_id);
}

function _messagesHidePeerSettingsBar(o: any) {
  obj(o.peer);
}

function _contactsAddContact(o: any) {
  const flags = 
      has(o.add_phone_privacy_exception)
  i32(flags);
  
  obj(o.id);
  str(o.first_name);
  str(o.last_name);
  str(o.phone);
}

function _contactsAcceptContact(o: any) {
  obj(o.id);
}

function _channelsEditCreator(o: any) {
  obj(o.channel);
  obj(o.user_id);
  obj(o.password);
}

function _contactsGetLocated(o: any) {
  obj(o.geo_point);
}

function _channelsEditLocation(o: any) {
  obj(o.channel);
  obj(o.geo_point);
  str(o.address);
}

function _channelsToggleSlowMode(o: any) {
  obj(o.channel);
  i32(o.seconds);
}

function _messagesGetScheduledHistory(o: any) {
  obj(o.peer);
  i32(o.hash);
}

function _messagesGetScheduledMessages(o: any) {
  obj(o.peer);
  vector(i32, o.id);
}

function _messagesSendScheduledMessages(o: any) {
  obj(o.peer);
  vector(i32, o.id);
}

function _messagesDeleteScheduledMessages(o: any) {
  obj(o.peer);
  vector(i32, o.id);
}

function _accountUploadTheme(o: any) {
  const flags = 
      has(o.thumb)
  i32(flags);
  
  obj(o.file);
  flag(obj, o.thumb);
  str(o.file_name);
  str(o.mime_type);
}

function _accountCreateTheme(o: any) {
  const flags = 
      has(o.document) << 2
    | has(o.settings) << 3;
  i32(flags);
  
  str(o.slug);
  str(o.title);
  flag(obj, o.document);
  flag(obj, o.settings);
}

function _accountUpdateTheme(o: any) {
  const flags = 
      has(o.slug)
    | has(o.title) << 1
    | has(o.document) << 2
    | has(o.settings) << 3;
  i32(flags);
  
  str(o.format);
  obj(o.theme);
  flag(str, o.slug);
  flag(str, o.title);
  flag(obj, o.document);
  flag(obj, o.settings);
}

function _accountSaveTheme(o: any) {
  obj(o.theme);
  bool(o.unsave);
}

function _accountInstallTheme(o: any) {
  const flags = 
      has(o.dark)
    | has(o.format) << 1
    | has(o.theme) << 1;
  i32(flags);
  
  flag(str, o.format);
  flag(obj, o.theme);
}

function _accountGetTheme(o: any) {
  str(o.format);
  obj(o.theme);
  i64(o.document_id);
}

function _accountGetThemes(o: any) {
  str(o.format);
  i32(o.hash);
}

function _authExportLoginToken(o: any) {
  i32(o.api_id);
  str(o.api_hash);
  vector(i32, o.except_ids);
}

function _authImportLoginToken(o: any) {
  bytes(o.token);
}

function _authAcceptLoginToken(o: any) {
  bytes(o.token);
}

function _accountSetContentSettings(o: any) {
  const flags = 
      has(o.sensitive_enabled);
  i32(flags);
  
}

function _accountGetMultiWallPapers(o: any) {
  vector(obj, o.wallpapers);
}


const builderMap: Record<string, [number, ((o: any) => void)?]> = {
  'boolFalse': [0xbc799737],
  'boolTrue': [0x997275b5],
  'true': [0x3fedd339],
  'vector': [0x1cb5c415],
  'error': [0xc4b9f9bb, _error],
  'null': [0x56730bcc],
  'inputPeerEmpty': [0x7f3b18ea],
  'inputPeerSelf': [0x7da07ec9],
  'inputPeerChat': [0x179be863, _inputPeerChat],
  'inputUserEmpty': [0xb98886cf],
  'inputUserSelf': [0xf7c1b13f],
  'inputPhoneContact': [0xf392b7f4, _inputPhoneContact],
  'inputFile': [0xf52ff27f, _inputFile],
  'inputMediaEmpty': [0x9664f57f],
  'inputMediaUploadedPhoto': [0x1e287d04, _inputMediaUploadedPhoto],
  'inputMediaPhoto': [0xb3ba0635, _inputMediaPhoto],
  'inputMediaGeoPoint': [0xf9c44144, _inputMediaGeoPoint],
  'inputMediaContact': [0xf8ab7dfb, _inputMediaContact],
  'inputChatPhotoEmpty': [0x1ca48f57],
  'inputChatUploadedPhoto': [0x927c55b4, _inputChatUploadedPhoto],
  'inputChatPhoto': [0x8953ad37, _inputChatPhoto],
  'inputGeoPointEmpty': [0xe4c123d6],
  'inputGeoPoint': [0xf3b7acc9, _inputGeoPoint],
  'inputPhotoEmpty': [0x1cd7bf0d],
  'inputPhoto': [0x3bb3b94a, _inputPhoto],
  'inputFileLocation': [0xdfdaabe1, _inputFileLocation],
  'peerUser': [0x9db1bc6d, _peerUser],
  'peerChat': [0xbad0e5bb, _peerChat],
  'storage.fileUnknown': [0xaa963b05],
  'storage.filePartial': [0x40bc6f52],
  'storage.fileJpeg': [0x7efe0e],
  'storage.fileGif': [0xcae1aadf],
  'storage.filePng': [0xa4f63c0],
  'storage.filePdf': [0xae1e508d],
  'storage.fileMp3': [0x528a0677],
  'storage.fileMov': [0x4b09ebbc],
  'storage.fileMp4': [0xb3cea0e4],
  'storage.fileWebp': [0x1081464c],
  'userEmpty': [0x200250ba, _userEmpty],
  'userProfilePhotoEmpty': [0x4f11bae1],
  'userProfilePhoto': [0xecd75d8c, _userProfilePhoto],
  'userStatusEmpty': [0x9d05049],
  'userStatusOnline': [0xedb93949, _userStatusOnline],
  'userStatusOffline': [0x8c703f, _userStatusOffline],
  'chatEmpty': [0x9ba2d800, _chatEmpty],
  'chat': [0x3bda1bde, _chat],
  'chatForbidden': [0x7328bdb, _chatForbidden],
  'chatFull': [0x1b7c9db3, _chatFull],
  'chatParticipant': [0xc8d7493e, _chatParticipant],
  'chatParticipantsForbidden': [0xfc900c2b, _chatParticipantsForbidden],
  'chatParticipants': [0x3f460fed, _chatParticipants],
  'chatPhotoEmpty': [0x37c1011c],
  'chatPhoto': [0x475cdbd5, _chatPhoto],
  'messageEmpty': [0x83e5de54, _messageEmpty],
  'message': [0x452c0e65, _message],
  'messageService': [0x9e19a1f6, _messageService],
  'messageMediaEmpty': [0x3ded6320],
  'messageMediaPhoto': [0x695150d7, _messageMediaPhoto],
  'messageMediaGeo': [0x56e0d474, _messageMediaGeo],
  'messageMediaContact': [0xcbf24940, _messageMediaContact],
  'messageMediaUnsupported': [0x9f84f49e],
  'messageActionEmpty': [0xb6aef7b0],
  'messageActionChatCreate': [0xa6638b9a, _messageActionChatCreate],
  'messageActionChatEditTitle': [0xb5a1ce5a, _messageActionChatEditTitle],
  'messageActionChatEditPhoto': [0x7fcb13a8, _messageActionChatEditPhoto],
  'messageActionChatDeletePhoto': [0x95e3fbef],
  'messageActionChatAddUser': [0x488a7337, _messageActionChatAddUser],
  'messageActionChatDeleteUser': [0xb2ae9b0c, _messageActionChatDeleteUser],
  'dialog': [0x2c171f72, _dialog],
  'photoEmpty': [0x2331b22d, _photoEmpty],
  'photo': [0xd07504a5, _photo],
  'photoSizeEmpty': [0xe17e23c, _photoSizeEmpty],
  'photoSize': [0x77bfb61b, _photoSize],
  'photoCachedSize': [0xe9a734fa, _photoCachedSize],
  'geoPointEmpty': [0x1117dd5f],
  'geoPoint': [0x296f104, _geoPoint],
  'auth.sentCode': [0x5e002502, _authSentCode],
  'auth.authorization': [0xcd050916, _authAuthorization],
  'auth.exportedAuthorization': [0xdf969c2d, _authExportedAuthorization],
  'inputNotifyPeer': [0xb8bc5b0c, _inputNotifyPeer],
  'inputNotifyUsers': [0x193b4417],
  'inputNotifyChats': [0x4a95e84e],
  'inputPeerNotifySettings': [0x9c3d198e, _inputPeerNotifySettings],
  'peerNotifySettings': [0xaf509d20, _peerNotifySettings],
  'peerSettings': [0x818426cd, _peerSettings],
  'wallPaper': [0xa437c3ed, _wallPaper],
  'inputReportReasonSpam': [0x58dbcab8],
  'inputReportReasonViolence': [0x1e22c78d],
  'inputReportReasonPornography': [0x2e59d922],
  'inputReportReasonChildAbuse': [0xadf44ee3],
  'inputReportReasonOther': [0xe1746d0a, _inputReportReasonOther],
  'userFull': [0xedf17c12, _userFull],
  'contact': [0xf911c994, _contact],
  'importedContact': [0xd0028438, _importedContact],
  'contactBlocked': [0x561bc879, _contactBlocked],
  'contactStatus': [0xd3680c61, _contactStatus],
  'contacts.contactsNotModified': [0xb74ba9d2],
  'contacts.contacts': [0xeae87e42, _contactsContacts],
  'contacts.importedContacts': [0x77d01c3b, _contactsImportedContacts],
  'contacts.blocked': [0x1c138d15, _contactsBlocked],
  'contacts.blockedSlice': [0x900802a1, _contactsBlockedSlice],
  'messages.dialogs': [0x15ba6c40, _messagesDialogs],
  'messages.dialogsSlice': [0x71e094f3, _messagesDialogsSlice],
  'messages.messages': [0x8c718e87, _messagesMessages],
  'messages.messagesSlice': [0xc8edce1e, _messagesMessagesSlice],
  'messages.chats': [0x64ff9fd5, _messagesChats],
  'messages.chatFull': [0xe5d7d19c, _messagesChatFull],
  'messages.affectedHistory': [0xb45c69d1, _messagesAffectedHistory],
  'inputMessagesFilterEmpty': [0x57e2f66c],
  'inputMessagesFilterPhotos': [0x9609a51c],
  'inputMessagesFilterVideo': [0x9fc00e65],
  'inputMessagesFilterPhotoVideo': [0x56e9f0e4],
  'inputMessagesFilterDocument': [0x9eddf188],
  'inputMessagesFilterUrl': [0x7ef0dd87],
  'inputMessagesFilterGif': [0xffc86587],
  'updateNewMessage': [0x1f2b0afd, _updateNewMessage],
  'updateMessageID': [0x4e90bfd6, _updateMessageID],
  'updateDeleteMessages': [0xa20db0e5, _updateDeleteMessages],
  'updateUserTyping': [0x5c486927, _updateUserTyping],
  'updateChatUserTyping': [0x9a65ea1f, _updateChatUserTyping],
  'updateChatParticipants': [0x7761198, _updateChatParticipants],
  'updateUserStatus': [0x1bfbd823, _updateUserStatus],
  'updateUserName': [0xa7332b73, _updateUserName],
  'updateUserPhoto': [0x95313b0c, _updateUserPhoto],
  'updates.state': [0xa56c2a3e, _updatesState],
  'updates.differenceEmpty': [0x5d75a138, _updatesDifferenceEmpty],
  'updates.difference': [0xf49ca0, _updatesDifference],
  'updates.differenceSlice': [0xa8fb1981, _updatesDifferenceSlice],
  'updatesTooLong': [0xe317af7e],
  'updateShortMessage': [0x914fbf11, _updateShortMessage],
  'updateShortChatMessage': [0x16812688, _updateShortChatMessage],
  'updateShort': [0x78d4dec1, _updateShort],
  'updatesCombined': [0x725b04c3, _updatesCombined],
  'updates': [0x74ae4240, _updates],
  'photos.photos': [0x8dca6aa5, _photosPhotos],
  'photos.photosSlice': [0x15051f54, _photosPhotosSlice],
  'photos.photo': [0x20212ca8, _photosPhoto],
  'upload.file': [0x96a18d5, _uploadFile],
  'dcOption': [0x18b7a10d, _dcOption],
  'config': [0x330b4067, _config],
  'nearestDc': [0x8e1a1775, _nearestDc],
  'help.appUpdate': [0x1da7158f, _helpAppUpdate],
  'help.noAppUpdate': [0xc45a6536],
  'help.inviteText': [0x18cb9f78, _helpInviteText],
  'updateNewEncryptedMessage': [0x12bcbd9a, _updateNewEncryptedMessage],
  'updateEncryptedChatTyping': [0x1710f156, _updateEncryptedChatTyping],
  'updateEncryption': [0xb4a2e88d, _updateEncryption],
  'updateEncryptedMessagesRead': [0x38fe25b7, _updateEncryptedMessagesRead],
  'encryptedChatEmpty': [0xab7ec0a0, _encryptedChatEmpty],
  'encryptedChatWaiting': [0x3bf703dc, _encryptedChatWaiting],
  'encryptedChatRequested': [0xc878527e, _encryptedChatRequested],
  'encryptedChat': [0xfa56ce36, _encryptedChat],
  'encryptedChatDiscarded': [0x13d6dd27, _encryptedChatDiscarded],
  'inputEncryptedChat': [0xf141b5e1, _inputEncryptedChat],
  'encryptedFileEmpty': [0xc21f497e],
  'encryptedFile': [0x4a70994c, _encryptedFile],
  'inputEncryptedFileEmpty': [0x1837c364],
  'inputEncryptedFileUploaded': [0x64bd0306, _inputEncryptedFileUploaded],
  'inputEncryptedFile': [0x5a17b5e5, _inputEncryptedFile],
  'inputEncryptedFileLocation': [0xf5235d55, _inputEncryptedFileLocation],
  'encryptedMessage': [0xed18c118, _encryptedMessage],
  'encryptedMessageService': [0x23734b06, _encryptedMessageService],
  'messages.dhConfigNotModified': [0xc0e24635, _messagesDhConfigNotModified],
  'messages.dhConfig': [0x2c221edd, _messagesDhConfig],
  'messages.sentEncryptedMessage': [0x560f8935, _messagesSentEncryptedMessage],
  'messages.sentEncryptedFile': [0x9493ff32, _messagesSentEncryptedFile],
  'inputFileBig': [0xfa4f0bb5, _inputFileBig],
  'inputEncryptedFileBigUploaded': [0x2dc173c8, _inputEncryptedFileBigUploaded],
  'updateChatParticipantAdd': [0xea4b0e5c, _updateChatParticipantAdd],
  'updateChatParticipantDelete': [0x6e5f8c22, _updateChatParticipantDelete],
  'updateDcOptions': [0x8e5e9873, _updateDcOptions],
  'inputMediaUploadedDocument': [0x5b38c6c1, _inputMediaUploadedDocument],
  'inputMediaDocument': [0x23ab23d2, _inputMediaDocument],
  'messageMediaDocument': [0x9cb070d7, _messageMediaDocument],
  'inputDocumentEmpty': [0x72f0eaae],
  'inputDocument': [0x1abfb575, _inputDocument],
  'inputDocumentFileLocation': [0xbad07584, _inputDocumentFileLocation],
  'documentEmpty': [0x36f8c871, _documentEmpty],
  'document': [0x9ba29cc1, _document],
  'help.support': [0x17c6b5f6, _helpSupport],
  'notifyPeer': [0x9fd40bd8, _notifyPeer],
  'notifyUsers': [0xb4c83b4c],
  'notifyChats': [0xc007cec3],
  'updateUserBlocked': [0x80ece81a, _updateUserBlocked],
  'updateNotifySettings': [0xbec268ef, _updateNotifySettings],
  'sendMessageTypingAction': [0x16bf744e],
  'sendMessageCancelAction': [0xfd5ec8f5],
  'sendMessageRecordVideoAction': [0xa187d66f],
  'sendMessageUploadVideoAction': [0xe9763aec, _sendMessageUploadVideoAction],
  'sendMessageRecordAudioAction': [0xd52f73f7],
  'sendMessageUploadAudioAction': [0xf351d7ab, _sendMessageUploadAudioAction],
  'sendMessageUploadPhotoAction': [0xd1d34a26, _sendMessageUploadPhotoAction],
  'sendMessageUploadDocumentAction': [0xaa0cd9e4, _sendMessageUploadDocumentAction],
  'sendMessageGeoLocationAction': [0x176f8ba1],
  'sendMessageChooseContactAction': [0x628cbc6f],
  'contacts.found': [0xb3134d9d, _contactsFound],
  'updateServiceNotification': [0xebe46819, _updateServiceNotification],
  'userStatusRecently': [0xe26f42f1],
  'userStatusLastWeek': [0x7bf09fc],
  'userStatusLastMonth': [0x77ebc742],
  'updatePrivacy': [0xee3b272a, _updatePrivacy],
  'inputPrivacyKeyStatusTimestamp': [0x4f96cb18],
  'privacyKeyStatusTimestamp': [0xbc2eab30],
  'inputPrivacyValueAllowContacts': [0xd09e07b],
  'inputPrivacyValueAllowAll': [0x184b35ce],
  'inputPrivacyValueAllowUsers': [0x131cc67f, _inputPrivacyValueAllowUsers],
  'inputPrivacyValueDisallowContacts': [0xba52007],
  'inputPrivacyValueDisallowAll': [0xd66b66c9],
  'inputPrivacyValueDisallowUsers': [0x90110467, _inputPrivacyValueDisallowUsers],
  'privacyValueAllowContacts': [0xfffe1bac],
  'privacyValueAllowAll': [0x65427b82],
  'privacyValueAllowUsers': [0x4d5bbe0c, _privacyValueAllowUsers],
  'privacyValueDisallowContacts': [0xf888fa1a],
  'privacyValueDisallowAll': [0x8b73e763],
  'privacyValueDisallowUsers': [0xc7f49b7, _privacyValueDisallowUsers],
  'account.privacyRules': [0x50a04e45, _accountPrivacyRules],
  'accountDaysTTL': [0xb8d0afdf, _accountDaysTTL],
  'updateUserPhone': [0x12b9417b, _updateUserPhone],
  'documentAttributeImageSize': [0x6c37c15c, _documentAttributeImageSize],
  'documentAttributeAnimated': [0x11b58939],
  'documentAttributeSticker': [0x6319d612, _documentAttributeSticker],
  'documentAttributeVideo': [0xef02ce6, _documentAttributeVideo],
  'documentAttributeAudio': [0x9852f9c6, _documentAttributeAudio],
  'documentAttributeFilename': [0x15590068, _documentAttributeFilename],
  'messages.stickersNotModified': [0xf1749a22],
  'messages.stickers': [0xe4599bbd, _messagesStickers],
  'stickerPack': [0x12b299d4, _stickerPack],
  'messages.allStickersNotModified': [0xe86602c3],
  'messages.allStickers': [0xedfd405f, _messagesAllStickers],
  'updateReadHistoryInbox': [0x9c974fdf, _updateReadHistoryInbox],
  'updateReadHistoryOutbox': [0x2f2f21bf, _updateReadHistoryOutbox],
  'messages.affectedMessages': [0x84d19185, _messagesAffectedMessages],
  'updateWebPage': [0x7f891213, _updateWebPage],
  'webPageEmpty': [0xeb1477e8, _webPageEmpty],
  'webPagePending': [0xc586da1c, _webPagePending],
  'webPage': [0xe89c45b2, _webPage],
  'messageMediaWebPage': [0xa32dd600, _messageMediaWebPage],
  'authorization': [0xad01d61d, _authorization],
  'account.authorizations': [0x1250abde, _accountAuthorizations],
  'account.password': [0xad2641f8, _accountPassword],
  'account.passwordSettings': [0x9a5c33e5, _accountPasswordSettings],
  'account.passwordInputSettings': [0xc23727c9, _accountPasswordInputSettings],
  'auth.passwordRecovery': [0x137948a5, _authPasswordRecovery],
  'inputMediaVenue': [0xc13d1c11, _inputMediaVenue],
  'messageMediaVenue': [0x2ec0533f, _messageMediaVenue],
  'receivedNotifyMessage': [0xa384b779, _receivedNotifyMessage],
  'chatInviteEmpty': [0x69df3769],
  'chatInviteExported': [0xfc2e05bc, _chatInviteExported],
  'chatInviteAlready': [0x5a686d7c, _chatInviteAlready],
  'chatInvite': [0xdfc2f58e, _chatInvite],
  'messageActionChatJoinedByLink': [0xf89cf5e8, _messageActionChatJoinedByLink],
  'updateReadMessagesContents': [0x68c13933, _updateReadMessagesContents],
  'inputStickerSetEmpty': [0xffb62b95],
  'inputStickerSetID': [0x9de7a269, _inputStickerSetID],
  'inputStickerSetShortName': [0x861cc8a0, _inputStickerSetShortName],
  'stickerSet': [0xeeb46f27, _stickerSet],
  'messages.stickerSet': [0xb60a24a6, _messagesStickerSet],
  'user': [0x938458c1, _user],
  'botCommand': [0xc27ac8c7, _botCommand],
  'botInfo': [0x98e81d3a, _botInfo],
  'keyboardButton': [0xa2fa4880, _keyboardButton],
  'keyboardButtonRow': [0x77608b83, _keyboardButtonRow],
  'replyKeyboardHide': [0xa03e5b85, _replyKeyboardHide],
  'replyKeyboardForceReply': [0xf4108aa0, _replyKeyboardForceReply],
  'replyKeyboardMarkup': [0x3502758c, _replyKeyboardMarkup],
  'inputPeerUser': [0x7b8e7de6, _inputPeerUser],
  'inputUser': [0xd8292816, _inputUser],
  'messageEntityUnknown': [0xbb92ba95, _messageEntityUnknown],
  'messageEntityMention': [0xfa04579d, _messageEntityMention],
  'messageEntityHashtag': [0x6f635b0d, _messageEntityHashtag],
  'messageEntityBotCommand': [0x6cef8ac7, _messageEntityBotCommand],
  'messageEntityUrl': [0x6ed02538, _messageEntityUrl],
  'messageEntityEmail': [0x64e475c2, _messageEntityEmail],
  'messageEntityBold': [0xbd610bc9, _messageEntityBold],
  'messageEntityItalic': [0x826f8b60, _messageEntityItalic],
  'messageEntityCode': [0x28a20571, _messageEntityCode],
  'messageEntityPre': [0x73924be0, _messageEntityPre],
  'messageEntityTextUrl': [0x76a6d327, _messageEntityTextUrl],
  'updateShortSentMessage': [0x11f1331c, _updateShortSentMessage],
  'inputChannelEmpty': [0xee8c1e86],
  'inputChannel': [0xafeb712e, _inputChannel],
  'peerChannel': [0xbddde532, _peerChannel],
  'inputPeerChannel': [0x20adaef8, _inputPeerChannel],
  'channel': [0xd31a961e, _channel],
  'channelForbidden': [0x289da732, _channelForbidden],
  'contacts.resolvedPeer': [0x7f077ad9, _contactsResolvedPeer],
  'channelFull': [0x2d895c74, _channelFull],
  'messageRange': [0xae30253, _messageRange],
  'messages.channelMessages': [0x99262e37, _messagesChannelMessages],
  'messageActionChannelCreate': [0x95d2ac92, _messageActionChannelCreate],
  'updateChannelTooLong': [0xeb0467fb, _updateChannelTooLong],
  'updateChannel': [0xb6d45656, _updateChannel],
  'updateNewChannelMessage': [0x62ba04d9, _updateNewChannelMessage],
  'updateReadChannelInbox': [0x330b5424, _updateReadChannelInbox],
  'updateDeleteChannelMessages': [0xc37521c9, _updateDeleteChannelMessages],
  'updateChannelMessageViews': [0x98a12b4b, _updateChannelMessageViews],
  'updates.channelDifferenceEmpty': [0x3e11affb, _updatesChannelDifferenceEmpty],
  'updates.channelDifferenceTooLong': [0xa4bcc6fe, _updatesChannelDifferenceTooLong],
  'updates.channelDifference': [0x2064674e, _updatesChannelDifference],
  'channelMessagesFilterEmpty': [0x94d42ee7],
  'channelMessagesFilter': [0xcd77d957, _channelMessagesFilter],
  'channelParticipant': [0x15ebac1d, _channelParticipant],
  'channelParticipantSelf': [0xa3289a6d, _channelParticipantSelf],
  'channelParticipantCreator': [0x808d15a4, _channelParticipantCreator],
  'channelParticipantsRecent': [0xde3f3c79],
  'channelParticipantsAdmins': [0xb4608969],
  'channelParticipantsKicked': [0xa3b54985, _channelParticipantsKicked],
  'channels.channelParticipants': [0xf56ee2a8, _channelsChannelParticipants],
  'channels.channelParticipant': [0xd0d9b163, _channelsChannelParticipant],
  'chatParticipantCreator': [0xda13538a, _chatParticipantCreator],
  'chatParticipantAdmin': [0xe2d6e436, _chatParticipantAdmin],
  'updateChatParticipantAdmin': [0xb6901959, _updateChatParticipantAdmin],
  'messageActionChatMigrateTo': [0x51bdb021, _messageActionChatMigrateTo],
  'messageActionChannelMigrateFrom': [0xb055eaee, _messageActionChannelMigrateFrom],
  'channelParticipantsBots': [0xb0d1865b],
  'help.termsOfService': [0x780a0310, _helpTermsOfService],
  'updateNewStickerSet': [0x688a30aa, _updateNewStickerSet],
  'updateStickerSetsOrder': [0xbb2d201, _updateStickerSetsOrder],
  'updateStickerSets': [0x43ae3dec],
  'foundGif': [0x162ecc1f, _foundGif],
  'foundGifCached': [0x9c750409, _foundGifCached],
  'inputMediaGifExternal': [0x4843b0fd, _inputMediaGifExternal],
  'messages.foundGifs': [0x450a1c0a, _messagesFoundGifs],
  'messages.savedGifsNotModified': [0xe8025ca2],
  'messages.savedGifs': [0x2e0709a5, _messagesSavedGifs],
  'updateSavedGifs': [0x9375341e],
  'inputBotInlineMessageMediaAuto': [0x3380c786, _inputBotInlineMessageMediaAuto],
  'inputBotInlineMessageText': [0x3dcd7a87, _inputBotInlineMessageText],
  'inputBotInlineResult': [0x88bf9319, _inputBotInlineResult],
  'botInlineMessageMediaAuto': [0x764cf810, _botInlineMessageMediaAuto],
  'botInlineMessageText': [0x8c7f65e2, _botInlineMessageText],
  'botInlineResult': [0x11965f3a, _botInlineResult],
  'messages.botResults': [0x947ca848, _messagesBotResults],
  'updateBotInlineQuery': [0x54826690, _updateBotInlineQuery],
  'updateBotInlineSend': [0xe48f964, _updateBotInlineSend],
  'inputMessagesFilterVoice': [0x50f5c392],
  'inputMessagesFilterMusic': [0x3751b49e],
  'inputPrivacyKeyChatInvite': [0xbdfb0426],
  'privacyKeyChatInvite': [0x500e6dfa],
  'exportedMessageLink': [0x5dab1af4, _exportedMessageLink],
  'messageFwdHeader': [0xec338270, _messageFwdHeader],
  'updateEditChannelMessage': [0x1b3f4df7, _updateEditChannelMessage],
  'updateChannelPinnedMessage': [0x98592475, _updateChannelPinnedMessage],
  'messageActionPinMessage': [0x94bd38ed],
  'auth.codeTypeSms': [0x72a3158c],
  'auth.codeTypeCall': [0x741cd3e3],
  'auth.codeTypeFlashCall': [0x226ccefb],
  'auth.sentCodeTypeApp': [0x3dbb5986, _authSentCodeTypeApp],
  'auth.sentCodeTypeSms': [0xc000bba2, _authSentCodeTypeSms],
  'auth.sentCodeTypeCall': [0x5353e5a7, _authSentCodeTypeCall],
  'auth.sentCodeTypeFlashCall': [0xab03c6d9, _authSentCodeTypeFlashCall],
  'keyboardButtonUrl': [0x258aff05, _keyboardButtonUrl],
  'keyboardButtonCallback': [0x683a5e46, _keyboardButtonCallback],
  'keyboardButtonRequestPhone': [0xb16a6c29, _keyboardButtonRequestPhone],
  'keyboardButtonRequestGeoLocation': [0xfc796b3f, _keyboardButtonRequestGeoLocation],
  'keyboardButtonSwitchInline': [0x568a748, _keyboardButtonSwitchInline],
  'replyInlineMarkup': [0x48a30254, _replyInlineMarkup],
  'messages.botCallbackAnswer': [0x36585ea4, _messagesBotCallbackAnswer],
  'updateBotCallbackQuery': [0xe73547e1, _updateBotCallbackQuery],
  'messages.messageEditData': [0x26b5dde6, _messagesMessageEditData],
  'updateEditMessage': [0xe40370a3, _updateEditMessage],
  'inputBotInlineMessageMediaGeo': [0xc1b15d65, _inputBotInlineMessageMediaGeo],
  'inputBotInlineMessageMediaVenue': [0x417bbf11, _inputBotInlineMessageMediaVenue],
  'inputBotInlineMessageMediaContact': [0xa6edbffd, _inputBotInlineMessageMediaContact],
  'botInlineMessageMediaGeo': [0xb722de65, _botInlineMessageMediaGeo],
  'botInlineMessageMediaVenue': [0x8a86659c, _botInlineMessageMediaVenue],
  'botInlineMessageMediaContact': [0x18d1cdc2, _botInlineMessageMediaContact],
  'inputBotInlineResultPhoto': [0xa8d864a7, _inputBotInlineResultPhoto],
  'inputBotInlineResultDocument': [0xfff8fdc4, _inputBotInlineResultDocument],
  'botInlineMediaResult': [0x17db940b, _botInlineMediaResult],
  'inputBotInlineMessageID': [0x890c3d89, _inputBotInlineMessageID],
  'updateInlineBotCallbackQuery': [0xf9d27a5a, _updateInlineBotCallbackQuery],
  'inlineBotSwitchPM': [0x3c20629f, _inlineBotSwitchPM],
  'messages.peerDialogs': [0x3371c354, _messagesPeerDialogs],
  'topPeer': [0xedcdc05b, _topPeer],
  'topPeerCategoryBotsPM': [0xab661b5b],
  'topPeerCategoryBotsInline': [0x148677e2],
  'topPeerCategoryCorrespondents': [0x637b7ed],
  'topPeerCategoryGroups': [0xbd17a14a],
  'topPeerCategoryChannels': [0x161d9628],
  'topPeerCategoryPeers': [0xfb834291, _topPeerCategoryPeers],
  'contacts.topPeersNotModified': [0xde266ef5],
  'contacts.topPeers': [0x70b772a8, _contactsTopPeers],
  'messageEntityMentionName': [0x352dca58, _messageEntityMentionName],
  'inputMessageEntityMentionName': [0x208e68c9, _inputMessageEntityMentionName],
  'inputMessagesFilterChatPhotos': [0x3a20ecb8],
  'updateReadChannelOutbox': [0x25d6c9c7, _updateReadChannelOutbox],
  'updateDraftMessage': [0xee2bb969, _updateDraftMessage],
  'draftMessageEmpty': [0x1b0c841a, _draftMessageEmpty],
  'draftMessage': [0xfd8e711f, _draftMessage],
  'messageActionHistoryClear': [0x9fbab604],
  'messages.featuredStickersNotModified': [0x4ede3cf],
  'messages.featuredStickers': [0xf89d88e5, _messagesFeaturedStickers],
  'updateReadFeaturedStickers': [0x571d2742],
  'messages.recentStickersNotModified': [0xb17f890],
  'messages.recentStickers': [0x22f3afb3, _messagesRecentStickers],
  'updateRecentStickers': [0x9a422c20],
  'messages.archivedStickers': [0x4fcba9c8, _messagesArchivedStickers],
  'messages.stickerSetInstallResultSuccess': [0x38641628],
  'messages.stickerSetInstallResultArchive': [0x35e410a8, _messagesStickerSetInstallResultArchive],
  'stickerSetCovered': [0x6410a5d2, _stickerSetCovered],
  'updateConfig': [0xa229dd06],
  'updatePtsChanged': [0x3354678f],
  'inputMediaPhotoExternal': [0xe5bbfe1a, _inputMediaPhotoExternal],
  'inputMediaDocumentExternal': [0xfb52dc99, _inputMediaDocumentExternal],
  'stickerSetMultiCovered': [0x3407e51b, _stickerSetMultiCovered],
  'maskCoords': [0xaed6dbb2, _maskCoords],
  'documentAttributeHasStickers': [0x9801d2f7],
  'inputStickeredMediaPhoto': [0x4a992157, _inputStickeredMediaPhoto],
  'inputStickeredMediaDocument': [0x438865b, _inputStickeredMediaDocument],
  'game': [0xbdf9653b, _game],
  'inputBotInlineResultGame': [0x4fa417f2, _inputBotInlineResultGame],
  'inputBotInlineMessageGame': [0x4b425864, _inputBotInlineMessageGame],
  'messageMediaGame': [0xfdb19008, _messageMediaGame],
  'inputMediaGame': [0xd33f43f3, _inputMediaGame],
  'inputGameID': [0x32c3e77, _inputGameID],
  'inputGameShortName': [0xc331e80a, _inputGameShortName],
  'keyboardButtonGame': [0x50f41ccf, _keyboardButtonGame],
  'messageActionGameScore': [0x92a72876, _messageActionGameScore],
  'highScore': [0x58fffcd0, _highScore],
  'messages.highScores': [0x9a3bfd99, _messagesHighScores],
  'updates.differenceTooLong': [0x4afe8f6d, _updatesDifferenceTooLong],
  'updateChannelWebPage': [0x40771900, _updateChannelWebPage],
  'messages.chatsSlice': [0x9cd81144, _messagesChatsSlice],
  'textEmpty': [0xdc3d824f],
  'textPlain': [0x744694e0, _textPlain],
  'textBold': [0x6724abc4, _textBold],
  'textItalic': [0xd912a59c, _textItalic],
  'textUnderline': [0xc12622c4, _textUnderline],
  'textStrike': [0x9bf8bb95, _textStrike],
  'textFixed': [0x6c3f19b9, _textFixed],
  'textUrl': [0x3c2884c1, _textUrl],
  'textEmail': [0xde5a0dd6, _textEmail],
  'textConcat': [0x7e6260d7, _textConcat],
  'pageBlockUnsupported': [0x13567e8a],
  'pageBlockTitle': [0x70abc3fd, _pageBlockTitle],
  'pageBlockSubtitle': [0x8ffa9a1f, _pageBlockSubtitle],
  'pageBlockAuthorDate': [0xbaafe5e0, _pageBlockAuthorDate],
  'pageBlockHeader': [0xbfd064ec, _pageBlockHeader],
  'pageBlockSubheader': [0xf12bb6e1, _pageBlockSubheader],
  'pageBlockParagraph': [0x467a0766, _pageBlockParagraph],
  'pageBlockPreformatted': [0xc070d93e, _pageBlockPreformatted],
  'pageBlockFooter': [0x48870999, _pageBlockFooter],
  'pageBlockDivider': [0xdb20b188],
  'pageBlockAnchor': [0xce0d37b0, _pageBlockAnchor],
  'pageBlockList': [0xe4e88011, _pageBlockList],
  'pageBlockBlockquote': [0x263d7c26, _pageBlockBlockquote],
  'pageBlockPullquote': [0x4f4456d3, _pageBlockPullquote],
  'pageBlockPhoto': [0x1759c560, _pageBlockPhoto],
  'pageBlockVideo': [0x7c8fe7b6, _pageBlockVideo],
  'pageBlockCover': [0x39f23300, _pageBlockCover],
  'pageBlockEmbed': [0xa8718dc5, _pageBlockEmbed],
  'pageBlockEmbedPost': [0xf259a80b, _pageBlockEmbedPost],
  'pageBlockCollage': [0x65a0fa4d, _pageBlockCollage],
  'pageBlockSlideshow': [0x31f9590, _pageBlockSlideshow],
  'webPageNotModified': [0x85849473],
  'inputPrivacyKeyPhoneCall': [0xfabadc5f],
  'privacyKeyPhoneCall': [0x3d662b7b],
  'sendMessageGamePlayAction': [0xdd6a8f48],
  'phoneCallDiscardReasonMissed': [0x85e42301],
  'phoneCallDiscardReasonDisconnect': [0xe095c1a0],
  'phoneCallDiscardReasonHangup': [0x57adc690],
  'phoneCallDiscardReasonBusy': [0xfaf7e8c9],
  'updateDialogPinned': [0x6e6fe51c, _updateDialogPinned],
  'updatePinnedDialogs': [0xfa0f3ca2, _updatePinnedDialogs],
  'dataJSON': [0x7d748d04, _dataJSON],
  'updateBotWebhookJSON': [0x8317c0c3, _updateBotWebhookJSON],
  'updateBotWebhookJSONQuery': [0x9b9240a6, _updateBotWebhookJSONQuery],
  'labeledPrice': [0xcb296bf8, _labeledPrice],
  'invoice': [0xc30aa358, _invoice],
  'inputMediaInvoice': [0xf4e096c3, _inputMediaInvoice],
  'paymentCharge': [0xea02c27e, _paymentCharge],
  'messageActionPaymentSentMe': [0x8f31b327, _messageActionPaymentSentMe],
  'messageMediaInvoice': [0x84551347, _messageMediaInvoice],
  'postAddress': [0x1e8caaeb, _postAddress],
  'paymentRequestedInfo': [0x909c3f94, _paymentRequestedInfo],
  'keyboardButtonBuy': [0xafd93fbb, _keyboardButtonBuy],
  'messageActionPaymentSent': [0x40699cd0, _messageActionPaymentSent],
  'paymentSavedCredentialsCard': [0xcdc27a1f, _paymentSavedCredentialsCard],
  'webDocument': [0x1c570ed1, _webDocument],
  'inputWebDocument': [0x9bed434d, _inputWebDocument],
  'inputWebFileLocation': [0xc239d686, _inputWebFileLocation],
  'upload.webFile': [0x21e753bc, _uploadWebFile],
  'payments.paymentForm': [0x3f56aea3, _paymentsPaymentForm],
  'payments.validatedRequestedInfo': [0xd1451883, _paymentsValidatedRequestedInfo],
  'payments.paymentResult': [0x4e5f810d, _paymentsPaymentResult],
  'payments.paymentReceipt': [0x500911e1, _paymentsPaymentReceipt],
  'payments.savedInfo': [0xfb8fe43c, _paymentsSavedInfo],
  'inputPaymentCredentialsSaved': [0xc10eb2cf, _inputPaymentCredentialsSaved],
  'inputPaymentCredentials': [0x3417d728, _inputPaymentCredentials],
  'account.tmpPassword': [0xdb64fd34, _accountTmpPassword],
  'shippingOption': [0xb6213cdf, _shippingOption],
  'updateBotShippingQuery': [0xe0cdc940, _updateBotShippingQuery],
  'updateBotPrecheckoutQuery': [0x5d2f3aa9, _updateBotPrecheckoutQuery],
  'inputStickerSetItem': [0xffa0a496, _inputStickerSetItem],
  'updatePhoneCall': [0xab0f6b1e, _updatePhoneCall],
  'inputPhoneCall': [0x1e36fded, _inputPhoneCall],
  'phoneCallEmpty': [0x5366c915, _phoneCallEmpty],
  'phoneCallWaiting': [0x1b8f4ad1, _phoneCallWaiting],
  'phoneCallRequested': [0x87eabb53, _phoneCallRequested],
  'phoneCallAccepted': [0x997c454a, _phoneCallAccepted],
  'phoneCall': [0x8742ae7f, _phoneCall],
  'phoneCallDiscarded': [0x50ca4de1, _phoneCallDiscarded],
  'phoneConnection': [0x9d4c17c0, _phoneConnection],
  'phoneCallProtocol': [0xa2bb35cb, _phoneCallProtocol],
  'phone.phoneCall': [0xec82e140, _phonePhoneCall],
  'inputMessagesFilterPhoneCalls': [0x80c99768, _inputMessagesFilterPhoneCalls],
  'messageActionPhoneCall': [0x80e11a7f, _messageActionPhoneCall],
  'inputMessagesFilterRoundVoice': [0x7a7c17a4],
  'inputMessagesFilterRoundVideo': [0xb549da53],
  'sendMessageRecordRoundAction': [0x88f27fbc],
  'sendMessageUploadRoundAction': [0x243e1c66, _sendMessageUploadRoundAction],
  'upload.fileCdnRedirect': [0xf18cda44, _uploadFileCdnRedirect],
  'upload.cdnFileReuploadNeeded': [0xeea8e46e, _uploadCdnFileReuploadNeeded],
  'upload.cdnFile': [0xa99fca4f, _uploadCdnFile],
  'cdnPublicKey': [0xc982eaba, _cdnPublicKey],
  'cdnConfig': [0x5725e40a, _cdnConfig],
  'pageBlockChannel': [0xef1751b5, _pageBlockChannel],
  'langPackString': [0xcad181f6, _langPackString],
  'langPackStringPluralized': [0x6c47ac9f, _langPackStringPluralized],
  'langPackStringDeleted': [0x2979eeb2, _langPackStringDeleted],
  'langPackDifference': [0xf385c1f6, _langPackDifference],
  'langPackLanguage': [0xeeca5ce3, _langPackLanguage],
  'updateLangPackTooLong': [0x46560264, _updateLangPackTooLong],
  'updateLangPack': [0x56022f4d, _updateLangPack],
  'channelParticipantAdmin': [0xccbebbaf, _channelParticipantAdmin],
  'channelParticipantBanned': [0x1c0facaf, _channelParticipantBanned],
  'channelParticipantsBanned': [0x1427a5e1, _channelParticipantsBanned],
  'channelParticipantsSearch': [0x656ac4b, _channelParticipantsSearch],
  'channelAdminLogEventActionChangeTitle': [0xe6dfb825, _channelAdminLogEventActionChangeTitle],
  'channelAdminLogEventActionChangeAbout': [0x55188a2e, _channelAdminLogEventActionChangeAbout],
  'channelAdminLogEventActionChangeUsername': [0x6a4afc38, _channelAdminLogEventActionChangeUsername],
  'channelAdminLogEventActionChangePhoto': [0x434bd2af, _channelAdminLogEventActionChangePhoto],
  'channelAdminLogEventActionToggleInvites': [0x1b7907ae, _channelAdminLogEventActionToggleInvites],
  'channelAdminLogEventActionToggleSignatures': [0x26ae0971, _channelAdminLogEventActionToggleSignatures],
  'channelAdminLogEventActionUpdatePinned': [0xe9e82c18, _channelAdminLogEventActionUpdatePinned],
  'channelAdminLogEventActionEditMessage': [0x709b2405, _channelAdminLogEventActionEditMessage],
  'channelAdminLogEventActionDeleteMessage': [0x42e047bb, _channelAdminLogEventActionDeleteMessage],
  'channelAdminLogEventActionParticipantJoin': [0x183040d3],
  'channelAdminLogEventActionParticipantLeave': [0xf89777f2],
  'channelAdminLogEventActionParticipantInvite': [0xe31c34d8, _channelAdminLogEventActionParticipantInvite],
  'channelAdminLogEventActionParticipantToggleBan': [0xe6d83d7e, _channelAdminLogEventActionParticipantToggleBan],
  'channelAdminLogEventActionParticipantToggleAdmin': [0xd5676710, _channelAdminLogEventActionParticipantToggleAdmin],
  'channelAdminLogEvent': [0x3b5a3e40, _channelAdminLogEvent],
  'channels.adminLogResults': [0xed8af74d, _channelsAdminLogResults],
  'channelAdminLogEventsFilter': [0xea107ae4, _channelAdminLogEventsFilter],
  'topPeerCategoryPhoneCalls': [0x1e76a78c],
  'pageBlockAudio': [0x804361ea, _pageBlockAudio],
  'popularContact': [0x5ce14175, _popularContact],
  'messageActionScreenshotTaken': [0x4792929b],
  'messages.favedStickersNotModified': [0x9e8fa6d3],
  'messages.favedStickers': [0xf37f2f16, _messagesFavedStickers],
  'updateFavedStickers': [0xe511996d],
  'updateChannelReadMessagesContents': [0x89893b45, _updateChannelReadMessagesContents],
  'inputMessagesFilterMyMentions': [0xc1f8e69a],
  'updateContactsReset': [0x7084a7be],
  'channelAdminLogEventActionChangeStickerSet': [0xb1c3caa7, _channelAdminLogEventActionChangeStickerSet],
  'messageActionCustomAction': [0xfae69f56, _messageActionCustomAction],
  'inputPaymentCredentialsApplePay': [0xaa1c39f, _inputPaymentCredentialsApplePay],
  'inputPaymentCredentialsAndroidPay': [0xca05d50e, _inputPaymentCredentialsAndroidPay],
  'inputMessagesFilterGeo': [0xe7026d0d],
  'inputMessagesFilterContacts': [0xe062db83],
  'updateChannelAvailableMessages': [0x70db6837, _updateChannelAvailableMessages],
  'channelAdminLogEventActionTogglePreHistoryHidden': [0x5f5c95f1, _channelAdminLogEventActionTogglePreHistoryHidden],
  'inputMediaGeoLive': [0xce4e82fd, _inputMediaGeoLive],
  'messageMediaGeoLive': [0x7c3c2609, _messageMediaGeoLive],
  'recentMeUrlUnknown': [0x46e1d13d, _recentMeUrlUnknown],
  'recentMeUrlUser': [0x8dbc3336, _recentMeUrlUser],
  'recentMeUrlChat': [0xa01b22f9, _recentMeUrlChat],
  'recentMeUrlChatInvite': [0xeb49081d, _recentMeUrlChatInvite],
  'recentMeUrlStickerSet': [0xbc0a57dc, _recentMeUrlStickerSet],
  'help.recentMeUrls': [0xe0310d7, _helpRecentMeUrls],
  'channels.channelParticipantsNotModified': [0xf0173fe9],
  'messages.messagesNotModified': [0x74535f21, _messagesMessagesNotModified],
  'inputSingleMedia': [0x1cc6e91f, _inputSingleMedia],
  'webAuthorization': [0xcac943f2, _webAuthorization],
  'account.webAuthorizations': [0xed56c9fc, _accountWebAuthorizations],
  'inputMessageID': [0xa676a322, _inputMessageID],
  'inputMessageReplyTo': [0xbad88395, _inputMessageReplyTo],
  'inputMessagePinned': [0x86872538],
  'messageEntityPhone': [0x9b69e34b, _messageEntityPhone],
  'messageEntityCashtag': [0x4c4e743f, _messageEntityCashtag],
  'messageActionBotAllowed': [0xabe9affe, _messageActionBotAllowed],
  'inputDialogPeer': [0xfcaafeb7, _inputDialogPeer],
  'dialogPeer': [0xe56dbf05, _dialogPeer],
  'messages.foundStickerSetsNotModified': [0xd54b65d],
  'messages.foundStickerSets': [0x5108d648, _messagesFoundStickerSets],
  'fileHash': [0x6242c773, _fileHash],
  'webDocumentNoProxy': [0xf9c8bcc6, _webDocumentNoProxy],
  'inputClientProxy': [0x75588b3f, _inputClientProxy],
  'help.proxyDataEmpty': [0xe09e1fb8, _helpProxyDataEmpty],
  'help.proxyDataPromo': [0x2bf7ee23, _helpProxyDataPromo],
  'help.termsOfServiceUpdateEmpty': [0xe3309f7f, _helpTermsOfServiceUpdateEmpty],
  'help.termsOfServiceUpdate': [0x28ecf961, _helpTermsOfServiceUpdate],
  'inputSecureFileUploaded': [0x3334b0f0, _inputSecureFileUploaded],
  'inputSecureFile': [0x5367e5be, _inputSecureFile],
  'inputSecureFileLocation': [0xcbc7ee28, _inputSecureFileLocation],
  'secureFileEmpty': [0x64199744],
  'secureFile': [0xe0277a62, _secureFile],
  'secureData': [0x8aeabec3, _secureData],
  'securePlainPhone': [0x7d6099dd, _securePlainPhone],
  'securePlainEmail': [0x21ec5a5f, _securePlainEmail],
  'secureValueTypePersonalDetails': [0x9d2a81e3],
  'secureValueTypePassport': [0x3dac6a00],
  'secureValueTypeDriverLicense': [0x6e425c4],
  'secureValueTypeIdentityCard': [0xa0d0744b],
  'secureValueTypeInternalPassport': [0x99a48f23],
  'secureValueTypeAddress': [0xcbe31e26],
  'secureValueTypeUtilityBill': [0xfc36954e],
  'secureValueTypeBankStatement': [0x89137c0d],
  'secureValueTypeRentalAgreement': [0x8b883488],
  'secureValueTypePassportRegistration': [0x99e3806a],
  'secureValueTypeTemporaryRegistration': [0xea02ec33],
  'secureValueTypePhone': [0xb320aadb],
  'secureValueTypeEmail': [0x8e3ca7ee],
  'secureValue': [0x187fa0ca, _secureValue],
  'inputSecureValue': [0xdb21d0a7, _inputSecureValue],
  'secureValueHash': [0xed1ecdb0, _secureValueHash],
  'secureValueErrorData': [0xe8a40bd9, _secureValueErrorData],
  'secureValueErrorFrontSide': [0xbe3dfa, _secureValueErrorFrontSide],
  'secureValueErrorReverseSide': [0x868a2aa5, _secureValueErrorReverseSide],
  'secureValueErrorSelfie': [0xe537ced6, _secureValueErrorSelfie],
  'secureValueErrorFile': [0x7a700873, _secureValueErrorFile],
  'secureValueErrorFiles': [0x666220e9, _secureValueErrorFiles],
  'secureCredentialsEncrypted': [0x33f0ea47, _secureCredentialsEncrypted],
  'account.authorizationForm': [0xad2e1cd8, _accountAuthorizationForm],
  'account.sentEmailCode': [0x811f854f, _accountSentEmailCode],
  'messageActionSecureValuesSentMe': [0x1b287353, _messageActionSecureValuesSentMe],
  'messageActionSecureValuesSent': [0xd95c6154, _messageActionSecureValuesSent],
  'help.deepLinkInfoEmpty': [0x66afa166],
  'help.deepLinkInfo': [0x6a4ee832, _helpDeepLinkInfo],
  'savedPhoneContact': [0x1142bd56, _savedPhoneContact],
  'account.takeout': [0x4dba4501, _accountTakeout],
  'inputTakeoutFileLocation': [0x29be5899],
  'updateDialogUnreadMark': [0xe16459c3, _updateDialogUnreadMark],
  'messages.dialogsNotModified': [0xf0e3e596, _messagesDialogsNotModified],
  'inputWebFileGeoPointLocation': [0x9f2221c9, _inputWebFileGeoPointLocation],
  'contacts.topPeersDisabled': [0xb52c939d],
  'inputReportReasonCopyright': [0x9b89f93a],
  'passwordKdfAlgoUnknown': [0xd45ab096],
  'securePasswordKdfAlgoUnknown': [0x4a8537],
  'securePasswordKdfAlgoPBKDF2HMACSHA512iter100000': [0xbbf2dda0, _securePasswordKdfAlgoPBKDF2HMACSHA512iter100000],
  'securePasswordKdfAlgoSHA512': [0x86471d92, _securePasswordKdfAlgoSHA512],
  'secureSecretSettings': [0x1527bcac, _secureSecretSettings],
  'passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow': [0x3a912d4a, _passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow],
  'inputCheckPasswordEmpty': [0x9880f658],
  'inputCheckPasswordSRP': [0xd27ff082, _inputCheckPasswordSRP],
  'secureValueError': [0x869d758f, _secureValueError],
  'secureValueErrorTranslationFile': [0xa1144770, _secureValueErrorTranslationFile],
  'secureValueErrorTranslationFiles': [0x34636dd8, _secureValueErrorTranslationFiles],
  'secureRequiredType': [0x829d99da, _secureRequiredType],
  'secureRequiredTypeOneOf': [0x27477b4, _secureRequiredTypeOneOf],
  'help.passportConfigNotModified': [0xbfb9f457],
  'help.passportConfig': [0xa098d6af, _helpPassportConfig],
  'inputAppEvent': [0x1d1b1245, _inputAppEvent],
  'jsonObjectValue': [0xc0de1bd9, _jsonObjectValue],
  'jsonNull': [0x3f6d7b68],
  'jsonBool': [0xc7345e6a, _jsonBool],
  'jsonNumber': [0x2be0dfa4, _jsonNumber],
  'jsonString': [0xb71e767a, _jsonString],
  'jsonArray': [0xf7444763, _jsonArray],
  'jsonObject': [0x99c1d49d, _jsonObject],
  'updateUserPinnedMessage': [0x4c43da18, _updateUserPinnedMessage],
  'updateChatPinnedMessage': [0xe10db349, _updateChatPinnedMessage],
  'inputNotifyBroadcasts': [0xb1db7c7e],
  'notifyBroadcasts': [0xd612e8ef],
  'textSubscript': [0xed6a8504, _textSubscript],
  'textSuperscript': [0xc7fb5e01, _textSuperscript],
  'textMarked': [0x34b8621, _textMarked],
  'textPhone': [0x1ccb966a, _textPhone],
  'textImage': [0x81ccf4f, _textImage],
  'pageBlockKicker': [0x1e148390, _pageBlockKicker],
  'pageTableCell': [0x34566b6a, _pageTableCell],
  'pageTableRow': [0xe0c0c5e5, _pageTableRow],
  'pageBlockTable': [0xbf4dea82, _pageBlockTable],
  'pageCaption': [0x6f747657, _pageCaption],
  'pageListItemText': [0xb92fb6cd, _pageListItemText],
  'pageListItemBlocks': [0x25e073fc, _pageListItemBlocks],
  'pageListOrderedItemText': [0x5e068047, _pageListOrderedItemText],
  'pageListOrderedItemBlocks': [0x98dd8936, _pageListOrderedItemBlocks],
  'pageBlockOrderedList': [0x9a8ae1e1, _pageBlockOrderedList],
  'pageBlockDetails': [0x76768bed, _pageBlockDetails],
  'pageRelatedArticle': [0xb390dc08, _pageRelatedArticle],
  'pageBlockRelatedArticles': [0x16115a96, _pageBlockRelatedArticles],
  'pageBlockMap': [0xa44f3ef6, _pageBlockMap],
  'page': [0xae891bec, _page],
  'inputPrivacyKeyPhoneP2P': [0xdb9e70d2],
  'privacyKeyPhoneP2P': [0x39491cc8],
  'textAnchor': [0x35553762, _textAnchor],
  'help.supportName': [0x8c05f1c9, _helpSupportName],
  'help.userInfoEmpty': [0xf3ae2eed],
  'help.userInfo': [0x1eb3758, _helpUserInfo],
  'messageActionContactSignUp': [0xf3f25f76],
  'updateMessagePoll': [0xaca1657b, _updateMessagePoll],
  'pollAnswer': [0x6ca9c2e9, _pollAnswer],
  'poll': [0xd5529d06, _poll],
  'pollAnswerVoters': [0x3b6ddad2, _pollAnswerVoters],
  'pollResults': [0x5755785a, _pollResults],
  'inputMediaPoll': [0x6b3765b, _inputMediaPoll],
  'messageMediaPoll': [0x4bd6e798, _messageMediaPoll],
  'chatOnlines': [0xf041e250, _chatOnlines],
  'statsURL': [0x47a971e0, _statsURL],
  'photoStrippedSize': [0xe0b0bc2e, _photoStrippedSize],
  'chatAdminRights': [0x5fb224d5, _chatAdminRights],
  'chatBannedRights': [0x9f120418, _chatBannedRights],
  'updateChatDefaultBannedRights': [0x54c01850, _updateChatDefaultBannedRights],
  'inputWallPaper': [0xe630b979, _inputWallPaper],
  'inputWallPaperSlug': [0x72091c80, _inputWallPaperSlug],
  'channelParticipantsContacts': [0xbb6ae88d, _channelParticipantsContacts],
  'channelAdminLogEventActionDefaultBannedRights': [0x2df5fc0a, _channelAdminLogEventActionDefaultBannedRights],
  'channelAdminLogEventActionStopPoll': [0x8f079643, _channelAdminLogEventActionStopPoll],
  'account.wallPapersNotModified': [0x1c199183],
  'account.wallPapers': [0x702b65a9, _accountWallPapers],
  'codeSettings': [0xdebebe83, _codeSettings],
  'wallPaperSettings': [0x5086cf8, _wallPaperSettings],
  'autoDownloadSettings': [0xe04232f3, _autoDownloadSettings],
  'account.autoDownloadSettings': [0x63cacf26, _accountAutoDownloadSettings],
  'emojiKeyword': [0xd5b3b9f9, _emojiKeyword],
  'emojiKeywordDeleted': [0x236df622, _emojiKeywordDeleted],
  'emojiKeywordsDifference': [0x5cc761bd, _emojiKeywordsDifference],
  'emojiURL': [0xa575739d, _emojiURL],
  'emojiLanguage': [0xb3fb5361, _emojiLanguage],
  'inputPrivacyKeyForwards': [0xa4dd4c08],
  'privacyKeyForwards': [0x69ec56a3],
  'inputPrivacyKeyProfilePhoto': [0x5719bacc],
  'privacyKeyProfilePhoto': [0x96151fed],
  'fileLocationToBeDeprecated': [0xbc7fc6cd, _fileLocationToBeDeprecated],
  'inputPhotoFileLocation': [0x40181ffe, _inputPhotoFileLocation],
  'inputPhotoLegacyFileLocation': [0xd83466f3, _inputPhotoLegacyFileLocation],
  'inputPeerPhotoFileLocation': [0x27d69997, _inputPeerPhotoFileLocation],
  'inputStickerSetThumb': [0xdbaeae9, _inputStickerSetThumb],
  'folder': [0xff544e65, _folder],
  'dialogFolder': [0x71bd134c, _dialogFolder],
  'inputDialogPeerFolder': [0x64600527, _inputDialogPeerFolder],
  'dialogPeerFolder': [0x514519e2, _dialogPeerFolder],
  'inputFolderPeer': [0xfbd2c296, _inputFolderPeer],
  'folderPeer': [0xe9baa668, _folderPeer],
  'updateFolderPeers': [0x19360dc0, _updateFolderPeers],
  'inputUserFromMessage': [0x2d117597, _inputUserFromMessage],
  'inputChannelFromMessage': [0x2a286531, _inputChannelFromMessage],
  'inputPeerUserFromMessage': [0x17bae2e6, _inputPeerUserFromMessage],
  'inputPeerChannelFromMessage': [0x9c95f7bb, _inputPeerChannelFromMessage],
  'inputPrivacyKeyPhoneNumber': [0x352dafa],
  'privacyKeyPhoneNumber': [0xd19ae46d],
  'topPeerCategoryForwardUsers': [0xa8406ca9],
  'topPeerCategoryForwardChats': [0xfbeec0f0],
  'channelAdminLogEventActionChangeLinkedChat': [0xa26f881b, _channelAdminLogEventActionChangeLinkedChat],
  'messages.searchCounter': [0xe844ebff, _messagesSearchCounter],
  'keyboardButtonUrlAuth': [0x10b78d29, _keyboardButtonUrlAuth],
  'inputKeyboardButtonUrlAuth': [0xd02e7fd4, _inputKeyboardButtonUrlAuth],
  'urlAuthResultRequest': [0x92d33a0e, _urlAuthResultRequest],
  'urlAuthResultAccepted': [0x8f8c0e4e, _urlAuthResultAccepted],
  'urlAuthResultDefault': [0xa9d6db1f],
  'inputPrivacyValueAllowChatParticipants': [0x4c81c1ba, _inputPrivacyValueAllowChatParticipants],
  'inputPrivacyValueDisallowChatParticipants': [0xd82363af, _inputPrivacyValueDisallowChatParticipants],
  'privacyValueAllowChatParticipants': [0x18be796b, _privacyValueAllowChatParticipants],
  'privacyValueDisallowChatParticipants': [0xacae0690, _privacyValueDisallowChatParticipants],
  'messageEntityUnderline': [0x9c4e7e8b, _messageEntityUnderline],
  'messageEntityStrike': [0xbf0693d4, _messageEntityStrike],
  'messageEntityBlockquote': [0x20df5d0, _messageEntityBlockquote],
  'updatePeerSettings': [0x6a7e7366, _updatePeerSettings],
  'channelLocationEmpty': [0xbfb5ad8b],
  'channelLocation': [0x209b82db, _channelLocation],
  'peerLocated': [0xca461b5d, _peerLocated],
  'updatePeerLocated': [0xb4afcfb0, _updatePeerLocated],
  'channelAdminLogEventActionChangeLocation': [0xe6b76ae, _channelAdminLogEventActionChangeLocation],
  'inputReportReasonGeoIrrelevant': [0xdbd4feed],
  'channelAdminLogEventActionToggleSlowMode': [0x53909779, _channelAdminLogEventActionToggleSlowMode],
  'auth.authorizationSignUpRequired': [0x44747e9a, _authAuthorizationSignUpRequired],
  'payments.paymentVerificationNeeded': [0xd8411139, _paymentsPaymentVerificationNeeded],
  'inputStickerSetAnimatedEmoji': [0x28703c8],
  'updateNewScheduledMessage': [0x39a51dfb, _updateNewScheduledMessage],
  'updateDeleteScheduledMessages': [0x90866cee, _updateDeleteScheduledMessages],
  'restrictionReason': [0xd072acb4, _restrictionReason],
  'inputTheme': [0x3c5693e9, _inputTheme],
  'inputThemeSlug': [0xf5890df1, _inputThemeSlug],
  'theme': [0x28f1114, _theme],
  'account.themesNotModified': [0xf41eb622],
  'account.themes': [0x7f676421, _accountThemes],
  'updateTheme': [0x8216fba3, _updateTheme],
  'inputPrivacyKeyAddedByPhone': [0xd1219bdd],
  'privacyKeyAddedByPhone': [0x42ffd42b],
  'updateGeoLiveViewed': [0x871fb939, _updateGeoLiveViewed],
  'updateLoginToken': [0x564fe691],
  'auth.loginToken': [0x629f1980, _authLoginToken],
  'auth.loginTokenMigrateTo': [0x68e9916, _authLoginTokenMigrateTo],
  'auth.loginTokenSuccess': [0x390d5c5e, _authLoginTokenSuccess],
  'account.contentSettings': [0x57e28221, _accountContentSettings],
  'messages.inactiveChats': [0xa927fec5, _messagesInactiveChats],
  'baseThemeClassic': [0xc3a12462],
  'baseThemeDay': [0xfbd81688],
  'baseThemeNight': [0xb7b31ea8],
  'baseThemeTinted': [0x6d5f77ee],
  'baseThemeArctic': [0x5b11125a],
  'inputWallPaperNoFile': [0x8427bbac],
  'wallPaperNoFile': [0x8af40b25, _wallPaperNoFile],
  'inputThemeSettings': [0xbd507cd1, _inputThemeSettings],
  'themeSettings': [0x9c14984a, _themeSettings],
  'webPageAttributeTheme': [0x54b56617, _webPageAttributeTheme],
  'invokeAfterMsg': [0xcb9f372d, _invokeAfterMsg],
  'invokeAfterMsgs': [0x3dc4b4f0, _invokeAfterMsgs],
  'auth.sendCode': [0xa677244f, _authSendCode],
  'auth.signUp': [0x80eee427, _authSignUp],
  'auth.signIn': [0xbcd51581, _authSignIn],
  'auth.logOut': [0x5717da40],
  'auth.resetAuthorizations': [0x9fab0d1a],
  'auth.exportAuthorization': [0xe5bfffcd, _authExportAuthorization],
  'auth.importAuthorization': [0xe3ef9613, _authImportAuthorization],
  'auth.bindTempAuthKey': [0xcdd42a05, _authBindTempAuthKey],
  'account.registerDevice': [0x68976c6f, _accountRegisterDevice],
  'account.unregisterDevice': [0x3076c4bf, _accountUnregisterDevice],
  'account.updateNotifySettings': [0x84be5b93, _accountUpdateNotifySettings],
  'account.getNotifySettings': [0x12b3ad31, _accountGetNotifySettings],
  'account.resetNotifySettings': [0xdb7e1747],
  'account.updateProfile': [0x78515775, _accountUpdateProfile],
  'account.updateStatus': [0x6628562c, _accountUpdateStatus],
  'account.getWallPapers': [0xaabb1763, _accountGetWallPapers],
  'account.reportPeer': [0xae189d5f, _accountReportPeer],
  'users.getUsers': [0xd91a548, _usersGetUsers],
  'users.getFullUser': [0xca30a5b1, _usersGetFullUser],
  'contacts.getContactIDs': [0x2caa4a42, _contactsGetContactIDs],
  'contacts.getStatuses': [0xc4a353ee],
  'contacts.getContacts': [0xc023849f, _contactsGetContacts],
  'contacts.importContacts': [0x2c800be5, _contactsImportContacts],
  'contacts.deleteContacts': [0x96a0e00, _contactsDeleteContacts],
  'contacts.deleteByPhones': [0x1013fd9e, _contactsDeleteByPhones],
  'contacts.block': [0x332b49fc, _contactsBlock],
  'contacts.unblock': [0xe54100bd, _contactsUnblock],
  'contacts.getBlocked': [0xf57c350f, _contactsGetBlocked],
  'messages.getMessages': [0x63c66506, _messagesGetMessages],
  'messages.getDialogs': [0xa0ee3b73, _messagesGetDialogs],
  'messages.getHistory': [0xdcbb8260, _messagesGetHistory],
  'messages.search': [0x8614ef68, _messagesSearch],
  'messages.readHistory': [0xe306d3a, _messagesReadHistory],
  'messages.deleteHistory': [0x1c015b09, _messagesDeleteHistory],
  'messages.deleteMessages': [0xe58e95d2, _messagesDeleteMessages],
  'messages.receivedMessages': [0x5a954c0, _messagesReceivedMessages],
  'messages.setTyping': [0xa3825e50, _messagesSetTyping],
  'messages.sendMessage': [0x520c3870, _messagesSendMessage],
  'messages.sendMedia': [0x3491eba9, _messagesSendMedia],
  'messages.forwardMessages': [0xd9fee60e, _messagesForwardMessages],
  'messages.reportSpam': [0xcf1592db, _messagesReportSpam],
  'messages.getPeerSettings': [0x3672e09c, _messagesGetPeerSettings],
  'messages.report': [0xbd82b658, _messagesReport],
  'messages.getChats': [0x3c6aa187, _messagesGetChats],
  'messages.getFullChat': [0x3b831c66, _messagesGetFullChat],
  'messages.editChatTitle': [0xdc452855, _messagesEditChatTitle],
  'messages.editChatPhoto': [0xca4c79d8, _messagesEditChatPhoto],
  'messages.addChatUser': [0xf9a0aa09, _messagesAddChatUser],
  'messages.deleteChatUser': [0xe0611f16, _messagesDeleteChatUser],
  'messages.createChat': [0x9cb126e, _messagesCreateChat],
  'updates.getState': [0xedd4882a],
  'updates.getDifference': [0x25939651, _updatesGetDifference],
  'photos.updateProfilePhoto': [0xf0bb5152, _photosUpdateProfilePhoto],
  'photos.uploadProfilePhoto': [0x4f32c098, _photosUploadProfilePhoto],
  'photos.deletePhotos': [0x87cf7f2f, _photosDeletePhotos],
  'upload.saveFilePart': [0xb304a621, _uploadSaveFilePart],
  'upload.getFile': [0xb15a9afc, _uploadGetFile],
  'help.getConfig': [0xc4f9186b],
  'help.getNearestDc': [0x1fb33026],
  'help.getAppUpdate': [0x522d5a7d, _helpGetAppUpdate],
  'help.getInviteText': [0x4d392343],
  'photos.getUserPhotos': [0x91cd32a8, _photosGetUserPhotos],
  'messages.getDhConfig': [0x26cf8950, _messagesGetDhConfig],
  'messages.requestEncryption': [0xf64daf43, _messagesRequestEncryption],
  'messages.acceptEncryption': [0x3dbc0415, _messagesAcceptEncryption],
  'messages.discardEncryption': [0xedd923c5, _messagesDiscardEncryption],
  'messages.setEncryptedTyping': [0x791451ed, _messagesSetEncryptedTyping],
  'messages.readEncryptedHistory': [0x7f4b690a, _messagesReadEncryptedHistory],
  'messages.sendEncrypted': [0xa9776773, _messagesSendEncrypted],
  'messages.sendEncryptedFile': [0x9a901b66, _messagesSendEncryptedFile],
  'messages.sendEncryptedService': [0x32d439a4, _messagesSendEncryptedService],
  'messages.receivedQueue': [0x55a5bb66, _messagesReceivedQueue],
  'messages.reportEncryptedSpam': [0x4b0c8c0f, _messagesReportEncryptedSpam],
  'upload.saveBigFilePart': [0xde7b673d, _uploadSaveBigFilePart],
  'initConnection': [0x785188b8, _initConnection],
  'help.getSupport': [0x9cdf08cd],
  'messages.readMessageContents': [0x36a73f77, _messagesReadMessageContents],
  'account.checkUsername': [0x2714d86c, _accountCheckUsername],
  'account.updateUsername': [0x3e0bdd7c, _accountUpdateUsername],
  'contacts.search': [0x11f812d8, _contactsSearch],
  'account.getPrivacy': [0xdadbc950, _accountGetPrivacy],
  'account.setPrivacy': [0xc9f81ce8, _accountSetPrivacy],
  'account.deleteAccount': [0x418d4e0b, _accountDeleteAccount],
  'account.getAccountTTL': [0x8fc711d],
  'account.setAccountTTL': [0x2442485e, _accountSetAccountTTL],
  'invokeWithLayer': [0xda9b0d0d, _invokeWithLayer],
  'contacts.resolveUsername': [0xf93ccba3, _contactsResolveUsername],
  'account.sendChangePhoneCode': [0x82574ae5, _accountSendChangePhoneCode],
  'account.changePhone': [0x70c32edb, _accountChangePhone],
  'messages.getStickers': [0x43d4f2c, _messagesGetStickers],
  'messages.getAllStickers': [0x1c9618b1, _messagesGetAllStickers],
  'account.updateDeviceLocked': [0x38df3532, _accountUpdateDeviceLocked],
  'auth.importBotAuthorization': [0x67a3ff2c, _authImportBotAuthorization],
  'messages.getWebPagePreview': [0x8b68b0cc, _messagesGetWebPagePreview],
  'account.getAuthorizations': [0xe320c158],
  'account.resetAuthorization': [0xdf77f3bc, _accountResetAuthorization],
  'account.getPassword': [0x548a30f5],
  'account.getPasswordSettings': [0x9cd4eaf9, _accountGetPasswordSettings],
  'account.updatePasswordSettings': [0xa59b102f, _accountUpdatePasswordSettings],
  'auth.checkPassword': [0xd18b4d16, _authCheckPassword],
  'auth.requestPasswordRecovery': [0xd897bc66],
  'auth.recoverPassword': [0x4ea56e92, _authRecoverPassword],
  'invokeWithoutUpdates': [0xbf9459b7, _invokeWithoutUpdates],
  'messages.exportChatInvite': [0xdf7534c, _messagesExportChatInvite],
  'messages.checkChatInvite': [0x3eadb1bb, _messagesCheckChatInvite],
  'messages.importChatInvite': [0x6c50051c, _messagesImportChatInvite],
  'messages.getStickerSet': [0x2619a90e, _messagesGetStickerSet],
  'messages.installStickerSet': [0xc78fe460, _messagesInstallStickerSet],
  'messages.uninstallStickerSet': [0xf96e55de, _messagesUninstallStickerSet],
  'messages.startBot': [0xe6df7378, _messagesStartBot],
  'help.getAppChangelog': [0x9010ef6f, _helpGetAppChangelog],
  'messages.getMessagesViews': [0xc4c8a55d, _messagesGetMessagesViews],
  'channels.readHistory': [0xcc104937, _channelsReadHistory],
  'channels.deleteMessages': [0x84c1fd4e, _channelsDeleteMessages],
  'channels.deleteUserHistory': [0xd10dd71b, _channelsDeleteUserHistory],
  'channels.reportSpam': [0xfe087810, _channelsReportSpam],
  'channels.getMessages': [0xad8c9a23, _channelsGetMessages],
  'channels.getParticipants': [0x123e05e9, _channelsGetParticipants],
  'channels.getParticipant': [0x546dd7a6, _channelsGetParticipant],
  'channels.getChannels': [0xa7f6bbb, _channelsGetChannels],
  'channels.getFullChannel': [0x8736a09, _channelsGetFullChannel],
  'channels.createChannel': [0x3d5fb10f, _channelsCreateChannel],
  'channels.editAdmin': [0xd33c8902, _channelsEditAdmin],
  'channels.editTitle': [0x566decd0, _channelsEditTitle],
  'channels.editPhoto': [0xf12e57c9, _channelsEditPhoto],
  'channels.checkUsername': [0x10e6bd2c, _channelsCheckUsername],
  'channels.updateUsername': [0x3514b3de, _channelsUpdateUsername],
  'channels.joinChannel': [0x24b524c5, _channelsJoinChannel],
  'channels.leaveChannel': [0xf836aa95, _channelsLeaveChannel],
  'channels.inviteToChannel': [0x199f3a6c, _channelsInviteToChannel],
  'channels.deleteChannel': [0xc0111fe3, _channelsDeleteChannel],
  'updates.getChannelDifference': [0x3173d78, _updatesGetChannelDifference],
  'messages.editChatAdmin': [0xa9e69f2e, _messagesEditChatAdmin],
  'messages.migrateChat': [0x15a3b8e3, _messagesMigrateChat],
  'messages.searchGlobal': [0xbf7225a4, _messagesSearchGlobal],
  'messages.reorderStickerSets': [0x78337739, _messagesReorderStickerSets],
  'messages.getDocumentByHash': [0x338e2464, _messagesGetDocumentByHash],
  'messages.searchGifs': [0xbf9a776b, _messagesSearchGifs],
  'messages.getSavedGifs': [0x83bf3d52, _messagesGetSavedGifs],
  'messages.saveGif': [0x327a30cb, _messagesSaveGif],
  'messages.getInlineBotResults': [0x514e999d, _messagesGetInlineBotResults],
  'messages.setInlineBotResults': [0xeb5ea206, _messagesSetInlineBotResults],
  'messages.sendInlineBotResult': [0x220815b0, _messagesSendInlineBotResult],
  'channels.exportMessageLink': [0xceb77163, _channelsExportMessageLink],
  'channels.toggleSignatures': [0x1f69b606, _channelsToggleSignatures],
  'auth.resendCode': [0x3ef1a9bf, _authResendCode],
  'auth.cancelCode': [0x1f040578, _authCancelCode],
  'messages.getMessageEditData': [0xfda68d36, _messagesGetMessageEditData],
  'messages.editMessage': [0x48f71778, _messagesEditMessage],
  'messages.editInlineBotMessage': [0x83557dba, _messagesEditInlineBotMessage],
  'messages.getBotCallbackAnswer': [0x810a9fec, _messagesGetBotCallbackAnswer],
  'messages.setBotCallbackAnswer': [0xd58f130a, _messagesSetBotCallbackAnswer],
  'contacts.getTopPeers': [0xd4982db5, _contactsGetTopPeers],
  'contacts.resetTopPeerRating': [0x1ae373ac, _contactsResetTopPeerRating],
  'messages.getPeerDialogs': [0xe470bcfd, _messagesGetPeerDialogs],
  'messages.saveDraft': [0xbc39e14b, _messagesSaveDraft],
  'messages.getAllDrafts': [0x6a3f8d65],
  'messages.getFeaturedStickers': [0x2dacca4f, _messagesGetFeaturedStickers],
  'messages.readFeaturedStickers': [0x5b118126, _messagesReadFeaturedStickers],
  'messages.getRecentStickers': [0x5ea192c9, _messagesGetRecentStickers],
  'messages.saveRecentSticker': [0x392718f8, _messagesSaveRecentSticker],
  'messages.clearRecentStickers': [0x8999602d, _messagesClearRecentStickers],
  'messages.getArchivedStickers': [0x57f17692, _messagesGetArchivedStickers],
  'account.sendConfirmPhoneCode': [0x1b3faa88, _accountSendConfirmPhoneCode],
  'account.confirmPhone': [0x5f2178c3, _accountConfirmPhone],
  'channels.getAdminedPublicChannels': [0xf8b036af, _channelsGetAdminedPublicChannels],
  'messages.getMaskStickers': [0x65b8c79f, _messagesGetMaskStickers],
  'messages.getAttachedStickers': [0xcc5b67cc, _messagesGetAttachedStickers],
  'auth.dropTempAuthKeys': [0x8e48a188, _authDropTempAuthKeys],
  'messages.setGameScore': [0x8ef8ecc0, _messagesSetGameScore],
  'messages.setInlineGameScore': [0x15ad9f64, _messagesSetInlineGameScore],
  'messages.getGameHighScores': [0xe822649d, _messagesGetGameHighScores],
  'messages.getInlineGameHighScores': [0xf635e1b, _messagesGetInlineGameHighScores],
  'messages.getCommonChats': [0xd0a48c4, _messagesGetCommonChats],
  'messages.getAllChats': [0xeba80ff0, _messagesGetAllChats],
  'help.setBotUpdatesStatus': [0xec22cfcd, _helpSetBotUpdatesStatus],
  'messages.getWebPage': [0x32ca8f91, _messagesGetWebPage],
  'messages.toggleDialogPin': [0xa731e257, _messagesToggleDialogPin],
  'messages.reorderPinnedDialogs': [0x3b1adf37, _messagesReorderPinnedDialogs],
  'messages.getPinnedDialogs': [0xd6b94df2, _messagesGetPinnedDialogs],
  'bots.sendCustomRequest': [0xaa2769ed, _botsSendCustomRequest],
  'bots.answerWebhookJSONQuery': [0xe6213f4d, _botsAnswerWebhookJSONQuery],
  'upload.getWebFile': [0x24e6818d, _uploadGetWebFile],
  'payments.getPaymentForm': [0x99f09745, _paymentsGetPaymentForm],
  'payments.getPaymentReceipt': [0xa092a980, _paymentsGetPaymentReceipt],
  'payments.validateRequestedInfo': [0x770a8e74, _paymentsValidateRequestedInfo],
  'payments.sendPaymentForm': [0x2b8879b3, _paymentsSendPaymentForm],
  'account.getTmpPassword': [0x449e0b51, _accountGetTmpPassword],
  'payments.getSavedInfo': [0x227d824b],
  'payments.clearSavedInfo': [0xd83d70c1, _paymentsClearSavedInfo],
  'messages.setBotShippingResults': [0xe5f672fa, _messagesSetBotShippingResults],
  'messages.setBotPrecheckoutResults': [0x9c2dd95, _messagesSetBotPrecheckoutResults],
  'stickers.createStickerSet': [0x9bd86e6a, _stickersCreateStickerSet],
  'stickers.removeStickerFromSet': [0xf7760f51, _stickersRemoveStickerFromSet],
  'stickers.changeStickerPosition': [0xffb6d4ca, _stickersChangeStickerPosition],
  'stickers.addStickerToSet': [0x8653febe, _stickersAddStickerToSet],
  'messages.uploadMedia': [0x519bc2b1, _messagesUploadMedia],
  'phone.getCallConfig': [0x55451fa9],
  'phone.requestCall': [0x42ff96ed, _phoneRequestCall],
  'phone.acceptCall': [0x3bd2b4a0, _phoneAcceptCall],
  'phone.confirmCall': [0x2efe1722, _phoneConfirmCall],
  'phone.receivedCall': [0x17d54f61, _phoneReceivedCall],
  'phone.discardCall': [0xb2cbc1c0, _phoneDiscardCall],
  'phone.setCallRating': [0x59ead627, _phoneSetCallRating],
  'phone.saveCallDebug': [0x277add7e, _phoneSaveCallDebug],
  'upload.getCdnFile': [0x2000bcc3, _uploadGetCdnFile],
  'upload.reuploadCdnFile': [0x9b2754a8, _uploadReuploadCdnFile],
  'help.getCdnConfig': [0x52029342],
  'langpack.getLangPack': [0xf2f2330a, _langpackGetLangPack],
  'langpack.getStrings': [0xefea3803, _langpackGetStrings],
  'langpack.getDifference': [0xcd984aa5, _langpackGetDifference],
  'langpack.getLanguages': [0x42c6978f, _langpackGetLanguages],
  'channels.editBanned': [0x72796912, _channelsEditBanned],
  'channels.getAdminLog': [0x33ddf480, _channelsGetAdminLog],
  'upload.getCdnFileHashes': [0x4da54231, _uploadGetCdnFileHashes],
  'messages.sendScreenshotNotification': [0xc97df020, _messagesSendScreenshotNotification],
  'channels.setStickers': [0xea8ca4f9, _channelsSetStickers],
  'messages.getFavedStickers': [0x21ce0b0e, _messagesGetFavedStickers],
  'messages.faveSticker': [0xb9ffc55b, _messagesFaveSticker],
  'channels.readMessageContents': [0xeab5dc38, _channelsReadMessageContents],
  'contacts.resetSaved': [0x879537f1],
  'messages.getUnreadMentions': [0x46578472, _messagesGetUnreadMentions],
  'channels.deleteHistory': [0xaf369d42, _channelsDeleteHistory],
  'help.getRecentMeUrls': [0x3dc0f114, _helpGetRecentMeUrls],
  'channels.togglePreHistoryHidden': [0xeabbb94c, _channelsTogglePreHistoryHidden],
  'messages.readMentions': [0xf0189d3, _messagesReadMentions],
  'messages.getRecentLocations': [0xbbc45b09, _messagesGetRecentLocations],
  'messages.sendMultiMedia': [0xcc0110cb, _messagesSendMultiMedia],
  'messages.uploadEncryptedFile': [0x5057c497, _messagesUploadEncryptedFile],
  'account.getWebAuthorizations': [0x182e6d6f],
  'account.resetWebAuthorization': [0x2d01b9ef, _accountResetWebAuthorization],
  'account.resetWebAuthorizations': [0x682d2594],
  'messages.searchStickerSets': [0xc2b7d08b, _messagesSearchStickerSets],
  'upload.getFileHashes': [0xc7025931, _uploadGetFileHashes],
  'help.getProxyData': [0x3d7758e1],
  'help.getTermsOfServiceUpdate': [0x2ca51fd1],
  'help.acceptTermsOfService': [0xee72f79a, _helpAcceptTermsOfService],
  'account.getAllSecureValues': [0xb288bc7d],
  'account.getSecureValue': [0x73665bc2, _accountGetSecureValue],
  'account.saveSecureValue': [0x899fe31d, _accountSaveSecureValue],
  'account.deleteSecureValue': [0xb880bc4b, _accountDeleteSecureValue],
  'users.setSecureValueErrors': [0x90c894b5, _usersSetSecureValueErrors],
  'account.getAuthorizationForm': [0xb86ba8e1, _accountGetAuthorizationForm],
  'account.acceptAuthorization': [0xe7027c94, _accountAcceptAuthorization],
  'account.sendVerifyPhoneCode': [0xa5a356f9, _accountSendVerifyPhoneCode],
  'account.verifyPhone': [0x4dd3a7f6, _accountVerifyPhone],
  'account.sendVerifyEmailCode': [0x7011509f, _accountSendVerifyEmailCode],
  'account.verifyEmail': [0xecba39db, _accountVerifyEmail],
  'help.getDeepLinkInfo': [0x3fedc75f, _helpGetDeepLinkInfo],
  'contacts.getSaved': [0x82f1e39f],
  'channels.getLeftChannels': [0x8341ecc0, _channelsGetLeftChannels],
  'account.initTakeoutSession': [0xf05b4804, _accountInitTakeoutSession],
  'account.finishTakeoutSession': [0x1d2652ee, _accountFinishTakeoutSession],
  'messages.getSplitRanges': [0x1cff7e08],
  'invokeWithMessagesRange': [0x365275f2, _invokeWithMessagesRange],
  'invokeWithTakeout': [0xaca9fd2e, _invokeWithTakeout],
  'messages.markDialogUnread': [0xc286d98f, _messagesMarkDialogUnread],
  'messages.getDialogUnreadMarks': [0x22e24e22],
  'contacts.toggleTopPeers': [0x8514bdda, _contactsToggleTopPeers],
  'messages.clearAllDrafts': [0x7e58ee9c],
  'help.getAppConfig': [0x98914110],
  'help.saveAppLog': [0x6f02f748, _helpSaveAppLog],
  'help.getPassportConfig': [0xc661ad08, _helpGetPassportConfig],
  'langpack.getLanguage': [0x6a596502, _langpackGetLanguage],
  'messages.updatePinnedMessage': [0xd2aaf7ec, _messagesUpdatePinnedMessage],
  'account.confirmPasswordEmail': [0x8fdf1920, _accountConfirmPasswordEmail],
  'account.resendPasswordEmail': [0x7a7f2a15],
  'account.cancelPasswordEmail': [0xc1cbd5b6],
  'help.getSupportName': [0xd360e72c],
  'help.getUserInfo': [0x38a08d3, _helpGetUserInfo],
  'help.editUserInfo': [0x66b91b70, _helpEditUserInfo],
  'account.getContactSignUpNotification': [0x9f07c728],
  'account.setContactSignUpNotification': [0xcff43f61, _accountSetContactSignUpNotification],
  'account.getNotifyExceptions': [0x53577479, _accountGetNotifyExceptions],
  'messages.sendVote': [0x10ea6184, _messagesSendVote],
  'messages.getPollResults': [0x73bb643b, _messagesGetPollResults],
  'messages.getOnlines': [0x6e2be050, _messagesGetOnlines],
  'messages.getStatsURL': [0x812c2ae6, _messagesGetStatsURL],
  'messages.editChatAbout': [0xdef60797, _messagesEditChatAbout],
  'messages.editChatDefaultBannedRights': [0xa5866b41, _messagesEditChatDefaultBannedRights],
  'account.getWallPaper': [0xfc8ddbea, _accountGetWallPaper],
  'account.uploadWallPaper': [0xdd853661, _accountUploadWallPaper],
  'account.saveWallPaper': [0x6c5a5b37, _accountSaveWallPaper],
  'account.installWallPaper': [0xfeed5769, _accountInstallWallPaper],
  'account.resetWallPapers': [0xbb3b9804],
  'account.getAutoDownloadSettings': [0x56da0b3f],
  'account.saveAutoDownloadSettings': [0x76f36233, _accountSaveAutoDownloadSettings],
  'messages.getEmojiKeywords': [0x35a0e062, _messagesGetEmojiKeywords],
  'messages.getEmojiKeywordsDifference': [0x1508b6af, _messagesGetEmojiKeywordsDifference],
  'messages.getEmojiKeywordsLanguages': [0x4e9963b2, _messagesGetEmojiKeywordsLanguages],
  'messages.getEmojiURL': [0xd5b10c26, _messagesGetEmojiURL],
  'folders.editPeerFolders': [0x6847d0ab, _foldersEditPeerFolders],
  'folders.deleteFolder': [0x1c295881, _foldersDeleteFolder],
  'messages.getSearchCounters': [0x732eef00, _messagesGetSearchCounters],
  'channels.getGroupsForDiscussion': [0xf5dad378],
  'channels.setDiscussionGroup': [0x40582bb2, _channelsSetDiscussionGroup],
  'messages.requestUrlAuth': [0xe33f5613, _messagesRequestUrlAuth],
  'messages.acceptUrlAuth': [0xf729ea98, _messagesAcceptUrlAuth],
  'messages.hidePeerSettingsBar': [0x4facb138, _messagesHidePeerSettingsBar],
  'contacts.addContact': [0xe8f463d0, _contactsAddContact],
  'contacts.acceptContact': [0xf831a20f, _contactsAcceptContact],
  'channels.editCreator': [0x8f38cd1f, _channelsEditCreator],
  'contacts.getLocated': [0xa356056, _contactsGetLocated],
  'channels.editLocation': [0x58e63f6d, _channelsEditLocation],
  'channels.toggleSlowMode': [0xedd49ef0, _channelsToggleSlowMode],
  'messages.getScheduledHistory': [0xe2c2685b, _messagesGetScheduledHistory],
  'messages.getScheduledMessages': [0xbdbb0464, _messagesGetScheduledMessages],
  'messages.sendScheduledMessages': [0xbd38850a, _messagesSendScheduledMessages],
  'messages.deleteScheduledMessages': [0x59ae2b16, _messagesDeleteScheduledMessages],
  'account.uploadTheme': [0x1c3db333, _accountUploadTheme],
  'account.createTheme': [0x8432c21f, _accountCreateTheme],
  'account.updateTheme': [0x5cb367d5, _accountUpdateTheme],
  'account.saveTheme': [0xf257106c, _accountSaveTheme],
  'account.installTheme': [0x7ae43737, _accountInstallTheme],
  'account.getTheme': [0x8d9d742b, _accountGetTheme],
  'account.getThemes': [0x285946f8, _accountGetThemes],
  'auth.exportLoginToken': [0xb1b41517, _authExportLoginToken],
  'auth.importLoginToken': [0x95ac5ce4, _authImportLoginToken],
  'auth.acceptLoginToken': [0xe894ad4d, _authAcceptLoginToken],
  'account.setContentSettings': [0xb574b16b, _accountSetContentSettings],
  'account.getContentSettings': [0x8b9b4dae],
  'channels.getInactiveChannels': [0x11e831ee],
  'account.getMultiWallPapers': [0x65ad71dc, _accountGetMultiWallPapers],
}

function i32(value: number) { s.writeInt32(value); }
function i64(value: string) { s.writeInt64(value); }
function f64(value: number) { s.writeDouble(value); }
function str(value: string) { s.writeString(value); }
function bytes(value: ArrayBuffer) { s.writeBytes(value); }

function bool(value: boolean) { i32(builderMap[value ? 'boolTrue' : 'boolFalse'][0]); }

function vector(fn: (value: any) => void, value: Array<any>, ctorId?: number) {
  i32(0x1cb5c415);
  i32(value.length);
  for (let i = 0; i < value.length; i++) {
    if (ctorId != undefined) i32(ctorId);
    fn(value[i]);
  }
}

function flagVector(fn: (value: any) => void, value: Array<any>, ctorId?: number) {
  if (value === undefined || value.length === 0) return;
  vector(fn, value, ctorId);
}

function flag(fn: (value: any) => void, value: any) {
  if (has(value)) fn(value);
}

function has(value: any) {
  return +!!value;
}

function obj(o: any, bare = false) {
  const descriptor = builderMap[o._];
  if (descriptor) {
    const [id, fn] = descriptor;
    if (!bare) i32(id);
    if (fn) fn(o);
  } else if (fallbackBuilder) fallbackBuilder(s, o);
  else {
    console.error('Cannot serialize object', o);
  }
}

export default function build(stream: ByteStream, o: any, fallback?: (stream: ByteStream, o: any) => void) {
  s = stream;
  fallbackBuilder = fallback;
  return obj(o);
}