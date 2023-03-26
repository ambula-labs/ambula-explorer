export class Peer {
	constructor(role, peerId, bestHash, bestNumber) {
		this.role = role;
		this.peerId = peerId;
		this.bestHash = bestHash;
		this.bestNumber = bestNumber;
	}
}
