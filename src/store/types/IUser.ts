export interface IUser {
    name: string;
    email: string;
    role: string;
    id: string;
    createdAt: Date;
}

export interface IGenericResponse {
    status: string;
    message: string;
}