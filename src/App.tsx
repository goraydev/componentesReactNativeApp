import './gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {SwitchScreen} from './presentation/screen/switches/SwitchScreen';
import {StackNavigator} from './navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
