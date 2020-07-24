import api from "./api";
import ISignInRequest from "../interfaces/ISignInRequest";
import ISignInResponse from "../interfaces/ISignInResponse";
import IRegisterRequest from "../interfaces/IRegisterRequest"

export async function signIn(data: ISignInRequest): Promise<ISignInResponse> {
    return await api.post("/login", data)
}

export async function register(data: IRegisterRequest): Promise<ISignInResponse> {
    return await api.post("/register", data)
}