import * as mysql from 'mysql';

interface Order {
    order_id: number;
    transaction_date: Date;
    product_id: number;
    quantity: number;
    buyer_id: number;
    seller_id: number;
}

const connection = mysql.createConnection({
    host: 'localhost:3306',
    user: 'root',
    password: '12345678',
    database: 'Toolbox'
});

/*
    Retrieves 1 specific order from the database

    @param productId - Id of the product involved in the order
    @param buyerId - Id of the buyer involved in the order
    @return 1 order array from the DB in the form of a promise
* */
export async function retrieveOrder(productId: number, buyerId: number): Promise<Order[]> {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM orders WHERE product_id = ? AND buyer_id = ?",
            [productId, buyerId],
            (error: any, results: Order[]) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            }
        );
    });
}

/*
    Retrieves all orders from the database given a productId

    @param productId - Id of the product involved in the orders
    @return orders array from the DB in the form of a promise
* */
export async function retrieveAllOrdersGivenProductId(productId: number): Promise<Order[]> {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM orders WHERE product_id = ?",
            [productId],
            (error: any, results: Order[]) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            }
        );
    });
}

/*
    Retrieves all orders from the database given a buyerId

    @param buyerId - Id of the buyer involved in the orders
    @return orders array from the DB in the form of a promise
* */
export async function retrieveAllOrdersGivenBuyerId(buyerId: number): Promise<Order[]> {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM orders WHERE buyer_id = ?",
            [buyerId],
            (error: any, results: Order[]) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            }
        );
    });
}