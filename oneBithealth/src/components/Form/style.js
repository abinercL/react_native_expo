import { StyleSheet } from "react-native";




const styles = StyleSheet.create({
    FormContext: {
        flex: 1,
        marginTop: 30,
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 30,
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
        paddingTop: 20,
    },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "ff0043",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    textbuttonCalculator: {
        fontSize: 20,
        color: "#ffffff",
        justifyContent: "auto"
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        paddingtop: "14",
        backgroundColor: "#ff0043",
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },
    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    }

});

export default styles