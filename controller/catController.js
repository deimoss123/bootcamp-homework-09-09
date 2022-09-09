import catModel from '../models/catModel.js';

export async function createCat(req, res) {
  try {
    await new catModel({ ...req.body }).save();
    res.status(201).send('New cat created successfully ');
  } catch (e) {
    res.status(405).send(error);
    console.error(e);
  }
}

export async function getAllCats(req, res) {
  try {
    const allCats = await catModel.find();
    res.status(201).json(allCats);
  } catch (e) {
    console.error(e);
  }
}
