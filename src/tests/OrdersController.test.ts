import connection from "../db";
import {MySqlContainer} from "@testcontainers/mysql";
import {
    retrieveAllOrdersGivenBuyerId,
    retrieveAllOrdersGivenProductId,
    retrieveOrder
} from "@/controllers/OrdersController";

it("should work with database URI", async () => {
    const container = await new MySqlContainer().withRootPassword("12345678").withDatabase("Toolbox").start();
    expect(container.getConnectionUri(true)).toEqual(
        `mysql://root:12345678@localhost:${container.getPort()}/Toolbox`
    );
    await container.stop();
}, 60000);

it("should retrieve an order from the db", async () => {
    //const container = await new MySqlContainer().withRootPassword("12345678").withDatabase("Toolbox").start();

    // Insert buyer and seller to user table
    //container.executeQuery("INSERT INTO user (user_id, user_name) VALUES (12345, 'Justin To')");
    //container.executeQuery("INSERT INTO user (user_id, user_name) VALUES (12346, 'Angelo Guerra')");
    // Insert  variation to variation table
    //container.executeQuery("INSERT INTO variation (variation_id, variant, stock) VALUES (5678, 'A', 10)")
    // Insert product to product table
    //container.executeQuery("INSERT INTO product (product_id, price, name, category, variation_id, seller_id) VALUES (1001, 123.45, 'A', 'B', 5678, 12345)")
    // Insert order to order table
    //container.executeQuery("INSERT INTO orders (order_id, transaction_date, product_id, quantity, buyer_id, seller_id) VALUES (1, 2024-03-28, 1001, 2, 12345, 12346)")

    const order = await retrieveOrder(1001, 12345);
    expect(order).toHaveLength(1);

    connection.end();
    //await container.stop();
}, 60000);

it("should retrieve all orders from the db given product id", async () => {
    // Insert order to order table
    //connection.execute("INSERT INTO orders (order_id, transaction_date, product_id, quantity, buyer_id, seller_id) VALUES (2, NOW(), 1001, 4, 12345, 12346)")

    const order = await retrieveAllOrdersGivenProductId(1001);
    expect(order).toHaveLength(3);

    connection.end();
}, 60000);

it("should retrieve all orders from the db given buyer id", async () => {
    const order = await retrieveAllOrdersGivenBuyerId(12345);
    expect(order).toHaveLength(3);

    connection.end();
}, 60000);