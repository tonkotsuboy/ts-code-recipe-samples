type DateParams = ConstructorParameters<typeof Date>;
// [value?: string | number | Date]

const args: DateParams = ["2024-01-01"];
const d = new Date(...args);
console.log(d.toISOString());
