# 04. Data Encryption & Key Management

Overview: encrypt everything in transit and at rest, and guard the keys like crown jewels.

### Description
- Enable TLS for APIs, replication, and ingestion.
- Use a managed KMS or HSM to create, rotate, and revoke keys.

### History Snapshot
- Plaintext indexes once sat on shared disks.
- Volume encryption (LUKS, EBS) became default, then envelope encryption arrived.
- Field-level crypto now protects PII even from DB admins.

### Pros
- Reduces blast radius if disks or snapshots leak.
- Meets compliance demands (PCI, HIPAA).
- Central policies simplify rotation and auditing.

### Cons
- Key misuse or deletion can lock you out of data.
- Extra CPU overhead for heavy encryption.
- Requires secure storage of config and credentials.

### Production Apps
- Hosted search clusters encrypt node-to-node traffic via TLS cert rotation.
- Banks store API keys in HSMs and never expose raw material to developers.
- Healthcare teams encrypt SSN fields before indexing.

### Tiny Example
- **Input:** new index stores `customer_email`.
- **Output steps:**
	1. App encrypts the field with KMS key `alias/search-email`.
	2. Encrypted blob lands in the index; only app can decrypt.
	3. Rotation job swaps keys monthly and re-encrypts data without downtime.
