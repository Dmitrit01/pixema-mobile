import { View } from "react-native"
import { TabStack } from "../navigation/tabNavigator/tabNavigator";

export const HomePage = () => {
    return (
        <View style={{flex:1}}>
            <TabStack/>
        </View>
    );
};