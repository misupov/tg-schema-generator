class MessageParser {
  readInt(): number {}
  readLong(): string {}
  readString(): string {}
  private src: Bytes;
  private offset: number;

  readObject() {
    switch (this.readInt()) {
      case 0xbc799737: return this.boolFalse();
      case 0x997275b5: return this.boolTrue();
      case 0x3fedd339: return this.true();
      case 0x1cb5c415: return this.vector();
      case 0xc4b9f9bb: return this.error();
      case 0x56730bcc: return this.null();
      case 0x7f3b18ea: return this.inputPeerEmpty();
      case 0x7da07ec9: return this.inputPeerSelf();
      case 0x179be863: return this.inputPeerChat();
      case 0xb98886cf: return this.inputUserEmpty();
      case 0xf7c1b13f: return this.inputUserSelf();
      case 0xf392b7f4: return this.inputPhoneContact();
      case 0xf52ff27f: return this.inputFile();
      case 0x9664f57f: return this.inputMediaEmpty();
      case 0x1e287d04: return this.inputMediaUploadedPhoto();
      case 0xb3ba0635: return this.inputMediaPhoto();
      case 0xf9c44144: return this.inputMediaGeoPoint();
      case 0xf8ab7dfb: return this.inputMediaContact();
      case 0x1ca48f57: return this.inputChatPhotoEmpty();
      case 0x927c55b4: return this.inputChatUploadedPhoto();
      case 0x8953ad37: return this.inputChatPhoto();
      case 0xe4c123d6: return this.inputGeoPointEmpty();
      case 0xf3b7acc9: return this.inputGeoPoint();
      case 0x1cd7bf0d: return this.inputPhotoEmpty();
      case 0x3bb3b94a: return this.inputPhoto();
      case 0xdfdaabe1: return this.inputFileLocation();
      case 0x9db1bc6d: return this.peerUser();
      case 0xbad0e5bb: return this.peerChat();
      case 0xaa963b05: return this.storage_fileUnknown();
      case 0x40bc6f52: return this.storage_filePartial();
      case 0x7efe0e: return this.storage_fileJpeg();
      case 0xcae1aadf: return this.storage_fileGif();
      case 0xa4f63c0: return this.storage_filePng();
      case 0xae1e508d: return this.storage_filePdf();
      case 0x528a0677: return this.storage_fileMp3();
      case 0x4b09ebbc: return this.storage_fileMov();
      case 0xb3cea0e4: return this.storage_fileMp4();
      case 0x1081464c: return this.storage_fileWebp();
      case 0x200250ba: return this.userEmpty();
      case 0x4f11bae1: return this.userProfilePhotoEmpty();
      case 0xecd75d8c: return this.userProfilePhoto();
      case 0x9d05049: return this.userStatusEmpty();
      case 0xedb93949: return this.userStatusOnline();
      case 0x8c703f: return this.userStatusOffline();
      case 0x9ba2d800: return this.chatEmpty();
      case 0x3bda1bde: return this.chat();
      case 0x7328bdb: return this.chatForbidden();
      case 0x1b7c9db3: return this.chatFull();
      case 0xc8d7493e: return this.chatParticipant();
      case 0xfc900c2b: return this.chatParticipantsForbidden();
      case 0x3f460fed: return this.chatParticipants();
      case 0x37c1011c: return this.chatPhotoEmpty();
      case 0x475cdbd5: return this.chatPhoto();
      case 0x83e5de54: return this.messageEmpty();
      case 0x452c0e65: return this.message();
      case 0x9e19a1f6: return this.messageService();
      case 0x3ded6320: return this.messageMediaEmpty();
      case 0x695150d7: return this.messageMediaPhoto();
      case 0x56e0d474: return this.messageMediaGeo();
      case 0xcbf24940: return this.messageMediaContact();
      case 0x9f84f49e: return this.messageMediaUnsupported();
      case 0xb6aef7b0: return this.messageActionEmpty();
      case 0xa6638b9a: return this.messageActionChatCreate();
      case 0xb5a1ce5a: return this.messageActionChatEditTitle();
      case 0x7fcb13a8: return this.messageActionChatEditPhoto();
      case 0x95e3fbef: return this.messageActionChatDeletePhoto();
      case 0x488a7337: return this.messageActionChatAddUser();
      case 0xb2ae9b0c: return this.messageActionChatDeleteUser();
      case 0x2c171f72: return this.dialog();
      case 0x2331b22d: return this.photoEmpty();
      case 0xd07504a5: return this.photo();
      case 0xe17e23c: return this.photoSizeEmpty();
      case 0x77bfb61b: return this.photoSize();
      case 0xe9a734fa: return this.photoCachedSize();
      case 0x1117dd5f: return this.geoPointEmpty();
      case 0x296f104: return this.geoPoint();
      case 0x5e002502: return this.auth_sentCode();
      case 0xcd050916: return this.auth_authorization();
      case 0xdf969c2d: return this.auth_exportedAuthorization();
      case 0xb8bc5b0c: return this.inputNotifyPeer();
      case 0x193b4417: return this.inputNotifyUsers();
      case 0x4a95e84e: return this.inputNotifyChats();
      case 0x9c3d198e: return this.inputPeerNotifySettings();
      case 0xaf509d20: return this.peerNotifySettings();
      case 0x818426cd: return this.peerSettings();
      case 0xa437c3ed: return this.wallPaper();
      case 0x58dbcab8: return this.inputReportReasonSpam();
      case 0x1e22c78d: return this.inputReportReasonViolence();
      case 0x2e59d922: return this.inputReportReasonPornography();
      case 0xadf44ee3: return this.inputReportReasonChildAbuse();
      case 0xe1746d0a: return this.inputReportReasonOther();
      case 0xedf17c12: return this.userFull();
      case 0xf911c994: return this.contact();
      case 0xd0028438: return this.importedContact();
      case 0x561bc879: return this.contactBlocked();
      case 0xd3680c61: return this.contactStatus();
      case 0xb74ba9d2: return this.contacts_contactsNotModified();
      case 0xeae87e42: return this.contacts_contacts();
      case 0x77d01c3b: return this.contacts_importedContacts();
      case 0x1c138d15: return this.contacts_blocked();
      case 0x900802a1: return this.contacts_blockedSlice();
      case 0x15ba6c40: return this.messages_dialogs();
      case 0x71e094f3: return this.messages_dialogsSlice();
      case 0x8c718e87: return this.messages_messages();
      case 0xc8edce1e: return this.messages_messagesSlice();
      case 0x64ff9fd5: return this.messages_chats();
      case 0xe5d7d19c: return this.messages_chatFull();
      case 0xb45c69d1: return this.messages_affectedHistory();
      case 0x57e2f66c: return this.inputMessagesFilterEmpty();
      case 0x9609a51c: return this.inputMessagesFilterPhotos();
      case 0x9fc00e65: return this.inputMessagesFilterVideo();
      case 0x56e9f0e4: return this.inputMessagesFilterPhotoVideo();
      case 0x9eddf188: return this.inputMessagesFilterDocument();
      case 0x7ef0dd87: return this.inputMessagesFilterUrl();
      case 0xffc86587: return this.inputMessagesFilterGif();
      case 0x1f2b0afd: return this.updateNewMessage();
      case 0x4e90bfd6: return this.updateMessageID();
      case 0xa20db0e5: return this.updateDeleteMessages();
      case 0x5c486927: return this.updateUserTyping();
      case 0x9a65ea1f: return this.updateChatUserTyping();
      case 0x7761198: return this.updateChatParticipants();
      case 0x1bfbd823: return this.updateUserStatus();
      case 0xa7332b73: return this.updateUserName();
      case 0x95313b0c: return this.updateUserPhoto();
      case 0xa56c2a3e: return this.updates_state();
      case 0x5d75a138: return this.updates_differenceEmpty();
      case 0xf49ca0: return this.updates_difference();
      case 0xa8fb1981: return this.updates_differenceSlice();
      case 0xe317af7e: return this.updatesTooLong();
      case 0x914fbf11: return this.updateShortMessage();
      case 0x16812688: return this.updateShortChatMessage();
      case 0x78d4dec1: return this.updateShort();
      case 0x725b04c3: return this.updatesCombined();
      case 0x74ae4240: return this.updates();
      case 0x8dca6aa5: return this.photos_photos();
      case 0x15051f54: return this.photos_photosSlice();
      case 0x20212ca8: return this.photos_photo();
      case 0x96a18d5: return this.upload_file();
      case 0x18b7a10d: return this.dcOption();
      case 0x330b4067: return this.config();
      case 0x8e1a1775: return this.nearestDc();
      case 0x1da7158f: return this.help_appUpdate();
      case 0xc45a6536: return this.help_noAppUpdate();
      case 0x18cb9f78: return this.help_inviteText();
      case 0x12bcbd9a: return this.updateNewEncryptedMessage();
      case 0x1710f156: return this.updateEncryptedChatTyping();
      case 0xb4a2e88d: return this.updateEncryption();
      case 0x38fe25b7: return this.updateEncryptedMessagesRead();
      case 0xab7ec0a0: return this.encryptedChatEmpty();
      case 0x3bf703dc: return this.encryptedChatWaiting();
      case 0xc878527e: return this.encryptedChatRequested();
      case 0xfa56ce36: return this.encryptedChat();
      case 0x13d6dd27: return this.encryptedChatDiscarded();
      case 0xf141b5e1: return this.inputEncryptedChat();
      case 0xc21f497e: return this.encryptedFileEmpty();
      case 0x4a70994c: return this.encryptedFile();
      case 0x1837c364: return this.inputEncryptedFileEmpty();
      case 0x64bd0306: return this.inputEncryptedFileUploaded();
      case 0x5a17b5e5: return this.inputEncryptedFile();
      case 0xf5235d55: return this.inputEncryptedFileLocation();
      case 0xed18c118: return this.encryptedMessage();
      case 0x23734b06: return this.encryptedMessageService();
      case 0xc0e24635: return this.messages_dhConfigNotModified();
      case 0x2c221edd: return this.messages_dhConfig();
      case 0x560f8935: return this.messages_sentEncryptedMessage();
      case 0x9493ff32: return this.messages_sentEncryptedFile();
      case 0xfa4f0bb5: return this.inputFileBig();
      case 0x2dc173c8: return this.inputEncryptedFileBigUploaded();
      case 0xea4b0e5c: return this.updateChatParticipantAdd();
      case 0x6e5f8c22: return this.updateChatParticipantDelete();
      case 0x8e5e9873: return this.updateDcOptions();
      case 0x5b38c6c1: return this.inputMediaUploadedDocument();
      case 0x23ab23d2: return this.inputMediaDocument();
      case 0x9cb070d7: return this.messageMediaDocument();
      case 0x72f0eaae: return this.inputDocumentEmpty();
      case 0x1abfb575: return this.inputDocument();
      case 0xbad07584: return this.inputDocumentFileLocation();
      case 0x36f8c871: return this.documentEmpty();
      case 0x9ba29cc1: return this.document();
      case 0x17c6b5f6: return this.help_support();
      case 0x9fd40bd8: return this.notifyPeer();
      case 0xb4c83b4c: return this.notifyUsers();
      case 0xc007cec3: return this.notifyChats();
      case 0x80ece81a: return this.updateUserBlocked();
      case 0xbec268ef: return this.updateNotifySettings();
      case 0x16bf744e: return this.sendMessageTypingAction();
      case 0xfd5ec8f5: return this.sendMessageCancelAction();
      case 0xa187d66f: return this.sendMessageRecordVideoAction();
      case 0xe9763aec: return this.sendMessageUploadVideoAction();
      case 0xd52f73f7: return this.sendMessageRecordAudioAction();
      case 0xf351d7ab: return this.sendMessageUploadAudioAction();
      case 0xd1d34a26: return this.sendMessageUploadPhotoAction();
      case 0xaa0cd9e4: return this.sendMessageUploadDocumentAction();
      case 0x176f8ba1: return this.sendMessageGeoLocationAction();
      case 0x628cbc6f: return this.sendMessageChooseContactAction();
      case 0xb3134d9d: return this.contacts_found();
      case 0xebe46819: return this.updateServiceNotification();
      case 0xe26f42f1: return this.userStatusRecently();
      case 0x7bf09fc: return this.userStatusLastWeek();
      case 0x77ebc742: return this.userStatusLastMonth();
      case 0xee3b272a: return this.updatePrivacy();
      case 0x4f96cb18: return this.inputPrivacyKeyStatusTimestamp();
      case 0xbc2eab30: return this.privacyKeyStatusTimestamp();
      case 0xd09e07b: return this.inputPrivacyValueAllowContacts();
      case 0x184b35ce: return this.inputPrivacyValueAllowAll();
      case 0x131cc67f: return this.inputPrivacyValueAllowUsers();
      case 0xba52007: return this.inputPrivacyValueDisallowContacts();
      case 0xd66b66c9: return this.inputPrivacyValueDisallowAll();
      case 0x90110467: return this.inputPrivacyValueDisallowUsers();
      case 0xfffe1bac: return this.privacyValueAllowContacts();
      case 0x65427b82: return this.privacyValueAllowAll();
      case 0x4d5bbe0c: return this.privacyValueAllowUsers();
      case 0xf888fa1a: return this.privacyValueDisallowContacts();
      case 0x8b73e763: return this.privacyValueDisallowAll();
      case 0xc7f49b7: return this.privacyValueDisallowUsers();
      case 0x50a04e45: return this.account_privacyRules();
      case 0xb8d0afdf: return this.accountDaysTTL();
      case 0x12b9417b: return this.updateUserPhone();
      case 0x6c37c15c: return this.documentAttributeImageSize();
      case 0x11b58939: return this.documentAttributeAnimated();
      case 0x6319d612: return this.documentAttributeSticker();
      case 0xef02ce6: return this.documentAttributeVideo();
      case 0x9852f9c6: return this.documentAttributeAudio();
      case 0x15590068: return this.documentAttributeFilename();
      case 0xf1749a22: return this.messages_stickersNotModified();
      case 0xe4599bbd: return this.messages_stickers();
      case 0x12b299d4: return this.stickerPack();
      case 0xe86602c3: return this.messages_allStickersNotModified();
      case 0xedfd405f: return this.messages_allStickers();
      case 0x9c974fdf: return this.updateReadHistoryInbox();
      case 0x2f2f21bf: return this.updateReadHistoryOutbox();
      case 0x84d19185: return this.messages_affectedMessages();
      case 0x7f891213: return this.updateWebPage();
      case 0xeb1477e8: return this.webPageEmpty();
      case 0xc586da1c: return this.webPagePending();
      case 0xfa64e172: return this.webPage();
      case 0xa32dd600: return this.messageMediaWebPage();
      case 0xad01d61d: return this.authorization();
      case 0x1250abde: return this.account_authorizations();
      case 0xad2641f8: return this.account_password();
      case 0x9a5c33e5: return this.account_passwordSettings();
      case 0xc23727c9: return this.account_passwordInputSettings();
      case 0x137948a5: return this.auth_passwordRecovery();
      case 0xc13d1c11: return this.inputMediaVenue();
      case 0x2ec0533f: return this.messageMediaVenue();
      case 0xa384b779: return this.receivedNotifyMessage();
      case 0x69df3769: return this.chatInviteEmpty();
      case 0xfc2e05bc: return this.chatInviteExported();
      case 0x5a686d7c: return this.chatInviteAlready();
      case 0xdfc2f58e: return this.chatInvite();
      case 0xf89cf5e8: return this.messageActionChatJoinedByLink();
      case 0x68c13933: return this.updateReadMessagesContents();
      case 0xffb62b95: return this.inputStickerSetEmpty();
      case 0x9de7a269: return this.inputStickerSetID();
      case 0x861cc8a0: return this.inputStickerSetShortName();
      case 0xeeb46f27: return this.stickerSet();
      case 0xb60a24a6: return this.messages_stickerSet();
      case 0x938458c1: return this.user();
      case 0xc27ac8c7: return this.botCommand();
      case 0x98e81d3a: return this.botInfo();
      case 0xa2fa4880: return this.keyboardButton();
      case 0x77608b83: return this.keyboardButtonRow();
      case 0xa03e5b85: return this.replyKeyboardHide();
      case 0xf4108aa0: return this.replyKeyboardForceReply();
      case 0x3502758c: return this.replyKeyboardMarkup();
      case 0x7b8e7de6: return this.inputPeerUser();
      case 0xd8292816: return this.inputUser();
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
      case 0x11f1331c: return this.updateShortSentMessage();
      case 0xee8c1e86: return this.inputChannelEmpty();
      case 0xafeb712e: return this.inputChannel();
      case 0xbddde532: return this.peerChannel();
      case 0x20adaef8: return this.inputPeerChannel();
      case 0xd31a961e: return this.channel();
      case 0x289da732: return this.channelForbidden();
      case 0x7f077ad9: return this.contacts_resolvedPeer();
      case 0x2d895c74: return this.channelFull();
      case 0xae30253: return this.messageRange();
      case 0x99262e37: return this.messages_channelMessages();
      case 0x95d2ac92: return this.messageActionChannelCreate();
      case 0xeb0467fb: return this.updateChannelTooLong();
      case 0xb6d45656: return this.updateChannel();
      case 0x62ba04d9: return this.updateNewChannelMessage();
      case 0x330b5424: return this.updateReadChannelInbox();
      case 0xc37521c9: return this.updateDeleteChannelMessages();
      case 0x98a12b4b: return this.updateChannelMessageViews();
      case 0x3e11affb: return this.updates_channelDifferenceEmpty();
      case 0xa4bcc6fe: return this.updates_channelDifferenceTooLong();
      case 0x2064674e: return this.updates_channelDifference();
      case 0x94d42ee7: return this.channelMessagesFilterEmpty();
      case 0xcd77d957: return this.channelMessagesFilter();
      case 0x15ebac1d: return this.channelParticipant();
      case 0xa3289a6d: return this.channelParticipantSelf();
      case 0x808d15a4: return this.channelParticipantCreator();
      case 0xde3f3c79: return this.channelParticipantsRecent();
      case 0xb4608969: return this.channelParticipantsAdmins();
      case 0xa3b54985: return this.channelParticipantsKicked();
      case 0xf56ee2a8: return this.channels_channelParticipants();
      case 0xd0d9b163: return this.channels_channelParticipant();
      case 0xda13538a: return this.chatParticipantCreator();
      case 0xe2d6e436: return this.chatParticipantAdmin();
      case 0xb6901959: return this.updateChatParticipantAdmin();
      case 0x51bdb021: return this.messageActionChatMigrateTo();
      case 0xb055eaee: return this.messageActionChannelMigrateFrom();
      case 0xb0d1865b: return this.channelParticipantsBots();
      case 0x780a0310: return this.help_termsOfService();
      case 0x688a30aa: return this.updateNewStickerSet();
      case 0xbb2d201: return this.updateStickerSetsOrder();
      case 0x43ae3dec: return this.updateStickerSets();
      case 0x162ecc1f: return this.foundGif();
      case 0x9c750409: return this.foundGifCached();
      case 0x4843b0fd: return this.inputMediaGifExternal();
      case 0x450a1c0a: return this.messages_foundGifs();
      case 0xe8025ca2: return this.messages_savedGifsNotModified();
      case 0x2e0709a5: return this.messages_savedGifs();
      case 0x9375341e: return this.updateSavedGifs();
      case 0x3380c786: return this.inputBotInlineMessageMediaAuto();
      case 0x3dcd7a87: return this.inputBotInlineMessageText();
      case 0x88bf9319: return this.inputBotInlineResult();
      case 0x764cf810: return this.botInlineMessageMediaAuto();
      case 0x8c7f65e2: return this.botInlineMessageText();
      case 0x11965f3a: return this.botInlineResult();
      case 0x947ca848: return this.messages_botResults();
      case 0x54826690: return this.updateBotInlineQuery();
      case 0xe48f964: return this.updateBotInlineSend();
      case 0x50f5c392: return this.inputMessagesFilterVoice();
      case 0x3751b49e: return this.inputMessagesFilterMusic();
      case 0xbdfb0426: return this.inputPrivacyKeyChatInvite();
      case 0x500e6dfa: return this.privacyKeyChatInvite();
      case 0x5dab1af4: return this.exportedMessageLink();
      case 0xec338270: return this.messageFwdHeader();
      case 0x1b3f4df7: return this.updateEditChannelMessage();
      case 0x98592475: return this.updateChannelPinnedMessage();
      case 0x94bd38ed: return this.messageActionPinMessage();
      case 0x72a3158c: return this.auth_codeTypeSms();
      case 0x741cd3e3: return this.auth_codeTypeCall();
      case 0x226ccefb: return this.auth_codeTypeFlashCall();
      case 0x3dbb5986: return this.auth_sentCodeTypeApp();
      case 0xc000bba2: return this.auth_sentCodeTypeSms();
      case 0x5353e5a7: return this.auth_sentCodeTypeCall();
      case 0xab03c6d9: return this.auth_sentCodeTypeFlashCall();
      case 0x258aff05: return this.keyboardButtonUrl();
      case 0x683a5e46: return this.keyboardButtonCallback();
      case 0xb16a6c29: return this.keyboardButtonRequestPhone();
      case 0xfc796b3f: return this.keyboardButtonRequestGeoLocation();
      case 0x568a748: return this.keyboardButtonSwitchInline();
      case 0x48a30254: return this.replyInlineMarkup();
      case 0x36585ea4: return this.messages_botCallbackAnswer();
      case 0xe73547e1: return this.updateBotCallbackQuery();
      case 0x26b5dde6: return this.messages_messageEditData();
      case 0xe40370a3: return this.updateEditMessage();
      case 0xc1b15d65: return this.inputBotInlineMessageMediaGeo();
      case 0x417bbf11: return this.inputBotInlineMessageMediaVenue();
      case 0xa6edbffd: return this.inputBotInlineMessageMediaContact();
      case 0xb722de65: return this.botInlineMessageMediaGeo();
      case 0x8a86659c: return this.botInlineMessageMediaVenue();
      case 0x18d1cdc2: return this.botInlineMessageMediaContact();
      case 0xa8d864a7: return this.inputBotInlineResultPhoto();
      case 0xfff8fdc4: return this.inputBotInlineResultDocument();
      case 0x17db940b: return this.botInlineMediaResult();
      case 0x890c3d89: return this.inputBotInlineMessageID();
      case 0xf9d27a5a: return this.updateInlineBotCallbackQuery();
      case 0x3c20629f: return this.inlineBotSwitchPM();
      case 0x3371c354: return this.messages_peerDialogs();
      case 0xedcdc05b: return this.topPeer();
      case 0xab661b5b: return this.topPeerCategoryBotsPM();
      case 0x148677e2: return this.topPeerCategoryBotsInline();
      case 0x637b7ed: return this.topPeerCategoryCorrespondents();
      case 0xbd17a14a: return this.topPeerCategoryGroups();
      case 0x161d9628: return this.topPeerCategoryChannels();
      case 0xfb834291: return this.topPeerCategoryPeers();
      case 0xde266ef5: return this.contacts_topPeersNotModified();
      case 0x70b772a8: return this.contacts_topPeers();
      case 0x352dca58: return this.messageEntityMentionName();
      case 0x208e68c9: return this.inputMessageEntityMentionName();
      case 0x3a20ecb8: return this.inputMessagesFilterChatPhotos();
      case 0x25d6c9c7: return this.updateReadChannelOutbox();
      case 0xee2bb969: return this.updateDraftMessage();
      case 0x1b0c841a: return this.draftMessageEmpty();
      case 0xfd8e711f: return this.draftMessage();
      case 0x9fbab604: return this.messageActionHistoryClear();
      case 0x4ede3cf: return this.messages_featuredStickersNotModified();
      case 0xf89d88e5: return this.messages_featuredStickers();
      case 0x571d2742: return this.updateReadFeaturedStickers();
      case 0xb17f890: return this.messages_recentStickersNotModified();
      case 0x22f3afb3: return this.messages_recentStickers();
      case 0x9a422c20: return this.updateRecentStickers();
      case 0x4fcba9c8: return this.messages_archivedStickers();
      case 0x38641628: return this.messages_stickerSetInstallResultSuccess();
      case 0x35e410a8: return this.messages_stickerSetInstallResultArchive();
      case 0x6410a5d2: return this.stickerSetCovered();
      case 0xa229dd06: return this.updateConfig();
      case 0x3354678f: return this.updatePtsChanged();
      case 0xe5bbfe1a: return this.inputMediaPhotoExternal();
      case 0xfb52dc99: return this.inputMediaDocumentExternal();
      case 0x3407e51b: return this.stickerSetMultiCovered();
      case 0xaed6dbb2: return this.maskCoords();
      case 0x9801d2f7: return this.documentAttributeHasStickers();
      case 0x4a992157: return this.inputStickeredMediaPhoto();
      case 0x438865b: return this.inputStickeredMediaDocument();
      case 0xbdf9653b: return this.game();
      case 0x4fa417f2: return this.inputBotInlineResultGame();
      case 0x4b425864: return this.inputBotInlineMessageGame();
      case 0xfdb19008: return this.messageMediaGame();
      case 0xd33f43f3: return this.inputMediaGame();
      case 0x32c3e77: return this.inputGameID();
      case 0xc331e80a: return this.inputGameShortName();
      case 0x50f41ccf: return this.keyboardButtonGame();
      case 0x92a72876: return this.messageActionGameScore();
      case 0x58fffcd0: return this.highScore();
      case 0x9a3bfd99: return this.messages_highScores();
      case 0x4afe8f6d: return this.updates_differenceTooLong();
      case 0x40771900: return this.updateChannelWebPage();
      case 0x9cd81144: return this.messages_chatsSlice();
      case 0xdc3d824f: return this.textEmpty();
      case 0x744694e0: return this.textPlain();
      case 0x6724abc4: return this.textBold();
      case 0xd912a59c: return this.textItalic();
      case 0xc12622c4: return this.textUnderline();
      case 0x9bf8bb95: return this.textStrike();
      case 0x6c3f19b9: return this.textFixed();
      case 0x3c2884c1: return this.textUrl();
      case 0xde5a0dd6: return this.textEmail();
      case 0x7e6260d7: return this.textConcat();
      case 0x13567e8a: return this.pageBlockUnsupported();
      case 0x70abc3fd: return this.pageBlockTitle();
      case 0x8ffa9a1f: return this.pageBlockSubtitle();
      case 0xbaafe5e0: return this.pageBlockAuthorDate();
      case 0xbfd064ec: return this.pageBlockHeader();
      case 0xf12bb6e1: return this.pageBlockSubheader();
      case 0x467a0766: return this.pageBlockParagraph();
      case 0xc070d93e: return this.pageBlockPreformatted();
      case 0x48870999: return this.pageBlockFooter();
      case 0xdb20b188: return this.pageBlockDivider();
      case 0xce0d37b0: return this.pageBlockAnchor();
      case 0xe4e88011: return this.pageBlockList();
      case 0x263d7c26: return this.pageBlockBlockquote();
      case 0x4f4456d3: return this.pageBlockPullquote();
      case 0x1759c560: return this.pageBlockPhoto();
      case 0x7c8fe7b6: return this.pageBlockVideo();
      case 0x39f23300: return this.pageBlockCover();
      case 0xa8718dc5: return this.pageBlockEmbed();
      case 0xf259a80b: return this.pageBlockEmbedPost();
      case 0x65a0fa4d: return this.pageBlockCollage();
      case 0x31f9590: return this.pageBlockSlideshow();
      case 0x85849473: return this.webPageNotModified();
      case 0xfabadc5f: return this.inputPrivacyKeyPhoneCall();
      case 0x3d662b7b: return this.privacyKeyPhoneCall();
      case 0xdd6a8f48: return this.sendMessageGamePlayAction();
      case 0x85e42301: return this.phoneCallDiscardReasonMissed();
      case 0xe095c1a0: return this.phoneCallDiscardReasonDisconnect();
      case 0x57adc690: return this.phoneCallDiscardReasonHangup();
      case 0xfaf7e8c9: return this.phoneCallDiscardReasonBusy();
      case 0x6e6fe51c: return this.updateDialogPinned();
      case 0xfa0f3ca2: return this.updatePinnedDialogs();
      case 0x7d748d04: return this.dataJSON();
      case 0x8317c0c3: return this.updateBotWebhookJSON();
      case 0x9b9240a6: return this.updateBotWebhookJSONQuery();
      case 0xcb296bf8: return this.labeledPrice();
      case 0xc30aa358: return this.invoice();
      case 0xf4e096c3: return this.inputMediaInvoice();
      case 0xea02c27e: return this.paymentCharge();
      case 0x8f31b327: return this.messageActionPaymentSentMe();
      case 0x84551347: return this.messageMediaInvoice();
      case 0x1e8caaeb: return this.postAddress();
      case 0x909c3f94: return this.paymentRequestedInfo();
      case 0xafd93fbb: return this.keyboardButtonBuy();
      case 0x40699cd0: return this.messageActionPaymentSent();
      case 0xcdc27a1f: return this.paymentSavedCredentialsCard();
      case 0x1c570ed1: return this.webDocument();
      case 0x9bed434d: return this.inputWebDocument();
      case 0xc239d686: return this.inputWebFileLocation();
      case 0x21e753bc: return this.upload_webFile();
      case 0x3f56aea3: return this.payments_paymentForm();
      case 0xd1451883: return this.payments_validatedRequestedInfo();
      case 0x4e5f810d: return this.payments_paymentResult();
      case 0x500911e1: return this.payments_paymentReceipt();
      case 0xfb8fe43c: return this.payments_savedInfo();
      case 0xc10eb2cf: return this.inputPaymentCredentialsSaved();
      case 0x3417d728: return this.inputPaymentCredentials();
      case 0xdb64fd34: return this.account_tmpPassword();
      case 0xb6213cdf: return this.shippingOption();
      case 0xe0cdc940: return this.updateBotShippingQuery();
      case 0x5d2f3aa9: return this.updateBotPrecheckoutQuery();
      case 0xffa0a496: return this.inputStickerSetItem();
      case 0xab0f6b1e: return this.updatePhoneCall();
      case 0x1e36fded: return this.inputPhoneCall();
      case 0x5366c915: return this.phoneCallEmpty();
      case 0x1b8f4ad1: return this.phoneCallWaiting();
      case 0x87eabb53: return this.phoneCallRequested();
      case 0x997c454a: return this.phoneCallAccepted();
      case 0x8742ae7f: return this.phoneCall();
      case 0x50ca4de1: return this.phoneCallDiscarded();
      case 0x9d4c17c0: return this.phoneConnection();
      case 0xa2bb35cb: return this.phoneCallProtocol();
      case 0xec82e140: return this.phone_phoneCall();
      case 0x80c99768: return this.inputMessagesFilterPhoneCalls();
      case 0x80e11a7f: return this.messageActionPhoneCall();
      case 0x7a7c17a4: return this.inputMessagesFilterRoundVoice();
      case 0xb549da53: return this.inputMessagesFilterRoundVideo();
      case 0x88f27fbc: return this.sendMessageRecordRoundAction();
      case 0x243e1c66: return this.sendMessageUploadRoundAction();
      case 0xf18cda44: return this.upload_fileCdnRedirect();
      case 0xeea8e46e: return this.upload_cdnFileReuploadNeeded();
      case 0xa99fca4f: return this.upload_cdnFile();
      case 0xc982eaba: return this.cdnPublicKey();
      case 0x5725e40a: return this.cdnConfig();
      case 0xef1751b5: return this.pageBlockChannel();
      case 0xcad181f6: return this.langPackString();
      case 0x6c47ac9f: return this.langPackStringPluralized();
      case 0x2979eeb2: return this.langPackStringDeleted();
      case 0xf385c1f6: return this.langPackDifference();
      case 0xeeca5ce3: return this.langPackLanguage();
      case 0x46560264: return this.updateLangPackTooLong();
      case 0x56022f4d: return this.updateLangPack();
      case 0xccbebbaf: return this.channelParticipantAdmin();
      case 0x1c0facaf: return this.channelParticipantBanned();
      case 0x1427a5e1: return this.channelParticipantsBanned();
      case 0x656ac4b: return this.channelParticipantsSearch();
      case 0xe6dfb825: return this.channelAdminLogEventActionChangeTitle();
      case 0x55188a2e: return this.channelAdminLogEventActionChangeAbout();
      case 0x6a4afc38: return this.channelAdminLogEventActionChangeUsername();
      case 0x434bd2af: return this.channelAdminLogEventActionChangePhoto();
      case 0x1b7907ae: return this.channelAdminLogEventActionToggleInvites();
      case 0x26ae0971: return this.channelAdminLogEventActionToggleSignatures();
      case 0xe9e82c18: return this.channelAdminLogEventActionUpdatePinned();
      case 0x709b2405: return this.channelAdminLogEventActionEditMessage();
      case 0x42e047bb: return this.channelAdminLogEventActionDeleteMessage();
      case 0x183040d3: return this.channelAdminLogEventActionParticipantJoin();
      case 0xf89777f2: return this.channelAdminLogEventActionParticipantLeave();
      case 0xe31c34d8: return this.channelAdminLogEventActionParticipantInvite();
      case 0xe6d83d7e: return this.channelAdminLogEventActionParticipantToggleBan();
      case 0xd5676710: return this.channelAdminLogEventActionParticipantToggleAdmin();
      case 0x3b5a3e40: return this.channelAdminLogEvent();
      case 0xed8af74d: return this.channels_adminLogResults();
      case 0xea107ae4: return this.channelAdminLogEventsFilter();
      case 0x1e76a78c: return this.topPeerCategoryPhoneCalls();
      case 0x804361ea: return this.pageBlockAudio();
      case 0x5ce14175: return this.popularContact();
      case 0x4792929b: return this.messageActionScreenshotTaken();
      case 0x9e8fa6d3: return this.messages_favedStickersNotModified();
      case 0xf37f2f16: return this.messages_favedStickers();
      case 0xe511996d: return this.updateFavedStickers();
      case 0x89893b45: return this.updateChannelReadMessagesContents();
      case 0xc1f8e69a: return this.inputMessagesFilterMyMentions();
      case 0x7084a7be: return this.updateContactsReset();
      case 0xb1c3caa7: return this.channelAdminLogEventActionChangeStickerSet();
      case 0xfae69f56: return this.messageActionCustomAction();
      case 0xaa1c39f: return this.inputPaymentCredentialsApplePay();
      case 0xca05d50e: return this.inputPaymentCredentialsAndroidPay();
      case 0xe7026d0d: return this.inputMessagesFilterGeo();
      case 0xe062db83: return this.inputMessagesFilterContacts();
      case 0x70db6837: return this.updateChannelAvailableMessages();
      case 0x5f5c95f1: return this.channelAdminLogEventActionTogglePreHistoryHidden();
      case 0xce4e82fd: return this.inputMediaGeoLive();
      case 0x7c3c2609: return this.messageMediaGeoLive();
      case 0x46e1d13d: return this.recentMeUrlUnknown();
      case 0x8dbc3336: return this.recentMeUrlUser();
      case 0xa01b22f9: return this.recentMeUrlChat();
      case 0xeb49081d: return this.recentMeUrlChatInvite();
      case 0xbc0a57dc: return this.recentMeUrlStickerSet();
      case 0xe0310d7: return this.help_recentMeUrls();
      case 0xf0173fe9: return this.channels_channelParticipantsNotModified();
      case 0x74535f21: return this.messages_messagesNotModified();
      case 0x1cc6e91f: return this.inputSingleMedia();
      case 0xcac943f2: return this.webAuthorization();
      case 0xed56c9fc: return this.account_webAuthorizations();
      case 0xa676a322: return this.inputMessageID();
      case 0xbad88395: return this.inputMessageReplyTo();
      case 0x86872538: return this.inputMessagePinned();
      case 0x9b69e34b: return this.messageEntityPhone();
      case 0x4c4e743f: return this.messageEntityCashtag();
      case 0xabe9affe: return this.messageActionBotAllowed();
      case 0xfcaafeb7: return this.inputDialogPeer();
      case 0xe56dbf05: return this.dialogPeer();
      case 0xd54b65d: return this.messages_foundStickerSetsNotModified();
      case 0x5108d648: return this.messages_foundStickerSets();
      case 0x6242c773: return this.fileHash();
      case 0xf9c8bcc6: return this.webDocumentNoProxy();
      case 0x75588b3f: return this.inputClientProxy();
      case 0xe09e1fb8: return this.help_proxyDataEmpty();
      case 0x2bf7ee23: return this.help_proxyDataPromo();
      case 0xe3309f7f: return this.help_termsOfServiceUpdateEmpty();
      case 0x28ecf961: return this.help_termsOfServiceUpdate();
      case 0x3334b0f0: return this.inputSecureFileUploaded();
      case 0x5367e5be: return this.inputSecureFile();
      case 0xcbc7ee28: return this.inputSecureFileLocation();
      case 0x64199744: return this.secureFileEmpty();
      case 0xe0277a62: return this.secureFile();
      case 0x8aeabec3: return this.secureData();
      case 0x7d6099dd: return this.securePlainPhone();
      case 0x21ec5a5f: return this.securePlainEmail();
      case 0x9d2a81e3: return this.secureValueTypePersonalDetails();
      case 0x3dac6a00: return this.secureValueTypePassport();
      case 0x6e425c4: return this.secureValueTypeDriverLicense();
      case 0xa0d0744b: return this.secureValueTypeIdentityCard();
      case 0x99a48f23: return this.secureValueTypeInternalPassport();
      case 0xcbe31e26: return this.secureValueTypeAddress();
      case 0xfc36954e: return this.secureValueTypeUtilityBill();
      case 0x89137c0d: return this.secureValueTypeBankStatement();
      case 0x8b883488: return this.secureValueTypeRentalAgreement();
      case 0x99e3806a: return this.secureValueTypePassportRegistration();
      case 0xea02ec33: return this.secureValueTypeTemporaryRegistration();
      case 0xb320aadb: return this.secureValueTypePhone();
      case 0x8e3ca7ee: return this.secureValueTypeEmail();
      case 0x187fa0ca: return this.secureValue();
      case 0xdb21d0a7: return this.inputSecureValue();
      case 0xed1ecdb0: return this.secureValueHash();
      case 0xe8a40bd9: return this.secureValueErrorData();
      case 0xbe3dfa: return this.secureValueErrorFrontSide();
      case 0x868a2aa5: return this.secureValueErrorReverseSide();
      case 0xe537ced6: return this.secureValueErrorSelfie();
      case 0x7a700873: return this.secureValueErrorFile();
      case 0x666220e9: return this.secureValueErrorFiles();
      case 0x33f0ea47: return this.secureCredentialsEncrypted();
      case 0xad2e1cd8: return this.account_authorizationForm();
      case 0x811f854f: return this.account_sentEmailCode();
      case 0x1b287353: return this.messageActionSecureValuesSentMe();
      case 0xd95c6154: return this.messageActionSecureValuesSent();
      case 0x66afa166: return this.help_deepLinkInfoEmpty();
      case 0x6a4ee832: return this.help_deepLinkInfo();
      case 0x1142bd56: return this.savedPhoneContact();
      case 0x4dba4501: return this.account_takeout();
      case 0x29be5899: return this.inputTakeoutFileLocation();
      case 0xe16459c3: return this.updateDialogUnreadMark();
      case 0xf0e3e596: return this.messages_dialogsNotModified();
      case 0x9f2221c9: return this.inputWebFileGeoPointLocation();
      case 0xb52c939d: return this.contacts_topPeersDisabled();
      case 0x9b89f93a: return this.inputReportReasonCopyright();
      case 0xd45ab096: return this.passwordKdfAlgoUnknown();
      case 0x4a8537: return this.securePasswordKdfAlgoUnknown();
      case 0xbbf2dda0: return this.securePasswordKdfAlgoPBKDF2HMACSHA512iter100000();
      case 0x86471d92: return this.securePasswordKdfAlgoSHA512();
      case 0x1527bcac: return this.secureSecretSettings();
      case 0x3a912d4a: return this.passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow();
      case 0x9880f658: return this.inputCheckPasswordEmpty();
      case 0xd27ff082: return this.inputCheckPasswordSRP();
      case 0x869d758f: return this.secureValueError();
      case 0xa1144770: return this.secureValueErrorTranslationFile();
      case 0x34636dd8: return this.secureValueErrorTranslationFiles();
      case 0x829d99da: return this.secureRequiredType();
      case 0x27477b4: return this.secureRequiredTypeOneOf();
      case 0xbfb9f457: return this.help_passportConfigNotModified();
      case 0xa098d6af: return this.help_passportConfig();
      case 0x1d1b1245: return this.inputAppEvent();
      case 0xc0de1bd9: return this.jsonObjectValue();
      case 0x3f6d7b68: return this.jsonNull();
      case 0xc7345e6a: return this.jsonBool();
      case 0x2be0dfa4: return this.jsonNumber();
      case 0xb71e767a: return this.jsonString();
      case 0xf7444763: return this.jsonArray();
      case 0x99c1d49d: return this.jsonObject();
      case 0x4c43da18: return this.updateUserPinnedMessage();
      case 0xe10db349: return this.updateChatPinnedMessage();
      case 0xb1db7c7e: return this.inputNotifyBroadcasts();
      case 0xd612e8ef: return this.notifyBroadcasts();
      case 0xed6a8504: return this.textSubscript();
      case 0xc7fb5e01: return this.textSuperscript();
      case 0x34b8621: return this.textMarked();
      case 0x1ccb966a: return this.textPhone();
      case 0x81ccf4f: return this.textImage();
      case 0x1e148390: return this.pageBlockKicker();
      case 0x34566b6a: return this.pageTableCell();
      case 0xe0c0c5e5: return this.pageTableRow();
      case 0xbf4dea82: return this.pageBlockTable();
      case 0x6f747657: return this.pageCaption();
      case 0xb92fb6cd: return this.pageListItemText();
      case 0x25e073fc: return this.pageListItemBlocks();
      case 0x5e068047: return this.pageListOrderedItemText();
      case 0x98dd8936: return this.pageListOrderedItemBlocks();
      case 0x9a8ae1e1: return this.pageBlockOrderedList();
      case 0x76768bed: return this.pageBlockDetails();
      case 0xb390dc08: return this.pageRelatedArticle();
      case 0x16115a96: return this.pageBlockRelatedArticles();
      case 0xa44f3ef6: return this.pageBlockMap();
      case 0xae891bec: return this.page();
      case 0xdb9e70d2: return this.inputPrivacyKeyPhoneP2P();
      case 0x39491cc8: return this.privacyKeyPhoneP2P();
      case 0x35553762: return this.textAnchor();
      case 0x8c05f1c9: return this.help_supportName();
      case 0xf3ae2eed: return this.help_userInfoEmpty();
      case 0x1eb3758: return this.help_userInfo();
      case 0xf3f25f76: return this.messageActionContactSignUp();
      case 0xaca1657b: return this.updateMessagePoll();
      case 0x6ca9c2e9: return this.pollAnswer();
      case 0xd5529d06: return this.poll();
      case 0x3b6ddad2: return this.pollAnswerVoters();
      case 0x5755785a: return this.pollResults();
      case 0x6b3765b: return this.inputMediaPoll();
      case 0x4bd6e798: return this.messageMediaPoll();
      case 0xf041e250: return this.chatOnlines();
      case 0x47a971e0: return this.statsURL();
      case 0xe0b0bc2e: return this.photoStrippedSize();
      case 0x5fb224d5: return this.chatAdminRights();
      case 0x9f120418: return this.chatBannedRights();
      case 0x54c01850: return this.updateChatDefaultBannedRights();
      case 0xe630b979: return this.inputWallPaper();
      case 0x72091c80: return this.inputWallPaperSlug();
      case 0xbb6ae88d: return this.channelParticipantsContacts();
      case 0x2df5fc0a: return this.channelAdminLogEventActionDefaultBannedRights();
      case 0x8f079643: return this.channelAdminLogEventActionStopPoll();
      case 0x1c199183: return this.account_wallPapersNotModified();
      case 0x702b65a9: return this.account_wallPapers();
      case 0xdebebe83: return this.codeSettings();
      case 0xa12f40b8: return this.wallPaperSettings();
      case 0xd246fd47: return this.autoDownloadSettings();
      case 0x63cacf26: return this.account_autoDownloadSettings();
      case 0xd5b3b9f9: return this.emojiKeyword();
      case 0x236df622: return this.emojiKeywordDeleted();
      case 0x5cc761bd: return this.emojiKeywordsDifference();
      case 0xa575739d: return this.emojiURL();
      case 0xb3fb5361: return this.emojiLanguage();
      case 0xa4dd4c08: return this.inputPrivacyKeyForwards();
      case 0x69ec56a3: return this.privacyKeyForwards();
      case 0x5719bacc: return this.inputPrivacyKeyProfilePhoto();
      case 0x96151fed: return this.privacyKeyProfilePhoto();
      case 0xbc7fc6cd: return this.fileLocationToBeDeprecated();
      case 0x40181ffe: return this.inputPhotoFileLocation();
      case 0x27d69997: return this.inputPeerPhotoFileLocation();
      case 0xdbaeae9: return this.inputStickerSetThumb();
      case 0xff544e65: return this.folder();
      case 0x71bd134c: return this.dialogFolder();
      case 0x64600527: return this.inputDialogPeerFolder();
      case 0x514519e2: return this.dialogPeerFolder();
      case 0xfbd2c296: return this.inputFolderPeer();
      case 0xe9baa668: return this.folderPeer();
      case 0x19360dc0: return this.updateFolderPeers();
      case 0x2d117597: return this.inputUserFromMessage();
      case 0x2a286531: return this.inputChannelFromMessage();
      case 0x17bae2e6: return this.inputPeerUserFromMessage();
      case 0x9c95f7bb: return this.inputPeerChannelFromMessage();
      case 0x352dafa: return this.inputPrivacyKeyPhoneNumber();
      case 0xd19ae46d: return this.privacyKeyPhoneNumber();
      case 0xa8406ca9: return this.topPeerCategoryForwardUsers();
      case 0xfbeec0f0: return this.topPeerCategoryForwardChats();
      case 0xa26f881b: return this.channelAdminLogEventActionChangeLinkedChat();
      case 0xe844ebff: return this.messages_searchCounter();
      case 0x10b78d29: return this.keyboardButtonUrlAuth();
      case 0xd02e7fd4: return this.inputKeyboardButtonUrlAuth();
      case 0x92d33a0e: return this.urlAuthResultRequest();
      case 0x8f8c0e4e: return this.urlAuthResultAccepted();
      case 0xa9d6db1f: return this.urlAuthResultDefault();
      case 0x4c81c1ba: return this.inputPrivacyValueAllowChatParticipants();
      case 0xd82363af: return this.inputPrivacyValueDisallowChatParticipants();
      case 0x18be796b: return this.privacyValueAllowChatParticipants();
      case 0xacae0690: return this.privacyValueDisallowChatParticipants();
      case 0x9c4e7e8b: return this.messageEntityUnderline();
      case 0xbf0693d4: return this.messageEntityStrike();
      case 0x20df5d0: return this.messageEntityBlockquote();
      case 0x6a7e7366: return this.updatePeerSettings();
      case 0xbfb5ad8b: return this.channelLocationEmpty();
      case 0x209b82db: return this.channelLocation();
      case 0xca461b5d: return this.peerLocated();
      case 0xb4afcfb0: return this.updatePeerLocated();
      case 0xe6b76ae: return this.channelAdminLogEventActionChangeLocation();
      case 0xdbd4feed: return this.inputReportReasonGeoIrrelevant();
      case 0x53909779: return this.channelAdminLogEventActionToggleSlowMode();
      case 0x44747e9a: return this.auth_authorizationSignUpRequired();
      case 0xd8411139: return this.payments_paymentVerificationNeeded();
      case 0x28703c8: return this.inputStickerSetAnimatedEmoji();
      case 0x39a51dfb: return this.updateNewScheduledMessage();
      case 0x90866cee: return this.updateDeleteScheduledMessages();
      case 0xd072acb4: return this.restrictionReason();
      case 0x3c5693e9: return this.inputTheme();
      case 0xf5890df1: return this.inputThemeSlug();
      case 0x483d270c: return this.themeDocumentNotModified();
      case 0xf7d90ce0: return this.theme();
      case 0xf41eb622: return this.account_themesNotModified();
      case 0x7f676421: return this.account_themes();
      case 0x8216fba3: return this.updateTheme();
      case 0xd1219bdd: return this.inputPrivacyKeyAddedByPhone();
      case 0x42ffd42b: return this.privacyKeyAddedByPhone();
    }
  }

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

