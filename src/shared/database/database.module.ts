import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BankAccountRepository } from './repositories/bank-accounts.repositories';
import { CategoriesRepository } from './repositories/categories.repositories';
import { TransactionsRepository } from './repositories/transactions.repository';
import { UsersRepository } from './repositories/users.repositories';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    CategoriesRepository,
    BankAccountRepository,
    TransactionsRepository,
  ],
  exports: [
    UsersRepository,
    CategoriesRepository,
    BankAccountRepository,
    TransactionsRepository,
  ],
})
export class DatabaseModule {}
