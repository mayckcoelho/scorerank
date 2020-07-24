import IUser from "./IUser";
import ISignInRequest from "./ISignInRequest";
import ISignInResponse from "./ISignInResponse";
import IRegisterRequest from "./IRegisterRequest";

interface IAuthContextData {
    signed: boolean;
    user: IUser | null;
    loading: boolean;
    register: (data: IRegisterRequest) => Promise<void | ISignInResponse>;
    signIn: (data: ISignInRequest) => Promise<void | ISignInResponse>;
    signOut(): void;
    updateScore(): Promise<void>;
}

export default IAuthContextData;