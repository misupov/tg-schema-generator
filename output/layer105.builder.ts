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

function _boolFalse(s: ByteStream, o: any) {
  i32(s, 0xbc799737);
}

function _boolTrue(s: ByteStream, o: any) {
  i32(s, 0x997275b5);
}

function _true(s: ByteStream, o: any) {
  i32(s, 0x3fedd339);
}

function _vector(s: ByteStream, o: any) {
  i32(s, 0x1cb5c415);
}

function _error(s: ByteStream, o: any) {
  i32(s, 0xc4b9f9bb);
  i32(s, o.code);
  o.text
}

function _null(s: ByteStream, o: any) {
  i32(s, 0x56730bcc);
}

function _inputPeerEmpty(s: ByteStream, o: any) {
  i32(s, 0x7f3b18ea);
}

function _inputPeerSelf(s: ByteStream, o: any) {
  i32(s, 0x7da07ec9);
}

function _inputPeerChat(s: ByteStream, o: any) {
  i32(s, 0x179be863);
  i32(s, o.chat_id);
}

function _inputPeerUser(s: ByteStream, o: any) {
  i32(s, 0x7b8e7de6);
  i32(s, o.user_id);
  o.access_hash
}

function _inputPeerChannel(s: ByteStream, o: any) {
  i32(s, 0x20adaef8);
  i32(s, o.channel_id);
  o.access_hash
}

function _inputPeerUserFromMessage(s: ByteStream, o: any) {
  i32(s, 0x17bae2e6);
  o.peer
  i32(s, o.msg_id);
  i32(s, o.user_id);
}

function _inputPeerChannelFromMessage(s: ByteStream, o: any) {
  i32(s, 0x9c95f7bb);
  o.peer
  i32(s, o.msg_id);
  i32(s, o.channel_id);
}

function _inputUserEmpty(s: ByteStream, o: any) {
  i32(s, 0xb98886cf);
}

function _inputUserSelf(s: ByteStream, o: any) {
  i32(s, 0xf7c1b13f);
}

function _inputUser(s: ByteStream, o: any) {
  i32(s, 0xd8292816);
  i32(s, o.user_id);
  o.access_hash
}

function _inputUserFromMessage(s: ByteStream, o: any) {
  i32(s, 0x2d117597);
  o.peer
  i32(s, o.msg_id);
  i32(s, o.user_id);
}

function _inputPhoneContact(s: ByteStream, o: any) {
  i32(s, 0xf392b7f4);
  o.client_id
  o.phone
  o.first_name
  o.last_name
}

function _inputFile(s: ByteStream, o: any) {
  i32(s, 0xf52ff27f);
  o.id
  i32(s, o.parts);
  o.name
  o.md5_checksum
}

function _inputFileBig(s: ByteStream, o: any) {
  i32(s, 0xfa4f0bb5);
  o.id
  i32(s, o.parts);
  o.name
}

function _inputMediaEmpty(s: ByteStream, o: any) {
  i32(s, 0x9664f57f);
}

function _inputMediaUploadedPhoto(s: ByteStream, o: any) {
  i32(s, 0x1e287d04);
  const flags = +!!o.stickers | +!!o.ttl_seconds << 1;
  i32(s, flags);
  o.file
  if (o.stickers !== undefined) o.stickers
  if (o.ttl_seconds !== undefined) o.ttl_seconds
}

function _inputMediaPhoto(s: ByteStream, o: any) {
  i32(s, 0xb3ba0635);
  const flags = +!!o.ttl_seconds;
  i32(s, flags);
  o.id
  if (o.ttl_seconds !== undefined) o.ttl_seconds
}

function _inputMediaGeoPoint(s: ByteStream, o: any) {
  i32(s, 0xf9c44144);
  o.geo_point
}

function _inputMediaContact(s: ByteStream, o: any) {
  i32(s, 0xf8ab7dfb);
  o.phone_number
  o.first_name
  o.last_name
  o.vcard
}

function _inputMediaUploadedDocument(s: ByteStream, o: any) {
  i32(s, 0x5b38c6c1);
  const flags = +o.nosound_video << 3 | +!!o.thumb << 2 | +!!o.stickers | +!!o.ttl_seconds << 1;
  i32(s, flags);
  if (o.nosound_video !== undefined) o.nosound_video
  o.file
  if (o.thumb !== undefined) o.thumb
  o.mime_type
  o.attributes
  if (o.stickers !== undefined) o.stickers
  if (o.ttl_seconds !== undefined) o.ttl_seconds
}

function _inputMediaDocument(s: ByteStream, o: any) {
  i32(s, 0x23ab23d2);
  const flags = +!!o.ttl_seconds;
  i32(s, flags);
  o.id
  if (o.ttl_seconds !== undefined) o.ttl_seconds
}

function _inputMediaVenue(s: ByteStream, o: any) {
  i32(s, 0xc13d1c11);
  o.geo_point
  o.title
  o.address
  o.provider
  o.venue_id
  o.venue_type
}

function _inputMediaGifExternal(s: ByteStream, o: any) {
  i32(s, 0x4843b0fd);
  o.url
  o.q
}

function _inputMediaPhotoExternal(s: ByteStream, o: any) {
  i32(s, 0xe5bbfe1a);
  const flags = +!!o.ttl_seconds;
  i32(s, flags);
  o.url
  if (o.ttl_seconds !== undefined) o.ttl_seconds
}

function _inputMediaDocumentExternal(s: ByteStream, o: any) {
  i32(s, 0xfb52dc99);
  const flags = +!!o.ttl_seconds;
  i32(s, flags);
  o.url
  if (o.ttl_seconds !== undefined) o.ttl_seconds
}

function _inputMediaGame(s: ByteStream, o: any) {
  i32(s, 0xd33f43f3);
  o.id
}

function _inputMediaInvoice(s: ByteStream, o: any) {
  i32(s, 0xf4e096c3);
  const flags = +!!o.photo;
  i32(s, flags);
  o.title
  o.description
  if (o.photo !== undefined) o.photo
  o.invoice
  o.payload
  o.provider
  o.provider_data
  o.start_param
}

function _inputMediaGeoLive(s: ByteStream, o: any) {
  i32(s, 0xce4e82fd);
  const flags = +o.stopped | +!!o.period << 1;
  i32(s, flags);
  if (o.stopped !== undefined) o.stopped
  o.geo_point
  if (o.period !== undefined) o.period
}

function _inputMediaPoll(s: ByteStream, o: any) {
  i32(s, 0x6b3765b);
  o.poll
}

function _inputChatPhotoEmpty(s: ByteStream, o: any) {
  i32(s, 0x1ca48f57);
}

function _inputChatUploadedPhoto(s: ByteStream, o: any) {
  i32(s, 0x927c55b4);
  o.file
}

function _inputChatPhoto(s: ByteStream, o: any) {
  i32(s, 0x8953ad37);
  o.id
}

function _inputGeoPointEmpty(s: ByteStream, o: any) {
  i32(s, 0xe4c123d6);
}

function _inputGeoPoint(s: ByteStream, o: any) {
  i32(s, 0xf3b7acc9);
  o.lat
  o.long
}

function _inputPhotoEmpty(s: ByteStream, o: any) {
  i32(s, 0x1cd7bf0d);
}

function _inputPhoto(s: ByteStream, o: any) {
  i32(s, 0x3bb3b94a);
  o.id
  o.access_hash
  o.file_reference
}

function _inputFileLocation(s: ByteStream, o: any) {
  i32(s, 0xdfdaabe1);
  o.volume_id
  i32(s, o.local_id);
  o.secret
  o.file_reference
}

function _inputEncryptedFileLocation(s: ByteStream, o: any) {
  i32(s, 0xf5235d55);
  o.id
  o.access_hash
}

function _inputDocumentFileLocation(s: ByteStream, o: any) {
  i32(s, 0xbad07584);
  o.id
  o.access_hash
  o.file_reference
  o.thumb_size
}

function _inputSecureFileLocation(s: ByteStream, o: any) {
  i32(s, 0xcbc7ee28);
  o.id
  o.access_hash
}

function _inputTakeoutFileLocation(s: ByteStream, o: any) {
  i32(s, 0x29be5899);
}

function _inputPhotoFileLocation(s: ByteStream, o: any) {
  i32(s, 0x40181ffe);
  o.id
  o.access_hash
  o.file_reference
  o.thumb_size
}

function _inputPeerPhotoFileLocation(s: ByteStream, o: any) {
  i32(s, 0x27d69997);
  const flags = +o.big;
  i32(s, flags);
  if (o.big !== undefined) o.big
  o.peer
  o.volume_id
  i32(s, o.local_id);
}

function _inputStickerSetThumb(s: ByteStream, o: any) {
  i32(s, 0xdbaeae9);
  o.stickerset
  o.volume_id
  i32(s, o.local_id);
}

function _peerUser(s: ByteStream, o: any) {
  i32(s, 0x9db1bc6d);
  i32(s, o.user_id);
}

function _peerChat(s: ByteStream, o: any) {
  i32(s, 0xbad0e5bb);
  i32(s, o.chat_id);
}

function _peerChannel(s: ByteStream, o: any) {
  i32(s, 0xbddde532);
  i32(s, o.channel_id);
}

function _storageFileUnknown(s: ByteStream, o: any) {
  i32(s, 0xaa963b05);
}

function _storageFilePartial(s: ByteStream, o: any) {
  i32(s, 0x40bc6f52);
}

function _storageFileJpeg(s: ByteStream, o: any) {
  i32(s, 0x7efe0e);
}

function _storageFileGif(s: ByteStream, o: any) {
  i32(s, 0xcae1aadf);
}

function _storageFilePng(s: ByteStream, o: any) {
  i32(s, 0xa4f63c0);
}

function _storageFilePdf(s: ByteStream, o: any) {
  i32(s, 0xae1e508d);
}

function _storageFileMp3(s: ByteStream, o: any) {
  i32(s, 0x528a0677);
}

function _storageFileMov(s: ByteStream, o: any) {
  i32(s, 0x4b09ebbc);
}

function _storageFileMp4(s: ByteStream, o: any) {
  i32(s, 0xb3cea0e4);
}

function _storageFileWebp(s: ByteStream, o: any) {
  i32(s, 0x1081464c);
}

function _userEmpty(s: ByteStream, o: any) {
  i32(s, 0x200250ba);
  i32(s, o.id);
}

function _user(s: ByteStream, o: any) {
  i32(s, 0x938458c1);
  const flags = +o.self << 10 | +o.contact << 11 | +o.mutual_contact << 12 | +o.deleted << 13 | +o.bot << 14 | +o.bot_chat_history << 15 | +o.bot_nochats << 16 | +o.verified << 17 | +o.restricted << 18 | +o.min << 20 | +o.bot_inline_geo << 21 | +o.support << 23 | +o.scam << 24 | +!!o.access_hash | +!!o.first_name << 1 | +!!o.last_name << 2 | +!!o.username << 3 | +!!o.phone << 4 | +!!o.photo << 5 | +!!o.status << 6 | +!!o.bot_info_version << 14 | +!!o.restriction_reason << 18 | +!!o.bot_inline_placeholder << 19 | +!!o.lang_code << 22;
  i32(s, flags);
  if (o.self !== undefined) o.self
  if (o.contact !== undefined) o.contact
  if (o.mutual_contact !== undefined) o.mutual_contact
  if (o.deleted !== undefined) o.deleted
  if (o.bot !== undefined) o.bot
  if (o.bot_chat_history !== undefined) o.bot_chat_history
  if (o.bot_nochats !== undefined) o.bot_nochats
  if (o.verified !== undefined) o.verified
  if (o.restricted !== undefined) o.restricted
  if (o.min !== undefined) o.min
  if (o.bot_inline_geo !== undefined) o.bot_inline_geo
  if (o.support !== undefined) o.support
  if (o.scam !== undefined) o.scam
  i32(s, o.id);
  if (o.access_hash !== undefined) o.access_hash
  if (o.first_name !== undefined) o.first_name
  if (o.last_name !== undefined) o.last_name
  if (o.username !== undefined) o.username
  if (o.phone !== undefined) o.phone
  if (o.photo !== undefined) o.photo
  if (o.status !== undefined) o.status
  if (o.bot_info_version !== undefined) o.bot_info_version
  if (o.restriction_reason !== undefined) o.restriction_reason
  if (o.bot_inline_placeholder !== undefined) o.bot_inline_placeholder
  if (o.lang_code !== undefined) o.lang_code
}

function _userProfilePhotoEmpty(s: ByteStream, o: any) {
  i32(s, 0x4f11bae1);
}

function _userProfilePhoto(s: ByteStream, o: any) {
  i32(s, 0xecd75d8c);
  o.photo_id
  o.photo_small
  o.photo_big
  i32(s, o.dc_id);
}

function _userStatusEmpty(s: ByteStream, o: any) {
  i32(s, 0x9d05049);
}

function _userStatusOnline(s: ByteStream, o: any) {
  i32(s, 0xedb93949);
  i32(s, o.expires);
}

function _userStatusOffline(s: ByteStream, o: any) {
  i32(s, 0x8c703f);
  i32(s, o.was_online);
}

function _userStatusRecently(s: ByteStream, o: any) {
  i32(s, 0xe26f42f1);
}

function _userStatusLastWeek(s: ByteStream, o: any) {
  i32(s, 0x7bf09fc);
}

function _userStatusLastMonth(s: ByteStream, o: any) {
  i32(s, 0x77ebc742);
}

function _chatEmpty(s: ByteStream, o: any) {
  i32(s, 0x9ba2d800);
  i32(s, o.id);
}

function _chat(s: ByteStream, o: any) {
  i32(s, 0x3bda1bde);
  const flags = +o.creator | +o.kicked << 1 | +o.left << 2 | +o.deactivated << 5 | +!!o.migrated_to << 6 | +!!o.admin_rights << 14 | +!!o.default_banned_rights << 18;
  i32(s, flags);
  if (o.creator !== undefined) o.creator
  if (o.kicked !== undefined) o.kicked
  if (o.left !== undefined) o.left
  if (o.deactivated !== undefined) o.deactivated
  i32(s, o.id);
  o.title
  o.photo
  i32(s, o.participants_count);
  i32(s, o.date);
  i32(s, o.version);
  if (o.migrated_to !== undefined) o.migrated_to
  if (o.admin_rights !== undefined) o.admin_rights
  if (o.default_banned_rights !== undefined) o.default_banned_rights
}

function _chatForbidden(s: ByteStream, o: any) {
  i32(s, 0x7328bdb);
  i32(s, o.id);
  o.title
}

function _channel(s: ByteStream, o: any) {
  i32(s, 0xd31a961e);
  const flags = +o.creator | +o.left << 2 | +o.broadcast << 5 | +o.verified << 7 | +o.megagroup << 8 | +o.restricted << 9 | +o.signatures << 11 | +o.min << 12 | +o.scam << 19 | +o.has_link << 20 | +o.has_geo << 21 | +o.slowmode_enabled << 22 | +!!o.access_hash << 13 | +!!o.username << 6 | +!!o.restriction_reason << 9 | +!!o.admin_rights << 14 | +!!o.banned_rights << 15 | +!!o.default_banned_rights << 18 | +!!o.participants_count << 17;
  i32(s, flags);
  if (o.creator !== undefined) o.creator
  if (o.left !== undefined) o.left
  if (o.broadcast !== undefined) o.broadcast
  if (o.verified !== undefined) o.verified
  if (o.megagroup !== undefined) o.megagroup
  if (o.restricted !== undefined) o.restricted
  if (o.signatures !== undefined) o.signatures
  if (o.min !== undefined) o.min
  if (o.scam !== undefined) o.scam
  if (o.has_link !== undefined) o.has_link
  if (o.has_geo !== undefined) o.has_geo
  if (o.slowmode_enabled !== undefined) o.slowmode_enabled
  i32(s, o.id);
  if (o.access_hash !== undefined) o.access_hash
  o.title
  if (o.username !== undefined) o.username
  o.photo
  i32(s, o.date);
  i32(s, o.version);
  if (o.restriction_reason !== undefined) o.restriction_reason
  if (o.admin_rights !== undefined) o.admin_rights
  if (o.banned_rights !== undefined) o.banned_rights
  if (o.default_banned_rights !== undefined) o.default_banned_rights
  if (o.participants_count !== undefined) o.participants_count
}

function _channelForbidden(s: ByteStream, o: any) {
  i32(s, 0x289da732);
  const flags = +o.broadcast << 5 | +o.megagroup << 8 | +!!o.until_date << 16;
  i32(s, flags);
  if (o.broadcast !== undefined) o.broadcast
  if (o.megagroup !== undefined) o.megagroup
  i32(s, o.id);
  o.access_hash
  o.title
  if (o.until_date !== undefined) o.until_date
}

function _chatFull(s: ByteStream, o: any) {
  i32(s, 0x1b7c9db3);
  const flags = +o.can_set_username << 7 | +o.has_scheduled << 8 | +!!o.chat_photo << 2 | +!!o.bot_info << 3 | +!!o.pinned_msg_id << 6 | +!!o.folder_id << 11;
  i32(s, flags);
  if (o.can_set_username !== undefined) o.can_set_username
  if (o.has_scheduled !== undefined) o.has_scheduled
  i32(s, o.id);
  o.about
  o.participants
  if (o.chat_photo !== undefined) o.chat_photo
  o.notify_settings
  o.exported_invite
  if (o.bot_info !== undefined) o.bot_info
  if (o.pinned_msg_id !== undefined) o.pinned_msg_id
  if (o.folder_id !== undefined) o.folder_id
}

function _channelFull(s: ByteStream, o: any) {
  i32(s, 0x2d895c74);
  const flags = +o.can_view_participants << 3 | +o.can_set_username << 6 | +o.can_set_stickers << 7 | +o.hidden_prehistory << 10 | +o.can_view_stats << 12 | +o.can_set_location << 16 | +o.has_scheduled << 19 | +!!o.participants_count | +!!o.admins_count << 1 | +!!o.kicked_count << 2 | +!!o.banned_count << 2 | +!!o.online_count << 13 | +!!o.migrated_from_chat_id << 4 | +!!o.migrated_from_max_id << 4 | +!!o.pinned_msg_id << 5 | +!!o.stickerset << 8 | +!!o.available_min_id << 9 | +!!o.folder_id << 11 | +!!o.linked_chat_id << 14 | +!!o.location << 15 | +!!o.slowmode_seconds << 17 | +!!o.slowmode_next_send_date << 18;
  i32(s, flags);
  if (o.can_view_participants !== undefined) o.can_view_participants
  if (o.can_set_username !== undefined) o.can_set_username
  if (o.can_set_stickers !== undefined) o.can_set_stickers
  if (o.hidden_prehistory !== undefined) o.hidden_prehistory
  if (o.can_view_stats !== undefined) o.can_view_stats
  if (o.can_set_location !== undefined) o.can_set_location
  if (o.has_scheduled !== undefined) o.has_scheduled
  i32(s, o.id);
  o.about
  if (o.participants_count !== undefined) o.participants_count
  if (o.admins_count !== undefined) o.admins_count
  if (o.kicked_count !== undefined) o.kicked_count
  if (o.banned_count !== undefined) o.banned_count
  if (o.online_count !== undefined) o.online_count
  i32(s, o.read_inbox_max_id);
  i32(s, o.read_outbox_max_id);
  i32(s, o.unread_count);
  o.chat_photo
  o.notify_settings
  o.exported_invite
  o.bot_info
  if (o.migrated_from_chat_id !== undefined) o.migrated_from_chat_id
  if (o.migrated_from_max_id !== undefined) o.migrated_from_max_id
  if (o.pinned_msg_id !== undefined) o.pinned_msg_id
  if (o.stickerset !== undefined) o.stickerset
  if (o.available_min_id !== undefined) o.available_min_id
  if (o.folder_id !== undefined) o.folder_id
  if (o.linked_chat_id !== undefined) o.linked_chat_id
  if (o.location !== undefined) o.location
  if (o.slowmode_seconds !== undefined) o.slowmode_seconds
  if (o.slowmode_next_send_date !== undefined) o.slowmode_next_send_date
  i32(s, o.pts);
}

function _chatParticipant(s: ByteStream, o: any) {
  i32(s, 0xc8d7493e);
  i32(s, o.user_id);
  i32(s, o.inviter_id);
  i32(s, o.date);
}

function _chatParticipantCreator(s: ByteStream, o: any) {
  i32(s, 0xda13538a);
  i32(s, o.user_id);
}

function _chatParticipantAdmin(s: ByteStream, o: any) {
  i32(s, 0xe2d6e436);
  i32(s, o.user_id);
  i32(s, o.inviter_id);
  i32(s, o.date);
}

function _chatParticipantsForbidden(s: ByteStream, o: any) {
  i32(s, 0xfc900c2b);
  const flags = +!!o.self_participant;
  i32(s, flags);
  i32(s, o.chat_id);
  if (o.self_participant !== undefined) o.self_participant
}

function _chatParticipants(s: ByteStream, o: any) {
  i32(s, 0x3f460fed);
  i32(s, o.chat_id);
  o.participants
  i32(s, o.version);
}

function _chatPhotoEmpty(s: ByteStream, o: any) {
  i32(s, 0x37c1011c);
}

function _chatPhoto(s: ByteStream, o: any) {
  i32(s, 0x475cdbd5);
  o.photo_small
  o.photo_big
  i32(s, o.dc_id);
}

function _messageEmpty(s: ByteStream, o: any) {
  i32(s, 0x83e5de54);
  i32(s, o.id);
}

function _message(s: ByteStream, o: any) {
  i32(s, 0x452c0e65);
  const flags = +o.out << 1 | +o.mentioned << 4 | +o.media_unread << 5 | +o.silent << 13 | +o.post << 14 | +o.from_scheduled << 18 | +o.legacy << 19 | +o.edit_hide << 21 | +!!o.from_id << 8 | +!!o.fwd_from << 2 | +!!o.via_bot_id << 11 | +!!o.reply_to_msg_id << 3 | +!!o.media << 9 | +!!o.reply_markup << 6 | +!!o.entities << 7 | +!!o.views << 10 | +!!o.edit_date << 15 | +!!o.post_author << 16 | +!!o.grouped_id << 17 | +!!o.restriction_reason << 22;
  i32(s, flags);
  if (o.out !== undefined) o.out
  if (o.mentioned !== undefined) o.mentioned
  if (o.media_unread !== undefined) o.media_unread
  if (o.silent !== undefined) o.silent
  if (o.post !== undefined) o.post
  if (o.from_scheduled !== undefined) o.from_scheduled
  if (o.legacy !== undefined) o.legacy
  if (o.edit_hide !== undefined) o.edit_hide
  i32(s, o.id);
  if (o.from_id !== undefined) o.from_id
  o.to_id
  if (o.fwd_from !== undefined) o.fwd_from
  if (o.via_bot_id !== undefined) o.via_bot_id
  if (o.reply_to_msg_id !== undefined) o.reply_to_msg_id
  i32(s, o.date);
  o.message
  if (o.media !== undefined) o.media
  if (o.reply_markup !== undefined) o.reply_markup
  if (o.entities !== undefined) o.entities
  if (o.views !== undefined) o.views
  if (o.edit_date !== undefined) o.edit_date
  if (o.post_author !== undefined) o.post_author
  if (o.grouped_id !== undefined) o.grouped_id
  if (o.restriction_reason !== undefined) o.restriction_reason
}

function _messageService(s: ByteStream, o: any) {
  i32(s, 0x9e19a1f6);
  const flags = +o.out << 1 | +o.mentioned << 4 | +o.media_unread << 5 | +o.silent << 13 | +o.post << 14 | +o.legacy << 19 | +!!o.from_id << 8 | +!!o.reply_to_msg_id << 3;
  i32(s, flags);
  if (o.out !== undefined) o.out
  if (o.mentioned !== undefined) o.mentioned
  if (o.media_unread !== undefined) o.media_unread
  if (o.silent !== undefined) o.silent
  if (o.post !== undefined) o.post
  if (o.legacy !== undefined) o.legacy
  i32(s, o.id);
  if (o.from_id !== undefined) o.from_id
  o.to_id
  if (o.reply_to_msg_id !== undefined) o.reply_to_msg_id
  i32(s, o.date);
  o.action
}

function _messageMediaEmpty(s: ByteStream, o: any) {
  i32(s, 0x3ded6320);
}

function _messageMediaPhoto(s: ByteStream, o: any) {
  i32(s, 0x695150d7);
  const flags = +!!o.photo | +!!o.ttl_seconds << 2;
  i32(s, flags);
  if (o.photo !== undefined) o.photo
  if (o.ttl_seconds !== undefined) o.ttl_seconds
}

function _messageMediaGeo(s: ByteStream, o: any) {
  i32(s, 0x56e0d474);
  o.geo
}

function _messageMediaContact(s: ByteStream, o: any) {
  i32(s, 0xcbf24940);
  o.phone_number
  o.first_name
  o.last_name
  o.vcard
  i32(s, o.user_id);
}

function _messageMediaUnsupported(s: ByteStream, o: any) {
  i32(s, 0x9f84f49e);
}

function _messageMediaDocument(s: ByteStream, o: any) {
  i32(s, 0x9cb070d7);
  const flags = +!!o.document | +!!o.ttl_seconds << 2;
  i32(s, flags);
  if (o.document !== undefined) o.document
  if (o.ttl_seconds !== undefined) o.ttl_seconds
}

function _messageMediaWebPage(s: ByteStream, o: any) {
  i32(s, 0xa32dd600);
  o.webpage
}

function _messageMediaVenue(s: ByteStream, o: any) {
  i32(s, 0x2ec0533f);
  o.geo
  o.title
  o.address
  o.provider
  o.venue_id
  o.venue_type
}

function _messageMediaGame(s: ByteStream, o: any) {
  i32(s, 0xfdb19008);
  o.game
}

function _messageMediaInvoice(s: ByteStream, o: any) {
  i32(s, 0x84551347);
  const flags = +o.shipping_address_requested << 1 | +o.test << 3 | +!!o.photo | +!!o.receipt_msg_id << 2;
  i32(s, flags);
  if (o.shipping_address_requested !== undefined) o.shipping_address_requested
  if (o.test !== undefined) o.test
  o.title
  o.description
  if (o.photo !== undefined) o.photo
  if (o.receipt_msg_id !== undefined) o.receipt_msg_id
  o.currency
  o.total_amount
  o.start_param
}

function _messageMediaGeoLive(s: ByteStream, o: any) {
  i32(s, 0x7c3c2609);
  o.geo
  i32(s, o.period);
}

function _messageMediaPoll(s: ByteStream, o: any) {
  i32(s, 0x4bd6e798);
  o.poll
  o.results
}

function _messageActionEmpty(s: ByteStream, o: any) {
  i32(s, 0xb6aef7b0);
}

function _messageActionChatCreate(s: ByteStream, o: any) {
  i32(s, 0xa6638b9a);
  o.title
  o.users
}

function _messageActionChatEditTitle(s: ByteStream, o: any) {
  i32(s, 0xb5a1ce5a);
  o.title
}

function _messageActionChatEditPhoto(s: ByteStream, o: any) {
  i32(s, 0x7fcb13a8);
  o.photo
}

function _messageActionChatDeletePhoto(s: ByteStream, o: any) {
  i32(s, 0x95e3fbef);
}

function _messageActionChatAddUser(s: ByteStream, o: any) {
  i32(s, 0x488a7337);
  o.users
}

function _messageActionChatDeleteUser(s: ByteStream, o: any) {
  i32(s, 0xb2ae9b0c);
  i32(s, o.user_id);
}

function _messageActionChatJoinedByLink(s: ByteStream, o: any) {
  i32(s, 0xf89cf5e8);
  i32(s, o.inviter_id);
}

function _messageActionChannelCreate(s: ByteStream, o: any) {
  i32(s, 0x95d2ac92);
  o.title
}

function _messageActionChatMigrateTo(s: ByteStream, o: any) {
  i32(s, 0x51bdb021);
  i32(s, o.channel_id);
}

function _messageActionChannelMigrateFrom(s: ByteStream, o: any) {
  i32(s, 0xb055eaee);
  o.title
  i32(s, o.chat_id);
}

function _messageActionPinMessage(s: ByteStream, o: any) {
  i32(s, 0x94bd38ed);
}

function _messageActionHistoryClear(s: ByteStream, o: any) {
  i32(s, 0x9fbab604);
}

function _messageActionGameScore(s: ByteStream, o: any) {
  i32(s, 0x92a72876);
  o.game_id
  i32(s, o.score);
}

function _messageActionPaymentSentMe(s: ByteStream, o: any) {
  i32(s, 0x8f31b327);
  const flags = +!!o.info | +!!o.shipping_option_id << 1;
  i32(s, flags);
  o.currency
  o.total_amount
  o.payload
  if (o.info !== undefined) o.info
  if (o.shipping_option_id !== undefined) o.shipping_option_id
  o.charge
}

function _messageActionPaymentSent(s: ByteStream, o: any) {
  i32(s, 0x40699cd0);
  o.currency
  o.total_amount
}

function _messageActionPhoneCall(s: ByteStream, o: any) {
  i32(s, 0x80e11a7f);
  const flags = +o.video << 2 | +!!o.reason | +!!o.duration << 1;
  i32(s, flags);
  if (o.video !== undefined) o.video
  o.call_id
  if (o.reason !== undefined) o.reason
  if (o.duration !== undefined) o.duration
}

function _messageActionScreenshotTaken(s: ByteStream, o: any) {
  i32(s, 0x4792929b);
}

function _messageActionCustomAction(s: ByteStream, o: any) {
  i32(s, 0xfae69f56);
  o.message
}

function _messageActionBotAllowed(s: ByteStream, o: any) {
  i32(s, 0xabe9affe);
  o.domain
}

function _messageActionSecureValuesSentMe(s: ByteStream, o: any) {
  i32(s, 0x1b287353);
  o.values
  o.credentials
}

function _messageActionSecureValuesSent(s: ByteStream, o: any) {
  i32(s, 0xd95c6154);
  o.types
}

function _messageActionContactSignUp(s: ByteStream, o: any) {
  i32(s, 0xf3f25f76);
}

function _dialog(s: ByteStream, o: any) {
  i32(s, 0x2c171f72);
  const flags = +o.pinned << 2 | +o.unread_mark << 3 | +!!o.pts | +!!o.draft << 1 | +!!o.folder_id << 4;
  i32(s, flags);
  if (o.pinned !== undefined) o.pinned
  if (o.unread_mark !== undefined) o.unread_mark
  o.peer
  i32(s, o.top_message);
  i32(s, o.read_inbox_max_id);
  i32(s, o.read_outbox_max_id);
  i32(s, o.unread_count);
  i32(s, o.unread_mentions_count);
  o.notify_settings
  if (o.pts !== undefined) o.pts
  if (o.draft !== undefined) o.draft
  if (o.folder_id !== undefined) o.folder_id
}

function _dialogFolder(s: ByteStream, o: any) {
  i32(s, 0x71bd134c);
  const flags = +o.pinned << 2;
  i32(s, flags);
  if (o.pinned !== undefined) o.pinned
  o.folder
  o.peer
  i32(s, o.top_message);
  i32(s, o.unread_muted_peers_count);
  i32(s, o.unread_unmuted_peers_count);
  i32(s, o.unread_muted_messages_count);
  i32(s, o.unread_unmuted_messages_count);
}

function _photoEmpty(s: ByteStream, o: any) {
  i32(s, 0x2331b22d);
  o.id
}

function _photo(s: ByteStream, o: any) {
  i32(s, 0xd07504a5);
  const flags = +o.has_stickers;
  i32(s, flags);
  if (o.has_stickers !== undefined) o.has_stickers
  o.id
  o.access_hash
  o.file_reference
  i32(s, o.date);
  o.sizes
  i32(s, o.dc_id);
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

function _photoStrippedSize(s: ByteStream, o: any) {
  i32(s, 0xe0b0bc2e);
  o.type
  o.bytes
}

function _geoPointEmpty(s: ByteStream, o: any) {
  i32(s, 0x1117dd5f);
}

function _geoPoint(s: ByteStream, o: any) {
  i32(s, 0x296f104);
  o.long
  o.lat
  o.access_hash
}

function _authSentCode(s: ByteStream, o: any) {
  i32(s, 0x5e002502);
  const flags = +!!o.next_type << 1 | +!!o.timeout << 2;
  i32(s, flags);
  o.type
  o.phone_code_hash
  if (o.next_type !== undefined) o.next_type
  if (o.timeout !== undefined) o.timeout
}

function _authAuthorization(s: ByteStream, o: any) {
  i32(s, 0xcd050916);
  const flags = +!!o.tmp_sessions;
  i32(s, flags);
  if (o.tmp_sessions !== undefined) o.tmp_sessions
  o.user
}

function _authAuthorizationSignUpRequired(s: ByteStream, o: any) {
  i32(s, 0x44747e9a);
  const flags = +!!o.terms_of_service;
  i32(s, flags);
  if (o.terms_of_service !== undefined) o.terms_of_service
}

function _authExportedAuthorization(s: ByteStream, o: any) {
  i32(s, 0xdf969c2d);
  i32(s, o.id);
  o.bytes
}

function _inputNotifyPeer(s: ByteStream, o: any) {
  i32(s, 0xb8bc5b0c);
  o.peer
}

function _inputNotifyUsers(s: ByteStream, o: any) {
  i32(s, 0x193b4417);
}

function _inputNotifyChats(s: ByteStream, o: any) {
  i32(s, 0x4a95e84e);
}

function _inputNotifyBroadcasts(s: ByteStream, o: any) {
  i32(s, 0xb1db7c7e);
}

function _inputPeerNotifySettings(s: ByteStream, o: any) {
  i32(s, 0x9c3d198e);
  const flags = +!!o.show_previews | +!!o.silent << 1 | +!!o.mute_until << 2 | +!!o.sound << 3;
  i32(s, flags);
  if (o.show_previews !== undefined) o.show_previews
  if (o.silent !== undefined) o.silent
  if (o.mute_until !== undefined) o.mute_until
  if (o.sound !== undefined) o.sound
}

function _peerNotifySettings(s: ByteStream, o: any) {
  i32(s, 0xaf509d20);
  const flags = +!!o.show_previews | +!!o.silent << 1 | +!!o.mute_until << 2 | +!!o.sound << 3;
  i32(s, flags);
  if (o.show_previews !== undefined) o.show_previews
  if (o.silent !== undefined) o.silent
  if (o.mute_until !== undefined) o.mute_until
  if (o.sound !== undefined) o.sound
}

function _peerSettings(s: ByteStream, o: any) {
  i32(s, 0x818426cd);
  const flags = +o.report_spam | +o.add_contact << 1 | +o.block_contact << 2 | +o.share_contact << 3 | +o.need_contacts_exception << 4 | +o.report_geo << 5;
  i32(s, flags);
  if (o.report_spam !== undefined) o.report_spam
  if (o.add_contact !== undefined) o.add_contact
  if (o.block_contact !== undefined) o.block_contact
  if (o.share_contact !== undefined) o.share_contact
  if (o.need_contacts_exception !== undefined) o.need_contacts_exception
  if (o.report_geo !== undefined) o.report_geo
}

function _wallPaper(s: ByteStream, o: any) {
  i32(s, 0xa437c3ed);
  const flags = +o.creator | +o.default << 1 | +o.pattern << 3 | +o.dark << 4 | +!!o.settings << 2;
  i32(s, flags);
  o.id
  if (o.creator !== undefined) o.creator
  if (o.default !== undefined) o.default
  if (o.pattern !== undefined) o.pattern
  if (o.dark !== undefined) o.dark
  o.access_hash
  o.slug
  o.document
  if (o.settings !== undefined) o.settings
}

function _inputReportReasonSpam(s: ByteStream, o: any) {
  i32(s, 0x58dbcab8);
}

function _inputReportReasonViolence(s: ByteStream, o: any) {
  i32(s, 0x1e22c78d);
}

function _inputReportReasonPornography(s: ByteStream, o: any) {
  i32(s, 0x2e59d922);
}

function _inputReportReasonChildAbuse(s: ByteStream, o: any) {
  i32(s, 0xadf44ee3);
}

function _inputReportReasonOther(s: ByteStream, o: any) {
  i32(s, 0xe1746d0a);
  o.text
}

function _inputReportReasonCopyright(s: ByteStream, o: any) {
  i32(s, 0x9b89f93a);
}

function _inputReportReasonGeoIrrelevant(s: ByteStream, o: any) {
  i32(s, 0xdbd4feed);
}

function _userFull(s: ByteStream, o: any) {
  i32(s, 0xedf17c12);
  const flags = +o.blocked | +o.phone_calls_available << 4 | +o.phone_calls_private << 5 | +o.can_pin_message << 7 | +o.has_scheduled << 12 | +!!o.about << 1 | +!!o.profile_photo << 2 | +!!o.bot_info << 3 | +!!o.pinned_msg_id << 6 | +!!o.folder_id << 11;
  i32(s, flags);
  if (o.blocked !== undefined) o.blocked
  if (o.phone_calls_available !== undefined) o.phone_calls_available
  if (o.phone_calls_private !== undefined) o.phone_calls_private
  if (o.can_pin_message !== undefined) o.can_pin_message
  if (o.has_scheduled !== undefined) o.has_scheduled
  o.user
  if (o.about !== undefined) o.about
  o.settings
  if (o.profile_photo !== undefined) o.profile_photo
  o.notify_settings
  if (o.bot_info !== undefined) o.bot_info
  if (o.pinned_msg_id !== undefined) o.pinned_msg_id
  i32(s, o.common_chats_count);
  if (o.folder_id !== undefined) o.folder_id
}

function _contact(s: ByteStream, o: any) {
  i32(s, 0xf911c994);
  i32(s, o.user_id);
  o.mutual
}

function _importedContact(s: ByteStream, o: any) {
  i32(s, 0xd0028438);
  i32(s, o.user_id);
  o.client_id
}

function _contactBlocked(s: ByteStream, o: any) {
  i32(s, 0x561bc879);
  i32(s, o.user_id);
  i32(s, o.date);
}

function _contactStatus(s: ByteStream, o: any) {
  i32(s, 0xd3680c61);
  i32(s, o.user_id);
  o.status
}

function _contactsContactsNotModified(s: ByteStream, o: any) {
  i32(s, 0xb74ba9d2);
}

function _contactsContacts(s: ByteStream, o: any) {
  i32(s, 0xeae87e42);
  o.contacts
  i32(s, o.saved_count);
  o.users
}

function _contactsImportedContacts(s: ByteStream, o: any) {
  i32(s, 0x77d01c3b);
  o.imported
  o.popular_invites
  o.retry_contacts
  o.users
}

function _contactsBlocked(s: ByteStream, o: any) {
  i32(s, 0x1c138d15);
  o.blocked
  o.users
}

function _contactsBlockedSlice(s: ByteStream, o: any) {
  i32(s, 0x900802a1);
  i32(s, o.count);
  o.blocked
  o.users
}

function _messagesDialogs(s: ByteStream, o: any) {
  i32(s, 0x15ba6c40);
  o.dialogs
  o.messages
  o.chats
  o.users
}

function _messagesDialogsSlice(s: ByteStream, o: any) {
  i32(s, 0x71e094f3);
  i32(s, o.count);
  o.dialogs
  o.messages
  o.chats
  o.users
}

function _messagesDialogsNotModified(s: ByteStream, o: any) {
  i32(s, 0xf0e3e596);
  i32(s, o.count);
}

function _messagesMessages(s: ByteStream, o: any) {
  i32(s, 0x8c718e87);
  o.messages
  o.chats
  o.users
}

function _messagesMessagesSlice(s: ByteStream, o: any) {
  i32(s, 0xc8edce1e);
  const flags = +o.inexact << 1 | +!!o.next_rate;
  i32(s, flags);
  if (o.inexact !== undefined) o.inexact
  i32(s, o.count);
  if (o.next_rate !== undefined) o.next_rate
  o.messages
  o.chats
  o.users
}

function _messagesChannelMessages(s: ByteStream, o: any) {
  i32(s, 0x99262e37);
  const flags = +o.inexact << 1;
  i32(s, flags);
  if (o.inexact !== undefined) o.inexact
  i32(s, o.pts);
  i32(s, o.count);
  o.messages
  o.chats
  o.users
}

function _messagesMessagesNotModified(s: ByteStream, o: any) {
  i32(s, 0x74535f21);
  i32(s, o.count);
}

function _messagesChats(s: ByteStream, o: any) {
  i32(s, 0x64ff9fd5);
  o.chats
}

function _messagesChatsSlice(s: ByteStream, o: any) {
  i32(s, 0x9cd81144);
  i32(s, o.count);
  o.chats
}

function _messagesChatFull(s: ByteStream, o: any) {
  i32(s, 0xe5d7d19c);
  o.full_chat
  o.chats
  o.users
}

function _messagesAffectedHistory(s: ByteStream, o: any) {
  i32(s, 0xb45c69d1);
  i32(s, o.pts);
  i32(s, o.pts_count);
  i32(s, o.offset);
}

function _inputMessagesFilterEmpty(s: ByteStream, o: any) {
  i32(s, 0x57e2f66c);
}

function _inputMessagesFilterPhotos(s: ByteStream, o: any) {
  i32(s, 0x9609a51c);
}

function _inputMessagesFilterVideo(s: ByteStream, o: any) {
  i32(s, 0x9fc00e65);
}

function _inputMessagesFilterPhotoVideo(s: ByteStream, o: any) {
  i32(s, 0x56e9f0e4);
}

function _inputMessagesFilterDocument(s: ByteStream, o: any) {
  i32(s, 0x9eddf188);
}

function _inputMessagesFilterUrl(s: ByteStream, o: any) {
  i32(s, 0x7ef0dd87);
}

function _inputMessagesFilterGif(s: ByteStream, o: any) {
  i32(s, 0xffc86587);
}

function _inputMessagesFilterVoice(s: ByteStream, o: any) {
  i32(s, 0x50f5c392);
}

function _inputMessagesFilterMusic(s: ByteStream, o: any) {
  i32(s, 0x3751b49e);
}

function _inputMessagesFilterChatPhotos(s: ByteStream, o: any) {
  i32(s, 0x3a20ecb8);
}

function _inputMessagesFilterPhoneCalls(s: ByteStream, o: any) {
  i32(s, 0x80c99768);
  const flags = +o.missed;
  i32(s, flags);
  if (o.missed !== undefined) o.missed
}

function _inputMessagesFilterRoundVoice(s: ByteStream, o: any) {
  i32(s, 0x7a7c17a4);
}

function _inputMessagesFilterRoundVideo(s: ByteStream, o: any) {
  i32(s, 0xb549da53);
}

function _inputMessagesFilterMyMentions(s: ByteStream, o: any) {
  i32(s, 0xc1f8e69a);
}

function _inputMessagesFilterGeo(s: ByteStream, o: any) {
  i32(s, 0xe7026d0d);
}

function _inputMessagesFilterContacts(s: ByteStream, o: any) {
  i32(s, 0xe062db83);
}

function _updateNewMessage(s: ByteStream, o: any) {
  i32(s, 0x1f2b0afd);
  o.message
  i32(s, o.pts);
  i32(s, o.pts_count);
}

function _updateMessageID(s: ByteStream, o: any) {
  i32(s, 0x4e90bfd6);
  i32(s, o.id);
  o.random_id
}

function _updateDeleteMessages(s: ByteStream, o: any) {
  i32(s, 0xa20db0e5);
  o.messages
  i32(s, o.pts);
  i32(s, o.pts_count);
}

function _updateUserTyping(s: ByteStream, o: any) {
  i32(s, 0x5c486927);
  i32(s, o.user_id);
  o.action
}

function _updateChatUserTyping(s: ByteStream, o: any) {
  i32(s, 0x9a65ea1f);
  i32(s, o.chat_id);
  i32(s, o.user_id);
  o.action
}

function _updateChatParticipants(s: ByteStream, o: any) {
  i32(s, 0x7761198);
  o.participants
}

function _updateUserStatus(s: ByteStream, o: any) {
  i32(s, 0x1bfbd823);
  i32(s, o.user_id);
  o.status
}

function _updateUserName(s: ByteStream, o: any) {
  i32(s, 0xa7332b73);
  i32(s, o.user_id);
  o.first_name
  o.last_name
  o.username
}

function _updateUserPhoto(s: ByteStream, o: any) {
  i32(s, 0x95313b0c);
  i32(s, o.user_id);
  i32(s, o.date);
  o.photo
  o.previous
}

function _updateNewEncryptedMessage(s: ByteStream, o: any) {
  i32(s, 0x12bcbd9a);
  o.message
  i32(s, o.qts);
}

function _updateEncryptedChatTyping(s: ByteStream, o: any) {
  i32(s, 0x1710f156);
  i32(s, o.chat_id);
}

function _updateEncryption(s: ByteStream, o: any) {
  i32(s, 0xb4a2e88d);
  o.chat
  i32(s, o.date);
}

function _updateEncryptedMessagesRead(s: ByteStream, o: any) {
  i32(s, 0x38fe25b7);
  i32(s, o.chat_id);
  i32(s, o.max_date);
  i32(s, o.date);
}

function _updateChatParticipantAdd(s: ByteStream, o: any) {
  i32(s, 0xea4b0e5c);
  i32(s, o.chat_id);
  i32(s, o.user_id);
  i32(s, o.inviter_id);
  i32(s, o.date);
  i32(s, o.version);
}

function _updateChatParticipantDelete(s: ByteStream, o: any) {
  i32(s, 0x6e5f8c22);
  i32(s, o.chat_id);
  i32(s, o.user_id);
  i32(s, o.version);
}

function _updateDcOptions(s: ByteStream, o: any) {
  i32(s, 0x8e5e9873);
  o.dc_options
}

function _updateUserBlocked(s: ByteStream, o: any) {
  i32(s, 0x80ece81a);
  i32(s, o.user_id);
  o.blocked
}

function _updateNotifySettings(s: ByteStream, o: any) {
  i32(s, 0xbec268ef);
  o.peer
  o.notify_settings
}

function _updateServiceNotification(s: ByteStream, o: any) {
  i32(s, 0xebe46819);
  const flags = +o.popup | +!!o.inbox_date << 1;
  i32(s, flags);
  if (o.popup !== undefined) o.popup
  if (o.inbox_date !== undefined) o.inbox_date
  o.type
  o.message
  o.media
  o.entities
}

function _updatePrivacy(s: ByteStream, o: any) {
  i32(s, 0xee3b272a);
  o.key
  o.rules
}

function _updateUserPhone(s: ByteStream, o: any) {
  i32(s, 0x12b9417b);
  i32(s, o.user_id);
  o.phone
}

function _updateReadHistoryInbox(s: ByteStream, o: any) {
  i32(s, 0x9c974fdf);
  const flags = +!!o.folder_id;
  i32(s, flags);
  if (o.folder_id !== undefined) o.folder_id
  o.peer
  i32(s, o.max_id);
  i32(s, o.still_unread_count);
  i32(s, o.pts);
  i32(s, o.pts_count);
}

function _updateReadHistoryOutbox(s: ByteStream, o: any) {
  i32(s, 0x2f2f21bf);
  o.peer
  i32(s, o.max_id);
  i32(s, o.pts);
  i32(s, o.pts_count);
}

function _updateWebPage(s: ByteStream, o: any) {
  i32(s, 0x7f891213);
  o.webpage
  i32(s, o.pts);
  i32(s, o.pts_count);
}

function _updateReadMessagesContents(s: ByteStream, o: any) {
  i32(s, 0x68c13933);
  o.messages
  i32(s, o.pts);
  i32(s, o.pts_count);
}

function _updateChannelTooLong(s: ByteStream, o: any) {
  i32(s, 0xeb0467fb);
  const flags = +!!o.pts;
  i32(s, flags);
  i32(s, o.channel_id);
  if (o.pts !== undefined) o.pts
}

function _updateChannel(s: ByteStream, o: any) {
  i32(s, 0xb6d45656);
  i32(s, o.channel_id);
}

function _updateNewChannelMessage(s: ByteStream, o: any) {
  i32(s, 0x62ba04d9);
  o.message
  i32(s, o.pts);
  i32(s, o.pts_count);
}

function _updateReadChannelInbox(s: ByteStream, o: any) {
  i32(s, 0x330b5424);
  const flags = +!!o.folder_id;
  i32(s, flags);
  if (o.folder_id !== undefined) o.folder_id
  i32(s, o.channel_id);
  i32(s, o.max_id);
  i32(s, o.still_unread_count);
  i32(s, o.pts);
}

function _updateDeleteChannelMessages(s: ByteStream, o: any) {
  i32(s, 0xc37521c9);
  i32(s, o.channel_id);
  o.messages
  i32(s, o.pts);
  i32(s, o.pts_count);
}

function _updateChannelMessageViews(s: ByteStream, o: any) {
  i32(s, 0x98a12b4b);
  i32(s, o.channel_id);
  i32(s, o.id);
  i32(s, o.views);
}

function _updateChatParticipantAdmin(s: ByteStream, o: any) {
  i32(s, 0xb6901959);
  i32(s, o.chat_id);
  i32(s, o.user_id);
  o.is_admin
  i32(s, o.version);
}

function _updateNewStickerSet(s: ByteStream, o: any) {
  i32(s, 0x688a30aa);
  o.stickerset
}

function _updateStickerSetsOrder(s: ByteStream, o: any) {
  i32(s, 0xbb2d201);
  const flags = +o.masks;
  i32(s, flags);
  if (o.masks !== undefined) o.masks
  o.order
}

function _updateStickerSets(s: ByteStream, o: any) {
  i32(s, 0x43ae3dec);
}

function _updateSavedGifs(s: ByteStream, o: any) {
  i32(s, 0x9375341e);
}

function _updateBotInlineQuery(s: ByteStream, o: any) {
  i32(s, 0x54826690);
  const flags = +!!o.geo;
  i32(s, flags);
  o.query_id
  i32(s, o.user_id);
  o.query
  if (o.geo !== undefined) o.geo
  o.offset
}

function _updateBotInlineSend(s: ByteStream, o: any) {
  i32(s, 0xe48f964);
  const flags = +!!o.geo | +!!o.msg_id << 1;
  i32(s, flags);
  i32(s, o.user_id);
  o.query
  if (o.geo !== undefined) o.geo
  o.id
  if (o.msg_id !== undefined) o.msg_id
}

function _updateEditChannelMessage(s: ByteStream, o: any) {
  i32(s, 0x1b3f4df7);
  o.message
  i32(s, o.pts);
  i32(s, o.pts_count);
}

function _updateChannelPinnedMessage(s: ByteStream, o: any) {
  i32(s, 0x98592475);
  i32(s, o.channel_id);
  i32(s, o.id);
}

function _updateBotCallbackQuery(s: ByteStream, o: any) {
  i32(s, 0xe73547e1);
  const flags = +!!o.data | +!!o.game_short_name << 1;
  i32(s, flags);
  o.query_id
  i32(s, o.user_id);
  o.peer
  i32(s, o.msg_id);
  o.chat_instance
  if (o.data !== undefined) o.data
  if (o.game_short_name !== undefined) o.game_short_name
}

function _updateEditMessage(s: ByteStream, o: any) {
  i32(s, 0xe40370a3);
  o.message
  i32(s, o.pts);
  i32(s, o.pts_count);
}

function _updateInlineBotCallbackQuery(s: ByteStream, o: any) {
  i32(s, 0xf9d27a5a);
  const flags = +!!o.data | +!!o.game_short_name << 1;
  i32(s, flags);
  o.query_id
  i32(s, o.user_id);
  o.msg_id
  o.chat_instance
  if (o.data !== undefined) o.data
  if (o.game_short_name !== undefined) o.game_short_name
}

function _updateReadChannelOutbox(s: ByteStream, o: any) {
  i32(s, 0x25d6c9c7);
  i32(s, o.channel_id);
  i32(s, o.max_id);
}

function _updateDraftMessage(s: ByteStream, o: any) {
  i32(s, 0xee2bb969);
  o.peer
  o.draft
}

function _updateReadFeaturedStickers(s: ByteStream, o: any) {
  i32(s, 0x571d2742);
}

function _updateRecentStickers(s: ByteStream, o: any) {
  i32(s, 0x9a422c20);
}

function _updateConfig(s: ByteStream, o: any) {
  i32(s, 0xa229dd06);
}

function _updatePtsChanged(s: ByteStream, o: any) {
  i32(s, 0x3354678f);
}

function _updateChannelWebPage(s: ByteStream, o: any) {
  i32(s, 0x40771900);
  i32(s, o.channel_id);
  o.webpage
  i32(s, o.pts);
  i32(s, o.pts_count);
}

function _updateDialogPinned(s: ByteStream, o: any) {
  i32(s, 0x6e6fe51c);
  const flags = +o.pinned | +!!o.folder_id << 1;
  i32(s, flags);
  if (o.pinned !== undefined) o.pinned
  if (o.folder_id !== undefined) o.folder_id
  o.peer
}

function _updatePinnedDialogs(s: ByteStream, o: any) {
  i32(s, 0xfa0f3ca2);
  const flags = +!!o.folder_id << 1 | +!!o.order;
  i32(s, flags);
  if (o.folder_id !== undefined) o.folder_id
  if (o.order !== undefined) o.order
}

function _updateBotWebhookJSON(s: ByteStream, o: any) {
  i32(s, 0x8317c0c3);
  o.data
}

function _updateBotWebhookJSONQuery(s: ByteStream, o: any) {
  i32(s, 0x9b9240a6);
  o.query_id
  o.data
  i32(s, o.timeout);
}

function _updateBotShippingQuery(s: ByteStream, o: any) {
  i32(s, 0xe0cdc940);
  o.query_id
  i32(s, o.user_id);
  o.payload
  o.shipping_address
}

function _updateBotPrecheckoutQuery(s: ByteStream, o: any) {
  i32(s, 0x5d2f3aa9);
  const flags = +!!o.info | +!!o.shipping_option_id << 1;
  i32(s, flags);
  o.query_id
  i32(s, o.user_id);
  o.payload
  if (o.info !== undefined) o.info
  if (o.shipping_option_id !== undefined) o.shipping_option_id
  o.currency
  o.total_amount
}

function _updatePhoneCall(s: ByteStream, o: any) {
  i32(s, 0xab0f6b1e);
  o.phone_call
}

function _updateLangPackTooLong(s: ByteStream, o: any) {
  i32(s, 0x46560264);
  o.lang_code
}

function _updateLangPack(s: ByteStream, o: any) {
  i32(s, 0x56022f4d);
  o.difference
}

function _updateFavedStickers(s: ByteStream, o: any) {
  i32(s, 0xe511996d);
}

function _updateChannelReadMessagesContents(s: ByteStream, o: any) {
  i32(s, 0x89893b45);
  i32(s, o.channel_id);
  o.messages
}

function _updateContactsReset(s: ByteStream, o: any) {
  i32(s, 0x7084a7be);
}

function _updateChannelAvailableMessages(s: ByteStream, o: any) {
  i32(s, 0x70db6837);
  i32(s, o.channel_id);
  i32(s, o.available_min_id);
}

function _updateDialogUnreadMark(s: ByteStream, o: any) {
  i32(s, 0xe16459c3);
  const flags = +o.unread;
  i32(s, flags);
  if (o.unread !== undefined) o.unread
  o.peer
}

function _updateUserPinnedMessage(s: ByteStream, o: any) {
  i32(s, 0x4c43da18);
  i32(s, o.user_id);
  i32(s, o.id);
}

function _updateChatPinnedMessage(s: ByteStream, o: any) {
  i32(s, 0xe10db349);
  i32(s, o.chat_id);
  i32(s, o.id);
  i32(s, o.version);
}

function _updateMessagePoll(s: ByteStream, o: any) {
  i32(s, 0xaca1657b);
  const flags = +!!o.poll;
  i32(s, flags);
  o.poll_id
  if (o.poll !== undefined) o.poll
  o.results
}

function _updateChatDefaultBannedRights(s: ByteStream, o: any) {
  i32(s, 0x54c01850);
  o.peer
  o.default_banned_rights
  i32(s, o.version);
}

function _updateFolderPeers(s: ByteStream, o: any) {
  i32(s, 0x19360dc0);
  o.folder_peers
  i32(s, o.pts);
  i32(s, o.pts_count);
}

function _updatePeerSettings(s: ByteStream, o: any) {
  i32(s, 0x6a7e7366);
  o.peer
  o.settings
}

function _updatePeerLocated(s: ByteStream, o: any) {
  i32(s, 0xb4afcfb0);
  o.peers
}

function _updateNewScheduledMessage(s: ByteStream, o: any) {
  i32(s, 0x39a51dfb);
  o.message
}

function _updateDeleteScheduledMessages(s: ByteStream, o: any) {
  i32(s, 0x90866cee);
  o.peer
  o.messages
}

function _updateTheme(s: ByteStream, o: any) {
  i32(s, 0x8216fba3);
  o.theme
}

function _updatesState(s: ByteStream, o: any) {
  i32(s, 0xa56c2a3e);
  i32(s, o.pts);
  i32(s, o.qts);
  i32(s, o.date);
  i32(s, o.seq);
  i32(s, o.unread_count);
}

function _updatesDifferenceEmpty(s: ByteStream, o: any) {
  i32(s, 0x5d75a138);
  i32(s, o.date);
  i32(s, o.seq);
}

function _updatesDifference(s: ByteStream, o: any) {
  i32(s, 0xf49ca0);
  o.new_messages
  o.new_encrypted_messages
  o.other_updates
  o.chats
  o.users
  o.state
}

function _updatesDifferenceSlice(s: ByteStream, o: any) {
  i32(s, 0xa8fb1981);
  o.new_messages
  o.new_encrypted_messages
  o.other_updates
  o.chats
  o.users
  o.intermediate_state
}

function _updatesDifferenceTooLong(s: ByteStream, o: any) {
  i32(s, 0x4afe8f6d);
  i32(s, o.pts);
}

function _updatesTooLong(s: ByteStream, o: any) {
  i32(s, 0xe317af7e);
}

function _updateShortMessage(s: ByteStream, o: any) {
  i32(s, 0x914fbf11);
  const flags = +o.out << 1 | +o.mentioned << 4 | +o.media_unread << 5 | +o.silent << 13 | +!!o.fwd_from << 2 | +!!o.via_bot_id << 11 | +!!o.reply_to_msg_id << 3 | +!!o.entities << 7;
  i32(s, flags);
  if (o.out !== undefined) o.out
  if (o.mentioned !== undefined) o.mentioned
  if (o.media_unread !== undefined) o.media_unread
  if (o.silent !== undefined) o.silent
  i32(s, o.id);
  i32(s, o.user_id);
  o.message
  i32(s, o.pts);
  i32(s, o.pts_count);
  i32(s, o.date);
  if (o.fwd_from !== undefined) o.fwd_from
  if (o.via_bot_id !== undefined) o.via_bot_id
  if (o.reply_to_msg_id !== undefined) o.reply_to_msg_id
  if (o.entities !== undefined) o.entities
}

function _updateShortChatMessage(s: ByteStream, o: any) {
  i32(s, 0x16812688);
  const flags = +o.out << 1 | +o.mentioned << 4 | +o.media_unread << 5 | +o.silent << 13 | +!!o.fwd_from << 2 | +!!o.via_bot_id << 11 | +!!o.reply_to_msg_id << 3 | +!!o.entities << 7;
  i32(s, flags);
  if (o.out !== undefined) o.out
  if (o.mentioned !== undefined) o.mentioned
  if (o.media_unread !== undefined) o.media_unread
  if (o.silent !== undefined) o.silent
  i32(s, o.id);
  i32(s, o.from_id);
  i32(s, o.chat_id);
  o.message
  i32(s, o.pts);
  i32(s, o.pts_count);
  i32(s, o.date);
  if (o.fwd_from !== undefined) o.fwd_from
  if (o.via_bot_id !== undefined) o.via_bot_id
  if (o.reply_to_msg_id !== undefined) o.reply_to_msg_id
  if (o.entities !== undefined) o.entities
}

function _updateShort(s: ByteStream, o: any) {
  i32(s, 0x78d4dec1);
  o.update
  i32(s, o.date);
}

function _updatesCombined(s: ByteStream, o: any) {
  i32(s, 0x725b04c3);
  o.updates
  o.users
  o.chats
  i32(s, o.date);
  i32(s, o.seq_start);
  i32(s, o.seq);
}

function _updates(s: ByteStream, o: any) {
  i32(s, 0x74ae4240);
  o.updates
  o.users
  o.chats
  i32(s, o.date);
  i32(s, o.seq);
}

function _updateShortSentMessage(s: ByteStream, o: any) {
  i32(s, 0x11f1331c);
  const flags = +o.out << 1 | +!!o.media << 9 | +!!o.entities << 7;
  i32(s, flags);
  if (o.out !== undefined) o.out
  i32(s, o.id);
  i32(s, o.pts);
  i32(s, o.pts_count);
  i32(s, o.date);
  if (o.media !== undefined) o.media
  if (o.entities !== undefined) o.entities
}

function _photosPhotos(s: ByteStream, o: any) {
  i32(s, 0x8dca6aa5);
  o.photos
  o.users
}

function _photosPhotosSlice(s: ByteStream, o: any) {
  i32(s, 0x15051f54);
  i32(s, o.count);
  o.photos
  o.users
}

function _photosPhoto(s: ByteStream, o: any) {
  i32(s, 0x20212ca8);
  o.photo
  o.users
}

function _uploadFile(s: ByteStream, o: any) {
  i32(s, 0x96a18d5);
  o.type
  i32(s, o.mtime);
  o.bytes
}

function _uploadFileCdnRedirect(s: ByteStream, o: any) {
  i32(s, 0xf18cda44);
  i32(s, o.dc_id);
  o.file_token
  o.encryption_key
  o.encryption_iv
  o.file_hashes
}

function _dcOption(s: ByteStream, o: any) {
  i32(s, 0x18b7a10d);
  const flags = +o.ipv6 | +o.media_only << 1 | +o.tcpo_only << 2 | +o.cdn << 3 | +o.static << 4 | +!!o.secret << 10;
  i32(s, flags);
  if (o.ipv6 !== undefined) o.ipv6
  if (o.media_only !== undefined) o.media_only
  if (o.tcpo_only !== undefined) o.tcpo_only
  if (o.cdn !== undefined) o.cdn
  if (o.static !== undefined) o.static
  i32(s, o.id);
  o.ip_address
  i32(s, o.port);
  if (o.secret !== undefined) o.secret
}

function _config(s: ByteStream, o: any) {
  i32(s, 0x330b4067);
  const flags = +o.phonecalls_enabled << 1 | +o.default_p2p_contacts << 3 | +o.preload_featured_stickers << 4 | +o.ignore_phone_entities << 5 | +o.revoke_pm_inbox << 6 | +o.blocked_mode << 8 | +o.pfs_enabled << 13 | +!!o.tmp_sessions | +!!o.autoupdate_url_prefix << 7 | +!!o.gif_search_username << 9 | +!!o.venue_search_username << 10 | +!!o.img_search_username << 11 | +!!o.static_maps_provider << 12 | +!!o.suggested_lang_code << 2 | +!!o.lang_pack_version << 2 | +!!o.base_lang_pack_version << 2;
  i32(s, flags);
  if (o.phonecalls_enabled !== undefined) o.phonecalls_enabled
  if (o.default_p2p_contacts !== undefined) o.default_p2p_contacts
  if (o.preload_featured_stickers !== undefined) o.preload_featured_stickers
  if (o.ignore_phone_entities !== undefined) o.ignore_phone_entities
  if (o.revoke_pm_inbox !== undefined) o.revoke_pm_inbox
  if (o.blocked_mode !== undefined) o.blocked_mode
  if (o.pfs_enabled !== undefined) o.pfs_enabled
  i32(s, o.date);
  i32(s, o.expires);
  o.test_mode
  i32(s, o.this_dc);
  o.dc_options
  o.dc_txt_domain_name
  i32(s, o.chat_size_max);
  i32(s, o.megagroup_size_max);
  i32(s, o.forwarded_count_max);
  i32(s, o.online_update_period_ms);
  i32(s, o.offline_blur_timeout_ms);
  i32(s, o.offline_idle_timeout_ms);
  i32(s, o.online_cloud_timeout_ms);
  i32(s, o.notify_cloud_delay_ms);
  i32(s, o.notify_default_delay_ms);
  i32(s, o.push_chat_period_ms);
  i32(s, o.push_chat_limit);
  i32(s, o.saved_gifs_limit);
  i32(s, o.edit_time_limit);
  i32(s, o.revoke_time_limit);
  i32(s, o.revoke_pm_time_limit);
  i32(s, o.rating_e_decay);
  i32(s, o.stickers_recent_limit);
  i32(s, o.stickers_faved_limit);
  i32(s, o.channels_read_media_period);
  if (o.tmp_sessions !== undefined) o.tmp_sessions
  i32(s, o.pinned_dialogs_count_max);
  i32(s, o.pinned_infolder_count_max);
  i32(s, o.call_receive_timeout_ms);
  i32(s, o.call_ring_timeout_ms);
  i32(s, o.call_connect_timeout_ms);
  i32(s, o.call_packet_timeout_ms);
  o.me_url_prefix
  if (o.autoupdate_url_prefix !== undefined) o.autoupdate_url_prefix
  if (o.gif_search_username !== undefined) o.gif_search_username
  if (o.venue_search_username !== undefined) o.venue_search_username
  if (o.img_search_username !== undefined) o.img_search_username
  if (o.static_maps_provider !== undefined) o.static_maps_provider
  i32(s, o.caption_length_max);
  i32(s, o.message_length_max);
  i32(s, o.webfile_dc_id);
  if (o.suggested_lang_code !== undefined) o.suggested_lang_code
  if (o.lang_pack_version !== undefined) o.lang_pack_version
  if (o.base_lang_pack_version !== undefined) o.base_lang_pack_version
}

function _nearestDc(s: ByteStream, o: any) {
  i32(s, 0x8e1a1775);
  o.country
  i32(s, o.this_dc);
  i32(s, o.nearest_dc);
}

function _helpAppUpdate(s: ByteStream, o: any) {
  i32(s, 0x1da7158f);
  const flags = +o.can_not_skip | +!!o.document << 1 | +!!o.url << 2;
  i32(s, flags);
  if (o.can_not_skip !== undefined) o.can_not_skip
  i32(s, o.id);
  o.version
  o.text
  o.entities
  if (o.document !== undefined) o.document
  if (o.url !== undefined) o.url
}

function _helpNoAppUpdate(s: ByteStream, o: any) {
  i32(s, 0xc45a6536);
}

function _helpInviteText(s: ByteStream, o: any) {
  i32(s, 0x18cb9f78);
  o.message
}

function _encryptedChatEmpty(s: ByteStream, o: any) {
  i32(s, 0xab7ec0a0);
  i32(s, o.id);
}

function _encryptedChatWaiting(s: ByteStream, o: any) {
  i32(s, 0x3bf703dc);
  i32(s, o.id);
  o.access_hash
  i32(s, o.date);
  i32(s, o.admin_id);
  i32(s, o.participant_id);
}

function _encryptedChatRequested(s: ByteStream, o: any) {
  i32(s, 0xc878527e);
  i32(s, o.id);
  o.access_hash
  i32(s, o.date);
  i32(s, o.admin_id);
  i32(s, o.participant_id);
  o.g_a
}

function _encryptedChat(s: ByteStream, o: any) {
  i32(s, 0xfa56ce36);
  i32(s, o.id);
  o.access_hash
  i32(s, o.date);
  i32(s, o.admin_id);
  i32(s, o.participant_id);
  o.g_a_or_b
  o.key_fingerprint
}

function _encryptedChatDiscarded(s: ByteStream, o: any) {
  i32(s, 0x13d6dd27);
  i32(s, o.id);
}

function _inputEncryptedChat(s: ByteStream, o: any) {
  i32(s, 0xf141b5e1);
  i32(s, o.chat_id);
  o.access_hash
}

function _encryptedFileEmpty(s: ByteStream, o: any) {
  i32(s, 0xc21f497e);
}

function _encryptedFile(s: ByteStream, o: any) {
  i32(s, 0x4a70994c);
  o.id
  o.access_hash
  i32(s, o.size);
  i32(s, o.dc_id);
  i32(s, o.key_fingerprint);
}

function _inputEncryptedFileEmpty(s: ByteStream, o: any) {
  i32(s, 0x1837c364);
}

function _inputEncryptedFileUploaded(s: ByteStream, o: any) {
  i32(s, 0x64bd0306);
  o.id
  i32(s, o.parts);
  o.md5_checksum
  i32(s, o.key_fingerprint);
}

function _inputEncryptedFile(s: ByteStream, o: any) {
  i32(s, 0x5a17b5e5);
  o.id
  o.access_hash
}

function _inputEncryptedFileBigUploaded(s: ByteStream, o: any) {
  i32(s, 0x2dc173c8);
  o.id
  i32(s, o.parts);
  i32(s, o.key_fingerprint);
}

function _encryptedMessage(s: ByteStream, o: any) {
  i32(s, 0xed18c118);
  o.random_id
  i32(s, o.chat_id);
  i32(s, o.date);
  o.bytes
  o.file
}

function _encryptedMessageService(s: ByteStream, o: any) {
  i32(s, 0x23734b06);
  o.random_id
  i32(s, o.chat_id);
  i32(s, o.date);
  o.bytes
}

function _messagesDhConfigNotModified(s: ByteStream, o: any) {
  i32(s, 0xc0e24635);
  o.random
}

function _messagesDhConfig(s: ByteStream, o: any) {
  i32(s, 0x2c221edd);
  i32(s, o.g);
  o.p
  i32(s, o.version);
  o.random
}

function _messagesSentEncryptedMessage(s: ByteStream, o: any) {
  i32(s, 0x560f8935);
  i32(s, o.date);
}

function _messagesSentEncryptedFile(s: ByteStream, o: any) {
  i32(s, 0x9493ff32);
  i32(s, o.date);
  o.file
}

function _inputDocumentEmpty(s: ByteStream, o: any) {
  i32(s, 0x72f0eaae);
}

function _inputDocument(s: ByteStream, o: any) {
  i32(s, 0x1abfb575);
  o.id
  o.access_hash
  o.file_reference
}

function _documentEmpty(s: ByteStream, o: any) {
  i32(s, 0x36f8c871);
  o.id
}

function _document(s: ByteStream, o: any) {
  i32(s, 0x9ba29cc1);
  const flags = +!!o.thumbs;
  i32(s, flags);
  o.id
  o.access_hash
  o.file_reference
  i32(s, o.date);
  o.mime_type
  i32(s, o.size);
  if (o.thumbs !== undefined) o.thumbs
  i32(s, o.dc_id);
  o.attributes
}

function _helpSupport(s: ByteStream, o: any) {
  i32(s, 0x17c6b5f6);
  o.phone_number
  o.user
}

function _notifyPeer(s: ByteStream, o: any) {
  i32(s, 0x9fd40bd8);
  o.peer
}

function _notifyUsers(s: ByteStream, o: any) {
  i32(s, 0xb4c83b4c);
}

function _notifyChats(s: ByteStream, o: any) {
  i32(s, 0xc007cec3);
}

function _notifyBroadcasts(s: ByteStream, o: any) {
  i32(s, 0xd612e8ef);
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
  i32(s, 0xe9763aec);
  i32(s, o.progress);
}

function _sendMessageRecordAudioAction(s: ByteStream, o: any) {
  i32(s, 0xd52f73f7);
}

function _sendMessageUploadAudioAction(s: ByteStream, o: any) {
  i32(s, 0xf351d7ab);
  i32(s, o.progress);
}

function _sendMessageUploadPhotoAction(s: ByteStream, o: any) {
  i32(s, 0xd1d34a26);
  i32(s, o.progress);
}

function _sendMessageUploadDocumentAction(s: ByteStream, o: any) {
  i32(s, 0xaa0cd9e4);
  i32(s, o.progress);
}

function _sendMessageGeoLocationAction(s: ByteStream, o: any) {
  i32(s, 0x176f8ba1);
}

function _sendMessageChooseContactAction(s: ByteStream, o: any) {
  i32(s, 0x628cbc6f);
}

function _sendMessageGamePlayAction(s: ByteStream, o: any) {
  i32(s, 0xdd6a8f48);
}

function _sendMessageRecordRoundAction(s: ByteStream, o: any) {
  i32(s, 0x88f27fbc);
}

function _sendMessageUploadRoundAction(s: ByteStream, o: any) {
  i32(s, 0x243e1c66);
  i32(s, o.progress);
}

function _contactsFound(s: ByteStream, o: any) {
  i32(s, 0xb3134d9d);
  o.my_results
  o.results
  o.chats
  o.users
}

function _inputPrivacyKeyStatusTimestamp(s: ByteStream, o: any) {
  i32(s, 0x4f96cb18);
}

function _inputPrivacyKeyChatInvite(s: ByteStream, o: any) {
  i32(s, 0xbdfb0426);
}

function _inputPrivacyKeyPhoneCall(s: ByteStream, o: any) {
  i32(s, 0xfabadc5f);
}

function _inputPrivacyKeyPhoneP2P(s: ByteStream, o: any) {
  i32(s, 0xdb9e70d2);
}

function _inputPrivacyKeyForwards(s: ByteStream, o: any) {
  i32(s, 0xa4dd4c08);
}

function _inputPrivacyKeyProfilePhoto(s: ByteStream, o: any) {
  i32(s, 0x5719bacc);
}

function _inputPrivacyKeyPhoneNumber(s: ByteStream, o: any) {
  i32(s, 0x352dafa);
}

function _inputPrivacyKeyAddedByPhone(s: ByteStream, o: any) {
  i32(s, 0xd1219bdd);
}

function _privacyKeyStatusTimestamp(s: ByteStream, o: any) {
  i32(s, 0xbc2eab30);
}

function _privacyKeyChatInvite(s: ByteStream, o: any) {
  i32(s, 0x500e6dfa);
}

function _privacyKeyPhoneCall(s: ByteStream, o: any) {
  i32(s, 0x3d662b7b);
}

function _privacyKeyPhoneP2P(s: ByteStream, o: any) {
  i32(s, 0x39491cc8);
}

function _privacyKeyForwards(s: ByteStream, o: any) {
  i32(s, 0x69ec56a3);
}

function _privacyKeyProfilePhoto(s: ByteStream, o: any) {
  i32(s, 0x96151fed);
}

function _privacyKeyPhoneNumber(s: ByteStream, o: any) {
  i32(s, 0xd19ae46d);
}

function _privacyKeyAddedByPhone(s: ByteStream, o: any) {
  i32(s, 0x42ffd42b);
}

function _inputPrivacyValueAllowContacts(s: ByteStream, o: any) {
  i32(s, 0xd09e07b);
}

function _inputPrivacyValueAllowAll(s: ByteStream, o: any) {
  i32(s, 0x184b35ce);
}

function _inputPrivacyValueAllowUsers(s: ByteStream, o: any) {
  i32(s, 0x131cc67f);
  o.users
}

function _inputPrivacyValueDisallowContacts(s: ByteStream, o: any) {
  i32(s, 0xba52007);
}

function _inputPrivacyValueDisallowAll(s: ByteStream, o: any) {
  i32(s, 0xd66b66c9);
}

function _inputPrivacyValueDisallowUsers(s: ByteStream, o: any) {
  i32(s, 0x90110467);
  o.users
}

function _inputPrivacyValueAllowChatParticipants(s: ByteStream, o: any) {
  i32(s, 0x4c81c1ba);
  o.chats
}

function _inputPrivacyValueDisallowChatParticipants(s: ByteStream, o: any) {
  i32(s, 0xd82363af);
  o.chats
}

function _privacyValueAllowContacts(s: ByteStream, o: any) {
  i32(s, 0xfffe1bac);
}

function _privacyValueAllowAll(s: ByteStream, o: any) {
  i32(s, 0x65427b82);
}

function _privacyValueAllowUsers(s: ByteStream, o: any) {
  i32(s, 0x4d5bbe0c);
  o.users
}

function _privacyValueDisallowContacts(s: ByteStream, o: any) {
  i32(s, 0xf888fa1a);
}

function _privacyValueDisallowAll(s: ByteStream, o: any) {
  i32(s, 0x8b73e763);
}

function _privacyValueDisallowUsers(s: ByteStream, o: any) {
  i32(s, 0xc7f49b7);
  o.users
}

function _privacyValueAllowChatParticipants(s: ByteStream, o: any) {
  i32(s, 0x18be796b);
  o.chats
}

function _privacyValueDisallowChatParticipants(s: ByteStream, o: any) {
  i32(s, 0xacae0690);
  o.chats
}

function _accountPrivacyRules(s: ByteStream, o: any) {
  i32(s, 0x50a04e45);
  o.rules
  o.chats
  o.users
}

function _accountDaysTTL(s: ByteStream, o: any) {
  i32(s, 0xb8d0afdf);
  i32(s, o.days);
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
  i32(s, 0x6319d612);
  const flags = +o.mask << 1 | +!!o.mask_coords;
  i32(s, flags);
  if (o.mask !== undefined) o.mask
  o.alt
  o.stickerset
  if (o.mask_coords !== undefined) o.mask_coords
}

function _documentAttributeVideo(s: ByteStream, o: any) {
  i32(s, 0xef02ce6);
  const flags = +o.round_message | +o.supports_streaming << 1;
  i32(s, flags);
  if (o.round_message !== undefined) o.round_message
  if (o.supports_streaming !== undefined) o.supports_streaming
  i32(s, o.duration);
  i32(s, o.w);
  i32(s, o.h);
}

function _documentAttributeAudio(s: ByteStream, o: any) {
  i32(s, 0x9852f9c6);
  const flags = +o.voice << 10 | +!!o.title | +!!o.performer << 1 | +!!o.waveform << 2;
  i32(s, flags);
  if (o.voice !== undefined) o.voice
  i32(s, o.duration);
  if (o.title !== undefined) o.title
  if (o.performer !== undefined) o.performer
  if (o.waveform !== undefined) o.waveform
}

function _documentAttributeFilename(s: ByteStream, o: any) {
  i32(s, 0x15590068);
  o.file_name
}

function _documentAttributeHasStickers(s: ByteStream, o: any) {
  i32(s, 0x9801d2f7);
}

function _messagesStickersNotModified(s: ByteStream, o: any) {
  i32(s, 0xf1749a22);
}

function _messagesStickers(s: ByteStream, o: any) {
  i32(s, 0xe4599bbd);
  i32(s, o.hash);
  o.stickers
}

function _stickerPack(s: ByteStream, o: any) {
  i32(s, 0x12b299d4);
  o.emoticon
  o.documents
}

function _messagesAllStickersNotModified(s: ByteStream, o: any) {
  i32(s, 0xe86602c3);
}

function _messagesAllStickers(s: ByteStream, o: any) {
  i32(s, 0xedfd405f);
  i32(s, o.hash);
  o.sets
}

function _messagesAffectedMessages(s: ByteStream, o: any) {
  i32(s, 0x84d19185);
  i32(s, o.pts);
  i32(s, o.pts_count);
}

function _webPageEmpty(s: ByteStream, o: any) {
  i32(s, 0xeb1477e8);
  o.id
}

function _webPagePending(s: ByteStream, o: any) {
  i32(s, 0xc586da1c);
  o.id
  i32(s, o.date);
}

function _webPage(s: ByteStream, o: any) {
  i32(s, 0xfa64e172);
  const flags = +!!o.type | +!!o.site_name << 1 | +!!o.title << 2 | +!!o.description << 3 | +!!o.photo << 4 | +!!o.embed_url << 5 | +!!o.embed_type << 5 | +!!o.embed_width << 6 | +!!o.embed_height << 6 | +!!o.duration << 7 | +!!o.author << 8 | +!!o.document << 9 | +!!o.documents << 11 | +!!o.cached_page << 10;
  i32(s, flags);
  o.id
  o.url
  o.display_url
  i32(s, o.hash);
  if (o.type !== undefined) o.type
  if (o.site_name !== undefined) o.site_name
  if (o.title !== undefined) o.title
  if (o.description !== undefined) o.description
  if (o.photo !== undefined) o.photo
  if (o.embed_url !== undefined) o.embed_url
  if (o.embed_type !== undefined) o.embed_type
  if (o.embed_width !== undefined) o.embed_width
  if (o.embed_height !== undefined) o.embed_height
  if (o.duration !== undefined) o.duration
  if (o.author !== undefined) o.author
  if (o.document !== undefined) o.document
  if (o.documents !== undefined) o.documents
  if (o.cached_page !== undefined) o.cached_page
}

function _webPageNotModified(s: ByteStream, o: any) {
  i32(s, 0x85849473);
}

function _authorization(s: ByteStream, o: any) {
  i32(s, 0xad01d61d);
  const flags = +o.current | +o.official_app << 1 | +o.password_pending << 2;
  i32(s, flags);
  if (o.current !== undefined) o.current
  if (o.official_app !== undefined) o.official_app
  if (o.password_pending !== undefined) o.password_pending
  o.hash
  o.device_model
  o.platform
  o.system_version
  i32(s, o.api_id);
  o.app_name
  o.app_version
  i32(s, o.date_created);
  i32(s, o.date_active);
  o.ip
  o.country
  o.region
}

function _accountAuthorizations(s: ByteStream, o: any) {
  i32(s, 0x1250abde);
  o.authorizations
}

function _accountPassword(s: ByteStream, o: any) {
  i32(s, 0xad2641f8);
  const flags = +o.has_recovery | +o.has_secure_values << 1 | +o.has_password << 2 | +!!o.current_algo << 2 | +!!o.srp_B << 2 | +!!o.srp_id << 2 | +!!o.hint << 3 | +!!o.email_unconfirmed_pattern << 4;
  i32(s, flags);
  if (o.has_recovery !== undefined) o.has_recovery
  if (o.has_secure_values !== undefined) o.has_secure_values
  if (o.has_password !== undefined) o.has_password
  if (o.current_algo !== undefined) o.current_algo
  if (o.srp_B !== undefined) o.srp_B
  if (o.srp_id !== undefined) o.srp_id
  if (o.hint !== undefined) o.hint
  if (o.email_unconfirmed_pattern !== undefined) o.email_unconfirmed_pattern
  o.new_algo
  o.new_secure_algo
  o.secure_random
}

function _accountPasswordSettings(s: ByteStream, o: any) {
  i32(s, 0x9a5c33e5);
  const flags = +!!o.email | +!!o.secure_settings << 1;
  i32(s, flags);
  if (o.email !== undefined) o.email
  if (o.secure_settings !== undefined) o.secure_settings
}

function _accountPasswordInputSettings(s: ByteStream, o: any) {
  i32(s, 0xc23727c9);
  const flags = +!!o.new_algo | +!!o.new_password_hash | +!!o.hint | +!!o.email << 1 | +!!o.new_secure_settings << 2;
  i32(s, flags);
  if (o.new_algo !== undefined) o.new_algo
  if (o.new_password_hash !== undefined) o.new_password_hash
  if (o.hint !== undefined) o.hint
  if (o.email !== undefined) o.email
  if (o.new_secure_settings !== undefined) o.new_secure_settings
}

function _authPasswordRecovery(s: ByteStream, o: any) {
  i32(s, 0x137948a5);
  o.email_pattern
}

function _receivedNotifyMessage(s: ByteStream, o: any) {
  i32(s, 0xa384b779);
  i32(s, o.id);
}

function _chatInviteEmpty(s: ByteStream, o: any) {
  i32(s, 0x69df3769);
}

function _chatInviteExported(s: ByteStream, o: any) {
  i32(s, 0xfc2e05bc);
  o.link
}

function _chatInviteAlready(s: ByteStream, o: any) {
  i32(s, 0x5a686d7c);
  o.chat
}

function _chatInvite(s: ByteStream, o: any) {
  i32(s, 0xdfc2f58e);
  const flags = +o.channel | +o.broadcast << 1 | +o.public << 2 | +o.megagroup << 3 | +!!o.participants << 4;
  i32(s, flags);
  if (o.channel !== undefined) o.channel
  if (o.broadcast !== undefined) o.broadcast
  if (o.public !== undefined) o.public
  if (o.megagroup !== undefined) o.megagroup
  o.title
  o.photo
  i32(s, o.participants_count);
  if (o.participants !== undefined) o.participants
}

function _inputStickerSetEmpty(s: ByteStream, o: any) {
  i32(s, 0xffb62b95);
}

function _inputStickerSetID(s: ByteStream, o: any) {
  i32(s, 0x9de7a269);
  o.id
  o.access_hash
}

function _inputStickerSetShortName(s: ByteStream, o: any) {
  i32(s, 0x861cc8a0);
  o.short_name
}

function _inputStickerSetAnimatedEmoji(s: ByteStream, o: any) {
  i32(s, 0x28703c8);
}

function _stickerSet(s: ByteStream, o: any) {
  i32(s, 0xeeb46f27);
  const flags = +o.archived << 1 | +o.official << 2 | +o.masks << 3 | +o.animated << 5 | +!!o.installed_date | +!!o.thumb << 4 | +!!o.thumb_dc_id << 4;
  i32(s, flags);
  if (o.archived !== undefined) o.archived
  if (o.official !== undefined) o.official
  if (o.masks !== undefined) o.masks
  if (o.animated !== undefined) o.animated
  if (o.installed_date !== undefined) o.installed_date
  o.id
  o.access_hash
  o.title
  o.short_name
  if (o.thumb !== undefined) o.thumb
  if (o.thumb_dc_id !== undefined) o.thumb_dc_id
  i32(s, o.count);
  i32(s, o.hash);
}

function _messagesStickerSet(s: ByteStream, o: any) {
  i32(s, 0xb60a24a6);
  o.set
  o.packs
  o.documents
}

function _botCommand(s: ByteStream, o: any) {
  i32(s, 0xc27ac8c7);
  o.command
  o.description
}

function _botInfo(s: ByteStream, o: any) {
  i32(s, 0x98e81d3a);
  i32(s, o.user_id);
  o.description
  o.commands
}

function _keyboardButton(s: ByteStream, o: any) {
  i32(s, 0xa2fa4880);
  o.text
}

function _keyboardButtonUrl(s: ByteStream, o: any) {
  i32(s, 0x258aff05);
  o.text
  o.url
}

function _keyboardButtonCallback(s: ByteStream, o: any) {
  i32(s, 0x683a5e46);
  o.text
  o.data
}

function _keyboardButtonRequestPhone(s: ByteStream, o: any) {
  i32(s, 0xb16a6c29);
  o.text
}

function _keyboardButtonRequestGeoLocation(s: ByteStream, o: any) {
  i32(s, 0xfc796b3f);
  o.text
}

function _keyboardButtonSwitchInline(s: ByteStream, o: any) {
  i32(s, 0x568a748);
  const flags = +o.same_peer;
  i32(s, flags);
  if (o.same_peer !== undefined) o.same_peer
  o.text
  o.query
}

function _keyboardButtonGame(s: ByteStream, o: any) {
  i32(s, 0x50f41ccf);
  o.text
}

function _keyboardButtonBuy(s: ByteStream, o: any) {
  i32(s, 0xafd93fbb);
  o.text
}

function _keyboardButtonUrlAuth(s: ByteStream, o: any) {
  i32(s, 0x10b78d29);
  const flags = +!!o.fwd_text;
  i32(s, flags);
  o.text
  if (o.fwd_text !== undefined) o.fwd_text
  o.url
  i32(s, o.button_id);
}

function _inputKeyboardButtonUrlAuth(s: ByteStream, o: any) {
  i32(s, 0xd02e7fd4);
  const flags = +o.request_write_access | +!!o.fwd_text << 1;
  i32(s, flags);
  if (o.request_write_access !== undefined) o.request_write_access
  o.text
  if (o.fwd_text !== undefined) o.fwd_text
  o.url
  o.bot
}

function _keyboardButtonRow(s: ByteStream, o: any) {
  i32(s, 0x77608b83);
  o.buttons
}

function _replyKeyboardHide(s: ByteStream, o: any) {
  i32(s, 0xa03e5b85);
  const flags = +o.selective << 2;
  i32(s, flags);
  if (o.selective !== undefined) o.selective
}

function _replyKeyboardForceReply(s: ByteStream, o: any) {
  i32(s, 0xf4108aa0);
  const flags = +o.single_use << 1 | +o.selective << 2;
  i32(s, flags);
  if (o.single_use !== undefined) o.single_use
  if (o.selective !== undefined) o.selective
}

function _replyKeyboardMarkup(s: ByteStream, o: any) {
  i32(s, 0x3502758c);
  const flags = +o.resize | +o.single_use << 1 | +o.selective << 2;
  i32(s, flags);
  if (o.resize !== undefined) o.resize
  if (o.single_use !== undefined) o.single_use
  if (o.selective !== undefined) o.selective
  o.rows
}

function _replyInlineMarkup(s: ByteStream, o: any) {
  i32(s, 0x48a30254);
  o.rows
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

function _messageEntityMentionName(s: ByteStream, o: any) {
  i32(s, 0x352dca58);
  i32(s, o.offset);
  i32(s, o.length);
  i32(s, o.user_id);
}

function _inputMessageEntityMentionName(s: ByteStream, o: any) {
  i32(s, 0x208e68c9);
  i32(s, o.offset);
  i32(s, o.length);
  o.user_id
}

function _messageEntityPhone(s: ByteStream, o: any) {
  i32(s, 0x9b69e34b);
  i32(s, o.offset);
  i32(s, o.length);
}

function _messageEntityCashtag(s: ByteStream, o: any) {
  i32(s, 0x4c4e743f);
  i32(s, o.offset);
  i32(s, o.length);
}

function _messageEntityUnderline(s: ByteStream, o: any) {
  i32(s, 0x9c4e7e8b);
  i32(s, o.offset);
  i32(s, o.length);
}

function _messageEntityStrike(s: ByteStream, o: any) {
  i32(s, 0xbf0693d4);
  i32(s, o.offset);
  i32(s, o.length);
}

function _messageEntityBlockquote(s: ByteStream, o: any) {
  i32(s, 0x20df5d0);
  i32(s, o.offset);
  i32(s, o.length);
}

function _inputChannelEmpty(s: ByteStream, o: any) {
  i32(s, 0xee8c1e86);
}

function _inputChannel(s: ByteStream, o: any) {
  i32(s, 0xafeb712e);
  i32(s, o.channel_id);
  o.access_hash
}

function _inputChannelFromMessage(s: ByteStream, o: any) {
  i32(s, 0x2a286531);
  o.peer
  i32(s, o.msg_id);
  i32(s, o.channel_id);
}

function _contactsResolvedPeer(s: ByteStream, o: any) {
  i32(s, 0x7f077ad9);
  o.peer
  o.chats
  o.users
}

function _messageRange(s: ByteStream, o: any) {
  i32(s, 0xae30253);
  i32(s, o.min_id);
  i32(s, o.max_id);
}

function _updatesChannelDifferenceEmpty(s: ByteStream, o: any) {
  i32(s, 0x3e11affb);
  const flags = +o.final | +!!o.timeout << 1;
  i32(s, flags);
  if (o.final !== undefined) o.final
  i32(s, o.pts);
  if (o.timeout !== undefined) o.timeout
}

function _updatesChannelDifferenceTooLong(s: ByteStream, o: any) {
  i32(s, 0xa4bcc6fe);
  const flags = +o.final | +!!o.timeout << 1;
  i32(s, flags);
  if (o.final !== undefined) o.final
  if (o.timeout !== undefined) o.timeout
  o.dialog
  o.messages
  o.chats
  o.users
}

function _updatesChannelDifference(s: ByteStream, o: any) {
  i32(s, 0x2064674e);
  const flags = +o.final | +!!o.timeout << 1;
  i32(s, flags);
  if (o.final !== undefined) o.final
  i32(s, o.pts);
  if (o.timeout !== undefined) o.timeout
  o.new_messages
  o.other_updates
  o.chats
  o.users
}

function _channelMessagesFilterEmpty(s: ByteStream, o: any) {
  i32(s, 0x94d42ee7);
}

function _channelMessagesFilter(s: ByteStream, o: any) {
  i32(s, 0xcd77d957);
  const flags = +o.exclude_new_messages << 1;
  i32(s, flags);
  if (o.exclude_new_messages !== undefined) o.exclude_new_messages
  o.ranges
}

function _channelParticipant(s: ByteStream, o: any) {
  i32(s, 0x15ebac1d);
  i32(s, o.user_id);
  i32(s, o.date);
}

function _channelParticipantSelf(s: ByteStream, o: any) {
  i32(s, 0xa3289a6d);
  i32(s, o.user_id);
  i32(s, o.inviter_id);
  i32(s, o.date);
}

function _channelParticipantCreator(s: ByteStream, o: any) {
  i32(s, 0x808d15a4);
  const flags = +!!o.rank;
  i32(s, flags);
  i32(s, o.user_id);
  if (o.rank !== undefined) o.rank
}

function _channelParticipantAdmin(s: ByteStream, o: any) {
  i32(s, 0xccbebbaf);
  const flags = +o.can_edit | +o.self << 1 | +!!o.inviter_id << 1 | +!!o.rank << 2;
  i32(s, flags);
  if (o.can_edit !== undefined) o.can_edit
  if (o.self !== undefined) o.self
  i32(s, o.user_id);
  if (o.inviter_id !== undefined) o.inviter_id
  i32(s, o.promoted_by);
  i32(s, o.date);
  o.admin_rights
  if (o.rank !== undefined) o.rank
}

function _channelParticipantBanned(s: ByteStream, o: any) {
  i32(s, 0x1c0facaf);
  const flags = +o.left;
  i32(s, flags);
  if (o.left !== undefined) o.left
  i32(s, o.user_id);
  i32(s, o.kicked_by);
  i32(s, o.date);
  o.banned_rights
}

function _channelParticipantsRecent(s: ByteStream, o: any) {
  i32(s, 0xde3f3c79);
}

function _channelParticipantsAdmins(s: ByteStream, o: any) {
  i32(s, 0xb4608969);
}

function _channelParticipantsKicked(s: ByteStream, o: any) {
  i32(s, 0xa3b54985);
  o.q
}

function _channelParticipantsBots(s: ByteStream, o: any) {
  i32(s, 0xb0d1865b);
}

function _channelParticipantsBanned(s: ByteStream, o: any) {
  i32(s, 0x1427a5e1);
  o.q
}

function _channelParticipantsSearch(s: ByteStream, o: any) {
  i32(s, 0x656ac4b);
  o.q
}

function _channelParticipantsContacts(s: ByteStream, o: any) {
  i32(s, 0xbb6ae88d);
  o.q
}

function _channelsChannelParticipants(s: ByteStream, o: any) {
  i32(s, 0xf56ee2a8);
  i32(s, o.count);
  o.participants
  o.users
}

function _channelsChannelParticipantsNotModified(s: ByteStream, o: any) {
  i32(s, 0xf0173fe9);
}

function _channelsChannelParticipant(s: ByteStream, o: any) {
  i32(s, 0xd0d9b163);
  o.participant
  o.users
}

function _helpTermsOfService(s: ByteStream, o: any) {
  i32(s, 0x780a0310);
  const flags = +o.popup | +!!o.min_age_confirm << 1;
  i32(s, flags);
  if (o.popup !== undefined) o.popup
  o.id
  o.text
  o.entities
  if (o.min_age_confirm !== undefined) o.min_age_confirm
}

function _foundGif(s: ByteStream, o: any) {
  i32(s, 0x162ecc1f);
  o.url
  o.thumb_url
  o.content_url
  o.content_type
  i32(s, o.w);
  i32(s, o.h);
}

function _foundGifCached(s: ByteStream, o: any) {
  i32(s, 0x9c750409);
  o.url
  o.photo
  o.document
}

function _messagesFoundGifs(s: ByteStream, o: any) {
  i32(s, 0x450a1c0a);
  i32(s, o.next_offset);
  o.results
}

function _messagesSavedGifsNotModified(s: ByteStream, o: any) {
  i32(s, 0xe8025ca2);
}

function _messagesSavedGifs(s: ByteStream, o: any) {
  i32(s, 0x2e0709a5);
  i32(s, o.hash);
  o.gifs
}

function _inputBotInlineMessageMediaAuto(s: ByteStream, o: any) {
  i32(s, 0x3380c786);
  const flags = +!!o.entities << 1 | +!!o.reply_markup << 2;
  i32(s, flags);
  o.message
  if (o.entities !== undefined) o.entities
  if (o.reply_markup !== undefined) o.reply_markup
}

function _inputBotInlineMessageText(s: ByteStream, o: any) {
  i32(s, 0x3dcd7a87);
  const flags = +o.no_webpage | +!!o.entities << 1 | +!!o.reply_markup << 2;
  i32(s, flags);
  if (o.no_webpage !== undefined) o.no_webpage
  o.message
  if (o.entities !== undefined) o.entities
  if (o.reply_markup !== undefined) o.reply_markup
}

function _inputBotInlineMessageMediaGeo(s: ByteStream, o: any) {
  i32(s, 0xc1b15d65);
  const flags = +!!o.reply_markup << 2;
  i32(s, flags);
  o.geo_point
  i32(s, o.period);
  if (o.reply_markup !== undefined) o.reply_markup
}

function _inputBotInlineMessageMediaVenue(s: ByteStream, o: any) {
  i32(s, 0x417bbf11);
  const flags = +!!o.reply_markup << 2;
  i32(s, flags);
  o.geo_point
  o.title
  o.address
  o.provider
  o.venue_id
  o.venue_type
  if (o.reply_markup !== undefined) o.reply_markup
}

function _inputBotInlineMessageMediaContact(s: ByteStream, o: any) {
  i32(s, 0xa6edbffd);
  const flags = +!!o.reply_markup << 2;
  i32(s, flags);
  o.phone_number
  o.first_name
  o.last_name
  o.vcard
  if (o.reply_markup !== undefined) o.reply_markup
}

function _inputBotInlineMessageGame(s: ByteStream, o: any) {
  i32(s, 0x4b425864);
  const flags = +!!o.reply_markup << 2;
  i32(s, flags);
  if (o.reply_markup !== undefined) o.reply_markup
}

function _inputBotInlineResult(s: ByteStream, o: any) {
  i32(s, 0x88bf9319);
  const flags = +!!o.title << 1 | +!!o.description << 2 | +!!o.url << 3 | +!!o.thumb << 4 | +!!o.content << 5;
  i32(s, flags);
  o.id
  o.type
  if (o.title !== undefined) o.title
  if (o.description !== undefined) o.description
  if (o.url !== undefined) o.url
  if (o.thumb !== undefined) o.thumb
  if (o.content !== undefined) o.content
  o.send_message
}

function _inputBotInlineResultPhoto(s: ByteStream, o: any) {
  i32(s, 0xa8d864a7);
  o.id
  o.type
  o.photo
  o.send_message
}

function _inputBotInlineResultDocument(s: ByteStream, o: any) {
  i32(s, 0xfff8fdc4);
  const flags = +!!o.title << 1 | +!!o.description << 2;
  i32(s, flags);
  o.id
  o.type
  if (o.title !== undefined) o.title
  if (o.description !== undefined) o.description
  o.document
  o.send_message
}

function _inputBotInlineResultGame(s: ByteStream, o: any) {
  i32(s, 0x4fa417f2);
  o.id
  o.short_name
  o.send_message
}

function _botInlineMessageMediaAuto(s: ByteStream, o: any) {
  i32(s, 0x764cf810);
  const flags = +!!o.entities << 1 | +!!o.reply_markup << 2;
  i32(s, flags);
  o.message
  if (o.entities !== undefined) o.entities
  if (o.reply_markup !== undefined) o.reply_markup
}

function _botInlineMessageText(s: ByteStream, o: any) {
  i32(s, 0x8c7f65e2);
  const flags = +o.no_webpage | +!!o.entities << 1 | +!!o.reply_markup << 2;
  i32(s, flags);
  if (o.no_webpage !== undefined) o.no_webpage
  o.message
  if (o.entities !== undefined) o.entities
  if (o.reply_markup !== undefined) o.reply_markup
}

function _botInlineMessageMediaGeo(s: ByteStream, o: any) {
  i32(s, 0xb722de65);
  const flags = +!!o.reply_markup << 2;
  i32(s, flags);
  o.geo
  i32(s, o.period);
  if (o.reply_markup !== undefined) o.reply_markup
}

function _botInlineMessageMediaVenue(s: ByteStream, o: any) {
  i32(s, 0x8a86659c);
  const flags = +!!o.reply_markup << 2;
  i32(s, flags);
  o.geo
  o.title
  o.address
  o.provider
  o.venue_id
  o.venue_type
  if (o.reply_markup !== undefined) o.reply_markup
}

function _botInlineMessageMediaContact(s: ByteStream, o: any) {
  i32(s, 0x18d1cdc2);
  const flags = +!!o.reply_markup << 2;
  i32(s, flags);
  o.phone_number
  o.first_name
  o.last_name
  o.vcard
  if (o.reply_markup !== undefined) o.reply_markup
}

function _botInlineResult(s: ByteStream, o: any) {
  i32(s, 0x11965f3a);
  const flags = +!!o.title << 1 | +!!o.description << 2 | +!!o.url << 3 | +!!o.thumb << 4 | +!!o.content << 5;
  i32(s, flags);
  o.id
  o.type
  if (o.title !== undefined) o.title
  if (o.description !== undefined) o.description
  if (o.url !== undefined) o.url
  if (o.thumb !== undefined) o.thumb
  if (o.content !== undefined) o.content
  o.send_message
}

function _botInlineMediaResult(s: ByteStream, o: any) {
  i32(s, 0x17db940b);
  const flags = +!!o.photo | +!!o.document << 1 | +!!o.title << 2 | +!!o.description << 3;
  i32(s, flags);
  o.id
  o.type
  if (o.photo !== undefined) o.photo
  if (o.document !== undefined) o.document
  if (o.title !== undefined) o.title
  if (o.description !== undefined) o.description
  o.send_message
}

function _messagesBotResults(s: ByteStream, o: any) {
  i32(s, 0x947ca848);
  const flags = +o.gallery | +!!o.next_offset << 1 | +!!o.switch_pm << 2;
  i32(s, flags);
  if (o.gallery !== undefined) o.gallery
  o.query_id
  if (o.next_offset !== undefined) o.next_offset
  if (o.switch_pm !== undefined) o.switch_pm
  o.results
  i32(s, o.cache_time);
  o.users
}

function _exportedMessageLink(s: ByteStream, o: any) {
  i32(s, 0x5dab1af4);
  o.link
  o.html
}

function _messageFwdHeader(s: ByteStream, o: any) {
  i32(s, 0xec338270);
  const flags = +!!o.from_id | +!!o.from_name << 5 | +!!o.channel_id << 1 | +!!o.channel_post << 2 | +!!o.post_author << 3 | +!!o.saved_from_peer << 4 | +!!o.saved_from_msg_id << 4;
  i32(s, flags);
  if (o.from_id !== undefined) o.from_id
  if (o.from_name !== undefined) o.from_name
  i32(s, o.date);
  if (o.channel_id !== undefined) o.channel_id
  if (o.channel_post !== undefined) o.channel_post
  if (o.post_author !== undefined) o.post_author
  if (o.saved_from_peer !== undefined) o.saved_from_peer
  if (o.saved_from_msg_id !== undefined) o.saved_from_msg_id
}

function _authCodeTypeSms(s: ByteStream, o: any) {
  i32(s, 0x72a3158c);
}

function _authCodeTypeCall(s: ByteStream, o: any) {
  i32(s, 0x741cd3e3);
}

function _authCodeTypeFlashCall(s: ByteStream, o: any) {
  i32(s, 0x226ccefb);
}

function _authSentCodeTypeApp(s: ByteStream, o: any) {
  i32(s, 0x3dbb5986);
  i32(s, o.length);
}

function _authSentCodeTypeSms(s: ByteStream, o: any) {
  i32(s, 0xc000bba2);
  i32(s, o.length);
}

function _authSentCodeTypeCall(s: ByteStream, o: any) {
  i32(s, 0x5353e5a7);
  i32(s, o.length);
}

function _authSentCodeTypeFlashCall(s: ByteStream, o: any) {
  i32(s, 0xab03c6d9);
  o.pattern
}

function _messagesBotCallbackAnswer(s: ByteStream, o: any) {
  i32(s, 0x36585ea4);
  const flags = +o.alert << 1 | +o.has_url << 3 | +o.native_ui << 4 | +!!o.message | +!!o.url << 2;
  i32(s, flags);
  if (o.alert !== undefined) o.alert
  if (o.has_url !== undefined) o.has_url
  if (o.native_ui !== undefined) o.native_ui
  if (o.message !== undefined) o.message
  if (o.url !== undefined) o.url
  i32(s, o.cache_time);
}

function _messagesMessageEditData(s: ByteStream, o: any) {
  i32(s, 0x26b5dde6);
  const flags = +o.caption;
  i32(s, flags);
  if (o.caption !== undefined) o.caption
}

function _inputBotInlineMessageID(s: ByteStream, o: any) {
  i32(s, 0x890c3d89);
  i32(s, o.dc_id);
  o.id
  o.access_hash
}

function _inlineBotSwitchPM(s: ByteStream, o: any) {
  i32(s, 0x3c20629f);
  o.text
  o.start_param
}

function _messagesPeerDialogs(s: ByteStream, o: any) {
  i32(s, 0x3371c354);
  o.dialogs
  o.messages
  o.chats
  o.users
  o.state
}

function _topPeer(s: ByteStream, o: any) {
  i32(s, 0xedcdc05b);
  o.peer
  o.rating
}

function _topPeerCategoryBotsPM(s: ByteStream, o: any) {
  i32(s, 0xab661b5b);
}

function _topPeerCategoryBotsInline(s: ByteStream, o: any) {
  i32(s, 0x148677e2);
}

function _topPeerCategoryCorrespondents(s: ByteStream, o: any) {
  i32(s, 0x637b7ed);
}

function _topPeerCategoryGroups(s: ByteStream, o: any) {
  i32(s, 0xbd17a14a);
}

function _topPeerCategoryChannels(s: ByteStream, o: any) {
  i32(s, 0x161d9628);
}

function _topPeerCategoryPhoneCalls(s: ByteStream, o: any) {
  i32(s, 0x1e76a78c);
}

function _topPeerCategoryForwardUsers(s: ByteStream, o: any) {
  i32(s, 0xa8406ca9);
}

function _topPeerCategoryForwardChats(s: ByteStream, o: any) {
  i32(s, 0xfbeec0f0);
}

function _topPeerCategoryPeers(s: ByteStream, o: any) {
  i32(s, 0xfb834291);
  o.category
  i32(s, o.count);
  o.peers
}

function _contactsTopPeersNotModified(s: ByteStream, o: any) {
  i32(s, 0xde266ef5);
}

function _contactsTopPeers(s: ByteStream, o: any) {
  i32(s, 0x70b772a8);
  o.categories
  o.chats
  o.users
}

function _contactsTopPeersDisabled(s: ByteStream, o: any) {
  i32(s, 0xb52c939d);
}

function _draftMessageEmpty(s: ByteStream, o: any) {
  i32(s, 0x1b0c841a);
  const flags = +!!o.date;
  i32(s, flags);
  if (o.date !== undefined) o.date
}

function _draftMessage(s: ByteStream, o: any) {
  i32(s, 0xfd8e711f);
  const flags = +o.no_webpage << 1 | +!!o.reply_to_msg_id | +!!o.entities << 3;
  i32(s, flags);
  if (o.no_webpage !== undefined) o.no_webpage
  if (o.reply_to_msg_id !== undefined) o.reply_to_msg_id
  o.message
  if (o.entities !== undefined) o.entities
  i32(s, o.date);
}

function _messagesFeaturedStickersNotModified(s: ByteStream, o: any) {
  i32(s, 0x4ede3cf);
}

function _messagesFeaturedStickers(s: ByteStream, o: any) {
  i32(s, 0xf89d88e5);
  i32(s, o.hash);
  o.sets
  o.unread
}

function _messagesRecentStickersNotModified(s: ByteStream, o: any) {
  i32(s, 0xb17f890);
}

function _messagesRecentStickers(s: ByteStream, o: any) {
  i32(s, 0x22f3afb3);
  i32(s, o.hash);
  o.packs
  o.stickers
  o.dates
}

function _messagesArchivedStickers(s: ByteStream, o: any) {
  i32(s, 0x4fcba9c8);
  i32(s, o.count);
  o.sets
}

function _messagesStickerSetInstallResultSuccess(s: ByteStream, o: any) {
  i32(s, 0x38641628);
}

function _messagesStickerSetInstallResultArchive(s: ByteStream, o: any) {
  i32(s, 0x35e410a8);
  o.sets
}

function _stickerSetCovered(s: ByteStream, o: any) {
  i32(s, 0x6410a5d2);
  o.set
  o.cover
}

function _stickerSetMultiCovered(s: ByteStream, o: any) {
  i32(s, 0x3407e51b);
  o.set
  o.covers
}

function _maskCoords(s: ByteStream, o: any) {
  i32(s, 0xaed6dbb2);
  i32(s, o.n);
  o.x
  o.y
  o.zoom
}

function _inputStickeredMediaPhoto(s: ByteStream, o: any) {
  i32(s, 0x4a992157);
  o.id
}

function _inputStickeredMediaDocument(s: ByteStream, o: any) {
  i32(s, 0x438865b);
  o.id
}

function _game(s: ByteStream, o: any) {
  i32(s, 0xbdf9653b);
  const flags = +!!o.document;
  i32(s, flags);
  o.id
  o.access_hash
  o.short_name
  o.title
  o.description
  o.photo
  if (o.document !== undefined) o.document
}

function _inputGameID(s: ByteStream, o: any) {
  i32(s, 0x32c3e77);
  o.id
  o.access_hash
}

function _inputGameShortName(s: ByteStream, o: any) {
  i32(s, 0xc331e80a);
  o.bot_id
  o.short_name
}

function _highScore(s: ByteStream, o: any) {
  i32(s, 0x58fffcd0);
  i32(s, o.pos);
  i32(s, o.user_id);
  i32(s, o.score);
}

function _messagesHighScores(s: ByteStream, o: any) {
  i32(s, 0x9a3bfd99);
  o.scores
  o.users
}

function _textEmpty(s: ByteStream, o: any) {
  i32(s, 0xdc3d824f);
}

function _textPlain(s: ByteStream, o: any) {
  i32(s, 0x744694e0);
  o.text
}

function _textBold(s: ByteStream, o: any) {
  i32(s, 0x6724abc4);
  o.text
}

function _textItalic(s: ByteStream, o: any) {
  i32(s, 0xd912a59c);
  o.text
}

function _textUnderline(s: ByteStream, o: any) {
  i32(s, 0xc12622c4);
  o.text
}

function _textStrike(s: ByteStream, o: any) {
  i32(s, 0x9bf8bb95);
  o.text
}

function _textFixed(s: ByteStream, o: any) {
  i32(s, 0x6c3f19b9);
  o.text
}

function _textUrl(s: ByteStream, o: any) {
  i32(s, 0x3c2884c1);
  o.text
  o.url
  o.webpage_id
}

function _textEmail(s: ByteStream, o: any) {
  i32(s, 0xde5a0dd6);
  o.text
  o.email
}

function _textConcat(s: ByteStream, o: any) {
  i32(s, 0x7e6260d7);
  o.texts
}

function _textSubscript(s: ByteStream, o: any) {
  i32(s, 0xed6a8504);
  o.text
}

function _textSuperscript(s: ByteStream, o: any) {
  i32(s, 0xc7fb5e01);
  o.text
}

function _textMarked(s: ByteStream, o: any) {
  i32(s, 0x34b8621);
  o.text
}

function _textPhone(s: ByteStream, o: any) {
  i32(s, 0x1ccb966a);
  o.text
  o.phone
}

function _textImage(s: ByteStream, o: any) {
  i32(s, 0x81ccf4f);
  o.document_id
  i32(s, o.w);
  i32(s, o.h);
}

function _textAnchor(s: ByteStream, o: any) {
  i32(s, 0x35553762);
  o.text
  o.name
}

function _pageBlockUnsupported(s: ByteStream, o: any) {
  i32(s, 0x13567e8a);
}

function _pageBlockTitle(s: ByteStream, o: any) {
  i32(s, 0x70abc3fd);
  o.text
}

function _pageBlockSubtitle(s: ByteStream, o: any) {
  i32(s, 0x8ffa9a1f);
  o.text
}

function _pageBlockAuthorDate(s: ByteStream, o: any) {
  i32(s, 0xbaafe5e0);
  o.author
  i32(s, o.published_date);
}

function _pageBlockHeader(s: ByteStream, o: any) {
  i32(s, 0xbfd064ec);
  o.text
}

function _pageBlockSubheader(s: ByteStream, o: any) {
  i32(s, 0xf12bb6e1);
  o.text
}

function _pageBlockParagraph(s: ByteStream, o: any) {
  i32(s, 0x467a0766);
  o.text
}

function _pageBlockPreformatted(s: ByteStream, o: any) {
  i32(s, 0xc070d93e);
  o.text
  o.language
}

function _pageBlockFooter(s: ByteStream, o: any) {
  i32(s, 0x48870999);
  o.text
}

function _pageBlockDivider(s: ByteStream, o: any) {
  i32(s, 0xdb20b188);
}

function _pageBlockAnchor(s: ByteStream, o: any) {
  i32(s, 0xce0d37b0);
  o.name
}

function _pageBlockList(s: ByteStream, o: any) {
  i32(s, 0xe4e88011);
  o.items
}

function _pageBlockBlockquote(s: ByteStream, o: any) {
  i32(s, 0x263d7c26);
  o.text
  o.caption
}

function _pageBlockPullquote(s: ByteStream, o: any) {
  i32(s, 0x4f4456d3);
  o.text
  o.caption
}

function _pageBlockPhoto(s: ByteStream, o: any) {
  i32(s, 0x1759c560);
  const flags = +!!o.url | +!!o.webpage_id;
  i32(s, flags);
  o.photo_id
  o.caption
  if (o.url !== undefined) o.url
  if (o.webpage_id !== undefined) o.webpage_id
}

function _pageBlockVideo(s: ByteStream, o: any) {
  i32(s, 0x7c8fe7b6);
  const flags = +o.autoplay | +o.loop << 1;
  i32(s, flags);
  if (o.autoplay !== undefined) o.autoplay
  if (o.loop !== undefined) o.loop
  o.video_id
  o.caption
}

function _pageBlockCover(s: ByteStream, o: any) {
  i32(s, 0x39f23300);
  o.cover
}

function _pageBlockEmbed(s: ByteStream, o: any) {
  i32(s, 0xa8718dc5);
  const flags = +o.full_width | +o.allow_scrolling << 3 | +!!o.url << 1 | +!!o.html << 2 | +!!o.poster_photo_id << 4 | +!!o.w << 5 | +!!o.h << 5;
  i32(s, flags);
  if (o.full_width !== undefined) o.full_width
  if (o.allow_scrolling !== undefined) o.allow_scrolling
  if (o.url !== undefined) o.url
  if (o.html !== undefined) o.html
  if (o.poster_photo_id !== undefined) o.poster_photo_id
  if (o.w !== undefined) o.w
  if (o.h !== undefined) o.h
  o.caption
}

function _pageBlockEmbedPost(s: ByteStream, o: any) {
  i32(s, 0xf259a80b);
  o.url
  o.webpage_id
  o.author_photo_id
  o.author
  i32(s, o.date);
  o.blocks
  o.caption
}

function _pageBlockCollage(s: ByteStream, o: any) {
  i32(s, 0x65a0fa4d);
  o.items
  o.caption
}

function _pageBlockSlideshow(s: ByteStream, o: any) {
  i32(s, 0x31f9590);
  o.items
  o.caption
}

function _pageBlockChannel(s: ByteStream, o: any) {
  i32(s, 0xef1751b5);
  o.channel
}

function _pageBlockAudio(s: ByteStream, o: any) {
  i32(s, 0x804361ea);
  o.audio_id
  o.caption
}

function _pageBlockKicker(s: ByteStream, o: any) {
  i32(s, 0x1e148390);
  o.text
}

function _pageBlockTable(s: ByteStream, o: any) {
  i32(s, 0xbf4dea82);
  const flags = +o.bordered | +o.striped << 1;
  i32(s, flags);
  if (o.bordered !== undefined) o.bordered
  if (o.striped !== undefined) o.striped
  o.title
  o.rows
}

function _pageBlockOrderedList(s: ByteStream, o: any) {
  i32(s, 0x9a8ae1e1);
  o.items
}

function _pageBlockDetails(s: ByteStream, o: any) {
  i32(s, 0x76768bed);
  const flags = +o.open;
  i32(s, flags);
  if (o.open !== undefined) o.open
  o.blocks
  o.title
}

function _pageBlockRelatedArticles(s: ByteStream, o: any) {
  i32(s, 0x16115a96);
  o.title
  o.articles
}

function _pageBlockMap(s: ByteStream, o: any) {
  i32(s, 0xa44f3ef6);
  o.geo
  i32(s, o.zoom);
  i32(s, o.w);
  i32(s, o.h);
  o.caption
}

function _phoneCallDiscardReasonMissed(s: ByteStream, o: any) {
  i32(s, 0x85e42301);
}

function _phoneCallDiscardReasonDisconnect(s: ByteStream, o: any) {
  i32(s, 0xe095c1a0);
}

function _phoneCallDiscardReasonHangup(s: ByteStream, o: any) {
  i32(s, 0x57adc690);
}

function _phoneCallDiscardReasonBusy(s: ByteStream, o: any) {
  i32(s, 0xfaf7e8c9);
}

function _dataJSON(s: ByteStream, o: any) {
  i32(s, 0x7d748d04);
  o.data
}

function _labeledPrice(s: ByteStream, o: any) {
  i32(s, 0xcb296bf8);
  o.label
  o.amount
}

function _invoice(s: ByteStream, o: any) {
  i32(s, 0xc30aa358);
  const flags = +o.test | +o.name_requested << 1 | +o.phone_requested << 2 | +o.email_requested << 3 | +o.shipping_address_requested << 4 | +o.flexible << 5 | +o.phone_to_provider << 6 | +o.email_to_provider << 7;
  i32(s, flags);
  if (o.test !== undefined) o.test
  if (o.name_requested !== undefined) o.name_requested
  if (o.phone_requested !== undefined) o.phone_requested
  if (o.email_requested !== undefined) o.email_requested
  if (o.shipping_address_requested !== undefined) o.shipping_address_requested
  if (o.flexible !== undefined) o.flexible
  if (o.phone_to_provider !== undefined) o.phone_to_provider
  if (o.email_to_provider !== undefined) o.email_to_provider
  o.currency
  o.prices
}

function _paymentCharge(s: ByteStream, o: any) {
  i32(s, 0xea02c27e);
  o.id
  o.provider_charge_id
}

function _postAddress(s: ByteStream, o: any) {
  i32(s, 0x1e8caaeb);
  o.street_line1
  o.street_line2
  o.city
  o.state
  o.country_iso2
  o.post_code
}

function _paymentRequestedInfo(s: ByteStream, o: any) {
  i32(s, 0x909c3f94);
  const flags = +!!o.name | +!!o.phone << 1 | +!!o.email << 2 | +!!o.shipping_address << 3;
  i32(s, flags);
  if (o.name !== undefined) o.name
  if (o.phone !== undefined) o.phone
  if (o.email !== undefined) o.email
  if (o.shipping_address !== undefined) o.shipping_address
}

function _paymentSavedCredentialsCard(s: ByteStream, o: any) {
  i32(s, 0xcdc27a1f);
  o.id
  o.title
}

function _webDocument(s: ByteStream, o: any) {
  i32(s, 0x1c570ed1);
  o.url
  o.access_hash
  i32(s, o.size);
  o.mime_type
  o.attributes
}

function _webDocumentNoProxy(s: ByteStream, o: any) {
  i32(s, 0xf9c8bcc6);
  o.url
  i32(s, o.size);
  o.mime_type
  o.attributes
}

function _inputWebDocument(s: ByteStream, o: any) {
  i32(s, 0x9bed434d);
  o.url
  i32(s, o.size);
  o.mime_type
  o.attributes
}

function _inputWebFileLocation(s: ByteStream, o: any) {
  i32(s, 0xc239d686);
  o.url
  o.access_hash
}

function _inputWebFileGeoPointLocation(s: ByteStream, o: any) {
  i32(s, 0x9f2221c9);
  o.geo_point
  o.access_hash
  i32(s, o.w);
  i32(s, o.h);
  i32(s, o.zoom);
  i32(s, o.scale);
}

function _uploadWebFile(s: ByteStream, o: any) {
  i32(s, 0x21e753bc);
  i32(s, o.size);
  o.mime_type
  o.file_type
  i32(s, o.mtime);
  o.bytes
}

function _paymentsPaymentForm(s: ByteStream, o: any) {
  i32(s, 0x3f56aea3);
  const flags = +o.can_save_credentials << 2 | +o.password_missing << 3 | +!!o.native_provider << 4 | +!!o.native_params << 4 | +!!o.saved_info | +!!o.saved_credentials << 1;
  i32(s, flags);
  if (o.can_save_credentials !== undefined) o.can_save_credentials
  if (o.password_missing !== undefined) o.password_missing
  i32(s, o.bot_id);
  o.invoice
  i32(s, o.provider_id);
  o.url
  if (o.native_provider !== undefined) o.native_provider
  if (o.native_params !== undefined) o.native_params
  if (o.saved_info !== undefined) o.saved_info
  if (o.saved_credentials !== undefined) o.saved_credentials
  o.users
}

function _paymentsValidatedRequestedInfo(s: ByteStream, o: any) {
  i32(s, 0xd1451883);
  const flags = +!!o.id | +!!o.shipping_options << 1;
  i32(s, flags);
  if (o.id !== undefined) o.id
  if (o.shipping_options !== undefined) o.shipping_options
}

function _paymentsPaymentResult(s: ByteStream, o: any) {
  i32(s, 0x4e5f810d);
  o.updates
}

function _paymentsPaymentVerificationNeeded(s: ByteStream, o: any) {
  i32(s, 0xd8411139);
  o.url
}

function _paymentsPaymentReceipt(s: ByteStream, o: any) {
  i32(s, 0x500911e1);
  const flags = +!!o.info | +!!o.shipping << 1;
  i32(s, flags);
  i32(s, o.date);
  i32(s, o.bot_id);
  o.invoice
  i32(s, o.provider_id);
  if (o.info !== undefined) o.info
  if (o.shipping !== undefined) o.shipping
  o.currency
  o.total_amount
  o.credentials_title
  o.users
}

function _paymentsSavedInfo(s: ByteStream, o: any) {
  i32(s, 0xfb8fe43c);
  const flags = +o.has_saved_credentials << 1 | +!!o.saved_info;
  i32(s, flags);
  if (o.has_saved_credentials !== undefined) o.has_saved_credentials
  if (o.saved_info !== undefined) o.saved_info
}

function _inputPaymentCredentialsSaved(s: ByteStream, o: any) {
  i32(s, 0xc10eb2cf);
  o.id
  o.tmp_password
}

function _inputPaymentCredentials(s: ByteStream, o: any) {
  i32(s, 0x3417d728);
  const flags = +o.save;
  i32(s, flags);
  if (o.save !== undefined) o.save
  o.data
}

function _inputPaymentCredentialsApplePay(s: ByteStream, o: any) {
  i32(s, 0xaa1c39f);
  o.payment_data
}

function _inputPaymentCredentialsAndroidPay(s: ByteStream, o: any) {
  i32(s, 0xca05d50e);
  o.payment_token
  o.google_transaction_id
}

function _accountTmpPassword(s: ByteStream, o: any) {
  i32(s, 0xdb64fd34);
  o.tmp_password
  i32(s, o.valid_until);
}

function _shippingOption(s: ByteStream, o: any) {
  i32(s, 0xb6213cdf);
  o.id
  o.title
  o.prices
}

function _inputStickerSetItem(s: ByteStream, o: any) {
  i32(s, 0xffa0a496);
  const flags = +!!o.mask_coords;
  i32(s, flags);
  o.document
  o.emoji
  if (o.mask_coords !== undefined) o.mask_coords
}

function _inputPhoneCall(s: ByteStream, o: any) {
  i32(s, 0x1e36fded);
  o.id
  o.access_hash
}

function _phoneCallEmpty(s: ByteStream, o: any) {
  i32(s, 0x5366c915);
  o.id
}

function _phoneCallWaiting(s: ByteStream, o: any) {
  i32(s, 0x1b8f4ad1);
  const flags = +o.video << 5 | +!!o.receive_date;
  i32(s, flags);
  if (o.video !== undefined) o.video
  o.id
  o.access_hash
  i32(s, o.date);
  i32(s, o.admin_id);
  i32(s, o.participant_id);
  o.protocol
  if (o.receive_date !== undefined) o.receive_date
}

function _phoneCallRequested(s: ByteStream, o: any) {
  i32(s, 0x87eabb53);
  const flags = +o.video << 5;
  i32(s, flags);
  if (o.video !== undefined) o.video
  o.id
  o.access_hash
  i32(s, o.date);
  i32(s, o.admin_id);
  i32(s, o.participant_id);
  o.g_a_hash
  o.protocol
}

function _phoneCallAccepted(s: ByteStream, o: any) {
  i32(s, 0x997c454a);
  const flags = +o.video << 5;
  i32(s, flags);
  if (o.video !== undefined) o.video
  o.id
  o.access_hash
  i32(s, o.date);
  i32(s, o.admin_id);
  i32(s, o.participant_id);
  o.g_b
  o.protocol
}

function _phoneCall(s: ByteStream, o: any) {
  i32(s, 0x8742ae7f);
  const flags = +o.p2p_allowed << 5;
  i32(s, flags);
  if (o.p2p_allowed !== undefined) o.p2p_allowed
  o.id
  o.access_hash
  i32(s, o.date);
  i32(s, o.admin_id);
  i32(s, o.participant_id);
  o.g_a_or_b
  o.key_fingerprint
  o.protocol
  o.connections
  i32(s, o.start_date);
}

function _phoneCallDiscarded(s: ByteStream, o: any) {
  i32(s, 0x50ca4de1);
  const flags = +o.need_rating << 2 | +o.need_debug << 3 | +o.video << 5 | +!!o.reason | +!!o.duration << 1;
  i32(s, flags);
  if (o.need_rating !== undefined) o.need_rating
  if (o.need_debug !== undefined) o.need_debug
  if (o.video !== undefined) o.video
  o.id
  if (o.reason !== undefined) o.reason
  if (o.duration !== undefined) o.duration
}

function _phoneConnection(s: ByteStream, o: any) {
  i32(s, 0x9d4c17c0);
  o.id
  o.ip
  o.ipv6
  i32(s, o.port);
  o.peer_tag
}

function _phoneCallProtocol(s: ByteStream, o: any) {
  i32(s, 0xa2bb35cb);
  const flags = +o.udp_p2p | +o.udp_reflector << 1;
  i32(s, flags);
  if (o.udp_p2p !== undefined) o.udp_p2p
  if (o.udp_reflector !== undefined) o.udp_reflector
  i32(s, o.min_layer);
  i32(s, o.max_layer);
}

function _phonePhoneCall(s: ByteStream, o: any) {
  i32(s, 0xec82e140);
  o.phone_call
  o.users
}

function _uploadCdnFileReuploadNeeded(s: ByteStream, o: any) {
  i32(s, 0xeea8e46e);
  o.request_token
}

function _uploadCdnFile(s: ByteStream, o: any) {
  i32(s, 0xa99fca4f);
  o.bytes
}

function _cdnPublicKey(s: ByteStream, o: any) {
  i32(s, 0xc982eaba);
  i32(s, o.dc_id);
  o.public_key
}

function _cdnConfig(s: ByteStream, o: any) {
  i32(s, 0x5725e40a);
  o.public_keys
}

function _langPackString(s: ByteStream, o: any) {
  i32(s, 0xcad181f6);
  o.key
  o.value
}

function _langPackStringPluralized(s: ByteStream, o: any) {
  i32(s, 0x6c47ac9f);
  const flags = +!!o.zero_value | +!!o.one_value << 1 | +!!o.two_value << 2 | +!!o.few_value << 3 | +!!o.many_value << 4;
  i32(s, flags);
  o.key
  if (o.zero_value !== undefined) o.zero_value
  if (o.one_value !== undefined) o.one_value
  if (o.two_value !== undefined) o.two_value
  if (o.few_value !== undefined) o.few_value
  if (o.many_value !== undefined) o.many_value
  o.other_value
}

function _langPackStringDeleted(s: ByteStream, o: any) {
  i32(s, 0x2979eeb2);
  o.key
}

function _langPackDifference(s: ByteStream, o: any) {
  i32(s, 0xf385c1f6);
  o.lang_code
  i32(s, o.from_version);
  i32(s, o.version);
  o.strings
}

function _langPackLanguage(s: ByteStream, o: any) {
  i32(s, 0xeeca5ce3);
  const flags = +o.official | +o.rtl << 2 | +o.beta << 3 | +!!o.base_lang_code << 1;
  i32(s, flags);
  if (o.official !== undefined) o.official
  if (o.rtl !== undefined) o.rtl
  if (o.beta !== undefined) o.beta
  o.name
  o.native_name
  o.lang_code
  if (o.base_lang_code !== undefined) o.base_lang_code
  o.plural_code
  i32(s, o.strings_count);
  i32(s, o.translated_count);
  o.translations_url
}

function _channelAdminLogEventActionChangeTitle(s: ByteStream, o: any) {
  i32(s, 0xe6dfb825);
  o.prev_value
  o.new_value
}

function _channelAdminLogEventActionChangeAbout(s: ByteStream, o: any) {
  i32(s, 0x55188a2e);
  o.prev_value
  o.new_value
}

function _channelAdminLogEventActionChangeUsername(s: ByteStream, o: any) {
  i32(s, 0x6a4afc38);
  o.prev_value
  o.new_value
}

function _channelAdminLogEventActionChangePhoto(s: ByteStream, o: any) {
  i32(s, 0x434bd2af);
  o.prev_photo
  o.new_photo
}

function _channelAdminLogEventActionToggleInvites(s: ByteStream, o: any) {
  i32(s, 0x1b7907ae);
  o.new_value
}

function _channelAdminLogEventActionToggleSignatures(s: ByteStream, o: any) {
  i32(s, 0x26ae0971);
  o.new_value
}

function _channelAdminLogEventActionUpdatePinned(s: ByteStream, o: any) {
  i32(s, 0xe9e82c18);
  o.message
}

function _channelAdminLogEventActionEditMessage(s: ByteStream, o: any) {
  i32(s, 0x709b2405);
  o.prev_message
  o.new_message
}

function _channelAdminLogEventActionDeleteMessage(s: ByteStream, o: any) {
  i32(s, 0x42e047bb);
  o.message
}

function _channelAdminLogEventActionParticipantJoin(s: ByteStream, o: any) {
  i32(s, 0x183040d3);
}

function _channelAdminLogEventActionParticipantLeave(s: ByteStream, o: any) {
  i32(s, 0xf89777f2);
}

function _channelAdminLogEventActionParticipantInvite(s: ByteStream, o: any) {
  i32(s, 0xe31c34d8);
  o.participant
}

function _channelAdminLogEventActionParticipantToggleBan(s: ByteStream, o: any) {
  i32(s, 0xe6d83d7e);
  o.prev_participant
  o.new_participant
}

function _channelAdminLogEventActionParticipantToggleAdmin(s: ByteStream, o: any) {
  i32(s, 0xd5676710);
  o.prev_participant
  o.new_participant
}

function _channelAdminLogEventActionChangeStickerSet(s: ByteStream, o: any) {
  i32(s, 0xb1c3caa7);
  o.prev_stickerset
  o.new_stickerset
}

function _channelAdminLogEventActionTogglePreHistoryHidden(s: ByteStream, o: any) {
  i32(s, 0x5f5c95f1);
  o.new_value
}

function _channelAdminLogEventActionDefaultBannedRights(s: ByteStream, o: any) {
  i32(s, 0x2df5fc0a);
  o.prev_banned_rights
  o.new_banned_rights
}

function _channelAdminLogEventActionStopPoll(s: ByteStream, o: any) {
  i32(s, 0x8f079643);
  o.message
}

function _channelAdminLogEventActionChangeLinkedChat(s: ByteStream, o: any) {
  i32(s, 0xa26f881b);
  i32(s, o.prev_value);
  i32(s, o.new_value);
}

function _channelAdminLogEventActionChangeLocation(s: ByteStream, o: any) {
  i32(s, 0xe6b76ae);
  o.prev_value
  o.new_value
}

function _channelAdminLogEventActionToggleSlowMode(s: ByteStream, o: any) {
  i32(s, 0x53909779);
  i32(s, o.prev_value);
  i32(s, o.new_value);
}

function _channelAdminLogEvent(s: ByteStream, o: any) {
  i32(s, 0x3b5a3e40);
  o.id
  i32(s, o.date);
  i32(s, o.user_id);
  o.action
}

function _channelsAdminLogResults(s: ByteStream, o: any) {
  i32(s, 0xed8af74d);
  o.events
  o.chats
  o.users
}

function _channelAdminLogEventsFilter(s: ByteStream, o: any) {
  i32(s, 0xea107ae4);
  const flags = +o.join | +o.leave << 1 | +o.invite << 2 | +o.ban << 3 | +o.unban << 4 | +o.kick << 5 | +o.unkick << 6 | +o.promote << 7 | +o.demote << 8 | +o.info << 9 | +o.settings << 10 | +o.pinned << 11 | +o.edit << 12 | +o.delete << 13;
  i32(s, flags);
  if (o.join !== undefined) o.join
  if (o.leave !== undefined) o.leave
  if (o.invite !== undefined) o.invite
  if (o.ban !== undefined) o.ban
  if (o.unban !== undefined) o.unban
  if (o.kick !== undefined) o.kick
  if (o.unkick !== undefined) o.unkick
  if (o.promote !== undefined) o.promote
  if (o.demote !== undefined) o.demote
  if (o.info !== undefined) o.info
  if (o.settings !== undefined) o.settings
  if (o.pinned !== undefined) o.pinned
  if (o.edit !== undefined) o.edit
  if (o.delete !== undefined) o.delete
}

function _popularContact(s: ByteStream, o: any) {
  i32(s, 0x5ce14175);
  o.client_id
  i32(s, o.importers);
}

function _messagesFavedStickersNotModified(s: ByteStream, o: any) {
  i32(s, 0x9e8fa6d3);
}

function _messagesFavedStickers(s: ByteStream, o: any) {
  i32(s, 0xf37f2f16);
  i32(s, o.hash);
  o.packs
  o.stickers
}

function _recentMeUrlUnknown(s: ByteStream, o: any) {
  i32(s, 0x46e1d13d);
  o.url
}

function _recentMeUrlUser(s: ByteStream, o: any) {
  i32(s, 0x8dbc3336);
  o.url
  i32(s, o.user_id);
}

function _recentMeUrlChat(s: ByteStream, o: any) {
  i32(s, 0xa01b22f9);
  o.url
  i32(s, o.chat_id);
}

function _recentMeUrlChatInvite(s: ByteStream, o: any) {
  i32(s, 0xeb49081d);
  o.url
  o.chat_invite
}

function _recentMeUrlStickerSet(s: ByteStream, o: any) {
  i32(s, 0xbc0a57dc);
  o.url
  o.set
}

function _helpRecentMeUrls(s: ByteStream, o: any) {
  i32(s, 0xe0310d7);
  o.urls
  o.chats
  o.users
}

function _inputSingleMedia(s: ByteStream, o: any) {
  i32(s, 0x1cc6e91f);
  const flags = +!!o.entities;
  i32(s, flags);
  o.media
  o.random_id
  o.message
  if (o.entities !== undefined) o.entities
}

function _webAuthorization(s: ByteStream, o: any) {
  i32(s, 0xcac943f2);
  o.hash
  i32(s, o.bot_id);
  o.domain
  o.browser
  o.platform
  i32(s, o.date_created);
  i32(s, o.date_active);
  o.ip
  o.region
}

function _accountWebAuthorizations(s: ByteStream, o: any) {
  i32(s, 0xed56c9fc);
  o.authorizations
  o.users
}

function _inputMessageID(s: ByteStream, o: any) {
  i32(s, 0xa676a322);
  i32(s, o.id);
}

function _inputMessageReplyTo(s: ByteStream, o: any) {
  i32(s, 0xbad88395);
  i32(s, o.id);
}

function _inputMessagePinned(s: ByteStream, o: any) {
  i32(s, 0x86872538);
}

function _inputDialogPeer(s: ByteStream, o: any) {
  i32(s, 0xfcaafeb7);
  o.peer
}

function _inputDialogPeerFolder(s: ByteStream, o: any) {
  i32(s, 0x64600527);
  i32(s, o.folder_id);
}

function _dialogPeer(s: ByteStream, o: any) {
  i32(s, 0xe56dbf05);
  o.peer
}

function _dialogPeerFolder(s: ByteStream, o: any) {
  i32(s, 0x514519e2);
  i32(s, o.folder_id);
}

function _messagesFoundStickerSetsNotModified(s: ByteStream, o: any) {
  i32(s, 0xd54b65d);
}

function _messagesFoundStickerSets(s: ByteStream, o: any) {
  i32(s, 0x5108d648);
  i32(s, o.hash);
  o.sets
}

function _fileHash(s: ByteStream, o: any) {
  i32(s, 0x6242c773);
  i32(s, o.offset);
  i32(s, o.limit);
  o.hash
}

function _inputClientProxy(s: ByteStream, o: any) {
  i32(s, 0x75588b3f);
  o.address
  i32(s, o.port);
}

function _helpProxyDataEmpty(s: ByteStream, o: any) {
  i32(s, 0xe09e1fb8);
  i32(s, o.expires);
}

function _helpProxyDataPromo(s: ByteStream, o: any) {
  i32(s, 0x2bf7ee23);
  i32(s, o.expires);
  o.peer
  o.chats
  o.users
}

function _helpTermsOfServiceUpdateEmpty(s: ByteStream, o: any) {
  i32(s, 0xe3309f7f);
  i32(s, o.expires);
}

function _helpTermsOfServiceUpdate(s: ByteStream, o: any) {
  i32(s, 0x28ecf961);
  i32(s, o.expires);
  o.terms_of_service
}

function _inputSecureFileUploaded(s: ByteStream, o: any) {
  i32(s, 0x3334b0f0);
  o.id
  i32(s, o.parts);
  o.md5_checksum
  o.file_hash
  o.secret
}

function _inputSecureFile(s: ByteStream, o: any) {
  i32(s, 0x5367e5be);
  o.id
  o.access_hash
}

function _secureFileEmpty(s: ByteStream, o: any) {
  i32(s, 0x64199744);
}

function _secureFile(s: ByteStream, o: any) {
  i32(s, 0xe0277a62);
  o.id
  o.access_hash
  i32(s, o.size);
  i32(s, o.dc_id);
  i32(s, o.date);
  o.file_hash
  o.secret
}

function _secureData(s: ByteStream, o: any) {
  i32(s, 0x8aeabec3);
  o.data
  o.data_hash
  o.secret
}

function _securePlainPhone(s: ByteStream, o: any) {
  i32(s, 0x7d6099dd);
  o.phone
}

function _securePlainEmail(s: ByteStream, o: any) {
  i32(s, 0x21ec5a5f);
  o.email
}

function _secureValueTypePersonalDetails(s: ByteStream, o: any) {
  i32(s, 0x9d2a81e3);
}

function _secureValueTypePassport(s: ByteStream, o: any) {
  i32(s, 0x3dac6a00);
}

function _secureValueTypeDriverLicense(s: ByteStream, o: any) {
  i32(s, 0x6e425c4);
}

function _secureValueTypeIdentityCard(s: ByteStream, o: any) {
  i32(s, 0xa0d0744b);
}

function _secureValueTypeInternalPassport(s: ByteStream, o: any) {
  i32(s, 0x99a48f23);
}

function _secureValueTypeAddress(s: ByteStream, o: any) {
  i32(s, 0xcbe31e26);
}

function _secureValueTypeUtilityBill(s: ByteStream, o: any) {
  i32(s, 0xfc36954e);
}

function _secureValueTypeBankStatement(s: ByteStream, o: any) {
  i32(s, 0x89137c0d);
}

function _secureValueTypeRentalAgreement(s: ByteStream, o: any) {
  i32(s, 0x8b883488);
}

function _secureValueTypePassportRegistration(s: ByteStream, o: any) {
  i32(s, 0x99e3806a);
}

function _secureValueTypeTemporaryRegistration(s: ByteStream, o: any) {
  i32(s, 0xea02ec33);
}

function _secureValueTypePhone(s: ByteStream, o: any) {
  i32(s, 0xb320aadb);
}

function _secureValueTypeEmail(s: ByteStream, o: any) {
  i32(s, 0x8e3ca7ee);
}

function _secureValue(s: ByteStream, o: any) {
  i32(s, 0x187fa0ca);
  const flags = +!!o.data | +!!o.front_side << 1 | +!!o.reverse_side << 2 | +!!o.selfie << 3 | +!!o.translation << 6 | +!!o.files << 4 | +!!o.plain_data << 5;
  i32(s, flags);
  o.type
  if (o.data !== undefined) o.data
  if (o.front_side !== undefined) o.front_side
  if (o.reverse_side !== undefined) o.reverse_side
  if (o.selfie !== undefined) o.selfie
  if (o.translation !== undefined) o.translation
  if (o.files !== undefined) o.files
  if (o.plain_data !== undefined) o.plain_data
  o.hash
}

function _inputSecureValue(s: ByteStream, o: any) {
  i32(s, 0xdb21d0a7);
  const flags = +!!o.data | +!!o.front_side << 1 | +!!o.reverse_side << 2 | +!!o.selfie << 3 | +!!o.translation << 6 | +!!o.files << 4 | +!!o.plain_data << 5;
  i32(s, flags);
  o.type
  if (o.data !== undefined) o.data
  if (o.front_side !== undefined) o.front_side
  if (o.reverse_side !== undefined) o.reverse_side
  if (o.selfie !== undefined) o.selfie
  if (o.translation !== undefined) o.translation
  if (o.files !== undefined) o.files
  if (o.plain_data !== undefined) o.plain_data
}

function _secureValueHash(s: ByteStream, o: any) {
  i32(s, 0xed1ecdb0);
  o.type
  o.hash
}

function _secureValueErrorData(s: ByteStream, o: any) {
  i32(s, 0xe8a40bd9);
  o.type
  o.data_hash
  o.field
  o.text
}

function _secureValueErrorFrontSide(s: ByteStream, o: any) {
  i32(s, 0xbe3dfa);
  o.type
  o.file_hash
  o.text
}

function _secureValueErrorReverseSide(s: ByteStream, o: any) {
  i32(s, 0x868a2aa5);
  o.type
  o.file_hash
  o.text
}

function _secureValueErrorSelfie(s: ByteStream, o: any) {
  i32(s, 0xe537ced6);
  o.type
  o.file_hash
  o.text
}

function _secureValueErrorFile(s: ByteStream, o: any) {
  i32(s, 0x7a700873);
  o.type
  o.file_hash
  o.text
}

function _secureValueErrorFiles(s: ByteStream, o: any) {
  i32(s, 0x666220e9);
  o.type
  o.file_hash
  o.text
}

function _secureValueError(s: ByteStream, o: any) {
  i32(s, 0x869d758f);
  o.type
  o.hash
  o.text
}

function _secureValueErrorTranslationFile(s: ByteStream, o: any) {
  i32(s, 0xa1144770);
  o.type
  o.file_hash
  o.text
}

function _secureValueErrorTranslationFiles(s: ByteStream, o: any) {
  i32(s, 0x34636dd8);
  o.type
  o.file_hash
  o.text
}

function _secureCredentialsEncrypted(s: ByteStream, o: any) {
  i32(s, 0x33f0ea47);
  o.data
  o.hash
  o.secret
}

function _accountAuthorizationForm(s: ByteStream, o: any) {
  i32(s, 0xad2e1cd8);
  const flags = +!!o.privacy_policy_url;
  i32(s, flags);
  o.required_types
  o.values
  o.errors
  o.users
  if (o.privacy_policy_url !== undefined) o.privacy_policy_url
}

function _accountSentEmailCode(s: ByteStream, o: any) {
  i32(s, 0x811f854f);
  o.email_pattern
  i32(s, o.length);
}

function _helpDeepLinkInfoEmpty(s: ByteStream, o: any) {
  i32(s, 0x66afa166);
}

function _helpDeepLinkInfo(s: ByteStream, o: any) {
  i32(s, 0x6a4ee832);
  const flags = +o.update_app | +!!o.entities << 1;
  i32(s, flags);
  if (o.update_app !== undefined) o.update_app
  o.message
  if (o.entities !== undefined) o.entities
}

function _savedPhoneContact(s: ByteStream, o: any) {
  i32(s, 0x1142bd56);
  o.phone
  o.first_name
  o.last_name
  i32(s, o.date);
}

function _accountTakeout(s: ByteStream, o: any) {
  i32(s, 0x4dba4501);
  o.id
}

function _passwordKdfAlgoUnknown(s: ByteStream, o: any) {
  i32(s, 0xd45ab096);
}

function _passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow(s: ByteStream, o: any) {
  i32(s, 0x3a912d4a);
  o.salt1
  o.salt2
  i32(s, o.g);
  o.p
}

function _securePasswordKdfAlgoUnknown(s: ByteStream, o: any) {
  i32(s, 0x4a8537);
}

function _securePasswordKdfAlgoPBKDF2HMACSHA512iter100000(s: ByteStream, o: any) {
  i32(s, 0xbbf2dda0);
  o.salt
}

function _securePasswordKdfAlgoSHA512(s: ByteStream, o: any) {
  i32(s, 0x86471d92);
  o.salt
}

function _secureSecretSettings(s: ByteStream, o: any) {
  i32(s, 0x1527bcac);
  o.secure_algo
  o.secure_secret
  o.secure_secret_id
}

function _inputCheckPasswordEmpty(s: ByteStream, o: any) {
  i32(s, 0x9880f658);
}

function _inputCheckPasswordSRP(s: ByteStream, o: any) {
  i32(s, 0xd27ff082);
  o.srp_id
  o.A
  o.M1
}

function _secureRequiredType(s: ByteStream, o: any) {
  i32(s, 0x829d99da);
  const flags = +o.native_names | +o.selfie_required << 1 | +o.translation_required << 2;
  i32(s, flags);
  if (o.native_names !== undefined) o.native_names
  if (o.selfie_required !== undefined) o.selfie_required
  if (o.translation_required !== undefined) o.translation_required
  o.type
}

function _secureRequiredTypeOneOf(s: ByteStream, o: any) {
  i32(s, 0x27477b4);
  o.types
}

function _helpPassportConfigNotModified(s: ByteStream, o: any) {
  i32(s, 0xbfb9f457);
}

function _helpPassportConfig(s: ByteStream, o: any) {
  i32(s, 0xa098d6af);
  i32(s, o.hash);
  o.countries_langs
}

function _inputAppEvent(s: ByteStream, o: any) {
  i32(s, 0x1d1b1245);
  o.time
  o.type
  o.peer
  o.data
}

function _jsonObjectValue(s: ByteStream, o: any) {
  i32(s, 0xc0de1bd9);
  o.key
  o.value
}

function _jsonNull(s: ByteStream, o: any) {
  i32(s, 0x3f6d7b68);
}

function _jsonBool(s: ByteStream, o: any) {
  i32(s, 0xc7345e6a);
  o.value
}

function _jsonNumber(s: ByteStream, o: any) {
  i32(s, 0x2be0dfa4);
  o.value
}

function _jsonString(s: ByteStream, o: any) {
  i32(s, 0xb71e767a);
  o.value
}

function _jsonArray(s: ByteStream, o: any) {
  i32(s, 0xf7444763);
  o.value
}

function _jsonObject(s: ByteStream, o: any) {
  i32(s, 0x99c1d49d);
  o.value
}

function _pageTableCell(s: ByteStream, o: any) {
  i32(s, 0x34566b6a);
  const flags = +o.header | +o.align_center << 3 | +o.align_right << 4 | +o.valign_middle << 5 | +o.valign_bottom << 6 | +!!o.text << 7 | +!!o.colspan << 1 | +!!o.rowspan << 2;
  i32(s, flags);
  if (o.header !== undefined) o.header
  if (o.align_center !== undefined) o.align_center
  if (o.align_right !== undefined) o.align_right
  if (o.valign_middle !== undefined) o.valign_middle
  if (o.valign_bottom !== undefined) o.valign_bottom
  if (o.text !== undefined) o.text
  if (o.colspan !== undefined) o.colspan
  if (o.rowspan !== undefined) o.rowspan
}

function _pageTableRow(s: ByteStream, o: any) {
  i32(s, 0xe0c0c5e5);
  o.cells
}

function _pageCaption(s: ByteStream, o: any) {
  i32(s, 0x6f747657);
  o.text
  o.credit
}

function _pageListItemText(s: ByteStream, o: any) {
  i32(s, 0xb92fb6cd);
  o.text
}

function _pageListItemBlocks(s: ByteStream, o: any) {
  i32(s, 0x25e073fc);
  o.blocks
}

function _pageListOrderedItemText(s: ByteStream, o: any) {
  i32(s, 0x5e068047);
  o.num
  o.text
}

function _pageListOrderedItemBlocks(s: ByteStream, o: any) {
  i32(s, 0x98dd8936);
  o.num
  o.blocks
}

function _pageRelatedArticle(s: ByteStream, o: any) {
  i32(s, 0xb390dc08);
  const flags = +!!o.title | +!!o.description << 1 | +!!o.photo_id << 2 | +!!o.author << 3 | +!!o.published_date << 4;
  i32(s, flags);
  o.url
  o.webpage_id
  if (o.title !== undefined) o.title
  if (o.description !== undefined) o.description
  if (o.photo_id !== undefined) o.photo_id
  if (o.author !== undefined) o.author
  if (o.published_date !== undefined) o.published_date
}

function _page(s: ByteStream, o: any) {
  i32(s, 0xae891bec);
  const flags = +o.part | +o.rtl << 1 | +o.v2 << 2;
  i32(s, flags);
  if (o.part !== undefined) o.part
  if (o.rtl !== undefined) o.rtl
  if (o.v2 !== undefined) o.v2
  o.url
  o.blocks
  o.photos
  o.documents
}

function _helpSupportName(s: ByteStream, o: any) {
  i32(s, 0x8c05f1c9);
  o.name
}

function _helpUserInfoEmpty(s: ByteStream, o: any) {
  i32(s, 0xf3ae2eed);
}

function _helpUserInfo(s: ByteStream, o: any) {
  i32(s, 0x1eb3758);
  o.message
  o.entities
  o.author
  i32(s, o.date);
}

function _pollAnswer(s: ByteStream, o: any) {
  i32(s, 0x6ca9c2e9);
  o.text
  o.option
}

function _poll(s: ByteStream, o: any) {
  i32(s, 0xd5529d06);
  const flags = +o.closed;
  i32(s, flags);
  o.id
  if (o.closed !== undefined) o.closed
  o.question
  o.answers
}

function _pollAnswerVoters(s: ByteStream, o: any) {
  i32(s, 0x3b6ddad2);
  const flags = +o.chosen;
  i32(s, flags);
  if (o.chosen !== undefined) o.chosen
  o.option
  i32(s, o.voters);
}

function _pollResults(s: ByteStream, o: any) {
  i32(s, 0x5755785a);
  const flags = +o.min | +!!o.results << 1 | +!!o.total_voters << 2;
  i32(s, flags);
  if (o.min !== undefined) o.min
  if (o.results !== undefined) o.results
  if (o.total_voters !== undefined) o.total_voters
}

function _chatOnlines(s: ByteStream, o: any) {
  i32(s, 0xf041e250);
  i32(s, o.onlines);
}

function _statsURL(s: ByteStream, o: any) {
  i32(s, 0x47a971e0);
  o.url
}

function _chatAdminRights(s: ByteStream, o: any) {
  i32(s, 0x5fb224d5);
  const flags = +o.change_info | +o.post_messages << 1 | +o.edit_messages << 2 | +o.delete_messages << 3 | +o.ban_users << 4 | +o.invite_users << 5 | +o.pin_messages << 7 | +o.add_admins << 9;
  i32(s, flags);
  if (o.change_info !== undefined) o.change_info
  if (o.post_messages !== undefined) o.post_messages
  if (o.edit_messages !== undefined) o.edit_messages
  if (o.delete_messages !== undefined) o.delete_messages
  if (o.ban_users !== undefined) o.ban_users
  if (o.invite_users !== undefined) o.invite_users
  if (o.pin_messages !== undefined) o.pin_messages
  if (o.add_admins !== undefined) o.add_admins
}

function _chatBannedRights(s: ByteStream, o: any) {
  i32(s, 0x9f120418);
  const flags = +o.view_messages | +o.send_messages << 1 | +o.send_media << 2 | +o.send_stickers << 3 | +o.send_gifs << 4 | +o.send_games << 5 | +o.send_inline << 6 | +o.embed_links << 7 | +o.send_polls << 8 | +o.change_info << 10 | +o.invite_users << 15 | +o.pin_messages << 17;
  i32(s, flags);
  if (o.view_messages !== undefined) o.view_messages
  if (o.send_messages !== undefined) o.send_messages
  if (o.send_media !== undefined) o.send_media
  if (o.send_stickers !== undefined) o.send_stickers
  if (o.send_gifs !== undefined) o.send_gifs
  if (o.send_games !== undefined) o.send_games
  if (o.send_inline !== undefined) o.send_inline
  if (o.embed_links !== undefined) o.embed_links
  if (o.send_polls !== undefined) o.send_polls
  if (o.change_info !== undefined) o.change_info
  if (o.invite_users !== undefined) o.invite_users
  if (o.pin_messages !== undefined) o.pin_messages
  i32(s, o.until_date);
}

function _inputWallPaper(s: ByteStream, o: any) {
  i32(s, 0xe630b979);
  o.id
  o.access_hash
}

function _inputWallPaperSlug(s: ByteStream, o: any) {
  i32(s, 0x72091c80);
  o.slug
}

function _accountWallPapersNotModified(s: ByteStream, o: any) {
  i32(s, 0x1c199183);
}

function _accountWallPapers(s: ByteStream, o: any) {
  i32(s, 0x702b65a9);
  i32(s, o.hash);
  o.wallpapers
}

function _codeSettings(s: ByteStream, o: any) {
  i32(s, 0xdebebe83);
  const flags = +o.allow_flashcall | +o.current_number << 1 | +o.allow_app_hash << 4;
  i32(s, flags);
  if (o.allow_flashcall !== undefined) o.allow_flashcall
  if (o.current_number !== undefined) o.current_number
  if (o.allow_app_hash !== undefined) o.allow_app_hash
}

function _wallPaperSettings(s: ByteStream, o: any) {
  i32(s, 0xa12f40b8);
  const flags = +o.blur << 1 | +o.motion << 2 | +!!o.background_color | +!!o.intensity << 3;
  i32(s, flags);
  if (o.blur !== undefined) o.blur
  if (o.motion !== undefined) o.motion
  if (o.background_color !== undefined) o.background_color
  if (o.intensity !== undefined) o.intensity
}

function _autoDownloadSettings(s: ByteStream, o: any) {
  i32(s, 0xd246fd47);
  const flags = +o.disabled | +o.video_preload_large << 1 | +o.audio_preload_next << 2 | +o.phonecalls_less_data << 3;
  i32(s, flags);
  if (o.disabled !== undefined) o.disabled
  if (o.video_preload_large !== undefined) o.video_preload_large
  if (o.audio_preload_next !== undefined) o.audio_preload_next
  if (o.phonecalls_less_data !== undefined) o.phonecalls_less_data
  i32(s, o.photo_size_max);
  i32(s, o.video_size_max);
  i32(s, o.file_size_max);
}

function _accountAutoDownloadSettings(s: ByteStream, o: any) {
  i32(s, 0x63cacf26);
  o.low
  o.medium
  o.high
}

function _emojiKeyword(s: ByteStream, o: any) {
  i32(s, 0xd5b3b9f9);
  o.keyword
  o.emoticons
}

function _emojiKeywordDeleted(s: ByteStream, o: any) {
  i32(s, 0x236df622);
  o.keyword
  o.emoticons
}

function _emojiKeywordsDifference(s: ByteStream, o: any) {
  i32(s, 0x5cc761bd);
  o.lang_code
  i32(s, o.from_version);
  i32(s, o.version);
  o.keywords
}

function _emojiURL(s: ByteStream, o: any) {
  i32(s, 0xa575739d);
  o.url
}

function _emojiLanguage(s: ByteStream, o: any) {
  i32(s, 0xb3fb5361);
  o.lang_code
}

function _fileLocationToBeDeprecated(s: ByteStream, o: any) {
  i32(s, 0xbc7fc6cd);
  o.volume_id
  i32(s, o.local_id);
}

function _folder(s: ByteStream, o: any) {
  i32(s, 0xff544e65);
  const flags = +o.autofill_new_broadcasts | +o.autofill_public_groups << 1 | +o.autofill_new_correspondents << 2 | +!!o.photo << 3;
  i32(s, flags);
  if (o.autofill_new_broadcasts !== undefined) o.autofill_new_broadcasts
  if (o.autofill_public_groups !== undefined) o.autofill_public_groups
  if (o.autofill_new_correspondents !== undefined) o.autofill_new_correspondents
  i32(s, o.id);
  o.title
  if (o.photo !== undefined) o.photo
}

function _inputFolderPeer(s: ByteStream, o: any) {
  i32(s, 0xfbd2c296);
  o.peer
  i32(s, o.folder_id);
}

function _folderPeer(s: ByteStream, o: any) {
  i32(s, 0xe9baa668);
  o.peer
  i32(s, o.folder_id);
}

function _messagesSearchCounter(s: ByteStream, o: any) {
  i32(s, 0xe844ebff);
  const flags = +o.inexact << 1;
  i32(s, flags);
  if (o.inexact !== undefined) o.inexact
  o.filter
  i32(s, o.count);
}

function _urlAuthResultRequest(s: ByteStream, o: any) {
  i32(s, 0x92d33a0e);
  const flags = +o.request_write_access;
  i32(s, flags);
  if (o.request_write_access !== undefined) o.request_write_access
  o.bot
  o.domain
}

function _urlAuthResultAccepted(s: ByteStream, o: any) {
  i32(s, 0x8f8c0e4e);
  o.url
}

function _urlAuthResultDefault(s: ByteStream, o: any) {
  i32(s, 0xa9d6db1f);
}

function _channelLocationEmpty(s: ByteStream, o: any) {
  i32(s, 0xbfb5ad8b);
}

function _channelLocation(s: ByteStream, o: any) {
  i32(s, 0x209b82db);
  o.geo_point
  o.address
}

function _peerLocated(s: ByteStream, o: any) {
  i32(s, 0xca461b5d);
  o.peer
  i32(s, o.expires);
  i32(s, o.distance);
}

function _restrictionReason(s: ByteStream, o: any) {
  i32(s, 0xd072acb4);
  o.platform
  o.reason
  o.text
}

function _inputTheme(s: ByteStream, o: any) {
  i32(s, 0x3c5693e9);
  o.id
  o.access_hash
}

function _inputThemeSlug(s: ByteStream, o: any) {
  i32(s, 0xf5890df1);
  o.slug
}

function _themeDocumentNotModified(s: ByteStream, o: any) {
  i32(s, 0x483d270c);
}

function _theme(s: ByteStream, o: any) {
  i32(s, 0xf7d90ce0);
  const flags = +o.creator | +o.default << 1 | +!!o.document << 2;
  i32(s, flags);
  if (o.creator !== undefined) o.creator
  if (o.default !== undefined) o.default
  o.id
  o.access_hash
  o.slug
  o.title
  if (o.document !== undefined) o.document
  i32(s, o.installs_count);
}

function _accountThemesNotModified(s: ByteStream, o: any) {
  i32(s, 0xf41eb622);
}

function _accountThemes(s: ByteStream, o: any) {
  i32(s, 0x7f676421);
  i32(s, o.hash);
  o.themes
}

const builderMap: Record<string, (s: ByteStream, o: any) => void> = {
  'boolFalse': _boolFalse,
  'boolTrue': _boolTrue,
  'true': _true,
  'vector': _vector,
  'error': _error,
  'null': _null,
  'inputPeerEmpty': _inputPeerEmpty,
  'inputPeerSelf': _inputPeerSelf,
  'inputPeerChat': _inputPeerChat,
  'inputPeerUser': _inputPeerUser,
  'inputPeerChannel': _inputPeerChannel,
  'inputPeerUserFromMessage': _inputPeerUserFromMessage,
  'inputPeerChannelFromMessage': _inputPeerChannelFromMessage,
  'inputUserEmpty': _inputUserEmpty,
  'inputUserSelf': _inputUserSelf,
  'inputUser': _inputUser,
  'inputUserFromMessage': _inputUserFromMessage,
  'inputPhoneContact': _inputPhoneContact,
  'inputFile': _inputFile,
  'inputFileBig': _inputFileBig,
  'inputMediaEmpty': _inputMediaEmpty,
  'inputMediaUploadedPhoto': _inputMediaUploadedPhoto,
  'inputMediaPhoto': _inputMediaPhoto,
  'inputMediaGeoPoint': _inputMediaGeoPoint,
  'inputMediaContact': _inputMediaContact,
  'inputMediaUploadedDocument': _inputMediaUploadedDocument,
  'inputMediaDocument': _inputMediaDocument,
  'inputMediaVenue': _inputMediaVenue,
  'inputMediaGifExternal': _inputMediaGifExternal,
  'inputMediaPhotoExternal': _inputMediaPhotoExternal,
  'inputMediaDocumentExternal': _inputMediaDocumentExternal,
  'inputMediaGame': _inputMediaGame,
  'inputMediaInvoice': _inputMediaInvoice,
  'inputMediaGeoLive': _inputMediaGeoLive,
  'inputMediaPoll': _inputMediaPoll,
  'inputChatPhotoEmpty': _inputChatPhotoEmpty,
  'inputChatUploadedPhoto': _inputChatUploadedPhoto,
  'inputChatPhoto': _inputChatPhoto,
  'inputGeoPointEmpty': _inputGeoPointEmpty,
  'inputGeoPoint': _inputGeoPoint,
  'inputPhotoEmpty': _inputPhotoEmpty,
  'inputPhoto': _inputPhoto,
  'inputFileLocation': _inputFileLocation,
  'inputEncryptedFileLocation': _inputEncryptedFileLocation,
  'inputDocumentFileLocation': _inputDocumentFileLocation,
  'inputSecureFileLocation': _inputSecureFileLocation,
  'inputTakeoutFileLocation': _inputTakeoutFileLocation,
  'inputPhotoFileLocation': _inputPhotoFileLocation,
  'inputPeerPhotoFileLocation': _inputPeerPhotoFileLocation,
  'inputStickerSetThumb': _inputStickerSetThumb,
  'peerUser': _peerUser,
  'peerChat': _peerChat,
  'peerChannel': _peerChannel,
  'storage.fileUnknown': _storageFileUnknown,
  'storage.filePartial': _storageFilePartial,
  'storage.fileJpeg': _storageFileJpeg,
  'storage.fileGif': _storageFileGif,
  'storage.filePng': _storageFilePng,
  'storage.filePdf': _storageFilePdf,
  'storage.fileMp3': _storageFileMp3,
  'storage.fileMov': _storageFileMov,
  'storage.fileMp4': _storageFileMp4,
  'storage.fileWebp': _storageFileWebp,
  'userEmpty': _userEmpty,
  'user': _user,
  'userProfilePhotoEmpty': _userProfilePhotoEmpty,
  'userProfilePhoto': _userProfilePhoto,
  'userStatusEmpty': _userStatusEmpty,
  'userStatusOnline': _userStatusOnline,
  'userStatusOffline': _userStatusOffline,
  'userStatusRecently': _userStatusRecently,
  'userStatusLastWeek': _userStatusLastWeek,
  'userStatusLastMonth': _userStatusLastMonth,
  'chatEmpty': _chatEmpty,
  'chat': _chat,
  'chatForbidden': _chatForbidden,
  'channel': _channel,
  'channelForbidden': _channelForbidden,
  'chatFull': _chatFull,
  'channelFull': _channelFull,
  'chatParticipant': _chatParticipant,
  'chatParticipantCreator': _chatParticipantCreator,
  'chatParticipantAdmin': _chatParticipantAdmin,
  'chatParticipantsForbidden': _chatParticipantsForbidden,
  'chatParticipants': _chatParticipants,
  'chatPhotoEmpty': _chatPhotoEmpty,
  'chatPhoto': _chatPhoto,
  'messageEmpty': _messageEmpty,
  'message': _message,
  'messageService': _messageService,
  'messageMediaEmpty': _messageMediaEmpty,
  'messageMediaPhoto': _messageMediaPhoto,
  'messageMediaGeo': _messageMediaGeo,
  'messageMediaContact': _messageMediaContact,
  'messageMediaUnsupported': _messageMediaUnsupported,
  'messageMediaDocument': _messageMediaDocument,
  'messageMediaWebPage': _messageMediaWebPage,
  'messageMediaVenue': _messageMediaVenue,
  'messageMediaGame': _messageMediaGame,
  'messageMediaInvoice': _messageMediaInvoice,
  'messageMediaGeoLive': _messageMediaGeoLive,
  'messageMediaPoll': _messageMediaPoll,
  'messageActionEmpty': _messageActionEmpty,
  'messageActionChatCreate': _messageActionChatCreate,
  'messageActionChatEditTitle': _messageActionChatEditTitle,
  'messageActionChatEditPhoto': _messageActionChatEditPhoto,
  'messageActionChatDeletePhoto': _messageActionChatDeletePhoto,
  'messageActionChatAddUser': _messageActionChatAddUser,
  'messageActionChatDeleteUser': _messageActionChatDeleteUser,
  'messageActionChatJoinedByLink': _messageActionChatJoinedByLink,
  'messageActionChannelCreate': _messageActionChannelCreate,
  'messageActionChatMigrateTo': _messageActionChatMigrateTo,
  'messageActionChannelMigrateFrom': _messageActionChannelMigrateFrom,
  'messageActionPinMessage': _messageActionPinMessage,
  'messageActionHistoryClear': _messageActionHistoryClear,
  'messageActionGameScore': _messageActionGameScore,
  'messageActionPaymentSentMe': _messageActionPaymentSentMe,
  'messageActionPaymentSent': _messageActionPaymentSent,
  'messageActionPhoneCall': _messageActionPhoneCall,
  'messageActionScreenshotTaken': _messageActionScreenshotTaken,
  'messageActionCustomAction': _messageActionCustomAction,
  'messageActionBotAllowed': _messageActionBotAllowed,
  'messageActionSecureValuesSentMe': _messageActionSecureValuesSentMe,
  'messageActionSecureValuesSent': _messageActionSecureValuesSent,
  'messageActionContactSignUp': _messageActionContactSignUp,
  'dialog': _dialog,
  'dialogFolder': _dialogFolder,
  'photoEmpty': _photoEmpty,
  'photo': _photo,
  'photoSizeEmpty': _photoSizeEmpty,
  'photoSize': _photoSize,
  'photoCachedSize': _photoCachedSize,
  'photoStrippedSize': _photoStrippedSize,
  'geoPointEmpty': _geoPointEmpty,
  'geoPoint': _geoPoint,
  'auth.sentCode': _authSentCode,
  'auth.authorization': _authAuthorization,
  'auth.authorizationSignUpRequired': _authAuthorizationSignUpRequired,
  'auth.exportedAuthorization': _authExportedAuthorization,
  'inputNotifyPeer': _inputNotifyPeer,
  'inputNotifyUsers': _inputNotifyUsers,
  'inputNotifyChats': _inputNotifyChats,
  'inputNotifyBroadcasts': _inputNotifyBroadcasts,
  'inputPeerNotifySettings': _inputPeerNotifySettings,
  'peerNotifySettings': _peerNotifySettings,
  'peerSettings': _peerSettings,
  'wallPaper': _wallPaper,
  'inputReportReasonSpam': _inputReportReasonSpam,
  'inputReportReasonViolence': _inputReportReasonViolence,
  'inputReportReasonPornography': _inputReportReasonPornography,
  'inputReportReasonChildAbuse': _inputReportReasonChildAbuse,
  'inputReportReasonOther': _inputReportReasonOther,
  'inputReportReasonCopyright': _inputReportReasonCopyright,
  'inputReportReasonGeoIrrelevant': _inputReportReasonGeoIrrelevant,
  'userFull': _userFull,
  'contact': _contact,
  'importedContact': _importedContact,
  'contactBlocked': _contactBlocked,
  'contactStatus': _contactStatus,
  'contacts.contactsNotModified': _contactsContactsNotModified,
  'contacts.contacts': _contactsContacts,
  'contacts.importedContacts': _contactsImportedContacts,
  'contacts.blocked': _contactsBlocked,
  'contacts.blockedSlice': _contactsBlockedSlice,
  'messages.dialogs': _messagesDialogs,
  'messages.dialogsSlice': _messagesDialogsSlice,
  'messages.dialogsNotModified': _messagesDialogsNotModified,
  'messages.messages': _messagesMessages,
  'messages.messagesSlice': _messagesMessagesSlice,
  'messages.channelMessages': _messagesChannelMessages,
  'messages.messagesNotModified': _messagesMessagesNotModified,
  'messages.chats': _messagesChats,
  'messages.chatsSlice': _messagesChatsSlice,
  'messages.chatFull': _messagesChatFull,
  'messages.affectedHistory': _messagesAffectedHistory,
  'inputMessagesFilterEmpty': _inputMessagesFilterEmpty,
  'inputMessagesFilterPhotos': _inputMessagesFilterPhotos,
  'inputMessagesFilterVideo': _inputMessagesFilterVideo,
  'inputMessagesFilterPhotoVideo': _inputMessagesFilterPhotoVideo,
  'inputMessagesFilterDocument': _inputMessagesFilterDocument,
  'inputMessagesFilterUrl': _inputMessagesFilterUrl,
  'inputMessagesFilterGif': _inputMessagesFilterGif,
  'inputMessagesFilterVoice': _inputMessagesFilterVoice,
  'inputMessagesFilterMusic': _inputMessagesFilterMusic,
  'inputMessagesFilterChatPhotos': _inputMessagesFilterChatPhotos,
  'inputMessagesFilterPhoneCalls': _inputMessagesFilterPhoneCalls,
  'inputMessagesFilterRoundVoice': _inputMessagesFilterRoundVoice,
  'inputMessagesFilterRoundVideo': _inputMessagesFilterRoundVideo,
  'inputMessagesFilterMyMentions': _inputMessagesFilterMyMentions,
  'inputMessagesFilterGeo': _inputMessagesFilterGeo,
  'inputMessagesFilterContacts': _inputMessagesFilterContacts,
  'updateNewMessage': _updateNewMessage,
  'updateMessageID': _updateMessageID,
  'updateDeleteMessages': _updateDeleteMessages,
  'updateUserTyping': _updateUserTyping,
  'updateChatUserTyping': _updateChatUserTyping,
  'updateChatParticipants': _updateChatParticipants,
  'updateUserStatus': _updateUserStatus,
  'updateUserName': _updateUserName,
  'updateUserPhoto': _updateUserPhoto,
  'updateNewEncryptedMessage': _updateNewEncryptedMessage,
  'updateEncryptedChatTyping': _updateEncryptedChatTyping,
  'updateEncryption': _updateEncryption,
  'updateEncryptedMessagesRead': _updateEncryptedMessagesRead,
  'updateChatParticipantAdd': _updateChatParticipantAdd,
  'updateChatParticipantDelete': _updateChatParticipantDelete,
  'updateDcOptions': _updateDcOptions,
  'updateUserBlocked': _updateUserBlocked,
  'updateNotifySettings': _updateNotifySettings,
  'updateServiceNotification': _updateServiceNotification,
  'updatePrivacy': _updatePrivacy,
  'updateUserPhone': _updateUserPhone,
  'updateReadHistoryInbox': _updateReadHistoryInbox,
  'updateReadHistoryOutbox': _updateReadHistoryOutbox,
  'updateWebPage': _updateWebPage,
  'updateReadMessagesContents': _updateReadMessagesContents,
  'updateChannelTooLong': _updateChannelTooLong,
  'updateChannel': _updateChannel,
  'updateNewChannelMessage': _updateNewChannelMessage,
  'updateReadChannelInbox': _updateReadChannelInbox,
  'updateDeleteChannelMessages': _updateDeleteChannelMessages,
  'updateChannelMessageViews': _updateChannelMessageViews,
  'updateChatParticipantAdmin': _updateChatParticipantAdmin,
  'updateNewStickerSet': _updateNewStickerSet,
  'updateStickerSetsOrder': _updateStickerSetsOrder,
  'updateStickerSets': _updateStickerSets,
  'updateSavedGifs': _updateSavedGifs,
  'updateBotInlineQuery': _updateBotInlineQuery,
  'updateBotInlineSend': _updateBotInlineSend,
  'updateEditChannelMessage': _updateEditChannelMessage,
  'updateChannelPinnedMessage': _updateChannelPinnedMessage,
  'updateBotCallbackQuery': _updateBotCallbackQuery,
  'updateEditMessage': _updateEditMessage,
  'updateInlineBotCallbackQuery': _updateInlineBotCallbackQuery,
  'updateReadChannelOutbox': _updateReadChannelOutbox,
  'updateDraftMessage': _updateDraftMessage,
  'updateReadFeaturedStickers': _updateReadFeaturedStickers,
  'updateRecentStickers': _updateRecentStickers,
  'updateConfig': _updateConfig,
  'updatePtsChanged': _updatePtsChanged,
  'updateChannelWebPage': _updateChannelWebPage,
  'updateDialogPinned': _updateDialogPinned,
  'updatePinnedDialogs': _updatePinnedDialogs,
  'updateBotWebhookJSON': _updateBotWebhookJSON,
  'updateBotWebhookJSONQuery': _updateBotWebhookJSONQuery,
  'updateBotShippingQuery': _updateBotShippingQuery,
  'updateBotPrecheckoutQuery': _updateBotPrecheckoutQuery,
  'updatePhoneCall': _updatePhoneCall,
  'updateLangPackTooLong': _updateLangPackTooLong,
  'updateLangPack': _updateLangPack,
  'updateFavedStickers': _updateFavedStickers,
  'updateChannelReadMessagesContents': _updateChannelReadMessagesContents,
  'updateContactsReset': _updateContactsReset,
  'updateChannelAvailableMessages': _updateChannelAvailableMessages,
  'updateDialogUnreadMark': _updateDialogUnreadMark,
  'updateUserPinnedMessage': _updateUserPinnedMessage,
  'updateChatPinnedMessage': _updateChatPinnedMessage,
  'updateMessagePoll': _updateMessagePoll,
  'updateChatDefaultBannedRights': _updateChatDefaultBannedRights,
  'updateFolderPeers': _updateFolderPeers,
  'updatePeerSettings': _updatePeerSettings,
  'updatePeerLocated': _updatePeerLocated,
  'updateNewScheduledMessage': _updateNewScheduledMessage,
  'updateDeleteScheduledMessages': _updateDeleteScheduledMessages,
  'updateTheme': _updateTheme,
  'updates.state': _updatesState,
  'updates.differenceEmpty': _updatesDifferenceEmpty,
  'updates.difference': _updatesDifference,
  'updates.differenceSlice': _updatesDifferenceSlice,
  'updates.differenceTooLong': _updatesDifferenceTooLong,
  'updatesTooLong': _updatesTooLong,
  'updateShortMessage': _updateShortMessage,
  'updateShortChatMessage': _updateShortChatMessage,
  'updateShort': _updateShort,
  'updatesCombined': _updatesCombined,
  'updates': _updates,
  'updateShortSentMessage': _updateShortSentMessage,
  'photos.photos': _photosPhotos,
  'photos.photosSlice': _photosPhotosSlice,
  'photos.photo': _photosPhoto,
  'upload.file': _uploadFile,
  'upload.fileCdnRedirect': _uploadFileCdnRedirect,
  'dcOption': _dcOption,
  'config': _config,
  'nearestDc': _nearestDc,
  'help.appUpdate': _helpAppUpdate,
  'help.noAppUpdate': _helpNoAppUpdate,
  'help.inviteText': _helpInviteText,
  'encryptedChatEmpty': _encryptedChatEmpty,
  'encryptedChatWaiting': _encryptedChatWaiting,
  'encryptedChatRequested': _encryptedChatRequested,
  'encryptedChat': _encryptedChat,
  'encryptedChatDiscarded': _encryptedChatDiscarded,
  'inputEncryptedChat': _inputEncryptedChat,
  'encryptedFileEmpty': _encryptedFileEmpty,
  'encryptedFile': _encryptedFile,
  'inputEncryptedFileEmpty': _inputEncryptedFileEmpty,
  'inputEncryptedFileUploaded': _inputEncryptedFileUploaded,
  'inputEncryptedFile': _inputEncryptedFile,
  'inputEncryptedFileBigUploaded': _inputEncryptedFileBigUploaded,
  'encryptedMessage': _encryptedMessage,
  'encryptedMessageService': _encryptedMessageService,
  'messages.dhConfigNotModified': _messagesDhConfigNotModified,
  'messages.dhConfig': _messagesDhConfig,
  'messages.sentEncryptedMessage': _messagesSentEncryptedMessage,
  'messages.sentEncryptedFile': _messagesSentEncryptedFile,
  'inputDocumentEmpty': _inputDocumentEmpty,
  'inputDocument': _inputDocument,
  'documentEmpty': _documentEmpty,
  'document': _document,
  'help.support': _helpSupport,
  'notifyPeer': _notifyPeer,
  'notifyUsers': _notifyUsers,
  'notifyChats': _notifyChats,
  'notifyBroadcasts': _notifyBroadcasts,
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
  'sendMessageGamePlayAction': _sendMessageGamePlayAction,
  'sendMessageRecordRoundAction': _sendMessageRecordRoundAction,
  'sendMessageUploadRoundAction': _sendMessageUploadRoundAction,
  'contacts.found': _contactsFound,
  'inputPrivacyKeyStatusTimestamp': _inputPrivacyKeyStatusTimestamp,
  'inputPrivacyKeyChatInvite': _inputPrivacyKeyChatInvite,
  'inputPrivacyKeyPhoneCall': _inputPrivacyKeyPhoneCall,
  'inputPrivacyKeyPhoneP2P': _inputPrivacyKeyPhoneP2P,
  'inputPrivacyKeyForwards': _inputPrivacyKeyForwards,
  'inputPrivacyKeyProfilePhoto': _inputPrivacyKeyProfilePhoto,
  'inputPrivacyKeyPhoneNumber': _inputPrivacyKeyPhoneNumber,
  'inputPrivacyKeyAddedByPhone': _inputPrivacyKeyAddedByPhone,
  'privacyKeyStatusTimestamp': _privacyKeyStatusTimestamp,
  'privacyKeyChatInvite': _privacyKeyChatInvite,
  'privacyKeyPhoneCall': _privacyKeyPhoneCall,
  'privacyKeyPhoneP2P': _privacyKeyPhoneP2P,
  'privacyKeyForwards': _privacyKeyForwards,
  'privacyKeyProfilePhoto': _privacyKeyProfilePhoto,
  'privacyKeyPhoneNumber': _privacyKeyPhoneNumber,
  'privacyKeyAddedByPhone': _privacyKeyAddedByPhone,
  'inputPrivacyValueAllowContacts': _inputPrivacyValueAllowContacts,
  'inputPrivacyValueAllowAll': _inputPrivacyValueAllowAll,
  'inputPrivacyValueAllowUsers': _inputPrivacyValueAllowUsers,
  'inputPrivacyValueDisallowContacts': _inputPrivacyValueDisallowContacts,
  'inputPrivacyValueDisallowAll': _inputPrivacyValueDisallowAll,
  'inputPrivacyValueDisallowUsers': _inputPrivacyValueDisallowUsers,
  'inputPrivacyValueAllowChatParticipants': _inputPrivacyValueAllowChatParticipants,
  'inputPrivacyValueDisallowChatParticipants': _inputPrivacyValueDisallowChatParticipants,
  'privacyValueAllowContacts': _privacyValueAllowContacts,
  'privacyValueAllowAll': _privacyValueAllowAll,
  'privacyValueAllowUsers': _privacyValueAllowUsers,
  'privacyValueDisallowContacts': _privacyValueDisallowContacts,
  'privacyValueDisallowAll': _privacyValueDisallowAll,
  'privacyValueDisallowUsers': _privacyValueDisallowUsers,
  'privacyValueAllowChatParticipants': _privacyValueAllowChatParticipants,
  'privacyValueDisallowChatParticipants': _privacyValueDisallowChatParticipants,
  'account.privacyRules': _accountPrivacyRules,
  'accountDaysTTL': _accountDaysTTL,
  'documentAttributeImageSize': _documentAttributeImageSize,
  'documentAttributeAnimated': _documentAttributeAnimated,
  'documentAttributeSticker': _documentAttributeSticker,
  'documentAttributeVideo': _documentAttributeVideo,
  'documentAttributeAudio': _documentAttributeAudio,
  'documentAttributeFilename': _documentAttributeFilename,
  'documentAttributeHasStickers': _documentAttributeHasStickers,
  'messages.stickersNotModified': _messagesStickersNotModified,
  'messages.stickers': _messagesStickers,
  'stickerPack': _stickerPack,
  'messages.allStickersNotModified': _messagesAllStickersNotModified,
  'messages.allStickers': _messagesAllStickers,
  'messages.affectedMessages': _messagesAffectedMessages,
  'webPageEmpty': _webPageEmpty,
  'webPagePending': _webPagePending,
  'webPage': _webPage,
  'webPageNotModified': _webPageNotModified,
  'authorization': _authorization,
  'account.authorizations': _accountAuthorizations,
  'account.password': _accountPassword,
  'account.passwordSettings': _accountPasswordSettings,
  'account.passwordInputSettings': _accountPasswordInputSettings,
  'auth.passwordRecovery': _authPasswordRecovery,
  'receivedNotifyMessage': _receivedNotifyMessage,
  'chatInviteEmpty': _chatInviteEmpty,
  'chatInviteExported': _chatInviteExported,
  'chatInviteAlready': _chatInviteAlready,
  'chatInvite': _chatInvite,
  'inputStickerSetEmpty': _inputStickerSetEmpty,
  'inputStickerSetID': _inputStickerSetID,
  'inputStickerSetShortName': _inputStickerSetShortName,
  'inputStickerSetAnimatedEmoji': _inputStickerSetAnimatedEmoji,
  'stickerSet': _stickerSet,
  'messages.stickerSet': _messagesStickerSet,
  'botCommand': _botCommand,
  'botInfo': _botInfo,
  'keyboardButton': _keyboardButton,
  'keyboardButtonUrl': _keyboardButtonUrl,
  'keyboardButtonCallback': _keyboardButtonCallback,
  'keyboardButtonRequestPhone': _keyboardButtonRequestPhone,
  'keyboardButtonRequestGeoLocation': _keyboardButtonRequestGeoLocation,
  'keyboardButtonSwitchInline': _keyboardButtonSwitchInline,
  'keyboardButtonGame': _keyboardButtonGame,
  'keyboardButtonBuy': _keyboardButtonBuy,
  'keyboardButtonUrlAuth': _keyboardButtonUrlAuth,
  'inputKeyboardButtonUrlAuth': _inputKeyboardButtonUrlAuth,
  'keyboardButtonRow': _keyboardButtonRow,
  'replyKeyboardHide': _replyKeyboardHide,
  'replyKeyboardForceReply': _replyKeyboardForceReply,
  'replyKeyboardMarkup': _replyKeyboardMarkup,
  'replyInlineMarkup': _replyInlineMarkup,
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
  'messageEntityMentionName': _messageEntityMentionName,
  'inputMessageEntityMentionName': _inputMessageEntityMentionName,
  'messageEntityPhone': _messageEntityPhone,
  'messageEntityCashtag': _messageEntityCashtag,
  'messageEntityUnderline': _messageEntityUnderline,
  'messageEntityStrike': _messageEntityStrike,
  'messageEntityBlockquote': _messageEntityBlockquote,
  'inputChannelEmpty': _inputChannelEmpty,
  'inputChannel': _inputChannel,
  'inputChannelFromMessage': _inputChannelFromMessage,
  'contacts.resolvedPeer': _contactsResolvedPeer,
  'messageRange': _messageRange,
  'updates.channelDifferenceEmpty': _updatesChannelDifferenceEmpty,
  'updates.channelDifferenceTooLong': _updatesChannelDifferenceTooLong,
  'updates.channelDifference': _updatesChannelDifference,
  'channelMessagesFilterEmpty': _channelMessagesFilterEmpty,
  'channelMessagesFilter': _channelMessagesFilter,
  'channelParticipant': _channelParticipant,
  'channelParticipantSelf': _channelParticipantSelf,
  'channelParticipantCreator': _channelParticipantCreator,
  'channelParticipantAdmin': _channelParticipantAdmin,
  'channelParticipantBanned': _channelParticipantBanned,
  'channelParticipantsRecent': _channelParticipantsRecent,
  'channelParticipantsAdmins': _channelParticipantsAdmins,
  'channelParticipantsKicked': _channelParticipantsKicked,
  'channelParticipantsBots': _channelParticipantsBots,
  'channelParticipantsBanned': _channelParticipantsBanned,
  'channelParticipantsSearch': _channelParticipantsSearch,
  'channelParticipantsContacts': _channelParticipantsContacts,
  'channels.channelParticipants': _channelsChannelParticipants,
  'channels.channelParticipantsNotModified': _channelsChannelParticipantsNotModified,
  'channels.channelParticipant': _channelsChannelParticipant,
  'help.termsOfService': _helpTermsOfService,
  'foundGif': _foundGif,
  'foundGifCached': _foundGifCached,
  'messages.foundGifs': _messagesFoundGifs,
  'messages.savedGifsNotModified': _messagesSavedGifsNotModified,
  'messages.savedGifs': _messagesSavedGifs,
  'inputBotInlineMessageMediaAuto': _inputBotInlineMessageMediaAuto,
  'inputBotInlineMessageText': _inputBotInlineMessageText,
  'inputBotInlineMessageMediaGeo': _inputBotInlineMessageMediaGeo,
  'inputBotInlineMessageMediaVenue': _inputBotInlineMessageMediaVenue,
  'inputBotInlineMessageMediaContact': _inputBotInlineMessageMediaContact,
  'inputBotInlineMessageGame': _inputBotInlineMessageGame,
  'inputBotInlineResult': _inputBotInlineResult,
  'inputBotInlineResultPhoto': _inputBotInlineResultPhoto,
  'inputBotInlineResultDocument': _inputBotInlineResultDocument,
  'inputBotInlineResultGame': _inputBotInlineResultGame,
  'botInlineMessageMediaAuto': _botInlineMessageMediaAuto,
  'botInlineMessageText': _botInlineMessageText,
  'botInlineMessageMediaGeo': _botInlineMessageMediaGeo,
  'botInlineMessageMediaVenue': _botInlineMessageMediaVenue,
  'botInlineMessageMediaContact': _botInlineMessageMediaContact,
  'botInlineResult': _botInlineResult,
  'botInlineMediaResult': _botInlineMediaResult,
  'messages.botResults': _messagesBotResults,
  'exportedMessageLink': _exportedMessageLink,
  'messageFwdHeader': _messageFwdHeader,
  'auth.codeTypeSms': _authCodeTypeSms,
  'auth.codeTypeCall': _authCodeTypeCall,
  'auth.codeTypeFlashCall': _authCodeTypeFlashCall,
  'auth.sentCodeTypeApp': _authSentCodeTypeApp,
  'auth.sentCodeTypeSms': _authSentCodeTypeSms,
  'auth.sentCodeTypeCall': _authSentCodeTypeCall,
  'auth.sentCodeTypeFlashCall': _authSentCodeTypeFlashCall,
  'messages.botCallbackAnswer': _messagesBotCallbackAnswer,
  'messages.messageEditData': _messagesMessageEditData,
  'inputBotInlineMessageID': _inputBotInlineMessageID,
  'inlineBotSwitchPM': _inlineBotSwitchPM,
  'messages.peerDialogs': _messagesPeerDialogs,
  'topPeer': _topPeer,
  'topPeerCategoryBotsPM': _topPeerCategoryBotsPM,
  'topPeerCategoryBotsInline': _topPeerCategoryBotsInline,
  'topPeerCategoryCorrespondents': _topPeerCategoryCorrespondents,
  'topPeerCategoryGroups': _topPeerCategoryGroups,
  'topPeerCategoryChannels': _topPeerCategoryChannels,
  'topPeerCategoryPhoneCalls': _topPeerCategoryPhoneCalls,
  'topPeerCategoryForwardUsers': _topPeerCategoryForwardUsers,
  'topPeerCategoryForwardChats': _topPeerCategoryForwardChats,
  'topPeerCategoryPeers': _topPeerCategoryPeers,
  'contacts.topPeersNotModified': _contactsTopPeersNotModified,
  'contacts.topPeers': _contactsTopPeers,
  'contacts.topPeersDisabled': _contactsTopPeersDisabled,
  'draftMessageEmpty': _draftMessageEmpty,
  'draftMessage': _draftMessage,
  'messages.featuredStickersNotModified': _messagesFeaturedStickersNotModified,
  'messages.featuredStickers': _messagesFeaturedStickers,
  'messages.recentStickersNotModified': _messagesRecentStickersNotModified,
  'messages.recentStickers': _messagesRecentStickers,
  'messages.archivedStickers': _messagesArchivedStickers,
  'messages.stickerSetInstallResultSuccess': _messagesStickerSetInstallResultSuccess,
  'messages.stickerSetInstallResultArchive': _messagesStickerSetInstallResultArchive,
  'stickerSetCovered': _stickerSetCovered,
  'stickerSetMultiCovered': _stickerSetMultiCovered,
  'maskCoords': _maskCoords,
  'inputStickeredMediaPhoto': _inputStickeredMediaPhoto,
  'inputStickeredMediaDocument': _inputStickeredMediaDocument,
  'game': _game,
  'inputGameID': _inputGameID,
  'inputGameShortName': _inputGameShortName,
  'highScore': _highScore,
  'messages.highScores': _messagesHighScores,
  'textEmpty': _textEmpty,
  'textPlain': _textPlain,
  'textBold': _textBold,
  'textItalic': _textItalic,
  'textUnderline': _textUnderline,
  'textStrike': _textStrike,
  'textFixed': _textFixed,
  'textUrl': _textUrl,
  'textEmail': _textEmail,
  'textConcat': _textConcat,
  'textSubscript': _textSubscript,
  'textSuperscript': _textSuperscript,
  'textMarked': _textMarked,
  'textPhone': _textPhone,
  'textImage': _textImage,
  'textAnchor': _textAnchor,
  'pageBlockUnsupported': _pageBlockUnsupported,
  'pageBlockTitle': _pageBlockTitle,
  'pageBlockSubtitle': _pageBlockSubtitle,
  'pageBlockAuthorDate': _pageBlockAuthorDate,
  'pageBlockHeader': _pageBlockHeader,
  'pageBlockSubheader': _pageBlockSubheader,
  'pageBlockParagraph': _pageBlockParagraph,
  'pageBlockPreformatted': _pageBlockPreformatted,
  'pageBlockFooter': _pageBlockFooter,
  'pageBlockDivider': _pageBlockDivider,
  'pageBlockAnchor': _pageBlockAnchor,
  'pageBlockList': _pageBlockList,
  'pageBlockBlockquote': _pageBlockBlockquote,
  'pageBlockPullquote': _pageBlockPullquote,
  'pageBlockPhoto': _pageBlockPhoto,
  'pageBlockVideo': _pageBlockVideo,
  'pageBlockCover': _pageBlockCover,
  'pageBlockEmbed': _pageBlockEmbed,
  'pageBlockEmbedPost': _pageBlockEmbedPost,
  'pageBlockCollage': _pageBlockCollage,
  'pageBlockSlideshow': _pageBlockSlideshow,
  'pageBlockChannel': _pageBlockChannel,
  'pageBlockAudio': _pageBlockAudio,
  'pageBlockKicker': _pageBlockKicker,
  'pageBlockTable': _pageBlockTable,
  'pageBlockOrderedList': _pageBlockOrderedList,
  'pageBlockDetails': _pageBlockDetails,
  'pageBlockRelatedArticles': _pageBlockRelatedArticles,
  'pageBlockMap': _pageBlockMap,
  'phoneCallDiscardReasonMissed': _phoneCallDiscardReasonMissed,
  'phoneCallDiscardReasonDisconnect': _phoneCallDiscardReasonDisconnect,
  'phoneCallDiscardReasonHangup': _phoneCallDiscardReasonHangup,
  'phoneCallDiscardReasonBusy': _phoneCallDiscardReasonBusy,
  'dataJSON': _dataJSON,
  'labeledPrice': _labeledPrice,
  'invoice': _invoice,
  'paymentCharge': _paymentCharge,
  'postAddress': _postAddress,
  'paymentRequestedInfo': _paymentRequestedInfo,
  'paymentSavedCredentialsCard': _paymentSavedCredentialsCard,
  'webDocument': _webDocument,
  'webDocumentNoProxy': _webDocumentNoProxy,
  'inputWebDocument': _inputWebDocument,
  'inputWebFileLocation': _inputWebFileLocation,
  'inputWebFileGeoPointLocation': _inputWebFileGeoPointLocation,
  'upload.webFile': _uploadWebFile,
  'payments.paymentForm': _paymentsPaymentForm,
  'payments.validatedRequestedInfo': _paymentsValidatedRequestedInfo,
  'payments.paymentResult': _paymentsPaymentResult,
  'payments.paymentVerificationNeeded': _paymentsPaymentVerificationNeeded,
  'payments.paymentReceipt': _paymentsPaymentReceipt,
  'payments.savedInfo': _paymentsSavedInfo,
  'inputPaymentCredentialsSaved': _inputPaymentCredentialsSaved,
  'inputPaymentCredentials': _inputPaymentCredentials,
  'inputPaymentCredentialsApplePay': _inputPaymentCredentialsApplePay,
  'inputPaymentCredentialsAndroidPay': _inputPaymentCredentialsAndroidPay,
  'account.tmpPassword': _accountTmpPassword,
  'shippingOption': _shippingOption,
  'inputStickerSetItem': _inputStickerSetItem,
  'inputPhoneCall': _inputPhoneCall,
  'phoneCallEmpty': _phoneCallEmpty,
  'phoneCallWaiting': _phoneCallWaiting,
  'phoneCallRequested': _phoneCallRequested,
  'phoneCallAccepted': _phoneCallAccepted,
  'phoneCall': _phoneCall,
  'phoneCallDiscarded': _phoneCallDiscarded,
  'phoneConnection': _phoneConnection,
  'phoneCallProtocol': _phoneCallProtocol,
  'phone.phoneCall': _phonePhoneCall,
  'upload.cdnFileReuploadNeeded': _uploadCdnFileReuploadNeeded,
  'upload.cdnFile': _uploadCdnFile,
  'cdnPublicKey': _cdnPublicKey,
  'cdnConfig': _cdnConfig,
  'langPackString': _langPackString,
  'langPackStringPluralized': _langPackStringPluralized,
  'langPackStringDeleted': _langPackStringDeleted,
  'langPackDifference': _langPackDifference,
  'langPackLanguage': _langPackLanguage,
  'channelAdminLogEventActionChangeTitle': _channelAdminLogEventActionChangeTitle,
  'channelAdminLogEventActionChangeAbout': _channelAdminLogEventActionChangeAbout,
  'channelAdminLogEventActionChangeUsername': _channelAdminLogEventActionChangeUsername,
  'channelAdminLogEventActionChangePhoto': _channelAdminLogEventActionChangePhoto,
  'channelAdminLogEventActionToggleInvites': _channelAdminLogEventActionToggleInvites,
  'channelAdminLogEventActionToggleSignatures': _channelAdminLogEventActionToggleSignatures,
  'channelAdminLogEventActionUpdatePinned': _channelAdminLogEventActionUpdatePinned,
  'channelAdminLogEventActionEditMessage': _channelAdminLogEventActionEditMessage,
  'channelAdminLogEventActionDeleteMessage': _channelAdminLogEventActionDeleteMessage,
  'channelAdminLogEventActionParticipantJoin': _channelAdminLogEventActionParticipantJoin,
  'channelAdminLogEventActionParticipantLeave': _channelAdminLogEventActionParticipantLeave,
  'channelAdminLogEventActionParticipantInvite': _channelAdminLogEventActionParticipantInvite,
  'channelAdminLogEventActionParticipantToggleBan': _channelAdminLogEventActionParticipantToggleBan,
  'channelAdminLogEventActionParticipantToggleAdmin': _channelAdminLogEventActionParticipantToggleAdmin,
  'channelAdminLogEventActionChangeStickerSet': _channelAdminLogEventActionChangeStickerSet,
  'channelAdminLogEventActionTogglePreHistoryHidden': _channelAdminLogEventActionTogglePreHistoryHidden,
  'channelAdminLogEventActionDefaultBannedRights': _channelAdminLogEventActionDefaultBannedRights,
  'channelAdminLogEventActionStopPoll': _channelAdminLogEventActionStopPoll,
  'channelAdminLogEventActionChangeLinkedChat': _channelAdminLogEventActionChangeLinkedChat,
  'channelAdminLogEventActionChangeLocation': _channelAdminLogEventActionChangeLocation,
  'channelAdminLogEventActionToggleSlowMode': _channelAdminLogEventActionToggleSlowMode,
  'channelAdminLogEvent': _channelAdminLogEvent,
  'channels.adminLogResults': _channelsAdminLogResults,
  'channelAdminLogEventsFilter': _channelAdminLogEventsFilter,
  'popularContact': _popularContact,
  'messages.favedStickersNotModified': _messagesFavedStickersNotModified,
  'messages.favedStickers': _messagesFavedStickers,
  'recentMeUrlUnknown': _recentMeUrlUnknown,
  'recentMeUrlUser': _recentMeUrlUser,
  'recentMeUrlChat': _recentMeUrlChat,
  'recentMeUrlChatInvite': _recentMeUrlChatInvite,
  'recentMeUrlStickerSet': _recentMeUrlStickerSet,
  'help.recentMeUrls': _helpRecentMeUrls,
  'inputSingleMedia': _inputSingleMedia,
  'webAuthorization': _webAuthorization,
  'account.webAuthorizations': _accountWebAuthorizations,
  'inputMessageID': _inputMessageID,
  'inputMessageReplyTo': _inputMessageReplyTo,
  'inputMessagePinned': _inputMessagePinned,
  'inputDialogPeer': _inputDialogPeer,
  'inputDialogPeerFolder': _inputDialogPeerFolder,
  'dialogPeer': _dialogPeer,
  'dialogPeerFolder': _dialogPeerFolder,
  'messages.foundStickerSetsNotModified': _messagesFoundStickerSetsNotModified,
  'messages.foundStickerSets': _messagesFoundStickerSets,
  'fileHash': _fileHash,
  'inputClientProxy': _inputClientProxy,
  'help.proxyDataEmpty': _helpProxyDataEmpty,
  'help.proxyDataPromo': _helpProxyDataPromo,
  'help.termsOfServiceUpdateEmpty': _helpTermsOfServiceUpdateEmpty,
  'help.termsOfServiceUpdate': _helpTermsOfServiceUpdate,
  'inputSecureFileUploaded': _inputSecureFileUploaded,
  'inputSecureFile': _inputSecureFile,
  'secureFileEmpty': _secureFileEmpty,
  'secureFile': _secureFile,
  'secureData': _secureData,
  'securePlainPhone': _securePlainPhone,
  'securePlainEmail': _securePlainEmail,
  'secureValueTypePersonalDetails': _secureValueTypePersonalDetails,
  'secureValueTypePassport': _secureValueTypePassport,
  'secureValueTypeDriverLicense': _secureValueTypeDriverLicense,
  'secureValueTypeIdentityCard': _secureValueTypeIdentityCard,
  'secureValueTypeInternalPassport': _secureValueTypeInternalPassport,
  'secureValueTypeAddress': _secureValueTypeAddress,
  'secureValueTypeUtilityBill': _secureValueTypeUtilityBill,
  'secureValueTypeBankStatement': _secureValueTypeBankStatement,
  'secureValueTypeRentalAgreement': _secureValueTypeRentalAgreement,
  'secureValueTypePassportRegistration': _secureValueTypePassportRegistration,
  'secureValueTypeTemporaryRegistration': _secureValueTypeTemporaryRegistration,
  'secureValueTypePhone': _secureValueTypePhone,
  'secureValueTypeEmail': _secureValueTypeEmail,
  'secureValue': _secureValue,
  'inputSecureValue': _inputSecureValue,
  'secureValueHash': _secureValueHash,
  'secureValueErrorData': _secureValueErrorData,
  'secureValueErrorFrontSide': _secureValueErrorFrontSide,
  'secureValueErrorReverseSide': _secureValueErrorReverseSide,
  'secureValueErrorSelfie': _secureValueErrorSelfie,
  'secureValueErrorFile': _secureValueErrorFile,
  'secureValueErrorFiles': _secureValueErrorFiles,
  'secureValueError': _secureValueError,
  'secureValueErrorTranslationFile': _secureValueErrorTranslationFile,
  'secureValueErrorTranslationFiles': _secureValueErrorTranslationFiles,
  'secureCredentialsEncrypted': _secureCredentialsEncrypted,
  'account.authorizationForm': _accountAuthorizationForm,
  'account.sentEmailCode': _accountSentEmailCode,
  'help.deepLinkInfoEmpty': _helpDeepLinkInfoEmpty,
  'help.deepLinkInfo': _helpDeepLinkInfo,
  'savedPhoneContact': _savedPhoneContact,
  'account.takeout': _accountTakeout,
  'passwordKdfAlgoUnknown': _passwordKdfAlgoUnknown,
  'passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow': _passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow,
  'securePasswordKdfAlgoUnknown': _securePasswordKdfAlgoUnknown,
  'securePasswordKdfAlgoPBKDF2HMACSHA512iter100000': _securePasswordKdfAlgoPBKDF2HMACSHA512iter100000,
  'securePasswordKdfAlgoSHA512': _securePasswordKdfAlgoSHA512,
  'secureSecretSettings': _secureSecretSettings,
  'inputCheckPasswordEmpty': _inputCheckPasswordEmpty,
  'inputCheckPasswordSRP': _inputCheckPasswordSRP,
  'secureRequiredType': _secureRequiredType,
  'secureRequiredTypeOneOf': _secureRequiredTypeOneOf,
  'help.passportConfigNotModified': _helpPassportConfigNotModified,
  'help.passportConfig': _helpPassportConfig,
  'inputAppEvent': _inputAppEvent,
  'jsonObjectValue': _jsonObjectValue,
  'jsonNull': _jsonNull,
  'jsonBool': _jsonBool,
  'jsonNumber': _jsonNumber,
  'jsonString': _jsonString,
  'jsonArray': _jsonArray,
  'jsonObject': _jsonObject,
  'pageTableCell': _pageTableCell,
  'pageTableRow': _pageTableRow,
  'pageCaption': _pageCaption,
  'pageListItemText': _pageListItemText,
  'pageListItemBlocks': _pageListItemBlocks,
  'pageListOrderedItemText': _pageListOrderedItemText,
  'pageListOrderedItemBlocks': _pageListOrderedItemBlocks,
  'pageRelatedArticle': _pageRelatedArticle,
  'page': _page,
  'help.supportName': _helpSupportName,
  'help.userInfoEmpty': _helpUserInfoEmpty,
  'help.userInfo': _helpUserInfo,
  'pollAnswer': _pollAnswer,
  'poll': _poll,
  'pollAnswerVoters': _pollAnswerVoters,
  'pollResults': _pollResults,
  'chatOnlines': _chatOnlines,
  'statsURL': _statsURL,
  'chatAdminRights': _chatAdminRights,
  'chatBannedRights': _chatBannedRights,
  'inputWallPaper': _inputWallPaper,
  'inputWallPaperSlug': _inputWallPaperSlug,
  'account.wallPapersNotModified': _accountWallPapersNotModified,
  'account.wallPapers': _accountWallPapers,
  'codeSettings': _codeSettings,
  'wallPaperSettings': _wallPaperSettings,
  'autoDownloadSettings': _autoDownloadSettings,
  'account.autoDownloadSettings': _accountAutoDownloadSettings,
  'emojiKeyword': _emojiKeyword,
  'emojiKeywordDeleted': _emojiKeywordDeleted,
  'emojiKeywordsDifference': _emojiKeywordsDifference,
  'emojiURL': _emojiURL,
  'emojiLanguage': _emojiLanguage,
  'fileLocationToBeDeprecated': _fileLocationToBeDeprecated,
  'folder': _folder,
  'inputFolderPeer': _inputFolderPeer,
  'folderPeer': _folderPeer,
  'messages.searchCounter': _messagesSearchCounter,
  'urlAuthResultRequest': _urlAuthResultRequest,
  'urlAuthResultAccepted': _urlAuthResultAccepted,
  'urlAuthResultDefault': _urlAuthResultDefault,
  'channelLocationEmpty': _channelLocationEmpty,
  'channelLocation': _channelLocation,
  'peerLocated': _peerLocated,
  'restrictionReason': _restrictionReason,
  'inputTheme': _inputTheme,
  'inputThemeSlug': _inputThemeSlug,
  'themeDocumentNotModified': _themeDocumentNotModified,
  'theme': _theme,
  'account.themesNotModified': _accountThemesNotModified,
  'account.themes': _accountThemes,
}

function obj(s: ByteStream, o: any) {
  const func = builderMap[o._];
  func(s, o);
}

export function build(s: ByteStream, o: any) {
  return obj(s, o);
}
