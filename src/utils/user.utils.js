import {fakerES as faker} from "@faker-js/faker"

export const fakerUserGenerate = () => {
   const user = {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        password: faker.internet.password(),
        role: "user",
        cart: ""
    }

    const userMail ={...user, email: faker.internet.email({firstName: user.first_name, lastName:user.last_name})}

    return userMail

}

