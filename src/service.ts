import { mutationApi } from "./helpers/api/mutationApi";
import { apiUrls } from "./helpers/api/url";

const { REACT_APP_BACKEND_URL } = process.env;

export const fetchProfessionalSummary = (payload: object, responses:any, err:any) => {
    const professionSummary = `${REACT_APP_BACKEND_URL}/${apiUrls.USER_INFO}`
    return mutationApi(professionSummary, apiUrls.POST, payload, responses, err)
}