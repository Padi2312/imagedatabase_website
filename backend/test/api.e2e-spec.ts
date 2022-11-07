import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ApiModule } from './../src/api/api.module';
describe('ApiController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ApiModule],
    }).compile();

    jest.useFakeTimers('modern')
    jest.setSystemTime(new Date("2022-11-07T19:25:52.476Z"))
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/api')
      .expect(200)
      .expect({
        version: 1,
        dateTime: new Date("2022-11-07T19:25:52.476Z").toISOString(),
      });
  });
});
