export interface LoginRequestModel {
    name: string
    phone: string
}

export interface LoginResponseModel {
    id: number
    name: string
    phone: string
    className: string
    status: string
    projectStatus: string
    testAt: string
    checkinAt: string
    access: string
    refresh: string
    seat?: string
}
