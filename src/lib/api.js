import dbConnect from './connectDB';
import Stone from '@/Models/stoneModel';

export default async function getAllStones() {
  await dbConnect();
  try {
    const stonesData = await Stone.find({}).sort({ name: 1 });
    const stones = JSON.parse(JSON.stringify(stonesData));
    return stones;
  } catch (err) {
    console.log(err.message);
  }
}
