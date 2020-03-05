class MessageParser {
  readInt(): number {}
  readLong(): string {}
  readString(): string {}
  readObject() {}
  private src: Bytes;
  private offset: number;

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

