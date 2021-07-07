const StudyMaterial = () => {
  return (
    <>
      <h2>Study Materials</h2>
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
