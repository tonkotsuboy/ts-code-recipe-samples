class BaseConfig {
  static endpoint = "https://api.example.com";
}

class DevConfig extends BaseConfig {}

class TestConfig extends BaseConfig {
  static endpoint = "http://localhost:3000";
}

console.log(DevConfig.endpoint); // 出力: https://api.example.com
console.log(TestConfig.endpoint); // 出力: http://localhost:3000
