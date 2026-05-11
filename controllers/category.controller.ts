import Category from "../models/Category";

export const getCategories = async (req: any, res: any) => {
  const data = await Category.find();
  res.json(data);
};

export const createCategory = async (req: any, res: any) => {
  const newCat = await Category.create(req.body);
  res.json(newCat);
};

export const updateCategory = async (req: any, res: any) => {
  const updated = await Category.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

export const deleteCategory = async (req: any, res: any) => {
  await Category.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};