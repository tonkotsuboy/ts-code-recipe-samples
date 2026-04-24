type ErrorParams = ConstructorParameters<typeof Error>;
// [message?: string]

const args: ErrorParams = ["Something went wrong"];
const err = new Error(...args);
console.log(err.message);
