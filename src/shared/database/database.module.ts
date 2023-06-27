import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BankAccountRepository } from './repositories/bank-accounts.repositories';
import { CategoriesRepository } from './repositories/categories.repositories';
import { UsersRepository } from './repositories/users.repositories';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    CategoriesRepository,
    BankAccountRepository,
  ],
  exports: [UsersRepository, CategoriesRepository, BankAccountRepository],
})
export class DatabaseModule {}
