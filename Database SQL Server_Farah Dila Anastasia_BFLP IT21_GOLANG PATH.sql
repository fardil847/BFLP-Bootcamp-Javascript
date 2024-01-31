CREATE TABLE Branch(
 id INT PRIMARY KEY,
 name VARCHAR, 
 address VARCHAR,
 type VARCHAR
);

CREATE TABLE ProductType(
 id INT PRIMARY KEY,
 name_product VARCHAR,
 description TEXT
);

CREATE TABLE Customer(
id INT PRIMARY KEY,
nik INT,
cif INT,
name VARCHAR,
address TEXT,
date_of_birth DATE,
gender VARCHAR,
phone VARCHAR
);

CREATE TABLE Account(
 id INT PRIMARY KEY,
 branch_id INT,
 FOREIGN KEY (branch_id) REFERENCES Branch(id),
 customer_id INT,
 FOREIGN KEY (customer_id) REFERENCES Customer(id),
 product_id INT,
 FOREIGN KEY (product_id) REFERENCES ProductType(id),
 account_number INT,
 balance NUMERIC,
);

CREATE TABLE TransactionHistory(
 id INT PRIMARY KEY,
 sender_account INT,
 FOREIGN KEY (sender_account) REFERENCES Account(id),
 recip_account INT,
 FOREIGN KEY (recip_account) REFERENCES Account(id),
 date_trx DATETIME,
 type_trx VARCHAR,
 amount_trx NUMERIC,
 status_trx VARCHAR,
);

INSERT INTO [dbo].[Branch] (
 [id],
 [name],
 [address],
 [type]
) VALUES
(002001, 'BRI Jakarta', 'Jakarta', 'Metro'),
(002570, 'BRI Balikpapan', 'Balikpapan', 'Non Metro')


INSERT INTO [dbo].[ProductType](
[id],
[name_product],
[description]
)VALUES
(0053, 'Simpedes','Tabungan Simpanan'),
(0056, 'Britama','Tabungan Simpanan')

INSERT INTO [dbo].[Customer](
[id],
[nik],
[cif],
[name],
[address],
[date_of_birth],
[gender],
[phone]) VALUES
(0001, 12345560, 00023221, 'Farah Dila Anastasia', 'Perumahan Villa Bogor Indah 6 Blok A','2000-03-06','Female','081228044849'),
(0002, 12345570, 00023222, 'Habib Rosyid Pandu', 'Podomoro Golf View Blok J','1996-04-06','Male','081328002866')

INSERT INTO [dbo].[Account](
[id],
[branch_id],
[customer_id],
[product_id],
[account_number],
[balance]) VALUES 
(1101, 002001, 0001, 0053, 1390034569, 10000000),
(1102, 002570, 0002, 0056, 1390034570, 40000000)

INSERT INTO [dbo].[TransactionHistory](
[id],
[sender_account],
[recip_account],
[date_trx],
[type_trx],
[amount_trx],
[status_trx])VALUES 
(0011, 1101, 1102, '2024-01-31', 'T', '200000','B'),
(0012, 1102, 1101, '2024-01-30', 'T', '300000','B')

SELECT TOP (1000) [id]
      ,[branch_id]
      ,[customer_id]
      ,[product_id]
      ,[account_number]
      ,[balance]
  FROM [latihan].[dbo].[Account]


SELECT TOP (1000) [id]
      ,[name]
      ,[address]
      ,[type]
  FROM [latihan].[dbo].[Branch]

SELECT TOP (1000) [id]
      ,[nik]
      ,[cif]
      ,[name]
      ,[address]
      ,[date_of_birth]
      ,[gender]
      ,[phone]
  FROM [latihan].[dbo].[Customer]

SELECT TOP (1000) [id]
      ,[name_product]
      ,[description]
  FROM [latihan].[dbo].[ProductType]

SELECT TOP (1000) [id]
      ,[sender_account]
      ,[recip_account]
      ,[date_trx]
      ,[type_trx]
      ,[amount_trx]
      ,[status_trx]
  FROM [latihan].[dbo].[TransactionHistory]

