import {useState} from 'react';
import {CustomView} from '../../components/ui/CustomView';
import {CustomSwitch} from '../../components/ui/CustomSwitch';
import {Separator} from '../../components/ui/Separator';

export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <CustomView>
      {/* <CustomSwitch
        text="Switch 1"
        isOn={isEnabled}
        onValueChange={toggleSwitch}
      /> */}
      {/* <Switch
        trackColor={{false: '#767577', true: 'white'}}
        thumbColor={isEnabled ? colors.primary : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}

      <CustomSwitch
        text="Activo"
        isOn={state.isActive}
        onValueChange={value => setState({...state, isActive: value})}
      />

      <Separator styles={{height: 2, backgroundColor: 'black'}} />
      <CustomSwitch
        text="Hungry"
        isOn={state.isHungry}
        onValueChange={value => setState({...state, isHungry: value})}
      />
      <Separator styles={{height: 3}} />
      <CustomSwitch
        text="Happy"
        isOn={state.isHappy}
        onValueChange={value => setState({...state, isHappy: value})}
      />
    </CustomView>
  );
};
