DROP DATABASE IF EXISTS project_2;
CREATE DATABASE project_2;
\c project_2;

CREATE TABLE IF NOT EXISTS users (
id SERIAL PRIMARY KEY,
username TEXT,
password TEXT,
target_amount DECIMAL(10,2),
time_horizon INTEGER,
start_date DATE,
end_date DATE
);


CREATE TABLE IF NOT EXISTS finances (
id SERIAL PRIMARY KEY,
transaction_date DATE,
monthly_income_amount DECIMAL (10,2),
monthly_expenses_amount DECIMAL (10,2),
monthly_investment_amount DECIMAL (10,2),
monthly_saving_amount DECIMAL (10,2),
user_id INTEGER
);