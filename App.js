import { StatusBar } from "expo-status-bar";
import { useReducer, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const initialValue = 0;

const reducer = (result, action) => {
  switch (action) {
    case "add":
      result = value1 + value2;
      return result;
    case "subtract":
      result = value1 - value2;
      return result;
    case "multiply":
      result = value1 * value2;
      return result;
    case "divide":
      result = value1 / value2;
      return result;
    default:
      throw new Error("Errr");
  }
};

function App() {
  // const [result, setResult] = useState("");
  const [firstValue, setFirstvalue] = useState("");
  const [secondValue, setSecondvalue] = useState("");
  window.value1 = parseInt(firstValue);
  window.value2 = parseInt(secondValue);

  const [result, dispatch] = useReducer(reducer, initialValue);

  const firstInput = useRef();
  const secondInput = useRef();

  // const handleAdd = () => {
  //   const value1 = parseInt(firstValue);
  //   const value2 = parseInt(secondValue);
  //   setResult(value1 + value2);
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Basic Calculator</Text>
      <TextInput
        ref={firstInput}
        value={firstValue}
        style={styles.input}
        placeholder="Enter first value"
        placeholderTextColor={"white"}
        keyboardType="number-pad"
        textAlign="center"
        onChangeText={setFirstvalue}
      />
      <TextInput
        value={secondValue}
        ref={secondInput}
        style={styles.input}
        placeholder="Enter second value"
        placeholderTextColor={"white"}
        keyboardType="numeric"
        onChangeText={setSecondvalue}
      />
      <Text style={styles.answer}>Answer: {result}</Text>
      <View style={styles.btnParent}>
        <TouchableOpacity style={styles.btnConatiner}>
          <Text
            style={styles.btn}
            onPress={() => {
              dispatch("add");
              firstInput.current.clear();
              secondInput.current.clear();
            }}
          >
            Add
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnConatiner}>
          <Text
            style={styles.btn}
            onPress={() => {
              dispatch("subtract");
              firstInput.current.clear();
              secondInput.current.clear();
            }}
          >
            Subtract
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnParent}>
        <TouchableOpacity style={styles.btnConatiner}>
          <Text
            style={styles.btn}
            onPress={() => {
              dispatch("multiply");
              firstInput.current.clear();
              secondInput.current.clear();
            }}
          >
            Multiply
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnConatiner}>
          <Text
            style={styles.btn}
            onPress={() => {
              dispatch("divide");
              firstInput.current.clear();
              secondInput.current.clear();
            }}
          >
            Divide
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  answer: {
    color: "white",
    fontSize: 30,
  },
  btn: {
    backgroundColor: "pink",
    padding: 20,
    borderRadius: 10,
  },
  btnConatiner: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5,
  },
  btnParent: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, .45)",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 30,
    marginTop: 100,
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, .3)",
    padding: 10,
    borderRadius: 7,
    width: "80%",
    textAlign: "center",
    margin: 20,
    color: "white",
  },
});

export default App;
