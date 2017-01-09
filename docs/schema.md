# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## recipes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
ingredients | text      | not null
directions  | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed
date_cooked | date      | not null

## notes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
recipe_id   | integer   | not null, foreign key (references recipe), indexed
note        | string    | not null
