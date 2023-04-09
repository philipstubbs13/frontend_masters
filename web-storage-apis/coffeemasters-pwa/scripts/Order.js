import Menu from './Menu.js';

const Order = {
    cart: [],
    openDB: async () => {
        return await idb.openDB("cm-storage", 1, {
            async upgrade(db) {
                await db.createObjectStore("order")
                // We can create data stores
            }
        })
    },
    load: async () => {
        const db = await Order.openDB();
        const cart = await db.get("order", "cart");
        if (cart) {
            try {
                Order.cart = JSON.parse(cart);
                Order.render();
            } catch (e) {
                console.log("Data corrupted");
            }
        }
    },
    save: async () => {
        const db = await Order.openDB();
        await db.put("order", JSON.stringify(Order.cart), "cart");
    },
    loadWS: () => {
        if (localStorage.getItem("cm-cart")) {
            try {
                Order.cart = JSON.parse(localStorage.getItem("cm-cart"));
                Order.render();
            } catch (e) {
                localStorage.removeItem("cm-cart");
            }
        }
    },
    saveWS: () => {
        localStorage.setItem("cm-cart", JSON.stringify(Order.cart));
    },
    add: async id => {
        const product = await Menu.getProductById(id);
        const results = Order.cart.filter(prodInCart => prodInCart.product.id==id);
        if (results.length == 1) {
            results[0].quantity++;
        } else {
            Order.cart.push({product, quantity: 1})
        }
        Order.render();
    },
    remove: (id) => {
        Order.cart = Order.cart.filter(prodInCart => prodInCart.product.id!=id);
        Order.render();
    },
    place: () => {
        alert("Your order will be ready under the number " + 
            parseInt(Math.random()*100));
        Order.cart = [];
        Order.render();
    },
    importCart: async () => {
        const [handle] = await window.showOpenFilePicker();
        const file = await handle.getFile();

        try {
            const text = await file.text();
            const json = JSON.parse(text);
            if (json instanceof Array && json.length > 0) {
                Order.cart = json;
                Order.render();
            } else {
                alert("File is invalid")
            }
        } catch (e) {
            alert("Error reading file")
        }
    },
    exportCart: async () => {
        const handle = await window.showSaveFilePicker({
            types: [{
                description: "JSON CoffeeMasters Cart File",
                accept: {
                    "application/json": [".json", ".txt", ".cart"]
                }
            }]
        });
        const file = await handle.getFile();
        const writeable = await handle.createWriteable();
        await writeable.write(JSON.stringify(Order.cart));
        await writeable.close();
    },
    render: () => {
        Order.save();
        if (Order.cart.length==0) {
            document.querySelector("#order").innerHTML = `
                <p class="empty">Your order is empty</p>
            `;
        } else {
            let html = `
                <h2>Your Order</h2>
                <ul>
            `;
            let total = 0;
            for (let prodInCart of Order.cart) {
                html += `
                    <li>
                        <p class='qty'>${prodInCart.quantity}x</p>
                        <p class='name'>${prodInCart.product.name}</p>
                        <p class='price'>$${prodInCart.product.price.toFixed(2)}</p>
                        <p class='toolbar'>
                            <span class="navlink material-symbols-outlined" onclick="Order.remove(${prodInCart.product.id})">
                                delete
                            </span>
                        </p>
                    </li>
                `;
                total += prodInCart.quantity * prodInCart.product.price;
            }
            html += `
                        <li>
                            <p class='total'>Total</p>
                            <p class='price-total'>$${total.toFixed(2)}</p>
                        </li>
                    </ul>
                     <button onclick="Order.place()">Place Order</button>
                    `;
                if (window.showOpenFilePicker) {
            html += `
                    <a class="navlink material-symbols-outlined" 
                        href="javascript:Order.importCart()" style="color: var(--primaryColor")>
                        file_upload
                    </a>
                    <a class="navlink material-symbols-outlined"  
                        href="javascript:Order.exportCart()" style="color: var(--primaryColor")>
                        file_download
                    </a>
                `;
            } 
            document.querySelector("#order").innerHTML = html;
        }
    }
}
Order.load();
window.Order = Order; // make it "public"
export default Order;