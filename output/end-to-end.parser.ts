class MessageParser {
  readInt(): number {}
  readLong(): string {}
  readString(): string {}
  private src: Bytes;
  private offset: number;

  readObject() {
    switch (this.readInt()) {
      case 0x1f814f1f: return this.decryptedMessage();
      case 0x204d3878: return this.decryptedMessage();
      case 0x36b091de: return this.decryptedMessage();
      case 0x91cc4674: return this.decryptedMessage();
      case 0xaa48327d: return this.decryptedMessageService();
      case 0x73164160: return this.decryptedMessageService();
      case 0x89f5c4a: return this.decryptedMessageMediaEmpty();
      case 0x32798a8c: return this.decryptedMessageMediaPhoto();
      case 0xf1fa8d78: return this.decryptedMessageMediaPhoto();
      case 0x4cee6ef3: return this.decryptedMessageMediaVideo();
      case 0x524a415d: return this.decryptedMessageMediaVideo();
      case 0x970c8c0e: return this.decryptedMessageMediaVideo();
      case 0x35480a59: return this.decryptedMessageMediaGeoPoint();
      case 0x588a0a97: return this.decryptedMessageMediaContact();
      case 0xa1733aec: return this.decryptedMessageActionSetMessageTTL();
      case 0xb095434b: return this.decryptedMessageMediaDocument();
      case 0x7afe8ae2: return this.decryptedMessageMediaDocument();
      case 0x6080758f: return this.decryptedMessageMediaAudio();
      case 0x57e0a9cb: return this.decryptedMessageMediaAudio();
      case 0xc4f40be: return this.decryptedMessageActionReadMessages();
      case 0x65614304: return this.decryptedMessageActionDeleteMessages();
      case 0x8ac1f475: return this.decryptedMessageActionScreenshotMessages();
      case 0x6719e45c: return this.decryptedMessageActionFlushHistory();
      case 0x1be31789: return this.decryptedMessageLayer();
      case 0x16bf744e: return this.sendMessageTypingAction();
      case 0xfd5ec8f5: return this.sendMessageCancelAction();
      case 0xa187d66f: return this.sendMessageRecordVideoAction();
      case 0x92042ff7: return this.sendMessageUploadVideoAction();
      case 0xd52f73f7: return this.sendMessageRecordAudioAction();
      case 0xe6ac8a6f: return this.sendMessageUploadAudioAction();
      case 0x990a3c1a: return this.sendMessageUploadPhotoAction();
      case 0x8faee98e: return this.sendMessageUploadDocumentAction();
      case 0x176f8ba1: return this.sendMessageGeoLocationAction();
      case 0x628cbc6f: return this.sendMessageChooseContactAction();
      case 0x511110b0: return this.decryptedMessageActionResend();
      case 0xf3048883: return this.decryptedMessageActionNotifyLayer();
      case 0xccb27641: return this.decryptedMessageActionTyping();
      case 0xf3c9611b: return this.decryptedMessageActionRequestKey();
      case 0x6fe1735b: return this.decryptedMessageActionAcceptKey();
      case 0xdd05ec6b: return this.decryptedMessageActionAbortKey();
      case 0xec2e0b9b: return this.decryptedMessageActionCommitKey();
      case 0xa82fdd63: return this.decryptedMessageActionNoop();
      case 0x6c37c15c: return this.documentAttributeImageSize();
      case 0x11b58939: return this.documentAttributeAnimated();
      case 0xfb0a5727: return this.documentAttributeSticker();
      case 0x3a556302: return this.documentAttributeSticker();
      case 0x5910cccb: return this.documentAttributeVideo();
      case 0xef02ce6: return this.documentAttributeVideo();
      case 0x51448e5: return this.documentAttributeAudio();
      case 0xded218e0: return this.documentAttributeAudio();
      case 0x9852f9c6: return this.documentAttributeAudio();
      case 0x15590068: return this.documentAttributeFilename();
      case 0xe17e23c: return this.photoSizeEmpty();
      case 0x77bfb61b: return this.photoSize();
      case 0xe9a734fa: return this.photoCachedSize();
      case 0x7c596b46: return this.fileLocationUnavailable();
      case 0x53d69076: return this.fileLocation();
      case 0xfa95b0dd: return this.decryptedMessageMediaExternalDocument();
      case 0xbb92ba95: return this.messageEntityUnknown();
      case 0xfa04579d: return this.messageEntityMention();
      case 0x6f635b0d: return this.messageEntityHashtag();
      case 0x6cef8ac7: return this.messageEntityBotCommand();
      case 0x6ed02538: return this.messageEntityUrl();
      case 0x64e475c2: return this.messageEntityEmail();
      case 0xbd610bc9: return this.messageEntityBold();
      case 0x826f8b60: return this.messageEntityItalic();
      case 0x28a20571: return this.messageEntityCode();
      case 0x73924be0: return this.messageEntityPre();
      case 0x76a6d327: return this.messageEntityTextUrl();
      case 0x861cc8a0: return this.inputStickerSetShortName();
      case 0xffb62b95: return this.inputStickerSetEmpty();
      case 0x8a0df56f: return this.decryptedMessageMediaVenue();
      case 0xe50511d8: return this.decryptedMessageMediaWebPage();
      case 0x88f27fbc: return this.sendMessageRecordRoundAction();
      case 0xbb718624: return this.sendMessageUploadRoundAction();
    }
  }

  decryptedMessage() {
    return {
      _: 'decryptedMessage',
      random_id: this.readLong(),
      random_bytes: this.readObject(),
      message: this.readString(),
      media: this.readObject(),
    }
  }

  decryptedMessage() {
    return {
      _: 'decryptedMessage',
      random_id: this.readLong(),
      ttl: this.readInt(),
      message: this.readString(),
      media: this.readObject(),
    }
  }

  decryptedMessage() {
    const flags = this.readInt();
    return {
      _: 'decryptedMessage',
      random_id: this.readLong(),
      ttl: this.readInt(),
      message: this.readString(),
      media: (flags & 0x512) ? this.readObject() : undefined,
      entities: (flags & 0x128) ? this.readObject() : undefined,
      via_bot_name: (flags & 0x2048) ? this.readString() : undefined,
      reply_to_random_id: (flags & 0x8) ? this.readLong() : undefined,
    }
  }

  decryptedMessage() {
    const flags = this.readInt();
    return {
      _: 'decryptedMessage',
      random_id: this.readLong(),
      ttl: this.readInt(),
      message: this.readString(),
      media: (flags & 0x512) ? this.readObject() : undefined,
      entities: (flags & 0x128) ? this.readObject() : undefined,
      via_bot_name: (flags & 0x2048) ? this.readString() : undefined,
      reply_to_random_id: (flags & 0x8) ? this.readLong() : undefined,
      grouped_id: (flags & 0x131072) ? this.readLong() : undefined,
    }
  }

  decryptedMessageService() {
    return {
      _: 'decryptedMessageService',
      random_id: this.readLong(),
      random_bytes: this.readObject(),
      action: this.readObject(),
    }
  }

  decryptedMessageService() {
    return {
      _: 'decryptedMessageService',
      random_id: this.readLong(),
      action: this.readObject(),
    }
  }

  decryptedMessageMediaEmpty() {
    return {
      _: 'decryptedMessageMediaEmpty',
    }
  }

  decryptedMessageMediaPhoto() {
    return {
      _: 'decryptedMessageMediaPhoto',
      thumb: this.readObject(),
      thumb_w: this.readInt(),
      thumb_h: this.readInt(),
      w: this.readInt(),
      h: this.readInt(),
      size: this.readInt(),
      key: this.readObject(),
      iv: this.readObject(),
    }
  }

  decryptedMessageMediaPhoto() {
    return {
      _: 'decryptedMessageMediaPhoto',
      thumb: this.readObject(),
      thumb_w: this.readInt(),
      thumb_h: this.readInt(),
      w: this.readInt(),
      h: this.readInt(),
      size: this.readInt(),
      key: this.readObject(),
      iv: this.readObject(),
      caption: this.readString(),
    }
  }

  decryptedMessageMediaVideo() {
    return {
      _: 'decryptedMessageMediaVideo',
      thumb: this.readObject(),
      thumb_w: this.readInt(),
      thumb_h: this.readInt(),
      duration: this.readInt(),
      w: this.readInt(),
      h: this.readInt(),
      size: this.readInt(),
      key: this.readObject(),
      iv: this.readObject(),
    }
  }

  decryptedMessageMediaVideo() {
    return {
      _: 'decryptedMessageMediaVideo',
      thumb: this.readObject(),
      thumb_w: this.readInt(),
      thumb_h: this.readInt(),
      duration: this.readInt(),
      mime_type: this.readString(),
      w: this.readInt(),
      h: this.readInt(),
      size: this.readInt(),
      key: this.readObject(),
      iv: this.readObject(),
    }
  }

  decryptedMessageMediaVideo() {
    return {
      _: 'decryptedMessageMediaVideo',
      thumb: this.readObject(),
      thumb_w: this.readInt(),
      thumb_h: this.readInt(),
      duration: this.readInt(),
      mime_type: this.readString(),
      w: this.readInt(),
      h: this.readInt(),
      size: this.readInt(),
      key: this.readObject(),
      iv: this.readObject(),
      caption: this.readString(),
    }
  }

  decryptedMessageMediaGeoPoint() {
    return {
      _: 'decryptedMessageMediaGeoPoint',
      lat: this.readObject(),
      long: this.readObject(),
    }
  }

  decryptedMessageMediaContact() {
    return {
      _: 'decryptedMessageMediaContact',
      phone_number: this.readString(),
      first_name: this.readString(),
      last_name: this.readString(),
      user_id: this.readInt(),
    }
  }

  decryptedMessageActionSetMessageTTL() {
    return {
      _: 'decryptedMessageActionSetMessageTTL',
      ttl_seconds: this.readInt(),
    }
  }

  decryptedMessageMediaDocument() {
    return {
      _: 'decryptedMessageMediaDocument',
      thumb: this.readObject(),
      thumb_w: this.readInt(),
      thumb_h: this.readInt(),
      file_name: this.readString(),
      mime_type: this.readString(),
      size: this.readInt(),
      key: this.readObject(),
      iv: this.readObject(),
    }
  }

  decryptedMessageMediaDocument() {
    return {
      _: 'decryptedMessageMediaDocument',
      thumb: this.readObject(),
      thumb_w: this.readInt(),
      thumb_h: this.readInt(),
      mime_type: this.readString(),
      size: this.readInt(),
      key: this.readObject(),
      iv: this.readObject(),
      attributes: this.readObject(),
      caption: this.readString(),
    }
  }

  decryptedMessageMediaAudio() {
    return {
      _: 'decryptedMessageMediaAudio',
      duration: this.readInt(),
      size: this.readInt(),
      key: this.readObject(),
      iv: this.readObject(),
    }
  }

  decryptedMessageMediaAudio() {
    return {
      _: 'decryptedMessageMediaAudio',
      duration: this.readInt(),
      mime_type: this.readString(),
      size: this.readInt(),
      key: this.readObject(),
      iv: this.readObject(),
    }
  }

  decryptedMessageActionReadMessages() {
    return {
      _: 'decryptedMessageActionReadMessages',
      random_ids: this.readObject(),
    }
  }

  decryptedMessageActionDeleteMessages() {
    return {
      _: 'decryptedMessageActionDeleteMessages',
      random_ids: this.readObject(),
    }
  }

  decryptedMessageActionScreenshotMessages() {
    return {
      _: 'decryptedMessageActionScreenshotMessages',
      random_ids: this.readObject(),
    }
  }

  decryptedMessageActionFlushHistory() {
    return {
      _: 'decryptedMessageActionFlushHistory',
    }
  }

  decryptedMessageLayer() {
    return {
      _: 'decryptedMessageLayer',
      random_bytes: this.readObject(),
      layer: this.readInt(),
      in_seq_no: this.readInt(),
      out_seq_no: this.readInt(),
      message: this.readObject(),
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
    }
  }

  sendMessageUploadPhotoAction() {
    return {
      _: 'sendMessageUploadPhotoAction',
    }
  }

  sendMessageUploadDocumentAction() {
    return {
      _: 'sendMessageUploadDocumentAction',
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

  decryptedMessageActionResend() {
    return {
      _: 'decryptedMessageActionResend',
      start_seq_no: this.readInt(),
      end_seq_no: this.readInt(),
    }
  }

  decryptedMessageActionNotifyLayer() {
    return {
      _: 'decryptedMessageActionNotifyLayer',
      layer: this.readInt(),
    }
  }

  decryptedMessageActionTyping() {
    return {
      _: 'decryptedMessageActionTyping',
      action: this.readObject(),
    }
  }

  decryptedMessageActionRequestKey() {
    return {
      _: 'decryptedMessageActionRequestKey',
      exchange_id: this.readLong(),
      g_a: this.readObject(),
    }
  }

  decryptedMessageActionAcceptKey() {
    return {
      _: 'decryptedMessageActionAcceptKey',
      exchange_id: this.readLong(),
      g_b: this.readObject(),
      key_fingerprint: this.readLong(),
    }
  }

  decryptedMessageActionAbortKey() {
    return {
      _: 'decryptedMessageActionAbortKey',
      exchange_id: this.readLong(),
    }
  }

  decryptedMessageActionCommitKey() {
    return {
      _: 'decryptedMessageActionCommitKey',
      exchange_id: this.readLong(),
      key_fingerprint: this.readLong(),
    }
  }

  decryptedMessageActionNoop() {
    return {
      _: 'decryptedMessageActionNoop',
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
    return {
      _: 'documentAttributeSticker',
    }
  }

  documentAttributeSticker() {
    return {
      _: 'documentAttributeSticker',
      alt: this.readString(),
      stickerset: this.readObject(),
    }
  }

  documentAttributeVideo() {
    return {
      _: 'documentAttributeVideo',
      duration: this.readInt(),
      w: this.readInt(),
      h: this.readInt(),
    }
  }

  documentAttributeVideo() {
    const flags = this.readInt();
    return {
      _: 'documentAttributeVideo',
      duration: this.readInt(),
      w: this.readInt(),
      h: this.readInt(),
    }
  }

  documentAttributeAudio() {
    return {
      _: 'documentAttributeAudio',
      duration: this.readInt(),
    }
  }

  documentAttributeAudio() {
    return {
      _: 'documentAttributeAudio',
      duration: this.readInt(),
      title: this.readString(),
      performer: this.readString(),
    }
  }

  documentAttributeAudio() {
    const flags = this.readInt();
    return {
      _: 'documentAttributeAudio',
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

  fileLocationUnavailable() {
    return {
      _: 'fileLocationUnavailable',
      volume_id: this.readLong(),
      local_id: this.readInt(),
      secret: this.readLong(),
    }
  }

  fileLocation() {
    return {
      _: 'fileLocation',
      dc_id: this.readInt(),
      volume_id: this.readLong(),
      local_id: this.readInt(),
      secret: this.readLong(),
    }
  }

  decryptedMessageMediaExternalDocument() {
    return {
      _: 'decryptedMessageMediaExternalDocument',
      id: this.readLong(),
      access_hash: this.readLong(),
      date: this.readInt(),
      mime_type: this.readString(),
      size: this.readInt(),
      thumb: this.readObject(),
      dc_id: this.readInt(),
      attributes: this.readObject(),
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

  inputStickerSetShortName() {
    return {
      _: 'inputStickerSetShortName',
      short_name: this.readString(),
    }
  }

  inputStickerSetEmpty() {
    return {
      _: 'inputStickerSetEmpty',
    }
  }

  decryptedMessageMediaVenue() {
    return {
      _: 'decryptedMessageMediaVenue',
      lat: this.readObject(),
      long: this.readObject(),
      title: this.readString(),
      address: this.readString(),
      provider: this.readString(),
      venue_id: this.readString(),
    }
  }

  decryptedMessageMediaWebPage() {
    return {
      _: 'decryptedMessageMediaWebPage',
      url: this.readString(),
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
    }
  }

