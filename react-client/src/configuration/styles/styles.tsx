export const styles = {
    flexColumnCenter: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    flexRowCenter: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    mainLeftMenu: {
        // background: "red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"
    },
    mainRightMenu: {
        // background: "blue",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    basicCardColumn: {
        backgroundColor: "#2249C4",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        minWidth: "50%",
        minHeight: "50%",
        padding: "1em"
    },
    listCardContainer: {
        padding: "1em",
        flexWrap: "wrap",
        gap: "2em",
        display: "flex",
        flexDirection: "row",
    },
    usersCard: {
        padding: "1em",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1em",
        weight: "boldest",
        maxWidth: "50px",
        height: "fit-content",
        borderRadius: "10px",
        color: "black",
        fontFamily: "Montserrat",
        "&:hover":{
            transform: "scale(1.1)",
            cursor: "pointer"
        }
    }

}