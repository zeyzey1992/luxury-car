
import cars from '$lib/data/cars.json';


export const load = async({ url }) => {
    const carId = url.searchParams.get('carId');
    // console.log("carId=" + carId);
    const car = cars.find(c => c.id === Number(carId));
    return { car };
};



