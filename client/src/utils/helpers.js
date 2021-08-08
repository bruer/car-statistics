export function getBestPrices(all_cars, model_name) {
    var best_priced_cars = [];
    for (const [key, value] of Object.entries(all_cars)) {
        const date = value.date;
        //console.log(value.model);
        //console.log(model_string);
        let last_date = "";
        if(best_priced_cars.length > 0) {
            last_date = best_priced_cars[best_priced_cars.length - 1].date;
        }
        // else {
        //     console.log(best_priced_cars.length)
        // }
        // console.log(date, last_date);

        if ((date != last_date) && model_name === value.model) {
            //console.log(date, value.price, value.model, value.typeOfPrice)
            if(value.typeOfPrice === "Auktionsbil") {
                //console.log("Oj", date);
                continue;
            }
            best_priced_cars.push(
                {date, 
                price: value.price})

        }

        //console.log(`${key}: ${value.date}, ${value.name}`);
    };
    return best_priced_cars;
}