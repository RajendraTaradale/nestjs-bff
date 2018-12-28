import { CoreModule } from '@nestjs-bff/backend/lib/domain/core/domain.core.module';
import { MongoSharedProviderTokens } from '@nestjs-bff/backend/lib/shared/database/mongo/mongo.shared.constants';
import { Module } from '@nestjs/common';
import { ReminderArchiveSchema } from './model/reminder-archive.schema';
import { ReminderArchiveProviderTokens } from './reminder-archive.constants';
import { ReminderArchiveRepoCache } from './repo/reminder-archive.cache-repo';
import { ReminderArchiveRepo } from './repo/reminder-archive.repo';
import { ReminderArchiveRepoWrite } from './repo/reminder-archive.write-repo';

const ReminderArchiveModelProvider = {
  provide: ReminderArchiveProviderTokens.Models.ReminderArchive,
  useFactory: mongoose => mongoose.connection.model('ReminderArchive', ReminderArchiveSchema),
  inject: [MongoSharedProviderTokens.Connections.Mongoose],
};

@Module({
  imports: [CoreModule],
  providers: [ReminderArchiveModelProvider, ReminderArchiveRepo, ReminderArchiveRepoCache, ReminderArchiveRepoWrite],
  exports: [ReminderArchiveRepo, ReminderArchiveRepoCache, ReminderArchiveRepoWrite],
})
export class ReminderArchiveModule {}
