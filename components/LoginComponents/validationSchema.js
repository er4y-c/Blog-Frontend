import { object, string } from 'yup';

export const validationSchema = object({
    username: string().required(),
    password: string().min(6).required(),
});