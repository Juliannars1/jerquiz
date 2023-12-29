import {createDrawerNavigator} from '@react-navigation/drawer';
import DetailsScreen from '../screens/DetailsScreen';

const Drawer = createDrawerNavigator();

export const NavigationDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Details" component={DetailsScreen} />
    </Drawer.Navigator>
  );
};
