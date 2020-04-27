interface SignInResponse {
    token: string;
    user: {
        name: string;
        email: string;
    }
}

export function signIn(): Promise<SignInResponse> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'dkajhdlkaejfhlekjfhslkfjheslkfjh',
                user: {
                    name: 'Mayck Coelho',
                    email: 'mayckcoelho0@gmail.com.br'
                }
            })
        }, 2000)
    })
}