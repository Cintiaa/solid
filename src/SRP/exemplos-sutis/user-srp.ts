interface UserRegistrationDTO {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
}

interface UserQueryDTO {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class UserRegistrationService {
  registerUser(user: UserRegistrationDTO): void {
    if (!user.password) {
      throw new Error("Senha é obrigatória.");
    }
    console.log(`Usuário ${user.name} registrado com sucesso!`);
  }
}

export class UserQueryService {
  getUserById(id: string): UserQueryDTO {
    return {
      id,
      name: "Magnolia",
      email: "magnolia@email.com",
      password: "123456",
    };
  }
}

const registrationService = new UserRegistrationService();
registrationService.registerUser({
  name: "Magnolia",
  email: "magnolia@email.com",
  password: "123456",
});

const queryService = new UserQueryService();
const user = queryService.getUserById("1");
console.log(user);
