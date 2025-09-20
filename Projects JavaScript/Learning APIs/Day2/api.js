// 🔥 Day 2 Problems (Solve Yourself)

// Step 1
// Ek public API use karo (example: https://jsonplaceholder.typicode.com/users)
// fetch() se data lekar console.log karo.

// Step 2
// Wohi data fetch karke sirf users ke names print karo.

// Step 3
// Users ki email IDs ka ek naya array banao using map().

// Step 4
// Filter karke sirf un users ko nikalo jinke email ".org" pe khatam hote hain.

// Step 5
// Ek aur endpoint se data lo: https://jsonplaceholder.typicode.com/posts
// Sirf pehle 5 posts ke title console.log karo.

// Step 1: API call karo
fetch("https://jsonplaceholder.typicode.com/users")
    // Step 2: Response ko JSON me convert karo
    .then((res) => res.json())
    // Step 3: Data mil gaya, console me print karo
    .then((data) => {
        console.log("👥 Full Users Data:", data);

        // Sirf users ke names print karna
        data.forEach((user) => {
            console.log("Name:", user.name);
        });

        // Sirf email ka aik naya array banana
        const userEmail = data.map((user) => {
            return user.email
        })
        console.log(`Email: ${userEmail}`);

        // Sirf filter usko kar jin k emails .org pe end hote hain
        const orgEmail = data.filter((user) => {
            return user.email.endsWith(".org");
        })
        console.log(orgEmail);
    })
    // Step 4: Agar error aayi toh catch karo
    .catch((err) => console.error("❌ Error:", err));
