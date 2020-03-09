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
  writeInt64(value: string): void;
  writeInt128(value: string): void;
  writeInt256(value: string): void;
  writeDouble(value: number): void;
  writeString(value: string): void;
  writeBytes(value: ArrayBuffer): void;
}

let s: ByteStream;
function i32(value: number) { s.writeInt32(value); }

function _vector(o: any) {
  i32(0x1cb5c415);
}

function _resPQ(o: any) {
  i32(0x5162463);
  i128(o.nonce);
  i128(o.server_nonce);
  bytes(o.pq);
  obj(o.server_public_key_fingerprints); // Vector<long>
}

function _p_q_inner_data(o: any) {
  i32(0x83c95aec);
  bytes(o.pq);
  bytes(o.p);
  bytes(o.q);
  i128(o.nonce);
  i128(o.server_nonce);
  i256(o.new_nonce);
}

function _p_q_inner_data_dc(o: any) {
  i32(0xa9f55f95);
  bytes(o.pq);
  bytes(o.p);
  bytes(o.q);
  i128(o.nonce);
  i128(o.server_nonce);
  i256(o.new_nonce);
  i32(o.dc);
}

function _p_q_inner_data_temp(o: any) {
  i32(0x3c6a84d4);
  bytes(o.pq);
  bytes(o.p);
  bytes(o.q);
  i128(o.nonce);
  i128(o.server_nonce);
  i256(o.new_nonce);
  i32(o.expires_in);
}

function _p_q_inner_data_temp_dc(o: any) {
  i32(0x56fddf88);
  bytes(o.pq);
  bytes(o.p);
  bytes(o.q);
  i128(o.nonce);
  i128(o.server_nonce);
  i256(o.new_nonce);
  i32(o.dc);
  i32(o.expires_in);
}

function _server_DH_params_fail(o: any) {
  i32(0x79cb045d);
  i128(o.nonce);
  i128(o.server_nonce);
  i128(o.new_nonce_hash);
}

function _server_DH_params_ok(o: any) {
  i32(0xd0e8075c);
  i128(o.nonce);
  i128(o.server_nonce);
  bytes(o.encrypted_answer);
}

function _server_DH_inner_data(o: any) {
  i32(0xb5890dba);
  i128(o.nonce);
  i128(o.server_nonce);
  i32(o.g);
  bytes(o.dh_prime);
  bytes(o.g_a);
  i32(o.server_time);
}

function _client_DH_inner_data(o: any) {
  i32(0x6643b654);
  i128(o.nonce);
  i128(o.server_nonce);
  i64(o.retry_id);
  bytes(o.g_b);
}

function _dh_gen_ok(o: any) {
  i32(0x3bcbf734);
  i128(o.nonce);
  i128(o.server_nonce);
  i128(o.new_nonce_hash1);
}

function _dh_gen_retry(o: any) {
  i32(0x46dc1fb9);
  i128(o.nonce);
  i128(o.server_nonce);
  i128(o.new_nonce_hash2);
}

function _dh_gen_fail(o: any) {
  i32(0xa69dae02);
  i128(o.nonce);
  i128(o.server_nonce);
  i128(o.new_nonce_hash3);
}

function _rpc_result(o: any) {
  i32(0xf35c6d01);
  i64(o.req_msg_id);
  obj(o.result); // Object
}

function _rpc_error(o: any) {
  i32(0x2144ca19);
  i32(o.error_code);
  str(o.error_message);
}

function _rpc_answer_unknown(o: any) {
  i32(0x5e2ad36e);
}

function _rpc_answer_dropped_running(o: any) {
  i32(0xcd78e586);
}

function _rpc_answer_dropped(o: any) {
  i32(0xa43ad8b7);
  i64(o.msg_id);
  i32(o.seq_no);
  i32(o.bytes);
}

function _future_salt(o: any) {
  i32(0x949d9dc);
  i32(o.valid_since);
  i32(o.valid_until);
  i64(o.salt);
}

function _future_salts(o: any) {
  i32(0xae500895);
  i64(o.req_msg_id);
  i32(o.now);
  obj(o.salts); // vector<future_salt>
}

function _pong(o: any) {
  i32(0x347773c5);
  i64(o.msg_id);
  i64(o.ping_id);
}

function _new_session_created(o: any) {
  i32(0x9ec20908);
  i64(o.first_msg_id);
  i64(o.unique_id);
  i64(o.server_salt);
}

function _msg_container(o: any) {
  i32(0x73f1f8dc);
  obj(o.messages); // vector<%Message>
}

function _message(o: any) {
  i32(0x5bb8e511);
  i64(o.msg_id);
  i32(o.seqno);
  i32(o.bytes);
  obj(o.body); // Object
}

function _msg_copy(o: any) {
  i32(0xe06046b2);
  obj(o.orig_message); // Message
}

function _gzip_packed(o: any) {
  i32(0x3072cfa1);
  bytes(o.packed_data);
}

function _msgs_ack(o: any) {
  i32(0x62d6b459);
  obj(o.msg_ids); // Vector<long>
}

function _bad_msg_notification(o: any) {
  i32(0xa7eff811);
  i64(o.bad_msg_id);
  i32(o.bad_msg_seqno);
  i32(o.error_code);
}

function _bad_server_salt(o: any) {
  i32(0xedab447b);
  i64(o.bad_msg_id);
  i32(o.bad_msg_seqno);
  i32(o.error_code);
  i64(o.new_server_salt);
}

function _msg_resend_req(o: any) {
  i32(0x7d861a08);
  obj(o.msg_ids); // Vector<long>
}

function _msg_resend_ans_req(o: any) {
  i32(0x8610baeb);
  obj(o.msg_ids); // Vector<long>
}

function _msgs_state_req(o: any) {
  i32(0xda69fb52);
  obj(o.msg_ids); // Vector<long>
}

function _msgs_state_info(o: any) {
  i32(0x4deb57d);
  i64(o.req_msg_id);
  bytes(o.info);
}

function _msgs_all_info(o: any) {
  i32(0x8cc0d131);
  obj(o.msg_ids); // Vector<long>
  bytes(o.info);
}

function _msg_detailed_info(o: any) {
  i32(0x276d3ec6);
  i64(o.msg_id);
  i64(o.answer_msg_id);
  i32(o.bytes);
  i32(o.status);
}

function _msg_new_detailed_info(o: any) {
  i32(0x809db6df);
  i64(o.answer_msg_id);
  i32(o.bytes);
  i32(o.status);
}

function _bind_auth_key_inner(o: any) {
  i32(0x75a3f765);
  i64(o.nonce);
  i64(o.temp_auth_key_id);
  i64(o.perm_auth_key_id);
  i64(o.temp_session_id);
  i32(o.expires_at);
}

function _destroy_auth_key_ok(o: any) {
  i32(0xf660e1d4);
}

function _destroy_auth_key_none(o: any) {
  i32(0xa9f2259);
}

function _destroy_auth_key_fail(o: any) {
  i32(0xea109b13);
}

function _destroy_session_ok(o: any) {
  i32(0xe22045fc);
  i64(o.session_id);
}

function _destroy_session_none(o: any) {
  i32(0x62d350c9);
  i64(o.session_id);
}

const builderMap: Record<string, (o: any) => void> = {
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

function obj(o: any) {
  const func = builderMap[o._];
  func(o);
}

export function build(stream: ByteStream, o: any) {
  s = stream;
  return obj(o);
}
