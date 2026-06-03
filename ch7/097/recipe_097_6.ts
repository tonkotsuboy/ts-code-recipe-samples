class User {
  readonly name: string;

  constructor(name: string) {
    this.name = name; // コンストラクター内でのみ初期化可能
  }

  changeName(newName: string) {
    this.name = newName; // エラー
  }
}

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAECqEFMBO0DeAoa0kLAEwHsA7EAT2iLAFsEAuaCAFyQEsiBzAbnU2mGKZIArsEYEkACko16gtuwCUaXlkYALFhAB00hNAC8Fagk7QA9GeiBmhkDPDIE6GQBMMgS4ZA9QyB+hkA-DIFDFQOYMgOwZAfwZAXCVAfHNANGVAe+VAX4DeAF8eLGA1MA4EADljKQQAdwyZBmZ5JQwsVQ1tXQMKHLyTc0tACoYnDzj0WKA
