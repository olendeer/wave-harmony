

interface Breadcrumb{
    name: string
    link?: string
}

export interface IBreadcrumbsProps {
    breadcrumbs: Breadcrumb[]
}