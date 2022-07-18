interface VipSettings {
    mode: "add" | "remove";
    //TODO: Add a setting entry on the settings page to have people immune to VIP removal
    target: "redeemer" | "redeemers_entry" | "random" | "chatter";
    //Make better names, but..
    //Redeemer: Add/Remove the person that redeemed the reward
    //redeemers_entry: Add/Remove the chatter that he redeemer entered
    //random: Add random chatter currently in chat, or remove random VIP from the list of VIPS
    //Chatter: User must enter in username
    target_chatter: "";
}

interface ModeratorSettings {
    mode: "add" | "remove";
    //TODO: Add a setting entry on the settings page to have people immune to VIP removal
    target: "redeemer" | "redeemers_entry" | "random" | "chatter";
    //Make better names, but..
    //Redeemer: Add/Remove the person that redeemed the reward
    //redeemers_entry: Add/Remove the chatter that he redeemer entered
    //random: Add random chatter currently in chat, or remove random VIP from the list of VIPS
    //Chatter: User must enter in username
    target_chatter: "";
}

// random a number between x and y, pick the number
//  User redeems reward
//     => Timeout feature is found
//         => Modifier is found
//             => Modifier is Random Number
//                 => Roll user preference modifier (1-10)
//                     => User entered 5
//                     => Backend rolled 7
//                         => Send chat message
//                             => "Better luck next time! I rolled a 7!"

// chance that x fulfills
// coin flip
// roll dice
// random a number between x and y, pick the number
// The idea is a modifier will always return true of false

//Modifier ideas
//Controls if something will run
//Change the way something will run

interface Modifier {
    id: string;
}
