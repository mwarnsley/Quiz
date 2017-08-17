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
        "background": "#0099CC",
        "color": "#FFF",
        "fontSize": 45,
        "marginBottom": 40,
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30,
        "textAlign": "center"
    },
    "btnquiz-btn": {
        "background": "#0099CC",
        "color": "#FFF",
        "marginTop": 20
    },
    "btnquiz-btn:hover": {
        "background": "#00688B",
        "cursor": "pointer"
    },
    "question": {
        "fontSize": 16,
        "fontWeight": "bold",
        "marginBottom": 25
    },
    "answer-input": {
        "marginRight": 1,
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "MsAppearance": "none",
        "OAppearance": "none",
        "appearance": "none",
        "position": "relative",
        "top": -4.16667,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "height": 25,
        "width": 25,
        "borderRadius": "50%",
        "border": "1px solid #d7d7d7",
        "WebkitTransition": "all 0.15s ease-out 0s",
        "transition": "all 0.15s ease-out 0s",
        "cursor": "pointer",
        "display": "inline-block",
        "outline": "none",
        "zIndex": 1000
    },
    "answer-input:checked": {
        "background": "#0099CC",
        "border": "1px solid #0099CC"
    },
    "answer-input:checked::before": {
        "position": "absolute",
        "height": 23,
        "width": 23,
        "borderRadius": "50%",
        "content": "''",
        "display": "block",
        "background": "transparent",
        "border": "2px solid white"
    },
    "option-statement": {
        "bottom": 12,
        "position": "relative"
    },
    "statement-container": {
        "marginBottom": 10
    },
    "statement-label": {
        "fontSize": 14,
        "fontWeight": "100"
    },
    "btnquiz-btntry-again": {
        "background": "#FFF",
        "color": "#0099CC"
    },
    "btnquiz-btntry-again:hover": {
        "background": "#00688B",
        "color": "#FFF",
        "cursor": "pointer"
    },
    "score-row": {
        "background": "#0099CC",
        "border": "2px solid #CCC",
        "color": "#FFF",
        "marginTop": 30,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "textAlign": "center",
        "width": "30%"
    },
    "score-title": {
        "fontSize": 28,
        "fontWeight": "bold"
    },
    "score-percentage": {
        "fontSize": 30,
        "fontWeight": "100"
    },
    "right-answers": {
        "fontSize": 22,
        "fontWeight": "100"
    },
    "wrong-answers": {
        "fontSize": 22,
        "fontWeight": "100"
    }
});