import { Module } from '@nestjs/common';
import { CategoriesService } from './services/categories.service';
import { CategoriesController } from './categories.controller';
import { ValidateCategorysOwnershipService } from './services/validate-category-ownership.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, ValidateCategorysOwnershipService],
  exports: [ValidateCategorysOwnershipService],
})
export class CategoriesModule {}
