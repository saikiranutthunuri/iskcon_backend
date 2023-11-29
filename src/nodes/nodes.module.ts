import { Module } from '@nestjs/common';
import { NodesService } from './nodes.service';
import { nodesProviders } from './nodes.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [NodesService, ...nodesProviders],
  exports: [NodesService],
})
export class NodesModule {}
