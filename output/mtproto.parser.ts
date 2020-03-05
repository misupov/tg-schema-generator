class MessageParser {
  readInt(): number {}
  readLong(): string {}
  readString(): string {}
  private src: Bytes;
  private offset: number;

  readObject() {
    switch (this.readInt()) {
      case 0x1cb5c415: return this.vector();
      case 0x5162463: return this.resPQ();
      case 0x83c95aec: return this.p_q_inner_data();
      case 0xa9f55f95: return this.p_q_inner_data_dc();
      case 0x3c6a84d4: return this.p_q_inner_data_temp();
      case 0x56fddf88: return this.p_q_inner_data_temp_dc();
      case 0x79cb045d: return this.server_DH_params_fail();
      case 0xd0e8075c: return this.server_DH_params_ok();
      case 0xb5890dba: return this.server_DH_inner_data();
      case 0x6643b654: return this.client_DH_inner_data();
      case 0x3bcbf734: return this.dh_gen_ok();
      case 0x46dc1fb9: return this.dh_gen_retry();
      case 0xa69dae02: return this.dh_gen_fail();
      case 0xf35c6d01: return this.rpc_result();
      case 0x2144ca19: return this.rpc_error();
      case 0x5e2ad36e: return this.rpc_answer_unknown();
      case 0xcd78e586: return this.rpc_answer_dropped_running();
      case 0xa43ad8b7: return this.rpc_answer_dropped();
      case 0x949d9dc: return this.future_salt();
      case 0xae500895: return this.future_salts();
      case 0x347773c5: return this.pong();
      case 0x9ec20908: return this.new_session_created();
      case 0x73f1f8dc: return this.msg_container();
      case 0x5bb8e511: return this.message();
      case 0xe06046b2: return this.msg_copy();
      case 0x3072cfa1: return this.gzip_packed();
      case 0x62d6b459: return this.msgs_ack();
      case 0xa7eff811: return this.bad_msg_notification();
      case 0xedab447b: return this.bad_server_salt();
      case 0x7d861a08: return this.msg_resend_req();
      case 0x8610baeb: return this.msg_resend_ans_req();
      case 0xda69fb52: return this.msgs_state_req();
      case 0x4deb57d: return this.msgs_state_info();
      case 0x8cc0d131: return this.msgs_all_info();
      case 0x276d3ec6: return this.msg_detailed_info();
      case 0x809db6df: return this.msg_new_detailed_info();
      case 0x75a3f765: return this.bind_auth_key_inner();
      case 0xf660e1d4: return this.destroy_auth_key_ok();
      case 0xa9f2259: return this.destroy_auth_key_none();
      case 0xea109b13: return this.destroy_auth_key_fail();
      case 0xe22045fc: return this.destroy_session_ok();
      case 0x62d350c9: return this.destroy_session_none();
    }
  }

  vector() {
    return {
      _: 'vector',
    }
  }

  resPQ() {
    return {
      _: 'resPQ',
      nonce: this.readObject(),
      server_nonce: this.readObject(),
      pq: this.readObject(),
      server_public_key_fingerprints: this.readObject(),
    }
  }

  p_q_inner_data() {
    return {
      _: 'p_q_inner_data',
      pq: this.readObject(),
      p: this.readObject(),
      q: this.readObject(),
      nonce: this.readObject(),
      server_nonce: this.readObject(),
      new_nonce: this.readObject(),
    }
  }

  p_q_inner_data_dc() {
    return {
      _: 'p_q_inner_data_dc',
      pq: this.readObject(),
      p: this.readObject(),
      q: this.readObject(),
      nonce: this.readObject(),
      server_nonce: this.readObject(),
      new_nonce: this.readObject(),
      dc: this.readInt(),
    }
  }

  p_q_inner_data_temp() {
    return {
      _: 'p_q_inner_data_temp',
      pq: this.readObject(),
      p: this.readObject(),
      q: this.readObject(),
      nonce: this.readObject(),
      server_nonce: this.readObject(),
      new_nonce: this.readObject(),
      expires_in: this.readInt(),
    }
  }

  p_q_inner_data_temp_dc() {
    return {
      _: 'p_q_inner_data_temp_dc',
      pq: this.readObject(),
      p: this.readObject(),
      q: this.readObject(),
      nonce: this.readObject(),
      server_nonce: this.readObject(),
      new_nonce: this.readObject(),
      dc: this.readInt(),
      expires_in: this.readInt(),
    }
  }

  server_DH_params_fail() {
    return {
      _: 'server_DH_params_fail',
      nonce: this.readObject(),
      server_nonce: this.readObject(),
      new_nonce_hash: this.readObject(),
    }
  }

  server_DH_params_ok() {
    return {
      _: 'server_DH_params_ok',
      nonce: this.readObject(),
      server_nonce: this.readObject(),
      encrypted_answer: this.readObject(),
    }
  }

  server_DH_inner_data() {
    return {
      _: 'server_DH_inner_data',
      nonce: this.readObject(),
      server_nonce: this.readObject(),
      g: this.readInt(),
      dh_prime: this.readObject(),
      g_a: this.readObject(),
      server_time: this.readInt(),
    }
  }

  client_DH_inner_data() {
    return {
      _: 'client_DH_inner_data',
      nonce: this.readObject(),
      server_nonce: this.readObject(),
      retry_id: this.readLong(),
      g_b: this.readObject(),
    }
  }

  dh_gen_ok() {
    return {
      _: 'dh_gen_ok',
      nonce: this.readObject(),
      server_nonce: this.readObject(),
      new_nonce_hash1: this.readObject(),
    }
  }

  dh_gen_retry() {
    return {
      _: 'dh_gen_retry',
      nonce: this.readObject(),
      server_nonce: this.readObject(),
      new_nonce_hash2: this.readObject(),
    }
  }

  dh_gen_fail() {
    return {
      _: 'dh_gen_fail',
      nonce: this.readObject(),
      server_nonce: this.readObject(),
      new_nonce_hash3: this.readObject(),
    }
  }

  rpc_result() {
    return {
      _: 'rpc_result',
      req_msg_id: this.readLong(),
      result: this.readObject(),
    }
  }

  rpc_error() {
    return {
      _: 'rpc_error',
      error_code: this.readInt(),
      error_message: this.readString(),
    }
  }

  rpc_answer_unknown() {
    return {
      _: 'rpc_answer_unknown',
    }
  }

  rpc_answer_dropped_running() {
    return {
      _: 'rpc_answer_dropped_running',
    }
  }

  rpc_answer_dropped() {
    return {
      _: 'rpc_answer_dropped',
      msg_id: this.readLong(),
      seq_no: this.readInt(),
      bytes: this.readInt(),
    }
  }

  future_salt() {
    return {
      _: 'future_salt',
      valid_since: this.readInt(),
      valid_until: this.readInt(),
      salt: this.readLong(),
    }
  }

  future_salts() {
    return {
      _: 'future_salts',
      req_msg_id: this.readLong(),
      now: this.readInt(),
      salts: this.readObject(),
    }
  }

  pong() {
    return {
      _: 'pong',
      msg_id: this.readLong(),
      ping_id: this.readLong(),
    }
  }

  new_session_created() {
    return {
      _: 'new_session_created',
      first_msg_id: this.readLong(),
      unique_id: this.readLong(),
      server_salt: this.readLong(),
    }
  }

  msg_container() {
    return {
      _: 'msg_container',
      messages: this.readObject(),
    }
  }

  message() {
    return {
      _: 'message',
      msg_id: this.readLong(),
      seqno: this.readInt(),
      bytes: this.readInt(),
      body: this.readObject(),
    }
  }

  msg_copy() {
    return {
      _: 'msg_copy',
      orig_message: this.readObject(),
    }
  }

  gzip_packed() {
    return {
      _: 'gzip_packed',
      packed_data: this.readObject(),
    }
  }

  msgs_ack() {
    return {
      _: 'msgs_ack',
      msg_ids: this.readObject(),
    }
  }

  bad_msg_notification() {
    return {
      _: 'bad_msg_notification',
      bad_msg_id: this.readLong(),
      bad_msg_seqno: this.readInt(),
      error_code: this.readInt(),
    }
  }

  bad_server_salt() {
    return {
      _: 'bad_server_salt',
      bad_msg_id: this.readLong(),
      bad_msg_seqno: this.readInt(),
      error_code: this.readInt(),
      new_server_salt: this.readLong(),
    }
  }

  msg_resend_req() {
    return {
      _: 'msg_resend_req',
      msg_ids: this.readObject(),
    }
  }

  msg_resend_ans_req() {
    return {
      _: 'msg_resend_ans_req',
      msg_ids: this.readObject(),
    }
  }

  msgs_state_req() {
    return {
      _: 'msgs_state_req',
      msg_ids: this.readObject(),
    }
  }

  msgs_state_info() {
    return {
      _: 'msgs_state_info',
      req_msg_id: this.readLong(),
      info: this.readObject(),
    }
  }

  msgs_all_info() {
    return {
      _: 'msgs_all_info',
      msg_ids: this.readObject(),
      info: this.readObject(),
    }
  }

  msg_detailed_info() {
    return {
      _: 'msg_detailed_info',
      msg_id: this.readLong(),
      answer_msg_id: this.readLong(),
      bytes: this.readInt(),
      status: this.readInt(),
    }
  }

  msg_new_detailed_info() {
    return {
      _: 'msg_new_detailed_info',
      answer_msg_id: this.readLong(),
      bytes: this.readInt(),
      status: this.readInt(),
    }
  }

  bind_auth_key_inner() {
    return {
      _: 'bind_auth_key_inner',
      nonce: this.readLong(),
      temp_auth_key_id: this.readLong(),
      perm_auth_key_id: this.readLong(),
      temp_session_id: this.readLong(),
      expires_at: this.readInt(),
    }
  }

  destroy_auth_key_ok() {
    return {
      _: 'destroy_auth_key_ok',
    }
  }

  destroy_auth_key_none() {
    return {
      _: 'destroy_auth_key_none',
    }
  }

  destroy_auth_key_fail() {
    return {
      _: 'destroy_auth_key_fail',
    }
  }

  destroy_session_ok() {
    return {
      _: 'destroy_session_ok',
      session_id: this.readLong(),
    }
  }

  destroy_session_none() {
    return {
      _: 'destroy_session_none',
      session_id: this.readLong(),
    }
  }

