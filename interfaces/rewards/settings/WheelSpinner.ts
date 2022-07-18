import { SettingPosition, SettingSize } from "../../alerts/index";

interface WheelSpinnerListItem {
    id: string,
    weight: number;
}
//Post Launch
export interface WheelSpinnerSettings {
    //List is wheel entries
    list: WheelSpinnerListItem[];
    position: SettingPosition;
    size: SettingSize;
}