interface ByteStream {
  readInt32(): number;
  readUint32(): number;
  readInt64(): string;
  readInt128(): string;
  readInt256(): string;
  readDouble(): number;
  readString(): string;
  readBytes(): ArrayBuffer;
  revert(bytes: number): void;
}

interface Parser {
  parse(stream: ByteStream): any;
}

export default class MessageParser implements Parser {
  private _s!: ByteStream;
  
  constructor(private fallbackParser?: Parser) {}
  
  public parse(stream: ByteStream) {
    this._s = stream;
    return this.o();
  }
  
  private i32 = () => this._s.readInt32();
  private u32 = () => this._s.readUint32();
  private i64 = () => this._s.readInt64();
  private i128 = () => this._s.readInt128();
  private i256 = () => this._s.readInt256();
  private d = () => this._s.readDouble();
  private s = () => this._s.readString();
  private b = () => this._s.readBytes();
  
  private v = (t: () => any, bare = false) => {
    if (!bare) { this.u32(); } // should always be 481674261
    const len = this.u32();
    const result = [];
    for (let i = 0; i < len; ++i) result.push(t());
    return result;
  }
  
  private o = (): any => {
    const t = this;
    const c = this.u32();
    switch (c) {
      case 0x1cb5c415: return t.D();
      case 0x5162463: return t.BEU();
      case 0x83c95aec: return t.BEV();
      case 0xa9f55f95: return t.BEW();
      case 0x3c6a84d4: return t.BEX();
      case 0x56fddf88: return t.BEY();
      case 0x79cb045d: return t.BEZ();
      case 0xd0e8075c: return t.BFA();
      case 0xb5890dba: return t.BFB();
      case 0x6643b654: return t.BFC();
      case 0x3bcbf734: return t.BFD();
      case 0x46dc1fb9: return t.BFE();
      case 0xa69dae02: return t.BFF();
      case 0xf35c6d01: return t.BFG();
      case 0x2144ca19: return t.BFH();
      case 0x5e2ad36e: return t.BFI();
      case 0xcd78e586: return t.BFJ();
      case 0xa43ad8b7: return t.BFK();
      case 0x949d9dc: return t.BFL();
      case 0xae500895: return t.BFM();
      case 0x347773c5: return t.BFN();
      case 0x9ec20908: return t.BFO();
      case 0x73f1f8dc: return t.BFP();
      case 0x5bb8e511: return t.DK();
      case 0xe06046b2: return t.BFQ();
      case 0x3072cfa1: return t.BFR();
      case 0x62d6b459: return t.BFS();
      case 0xa7eff811: return t.BFT();
      case 0xedab447b: return t.BFU();
      case 0x7d861a08: return t.BFV();
      case 0x8610baeb: return t.BFW();
      case 0xda69fb52: return t.BFX();
      case 0x4deb57d: return t.BFY();
      case 0x8cc0d131: return t.BFZ();
      case 0x276d3ec6: return t.BGA();
      case 0x809db6df: return t.BGB();
      case 0x75a3f765: return t.BGC();
      case 0xf660e1d4: return t.BGD();
      case 0xa9f2259: return t.BGE();
      case 0xea109b13: return t.BGF();
      case 0xe22045fc: return t.BGG();
      case 0x62d350c9: return t.BGH();
      default: {
        if (this.fallbackParser) {
          this._s.revert(4);
          return this.fallbackParser.parse(this._s);
        } else {
          console.error(`Unknown constructor 0x${c.toString(16)}.`);
          return undefined;
        }
      }
    }
  }
  
  D = () => ({_: 'vector'})
  BEU = () => ({_: 'resPQ', nonce: this.i128(), server_nonce: this.i128(), pq: this.b(), server_public_key_fingerprints: this.v(this.i64)})
  BEV = () => ({_: 'p_q_inner_data', pq: this.b(), p: this.b(), q: this.b(), nonce: this.i128(), server_nonce: this.i128(), new_nonce: this.i256()})
  BEW = () => ({_: 'p_q_inner_data_dc', pq: this.b(), p: this.b(), q: this.b(), nonce: this.i128(), server_nonce: this.i128(), new_nonce: this.i256(), dc: this.i32()})
  BEX = () => ({_: 'p_q_inner_data_temp', pq: this.b(), p: this.b(), q: this.b(), nonce: this.i128(), server_nonce: this.i128(), new_nonce: this.i256(), expires_in: this.i32()})
  BEY = () => ({_: 'p_q_inner_data_temp_dc', pq: this.b(), p: this.b(), q: this.b(), nonce: this.i128(), server_nonce: this.i128(), new_nonce: this.i256(), dc: this.i32(), expires_in: this.i32()})
  BEZ = () => ({_: 'server_DH_params_fail', nonce: this.i128(), server_nonce: this.i128(), new_nonce_hash: this.i128()})
  BFA = () => ({_: 'server_DH_params_ok', nonce: this.i128(), server_nonce: this.i128(), encrypted_answer: this.b()})
  BFB = () => ({_: 'server_DH_inner_data', nonce: this.i128(), server_nonce: this.i128(), g: this.i32(), dh_prime: this.b(), g_a: this.b(), server_time: this.i32()})
  BFC = () => ({_: 'client_DH_inner_data', nonce: this.i128(), server_nonce: this.i128(), retry_id: this.i64(), g_b: this.b()})
  BFD = () => ({_: 'dh_gen_ok', nonce: this.i128(), server_nonce: this.i128(), new_nonce_hash1: this.i128()})
  BFE = () => ({_: 'dh_gen_retry', nonce: this.i128(), server_nonce: this.i128(), new_nonce_hash2: this.i128()})
  BFF = () => ({_: 'dh_gen_fail', nonce: this.i128(), server_nonce: this.i128(), new_nonce_hash3: this.i128()})
  BFG = () => ({_: 'rpc_result', req_msg_id: this.i64(), result: this.o()})
  BFH = () => ({_: 'rpc_error', error_code: this.i32(), error_message: this.s()})
  BFI = () => ({_: 'rpc_answer_unknown'})
  BFJ = () => ({_: 'rpc_answer_dropped_running'})
  BFK = () => ({_: 'rpc_answer_dropped', msg_id: this.i64(), seq_no: this.i32(), bytes: this.i32()})
  BFL = () => ({_: 'future_salt', valid_since: this.i32(), valid_until: this.i32(), salt: this.i64()})
  BFM = () => ({_: 'future_salts', req_msg_id: this.i64(), now: this.i32(), salts: this.v(this.BFL)})
  BFN = () => ({_: 'pong', msg_id: this.i64(), ping_id: this.i64()})
  BFO = () => ({_: 'new_session_created', first_msg_id: this.i64(), unique_id: this.i64(), server_salt: this.i64()})
  BFP = () => ({_: 'msg_container', messages: this.v(this.DK, true)})
  DK = () => ({_: 'message', msg_id: this.i64(), seqno: this.i32(), bytes: this.i32(), body: this.o()})
  BFQ = () => ({_: 'msg_copy', orig_message: this.o()})
  BFR = () => ({_: 'gzip_packed', packed_data: this.b()})
  BFS = () => ({_: 'msgs_ack', msg_ids: this.v(this.i64)})
  BFT = () => ({_: 'bad_msg_notification', bad_msg_id: this.i64(), bad_msg_seqno: this.i32(), error_code: this.i32()})
  BFU = () => ({_: 'bad_server_salt', bad_msg_id: this.i64(), bad_msg_seqno: this.i32(), error_code: this.i32(), new_server_salt: this.i64()})
  BFV = () => ({_: 'msg_resend_req', msg_ids: this.v(this.i64)})
  BFW = () => ({_: 'msg_resend_ans_req', msg_ids: this.v(this.i64)})
  BFX = () => ({_: 'msgs_state_req', msg_ids: this.v(this.i64)})
  BFY = () => ({_: 'msgs_state_info', req_msg_id: this.i64(), info: this.b()})
  BFZ = () => ({_: 'msgs_all_info', msg_ids: this.v(this.i64), info: this.b()})
  BGA = () => ({_: 'msg_detailed_info', msg_id: this.i64(), answer_msg_id: this.i64(), bytes: this.i32(), status: this.i32()})
  BGB = () => ({_: 'msg_new_detailed_info', answer_msg_id: this.i64(), bytes: this.i32(), status: this.i32()})
  BGC = () => ({_: 'bind_auth_key_inner', nonce: this.i64(), temp_auth_key_id: this.i64(), perm_auth_key_id: this.i64(), temp_session_id: this.i64(), expires_at: this.i32()})
  BGD = () => ({_: 'destroy_auth_key_ok'})
  BGE = () => ({_: 'destroy_auth_key_none'})
  BGF = () => ({_: 'destroy_auth_key_fail'})
  BGG = () => ({_: 'destroy_session_ok', session_id: this.i64()})
  BGH = () => ({_: 'destroy_session_none', session_id: this.i64()})
}
