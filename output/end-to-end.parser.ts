class MessageParser {
  readInt(): number {}
  readLong(): string {}
  readString(): string {}
  readObject() {}
  private src: Bytes;
  private offset: number;

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

