CREATE DATABASE matem_crm;
/c matem_crm;
CREATE TABLE users(
    user_id serial primary key,
    username varchar(32) not null,
    password varchar(32) not null,
    firstname varchar (32) not null,
    lastname varchar(32) not null,
    user_role varchar(12) default 'user' not null
);

INSERT INTO users(username,password,firstname,lastname,user_role)
    values('Mirsidiq','jock1323','Mirsidiq','Mirzokirov','admin');
INSERT INTO users(username,password,firstname,lastname)
    values('Suhrob','su1323','Suhrob','Izzatillayev');
CREATE TABLE homeworks(
    homework_id serial primary key,
    homework_count int,
    homework_given_date timestamp default current_timestamp not null
);
INSERT INTO homeworks(homework_count)
    values(30),(20),(50);
CREATE TABLE marks(
    mark_id serial primary key,
    done smallint,
    not_done smallint,
    user_id int references users(user_id),
    homework_id int references homeworks(homework_id)
);
INSERT INTO marks(done,not_done,user_id,homework_id)
    values(50,0,2,3);
SELECT homeworks.homework_count,done,not_done,marks.homework_id FROM marks
JOIN homeworks on homeworks.homework_id=marks.homework_id
where marks.user_id=1;
CREATE TABLE exams(
    exam_id serial primary key,
    questions_count smallint,
    exam_date timestamp default current_timestamp not null
);
INSERT INTO exams(questions_count)values(30),(20),(40);

CREATE TABLE exam_results(
    result_id serial primary key,
    exam_id int references exams(exam_id),
    user_id int references users(user_id),
    wrong_answers smallint,
    correct_answers smallint
);
INSERT INTO exam_results(exam_id,user_id,wrong_answers,correct_answers)values(1,1,15,15),(1,2,10,20);

SELECT firstname||' '||lastname as fullname,exam_results.exam_id,exams.questions_count,wrong_answers,correct_answers,exams.exam_date from exam_results
JOIN users on users.user_id=exam_results.user_id
JOIN exams on exams.exam_id=exam_results.exam_id
where exam_results.user_id=1;

CREATE TABLE fee(
    fee_id serial primary key,
    fee_quantity int not null,
    fee_date timestamp default current_timestamp not null,
    user_id int references users(user_id)
);
INSERT INTO fee(fee_quantity,user_id) values(300000,1);


