const GET = `
    select user_id,firstname || ' ' || lastname as fullname,user_role as role,username from users
`;
const POST = `
    insert into users(username,password,firstname,lastname,user_role)values($1,$2,$3,$4,$5) returning*
`;
const DELETE = `
    delete from users where user_id=$1 returning*
`;
export { GET, POST, DELETE };
