import {View} from "react-native";

import {Loader, Typography} from "@argo22/mobile-ui-kit";

export const LoaderExample = () => {
    return (
        <View
            style={{
                flexDirection: "row",
                gap: 16,
                flexWrap: "wrap",
                backgroundColor: "white",
                padding: 5,
            }}
        >
            <View style={{padding: 20, flexDirection: "row", alignItems: "center", gap: 10}}>
                <Typography>Loading</Typography>
                <Loader color={"black"}/>
            </View>
            <View>
                <Loader color={"black"} size={20}/>
                <Loader color={"black"} size={30}/>
                <Loader color={"black"} size={40}/>
            </View>
        </View>
    );
};
