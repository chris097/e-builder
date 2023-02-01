type RouteUrl = {
    HOME_URL: string
    NOT_FOUND: string
    RESUME_URL: string
    PROFESSION_SUMMARY_URL: string
    WORK_HISTORY_URL: string
    EDUCATION_URL: string
    TECHNICAL_SKILL_URL: string
}

export const ROUTE_URL: RouteUrl = {
    HOME_URL: '/',
    NOT_FOUND: '*',
    RESUME_URL: '/resume',
    PROFESSION_SUMMARY_URL: '/resume/summary',
    WORK_HISTORY_URL: '/resume/history',
    EDUCATION_URL: '/resume/education',
    TECHNICAL_SKILL_URL: '/resume/skill'
}