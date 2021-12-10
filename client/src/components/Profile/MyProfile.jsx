import React, { useState, useEffect, useRef } from "react";
import { Button, Container, Card, CardHeader, Paper } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import BuildIcon from "@material-ui/icons/Build";

const MyProfile = ({ current }) => {
  const [isContractor, setIsContractor] = useState(true);

  if (!isContractor) {
    return (
      <Paper style={{ display: "flex", justifyContent: "center" }}>
        <CardHeader></CardHeader>
        <div
          className="profileLeft"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <PersonIcon fontSize="large" />
          <div>Member since 12-2021</div>
        </div>
        <div
          className="profileRight"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "spaceAround",
            alignItems: "center",
          }}
        >
          <Button color="secondary">Edit Profile</Button>
          <h2>{current?.firstName}</h2>
          <h3>{current?.lastName}</h3>
        </div>
      </Paper>
    );
  } else {
    return (
      <Paper>
        <CardHeader></CardHeader>
        <div className="profileLeft">
          <BuildIcon />
          <div>*****</div>
          <Card>
            Tools:
            <Button color="secondary">Add</Button>
            <Card>Map tools here</Card>
          </Card>
          <div>Member since 12-2021</div>
        </div>
        <div className="profileRight">
          <Button color="secondary">Edit Profile</Button>
          <h2>Username/Company Name</h2>
          <h4>Company contact email</h4>
          <ul className="specialties">
            <li>SPECIALTY</li>
            <li>SPECIALTY</li>
          </ul>
          <Card>
            Certifications:
            <Button color="secondary">Add</Button>
            <Card>Map Certs here</Card>
          </Card>
        </div>
      </Paper>
    );
  }
};

export default MyProfile;
