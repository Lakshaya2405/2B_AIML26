class Product {
  constructor(productId, productName, price) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
  }
  getDiscountedPrice(discount) {
    return this.price - (this.price * discount) / 100;
  }
  display() {
    console.log(`Product ID: ${this.productId}`);
    console.log(`Product Name: ${this.productName}`);
    console.log(`Price: ₹${this.price}`);
  }
  static compareProducts(p1, p2) {
    const costlier = p1.price >= p2.price ? p1 : p2;
    console.log(`\nComparing "${p1.productName}" (₹${p1.price}) and "${p2.productName}" (₹${p2.price})`);
    console.log(`Higher priced product: ${costlier.productName} (₹${costlier.price})`);
  }
}
class Electronics extends Product {
  constructor(productId, productName, price, warranty) {
    super(productId, productName, price);
    this.warranty = warranty;
  }
  display() {
    super.display();
    console.log(`Warranty: ${this.warranty} year(s)`);
  }
}
const p1 = new Product(101, "Wooden Chair", 1500);
const p2 = new Electronics(201, "Smartphone", 25000, 2);
console.log("--- Product Details ---");
p1.display();
console.log("\n--- Electronics Details ---");
p2.display();
console.log(`\nDiscounted price of ${p1.productName} after 10% off: ₹${p1.getDiscountedPrice(10)}`);
console.log(`Discounted price of ${p2.productName} after 15% off: ₹${p2.getDiscountedPrice(15)}`);
Product.compareProducts(p1, p2);