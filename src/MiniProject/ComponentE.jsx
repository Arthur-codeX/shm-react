function ComponentE() {
  return (
<<<<<<< HEAD
    <div className="border-container"
         style={{
=======
    <div
      className="border-container"
      style={{
>>>>>>> 300c44529055f712cfa40ece2af3127c8ac614c7
        width: "100%",
        marginLeft: "20px",
        marginRight: "20px",
        padding: "20px",
<<<<<<< HEAD
      }}>
=======
      }}
    >
>>>>>>> 300c44529055f712cfa40ece2af3127c8ac614c7
      <Card text1="+254" text2="Some text" />
      <Card text1="+254" text2="Some text" />
    </div>
  );
}

function Card(props) {
  const { text1, text2 } = props;

  return (
<<<<<<< HEAD
    <div className="border-container"
=======
    <div
      className="border-container"
>>>>>>> 300c44529055f712cfa40ece2af3127c8ac614c7
      style={{
        backgroundColor: "rgba(0,0,0,0.4)",
        padding: "20px",
        borderRadius: "20px",
        margin: "10px",
<<<<<<< HEAD
      }}>
      
=======
      }}
    >
>>>>>>> 300c44529055f712cfa40ece2af3127c8ac614c7
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
}

export default ComponentE;
