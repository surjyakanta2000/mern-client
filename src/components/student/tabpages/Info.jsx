import InfoRow from "../../common/InfoRow";
const Info = ({ student }) => {
  return (
    <>
      <InfoRow label="Name" value={student.studentName} />
      <InfoRow label="Roll.No" value={student.studentRoll} />
      <InfoRow
        label="Department"
        value={
          student.studentDept === undefined ? "" : student.studentDept.deptName
        }
      />
      <InfoRow label="Email" value={student.studentEmail} />
      <InfoRow label="Phone" value={student.studentPhone} />
      <InfoRow label="Semester" value={student.studentSemester} />
    </>
  );
};

export default Info;
