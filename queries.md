# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT ProductName, CategoryName FROM Products AS P
JOIN Categories AS C
ON P.CategoryId = C.CategoryId

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT OrderId, ShipperName FROM Orders as o
join shippers as s
on o.shipperid = s.shipperid
WHERE OrderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT ProductName, Quantity FROM OrderDetails as O
JOIN Products as P
ON O.ProductId = P.ProductId
WHERE OrderId = 10251
ORDER BY ProductName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT OrderId, CustomerName, LastName FROM Orders as O
JOIN Customers as C
ON O.CustomerId = C.CustomerId
JOIN Employees as E
ON O.EmployeeId = E.EmployeeId

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
