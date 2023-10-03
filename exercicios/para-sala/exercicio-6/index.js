const { Account } = require('./resolucao');

luaraAccount = Account(123, 0001, 1000);
luaraAccount.credit(2000);
luaraAccount.debit(10000);

outraconta = Account(456, 0001, 100);
luaraAccount.transferTo(outraconta, 500);
