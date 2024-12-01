import { userManager } from "./userManager.js"; 
import { fakerUserGenerate } from "../../utils/user.utils.js";

export const createUsersMock = async (qty = 10) => {
    try {
        const users = []
        for (let i = 0; i < qty; i++) {
            const user = fakerUserGenerate()
            users.push(user)
            console.log(user)
        }
        console.log(users)
        //return await userManager.createUser(users)
    } catch (error) {
        throw new Error(error);
        
    }
}

createUsersMock()

export const getUsers = async () => {
    try {
        return await userManager.getUserById()
    } catch (error) {
        throw new Error(error)
    }
}