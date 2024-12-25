module.exports = {

    name:{
        padding:5,
        margin:17,
    },
    nameInner:{
        color:'grey'
    },

    main_screen:{
        marginTop:90,
        marginBottom:70,
        display:'flex',
        flexDirection:'column',
        backgroundColor:'white',
        alignItems:'center',
        width:'100%',
        height:'100%'
    },

    main_screen_display:{
        elevation: 10,
        width:'95%',
        backgroundColor:'grey',
        borderRadius:10,
        display:'flex',
        marginBottom:10,
        padding:10,
    },

    main_screen_display_text:
    {
        fontSize:50,
        textAlign:'right',
        color:'white'
    },

    main_screen_keypad:{
        width:'100%',
        height:'70%',
        display:'flex',
        // flexDirection:'row'
        backgroundColor:'grey'
    },

    main_screen_keypad_row:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'white',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
    },

    btn_outer:{
        width:90,
        height:90,
        backgroundColor:'#ecf0f1',
        elevation:10,
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        paddingLeft: 12,
    },

    bg_button:{
        backgroundColor:'#ecf0f1',
        color:'red',
        fontSize:30,
    },

    //ye wala
    btn1_outer:{
        width:90,
        height:90,
        backgroundColor:'red',
        borderRadius:90,
        elevation:10,
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:0.5,
    },

    bg1_button:{
        // backgroundColor:'#FF5757',
        color:'white',
        fontSize:30,
        fontWeight:'bold',
    },
    btn2_outer:{
        width:50,
        height:90,
        backgroundColor:'grey',
        borderRadius:90,
        elevation:10,
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center',
        gap:10
    },

    bg2_button:{
        backgroundColor:'grey',
        color:'white',
        fontSize:30,
        fontWeight:'bold'
    },

    btn3_outer:{
        width:50,
        height:90,
        backgroundColor:'#38E038',
        borderRadius:90,
        elevation:10,
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center',
        gap:10
    },

    bg3_button:{
        backgroundColor:'#38E038',
        color:'white',
        fontSize:30,
        fontWeight:'bold'
    }
}