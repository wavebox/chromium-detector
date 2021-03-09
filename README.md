# chromium-detector
Use feature detection to work out the running version of Chromium. No more UserAgent hackery!

## Demo
Head over to [https://chromiumchecker.com](https://chromiumchecker.com).

## Install

```bash
npm install chromium-detector
```

## Features

- Uses a known feature list to work out the running version of Chromium
- Doesn't need to use the UserAgent or anything else that could be spoofed
- Provides info on each feature detected for more comprehensive results

## Usage

```javascript
var chromiumDetector = require('chromium-detector')
console.log(chromiumDetector.getBrowserInfo())
/*
{
  isChromium: true,
  version: '89',
  couldBeOlder: false,
  couldBeNewer: false,
  tests: {
    "89": {
      pass: 0,
      result: true,
      tests: [...],
      releaseDate: "2021-03-02",
      isPreRelease: false
    }
  }
}
*/
```

## API

### getBrowserInfo()
Returns: object with the following...

* **isChromium**: `Boolean` true/false whether this looks to be Chromium
* **version**: `String` the chromium milestone version (e.g. 89) or 'unknown'
* **couldBeOlder**: `Boolean` true/false if the detected version of Chromium could be older than what the library can detect (i.e. all tests failed)
* **couldBeNewer**: `Boolean` true/false if the detected version of Chromium could be newer than what the library can detect (i.e. all tests passed)
* **tests**: `Object` an object of test results for each version
