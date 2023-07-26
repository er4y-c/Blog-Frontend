import { object, string } from 'yup';

export const contactSchema = object({
    email: string().email().required(),
    message: string().min(5).required(),
});