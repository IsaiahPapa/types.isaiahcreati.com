import { Feature } from "../../rewards/Feature";

interface ControllerInterface {
    name: string;
}

//Redeemer has to enter in the correct guess. Either correct string, or correct number.
interface GuessExactController extends ControllerInterface {
    name: "guess";
    correct: string | number;
}

//Redeemer has to enter in correct number. Backend will roll the random number between min and max
interface RangeController extends ControllerInterface {
    name: "range";
    min: number;
    max: number;
}

//Redeemer has to enter in heads or tails. Backend will decide what the correct answer.
interface CoinFlipController extends ControllerInterface {
    name: "coin";
}

type Controllers = RangeController | CoinFlipController | GuessExactController;

//New Feature Interface
interface FeatureInterface {
    id: string;
    type: string;
    settings: any;
    modifiers?: Modifier[];
}

interface Modifier {
    target: Feature["id"];
    handler: Controllers | { name: "SomeOtherTypeOFModififer" };
}
