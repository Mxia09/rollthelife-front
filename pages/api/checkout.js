import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handler(req,res) {
    if (req.method !== 'POST') {
        res.json('should be a POST request')
        return;
    }
    const {name, email, address, city, zipCode, country, products,} = req.body;
    await  mongooseConnect();
    const productsIds = products.split(',');
    const uniqueIds = [...new Set(productsIds)];
    const productsInfos = await Product.find({_id:uniqueIds});

    let line_itmes = [];
    for (const productId of uniqueIds) {
        const productInfo = productsInfos.find(p => p._id.toString() === productId);
        const quantity = productsIds.filter(id => id === productId)?.length || 0;
        if (quantity > 0 && productInfo) {
            line_itmes.push({
                quantity,
                price_data: {
                    currency: 'USD',
                    product_data: {name: productInfo.title},
                    unit_amount: quantity * productInfo.price, 
                },
            });
        }
    }

    const orderDoc = await Order.create({
        line_items, name, email, address, city, zipCode, country, paid:false,
    })
}