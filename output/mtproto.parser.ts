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
  readInt32(): number;
  readInt64(): string;
  readInt128(): string;
  readInt256(): string;
  readDouble(): number;
  readString(): string;
  readBytes(): ArrayBuffer;
  revert(bytes: number): void;
}

let s: ByteStream;
let fallbackParse: ((stream: ByteStream) => any) | undefined;

export default function parse(stream: ByteStream, fallback?: (stream: ByteStream) => any) {
  s = stream;
  fallbackParse = fallback;
  return obj();
}

function i32() { return s.readInt32(); }
function i64() { return s.readInt64(); }
function i128() { return s.readInt128(); }
function i256() { return s.readInt256(); }
function f64() { return s.readDouble(); }
function str() { return s.readString(); }
function bytes() { return s.readBytes(); }

function vector(t: () => any, bare = false) {
  if (!bare) { i32(); /* ignoring constructor id. */ }
  const len = i32();
  const result = [];
  for (let i = 0; i < len; ++i) result.push(t());
  return result;
}

function _vector() { return {_: 'vector'}; }
function _resPQ() { return {_: 'resPQ', nonce: i128(), server_nonce: i128(), pq: bytes(), server_public_key_fingerprints: vector(i64)}; }
function _p_q_inner_data() { return {_: 'p_q_inner_data', pq: bytes(), p: bytes(), q: bytes(), nonce: i128(), server_nonce: i128(), new_nonce: i256()}; }
function _p_q_inner_data_dc() { return {_: 'p_q_inner_data_dc', pq: bytes(), p: bytes(), q: bytes(), nonce: i128(), server_nonce: i128(), new_nonce: i256(), dc: i32()}; }
function _p_q_inner_data_temp() { return {_: 'p_q_inner_data_temp', pq: bytes(), p: bytes(), q: bytes(), nonce: i128(), server_nonce: i128(), new_nonce: i256(), expires_in: i32()}; }
function _p_q_inner_data_temp_dc() { return {_: 'p_q_inner_data_temp_dc', pq: bytes(), p: bytes(), q: bytes(), nonce: i128(), server_nonce: i128(), new_nonce: i256(), dc: i32(), expires_in: i32()}; }
function _server_DH_params_fail() { return {_: 'server_DH_params_fail', nonce: i128(), server_nonce: i128(), new_nonce_hash: i128()}; }
function _server_DH_params_ok() { return {_: 'server_DH_params_ok', nonce: i128(), server_nonce: i128(), encrypted_answer: bytes()}; }
function _server_DH_inner_data() { return {_: 'server_DH_inner_data', nonce: i128(), server_nonce: i128(), g: i32(), dh_prime: bytes(), g_a: bytes(), server_time: i32()}; }
function _client_DH_inner_data() { return {_: 'client_DH_inner_data', nonce: i128(), server_nonce: i128(), retry_id: i64(), g_b: bytes()}; }
function _dh_gen_ok() { return {_: 'dh_gen_ok', nonce: i128(), server_nonce: i128(), new_nonce_hash1: i128()}; }
function _dh_gen_retry() { return {_: 'dh_gen_retry', nonce: i128(), server_nonce: i128(), new_nonce_hash2: i128()}; }
function _dh_gen_fail() { return {_: 'dh_gen_fail', nonce: i128(), server_nonce: i128(), new_nonce_hash3: i128()}; }
function _rpc_result() { return {_: 'rpc_result', req_msg_id: i64(), result: obj()}; }
function _rpc_error() { return {_: 'rpc_error', error_code: i32(), error_message: str()}; }
function _rpc_answer_unknown() { return {_: 'rpc_answer_unknown'}; }
function _rpc_answer_dropped_running() { return {_: 'rpc_answer_dropped_running'}; }
function _rpc_answer_dropped() { return {_: 'rpc_answer_dropped', msg_id: i64(), seq_no: i32(), bytes: i32()}; }
function _future_salt() { return {_: 'future_salt', valid_since: i32(), valid_until: i32(), salt: i64()}; }
function _future_salts() { return {_: 'future_salts', req_msg_id: i64(), now: i32(), salts: vector(_future_salt)}; }
function _pong() { return {_: 'pong', msg_id: i64(), ping_id: i64()}; }
function _new_session_created() { return {_: 'new_session_created', first_msg_id: i64(), unique_id: i64(), server_salt: i64()}; }
function _msg_container() { return {_: 'msg_container', messages: vector(_message, true)}; }
function _message() { return {_: 'message', msg_id: i64(), seqno: i32(), bytes: i32(), body: obj()}; }
function _msg_copy() { return {_: 'msg_copy', orig_message: obj()}; }
function _gzip_packed() { return {_: 'gzip_packed', packed_data: bytes()}; }
function _msgs_ack() { return {_: 'msgs_ack', msg_ids: vector(i64)}; }
function _bad_msg_notification() { return {_: 'bad_msg_notification', bad_msg_id: i64(), bad_msg_seqno: i32(), error_code: i32()}; }
function _bad_server_salt() { return {_: 'bad_server_salt', bad_msg_id: i64(), bad_msg_seqno: i32(), error_code: i32(), new_server_salt: i64()}; }
function _msg_resend_req() { return {_: 'msg_resend_req', msg_ids: vector(i64)}; }
function _msg_resend_ans_req() { return {_: 'msg_resend_ans_req', msg_ids: vector(i64)}; }
function _msgs_state_req() { return {_: 'msgs_state_req', msg_ids: vector(i64)}; }
function _msgs_state_info() { return {_: 'msgs_state_info', req_msg_id: i64(), info: bytes()}; }
function _msgs_all_info() { return {_: 'msgs_all_info', msg_ids: vector(i64), info: bytes()}; }
function _msg_detailed_info() { return {_: 'msg_detailed_info', msg_id: i64(), answer_msg_id: i64(), bytes: i32(), status: i32()}; }
function _msg_new_detailed_info() { return {_: 'msg_new_detailed_info', answer_msg_id: i64(), bytes: i32(), status: i32()}; }
function _bind_auth_key_inner() { return {_: 'bind_auth_key_inner', nonce: i64(), temp_auth_key_id: i64(), perm_auth_key_id: i64(), temp_session_id: i64(), expires_at: i32()}; }
function _destroy_auth_key_ok() { return {_: 'destroy_auth_key_ok'}; }
function _destroy_auth_key_none() { return {_: 'destroy_auth_key_none'}; }
function _destroy_auth_key_fail() { return {_: 'destroy_auth_key_fail'}; }
function _destroy_session_ok() { return {_: 'destroy_session_ok', session_id: i64()}; }
function _destroy_session_none() { return {_: 'destroy_session_none', session_id: i64()}; }

const parserMap: Record<number, () => any> = {
  0x1cb5c415: _vector,
  0x5162463: _resPQ,
  0x83c95aec: _p_q_inner_data,
  0xa9f55f95: _p_q_inner_data_dc,
  0x3c6a84d4: _p_q_inner_data_temp,
  0x56fddf88: _p_q_inner_data_temp_dc,
  0x79cb045d: _server_DH_params_fail,
  0xd0e8075c: _server_DH_params_ok,
  0xb5890dba: _server_DH_inner_data,
  0x6643b654: _client_DH_inner_data,
  0x3bcbf734: _dh_gen_ok,
  0x46dc1fb9: _dh_gen_retry,
  0xa69dae02: _dh_gen_fail,
  0xf35c6d01: _rpc_result,
  0x2144ca19: _rpc_error,
  0x5e2ad36e: _rpc_answer_unknown,
  0xcd78e586: _rpc_answer_dropped_running,
  0xa43ad8b7: _rpc_answer_dropped,
  0x949d9dc: _future_salt,
  0xae500895: _future_salts,
  0x347773c5: _pong,
  0x9ec20908: _new_session_created,
  0x73f1f8dc: _msg_container,
  0x5bb8e511: _message,
  0xe06046b2: _msg_copy,
  0x3072cfa1: _gzip_packed,
  0x62d6b459: _msgs_ack,
  0xa7eff811: _bad_msg_notification,
  0xedab447b: _bad_server_salt,
  0x7d861a08: _msg_resend_req,
  0x8610baeb: _msg_resend_ans_req,
  0xda69fb52: _msgs_state_req,
  0x4deb57d: _msgs_state_info,
  0x8cc0d131: _msgs_all_info,
  0x276d3ec6: _msg_detailed_info,
  0x809db6df: _msg_new_detailed_info,
  0x75a3f765: _bind_auth_key_inner,
  0xf660e1d4: _destroy_auth_key_ok,
  0xa9f2259: _destroy_auth_key_none,
  0xea109b13: _destroy_auth_key_fail,
  0xe22045fc: _destroy_session_ok,
  0x62d350c9: _destroy_session_none,
};

function obj() {
  const c = i32() >>> 0;
  const f = parserMap[c];
  if (f) {
    return f();
  } else if (fallbackParse) {
    s.revert(4);
    return fallbackParse(s);
  } else {
    console.error(`Unknown constructor 0x${c.toString(16)}.`);
    return undefined;
  }
}
