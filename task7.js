//task 1 
// let apiLink = "https://fakestoreapi.com/products";

// fetch(apiLink)
//     .then(response => response.json())
//     .then(products => {
//         products.forEach(product => {
//             console.log(`Title: ${product.title}`);
//             console.log(`Price: $${product.price}`);
//             console.log(`Category: ${product.category}`);
//         });
//         let productDetails = products.map(product => ({
//             title: product.title,
//             price: product.price
//         }));
//         console.log(productDetails);
//         let expensiveProducts = products.filter(product => product.price > 100);
//         console.log(expensiveProducts);
//         let electronicsProduct = products.find(
//             product => product.category === "electronics"
//         );
//         console.log(electronicsProduct);
//         let totalPrice = products.reduce(
//             (total, product) => total + product.price,
//             0
//         );
//         console.log(`Total Price: $${totalPrice.toFixed(2)}`);
//         let sortedProducts = [...products].sort(
//             (a, b) => b.price - a.price
//         );
//         sortedProducts.forEach(product => {
//             console.log(`${product.title} - $${product.price}`);
//         });
//     })
//     .catch(error => {
//         console.log(`API Error: ${error}`);
//     })
//     .finally(() => {
//         console.log("Product API operation completed.");
//     });

//task 2

// let apiLink = "https://fakestoreapi.com/products";

// function showDashboard(products) {

//     let totalProducts = products.length;

//     let electronics = products.filter(
//         product => product.category === "electronics"
//     ).length;

//     let jewelery = products.filter(
//         product => product.category === "jewelery"
//     ).length;

//     let mensClothing = products.filter(
//         product => product.category === "men's clothing"
//     ).length;

//     let womensClothing = products.filter(
//         product => product.category === "women's clothing"
//     ).length;

//     let prices = products.map(product => product.price);

//     let sortedPrices = [...prices].sort((a, b) => b - a);

//     let highestPrice = sortedPrices[0];
//     let lowestPrice = sortedPrices[sortedPrices.length - 1];

//     let totalPrice = products.reduce(
//         (total, product) => total + product.price,
//         0
//     );

//     let averagePrice = totalPrice / totalProducts;

//     console.log("===== PRODUCT DASHBOARD =====");

//     console.log(`Total Products: ${totalProducts}`);

//     console.log(`Electronics: ${electronics}`);
//     console.log(`Jewelery: ${jewelery}`);
//     console.log(`Men's Clothing: ${mensClothing}`);
//     console.log(`Women's Clothing: ${womensClothing}`);

//     console.log(`Highest Price: $${highestPrice}`);
//     console.log(`Lowest Price: $${lowestPrice}`);
//     console.log(`Average Price: $${averagePrice.toFixed(2)}`);
// }
// fetch(apiLink)
//     .then(response => response.json())
//     .then(products => {
//         showDashboard(products);
//     })
//     .catch(error => {
//         console.log(`Error: ${error}`);
//     });

//task 3

// let userApi = "https://jsonplaceholder.typicode.com/users";
// let postApi = "https://jsonplaceholder.typicode.com/posts";
// fetch(userApi)
//     .then(response => response.json())
//     .then(users => {
//         users.forEach(user => {
//             console.log(user.name);
//         });
//         users.forEach(user => {
//             console.log(`${user.name} - ${user.email}`);
//         });
//         let user5 = users.find(user => user.id === 5);
//         console.log(user5);
//         let cityUsers = users.filter(
//             user => user.address.city === "Gwenborough"
//         );
//         console.log(cityUsers);
//     })
//     .catch(error => {
//         console.log(`User API Error: ${error}`);
//     });
// fetch(postApi)
//     .then(response => response.json())
//     .then(posts => {
//         let userPosts = posts.filter(
//             post => post.userId === 1
//         );

//         userPosts.forEach(post => {
//             console.log(post.title);
//         });
//         console.log(
//             `User ID 1 created ${userPosts.length} posts.`
//         );
//         let longTitlePost = posts.find(
//             post => post.title.length > 50
//         );
//         console.log(longTitlePost);
//     })
//     .catch(error => {
//         console.log(`Post API Error: ${error}`);
//     });

//task 4

// let apiLink = "https://fakestoreapi.com/products";

// function searchProducts(products, category, maxPrice) {

//     let result = products.filter(product =>
//         product.category === category &&
//         product.price <= maxPrice
//     );

//     console.log("===== SEARCH RESULTS =====");

//     if (result.length === 0) {
//         console.log("No products found.");
//     } else {
//         result.forEach(product => {
//             console.log(`Product: ${product.title}`);
//             console.log(`Price: $${product.price}`);
//             console.log(`Category: ${product.category}`);
          
//         });
//     }
// }

// let category = prompt("Enter product category:");
// let maxPrice = Number(prompt("Enter maximum price:"));

// fetch(apiLink)
//     .then(response => response.json())
//     .then(products => {
//         searchProducts(products, category, maxPrice);
//     })
//     .catch(error => {
//         console.log(`Error: ${error}`);
//     });

//task 5

// let apiLink = "https://fakestoreapi.com/products";

// fetch(apiLink)
//     .then(response => response.json())
//     .then(products => {

//         console.log("===== AVAILABLE PRODUCTS =====");

//         products.forEach(product => {
//             console.log(
//                 `ID: ${product.id} | ${product.title} | $${product.price}`
//             );
//         });

//         let cart = [];

//         let id1 = Number(prompt("Enter first product ID:"));
//         let product1 = products.find(product => product.id === id1);

//         if (product1) {
//             cart.push(product1);
//         }

//         let id2 = Number(prompt("Enter second product ID:"));
//         let product2 = products.find(product => product.id === id2);

//         if (product2) {
//             cart.push(product2);
//         }

//         console.log("===== CART =====");

//         cart.forEach((product, index) => {
//             console.log(
//                 `Product ${index + 1}: ${product.title}`
//             );
//             console.log(`Price: $${product.price}`);
//         });
//         let total = cart.reduce(
//             (sum, product) => sum + product.price,
//             0
//         );

//         let discount = 0;

//         if (total > 200) {
//             discount = 20;
//         } else if (total > 100) {
//             discount = 10;
//         }

//         let discountAmount = total * discount / 100;

//         let finalAmount = total - discountAmount;

//         console.log(`Total: $${total.toFixed(2)}`);
//         console.log(`Discount: ${discount}%`);
//         console.log(`Final Amount: $${finalAmount.toFixed(2)}`);
//     })
//     .catch(error => {
//         console.log(`Error: ${error}`);
//     });

//task 6

let apiLink = "https://fakestoreapi.com/products";

fetch(apiLink)
    .then(response => response.json())
    .then(products => {

        console.log("========== PRODUCT REPORT ==========");

        console.log(`Total Products: ${products.length}`);

        console.log("\nProduct Names:");

        products.forEach(product => {
            console.log(`- ${product.title}`);
        });

      
        let productNames = products.map(
            product => product.title
        );

        console.log("\nProduct Names Array:");
        console.log(productNames);

      
        let expensiveProducts = products.filter(
            product => product.price > 100
        );

        console.log("\nProducts Above $100:");

        expensiveProducts.forEach(product => {
            console.log(
                `${product.title} - $${product.price}`
            );
        });

        let electronicsProduct = products.find(
            product => product.category === "electronics"
        );

        console.log("\nElectronics Product:");

        console.log(
            `${electronicsProduct.title} - $${electronicsProduct.price}`
        );

        let totalPrice = products.reduce(
            (total, product) => total + product.price,
            0
        );

        console.log(
            `\nTotal Product Value: $${totalPrice.toFixed(2)}`
        );

        let above500 = products.some(
            product => product.price > 500
        );

        console.log(
            `Any Product Above $500: ${above500}`
        );

        let above1 = products.every(
            product => product.price > 1
        );

        console.log(
            `All Products Above $1: ${above1}`
        );

        let sortedProducts = [...products].sort(
            (a, b) => b.price - a.price
        );

        console.log("\nHighest → Lowest:");

        sortedProducts.forEach(product => {
            console.log(
                `${product.title} - $${product.price}`
            );
        });
    })
    .catch(error => {
        console.log(`API Error: ${error}`);
    })
    .finally(() => {
        console.log("\n========== REPORT COMPLETED ==========");
    });
