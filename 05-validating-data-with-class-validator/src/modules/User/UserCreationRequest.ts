import { StringConstants } from '@src/constants';
import { IsEmail, IsNotEmpty, NotContains } from 'class-validator';

export class UserCreationRequest {
  @IsNotEmpty()
  @NotContains(StringConstants.SPACE)
  public name: string;

  @IsEmail()
  public email: string;
}
