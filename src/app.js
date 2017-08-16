import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "quiz_title": {
        "textAlign": "center"
    },
    "answer-input": {
        "marginRight": 10
    },
    "statement-container": {
        "marginBottom": 10
    },
    "statement-label": {
        "fontSize": 14,
        "fontWeight": "100"
    }
});