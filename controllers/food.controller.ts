import Food from "../models/Food";

export const getFoods = async (req: any, res: any) => {
  const data = await Food.find();
  res.json(data);
};

export const createFood = async (req: any, res: any) => {
  const food = await Food.create(req.body);
  res.json(food);
};

export const updateFood = async (req: any, res: any) => {
  const updated = await Food.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

export const deleteFood = async (req: any, res: any) => {
  await Food.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};