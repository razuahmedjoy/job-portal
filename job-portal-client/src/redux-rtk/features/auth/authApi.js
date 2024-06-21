import { apiSlice } from "../api/apiSlice";
import Cookies from 'js-cookie';
import { userLoggedIn } from "./authSlice";
import toast from 'react-hot-toast';
import { ENUM_TAG_TYPES } from "../api/tagTypes";

const URL = 'auth/'

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // *register endpoint here
        signup: builder.mutation({
            query: (data) => ({
                url: `${URL}signup`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: [ENUM_TAG_TYPES.USERS],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    toast.success(result.data.message);
                } catch (error) {
                    toast.error(error.error.data.message);
                }
            }
        }),

        // login endpoint here
        login: builder.mutation({
            query: (formData) => ({
                url: `${URL}signin`,
                method: 'POST',
                body: formData
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {

                    const result = await queryFulfilled;
                    console.log(result.data)

                    // setting logged data to redux state
                    dispatch(userLoggedIn({
                        accessToken: result.data.data.accessToken,
                        _id: result.data.data._id,
                        role: result.data.data.role,
                    }));

                    // setting cookies
                    Cookies.set('accessToken', result.data.data.accessToken, { expires: arg.rememberMe ? 30 : 1 });
                    Cookies.set('_id', result.data.data._id, { expires: arg.rememberMe ? 30 : 1 });
                    toast.success(result.data.message);
                } catch (error) {
                    toast.error(error?.error?.data?.message)
                }
            }
        }),

        // get profile endpoint here
        // getProfile: builder.query({
        //     query: (userId) => `profile`,
        //     providesTags: ['Profile'],
        //     async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        //         try {
        //             const result = await queryFulfilled;
        //             dispatch(profileLog(result.data.user));
        //         } catch (error: any) {
        //             toast.error(error.error.data.message);
        //         }
        //     }
        // }),

    })
});

export const {
    useSignupMutation,
    useLoginMutation,
    // useGetProfileQuery 
} = authApi;