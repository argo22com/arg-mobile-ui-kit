import {View} from "react-native";
import {ItemList} from "@argo22/mobile-ui-kit";
import {BatteryChargingIcon, BatteryFullIcon, Droplet, Gauge, Goal, Pickaxe, Ruler} from "lucide-react-native";

export const ItemListExample = () => {
    return (
        <View
            style={{
                gap: 16,
            }}
        >
            <ItemList
                items={[
                    {left: {value: "Speed", icon: <Gauge color={"lightblue"}/>}, right: "0 km/h"},
                    {
                        left: {
                            value: "Distance travelled",
                            icon: <Ruler color={"lightblue"}/>,
                            disabled: true
                        },
                        right: {value: "0 m", disabled: true}
                    },
                    {left: {value: "Target", icon: <Goal color={"lightblue"}/>}, right: "Not set"},
                ]}
            />
            <ItemList
                items={[
                    {left: {value: "Battery", icon: <BatteryFullIcon color={"lightblue"}/>}, right: "55 %"},
                    {
                        left: {
                            value: "Battery charging state",
                            icon: <BatteryChargingIcon color={"lightblue"}/>,
                            disabled: true
                        },
                        right: {value: "Main charging", disabled: true}
                    },
                ]}
            />
            <ItemList
                items={[
                    {left: {value: "Tool", icon: <Pickaxe color={"lightblue"}/>}, right: "Shower head"},
                    {
                        left: {
                            value: "Tool operation mode",
                            icon: <Droplet color={"lightblue"}/>,
                            disabled: true
                        },
                        right: {value: "Running program with tool", disabled: true}
                    },
                ]}
            />
        </View>
    );
};
