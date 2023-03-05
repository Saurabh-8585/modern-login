export interface IRegister{
        fullName: string;
        email: string;
        phoneNumber: string;
        password: string;
        confirmPassword: string;
}
export interface ILogin{
    email: string;
    password: string;
    
}
export interface cardProps{
    id: string;
    sName: string;
    std: string;
    status: string;
}