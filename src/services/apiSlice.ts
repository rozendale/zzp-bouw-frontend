import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type { IContactenList, IContactenDetail, IProjectList, IProjectDetail, IWerkOmschrijvingenList, IWerkOmschrijvingenDetail, IFactuurList, IFactuurDetail, IWerkzaamhedenList, IWerkzaamhedenDetail, ITransactieList, ITransactieForm, IDesignerList} from './modelspy.types';
import type { INumberList} from './modelspy.types';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://127.0.0.1:8000/api/",
        // baseUrl: "http://127.0.0.1:8000/prime/",
        // credentials: "same-origin", 
        // proxy: "http://localhost:8080/API"
    }),
    keepUnusedDataFor: 360,
    tagTypes: ['tContacten', 'tProject', 'tWerkOmschrijvingen', 'tWerkzaamheden', 'tFactuur', 'tNumber', 'tDesigner', 'tTransactie'],
    endpoints: (builder) => ({

        // Contacten
        contactenList: builder.query<[IContactenList], void>({
            query: () => ({
                url: `contacten/`,
            }),
            keepUnusedDataFor: 1520,
        providesTags: ['tContacten']
        }),
        contactenDetail: builder.query<IContactenDetail, number>({
            query: (path) => ({
                url: `contacten/${path}/`,
            }),
        providesTags: ['tContacten']
        }),
        contactenCreate: builder.mutation<void, IContactenDetail>({
            query: (args) => ({
                url: `contacten/`,
                method: 'POST',
                body: args,
            }),
            invalidatesTags: ['tContacten']
        }),
        contactenUpdate: builder.mutation<void, [IContactenDetail, number]>({
            query: (args) => ({
                url: `contacten/${args[1]}/`,
                method: 'PUT',
                body: args[0]
            }),
        invalidatesTags: ['tContacten']
        }),
        contactenDelete: builder.mutation<void, number>({
            query: (path) => ({
                url: `contacten/${path}`,
                method: 'DELETE',
            }),
        invalidatesTags: ['tContacten']
        }),

        // Project
        ProjectList: builder.query<[IProjectList], void>({
            query: () => ({
                url: `project/`,
            }),
            keepUnusedDataFor: 1520,
        providesTags: ['tProject']
        }),
        ProjectDetail: builder.query<IProjectDetail, number>({
            query: (path) => ({
                url: `project/${path}/`,
            }),
        providesTags: ['tProject']
        }),
        ProjectCreate: builder.mutation<void, IProjectDetail>({
            query: (args) => ({
                url: `project/`,
                method: 'POST',
                body: args,
            }),
            invalidatesTags: ['tProject']
        }),
        ProjectUpdate: builder.mutation<void, [IProjectDetail, number]>({
            query: (args) => ({
                url: `project/${args[1]}/`,
                method: 'PUT',
                body: args[0]
            }),
        invalidatesTags: ['tProject']
        }),
        ProjectDelete: builder.mutation<void, number>({
            query: (path) => ({
                url: `project/${path}`,
                method: 'DELETE',
            }),
        invalidatesTags: ['tProject']
        }),

        // WerkOmschrijvingen
        WerkOmschrijvingenList: builder.query<[IWerkOmschrijvingenList], void>({
            query: () => ({
                url: `werkomschrijvingen/`,
            }),
            keepUnusedDataFor: 1520,
        providesTags: ['tWerkOmschrijvingen']
        }),
        WerkOmschrijvingenDetail: builder.query<IWerkOmschrijvingenDetail, number>({
            query: (path) => ({
                url: `werkomschrijvingen/${path}/`,
            }),
        providesTags: ['tWerkOmschrijvingen']
        }),
        WerkOmschrijvingenCreate: builder.mutation<void, IWerkOmschrijvingenDetail>({
            query: (args) => ({
                url: `werkomschrijvingen/`,
                method: 'POST',
                body: args,
            }),
            invalidatesTags: ['tWerkOmschrijvingen']
        }),
        WerkOmschrijvingenUpdate: builder.mutation<void, [IWerkOmschrijvingenDetail, number]>({
            query: (args) => ({
                url: `werkomschrijvingen/${args[1]}/`,
                method: 'PUT',
                body: args[0]
            }),
        invalidatesTags: ['tWerkOmschrijvingen']
        }),
        WerkOmschrijvingenDelete: builder.mutation<void, number>({
            query: (path) => ({
                url: `werkomschrijvingen/${path}`,
                method: 'DELETE',
            }),
        invalidatesTags: ['tWerkOmschrijvingen']
        }),
        
        // Werkzaamheden
        WerkzaamhedenList: builder.query<[IWerkzaamhedenList], void>({
            query: () => ({
                url: `werkzaamheden/`,
            }),
            keepUnusedDataFor: 1520,
        providesTags: ['tWerkzaamheden']
        }),
        WerkzaamhedenDetail: builder.query<IWerkzaamhedenDetail, number>({
            query: (path) => ({
                url: `werkzaamheden/${path}/`,
            }),
        providesTags: ['tWerkzaamheden']
        }),
        WerkzaamhedenCreate: builder.mutation<void, IWerkzaamhedenDetail>({
            query: (args) => ({
                url: `werkzaamheden/`,
                method: 'POST',
                body: args,
            }),
            invalidatesTags: ['tWerkzaamheden']
        }),
        WerkzaamhedenUpdate: builder.mutation<void, [IWerkzaamhedenDetail, number]>({
            query: (args) => ({
                url: `werkzaamheden/${args[1]}/`,
                method: 'PUT',
                body: args[0]
            }),
        invalidatesTags: ['tWerkzaamheden']
        }),
        WerkzaamhedenDelete: builder.mutation<void, number>({
            query: (path) => ({
                url: `werkzaamheden/${path}`,
                method: 'DELETE',
            }),
        invalidatesTags: ['tWerkzaamheden']
        }),

        // Factuur
        FactuurList: builder.query<[IFactuurList], void>({
            query: () => ({
                url: `factuur/`,
            }),
            keepUnusedDataFor: 1520,
        providesTags: ['tFactuur']
        }),
        FactuurDetail: builder.query<IFactuurDetail, number>({
            query: (path) => ({
                url: `factuur/${path}/`,
            }),
        providesTags: ['tFactuur']
        }),
        FactuurCreate: builder.mutation<void, IFactuurDetail>({
            query: (args) => ({
                url: `factuur/`,
                method: 'POST',
                body: args,
            }),
            invalidatesTags: ['tFactuur']
        }),
        FactuurUpdate: builder.mutation<void, [IFactuurDetail, number]>({
            query: (args) => ({
                url: `factuur/${args[1]}/`,
                method: 'PUT',
                body: args[0]
            }),
        invalidatesTags: ['tFactuur']
        }),
        FactuurDelete: builder.mutation<void, number>({
            query: (path) => ({
                url: `factuur/${path}`,
                method: 'DELETE',
            }),
        invalidatesTags: ['tFactuur']
        }),

        // Transactie
        TransactieList: builder.query<[ITransactieList], void>({
            query: () => ({
                url: `transactie/`,
            }),
            keepUnusedDataFor: 1520,
        providesTags: ['tTransactie']
        }),
        // TransactieDetail: builder.query<ITransactieList, number>({
        //     query: (path) => ({
        //         url: `transactie/${path}/`,
        //     }),
        // providesTags: ['tTransactie']
        // }),
        TransactieCreate: builder.mutation<void, ITransactieForm>({
            query: (args) => ({
                url: `transactie/`,
                method: 'POST',
                body: args,
            }),
            invalidatesTags: ['tTransactie']
        }),
        TransactieUpdate: builder.mutation<void, [ITransactieForm, number]>({
            query: (args) => ({
                url: `transactie/${args[1]}/`,
                method: 'PUT',
                body: args[0]
            }),
        invalidatesTags: ['tTransactie']
        }),
        TransactieDelete: builder.mutation<void, number>({
            query: (path) => ({
                url: `transactie/${path}`,
                method: 'DELETE',
            }),
        invalidatesTags: ['tTransactie']
        }),


        // Primeza
        NumberList: builder.query<[INumberList], void>({
            query: () => ({
                url: `prime/`,
            }),
            keepUnusedDataFor: 1520,
        providesTags: ['tNumber']
        }),

        // ICM
        DesignerList: builder.query<[IDesignerList], void>({
            query: () => ({
                url: `designerlist`,
            }),
            keepUnusedDataFor: 1520,
        providesTags: ['tDesigner']
        }),

    })
});

export const {
    //Contancten
    useContactenListQuery,
    useContactenDetailQuery,
    useContactenCreateMutation,
    useContactenUpdateMutation,
    useContactenDeleteMutation,
    //Project
    useProjectListQuery,
    useProjectDetailQuery,
    useProjectCreateMutation,
    useProjectUpdateMutation,
    useProjectDeleteMutation,
    //WerkOmschrijvingen
    useWerkOmschrijvingenListQuery,
    useWerkOmschrijvingenDetailQuery,
    useWerkOmschrijvingenCreateMutation,
    useWerkOmschrijvingenUpdateMutation,
    useWerkOmschrijvingenDeleteMutation,
    //Factuur
    useFactuurListQuery,
    useFactuurDetailQuery,
    useFactuurCreateMutation,
    useFactuurUpdateMutation,
    useFactuurDeleteMutation,
    //Transactie
    useTransactieListQuery,
    useTransactieCreateMutation,
    useTransactieUpdateMutation,
    useTransactieDeleteMutation,
    //Werkzaamheden
    useWerkzaamhedenListQuery,
    useWerkzaamhedenDetailQuery,
    useWerkzaamhedenCreateMutation,
    useWerkzaamhedenUpdateMutation,
    useWerkzaamhedenDeleteMutation,
    // Primaze
    useNumberListQuery,
    // ICM
    useDesignerListQuery,

} = apiSlice;

export default apiSlice;