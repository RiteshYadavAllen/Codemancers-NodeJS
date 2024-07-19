import { Schema, model, Document } from 'mongoose';

interface IProduct extends Document {
  title: string;
  description: string;
  price: number;
  image: string;
}

const productSchema = new Schema<IProduct>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

const Product = model<IProduct>('Product', productSchema);

export default Product;
