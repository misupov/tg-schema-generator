/*******************************************************************************************/
/* This file was automatically generated (https://github.com/misupov/tg-schema-generator). */
/*                                                                                         */
/* Do not make changes to this file unless you know what you are doing -- modify           */
/* the tool instead.                                                                       */
/*                                                                                         */
/* Source: mtproto.json                                                                    */
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

function _vector(s: ByteStream, o: any) {
  i32(s, 0x1cb5c415);
}

function _resPQ(s: ByteStream, o: any) {
  i32(s, 0x5162463);
  o.nonce
  o.server_nonce
  o.pq
  o.server_public_key_fingerprints
}

function _p_q_inner_data(s: ByteStream, o: any) {
  i32(s, 0x83c95aec);
  o.pq
  o.p
  o.q
  o.nonce
  o.server_nonce
  o.new_nonce
}

function _p_q_inner_data_dc(s: ByteStream, o: any) {
  i32(s, 0xa9f55f95);
  o.pq
  o.p
  o.q
  o.nonce
  o.server_nonce
  o.new_nonce
  i32(s, o.dc);
}

function _p_q_inner_data_temp(s: ByteStream, o: any) {
  i32(s, 0x3c6a84d4);
  o.pq
  o.p
  o.q
  o.nonce
  o.server_nonce
  o.new_nonce
  i32(s, o.expires_in);
}

function _p_q_inner_data_temp_dc(s: ByteStream, o: any) {
  i32(s, 0x56fddf88);
  o.pq
  o.p
  o.q
  o.nonce
  o.server_nonce
  o.new_nonce
  i32(s, o.dc);
  i32(s, o.expires_in);
}

function _server_DH_params_fail(s: ByteStream, o: any) {
  i32(s, 0x79cb045d);
  o.nonce
  o.server_nonce
  o.new_nonce_hash
}

function _server_DH_params_ok(s: ByteStream, o: any) {
  i32(s, 0xd0e8075c);
  o.nonce
  o.server_nonce
  o.encrypted_answer
}

function _server_DH_inner_data(s: ByteStream, o: any) {
  i32(s, 0xb5890dba);
  o.nonce
  o.server_nonce
  i32(s, o.g);
  o.dh_prime
  o.g_a
  i32(s, o.server_time);
}

function _client_DH_inner_data(s: ByteStream, o: any) {
  i32(s, 0x6643b654);
  o.nonce
  o.server_nonce
  o.retry_id
  o.g_b
}

function _dh_gen_ok(s: ByteStream, o: any) {
  i32(s, 0x3bcbf734);
  o.nonce
  o.server_nonce
  o.new_nonce_hash1
}

function _dh_gen_retry(s: ByteStream, o: any) {
  i32(s, 0x46dc1fb9);
  o.nonce
  o.server_nonce
  o.new_nonce_hash2
}

function _dh_gen_fail(s: ByteStream, o: any) {
  i32(s, 0xa69dae02);
  o.nonce
  o.server_nonce
  o.new_nonce_hash3
}

function _rpc_result(s: ByteStream, o: any) {
  i32(s, 0xf35c6d01);
  o.req_msg_id
  o.result
}

function _rpc_error(s: ByteStream, o: any) {
  i32(s, 0x2144ca19);
  i32(s, o.error_code);
  o.error_message
}

function _rpc_answer_unknown(s: ByteStream, o: any) {
  i32(s, 0x5e2ad36e);
}

function _rpc_answer_dropped_running(s: ByteStream, o: any) {
  i32(s, 0xcd78e586);
}

function _rpc_answer_dropped(s: ByteStream, o: any) {
  i32(s, 0xa43ad8b7);
  o.msg_id
  i32(s, o.seq_no);
  i32(s, o.bytes);
}

function _future_salt(s: ByteStream, o: any) {
  i32(s, 0x949d9dc);
  i32(s, o.valid_since);
  i32(s, o.valid_until);
  o.salt
}

function _future_salts(s: ByteStream, o: any) {
  i32(s, 0xae500895);
  o.req_msg_id
  i32(s, o.now);
  o.salts
}

function _pong(s: ByteStream, o: any) {
  i32(s, 0x347773c5);
  o.msg_id
  o.ping_id
}

function _new_session_created(s: ByteStream, o: any) {
  i32(s, 0x9ec20908);
  o.first_msg_id
  o.unique_id
  o.server_salt
}

function _msg_container(s: ByteStream, o: any) {
  i32(s, 0x73f1f8dc);
  o.messages
}

function _message(s: ByteStream, o: any) {
  i32(s, 0x5bb8e511);
  o.msg_id
  i32(s, o.seqno);
  i32(s, o.bytes);
  o.body
}

function _msg_copy(s: ByteStream, o: any) {
  i32(s, 0xe06046b2);
  o.orig_message
}

function _gzip_packed(s: ByteStream, o: any) {
  i32(s, 0x3072cfa1);
  o.packed_data
}

function _msgs_ack(s: ByteStream, o: any) {
  i32(s, 0x62d6b459);
  o.msg_ids
}

function _bad_msg_notification(s: ByteStream, o: any) {
  i32(s, 0xa7eff811);
  o.bad_msg_id
  i32(s, o.bad_msg_seqno);
  i32(s, o.error_code);
}

function _bad_server_salt(s: ByteStream, o: any) {
  i32(s, 0xedab447b);
  o.bad_msg_id
  i32(s, o.bad_msg_seqno);
  i32(s, o.error_code);
  o.new_server_salt
}

function _msg_resend_req(s: ByteStream, o: any) {
  i32(s, 0x7d861a08);
  o.msg_ids
}

function _msg_resend_ans_req(s: ByteStream, o: any) {
  i32(s, 0x8610baeb);
  o.msg_ids
}

function _msgs_state_req(s: ByteStream, o: any) {
  i32(s, 0xda69fb52);
  o.msg_ids
}

function _msgs_state_info(s: ByteStream, o: any) {
  i32(s, 0x4deb57d);
  o.req_msg_id
  o.info
}

function _msgs_all_info(s: ByteStream, o: any) {
  i32(s, 0x8cc0d131);
  o.msg_ids
  o.info
}

function _msg_detailed_info(s: ByteStream, o: any) {
  i32(s, 0x276d3ec6);
  o.msg_id
  o.answer_msg_id
  i32(s, o.bytes);
  i32(s, o.status);
}

function _msg_new_detailed_info(s: ByteStream, o: any) {
  i32(s, 0x809db6df);
  o.answer_msg_id
  i32(s, o.bytes);
  i32(s, o.status);
}

function _bind_auth_key_inner(s: ByteStream, o: any) {
  i32(s, 0x75a3f765);
  o.nonce
  o.temp_auth_key_id
  o.perm_auth_key_id
  o.temp_session_id
  i32(s, o.expires_at);
}

function _destroy_auth_key_ok(s: ByteStream, o: any) {
  i32(s, 0xf660e1d4);
}

function _destroy_auth_key_none(s: ByteStream, o: any) {
  i32(s, 0xa9f2259);
}

function _destroy_auth_key_fail(s: ByteStream, o: any) {
  i32(s, 0xea109b13);
}

function _destroy_session_ok(s: ByteStream, o: any) {
  i32(s, 0xe22045fc);
  o.session_id
}

function _destroy_session_none(s: ByteStream, o: any) {
  i32(s, 0x62d350c9);
  o.session_id
}

const builderMap: Record<string, (s: ByteStream, o: any) => void> = {
  'vector': _vector,
  'resPQ': _resPQ,
  'p_q_inner_data': _p_q_inner_data,
  'p_q_inner_data_dc': _p_q_inner_data_dc,
  'p_q_inner_data_temp': _p_q_inner_data_temp,
  'p_q_inner_data_temp_dc': _p_q_inner_data_temp_dc,
  'server_DH_params_fail': _server_DH_params_fail,
  'server_DH_params_ok': _server_DH_params_ok,
  'server_DH_inner_data': _server_DH_inner_data,
  'client_DH_inner_data': _client_DH_inner_data,
  'dh_gen_ok': _dh_gen_ok,
  'dh_gen_retry': _dh_gen_retry,
  'dh_gen_fail': _dh_gen_fail,
  'rpc_result': _rpc_result,
  'rpc_error': _rpc_error,
  'rpc_answer_unknown': _rpc_answer_unknown,
  'rpc_answer_dropped_running': _rpc_answer_dropped_running,
  'rpc_answer_dropped': _rpc_answer_dropped,
  'future_salt': _future_salt,
  'future_salts': _future_salts,
  'pong': _pong,
  'new_session_created': _new_session_created,
  'msg_container': _msg_container,
  'message': _message,
  'msg_copy': _msg_copy,
  'gzip_packed': _gzip_packed,
  'msgs_ack': _msgs_ack,
  'bad_msg_notification': _bad_msg_notification,
  'bad_server_salt': _bad_server_salt,
  'msg_resend_req': _msg_resend_req,
  'msg_resend_ans_req': _msg_resend_ans_req,
  'msgs_state_req': _msgs_state_req,
  'msgs_state_info': _msgs_state_info,
  'msgs_all_info': _msgs_all_info,
  'msg_detailed_info': _msg_detailed_info,
  'msg_new_detailed_info': _msg_new_detailed_info,
  'bind_auth_key_inner': _bind_auth_key_inner,
  'destroy_auth_key_ok': _destroy_auth_key_ok,
  'destroy_auth_key_none': _destroy_auth_key_none,
  'destroy_auth_key_fail': _destroy_auth_key_fail,
  'destroy_session_ok': _destroy_session_ok,
  'destroy_session_none': _destroy_session_none,
}

function obj(s: ByteStream, o: any) {
  const func = builderMap[o._];
  func(s, o);
}

export function build(s: ByteStream, o: any) {
  return obj(s, o);
}
