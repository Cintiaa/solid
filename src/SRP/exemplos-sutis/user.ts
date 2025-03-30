interface UserDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
}

export class UserRegistrationService {
  registerUser(user: UserDTO): void {
    if (!user.password) {
      throw new Error("Senha é obrigatória.");
    }
    console.log(`Usuário ${user.name} registrado com sucesso!`);
  }
}

export class UserQueryService {
  getUserById(id: string): UserDTO {
    return {
      id,
      name: "Magnolia",
      email: "magnolia@email.com",
      password: "123456",
      createdAt: new Date(),
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