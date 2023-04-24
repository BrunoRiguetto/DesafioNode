import { UserEntity } from './../../users/entities/user.entity';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { AuthRequest } from '../models/AuthRequest';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): UserEntity => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.user;
  },
);
