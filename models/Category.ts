import { ICategory } from '@/interfaces';
import mongoose, { Schema, model, Model } from 'mongoose';


const categorySchema = new Schema({
    title: { type: String, required: true },
    imageUrl: { type: String, required: true, unique: true },
    showOnWeb: { type: Boolean, default: true },
}, {
    timestamps: true
});

categorySchema.index({ title: 'text' });

const Category: Model<ICategory> = mongoose.models.Category || model('Category',categorySchema);

export default Category;