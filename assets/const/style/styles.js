import { StyleSheet } from "react-native";

export const headerStyle = StyleSheet.create({
    header: {
        paddingTop: 70,
        height: 200,
        backgroundColor: "#5AB0FF",
        height: 80,
        position: 'relative',
        flexDirection: 'column'
    },
    buttonHeader: {
        elevation: 8,
        backgroundColor: "#ffffff",
        borderRadius: 13,
        borderColor: "#15CDCB",
        marginHorizontal: 1,
        height: 45,
        width: 45,
        left: 11.0615234375,
        position: 'absolute',
        bottom: 5,
    },
    logoHeader: {
        position: 'absolute',
        width: 40,
        height: 40,
        left: 80,
        bottom: 5,
    },
    nameHeader: {
        position: 'absolute',
        width: 180,
        height: 38,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 28,
        left: 125,
        lineHeight: 48,
        bottom: 12,
        color: '#FFFFFF'
    },
    searchHeader: {
        position: 'absolute',
        width: 32,
        height: 32,
        left: 310,
        justifyContent: 'center',
        fontSize: 30,
        bottom: 0,
        color: '#ffffff'
    },
    buttonLine_1: {
        borderRadius: 10,
        top: '20%',
        borderBottomColor: '#FF5151',
        borderBottomWidth: 3,
        width: '80%',
        alignSelf: 'center',
    },
    buttonLine_2: {
        borderRadius: 10,
        top: '40%' ,
        borderBottomColor: '#8FE08D',
        borderBottomWidth: 3,
        width: '80%',
        alignSelf: 'center'
    },
    buttonLine_3: {
        borderRadius: 10,
        top: '60%' ,
        borderBottomColor: '#FF5151',
        borderBottomWidth: 3,
        width: '80%',
        alignSelf: 'center'
    },
});

export const bottomStyle = StyleSheet.create({
    bottom: {
        paddingTop: 50,
        height: 80,
        backgroundColor: "#5AB0FF",
        flexDirection: 'column',
    },
    textBottom: {
        position: 'absolute',
        width: 120,
        height: 20,
        left: 6,
        top: '20%',
        textAlign: 'left',
        alignItems:'center',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 19,
        color: '#fff',
    },
    button: {
        width: 45,
        height: 42,
        bottom: 33, 
        left: '100%',
        marginRight: 10
    },
    button_2: {
        width: 150,
        left: 0,
        bottom: 30,
        marginRight: 10,
        },
    iconBottom: {
        fontSize: 30,
        margin: 6,
        textAlign: 'right',
        color: '#fff',
    },
    iconTg: {
        fontSize: 40,
        margin: 6,
        textAlign: 'right',
        color: '#fff',
        bottom: 1,
    }
});

export const homeStyle = StyleSheet.create({

});

export const newsStyle = StyleSheet.create({
    newsView:{
        height: 250,
        flexDirection: 'column'
    },
    imageNews: {
        height: 240,
        width: '85%',
        marginRight: 5,
        left: 2,
        top: 2
    },
    textNews: {
        position: 'absolute',
        width: 250.10,
        height: 75.56,
        left: 6,
        top: 140,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 19,
        color: '#FFFFFF',
    },
    textNews1: {
        position: 'absolute',
        width: 250.10,
        height: 75.56,
        left: 6,
        top: 159,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 19,
        color: '#FFFFFF',
    },
    timeText: {
        position: 'absolute',
        width: 250.10,
        height: 75.56,
        left: 6,
        top: 218,

        fontStyle: 'normal',
        fontSize: 10,
        color: '#fff',
    },
    reklamaNews: {
        height: 240,
        width: '51%',
        bottom: 238,
        left: '73.5%'
    },
});

export const allNewsStyle = StyleSheet.create({
    allNewsView: {
        width: '98%',
        height: 96,
        left: 3,
        borderWidth: 1,
        borderColor:'#CDCDCD',
        borderRadius: 15,
        marginBottom: 10
    },
    imageAllNews: {
        width: 133,
        height: 96,
        bottom: 1,
        left: -1,
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15
    },
    textAllNews: {
        position: 'absolute',
        width: 180.18,
        height: 41,
        left: 146.7,
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 19,
        color: '#000000'
    },
    dateAllNews: {
        position: 'absolute',
        width: 103.47,
        height: 16,
        left: 146.7,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 10,
        lineHeight: 14,
        top: 75
    }
});

export const articleStyle = StyleSheet.create ({
    view:{
        flexDirection: 'row',
        width: 10000
    },
    text:{
        fontSize: 12,
        margin: 10
    },
    viewingText: {
        fontSize: 12,
        margin: 10,
        textAlign: 'right',
        fontWeight: 'bold',
        left: 150
    },
    iconView: {
        margin: 10,
        textAlign: 'right',
        left: 160
    },
    iconText:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    titleText: {
        fontSize: 20,
        marginTop: 5,
        fontWeight: 'bold',
        lineHeight: 30,
        width: 420, 
        height: 94,
        left: 6,
    },
    articleSubtext: {
        fontSize: 12,
        top: 10,
        lineHeight: 18,
        left: 6,
        height: 45
    },
    articleImage: {
        width: 200,
        height: 155.23,
        left: 6,
        marginTop: 10,
        bottom: 1,
    },
    articleText1: {
        width: 354,
        height: 280,
        left: 8,
        top: 2,
        fontSize: 14,
        lineHeight: 21,
        color: '#000000',
        
    },
    articleText: {
        position: 'absolute',
        width: 180,
        height: 300,
        left: 210,
        marginRight: 5,
        fontSize: 14,
        lineHeight: 21,
        color: '#000000',
        
    },
    commText: {
        fontWeight: 'bold',
        fontSize: 16,
        margin: 10,
        bottom: 30,
    },
    commText1: {
        fontWeight: 'bold',
        fontSize: 13,
        margin: 10,
        color: '#D10303',
        bottom: 45
    },
    commText2: {
        fontWeight: 'bold',
        fontSize: 13,
        margin: 10,
        bottom: 45
    },
    commView: {
        borderColor: '#5AB0FF', 
        borderTopLeftRadius: 15, 
        borderTopRightRadius: 15, 
        borderWidth: 3, 
        height: 50, 
        width: '97%', 
        marginLeft: 5, 
        marginRight: 5, 
        bottom: 50, 
        flexDirection: 'row'
    },
    commText3: {
        margin: 7, 
        width: 288
    },
    iconComm: {
        fontSize: 20, 
        textAlign:'right', 
        margin: 11
    },
    commView1: {
        borderColor: '#5AB0FF', 
        borderTopWidth: 0, 
        borderBottomLeftRadius: 15, 
        borderBottomRightRadius: 15, 
        borderWidth: 3, 
        height: 67, 
        width: '97%', 
        marginLeft: 5, 
        marginRight: 5, 
        bottom: 50
    },
    name: {
        width: 65, 
        height: 15, 
        left: 53, 
        fontWeight: '700', 
        fontSize: 12, 
        lineHeight: 18, 
        color: '#000000',
    },
    commText4: {
        width: '100%', 
        height: 20, 
        left: 53, 
        fontSize: 14, 
        lineHeight: 18, 
        color: '#000000',
    },
    timeText: {
        width: '100%', 
        height: 20, 
        left: 53, 
        fontSize: 11, 
        lineHeight: 18, 
        color: '#A3A3A3', 
        marginTop: 3
    }
});

export const profileStyle = StyleSheet.create({
    avatarView: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15, 
        borderColor: '#5AB0FF', 
        borderWidth: 3, 
        width: '100%', 
        height: 160
    },
    avatar: {
        width: 100, 
        height: 100, 
        borderWidth: 3, 
        borderRadius: 100, 
        top: '3%', 
        marginLeft: '37%',
        borderColor: '#fff'
    },
    avatarImage: {
        width: '100%',
        height: '100%'
    },
    avatarButton: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 33, 
        left: '26%',
        top: '5%',
        backgroundColor: '#5AB0FF',
        borderRadius: 15,
    },
    nameView: {
        borderRadius: 15, 
        borderColor: '#5AB0FF', 
        borderWidth: 3, 
        width: '100%', 
        top: 10, 
        height: 33
    },
    nameText: {
        left: 10,
        top: 3
    },
    registrationView: {
        borderRadius: 15, 
        borderColor: '#5AB0FF',
        borderWidth: 3, 
        width: '100%', 
        top: 18, 
        height: 33, 
        flexDirection: 'row'
    },
    text: {
        left: 10, 
        top: 3
    },
    birthdayView: {
        borderRadius: 15, 
        borderColor: '#5AB0FF', 
        borderWidth: 3, 
        width: '100%', 
        top: 26, 
        height: 33, 
        flexDirection: 'row'
    },
    aboutMyself: {
        borderRadius: 15, 
        borderColor: '#5AB0FF', 
        borderWidth: 3, 
        width: '100%', 
        top: 42, 
        height: 150, 
        flexDirection: 'row', 
        marginBottom: 87
    }
});

export const checkBoxStyle = StyleSheet.create({
    checkBox: {
        left: '-90%', 
        top: '35%'
    },
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: 150,
        marginTop: 5,
        marginHorizontal: 5,
    },
});

export const registrationStyle = StyleSheet.create({
    registrationView: {
        width: '95%', 
        left: 10, 
        alignItems: 'center',
        height: '60%', 
        marginEnd: 20, 
        top: '18%', 
        backgroundColor: '#FFFFFF', 
        borderRadius: 15, 
        elevation: 5
    },
    viewCheckBox: {
      lexDirection: "row", 
      marginBottom: 20,
    },
    textCheckBox: {
        width:'100%', 
        left: '5%', 
        top: '167%', 
        fontSize: 13, 
        fontWeight: 'bold'
    },
    registrationButtonView: {
        top: '15%',
        width: '63%'
    },

});

export const termsOfUseStyle = StyleSheet.create({
    termsOfUseView:  {
        width: '90%', 
        height: '55%', 
        alignSelf: 'center', 
        backgroundColor: '#ffffff', 
        borderRadius: 15, 
        elevation: 5, 
        top: '20%', 
    },
    termsOfUseText: {
        width: 319, 
        height: 36, 
        fontWeight: '700', 
        fontSize: 18, 
        lineHeight: 36, 
        color: '#000000', 
        top: '5%', 
        textAlign: 'center',
        marginBottom: '10%'
    },
    termsOfUseScroll: {
        width: '93%',
        height: '60%', 
        backgroundColor: '#F3F3F3', 
        borderRadius: 15, 
        alignSelf: 'center',
        elevation: 4,
    },
    termsOfUseTxt_h1: {
        color: '#767676', 
        fontSize: 17, 
        width: '90%',
        textAlign: 'left',
        fontWeight: '900', 
        left: '4%', 
        marginBottom: '3%'
    },
    termsOfUseTxt_h2: {
        color: '#767676', 
        fontSize: 15, 
        width: '97%',
        textAlign: 'left', 
        fontWeight: '700', 
        left: '4%'
    },
    termsOfUseTxt_h3: {
        color: '#767676', 
        fontSize: 15, 
        width: '97%',
        textAlign: 'left', 
        left: '4%', 
        marginBottom: '3%'
    },
    termsOfUseButton: {
        top: '11%', 
        backgroundColor: '#F3F3F3', 
        alignSelf: 'center', 
        width: '35%', 
        height: 40, 
        borderRadius: 15, 
        justifyContent: 'center', 
        elevation: 4, 
    },
    termsOfUseButtonText: {
        textAlign: 'center', 
        fontWeight: 'bold'
    },
});

export const authorizationStyle = StyleSheet.create({
    authorizationView: {
        width: '90%', 
        height: '50%',
        top: '30%', 
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        elevation: 5, 
        alignSelf: 'center', 
        alignItems: 'center'
    },
    authorizationButtonView: {
        top: '30%', 
        width: '63%'
    }
});

export const constStyle = StyleSheet.create({
    textInput: {
        top: '10%', 
        width: '85%', 
        backgroundColor: '#F3F3F3', 
        borderRadius: 15, 
        height: 36, 
        elevation: 4, 
        marginBottom: '5%',
        padding: 8
    },
    button: { 
        width: '80%', 
        backgroundColor: '#F3F3F3', 
        borderRadius: 15, 
        height: 34, 
        elevation: 4, 
        marginBottom: '3%', 
        justifyContent: 'center', 
        alignSelf: 'center',
        textAlignVertical: 'center'
    },
    buttonText: {
        textAlign: 'center', 
        fontWeight: '700',
        fontSize: 14, 
        color: '#767676'
    },
    text: {
        alignSelf: 'center', 
        fontSize: 12,
        color: '#767676', 
        fontWeight: '600'
    },
    headerText: {
        textAlign: 'center', 
        top: '5%', 
        fontSize: 20, 
        fontWeight: 'bold',
    }
});

export const feedbackStyle = StyleSheet.create({
    feedbackView: {
        width: '90%', 
        height: '80%',
        alignSelf: 'center', 
        top: '3%', 
        backgroundColor: '#ffffff', 
        elevation: 5, 
        borderRadius: 15,
        alignItems: 'center'
    },
    feedbackTextInput: {
        width: '85%', 
        height: 100, 
        top: "10%", 
        backgroundColor: '#F3F3F3', 
        borderRadius: 15, 
        elevation: 4, 
        textAlignVertical: 'top', 
        padding: 8,
    },
    fileButton: {
        width: '50%',
        backgroundColor: '#F3F3F3', 
        borderRadius: 15, 
        height: 34, 
        elevation: 4, 
        marginBottom: '3%', 
        justifyContent: 'center', 
        alignSelf: 'flex-start', 
        top: '19%', 
        left: '5%', 
        flexDirection: 'row'
    },
    fileButtonIcon: {
        fontSize: 25, 
        textAlignVertical: 'center',
        color: '#767676', 
        right: '20%', 
        fontWeight: '900'
    }, 
    fileButtonText: {
        textAlign: 'center', 
        fontWeight: '700', 
        fontSize: 14, 
        color: '#767676', 
        textAlignVertical:'center', 
        right: '20%'
    },
    sendView:  {
        top: '15%',
        width: '63%'
    },
});

export const menuStyle = StyleSheet.create({
    menuView: {
        borderBottomRightRadius: 15,
        backgroundColor: '#ffffff',
        borderColor: '#FF5151',
        borderRightWidth: 3,
        borderBottomWidth: 3,
        width: '55%',
        height: '37%',
        top: 0,
        left: 0, 
        elevation: 5,
    },
    closeButton: {
        elevation: 8,
        backgroundColor: "#FF5151",
        borderRadius: 13,
        marginHorizontal: 1,
        height: 45,
        width: 45,
        left: 11,
        top: 6,
        bottom: 5,
    },
    menuText: {
        left: '60%',
        top: '5%',
        fontSize: 24
    },
    menuName: {
        flexDirection: 'row',
    },
    buttonLine_1: {
        borderRadius: 10,
        top: '20%',
        borderBottomColor: 'white',
        borderBottomWidth: 3,
        width: '80%',
        alignSelf: 'center',
    },
    buttonLine_2: {
        borderRadius: 10,
        top: '40%' ,
        borderBottomColor: 'white',
        borderBottomWidth: 3,
        width: '80%',
        alignSelf: 'center'
    },
    buttonLine_3: {
        borderRadius: 10,
        top: '60%' ,
        borderBottomColor: 'white',
        borderBottomWidth: 3,
        width: '80%',
        alignSelf: 'center'
    },
    line: {
        top: '5%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    buttonView: {
        marginBottom: '10%'
    },
    button: {
        flexDirection: 'row', 
        top: '10%', 
        left: '40%'
    },
    buttonImage: {
        width: 35, 
        height: 35,
    },
    buttonText:  {
        width: 80, 
        height: 24, 
        fontWeight: '700', 
        fontSize: 20, 
        lineHeight: 24, 
        color: '#000000', 
        left: '30%', 
        top: '3%'
    }

});