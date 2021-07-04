const StudyMaterial = () => {
  return (
    <>
      <h2
        style={{
          color: "#5effe2",
          textShadow: "1px 0px 9px rgba(0, 255, 255, 1)",
        }}
      >
        Study Materials
      </h2>
      <Tabs defaultActiveKey="profile">
        <Tab eventKey="materials" title="Materials">
          Materials
        </Tab>
        <Tab eventKey="assignment" title="Assignment">
          assignment
        </Tab>
      </Tabs>
    </>
  );
};

export default StudyMaterial;
