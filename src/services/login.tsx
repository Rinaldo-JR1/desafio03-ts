import { api } from "../api"

export const login = async (email: string,senha:string): Promise<boolean> => {
    const data: any = await api(email,senha)
    
    if (email !== data.email) {
        return false
    }

    return true
}
