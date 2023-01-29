import React from "react";
import ComposeInternalLayouts from "../components/HOC/ComposeInternalLayout";
import { ROUTE_URL } from "./url";
const Education = React.lazy(() =>  import("../pages/education"));
const ProfessionalSummary = React.lazy(() => import("../pages/professionalSummary"));
const TechnicalSkills = React.lazy(() => import("../pages/technicalSkills"));
const WorkHistory =  React.lazy(() => import("../pages/workHistory"));
const Resume = React.lazy(() => import("../pages/resume"));


type PublicRouteProps = {
    path: string
    element: any
};

export const publicRoutes: PublicRouteProps[] = [
    {
        path: ROUTE_URL.RESUME_URL,
        element: ComposeInternalLayouts(Resume)
    },
    {
        path: ROUTE_URL.PROFESSION_SUMMARY_URL,
        element: ComposeInternalLayouts(ProfessionalSummary)
    },
    {
        path: ROUTE_URL.EDUCATION_URL,
        element: ComposeInternalLayouts(Education)
    },
    {
        path: ROUTE_URL.TECHNICAL_SKILL_URL,
        element: ComposeInternalLayouts(TechnicalSkills)
    },
    {
        path: ROUTE_URL.WORK_HISTORY_URL,
        element:ComposeInternalLayouts( WorkHistory)
    }
]