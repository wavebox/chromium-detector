/**
 * @param v: value to check
 * @return true if the value is of type function
 */
const isFunction = (v) => {
  return (
    typeof (v) === 'function' &&
    typeof (v.toString) === 'function' &&
    v.toString().includes('[native code]')
  )
}

/**
 * @param v: value to check
 * @return true if the value is of type object
 */
const isObject = (v) => typeof (v) === 'object'

/**
 * @param name: the name of the css property
 * @return true if the css property is present
 */
const supportsCSSProp = (name) => document.createElement('div').style[name] !== undefined

/**
 * @param name: the name of the css property
 * @param value: the css property value
 * @return true if the css value could be set
 */
const supportsCSSValue = (name, value) => {
  const $el = document.createElement('div')
  $el.style[name] = value
  return $el.style[name] === value
}

/**
 * @param query: the css query to check
 * @return true if the css query is supported
 */
const supportsCSSQuery = (query) => {
  try {
    document.querySelector(query)
    return true
  } catch (ex) {
    return false
  }
}

// https://chromestatus.com/features
const descriptors = {
  90: {
    releaseDate: 'Pre-release',
    isPreRelease: true,
    tests: [
      {
        url: 'https://chromestatus.com/feature/5638444178997248',
        name: 'Add support for CSS properties "overflow: clip" and "overflow-clip-margin"',
        test: () => supportsCSSValue('overflow', 'clip')
      },
      {
        url: 'https://chromestatus.com/feature/5741884322349056',
        name: 'Return empty for navigator.plugins and navigator.mimeTypes',
        test: () => window.navigator.plugins.length === 0
      },
      {
        url: 'https://chromestatus.com/feature/5737185317748736',
        name: 'Support specifying width/height on <source> elements for <picture>',
        test: () => document.createElement('source').width !== undefined
      }
    ]
  },
  89: {
    releaseDate: '2021-03-02',
    tests: [
      {
        url: 'https://chromestatus.com/feature/5172464636133376',
        name: 'WebHID support',
        test: () => isObject(window.navigator.hid)
      },
      {
        url: 'https://chromestatus.com/feature/6577673212002304',
        name: 'Web Serial API',
        optional: true, // Brave doesn't implement this
        test: () => isObject(window.navigator.serial)
      },
      {
        url: 'https://chromestatus.com/feature/5685965186138112',
        name: 'performance.measureUserAgentSpecificMemory()',
        test: () => isFunction(window.performance.measureUserAgentSpecificMemory)
      }
    ]
  },
  88: {
    releaseDate: '2021-01-19',
    tests: [
      {
        url: 'https://chromestatus.com/feature/5445716612743168',
        name: 'CSS Selectors 4 Pseudo-Classes :is(), :where()',
        test: () => supportsCSSQuery(':where(div)')
      },
      {
        url: 'https://chromestatus.com/feature/5738050678161408',
        name: 'CSS aspect-ratio property',
        test: () => supportsCSSProp('aspectRatio')
      }
    ]
  },
  87: {
    releaseDate: '2020-11-17',
    tests: [
      {
        url: 'https://chromestatus.com/feature/6243382101803008',
        name: 'Atomics.waitAsync',
        test: () => isFunction(Atomics.waitAsync)
      },
      {
        url: 'https://chromestatus.com/feature/5658847691669504',
        name: 'Cookie Store API',
        test: () => isObject(window.cookieStore)
      },
      {
        url: 'https://chromestatus.com/features/5719830432841728',
        name: 'Is-Input-Pending',
        test: () => isFunction(window.navigator.scheduling.isInputPending)
      },
      {
        url: 'https://chromestatus.com/feature/5747636764147712',
        name: 'text-decoration-thickness',
        test: () => supportsCSSProp('textDecorationThickness')
      }
    ]
  },
  86: {
    releaseDate: '2020-10-06',
    tests: [
      {
        url: 'https://chromestatus.com/feature/6710566854852608',
        name: 'CSS ::marker pseudo-element',
        test: () => supportsCSSQuery('::marker')
      },
      {
        url: 'https://chromestatus.com/feature/5823526732824576',
        name: 'CSS Selectors 4 Pseudo-Class :focus-visible',
        test: () => supportsCSSQuery(':focus-visible')
      },
      {
        url: 'https://chromestatus.com/feature/6284708426022912',
        name: 'File System Access',
        optional: true, // Brave doesn't implement this
        test: () => isFunction(window.showOpenFilePicker)
      },
      {
        url: 'https://chromestatus.com/feature/5742134990733312',
        name: 'HTMLMediaElement.preservesPitch',
        test: () => document.createElement('video').preservesPitch !== undefined
      },
      {
        url: 'https://chromestatus.com/feature/6143552666992640',
        name: 'ParentNode.replaceChildren() Method',
        test: () => isFunction(document.body.replaceChildren)
      }
    ]
  },
  85: {
    releaseDate: '2020-08-25',
    tests: [
      {
        url: 'https://chromestatus.com/feature/4613920211861504',
        name: 'CSS content-visibility property',
        test: () => supportsCSSProp('contentVisibility')
      },
      {
        url: 'https://chromestatus.com/feature/4688138070917120',
        name: 'CSS counter-set',
        test: () => supportsCSSProp('counterSet')
      },
      {
        url: 'https://chromestatus.com/feature/5574922384441344',
        name: 'Promise.any and AggregateError',
        test: () => isFunction(Promise.any)
      },
      {
        url: 'https://chromestatus.com/feature/6040389083463680',
        name: 'String.prototype.replaceAll',
        test: () => isFunction(''.replaceAll)
      }
    ]
  },
  84: {
    releaseDate: '2020-07-14',
    tests: [
      {
        url: 'https://chromestatus.com/feature/5892186633666560',
        name: 'JavaScript weak references',
        test: () => isFunction(window.WeakRef)
      },
      {
        url: 'https://chromestatus.com/feature/4636879949398016',
        name: 'Screen Wake Lock API',
        test: () => isObject(window.navigator.wakeLock)
      },
      {
        url: 'https://chromestatus.com/feature/4715298156445696',
        name: 'Unprefixed appearance CSS property',
        test: () => supportsCSSProp('appearance')
      },
      {
        url: 'https://chromestatus.com/feature/6249925820022784',
        name: 'Unprefixed ruby-position CSS property',
        test: () => supportsCSSProp('rubyPosition')
      },
      {
        url: 'https://chromestatus.com/feature/5644990145363968',
        name: 'revert keyword',
        test: () => supportsCSSValue('display', 'revert')
      }
    ]
  },
  83: {
    releaseDate: '2020-05-19',
    tests: [
      {
        url: 'https://chromestatus.com/feature/4757990523535360',
        name: 'Barcode Detection API',
        optional: true, // Some electron instances don't implement this
        test: () => isFunction(window.BarcodeDetector)
      },
      {
        url: 'https://chromestatus.com/feature/5913213940006912',
        name: 'auto keyword for -webkit-appearance CSS property CSS',
        test: () => supportsCSSValue('webkitAppearance', 'auto')
      },
      {
        url: 'https://chromestatus.com/feature/5737051062272000',
        name: 'CSS contain-intrinsic-size',
        test: () => supportsCSSProp('containIntrinsicSize')
      },
      {
        url: 'https://chromestatus.com/feature/6335927192387584',
        name: 'HTMLVideoElement.requestVideoFrameCallback()',
        test: () => isFunction(document.createElement('video').requestVideoFrameCallback)
      }
    ]
  },
  81: {
    releaseDate: '2020-04-07',
    tests: [
      {
        url: 'https://chromestatus.com/feature/4965112605573120',
        name: 'Intl.DisplayNames',
        test: () => isFunction(window.Intl.DisplayNames)
      },
      {
        url: 'https://chromestatus.com/feature/5440098147500032',
        name: 'Streams API: WritableStream close()',
        test: () => isFunction(new window.WritableStream().close)
      },
      {
        url: 'https://chromestatus.com/feature/6313474512650240',
        name: 'Support for CSS image-orientation property',
        test: () => supportsCSSProp('imageOrientation')
      }
    ]
  },
  80: {
    releaseDate: '2020-02-04',
    tests: [
      {
        url: 'https://chromestatus.com/feature/5668660729348096',
        name: 'line-break: anywhere',
        test: () => supportsCSSValue('lineBreak', 'anywhere')
      },
      {
        url: 'https://chromestatus.com/feature/5687791428042752',
        name: 'HTMLVideoElement.getVideoPlaybackQuality()',
        test: () => isFunction(document.createElement('video').getVideoPlaybackQuality)
      },
      {
        url: 'https://chromestatus.com/feature/5126089347170304',
        name: 'overflow-wrap: anywhere',
        test: () => supportsCSSValue('overflowWrap', 'anywhere')
      }
    ]
  },
  79: {
    releaseDate: '2019-12-10',
    tests: [
      {
        url: 'https://chromestatus.com/feature/5714277878988800',
        name: 'CSS min(), max() and clamp()',
        test: () => supportsCSSValue('height', 'min(1px, 10px)')
      },
      {
        url: 'https://chromestatus.com/feature/5685958032752640',
        name: 'font-optical-sizing',
        test: () => supportsCSSProp('fontOpticalSizing')
      }
    ]
  }
}

const getBrowserInfo = () => {
  const versions = Object.keys(descriptors)
    .sort((a, b) => parseInt(a) - parseInt(b))
  const results = versions.reduce((acc, k) => {
    const { tests, releaseDate, isPreRelease } = descriptors[k]
    acc[k] = {
      pass: 0,
      result: true,
      tests: [],
      releaseDate,
      isPreRelease: isPreRelease === true
    }
    tests.forEach(({ url, name, test, optional }) => {
      const result = {
        url,
        name,
        optional: optional === true
      }
      try {
        result.test = test()
      } catch (ex) {
        result.test = false
      }
      if (result.test) {
        acc[k].pass++
      } else {
        if (optional !== true) {
          acc[k].result = false
        }
      }
      acc[k].tests.push(result)
    })
    return acc
  }, {})

  const version = versions.find((version, index) => {
    if (index === versions.length - 1) { return true }
    switch (results[versions[index + 1]].result) {
      case false: return true
      default: return false
    }
  })
  const hasInexactMatches = versions.some((version) => {
    if (results[version].pass === 0) { return false }
    if (results[version].pass === results[version].tests.length) { return false }
    if (results[version].pass === results[version].tests.length - 1) { return false }
    return true
  })

  return {
    version: version || 'unknown',
    couldBeOlder: version === versions[0],
    couldBeNewer: version === versions[versions.length - 1],
    tests: results,
    isChromium: !hasInexactMatches
  }
}

export default {
  getBrowserInfo
}
export {
  getBrowserInfo
}
