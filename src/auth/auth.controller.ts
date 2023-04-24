import {
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequest } from './models/AuthRequest';
import { IsPublic } from './decorators/is-public.decorator';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('v1/login')
    @IsPublic()
    @UseGuards(LocalAuthGuard)
    @HttpCode(HttpStatus.OK)
    @ApiBearerAuth()
    @ApiQuery({name: 'password', required: true, explode: false, type: String, isArray: false})
    @ApiQuery({name: 'email', required: true, explode: false, type: String, isArray: false})
    async login(@Request() req: AuthRequest) {
        return this.authService.login(req.user);
    }
}
