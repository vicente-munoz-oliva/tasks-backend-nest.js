import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'node6947-maxiventa.vcloud.virtualix.cl',
      port: 11013,
      password: 'ak0Bu3Oc9v',
      username: 'webadmin',
      entities: ['dist/**/*.entity.js'],
      database: 'app_nest',
      synchronize: true,
      logging: true,
    }),
    TaskModule,
    UserModule,
    AuthModule
  ],
})
export class AppModule { }
