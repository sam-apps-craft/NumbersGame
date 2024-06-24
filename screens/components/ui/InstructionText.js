import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";


function InstructionsText ({children, style}) {

    return <Text style={[styles.instructionsText, style]}>{children}</Text>;
}

export default InstructionsText;

const styles = StyleSheet.create ({
  instructionsText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
    
  },
});