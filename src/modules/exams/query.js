const GET_EXAM_BY_USER_ID=`
SELECT exam_results.exam_id,firstname||' '||lastname as fullname,exams.questions_count,wrong_answers,correct_answers,exams.exam_date from exam_results
JOIN users on users.user_id=exam_results.user_id
JOIN exams on exams.exam_id=exam_results.exam_id
where exam_results.user_id=$1;
`
export{
    GET_EXAM_BY_USER_ID
}