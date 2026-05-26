async function useTypedModule() {
  const utils = await import("./utils");

  console.log(utils.formatMessage("型安全な動的import"));
  console.log(utils.getCurrentTime());
  console.log(utils.version);

  const calc = new utils.Calculator();
  console.log(calc.add(5, 3));
}

useTypedModule();
