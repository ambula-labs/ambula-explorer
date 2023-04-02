const { ApiPromise, WsProvider, Keyring } = require('@polkadot/api');
const { mnemonicGenerate } = require('@polkadot/util-crypto');


async function main () {
  const provider = new WsProvider('ws://127.0.0.1:9944');
  const api = await ApiPromise.create({ provider });

  // Générer une nouvelle paire de clés si vous n'avez pas encore de clé
  const keyring = new Keyring({ type: 'sr25519' });
  const account = keyring.addFromUri(mnemonicGenerate());

  console.log(`Adresse du compte : ${account.address}`);

  // Lire le solde du compte
  const { nonce, data: balance } = await api.query.system.account(account.address);

  console.log(`Balance du compte : ${balance.free} unités`);

  if (balance.free != 0) {
  // Créer une transaction de transfert à partir du compte par défaut 'Alice'
  const aliceAddress = api.createType('AccountId', '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty');
  const tx = api.tx.balances.transfer(aliceAddress, 12345);

  // Signer et envoyer la transaction
  const { nonce: newNonce } = await tx.signAndSend(account);

  console.log(`Transaction envoyée avec succès (nonce=${newNonce}).`);
  }
  else console.log("Balance nulle, pas de possibilité d'envoi");

}

main().catch(console.error);