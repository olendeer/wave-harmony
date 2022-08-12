

export interface IContacts{
    phone: string
    schedule: string
    social: {
        in: string
        vk: string
        fb: string
        wa: string
    },
    email: string
    dealerEmail: string
    requisites: string
}




export interface IDeliveryQuestion {
    name: string
    answer: string
}

export interface IDelivery{
    name: string
    title: string
    questions: IDeliveryQuestion[]
}



export interface IAboutAdvantage{
    name: string
    title: string
}

export interface IAbout{
    text: string
    advantages: IAboutAdvantage[]
}



export interface IPartner{
    id: number
    name: string
    address: number
    schedule: string
    phone: string
    site: string
    images: string[]
}