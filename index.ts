interface IProduct{
    productId: string,
    productName: string,
    price: number,
    
}

interface IOrder{
    orderId: number,
    productIds :string[],
    orderAmount: string,
    status:'PENDING' | "SUCCESSFUL" | "CANCELED"
}
const AllProducts: IProduct[] = [
    { productId: 'asdasd', productName: 'asdasdasdas', price: 100 },
    {productId:'asd',productName:'asdasdasdas',price:100},
    {productId:'aasd',productName:'asdasdasdas',price:100},
    { productId: 'asdad', productName: 'asdasdasdas', price: 100 },
    { productId: 'sdasd', productName: 'asdasdasdas', price: 100 }
];
let Cart:IProduct[] = [];
const Orders:IOrder[] = [];
const addProduct=(productId)=>{
    const product = AllProducts.filter((product) => product.productId === productId);
    Cart = [...Cart, ...product];
    return Cart;
}
const getAllProducts = () => {
    return AllProducts;
}
const getAllOrders = () => {
    return Orders;
}
const removeProduct = (productID) => {
    Cart = Cart.filter((product) => product.productId !== productID);
    return Cart;
}
const placeOrder = (amount:string,products:string[]) => {
    const orderId = Math.floor(Math.random() * 1000) + 1000;
    Orders.push({ orderId: orderId, productIds: products, orderAmount: amount,status:"PENDING" });
}
const cancelOrder = (orderId) => {
    const orderIndex=Orders.findIndex((order) => order.orderId === orderId);
    if (orderIndex === -1) {
        return;
    }
    Orders[orderIndex].status = 'CANCELED';
}