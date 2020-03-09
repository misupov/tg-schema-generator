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
function i32(value: number) { s.writeInt32(value); }

function _boolFalse(o: any) {
  i32(0xbc799737);
}

function _boolTrue(o: any) {
  i32(0x997275b5);
}

function _true(o: any) {
  i32(0x3fedd339);
}

function _vector(o: any) {
  i32(0x1cb5c415);
}

function _error(o: any) {
  i32(0xc4b9f9bb);
  i32(o.code);
  str(o.text);
}

function _null(o: any) {
  i32(0x56730bcc);
}

function _inputPeerEmpty(o: any) {
  i32(0x7f3b18ea);
}

function _inputPeerSelf(o: any) {
  i32(0x7da07ec9);
}

function _inputPeerChat(o: any) {
  i32(0x179be863);
  i32(o.chat_id);
}

function _inputPeerUser(o: any) {
  i32(0x7b8e7de6);
  i32(o.user_id);
  i64(o.access_hash);
}

function _inputPeerChannel(o: any) {
  i32(0x20adaef8);
  i32(o.channel_id);
  i64(o.access_hash);
}

function _inputPeerUserFromMessage(o: any) {
  i32(0x17bae2e6);
  obj(o.peer); // InputPeer
  i32(o.msg_id);
  i32(o.user_id);
}

function _inputPeerChannelFromMessage(o: any) {
  i32(0x9c95f7bb);
  obj(o.peer); // InputPeer
  i32(o.msg_id);
  i32(o.channel_id);
}

function _inputUserEmpty(o: any) {
  i32(0xb98886cf);
}

function _inputUserSelf(o: any) {
  i32(0xf7c1b13f);
}

function _inputUser(o: any) {
  i32(0xd8292816);
  i32(o.user_id);
  i64(o.access_hash);
}

function _inputUserFromMessage(o: any) {
  i32(0x2d117597);
  obj(o.peer); // InputPeer
  i32(o.msg_id);
  i32(o.user_id);
}

function _inputPhoneContact(o: any) {
  i32(0xf392b7f4);
  i64(o.client_id);
  str(o.phone);
  str(o.first_name);
  str(o.last_name);
}

function _inputFile(o: any) {
  i32(0xf52ff27f);
  i64(o.id);
  i32(o.parts);
  str(o.name);
  str(o.md5_checksum);
}

function _inputFileBig(o: any) {
  i32(0xfa4f0bb5);
  i64(o.id);
  i32(o.parts);
  str(o.name);
}

function _inputMediaEmpty(o: any) {
  i32(0x9664f57f);
}

function _inputMediaUploadedPhoto(o: any) {
  i32(0x1e287d04);
  const flags = +!!o.stickers | +!!o.ttl_seconds << 1;
  i32(flags);
  obj(o.file); // InputFile
  if (o.stickers !== undefined) obj(o.stickers); // flags.0?Vector<InputDocument>
  if (o.ttl_seconds !== undefined) obj(o.ttl_seconds); // flags.1?int
}

function _inputMediaPhoto(o: any) {
  i32(0xb3ba0635);
  const flags = +!!o.ttl_seconds;
  i32(flags);
  obj(o.id); // InputPhoto
  if (o.ttl_seconds !== undefined) obj(o.ttl_seconds); // flags.0?int
}

function _inputMediaGeoPoint(o: any) {
  i32(0xf9c44144);
  obj(o.geo_point); // InputGeoPoint
}

function _inputMediaContact(o: any) {
  i32(0xf8ab7dfb);
  str(o.phone_number);
  str(o.first_name);
  str(o.last_name);
  str(o.vcard);
}

function _inputMediaUploadedDocument(o: any) {
  i32(0x5b38c6c1);
  const flags = +o.nosound_video << 3 | +!!o.thumb << 2 | +!!o.stickers | +!!o.ttl_seconds << 1;
  i32(flags);
  if (o.nosound_video !== undefined) obj(o.nosound_video); // flags.3?true
  obj(o.file); // InputFile
  if (o.thumb !== undefined) obj(o.thumb); // flags.2?InputFile
  str(o.mime_type);
  obj(o.attributes); // Vector<DocumentAttribute>
  if (o.stickers !== undefined) obj(o.stickers); // flags.0?Vector<InputDocument>
  if (o.ttl_seconds !== undefined) obj(o.ttl_seconds); // flags.1?int
}

function _inputMediaDocument(o: any) {
  i32(0x23ab23d2);
  const flags = +!!o.ttl_seconds;
  i32(flags);
  obj(o.id); // InputDocument
  if (o.ttl_seconds !== undefined) obj(o.ttl_seconds); // flags.0?int
}

function _inputMediaVenue(o: any) {
  i32(0xc13d1c11);
  obj(o.geo_point); // InputGeoPoint
  str(o.title);
  str(o.address);
  str(o.provider);
  str(o.venue_id);
  str(o.venue_type);
}

function _inputMediaGifExternal(o: any) {
  i32(0x4843b0fd);
  str(o.url);
  str(o.q);
}

function _inputMediaPhotoExternal(o: any) {
  i32(0xe5bbfe1a);
  const flags = +!!o.ttl_seconds;
  i32(flags);
  str(o.url);
  if (o.ttl_seconds !== undefined) obj(o.ttl_seconds); // flags.0?int
}

function _inputMediaDocumentExternal(o: any) {
  i32(0xfb52dc99);
  const flags = +!!o.ttl_seconds;
  i32(flags);
  str(o.url);
  if (o.ttl_seconds !== undefined) obj(o.ttl_seconds); // flags.0?int
}

function _inputMediaGame(o: any) {
  i32(0xd33f43f3);
  obj(o.id); // InputGame
}

function _inputMediaInvoice(o: any) {
  i32(0xf4e096c3);
  const flags = +!!o.photo;
  i32(flags);
  str(o.title);
  str(o.description);
  if (o.photo !== undefined) obj(o.photo); // flags.0?InputWebDocument
  obj(o.invoice); // Invoice
  bytes(o.payload);
  str(o.provider);
  obj(o.provider_data); // DataJSON
  str(o.start_param);
}

function _inputMediaGeoLive(o: any) {
  i32(0xce4e82fd);
  const flags = +o.stopped | +!!o.period << 1;
  i32(flags);
  if (o.stopped !== undefined) obj(o.stopped); // flags.0?true
  obj(o.geo_point); // InputGeoPoint
  if (o.period !== undefined) obj(o.period); // flags.1?int
}

function _inputMediaPoll(o: any) {
  i32(0x6b3765b);
  obj(o.poll); // Poll
}

function _inputChatPhotoEmpty(o: any) {
  i32(0x1ca48f57);
}

function _inputChatUploadedPhoto(o: any) {
  i32(0x927c55b4);
  obj(o.file); // InputFile
}

function _inputChatPhoto(o: any) {
  i32(0x8953ad37);
  obj(o.id); // InputPhoto
}

function _inputGeoPointEmpty(o: any) {
  i32(0xe4c123d6);
}

function _inputGeoPoint(o: any) {
  i32(0xf3b7acc9);
  f64(o.lat);
  f64(o.long);
}

function _inputPhotoEmpty(o: any) {
  i32(0x1cd7bf0d);
}

function _inputPhoto(o: any) {
  i32(0x3bb3b94a);
  i64(o.id);
  i64(o.access_hash);
  bytes(o.file_reference);
}

function _inputFileLocation(o: any) {
  i32(0xdfdaabe1);
  i64(o.volume_id);
  i32(o.local_id);
  i64(o.secret);
  bytes(o.file_reference);
}

function _inputEncryptedFileLocation(o: any) {
  i32(0xf5235d55);
  i64(o.id);
  i64(o.access_hash);
}

function _inputDocumentFileLocation(o: any) {
  i32(0xbad07584);
  i64(o.id);
  i64(o.access_hash);
  bytes(o.file_reference);
  str(o.thumb_size);
}

function _inputSecureFileLocation(o: any) {
  i32(0xcbc7ee28);
  i64(o.id);
  i64(o.access_hash);
}

function _inputTakeoutFileLocation(o: any) {
  i32(0x29be5899);
}

function _inputPhotoFileLocation(o: any) {
  i32(0x40181ffe);
  i64(o.id);
  i64(o.access_hash);
  bytes(o.file_reference);
  str(o.thumb_size);
}

function _inputPhotoLegacyFileLocation(o: any) {
  i32(0xd83466f3);
  i64(o.id);
  i64(o.access_hash);
  bytes(o.file_reference);
  i64(o.volume_id);
  i32(o.local_id);
  i64(o.secret);
}

function _inputPeerPhotoFileLocation(o: any) {
  i32(0x27d69997);
  const flags = +o.big;
  i32(flags);
  if (o.big !== undefined) obj(o.big); // flags.0?true
  obj(o.peer); // InputPeer
  i64(o.volume_id);
  i32(o.local_id);
}

function _inputStickerSetThumb(o: any) {
  i32(0xdbaeae9);
  obj(o.stickerset); // InputStickerSet
  i64(o.volume_id);
  i32(o.local_id);
}

function _peerUser(o: any) {
  i32(0x9db1bc6d);
  i32(o.user_id);
}

function _peerChat(o: any) {
  i32(0xbad0e5bb);
  i32(o.chat_id);
}

function _peerChannel(o: any) {
  i32(0xbddde532);
  i32(o.channel_id);
}

function _storageFileUnknown(o: any) {
  i32(0xaa963b05);
}

function _storageFilePartial(o: any) {
  i32(0x40bc6f52);
}

function _storageFileJpeg(o: any) {
  i32(0x7efe0e);
}

function _storageFileGif(o: any) {
  i32(0xcae1aadf);
}

function _storageFilePng(o: any) {
  i32(0xa4f63c0);
}

function _storageFilePdf(o: any) {
  i32(0xae1e508d);
}

function _storageFileMp3(o: any) {
  i32(0x528a0677);
}

function _storageFileMov(o: any) {
  i32(0x4b09ebbc);
}

function _storageFileMp4(o: any) {
  i32(0xb3cea0e4);
}

function _storageFileWebp(o: any) {
  i32(0x1081464c);
}

function _userEmpty(o: any) {
  i32(0x200250ba);
  i32(o.id);
}

function _user(o: any) {
  i32(0x938458c1);
  const flags = +o.self << 10 | +o.contact << 11 | +o.mutual_contact << 12 | +o.deleted << 13 | +o.bot << 14 | +o.bot_chat_history << 15 | +o.bot_nochats << 16 | +o.verified << 17 | +o.restricted << 18 | +o.min << 20 | +o.bot_inline_geo << 21 | +o.support << 23 | +o.scam << 24 | +!!o.access_hash | +!!o.first_name << 1 | +!!o.last_name << 2 | +!!o.username << 3 | +!!o.phone << 4 | +!!o.photo << 5 | +!!o.status << 6 | +!!o.bot_info_version << 14 | +!!o.restriction_reason << 18 | +!!o.bot_inline_placeholder << 19 | +!!o.lang_code << 22;
  i32(flags);
  if (o.self !== undefined) obj(o.self); // flags.10?true
  if (o.contact !== undefined) obj(o.contact); // flags.11?true
  if (o.mutual_contact !== undefined) obj(o.mutual_contact); // flags.12?true
  if (o.deleted !== undefined) obj(o.deleted); // flags.13?true
  if (o.bot !== undefined) obj(o.bot); // flags.14?true
  if (o.bot_chat_history !== undefined) obj(o.bot_chat_history); // flags.15?true
  if (o.bot_nochats !== undefined) obj(o.bot_nochats); // flags.16?true
  if (o.verified !== undefined) obj(o.verified); // flags.17?true
  if (o.restricted !== undefined) obj(o.restricted); // flags.18?true
  if (o.min !== undefined) obj(o.min); // flags.20?true
  if (o.bot_inline_geo !== undefined) obj(o.bot_inline_geo); // flags.21?true
  if (o.support !== undefined) obj(o.support); // flags.23?true
  if (o.scam !== undefined) obj(o.scam); // flags.24?true
  i32(o.id);
  if (o.access_hash !== undefined) obj(o.access_hash); // flags.0?long
  if (o.first_name !== undefined) obj(o.first_name); // flags.1?string
  if (o.last_name !== undefined) obj(o.last_name); // flags.2?string
  if (o.username !== undefined) obj(o.username); // flags.3?string
  if (o.phone !== undefined) obj(o.phone); // flags.4?string
  if (o.photo !== undefined) obj(o.photo); // flags.5?UserProfilePhoto
  if (o.status !== undefined) obj(o.status); // flags.6?UserStatus
  if (o.bot_info_version !== undefined) obj(o.bot_info_version); // flags.14?int
  if (o.restriction_reason !== undefined) obj(o.restriction_reason); // flags.18?Vector<RestrictionReason>
  if (o.bot_inline_placeholder !== undefined) obj(o.bot_inline_placeholder); // flags.19?string
  if (o.lang_code !== undefined) obj(o.lang_code); // flags.22?string
}

function _userProfilePhotoEmpty(o: any) {
  i32(0x4f11bae1);
}

function _userProfilePhoto(o: any) {
  i32(0xecd75d8c);
  i64(o.photo_id);
  obj(o.photo_small); // FileLocation
  obj(o.photo_big); // FileLocation
  i32(o.dc_id);
}

function _userStatusEmpty(o: any) {
  i32(0x9d05049);
}

function _userStatusOnline(o: any) {
  i32(0xedb93949);
  i32(o.expires);
}

function _userStatusOffline(o: any) {
  i32(0x8c703f);
  i32(o.was_online);
}

function _userStatusRecently(o: any) {
  i32(0xe26f42f1);
}

function _userStatusLastWeek(o: any) {
  i32(0x7bf09fc);
}

function _userStatusLastMonth(o: any) {
  i32(0x77ebc742);
}

function _chatEmpty(o: any) {
  i32(0x9ba2d800);
  i32(o.id);
}

function _chat(o: any) {
  i32(0x3bda1bde);
  const flags = +o.creator | +o.kicked << 1 | +o.left << 2 | +o.deactivated << 5 | +!!o.migrated_to << 6 | +!!o.admin_rights << 14 | +!!o.default_banned_rights << 18;
  i32(flags);
  if (o.creator !== undefined) obj(o.creator); // flags.0?true
  if (o.kicked !== undefined) obj(o.kicked); // flags.1?true
  if (o.left !== undefined) obj(o.left); // flags.2?true
  if (o.deactivated !== undefined) obj(o.deactivated); // flags.5?true
  i32(o.id);
  str(o.title);
  obj(o.photo); // ChatPhoto
  i32(o.participants_count);
  i32(o.date);
  i32(o.version);
  if (o.migrated_to !== undefined) obj(o.migrated_to); // flags.6?InputChannel
  if (o.admin_rights !== undefined) obj(o.admin_rights); // flags.14?ChatAdminRights
  if (o.default_banned_rights !== undefined) obj(o.default_banned_rights); // flags.18?ChatBannedRights
}

function _chatForbidden(o: any) {
  i32(0x7328bdb);
  i32(o.id);
  str(o.title);
}

function _channel(o: any) {
  i32(0xd31a961e);
  const flags = +o.creator | +o.left << 2 | +o.broadcast << 5 | +o.verified << 7 | +o.megagroup << 8 | +o.restricted << 9 | +o.signatures << 11 | +o.min << 12 | +o.scam << 19 | +o.has_link << 20 | +o.has_geo << 21 | +o.slowmode_enabled << 22 | +!!o.access_hash << 13 | +!!o.username << 6 | +!!o.restriction_reason << 9 | +!!o.admin_rights << 14 | +!!o.banned_rights << 15 | +!!o.default_banned_rights << 18 | +!!o.participants_count << 17;
  i32(flags);
  if (o.creator !== undefined) obj(o.creator); // flags.0?true
  if (o.left !== undefined) obj(o.left); // flags.2?true
  if (o.broadcast !== undefined) obj(o.broadcast); // flags.5?true
  if (o.verified !== undefined) obj(o.verified); // flags.7?true
  if (o.megagroup !== undefined) obj(o.megagroup); // flags.8?true
  if (o.restricted !== undefined) obj(o.restricted); // flags.9?true
  if (o.signatures !== undefined) obj(o.signatures); // flags.11?true
  if (o.min !== undefined) obj(o.min); // flags.12?true
  if (o.scam !== undefined) obj(o.scam); // flags.19?true
  if (o.has_link !== undefined) obj(o.has_link); // flags.20?true
  if (o.has_geo !== undefined) obj(o.has_geo); // flags.21?true
  if (o.slowmode_enabled !== undefined) obj(o.slowmode_enabled); // flags.22?true
  i32(o.id);
  if (o.access_hash !== undefined) obj(o.access_hash); // flags.13?long
  str(o.title);
  if (o.username !== undefined) obj(o.username); // flags.6?string
  obj(o.photo); // ChatPhoto
  i32(o.date);
  i32(o.version);
  if (o.restriction_reason !== undefined) obj(o.restriction_reason); // flags.9?Vector<RestrictionReason>
  if (o.admin_rights !== undefined) obj(o.admin_rights); // flags.14?ChatAdminRights
  if (o.banned_rights !== undefined) obj(o.banned_rights); // flags.15?ChatBannedRights
  if (o.default_banned_rights !== undefined) obj(o.default_banned_rights); // flags.18?ChatBannedRights
  if (o.participants_count !== undefined) obj(o.participants_count); // flags.17?int
}

function _channelForbidden(o: any) {
  i32(0x289da732);
  const flags = +o.broadcast << 5 | +o.megagroup << 8 | +!!o.until_date << 16;
  i32(flags);
  if (o.broadcast !== undefined) obj(o.broadcast); // flags.5?true
  if (o.megagroup !== undefined) obj(o.megagroup); // flags.8?true
  i32(o.id);
  i64(o.access_hash);
  str(o.title);
  if (o.until_date !== undefined) obj(o.until_date); // flags.16?int
}

function _chatFull(o: any) {
  i32(0x1b7c9db3);
  const flags = +o.can_set_username << 7 | +o.has_scheduled << 8 | +!!o.chat_photo << 2 | +!!o.bot_info << 3 | +!!o.pinned_msg_id << 6 | +!!o.folder_id << 11;
  i32(flags);
  if (o.can_set_username !== undefined) obj(o.can_set_username); // flags.7?true
  if (o.has_scheduled !== undefined) obj(o.has_scheduled); // flags.8?true
  i32(o.id);
  str(o.about);
  obj(o.participants); // ChatParticipants
  if (o.chat_photo !== undefined) obj(o.chat_photo); // flags.2?Photo
  obj(o.notify_settings); // PeerNotifySettings
  obj(o.exported_invite); // ExportedChatInvite
  if (o.bot_info !== undefined) obj(o.bot_info); // flags.3?Vector<BotInfo>
  if (o.pinned_msg_id !== undefined) obj(o.pinned_msg_id); // flags.6?int
  if (o.folder_id !== undefined) obj(o.folder_id); // flags.11?int
}

function _channelFull(o: any) {
  i32(0x2d895c74);
  const flags = +o.can_view_participants << 3 | +o.can_set_username << 6 | +o.can_set_stickers << 7 | +o.hidden_prehistory << 10 | +o.can_view_stats << 12 | +o.can_set_location << 16 | +o.has_scheduled << 19 | +!!o.participants_count | +!!o.admins_count << 1 | +!!o.kicked_count << 2 | +!!o.banned_count << 2 | +!!o.online_count << 13 | +!!o.migrated_from_chat_id << 4 | +!!o.migrated_from_max_id << 4 | +!!o.pinned_msg_id << 5 | +!!o.stickerset << 8 | +!!o.available_min_id << 9 | +!!o.folder_id << 11 | +!!o.linked_chat_id << 14 | +!!o.location << 15 | +!!o.slowmode_seconds << 17 | +!!o.slowmode_next_send_date << 18;
  i32(flags);
  if (o.can_view_participants !== undefined) obj(o.can_view_participants); // flags.3?true
  if (o.can_set_username !== undefined) obj(o.can_set_username); // flags.6?true
  if (o.can_set_stickers !== undefined) obj(o.can_set_stickers); // flags.7?true
  if (o.hidden_prehistory !== undefined) obj(o.hidden_prehistory); // flags.10?true
  if (o.can_view_stats !== undefined) obj(o.can_view_stats); // flags.12?true
  if (o.can_set_location !== undefined) obj(o.can_set_location); // flags.16?true
  if (o.has_scheduled !== undefined) obj(o.has_scheduled); // flags.19?true
  i32(o.id);
  str(o.about);
  if (o.participants_count !== undefined) obj(o.participants_count); // flags.0?int
  if (o.admins_count !== undefined) obj(o.admins_count); // flags.1?int
  if (o.kicked_count !== undefined) obj(o.kicked_count); // flags.2?int
  if (o.banned_count !== undefined) obj(o.banned_count); // flags.2?int
  if (o.online_count !== undefined) obj(o.online_count); // flags.13?int
  i32(o.read_inbox_max_id);
  i32(o.read_outbox_max_id);
  i32(o.unread_count);
  obj(o.chat_photo); // Photo
  obj(o.notify_settings); // PeerNotifySettings
  obj(o.exported_invite); // ExportedChatInvite
  obj(o.bot_info); // Vector<BotInfo>
  if (o.migrated_from_chat_id !== undefined) obj(o.migrated_from_chat_id); // flags.4?int
  if (o.migrated_from_max_id !== undefined) obj(o.migrated_from_max_id); // flags.4?int
  if (o.pinned_msg_id !== undefined) obj(o.pinned_msg_id); // flags.5?int
  if (o.stickerset !== undefined) obj(o.stickerset); // flags.8?StickerSet
  if (o.available_min_id !== undefined) obj(o.available_min_id); // flags.9?int
  if (o.folder_id !== undefined) obj(o.folder_id); // flags.11?int
  if (o.linked_chat_id !== undefined) obj(o.linked_chat_id); // flags.14?int
  if (o.location !== undefined) obj(o.location); // flags.15?ChannelLocation
  if (o.slowmode_seconds !== undefined) obj(o.slowmode_seconds); // flags.17?int
  if (o.slowmode_next_send_date !== undefined) obj(o.slowmode_next_send_date); // flags.18?int
  i32(o.pts);
}

function _chatParticipant(o: any) {
  i32(0xc8d7493e);
  i32(o.user_id);
  i32(o.inviter_id);
  i32(o.date);
}

function _chatParticipantCreator(o: any) {
  i32(0xda13538a);
  i32(o.user_id);
}

function _chatParticipantAdmin(o: any) {
  i32(0xe2d6e436);
  i32(o.user_id);
  i32(o.inviter_id);
  i32(o.date);
}

function _chatParticipantsForbidden(o: any) {
  i32(0xfc900c2b);
  const flags = +!!o.self_participant;
  i32(flags);
  i32(o.chat_id);
  if (o.self_participant !== undefined) obj(o.self_participant); // flags.0?ChatParticipant
}

function _chatParticipants(o: any) {
  i32(0x3f460fed);
  i32(o.chat_id);
  obj(o.participants); // Vector<ChatParticipant>
  i32(o.version);
}

function _chatPhotoEmpty(o: any) {
  i32(0x37c1011c);
}

function _chatPhoto(o: any) {
  i32(0x475cdbd5);
  obj(o.photo_small); // FileLocation
  obj(o.photo_big); // FileLocation
  i32(o.dc_id);
}

function _messageEmpty(o: any) {
  i32(0x83e5de54);
  i32(o.id);
}

function _message(o: any) {
  i32(0x452c0e65);
  const flags = +o.out << 1 | +o.mentioned << 4 | +o.media_unread << 5 | +o.silent << 13 | +o.post << 14 | +o.from_scheduled << 18 | +o.legacy << 19 | +o.edit_hide << 21 | +!!o.from_id << 8 | +!!o.fwd_from << 2 | +!!o.via_bot_id << 11 | +!!o.reply_to_msg_id << 3 | +!!o.media << 9 | +!!o.reply_markup << 6 | +!!o.entities << 7 | +!!o.views << 10 | +!!o.edit_date << 15 | +!!o.post_author << 16 | +!!o.grouped_id << 17 | +!!o.restriction_reason << 22;
  i32(flags);
  if (o.out !== undefined) obj(o.out); // flags.1?true
  if (o.mentioned !== undefined) obj(o.mentioned); // flags.4?true
  if (o.media_unread !== undefined) obj(o.media_unread); // flags.5?true
  if (o.silent !== undefined) obj(o.silent); // flags.13?true
  if (o.post !== undefined) obj(o.post); // flags.14?true
  if (o.from_scheduled !== undefined) obj(o.from_scheduled); // flags.18?true
  if (o.legacy !== undefined) obj(o.legacy); // flags.19?true
  if (o.edit_hide !== undefined) obj(o.edit_hide); // flags.21?true
  i32(o.id);
  if (o.from_id !== undefined) obj(o.from_id); // flags.8?int
  obj(o.to_id); // Peer
  if (o.fwd_from !== undefined) obj(o.fwd_from); // flags.2?MessageFwdHeader
  if (o.via_bot_id !== undefined) obj(o.via_bot_id); // flags.11?int
  if (o.reply_to_msg_id !== undefined) obj(o.reply_to_msg_id); // flags.3?int
  i32(o.date);
  str(o.message);
  if (o.media !== undefined) obj(o.media); // flags.9?MessageMedia
  if (o.reply_markup !== undefined) obj(o.reply_markup); // flags.6?ReplyMarkup
  if (o.entities !== undefined) obj(o.entities); // flags.7?Vector<MessageEntity>
  if (o.views !== undefined) obj(o.views); // flags.10?int
  if (o.edit_date !== undefined) obj(o.edit_date); // flags.15?int
  if (o.post_author !== undefined) obj(o.post_author); // flags.16?string
  if (o.grouped_id !== undefined) obj(o.grouped_id); // flags.17?long
  if (o.restriction_reason !== undefined) obj(o.restriction_reason); // flags.22?Vector<RestrictionReason>
}

function _messageService(o: any) {
  i32(0x9e19a1f6);
  const flags = +o.out << 1 | +o.mentioned << 4 | +o.media_unread << 5 | +o.silent << 13 | +o.post << 14 | +o.legacy << 19 | +!!o.from_id << 8 | +!!o.reply_to_msg_id << 3;
  i32(flags);
  if (o.out !== undefined) obj(o.out); // flags.1?true
  if (o.mentioned !== undefined) obj(o.mentioned); // flags.4?true
  if (o.media_unread !== undefined) obj(o.media_unread); // flags.5?true
  if (o.silent !== undefined) obj(o.silent); // flags.13?true
  if (o.post !== undefined) obj(o.post); // flags.14?true
  if (o.legacy !== undefined) obj(o.legacy); // flags.19?true
  i32(o.id);
  if (o.from_id !== undefined) obj(o.from_id); // flags.8?int
  obj(o.to_id); // Peer
  if (o.reply_to_msg_id !== undefined) obj(o.reply_to_msg_id); // flags.3?int
  i32(o.date);
  obj(o.action); // MessageAction
}

function _messageMediaEmpty(o: any) {
  i32(0x3ded6320);
}

function _messageMediaPhoto(o: any) {
  i32(0x695150d7);
  const flags = +!!o.photo | +!!o.ttl_seconds << 2;
  i32(flags);
  if (o.photo !== undefined) obj(o.photo); // flags.0?Photo
  if (o.ttl_seconds !== undefined) obj(o.ttl_seconds); // flags.2?int
}

function _messageMediaGeo(o: any) {
  i32(0x56e0d474);
  obj(o.geo); // GeoPoint
}

function _messageMediaContact(o: any) {
  i32(0xcbf24940);
  str(o.phone_number);
  str(o.first_name);
  str(o.last_name);
  str(o.vcard);
  i32(o.user_id);
}

function _messageMediaUnsupported(o: any) {
  i32(0x9f84f49e);
}

function _messageMediaDocument(o: any) {
  i32(0x9cb070d7);
  const flags = +!!o.document | +!!o.ttl_seconds << 2;
  i32(flags);
  if (o.document !== undefined) obj(o.document); // flags.0?Document
  if (o.ttl_seconds !== undefined) obj(o.ttl_seconds); // flags.2?int
}

function _messageMediaWebPage(o: any) {
  i32(0xa32dd600);
  obj(o.webpage); // WebPage
}

function _messageMediaVenue(o: any) {
  i32(0x2ec0533f);
  obj(o.geo); // GeoPoint
  str(o.title);
  str(o.address);
  str(o.provider);
  str(o.venue_id);
  str(o.venue_type);
}

function _messageMediaGame(o: any) {
  i32(0xfdb19008);
  obj(o.game); // Game
}

function _messageMediaInvoice(o: any) {
  i32(0x84551347);
  const flags = +o.shipping_address_requested << 1 | +o.test << 3 | +!!o.photo | +!!o.receipt_msg_id << 2;
  i32(flags);
  if (o.shipping_address_requested !== undefined) obj(o.shipping_address_requested); // flags.1?true
  if (o.test !== undefined) obj(o.test); // flags.3?true
  str(o.title);
  str(o.description);
  if (o.photo !== undefined) obj(o.photo); // flags.0?WebDocument
  if (o.receipt_msg_id !== undefined) obj(o.receipt_msg_id); // flags.2?int
  str(o.currency);
  i64(o.total_amount);
  str(o.start_param);
}

function _messageMediaGeoLive(o: any) {
  i32(0x7c3c2609);
  obj(o.geo); // GeoPoint
  i32(o.period);
}

function _messageMediaPoll(o: any) {
  i32(0x4bd6e798);
  obj(o.poll); // Poll
  obj(o.results); // PollResults
}

function _messageActionEmpty(o: any) {
  i32(0xb6aef7b0);
}

function _messageActionChatCreate(o: any) {
  i32(0xa6638b9a);
  str(o.title);
  obj(o.users); // Vector<int>
}

function _messageActionChatEditTitle(o: any) {
  i32(0xb5a1ce5a);
  str(o.title);
}

function _messageActionChatEditPhoto(o: any) {
  i32(0x7fcb13a8);
  obj(o.photo); // Photo
}

function _messageActionChatDeletePhoto(o: any) {
  i32(0x95e3fbef);
}

function _messageActionChatAddUser(o: any) {
  i32(0x488a7337);
  obj(o.users); // Vector<int>
}

function _messageActionChatDeleteUser(o: any) {
  i32(0xb2ae9b0c);
  i32(o.user_id);
}

function _messageActionChatJoinedByLink(o: any) {
  i32(0xf89cf5e8);
  i32(o.inviter_id);
}

function _messageActionChannelCreate(o: any) {
  i32(0x95d2ac92);
  str(o.title);
}

function _messageActionChatMigrateTo(o: any) {
  i32(0x51bdb021);
  i32(o.channel_id);
}

function _messageActionChannelMigrateFrom(o: any) {
  i32(0xb055eaee);
  str(o.title);
  i32(o.chat_id);
}

function _messageActionPinMessage(o: any) {
  i32(0x94bd38ed);
}

function _messageActionHistoryClear(o: any) {
  i32(0x9fbab604);
}

function _messageActionGameScore(o: any) {
  i32(0x92a72876);
  i64(o.game_id);
  i32(o.score);
}

function _messageActionPaymentSentMe(o: any) {
  i32(0x8f31b327);
  const flags = +!!o.info | +!!o.shipping_option_id << 1;
  i32(flags);
  str(o.currency);
  i64(o.total_amount);
  bytes(o.payload);
  if (o.info !== undefined) obj(o.info); // flags.0?PaymentRequestedInfo
  if (o.shipping_option_id !== undefined) obj(o.shipping_option_id); // flags.1?string
  obj(o.charge); // PaymentCharge
}

function _messageActionPaymentSent(o: any) {
  i32(0x40699cd0);
  str(o.currency);
  i64(o.total_amount);
}

function _messageActionPhoneCall(o: any) {
  i32(0x80e11a7f);
  const flags = +o.video << 2 | +!!o.reason | +!!o.duration << 1;
  i32(flags);
  if (o.video !== undefined) obj(o.video); // flags.2?true
  i64(o.call_id);
  if (o.reason !== undefined) obj(o.reason); // flags.0?PhoneCallDiscardReason
  if (o.duration !== undefined) obj(o.duration); // flags.1?int
}

function _messageActionScreenshotTaken(o: any) {
  i32(0x4792929b);
}

function _messageActionCustomAction(o: any) {
  i32(0xfae69f56);
  str(o.message);
}

function _messageActionBotAllowed(o: any) {
  i32(0xabe9affe);
  str(o.domain);
}

function _messageActionSecureValuesSentMe(o: any) {
  i32(0x1b287353);
  obj(o.values); // Vector<SecureValue>
  obj(o.credentials); // SecureCredentialsEncrypted
}

function _messageActionSecureValuesSent(o: any) {
  i32(0xd95c6154);
  obj(o.types); // Vector<SecureValueType>
}

function _messageActionContactSignUp(o: any) {
  i32(0xf3f25f76);
}

function _dialog(o: any) {
  i32(0x2c171f72);
  const flags = +o.pinned << 2 | +o.unread_mark << 3 | +!!o.pts | +!!o.draft << 1 | +!!o.folder_id << 4;
  i32(flags);
  if (o.pinned !== undefined) obj(o.pinned); // flags.2?true
  if (o.unread_mark !== undefined) obj(o.unread_mark); // flags.3?true
  obj(o.peer); // Peer
  i32(o.top_message);
  i32(o.read_inbox_max_id);
  i32(o.read_outbox_max_id);
  i32(o.unread_count);
  i32(o.unread_mentions_count);
  obj(o.notify_settings); // PeerNotifySettings
  if (o.pts !== undefined) obj(o.pts); // flags.0?int
  if (o.draft !== undefined) obj(o.draft); // flags.1?DraftMessage
  if (o.folder_id !== undefined) obj(o.folder_id); // flags.4?int
}

function _dialogFolder(o: any) {
  i32(0x71bd134c);
  const flags = +o.pinned << 2;
  i32(flags);
  if (o.pinned !== undefined) obj(o.pinned); // flags.2?true
  obj(o.folder); // Folder
  obj(o.peer); // Peer
  i32(o.top_message);
  i32(o.unread_muted_peers_count);
  i32(o.unread_unmuted_peers_count);
  i32(o.unread_muted_messages_count);
  i32(o.unread_unmuted_messages_count);
}

function _photoEmpty(o: any) {
  i32(0x2331b22d);
  i64(o.id);
}

function _photo(o: any) {
  i32(0xd07504a5);
  const flags = +o.has_stickers;
  i32(flags);
  if (o.has_stickers !== undefined) obj(o.has_stickers); // flags.0?true
  i64(o.id);
  i64(o.access_hash);
  bytes(o.file_reference);
  i32(o.date);
  obj(o.sizes); // Vector<PhotoSize>
  i32(o.dc_id);
}

function _photoSizeEmpty(o: any) {
  i32(0xe17e23c);
  str(o.type);
}

function _photoSize(o: any) {
  i32(0x77bfb61b);
  str(o.type);
  obj(o.location); // FileLocation
  i32(o.w);
  i32(o.h);
  i32(o.size);
}

function _photoCachedSize(o: any) {
  i32(0xe9a734fa);
  str(o.type);
  obj(o.location); // FileLocation
  i32(o.w);
  i32(o.h);
  bytes(o.bytes);
}

function _photoStrippedSize(o: any) {
  i32(0xe0b0bc2e);
  str(o.type);
  bytes(o.bytes);
}

function _geoPointEmpty(o: any) {
  i32(0x1117dd5f);
}

function _geoPoint(o: any) {
  i32(0x296f104);
  f64(o.long);
  f64(o.lat);
  i64(o.access_hash);
}

function _authSentCode(o: any) {
  i32(0x5e002502);
  const flags = +!!o.next_type << 1 | +!!o.timeout << 2;
  i32(flags);
  obj(o.type); // auth.SentCodeType
  str(o.phone_code_hash);
  if (o.next_type !== undefined) obj(o.next_type); // flags.1?auth.CodeType
  if (o.timeout !== undefined) obj(o.timeout); // flags.2?int
}

function _authAuthorization(o: any) {
  i32(0xcd050916);
  const flags = +!!o.tmp_sessions;
  i32(flags);
  if (o.tmp_sessions !== undefined) obj(o.tmp_sessions); // flags.0?int
  obj(o.user); // User
}

function _authAuthorizationSignUpRequired(o: any) {
  i32(0x44747e9a);
  const flags = +!!o.terms_of_service;
  i32(flags);
  if (o.terms_of_service !== undefined) obj(o.terms_of_service); // flags.0?help.TermsOfService
}

function _authExportedAuthorization(o: any) {
  i32(0xdf969c2d);
  i32(o.id);
  bytes(o.bytes);
}

function _inputNotifyPeer(o: any) {
  i32(0xb8bc5b0c);
  obj(o.peer); // InputPeer
}

function _inputNotifyUsers(o: any) {
  i32(0x193b4417);
}

function _inputNotifyChats(o: any) {
  i32(0x4a95e84e);
}

function _inputNotifyBroadcasts(o: any) {
  i32(0xb1db7c7e);
}

function _inputPeerNotifySettings(o: any) {
  i32(0x9c3d198e);
  const flags = +!!o.show_previews | +!!o.silent << 1 | +!!o.mute_until << 2 | +!!o.sound << 3;
  i32(flags);
  if (o.show_previews !== undefined) obj(o.show_previews); // flags.0?Bool
  if (o.silent !== undefined) obj(o.silent); // flags.1?Bool
  if (o.mute_until !== undefined) obj(o.mute_until); // flags.2?int
  if (o.sound !== undefined) obj(o.sound); // flags.3?string
}

function _peerNotifySettings(o: any) {
  i32(0xaf509d20);
  const flags = +!!o.show_previews | +!!o.silent << 1 | +!!o.mute_until << 2 | +!!o.sound << 3;
  i32(flags);
  if (o.show_previews !== undefined) obj(o.show_previews); // flags.0?Bool
  if (o.silent !== undefined) obj(o.silent); // flags.1?Bool
  if (o.mute_until !== undefined) obj(o.mute_until); // flags.2?int
  if (o.sound !== undefined) obj(o.sound); // flags.3?string
}

function _peerSettings(o: any) {
  i32(0x818426cd);
  const flags = +o.report_spam | +o.add_contact << 1 | +o.block_contact << 2 | +o.share_contact << 3 | +o.need_contacts_exception << 4 | +o.report_geo << 5;
  i32(flags);
  if (o.report_spam !== undefined) obj(o.report_spam); // flags.0?true
  if (o.add_contact !== undefined) obj(o.add_contact); // flags.1?true
  if (o.block_contact !== undefined) obj(o.block_contact); // flags.2?true
  if (o.share_contact !== undefined) obj(o.share_contact); // flags.3?true
  if (o.need_contacts_exception !== undefined) obj(o.need_contacts_exception); // flags.4?true
  if (o.report_geo !== undefined) obj(o.report_geo); // flags.5?true
}

function _wallPaper(o: any) {
  i32(0xa437c3ed);
  const flags = +o.creator | +o.default << 1 | +o.pattern << 3 | +o.dark << 4 | +!!o.settings << 2;
  i32(flags);
  i64(o.id);
  if (o.creator !== undefined) obj(o.creator); // flags.0?true
  if (o.default !== undefined) obj(o.default); // flags.1?true
  if (o.pattern !== undefined) obj(o.pattern); // flags.3?true
  if (o.dark !== undefined) obj(o.dark); // flags.4?true
  i64(o.access_hash);
  str(o.slug);
  obj(o.document); // Document
  if (o.settings !== undefined) obj(o.settings); // flags.2?WallPaperSettings
}

function _wallPaperNoFile(o: any) {
  i32(0x8af40b25);
  const flags = +o.default << 1 | +o.dark << 4 | +!!o.settings << 2;
  i32(flags);
  if (o.default !== undefined) obj(o.default); // flags.1?true
  if (o.dark !== undefined) obj(o.dark); // flags.4?true
  if (o.settings !== undefined) obj(o.settings); // flags.2?WallPaperSettings
}

function _inputReportReasonSpam(o: any) {
  i32(0x58dbcab8);
}

function _inputReportReasonViolence(o: any) {
  i32(0x1e22c78d);
}

function _inputReportReasonPornography(o: any) {
  i32(0x2e59d922);
}

function _inputReportReasonChildAbuse(o: any) {
  i32(0xadf44ee3);
}

function _inputReportReasonOther(o: any) {
  i32(0xe1746d0a);
  str(o.text);
}

function _inputReportReasonCopyright(o: any) {
  i32(0x9b89f93a);
}

function _inputReportReasonGeoIrrelevant(o: any) {
  i32(0xdbd4feed);
}

function _userFull(o: any) {
  i32(0xedf17c12);
  const flags = +o.blocked | +o.phone_calls_available << 4 | +o.phone_calls_private << 5 | +o.can_pin_message << 7 | +o.has_scheduled << 12 | +!!o.about << 1 | +!!o.profile_photo << 2 | +!!o.bot_info << 3 | +!!o.pinned_msg_id << 6 | +!!o.folder_id << 11;
  i32(flags);
  if (o.blocked !== undefined) obj(o.blocked); // flags.0?true
  if (o.phone_calls_available !== undefined) obj(o.phone_calls_available); // flags.4?true
  if (o.phone_calls_private !== undefined) obj(o.phone_calls_private); // flags.5?true
  if (o.can_pin_message !== undefined) obj(o.can_pin_message); // flags.7?true
  if (o.has_scheduled !== undefined) obj(o.has_scheduled); // flags.12?true
  obj(o.user); // User
  if (o.about !== undefined) obj(o.about); // flags.1?string
  obj(o.settings); // PeerSettings
  if (o.profile_photo !== undefined) obj(o.profile_photo); // flags.2?Photo
  obj(o.notify_settings); // PeerNotifySettings
  if (o.bot_info !== undefined) obj(o.bot_info); // flags.3?BotInfo
  if (o.pinned_msg_id !== undefined) obj(o.pinned_msg_id); // flags.6?int
  i32(o.common_chats_count);
  if (o.folder_id !== undefined) obj(o.folder_id); // flags.11?int
}

function _contact(o: any) {
  i32(0xf911c994);
  i32(o.user_id);
  obj(o.mutual); // Bool
}

function _importedContact(o: any) {
  i32(0xd0028438);
  i32(o.user_id);
  i64(o.client_id);
}

function _contactBlocked(o: any) {
  i32(0x561bc879);
  i32(o.user_id);
  i32(o.date);
}

function _contactStatus(o: any) {
  i32(0xd3680c61);
  i32(o.user_id);
  obj(o.status); // UserStatus
}

function _contactsContactsNotModified(o: any) {
  i32(0xb74ba9d2);
}

function _contactsContacts(o: any) {
  i32(0xeae87e42);
  obj(o.contacts); // Vector<Contact>
  i32(o.saved_count);
  obj(o.users); // Vector<User>
}

function _contactsImportedContacts(o: any) {
  i32(0x77d01c3b);
  obj(o.imported); // Vector<ImportedContact>
  obj(o.popular_invites); // Vector<PopularContact>
  obj(o.retry_contacts); // Vector<long>
  obj(o.users); // Vector<User>
}

function _contactsBlocked(o: any) {
  i32(0x1c138d15);
  obj(o.blocked); // Vector<ContactBlocked>
  obj(o.users); // Vector<User>
}

function _contactsBlockedSlice(o: any) {
  i32(0x900802a1);
  i32(o.count);
  obj(o.blocked); // Vector<ContactBlocked>
  obj(o.users); // Vector<User>
}

function _messagesDialogs(o: any) {
  i32(0x15ba6c40);
  obj(o.dialogs); // Vector<Dialog>
  obj(o.messages); // Vector<Message>
  obj(o.chats); // Vector<Chat>
  obj(o.users); // Vector<User>
}

function _messagesDialogsSlice(o: any) {
  i32(0x71e094f3);
  i32(o.count);
  obj(o.dialogs); // Vector<Dialog>
  obj(o.messages); // Vector<Message>
  obj(o.chats); // Vector<Chat>
  obj(o.users); // Vector<User>
}

function _messagesDialogsNotModified(o: any) {
  i32(0xf0e3e596);
  i32(o.count);
}

function _messagesMessages(o: any) {
  i32(0x8c718e87);
  obj(o.messages); // Vector<Message>
  obj(o.chats); // Vector<Chat>
  obj(o.users); // Vector<User>
}

function _messagesMessagesSlice(o: any) {
  i32(0xc8edce1e);
  const flags = +o.inexact << 1 | +!!o.next_rate;
  i32(flags);
  if (o.inexact !== undefined) obj(o.inexact); // flags.1?true
  i32(o.count);
  if (o.next_rate !== undefined) obj(o.next_rate); // flags.0?int
  obj(o.messages); // Vector<Message>
  obj(o.chats); // Vector<Chat>
  obj(o.users); // Vector<User>
}

function _messagesChannelMessages(o: any) {
  i32(0x99262e37);
  const flags = +o.inexact << 1;
  i32(flags);
  if (o.inexact !== undefined) obj(o.inexact); // flags.1?true
  i32(o.pts);
  i32(o.count);
  obj(o.messages); // Vector<Message>
  obj(o.chats); // Vector<Chat>
  obj(o.users); // Vector<User>
}

function _messagesMessagesNotModified(o: any) {
  i32(0x74535f21);
  i32(o.count);
}

function _messagesChats(o: any) {
  i32(0x64ff9fd5);
  obj(o.chats); // Vector<Chat>
}

function _messagesChatsSlice(o: any) {
  i32(0x9cd81144);
  i32(o.count);
  obj(o.chats); // Vector<Chat>
}

function _messagesChatFull(o: any) {
  i32(0xe5d7d19c);
  obj(o.full_chat); // ChatFull
  obj(o.chats); // Vector<Chat>
  obj(o.users); // Vector<User>
}

function _messagesAffectedHistory(o: any) {
  i32(0xb45c69d1);
  i32(o.pts);
  i32(o.pts_count);
  i32(o.offset);
}

function _inputMessagesFilterEmpty(o: any) {
  i32(0x57e2f66c);
}

function _inputMessagesFilterPhotos(o: any) {
  i32(0x9609a51c);
}

function _inputMessagesFilterVideo(o: any) {
  i32(0x9fc00e65);
}

function _inputMessagesFilterPhotoVideo(o: any) {
  i32(0x56e9f0e4);
}

function _inputMessagesFilterDocument(o: any) {
  i32(0x9eddf188);
}

function _inputMessagesFilterUrl(o: any) {
  i32(0x7ef0dd87);
}

function _inputMessagesFilterGif(o: any) {
  i32(0xffc86587);
}

function _inputMessagesFilterVoice(o: any) {
  i32(0x50f5c392);
}

function _inputMessagesFilterMusic(o: any) {
  i32(0x3751b49e);
}

function _inputMessagesFilterChatPhotos(o: any) {
  i32(0x3a20ecb8);
}

function _inputMessagesFilterPhoneCalls(o: any) {
  i32(0x80c99768);
  const flags = +o.missed;
  i32(flags);
  if (o.missed !== undefined) obj(o.missed); // flags.0?true
}

function _inputMessagesFilterRoundVoice(o: any) {
  i32(0x7a7c17a4);
}

function _inputMessagesFilterRoundVideo(o: any) {
  i32(0xb549da53);
}

function _inputMessagesFilterMyMentions(o: any) {
  i32(0xc1f8e69a);
}

function _inputMessagesFilterGeo(o: any) {
  i32(0xe7026d0d);
}

function _inputMessagesFilterContacts(o: any) {
  i32(0xe062db83);
}

function _updateNewMessage(o: any) {
  i32(0x1f2b0afd);
  obj(o.message); // Message
  i32(o.pts);
  i32(o.pts_count);
}

function _updateMessageID(o: any) {
  i32(0x4e90bfd6);
  i32(o.id);
  i64(o.random_id);
}

function _updateDeleteMessages(o: any) {
  i32(0xa20db0e5);
  obj(o.messages); // Vector<int>
  i32(o.pts);
  i32(o.pts_count);
}

function _updateUserTyping(o: any) {
  i32(0x5c486927);
  i32(o.user_id);
  obj(o.action); // SendMessageAction
}

function _updateChatUserTyping(o: any) {
  i32(0x9a65ea1f);
  i32(o.chat_id);
  i32(o.user_id);
  obj(o.action); // SendMessageAction
}

function _updateChatParticipants(o: any) {
  i32(0x7761198);
  obj(o.participants); // ChatParticipants
}

function _updateUserStatus(o: any) {
  i32(0x1bfbd823);
  i32(o.user_id);
  obj(o.status); // UserStatus
}

function _updateUserName(o: any) {
  i32(0xa7332b73);
  i32(o.user_id);
  str(o.first_name);
  str(o.last_name);
  str(o.username);
}

function _updateUserPhoto(o: any) {
  i32(0x95313b0c);
  i32(o.user_id);
  i32(o.date);
  obj(o.photo); // UserProfilePhoto
  obj(o.previous); // Bool
}

function _updateNewEncryptedMessage(o: any) {
  i32(0x12bcbd9a);
  obj(o.message); // EncryptedMessage
  i32(o.qts);
}

function _updateEncryptedChatTyping(o: any) {
  i32(0x1710f156);
  i32(o.chat_id);
}

function _updateEncryption(o: any) {
  i32(0xb4a2e88d);
  obj(o.chat); // EncryptedChat
  i32(o.date);
}

function _updateEncryptedMessagesRead(o: any) {
  i32(0x38fe25b7);
  i32(o.chat_id);
  i32(o.max_date);
  i32(o.date);
}

function _updateChatParticipantAdd(o: any) {
  i32(0xea4b0e5c);
  i32(o.chat_id);
  i32(o.user_id);
  i32(o.inviter_id);
  i32(o.date);
  i32(o.version);
}

function _updateChatParticipantDelete(o: any) {
  i32(0x6e5f8c22);
  i32(o.chat_id);
  i32(o.user_id);
  i32(o.version);
}

function _updateDcOptions(o: any) {
  i32(0x8e5e9873);
  obj(o.dc_options); // Vector<DcOption>
}

function _updateUserBlocked(o: any) {
  i32(0x80ece81a);
  i32(o.user_id);
  obj(o.blocked); // Bool
}

function _updateNotifySettings(o: any) {
  i32(0xbec268ef);
  obj(o.peer); // NotifyPeer
  obj(o.notify_settings); // PeerNotifySettings
}

function _updateServiceNotification(o: any) {
  i32(0xebe46819);
  const flags = +o.popup | +!!o.inbox_date << 1;
  i32(flags);
  if (o.popup !== undefined) obj(o.popup); // flags.0?true
  if (o.inbox_date !== undefined) obj(o.inbox_date); // flags.1?int
  str(o.type);
  str(o.message);
  obj(o.media); // MessageMedia
  obj(o.entities); // Vector<MessageEntity>
}

function _updatePrivacy(o: any) {
  i32(0xee3b272a);
  obj(o.key); // PrivacyKey
  obj(o.rules); // Vector<PrivacyRule>
}

function _updateUserPhone(o: any) {
  i32(0x12b9417b);
  i32(o.user_id);
  str(o.phone);
}

function _updateReadHistoryInbox(o: any) {
  i32(0x9c974fdf);
  const flags = +!!o.folder_id;
  i32(flags);
  if (o.folder_id !== undefined) obj(o.folder_id); // flags.0?int
  obj(o.peer); // Peer
  i32(o.max_id);
  i32(o.still_unread_count);
  i32(o.pts);
  i32(o.pts_count);
}

function _updateReadHistoryOutbox(o: any) {
  i32(0x2f2f21bf);
  obj(o.peer); // Peer
  i32(o.max_id);
  i32(o.pts);
  i32(o.pts_count);
}

function _updateWebPage(o: any) {
  i32(0x7f891213);
  obj(o.webpage); // WebPage
  i32(o.pts);
  i32(o.pts_count);
}

function _updateReadMessagesContents(o: any) {
  i32(0x68c13933);
  obj(o.messages); // Vector<int>
  i32(o.pts);
  i32(o.pts_count);
}

function _updateChannelTooLong(o: any) {
  i32(0xeb0467fb);
  const flags = +!!o.pts;
  i32(flags);
  i32(o.channel_id);
  if (o.pts !== undefined) obj(o.pts); // flags.0?int
}

function _updateChannel(o: any) {
  i32(0xb6d45656);
  i32(o.channel_id);
}

function _updateNewChannelMessage(o: any) {
  i32(0x62ba04d9);
  obj(o.message); // Message
  i32(o.pts);
  i32(o.pts_count);
}

function _updateReadChannelInbox(o: any) {
  i32(0x330b5424);
  const flags = +!!o.folder_id;
  i32(flags);
  if (o.folder_id !== undefined) obj(o.folder_id); // flags.0?int
  i32(o.channel_id);
  i32(o.max_id);
  i32(o.still_unread_count);
  i32(o.pts);
}

function _updateDeleteChannelMessages(o: any) {
  i32(0xc37521c9);
  i32(o.channel_id);
  obj(o.messages); // Vector<int>
  i32(o.pts);
  i32(o.pts_count);
}

function _updateChannelMessageViews(o: any) {
  i32(0x98a12b4b);
  i32(o.channel_id);
  i32(o.id);
  i32(o.views);
}

function _updateChatParticipantAdmin(o: any) {
  i32(0xb6901959);
  i32(o.chat_id);
  i32(o.user_id);
  obj(o.is_admin); // Bool
  i32(o.version);
}

function _updateNewStickerSet(o: any) {
  i32(0x688a30aa);
  obj(o.stickerset); // messages.StickerSet
}

function _updateStickerSetsOrder(o: any) {
  i32(0xbb2d201);
  const flags = +o.masks;
  i32(flags);
  if (o.masks !== undefined) obj(o.masks); // flags.0?true
  obj(o.order); // Vector<long>
}

function _updateStickerSets(o: any) {
  i32(0x43ae3dec);
}

function _updateSavedGifs(o: any) {
  i32(0x9375341e);
}

function _updateBotInlineQuery(o: any) {
  i32(0x54826690);
  const flags = +!!o.geo;
  i32(flags);
  i64(o.query_id);
  i32(o.user_id);
  str(o.query);
  if (o.geo !== undefined) obj(o.geo); // flags.0?GeoPoint
  str(o.offset);
}

function _updateBotInlineSend(o: any) {
  i32(0xe48f964);
  const flags = +!!o.geo | +!!o.msg_id << 1;
  i32(flags);
  i32(o.user_id);
  str(o.query);
  if (o.geo !== undefined) obj(o.geo); // flags.0?GeoPoint
  str(o.id);
  if (o.msg_id !== undefined) obj(o.msg_id); // flags.1?InputBotInlineMessageID
}

function _updateEditChannelMessage(o: any) {
  i32(0x1b3f4df7);
  obj(o.message); // Message
  i32(o.pts);
  i32(o.pts_count);
}

function _updateChannelPinnedMessage(o: any) {
  i32(0x98592475);
  i32(o.channel_id);
  i32(o.id);
}

function _updateBotCallbackQuery(o: any) {
  i32(0xe73547e1);
  const flags = +!!o.data | +!!o.game_short_name << 1;
  i32(flags);
  i64(o.query_id);
  i32(o.user_id);
  obj(o.peer); // Peer
  i32(o.msg_id);
  i64(o.chat_instance);
  if (o.data !== undefined) obj(o.data); // flags.0?bytes
  if (o.game_short_name !== undefined) obj(o.game_short_name); // flags.1?string
}

function _updateEditMessage(o: any) {
  i32(0xe40370a3);
  obj(o.message); // Message
  i32(o.pts);
  i32(o.pts_count);
}

function _updateInlineBotCallbackQuery(o: any) {
  i32(0xf9d27a5a);
  const flags = +!!o.data | +!!o.game_short_name << 1;
  i32(flags);
  i64(o.query_id);
  i32(o.user_id);
  obj(o.msg_id); // InputBotInlineMessageID
  i64(o.chat_instance);
  if (o.data !== undefined) obj(o.data); // flags.0?bytes
  if (o.game_short_name !== undefined) obj(o.game_short_name); // flags.1?string
}

function _updateReadChannelOutbox(o: any) {
  i32(0x25d6c9c7);
  i32(o.channel_id);
  i32(o.max_id);
}

function _updateDraftMessage(o: any) {
  i32(0xee2bb969);
  obj(o.peer); // Peer
  obj(o.draft); // DraftMessage
}

function _updateReadFeaturedStickers(o: any) {
  i32(0x571d2742);
}

function _updateRecentStickers(o: any) {
  i32(0x9a422c20);
}

function _updateConfig(o: any) {
  i32(0xa229dd06);
}

function _updatePtsChanged(o: any) {
  i32(0x3354678f);
}

function _updateChannelWebPage(o: any) {
  i32(0x40771900);
  i32(o.channel_id);
  obj(o.webpage); // WebPage
  i32(o.pts);
  i32(o.pts_count);
}

function _updateDialogPinned(o: any) {
  i32(0x6e6fe51c);
  const flags = +o.pinned | +!!o.folder_id << 1;
  i32(flags);
  if (o.pinned !== undefined) obj(o.pinned); // flags.0?true
  if (o.folder_id !== undefined) obj(o.folder_id); // flags.1?int
  obj(o.peer); // DialogPeer
}

function _updatePinnedDialogs(o: any) {
  i32(0xfa0f3ca2);
  const flags = +!!o.folder_id << 1 | +!!o.order;
  i32(flags);
  if (o.folder_id !== undefined) obj(o.folder_id); // flags.1?int
  if (o.order !== undefined) obj(o.order); // flags.0?Vector<DialogPeer>
}

function _updateBotWebhookJSON(o: any) {
  i32(0x8317c0c3);
  obj(o.data); // DataJSON
}

function _updateBotWebhookJSONQuery(o: any) {
  i32(0x9b9240a6);
  i64(o.query_id);
  obj(o.data); // DataJSON
  i32(o.timeout);
}

function _updateBotShippingQuery(o: any) {
  i32(0xe0cdc940);
  i64(o.query_id);
  i32(o.user_id);
  bytes(o.payload);
  obj(o.shipping_address); // PostAddress
}

function _updateBotPrecheckoutQuery(o: any) {
  i32(0x5d2f3aa9);
  const flags = +!!o.info | +!!o.shipping_option_id << 1;
  i32(flags);
  i64(o.query_id);
  i32(o.user_id);
  bytes(o.payload);
  if (o.info !== undefined) obj(o.info); // flags.0?PaymentRequestedInfo
  if (o.shipping_option_id !== undefined) obj(o.shipping_option_id); // flags.1?string
  str(o.currency);
  i64(o.total_amount);
}

function _updatePhoneCall(o: any) {
  i32(0xab0f6b1e);
  obj(o.phone_call); // PhoneCall
}

function _updateLangPackTooLong(o: any) {
  i32(0x46560264);
  str(o.lang_code);
}

function _updateLangPack(o: any) {
  i32(0x56022f4d);
  obj(o.difference); // LangPackDifference
}

function _updateFavedStickers(o: any) {
  i32(0xe511996d);
}

function _updateChannelReadMessagesContents(o: any) {
  i32(0x89893b45);
  i32(o.channel_id);
  obj(o.messages); // Vector<int>
}

function _updateContactsReset(o: any) {
  i32(0x7084a7be);
}

function _updateChannelAvailableMessages(o: any) {
  i32(0x70db6837);
  i32(o.channel_id);
  i32(o.available_min_id);
}

function _updateDialogUnreadMark(o: any) {
  i32(0xe16459c3);
  const flags = +o.unread;
  i32(flags);
  if (o.unread !== undefined) obj(o.unread); // flags.0?true
  obj(o.peer); // DialogPeer
}

function _updateUserPinnedMessage(o: any) {
  i32(0x4c43da18);
  i32(o.user_id);
  i32(o.id);
}

function _updateChatPinnedMessage(o: any) {
  i32(0xe10db349);
  i32(o.chat_id);
  i32(o.id);
  i32(o.version);
}

function _updateMessagePoll(o: any) {
  i32(0xaca1657b);
  const flags = +!!o.poll;
  i32(flags);
  i64(o.poll_id);
  if (o.poll !== undefined) obj(o.poll); // flags.0?Poll
  obj(o.results); // PollResults
}

function _updateChatDefaultBannedRights(o: any) {
  i32(0x54c01850);
  obj(o.peer); // Peer
  obj(o.default_banned_rights); // ChatBannedRights
  i32(o.version);
}

function _updateFolderPeers(o: any) {
  i32(0x19360dc0);
  obj(o.folder_peers); // Vector<FolderPeer>
  i32(o.pts);
  i32(o.pts_count);
}

function _updatePeerSettings(o: any) {
  i32(0x6a7e7366);
  obj(o.peer); // Peer
  obj(o.settings); // PeerSettings
}

function _updatePeerLocated(o: any) {
  i32(0xb4afcfb0);
  obj(o.peers); // Vector<PeerLocated>
}

function _updateNewScheduledMessage(o: any) {
  i32(0x39a51dfb);
  obj(o.message); // Message
}

function _updateDeleteScheduledMessages(o: any) {
  i32(0x90866cee);
  obj(o.peer); // Peer
  obj(o.messages); // Vector<int>
}

function _updateTheme(o: any) {
  i32(0x8216fba3);
  obj(o.theme); // Theme
}

function _updateGeoLiveViewed(o: any) {
  i32(0x871fb939);
  obj(o.peer); // Peer
  i32(o.msg_id);
}

function _updateLoginToken(o: any) {
  i32(0x564fe691);
}

function _updatesState(o: any) {
  i32(0xa56c2a3e);
  i32(o.pts);
  i32(o.qts);
  i32(o.date);
  i32(o.seq);
  i32(o.unread_count);
}

function _updatesDifferenceEmpty(o: any) {
  i32(0x5d75a138);
  i32(o.date);
  i32(o.seq);
}

function _updatesDifference(o: any) {
  i32(0xf49ca0);
  obj(o.new_messages); // Vector<Message>
  obj(o.new_encrypted_messages); // Vector<EncryptedMessage>
  obj(o.other_updates); // Vector<Update>
  obj(o.chats); // Vector<Chat>
  obj(o.users); // Vector<User>
  obj(o.state); // updates.State
}

function _updatesDifferenceSlice(o: any) {
  i32(0xa8fb1981);
  obj(o.new_messages); // Vector<Message>
  obj(o.new_encrypted_messages); // Vector<EncryptedMessage>
  obj(o.other_updates); // Vector<Update>
  obj(o.chats); // Vector<Chat>
  obj(o.users); // Vector<User>
  obj(o.intermediate_state); // updates.State
}

function _updatesDifferenceTooLong(o: any) {
  i32(0x4afe8f6d);
  i32(o.pts);
}

function _updatesTooLong(o: any) {
  i32(0xe317af7e);
}

function _updateShortMessage(o: any) {
  i32(0x914fbf11);
  const flags = +o.out << 1 | +o.mentioned << 4 | +o.media_unread << 5 | +o.silent << 13 | +!!o.fwd_from << 2 | +!!o.via_bot_id << 11 | +!!o.reply_to_msg_id << 3 | +!!o.entities << 7;
  i32(flags);
  if (o.out !== undefined) obj(o.out); // flags.1?true
  if (o.mentioned !== undefined) obj(o.mentioned); // flags.4?true
  if (o.media_unread !== undefined) obj(o.media_unread); // flags.5?true
  if (o.silent !== undefined) obj(o.silent); // flags.13?true
  i32(o.id);
  i32(o.user_id);
  str(o.message);
  i32(o.pts);
  i32(o.pts_count);
  i32(o.date);
  if (o.fwd_from !== undefined) obj(o.fwd_from); // flags.2?MessageFwdHeader
  if (o.via_bot_id !== undefined) obj(o.via_bot_id); // flags.11?int
  if (o.reply_to_msg_id !== undefined) obj(o.reply_to_msg_id); // flags.3?int
  if (o.entities !== undefined) obj(o.entities); // flags.7?Vector<MessageEntity>
}

function _updateShortChatMessage(o: any) {
  i32(0x16812688);
  const flags = +o.out << 1 | +o.mentioned << 4 | +o.media_unread << 5 | +o.silent << 13 | +!!o.fwd_from << 2 | +!!o.via_bot_id << 11 | +!!o.reply_to_msg_id << 3 | +!!o.entities << 7;
  i32(flags);
  if (o.out !== undefined) obj(o.out); // flags.1?true
  if (o.mentioned !== undefined) obj(o.mentioned); // flags.4?true
  if (o.media_unread !== undefined) obj(o.media_unread); // flags.5?true
  if (o.silent !== undefined) obj(o.silent); // flags.13?true
  i32(o.id);
  i32(o.from_id);
  i32(o.chat_id);
  str(o.message);
  i32(o.pts);
  i32(o.pts_count);
  i32(o.date);
  if (o.fwd_from !== undefined) obj(o.fwd_from); // flags.2?MessageFwdHeader
  if (o.via_bot_id !== undefined) obj(o.via_bot_id); // flags.11?int
  if (o.reply_to_msg_id !== undefined) obj(o.reply_to_msg_id); // flags.3?int
  if (o.entities !== undefined) obj(o.entities); // flags.7?Vector<MessageEntity>
}

function _updateShort(o: any) {
  i32(0x78d4dec1);
  obj(o.update); // Update
  i32(o.date);
}

function _updatesCombined(o: any) {
  i32(0x725b04c3);
  obj(o.updates); // Vector<Update>
  obj(o.users); // Vector<User>
  obj(o.chats); // Vector<Chat>
  i32(o.date);
  i32(o.seq_start);
  i32(o.seq);
}

function _updates(o: any) {
  i32(0x74ae4240);
  obj(o.updates); // Vector<Update>
  obj(o.users); // Vector<User>
  obj(o.chats); // Vector<Chat>
  i32(o.date);
  i32(o.seq);
}

function _updateShortSentMessage(o: any) {
  i32(0x11f1331c);
  const flags = +o.out << 1 | +!!o.media << 9 | +!!o.entities << 7;
  i32(flags);
  if (o.out !== undefined) obj(o.out); // flags.1?true
  i32(o.id);
  i32(o.pts);
  i32(o.pts_count);
  i32(o.date);
  if (o.media !== undefined) obj(o.media); // flags.9?MessageMedia
  if (o.entities !== undefined) obj(o.entities); // flags.7?Vector<MessageEntity>
}

function _photosPhotos(o: any) {
  i32(0x8dca6aa5);
  obj(o.photos); // Vector<Photo>
  obj(o.users); // Vector<User>
}

function _photosPhotosSlice(o: any) {
  i32(0x15051f54);
  i32(o.count);
  obj(o.photos); // Vector<Photo>
  obj(o.users); // Vector<User>
}

function _photosPhoto(o: any) {
  i32(0x20212ca8);
  obj(o.photo); // Photo
  obj(o.users); // Vector<User>
}

function _uploadFile(o: any) {
  i32(0x96a18d5);
  obj(o.type); // storage.FileType
  i32(o.mtime);
  bytes(o.bytes);
}

function _uploadFileCdnRedirect(o: any) {
  i32(0xf18cda44);
  i32(o.dc_id);
  bytes(o.file_token);
  bytes(o.encryption_key);
  bytes(o.encryption_iv);
  obj(o.file_hashes); // Vector<FileHash>
}

function _dcOption(o: any) {
  i32(0x18b7a10d);
  const flags = +o.ipv6 | +o.media_only << 1 | +o.tcpo_only << 2 | +o.cdn << 3 | +o.static << 4 | +!!o.secret << 10;
  i32(flags);
  if (o.ipv6 !== undefined) obj(o.ipv6); // flags.0?true
  if (o.media_only !== undefined) obj(o.media_only); // flags.1?true
  if (o.tcpo_only !== undefined) obj(o.tcpo_only); // flags.2?true
  if (o.cdn !== undefined) obj(o.cdn); // flags.3?true
  if (o.static !== undefined) obj(o.static); // flags.4?true
  i32(o.id);
  str(o.ip_address);
  i32(o.port);
  if (o.secret !== undefined) obj(o.secret); // flags.10?bytes
}

function _config(o: any) {
  i32(0x330b4067);
  const flags = +o.phonecalls_enabled << 1 | +o.default_p2p_contacts << 3 | +o.preload_featured_stickers << 4 | +o.ignore_phone_entities << 5 | +o.revoke_pm_inbox << 6 | +o.blocked_mode << 8 | +o.pfs_enabled << 13 | +!!o.tmp_sessions | +!!o.autoupdate_url_prefix << 7 | +!!o.gif_search_username << 9 | +!!o.venue_search_username << 10 | +!!o.img_search_username << 11 | +!!o.static_maps_provider << 12 | +!!o.suggested_lang_code << 2 | +!!o.lang_pack_version << 2 | +!!o.base_lang_pack_version << 2;
  i32(flags);
  if (o.phonecalls_enabled !== undefined) obj(o.phonecalls_enabled); // flags.1?true
  if (o.default_p2p_contacts !== undefined) obj(o.default_p2p_contacts); // flags.3?true
  if (o.preload_featured_stickers !== undefined) obj(o.preload_featured_stickers); // flags.4?true
  if (o.ignore_phone_entities !== undefined) obj(o.ignore_phone_entities); // flags.5?true
  if (o.revoke_pm_inbox !== undefined) obj(o.revoke_pm_inbox); // flags.6?true
  if (o.blocked_mode !== undefined) obj(o.blocked_mode); // flags.8?true
  if (o.pfs_enabled !== undefined) obj(o.pfs_enabled); // flags.13?true
  i32(o.date);
  i32(o.expires);
  obj(o.test_mode); // Bool
  i32(o.this_dc);
  obj(o.dc_options); // Vector<DcOption>
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
  if (o.tmp_sessions !== undefined) obj(o.tmp_sessions); // flags.0?int
  i32(o.pinned_dialogs_count_max);
  i32(o.pinned_infolder_count_max);
  i32(o.call_receive_timeout_ms);
  i32(o.call_ring_timeout_ms);
  i32(o.call_connect_timeout_ms);
  i32(o.call_packet_timeout_ms);
  str(o.me_url_prefix);
  if (o.autoupdate_url_prefix !== undefined) obj(o.autoupdate_url_prefix); // flags.7?string
  if (o.gif_search_username !== undefined) obj(o.gif_search_username); // flags.9?string
  if (o.venue_search_username !== undefined) obj(o.venue_search_username); // flags.10?string
  if (o.img_search_username !== undefined) obj(o.img_search_username); // flags.11?string
  if (o.static_maps_provider !== undefined) obj(o.static_maps_provider); // flags.12?string
  i32(o.caption_length_max);
  i32(o.message_length_max);
  i32(o.webfile_dc_id);
  if (o.suggested_lang_code !== undefined) obj(o.suggested_lang_code); // flags.2?string
  if (o.lang_pack_version !== undefined) obj(o.lang_pack_version); // flags.2?int
  if (o.base_lang_pack_version !== undefined) obj(o.base_lang_pack_version); // flags.2?int
}

function _nearestDc(o: any) {
  i32(0x8e1a1775);
  str(o.country);
  i32(o.this_dc);
  i32(o.nearest_dc);
}

function _helpAppUpdate(o: any) {
  i32(0x1da7158f);
  const flags = +o.can_not_skip | +!!o.document << 1 | +!!o.url << 2;
  i32(flags);
  if (o.can_not_skip !== undefined) obj(o.can_not_skip); // flags.0?true
  i32(o.id);
  str(o.version);
  str(o.text);
  obj(o.entities); // Vector<MessageEntity>
  if (o.document !== undefined) obj(o.document); // flags.1?Document
  if (o.url !== undefined) obj(o.url); // flags.2?string
}

function _helpNoAppUpdate(o: any) {
  i32(0xc45a6536);
}

function _helpInviteText(o: any) {
  i32(0x18cb9f78);
  str(o.message);
}

function _encryptedChatEmpty(o: any) {
  i32(0xab7ec0a0);
  i32(o.id);
}

function _encryptedChatWaiting(o: any) {
  i32(0x3bf703dc);
  i32(o.id);
  i64(o.access_hash);
  i32(o.date);
  i32(o.admin_id);
  i32(o.participant_id);
}

function _encryptedChatRequested(o: any) {
  i32(0xc878527e);
  i32(o.id);
  i64(o.access_hash);
  i32(o.date);
  i32(o.admin_id);
  i32(o.participant_id);
  bytes(o.g_a);
}

function _encryptedChat(o: any) {
  i32(0xfa56ce36);
  i32(o.id);
  i64(o.access_hash);
  i32(o.date);
  i32(o.admin_id);
  i32(o.participant_id);
  bytes(o.g_a_or_b);
  i64(o.key_fingerprint);
}

function _encryptedChatDiscarded(o: any) {
  i32(0x13d6dd27);
  i32(o.id);
}

function _inputEncryptedChat(o: any) {
  i32(0xf141b5e1);
  i32(o.chat_id);
  i64(o.access_hash);
}

function _encryptedFileEmpty(o: any) {
  i32(0xc21f497e);
}

function _encryptedFile(o: any) {
  i32(0x4a70994c);
  i64(o.id);
  i64(o.access_hash);
  i32(o.size);
  i32(o.dc_id);
  i32(o.key_fingerprint);
}

function _inputEncryptedFileEmpty(o: any) {
  i32(0x1837c364);
}

function _inputEncryptedFileUploaded(o: any) {
  i32(0x64bd0306);
  i64(o.id);
  i32(o.parts);
  str(o.md5_checksum);
  i32(o.key_fingerprint);
}

function _inputEncryptedFile(o: any) {
  i32(0x5a17b5e5);
  i64(o.id);
  i64(o.access_hash);
}

function _inputEncryptedFileBigUploaded(o: any) {
  i32(0x2dc173c8);
  i64(o.id);
  i32(o.parts);
  i32(o.key_fingerprint);
}

function _encryptedMessage(o: any) {
  i32(0xed18c118);
  i64(o.random_id);
  i32(o.chat_id);
  i32(o.date);
  bytes(o.bytes);
  obj(o.file); // EncryptedFile
}

function _encryptedMessageService(o: any) {
  i32(0x23734b06);
  i64(o.random_id);
  i32(o.chat_id);
  i32(o.date);
  bytes(o.bytes);
}

function _messagesDhConfigNotModified(o: any) {
  i32(0xc0e24635);
  bytes(o.random);
}

function _messagesDhConfig(o: any) {
  i32(0x2c221edd);
  i32(o.g);
  bytes(o.p);
  i32(o.version);
  bytes(o.random);
}

function _messagesSentEncryptedMessage(o: any) {
  i32(0x560f8935);
  i32(o.date);
}

function _messagesSentEncryptedFile(o: any) {
  i32(0x9493ff32);
  i32(o.date);
  obj(o.file); // EncryptedFile
}

function _inputDocumentEmpty(o: any) {
  i32(0x72f0eaae);
}

function _inputDocument(o: any) {
  i32(0x1abfb575);
  i64(o.id);
  i64(o.access_hash);
  bytes(o.file_reference);
}

function _documentEmpty(o: any) {
  i32(0x36f8c871);
  i64(o.id);
}

function _document(o: any) {
  i32(0x9ba29cc1);
  const flags = +!!o.thumbs;
  i32(flags);
  i64(o.id);
  i64(o.access_hash);
  bytes(o.file_reference);
  i32(o.date);
  str(o.mime_type);
  i32(o.size);
  if (o.thumbs !== undefined) obj(o.thumbs); // flags.0?Vector<PhotoSize>
  i32(o.dc_id);
  obj(o.attributes); // Vector<DocumentAttribute>
}

function _helpSupport(o: any) {
  i32(0x17c6b5f6);
  str(o.phone_number);
  obj(o.user); // User
}

function _notifyPeer(o: any) {
  i32(0x9fd40bd8);
  obj(o.peer); // Peer
}

function _notifyUsers(o: any) {
  i32(0xb4c83b4c);
}

function _notifyChats(o: any) {
  i32(0xc007cec3);
}

function _notifyBroadcasts(o: any) {
  i32(0xd612e8ef);
}

function _sendMessageTypingAction(o: any) {
  i32(0x16bf744e);
}

function _sendMessageCancelAction(o: any) {
  i32(0xfd5ec8f5);
}

function _sendMessageRecordVideoAction(o: any) {
  i32(0xa187d66f);
}

function _sendMessageUploadVideoAction(o: any) {
  i32(0xe9763aec);
  i32(o.progress);
}

function _sendMessageRecordAudioAction(o: any) {
  i32(0xd52f73f7);
}

function _sendMessageUploadAudioAction(o: any) {
  i32(0xf351d7ab);
  i32(o.progress);
}

function _sendMessageUploadPhotoAction(o: any) {
  i32(0xd1d34a26);
  i32(o.progress);
}

function _sendMessageUploadDocumentAction(o: any) {
  i32(0xaa0cd9e4);
  i32(o.progress);
}

function _sendMessageGeoLocationAction(o: any) {
  i32(0x176f8ba1);
}

function _sendMessageChooseContactAction(o: any) {
  i32(0x628cbc6f);
}

function _sendMessageGamePlayAction(o: any) {
  i32(0xdd6a8f48);
}

function _sendMessageRecordRoundAction(o: any) {
  i32(0x88f27fbc);
}

function _sendMessageUploadRoundAction(o: any) {
  i32(0x243e1c66);
  i32(o.progress);
}

function _contactsFound(o: any) {
  i32(0xb3134d9d);
  obj(o.my_results); // Vector<Peer>
  obj(o.results); // Vector<Peer>
  obj(o.chats); // Vector<Chat>
  obj(o.users); // Vector<User>
}

function _inputPrivacyKeyStatusTimestamp(o: any) {
  i32(0x4f96cb18);
}

function _inputPrivacyKeyChatInvite(o: any) {
  i32(0xbdfb0426);
}

function _inputPrivacyKeyPhoneCall(o: any) {
  i32(0xfabadc5f);
}

function _inputPrivacyKeyPhoneP2P(o: any) {
  i32(0xdb9e70d2);
}

function _inputPrivacyKeyForwards(o: any) {
  i32(0xa4dd4c08);
}

function _inputPrivacyKeyProfilePhoto(o: any) {
  i32(0x5719bacc);
}

function _inputPrivacyKeyPhoneNumber(o: any) {
  i32(0x352dafa);
}

function _inputPrivacyKeyAddedByPhone(o: any) {
  i32(0xd1219bdd);
}

function _privacyKeyStatusTimestamp(o: any) {
  i32(0xbc2eab30);
}

function _privacyKeyChatInvite(o: any) {
  i32(0x500e6dfa);
}

function _privacyKeyPhoneCall(o: any) {
  i32(0x3d662b7b);
}

function _privacyKeyPhoneP2P(o: any) {
  i32(0x39491cc8);
}

function _privacyKeyForwards(o: any) {
  i32(0x69ec56a3);
}

function _privacyKeyProfilePhoto(o: any) {
  i32(0x96151fed);
}

function _privacyKeyPhoneNumber(o: any) {
  i32(0xd19ae46d);
}

function _privacyKeyAddedByPhone(o: any) {
  i32(0x42ffd42b);
}

function _inputPrivacyValueAllowContacts(o: any) {
  i32(0xd09e07b);
}

function _inputPrivacyValueAllowAll(o: any) {
  i32(0x184b35ce);
}

function _inputPrivacyValueAllowUsers(o: any) {
  i32(0x131cc67f);
  obj(o.users); // Vector<InputUser>
}

function _inputPrivacyValueDisallowContacts(o: any) {
  i32(0xba52007);
}

function _inputPrivacyValueDisallowAll(o: any) {
  i32(0xd66b66c9);
}

function _inputPrivacyValueDisallowUsers(o: any) {
  i32(0x90110467);
  obj(o.users); // Vector<InputUser>
}

function _inputPrivacyValueAllowChatParticipants(o: any) {
  i32(0x4c81c1ba);
  obj(o.chats); // Vector<int>
}

function _inputPrivacyValueDisallowChatParticipants(o: any) {
  i32(0xd82363af);
  obj(o.chats); // Vector<int>
}

function _privacyValueAllowContacts(o: any) {
  i32(0xfffe1bac);
}

function _privacyValueAllowAll(o: any) {
  i32(0x65427b82);
}

function _privacyValueAllowUsers(o: any) {
  i32(0x4d5bbe0c);
  obj(o.users); // Vector<int>
}

function _privacyValueDisallowContacts(o: any) {
  i32(0xf888fa1a);
}

function _privacyValueDisallowAll(o: any) {
  i32(0x8b73e763);
}

function _privacyValueDisallowUsers(o: any) {
  i32(0xc7f49b7);
  obj(o.users); // Vector<int>
}

function _privacyValueAllowChatParticipants(o: any) {
  i32(0x18be796b);
  obj(o.chats); // Vector<int>
}

function _privacyValueDisallowChatParticipants(o: any) {
  i32(0xacae0690);
  obj(o.chats); // Vector<int>
}

function _accountPrivacyRules(o: any) {
  i32(0x50a04e45);
  obj(o.rules); // Vector<PrivacyRule>
  obj(o.chats); // Vector<Chat>
  obj(o.users); // Vector<User>
}

function _accountDaysTTL(o: any) {
  i32(0xb8d0afdf);
  i32(o.days);
}

function _documentAttributeImageSize(o: any) {
  i32(0x6c37c15c);
  i32(o.w);
  i32(o.h);
}

function _documentAttributeAnimated(o: any) {
  i32(0x11b58939);
}

function _documentAttributeSticker(o: any) {
  i32(0x6319d612);
  const flags = +o.mask << 1 | +!!o.mask_coords;
  i32(flags);
  if (o.mask !== undefined) obj(o.mask); // flags.1?true
  str(o.alt);
  obj(o.stickerset); // InputStickerSet
  if (o.mask_coords !== undefined) obj(o.mask_coords); // flags.0?MaskCoords
}

function _documentAttributeVideo(o: any) {
  i32(0xef02ce6);
  const flags = +o.round_message | +o.supports_streaming << 1;
  i32(flags);
  if (o.round_message !== undefined) obj(o.round_message); // flags.0?true
  if (o.supports_streaming !== undefined) obj(o.supports_streaming); // flags.1?true
  i32(o.duration);
  i32(o.w);
  i32(o.h);
}

function _documentAttributeAudio(o: any) {
  i32(0x9852f9c6);
  const flags = +o.voice << 10 | +!!o.title | +!!o.performer << 1 | +!!o.waveform << 2;
  i32(flags);
  if (o.voice !== undefined) obj(o.voice); // flags.10?true
  i32(o.duration);
  if (o.title !== undefined) obj(o.title); // flags.0?string
  if (o.performer !== undefined) obj(o.performer); // flags.1?string
  if (o.waveform !== undefined) obj(o.waveform); // flags.2?bytes
}

function _documentAttributeFilename(o: any) {
  i32(0x15590068);
  str(o.file_name);
}

function _documentAttributeHasStickers(o: any) {
  i32(0x9801d2f7);
}

function _messagesStickersNotModified(o: any) {
  i32(0xf1749a22);
}

function _messagesStickers(o: any) {
  i32(0xe4599bbd);
  i32(o.hash);
  obj(o.stickers); // Vector<Document>
}

function _stickerPack(o: any) {
  i32(0x12b299d4);
  str(o.emoticon);
  obj(o.documents); // Vector<long>
}

function _messagesAllStickersNotModified(o: any) {
  i32(0xe86602c3);
}

function _messagesAllStickers(o: any) {
  i32(0xedfd405f);
  i32(o.hash);
  obj(o.sets); // Vector<StickerSet>
}

function _messagesAffectedMessages(o: any) {
  i32(0x84d19185);
  i32(o.pts);
  i32(o.pts_count);
}

function _webPageEmpty(o: any) {
  i32(0xeb1477e8);
  i64(o.id);
}

function _webPagePending(o: any) {
  i32(0xc586da1c);
  i64(o.id);
  i32(o.date);
}

function _webPage(o: any) {
  i32(0xe89c45b2);
  const flags = +!!o.type | +!!o.site_name << 1 | +!!o.title << 2 | +!!o.description << 3 | +!!o.photo << 4 | +!!o.embed_url << 5 | +!!o.embed_type << 5 | +!!o.embed_width << 6 | +!!o.embed_height << 6 | +!!o.duration << 7 | +!!o.author << 8 | +!!o.document << 9 | +!!o.cached_page << 10 | +!!o.attributes << 12;
  i32(flags);
  i64(o.id);
  str(o.url);
  str(o.display_url);
  i32(o.hash);
  if (o.type !== undefined) obj(o.type); // flags.0?string
  if (o.site_name !== undefined) obj(o.site_name); // flags.1?string
  if (o.title !== undefined) obj(o.title); // flags.2?string
  if (o.description !== undefined) obj(o.description); // flags.3?string
  if (o.photo !== undefined) obj(o.photo); // flags.4?Photo
  if (o.embed_url !== undefined) obj(o.embed_url); // flags.5?string
  if (o.embed_type !== undefined) obj(o.embed_type); // flags.5?string
  if (o.embed_width !== undefined) obj(o.embed_width); // flags.6?int
  if (o.embed_height !== undefined) obj(o.embed_height); // flags.6?int
  if (o.duration !== undefined) obj(o.duration); // flags.7?int
  if (o.author !== undefined) obj(o.author); // flags.8?string
  if (o.document !== undefined) obj(o.document); // flags.9?Document
  if (o.cached_page !== undefined) obj(o.cached_page); // flags.10?Page
  if (o.attributes !== undefined) obj(o.attributes); // flags.12?Vector<WebPageAttribute>
}

function _webPageNotModified(o: any) {
  i32(0x85849473);
}

function _authorization(o: any) {
  i32(0xad01d61d);
  const flags = +o.current | +o.official_app << 1 | +o.password_pending << 2;
  i32(flags);
  if (o.current !== undefined) obj(o.current); // flags.0?true
  if (o.official_app !== undefined) obj(o.official_app); // flags.1?true
  if (o.password_pending !== undefined) obj(o.password_pending); // flags.2?true
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
  i32(0x1250abde);
  obj(o.authorizations); // Vector<Authorization>
}

function _accountPassword(o: any) {
  i32(0xad2641f8);
  const flags = +o.has_recovery | +o.has_secure_values << 1 | +o.has_password << 2 | +!!o.current_algo << 2 | +!!o.srp_B << 2 | +!!o.srp_id << 2 | +!!o.hint << 3 | +!!o.email_unconfirmed_pattern << 4;
  i32(flags);
  if (o.has_recovery !== undefined) obj(o.has_recovery); // flags.0?true
  if (o.has_secure_values !== undefined) obj(o.has_secure_values); // flags.1?true
  if (o.has_password !== undefined) obj(o.has_password); // flags.2?true
  if (o.current_algo !== undefined) obj(o.current_algo); // flags.2?PasswordKdfAlgo
  if (o.srp_B !== undefined) obj(o.srp_B); // flags.2?bytes
  if (o.srp_id !== undefined) obj(o.srp_id); // flags.2?long
  if (o.hint !== undefined) obj(o.hint); // flags.3?string
  if (o.email_unconfirmed_pattern !== undefined) obj(o.email_unconfirmed_pattern); // flags.4?string
  obj(o.new_algo); // PasswordKdfAlgo
  obj(o.new_secure_algo); // SecurePasswordKdfAlgo
  bytes(o.secure_random);
}

function _accountPasswordSettings(o: any) {
  i32(0x9a5c33e5);
  const flags = +!!o.email | +!!o.secure_settings << 1;
  i32(flags);
  if (o.email !== undefined) obj(o.email); // flags.0?string
  if (o.secure_settings !== undefined) obj(o.secure_settings); // flags.1?SecureSecretSettings
}

function _accountPasswordInputSettings(o: any) {
  i32(0xc23727c9);
  const flags = +!!o.new_algo | +!!o.new_password_hash | +!!o.hint | +!!o.email << 1 | +!!o.new_secure_settings << 2;
  i32(flags);
  if (o.new_algo !== undefined) obj(o.new_algo); // flags.0?PasswordKdfAlgo
  if (o.new_password_hash !== undefined) obj(o.new_password_hash); // flags.0?bytes
  if (o.hint !== undefined) obj(o.hint); // flags.0?string
  if (o.email !== undefined) obj(o.email); // flags.1?string
  if (o.new_secure_settings !== undefined) obj(o.new_secure_settings); // flags.2?SecureSecretSettings
}

function _authPasswordRecovery(o: any) {
  i32(0x137948a5);
  str(o.email_pattern);
}

function _receivedNotifyMessage(o: any) {
  i32(0xa384b779);
  i32(o.id);
}

function _chatInviteEmpty(o: any) {
  i32(0x69df3769);
}

function _chatInviteExported(o: any) {
  i32(0xfc2e05bc);
  str(o.link);
}

function _chatInviteAlready(o: any) {
  i32(0x5a686d7c);
  obj(o.chat); // Chat
}

function _chatInvite(o: any) {
  i32(0xdfc2f58e);
  const flags = +o.channel | +o.broadcast << 1 | +o.public << 2 | +o.megagroup << 3 | +!!o.participants << 4;
  i32(flags);
  if (o.channel !== undefined) obj(o.channel); // flags.0?true
  if (o.broadcast !== undefined) obj(o.broadcast); // flags.1?true
  if (o.public !== undefined) obj(o.public); // flags.2?true
  if (o.megagroup !== undefined) obj(o.megagroup); // flags.3?true
  str(o.title);
  obj(o.photo); // Photo
  i32(o.participants_count);
  if (o.participants !== undefined) obj(o.participants); // flags.4?Vector<User>
}

function _inputStickerSetEmpty(o: any) {
  i32(0xffb62b95);
}

function _inputStickerSetID(o: any) {
  i32(0x9de7a269);
  i64(o.id);
  i64(o.access_hash);
}

function _inputStickerSetShortName(o: any) {
  i32(0x861cc8a0);
  str(o.short_name);
}

function _inputStickerSetAnimatedEmoji(o: any) {
  i32(0x28703c8);
}

function _stickerSet(o: any) {
  i32(0xeeb46f27);
  const flags = +o.archived << 1 | +o.official << 2 | +o.masks << 3 | +o.animated << 5 | +!!o.installed_date | +!!o.thumb << 4 | +!!o.thumb_dc_id << 4;
  i32(flags);
  if (o.archived !== undefined) obj(o.archived); // flags.1?true
  if (o.official !== undefined) obj(o.official); // flags.2?true
  if (o.masks !== undefined) obj(o.masks); // flags.3?true
  if (o.animated !== undefined) obj(o.animated); // flags.5?true
  if (o.installed_date !== undefined) obj(o.installed_date); // flags.0?int
  i64(o.id);
  i64(o.access_hash);
  str(o.title);
  str(o.short_name);
  if (o.thumb !== undefined) obj(o.thumb); // flags.4?PhotoSize
  if (o.thumb_dc_id !== undefined) obj(o.thumb_dc_id); // flags.4?int
  i32(o.count);
  i32(o.hash);
}

function _messagesStickerSet(o: any) {
  i32(0xb60a24a6);
  obj(o.set); // StickerSet
  obj(o.packs); // Vector<StickerPack>
  obj(o.documents); // Vector<Document>
}

function _botCommand(o: any) {
  i32(0xc27ac8c7);
  str(o.command);
  str(o.description);
}

function _botInfo(o: any) {
  i32(0x98e81d3a);
  i32(o.user_id);
  str(o.description);
  obj(o.commands); // Vector<BotCommand>
}

function _keyboardButton(o: any) {
  i32(0xa2fa4880);
  str(o.text);
}

function _keyboardButtonUrl(o: any) {
  i32(0x258aff05);
  str(o.text);
  str(o.url);
}

function _keyboardButtonCallback(o: any) {
  i32(0x683a5e46);
  str(o.text);
  bytes(o.data);
}

function _keyboardButtonRequestPhone(o: any) {
  i32(0xb16a6c29);
  str(o.text);
}

function _keyboardButtonRequestGeoLocation(o: any) {
  i32(0xfc796b3f);
  str(o.text);
}

function _keyboardButtonSwitchInline(o: any) {
  i32(0x568a748);
  const flags = +o.same_peer;
  i32(flags);
  if (o.same_peer !== undefined) obj(o.same_peer); // flags.0?true
  str(o.text);
  str(o.query);
}

function _keyboardButtonGame(o: any) {
  i32(0x50f41ccf);
  str(o.text);
}

function _keyboardButtonBuy(o: any) {
  i32(0xafd93fbb);
  str(o.text);
}

function _keyboardButtonUrlAuth(o: any) {
  i32(0x10b78d29);
  const flags = +!!o.fwd_text;
  i32(flags);
  str(o.text);
  if (o.fwd_text !== undefined) obj(o.fwd_text); // flags.0?string
  str(o.url);
  i32(o.button_id);
}

function _inputKeyboardButtonUrlAuth(o: any) {
  i32(0xd02e7fd4);
  const flags = +o.request_write_access | +!!o.fwd_text << 1;
  i32(flags);
  if (o.request_write_access !== undefined) obj(o.request_write_access); // flags.0?true
  str(o.text);
  if (o.fwd_text !== undefined) obj(o.fwd_text); // flags.1?string
  str(o.url);
  obj(o.bot); // InputUser
}

function _keyboardButtonRow(o: any) {
  i32(0x77608b83);
  obj(o.buttons); // Vector<KeyboardButton>
}

function _replyKeyboardHide(o: any) {
  i32(0xa03e5b85);
  const flags = +o.selective << 2;
  i32(flags);
  if (o.selective !== undefined) obj(o.selective); // flags.2?true
}

function _replyKeyboardForceReply(o: any) {
  i32(0xf4108aa0);
  const flags = +o.single_use << 1 | +o.selective << 2;
  i32(flags);
  if (o.single_use !== undefined) obj(o.single_use); // flags.1?true
  if (o.selective !== undefined) obj(o.selective); // flags.2?true
}

function _replyKeyboardMarkup(o: any) {
  i32(0x3502758c);
  const flags = +o.resize | +o.single_use << 1 | +o.selective << 2;
  i32(flags);
  if (o.resize !== undefined) obj(o.resize); // flags.0?true
  if (o.single_use !== undefined) obj(o.single_use); // flags.1?true
  if (o.selective !== undefined) obj(o.selective); // flags.2?true
  obj(o.rows); // Vector<KeyboardButtonRow>
}

function _replyInlineMarkup(o: any) {
  i32(0x48a30254);
  obj(o.rows); // Vector<KeyboardButtonRow>
}

function _messageEntityUnknown(o: any) {
  i32(0xbb92ba95);
  i32(o.offset);
  i32(o.length);
}

function _messageEntityMention(o: any) {
  i32(0xfa04579d);
  i32(o.offset);
  i32(o.length);
}

function _messageEntityHashtag(o: any) {
  i32(0x6f635b0d);
  i32(o.offset);
  i32(o.length);
}

function _messageEntityBotCommand(o: any) {
  i32(0x6cef8ac7);
  i32(o.offset);
  i32(o.length);
}

function _messageEntityUrl(o: any) {
  i32(0x6ed02538);
  i32(o.offset);
  i32(o.length);
}

function _messageEntityEmail(o: any) {
  i32(0x64e475c2);
  i32(o.offset);
  i32(o.length);
}

function _messageEntityBold(o: any) {
  i32(0xbd610bc9);
  i32(o.offset);
  i32(o.length);
}

function _messageEntityItalic(o: any) {
  i32(0x826f8b60);
  i32(o.offset);
  i32(o.length);
}

function _messageEntityCode(o: any) {
  i32(0x28a20571);
  i32(o.offset);
  i32(o.length);
}

function _messageEntityPre(o: any) {
  i32(0x73924be0);
  i32(o.offset);
  i32(o.length);
  str(o.language);
}

function _messageEntityTextUrl(o: any) {
  i32(0x76a6d327);
  i32(o.offset);
  i32(o.length);
  str(o.url);
}

function _messageEntityMentionName(o: any) {
  i32(0x352dca58);
  i32(o.offset);
  i32(o.length);
  i32(o.user_id);
}

function _inputMessageEntityMentionName(o: any) {
  i32(0x208e68c9);
  i32(o.offset);
  i32(o.length);
  obj(o.user_id); // InputUser
}

function _messageEntityPhone(o: any) {
  i32(0x9b69e34b);
  i32(o.offset);
  i32(o.length);
}

function _messageEntityCashtag(o: any) {
  i32(0x4c4e743f);
  i32(o.offset);
  i32(o.length);
}

function _messageEntityUnderline(o: any) {
  i32(0x9c4e7e8b);
  i32(o.offset);
  i32(o.length);
}

function _messageEntityStrike(o: any) {
  i32(0xbf0693d4);
  i32(o.offset);
  i32(o.length);
}

function _messageEntityBlockquote(o: any) {
  i32(0x20df5d0);
  i32(o.offset);
  i32(o.length);
}

function _inputChannelEmpty(o: any) {
  i32(0xee8c1e86);
}

function _inputChannel(o: any) {
  i32(0xafeb712e);
  i32(o.channel_id);
  i64(o.access_hash);
}

function _inputChannelFromMessage(o: any) {
  i32(0x2a286531);
  obj(o.peer); // InputPeer
  i32(o.msg_id);
  i32(o.channel_id);
}

function _contactsResolvedPeer(o: any) {
  i32(0x7f077ad9);
  obj(o.peer); // Peer
  obj(o.chats); // Vector<Chat>
  obj(o.users); // Vector<User>
}

function _messageRange(o: any) {
  i32(0xae30253);
  i32(o.min_id);
  i32(o.max_id);
}

function _updatesChannelDifferenceEmpty(o: any) {
  i32(0x3e11affb);
  const flags = +o.final | +!!o.timeout << 1;
  i32(flags);
  if (o.final !== undefined) obj(o.final); // flags.0?true
  i32(o.pts);
  if (o.timeout !== undefined) obj(o.timeout); // flags.1?int
}

function _updatesChannelDifferenceTooLong(o: any) {
  i32(0xa4bcc6fe);
  const flags = +o.final | +!!o.timeout << 1;
  i32(flags);
  if (o.final !== undefined) obj(o.final); // flags.0?true
  if (o.timeout !== undefined) obj(o.timeout); // flags.1?int
  obj(o.dialog); // Dialog
  obj(o.messages); // Vector<Message>
  obj(o.chats); // Vector<Chat>
  obj(o.users); // Vector<User>
}

function _updatesChannelDifference(o: any) {
  i32(0x2064674e);
  const flags = +o.final | +!!o.timeout << 1;
  i32(flags);
  if (o.final !== undefined) obj(o.final); // flags.0?true
  i32(o.pts);
  if (o.timeout !== undefined) obj(o.timeout); // flags.1?int
  obj(o.new_messages); // Vector<Message>
  obj(o.other_updates); // Vector<Update>
  obj(o.chats); // Vector<Chat>
  obj(o.users); // Vector<User>
}

function _channelMessagesFilterEmpty(o: any) {
  i32(0x94d42ee7);
}

function _channelMessagesFilter(o: any) {
  i32(0xcd77d957);
  const flags = +o.exclude_new_messages << 1;
  i32(flags);
  if (o.exclude_new_messages !== undefined) obj(o.exclude_new_messages); // flags.1?true
  obj(o.ranges); // Vector<MessageRange>
}

function _channelParticipant(o: any) {
  i32(0x15ebac1d);
  i32(o.user_id);
  i32(o.date);
}

function _channelParticipantSelf(o: any) {
  i32(0xa3289a6d);
  i32(o.user_id);
  i32(o.inviter_id);
  i32(o.date);
}

function _channelParticipantCreator(o: any) {
  i32(0x808d15a4);
  const flags = +!!o.rank;
  i32(flags);
  i32(o.user_id);
  if (o.rank !== undefined) obj(o.rank); // flags.0?string
}

function _channelParticipantAdmin(o: any) {
  i32(0xccbebbaf);
  const flags = +o.can_edit | +o.self << 1 | +!!o.inviter_id << 1 | +!!o.rank << 2;
  i32(flags);
  if (o.can_edit !== undefined) obj(o.can_edit); // flags.0?true
  if (o.self !== undefined) obj(o.self); // flags.1?true
  i32(o.user_id);
  if (o.inviter_id !== undefined) obj(o.inviter_id); // flags.1?int
  i32(o.promoted_by);
  i32(o.date);
  obj(o.admin_rights); // ChatAdminRights
  if (o.rank !== undefined) obj(o.rank); // flags.2?string
}

function _channelParticipantBanned(o: any) {
  i32(0x1c0facaf);
  const flags = +o.left;
  i32(flags);
  if (o.left !== undefined) obj(o.left); // flags.0?true
  i32(o.user_id);
  i32(o.kicked_by);
  i32(o.date);
  obj(o.banned_rights); // ChatBannedRights
}

function _channelParticipantsRecent(o: any) {
  i32(0xde3f3c79);
}

function _channelParticipantsAdmins(o: any) {
  i32(0xb4608969);
}

function _channelParticipantsKicked(o: any) {
  i32(0xa3b54985);
  str(o.q);
}

function _channelParticipantsBots(o: any) {
  i32(0xb0d1865b);
}

function _channelParticipantsBanned(o: any) {
  i32(0x1427a5e1);
  str(o.q);
}

function _channelParticipantsSearch(o: any) {
  i32(0x656ac4b);
  str(o.q);
}

function _channelParticipantsContacts(o: any) {
  i32(0xbb6ae88d);
  str(o.q);
}

function _channelsChannelParticipants(o: any) {
  i32(0xf56ee2a8);
  i32(o.count);
  obj(o.participants); // Vector<ChannelParticipant>
  obj(o.users); // Vector<User>
}

function _channelsChannelParticipantsNotModified(o: any) {
  i32(0xf0173fe9);
}

function _channelsChannelParticipant(o: any) {
  i32(0xd0d9b163);
  obj(o.participant); // ChannelParticipant
  obj(o.users); // Vector<User>
}

function _helpTermsOfService(o: any) {
  i32(0x780a0310);
  const flags = +o.popup | +!!o.min_age_confirm << 1;
  i32(flags);
  if (o.popup !== undefined) obj(o.popup); // flags.0?true
  obj(o.id); // DataJSON
  str(o.text);
  obj(o.entities); // Vector<MessageEntity>
  if (o.min_age_confirm !== undefined) obj(o.min_age_confirm); // flags.1?int
}

function _foundGif(o: any) {
  i32(0x162ecc1f);
  str(o.url);
  str(o.thumb_url);
  str(o.content_url);
  str(o.content_type);
  i32(o.w);
  i32(o.h);
}

function _foundGifCached(o: any) {
  i32(0x9c750409);
  str(o.url);
  obj(o.photo); // Photo
  obj(o.document); // Document
}

function _messagesFoundGifs(o: any) {
  i32(0x450a1c0a);
  i32(o.next_offset);
  obj(o.results); // Vector<FoundGif>
}

function _messagesSavedGifsNotModified(o: any) {
  i32(0xe8025ca2);
}

function _messagesSavedGifs(o: any) {
  i32(0x2e0709a5);
  i32(o.hash);
  obj(o.gifs); // Vector<Document>
}

function _inputBotInlineMessageMediaAuto(o: any) {
  i32(0x3380c786);
  const flags = +!!o.entities << 1 | +!!o.reply_markup << 2;
  i32(flags);
  str(o.message);
  if (o.entities !== undefined) obj(o.entities); // flags.1?Vector<MessageEntity>
  if (o.reply_markup !== undefined) obj(o.reply_markup); // flags.2?ReplyMarkup
}

function _inputBotInlineMessageText(o: any) {
  i32(0x3dcd7a87);
  const flags = +o.no_webpage | +!!o.entities << 1 | +!!o.reply_markup << 2;
  i32(flags);
  if (o.no_webpage !== undefined) obj(o.no_webpage); // flags.0?true
  str(o.message);
  if (o.entities !== undefined) obj(o.entities); // flags.1?Vector<MessageEntity>
  if (o.reply_markup !== undefined) obj(o.reply_markup); // flags.2?ReplyMarkup
}

function _inputBotInlineMessageMediaGeo(o: any) {
  i32(0xc1b15d65);
  const flags = +!!o.reply_markup << 2;
  i32(flags);
  obj(o.geo_point); // InputGeoPoint
  i32(o.period);
  if (o.reply_markup !== undefined) obj(o.reply_markup); // flags.2?ReplyMarkup
}

function _inputBotInlineMessageMediaVenue(o: any) {
  i32(0x417bbf11);
  const flags = +!!o.reply_markup << 2;
  i32(flags);
  obj(o.geo_point); // InputGeoPoint
  str(o.title);
  str(o.address);
  str(o.provider);
  str(o.venue_id);
  str(o.venue_type);
  if (o.reply_markup !== undefined) obj(o.reply_markup); // flags.2?ReplyMarkup
}

function _inputBotInlineMessageMediaContact(o: any) {
  i32(0xa6edbffd);
  const flags = +!!o.reply_markup << 2;
  i32(flags);
  str(o.phone_number);
  str(o.first_name);
  str(o.last_name);
  str(o.vcard);
  if (o.reply_markup !== undefined) obj(o.reply_markup); // flags.2?ReplyMarkup
}

function _inputBotInlineMessageGame(o: any) {
  i32(0x4b425864);
  const flags = +!!o.reply_markup << 2;
  i32(flags);
  if (o.reply_markup !== undefined) obj(o.reply_markup); // flags.2?ReplyMarkup
}

function _inputBotInlineResult(o: any) {
  i32(0x88bf9319);
  const flags = +!!o.title << 1 | +!!o.description << 2 | +!!o.url << 3 | +!!o.thumb << 4 | +!!o.content << 5;
  i32(flags);
  str(o.id);
  str(o.type);
  if (o.title !== undefined) obj(o.title); // flags.1?string
  if (o.description !== undefined) obj(o.description); // flags.2?string
  if (o.url !== undefined) obj(o.url); // flags.3?string
  if (o.thumb !== undefined) obj(o.thumb); // flags.4?InputWebDocument
  if (o.content !== undefined) obj(o.content); // flags.5?InputWebDocument
  obj(o.send_message); // InputBotInlineMessage
}

function _inputBotInlineResultPhoto(o: any) {
  i32(0xa8d864a7);
  str(o.id);
  str(o.type);
  obj(o.photo); // InputPhoto
  obj(o.send_message); // InputBotInlineMessage
}

function _inputBotInlineResultDocument(o: any) {
  i32(0xfff8fdc4);
  const flags = +!!o.title << 1 | +!!o.description << 2;
  i32(flags);
  str(o.id);
  str(o.type);
  if (o.title !== undefined) obj(o.title); // flags.1?string
  if (o.description !== undefined) obj(o.description); // flags.2?string
  obj(o.document); // InputDocument
  obj(o.send_message); // InputBotInlineMessage
}

function _inputBotInlineResultGame(o: any) {
  i32(0x4fa417f2);
  str(o.id);
  str(o.short_name);
  obj(o.send_message); // InputBotInlineMessage
}

function _botInlineMessageMediaAuto(o: any) {
  i32(0x764cf810);
  const flags = +!!o.entities << 1 | +!!o.reply_markup << 2;
  i32(flags);
  str(o.message);
  if (o.entities !== undefined) obj(o.entities); // flags.1?Vector<MessageEntity>
  if (o.reply_markup !== undefined) obj(o.reply_markup); // flags.2?ReplyMarkup
}

function _botInlineMessageText(o: any) {
  i32(0x8c7f65e2);
  const flags = +o.no_webpage | +!!o.entities << 1 | +!!o.reply_markup << 2;
  i32(flags);
  if (o.no_webpage !== undefined) obj(o.no_webpage); // flags.0?true
  str(o.message);
  if (o.entities !== undefined) obj(o.entities); // flags.1?Vector<MessageEntity>
  if (o.reply_markup !== undefined) obj(o.reply_markup); // flags.2?ReplyMarkup
}

function _botInlineMessageMediaGeo(o: any) {
  i32(0xb722de65);
  const flags = +!!o.reply_markup << 2;
  i32(flags);
  obj(o.geo); // GeoPoint
  i32(o.period);
  if (o.reply_markup !== undefined) obj(o.reply_markup); // flags.2?ReplyMarkup
}

function _botInlineMessageMediaVenue(o: any) {
  i32(0x8a86659c);
  const flags = +!!o.reply_markup << 2;
  i32(flags);
  obj(o.geo); // GeoPoint
  str(o.title);
  str(o.address);
  str(o.provider);
  str(o.venue_id);
  str(o.venue_type);
  if (o.reply_markup !== undefined) obj(o.reply_markup); // flags.2?ReplyMarkup
}

function _botInlineMessageMediaContact(o: any) {
  i32(0x18d1cdc2);
  const flags = +!!o.reply_markup << 2;
  i32(flags);
  str(o.phone_number);
  str(o.first_name);
  str(o.last_name);
  str(o.vcard);
  if (o.reply_markup !== undefined) obj(o.reply_markup); // flags.2?ReplyMarkup
}

function _botInlineResult(o: any) {
  i32(0x11965f3a);
  const flags = +!!o.title << 1 | +!!o.description << 2 | +!!o.url << 3 | +!!o.thumb << 4 | +!!o.content << 5;
  i32(flags);
  str(o.id);
  str(o.type);
  if (o.title !== undefined) obj(o.title); // flags.1?string
  if (o.description !== undefined) obj(o.description); // flags.2?string
  if (o.url !== undefined) obj(o.url); // flags.3?string
  if (o.thumb !== undefined) obj(o.thumb); // flags.4?WebDocument
  if (o.content !== undefined) obj(o.content); // flags.5?WebDocument
  obj(o.send_message); // BotInlineMessage
}

function _botInlineMediaResult(o: any) {
  i32(0x17db940b);
  const flags = +!!o.photo | +!!o.document << 1 | +!!o.title << 2 | +!!o.description << 3;
  i32(flags);
  str(o.id);
  str(o.type);
  if (o.photo !== undefined) obj(o.photo); // flags.0?Photo
  if (o.document !== undefined) obj(o.document); // flags.1?Document
  if (o.title !== undefined) obj(o.title); // flags.2?string
  if (o.description !== undefined) obj(o.description); // flags.3?string
  obj(o.send_message); // BotInlineMessage
}

function _messagesBotResults(o: any) {
  i32(0x947ca848);
  const flags = +o.gallery | +!!o.next_offset << 1 | +!!o.switch_pm << 2;
  i32(flags);
  if (o.gallery !== undefined) obj(o.gallery); // flags.0?true
  i64(o.query_id);
  if (o.next_offset !== undefined) obj(o.next_offset); // flags.1?string
  if (o.switch_pm !== undefined) obj(o.switch_pm); // flags.2?InlineBotSwitchPM
  obj(o.results); // Vector<BotInlineResult>
  i32(o.cache_time);
  obj(o.users); // Vector<User>
}

function _exportedMessageLink(o: any) {
  i32(0x5dab1af4);
  str(o.link);
  str(o.html);
}

function _messageFwdHeader(o: any) {
  i32(0xec338270);
  const flags = +!!o.from_id | +!!o.from_name << 5 | +!!o.channel_id << 1 | +!!o.channel_post << 2 | +!!o.post_author << 3 | +!!o.saved_from_peer << 4 | +!!o.saved_from_msg_id << 4;
  i32(flags);
  if (o.from_id !== undefined) obj(o.from_id); // flags.0?int
  if (o.from_name !== undefined) obj(o.from_name); // flags.5?string
  i32(o.date);
  if (o.channel_id !== undefined) obj(o.channel_id); // flags.1?int
  if (o.channel_post !== undefined) obj(o.channel_post); // flags.2?int
  if (o.post_author !== undefined) obj(o.post_author); // flags.3?string
  if (o.saved_from_peer !== undefined) obj(o.saved_from_peer); // flags.4?Peer
  if (o.saved_from_msg_id !== undefined) obj(o.saved_from_msg_id); // flags.4?int
}

function _authCodeTypeSms(o: any) {
  i32(0x72a3158c);
}

function _authCodeTypeCall(o: any) {
  i32(0x741cd3e3);
}

function _authCodeTypeFlashCall(o: any) {
  i32(0x226ccefb);
}

function _authSentCodeTypeApp(o: any) {
  i32(0x3dbb5986);
  i32(o.length);
}

function _authSentCodeTypeSms(o: any) {
  i32(0xc000bba2);
  i32(o.length);
}

function _authSentCodeTypeCall(o: any) {
  i32(0x5353e5a7);
  i32(o.length);
}

function _authSentCodeTypeFlashCall(o: any) {
  i32(0xab03c6d9);
  str(o.pattern);
}

function _messagesBotCallbackAnswer(o: any) {
  i32(0x36585ea4);
  const flags = +o.alert << 1 | +o.has_url << 3 | +o.native_ui << 4 | +!!o.message | +!!o.url << 2;
  i32(flags);
  if (o.alert !== undefined) obj(o.alert); // flags.1?true
  if (o.has_url !== undefined) obj(o.has_url); // flags.3?true
  if (o.native_ui !== undefined) obj(o.native_ui); // flags.4?true
  if (o.message !== undefined) obj(o.message); // flags.0?string
  if (o.url !== undefined) obj(o.url); // flags.2?string
  i32(o.cache_time);
}

function _messagesMessageEditData(o: any) {
  i32(0x26b5dde6);
  const flags = +o.caption;
  i32(flags);
  if (o.caption !== undefined) obj(o.caption); // flags.0?true
}

function _inputBotInlineMessageID(o: any) {
  i32(0x890c3d89);
  i32(o.dc_id);
  i64(o.id);
  i64(o.access_hash);
}

function _inlineBotSwitchPM(o: any) {
  i32(0x3c20629f);
  str(o.text);
  str(o.start_param);
}

function _messagesPeerDialogs(o: any) {
  i32(0x3371c354);
  obj(o.dialogs); // Vector<Dialog>
  obj(o.messages); // Vector<Message>
  obj(o.chats); // Vector<Chat>
  obj(o.users); // Vector<User>
  obj(o.state); // updates.State
}

function _topPeer(o: any) {
  i32(0xedcdc05b);
  obj(o.peer); // Peer
  f64(o.rating);
}

function _topPeerCategoryBotsPM(o: any) {
  i32(0xab661b5b);
}

function _topPeerCategoryBotsInline(o: any) {
  i32(0x148677e2);
}

function _topPeerCategoryCorrespondents(o: any) {
  i32(0x637b7ed);
}

function _topPeerCategoryGroups(o: any) {
  i32(0xbd17a14a);
}

function _topPeerCategoryChannels(o: any) {
  i32(0x161d9628);
}

function _topPeerCategoryPhoneCalls(o: any) {
  i32(0x1e76a78c);
}

function _topPeerCategoryForwardUsers(o: any) {
  i32(0xa8406ca9);
}

function _topPeerCategoryForwardChats(o: any) {
  i32(0xfbeec0f0);
}

function _topPeerCategoryPeers(o: any) {
  i32(0xfb834291);
  obj(o.category); // TopPeerCategory
  i32(o.count);
  obj(o.peers); // Vector<TopPeer>
}

function _contactsTopPeersNotModified(o: any) {
  i32(0xde266ef5);
}

function _contactsTopPeers(o: any) {
  i32(0x70b772a8);
  obj(o.categories); // Vector<TopPeerCategoryPeers>
  obj(o.chats); // Vector<Chat>
  obj(o.users); // Vector<User>
}

function _contactsTopPeersDisabled(o: any) {
  i32(0xb52c939d);
}

function _draftMessageEmpty(o: any) {
  i32(0x1b0c841a);
  const flags = +!!o.date;
  i32(flags);
  if (o.date !== undefined) obj(o.date); // flags.0?int
}

function _draftMessage(o: any) {
  i32(0xfd8e711f);
  const flags = +o.no_webpage << 1 | +!!o.reply_to_msg_id | +!!o.entities << 3;
  i32(flags);
  if (o.no_webpage !== undefined) obj(o.no_webpage); // flags.1?true
  if (o.reply_to_msg_id !== undefined) obj(o.reply_to_msg_id); // flags.0?int
  str(o.message);
  if (o.entities !== undefined) obj(o.entities); // flags.3?Vector<MessageEntity>
  i32(o.date);
}

function _messagesFeaturedStickersNotModified(o: any) {
  i32(0x4ede3cf);
}

function _messagesFeaturedStickers(o: any) {
  i32(0xf89d88e5);
  i32(o.hash);
  obj(o.sets); // Vector<StickerSetCovered>
  obj(o.unread); // Vector<long>
}

function _messagesRecentStickersNotModified(o: any) {
  i32(0xb17f890);
}

function _messagesRecentStickers(o: any) {
  i32(0x22f3afb3);
  i32(o.hash);
  obj(o.packs); // Vector<StickerPack>
  obj(o.stickers); // Vector<Document>
  obj(o.dates); // Vector<int>
}

function _messagesArchivedStickers(o: any) {
  i32(0x4fcba9c8);
  i32(o.count);
  obj(o.sets); // Vector<StickerSetCovered>
}

function _messagesStickerSetInstallResultSuccess(o: any) {
  i32(0x38641628);
}

function _messagesStickerSetInstallResultArchive(o: any) {
  i32(0x35e410a8);
  obj(o.sets); // Vector<StickerSetCovered>
}

function _stickerSetCovered(o: any) {
  i32(0x6410a5d2);
  obj(o.set); // StickerSet
  obj(o.cover); // Document
}

function _stickerSetMultiCovered(o: any) {
  i32(0x3407e51b);
  obj(o.set); // StickerSet
  obj(o.covers); // Vector<Document>
}

function _maskCoords(o: any) {
  i32(0xaed6dbb2);
  i32(o.n);
  f64(o.x);
  f64(o.y);
  f64(o.zoom);
}

function _inputStickeredMediaPhoto(o: any) {
  i32(0x4a992157);
  obj(o.id); // InputPhoto
}

function _inputStickeredMediaDocument(o: any) {
  i32(0x438865b);
  obj(o.id); // InputDocument
}

function _game(o: any) {
  i32(0xbdf9653b);
  const flags = +!!o.document;
  i32(flags);
  i64(o.id);
  i64(o.access_hash);
  str(o.short_name);
  str(o.title);
  str(o.description);
  obj(o.photo); // Photo
  if (o.document !== undefined) obj(o.document); // flags.0?Document
}

function _inputGameID(o: any) {
  i32(0x32c3e77);
  i64(o.id);
  i64(o.access_hash);
}

function _inputGameShortName(o: any) {
  i32(0xc331e80a);
  obj(o.bot_id); // InputUser
  str(o.short_name);
}

function _highScore(o: any) {
  i32(0x58fffcd0);
  i32(o.pos);
  i32(o.user_id);
  i32(o.score);
}

function _messagesHighScores(o: any) {
  i32(0x9a3bfd99);
  obj(o.scores); // Vector<HighScore>
  obj(o.users); // Vector<User>
}

function _textEmpty(o: any) {
  i32(0xdc3d824f);
}

function _textPlain(o: any) {
  i32(0x744694e0);
  str(o.text);
}

function _textBold(o: any) {
  i32(0x6724abc4);
  obj(o.text); // RichText
}

function _textItalic(o: any) {
  i32(0xd912a59c);
  obj(o.text); // RichText
}

function _textUnderline(o: any) {
  i32(0xc12622c4);
  obj(o.text); // RichText
}

function _textStrike(o: any) {
  i32(0x9bf8bb95);
  obj(o.text); // RichText
}

function _textFixed(o: any) {
  i32(0x6c3f19b9);
  obj(o.text); // RichText
}

function _textUrl(o: any) {
  i32(0x3c2884c1);
  obj(o.text); // RichText
  str(o.url);
  i64(o.webpage_id);
}

function _textEmail(o: any) {
  i32(0xde5a0dd6);
  obj(o.text); // RichText
  str(o.email);
}

function _textConcat(o: any) {
  i32(0x7e6260d7);
  obj(o.texts); // Vector<RichText>
}

function _textSubscript(o: any) {
  i32(0xed6a8504);
  obj(o.text); // RichText
}

function _textSuperscript(o: any) {
  i32(0xc7fb5e01);
  obj(o.text); // RichText
}

function _textMarked(o: any) {
  i32(0x34b8621);
  obj(o.text); // RichText
}

function _textPhone(o: any) {
  i32(0x1ccb966a);
  obj(o.text); // RichText
  str(o.phone);
}

function _textImage(o: any) {
  i32(0x81ccf4f);
  i64(o.document_id);
  i32(o.w);
  i32(o.h);
}

function _textAnchor(o: any) {
  i32(0x35553762);
  obj(o.text); // RichText
  str(o.name);
}

function _pageBlockUnsupported(o: any) {
  i32(0x13567e8a);
}

function _pageBlockTitle(o: any) {
  i32(0x70abc3fd);
  obj(o.text); // RichText
}

function _pageBlockSubtitle(o: any) {
  i32(0x8ffa9a1f);
  obj(o.text); // RichText
}

function _pageBlockAuthorDate(o: any) {
  i32(0xbaafe5e0);
  obj(o.author); // RichText
  i32(o.published_date);
}

function _pageBlockHeader(o: any) {
  i32(0xbfd064ec);
  obj(o.text); // RichText
}

function _pageBlockSubheader(o: any) {
  i32(0xf12bb6e1);
  obj(o.text); // RichText
}

function _pageBlockParagraph(o: any) {
  i32(0x467a0766);
  obj(o.text); // RichText
}

function _pageBlockPreformatted(o: any) {
  i32(0xc070d93e);
  obj(o.text); // RichText
  str(o.language);
}

function _pageBlockFooter(o: any) {
  i32(0x48870999);
  obj(o.text); // RichText
}

function _pageBlockDivider(o: any) {
  i32(0xdb20b188);
}

function _pageBlockAnchor(o: any) {
  i32(0xce0d37b0);
  str(o.name);
}

function _pageBlockList(o: any) {
  i32(0xe4e88011);
  obj(o.items); // Vector<PageListItem>
}

function _pageBlockBlockquote(o: any) {
  i32(0x263d7c26);
  obj(o.text); // RichText
  obj(o.caption); // RichText
}

function _pageBlockPullquote(o: any) {
  i32(0x4f4456d3);
  obj(o.text); // RichText
  obj(o.caption); // RichText
}

function _pageBlockPhoto(o: any) {
  i32(0x1759c560);
  const flags = +!!o.url | +!!o.webpage_id;
  i32(flags);
  i64(o.photo_id);
  obj(o.caption); // PageCaption
  if (o.url !== undefined) obj(o.url); // flags.0?string
  if (o.webpage_id !== undefined) obj(o.webpage_id); // flags.0?long
}

function _pageBlockVideo(o: any) {
  i32(0x7c8fe7b6);
  const flags = +o.autoplay | +o.loop << 1;
  i32(flags);
  if (o.autoplay !== undefined) obj(o.autoplay); // flags.0?true
  if (o.loop !== undefined) obj(o.loop); // flags.1?true
  i64(o.video_id);
  obj(o.caption); // PageCaption
}

function _pageBlockCover(o: any) {
  i32(0x39f23300);
  obj(o.cover); // PageBlock
}

function _pageBlockEmbed(o: any) {
  i32(0xa8718dc5);
  const flags = +o.full_width | +o.allow_scrolling << 3 | +!!o.url << 1 | +!!o.html << 2 | +!!o.poster_photo_id << 4 | +!!o.w << 5 | +!!o.h << 5;
  i32(flags);
  if (o.full_width !== undefined) obj(o.full_width); // flags.0?true
  if (o.allow_scrolling !== undefined) obj(o.allow_scrolling); // flags.3?true
  if (o.url !== undefined) obj(o.url); // flags.1?string
  if (o.html !== undefined) obj(o.html); // flags.2?string
  if (o.poster_photo_id !== undefined) obj(o.poster_photo_id); // flags.4?long
  if (o.w !== undefined) obj(o.w); // flags.5?int
  if (o.h !== undefined) obj(o.h); // flags.5?int
  obj(o.caption); // PageCaption
}

function _pageBlockEmbedPost(o: any) {
  i32(0xf259a80b);
  str(o.url);
  i64(o.webpage_id);
  i64(o.author_photo_id);
  str(o.author);
  i32(o.date);
  obj(o.blocks); // Vector<PageBlock>
  obj(o.caption); // PageCaption
}

function _pageBlockCollage(o: any) {
  i32(0x65a0fa4d);
  obj(o.items); // Vector<PageBlock>
  obj(o.caption); // PageCaption
}

function _pageBlockSlideshow(o: any) {
  i32(0x31f9590);
  obj(o.items); // Vector<PageBlock>
  obj(o.caption); // PageCaption
}

function _pageBlockChannel(o: any) {
  i32(0xef1751b5);
  obj(o.channel); // Chat
}

function _pageBlockAudio(o: any) {
  i32(0x804361ea);
  i64(o.audio_id);
  obj(o.caption); // PageCaption
}

function _pageBlockKicker(o: any) {
  i32(0x1e148390);
  obj(o.text); // RichText
}

function _pageBlockTable(o: any) {
  i32(0xbf4dea82);
  const flags = +o.bordered | +o.striped << 1;
  i32(flags);
  if (o.bordered !== undefined) obj(o.bordered); // flags.0?true
  if (o.striped !== undefined) obj(o.striped); // flags.1?true
  obj(o.title); // RichText
  obj(o.rows); // Vector<PageTableRow>
}

function _pageBlockOrderedList(o: any) {
  i32(0x9a8ae1e1);
  obj(o.items); // Vector<PageListOrderedItem>
}

function _pageBlockDetails(o: any) {
  i32(0x76768bed);
  const flags = +o.open;
  i32(flags);
  if (o.open !== undefined) obj(o.open); // flags.0?true
  obj(o.blocks); // Vector<PageBlock>
  obj(o.title); // RichText
}

function _pageBlockRelatedArticles(o: any) {
  i32(0x16115a96);
  obj(o.title); // RichText
  obj(o.articles); // Vector<PageRelatedArticle>
}

function _pageBlockMap(o: any) {
  i32(0xa44f3ef6);
  obj(o.geo); // GeoPoint
  i32(o.zoom);
  i32(o.w);
  i32(o.h);
  obj(o.caption); // PageCaption
}

function _phoneCallDiscardReasonMissed(o: any) {
  i32(0x85e42301);
}

function _phoneCallDiscardReasonDisconnect(o: any) {
  i32(0xe095c1a0);
}

function _phoneCallDiscardReasonHangup(o: any) {
  i32(0x57adc690);
}

function _phoneCallDiscardReasonBusy(o: any) {
  i32(0xfaf7e8c9);
}

function _dataJSON(o: any) {
  i32(0x7d748d04);
  str(o.data);
}

function _labeledPrice(o: any) {
  i32(0xcb296bf8);
  str(o.label);
  i64(o.amount);
}

function _invoice(o: any) {
  i32(0xc30aa358);
  const flags = +o.test | +o.name_requested << 1 | +o.phone_requested << 2 | +o.email_requested << 3 | +o.shipping_address_requested << 4 | +o.flexible << 5 | +o.phone_to_provider << 6 | +o.email_to_provider << 7;
  i32(flags);
  if (o.test !== undefined) obj(o.test); // flags.0?true
  if (o.name_requested !== undefined) obj(o.name_requested); // flags.1?true
  if (o.phone_requested !== undefined) obj(o.phone_requested); // flags.2?true
  if (o.email_requested !== undefined) obj(o.email_requested); // flags.3?true
  if (o.shipping_address_requested !== undefined) obj(o.shipping_address_requested); // flags.4?true
  if (o.flexible !== undefined) obj(o.flexible); // flags.5?true
  if (o.phone_to_provider !== undefined) obj(o.phone_to_provider); // flags.6?true
  if (o.email_to_provider !== undefined) obj(o.email_to_provider); // flags.7?true
  str(o.currency);
  obj(o.prices); // Vector<LabeledPrice>
}

function _paymentCharge(o: any) {
  i32(0xea02c27e);
  str(o.id);
  str(o.provider_charge_id);
}

function _postAddress(o: any) {
  i32(0x1e8caaeb);
  str(o.street_line1);
  str(o.street_line2);
  str(o.city);
  str(o.state);
  str(o.country_iso2);
  str(o.post_code);
}

function _paymentRequestedInfo(o: any) {
  i32(0x909c3f94);
  const flags = +!!o.name | +!!o.phone << 1 | +!!o.email << 2 | +!!o.shipping_address << 3;
  i32(flags);
  if (o.name !== undefined) obj(o.name); // flags.0?string
  if (o.phone !== undefined) obj(o.phone); // flags.1?string
  if (o.email !== undefined) obj(o.email); // flags.2?string
  if (o.shipping_address !== undefined) obj(o.shipping_address); // flags.3?PostAddress
}

function _paymentSavedCredentialsCard(o: any) {
  i32(0xcdc27a1f);
  str(o.id);
  str(o.title);
}

function _webDocument(o: any) {
  i32(0x1c570ed1);
  str(o.url);
  i64(o.access_hash);
  i32(o.size);
  str(o.mime_type);
  obj(o.attributes); // Vector<DocumentAttribute>
}

function _webDocumentNoProxy(o: any) {
  i32(0xf9c8bcc6);
  str(o.url);
  i32(o.size);
  str(o.mime_type);
  obj(o.attributes); // Vector<DocumentAttribute>
}

function _inputWebDocument(o: any) {
  i32(0x9bed434d);
  str(o.url);
  i32(o.size);
  str(o.mime_type);
  obj(o.attributes); // Vector<DocumentAttribute>
}

function _inputWebFileLocation(o: any) {
  i32(0xc239d686);
  str(o.url);
  i64(o.access_hash);
}

function _inputWebFileGeoPointLocation(o: any) {
  i32(0x9f2221c9);
  obj(o.geo_point); // InputGeoPoint
  i64(o.access_hash);
  i32(o.w);
  i32(o.h);
  i32(o.zoom);
  i32(o.scale);
}

function _uploadWebFile(o: any) {
  i32(0x21e753bc);
  i32(o.size);
  str(o.mime_type);
  obj(o.file_type); // storage.FileType
  i32(o.mtime);
  bytes(o.bytes);
}

function _paymentsPaymentForm(o: any) {
  i32(0x3f56aea3);
  const flags = +o.can_save_credentials << 2 | +o.password_missing << 3 | +!!o.native_provider << 4 | +!!o.native_params << 4 | +!!o.saved_info | +!!o.saved_credentials << 1;
  i32(flags);
  if (o.can_save_credentials !== undefined) obj(o.can_save_credentials); // flags.2?true
  if (o.password_missing !== undefined) obj(o.password_missing); // flags.3?true
  i32(o.bot_id);
  obj(o.invoice); // Invoice
  i32(o.provider_id);
  str(o.url);
  if (o.native_provider !== undefined) obj(o.native_provider); // flags.4?string
  if (o.native_params !== undefined) obj(o.native_params); // flags.4?DataJSON
  if (o.saved_info !== undefined) obj(o.saved_info); // flags.0?PaymentRequestedInfo
  if (o.saved_credentials !== undefined) obj(o.saved_credentials); // flags.1?PaymentSavedCredentials
  obj(o.users); // Vector<User>
}

function _paymentsValidatedRequestedInfo(o: any) {
  i32(0xd1451883);
  const flags = +!!o.id | +!!o.shipping_options << 1;
  i32(flags);
  if (o.id !== undefined) obj(o.id); // flags.0?string
  if (o.shipping_options !== undefined) obj(o.shipping_options); // flags.1?Vector<ShippingOption>
}

function _paymentsPaymentResult(o: any) {
  i32(0x4e5f810d);
  obj(o.updates); // Updates
}

function _paymentsPaymentVerificationNeeded(o: any) {
  i32(0xd8411139);
  str(o.url);
}

function _paymentsPaymentReceipt(o: any) {
  i32(0x500911e1);
  const flags = +!!o.info | +!!o.shipping << 1;
  i32(flags);
  i32(o.date);
  i32(o.bot_id);
  obj(o.invoice); // Invoice
  i32(o.provider_id);
  if (o.info !== undefined) obj(o.info); // flags.0?PaymentRequestedInfo
  if (o.shipping !== undefined) obj(o.shipping); // flags.1?ShippingOption
  str(o.currency);
  i64(o.total_amount);
  str(o.credentials_title);
  obj(o.users); // Vector<User>
}

function _paymentsSavedInfo(o: any) {
  i32(0xfb8fe43c);
  const flags = +o.has_saved_credentials << 1 | +!!o.saved_info;
  i32(flags);
  if (o.has_saved_credentials !== undefined) obj(o.has_saved_credentials); // flags.1?true
  if (o.saved_info !== undefined) obj(o.saved_info); // flags.0?PaymentRequestedInfo
}

function _inputPaymentCredentialsSaved(o: any) {
  i32(0xc10eb2cf);
  str(o.id);
  bytes(o.tmp_password);
}

function _inputPaymentCredentials(o: any) {
  i32(0x3417d728);
  const flags = +o.save;
  i32(flags);
  if (o.save !== undefined) obj(o.save); // flags.0?true
  obj(o.data); // DataJSON
}

function _inputPaymentCredentialsApplePay(o: any) {
  i32(0xaa1c39f);
  obj(o.payment_data); // DataJSON
}

function _inputPaymentCredentialsAndroidPay(o: any) {
  i32(0xca05d50e);
  obj(o.payment_token); // DataJSON
  str(o.google_transaction_id);
}

function _accountTmpPassword(o: any) {
  i32(0xdb64fd34);
  bytes(o.tmp_password);
  i32(o.valid_until);
}

function _shippingOption(o: any) {
  i32(0xb6213cdf);
  str(o.id);
  str(o.title);
  obj(o.prices); // Vector<LabeledPrice>
}

function _inputStickerSetItem(o: any) {
  i32(0xffa0a496);
  const flags = +!!o.mask_coords;
  i32(flags);
  obj(o.document); // InputDocument
  str(o.emoji);
  if (o.mask_coords !== undefined) obj(o.mask_coords); // flags.0?MaskCoords
}

function _inputPhoneCall(o: any) {
  i32(0x1e36fded);
  i64(o.id);
  i64(o.access_hash);
}

function _phoneCallEmpty(o: any) {
  i32(0x5366c915);
  i64(o.id);
}

function _phoneCallWaiting(o: any) {
  i32(0x1b8f4ad1);
  const flags = +o.video << 5 | +!!o.receive_date;
  i32(flags);
  if (o.video !== undefined) obj(o.video); // flags.5?true
  i64(o.id);
  i64(o.access_hash);
  i32(o.date);
  i32(o.admin_id);
  i32(o.participant_id);
  obj(o.protocol); // PhoneCallProtocol
  if (o.receive_date !== undefined) obj(o.receive_date); // flags.0?int
}

function _phoneCallRequested(o: any) {
  i32(0x87eabb53);
  const flags = +o.video << 5;
  i32(flags);
  if (o.video !== undefined) obj(o.video); // flags.5?true
  i64(o.id);
  i64(o.access_hash);
  i32(o.date);
  i32(o.admin_id);
  i32(o.participant_id);
  bytes(o.g_a_hash);
  obj(o.protocol); // PhoneCallProtocol
}

function _phoneCallAccepted(o: any) {
  i32(0x997c454a);
  const flags = +o.video << 5;
  i32(flags);
  if (o.video !== undefined) obj(o.video); // flags.5?true
  i64(o.id);
  i64(o.access_hash);
  i32(o.date);
  i32(o.admin_id);
  i32(o.participant_id);
  bytes(o.g_b);
  obj(o.protocol); // PhoneCallProtocol
}

function _phoneCall(o: any) {
  i32(0x8742ae7f);
  const flags = +o.p2p_allowed << 5;
  i32(flags);
  if (o.p2p_allowed !== undefined) obj(o.p2p_allowed); // flags.5?true
  i64(o.id);
  i64(o.access_hash);
  i32(o.date);
  i32(o.admin_id);
  i32(o.participant_id);
  bytes(o.g_a_or_b);
  i64(o.key_fingerprint);
  obj(o.protocol); // PhoneCallProtocol
  obj(o.connections); // Vector<PhoneConnection>
  i32(o.start_date);
}

function _phoneCallDiscarded(o: any) {
  i32(0x50ca4de1);
  const flags = +o.need_rating << 2 | +o.need_debug << 3 | +o.video << 5 | +!!o.reason | +!!o.duration << 1;
  i32(flags);
  if (o.need_rating !== undefined) obj(o.need_rating); // flags.2?true
  if (o.need_debug !== undefined) obj(o.need_debug); // flags.3?true
  if (o.video !== undefined) obj(o.video); // flags.5?true
  i64(o.id);
  if (o.reason !== undefined) obj(o.reason); // flags.0?PhoneCallDiscardReason
  if (o.duration !== undefined) obj(o.duration); // flags.1?int
}

function _phoneConnection(o: any) {
  i32(0x9d4c17c0);
  i64(o.id);
  str(o.ip);
  str(o.ipv6);
  i32(o.port);
  bytes(o.peer_tag);
}

function _phoneCallProtocol(o: any) {
  i32(0xa2bb35cb);
  const flags = +o.udp_p2p | +o.udp_reflector << 1;
  i32(flags);
  if (o.udp_p2p !== undefined) obj(o.udp_p2p); // flags.0?true
  if (o.udp_reflector !== undefined) obj(o.udp_reflector); // flags.1?true
  i32(o.min_layer);
  i32(o.max_layer);
}

function _phonePhoneCall(o: any) {
  i32(0xec82e140);
  obj(o.phone_call); // PhoneCall
  obj(o.users); // Vector<User>
}

function _uploadCdnFileReuploadNeeded(o: any) {
  i32(0xeea8e46e);
  bytes(o.request_token);
}

function _uploadCdnFile(o: any) {
  i32(0xa99fca4f);
  bytes(o.bytes);
}

function _cdnPublicKey(o: any) {
  i32(0xc982eaba);
  i32(o.dc_id);
  str(o.public_key);
}

function _cdnConfig(o: any) {
  i32(0x5725e40a);
  obj(o.public_keys); // Vector<CdnPublicKey>
}

function _langPackString(o: any) {
  i32(0xcad181f6);
  str(o.key);
  str(o.value);
}

function _langPackStringPluralized(o: any) {
  i32(0x6c47ac9f);
  const flags = +!!o.zero_value | +!!o.one_value << 1 | +!!o.two_value << 2 | +!!o.few_value << 3 | +!!o.many_value << 4;
  i32(flags);
  str(o.key);
  if (o.zero_value !== undefined) obj(o.zero_value); // flags.0?string
  if (o.one_value !== undefined) obj(o.one_value); // flags.1?string
  if (o.two_value !== undefined) obj(o.two_value); // flags.2?string
  if (o.few_value !== undefined) obj(o.few_value); // flags.3?string
  if (o.many_value !== undefined) obj(o.many_value); // flags.4?string
  str(o.other_value);
}

function _langPackStringDeleted(o: any) {
  i32(0x2979eeb2);
  str(o.key);
}

function _langPackDifference(o: any) {
  i32(0xf385c1f6);
  str(o.lang_code);
  i32(o.from_version);
  i32(o.version);
  obj(o.strings); // Vector<LangPackString>
}

function _langPackLanguage(o: any) {
  i32(0xeeca5ce3);
  const flags = +o.official | +o.rtl << 2 | +o.beta << 3 | +!!o.base_lang_code << 1;
  i32(flags);
  if (o.official !== undefined) obj(o.official); // flags.0?true
  if (o.rtl !== undefined) obj(o.rtl); // flags.2?true
  if (o.beta !== undefined) obj(o.beta); // flags.3?true
  str(o.name);
  str(o.native_name);
  str(o.lang_code);
  if (o.base_lang_code !== undefined) obj(o.base_lang_code); // flags.1?string
  str(o.plural_code);
  i32(o.strings_count);
  i32(o.translated_count);
  str(o.translations_url);
}

function _channelAdminLogEventActionChangeTitle(o: any) {
  i32(0xe6dfb825);
  str(o.prev_value);
  str(o.new_value);
}

function _channelAdminLogEventActionChangeAbout(o: any) {
  i32(0x55188a2e);
  str(o.prev_value);
  str(o.new_value);
}

function _channelAdminLogEventActionChangeUsername(o: any) {
  i32(0x6a4afc38);
  str(o.prev_value);
  str(o.new_value);
}

function _channelAdminLogEventActionChangePhoto(o: any) {
  i32(0x434bd2af);
  obj(o.prev_photo); // Photo
  obj(o.new_photo); // Photo
}

function _channelAdminLogEventActionToggleInvites(o: any) {
  i32(0x1b7907ae);
  obj(o.new_value); // Bool
}

function _channelAdminLogEventActionToggleSignatures(o: any) {
  i32(0x26ae0971);
  obj(o.new_value); // Bool
}

function _channelAdminLogEventActionUpdatePinned(o: any) {
  i32(0xe9e82c18);
  obj(o.message); // Message
}

function _channelAdminLogEventActionEditMessage(o: any) {
  i32(0x709b2405);
  obj(o.prev_message); // Message
  obj(o.new_message); // Message
}

function _channelAdminLogEventActionDeleteMessage(o: any) {
  i32(0x42e047bb);
  obj(o.message); // Message
}

function _channelAdminLogEventActionParticipantJoin(o: any) {
  i32(0x183040d3);
}

function _channelAdminLogEventActionParticipantLeave(o: any) {
  i32(0xf89777f2);
}

function _channelAdminLogEventActionParticipantInvite(o: any) {
  i32(0xe31c34d8);
  obj(o.participant); // ChannelParticipant
}

function _channelAdminLogEventActionParticipantToggleBan(o: any) {
  i32(0xe6d83d7e);
  obj(o.prev_participant); // ChannelParticipant
  obj(o.new_participant); // ChannelParticipant
}

function _channelAdminLogEventActionParticipantToggleAdmin(o: any) {
  i32(0xd5676710);
  obj(o.prev_participant); // ChannelParticipant
  obj(o.new_participant); // ChannelParticipant
}

function _channelAdminLogEventActionChangeStickerSet(o: any) {
  i32(0xb1c3caa7);
  obj(o.prev_stickerset); // InputStickerSet
  obj(o.new_stickerset); // InputStickerSet
}

function _channelAdminLogEventActionTogglePreHistoryHidden(o: any) {
  i32(0x5f5c95f1);
  obj(o.new_value); // Bool
}

function _channelAdminLogEventActionDefaultBannedRights(o: any) {
  i32(0x2df5fc0a);
  obj(o.prev_banned_rights); // ChatBannedRights
  obj(o.new_banned_rights); // ChatBannedRights
}

function _channelAdminLogEventActionStopPoll(o: any) {
  i32(0x8f079643);
  obj(o.message); // Message
}

function _channelAdminLogEventActionChangeLinkedChat(o: any) {
  i32(0xa26f881b);
  i32(o.prev_value);
  i32(o.new_value);
}

function _channelAdminLogEventActionChangeLocation(o: any) {
  i32(0xe6b76ae);
  obj(o.prev_value); // ChannelLocation
  obj(o.new_value); // ChannelLocation
}

function _channelAdminLogEventActionToggleSlowMode(o: any) {
  i32(0x53909779);
  i32(o.prev_value);
  i32(o.new_value);
}

function _channelAdminLogEvent(o: any) {
  i32(0x3b5a3e40);
  i64(o.id);
  i32(o.date);
  i32(o.user_id);
  obj(o.action); // ChannelAdminLogEventAction
}

function _channelsAdminLogResults(o: any) {
  i32(0xed8af74d);
  obj(o.events); // Vector<ChannelAdminLogEvent>
  obj(o.chats); // Vector<Chat>
  obj(o.users); // Vector<User>
}

function _channelAdminLogEventsFilter(o: any) {
  i32(0xea107ae4);
  const flags = +o.join | +o.leave << 1 | +o.invite << 2 | +o.ban << 3 | +o.unban << 4 | +o.kick << 5 | +o.unkick << 6 | +o.promote << 7 | +o.demote << 8 | +o.info << 9 | +o.settings << 10 | +o.pinned << 11 | +o.edit << 12 | +o.delete << 13;
  i32(flags);
  if (o.join !== undefined) obj(o.join); // flags.0?true
  if (o.leave !== undefined) obj(o.leave); // flags.1?true
  if (o.invite !== undefined) obj(o.invite); // flags.2?true
  if (o.ban !== undefined) obj(o.ban); // flags.3?true
  if (o.unban !== undefined) obj(o.unban); // flags.4?true
  if (o.kick !== undefined) obj(o.kick); // flags.5?true
  if (o.unkick !== undefined) obj(o.unkick); // flags.6?true
  if (o.promote !== undefined) obj(o.promote); // flags.7?true
  if (o.demote !== undefined) obj(o.demote); // flags.8?true
  if (o.info !== undefined) obj(o.info); // flags.9?true
  if (o.settings !== undefined) obj(o.settings); // flags.10?true
  if (o.pinned !== undefined) obj(o.pinned); // flags.11?true
  if (o.edit !== undefined) obj(o.edit); // flags.12?true
  if (o.delete !== undefined) obj(o.delete); // flags.13?true
}

function _popularContact(o: any) {
  i32(0x5ce14175);
  i64(o.client_id);
  i32(o.importers);
}

function _messagesFavedStickersNotModified(o: any) {
  i32(0x9e8fa6d3);
}

function _messagesFavedStickers(o: any) {
  i32(0xf37f2f16);
  i32(o.hash);
  obj(o.packs); // Vector<StickerPack>
  obj(o.stickers); // Vector<Document>
}

function _recentMeUrlUnknown(o: any) {
  i32(0x46e1d13d);
  str(o.url);
}

function _recentMeUrlUser(o: any) {
  i32(0x8dbc3336);
  str(o.url);
  i32(o.user_id);
}

function _recentMeUrlChat(o: any) {
  i32(0xa01b22f9);
  str(o.url);
  i32(o.chat_id);
}

function _recentMeUrlChatInvite(o: any) {
  i32(0xeb49081d);
  str(o.url);
  obj(o.chat_invite); // ChatInvite
}

function _recentMeUrlStickerSet(o: any) {
  i32(0xbc0a57dc);
  str(o.url);
  obj(o.set); // StickerSetCovered
}

function _helpRecentMeUrls(o: any) {
  i32(0xe0310d7);
  obj(o.urls); // Vector<RecentMeUrl>
  obj(o.chats); // Vector<Chat>
  obj(o.users); // Vector<User>
}

function _inputSingleMedia(o: any) {
  i32(0x1cc6e91f);
  const flags = +!!o.entities;
  i32(flags);
  obj(o.media); // InputMedia
  i64(o.random_id);
  str(o.message);
  if (o.entities !== undefined) obj(o.entities); // flags.0?Vector<MessageEntity>
}

function _webAuthorization(o: any) {
  i32(0xcac943f2);
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
  i32(0xed56c9fc);
  obj(o.authorizations); // Vector<WebAuthorization>
  obj(o.users); // Vector<User>
}

function _inputMessageID(o: any) {
  i32(0xa676a322);
  i32(o.id);
}

function _inputMessageReplyTo(o: any) {
  i32(0xbad88395);
  i32(o.id);
}

function _inputMessagePinned(o: any) {
  i32(0x86872538);
}

function _inputDialogPeer(o: any) {
  i32(0xfcaafeb7);
  obj(o.peer); // InputPeer
}

function _inputDialogPeerFolder(o: any) {
  i32(0x64600527);
  i32(o.folder_id);
}

function _dialogPeer(o: any) {
  i32(0xe56dbf05);
  obj(o.peer); // Peer
}

function _dialogPeerFolder(o: any) {
  i32(0x514519e2);
  i32(o.folder_id);
}

function _messagesFoundStickerSetsNotModified(o: any) {
  i32(0xd54b65d);
}

function _messagesFoundStickerSets(o: any) {
  i32(0x5108d648);
  i32(o.hash);
  obj(o.sets); // Vector<StickerSetCovered>
}

function _fileHash(o: any) {
  i32(0x6242c773);
  i32(o.offset);
  i32(o.limit);
  bytes(o.hash);
}

function _inputClientProxy(o: any) {
  i32(0x75588b3f);
  str(o.address);
  i32(o.port);
}

function _helpProxyDataEmpty(o: any) {
  i32(0xe09e1fb8);
  i32(o.expires);
}

function _helpProxyDataPromo(o: any) {
  i32(0x2bf7ee23);
  i32(o.expires);
  obj(o.peer); // Peer
  obj(o.chats); // Vector<Chat>
  obj(o.users); // Vector<User>
}

function _helpTermsOfServiceUpdateEmpty(o: any) {
  i32(0xe3309f7f);
  i32(o.expires);
}

function _helpTermsOfServiceUpdate(o: any) {
  i32(0x28ecf961);
  i32(o.expires);
  obj(o.terms_of_service); // help.TermsOfService
}

function _inputSecureFileUploaded(o: any) {
  i32(0x3334b0f0);
  i64(o.id);
  i32(o.parts);
  str(o.md5_checksum);
  bytes(o.file_hash);
  bytes(o.secret);
}

function _inputSecureFile(o: any) {
  i32(0x5367e5be);
  i64(o.id);
  i64(o.access_hash);
}

function _secureFileEmpty(o: any) {
  i32(0x64199744);
}

function _secureFile(o: any) {
  i32(0xe0277a62);
  i64(o.id);
  i64(o.access_hash);
  i32(o.size);
  i32(o.dc_id);
  i32(o.date);
  bytes(o.file_hash);
  bytes(o.secret);
}

function _secureData(o: any) {
  i32(0x8aeabec3);
  bytes(o.data);
  bytes(o.data_hash);
  bytes(o.secret);
}

function _securePlainPhone(o: any) {
  i32(0x7d6099dd);
  str(o.phone);
}

function _securePlainEmail(o: any) {
  i32(0x21ec5a5f);
  str(o.email);
}

function _secureValueTypePersonalDetails(o: any) {
  i32(0x9d2a81e3);
}

function _secureValueTypePassport(o: any) {
  i32(0x3dac6a00);
}

function _secureValueTypeDriverLicense(o: any) {
  i32(0x6e425c4);
}

function _secureValueTypeIdentityCard(o: any) {
  i32(0xa0d0744b);
}

function _secureValueTypeInternalPassport(o: any) {
  i32(0x99a48f23);
}

function _secureValueTypeAddress(o: any) {
  i32(0xcbe31e26);
}

function _secureValueTypeUtilityBill(o: any) {
  i32(0xfc36954e);
}

function _secureValueTypeBankStatement(o: any) {
  i32(0x89137c0d);
}

function _secureValueTypeRentalAgreement(o: any) {
  i32(0x8b883488);
}

function _secureValueTypePassportRegistration(o: any) {
  i32(0x99e3806a);
}

function _secureValueTypeTemporaryRegistration(o: any) {
  i32(0xea02ec33);
}

function _secureValueTypePhone(o: any) {
  i32(0xb320aadb);
}

function _secureValueTypeEmail(o: any) {
  i32(0x8e3ca7ee);
}

function _secureValue(o: any) {
  i32(0x187fa0ca);
  const flags = +!!o.data | +!!o.front_side << 1 | +!!o.reverse_side << 2 | +!!o.selfie << 3 | +!!o.translation << 6 | +!!o.files << 4 | +!!o.plain_data << 5;
  i32(flags);
  obj(o.type); // SecureValueType
  if (o.data !== undefined) obj(o.data); // flags.0?SecureData
  if (o.front_side !== undefined) obj(o.front_side); // flags.1?SecureFile
  if (o.reverse_side !== undefined) obj(o.reverse_side); // flags.2?SecureFile
  if (o.selfie !== undefined) obj(o.selfie); // flags.3?SecureFile
  if (o.translation !== undefined) obj(o.translation); // flags.6?Vector<SecureFile>
  if (o.files !== undefined) obj(o.files); // flags.4?Vector<SecureFile>
  if (o.plain_data !== undefined) obj(o.plain_data); // flags.5?SecurePlainData
  bytes(o.hash);
}

function _inputSecureValue(o: any) {
  i32(0xdb21d0a7);
  const flags = +!!o.data | +!!o.front_side << 1 | +!!o.reverse_side << 2 | +!!o.selfie << 3 | +!!o.translation << 6 | +!!o.files << 4 | +!!o.plain_data << 5;
  i32(flags);
  obj(o.type); // SecureValueType
  if (o.data !== undefined) obj(o.data); // flags.0?SecureData
  if (o.front_side !== undefined) obj(o.front_side); // flags.1?InputSecureFile
  if (o.reverse_side !== undefined) obj(o.reverse_side); // flags.2?InputSecureFile
  if (o.selfie !== undefined) obj(o.selfie); // flags.3?InputSecureFile
  if (o.translation !== undefined) obj(o.translation); // flags.6?Vector<InputSecureFile>
  if (o.files !== undefined) obj(o.files); // flags.4?Vector<InputSecureFile>
  if (o.plain_data !== undefined) obj(o.plain_data); // flags.5?SecurePlainData
}

function _secureValueHash(o: any) {
  i32(0xed1ecdb0);
  obj(o.type); // SecureValueType
  bytes(o.hash);
}

function _secureValueErrorData(o: any) {
  i32(0xe8a40bd9);
  obj(o.type); // SecureValueType
  bytes(o.data_hash);
  str(o.field);
  str(o.text);
}

function _secureValueErrorFrontSide(o: any) {
  i32(0xbe3dfa);
  obj(o.type); // SecureValueType
  bytes(o.file_hash);
  str(o.text);
}

function _secureValueErrorReverseSide(o: any) {
  i32(0x868a2aa5);
  obj(o.type); // SecureValueType
  bytes(o.file_hash);
  str(o.text);
}

function _secureValueErrorSelfie(o: any) {
  i32(0xe537ced6);
  obj(o.type); // SecureValueType
  bytes(o.file_hash);
  str(o.text);
}

function _secureValueErrorFile(o: any) {
  i32(0x7a700873);
  obj(o.type); // SecureValueType
  bytes(o.file_hash);
  str(o.text);
}

function _secureValueErrorFiles(o: any) {
  i32(0x666220e9);
  obj(o.type); // SecureValueType
  obj(o.file_hash); // Vector<bytes>
  str(o.text);
}

function _secureValueError(o: any) {
  i32(0x869d758f);
  obj(o.type); // SecureValueType
  bytes(o.hash);
  str(o.text);
}

function _secureValueErrorTranslationFile(o: any) {
  i32(0xa1144770);
  obj(o.type); // SecureValueType
  bytes(o.file_hash);
  str(o.text);
}

function _secureValueErrorTranslationFiles(o: any) {
  i32(0x34636dd8);
  obj(o.type); // SecureValueType
  obj(o.file_hash); // Vector<bytes>
  str(o.text);
}

function _secureCredentialsEncrypted(o: any) {
  i32(0x33f0ea47);
  bytes(o.data);
  bytes(o.hash);
  bytes(o.secret);
}

function _accountAuthorizationForm(o: any) {
  i32(0xad2e1cd8);
  const flags = +!!o.privacy_policy_url;
  i32(flags);
  obj(o.required_types); // Vector<SecureRequiredType>
  obj(o.values); // Vector<SecureValue>
  obj(o.errors); // Vector<SecureValueError>
  obj(o.users); // Vector<User>
  if (o.privacy_policy_url !== undefined) obj(o.privacy_policy_url); // flags.0?string
}

function _accountSentEmailCode(o: any) {
  i32(0x811f854f);
  str(o.email_pattern);
  i32(o.length);
}

function _helpDeepLinkInfoEmpty(o: any) {
  i32(0x66afa166);
}

function _helpDeepLinkInfo(o: any) {
  i32(0x6a4ee832);
  const flags = +o.update_app | +!!o.entities << 1;
  i32(flags);
  if (o.update_app !== undefined) obj(o.update_app); // flags.0?true
  str(o.message);
  if (o.entities !== undefined) obj(o.entities); // flags.1?Vector<MessageEntity>
}

function _savedPhoneContact(o: any) {
  i32(0x1142bd56);
  str(o.phone);
  str(o.first_name);
  str(o.last_name);
  i32(o.date);
}

function _accountTakeout(o: any) {
  i32(0x4dba4501);
  i64(o.id);
}

function _passwordKdfAlgoUnknown(o: any) {
  i32(0xd45ab096);
}

function _passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow(o: any) {
  i32(0x3a912d4a);
  bytes(o.salt1);
  bytes(o.salt2);
  i32(o.g);
  bytes(o.p);
}

function _securePasswordKdfAlgoUnknown(o: any) {
  i32(0x4a8537);
}

function _securePasswordKdfAlgoPBKDF2HMACSHA512iter100000(o: any) {
  i32(0xbbf2dda0);
  bytes(o.salt);
}

function _securePasswordKdfAlgoSHA512(o: any) {
  i32(0x86471d92);
  bytes(o.salt);
}

function _secureSecretSettings(o: any) {
  i32(0x1527bcac);
  obj(o.secure_algo); // SecurePasswordKdfAlgo
  bytes(o.secure_secret);
  i64(o.secure_secret_id);
}

function _inputCheckPasswordEmpty(o: any) {
  i32(0x9880f658);
}

function _inputCheckPasswordSRP(o: any) {
  i32(0xd27ff082);
  i64(o.srp_id);
  bytes(o.A);
  bytes(o.M1);
}

function _secureRequiredType(o: any) {
  i32(0x829d99da);
  const flags = +o.native_names | +o.selfie_required << 1 | +o.translation_required << 2;
  i32(flags);
  if (o.native_names !== undefined) obj(o.native_names); // flags.0?true
  if (o.selfie_required !== undefined) obj(o.selfie_required); // flags.1?true
  if (o.translation_required !== undefined) obj(o.translation_required); // flags.2?true
  obj(o.type); // SecureValueType
}

function _secureRequiredTypeOneOf(o: any) {
  i32(0x27477b4);
  obj(o.types); // Vector<SecureRequiredType>
}

function _helpPassportConfigNotModified(o: any) {
  i32(0xbfb9f457);
}

function _helpPassportConfig(o: any) {
  i32(0xa098d6af);
  i32(o.hash);
  obj(o.countries_langs); // DataJSON
}

function _inputAppEvent(o: any) {
  i32(0x1d1b1245);
  f64(o.time);
  str(o.type);
  i64(o.peer);
  obj(o.data); // JSONValue
}

function _jsonObjectValue(o: any) {
  i32(0xc0de1bd9);
  str(o.key);
  obj(o.value); // JSONValue
}

function _jsonNull(o: any) {
  i32(0x3f6d7b68);
}

function _jsonBool(o: any) {
  i32(0xc7345e6a);
  obj(o.value); // Bool
}

function _jsonNumber(o: any) {
  i32(0x2be0dfa4);
  f64(o.value);
}

function _jsonString(o: any) {
  i32(0xb71e767a);
  str(o.value);
}

function _jsonArray(o: any) {
  i32(0xf7444763);
  obj(o.value); // Vector<JSONValue>
}

function _jsonObject(o: any) {
  i32(0x99c1d49d);
  obj(o.value); // Vector<JSONObjectValue>
}

function _pageTableCell(o: any) {
  i32(0x34566b6a);
  const flags = +o.header | +o.align_center << 3 | +o.align_right << 4 | +o.valign_middle << 5 | +o.valign_bottom << 6 | +!!o.text << 7 | +!!o.colspan << 1 | +!!o.rowspan << 2;
  i32(flags);
  if (o.header !== undefined) obj(o.header); // flags.0?true
  if (o.align_center !== undefined) obj(o.align_center); // flags.3?true
  if (o.align_right !== undefined) obj(o.align_right); // flags.4?true
  if (o.valign_middle !== undefined) obj(o.valign_middle); // flags.5?true
  if (o.valign_bottom !== undefined) obj(o.valign_bottom); // flags.6?true
  if (o.text !== undefined) obj(o.text); // flags.7?RichText
  if (o.colspan !== undefined) obj(o.colspan); // flags.1?int
  if (o.rowspan !== undefined) obj(o.rowspan); // flags.2?int
}

function _pageTableRow(o: any) {
  i32(0xe0c0c5e5);
  obj(o.cells); // Vector<PageTableCell>
}

function _pageCaption(o: any) {
  i32(0x6f747657);
  obj(o.text); // RichText
  obj(o.credit); // RichText
}

function _pageListItemText(o: any) {
  i32(0xb92fb6cd);
  obj(o.text); // RichText
}

function _pageListItemBlocks(o: any) {
  i32(0x25e073fc);
  obj(o.blocks); // Vector<PageBlock>
}

function _pageListOrderedItemText(o: any) {
  i32(0x5e068047);
  str(o.num);
  obj(o.text); // RichText
}

function _pageListOrderedItemBlocks(o: any) {
  i32(0x98dd8936);
  str(o.num);
  obj(o.blocks); // Vector<PageBlock>
}

function _pageRelatedArticle(o: any) {
  i32(0xb390dc08);
  const flags = +!!o.title | +!!o.description << 1 | +!!o.photo_id << 2 | +!!o.author << 3 | +!!o.published_date << 4;
  i32(flags);
  str(o.url);
  i64(o.webpage_id);
  if (o.title !== undefined) obj(o.title); // flags.0?string
  if (o.description !== undefined) obj(o.description); // flags.1?string
  if (o.photo_id !== undefined) obj(o.photo_id); // flags.2?long
  if (o.author !== undefined) obj(o.author); // flags.3?string
  if (o.published_date !== undefined) obj(o.published_date); // flags.4?int
}

function _page(o: any) {
  i32(0xae891bec);
  const flags = +o.part | +o.rtl << 1 | +o.v2 << 2;
  i32(flags);
  if (o.part !== undefined) obj(o.part); // flags.0?true
  if (o.rtl !== undefined) obj(o.rtl); // flags.1?true
  if (o.v2 !== undefined) obj(o.v2); // flags.2?true
  str(o.url);
  obj(o.blocks); // Vector<PageBlock>
  obj(o.photos); // Vector<Photo>
  obj(o.documents); // Vector<Document>
}

function _helpSupportName(o: any) {
  i32(0x8c05f1c9);
  str(o.name);
}

function _helpUserInfoEmpty(o: any) {
  i32(0xf3ae2eed);
}

function _helpUserInfo(o: any) {
  i32(0x1eb3758);
  str(o.message);
  obj(o.entities); // Vector<MessageEntity>
  str(o.author);
  i32(o.date);
}

function _pollAnswer(o: any) {
  i32(0x6ca9c2e9);
  str(o.text);
  bytes(o.option);
}

function _poll(o: any) {
  i32(0xd5529d06);
  const flags = +o.closed | +o.public_voters << 1 | +o.multiple_choice << 2 | +o.quiz << 3;
  i32(flags);
  i64(o.id);
  if (o.closed !== undefined) obj(o.closed); // flags.0?true
  if (o.public_voters !== undefined) obj(o.public_voters); // flags.1?true
  if (o.multiple_choice !== undefined) obj(o.multiple_choice); // flags.2?true
  if (o.quiz !== undefined) obj(o.quiz); // flags.3?true
  str(o.question);
  obj(o.answers); // Vector<PollAnswer>
}

function _pollAnswerVoters(o: any) {
  i32(0x3b6ddad2);
  const flags = +o.chosen | +o.correct << 1;
  i32(flags);
  if (o.chosen !== undefined) obj(o.chosen); // flags.0?true
  if (o.correct !== undefined) obj(o.correct); // flags.1?true
  bytes(o.option);
  i32(o.voters);
}

function _pollResults(o: any) {
  i32(0x5755785a);
  const flags = +o.min | +!!o.results << 1 | +!!o.total_voters << 2;
  i32(flags);
  if (o.min !== undefined) obj(o.min); // flags.0?true
  if (o.results !== undefined) obj(o.results); // flags.1?Vector<PollAnswerVoters>
  if (o.total_voters !== undefined) obj(o.total_voters); // flags.2?int
}

function _chatOnlines(o: any) {
  i32(0xf041e250);
  i32(o.onlines);
}

function _statsURL(o: any) {
  i32(0x47a971e0);
  str(o.url);
}

function _chatAdminRights(o: any) {
  i32(0x5fb224d5);
  const flags = +o.change_info | +o.post_messages << 1 | +o.edit_messages << 2 | +o.delete_messages << 3 | +o.ban_users << 4 | +o.invite_users << 5 | +o.pin_messages << 7 | +o.add_admins << 9;
  i32(flags);
  if (o.change_info !== undefined) obj(o.change_info); // flags.0?true
  if (o.post_messages !== undefined) obj(o.post_messages); // flags.1?true
  if (o.edit_messages !== undefined) obj(o.edit_messages); // flags.2?true
  if (o.delete_messages !== undefined) obj(o.delete_messages); // flags.3?true
  if (o.ban_users !== undefined) obj(o.ban_users); // flags.4?true
  if (o.invite_users !== undefined) obj(o.invite_users); // flags.5?true
  if (o.pin_messages !== undefined) obj(o.pin_messages); // flags.7?true
  if (o.add_admins !== undefined) obj(o.add_admins); // flags.9?true
}

function _chatBannedRights(o: any) {
  i32(0x9f120418);
  const flags = +o.view_messages | +o.send_messages << 1 | +o.send_media << 2 | +o.send_stickers << 3 | +o.send_gifs << 4 | +o.send_games << 5 | +o.send_inline << 6 | +o.embed_links << 7 | +o.send_polls << 8 | +o.change_info << 10 | +o.invite_users << 15 | +o.pin_messages << 17;
  i32(flags);
  if (o.view_messages !== undefined) obj(o.view_messages); // flags.0?true
  if (o.send_messages !== undefined) obj(o.send_messages); // flags.1?true
  if (o.send_media !== undefined) obj(o.send_media); // flags.2?true
  if (o.send_stickers !== undefined) obj(o.send_stickers); // flags.3?true
  if (o.send_gifs !== undefined) obj(o.send_gifs); // flags.4?true
  if (o.send_games !== undefined) obj(o.send_games); // flags.5?true
  if (o.send_inline !== undefined) obj(o.send_inline); // flags.6?true
  if (o.embed_links !== undefined) obj(o.embed_links); // flags.7?true
  if (o.send_polls !== undefined) obj(o.send_polls); // flags.8?true
  if (o.change_info !== undefined) obj(o.change_info); // flags.10?true
  if (o.invite_users !== undefined) obj(o.invite_users); // flags.15?true
  if (o.pin_messages !== undefined) obj(o.pin_messages); // flags.17?true
  i32(o.until_date);
}

function _inputWallPaper(o: any) {
  i32(0xe630b979);
  i64(o.id);
  i64(o.access_hash);
}

function _inputWallPaperSlug(o: any) {
  i32(0x72091c80);
  str(o.slug);
}

function _inputWallPaperNoFile(o: any) {
  i32(0x8427bbac);
}

function _accountWallPapersNotModified(o: any) {
  i32(0x1c199183);
}

function _accountWallPapers(o: any) {
  i32(0x702b65a9);
  i32(o.hash);
  obj(o.wallpapers); // Vector<WallPaper>
}

function _codeSettings(o: any) {
  i32(0xdebebe83);
  const flags = +o.allow_flashcall | +o.current_number << 1 | +o.allow_app_hash << 4;
  i32(flags);
  if (o.allow_flashcall !== undefined) obj(o.allow_flashcall); // flags.0?true
  if (o.current_number !== undefined) obj(o.current_number); // flags.1?true
  if (o.allow_app_hash !== undefined) obj(o.allow_app_hash); // flags.4?true
}

function _wallPaperSettings(o: any) {
  i32(0x5086cf8);
  const flags = +o.blur << 1 | +o.motion << 2 | +!!o.background_color | +!!o.second_background_color << 4 | +!!o.intensity << 3 | +!!o.rotation << 4;
  i32(flags);
  if (o.blur !== undefined) obj(o.blur); // flags.1?true
  if (o.motion !== undefined) obj(o.motion); // flags.2?true
  if (o.background_color !== undefined) obj(o.background_color); // flags.0?int
  if (o.second_background_color !== undefined) obj(o.second_background_color); // flags.4?int
  if (o.intensity !== undefined) obj(o.intensity); // flags.3?int
  if (o.rotation !== undefined) obj(o.rotation); // flags.4?int
}

function _autoDownloadSettings(o: any) {
  i32(0xe04232f3);
  const flags = +o.disabled | +o.video_preload_large << 1 | +o.audio_preload_next << 2 | +o.phonecalls_less_data << 3;
  i32(flags);
  if (o.disabled !== undefined) obj(o.disabled); // flags.0?true
  if (o.video_preload_large !== undefined) obj(o.video_preload_large); // flags.1?true
  if (o.audio_preload_next !== undefined) obj(o.audio_preload_next); // flags.2?true
  if (o.phonecalls_less_data !== undefined) obj(o.phonecalls_less_data); // flags.3?true
  i32(o.photo_size_max);
  i32(o.video_size_max);
  i32(o.file_size_max);
  i32(o.video_upload_maxbitrate);
}

function _accountAutoDownloadSettings(o: any) {
  i32(0x63cacf26);
  obj(o.low); // AutoDownloadSettings
  obj(o.medium); // AutoDownloadSettings
  obj(o.high); // AutoDownloadSettings
}

function _emojiKeyword(o: any) {
  i32(0xd5b3b9f9);
  str(o.keyword);
  obj(o.emoticons); // Vector<string>
}

function _emojiKeywordDeleted(o: any) {
  i32(0x236df622);
  str(o.keyword);
  obj(o.emoticons); // Vector<string>
}

function _emojiKeywordsDifference(o: any) {
  i32(0x5cc761bd);
  str(o.lang_code);
  i32(o.from_version);
  i32(o.version);
  obj(o.keywords); // Vector<EmojiKeyword>
}

function _emojiURL(o: any) {
  i32(0xa575739d);
  str(o.url);
}

function _emojiLanguage(o: any) {
  i32(0xb3fb5361);
  str(o.lang_code);
}

function _fileLocationToBeDeprecated(o: any) {
  i32(0xbc7fc6cd);
  i64(o.volume_id);
  i32(o.local_id);
}

function _folder(o: any) {
  i32(0xff544e65);
  const flags = +o.autofill_new_broadcasts | +o.autofill_public_groups << 1 | +o.autofill_new_correspondents << 2 | +!!o.photo << 3;
  i32(flags);
  if (o.autofill_new_broadcasts !== undefined) obj(o.autofill_new_broadcasts); // flags.0?true
  if (o.autofill_public_groups !== undefined) obj(o.autofill_public_groups); // flags.1?true
  if (o.autofill_new_correspondents !== undefined) obj(o.autofill_new_correspondents); // flags.2?true
  i32(o.id);
  str(o.title);
  if (o.photo !== undefined) obj(o.photo); // flags.3?ChatPhoto
}

function _inputFolderPeer(o: any) {
  i32(0xfbd2c296);
  obj(o.peer); // InputPeer
  i32(o.folder_id);
}

function _folderPeer(o: any) {
  i32(0xe9baa668);
  obj(o.peer); // Peer
  i32(o.folder_id);
}

function _messagesSearchCounter(o: any) {
  i32(0xe844ebff);
  const flags = +o.inexact << 1;
  i32(flags);
  if (o.inexact !== undefined) obj(o.inexact); // flags.1?true
  obj(o.filter); // MessagesFilter
  i32(o.count);
}

function _urlAuthResultRequest(o: any) {
  i32(0x92d33a0e);
  const flags = +o.request_write_access;
  i32(flags);
  if (o.request_write_access !== undefined) obj(o.request_write_access); // flags.0?true
  obj(o.bot); // User
  str(o.domain);
}

function _urlAuthResultAccepted(o: any) {
  i32(0x8f8c0e4e);
  str(o.url);
}

function _urlAuthResultDefault(o: any) {
  i32(0xa9d6db1f);
}

function _channelLocationEmpty(o: any) {
  i32(0xbfb5ad8b);
}

function _channelLocation(o: any) {
  i32(0x209b82db);
  obj(o.geo_point); // GeoPoint
  str(o.address);
}

function _peerLocated(o: any) {
  i32(0xca461b5d);
  obj(o.peer); // Peer
  i32(o.expires);
  i32(o.distance);
}

function _restrictionReason(o: any) {
  i32(0xd072acb4);
  str(o.platform);
  str(o.reason);
  str(o.text);
}

function _inputTheme(o: any) {
  i32(0x3c5693e9);
  i64(o.id);
  i64(o.access_hash);
}

function _inputThemeSlug(o: any) {
  i32(0xf5890df1);
  str(o.slug);
}

function _theme(o: any) {
  i32(0x28f1114);
  const flags = +o.creator | +o.default << 1 | +!!o.document << 2 | +!!o.settings << 3;
  i32(flags);
  if (o.creator !== undefined) obj(o.creator); // flags.0?true
  if (o.default !== undefined) obj(o.default); // flags.1?true
  i64(o.id);
  i64(o.access_hash);
  str(o.slug);
  str(o.title);
  if (o.document !== undefined) obj(o.document); // flags.2?Document
  if (o.settings !== undefined) obj(o.settings); // flags.3?ThemeSettings
  i32(o.installs_count);
}

function _accountThemesNotModified(o: any) {
  i32(0xf41eb622);
}

function _accountThemes(o: any) {
  i32(0x7f676421);
  i32(o.hash);
  obj(o.themes); // Vector<Theme>
}

function _authLoginToken(o: any) {
  i32(0x629f1980);
  i32(o.expires);
  bytes(o.token);
}

function _authLoginTokenMigrateTo(o: any) {
  i32(0x68e9916);
  i32(o.dc_id);
  bytes(o.token);
}

function _authLoginTokenSuccess(o: any) {
  i32(0x390d5c5e);
  obj(o.authorization); // auth.Authorization
}

function _accountContentSettings(o: any) {
  i32(0x57e28221);
  const flags = +o.sensitive_enabled | +o.sensitive_can_change << 1;
  i32(flags);
  if (o.sensitive_enabled !== undefined) obj(o.sensitive_enabled); // flags.0?true
  if (o.sensitive_can_change !== undefined) obj(o.sensitive_can_change); // flags.1?true
}

function _messagesInactiveChats(o: any) {
  i32(0xa927fec5);
  obj(o.dates); // Vector<int>
  obj(o.chats); // Vector<Chat>
  obj(o.users); // Vector<User>
}

function _baseThemeClassic(o: any) {
  i32(0xc3a12462);
}

function _baseThemeDay(o: any) {
  i32(0xfbd81688);
}

function _baseThemeNight(o: any) {
  i32(0xb7b31ea8);
}

function _baseThemeTinted(o: any) {
  i32(0x6d5f77ee);
}

function _baseThemeArctic(o: any) {
  i32(0x5b11125a);
}

function _inputThemeSettings(o: any) {
  i32(0xbd507cd1);
  const flags = +!!o.message_top_color | +!!o.message_bottom_color | +!!o.wallpaper << 1 | +!!o.wallpaper_settings << 1;
  i32(flags);
  obj(o.base_theme); // BaseTheme
  i32(o.accent_color);
  if (o.message_top_color !== undefined) obj(o.message_top_color); // flags.0?int
  if (o.message_bottom_color !== undefined) obj(o.message_bottom_color); // flags.0?int
  if (o.wallpaper !== undefined) obj(o.wallpaper); // flags.1?InputWallPaper
  if (o.wallpaper_settings !== undefined) obj(o.wallpaper_settings); // flags.1?WallPaperSettings
}

function _themeSettings(o: any) {
  i32(0x9c14984a);
  const flags = +!!o.message_top_color | +!!o.message_bottom_color | +!!o.wallpaper << 1;
  i32(flags);
  obj(o.base_theme); // BaseTheme
  i32(o.accent_color);
  if (o.message_top_color !== undefined) obj(o.message_top_color); // flags.0?int
  if (o.message_bottom_color !== undefined) obj(o.message_bottom_color); // flags.0?int
  if (o.wallpaper !== undefined) obj(o.wallpaper); // flags.1?WallPaper
}

function _webPageAttributeTheme(o: any) {
  i32(0x54b56617);
  const flags = +!!o.documents | +!!o.settings << 1;
  i32(flags);
  if (o.documents !== undefined) obj(o.documents); // flags.0?Vector<Document>
  if (o.settings !== undefined) obj(o.settings); // flags.1?ThemeSettings
}

const builderMap: Record<string, (o: any) => void> = {
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
  'inputPhotoLegacyFileLocation': _inputPhotoLegacyFileLocation,
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
  'wallPaperNoFile': _wallPaperNoFile,
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
  'updateGeoLiveViewed': _updateGeoLiveViewed,
  'updateLoginToken': _updateLoginToken,
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
  'inputWallPaperNoFile': _inputWallPaperNoFile,
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
  'theme': _theme,
  'account.themesNotModified': _accountThemesNotModified,
  'account.themes': _accountThemes,
  'auth.loginToken': _authLoginToken,
  'auth.loginTokenMigrateTo': _authLoginTokenMigrateTo,
  'auth.loginTokenSuccess': _authLoginTokenSuccess,
  'account.contentSettings': _accountContentSettings,
  'messages.inactiveChats': _messagesInactiveChats,
  'baseThemeClassic': _baseThemeClassic,
  'baseThemeDay': _baseThemeDay,
  'baseThemeNight': _baseThemeNight,
  'baseThemeTinted': _baseThemeTinted,
  'baseThemeArctic': _baseThemeArctic,
  'inputThemeSettings': _inputThemeSettings,
  'themeSettings': _themeSettings,
  'webPageAttributeTheme': _webPageAttributeTheme,
}

function obj(o: any) {
  const func = builderMap[o._];
  func(o);
}

export function build(stream: ByteStream, o: any) {
  s = stream;
  return obj(o);
}
