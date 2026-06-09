type Direction = "Up" | "Down" | "Left" | "Right";
type NormalizedDirection = Lowercase<Direction>;
// "up" | "down" | "left" | "right"

const myDirection: NormalizedDirection = "up"; // OK
const myDirectionError: NormalizedDirection = "Up"; // エラー

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAIglgJwgY2HA9gOygXigIgFUx8oAfAmdAd01IvwBkIAzYeggJTgHMALdgG4AUKEhQAcugQBbAIYAbOAC8IAE3hJUGbHkY0ICZHIDOEADyaUaLAD4RAegcEAriXIE1NOh-wLW7L4IvAL4wsLIWCbAUDIgVtpYAFyS0vJKqhqI1jq4riSCUE5QAPIA0hFRMXEJNpgAoggI0ilSsooq6rW5eEQFRc6AFQyAlwyAPwxAA
