import React from "react";
import { View, Text, Button } from "react-native";
import { useState } from "react";

const Greeting = () => {
  var firstMess = "Hello!";
  var firstBtnMess = "Say GoodBye";
  const [message, setMessage] = useState(firstMess);
  const [buttonMess, setButtonMess] = useState(firstBtnMess);

  const ChangeMessage = () => {
    if (message == firstMess) {
      setMessage("GoodBye!!!");
      setButtonMess("Greeting");
    } else {
      setMessage(firstMess);
      setButtonMess(firstBtnMess);
    }
  };

  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{message}</Text>
      <Button title={buttonMess} onPress={ChangeMessage} />
    </View>
  );
};

export default Greeting;
