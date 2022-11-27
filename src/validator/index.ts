import * as yup from 'yup';

export const userinfoSchema = yup.object().shape({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    profession: yup.string().required(),
    city: yup.string().required(),
    email: yup.string().email().trim().required(),
    phone: yup.string().required(),
    street: yup.string().required(),
    state: yup.string().required(),
    country: yup.string().required(),
    bio: yup.string().required().min(50).max(500),
    linkedin: yup.string().required(),
    twitter: yup.string().required(),
    website: yup.string().required()
});