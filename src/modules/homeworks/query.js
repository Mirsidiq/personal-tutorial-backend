const GET_HOMEWORKS = `
    SELECT * FROM HOMEWORKS
`;
const GET_HOMEWORKS_BY_ID = `
    SELECT * FROM HOMEWORKS WHERE homework_id=$1
`;
const GET_HOMEWORK_BY_USER_ID = `
SELECT marks.homework_id , firstname || ' ' || lastname AS fullname, homeworks.homework_count,done,not_done FROM marks
JOIN users on users.user_id=marks.user_id
JOIN homeworks on homeworks.homework_id=marks.homework_id
where marks.user_id=$1;
`;
const POST_USER_MARKS = `
INSERT INTO marks(done,not_done,user_id,homework_id)
values($1,$2,$3,$4) returning *
`;
const POST_HOMEWORK = `
INSERT INTO homeworks(homework_count,homework_given_date)
values($1,$2) returning*
`;
const GET_MARKS_BY_HOMEWORK_AND_USER_ID = `
    SELECT done,not_done,user_id,homework_id FROM MARKS WHERE user_id=$1 and homework_id=$2
`;
const UPDATE_MARKS = `
    update marks
    set
    done=$3,
    not_done=$4
    where user_id=$1 and homework_id=$2
    returning *
`;
const UPDATE_HOMEWORKS = `
    update homeworks
    set
    homework_count=$2
    where homework_id=$1
    returning*
`;
export {
  GET_HOMEWORK_BY_USER_ID,
  POST_USER_MARKS,
  GET_HOMEWORKS,
  POST_HOMEWORK,
  GET_MARKS_BY_HOMEWORK_AND_USER_ID,
  UPDATE_MARKS,
  GET_HOMEWORKS_BY_ID,
  UPDATE_HOMEWORKS,
};
