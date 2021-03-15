INSERT INTO department (name)
VALUES
    ('Sales'), -- 1
    ('Admin'), -- 2
    ('Accounting'), -- 3
    ('Marketing'), -- 4
    ('IT'), -- 5
    ('Shipping'); -- 6

INSERT INTO role (title,salary,department_id)
VALUES
    ('General Manager', 80000, 2), -- 1
    ('Sales Manager', 50000, 1), -- 2
    ('Sales Rep', 40000, 1), -- 3
    ('National Sales Rep', 80000, 1), -- 4
    ('IT Manager', 75000, 2), -- 5
    ('Administrative Assist', 70000, 3), -- 6
    ('Marketing Manager', 75000, 6), -- 7
    ('Collections', 30000, 3), -- 8
    ('Accounts Payable', 30000, 3), -- 9
    ('Accounting Manager', 50000, 3), -- 10
    ('Graphic Artist', 40000, 4), -- 11
    ('Shipping Manager', 50000, 6), -- 12
    ('Warehouse Worker', 30000, 6), -- 13


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Cheryl', 'Fogerty', 2, NULL), -- 1
    ('Nick', 'Hall', 5, NULL), -- 2
    ('Tom', 'Bode', 1, NULL), -- 3
    ('Howard', 'Mayberry', 4, NULL), -- 4
    ('Dane', 'McKenzie', 3, NULL), -- 5
    ('Teri', 'Graves', 2, 1), -- 6
    ('Lorrie', 'White', 2, 2), -- 7
    ('Dave', 'Oca', 1, 1), -- 8
    ('Rich', 'Witzofsky', 5, 6), -- 9
    ('Angie', 'Scheve', 4, 6), -- 10
    ('Eddie', 'Janko', 6, 1), -- 11
    ('Julie', 'Sinn', 3, 3), -- 12
    ('John', 'Jordan', 6, 6); -- 13