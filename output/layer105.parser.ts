class MessageParser {
  readInt(): number {}
  readLong(): string {}
  readString(): string {}
  readObject() {}
  private src: Bytes;
  private offset: number;

  boolFalse() {
    return {
      _: 'boolFalse',
    }
  }

  boolTrue() {
    return {
      _: 'boolTrue',
    }
  }

  true() {
    return {
      _: 'true',
    }
  }

  vector() {
    return {
      _: 'vector',
    }
  }

  error() {
    return {
      _: 'error',
      code: this.readInt(),
      text: this.readString(),
    }
  }

  null() {
    return {
      _: 'null',
    }
  }

  inputPeerEmpty() {
    return {
      _: 'inputPeerEmpty',
    }
  }

  inputPeerSelf() {
    return {
      _: 'inputPeerSelf',
    }
  }

  inputPeerChat() {
    return {
      _: 'inputPeerChat',
      chat_id: this.readInt(),
    }
  }

  inputUserEmpty() {
    return {
      _: 'inputUserEmpty',
    }
  }

  inputUserSelf() {
    return {
      _: 'inputUserSelf',
    }
  }

  inputPhoneContact() {
    return {
      _: 'inputPhoneContact',
      client_id: this.readLong(),
      phone: this.readString(),
      first_name: this.readString(),
      last_name: this.readString(),
    }
  }

  inputFile() {
    return {
      _: 'inputFile',
      id: this.readLong(),
      parts: this.readInt(),
      name: this.readString(),
      md5_checksum: this.readString(),
    }
  }

  inputMediaEmpty() {
    return {
      _: 'inputMediaEmpty',
    }
  }

  inputMediaUploadedPhoto() {
    const flags = this.readInt();
    return {
      _: 'inputMediaUploadedPhoto',
      file: this.readObject(),
      stickers: (flags & 0x1) ? this.readObject() : undefined,
      ttl_seconds: (flags & 0x2) ? this.readInt() : undefined,
    }
  }

  inputMediaPhoto() {
    const flags = this.readInt();
    return {
      _: 'inputMediaPhoto',
      id: this.readObject(),
      ttl_seconds: (flags & 0x1) ? this.readInt() : undefined,
    }
  }

  inputMediaGeoPoint() {
    return {
      _: 'inputMediaGeoPoint',
      geo_point: this.readObject(),
    }
  }

  inputMediaContact() {
    return {
      _: 'inputMediaContact',
      phone_number: this.readString(),
      first_name: this.readString(),
      last_name: this.readString(),
      vcard: this.readString(),
    }
  }

  inputChatPhotoEmpty() {
    return {
      _: 'inputChatPhotoEmpty',
    }
  }

  inputChatUploadedPhoto() {
    return {
      _: 'inputChatUploadedPhoto',
      file: this.readObject(),
    }
  }

  inputChatPhoto() {
    return {
      _: 'inputChatPhoto',
      id: this.readObject(),
    }
  }

  inputGeoPointEmpty() {
    return {
      _: 'inputGeoPointEmpty',
    }
  }

  inputGeoPoint() {
    return {
      _: 'inputGeoPoint',
      lat: this.readObject(),
      long: this.readObject(),
    }
  }

  inputPhotoEmpty() {
    return {
      _: 'inputPhotoEmpty',
    }
  }

  inputPhoto() {
    return {
      _: 'inputPhoto',
      id: this.readLong(),
      access_hash: this.readLong(),
      file_reference: this.readObject(),
    }
  }

  inputFileLocation() {
    return {
      _: 'inputFileLocation',
      volume_id: this.readLong(),
      local_id: this.readInt(),
      secret: this.readLong(),
      file_reference: this.readObject(),
    }
  }

  peerUser() {
    return {
      _: 'peerUser',
      user_id: this.readInt(),
    }
  }

  peerChat() {
    return {
      _: 'peerChat',
      chat_id: this.readInt(),
    }
  }

  storage_fileUnknown() {
    return {
      _: 'storage.fileUnknown',
    }
  }

  storage_filePartial() {
    return {
      _: 'storage.filePartial',
    }
  }

  storage_fileJpeg() {
    return {
      _: 'storage.fileJpeg',
    }
  }

  storage_fileGif() {
    return {
      _: 'storage.fileGif',
    }
  }

  storage_filePng() {
    return {
      _: 'storage.filePng',
    }
  }

  storage_filePdf() {
    return {
      _: 'storage.filePdf',
    }
  }

  storage_fileMp3() {
    return {
      _: 'storage.fileMp3',
    }
  }

  storage_fileMov() {
    return {
      _: 'storage.fileMov',
    }
  }

  storage_fileMp4() {
    return {
      _: 'storage.fileMp4',
    }
  }

  storage_fileWebp() {
    return {
      _: 'storage.fileWebp',
    }
  }

  userEmpty() {
    return {
      _: 'userEmpty',
      id: this.readInt(),
    }
  }

  userProfilePhotoEmpty() {
    return {
      _: 'userProfilePhotoEmpty',
    }
  }

  userProfilePhoto() {
    return {
      _: 'userProfilePhoto',
      photo_id: this.readLong(),
      photo_small: this.readObject(),
      photo_big: this.readObject(),
      dc_id: this.readInt(),
    }
  }

  userStatusEmpty() {
    return {
      _: 'userStatusEmpty',
    }
  }

  userStatusOnline() {
    return {
      _: 'userStatusOnline',
      expires: this.readInt(),
    }
  }

  userStatusOffline() {
    return {
      _: 'userStatusOffline',
      was_online: this.readInt(),
    }
  }

  chatEmpty() {
    return {
      _: 'chatEmpty',
      id: this.readInt(),
    }
  }

  chat() {
    const flags = this.readInt();
    return {
      _: 'chat',
      creator: !!(flags & 0x1),
      kicked: !!(flags & 0x2),
      left: !!(flags & 0x4),
      deactivated: !!(flags & 0x32),
      id: this.readInt(),
      title: this.readString(),
      photo: this.readObject(),
      participants_count: this.readInt(),
      date: this.readInt(),
      version: this.readInt(),
      migrated_to: (flags & 0x64) ? this.readObject() : undefined,
      admin_rights: (flags & 0x16384) ? this.readObject() : undefined,
      default_banned_rights: (flags & 0x262144) ? this.readObject() : undefined,
    }
  }

  chatForbidden() {
    return {
      _: 'chatForbidden',
      id: this.readInt(),
      title: this.readString(),
    }
  }

  chatFull() {
    const flags = this.readInt();
    return {
      _: 'chatFull',
      can_set_username: !!(flags & 0x128),
      has_scheduled: !!(flags & 0x256),
      id: this.readInt(),
      about: this.readString(),
      participants: this.readObject(),
      chat_photo: (flags & 0x4) ? this.readObject() : undefined,
      notify_settings: this.readObject(),
      exported_invite: this.readObject(),
      bot_info: (flags & 0x8) ? this.readObject() : undefined,
      pinned_msg_id: (flags & 0x64) ? this.readInt() : undefined,
      folder_id: (flags & 0x2048) ? this.readInt() : undefined,
    }
  }

  chatParticipant() {
    return {
      _: 'chatParticipant',
      user_id: this.readInt(),
      inviter_id: this.readInt(),
      date: this.readInt(),
    }
  }

  chatParticipantsForbidden() {
    const flags = this.readInt();
    return {
      _: 'chatParticipantsForbidden',
      chat_id: this.readInt(),
      self_participant: (flags & 0x1) ? this.readObject() : undefined,
    }
  }

  chatParticipants() {
    return {
      _: 'chatParticipants',
      chat_id: this.readInt(),
      participants: this.readObject(),
      version: this.readInt(),
    }
  }

  chatPhotoEmpty() {
    return {
      _: 'chatPhotoEmpty',
    }
  }

  chatPhoto() {
    return {
      _: 'chatPhoto',
      photo_small: this.readObject(),
      photo_big: this.readObject(),
      dc_id: this.readInt(),
    }
  }

  messageEmpty() {
    return {
      _: 'messageEmpty',
      id: this.readInt(),
    }
  }

  message() {
    const flags = this.readInt();
    return {
      _: 'message',
      out: !!(flags & 0x2),
      mentioned: !!(flags & 0x16),
      media_unread: !!(flags & 0x32),
      silent: !!(flags & 0x8192),
      post: !!(flags & 0x16384),
      from_scheduled: !!(flags & 0x262144),
      legacy: !!(flags & 0x524288),
      edit_hide: !!(flags & 0x2097152),
      id: this.readInt(),
      from_id: (flags & 0x256) ? this.readInt() : undefined,
      to_id: this.readObject(),
      fwd_from: (flags & 0x4) ? this.readObject() : undefined,
      via_bot_id: (flags & 0x2048) ? this.readInt() : undefined,
      reply_to_msg_id: (flags & 0x8) ? this.readInt() : undefined,
      date: this.readInt(),
      message: this.readString(),
      media: (flags & 0x512) ? this.readObject() : undefined,
      reply_markup: (flags & 0x64) ? this.readObject() : undefined,
      entities: (flags & 0x128) ? this.readObject() : undefined,
      views: (flags & 0x1024) ? this.readInt() : undefined,
      edit_date: (flags & 0x32768) ? this.readInt() : undefined,
      post_author: (flags & 0x65536) ? this.readString() : undefined,
      grouped_id: (flags & 0x131072) ? this.readLong() : undefined,
      restriction_reason: (flags & 0x4194304) ? this.readObject() : undefined,
    }
  }

  messageService() {
    const flags = this.readInt();
    return {
      _: 'messageService',
      out: !!(flags & 0x2),
      mentioned: !!(flags & 0x16),
      media_unread: !!(flags & 0x32),
      silent: !!(flags & 0x8192),
      post: !!(flags & 0x16384),
      legacy: !!(flags & 0x524288),
      id: this.readInt(),
      from_id: (flags & 0x256) ? this.readInt() : undefined,
      to_id: this.readObject(),
      reply_to_msg_id: (flags & 0x8) ? this.readInt() : undefined,
      date: this.readInt(),
      action: this.readObject(),
    }
  }

  messageMediaEmpty() {
    return {
      _: 'messageMediaEmpty',
    }
  }

  messageMediaPhoto() {
    const flags = this.readInt();
    return {
      _: 'messageMediaPhoto',
      photo: (flags & 0x1) ? this.readObject() : undefined,
      ttl_seconds: (flags & 0x4) ? this.readInt() : undefined,
    }
  }

  messageMediaGeo() {
    return {
      _: 'messageMediaGeo',
      geo: this.readObject(),
    }
  }

  messageMediaContact() {
    return {
      _: 'messageMediaContact',
      phone_number: this.readString(),
      first_name: this.readString(),
      last_name: this.readString(),
      vcard: this.readString(),
      user_id: this.readInt(),
    }
  }

  messageMediaUnsupported() {
    return {
      _: 'messageMediaUnsupported',
    }
  }

  messageActionEmpty() {
    return {
      _: 'messageActionEmpty',
    }
  }

  messageActionChatCreate() {
    return {
      _: 'messageActionChatCreate',
      title: this.readString(),
      users: this.readObject(),
    }
  }

  messageActionChatEditTitle() {
    return {
      _: 'messageActionChatEditTitle',
      title: this.readString(),
    }
  }

  messageActionChatEditPhoto() {
    return {
      _: 'messageActionChatEditPhoto',
      photo: this.readObject(),
    }
  }

  messageActionChatDeletePhoto() {
    return {
      _: 'messageActionChatDeletePhoto',
    }
  }

  messageActionChatAddUser() {
    return {
      _: 'messageActionChatAddUser',
      users: this.readObject(),
    }
  }

  messageActionChatDeleteUser() {
    return {
      _: 'messageActionChatDeleteUser',
      user_id: this.readInt(),
    }
  }

  dialog() {
    const flags = this.readInt();
    return {
      _: 'dialog',
      pinned: !!(flags & 0x4),
      unread_mark: !!(flags & 0x8),
      peer: this.readObject(),
      top_message: this.readInt(),
      read_inbox_max_id: this.readInt(),
      read_outbox_max_id: this.readInt(),
      unread_count: this.readInt(),
      unread_mentions_count: this.readInt(),
      notify_settings: this.readObject(),
      pts: (flags & 0x1) ? this.readInt() : undefined,
      draft: (flags & 0x2) ? this.readObject() : undefined,
      folder_id: (flags & 0x16) ? this.readInt() : undefined,
    }
  }

  photoEmpty() {
    return {
      _: 'photoEmpty',
      id: this.readLong(),
    }
  }

  photo() {
    const flags = this.readInt();
    return {
      _: 'photo',
      has_stickers: !!(flags & 0x1),
      id: this.readLong(),
      access_hash: this.readLong(),
      file_reference: this.readObject(),
      date: this.readInt(),
      sizes: this.readObject(),
      dc_id: this.readInt(),
    }
  }

  photoSizeEmpty() {
    return {
      _: 'photoSizeEmpty',
      type: this.readString(),
    }
  }

  photoSize() {
    return {
      _: 'photoSize',
      type: this.readString(),
      location: this.readObject(),
      w: this.readInt(),
      h: this.readInt(),
      size: this.readInt(),
    }
  }

  photoCachedSize() {
    return {
      _: 'photoCachedSize',
      type: this.readString(),
      location: this.readObject(),
      w: this.readInt(),
      h: this.readInt(),
      bytes: this.readObject(),
    }
  }

  geoPointEmpty() {
    return {
      _: 'geoPointEmpty',
    }
  }

  geoPoint() {
    return {
      _: 'geoPoint',
      long: this.readObject(),
      lat: this.readObject(),
      access_hash: this.readLong(),
    }
  }

  auth_sentCode() {
    const flags = this.readInt();
    return {
      _: 'auth.sentCode',
      type: this.readObject(),
      phone_code_hash: this.readString(),
      next_type: (flags & 0x2) ? this.readObject() : undefined,
      timeout: (flags & 0x4) ? this.readInt() : undefined,
    }
  }

  auth_authorization() {
    const flags = this.readInt();
    return {
      _: 'auth.authorization',
      tmp_sessions: (flags & 0x1) ? this.readInt() : undefined,
      user: this.readObject(),
    }
  }

  auth_exportedAuthorization() {
    return {
      _: 'auth.exportedAuthorization',
      id: this.readInt(),
      bytes: this.readObject(),
    }
  }

  inputNotifyPeer() {
    return {
      _: 'inputNotifyPeer',
      peer: this.readObject(),
    }
  }

  inputNotifyUsers() {
    return {
      _: 'inputNotifyUsers',
    }
  }

  inputNotifyChats() {
    return {
      _: 'inputNotifyChats',
    }
  }

  inputPeerNotifySettings() {
    const flags = this.readInt();
    return {
      _: 'inputPeerNotifySettings',
      show_previews: (flags & 0x1) ? this.readObject() : undefined,
      silent: (flags & 0x2) ? this.readObject() : undefined,
      mute_until: (flags & 0x4) ? this.readInt() : undefined,
      sound: (flags & 0x8) ? this.readString() : undefined,
    }
  }

  peerNotifySettings() {
    const flags = this.readInt();
    return {
      _: 'peerNotifySettings',
      show_previews: (flags & 0x1) ? this.readObject() : undefined,
      silent: (flags & 0x2) ? this.readObject() : undefined,
      mute_until: (flags & 0x4) ? this.readInt() : undefined,
      sound: (flags & 0x8) ? this.readString() : undefined,
    }
  }

  peerSettings() {
    const flags = this.readInt();
    return {
      _: 'peerSettings',
      report_spam: !!(flags & 0x1),
      add_contact: !!(flags & 0x2),
      block_contact: !!(flags & 0x4),
      share_contact: !!(flags & 0x8),
      need_contacts_exception: !!(flags & 0x16),
      report_geo: !!(flags & 0x32),
    }
  }

  wallPaper() {
    const flags = this.readInt();
    return {
      _: 'wallPaper',
      id: this.readLong(),
      creator: !!(flags & 0x1),
      default: !!(flags & 0x2),
      pattern: !!(flags & 0x8),
      dark: !!(flags & 0x16),
      access_hash: this.readLong(),
      slug: this.readString(),
      document: this.readObject(),
      settings: (flags & 0x4) ? this.readObject() : undefined,
    }
  }

  inputReportReasonSpam() {
    return {
      _: 'inputReportReasonSpam',
    }
  }

  inputReportReasonViolence() {
    return {
      _: 'inputReportReasonViolence',
    }
  }

  inputReportReasonPornography() {
    return {
      _: 'inputReportReasonPornography',
    }
  }

  inputReportReasonChildAbuse() {
    return {
      _: 'inputReportReasonChildAbuse',
    }
  }

  inputReportReasonOther() {
    return {
      _: 'inputReportReasonOther',
      text: this.readString(),
    }
  }

  userFull() {
    const flags = this.readInt();
    return {
      _: 'userFull',
      blocked: !!(flags & 0x1),
      phone_calls_available: !!(flags & 0x16),
      phone_calls_private: !!(flags & 0x32),
      can_pin_message: !!(flags & 0x128),
      has_scheduled: !!(flags & 0x4096),
      user: this.readObject(),
      about: (flags & 0x2) ? this.readString() : undefined,
      settings: this.readObject(),
      profile_photo: (flags & 0x4) ? this.readObject() : undefined,
      notify_settings: this.readObject(),
      bot_info: (flags & 0x8) ? this.readObject() : undefined,
      pinned_msg_id: (flags & 0x64) ? this.readInt() : undefined,
      common_chats_count: this.readInt(),
      folder_id: (flags & 0x2048) ? this.readInt() : undefined,
    }
  }

  contact() {
    return {
      _: 'contact',
      user_id: this.readInt(),
      mutual: this.readObject(),
    }
  }

  importedContact() {
    return {
      _: 'importedContact',
      user_id: this.readInt(),
      client_id: this.readLong(),
    }
  }

  contactBlocked() {
    return {
      _: 'contactBlocked',
      user_id: this.readInt(),
      date: this.readInt(),
    }
  }

  contactStatus() {
    return {
      _: 'contactStatus',
      user_id: this.readInt(),
      status: this.readObject(),
    }
  }

  contacts_contactsNotModified() {
    return {
      _: 'contacts.contactsNotModified',
    }
  }

  contacts_contacts() {
    return {
      _: 'contacts.contacts',
      contacts: this.readObject(),
      saved_count: this.readInt(),
      users: this.readObject(),
    }
  }

  contacts_importedContacts() {
    return {
      _: 'contacts.importedContacts',
      imported: this.readObject(),
      popular_invites: this.readObject(),
      retry_contacts: this.readObject(),
      users: this.readObject(),
    }
  }

  contacts_blocked() {
    return {
      _: 'contacts.blocked',
      blocked: this.readObject(),
      users: this.readObject(),
    }
  }

  contacts_blockedSlice() {
    return {
      _: 'contacts.blockedSlice',
      count: this.readInt(),
      blocked: this.readObject(),
      users: this.readObject(),
    }
  }

  messages_dialogs() {
    return {
      _: 'messages.dialogs',
      dialogs: this.readObject(),
      messages: this.readObject(),
      chats: this.readObject(),
      users: this.readObject(),
    }
  }

  messages_dialogsSlice() {
    return {
      _: 'messages.dialogsSlice',
      count: this.readInt(),
      dialogs: this.readObject(),
      messages: this.readObject(),
      chats: this.readObject(),
      users: this.readObject(),
    }
  }

  messages_messages() {
    return {
      _: 'messages.messages',
      messages: this.readObject(),
      chats: this.readObject(),
      users: this.readObject(),
    }
  }

  messages_messagesSlice() {
    const flags = this.readInt();
    return {
      _: 'messages.messagesSlice',
      inexact: !!(flags & 0x2),
      count: this.readInt(),
      next_rate: (flags & 0x1) ? this.readInt() : undefined,
      messages: this.readObject(),
      chats: this.readObject(),
      users: this.readObject(),
    }
  }

  messages_chats() {
    return {
      _: 'messages.chats',
      chats: this.readObject(),
    }
  }

  messages_chatFull() {
    return {
      _: 'messages.chatFull',
      full_chat: this.readObject(),
      chats: this.readObject(),
      users: this.readObject(),
    }
  }

  messages_affectedHistory() {
    return {
      _: 'messages.affectedHistory',
      pts: this.readInt(),
      pts_count: this.readInt(),
      offset: this.readInt(),
    }
  }

  inputMessagesFilterEmpty() {
    return {
      _: 'inputMessagesFilterEmpty',
    }
  }

  inputMessagesFilterPhotos() {
    return {
      _: 'inputMessagesFilterPhotos',
    }
  }

  inputMessagesFilterVideo() {
    return {
      _: 'inputMessagesFilterVideo',
    }
  }

  inputMessagesFilterPhotoVideo() {
    return {
      _: 'inputMessagesFilterPhotoVideo',
    }
  }

  inputMessagesFilterDocument() {
    return {
      _: 'inputMessagesFilterDocument',
    }
  }

  inputMessagesFilterUrl() {
    return {
      _: 'inputMessagesFilterUrl',
    }
  }

  inputMessagesFilterGif() {
    return {
      _: 'inputMessagesFilterGif',
    }
  }

  updateNewMessage() {
    return {
      _: 'updateNewMessage',
      message: this.readObject(),
      pts: this.readInt(),
      pts_count: this.readInt(),
    }
  }

  updateMessageID() {
    return {
      _: 'updateMessageID',
      id: this.readInt(),
      random_id: this.readLong(),
    }
  }

  updateDeleteMessages() {
    return {
      _: 'updateDeleteMessages',
      messages: this.readObject(),
      pts: this.readInt(),
      pts_count: this.readInt(),
    }
  }

  updateUserTyping() {
    return {
      _: 'updateUserTyping',
      user_id: this.readInt(),
      action: this.readObject(),
    }
  }

  updateChatUserTyping() {
    return {
      _: 'updateChatUserTyping',
      chat_id: this.readInt(),
      user_id: this.readInt(),
      action: this.readObject(),
    }
  }

  updateChatParticipants() {
    return {
      _: 'updateChatParticipants',
      participants: this.readObject(),
    }
  }

  updateUserStatus() {
    return {
      _: 'updateUserStatus',
      user_id: this.readInt(),
      status: this.readObject(),
    }
  }

  updateUserName() {
    return {
      _: 'updateUserName',
      user_id: this.readInt(),
      first_name: this.readString(),
      last_name: this.readString(),
      username: this.readString(),
    }
  }

  updateUserPhoto() {
    return {
      _: 'updateUserPhoto',
      user_id: this.readInt(),
      date: this.readInt(),
      photo: this.readObject(),
      previous: this.readObject(),
    }
  }

  updates_state() {
    return {
      _: 'updates.state',
      pts: this.readInt(),
      qts: this.readInt(),
      date: this.readInt(),
      seq: this.readInt(),
      unread_count: this.readInt(),
    }
  }

  updates_differenceEmpty() {
    return {
      _: 'updates.differenceEmpty',
      date: this.readInt(),
      seq: this.readInt(),
    }
  }

  updates_difference() {
    return {
      _: 'updates.difference',
      new_messages: this.readObject(),
      new_encrypted_messages: this.readObject(),
      other_updates: this.readObject(),
      chats: this.readObject(),
      users: this.readObject(),
      state: this.readObject(),
    }
  }

  updates_differenceSlice() {
    return {
      _: 'updates.differenceSlice',
      new_messages: this.readObject(),
      new_encrypted_messages: this.readObject(),
      other_updates: this.readObject(),
      chats: this.readObject(),
      users: this.readObject(),
      intermediate_state: this.readObject(),
    }
  }

  updatesTooLong() {
    return {
      _: 'updatesTooLong',
    }
  }

  updateShortMessage() {
    const flags = this.readInt();
    return {
      _: 'updateShortMessage',
      out: !!(flags & 0x2),
      mentioned: !!(flags & 0x16),
      media_unread: !!(flags & 0x32),
      silent: !!(flags & 0x8192),
      id: this.readInt(),
      user_id: this.readInt(),
      message: this.readString(),
      pts: this.readInt(),
      pts_count: this.readInt(),
      date: this.readInt(),
      fwd_from: (flags & 0x4) ? this.readObject() : undefined,
      via_bot_id: (flags & 0x2048) ? this.readInt() : undefined,
      reply_to_msg_id: (flags & 0x8) ? this.readInt() : undefined,
      entities: (flags & 0x128) ? this.readObject() : undefined,
    }
  }

  updateShortChatMessage() {
    const flags = this.readInt();
    return {
      _: 'updateShortChatMessage',
      out: !!(flags & 0x2),
      mentioned: !!(flags & 0x16),
      media_unread: !!(flags & 0x32),
      silent: !!(flags & 0x8192),
      id: this.readInt(),
      from_id: this.readInt(),
      chat_id: this.readInt(),
      message: this.readString(),
      pts: this.readInt(),
      pts_count: this.readInt(),
      date: this.readInt(),
      fwd_from: (flags & 0x4) ? this.readObject() : undefined,
      via_bot_id: (flags & 0x2048) ? this.readInt() : undefined,
      reply_to_msg_id: (flags & 0x8) ? this.readInt() : undefined,
      entities: (flags & 0x128) ? this.readObject() : undefined,
    }
  }

  updateShort() {
    return {
      _: 'updateShort',
      update: this.readObject(),
      date: this.readInt(),
    }
  }

  updatesCombined() {
    return {
      _: 'updatesCombined',
      updates: this.readObject(),
      users: this.readObject(),
      chats: this.readObject(),
      date: this.readInt(),
      seq_start: this.readInt(),
      seq: this.readInt(),
    }
  }

  updates() {
    return {
      _: 'updates',
      updates: this.readObject(),
      users: this.readObject(),
      chats: this.readObject(),
      date: this.readInt(),
      seq: this.readInt(),
    }
  }

  photos_photos() {
    return {
      _: 'photos.photos',
      photos: this.readObject(),
      users: this.readObject(),
    }
  }

  photos_photosSlice() {
    return {
      _: 'photos.photosSlice',
      count: this.readInt(),
      photos: this.readObject(),
      users: this.readObject(),
    }
  }

  photos_photo() {
    return {
      _: 'photos.photo',
      photo: this.readObject(),
      users: this.readObject(),
    }
  }

  upload_file() {
    return {
      _: 'upload.file',
      type: this.readObject(),
      mtime: this.readInt(),
      bytes: this.readObject(),
    }
  }

  dcOption() {
    const flags = this.readInt();
    return {
      _: 'dcOption',
      ipv6: !!(flags & 0x1),
      media_only: !!(flags & 0x2),
      tcpo_only: !!(flags & 0x4),
      cdn: !!(flags & 0x8),
      static: !!(flags & 0x16),
      id: this.readInt(),
      ip_address: this.readString(),
      port: this.readInt(),
      secret: (flags & 0x1024) ? this.readObject() : undefined,
    }
  }

  config() {
    const flags = this.readInt();
    return {
      _: 'config',
      phonecalls_enabled: !!(flags & 0x2),
      default_p2p_contacts: !!(flags & 0x8),
      preload_featured_stickers: !!(flags & 0x16),
      ignore_phone_entities: !!(flags & 0x32),
      revoke_pm_inbox: !!(flags & 0x64),
      blocked_mode: !!(flags & 0x256),
      pfs_enabled: !!(flags & 0x8192),
      date: this.readInt(),
      expires: this.readInt(),
      test_mode: this.readObject(),
      this_dc: this.readInt(),
      dc_options: this.readObject(),
      dc_txt_domain_name: this.readString(),
      chat_size_max: this.readInt(),
      megagroup_size_max: this.readInt(),
      forwarded_count_max: this.readInt(),
      online_update_period_ms: this.readInt(),
      offline_blur_timeout_ms: this.readInt(),
      offline_idle_timeout_ms: this.readInt(),
      online_cloud_timeout_ms: this.readInt(),
      notify_cloud_delay_ms: this.readInt(),
      notify_default_delay_ms: this.readInt(),
      push_chat_period_ms: this.readInt(),
      push_chat_limit: this.readInt(),
      saved_gifs_limit: this.readInt(),
      edit_time_limit: this.readInt(),
      revoke_time_limit: this.readInt(),
      revoke_pm_time_limit: this.readInt(),
      rating_e_decay: this.readInt(),
      stickers_recent_limit: this.readInt(),
      stickers_faved_limit: this.readInt(),
      channels_read_media_period: this.readInt(),
      tmp_sessions: (flags & 0x1) ? this.readInt() : undefined,
      pinned_dialogs_count_max: this.readInt(),
      pinned_infolder_count_max: this.readInt(),
      call_receive_timeout_ms: this.readInt(),
      call_ring_timeout_ms: this.readInt(),
      call_connect_timeout_ms: this.readInt(),
      call_packet_timeout_ms: this.readInt(),
      me_url_prefix: this.readString(),
      autoupdate_url_prefix: (flags & 0x128) ? this.readString() : undefined,
      gif_search_username: (flags & 0x512) ? this.readString() : undefined,
      venue_search_username: (flags & 0x1024) ? this.readString() : undefined,
      img_search_username: (flags & 0x2048) ? this.readString() : undefined,
      static_maps_provider: (flags & 0x4096) ? this.readString() : undefined,
      caption_length_max: this.readInt(),
      message_length_max: this.readInt(),
      webfile_dc_id: this.readInt(),
      suggested_lang_code: (flags & 0x4) ? this.readString() : undefined,
      lang_pack_version: (flags & 0x4) ? this.readInt() : undefined,
      base_lang_pack_version: (flags & 0x4) ? this.readInt() : undefined,
    }
  }

  nearestDc() {
    return {
      _: 'nearestDc',
      country: this.readString(),
      this_dc: this.readInt(),
      nearest_dc: this.readInt(),
    }
  }

  help_appUpdate() {
    const flags = this.readInt();
    return {
      _: 'help.appUpdate',
      can_not_skip: !!(flags & 0x1),
      id: this.readInt(),
      version: this.readString(),
      text: this.readString(),
      entities: this.readObject(),
      document: (flags & 0x2) ? this.readObject() : undefined,
      url: (flags & 0x4) ? this.readString() : undefined,
    }
  }

  help_noAppUpdate() {
    return {
      _: 'help.noAppUpdate',
    }
  }

  help_inviteText() {
    return {
      _: 'help.inviteText',
      message: this.readString(),
    }
  }

  updateNewEncryptedMessage() {
    return {
      _: 'updateNewEncryptedMessage',
      message: this.readObject(),
      qts: this.readInt(),
    }
  }

  updateEncryptedChatTyping() {
    return {
      _: 'updateEncryptedChatTyping',
      chat_id: this.readInt(),
    }
  }

  updateEncryption() {
    return {
      _: 'updateEncryption',
      chat: this.readObject(),
      date: this.readInt(),
    }
  }

  updateEncryptedMessagesRead() {
    return {
      _: 'updateEncryptedMessagesRead',
      chat_id: this.readInt(),
      max_date: this.readInt(),
      date: this.readInt(),
    }
  }

  encryptedChatEmpty() {
    return {
      _: 'encryptedChatEmpty',
      id: this.readInt(),
    }
  }

  encryptedChatWaiting() {
    return {
      _: 'encryptedChatWaiting',
      id: this.readInt(),
      access_hash: this.readLong(),
      date: this.readInt(),
      admin_id: this.readInt(),
      participant_id: this.readInt(),
    }
  }

  encryptedChatRequested() {
    return {
      _: 'encryptedChatRequested',
      id: this.readInt(),
      access_hash: this.readLong(),
      date: this.readInt(),
      admin_id: this.readInt(),
      participant_id: this.readInt(),
      g_a: this.readObject(),
    }
  }

  encryptedChat() {
    return {
      _: 'encryptedChat',
      id: this.readInt(),
      access_hash: this.readLong(),
      date: this.readInt(),
      admin_id: this.readInt(),
      participant_id: this.readInt(),
      g_a_or_b: this.readObject(),
      key_fingerprint: this.readLong(),
    }
  }

  encryptedChatDiscarded() {
    return {
      _: 'encryptedChatDiscarded',
      id: this.readInt(),
    }
  }

  inputEncryptedChat() {
    return {
      _: 'inputEncryptedChat',
      chat_id: this.readInt(),
      access_hash: this.readLong(),
    }
  }

  encryptedFileEmpty() {
    return {
      _: 'encryptedFileEmpty',
    }
  }

  encryptedFile() {
    return {
      _: 'encryptedFile',
      id: this.readLong(),
      access_hash: this.readLong(),
      size: this.readInt(),
      dc_id: this.readInt(),
      key_fingerprint: this.readInt(),
    }
  }

  inputEncryptedFileEmpty() {
    return {
      _: 'inputEncryptedFileEmpty',
    }
  }

  inputEncryptedFileUploaded() {
    return {
      _: 'inputEncryptedFileUploaded',
      id: this.readLong(),
      parts: this.readInt(),
      md5_checksum: this.readString(),
      key_fingerprint: this.readInt(),
    }
  }

  inputEncryptedFile() {
    return {
      _: 'inputEncryptedFile',
      id: this.readLong(),
      access_hash: this.readLong(),
    }
  }

  inputEncryptedFileLocation() {
    return {
      _: 'inputEncryptedFileLocation',
      id: this.readLong(),
      access_hash: this.readLong(),
    }
  }

  encryptedMessage() {
    return {
      _: 'encryptedMessage',
      random_id: this.readLong(),
      chat_id: this.readInt(),
      date: this.readInt(),
      bytes: this.readObject(),
      file: this.readObject(),
    }
  }

  encryptedMessageService() {
    return {
      _: 'encryptedMessageService',
      random_id: this.readLong(),
      chat_id: this.readInt(),
      date: this.readInt(),
      bytes: this.readObject(),
    }
  }

  messages_dhConfigNotModified() {
    return {
      _: 'messages.dhConfigNotModified',
      random: this.readObject(),
    }
  }

  messages_dhConfig() {
    return {
      _: 'messages.dhConfig',
      g: this.readInt(),
      p: this.readObject(),
      version: this.readInt(),
      random: this.readObject(),
    }
  }

  messages_sentEncryptedMessage() {
    return {
      _: 'messages.sentEncryptedMessage',
      date: this.readInt(),
    }
  }

  messages_sentEncryptedFile() {
    return {
      _: 'messages.sentEncryptedFile',
      date: this.readInt(),
      file: this.readObject(),
    }
  }

  inputFileBig() {
    return {
      _: 'inputFileBig',
      id: this.readLong(),
      parts: this.readInt(),
      name: this.readString(),
    }
  }

  inputEncryptedFileBigUploaded() {
    return {
      _: 'inputEncryptedFileBigUploaded',
      id: this.readLong(),
      parts: this.readInt(),
      key_fingerprint: this.readInt(),
    }
  }

  updateChatParticipantAdd() {
    return {
      _: 'updateChatParticipantAdd',
      chat_id: this.readInt(),
      user_id: this.readInt(),
      inviter_id: this.readInt(),
      date: this.readInt(),
      version: this.readInt(),
    }
  }

  updateChatParticipantDelete() {
    return {
      _: 'updateChatParticipantDelete',
      chat_id: this.readInt(),
      user_id: this.readInt(),
      version: this.readInt(),
    }
  }

  updateDcOptions() {
    return {
      _: 'updateDcOptions',
      dc_options: this.readObject(),
    }
  }

  inputMediaUploadedDocument() {
    const flags = this.readInt();
    return {
      _: 'inputMediaUploadedDocument',
      nosound_video: !!(flags & 0x8),
      file: this.readObject(),
      thumb: (flags & 0x4) ? this.readObject() : undefined,
      mime_type: this.readString(),
      attributes: this.readObject(),
      stickers: (flags & 0x1) ? this.readObject() : undefined,
      ttl_seconds: (flags & 0x2) ? this.readInt() : undefined,
    }
  }

  inputMediaDocument() {
    const flags = this.readInt();
    return {
      _: 'inputMediaDocument',
      id: this.readObject(),
      ttl_seconds: (flags & 0x1) ? this.readInt() : undefined,
    }
  }

  messageMediaDocument() {
    const flags = this.readInt();
    return {
      _: 'messageMediaDocument',
      document: (flags & 0x1) ? this.readObject() : undefined,
      ttl_seconds: (flags & 0x4) ? this.readInt() : undefined,
    }
  }

  inputDocumentEmpty() {
    return {
      _: 'inputDocumentEmpty',
    }
  }

  inputDocument() {
    return {
      _: 'inputDocument',
      id: this.readLong(),
      access_hash: this.readLong(),
      file_reference: this.readObject(),
    }
  }

  inputDocumentFileLocation() {
    return {
      _: 'inputDocumentFileLocation',
      id: this.readLong(),
      access_hash: this.readLong(),
      file_reference: this.readObject(),
      thumb_size: this.readString(),
    }
  }

  documentEmpty() {
    return {
      _: 'documentEmpty',
      id: this.readLong(),
    }
  }

  document() {
    const flags = this.readInt();
    return {
      _: 'document',
      id: this.readLong(),
      access_hash: this.readLong(),
      file_reference: this.readObject(),
      date: this.readInt(),
      mime_type: this.readString(),
      size: this.readInt(),
      thumbs: (flags & 0x1) ? this.readObject() : undefined,
      dc_id: this.readInt(),
      attributes: this.readObject(),
    }
  }

  help_support() {
    return {
      _: 'help.support',
      phone_number: this.readString(),
      user: this.readObject(),
    }
  }

  notifyPeer() {
    return {
      _: 'notifyPeer',
      peer: this.readObject(),
    }
  }

  notifyUsers() {
    return {
      _: 'notifyUsers',
    }
  }

  notifyChats() {
    return {
      _: 'notifyChats',
    }
  }

  updateUserBlocked() {
    return {
      _: 'updateUserBlocked',
      user_id: this.readInt(),
      blocked: this.readObject(),
    }
  }

  updateNotifySettings() {
    return {
      _: 'updateNotifySettings',
      peer: this.readObject(),
      notify_settings: this.readObject(),
    }
  }

  sendMessageTypingAction() {
    return {
      _: 'sendMessageTypingAction',
    }
  }

  sendMessageCancelAction() {
    return {
      _: 'sendMessageCancelAction',
    }
  }

  sendMessageRecordVideoAction() {
    return {
      _: 'sendMessageRecordVideoAction',
    }
  }

  sendMessageUploadVideoAction() {
    return {
      _: 'sendMessageUploadVideoAction',
      progress: this.readInt(),
    }
  }

  sendMessageRecordAudioAction() {
    return {
      _: 'sendMessageRecordAudioAction',
    }
  }

  sendMessageUploadAudioAction() {
    return {
      _: 'sendMessageUploadAudioAction',
      progress: this.readInt(),
    }
  }

  sendMessageUploadPhotoAction() {
    return {
      _: 'sendMessageUploadPhotoAction',
      progress: this.readInt(),
    }
  }

  sendMessageUploadDocumentAction() {
    return {
      _: 'sendMessageUploadDocumentAction',
      progress: this.readInt(),
    }
  }

  sendMessageGeoLocationAction() {
    return {
      _: 'sendMessageGeoLocationAction',
    }
  }

  sendMessageChooseContactAction() {
    return {
      _: 'sendMessageChooseContactAction',
    }
  }

  contacts_found() {
    return {
      _: 'contacts.found',
      my_results: this.readObject(),
      results: this.readObject(),
      chats: this.readObject(),
      users: this.readObject(),
    }
  }

  updateServiceNotification() {
    const flags = this.readInt();
    return {
      _: 'updateServiceNotification',
      popup: !!(flags & 0x1),
      inbox_date: (flags & 0x2) ? this.readInt() : undefined,
      type: this.readString(),
      message: this.readString(),
      media: this.readObject(),
      entities: this.readObject(),
    }
  }

  userStatusRecently() {
    return {
      _: 'userStatusRecently',
    }
  }

  userStatusLastWeek() {
    return {
      _: 'userStatusLastWeek',
    }
  }

  userStatusLastMonth() {
    return {
      _: 'userStatusLastMonth',
    }
  }

  updatePrivacy() {
    return {
      _: 'updatePrivacy',
      key: this.readObject(),
      rules: this.readObject(),
    }
  }

  inputPrivacyKeyStatusTimestamp() {
    return {
      _: 'inputPrivacyKeyStatusTimestamp',
    }
  }

  privacyKeyStatusTimestamp() {
    return {
      _: 'privacyKeyStatusTimestamp',
    }
  }

  inputPrivacyValueAllowContacts() {
    return {
      _: 'inputPrivacyValueAllowContacts',
    }
  }

  inputPrivacyValueAllowAll() {
    return {
      _: 'inputPrivacyValueAllowAll',
    }
  }

  inputPrivacyValueAllowUsers() {
    return {
      _: 'inputPrivacyValueAllowUsers',
      users: this.readObject(),
    }
  }

  inputPrivacyValueDisallowContacts() {
    return {
      _: 'inputPrivacyValueDisallowContacts',
    }
  }

  inputPrivacyValueDisallowAll() {
    return {
      _: 'inputPrivacyValueDisallowAll',
    }
  }

  inputPrivacyValueDisallowUsers() {
    return {
      _: 'inputPrivacyValueDisallowUsers',
      users: this.readObject(),
    }
  }

  privacyValueAllowContacts() {
    return {
      _: 'privacyValueAllowContacts',
    }
  }

  privacyValueAllowAll() {
    return {
      _: 'privacyValueAllowAll',
    }
  }

  privacyValueAllowUsers() {
    return {
      _: 'privacyValueAllowUsers',
      users: this.readObject(),
    }
  }

  privacyValueDisallowContacts() {
    return {
      _: 'privacyValueDisallowContacts',
    }
  }

  privacyValueDisallowAll() {
    return {
      _: 'privacyValueDisallowAll',
    }
  }

  privacyValueDisallowUsers() {
    return {
      _: 'privacyValueDisallowUsers',
      users: this.readObject(),
    }
  }

  account_privacyRules() {
    return {
      _: 'account.privacyRules',
      rules: this.readObject(),
      chats: this.readObject(),
      users: this.readObject(),
    }
  }

  accountDaysTTL() {
    return {
      _: 'accountDaysTTL',
      days: this.readInt(),
    }
  }

  updateUserPhone() {
    return {
      _: 'updateUserPhone',
      user_id: this.readInt(),
      phone: this.readString(),
    }
  }

  documentAttributeImageSize() {
    return {
      _: 'documentAttributeImageSize',
      w: this.readInt(),
      h: this.readInt(),
    }
  }

  documentAttributeAnimated() {
    return {
      _: 'documentAttributeAnimated',
    }
  }

  documentAttributeSticker() {
    const flags = this.readInt();
    return {
      _: 'documentAttributeSticker',
      mask: !!(flags & 0x2),
      alt: this.readString(),
      stickerset: this.readObject(),
      mask_coords: (flags & 0x1) ? this.readObject() : undefined,
    }
  }

  documentAttributeVideo() {
    const flags = this.readInt();
    return {
      _: 'documentAttributeVideo',
      round_message: !!(flags & 0x1),
      supports_streaming: !!(flags & 0x2),
      duration: this.readInt(),
      w: this.readInt(),
      h: this.readInt(),
    }
  }

  documentAttributeAudio() {
    const flags = this.readInt();
    return {
      _: 'documentAttributeAudio',
      voice: !!(flags & 0x1024),
      duration: this.readInt(),
      title: (flags & 0x1) ? this.readString() : undefined,
      performer: (flags & 0x2) ? this.readString() : undefined,
      waveform: (flags & 0x4) ? this.readObject() : undefined,
    }
  }

  documentAttributeFilename() {
    return {
      _: 'documentAttributeFilename',
      file_name: this.readString(),
    }
  }

  messages_stickersNotModified() {
    return {
      _: 'messages.stickersNotModified',
    }
  }

  messages_stickers() {
    return {
      _: 'messages.stickers',
      hash: this.readInt(),
      stickers: this.readObject(),
    }
  }

  stickerPack() {
    return {
      _: 'stickerPack',
      emoticon: this.readString(),
      documents: this.readObject(),
    }
  }

  messages_allStickersNotModified() {
    return {
      _: 'messages.allStickersNotModified',
    }
  }

  messages_allStickers() {
    return {
      _: 'messages.allStickers',
      hash: this.readInt(),
      sets: this.readObject(),
    }
  }

  updateReadHistoryInbox() {
    const flags = this.readInt();
    return {
      _: 'updateReadHistoryInbox',
      folder_id: (flags & 0x1) ? this.readInt() : undefined,
      peer: this.readObject(),
      max_id: this.readInt(),
      still_unread_count: this.readInt(),
      pts: this.readInt(),
      pts_count: this.readInt(),
    }
  }

  updateReadHistoryOutbox() {
    return {
      _: 'updateReadHistoryOutbox',
      peer: this.readObject(),
      max_id: this.readInt(),
      pts: this.readInt(),
      pts_count: this.readInt(),
    }
  }

  messages_affectedMessages() {
    return {
      _: 'messages.affectedMessages',
      pts: this.readInt(),
      pts_count: this.readInt(),
    }
  }

  updateWebPage() {
    return {
      _: 'updateWebPage',
      webpage: this.readObject(),
      pts: this.readInt(),
      pts_count: this.readInt(),
    }
  }

  webPageEmpty() {
    return {
      _: 'webPageEmpty',
      id: this.readLong(),
    }
  }

  webPagePending() {
    return {
      _: 'webPagePending',
      id: this.readLong(),
      date: this.readInt(),
    }
  }

  webPage() {
    const flags = this.readInt();
    return {
      _: 'webPage',
      id: this.readLong(),
      url: this.readString(),
      display_url: this.readString(),
      hash: this.readInt(),
      type: (flags & 0x1) ? this.readString() : undefined,
      site_name: (flags & 0x2) ? this.readString() : undefined,
      title: (flags & 0x4) ? this.readString() : undefined,
      description: (flags & 0x8) ? this.readString() : undefined,
      photo: (flags & 0x16) ? this.readObject() : undefined,
      embed_url: (flags & 0x32) ? this.readString() : undefined,
      embed_type: (flags & 0x32) ? this.readString() : undefined,
      embed_width: (flags & 0x64) ? this.readInt() : undefined,
      embed_height: (flags & 0x64) ? this.readInt() : undefined,
      duration: (flags & 0x128) ? this.readInt() : undefined,
      author: (flags & 0x256) ? this.readString() : undefined,
      document: (flags & 0x512) ? this.readObject() : undefined,
      documents: (flags & 0x2048) ? this.readObject() : undefined,
      cached_page: (flags & 0x1024) ? this.readObject() : undefined,
    }
  }

  messageMediaWebPage() {
    return {
      _: 'messageMediaWebPage',
      webpage: this.readObject(),
    }
  }

  authorization() {
    const flags = this.readInt();
    return {
      _: 'authorization',
      current: !!(flags & 0x1),
      official_app: !!(flags & 0x2),
      password_pending: !!(flags & 0x4),
      hash: this.readLong(),
      device_model: this.readString(),
      platform: this.readString(),
      system_version: this.readString(),
      api_id: this.readInt(),
      app_name: this.readString(),
      app_version: this.readString(),
      date_created: this.readInt(),
      date_active: this.readInt(),
      ip: this.readString(),
      country: this.readString(),
      region: this.readString(),
    }
  }

  account_authorizations() {
    return {
      _: 'account.authorizations',
      authorizations: this.readObject(),
    }
  }

  account_password() {
    const flags = this.readInt();
    return {
      _: 'account.password',
      has_recovery: !!(flags & 0x1),
      has_secure_values: !!(flags & 0x2),
      has_password: !!(flags & 0x4),
      current_algo: (flags & 0x4) ? this.readObject() : undefined,
      srp_B: (flags & 0x4) ? this.readObject() : undefined,
      srp_id: (flags & 0x4) ? this.readLong() : undefined,
      hint: (flags & 0x8) ? this.readString() : undefined,
      email_unconfirmed_pattern: (flags & 0x16) ? this.readString() : undefined,
      new_algo: this.readObject(),
      new_secure_algo: this.readObject(),
      secure_random: this.readObject(),
    }
  }

  account_passwordSettings() {
    const flags = this.readInt();
    return {
      _: 'account.passwordSettings',
      email: (flags & 0x1) ? this.readString() : undefined,
      secure_settings: (flags & 0x2) ? this.readObject() : undefined,
    }
  }

  account_passwordInputSettings() {
    const flags = this.readInt();
    return {
      _: 'account.passwordInputSettings',
      new_algo: (flags & 0x1) ? this.readObject() : undefined,
      new_password_hash: (flags & 0x1) ? this.readObject() : undefined,
      hint: (flags & 0x1) ? this.readString() : undefined,
      email: (flags & 0x2) ? this.readString() : undefined,
      new_secure_settings: (flags & 0x4) ? this.readObject() : undefined,
    }
  }

  auth_passwordRecovery() {
    return {
      _: 'auth.passwordRecovery',
      email_pattern: this.readString(),
    }
  }

  inputMediaVenue() {
    return {
      _: 'inputMediaVenue',
      geo_point: this.readObject(),
      title: this.readString(),
      address: this.readString(),
      provider: this.readString(),
      venue_id: this.readString(),
      venue_type: this.readString(),
    }
  }

  messageMediaVenue() {
    return {
      _: 'messageMediaVenue',
      geo: this.readObject(),
      title: this.readString(),
      address: this.readString(),
      provider: this.readString(),
      venue_id: this.readString(),
      venue_type: this.readString(),
    }
  }

  receivedNotifyMessage() {
    return {
      _: 'receivedNotifyMessage',
      id: this.readInt(),
      flags: this.readInt(),
    }
  }

  chatInviteEmpty() {
    return {
      _: 'chatInviteEmpty',
    }
  }

  chatInviteExported() {
    return {
      _: 'chatInviteExported',
      link: this.readString(),
    }
  }

  chatInviteAlready() {
    return {
      _: 'chatInviteAlready',
      chat: this.readObject(),
    }
  }

  chatInvite() {
    const flags = this.readInt();
    return {
      _: 'chatInvite',
      channel: !!(flags & 0x1),
      broadcast: !!(flags & 0x2),
      public: !!(flags & 0x4),
      megagroup: !!(flags & 0x8),
      title: this.readString(),
      photo: this.readObject(),
      participants_count: this.readInt(),
      participants: (flags & 0x16) ? this.readObject() : undefined,
    }
  }

  messageActionChatJoinedByLink() {
    return {
      _: 'messageActionChatJoinedByLink',
      inviter_id: this.readInt(),
    }
  }

  updateReadMessagesContents() {
    return {
      _: 'updateReadMessagesContents',
      messages: this.readObject(),
      pts: this.readInt(),
      pts_count: this.readInt(),
    }
  }

  inputStickerSetEmpty() {
    return {
      _: 'inputStickerSetEmpty',
    }
  }

  inputStickerSetID() {
    return {
      _: 'inputStickerSetID',
      id: this.readLong(),
      access_hash: this.readLong(),
    }
  }

  inputStickerSetShortName() {
    return {
      _: 'inputStickerSetShortName',
      short_name: this.readString(),
    }
  }

  stickerSet() {
    const flags = this.readInt();
    return {
      _: 'stickerSet',
      archived: !!(flags & 0x2),
      official: !!(flags & 0x4),
      masks: !!(flags & 0x8),
      animated: !!(flags & 0x32),
      installed_date: (flags & 0x1) ? this.readInt() : undefined,
      id: this.readLong(),
      access_hash: this.readLong(),
      title: this.readString(),
      short_name: this.readString(),
      thumb: (flags & 0x16) ? this.readObject() : undefined,
      thumb_dc_id: (flags & 0x16) ? this.readInt() : undefined,
      count: this.readInt(),
      hash: this.readInt(),
    }
  }

  messages_stickerSet() {
    return {
      _: 'messages.stickerSet',
      set: this.readObject(),
      packs: this.readObject(),
      documents: this.readObject(),
    }
  }

  user() {
    const flags = this.readInt();
    return {
      _: 'user',
      self: !!(flags & 0x1024),
      contact: !!(flags & 0x2048),
      mutual_contact: !!(flags & 0x4096),
      deleted: !!(flags & 0x8192),
      bot: !!(flags & 0x16384),
      bot_chat_history: !!(flags & 0x32768),
      bot_nochats: !!(flags & 0x65536),
      verified: !!(flags & 0x131072),
      restricted: !!(flags & 0x262144),
      min: !!(flags & 0x1048576),
      bot_inline_geo: !!(flags & 0x2097152),
      support: !!(flags & 0x8388608),
      scam: !!(flags & 0x16777216),
      id: this.readInt(),
      access_hash: (flags & 0x1) ? this.readLong() : undefined,
      first_name: (flags & 0x2) ? this.readString() : undefined,
      last_name: (flags & 0x4) ? this.readString() : undefined,
      username: (flags & 0x8) ? this.readString() : undefined,
      phone: (flags & 0x16) ? this.readString() : undefined,
      photo: (flags & 0x32) ? this.readObject() : undefined,
      status: (flags & 0x64) ? this.readObject() : undefined,
      bot_info_version: (flags & 0x16384) ? this.readInt() : undefined,
      restriction_reason: (flags & 0x262144) ? this.readObject() : undefined,
      bot_inline_placeholder: (flags & 0x524288) ? this.readString() : undefined,
      lang_code: (flags & 0x4194304) ? this.readString() : undefined,
    }
  }

  botCommand() {
    return {
      _: 'botCommand',
      command: this.readString(),
      description: this.readString(),
    }
  }

  botInfo() {
    return {
      _: 'botInfo',
      user_id: this.readInt(),
      description: this.readString(),
      commands: this.readObject(),
    }
  }

  keyboardButton() {
    return {
      _: 'keyboardButton',
      text: this.readString(),
    }
  }

  keyboardButtonRow() {
    return {
      _: 'keyboardButtonRow',
      buttons: this.readObject(),
    }
  }

  replyKeyboardHide() {
    const flags = this.readInt();
    return {
      _: 'replyKeyboardHide',
      selective: !!(flags & 0x4),
    }
  }

  replyKeyboardForceReply() {
    const flags = this.readInt();
    return {
      _: 'replyKeyboardForceReply',
      single_use: !!(flags & 0x2),
      selective: !!(flags & 0x4),
    }
  }

  replyKeyboardMarkup() {
    const flags = this.readInt();
    return {
      _: 'replyKeyboardMarkup',
      resize: !!(flags & 0x1),
      single_use: !!(flags & 0x2),
      selective: !!(flags & 0x4),
      rows: this.readObject(),
    }
  }

  inputPeerUser() {
    return {
      _: 'inputPeerUser',
      user_id: this.readInt(),
      access_hash: this.readLong(),
    }
  }

  inputUser() {
    return {
      _: 'inputUser',
      user_id: this.readInt(),
      access_hash: this.readLong(),
    }
  }

  messageEntityUnknown() {
    return {
      _: 'messageEntityUnknown',
      offset: this.readInt(),
      length: this.readInt(),
    }
  }

  messageEntityMention() {
    return {
      _: 'messageEntityMention',
      offset: this.readInt(),
      length: this.readInt(),
    }
  }

  messageEntityHashtag() {
    return {
      _: 'messageEntityHashtag',
      offset: this.readInt(),
      length: this.readInt(),
    }
  }

  messageEntityBotCommand() {
    return {
      _: 'messageEntityBotCommand',
      offset: this.readInt(),
      length: this.readInt(),
    }
  }

  messageEntityUrl() {
    return {
      _: 'messageEntityUrl',
      offset: this.readInt(),
      length: this.readInt(),
    }
  }

  messageEntityEmail() {
    return {
      _: 'messageEntityEmail',
      offset: this.readInt(),
      length: this.readInt(),
    }
  }

  messageEntityBold() {
    return {
      _: 'messageEntityBold',
      offset: this.readInt(),
      length: this.readInt(),
    }
  }

  messageEntityItalic() {
    return {
      _: 'messageEntityItalic',
      offset: this.readInt(),
      length: this.readInt(),
    }
  }

  messageEntityCode() {
    return {
      _: 'messageEntityCode',
      offset: this.readInt(),
      length: this.readInt(),
    }
  }

  messageEntityPre() {
    return {
      _: 'messageEntityPre',
      offset: this.readInt(),
      length: this.readInt(),
      language: this.readString(),
    }
  }

  messageEntityTextUrl() {
    return {
      _: 'messageEntityTextUrl',
      offset: this.readInt(),
      length: this.readInt(),
      url: this.readString(),
    }
  }

  updateShortSentMessage() {
    const flags = this.readInt();
    return {
      _: 'updateShortSentMessage',
      out: !!(flags & 0x2),
      id: this.readInt(),
      pts: this.readInt(),
      pts_count: this.readInt(),
      date: this.readInt(),
      media: (flags & 0x512) ? this.readObject() : undefined,
      entities: (flags & 0x128) ? this.readObject() : undefined,
    }
  }

  inputChannelEmpty() {
    return {
      _: 'inputChannelEmpty',
    }
  }

  inputChannel() {
    return {
      _: 'inputChannel',
      channel_id: this.readInt(),
      access_hash: this.readLong(),
    }
  }

  peerChannel() {
    return {
      _: 'peerChannel',
      channel_id: this.readInt(),
    }
  }

  inputPeerChannel() {
    return {
      _: 'inputPeerChannel',
      channel_id: this.readInt(),
      access_hash: this.readLong(),
    }
  }

  channel() {
    const flags = this.readInt();
    return {
      _: 'channel',
      creator: !!(flags & 0x1),
      left: !!(flags & 0x4),
      broadcast: !!(flags & 0x32),
      verified: !!(flags & 0x128),
      megagroup: !!(flags & 0x256),
      restricted: !!(flags & 0x512),
      signatures: !!(flags & 0x2048),
      min: !!(flags & 0x4096),
      scam: !!(flags & 0x524288),
      has_link: !!(flags & 0x1048576),
      has_geo: !!(flags & 0x2097152),
      slowmode_enabled: !!(flags & 0x4194304),
      id: this.readInt(),
      access_hash: (flags & 0x8192) ? this.readLong() : undefined,
      title: this.readString(),
      username: (flags & 0x64) ? this.readString() : undefined,
      photo: this.readObject(),
      date: this.readInt(),
      version: this.readInt(),
      restriction_reason: (flags & 0x512) ? this.readObject() : undefined,
      admin_rights: (flags & 0x16384) ? this.readObject() : undefined,
      banned_rights: (flags & 0x32768) ? this.readObject() : undefined,
      default_banned_rights: (flags & 0x262144) ? this.readObject() : undefined,
      participants_count: (flags & 0x131072) ? this.readInt() : undefined,
    }
  }

  channelForbidden() {
    const flags = this.readInt();
    return {
      _: 'channelForbidden',
      broadcast: !!(flags & 0x32),
      megagroup: !!(flags & 0x256),
      id: this.readInt(),
      access_hash: this.readLong(),
      title: this.readString(),
      until_date: (flags & 0x65536) ? this.readInt() : undefined,
    }
  }

  contacts_resolvedPeer() {
    return {
      _: 'contacts.resolvedPeer',
      peer: this.readObject(),
      chats: this.readObject(),
      users: this.readObject(),
    }
  }

  channelFull() {
    const flags = this.readInt();
    return {
      _: 'channelFull',
      can_view_participants: !!(flags & 0x8),
      can_set_username: !!(flags & 0x64),
      can_set_stickers: !!(flags & 0x128),
      hidden_prehistory: !!(flags & 0x1024),
      can_view_stats: !!(flags & 0x4096),
      can_set_location: !!(flags & 0x65536),
      has_scheduled: !!(flags & 0x524288),
      id: this.readInt(),
      about: this.readString(),
      participants_count: (flags & 0x1) ? this.readInt() : undefined,
      admins_count: (flags & 0x2) ? this.readInt() : undefined,
      kicked_count: (flags & 0x4) ? this.readInt() : undefined,
      banned_count: (flags & 0x4) ? this.readInt() : undefined,
      online_count: (flags & 0x8192) ? this.readInt() : undefined,
      read_inbox_max_id: this.readInt(),
      read_outbox_max_id: this.readInt(),
      unread_count: this.readInt(),
      chat_photo: this.readObject(),
      notify_settings: this.readObject(),
      exported_invite: this.readObject(),
      bot_info: this.readObject(),
      migrated_from_chat_id: (flags & 0x16) ? this.readInt() : undefined,
      migrated_from_max_id: (flags & 0x16) ? this.readInt() : undefined,
      pinned_msg_id: (flags & 0x32) ? this.readInt() : undefined,
      stickerset: (flags & 0x256) ? this.readObject() : undefined,
      available_min_id: (flags & 0x512) ? this.readInt() : undefined,
      folder_id: (flags & 0x2048) ? this.readInt() : undefined,
      linked_chat_id: (flags & 0x16384) ? this.readInt() : undefined,
      location: (flags & 0x32768) ? this.readObject() : undefined,
      slowmode_seconds: (flags & 0x131072) ? this.readInt() : undefined,
      slowmode_next_send_date: (flags & 0x262144) ? this.readInt() : undefined,
      pts: this.readInt(),
    }
  }

  messageRange() {
    return {
      _: 'messageRange',
      min_id: this.readInt(),
      max_id: this.readInt(),
    }
  }

  messages_channelMessages() {
    const flags = this.readInt();
    return {
      _: 'messages.channelMessages',
      inexact: !!(flags & 0x2),
      pts: this.readInt(),
      count: this.readInt(),
      messages: this.readObject(),
      chats: this.readObject(),
      users: this.readObject(),
    }
  }

  messageActionChannelCreate() {
    return {
      _: 'messageActionChannelCreate',
      title: this.readString(),
    }
  }

  updateChannelTooLong() {
    const flags = this.readInt();
    return {
      _: 'updateChannelTooLong',
      channel_id: this.readInt(),
      pts: (flags & 0x1) ? this.readInt() : undefined,
    }
  }

  updateChannel() {
    return {
      _: 'updateChannel',
      channel_id: this.readInt(),
    }
  }

  updateNewChannelMessage() {
    return {
      _: 'updateNewChannelMessage',
      message: this.readObject(),
      pts: this.readInt(),
      pts_count: this.readInt(),
    }
  }

  updateReadChannelInbox() {
    const flags = this.readInt();
    return {
      _: 'updateReadChannelInbox',
      folder_id: (flags & 0x1) ? this.readInt() : undefined,
      channel_id: this.readInt(),
      max_id: this.readInt(),
      still_unread_count: this.readInt(),
      pts: this.readInt(),
    }
  }

  updateDeleteChannelMessages() {
    return {
      _: 'updateDeleteChannelMessages',
      channel_id: this.readInt(),
      messages: this.readObject(),
      pts: this.readInt(),
      pts_count: this.readInt(),
    }
  }

  updateChannelMessageViews() {
    return {
      _: 'updateChannelMessageViews',
      channel_id: this.readInt(),
      id: this.readInt(),
      views: this.readInt(),
    }
  }

  updates_channelDifferenceEmpty() {
    const flags = this.readInt();
    return {
      _: 'updates.channelDifferenceEmpty',
      final: !!(flags & 0x1),
      pts: this.readInt(),
      timeout: (flags & 0x2) ? this.readInt() : undefined,
    }
  }

  updates_channelDifferenceTooLong() {
    const flags = this.readInt();
    return {
      _: 'updates.channelDifferenceTooLong',
      final: !!(flags & 0x1),
      timeout: (flags & 0x2) ? this.readInt() : undefined,
      dialog: this.readObject(),
      messages: this.readObject(),
      chats: this.readObject(),
      users: this.readObject(),
    }
  }

  updates_channelDifference() {
    const flags = this.readInt();
    return {
      _: 'updates.channelDifference',
      final: !!(flags & 0x1),
      pts: this.readInt(),
      timeout: (flags & 0x2) ? this.readInt() : undefined,
      new_messages: this.readObject(),
      other_updates: this.readObject(),
      chats: this.readObject(),
      users: this.readObject(),
    }
  }

  channelMessagesFilterEmpty() {
    return {
      _: 'channelMessagesFilterEmpty',
    }
  }

  channelMessagesFilter() {
    const flags = this.readInt();
    return {
      _: 'channelMessagesFilter',
      exclude_new_messages: !!(flags & 0x2),
      ranges: this.readObject(),
    }
  }

  channelParticipant() {
    return {
      _: 'channelParticipant',
      user_id: this.readInt(),
      date: this.readInt(),
    }
  }

  channelParticipantSelf() {
    return {
      _: 'channelParticipantSelf',
      user_id: this.readInt(),
      inviter_id: this.readInt(),
      date: this.readInt(),
    }
  }

  channelParticipantCreator() {
    const flags = this.readInt();
    return {
      _: 'channelParticipantCreator',
      user_id: this.readInt(),
      rank: (flags & 0x1) ? this.readString() : undefined,
    }
  }

  channelParticipantsRecent() {
    return {
      _: 'channelParticipantsRecent',
    }
  }

  channelParticipantsAdmins() {
    return {
      _: 'channelParticipantsAdmins',
    }
  }

  channelParticipantsKicked() {
    return {
      _: 'channelParticipantsKicked',
      q: this.readString(),
    }
  }

  channels_channelParticipants() {
    return {
      _: 'channels.channelParticipants',
      count: this.readInt(),
      participants: this.readObject(),
      users: this.readObject(),
    }
  }

  channels_channelParticipant() {
    return {
      _: 'channels.channelParticipant',
      participant: this.readObject(),
      users: this.readObject(),
    }
  }

  chatParticipantCreator() {
    return {
      _: 'chatParticipantCreator',
      user_id: this.readInt(),
    }
  }

  chatParticipantAdmin() {
    return {
      _: 'chatParticipantAdmin',
      user_id: this.readInt(),
      inviter_id: this.readInt(),
      date: this.readInt(),
    }
  }

  updateChatParticipantAdmin() {
    return {
      _: 'updateChatParticipantAdmin',
      chat_id: this.readInt(),
      user_id: this.readInt(),
      is_admin: this.readObject(),
      version: this.readInt(),
    }
  }

  messageActionChatMigrateTo() {
    return {
      _: 'messageActionChatMigrateTo',
      channel_id: this.readInt(),
    }
  }

  messageActionChannelMigrateFrom() {
    return {
      _: 'messageActionChannelMigrateFrom',
      title: this.readString(),
      chat_id: this.readInt(),
    }
  }

  channelParticipantsBots() {
    return {
      _: 'channelParticipantsBots',
    }
  }

  help_termsOfService() {
    const flags = this.readInt();
    return {
      _: 'help.termsOfService',
      popup: !!(flags & 0x1),
      id: this.readObject(),
      text: this.readString(),
      entities: this.readObject(),
      min_age_confirm: (flags & 0x2) ? this.readInt() : undefined,
    }
  }

  updateNewStickerSet() {
    return {
      _: 'updateNewStickerSet',
      stickerset: this.readObject(),
    }
  }

  updateStickerSetsOrder() {
    const flags = this.readInt();
    return {
      _: 'updateStickerSetsOrder',
      masks: !!(flags & 0x1),
      order: this.readObject(),
    }
  }

  updateStickerSets() {
    return {
      _: 'updateStickerSets',
    }
  }

  foundGif() {
    return {
      _: 'foundGif',
      url: this.readString(),
      thumb_url: this.readString(),
      content_url: this.readString(),
      content_type: this.readString(),
      w: this.readInt(),
      h: this.readInt(),
    }
  }

  foundGifCached() {
    return {
      _: 'foundGifCached',
      url: this.readString(),
      photo: this.readObject(),
      document: this.readObject(),
    }
  }

  inputMediaGifExternal() {
    return {
      _: 'inputMediaGifExternal',
      url: this.readString(),
      q: this.readString(),
    }
  }

  messages_foundGifs() {
    return {
      _: 'messages.foundGifs',
      next_offset: this.readInt(),
      results: this.readObject(),
    }
  }

  messages_savedGifsNotModified() {
    return {
      _: 'messages.savedGifsNotModified',
    }
  }

  messages_savedGifs() {
    return {
      _: 'messages.savedGifs',
      hash: this.readInt(),
      gifs: this.readObject(),
    }
  }

  updateSavedGifs() {
    return {
      _: 'updateSavedGifs',
    }
  }

  inputBotInlineMessageMediaAuto() {
    const flags = this.readInt();
    return {
      _: 'inputBotInlineMessageMediaAuto',
      message: this.readString(),
      entities: (flags & 0x2) ? this.readObject() : undefined,
      reply_markup: (flags & 0x4) ? this.readObject() : undefined,
    }
  }

  inputBotInlineMessageText() {
    const flags = this.readInt();
    return {
      _: 'inputBotInlineMessageText',
      no_webpage: !!(flags & 0x1),
      message: this.readString(),
      entities: (flags & 0x2) ? this.readObject() : undefined,
      reply_markup: (flags & 0x4) ? this.readObject() : undefined,
    }
  }

  inputBotInlineResult() {
    const flags = this.readInt();
    return {
      _: 'inputBotInlineResult',
      id: this.readString(),
      type: this.readString(),
      title: (flags & 0x2) ? this.readString() : undefined,
      description: (flags & 0x4) ? this.readString() : undefined,
      url: (flags & 0x8) ? this.readString() : undefined,
      thumb: (flags & 0x16) ? this.readObject() : undefined,
      content: (flags & 0x32) ? this.readObject() : undefined,
      send_message: this.readObject(),
    }
  }

  botInlineMessageMediaAuto() {
    const flags = this.readInt();
    return {
      _: 'botInlineMessageMediaAuto',
      message: this.readString(),
      entities: (flags & 0x2) ? this.readObject() : undefined,
      reply_markup: (flags & 0x4) ? this.readObject() : undefined,
    }
  }

  botInlineMessageText() {
    const flags = this.readInt();
    return {
      _: 'botInlineMessageText',
      no_webpage: !!(flags & 0x1),
      message: this.readString(),
      entities: (flags & 0x2) ? this.readObject() : undefined,
      reply_markup: (flags & 0x4) ? this.readObject() : undefined,
    }
  }

  botInlineResult() {
    const flags = this.readInt();
    return {
      _: 'botInlineResult',
      id: this.readString(),
      type: this.readString(),
      title: (flags & 0x2) ? this.readString() : undefined,
      description: (flags & 0x4) ? this.readString() : undefined,
      url: (flags & 0x8) ? this.readString() : undefined,
      thumb: (flags & 0x16) ? this.readObject() : undefined,
      content: (flags & 0x32) ? this.readObject() : undefined,
      send_message: this.readObject(),
    }
  }

  messages_botResults() {
    const flags = this.readInt();
    return {
      _: 'messages.botResults',
      gallery: !!(flags & 0x1),
      query_id: this.readLong(),
      next_offset: (flags & 0x2) ? this.readString() : undefined,
      switch_pm: (flags & 0x4) ? this.readObject() : undefined,
      results: this.readObject(),
      cache_time: this.readInt(),
      users: this.readObject(),
    }
  }

  updateBotInlineQuery() {
    const flags = this.readInt();
    return {
      _: 'updateBotInlineQuery',
      query_id: this.readLong(),
      user_id: this.readInt(),
      query: this.readString(),
      geo: (flags & 0x1) ? this.readObject() : undefined,
      offset: this.readString(),
    }
  }

  updateBotInlineSend() {
    const flags = this.readInt();
    return {
      _: 'updateBotInlineSend',
      user_id: this.readInt(),
      query: this.readString(),
      geo: (flags & 0x1) ? this.readObject() : undefined,
      id: this.readString(),
      msg_id: (flags & 0x2) ? this.readObject() : undefined,
    }
  }

  inputMessagesFilterVoice() {
    return {
      _: 'inputMessagesFilterVoice',
    }
  }

  inputMessagesFilterMusic() {
    return {
      _: 'inputMessagesFilterMusic',
    }
  }

  inputPrivacyKeyChatInvite() {
    return {
      _: 'inputPrivacyKeyChatInvite',
    }
  }

  privacyKeyChatInvite() {
    return {
      _: 'privacyKeyChatInvite',
    }
  }

  exportedMessageLink() {
    return {
      _: 'exportedMessageLink',
      link: this.readString(),
      html: this.readString(),
    }
  }

  messageFwdHeader() {
    const flags = this.readInt();
    return {
      _: 'messageFwdHeader',
      from_id: (flags & 0x1) ? this.readInt() : undefined,
      from_name: (flags & 0x32) ? this.readString() : undefined,
      date: this.readInt(),
      channel_id: (flags & 0x2) ? this.readInt() : undefined,
      channel_post: (flags & 0x4) ? this.readInt() : undefined,
      post_author: (flags & 0x8) ? this.readString() : undefined,
      saved_from_peer: (flags & 0x16) ? this.readObject() : undefined,
      saved_from_msg_id: (flags & 0x16) ? this.readInt() : undefined,
    }
  }

  updateEditChannelMessage() {
    return {
      _: 'updateEditChannelMessage',
      message: this.readObject(),
      pts: this.readInt(),
      pts_count: this.readInt(),
    }
  }

  updateChannelPinnedMessage() {
    return {
      _: 'updateChannelPinnedMessage',
      channel_id: this.readInt(),
      id: this.readInt(),
    }
  }

  messageActionPinMessage() {
    return {
      _: 'messageActionPinMessage',
    }
  }

  auth_codeTypeSms() {
    return {
      _: 'auth.codeTypeSms',
    }
  }

  auth_codeTypeCall() {
    return {
      _: 'auth.codeTypeCall',
    }
  }

  auth_codeTypeFlashCall() {
    return {
      _: 'auth.codeTypeFlashCall',
    }
  }

  auth_sentCodeTypeApp() {
    return {
      _: 'auth.sentCodeTypeApp',
      length: this.readInt(),
    }
  }

  auth_sentCodeTypeSms() {
    return {
      _: 'auth.sentCodeTypeSms',
      length: this.readInt(),
    }
  }

  auth_sentCodeTypeCall() {
    return {
      _: 'auth.sentCodeTypeCall',
      length: this.readInt(),
    }
  }

  auth_sentCodeTypeFlashCall() {
    return {
      _: 'auth.sentCodeTypeFlashCall',
      pattern: this.readString(),
    }
  }

  keyboardButtonUrl() {
    return {
      _: 'keyboardButtonUrl',
      text: this.readString(),
      url: this.readString(),
    }
  }

  keyboardButtonCallback() {
    return {
      _: 'keyboardButtonCallback',
      text: this.readString(),
      data: this.readObject(),
    }
  }

  keyboardButtonRequestPhone() {
    return {
      _: 'keyboardButtonRequestPhone',
      text: this.readString(),
    }
  }

  keyboardButtonRequestGeoLocation() {
    return {
      _: 'keyboardButtonRequestGeoLocation',
      text: this.readString(),
    }
  }

  keyboardButtonSwitchInline() {
    const flags = this.readInt();
    return {
      _: 'keyboardButtonSwitchInline',
      same_peer: !!(flags & 0x1),
      text: this.readString(),
      query: this.readString(),
    }
  }

  replyInlineMarkup() {
    return {
      _: 'replyInlineMarkup',
      rows: this.readObject(),
    }
  }

  messages_botCallbackAnswer() {
    const flags = this.readInt();
    return {
      _: 'messages.botCallbackAnswer',
      alert: !!(flags & 0x2),
      has_url: !!(flags & 0x8),
      native_ui: !!(flags & 0x16),
      message: (flags & 0x1) ? this.readString() : undefined,
      url: (flags & 0x4) ? this.readString() : undefined,
      cache_time: this.readInt(),
    }
  }

  updateBotCallbackQuery() {
    const flags = this.readInt();
    return {
      _: 'updateBotCallbackQuery',
      query_id: this.readLong(),
      user_id: this.readInt(),
      peer: this.readObject(),
      msg_id: this.readInt(),
      chat_instance: this.readLong(),
      data: (flags & 0x1) ? this.readObject() : undefined,
      game_short_name: (flags & 0x2) ? this.readString() : undefined,
    }
  }

  messages_messageEditData() {
    const flags = this.readInt();
    return {
      _: 'messages.messageEditData',
      caption: !!(flags & 0x1),
    }
  }

  updateEditMessage() {
    return {
      _: 'updateEditMessage',
      message: this.readObject(),
      pts: this.readInt(),
      pts_count: this.readInt(),
    }
  }

  inputBotInlineMessageMediaGeo() {
    const flags = this.readInt();
    return {
      _: 'inputBotInlineMessageMediaGeo',
      geo_point: this.readObject(),
      period: this.readInt(),
      reply_markup: (flags & 0x4) ? this.readObject() : undefined,
    }
  }

  inputBotInlineMessageMediaVenue() {
    const flags = this.readInt();
    return {
      _: 'inputBotInlineMessageMediaVenue',
      geo_point: this.readObject(),
      title: this.readString(),
      address: this.readString(),
      provider: this.readString(),
      venue_id: this.readString(),
      venue_type: this.readString(),
      reply_markup: (flags & 0x4) ? this.readObject() : undefined,
    }
  }

  inputBotInlineMessageMediaContact() {
    const flags = this.readInt();
    return {
      _: 'inputBotInlineMessageMediaContact',
      phone_number: this.readString(),
      first_name: this.readString(),
      last_name: this.readString(),
      vcard: this.readString(),
      reply_markup: (flags & 0x4) ? this.readObject() : undefined,
    }
  }

  botInlineMessageMediaGeo() {
    const flags = this.readInt();
    return {
      _: 'botInlineMessageMediaGeo',
      geo: this.readObject(),
      period: this.readInt(),
      reply_markup: (flags & 0x4) ? this.readObject() : undefined,
    }
  }

  botInlineMessageMediaVenue() {
    const flags = this.readInt();
    return {
      _: 'botInlineMessageMediaVenue',
      geo: this.readObject(),
      title: this.readString(),
      address: this.readString(),
      provider: this.readString(),
      venue_id: this.readString(),
      venue_type: this.readString(),
      reply_markup: (flags & 0x4) ? this.readObject() : undefined,
    }
  }

  botInlineMessageMediaContact() {
    const flags = this.readInt();
    return {
      _: 'botInlineMessageMediaContact',
      phone_number: this.readString(),
      first_name: this.readString(),
      last_name: this.readString(),
      vcard: this.readString(),
      reply_markup: (flags & 0x4) ? this.readObject() : undefined,
    }
  }

  inputBotInlineResultPhoto() {
    return {
      _: 'inputBotInlineResultPhoto',
      id: this.readString(),
      type: this.readString(),
      photo: this.readObject(),
      send_message: this.readObject(),
    }
  }

  inputBotInlineResultDocument() {
    const flags = this.readInt();
    return {
      _: 'inputBotInlineResultDocument',
      id: this.readString(),
      type: this.readString(),
      title: (flags & 0x2) ? this.readString() : undefined,
      description: (flags & 0x4) ? this.readString() : undefined,
      document: this.readObject(),
      send_message: this.readObject(),
    }
  }

  botInlineMediaResult() {
    const flags = this.readInt();
    return {
      _: 'botInlineMediaResult',
      id: this.readString(),
      type: this.readString(),
      photo: (flags & 0x1) ? this.readObject() : undefined,
      document: (flags & 0x2) ? this.readObject() : undefined,
      title: (flags & 0x4) ? this.readString() : undefined,
      description: (flags & 0x8) ? this.readString() : undefined,
      send_message: this.readObject(),
    }
  }

  inputBotInlineMessageID() {
    return {
      _: 'inputBotInlineMessageID',
      dc_id: this.readInt(),
      id: this.readLong(),
      access_hash: this.readLong(),
    }
  }

  updateInlineBotCallbackQuery() {
    const flags = this.readInt();
    return {
      _: 'updateInlineBotCallbackQuery',
      query_id: this.readLong(),
      user_id: this.readInt(),
      msg_id: this.readObject(),
      chat_instance: this.readLong(),
      data: (flags & 0x1) ? this.readObject() : undefined,
      game_short_name: (flags & 0x2) ? this.readString() : undefined,
    }
  }

  inlineBotSwitchPM() {
    return {
      _: 'inlineBotSwitchPM',
      text: this.readString(),
      start_param: this.readString(),
    }
  }

  messages_peerDialogs() {
    return {
      _: 'messages.peerDialogs',
      dialogs: this.readObject(),
      messages: this.readObject(),
      chats: this.readObject(),
      users: this.readObject(),
      state: this.readObject(),
    }
  }

  topPeer() {
    return {
      _: 'topPeer',
      peer: this.readObject(),
      rating: this.readObject(),
    }
  }

  topPeerCategoryBotsPM() {
    return {
      _: 'topPeerCategoryBotsPM',
    }
  }

  topPeerCategoryBotsInline() {
    return {
      _: 'topPeerCategoryBotsInline',
    }
  }

  topPeerCategoryCorrespondents() {
    return {
      _: 'topPeerCategoryCorrespondents',
    }
  }

  topPeerCategoryGroups() {
    return {
      _: 'topPeerCategoryGroups',
    }
  }

  topPeerCategoryChannels() {
    return {
      _: 'topPeerCategoryChannels',
    }
  }

  topPeerCategoryPeers() {
    return {
      _: 'topPeerCategoryPeers',
      category: this.readObject(),
      count: this.readInt(),
      peers: this.readObject(),
    }
  }

  contacts_topPeersNotModified() {
    return {
      _: 'contacts.topPeersNotModified',
    }
  }

  contacts_topPeers() {
    return {
      _: 'contacts.topPeers',
      categories: this.readObject(),
      chats: this.readObject(),
      users: this.readObject(),
    }
  }

  messageEntityMentionName() {
    return {
      _: 'messageEntityMentionName',
      offset: this.readInt(),
      length: this.readInt(),
      user_id: this.readInt(),
    }
  }

  inputMessageEntityMentionName() {
    return {
      _: 'inputMessageEntityMentionName',
      offset: this.readInt(),
      length: this.readInt(),
      user_id: this.readObject(),
    }
  }

  inputMessagesFilterChatPhotos() {
    return {
      _: 'inputMessagesFilterChatPhotos',
    }
  }

  updateReadChannelOutbox() {
    return {
      _: 'updateReadChannelOutbox',
      channel_id: this.readInt(),
      max_id: this.readInt(),
    }
  }

  updateDraftMessage() {
    return {
      _: 'updateDraftMessage',
      peer: this.readObject(),
      draft: this.readObject(),
    }
  }

  draftMessageEmpty() {
    const flags = this.readInt();
    return {
      _: 'draftMessageEmpty',
      date: (flags & 0x1) ? this.readInt() : undefined,
    }
  }

  draftMessage() {
    const flags = this.readInt();
    return {
      _: 'draftMessage',
      no_webpage: !!(flags & 0x2),
      reply_to_msg_id: (flags & 0x1) ? this.readInt() : undefined,
      message: this.readString(),
      entities: (flags & 0x8) ? this.readObject() : undefined,
      date: this.readInt(),
    }
  }

  messageActionHistoryClear() {
    return {
      _: 'messageActionHistoryClear',
    }
  }

  messages_featuredStickersNotModified() {
    return {
      _: 'messages.featuredStickersNotModified',
    }
  }

  messages_featuredStickers() {
    return {
      _: 'messages.featuredStickers',
      hash: this.readInt(),
      sets: this.readObject(),
      unread: this.readObject(),
    }
  }

  updateReadFeaturedStickers() {
    return {
      _: 'updateReadFeaturedStickers',
    }
  }

  messages_recentStickersNotModified() {
    return {
      _: 'messages.recentStickersNotModified',
    }
  }

  messages_recentStickers() {
    return {
      _: 'messages.recentStickers',
      hash: this.readInt(),
      packs: this.readObject(),
      stickers: this.readObject(),
      dates: this.readObject(),
    }
  }

  updateRecentStickers() {
    return {
      _: 'updateRecentStickers',
    }
  }

  messages_archivedStickers() {
    return {
      _: 'messages.archivedStickers',
      count: this.readInt(),
      sets: this.readObject(),
    }
  }

  messages_stickerSetInstallResultSuccess() {
    return {
      _: 'messages.stickerSetInstallResultSuccess',
    }
  }

  messages_stickerSetInstallResultArchive() {
    return {
      _: 'messages.stickerSetInstallResultArchive',
      sets: this.readObject(),
    }
  }

  stickerSetCovered() {
    return {
      _: 'stickerSetCovered',
      set: this.readObject(),
      cover: this.readObject(),
    }
  }

  updateConfig() {
    return {
      _: 'updateConfig',
    }
  }

  updatePtsChanged() {
    return {
      _: 'updatePtsChanged',
    }
  }

  inputMediaPhotoExternal() {
    const flags = this.readInt();
    return {
      _: 'inputMediaPhotoExternal',
      url: this.readString(),
      ttl_seconds: (flags & 0x1) ? this.readInt() : undefined,
    }
  }

  inputMediaDocumentExternal() {
    const flags = this.readInt();
    return {
      _: 'inputMediaDocumentExternal',
      url: this.readString(),
      ttl_seconds: (flags & 0x1) ? this.readInt() : undefined,
    }
  }

  stickerSetMultiCovered() {
    return {
      _: 'stickerSetMultiCovered',
      set: this.readObject(),
      covers: this.readObject(),
    }
  }

  maskCoords() {
    return {
      _: 'maskCoords',
      n: this.readInt(),
      x: this.readObject(),
      y: this.readObject(),
      zoom: this.readObject(),
    }
  }

  documentAttributeHasStickers() {
    return {
      _: 'documentAttributeHasStickers',
    }
  }

  inputStickeredMediaPhoto() {
    return {
      _: 'inputStickeredMediaPhoto',
      id: this.readObject(),
    }
  }

  inputStickeredMediaDocument() {
    return {
      _: 'inputStickeredMediaDocument',
      id: this.readObject(),
    }
  }

  game() {
    const flags = this.readInt();
    return {
      _: 'game',
      id: this.readLong(),
      access_hash: this.readLong(),
      short_name: this.readString(),
      title: this.readString(),
      description: this.readString(),
      photo: this.readObject(),
      document: (flags & 0x1) ? this.readObject() : undefined,
    }
  }

  inputBotInlineResultGame() {
    return {
      _: 'inputBotInlineResultGame',
      id: this.readString(),
      short_name: this.readString(),
      send_message: this.readObject(),
    }
  }

  inputBotInlineMessageGame() {
    const flags = this.readInt();
    return {
      _: 'inputBotInlineMessageGame',
      reply_markup: (flags & 0x4) ? this.readObject() : undefined,
    }
  }

  messageMediaGame() {
    return {
      _: 'messageMediaGame',
      game: this.readObject(),
    }
  }

  inputMediaGame() {
    return {
      _: 'inputMediaGame',
      id: this.readObject(),
    }
  }

  inputGameID() {
    return {
      _: 'inputGameID',
      id: this.readLong(),
      access_hash: this.readLong(),
    }
  }

  inputGameShortName() {
    return {
      _: 'inputGameShortName',
      bot_id: this.readObject(),
      short_name: this.readString(),
    }
  }

  keyboardButtonGame() {
    return {
      _: 'keyboardButtonGame',
      text: this.readString(),
    }
  }

  messageActionGameScore() {
    return {
      _: 'messageActionGameScore',
      game_id: this.readLong(),
      score: this.readInt(),
    }
  }

  highScore() {
    return {
      _: 'highScore',
      pos: this.readInt(),
      user_id: this.readInt(),
      score: this.readInt(),
    }
  }

  messages_highScores() {
    return {
      _: 'messages.highScores',
      scores: this.readObject(),
      users: this.readObject(),
    }
  }

  updates_differenceTooLong() {
    return {
      _: 'updates.differenceTooLong',
      pts: this.readInt(),
    }
  }

  updateChannelWebPage() {
    return {
      _: 'updateChannelWebPage',
      channel_id: this.readInt(),
      webpage: this.readObject(),
      pts: this.readInt(),
      pts_count: this.readInt(),
    }
  }

  messages_chatsSlice() {
    return {
      _: 'messages.chatsSlice',
      count: this.readInt(),
      chats: this.readObject(),
    }
  }

  textEmpty() {
    return {
      _: 'textEmpty',
    }
  }

  textPlain() {
    return {
      _: 'textPlain',
      text: this.readString(),
    }
  }

  textBold() {
    return {
      _: 'textBold',
      text: this.readObject(),
    }
  }

  textItalic() {
    return {
      _: 'textItalic',
      text: this.readObject(),
    }
  }

  textUnderline() {
    return {
      _: 'textUnderline',
      text: this.readObject(),
    }
  }

  textStrike() {
    return {
      _: 'textStrike',
      text: this.readObject(),
    }
  }

  textFixed() {
    return {
      _: 'textFixed',
      text: this.readObject(),
    }
  }

  textUrl() {
    return {
      _: 'textUrl',
      text: this.readObject(),
      url: this.readString(),
      webpage_id: this.readLong(),
    }
  }

  textEmail() {
    return {
      _: 'textEmail',
      text: this.readObject(),
      email: this.readString(),
    }
  }

  textConcat() {
    return {
      _: 'textConcat',
      texts: this.readObject(),
    }
  }

  pageBlockUnsupported() {
    return {
      _: 'pageBlockUnsupported',
    }
  }

  pageBlockTitle() {
    return {
      _: 'pageBlockTitle',
      text: this.readObject(),
    }
  }

  pageBlockSubtitle() {
    return {
      _: 'pageBlockSubtitle',
      text: this.readObject(),
    }
  }

  pageBlockAuthorDate() {
    return {
      _: 'pageBlockAuthorDate',
      author: this.readObject(),
      published_date: this.readInt(),
    }
  }

  pageBlockHeader() {
    return {
      _: 'pageBlockHeader',
      text: this.readObject(),
    }
  }

  pageBlockSubheader() {
    return {
      _: 'pageBlockSubheader',
      text: this.readObject(),
    }
  }

  pageBlockParagraph() {
    return {
      _: 'pageBlockParagraph',
      text: this.readObject(),
    }
  }

  pageBlockPreformatted() {
    return {
      _: 'pageBlockPreformatted',
      text: this.readObject(),
      language: this.readString(),
    }
  }

  pageBlockFooter() {
    return {
      _: 'pageBlockFooter',
      text: this.readObject(),
    }
  }

  pageBlockDivider() {
    return {
      _: 'pageBlockDivider',
    }
  }

  pageBlockAnchor() {
    return {
      _: 'pageBlockAnchor',
      name: this.readString(),
    }
  }

  pageBlockList() {
    return {
      _: 'pageBlockList',
      items: this.readObject(),
    }
  }

  pageBlockBlockquote() {
    return {
      _: 'pageBlockBlockquote',
      text: this.readObject(),
      caption: this.readObject(),
    }
  }

  pageBlockPullquote() {
    return {
      _: 'pageBlockPullquote',
      text: this.readObject(),
      caption: this.readObject(),
    }
  }

  pageBlockPhoto() {
    const flags = this.readInt();
    return {
      _: 'pageBlockPhoto',
      photo_id: this.readLong(),
      caption: this.readObject(),
      url: (flags & 0x1) ? this.readString() : undefined,
      webpage_id: (flags & 0x1) ? this.readLong() : undefined,
    }
  }

  pageBlockVideo() {
    const flags = this.readInt();
    return {
      _: 'pageBlockVideo',
      autoplay: !!(flags & 0x1),
      loop: !!(flags & 0x2),
      video_id: this.readLong(),
      caption: this.readObject(),
    }
  }

  pageBlockCover() {
    return {
      _: 'pageBlockCover',
      cover: this.readObject(),
    }
  }

  pageBlockEmbed() {
    const flags = this.readInt();
    return {
      _: 'pageBlockEmbed',
      full_width: !!(flags & 0x1),
      allow_scrolling: !!(flags & 0x8),
      url: (flags & 0x2) ? this.readString() : undefined,
      html: (flags & 0x4) ? this.readString() : undefined,
      poster_photo_id: (flags & 0x16) ? this.readLong() : undefined,
      w: (flags & 0x32) ? this.readInt() : undefined,
      h: (flags & 0x32) ? this.readInt() : undefined,
      caption: this.readObject(),
    }
  }

  pageBlockEmbedPost() {
    return {
      _: 'pageBlockEmbedPost',
      url: this.readString(),
      webpage_id: this.readLong(),
      author_photo_id: this.readLong(),
      author: this.readString(),
      date: this.readInt(),
      blocks: this.readObject(),
      caption: this.readObject(),
    }
  }

  pageBlockCollage() {
    return {
      _: 'pageBlockCollage',
      items: this.readObject(),
      caption: this.readObject(),
    }
  }

  pageBlockSlideshow() {
    return {
      _: 'pageBlockSlideshow',
      items: this.readObject(),
      caption: this.readObject(),
    }
  }

  webPageNotModified() {
    return {
      _: 'webPageNotModified',
    }
  }

  inputPrivacyKeyPhoneCall() {
    return {
      _: 'inputPrivacyKeyPhoneCall',
    }
  }

  privacyKeyPhoneCall() {
    return {
      _: 'privacyKeyPhoneCall',
    }
  }

  sendMessageGamePlayAction() {
    return {
      _: 'sendMessageGamePlayAction',
    }
  }

  phoneCallDiscardReasonMissed() {
    return {
      _: 'phoneCallDiscardReasonMissed',
    }
  }

  phoneCallDiscardReasonDisconnect() {
    return {
      _: 'phoneCallDiscardReasonDisconnect',
    }
  }

  phoneCallDiscardReasonHangup() {
    return {
      _: 'phoneCallDiscardReasonHangup',
    }
  }

  phoneCallDiscardReasonBusy() {
    return {
      _: 'phoneCallDiscardReasonBusy',
    }
  }

  updateDialogPinned() {
    const flags = this.readInt();
    return {
      _: 'updateDialogPinned',
      pinned: !!(flags & 0x1),
      folder_id: (flags & 0x2) ? this.readInt() : undefined,
      peer: this.readObject(),
    }
  }

  updatePinnedDialogs() {
    const flags = this.readInt();
    return {
      _: 'updatePinnedDialogs',
      folder_id: (flags & 0x2) ? this.readInt() : undefined,
      order: (flags & 0x1) ? this.readObject() : undefined,
    }
  }

  dataJSON() {
    return {
      _: 'dataJSON',
      data: this.readString(),
    }
  }

  updateBotWebhookJSON() {
    return {
      _: 'updateBotWebhookJSON',
      data: this.readObject(),
    }
  }

  updateBotWebhookJSONQuery() {
    return {
      _: 'updateBotWebhookJSONQuery',
      query_id: this.readLong(),
      data: this.readObject(),
      timeout: this.readInt(),
    }
  }

  labeledPrice() {
    return {
      _: 'labeledPrice',
      label: this.readString(),
      amount: this.readLong(),
    }
  }

  invoice() {
    const flags = this.readInt();
    return {
      _: 'invoice',
      test: !!(flags & 0x1),
      name_requested: !!(flags & 0x2),
      phone_requested: !!(flags & 0x4),
      email_requested: !!(flags & 0x8),
      shipping_address_requested: !!(flags & 0x16),
      flexible: !!(flags & 0x32),
      phone_to_provider: !!(flags & 0x64),
      email_to_provider: !!(flags & 0x128),
      currency: this.readString(),
      prices: this.readObject(),
    }
  }

  inputMediaInvoice() {
    const flags = this.readInt();
    return {
      _: 'inputMediaInvoice',
      title: this.readString(),
      description: this.readString(),
      photo: (flags & 0x1) ? this.readObject() : undefined,
      invoice: this.readObject(),
      payload: this.readObject(),
      provider: this.readString(),
      provider_data: this.readObject(),
      start_param: this.readString(),
    }
  }

  paymentCharge() {
    return {
      _: 'paymentCharge',
      id: this.readString(),
      provider_charge_id: this.readString(),
    }
  }

  messageActionPaymentSentMe() {
    const flags = this.readInt();
    return {
      _: 'messageActionPaymentSentMe',
      currency: this.readString(),
      total_amount: this.readLong(),
      payload: this.readObject(),
      info: (flags & 0x1) ? this.readObject() : undefined,
      shipping_option_id: (flags & 0x2) ? this.readString() : undefined,
      charge: this.readObject(),
    }
  }

  messageMediaInvoice() {
    const flags = this.readInt();
    return {
      _: 'messageMediaInvoice',
      shipping_address_requested: !!(flags & 0x2),
      test: !!(flags & 0x8),
      title: this.readString(),
      description: this.readString(),
      photo: (flags & 0x1) ? this.readObject() : undefined,
      receipt_msg_id: (flags & 0x4) ? this.readInt() : undefined,
      currency: this.readString(),
      total_amount: this.readLong(),
      start_param: this.readString(),
    }
  }

  postAddress() {
    return {
      _: 'postAddress',
      street_line1: this.readString(),
      street_line2: this.readString(),
      city: this.readString(),
      state: this.readString(),
      country_iso2: this.readString(),
      post_code: this.readString(),
    }
  }

  paymentRequestedInfo() {
    const flags = this.readInt();
    return {
      _: 'paymentRequestedInfo',
      name: (flags & 0x1) ? this.readString() : undefined,
      phone: (flags & 0x2) ? this.readString() : undefined,
      email: (flags & 0x4) ? this.readString() : undefined,
      shipping_address: (flags & 0x8) ? this.readObject() : undefined,
    }
  }

  keyboardButtonBuy() {
    return {
      _: 'keyboardButtonBuy',
      text: this.readString(),
    }
  }

  messageActionPaymentSent() {
    return {
      _: 'messageActionPaymentSent',
      currency: this.readString(),
      total_amount: this.readLong(),
    }
  }

  paymentSavedCredentialsCard() {
    return {
      _: 'paymentSavedCredentialsCard',
      id: this.readString(),
      title: this.readString(),
    }
  }

  webDocument() {
    return {
      _: 'webDocument',
      url: this.readString(),
      access_hash: this.readLong(),
      size: this.readInt(),
      mime_type: this.readString(),
      attributes: this.readObject(),
    }
  }

  inputWebDocument() {
    return {
      _: 'inputWebDocument',
      url: this.readString(),
      size: this.readInt(),
      mime_type: this.readString(),
      attributes: this.readObject(),
    }
  }

  inputWebFileLocation() {
    return {
      _: 'inputWebFileLocation',
      url: this.readString(),
      access_hash: this.readLong(),
    }
  }

  upload_webFile() {
    return {
      _: 'upload.webFile',
      size: this.readInt(),
      mime_type: this.readString(),
      file_type: this.readObject(),
      mtime: this.readInt(),
      bytes: this.readObject(),
    }
  }

  payments_paymentForm() {
    const flags = this.readInt();
    return {
      _: 'payments.paymentForm',
      can_save_credentials: !!(flags & 0x4),
      password_missing: !!(flags & 0x8),
      bot_id: this.readInt(),
      invoice: this.readObject(),
      provider_id: this.readInt(),
      url: this.readString(),
      native_provider: (flags & 0x16) ? this.readString() : undefined,
      native_params: (flags & 0x16) ? this.readObject() : undefined,
      saved_info: (flags & 0x1) ? this.readObject() : undefined,
      saved_credentials: (flags & 0x2) ? this.readObject() : undefined,
      users: this.readObject(),
    }
  }

  payments_validatedRequestedInfo() {
    const flags = this.readInt();
    return {
      _: 'payments.validatedRequestedInfo',
      id: (flags & 0x1) ? this.readString() : undefined,
      shipping_options: (flags & 0x2) ? this.readObject() : undefined,
    }
  }

  payments_paymentResult() {
    return {
      _: 'payments.paymentResult',
      updates: this.readObject(),
    }
  }

  payments_paymentReceipt() {
    const flags = this.readInt();
    return {
      _: 'payments.paymentReceipt',
      date: this.readInt(),
      bot_id: this.readInt(),
      invoice: this.readObject(),
      provider_id: this.readInt(),
      info: (flags & 0x1) ? this.readObject() : undefined,
      shipping: (flags & 0x2) ? this.readObject() : undefined,
      currency: this.readString(),
      total_amount: this.readLong(),
      credentials_title: this.readString(),
      users: this.readObject(),
    }
  }

  payments_savedInfo() {
    const flags = this.readInt();
    return {
      _: 'payments.savedInfo',
      has_saved_credentials: !!(flags & 0x2),
      saved_info: (flags & 0x1) ? this.readObject() : undefined,
    }
  }

  inputPaymentCredentialsSaved() {
    return {
      _: 'inputPaymentCredentialsSaved',
      id: this.readString(),
      tmp_password: this.readObject(),
    }
  }

  inputPaymentCredentials() {
    const flags = this.readInt();
    return {
      _: 'inputPaymentCredentials',
      save: !!(flags & 0x1),
      data: this.readObject(),
    }
  }

  account_tmpPassword() {
    return {
      _: 'account.tmpPassword',
      tmp_password: this.readObject(),
      valid_until: this.readInt(),
    }
  }

  shippingOption() {
    return {
      _: 'shippingOption',
      id: this.readString(),
      title: this.readString(),
      prices: this.readObject(),
    }
  }

  updateBotShippingQuery() {
    return {
      _: 'updateBotShippingQuery',
      query_id: this.readLong(),
      user_id: this.readInt(),
      payload: this.readObject(),
      shipping_address: this.readObject(),
    }
  }

  updateBotPrecheckoutQuery() {
    const flags = this.readInt();
    return {
      _: 'updateBotPrecheckoutQuery',
      query_id: this.readLong(),
      user_id: this.readInt(),
      payload: this.readObject(),
      info: (flags & 0x1) ? this.readObject() : undefined,
      shipping_option_id: (flags & 0x2) ? this.readString() : undefined,
      currency: this.readString(),
      total_amount: this.readLong(),
    }
  }

  inputStickerSetItem() {
    const flags = this.readInt();
    return {
      _: 'inputStickerSetItem',
      document: this.readObject(),
      emoji: this.readString(),
      mask_coords: (flags & 0x1) ? this.readObject() : undefined,
    }
  }

  updatePhoneCall() {
    return {
      _: 'updatePhoneCall',
      phone_call: this.readObject(),
    }
  }

  inputPhoneCall() {
    return {
      _: 'inputPhoneCall',
      id: this.readLong(),
      access_hash: this.readLong(),
    }
  }

  phoneCallEmpty() {
    return {
      _: 'phoneCallEmpty',
      id: this.readLong(),
    }
  }

  phoneCallWaiting() {
    const flags = this.readInt();
    return {
      _: 'phoneCallWaiting',
      video: !!(flags & 0x32),
      id: this.readLong(),
      access_hash: this.readLong(),
      date: this.readInt(),
      admin_id: this.readInt(),
      participant_id: this.readInt(),
      protocol: this.readObject(),
      receive_date: (flags & 0x1) ? this.readInt() : undefined,
    }
  }

  phoneCallRequested() {
    const flags = this.readInt();
    return {
      _: 'phoneCallRequested',
      video: !!(flags & 0x32),
      id: this.readLong(),
      access_hash: this.readLong(),
      date: this.readInt(),
      admin_id: this.readInt(),
      participant_id: this.readInt(),
      g_a_hash: this.readObject(),
      protocol: this.readObject(),
    }
  }

  phoneCallAccepted() {
    const flags = this.readInt();
    return {
      _: 'phoneCallAccepted',
      video: !!(flags & 0x32),
      id: this.readLong(),
      access_hash: this.readLong(),
      date: this.readInt(),
      admin_id: this.readInt(),
      participant_id: this.readInt(),
      g_b: this.readObject(),
      protocol: this.readObject(),
    }
  }

  phoneCall() {
    const flags = this.readInt();
    return {
      _: 'phoneCall',
      p2p_allowed: !!(flags & 0x32),
      id: this.readLong(),
      access_hash: this.readLong(),
      date: this.readInt(),
      admin_id: this.readInt(),
      participant_id: this.readInt(),
      g_a_or_b: this.readObject(),
      key_fingerprint: this.readLong(),
      protocol: this.readObject(),
      connections: this.readObject(),
      start_date: this.readInt(),
    }
  }

  phoneCallDiscarded() {
    const flags = this.readInt();
    return {
      _: 'phoneCallDiscarded',
      need_rating: !!(flags & 0x4),
      need_debug: !!(flags & 0x8),
      video: !!(flags & 0x32),
      id: this.readLong(),
      reason: (flags & 0x1) ? this.readObject() : undefined,
      duration: (flags & 0x2) ? this.readInt() : undefined,
    }
  }

  phoneConnection() {
    return {
      _: 'phoneConnection',
      id: this.readLong(),
      ip: this.readString(),
      ipv6: this.readString(),
      port: this.readInt(),
      peer_tag: this.readObject(),
    }
  }

  phoneCallProtocol() {
    const flags = this.readInt();
    return {
      _: 'phoneCallProtocol',
      udp_p2p: !!(flags & 0x1),
      udp_reflector: !!(flags & 0x2),
      min_layer: this.readInt(),
      max_layer: this.readInt(),
    }
  }

  phone_phoneCall() {
    return {
      _: 'phone.phoneCall',
      phone_call: this.readObject(),
      users: this.readObject(),
    }
  }

  inputMessagesFilterPhoneCalls() {
    const flags = this.readInt();
    return {
      _: 'inputMessagesFilterPhoneCalls',
      missed: !!(flags & 0x1),
    }
  }

  messageActionPhoneCall() {
    const flags = this.readInt();
    return {
      _: 'messageActionPhoneCall',
      video: !!(flags & 0x4),
      call_id: this.readLong(),
      reason: (flags & 0x1) ? this.readObject() : undefined,
      duration: (flags & 0x2) ? this.readInt() : undefined,
    }
  }

  inputMessagesFilterRoundVoice() {
    return {
      _: 'inputMessagesFilterRoundVoice',
    }
  }

  inputMessagesFilterRoundVideo() {
    return {
      _: 'inputMessagesFilterRoundVideo',
    }
  }

  sendMessageRecordRoundAction() {
    return {
      _: 'sendMessageRecordRoundAction',
    }
  }

  sendMessageUploadRoundAction() {
    return {
      _: 'sendMessageUploadRoundAction',
      progress: this.readInt(),
    }
  }

  upload_fileCdnRedirect() {
    return {
      _: 'upload.fileCdnRedirect',
      dc_id: this.readInt(),
      file_token: this.readObject(),
      encryption_key: this.readObject(),
      encryption_iv: this.readObject(),
      file_hashes: this.readObject(),
    }
  }

  upload_cdnFileReuploadNeeded() {
    return {
      _: 'upload.cdnFileReuploadNeeded',
      request_token: this.readObject(),
    }
  }

  upload_cdnFile() {
    return {
      _: 'upload.cdnFile',
      bytes: this.readObject(),
    }
  }

  cdnPublicKey() {
    return {
      _: 'cdnPublicKey',
      dc_id: this.readInt(),
      public_key: this.readString(),
    }
  }

  cdnConfig() {
    return {
      _: 'cdnConfig',
      public_keys: this.readObject(),
    }
  }

  pageBlockChannel() {
    return {
      _: 'pageBlockChannel',
      channel: this.readObject(),
    }
  }

  langPackString() {
    return {
      _: 'langPackString',
      key: this.readString(),
      value: this.readString(),
    }
  }

  langPackStringPluralized() {
    const flags = this.readInt();
    return {
      _: 'langPackStringPluralized',
      key: this.readString(),
      zero_value: (flags & 0x1) ? this.readString() : undefined,
      one_value: (flags & 0x2) ? this.readString() : undefined,
      two_value: (flags & 0x4) ? this.readString() : undefined,
      few_value: (flags & 0x8) ? this.readString() : undefined,
      many_value: (flags & 0x16) ? this.readString() : undefined,
      other_value: this.readString(),
    }
  }

  langPackStringDeleted() {
    return {
      _: 'langPackStringDeleted',
      key: this.readString(),
    }
  }

  langPackDifference() {
    return {
      _: 'langPackDifference',
      lang_code: this.readString(),
      from_version: this.readInt(),
      version: this.readInt(),
      strings: this.readObject(),
    }
  }

  langPackLanguage() {
    const flags = this.readInt();
    return {
      _: 'langPackLanguage',
      official: !!(flags & 0x1),
      rtl: !!(flags & 0x4),
      beta: !!(flags & 0x8),
      name: this.readString(),
      native_name: this.readString(),
      lang_code: this.readString(),
      base_lang_code: (flags & 0x2) ? this.readString() : undefined,
      plural_code: this.readString(),
      strings_count: this.readInt(),
      translated_count: this.readInt(),
      translations_url: this.readString(),
    }
  }

  updateLangPackTooLong() {
    return {
      _: 'updateLangPackTooLong',
      lang_code: this.readString(),
    }
  }

  updateLangPack() {
    return {
      _: 'updateLangPack',
      difference: this.readObject(),
    }
  }

  channelParticipantAdmin() {
    const flags = this.readInt();
    return {
      _: 'channelParticipantAdmin',
      can_edit: !!(flags & 0x1),
      self: !!(flags & 0x2),
      user_id: this.readInt(),
      inviter_id: (flags & 0x2) ? this.readInt() : undefined,
      promoted_by: this.readInt(),
      date: this.readInt(),
      admin_rights: this.readObject(),
      rank: (flags & 0x4) ? this.readString() : undefined,
    }
  }

  channelParticipantBanned() {
    const flags = this.readInt();
    return {
      _: 'channelParticipantBanned',
      left: !!(flags & 0x1),
      user_id: this.readInt(),
      kicked_by: this.readInt(),
      date: this.readInt(),
      banned_rights: this.readObject(),
    }
  }

  channelParticipantsBanned() {
    return {
      _: 'channelParticipantsBanned',
      q: this.readString(),
    }
  }

  channelParticipantsSearch() {
    return {
      _: 'channelParticipantsSearch',
      q: this.readString(),
    }
  }

  channelAdminLogEventActionChangeTitle() {
    return {
      _: 'channelAdminLogEventActionChangeTitle',
      prev_value: this.readString(),
      new_value: this.readString(),
    }
  }

  channelAdminLogEventActionChangeAbout() {
    return {
      _: 'channelAdminLogEventActionChangeAbout',
      prev_value: this.readString(),
      new_value: this.readString(),
    }
  }

  channelAdminLogEventActionChangeUsername() {
    return {
      _: 'channelAdminLogEventActionChangeUsername',
      prev_value: this.readString(),
      new_value: this.readString(),
    }
  }

  channelAdminLogEventActionChangePhoto() {
    return {
      _: 'channelAdminLogEventActionChangePhoto',
      prev_photo: this.readObject(),
      new_photo: this.readObject(),
    }
  }

  channelAdminLogEventActionToggleInvites() {
    return {
      _: 'channelAdminLogEventActionToggleInvites',
      new_value: this.readObject(),
    }
  }

  channelAdminLogEventActionToggleSignatures() {
    return {
      _: 'channelAdminLogEventActionToggleSignatures',
      new_value: this.readObject(),
    }
  }

  channelAdminLogEventActionUpdatePinned() {
    return {
      _: 'channelAdminLogEventActionUpdatePinned',
      message: this.readObject(),
    }
  }

  channelAdminLogEventActionEditMessage() {
    return {
      _: 'channelAdminLogEventActionEditMessage',
      prev_message: this.readObject(),
      new_message: this.readObject(),
    }
  }

  channelAdminLogEventActionDeleteMessage() {
    return {
      _: 'channelAdminLogEventActionDeleteMessage',
      message: this.readObject(),
    }
  }

  channelAdminLogEventActionParticipantJoin() {
    return {
      _: 'channelAdminLogEventActionParticipantJoin',
    }
  }

  channelAdminLogEventActionParticipantLeave() {
    return {
      _: 'channelAdminLogEventActionParticipantLeave',
    }
  }

  channelAdminLogEventActionParticipantInvite() {
    return {
      _: 'channelAdminLogEventActionParticipantInvite',
      participant: this.readObject(),
    }
  }

  channelAdminLogEventActionParticipantToggleBan() {
    return {
      _: 'channelAdminLogEventActionParticipantToggleBan',
      prev_participant: this.readObject(),
      new_participant: this.readObject(),
    }
  }

  channelAdminLogEventActionParticipantToggleAdmin() {
    return {
      _: 'channelAdminLogEventActionParticipantToggleAdmin',
      prev_participant: this.readObject(),
      new_participant: this.readObject(),
    }
  }

  channelAdminLogEvent() {
    return {
      _: 'channelAdminLogEvent',
      id: this.readLong(),
      date: this.readInt(),
      user_id: this.readInt(),
      action: this.readObject(),
    }
  }

  channels_adminLogResults() {
    return {
      _: 'channels.adminLogResults',
      events: this.readObject(),
      chats: this.readObject(),
      users: this.readObject(),
    }
  }

  channelAdminLogEventsFilter() {
    const flags = this.readInt();
    return {
      _: 'channelAdminLogEventsFilter',
      join: !!(flags & 0x1),
      leave: !!(flags & 0x2),
      invite: !!(flags & 0x4),
      ban: !!(flags & 0x8),
      unban: !!(flags & 0x16),
      kick: !!(flags & 0x32),
      unkick: !!(flags & 0x64),
      promote: !!(flags & 0x128),
      demote: !!(flags & 0x256),
      info: !!(flags & 0x512),
      settings: !!(flags & 0x1024),
      pinned: !!(flags & 0x2048),
      edit: !!(flags & 0x4096),
      delete: !!(flags & 0x8192),
    }
  }

  topPeerCategoryPhoneCalls() {
    return {
      _: 'topPeerCategoryPhoneCalls',
    }
  }

  pageBlockAudio() {
    return {
      _: 'pageBlockAudio',
      audio_id: this.readLong(),
      caption: this.readObject(),
    }
  }

  popularContact() {
    return {
      _: 'popularContact',
      client_id: this.readLong(),
      importers: this.readInt(),
    }
  }

  messageActionScreenshotTaken() {
    return {
      _: 'messageActionScreenshotTaken',
    }
  }

  messages_favedStickersNotModified() {
    return {
      _: 'messages.favedStickersNotModified',
    }
  }

  messages_favedStickers() {
    return {
      _: 'messages.favedStickers',
      hash: this.readInt(),
      packs: this.readObject(),
      stickers: this.readObject(),
    }
  }

  updateFavedStickers() {
    return {
      _: 'updateFavedStickers',
    }
  }

  updateChannelReadMessagesContents() {
    return {
      _: 'updateChannelReadMessagesContents',
      channel_id: this.readInt(),
      messages: this.readObject(),
    }
  }

  inputMessagesFilterMyMentions() {
    return {
      _: 'inputMessagesFilterMyMentions',
    }
  }

  updateContactsReset() {
    return {
      _: 'updateContactsReset',
    }
  }

  channelAdminLogEventActionChangeStickerSet() {
    return {
      _: 'channelAdminLogEventActionChangeStickerSet',
      prev_stickerset: this.readObject(),
      new_stickerset: this.readObject(),
    }
  }

  messageActionCustomAction() {
    return {
      _: 'messageActionCustomAction',
      message: this.readString(),
    }
  }

  inputPaymentCredentialsApplePay() {
    return {
      _: 'inputPaymentCredentialsApplePay',
      payment_data: this.readObject(),
    }
  }

  inputPaymentCredentialsAndroidPay() {
    return {
      _: 'inputPaymentCredentialsAndroidPay',
      payment_token: this.readObject(),
      google_transaction_id: this.readString(),
    }
  }

  inputMessagesFilterGeo() {
    return {
      _: 'inputMessagesFilterGeo',
    }
  }

  inputMessagesFilterContacts() {
    return {
      _: 'inputMessagesFilterContacts',
    }
  }

  updateChannelAvailableMessages() {
    return {
      _: 'updateChannelAvailableMessages',
      channel_id: this.readInt(),
      available_min_id: this.readInt(),
    }
  }

  channelAdminLogEventActionTogglePreHistoryHidden() {
    return {
      _: 'channelAdminLogEventActionTogglePreHistoryHidden',
      new_value: this.readObject(),
    }
  }

  inputMediaGeoLive() {
    const flags = this.readInt();
    return {
      _: 'inputMediaGeoLive',
      stopped: !!(flags & 0x1),
      geo_point: this.readObject(),
      period: (flags & 0x2) ? this.readInt() : undefined,
    }
  }

  messageMediaGeoLive() {
    return {
      _: 'messageMediaGeoLive',
      geo: this.readObject(),
      period: this.readInt(),
    }
  }

  recentMeUrlUnknown() {
    return {
      _: 'recentMeUrlUnknown',
      url: this.readString(),
    }
  }

  recentMeUrlUser() {
    return {
      _: 'recentMeUrlUser',
      url: this.readString(),
      user_id: this.readInt(),
    }
  }

  recentMeUrlChat() {
    return {
      _: 'recentMeUrlChat',
      url: this.readString(),
      chat_id: this.readInt(),
    }
  }

  recentMeUrlChatInvite() {
    return {
      _: 'recentMeUrlChatInvite',
      url: this.readString(),
      chat_invite: this.readObject(),
    }
  }

  recentMeUrlStickerSet() {
    return {
      _: 'recentMeUrlStickerSet',
      url: this.readString(),
      set: this.readObject(),
    }
  }

  help_recentMeUrls() {
    return {
      _: 'help.recentMeUrls',
      urls: this.readObject(),
      chats: this.readObject(),
      users: this.readObject(),
    }
  }

  channels_channelParticipantsNotModified() {
    return {
      _: 'channels.channelParticipantsNotModified',
    }
  }

  messages_messagesNotModified() {
    return {
      _: 'messages.messagesNotModified',
      count: this.readInt(),
    }
  }

  inputSingleMedia() {
    const flags = this.readInt();
    return {
      _: 'inputSingleMedia',
      media: this.readObject(),
      random_id: this.readLong(),
      message: this.readString(),
      entities: (flags & 0x1) ? this.readObject() : undefined,
    }
  }

  webAuthorization() {
    return {
      _: 'webAuthorization',
      hash: this.readLong(),
      bot_id: this.readInt(),
      domain: this.readString(),
      browser: this.readString(),
      platform: this.readString(),
      date_created: this.readInt(),
      date_active: this.readInt(),
      ip: this.readString(),
      region: this.readString(),
    }
  }

  account_webAuthorizations() {
    return {
      _: 'account.webAuthorizations',
      authorizations: this.readObject(),
      users: this.readObject(),
    }
  }

  inputMessageID() {
    return {
      _: 'inputMessageID',
      id: this.readInt(),
    }
  }

  inputMessageReplyTo() {
    return {
      _: 'inputMessageReplyTo',
      id: this.readInt(),
    }
  }

  inputMessagePinned() {
    return {
      _: 'inputMessagePinned',
    }
  }

  messageEntityPhone() {
    return {
      _: 'messageEntityPhone',
      offset: this.readInt(),
      length: this.readInt(),
    }
  }

  messageEntityCashtag() {
    return {
      _: 'messageEntityCashtag',
      offset: this.readInt(),
      length: this.readInt(),
    }
  }

  messageActionBotAllowed() {
    return {
      _: 'messageActionBotAllowed',
      domain: this.readString(),
    }
  }

  inputDialogPeer() {
    return {
      _: 'inputDialogPeer',
      peer: this.readObject(),
    }
  }

  dialogPeer() {
    return {
      _: 'dialogPeer',
      peer: this.readObject(),
    }
  }

  messages_foundStickerSetsNotModified() {
    return {
      _: 'messages.foundStickerSetsNotModified',
    }
  }

  messages_foundStickerSets() {
    return {
      _: 'messages.foundStickerSets',
      hash: this.readInt(),
      sets: this.readObject(),
    }
  }

  fileHash() {
    return {
      _: 'fileHash',
      offset: this.readInt(),
      limit: this.readInt(),
      hash: this.readObject(),
    }
  }

  webDocumentNoProxy() {
    return {
      _: 'webDocumentNoProxy',
      url: this.readString(),
      size: this.readInt(),
      mime_type: this.readString(),
      attributes: this.readObject(),
    }
  }

  inputClientProxy() {
    return {
      _: 'inputClientProxy',
      address: this.readString(),
      port: this.readInt(),
    }
  }

  help_proxyDataEmpty() {
    return {
      _: 'help.proxyDataEmpty',
      expires: this.readInt(),
    }
  }

  help_proxyDataPromo() {
    return {
      _: 'help.proxyDataPromo',
      expires: this.readInt(),
      peer: this.readObject(),
      chats: this.readObject(),
      users: this.readObject(),
    }
  }

  help_termsOfServiceUpdateEmpty() {
    return {
      _: 'help.termsOfServiceUpdateEmpty',
      expires: this.readInt(),
    }
  }

  help_termsOfServiceUpdate() {
    return {
      _: 'help.termsOfServiceUpdate',
      expires: this.readInt(),
      terms_of_service: this.readObject(),
    }
  }

  inputSecureFileUploaded() {
    return {
      _: 'inputSecureFileUploaded',
      id: this.readLong(),
      parts: this.readInt(),
      md5_checksum: this.readString(),
      file_hash: this.readObject(),
      secret: this.readObject(),
    }
  }

  inputSecureFile() {
    return {
      _: 'inputSecureFile',
      id: this.readLong(),
      access_hash: this.readLong(),
    }
  }

  inputSecureFileLocation() {
    return {
      _: 'inputSecureFileLocation',
      id: this.readLong(),
      access_hash: this.readLong(),
    }
  }

  secureFileEmpty() {
    return {
      _: 'secureFileEmpty',
    }
  }

  secureFile() {
    return {
      _: 'secureFile',
      id: this.readLong(),
      access_hash: this.readLong(),
      size: this.readInt(),
      dc_id: this.readInt(),
      date: this.readInt(),
      file_hash: this.readObject(),
      secret: this.readObject(),
    }
  }

  secureData() {
    return {
      _: 'secureData',
      data: this.readObject(),
      data_hash: this.readObject(),
      secret: this.readObject(),
    }
  }

  securePlainPhone() {
    return {
      _: 'securePlainPhone',
      phone: this.readString(),
    }
  }

  securePlainEmail() {
    return {
      _: 'securePlainEmail',
      email: this.readString(),
    }
  }

  secureValueTypePersonalDetails() {
    return {
      _: 'secureValueTypePersonalDetails',
    }
  }

  secureValueTypePassport() {
    return {
      _: 'secureValueTypePassport',
    }
  }

  secureValueTypeDriverLicense() {
    return {
      _: 'secureValueTypeDriverLicense',
    }
  }

  secureValueTypeIdentityCard() {
    return {
      _: 'secureValueTypeIdentityCard',
    }
  }

  secureValueTypeInternalPassport() {
    return {
      _: 'secureValueTypeInternalPassport',
    }
  }

  secureValueTypeAddress() {
    return {
      _: 'secureValueTypeAddress',
    }
  }

  secureValueTypeUtilityBill() {
    return {
      _: 'secureValueTypeUtilityBill',
    }
  }

  secureValueTypeBankStatement() {
    return {
      _: 'secureValueTypeBankStatement',
    }
  }

  secureValueTypeRentalAgreement() {
    return {
      _: 'secureValueTypeRentalAgreement',
    }
  }

  secureValueTypePassportRegistration() {
    return {
      _: 'secureValueTypePassportRegistration',
    }
  }

  secureValueTypeTemporaryRegistration() {
    return {
      _: 'secureValueTypeTemporaryRegistration',
    }
  }

  secureValueTypePhone() {
    return {
      _: 'secureValueTypePhone',
    }
  }

  secureValueTypeEmail() {
    return {
      _: 'secureValueTypeEmail',
    }
  }

  secureValue() {
    const flags = this.readInt();
    return {
      _: 'secureValue',
      type: this.readObject(),
      data: (flags & 0x1) ? this.readObject() : undefined,
      front_side: (flags & 0x2) ? this.readObject() : undefined,
      reverse_side: (flags & 0x4) ? this.readObject() : undefined,
      selfie: (flags & 0x8) ? this.readObject() : undefined,
      translation: (flags & 0x64) ? this.readObject() : undefined,
      files: (flags & 0x16) ? this.readObject() : undefined,
      plain_data: (flags & 0x32) ? this.readObject() : undefined,
      hash: this.readObject(),
    }
  }

  inputSecureValue() {
    const flags = this.readInt();
    return {
      _: 'inputSecureValue',
      type: this.readObject(),
      data: (flags & 0x1) ? this.readObject() : undefined,
      front_side: (flags & 0x2) ? this.readObject() : undefined,
      reverse_side: (flags & 0x4) ? this.readObject() : undefined,
      selfie: (flags & 0x8) ? this.readObject() : undefined,
      translation: (flags & 0x64) ? this.readObject() : undefined,
      files: (flags & 0x16) ? this.readObject() : undefined,
      plain_data: (flags & 0x32) ? this.readObject() : undefined,
    }
  }

  secureValueHash() {
    return {
      _: 'secureValueHash',
      type: this.readObject(),
      hash: this.readObject(),
    }
  }

  secureValueErrorData() {
    return {
      _: 'secureValueErrorData',
      type: this.readObject(),
      data_hash: this.readObject(),
      field: this.readString(),
      text: this.readString(),
    }
  }

  secureValueErrorFrontSide() {
    return {
      _: 'secureValueErrorFrontSide',
      type: this.readObject(),
      file_hash: this.readObject(),
      text: this.readString(),
    }
  }

  secureValueErrorReverseSide() {
    return {
      _: 'secureValueErrorReverseSide',
      type: this.readObject(),
      file_hash: this.readObject(),
      text: this.readString(),
    }
  }

  secureValueErrorSelfie() {
    return {
      _: 'secureValueErrorSelfie',
      type: this.readObject(),
      file_hash: this.readObject(),
      text: this.readString(),
    }
  }

  secureValueErrorFile() {
    return {
      _: 'secureValueErrorFile',
      type: this.readObject(),
      file_hash: this.readObject(),
      text: this.readString(),
    }
  }

  secureValueErrorFiles() {
    return {
      _: 'secureValueErrorFiles',
      type: this.readObject(),
      file_hash: this.readObject(),
      text: this.readString(),
    }
  }

  secureCredentialsEncrypted() {
    return {
      _: 'secureCredentialsEncrypted',
      data: this.readObject(),
      hash: this.readObject(),
      secret: this.readObject(),
    }
  }

  account_authorizationForm() {
    const flags = this.readInt();
    return {
      _: 'account.authorizationForm',
      required_types: this.readObject(),
      values: this.readObject(),
      errors: this.readObject(),
      users: this.readObject(),
      privacy_policy_url: (flags & 0x1) ? this.readString() : undefined,
    }
  }

  account_sentEmailCode() {
    return {
      _: 'account.sentEmailCode',
      email_pattern: this.readString(),
      length: this.readInt(),
    }
  }

  messageActionSecureValuesSentMe() {
    return {
      _: 'messageActionSecureValuesSentMe',
      values: this.readObject(),
      credentials: this.readObject(),
    }
  }

  messageActionSecureValuesSent() {
    return {
      _: 'messageActionSecureValuesSent',
      types: this.readObject(),
    }
  }

  help_deepLinkInfoEmpty() {
    return {
      _: 'help.deepLinkInfoEmpty',
    }
  }

  help_deepLinkInfo() {
    const flags = this.readInt();
    return {
      _: 'help.deepLinkInfo',
      update_app: !!(flags & 0x1),
      message: this.readString(),
      entities: (flags & 0x2) ? this.readObject() : undefined,
    }
  }

  savedPhoneContact() {
    return {
      _: 'savedPhoneContact',
      phone: this.readString(),
      first_name: this.readString(),
      last_name: this.readString(),
      date: this.readInt(),
    }
  }

  account_takeout() {
    return {
      _: 'account.takeout',
      id: this.readLong(),
    }
  }

  inputTakeoutFileLocation() {
    return {
      _: 'inputTakeoutFileLocation',
    }
  }

  updateDialogUnreadMark() {
    const flags = this.readInt();
    return {
      _: 'updateDialogUnreadMark',
      unread: !!(flags & 0x1),
      peer: this.readObject(),
    }
  }

  messages_dialogsNotModified() {
    return {
      _: 'messages.dialogsNotModified',
      count: this.readInt(),
    }
  }

  inputWebFileGeoPointLocation() {
    return {
      _: 'inputWebFileGeoPointLocation',
      geo_point: this.readObject(),
      access_hash: this.readLong(),
      w: this.readInt(),
      h: this.readInt(),
      zoom: this.readInt(),
      scale: this.readInt(),
    }
  }

  contacts_topPeersDisabled() {
    return {
      _: 'contacts.topPeersDisabled',
    }
  }

  inputReportReasonCopyright() {
    return {
      _: 'inputReportReasonCopyright',
    }
  }

  passwordKdfAlgoUnknown() {
    return {
      _: 'passwordKdfAlgoUnknown',
    }
  }

  securePasswordKdfAlgoUnknown() {
    return {
      _: 'securePasswordKdfAlgoUnknown',
    }
  }

  securePasswordKdfAlgoPBKDF2HMACSHA512iter100000() {
    return {
      _: 'securePasswordKdfAlgoPBKDF2HMACSHA512iter100000',
      salt: this.readObject(),
    }
  }

  securePasswordKdfAlgoSHA512() {
    return {
      _: 'securePasswordKdfAlgoSHA512',
      salt: this.readObject(),
    }
  }

  secureSecretSettings() {
    return {
      _: 'secureSecretSettings',
      secure_algo: this.readObject(),
      secure_secret: this.readObject(),
      secure_secret_id: this.readLong(),
    }
  }

  passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow() {
    return {
      _: 'passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow',
      salt1: this.readObject(),
      salt2: this.readObject(),
      g: this.readInt(),
      p: this.readObject(),
    }
  }

  inputCheckPasswordEmpty() {
    return {
      _: 'inputCheckPasswordEmpty',
    }
  }

  inputCheckPasswordSRP() {
    return {
      _: 'inputCheckPasswordSRP',
      srp_id: this.readLong(),
      A: this.readObject(),
      M1: this.readObject(),
    }
  }

  secureValueError() {
    return {
      _: 'secureValueError',
      type: this.readObject(),
      hash: this.readObject(),
      text: this.readString(),
    }
  }

  secureValueErrorTranslationFile() {
    return {
      _: 'secureValueErrorTranslationFile',
      type: this.readObject(),
      file_hash: this.readObject(),
      text: this.readString(),
    }
  }

  secureValueErrorTranslationFiles() {
    return {
      _: 'secureValueErrorTranslationFiles',
      type: this.readObject(),
      file_hash: this.readObject(),
      text: this.readString(),
    }
  }

  secureRequiredType() {
    const flags = this.readInt();
    return {
      _: 'secureRequiredType',
      native_names: !!(flags & 0x1),
      selfie_required: !!(flags & 0x2),
      translation_required: !!(flags & 0x4),
      type: this.readObject(),
    }
  }

  secureRequiredTypeOneOf() {
    return {
      _: 'secureRequiredTypeOneOf',
      types: this.readObject(),
    }
  }

  help_passportConfigNotModified() {
    return {
      _: 'help.passportConfigNotModified',
    }
  }

  help_passportConfig() {
    return {
      _: 'help.passportConfig',
      hash: this.readInt(),
      countries_langs: this.readObject(),
    }
  }

  inputAppEvent() {
    return {
      _: 'inputAppEvent',
      time: this.readObject(),
      type: this.readString(),
      peer: this.readLong(),
      data: this.readObject(),
    }
  }

  jsonObjectValue() {
    return {
      _: 'jsonObjectValue',
      key: this.readString(),
      value: this.readObject(),
    }
  }

  jsonNull() {
    return {
      _: 'jsonNull',
    }
  }

  jsonBool() {
    return {
      _: 'jsonBool',
      value: this.readObject(),
    }
  }

  jsonNumber() {
    return {
      _: 'jsonNumber',
      value: this.readObject(),
    }
  }

  jsonString() {
    return {
      _: 'jsonString',
      value: this.readString(),
    }
  }

  jsonArray() {
    return {
      _: 'jsonArray',
      value: this.readObject(),
    }
  }

  jsonObject() {
    return {
      _: 'jsonObject',
      value: this.readObject(),
    }
  }

  updateUserPinnedMessage() {
    return {
      _: 'updateUserPinnedMessage',
      user_id: this.readInt(),
      id: this.readInt(),
    }
  }

  updateChatPinnedMessage() {
    return {
      _: 'updateChatPinnedMessage',
      chat_id: this.readInt(),
      id: this.readInt(),
      version: this.readInt(),
    }
  }

  inputNotifyBroadcasts() {
    return {
      _: 'inputNotifyBroadcasts',
    }
  }

  notifyBroadcasts() {
    return {
      _: 'notifyBroadcasts',
    }
  }

  textSubscript() {
    return {
      _: 'textSubscript',
      text: this.readObject(),
    }
  }

  textSuperscript() {
    return {
      _: 'textSuperscript',
      text: this.readObject(),
    }
  }

  textMarked() {
    return {
      _: 'textMarked',
      text: this.readObject(),
    }
  }

  textPhone() {
    return {
      _: 'textPhone',
      text: this.readObject(),
      phone: this.readString(),
    }
  }

  textImage() {
    return {
      _: 'textImage',
      document_id: this.readLong(),
      w: this.readInt(),
      h: this.readInt(),
    }
  }

  pageBlockKicker() {
    return {
      _: 'pageBlockKicker',
      text: this.readObject(),
    }
  }

  pageTableCell() {
    const flags = this.readInt();
    return {
      _: 'pageTableCell',
      header: !!(flags & 0x1),
      align_center: !!(flags & 0x8),
      align_right: !!(flags & 0x16),
      valign_middle: !!(flags & 0x32),
      valign_bottom: !!(flags & 0x64),
      text: (flags & 0x128) ? this.readObject() : undefined,
      colspan: (flags & 0x2) ? this.readInt() : undefined,
      rowspan: (flags & 0x4) ? this.readInt() : undefined,
    }
  }

  pageTableRow() {
    return {
      _: 'pageTableRow',
      cells: this.readObject(),
    }
  }

  pageBlockTable() {
    const flags = this.readInt();
    return {
      _: 'pageBlockTable',
      bordered: !!(flags & 0x1),
      striped: !!(flags & 0x2),
      title: this.readObject(),
      rows: this.readObject(),
    }
  }

  pageCaption() {
    return {
      _: 'pageCaption',
      text: this.readObject(),
      credit: this.readObject(),
    }
  }

  pageListItemText() {
    return {
      _: 'pageListItemText',
      text: this.readObject(),
    }
  }

  pageListItemBlocks() {
    return {
      _: 'pageListItemBlocks',
      blocks: this.readObject(),
    }
  }

  pageListOrderedItemText() {
    return {
      _: 'pageListOrderedItemText',
      num: this.readString(),
      text: this.readObject(),
    }
  }

  pageListOrderedItemBlocks() {
    return {
      _: 'pageListOrderedItemBlocks',
      num: this.readString(),
      blocks: this.readObject(),
    }
  }

  pageBlockOrderedList() {
    return {
      _: 'pageBlockOrderedList',
      items: this.readObject(),
    }
  }

  pageBlockDetails() {
    const flags = this.readInt();
    return {
      _: 'pageBlockDetails',
      open: !!(flags & 0x1),
      blocks: this.readObject(),
      title: this.readObject(),
    }
  }

  pageRelatedArticle() {
    const flags = this.readInt();
    return {
      _: 'pageRelatedArticle',
      url: this.readString(),
      webpage_id: this.readLong(),
      title: (flags & 0x1) ? this.readString() : undefined,
      description: (flags & 0x2) ? this.readString() : undefined,
      photo_id: (flags & 0x4) ? this.readLong() : undefined,
      author: (flags & 0x8) ? this.readString() : undefined,
      published_date: (flags & 0x16) ? this.readInt() : undefined,
    }
  }

  pageBlockRelatedArticles() {
    return {
      _: 'pageBlockRelatedArticles',
      title: this.readObject(),
      articles: this.readObject(),
    }
  }

  pageBlockMap() {
    return {
      _: 'pageBlockMap',
      geo: this.readObject(),
      zoom: this.readInt(),
      w: this.readInt(),
      h: this.readInt(),
      caption: this.readObject(),
    }
  }

  page() {
    const flags = this.readInt();
    return {
      _: 'page',
      part: !!(flags & 0x1),
      rtl: !!(flags & 0x2),
      v2: !!(flags & 0x4),
      url: this.readString(),
      blocks: this.readObject(),
      photos: this.readObject(),
      documents: this.readObject(),
    }
  }

  inputPrivacyKeyPhoneP2P() {
    return {
      _: 'inputPrivacyKeyPhoneP2P',
    }
  }

  privacyKeyPhoneP2P() {
    return {
      _: 'privacyKeyPhoneP2P',
    }
  }

  textAnchor() {
    return {
      _: 'textAnchor',
      text: this.readObject(),
      name: this.readString(),
    }
  }

  help_supportName() {
    return {
      _: 'help.supportName',
      name: this.readString(),
    }
  }

  help_userInfoEmpty() {
    return {
      _: 'help.userInfoEmpty',
    }
  }

  help_userInfo() {
    return {
      _: 'help.userInfo',
      message: this.readString(),
      entities: this.readObject(),
      author: this.readString(),
      date: this.readInt(),
    }
  }

  messageActionContactSignUp() {
    return {
      _: 'messageActionContactSignUp',
    }
  }

  updateMessagePoll() {
    const flags = this.readInt();
    return {
      _: 'updateMessagePoll',
      poll_id: this.readLong(),
      poll: (flags & 0x1) ? this.readObject() : undefined,
      results: this.readObject(),
    }
  }

  pollAnswer() {
    return {
      _: 'pollAnswer',
      text: this.readString(),
      option: this.readObject(),
    }
  }

  poll() {
    const flags = this.readInt();
    return {
      _: 'poll',
      id: this.readLong(),
      closed: !!(flags & 0x1),
      question: this.readString(),
      answers: this.readObject(),
    }
  }

  pollAnswerVoters() {
    const flags = this.readInt();
    return {
      _: 'pollAnswerVoters',
      chosen: !!(flags & 0x1),
      option: this.readObject(),
      voters: this.readInt(),
    }
  }

  pollResults() {
    const flags = this.readInt();
    return {
      _: 'pollResults',
      min: !!(flags & 0x1),
      results: (flags & 0x2) ? this.readObject() : undefined,
      total_voters: (flags & 0x4) ? this.readInt() : undefined,
    }
  }

  inputMediaPoll() {
    return {
      _: 'inputMediaPoll',
      poll: this.readObject(),
    }
  }

  messageMediaPoll() {
    return {
      _: 'messageMediaPoll',
      poll: this.readObject(),
      results: this.readObject(),
    }
  }

  chatOnlines() {
    return {
      _: 'chatOnlines',
      onlines: this.readInt(),
    }
  }

  statsURL() {
    return {
      _: 'statsURL',
      url: this.readString(),
    }
  }

  photoStrippedSize() {
    return {
      _: 'photoStrippedSize',
      type: this.readString(),
      bytes: this.readObject(),
    }
  }

  chatAdminRights() {
    const flags = this.readInt();
    return {
      _: 'chatAdminRights',
      change_info: !!(flags & 0x1),
      post_messages: !!(flags & 0x2),
      edit_messages: !!(flags & 0x4),
      delete_messages: !!(flags & 0x8),
      ban_users: !!(flags & 0x16),
      invite_users: !!(flags & 0x32),
      pin_messages: !!(flags & 0x128),
      add_admins: !!(flags & 0x512),
    }
  }

  chatBannedRights() {
    const flags = this.readInt();
    return {
      _: 'chatBannedRights',
      view_messages: !!(flags & 0x1),
      send_messages: !!(flags & 0x2),
      send_media: !!(flags & 0x4),
      send_stickers: !!(flags & 0x8),
      send_gifs: !!(flags & 0x16),
      send_games: !!(flags & 0x32),
      send_inline: !!(flags & 0x64),
      embed_links: !!(flags & 0x128),
      send_polls: !!(flags & 0x256),
      change_info: !!(flags & 0x1024),
      invite_users: !!(flags & 0x32768),
      pin_messages: !!(flags & 0x131072),
      until_date: this.readInt(),
    }
  }

  updateChatDefaultBannedRights() {
    return {
      _: 'updateChatDefaultBannedRights',
      peer: this.readObject(),
      default_banned_rights: this.readObject(),
      version: this.readInt(),
    }
  }

  inputWallPaper() {
    return {
      _: 'inputWallPaper',
      id: this.readLong(),
      access_hash: this.readLong(),
    }
  }

  inputWallPaperSlug() {
    return {
      _: 'inputWallPaperSlug',
      slug: this.readString(),
    }
  }

  channelParticipantsContacts() {
    return {
      _: 'channelParticipantsContacts',
      q: this.readString(),
    }
  }

  channelAdminLogEventActionDefaultBannedRights() {
    return {
      _: 'channelAdminLogEventActionDefaultBannedRights',
      prev_banned_rights: this.readObject(),
      new_banned_rights: this.readObject(),
    }
  }

  channelAdminLogEventActionStopPoll() {
    return {
      _: 'channelAdminLogEventActionStopPoll',
      message: this.readObject(),
    }
  }

  account_wallPapersNotModified() {
    return {
      _: 'account.wallPapersNotModified',
    }
  }

  account_wallPapers() {
    return {
      _: 'account.wallPapers',
      hash: this.readInt(),
      wallpapers: this.readObject(),
    }
  }

  codeSettings() {
    const flags = this.readInt();
    return {
      _: 'codeSettings',
      allow_flashcall: !!(flags & 0x1),
      current_number: !!(flags & 0x2),
      allow_app_hash: !!(flags & 0x16),
    }
  }

  wallPaperSettings() {
    const flags = this.readInt();
    return {
      _: 'wallPaperSettings',
      blur: !!(flags & 0x2),
      motion: !!(flags & 0x4),
      background_color: (flags & 0x1) ? this.readInt() : undefined,
      intensity: (flags & 0x8) ? this.readInt() : undefined,
    }
  }

  autoDownloadSettings() {
    const flags = this.readInt();
    return {
      _: 'autoDownloadSettings',
      disabled: !!(flags & 0x1),
      video_preload_large: !!(flags & 0x2),
      audio_preload_next: !!(flags & 0x4),
      phonecalls_less_data: !!(flags & 0x8),
      photo_size_max: this.readInt(),
      video_size_max: this.readInt(),
      file_size_max: this.readInt(),
    }
  }

  account_autoDownloadSettings() {
    return {
      _: 'account.autoDownloadSettings',
      low: this.readObject(),
      medium: this.readObject(),
      high: this.readObject(),
    }
  }

  emojiKeyword() {
    return {
      _: 'emojiKeyword',
      keyword: this.readString(),
      emoticons: this.readObject(),
    }
  }

  emojiKeywordDeleted() {
    return {
      _: 'emojiKeywordDeleted',
      keyword: this.readString(),
      emoticons: this.readObject(),
    }
  }

  emojiKeywordsDifference() {
    return {
      _: 'emojiKeywordsDifference',
      lang_code: this.readString(),
      from_version: this.readInt(),
      version: this.readInt(),
      keywords: this.readObject(),
    }
  }

  emojiURL() {
    return {
      _: 'emojiURL',
      url: this.readString(),
    }
  }

  emojiLanguage() {
    return {
      _: 'emojiLanguage',
      lang_code: this.readString(),
    }
  }

  inputPrivacyKeyForwards() {
    return {
      _: 'inputPrivacyKeyForwards',
    }
  }

  privacyKeyForwards() {
    return {
      _: 'privacyKeyForwards',
    }
  }

  inputPrivacyKeyProfilePhoto() {
    return {
      _: 'inputPrivacyKeyProfilePhoto',
    }
  }

  privacyKeyProfilePhoto() {
    return {
      _: 'privacyKeyProfilePhoto',
    }
  }

  fileLocationToBeDeprecated() {
    return {
      _: 'fileLocationToBeDeprecated',
      volume_id: this.readLong(),
      local_id: this.readInt(),
    }
  }

  inputPhotoFileLocation() {
    return {
      _: 'inputPhotoFileLocation',
      id: this.readLong(),
      access_hash: this.readLong(),
      file_reference: this.readObject(),
      thumb_size: this.readString(),
    }
  }

  inputPeerPhotoFileLocation() {
    const flags = this.readInt();
    return {
      _: 'inputPeerPhotoFileLocation',
      big: !!(flags & 0x1),
      peer: this.readObject(),
      volume_id: this.readLong(),
      local_id: this.readInt(),
    }
  }

  inputStickerSetThumb() {
    return {
      _: 'inputStickerSetThumb',
      stickerset: this.readObject(),
      volume_id: this.readLong(),
      local_id: this.readInt(),
    }
  }

  folder() {
    const flags = this.readInt();
    return {
      _: 'folder',
      autofill_new_broadcasts: !!(flags & 0x1),
      autofill_public_groups: !!(flags & 0x2),
      autofill_new_correspondents: !!(flags & 0x4),
      id: this.readInt(),
      title: this.readString(),
      photo: (flags & 0x8) ? this.readObject() : undefined,
    }
  }

  dialogFolder() {
    const flags = this.readInt();
    return {
      _: 'dialogFolder',
      pinned: !!(flags & 0x4),
      folder: this.readObject(),
      peer: this.readObject(),
      top_message: this.readInt(),
      unread_muted_peers_count: this.readInt(),
      unread_unmuted_peers_count: this.readInt(),
      unread_muted_messages_count: this.readInt(),
      unread_unmuted_messages_count: this.readInt(),
    }
  }

  inputDialogPeerFolder() {
    return {
      _: 'inputDialogPeerFolder',
      folder_id: this.readInt(),
    }
  }

  dialogPeerFolder() {
    return {
      _: 'dialogPeerFolder',
      folder_id: this.readInt(),
    }
  }

  inputFolderPeer() {
    return {
      _: 'inputFolderPeer',
      peer: this.readObject(),
      folder_id: this.readInt(),
    }
  }

  folderPeer() {
    return {
      _: 'folderPeer',
      peer: this.readObject(),
      folder_id: this.readInt(),
    }
  }

  updateFolderPeers() {
    return {
      _: 'updateFolderPeers',
      folder_peers: this.readObject(),
      pts: this.readInt(),
      pts_count: this.readInt(),
    }
  }

  inputUserFromMessage() {
    return {
      _: 'inputUserFromMessage',
      peer: this.readObject(),
      msg_id: this.readInt(),
      user_id: this.readInt(),
    }
  }

  inputChannelFromMessage() {
    return {
      _: 'inputChannelFromMessage',
      peer: this.readObject(),
      msg_id: this.readInt(),
      channel_id: this.readInt(),
    }
  }

  inputPeerUserFromMessage() {
    return {
      _: 'inputPeerUserFromMessage',
      peer: this.readObject(),
      msg_id: this.readInt(),
      user_id: this.readInt(),
    }
  }

  inputPeerChannelFromMessage() {
    return {
      _: 'inputPeerChannelFromMessage',
      peer: this.readObject(),
      msg_id: this.readInt(),
      channel_id: this.readInt(),
    }
  }

  inputPrivacyKeyPhoneNumber() {
    return {
      _: 'inputPrivacyKeyPhoneNumber',
    }
  }

  privacyKeyPhoneNumber() {
    return {
      _: 'privacyKeyPhoneNumber',
    }
  }

  topPeerCategoryForwardUsers() {
    return {
      _: 'topPeerCategoryForwardUsers',
    }
  }

  topPeerCategoryForwardChats() {
    return {
      _: 'topPeerCategoryForwardChats',
    }
  }

  channelAdminLogEventActionChangeLinkedChat() {
    return {
      _: 'channelAdminLogEventActionChangeLinkedChat',
      prev_value: this.readInt(),
      new_value: this.readInt(),
    }
  }

  messages_searchCounter() {
    const flags = this.readInt();
    return {
      _: 'messages.searchCounter',
      inexact: !!(flags & 0x2),
      filter: this.readObject(),
      count: this.readInt(),
    }
  }

  keyboardButtonUrlAuth() {
    const flags = this.readInt();
    return {
      _: 'keyboardButtonUrlAuth',
      text: this.readString(),
      fwd_text: (flags & 0x1) ? this.readString() : undefined,
      url: this.readString(),
      button_id: this.readInt(),
    }
  }

  inputKeyboardButtonUrlAuth() {
    const flags = this.readInt();
    return {
      _: 'inputKeyboardButtonUrlAuth',
      request_write_access: !!(flags & 0x1),
      text: this.readString(),
      fwd_text: (flags & 0x2) ? this.readString() : undefined,
      url: this.readString(),
      bot: this.readObject(),
    }
  }

  urlAuthResultRequest() {
    const flags = this.readInt();
    return {
      _: 'urlAuthResultRequest',
      request_write_access: !!(flags & 0x1),
      bot: this.readObject(),
      domain: this.readString(),
    }
  }

  urlAuthResultAccepted() {
    return {
      _: 'urlAuthResultAccepted',
      url: this.readString(),
    }
  }

  urlAuthResultDefault() {
    return {
      _: 'urlAuthResultDefault',
    }
  }

  inputPrivacyValueAllowChatParticipants() {
    return {
      _: 'inputPrivacyValueAllowChatParticipants',
      chats: this.readObject(),
    }
  }

  inputPrivacyValueDisallowChatParticipants() {
    return {
      _: 'inputPrivacyValueDisallowChatParticipants',
      chats: this.readObject(),
    }
  }

  privacyValueAllowChatParticipants() {
    return {
      _: 'privacyValueAllowChatParticipants',
      chats: this.readObject(),
    }
  }

  privacyValueDisallowChatParticipants() {
    return {
      _: 'privacyValueDisallowChatParticipants',
      chats: this.readObject(),
    }
  }

  messageEntityUnderline() {
    return {
      _: 'messageEntityUnderline',
      offset: this.readInt(),
      length: this.readInt(),
    }
  }

  messageEntityStrike() {
    return {
      _: 'messageEntityStrike',
      offset: this.readInt(),
      length: this.readInt(),
    }
  }

  messageEntityBlockquote() {
    return {
      _: 'messageEntityBlockquote',
      offset: this.readInt(),
      length: this.readInt(),
    }
  }

  updatePeerSettings() {
    return {
      _: 'updatePeerSettings',
      peer: this.readObject(),
      settings: this.readObject(),
    }
  }

  channelLocationEmpty() {
    return {
      _: 'channelLocationEmpty',
    }
  }

  channelLocation() {
    return {
      _: 'channelLocation',
      geo_point: this.readObject(),
      address: this.readString(),
    }
  }

  peerLocated() {
    return {
      _: 'peerLocated',
      peer: this.readObject(),
      expires: this.readInt(),
      distance: this.readInt(),
    }
  }

  updatePeerLocated() {
    return {
      _: 'updatePeerLocated',
      peers: this.readObject(),
    }
  }

  channelAdminLogEventActionChangeLocation() {
    return {
      _: 'channelAdminLogEventActionChangeLocation',
      prev_value: this.readObject(),
      new_value: this.readObject(),
    }
  }

  inputReportReasonGeoIrrelevant() {
    return {
      _: 'inputReportReasonGeoIrrelevant',
    }
  }

  channelAdminLogEventActionToggleSlowMode() {
    return {
      _: 'channelAdminLogEventActionToggleSlowMode',
      prev_value: this.readInt(),
      new_value: this.readInt(),
    }
  }

  auth_authorizationSignUpRequired() {
    const flags = this.readInt();
    return {
      _: 'auth.authorizationSignUpRequired',
      terms_of_service: (flags & 0x1) ? this.readObject() : undefined,
    }
  }

  payments_paymentVerificationNeeded() {
    return {
      _: 'payments.paymentVerificationNeeded',
      url: this.readString(),
    }
  }

  inputStickerSetAnimatedEmoji() {
    return {
      _: 'inputStickerSetAnimatedEmoji',
    }
  }

  updateNewScheduledMessage() {
    return {
      _: 'updateNewScheduledMessage',
      message: this.readObject(),
    }
  }

  updateDeleteScheduledMessages() {
    return {
      _: 'updateDeleteScheduledMessages',
      peer: this.readObject(),
      messages: this.readObject(),
    }
  }

  restrictionReason() {
    return {
      _: 'restrictionReason',
      platform: this.readString(),
      reason: this.readString(),
      text: this.readString(),
    }
  }

  inputTheme() {
    return {
      _: 'inputTheme',
      id: this.readLong(),
      access_hash: this.readLong(),
    }
  }

  inputThemeSlug() {
    return {
      _: 'inputThemeSlug',
      slug: this.readString(),
    }
  }

  themeDocumentNotModified() {
    return {
      _: 'themeDocumentNotModified',
    }
  }

  theme() {
    const flags = this.readInt();
    return {
      _: 'theme',
      creator: !!(flags & 0x1),
      default: !!(flags & 0x2),
      id: this.readLong(),
      access_hash: this.readLong(),
      slug: this.readString(),
      title: this.readString(),
      document: (flags & 0x4) ? this.readObject() : undefined,
      installs_count: this.readInt(),
    }
  }

  account_themesNotModified() {
    return {
      _: 'account.themesNotModified',
    }
  }

  account_themes() {
    return {
      _: 'account.themes',
      hash: this.readInt(),
      themes: this.readObject(),
    }
  }

  updateTheme() {
    return {
      _: 'updateTheme',
      theme: this.readObject(),
    }
  }

  inputPrivacyKeyAddedByPhone() {
    return {
      _: 'inputPrivacyKeyAddedByPhone',
    }
  }

  privacyKeyAddedByPhone() {
    return {
      _: 'privacyKeyAddedByPhone',
    }
  }

