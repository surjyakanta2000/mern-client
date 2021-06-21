import InfoRow from "../../common/InfoRow";
const Info = ({ tech }) => {
  return (
    <>
      <InfoRow label="Name" value={tech.techName} />
      {/* <InfoRow label="Department" value={tech.techDept.deptName} /> */}
      <InfoRow label="Email" value={tech.techEmail} />
      <InfoRow label="Phone" value={tech.techPhone} />
    </>
  );
};

export default Info;
