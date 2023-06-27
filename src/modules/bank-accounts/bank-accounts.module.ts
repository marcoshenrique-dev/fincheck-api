import { Module } from '@nestjs/common';
import { BankAccountsService } from './services/bank-accounts.service';
import { BankAccountsController } from './bank-accounts.controller';
import { validateBankAccountOwnershipService } from './services/validate-bank-account-ownership.service';

@Module({
  controllers: [BankAccountsController],
  providers: [BankAccountsService, validateBankAccountOwnershipService],
  exports: [validateBankAccountOwnershipService],
})
export class BankAccountsModule {}
