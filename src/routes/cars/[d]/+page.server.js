import cars from '$lib/data/cars.json';

export function load({ params }){

    const id = Number(params.d);
    const car= cars.find(c => c.id === id) || null;
    return {car};
}