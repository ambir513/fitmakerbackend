import asynHandler from "express-async-handler"

const diet = asynHandler(async (req, res) => {
    const { age, height, weight } = req.body

    if (
        (age >= 14 && age <= 20) &&
        (height >= 4.0 && height <= 6) &&
        (weight >= 35 && weight <= 55)) {
        return res.json({
            message: "Recommended Diet Plan",
            breakfast: "Oatmeal with fruits and nuts, a glass of milk",
            lunch: "Rice, dal, vegetables, curd, and salad",
            snacks: "Mixed nuts, banana, or boiled eggs",
            dinner: "Chapati with sabzi, a bowl of dal, and buttermilk",
            hydration: "At least 2-3 liters of water daily"
        });
    } else if (
        (age >= 20 && age <= 30) &&
        (height >= 5.0 && height <= 7) &&
        (weight >= 55 && weight <= 120)) {
        return res.json({
            message: "Recommended Diet Plan",
            breakfast: "Scrambled eggs with whole-grain toast and avocado",
            lunch: "Grilled chicken salad with mixed greens and quinoa",
            snacks: "Greek yogurt with honey and almonds",
            dinner: "Salmon with steamed vegetables and brown rice",
            hydration: "Drink at least 2-3 liters of water daily"
        });
    } else if (
        (age >= 30 && age <= 40) &&
        (height >= 5.0 && height <= 6) &&
        (weight >= 55 && weight <= 120)) {
        return res.json({
            message: "Customized Diet Plan for Your Age Group",
            breakfast: "Oats with nuts and a banana, green tea",
            lunch: "Grilled paneer/tofu with mixed vegetable salad and whole wheat chapati",
            snacks: "Handful of almonds and walnuts, green smoothie",
            dinner: "Light dal soup with sautéed vegetables and quinoa",
            hydration: "Drink 2.5-3 liters of water daily",
        });
    } else if (
        (age >= 40 && age <= 60) &&
        (height >= 5.0 && height <= 6) &&
        (weight >= 55 && weight <= 120)) {
        return res.json({
            message: "Balanced Diet Plan for Middle Age (40-60 Years)",
            breakfast: "Multigrain toast with avocado, boiled eggs (or paneer for vegetarians), and a cup of herbal tea",
            lunch: "Brown rice with dal, stir-fried vegetables, and a bowl of curd",
            snacks: "Handful of nuts and seeds (almonds, walnuts, flaxseeds), or a fruit smoothie",
            dinner: "Grilled fish/chicken (or lentil soup for vegetarians) with steamed vegetables and whole wheat chapati",
            hydration: "Drink 2.5-3 liters of water daily; include herbal teas"
        });
    } else {
        return res.status(400).json({
            message: "No diet plan available for the given criteria."
        });
    }
})


export default diet