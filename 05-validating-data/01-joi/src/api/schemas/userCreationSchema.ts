import Joi from 'joi';

export const userCreationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required()
});
