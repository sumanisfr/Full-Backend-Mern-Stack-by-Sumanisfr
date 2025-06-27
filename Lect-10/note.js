// data Storage:
// Types Of DBS
// What and Why
// Terminology - collection, document, field, etc.

// *--------------------------------------------*
//?  MongoDB, Mongoose & Database Management.

//! Data Storage:
// - MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.
// - It allows for dynamic schemas, meaning you can store different fields in different documents within the same collection.

// - This flexibility is beneficial for applications where data structures may change over time.

//!  Types Of DBS
// - SQL databases store data in structured tables with predefined schemas.
// - NoSQL databases like MongoDB allow for more flexible data models, making them suitable for applications with evolving data structures.

// ! // What and Why
// - MongoDB is a NoSQL database that provides high performance, high availability, and easy scalability.
// - It is designed to handle large volumes of unstructured or semi-structured data.

//! Terminology - collection, document, field, etc.
// 1. **Collection**: A group of MongoDB documents, similar to a table in SQL.
// 2. **Document**: A single record in a collection, represented as a JSON
//    object.
// 3. **Field**: A key-value pair within a document, similar to a column in SQL.
// 4. **Index**: A data structure that improves the speed of data retrieval operations
//    on a collection.
// 5. **Query**: A request to retrieve or manipulate data in the database.
// 6. **Aggregation**: A framework for performing advanced data processing and analysis
//   operations on collections.
// 7. **Replica Set**: A group of MongoDB servers that maintain the same data set,
//    providing redundancy and high availability.
// 8. **Sharding**: A method for distributing data across multiple servers to ensure
//    horizontal scalability and improved performance.
// 9. **Schema**: The structure of a document, defining the fields and their data types.
// 10. **ODM (Object Document Mapper)**: A library that provides a higher-level abstraction.

//* ------------------------------------------------
// Database -> collection -> document
// CODE
// ------------------------------------

// Code                        DAtabase
// -----------------------------------------------
// mongoose.connect   ->     database create
// mongoose.model create     ->     collection create
// new Model()        ->     document create
//   CREATE code      ->     document create
