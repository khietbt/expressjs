import { StringConstants } from '@src/constants';
import { NotContains, IsEmail, IsNotEmpty } from 'class-validator';

export class UserCreationRequest {
  @IsNotEmpty()
  @NotContains(StringConstants.SPACE)
  name!: string;

  @IsEmail()
  email!: string;
}
