import { Product } from "../entities/product.entity";

export class ProductRepository {
  private products: Product[] = [
    new Product("1", "Product 1", 10.0),
    new Product("2", "Product 2", 20.0),
    new Product("3", "Product 3", 30.0),
    new Product("4", "Product 4", 40.0),
    new Product("5", "Product 5", 50.0),
  ];

  async findById(productId: string) {
    const product = this.products.find((product) => product.id === productId);
    if (!product) {
      throw new Error(`Produto com ID ${productId} não encontrado.`);
    }
    return product;
  }
}
